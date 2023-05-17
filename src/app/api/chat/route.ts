import { NextResponse } from "next/server";
import Keys from "../keys";
import { ParsedEvent, ReconnectInterval, createParser } from "eventsource-parser";
const key: string = Keys.OpenAI

export const runtime = 'edge';

interface ChatType {
  role: string,
  content: string,
  name?: string
}

async function chatFetch(chatList: ChatType[], stream: boolean) {

  const response = await fetch("https://api.openai.com/v1/chat/completions",
    {
      "method": "POST",
      "headers": {
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      "body": JSON.stringify(
        {
          "model": "gpt-3.5-turbo",
          // "max_tokens": 10,
          "stream": stream,
          "messages": [
            { "role": "system", "content": "I am a voice assistant that converts user speech to text and sends it silently. This conversation is facilitated through a website developed by software engineer Harunluk. My responses are also summarized and returned as voice to the user. Please try to keep your responses concise and to the point." },
            ...chatList]
        }
      )
    }).catch(error => {
      return null
    })

  if (!response) {
    return ""
  }
  if (stream === true) {
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    let counter = 0;
    const stream = new ReadableStream({
      async start(controller) {
        function onParse(event: ParsedEvent | ReconnectInterval) {
          if (event.type === "event") {
            const data = event.data;
            if (data === "[DONE]") {
              controller.close();
              return;
            }
            try {
              const json = JSON.parse(data);

              const text = json.choices[0].delta?.content;
              if (counter < 2 && (text?.match(/\n/) || []).length) {
                return;
              }
              const queue = encoder.encode(text);

              controller.enqueue(queue);
              counter++;
            } catch (e) {
              controller.error(e);
            }
          }
        }

        // stream response (SSE) from OpenAI may be fragmented into multiple chunks
        // this ensures we properly read chunks & invoke an event for each SSE event stream
        const parser = createParser(onParse);

        // https://web.dev/streams/#asynchronous-iteration
        for await (const chunk of response.body as any) {
          parser.feed(decoder.decode(chunk));
        }
      },
    });

    return stream;

  } else {
    const data = await response.json();

    return data?.choices[0];
  }


}

// export async function GET(request: Request) {

//   return new Response("answer")
// }

export async function POST(request: Request) {
  const { chat, stream } = await request.json()
  const result = await chatFetch(chat, stream)
  if (stream === true) {
    return new Response(result);
  }
  return NextResponse.json(result)
}

