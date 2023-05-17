'use client'

import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useEffect, useRef } from 'react';
import { Languages, Translation } from '@/enums/languages';

interface SpeechSynthesisParamInterface {
    language: Languages;
    continuous: boolean,
    onEnd?: Function,
    onWait?: Function,
    onSilent?: Function,
    onStop?: Function,
    onChat?: Function,
}

export function useSpeechSynthesis(params: SpeechSynthesisParamInterface) {

    type TranlationKey = keyof typeof Translation;
    const translation = Translation[params.language as TranlationKey || Languages.EN]
    const commands: any = [
        {
            command: translation.Commands.Stop,
            callback: () => { params.onStop && params.onStop(); },
            matchInterim: true,
        },
        {
            command: translation.Commands.Silence,
            callback: () => { params.onSilent && params.onSilent(); },
            matchInterim: true
        },
        {
            command: translation.Commands.Chat,
            callback: () => { params.onChat && params.onChat(); },
            matchInterim: true
        },
    ]

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
        isMicrophoneAvailable,
    } = useSpeechRecognition({ commands });

    const continuousTimeout = useRef<any>();

    useEffect(() => {

        if (listening === false && transcript !== "") {
            params.onEnd && params.onEnd();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listening])

    useEffect(() => {

        if (params.continuous) {
            clearTimeout(continuousTimeout.current)
            continuousTimeout.current = setTimeout(() => {
                params.onWait && params.onWait();

            }, 2000)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [transcript])

    useEffect(() => {
        if (listening) {
            SpeechRecognition.stopListening();
            startListening();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.language])

    function startListening() {
        SpeechRecognition.startListening({
            continuous: params.continuous,
            language: params.language
        })
    }

    function reset() {
        resetTranscript();
    }

    return {
        transcript,
        listening,
        startListening,
        reset,
        supporting: browserSupportsSpeechRecognition
    }
}