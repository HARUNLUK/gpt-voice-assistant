import Keys from "../keys"

const key: string = Keys.OpenAI

async function completion(prompt: string | null) {
  if (!prompt) {
    return
  }
  const response = await fetch("https://api.openai.com/v1/completions",
    {
      "method": "POST",
      "headers": {
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      "body": JSON.stringify(
        {
          "model": "text-davinci-003",
          "prompt": prompt,
          "max_tokens": 50,
        }
      )
    }).catch(error => {
      return null
    })

  if (!response) {
    return ""
  }
  const data = await response.json();
  return data?.choices[0]?.text;

}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const text: string | null = searchParams.get("text");
  const result = await completion(text)
  return new Response(result)
}

