"use client"

import { useState, useEffect } from "react";
import LanguageSelect from "@/components/langugae-select"
import Popup from "@/components/popup"
import { FcGlobe } from "react-icons/fc";
import { ServiceUrl } from "@/config/service";
import { Languages } from "@/enums/languages";


export default function LanguageSelectPopup({ lang }: any) {

    const [languageOpen, setLanguageOpen] = useState<boolean>(false);

    useEffect(() => {
        const localLang = localStorage.getItem("lang")
        if (localLang && localLang !== lang) {
            var newUrl = ServiceUrl.BASE + '?lang=' + localLang;
            window.location.href = newUrl;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lang])

    return <>
        <div className="p-2 rounded-full bg-secondary-light shadow-lg dark:bg-secondary-dark cursor-pointer" onClick={() => { setLanguageOpen(true) }} >
            <FcGlobe size={24} />
        </div>
        <Popup active={languageOpen} onClose={() => { setLanguageOpen(false) }}>
            <LanguageSelect lang={lang} onChange={(language: Languages) => {
                var newUrl = ServiceUrl.BASE + '?lang=' + language;
                window.location.href = newUrl;
            }} />
        </Popup>
    </>

}