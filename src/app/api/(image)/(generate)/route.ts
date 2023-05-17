import Keys from "../../keys";

const key: string = Keys.OpenAI
async function generate(text: string | null, size: string | null) {

    const response = await fetch("https://api.openai.com/v1/images/generations",
        {
            "method": "POST",
            "headers": {
                "Authorization": `Bearer ${key}`,
                "Content-Type": "application/json",
            },
            "body": JSON.stringify(
                {
                    "prompt": text,
                    "n": 1,
                    "size": size
                }
            )

        })

    const result = await response.json();

    return result?.data[0]?.url;

}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const text: string | null = searchParams.get("text");
    const size: string | null = searchParams.get("size");
    if (!text) {
        return new Response("")

    }
    let selectedSize;
    switch (size) {
        case "256x256":
            selectedSize = "256x256";
            break;
        case "512x512":
            selectedSize = "512x512";
            break;
        case "1024x1024":
            selectedSize = "1024x1024";
            break;
        default:
            selectedSize = "512x512";
            break;
    }

    const result = await generate(text, selectedSize)
    return new Response(result)
}