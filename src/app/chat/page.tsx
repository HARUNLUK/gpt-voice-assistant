"use client"

import { useEffect, useRef, useState } from "react";
import { useTextSynthesis } from "@/hooks/TextSynthesis";
import { useSpeechSynthesis } from "@/hooks/SpeechSynthesis";
import { useChatRequest } from "@/hooks/ChatRequest";
import { Circle } from "@/components/circle";
import { ChatNode, ChatNodeTypes } from "../../components/chat-node";
import IconButton, { ButtonIcons } from "@/components/icon-button";
import { Languages, Translation } from "@/enums/languages";
import Popup from "@/components/popup";
import { FcAssistant, FcOnlineSupport } from "react-icons/fc";
import LanguageSelect from "@/components/langugae-select";
import DarkModeButton from "@/components/dark-mode-button";
import { GiClick } from "react-icons/gi";

export default function Chat() {

  const [chatList, setChatList] = useState<JSX.Element[]>([]);
  const [headset, setHeadset] = useState<boolean>(false);
  const [language, setLanguage] = useState<Languages>(Languages.EN);
  const [deactive, setDeactive] = useState<boolean>(false);
  const [firstTime, setFirstTime] = useState<boolean>(false);


  const [headsetTutorial, setHeadsetTutorial] = useState<boolean>(false);
  const [languageOpen, setLanguageOpen] = useState<boolean>(false);


  const lastQuestionRef = useRef<any>();
  const lastAnswerRef = useRef<any>();
  const CodeboxIndexRef = useRef<number>(0);
  const CodeboxOpenRef = useRef<boolean>(false);
  const questionReady = useRef<boolean>(false);
  const answerReady = useRef<boolean>(true);
  const silence = useRef<boolean>(false);

  type TranlationKey = keyof typeof Translation;
  const translation = Translation[language as TranlationKey] || Translation[Languages.EN]

  const { chatRequest, cancelRequest, clear, fetching } = useChatRequest({
    stream: true
  });

  const {
    speak, silent, swithLanguage, speaking
  } = useTextSynthesis({ language: language });

  const {
    transcript,
    listening,
    startListening,
    reset,
    supporting

  } = useSpeechSynthesis({
    language: language,
    continuous: headset,
    onEnd: () => {
      nextChat(lastAnswerRef, ChatNodeTypes.ANSWER);
      chatRequest(transcript, (prompt: string) => {
        if (lastAnswerRef.current) {
          addPromptToChat(prompt)
        }
      })
    },

    onSilent: () => {
      reset();
      silent();
      cancelRequest();
      speak(translation.CommandResponse.Silence);

      questionReady.current = false;
      answerReady.current = false;
      silence.current = true;
    },
    onChat: () => {
      speak(translation.CommandResponse.Chat);
      questionReady.current = true;
      answerReady.current = false;
      silence.current = false;
    },
    onStop: () => {
      reset();
      silent();
      cancelRequest();
      speak(translation.CommandResponse.Stop);

      questionReady.current = true;
      answerReady.current = false;
    },

    onWait: () => {
      if (!answerReady.current || transcript === "") {
        return;
      }
      answerReady.current = false;

      nextChat(lastAnswerRef, ChatNodeTypes.ANSWER);
      chatRequest(transcript, (prompt: string) => {
        if (lastAnswerRef.current) {
          addPromptToChat(prompt)
        }
        questionReady.current = true;
      })
      lastQuestionRef.current = null;
      reset();
    }
  });

  useEffect(() => {
    var localS;
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      localS = localStorage
      setLanguage(localS?.getItem("lang") as Languages || Languages.EN)

      if (!localS.getItem("fs")) {
        setFirstTime(true);
        localS.setItem("fs", "c")
      }
    }

  }, [])

  useEffect(() => {
    if (headset && questionReady.current && !speaking) {
      nextChat(lastQuestionRef, ChatNodeTypes.QUESTION);
      questionReady.current = false;
      answerReady.current = true;
    } else if (silence.current) {
      reset();
    }
    if (lastQuestionRef.current) {
      lastQuestionRef.current.innerHTML = transcript;
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript])

  useEffect(() => {
    if (supporting === false) {
      setDeactive(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supporting])

  function nextChat(ref: any, type: ChatNodeTypes) {
    setChatList([<ChatNode key={chatList.length} access={ref} type={type} />, ...chatList])
  }

  function clearChat() {
    clear();
    setChatList([])
    silent();
    cancelRequest();
    lastQuestionRef.current = undefined;
    lastAnswerRef.current = undefined;
    CodeboxIndexRef.current = 0;
    CodeboxOpenRef.current = false;
    questionReady.current = false;
    answerReady.current = true;
    silence.current = false;
  }

  function addPromptToChat(prompt: string) {

    const startIndex = prompt.indexOf("```");
    if (startIndex !== -1) {

      if (CodeboxOpenRef.current) {

        //last part
        const beforeCode = prompt.substring(0, startIndex);
        const box = document.getElementById("codebox-" + CodeboxIndexRef.current)
        if (box) {
          box.innerHTML += beforeCode;
        }
        CodeboxIndexRef.current += 1;
        CodeboxOpenRef.current = false;
        //last part

        const remainingCode = prompt.substring(startIndex + 3);
        addPromptToChat(remainingCode)

      } else {
        //before handled
        const beforeCode = prompt.substring(0, startIndex);
        speak(beforeCode)
        lastAnswerRef.current.innerHTML += "<span>" + beforeCode.replaceAll("\n", "<br/>") + "</span>";
        //before handled



        const remainingCode = prompt.substring(startIndex + 3);
        const endIndex = remainingCode.indexOf("```");

        if (endIndex !== -1) {
          const code = remainingCode.substring(0, endIndex).trim();
          lastAnswerRef.current.innerHTML += "<code>" + code.replaceAll("\n", "<br/>") + "</code>";
          const afterCode = remainingCode.substring(endIndex + 3);
          speak(afterCode)
          lastAnswerRef.current.innerHTML += "<span>" + afterCode.replaceAll("\n", "<br/>") + "</span>";
        } else {
          lastAnswerRef.current.innerHTML += "<code id='codebox-" + CodeboxIndexRef.current + "'>" + remainingCode.replaceAll("\n", "<br/>") + "</code>";
          CodeboxOpenRef.current = true;
        }

      }

    } else {
      if (CodeboxOpenRef.current) {
        const box = document.getElementById("codebox-" + CodeboxIndexRef.current)
        if (box) {
          box.innerHTML += prompt;
        }
      } else {
        lastAnswerRef.current.innerHTML += "<span>" + prompt.replaceAll("\n", "<br/>") + "</span>";
        speak(prompt)

      }

    }


  }

  return (
    <div className="flex h-screen overflow-hidden max-[768px]:flex-col max-[768px]:w-full  max-[768px]:overflow-auto">

      <div className="w-3/12 h-full p-10 bg-gradient-to-b from-blue-600 to-blue-50 dark:from-blue-900 dark:to-black shadow-black shadow-xl z-20  max-[768px]:w-full max-[768px]:flex max-[768px]:flex-col max-[768px]:justify-center max-[768px]:items-center">
        <div className="w-full max-[768px]:w-[40vw] max-[768px]:my-10">
          <Circle disable={deactive} active={speaking} turning={listening} pulse={fetching} onClick={() => {
            if (speaking) {
              silent();
              cancelRequest();
              return
            }
            silent();
            answerReady.current = true;
            questionReady.current = true;
            cancelRequest();
            startListening();
            nextChat(lastQuestionRef, ChatNodeTypes.QUESTION);
          }} />
        </div>

        <div className="flex gap-3 my-10 max-[1378px]:my-4">
          <IconButton icon={ButtonIcons.Headset} text={translation.Buttons.Assistant} active={headset} onClick={() => { setHeadset(!headset); if (!localStorage.getItem("hs-t")) { setHeadsetTutorial(true) } }} />
          <IconButton icon={ButtonIcons.Trash} text={translation.Buttons.Clear} onClick={clearChat} />
          <IconButton icon={ButtonIcons.Globe} text={translation.Buttons.Language} onClick={() => { setLanguageOpen(true) }} />
        </div>

        <div className="bg-slate-100 rounded-md p-2 max-[1378px]:text-xs max-[768px]:hidden text-slate-800 dark:bg-secondary-dark dark:text-primary-dark max-[768px]:w-full">
          <h3 className="text-center text-sm mb-2">{translation.CommandDescription.Title}</h3>
          <h2 className="mb-3">
            <span className="bg-blue-400 px-2 py-1 rounded-md mr-2 text-white dark:bg-black">{translation.Commands.Stop}</span>
            <span className="text-sm">{translation.CommandDescription.Stop}</span>
          </h2>
          <h2 className="mb-3">
            <span className="bg-blue-400 px-2 py-1 rounded-md mr-2 text-white dark:bg-black">{translation.Commands.Silence}</span>
            <span className="text-sm">{translation.CommandDescription.Silence}</span>
          </h2>
          <h2 className="mb-3">
            <span className="bg-blue-400 px-2 py-1 rounded-md mr-2 text-white dark:bg-black">{translation.Commands.Chat}</span>
            <span className="text-sm">{translation.CommandDescription.Chat}</span>
          </h2>
        </div>

        <div className="absolute top-0 left-5 my-6 max-[1378px]:my-1 max-[768px]:items-center max-[768px]:relative max-[768px]:left-0 max-[768px]:flex max-[768px]:flex-col">
          <DarkModeButton />
        </div>
      </div>

      <div className="w-9/12 h-full justify-end overflow-auto box-border bg-gradient-to-br from-blue-600 to-blue-50 bg-cover dark:from-black dark:to-blue-950 max-[768px]:hidden">
        <div className="flex flex-col justify-start scroll-b h-auto box-border">
          {chatList.map((node: JSX.Element) => node)}
        </div>
      </div>
      <Popup active={headsetTutorial} onClose={() => { setHeadsetTutorial(false); localStorage.setItem("hs-t", "showen"); }}>
        <div className="flex flex-col items-center max-w-screen-lg max-[1378px]:w-[70vw]">
          <div className="flex gap-28">
            <FcAssistant size={100} />
            <FcOnlineSupport size={100} />
          </div>

          <span className="text-3xl text-center m-3 dark:text-primary-dark">{translation.Texts.HeadsetAsistantDescription}</span>
        </div>

      </Popup>

      <Popup active={languageOpen} onClose={() => { setLanguageOpen(false) }}>
        <LanguageSelect onChange={(selected: any) => { setLanguage(selected) }} />
      </Popup>

      <Popup active={deactive} noClose>

        <div className=" p-10 ">
          {translation.Texts.doesntSupport}
        </div>
      </Popup>

      <Popup active={firstTime} onClose={() => { setFirstTime(false) }}>

        <div className="flex gap-7 p-10">
          <span className="dark:text-white">
            {translation.Texts.firstTime}
          </span>
          <GiClick size={50} className="text-secondary-light dark:text-white" />

        </div>
      </Popup>

    </div>
  )
}