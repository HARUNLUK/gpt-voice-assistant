import { log } from "console"
import { NextResponse } from "next/server"
import Keys from "../keys"

const key: string = Keys.OpenAI

async function moderation(text: string | null) {
  if (!text) {
    return
  }
  const response = await fetch("https://api.openai.com/v1/moderations",
    {
      "method": "POST",
      "headers": {
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      "body": JSON.stringify(
        {
          "input": text
        }
      )
    }).catch(error => {
      return null
    })

  if (!response) {
    return ""
  }

  return await response.json();

}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const text: string | null = searchParams.get("text");
  const result = await moderation(text)

  return NextResponse.json(result)
}

