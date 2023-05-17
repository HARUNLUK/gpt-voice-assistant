"use client"
import React, { useState } from 'react';
import { Languages, Translation } from "@/enums/languages";

function getLanguageName(language: Languages): JSX.Element {
    let name: string;

    switch (language) {
        case Languages.TR:
            name = 'Turkish';
            break;
        case Languages.EN:
            name = 'English';
            break;
        case Languages.ES:
            name = 'Spanish';
            break;
        case Languages.FR:
            name = 'French';
            break;
        case Languages.DE:
            name = 'German';
            break;
        case Languages.IT:
            name = 'Italian';
            break;
        case Languages.JA:
            name = 'Japanese';
            break;
        case Languages.KO:
            name = 'Korean';
            break;
        case Languages.PT:
            name = 'Portuguese';
            break;
        case Languages.RU:
            name = 'Russian';
            break;
        case Languages.ZH:
            name = 'Chinese';
            break;
        case Languages.AR:
            name = 'Arabic';
            break;
        case Languages.NL:
            name = 'Dutch';
            break;
        case Languages.PL:
            name = 'Polish';
            break;
        case Languages.SV:
            name = 'Swedish';
            break;
        case Languages.DA:
            name = 'Danish';
            break;
        case Languages.NO:
            name = 'Norwegian';
            break;
        case Languages.FI:
            name = 'Finnish';
            break;
        case Languages.ID:
            name = 'Indonesian';
            break;
        case Languages.HI:
            name = 'Hindi';
            break;
        case Languages.SQ:
            name = 'Albanian';
            break;
        default:
            name = 'Unknown';
            break;
    }

    return (
        <div className="flex items-center space-x-2">
            <span className="text-gray-700 font-medium">{name}</span>
        </div>
    );
}


function LanguageSelect(params: any) {
    var localS;
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        localS = localStorage
    }
    type TranlationKey = keyof typeof Translation;
    const [selectedLanguage, setSelectedLanguage] = useState<Languages>(localS?.getItem("lang") as Languages || Languages.EN);

    function handleLanguageChange(language: string) {
        params.onChange && params.onChange(language as Languages)
        localStorage.setItem("lang", language as Languages);
        setSelectedLanguage(language as Languages);
    }

    return (
        <div className="w-96 flex flex-col justify-center items-center py-10 px-12 relative text-secondary-light dark:text-white">
            <label htmlFor="language-select" className="text-xl mb-4 font-bold">
                {Translation[params.lang as TranlationKey || selectedLanguage]?.Texts.selectLang}
            </label>
            <div
                id="language-select"
                className="max-h-56 overflow-auto w-full dark:text-secondary-dark"
            >
                {Object.values(Languages).map((language) => (
                    <div className={language === selectedLanguage ? "m-1 p-2 bg-primary-light rounded mb-3 cursor-pointer text-primary-light border-2 border-secondary-light dark:border-none dark:bg-primary-dark" : "p-2 m-1 bg-secondary-light rounded mb-3 cursor-pointer text-primary-light dark:text-white"} key={language} onClick={() => {
                        handleLanguageChange(language)
                    }}>
                        {getLanguageName(language)}
                    </div>
                ))}
            </div>

        </div>
    );
}

export default LanguageSelect;