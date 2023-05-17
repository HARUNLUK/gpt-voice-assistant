'use client'

import { Languages } from "@/enums/languages";
import { useEffect, useRef, useState } from "react";


interface TextSynthesisParamInterface {
    language: Languages;
}

export function useTextSynthesis(params: TextSynthesisParamInterface) {
    var windowLocal;
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        windowLocal = window
    }
    const [speaking, setSpeaking] = useState(false);
    const speakText = useRef<string>("");
    const isSpeakingText = useRef<boolean>(false);
    // const language = useRef<Languages>(params.language);
    const voices = useRef<SpeechSynthesisVoice[]>([]);
    const voice = useRef<any>(windowLocal?.SpeechSynthesisVoice);


    useEffect(() => {
        voices.current = window.speechSynthesis.getVoices();
        window.speechSynthesis.onvoiceschanged = function () {
            const synth = window.speechSynthesis as SpeechSynthesis;
            voices.current = synth.getVoices();
            swithLanguage()
        }

        swithLanguage()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.language])



    function swithLanguage() {
        // language.current = lang;

        const filteredLanguageVoices = voices.current.filter(voice => voice?.lang === params.language);
        
        if (filteredLanguageVoices.length > 0) {
            voice.current = filteredLanguageVoices.find(voice => voice.voiceURI === "Microsoft Emel Online (Natural) - Turkish (Turkey)") ||
                filteredLanguageVoices.find(voice => voice.voiceURI === "Microsoft Jenny Online (Natural) - English (United States)") ||
                filteredLanguageVoices[0];
        }
    }

    function speak(text: string, rate: number = 1.2, pitch: number = 1, volume: number = 1) {
        speakText.current += text;
        if (isSpeakingText.current) {
            return;
        }
        const msg: SpeechSynthesisUtterance = new SpeechSynthesisUtterance();

        msg.text = text;
        msg.voice = voice.current
        msg.rate = rate;
        msg.pitch = pitch;
        msg.volume = volume;

        msg.onend = () => {
            window.speechSynthesis.resume();
            setSpeaking(false)
            isSpeakingText.current = false;
            if (speakText.current !== "") {
                speak(speakText.current)
            }


            // window.speechSynthesis.resume();
            // window.speechSynthesis.speak(msg);
        };

        // msg.onresume = () => {
        // }
        // msg.onpause = () => {
        // }

        // msg.onmark = () => {
        // }
        // msg.onboundary = () => {
        // }

        setSpeaking(true)
        isSpeakingText.current = true;
        window.speechSynthesis.speak(msg);
        speakText.current = ""
    }

    function silent() {
        window.speechSynthesis.cancel();
        setSpeaking(false);
        speakText.current = "";
        isSpeakingText.current = false;
    }

    return {
        speak,
        silent,
        swithLanguage,
        speaking
    }
}