import { Circle } from "@/components/circle";
import DarkModeButton from "@/components/dark-mode-button";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import LanguageSelectPopup from "./language-select-popup";
import { Languages, Translation } from "@/enums/languages";
import Image from "next/image";

export default async function Home({ searchParams }: any) {
  const lang = Object.values(Languages).find((enumValue) => enumValue === searchParams.lang) || Languages.EN;
  type TranlationKey = keyof typeof Translation;
  const translation = Translation[lang as TranlationKey] || Translation[Languages.EN];
  
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-start ">

      <nav className="w-full h-16 flex justify-between px-4 py-3 absolute top-0">
        <div className="flex items-center justify-between">
          <div className="text-gray-800 text-lg dark:text-primary-dark drop-shadow-banner">
            <span className="text-xs italic">{translation.Texts.madeBy}</span>
            <h1 className="text-black inline-block text-2xl dark:text-primary-dark">HARUNLUK</h1>
          </div>
          {/* <div className="flex space-x-4 ml-10">
            <a href="#" className="text-gray-800 px-3 py-2 rounded-md text-lg font-medium drop-shadow-banner dark:text-primary-dark" >Voice Chat</a>
            <a href="#" className="text-gray-800 px-3 py-2 rounded-md text-lg font-medium drop-shadow-banner dark:text-primary-dark">Image Generation</a>
          </div> */}
        </div>

        <div className="flex gap-2">
          <DarkModeButton />
          <LanguageSelectPopup lang={lang} />
        </div>
      </nav>
      {/* <div className="absolute -z-10 w-full h-screen "></div> */}

      <div className="bg-cover bg-fixed bg-no-repeat bg-center bg-ink-white-blue dark:bg-ink-pink-grey w-full pt-16 min-h-[45vw] flex justify-around items-center max-[768px]:flex-col max-[768px]:w-full">
        <div className=" w-[50vw] p-10 rounded-xl max-[768px]:w-full">
          <h2 className="mb-0 flex flex-col font-banner-font text-7xl whitespace-pre-wrap break-before-right drop-shadow-text-blue dark:drop-shadow-text dark:text-primary-dark max-[768px]:w-full" ><span>{translation.Texts.mainBanner1}</span> <span>{translation.Texts.mainBanner2}</span></h2>
          <article className=" font-banner-font text-md mb-2  text-slate-800 drop-shadow-text-blue dark:text-primary-dark dark:drop-shadow-text">
            {translation.Texts.mainDesc}
          </article>
          {/* <article className="text-sm font-thin drop-shadow-text-blue dark:shadow-black dark:text-primary-dark">
            Remember, with voice interaction through OpenAI ChatGPT, you can enhance your internet experience even more!
          </article> */}
          <a href="/chat">
            <button className="my-6 bg-secondary-light shadow-black shadow-2xl text-primary-light p-4 rounded-md font-medium  dark:bg-secondary-dark dark:text-primary-dark ">
              {translation.Texts.mainButton}
            </button>
          </a>


        </div>
        <div className="w-80 max-[768px]:hidden">
          <a href="/chat">
            <Circle active={true} />
          </a>
        </div>
      </div>

      <div className="w-full py-10 px-32 bg-primary-light flex items-center justify-around gap-10 dark:bg-secondary-dark dark:text-primary-dark max-[768px]:flex-col max-[768px]:px-10" >
        <div className="w-4/12 text-center text-xl max-[768px]:w-full">
          <h3 className="font-roboto font-black">{translation.Texts.openAiAdBanner}</h3>
          <span className="font-roboto font-light text-sm">{translation.Texts.openAiAdShort}</span>
        </div>
        <div className="w-4/12 relative rounded overflow-hidden max-[768px]:w-full">
          <Image width={500} height={500} src="/assets/chat-gpt-ad.jpg" alt="Chat Gpt Ad" className="w-full h-full object-cover" />
        </div>
        <div className="w-4/12 p-4 font-roboto font-light max-[768px]:w-full">
          <article>{translation.Texts.openAiAdDesc}</article>
        </div>
      </div>


      <div className="w-full h-[80vh] bg-cover bg-fixed bg-no-repeat bg-top bg-[url('/assets/new-york-const.jpg')] flex items-center justify-evenly gap-96 max-[768px]:gap-0 max-[768px]:flex-col ">
        <div className="w-4/12 bg-white drop-shadow-text rounded-2xl flex justify-center items-center p-3 dark:bg-secondary-dark dark:text-primary-dark max-[768px]:w-48 max-[768px]:h-32" style={{ transform: "perspective(100000px) rotateY(20deg) rotateX(38deg) rotateZ(14deg)" }}>
          <div className="w-full ">
            <h2 className="text-secondary-light font-banner-font text-7xl text-center max-[768px]:text-3xl" style={{fontFamily:"'Bebas Neue', sans-serif"}}>HARUNLUK</h2>
            <i className=" w-full block text-dark text-center max-[768px]:text-xs">harunserli@gmail.com</i>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/harunluk/" target="_blank">
              <AiFillLinkedin className="text-secondary-light text-9xl max-[768px]:text-2xl" />
            </a>
            <a href="https://github.com/HARUNLUK" target="_blank">
              <AiFillGithub className="text-secondary-light text-9xl max-[768px]:text-2xl" />
            </a>
          </div>

        </div>
        <div className="w-3/12 max-[768px]:w-full drop-shadow-text bg-white rounded-2xl flex justify-center items-center p-1 font-medium mt-44 max-[768px]:mt-6 -mr-20 max-[768px]:-mr-5 dark:bg-secondary-dark dark:text-primary-dark" style={{ transform: 'perspective(100000px) rotateY(-59deg) rotateX(6deg) rotateZ(-18deg)' }} >
          <p className="text-dark w-full text-center text-sm p-5 font-roboto font-light max-[768px]:text-xs">
            {translation.Texts.footerDesc}
          </p>
        </div>
      </div>




    </main>
  )
}