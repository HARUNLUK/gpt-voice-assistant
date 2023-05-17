import { AiFillCloseSquare } from "react-icons/ai";


export default function Popup(params: any) {
    return (
        (params.active && <div className="flex items-center justify-center w-[100vw] h-[100vh] fixed top-0 left-0 z-[1000]">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-950 opacity-40 " onClick={params.onClose} />
            <div className="bg-white rounded-lg p-4 z-20 relative drop-shadow-text dark:bg-secondary-dark" >
                {params.children}
                {!params.noClose && <span className='absolute top-3 right-3 cursor-pointer text-secondary-light dark:text-white' onClick={params.onClose} >
                    <AiFillCloseSquare size={40} />
                </span>}
            </div>

        </div>)
    )
}