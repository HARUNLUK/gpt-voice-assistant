import './globals.css'

const title = "GPT Voice Assistant - made by HARUNLUK"
const desc = "Upgrade your user experience with OpenAI's advanced natural language processing technology. Try OpenAI ChatGPT for voice interaction and get answers by talking to a website. Now, you can get answers by talking to a website! With OpenAI ChatGPT technology, all you need to do is use your microphone to ask questions and receive responses. Learn and gather information by speaking."
const image = "/assets/eye-blue.png"

export const metadata = {
  title: title,
  description: desc,
  keywords: "OpenAI, ChatGPT, natural language processing, voice interaction, machine learning, Next.js, Tailwind CSS, TypeScript, Web Speech API",
  authors: [{ name: "HARUNLUK", url: "https://www.linkedin.com/in/harunluk/" }],
  
  icons: {
    icon: image,
  },

  openGraph: {
    title: title,
    description: desc,
    url: "https://gpt-assistant.vercel.app",
    images: [
      image
    ]
  },

  twitter: {
    title: title,
    description: desc,
    images: [
      image
    ]
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@300;400;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
