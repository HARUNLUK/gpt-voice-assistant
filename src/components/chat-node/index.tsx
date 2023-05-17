import { LegacyRef } from "react";
import { Circle } from "../circle";
import { FcVoicePresentation } from "react-icons/fc";

export enum ChatNodeTypes {
    ANSWER,
    QUESTION,
}
interface IChatNode {
    access: LegacyRef<HTMLDivElement>,
    type: ChatNodeTypes,
    text?: string,
}
export function ChatNode(params: IChatNode) {
    function TypeIcon() {
        switch (params.type) {
            case ChatNodeTypes.ANSWER:
                return <Circle active={true} />
            case ChatNodeTypes.QUESTION:
                return <FcVoicePresentation size={35}/>
            default:
                return <span></span>;
        }

    }
    return (
        <div className="flex bg-slate-100 rounded-lg px-10 py-5 mx-5 my-2 text-blue-950 animate-awake">
            <div className="w-10 inline-block">{
                <TypeIcon />
            }</div>
            <div ref={params.access} className="inline-block w-9/12 px-5"></div>
            {params.text}
        </div>
    )
}