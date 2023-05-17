import { FcHeadset, FcFullTrash, FcGlobe } from "react-icons/fc";
export enum ButtonIcons {
    Headset,
    Trash,
    Globe,
}

interface IiconButton {
    icon: ButtonIcons;
    text: string,
    size?:number,
    disable?: boolean,
    active?: boolean,
    onClick?: Function,
}
export default function IconButton(params: IiconButton) {
    function IconGenerate(p: any) {
        switch (params.icon) {
            case ButtonIcons.Globe:
                return <FcGlobe size={p.size} />

            case ButtonIcons.Trash:
                return <FcFullTrash size={p.size} />

            case ButtonIcons.Headset:
                return <FcHeadset size={p.size} />

            default:
                return null;

        }
    }
    return <div onClick={() => { params.onClick && params.onClick() }} className="w-20 h-20 overflow-hidden inline-flex flex-col bg-white rounded-md p-2 box-border justify-center items-center shadow-md hover:shadow-lg hover:scale-105 cursor-pointer dark:bg-secondary-dark" style={{ opacity: (params.disable ? "0.5" : "1"), border: (params.active ? "2px solid rgb(59 130 246)" : "") }}>
        <span>{<IconGenerate size={params.size || 40} />}</span>
        <span className="w-full text-sm text-center truncate font-medium text-gray-600 dark:text-primary-dark">{params.text}</span>
    </div>
}