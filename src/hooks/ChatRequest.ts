'use client'

import { ServiceUrl } from "@/config/service";
import { useRef, useState } from "react";
import { createParser, ParsedEvent, ReconnectInterval } from "eventsource-parser";

interface ChatRequest {
    role: string,
    content: string,
    name?: string
}

interface ChatRequestParamInterface {
    preRule?: ChatRequest[],
    stream: boolean,
}

export function useChatRequest(params: ChatRequestParamInterface) {
    const [fetching, setFetching] = useState<boolean>(false);

    const history = useRef<ChatRequest[]>(params.preRule || []);
    const readableStreamOpen = useRef<boolean>(false);


    function chatRequest(text: string, callback: Function) {

        if (text === "") {
            setFetching(false);

            return;
        }
        history.current.push({
            role: "user",
            content: text
        })
        if (history.current.length > 10) {
            history.current.shift();
            history.current.shift();

        }

        request(history.current, callback)

    }

    function cancelRequest() {
        readableStreamOpen.current = false;
        setFetching(false);
    }

    async function request(chat: ChatRequest[], callback: Function) {
        setFetching(true);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var body = JSON.stringify({
            "stream": params.stream,
            "chat": chat
        });

        const response = await fetch(ServiceUrl.API + "/api/chat", {
            method: 'POST',
            headers: myHeaders,
            body: body,
            redirect: 'follow'
        })

        const data = response.body;
        if (!data) {
            callback("error", {
                end: true
            })
            setFetching(false);

            return;
        }

        if (params.stream === false) {
            const result = await response.json();
            callback(result?.message?.content, {
                end: true
            })
            setFetching(false);

            return;
        }

        const readerNew = data.getReader();
        const decoder = new TextDecoder();
        let done = false;
        var speechIndex: number = 0;
        var textContent: string = "";

        readableStreamOpen.current = true;
        while (!done && readableStreamOpen.current) {
            const { value, done: doneReading } = await readerNew.read();
            done = doneReading;
            const content = decoder.decode(value);
            // console.log(content);

            // setGeneratedBios((prev) => prev + chunkValue);

            if (content) {
                textContent += content;

                let len: number = textContent?.length || 0
                let charIn = findCharIndex(content, [".", ":", "\n", "?", ",", " "])
                let lenMoreThan = (len > (speechIndex + 20));
                if ((len > speechIndex + 5 && charIn) || lenMoreThan) {

                    var last = textContent?.lastIndexOf(charIn?.char || "")
                    if (lenMoreThan) {
                        last = speechIndex + 20;
                    }
                    // console.log(textContent, speechIndex, last, textContent?.substring(speechIndex, last) || "");

                    callback(textContent?.substring(speechIndex, last) || "");

                    speechIndex = last || (len + 5)

                }
            }
        }
        callback(textContent?.substring(speechIndex) || "");


        setFetching(false);



        // readableStreamOpen.current = true;

        // const reader = response.body?.pipeThrough(new TextDecoderStream()).getReader();
        // var speechIndex: number = 0;
        // var textContent: string = "";
        // while (readableStreamOpen.current) {
        //     const res: any = await reader?.read();
        //     if (res?.done) {
        //         callback(textContent?.substring(speechIndex) || "", {
        //             end: true
        //         })
        //         setFetching(false);

        //         break;
        //     }
        //     let payloads = res.value.split("\n\n");

        //     for (const payload of payloads) {
        //         if (payload.includes('[DONE]')) {
        //             callback(textContent?.substring(speechIndex) || "", {
        //                 end: true
        //             })
        //             setFetching(false);

        //             history.current.push({
        //                 role: "assistant",
        //                 content: textContent
        //             })

        //             return;
        //         }

        //         if (payload.startsWith("data:")) {
        //             const data = payload.replace(/^data: /, '');

        //             try {
        //                 const delta = JSON.parse(data.trim())
        //                 const content = delta.choices[0].delta?.content
        //                 console.log(content);

        //                 if (content) {
        //                     textContent += content;
        //                     let len: number = textContent?.length || 0
        //                     let charIn = findCharIndex(content, [".", ":", "\n", "?", ","])
        //                     if (len > speechIndex + 30 && charIn) {

        //                         let last = textContent?.lastIndexOf(charIn.char)

        //                         console.log("SendValue", textContent?.substring(speechIndex, last) || "");

        //                         callback(textContent?.substring(speechIndex, last) || "");

        //                         speechIndex = last || len
        //                     }
        //                 }
        //             } catch (error) {
        //                 console.error(res.value)
        //                 setFetching(false);

        //             }
        //         }
        //     }
        // }
    }


    function findCharIndex(str: string, chars: string[]): { char: string, index: number } | undefined {
        for (let i = 0; i < str.length; i++) {
            if (chars.indexOf(str[i]) !== -1) {
                return {
                    char: str[i],
                    index: i
                };
            }
        }
        return undefined;
    }

    function clear() {
        history.current = params.preRule || []
    }


    return {
        chatRequest,
        cancelRequest,
        clear,
        fetching
    }
}