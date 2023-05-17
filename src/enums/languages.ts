export enum Languages {
    TR = 'tr-TR', // Turkish
    EN = 'en-US', // English
    ES = 'es-ES', // Spanish
    FR = 'fr-FR', // French
    DE = 'de-DE', // German
    IT = 'it-IT', // Italian
    SQ = 'sq-AL', // Albanian
    JA = 'ja-JP', // Japanese
    KO = 'ko-KR', // Korean
    PT = 'pt-PT', // Portuguese
    RU = 'ru-RU', // Russian
    ZH = 'zh-CN', // Chinese 
    AR = 'ar-EG', // Arabic
    NL = 'nl-NL', // Dutch
    PL = 'pl-PL', // Polish
    SV = 'sv-SE', // Swedish
    DA = 'da-DK', // Danish
    NO = 'nb-NO', // Norwegian
    FI = 'fi-FI', // Finnish
    ID = 'id-ID', // Indonesian
    HI = 'hi-IN', // Hindi
}

export const Translation = {
    [Languages.EN]: {
        Buttons: {
            Assistant: "Headset",
            Clear: "Clear",
            Language: "Language"
        },
        Commands: {
            Silence: "silence",
            Stop: "stop",
            Chat: "chat"
        },
        CommandResponse: {
            Silence: "Sure",
            Stop: "Sure",
            Chat: "Sure"
        },
        CommandDescription: {
            Title: "You have few voice commands",
            Silence: "If you dont want be listened",
            Stop: "When you want to stop prompt",
            Chat: "Reactivate to listen",
        },
        Texts: {
            selectLang: "Select a language",
            HeadsetAsistantDescription: "For a better user experience, it is advised to use headphones when the headset mode is turned on to utilize the voice assistant.",
            madeBy: "made by",
            mainBanner1: "Voice Interaction with",
            mainBanner2: "OpenAI ChatGPT!",
            mainDesc: "Now, you can get answers by talking to a website! With OpenAI ChatGPT technology, all you need to do is use your microphone to ask questions and receive responses. Learn and gather information by speaking.",
            mainButton: "Try It Now",
            openAiAdBanner: "Experience the Power of OpenAI",
            openAiAdShort: "Upgrade Your User Experience with OpenAI's Advanced Technology",
            openAiAdDesc: "OpenAI offers natural language processing services, such as chat completion, that can be integrated into websites and applications. These services use state-of-the-art machine learning algorithms to understand and generate human-like language responses.",
            footerDesc: "This site is created by a software engineer using technologies such as Next.js, Tailwind CSS, TypeScript, and OpenAI API. Additionally, speech recognition feature has been added using Web Speech API.",
            doesntSupport: "Your browser does not support voice assistant. Please try accessing with another browser.",
            firstTime: "Welcome, please tap on the circular icon to start using it."
        }
    },
    [Languages.TR]: {
        Buttons: {
            Assistant: "Kulaklık",
            Clear: "Temizle",
            Language: "Dil"
        },
        Commands: {
            Silence: "sessizlik",
            Stop: "dur",
            Chat: "sohbet"
        },
        CommandResponse: {
            Silence: "Tamam",
            Stop: "Tamam",
            Chat: "Tamam"
        },
        CommandDescription: {
            Title: "Birkaç sesli komutunuz var",
            Silence: "Dinlenmek istemiyorsanız",
            Stop: "Prompt'u durdurmak istediğinizde",
            Chat: "Dinlemek için tekrar etkinleştirin",
        },
        Texts: {
            selectLang: "Bir dil seçin",
            HeadsetAsistantDescription: "Kulaklık modu açıkken, sesli asistanı kullanmak için kulaklık kullanmanız önerilir, daha iyi bir kullanıcı deneyimi için.",
            madeBy: "Tarafından yapıldı",
            mainBanner1: "OpenAI ChatGPT ile",
            mainBanner2: "Sesli Etkileşim!",
            mainDesc: "Artık bir web sitesiyle konuşarak cevaplar alabilirsiniz! OpenAI ChatGPT teknolojisi ile, sadece mikrofonunuzu kullanarak sorular sorun ve cevaplar alın. Konuşarak öğrenin ve bilgi toplayın.",
            mainButton: "Şimdi Dene",
            openAiAdBanner: "OpenAI'nın Gücünü Keşfedin",
            openAiAdShort: "OpenAI'nın Gelişmiş Teknolojisiyle Kullanıcı Deneyiminizi Geliştirin",
            openAiAdDesc: "OpenAI, web sitelerine ve uygulamalara entegre edilebilen sohbet tamamlama gibi doğal dil işleme hizmetleri sunar. Bu hizmetler, insan benzeri dil cevaplarını anlamak ve üretmek için en son makine öğrenimi algoritmalarını kullanır.",
            footerDesc: "Bu site, Next.js, Tailwind CSS, TypeScript ve OpenAI API gibi teknolojiler kullanılarak bir yazılım mühendisi tarafından oluşturuldu. Ayrıca Web Speech API kullanılarak konuşma tanıma özelliği eklenmiştir.",
            doesntSupport: "Tarayıcınız sesli asistanı desteklemiyor. Lütfen başka bir tarayıcı ile erişmeyi deneyin.",
            firstTime: "Hoş geldiniz, kullanmaya başlamak için lütfen yuvarlak simgeye dokunun."
        }
    },
    [Languages.ES]: {
        Buttons: {
            Assistant: "Auriculares",
            Clear: "Limpiar",
            Language: "Idioma"
        },
        Commands: {
            Silence: "silencio",
            Stop: "detener",
            Chat: "charlar"
        },
        CommandResponse: {
            Silence: "De acuerdo",
            Stop: "De acuerdo",
            Chat: "De acuerdo"
        },
        CommandDescription: {
            Title: "Tienes pocos comandos de voz",
            Silence: "Si no quieres ser escuchado",
            Stop: "Cuando quieras detener el comando de voz",
            Chat: "Reactívate para escuchar",
        },
        Texts: {
            selectLang: "Selecciona un idioma",
            HeadsetAsistantDescription: "Para una mejor experiencia de usuario, se recomienda usar auriculares cuando se activa el modo de auriculares para aprovechar al máximo el asistente de voz.",
            madeBy: "creado por",
            mainBanner1: "¡Interacción de voz con",
            mainBanner2: "OpenAI ChatGPT!",
            mainDesc: "¡Ahora puedes obtener respuestas hablando con un sitio web! Con la tecnología OpenAI ChatGPT, todo lo que necesitas hacer es usar tu micrófono para hacer preguntas y recibir respuestas. Aprende y recopila información hablando.",
            mainButton: "Pruébalo ahora",
            openAiAdBanner: "Experimenta el poder de OpenAI",
            openAiAdShort: "Mejora tu experiencia de usuario con la tecnología avanzada de OpenAI",
            openAiAdDesc: "OpenAI ofrece servicios de procesamiento de lenguaje natural, como la completación de chat, que se pueden integrar en sitios web y aplicaciones. Estos servicios utilizan algoritmos de aprendizaje automático de última generación para comprender y generar respuestas en lenguaje similar al humano.",
            footerDesc: "Este sitio web ha sido creado por un ingeniero de software utilizando tecnologías como Next.js, Tailwind CSS, TypeScript y la API de OpenAI. Además, se ha agregado la función de reconocimiento de voz utilizando la API de Web Speech.",
            doesntSupport: "Tu navegador no admite el asistente de voz. Por favor, intenta acceder con otro navegador.",
            firstTime: "Bienvenido, por favor toque el icono circular para empezar a usarlo."
        }
    },
    [Languages.FR]: {
        Buttons: {
            Assistant: "Casque",
            Clear: "Effacer",
            Language: "Langue"
        },
        Commands: {
            Silence: "silence",
            Stop: "arrêter",
            Chat: "discuter"
        },
        CommandResponse: {
            Silence: "D'accord",
            Stop: "D'accord",
            Chat: "D'accord"
        },
        CommandDescription: {
            Title: "Vous avez quelques commandes vocales",
            Silence: "Si vous ne voulez pas être écouté",
            Stop: "Quand vous voulez arrêter l'invite",
            Chat: "Réactivez pour écouter",
        },
        Texts: {
            selectLang: "Sélectionnez une langue",
            HeadsetAsistantDescription: "Pour une meilleure expérience utilisateur, il est conseillé d'utiliser des écouteurs lorsque le mode casque est activé pour utiliser l'assistant vocal.",
            madeBy: "créé par",
            mainBanner1: "Interaction vocale avec",
            mainBanner2: "OpenAI ChatGPT!",
            mainDesc: "Maintenant, vous pouvez obtenir des réponses en parlant à un site web! Avec la technologie OpenAI ChatGPT, il vous suffit d'utiliser votre microphone pour poser des questions et recevoir des réponses. Apprenez et rassemblez des informations en parlant.",
            mainButton: "Essayez-le maintenant",
            openAiAdBanner: "Découvrez la puissance d'OpenAI",
            openAiAdShort: "Améliorez votre expérience utilisateur avec la technologie avancée d'OpenAI",
            openAiAdDesc: "OpenAI offre des services de traitement du langage naturel, tels que la complétion de chat, qui peuvent être intégrés dans des sites web et des applications. Ces services utilisent des algorithmes d'apprentissage automatique de pointe pour comprendre et générer des réponses en langage humain.",
            footerDesc: "Ce site est créé par un ingénieur logiciel en utilisant des technologies telles que Next.js, Tailwind CSS, TypeScript et l'API OpenAI. De plus, la fonctionnalité de reconnaissance vocale a été ajoutée en utilisant l'API Web Speech.",
            doesntSupport: "Votre navigateur ne prend pas en charge l'assistant vocal. Veuillez essayer d'accéder avec un autre navigateur.",
            firstTime: "Bienvenue, veuillez taper sur l'icône circulaire pour commencer à l'utiliser."
        }
    },
    [Languages.DE]: {
        Buttons: {
            Assistant: "Kopfhörer",
            Clear: "Löschen",
            Language: "Sprache"
        },
        Commands: {
            Silence: "Stille",
            Stop: "Stop",
            Chat: "Plaudern"
        },
        CommandResponse: {
            Silence: "In Ordnung",
            Stop: "In Ordnung",
            Chat: "In Ordnung"
        },
        CommandDescription: {
            Title: "Du hast wenige Sprachbefehle",
            Silence: "Wenn du nicht belauscht werden möchtest",
            Stop: "Wenn du die Aufforderung stoppen möchtest",
            Chat: "Reaktivieren, um zuzuhören",
        },
        Texts: {
            selectLang: "Wähle eine Sprache",
            HeadsetAsistantDescription: "Für ein besseres Nutzererlebnis wird empfohlen, beim Einschalten des Headset-Modus Kopfhörer zu verwenden, um den Sprachassistenten zu nutzen.",
            madeBy: "Erstellt von",
            mainBanner1: "Sprachinteraktion mit",
            mainBanner2: "OpenAI ChatGPT!",
            mainDesc: "Jetzt kannst du Antworten bekommen, indem du mit einer Website sprichst! Mit der OpenAI ChatGPT-Technologie musst du nur dein Mikrofon verwenden, um Fragen zu stellen und Antworten zu erhalten. Lerne und sammle Informationen durch Spracheingabe.",
            mainButton: "Jetzt ausprobieren",
            openAiAdBanner: "Erlebe die Kraft von OpenAI",
            openAiAdShort: "Verbessere dein Nutzererlebnis mit OpenAI's fortschrittlicher Technologie",
            openAiAdDesc: "OpenAI bietet Natural Language Processing-Services wie Chat-Completion an, die in Websites und Anwendungen integriert werden können. Diese Services verwenden modernste Machine-Learning-Algorithmen, um menschenähnliche Sprachantworten zu verstehen und zu generieren.",
            footerDesc: "Diese Seite wurde von einem Softwareingenieur unter Verwendung von Technologien wie Next.js, Tailwind CSS, TypeScript und der OpenAI-API erstellt. Zusätzlich wurde die Spracherkennungsfunktion mit der Web Speech API hinzugefügt.",
            doesntSupport: "Dein Browser unterstützt keinen Sprachassistenten. Bitte versuche es mit einem anderen Browser.",
            firstTime: "Willkommen, bitte tippen Sie auf das kreisförmige Symbol, um es zu starten."
        }
    },
    [Languages.IT]: {
        Buttons: {
            Assistant: "Cuffie",
            Clear: "Pulisci",
            Language: "Lingua"
        },
        Commands: {
            Silence: "silenzio",
            Stop: "stop",
            Chat: "chat"
        },
        CommandResponse: {
            Silence: "Certamente",
            Stop: "Certamente",
            Chat: "Certamente"
        },
        CommandDescription: {
            Title: "Hai pochi comandi vocali",
            Silence: "Se non vuoi essere ascoltato",
            Stop: "Quando vuoi interrompere il prompt",
            Chat: "Riattivare per ascoltare",
        },
        Texts: {
            selectLang: "Seleziona una lingua",
            HeadsetAsistantDescription: "Per un'esperienza utente migliore, è consigliabile utilizzare le cuffie quando la modalità cuffia è attivata per utilizzare l'assistente vocale.",
            madeBy: "realizzato da",
            mainBanner1: "Interazione Vocale con",
            mainBanner2: "OpenAI ChatGPT!",
            mainDesc: "Ora, puoi ottenere risposte parlando con un sito web! Con la tecnologia OpenAI ChatGPT, tutto ciò che devi fare è utilizzare il tuo microfono per fare domande e ricevere risposte. Impara e raccogli informazioni parlando.",
            mainButton: "Provalo ora",
            openAiAdBanner: "Esperienza la Potenza di OpenAI",
            openAiAdShort: "Aggiorna la tua esperienza utente con la tecnologia avanzata di OpenAI",
            openAiAdDesc: "OpenAI offre servizi di elaborazione del linguaggio naturale, come il completamento della chat, che possono essere integrati in siti web e applicazioni. Questi servizi utilizzano algoritmi di apprendimento automatico all'avanguardia per capire e generare risposte linguistiche simili a quelle umane.",
            footerDesc: "Questo sito è stato creato da un ingegnere del software utilizzando tecnologie come Next.js, Tailwind CSS, TypeScript e OpenAI API. Inoltre, è stata aggiunta la funzione di riconoscimento vocale utilizzando Web Speech API.",
            doesntSupport: "Il tuo browser non supporta l'assistente vocale. Prova ad accedere con un altro browser.",
            firstTime: "Benvenuto, per favore tocca sull'icona circolare per iniziare ad usarlo."
        },

    },
    [Languages.SQ]: {
        Buttons: {
            Assistant: "Kufje",
            Clear: "Pastro",
            Language: "Gjuha"
        },
        Commands: {
            Silence: "heshtje",
            Stop: "stop",
            Chat: "bisedë"
        },
        CommandResponse: {
            Silence: "Sigurisht",
            Stop: "Sigurisht",
            Chat: "Sigurisht"
        },
        CommandDescription: {
            Title: "Keni pak komanda zëri",
            Silence: "Nëse nuk dëshironi të dëgjoheni",
            Stop: "Kur dëshironi të ndaloni udhëzuesin",
            Chat: "Riktheni për të dëgjuar",
        },
        Texts: {
            selectLang: "Zgjidhni një gjuhë",
            HeadsetAsistantDescription: "Për një përvojë më të mirë të përdoruesit, këshillohet të përdorni kufje kur është aktivizuar mënyra e kufjeve për të përdorur ndihmën e zërit.",
            madeBy: "krijuar nga",
            mainBanner1: "Interaksioni Zërit me",
            mainBanner2: "OpenAI ChatGPT!",
            mainDesc: "Tani mund të merrni përgjigje duke folur me një faqe webi! Me teknologjinë OpenAI ChatGPT, gjithçka që ju duhet të bëni është të përdorni mikrofonin tuaj për të pyetur pyetje dhe marrë përgjigje. Mësoni dhe mbledhni informacion duke folur.",
            mainButton: "Provoni Tani",
            openAiAdBanner: "Përvoja e Fuqisë së OpenAI",
            openAiAdShort: "Përmirësoni Përvojën Tuaj të Përdoruesit me Teknologjinë e Avancuar të OpenAI",
            openAiAdDesc: "OpenAI ofron shërbime përpunimi të gjuhës natyrore, si plotësimi i bisedave, që mund të integrohen në faqe webi dhe aplikacione. Këto shërbime përdorin algoritme më të fundit të mësimit të makinës për të kuptuar dhe gjeneruar përgjigje në gjuhën njerëzore.",
            footerDesc: "Kjo faqe është krijuar nga një inxhinier softueri duke përdorur teknologjitë si Next.js, Tailwind CSS, TypeScript dhe OpenAI API. Gjithashtu, është shtuar veçori njohjes së fjalës duke përdorur Web Speech API.",
            doesntSupport: "Shfletuesi juaj nuk e mbështet ndihmën e zërit. Ju lutemi provoni të qaseni me një shfletues tjetër.",
            firstTime: "Mirësevini, ju lutem shtypni në ikonën rrethore për të filluar të përdorni atë."
        }
    },
    [Languages.JA]: {
        Buttons: {
            Assistant: "ヘッドセット",
            Clear: "クリア",
            Language: "言語"
        },
        Commands: {
            Silence: "無音",
            Stop: "停止",
            Chat: "チャット"
        },
        CommandResponse: {
            Silence: "了解しました",
            Stop: "了解しました",
            Chat: "了解しました"
        },
        CommandDescription: {
            Title: "音声コマンドがあります",
            Silence: "リスニングを中止する場合",
            Stop: "プロンプトを停止したい場合",
            Chat: "再度リスニングを開始する場合",
        },
        Texts: {
            selectLang: "言語を選択してください",
            HeadsetAsistantDescription: "ヘッドセットモードをオンにする場合は、ヘッドフォンを使用することをお勧めします。これにより、音声アシスタントを利用できます。",
            madeBy: "作成者",
            mainBanner1: "OpenAI ChatGPTとの",
            mainBanner2: "音声インタラクション！",
            mainDesc: "今、Webサイトに話しかけることで答えを得ることができます！ OpenAI ChatGPT技術を使用すると、マイクを使用して質問し、回答を受け取るだけで、学習して情報を収集できます。",
            mainButton: "今すぐ試してみる",
            openAiAdBanner: "OpenAIの力を体験しよう",
            openAiAdShort: "OpenAIの高度な技術でユーザーエクスペリエンスをアップグレードしよう",
            openAiAdDesc: "OpenAIは、ウェブサイトやアプリケーションに統合できるチャット補完などの自然言語処理サービスを提供しています。これらのサービスは、最先端の機械学習アルゴリズムを使用して、人間に似た言語の応答を理解して生成します。",
            footerDesc: "このサイトは、Next.js、Tailwind CSS、TypeScript、およびOpenAI APIなどの技術を使用してソフトウェアエンジニアによって作成されました。さらに、Web Speech APIを使用して音声認識機能が追加されました。",
            doesntSupport: "お使いのブラウザは音声アシスタントに対応していません。別のブラウザでアクセスしてください。",
            firstTime: "ようこそ、使用を開始するには円形のアイコンをタップしてください。"
        }
    },
    [Languages.KO]: {
        Buttons: {
            Assistant: "헤드셋",
            Clear: "지우기",
            Language: "언어"
        },
        Commands: {
            Silence: "조용히",
            Stop: "멈추기",
            Chat: "대화하기"
        },
        CommandResponse: {
            Silence: "확인했습니다",
            Stop: "확인했습니다",
            Chat: "확인했습니다"
        },
        CommandDescription: {
            Title: "음성 명령어가 있습니다",
            Silence: "들리고 싶지 않을 때",
            Stop: "프롬프트를 중지하려면",
            Chat: "듣기를 다시 활성화하려면",
        },
        Texts: {
            selectLang: "언어 선택",
            HeadsetAsistantDescription: "헤드셋 모드가 켜져 있을 때는 헤드폰을 사용하여 음성 비서를 활용하는 것이 좋습니다.",
            madeBy: "만든이",
            mainBanner1: "OpenAI ChatGPT와",
            mainBanner2: "음성 상호작용!",
            mainDesc: "이제 웹사이트에 말하면 답변을 얻을 수 있습니다! OpenAI ChatGPT 기술을 활용하여 마이크를 사용하여 질문하고 응답을받기 만하면됩니다. 말하는 것으로 학습하고 정보를 수집하십시오.",
            mainButton: "지금 시도해보세요",
            openAiAdBanner: "OpenAI의 파워를 경험하세요",
            openAiAdShort: "OpenAI의 고급 기술로 사용자 경험을 업그레이드하세요",
            openAiAdDesc: "OpenAI는 채팅 완성과 같은 자연어 처리 서비스를 제공하며, 이를 웹 사이트 및 애플리케이션에 통합 할 수 있습니다. 이 서비스는 최첨단 기계 학습 알고리즘을 사용하여 인간과 유사한 언어 응답을 이해하고 생성합니다.",
            footerDesc: "이 사이트는 Next.js, Tailwind CSS, TypeScript 및 OpenAI API와 같은 기술을 사용하여 소프트웨어 엔지니어에 의해 작성되었습니다. 또한 Web Speech API를 사용하여 음성 인식 기능을 추가했습니다.",
            doesntSupport: "이 브라우저는 음성 비서를 지원하지 않습니다. 다른 브라우저로 접속하십시오.",
            firstTime: "환영합니다. 사용을 시작하려면 원형 아이콘을 탭하세요."
        }
    },
    [Languages.PT]: {
        Buttons: {
            Assistant: "Fones de Ouvido",
            Clear: "Limpar",
            Language: "Língua"
        },
        Commands: {
            Silence: "silêncio",
            Stop: "parar",
            Chat: "conversar"
        },
        CommandResponse: {
            Silence: "Certo",
            Stop: "Certo",
            Chat: "Certo"
        },
        CommandDescription: {
            Title: "Você tem alguns comandos de voz",
            Silence: "Se você não quer ser ouvido",
            Stop: "Quando quiser parar de ouvir",
            Chat: "Reativar para ouvir",
        },
        Texts: {
            selectLang: "Selecione uma língua",
            HeadsetAsistantDescription: "Para uma melhor experiência do usuário, é aconselhável usar fones de ouvido quando o modo de fones de ouvido estiver ligado para utilizar o assistente de voz.",
            madeBy: "feito por",
            mainBanner1: "Interação por voz com",
            mainBanner2: "OpenAI ChatGPT!",
            mainDesc: "Agora, você pode obter respostas falando com um site! Com a tecnologia OpenAI ChatGPT, tudo o que você precisa fazer é usar seu microfone para fazer perguntas e receber respostas. Aprenda e obtenha informações falando.",
            mainButton: "Experimente Agora",
            openAiAdBanner: "Experimente o Poder do OpenAI",
            openAiAdShort: "Atualize sua Experiência do Usuário com a Tecnologia Avançada da OpenAI",
            openAiAdDesc: "A OpenAI oferece serviços de processamento de linguagem natural, como conclusão de chat, que podem ser integrados a sites e aplicativos. Esses serviços usam algoritmos de aprendizado de máquina de ponta para entender e gerar respostas de linguagem semelhante à humana.",
            footerDesc: "Este site é criado por um engenheiro de software usando tecnologias como Next.js, Tailwind CSS, TypeScript e OpenAI API. Além disso, a função de reconhecimento de fala foi adicionada usando a Web Speech API.",
            doesntSupport: "Seu navegador não suporta assistente de voz. Tente acessar com outro navegador.",
            firstTime: "Bem-vindo, por favor toque no ícone circular para começar a usá-lo."
        }
    },
    [Languages.RU]: {
        Buttons: {
            Assistant: "Гарнитура",
            Clear: "Очистить",
            Language: "Язык"
        },
        Commands: {
            Silence: "тишина",
            Stop: "стоп",
            Chat: "чат"
        },
        CommandResponse: {
            Silence: "Хорошо",
            Stop: "Хорошо",
            Chat: "Хорошо"
        },
        CommandDescription: {
            Title: "У вас есть несколько голосовых команд",
            Silence: "Если вы не хотите, чтобы вас слушали",
            Stop: "Когда вы хотите остановить запрос",
            Chat: "Включить, чтобы слушать",
        },
        Texts: {
            selectLang: "Выберите язык",
            HeadsetAsistantDescription: "Для лучшего пользовательского опыта рекомендуется использовать наушники, когда включен режим гарнитуры, чтобы использовать голосового помощника.",
            madeBy: "сделано",
            mainBanner1: "Голосовое взаимодействие с",
            mainBanner2: "OpenAI ChatGPT!",
            mainDesc: "Теперь вы можете получать ответы, общаясь с веб-сайтом! С технологией OpenAI ChatGPT вам нужно лишь использовать микрофон, чтобы задавать вопросы и получать ответы. Учитесь и собирайте информацию, разговаривая.",
            mainButton: "Попробуйте сейчас",
            openAiAdBanner: "Ощутите силу OpenAI",
            openAiAdShort: "Обновите свой пользовательский опыт с помощью передовых технологий OpenAI",
            openAiAdDesc: "OpenAI предлагает услуги обработки естественного языка, такие как автозаполнение чата, которые могут быть интегрированы в веб-сайты и приложения. Эти услуги используют современные алгоритмы машинного обучения для понимания и создания ответов, похожих на человеческий язык.",
            footerDesc: "Этот сайт создан программным инженером с использованием технологий, таких как Next.js, Tailwind CSS, TypeScript и OpenAI API. Кроме того, функция распознавания речи добавлена с использованием Web Speech API.",
            doesntSupport: "Ваш браузер не поддерживает голосового помощника. Попробуйте получить доступ с помощью другого браузера.",
            firstTime: "Добро пожаловать, пожалуйста, нажмите на круглую иконку, чтобы начать использование."
        }
    },
    [Languages.ZH]: {
        Buttons: {
            Assistant: "耳机",
            Clear: "清除",
            Language: "语言"
        },
        Commands: {
            Silence: "静音",
            Stop: "停止",
            Chat: "聊天"
        },
        CommandResponse: {
            Silence: "好的",
            Stop: "好的",
            Chat: "好的"
        },
        CommandDescription: {
            Title: "您有少量语音命令",
            Silence: "如果您不想被听到",
            Stop: "当您想停止提示时",
            Chat: "重新启用以便听取"
        },
        Texts: {
            selectLang: "选择语言",
            HeadsetAsistantDescription: "为了更好的用户体验，建议您在耳机模式下使用耳机以利用语音助手。",
            madeBy: "制作人",
            mainBanner1: "使用",
            mainBanner2: "OpenAI ChatGPT 进行语音交互！",
            mainDesc: "现在，您可以通过与网站交谈来获取答案！使用 OpenAI ChatGPT 技术，您只需要使用麦克风提出问题并接收回答。通过语音学习和收集信息。",
            mainButton: "立即尝试",
            openAiAdBanner: "体验 OpenAI 的强大功能",
            openAiAdShort: "使用 OpenAI 的先进技术升级您的用户体验",
            openAiAdDesc: "OpenAI 提供自然语言处理服务，如聊天完成，可以集成到网站和应用程序中。这些服务使用最先进的机器学习算法来理解和生成人类语言响应。",
            footerDesc: "本网站是由软件工程师使用 Next.js、Tailwind CSS、TypeScript 和 OpenAI API 等技术创建的。此外，还使用 Web Speech API 添加了语音识别功能。",
            doesntSupport: "您的浏览器不支持语音助手，请尝试使用另一个浏览器。",
            firstTime: "欢迎使用，请点击圆形图标开始使用。"
        }
    },
    [Languages.AR]: {
        Buttons: {
            Assistant: "السماعة",
            Clear: "مسح",
            Language: "اللغة"
        },
        Commands: {
            Silence: "صمت",
            Stop: "توقف",
            Chat: "دردشة"
        },
        CommandResponse: {
            Silence: "حسناً",
            Stop: "حسناً",
            Chat: "حسناً"
        },
        CommandDescription: {
            Title: "لديك بعض الأوامر الصوتية",
            Silence: "إذا لم ترغب في الاستماع",
            Stop: "عندما تريد إيقاف التعليمات الصوتية",
            Chat: "إعادة التنشيط للاستماع",
        },
        Texts: {
            selectLang: "حدد لغة",
            HeadsetAsistantDescription: "للحصول على تجربة مستخدم أفضل، يُنصَح باستخدام سماعات الرأس عند تشغيل وضع السماعة للاستفادة من مساعد الصوت.",
            madeBy: "من إنشاء",
            mainBanner1: "تفاعل صوتي مع",
            mainBanner2: "OpenAI ChatGPT!",
            mainDesc: "الآن، يمكنك الحصول على الإجابات عن طريق الحديث إلى موقع الويب! مع تقنية OpenAI ChatGPT، كل ما عليك فعله هو استخدام الميكروفون لطرح الأسئلة والحصول على الردود. تعلم وجمع المعلومات عن طريق الكلام.",
            mainButton: "جرب الآن",
            openAiAdBanner: "تجربة قوة OpenAI",
            openAiAdShort: "تحسين تجربة المستخدم الخاصة بك مع تقنية OpenAI المتقدمة",
            openAiAdDesc: "تقدم OpenAI خدمات معالجة اللغة الطبيعية، مثل إكمال الدردشة، التي يمكن دمجها في مواقع الويب والتطبيقات. تستخدم هذه الخدمات خوارزميات التعلم الآلي الحديثة لفهم وإنشاء ردود لغوية تشبه الإنسان.",
            footerDesc: "تم إنشاء هذا الموقع من قبل مهندس برمجيات باستخدام تقنيات مثل Next.js و Tailwind CSS و TypeScript و OpenAI API. تمتإضافة ميزة التعرف على الكلام باستخدام واجهة برمجة التطبيقات للكلام على الويب.",
            doesntSupport: "متصفحك لا يدعم مساعد الصوت. يرجى المحاولة الوصول إلى الموقع باستخدام متصفح آخر.",
            firstTime: "مرحبًا، يرجى الضغط على الرمز الدائري لبدء الاستخدام."
        }
    },
    [Languages.NL]: {
        Buttons: {
            Assistant: "Koptelefoon",
            Clear: "Wissen",
            Language: "Taal"
        },
        Commands: {
            Silence: "stilte",
            Stop: "stop",
            Chat: "chat"
        },
        CommandResponse: {
            Silence: "Oké",
            Stop: "Oké",
            Chat: "Oké"
        },
        CommandDescription: {
            Title: "U heeft een paar spraakopdrachten",
            Silence: "Als u niet wilt worden beluisterd",
            Stop: "Wanneer u de prompt wilt stoppen",
            Chat: "Activeer opnieuw om te luisteren",
        },
        Texts: {
            selectLang: "Selecteer een taal",
            HeadsetAsistantDescription: "Voor een betere gebruikerservaring wordt het aanbevolen om een koptelefoon te gebruiken wanneer de koptelefoonmodus is ingeschakeld om de spraakassistent te gebruiken.",
            madeBy: "gemaakt door",
            mainBanner1: "Steminteractie met",
            mainBanner2: "OpenAI ChatGPT!",
            mainDesc: "Nu kunt u antwoorden krijgen door met een website te praten! Met de OpenAI ChatGPT-technologie hoeft u alleen maar uw microfoon te gebruiken om vragen te stellen en antwoorden te ontvangen. Leer en verzamel informatie door te spreken.",
            mainButton: "Probeer het nu",
            openAiAdBanner: "Ervaar de kracht van OpenAI",
            openAiAdShort: "Upgrade uw gebruikerservaring met OpenAI's geavanceerde technologie",
            openAiAdDesc: "OpenAI biedt natuurlijke taalverwerkingsservices, zoals chatvoltooiing, die kunnen worden geïntegreerd in websites en applicaties. Deze services gebruiken geavanceerde machine learning-algoritmen om mensachtige taalreacties te begrijpen en te genereren.",
            footerDesc: "Deze site is gemaakt door een software-ingenieur met behulp van technologieën zoals Next.js, Tailwind CSS, TypeScript en OpenAI API. Bovendien is spraakherkenningsfunctionaliteit toegevoegd met behulp van de Web Speech API.",
            doesntSupport: "Uw browser ondersteunt geen spraakassistent. Probeer het met een andere browser.",
            firstTime: "Welkom, tik op het ronde icoon om te beginnen met gebruiken."
        }
    },
    [Languages.PL]: {
        Buttons: {
            Assistant: "Słuchawki",
            Clear: "Wyczyść",
            Language: "Język"
        },
        Commands: {
            Silence: "cisza",
            Stop: "stop",
            Chat: "czat"
        },
        CommandResponse: {
            Silence: "Oczywiście",
            Stop: "Oczywiście",
            Chat: "Oczywiście"
        },
        CommandDescription: {
            Title: "Masz kilka poleceń głosowych",
            Silence: "Jeśli nie chcesz być słyszany",
            Stop: "Kiedy chcesz zatrzymać polecenie",
            Chat: "Reaktywuj, aby słuchać",
        },
        Texts: {
            selectLang: "Wybierz język",
            HeadsetAsistantDescription: "Dla lepszej obsługi zaleca się korzystanie z słuchawek podczas korzystania z trybu słuchawkowego, aby wykorzystać asystenta głosowego.",
            madeBy: "stworzone przez",
            mainBanner1: "Interakcja głosowa z",
            mainBanner2: "OpenAI ChatGPT!",
            mainDesc: "Teraz możesz uzyskać odpowiedzi, rozmawiając z witryną! Dzięki technologii OpenAI ChatGPT wystarczy, że użyjesz mikrofonu, aby zadawać pytania i otrzymywać odpowiedzi. Ucz się i zbieraj informacje, mówiąc.",
            mainButton: "Wypróbuj teraz",
            openAiAdBanner: "Doświadcz siły OpenAI",
            openAiAdShort: "Ulepsz swoje doświadczenia użytkownika za pomocą zaawansowanej technologii OpenAI",
            openAiAdDesc: "OpenAI oferuje usługi przetwarzania języka naturalnego, takie jak uzupełnienie rozmów, które można zintegrować z witrynami i aplikacjami. Usługi te wykorzystują najnowocześniejsze algorytmy uczenia maszynowego do zrozumienia i generowania odpowiedzi przypominających ludzki język.",
            footerDesc: "Ta witryna została stworzona przez inżyniera oprogramowania przy użyciu technologii takich jak Next.js, Tailwind CSS, TypeScript i API OpenAI. Dodatkowo została dodana funkcja rozpoznawania mowy przy użyciu interfejsu Web Speech API.",
            doesntSupport: "Twoja przeglądarka nie obsługuje asystenta głosowego. Spróbuj uzyskać dostęp przy użyciu innej przeglądarki.",
            firstTime: "Witaj, proszę kliknąć w okrągłą ikonę, aby zacząć korzystać."
        }
    },
    [Languages.SV]: {
        Buttons: {
            Assistant: "Headset",
            Clear: "Rensa",
            Language: "Språk"
        },
        Commands: {
            Silence: "tystnad",
            Stop: "stopp",
            Chat: "chatta"
        },
        CommandResponse: {
            Silence: "Visst",
            Stop: "Visst",
            Chat: "Visst"
        },
        CommandDescription: {
            Title: "Du har några röstkommandon",
            Silence: "Om du inte vill bli lyssnad på",
            Stop: "När du vill stoppa prompten",
            Chat: "Aktivera för att lyssna igen",
        },
        Texts: {
            selectLang: "Välj ett språk",
            HeadsetAsistantDescription: "För en bättre användarupplevelse rekommenderas det att använda hörlurar när headset-läget är aktiverat för att använda röstassistenten.",
            madeBy: "skapad av",
            mainBanner1: "Röstinteraktion med",
            mainBanner2: "OpenAI ChatGPT!",
            mainDesc: "Nu kan du få svar genom att prata med en webbplats! Med OpenAI ChatGPT-teknik behöver du bara använda din mikrofon för att ställa frågor och få svar. Lär och samla information genom att tala.",
            mainButton: "Prova det nu",
            openAiAdBanner: "Upplev kraften i OpenAI",
            openAiAdShort: "Uppgradera din användarupplevelse med OpenAI:s avancerade teknik",
            openAiAdDesc: "OpenAI erbjuder naturligt språkbehandlings-tjänster, såsom chat-komplettering, som kan integreras i webbplatser och applikationer. Dessa tjänster använder avancerade maskininlärningsalgoritmer för att förstå och generera mänskligt liknande språksvar.",
            footerDesc: "Denna webbplats skapades av en mjukvaruingenjör med hjälp av tekniker som Next.js, Tailwind CSS, TypeScript och OpenAI API. Dessutom har röstigenkänningsfunktionen lagts till med hjälp av Web Speech API.",
            doesntSupport: "Din webbläsare stöder inte röstassistent. Försök att komma åt med en annan webbläsare.",
            firstTime: "Välkommen, tryck på den cirkulära ikonen för att börja använda den."
        }
    },
    [Languages.DA]: {
        Buttons: {
            Assistant: "Headset",
            Clear: "Ryd",
            Language: "Sprog"
        },
        Commands: {
            Silence: "stilhed",
            Stop: "stop",
            Chat: "chat"
        },
        CommandResponse: {
            Silence: "Sådan",
            Stop: "Sådan",
            Chat: "Sådan"
        },
        CommandDescription: {
            Title: "Du har få stemmekommandoer",
            Silence: "Hvis du ikke vil blive lyttet til",
            Stop: "Når du vil stoppe prompten",
            Chat: "Genaktiver for at lytte",
        },
        Texts: {
            selectLang: "Vælg et sprog",
            HeadsetAsistantDescription: "For en bedre brugeroplevelse anbefales det at bruge hovedtelefoner, når headsettilstanden er tændt, for at udnytte stemmeassistenten.",
            madeBy: "lavet af",
            mainBanner1: "Stemmeinteraktion med",
            mainBanner2: "OpenAI ChatGPT!",
            mainDesc: "Nu kan du få svar ved at tale til en hjemmeside! Med OpenAI ChatGPT-teknologi skal du bare bruge din mikrofon til at stille spørgsmål og modtage svar. Lær og indsamle information ved at tale.",
            mainButton: "Prøv det nu",
            openAiAdBanner: "Oplev kraften i OpenAI",
            openAiAdShort: "Opgrader din brugeroplevelse med OpenAI's avancerede teknologi",
            openAiAdDesc: "OpenAI tilbyder naturlig sprogbehandlingstjenester, såsom chat-afslutning, der kan integreres i websteder og applikationer. Disse tjenester bruger state-of-the-art machine learning-algoritmer til at forstå og generere menneskelignende sprogsvare.",
            footerDesc: "Dette websted er oprettet af en softwareingeniør ved hjælp af teknologier som Next.js, Tailwind CSS, TypeScript og OpenAI API. Derudover er der tilføjet talegenkendelsesfunktion ved hjælp af Web Speech API.",
            doesntSupport: "Din browser understøtter ikke stemmeassistenten. Prøv venligst at få adgang med en anden browser.",
            firstTime: "Velkommen, tryk på den cirkulære ikon for at starte brugen."
        }
    },
    [Languages.NO]: {
        Buttons: {
            Assistant: "Headset",
            Clear: "Tøm",
            Language: "Språk"
        },
        Commands: {
            Silence: "stillhet",
            Stop: "stopp",
            Chat: "prat"
        },
        CommandResponse: {
            Silence: "Selvfølgelig",
            Stop: "Selvfølgelig",
            Chat: "Selvfølgelig"
        },
        CommandDescription: {
            Title: "Du har noen stemmekommandoer",
            Silence: "Hvis du ikke ønsker å bli lyttet til",
            Stop: "Når du vil stoppe påminnelsen",
            Chat: "Reaktiver for å lytte",
        },
        Texts: {
            selectLang: "Velg et språk",
            HeadsetAsistantDescription: "For en bedre brukeropplevelse, anbefales det å bruke hodetelefoner når headsetmodus er aktivert for å utnytte stemmeassistenten.",
            madeBy: "laget av",
            mainBanner1: "Stemmeinteraksjon med",
            mainBanner2: "OpenAI ChatGPT!",
            mainDesc: "Nå kan du få svar ved å snakke til et nettsted! Med OpenAI ChatGPT-teknologi, alt du trenger å gjøre er å bruke mikrofonen din for å stille spørsmål og få svar. Lær og samle informasjon ved å snakke.",
            mainButton: "Prøv det nå",
            openAiAdBanner: "Opplev kraften til OpenAI",
            openAiAdShort: "Oppgrader brukeropplevelsen din med OpenAI's avanserte teknologi",
            openAiAdDesc: "OpenAI tilbyr tjenester for naturlig språkbehandling, for eksempel chatutfylling, som kan integreres i nettsteder og applikasjoner. Disse tjenestene bruker toppmoderne maskinlæringsalgoritmer for å forstå og generere språksvar som ligner på menneskelig språk.",
            footerDesc: "Dette nettstedet er opprettet av en programvareingeniør ved hjelp av teknologier som Next.js, Tailwind CSS, TypeScript og OpenAI API. I tillegg er talegjenkjenningsfunksjonen lagt til ved hjelp av Web Speech API.",
            doesntSupport: "Nettleseren din støtter ikke stemmeassistent. Vennligst prøv å få tilgang med en annen nettleser.",
            firstTime: "Velkommen, vennligst trykk på den sirkulære ikonet for å begynne å bruke den."
        }
    },
    [Languages.FI]: {
        Buttons: {
            Assistant: "Kuulokkeet",
            Clear: "Tyhjennä",
            Language: "Kieli"
        },
        Commands: {
            Silence: "hiljaisuus",
            Stop: "lopetus",
            Chat: "keskustelu"
        },
        CommandResponse: {
            Silence: "Selvä",
            Stop: "Selvä",
            Chat: "Selvä"
        },
        CommandDescription: {
            Title: "Sinulla on muutama äänikomento",
            Silence: "Jos et halua tulla kuulluksi",
            Stop: "Kun haluat lopettaa",
            Chat: "Aktivoidaksesi kuuntelun uudelleen",
        },
        Texts: {
            selectLang: "Valitse kieli",
            HeadsetAsistantDescription: "Parempaa käyttökokemusta varten, kun kuulokemoodi on käytössä, suosittelemme käyttämään kuulokkeita hyödyntääksesi äänipalvelua.",
            madeBy: "luonut",
            mainBanner1: "Äänitunnistus",
            mainBanner2: "OpenAI ChatGPT:n kanssa!",
            mainDesc: "Nyt voit saada vastauksia puhumalla verkkosivustolle! OpenAI ChatGPT-tekniikan avulla sinun tarvitsee vain käyttää mikrofonia kysyäksesi kysymyksiä ja vastaanottaa vastauksia. Opiskele ja kerää tietoa puhumalla.",
            mainButton: "Kokeile nyt",
            openAiAdBanner: "Koe OpenAI:n voima",
            openAiAdShort: "Päivitä käyttäjäkokemustasi OpenAI:n edistyksellisellä teknologialla",
            openAiAdDesc: "OpenAI tarjoaa luonnollisen kielen käsittelyn palveluita, kuten keskustelun täydennystä, jotka voidaan integroida verkkosivustoille ja sovelluksiin. Nämä palvelut käyttävät alan johtavia koneoppimisalgoritmeja ihmismäisen kielen ymmärtämiseen ja tuottamiseen.",
            footerDesc: "Tämä sivusto on luotu ohjelmistokehittäjän toimesta käyttäen teknologioita kuten Next.js, Tailwind CSS, TypeScript ja OpenAI API. Lisäksi puheentunnistustoiminto on lisätty käyttämällä Web Speech API:a.",
            doesntSupport: "Selaimesi ei tue äänipalvelua. Yritä käyttää toisella selaimella.",
            firstTime: "Tervetuloa, aloittaaksesi käytön napauta pyöreää kuvaketta."
        }
    },
    [Languages.ID]: {
        Buttons: {
            Assistant: "Headset",
            Clear: "Bersihkan",
            Language: "Bahasa"
        },
        Commands: {
            Silence: "diam",
            Stop: "berhenti",
            Chat: "obrolan"
        },
        CommandResponse: {
            Silence: "Baiklah",
            Stop: "Baiklah",
            Chat: "Baiklah"
        },
        CommandDescription: {
            Title: "Anda memiliki beberapa perintah suara",
            Silence: "Jika Anda tidak ingin didengarkan",
            Stop: "Ketika Anda ingin menghentikan prompt",
            Chat: "Aktifkan kembali untuk mendengarkan",
        },
        Texts: {
            selectLang: "Pilih bahasa",
            HeadsetAsistantDescription: "Untuk pengalaman pengguna yang lebih baik, disarankan untuk menggunakan headphone saat mode headset diaktifkan untuk memanfaatkan asisten suara.",
            madeBy: "dibuat oleh",
            mainBanner1: "Interaksi Suara dengan",
            mainBanner2: "OpenAI ChatGPT!",
            mainDesc: "Sekarang, Anda dapat mendapatkan jawaban dengan berbicara ke sebuah situs web! Dengan teknologi OpenAI ChatGPT, yang perlu Anda lakukan adalah menggunakan mikrofon Anda untuk bertanya dan menerima respons. Pelajari dan kumpulkan informasi dengan berbicara.",
            mainButton: "Coba Sekarang",
            openAiAdBanner: "Alami Kehebatan OpenAI",
            openAiAdShort: "Tingkatkan Pengalaman Pengguna Anda dengan Teknologi Canggih OpenAI",
            openAiAdDesc: "OpenAI menawarkan layanan pemrosesan bahasa alami, seperti penyelesaian obrolan, yang dapat diintegrasikan ke dalam situs web dan aplikasi. Layanan ini menggunakan algoritma pembelajaran mesin mutakhir untuk memahami dan menghasilkan respons bahasa yang mirip dengan manusia.",
            footerDesc: "Situs ini dibuat oleh seorang insinyur perangkat lunak menggunakan teknologi seperti Next.js, Tailwind CSS, TypeScript, dan API OpenAI. Selain itu, fitur pengenalan suara telah ditambahkan menggunakan Web Speech API.",
            doesntSupport: "Browser Anda tidak mendukung asisten suara. Silakan coba akses dengan browser lain.",
            firstTime: "Selamat datang, silakan ketuk ikon lingkaran untuk mulai menggunakannya."
        }
    },
    [Languages.HI]: {
        Buttons: {
            Assistant: "हेडसेट",
            Clear: "हटाएं",
            Language: "भाषा"
        },
        Commands: {
            Silence: "चुप्पी",
            Stop: "रुकें",
            Chat: "चैट"
        },
        CommandResponse: {
            Silence: "ठीक है",
            Stop: "ठीक है",
            Chat: "ठीक है"
        },
        CommandDescription: {
            Title: "आपके पास कुछ आवाज़ आदेश हैं",
            Silence: "यदि आप सुने जाने से इनकार करते हैं",
            Stop: "जब आप प्रॉम्प्ट बंद करना चाहते हैं",
            Chat: "सुनने के लिए फिर से सक्रिय करें",
        },
        Texts: {
            selectLang: "एक भाषा चुनें",
            HeadsetAsistantDescription: "यदि हेडसेट मोड चालू है, तो उपयोगकर्ता अनुभव के लिए सलाह दी जाती है कि वह हेडफ़ोन का उपयोग करें। वॉयस असिस्टेंट का उपयोग करने के लिए।",
            madeBy: "द्वारा बनाई गई",
            mainBanner1: "वॉइस इंटरेक्शन विथ",
            mainBanner2: "ओपनएआई चैटजीपीटी!",
            mainDesc: "अब आप एक वेबसाइट से बातचीत करके उत्तर पा सकते हैं! ओपनएआई चैटजीपीटी तकनीक के साथ, आपको केवल अपनी माइक्रोफ़ोन का उपयोग करके प्रश्न पूछने और उत्तर प्राप्त करने की आवश्यकता होती है। बोलकर सीखें और जानकारी जुटाएं।",
            mainButton: "अभ",
            openAiAdBanner: "ओपनएआई की ताकत का अनुभव करें",
            openAiAdShort: "ओपनएआई की उन्नत प्रौद्योगिकी के साथ अपने उपयोगकर्ता अनुभव को अपग्रेड करें",
            openAiAdDesc: "ओपनएआई एक प्राकृतिक भाषा प्रोसेसिंग सेवाओं की पेशकश करता है, जैसे कि चैट पूर्णता, जो वेबसाइटों और एप्लिकेशन में एकीकृत किए जा सकते हैं। इन सेवाओं में उन्नत मशीन लर्निंग एल्गोरिथ्म का उपयोग मानव जैसी भाषा के जवाबों को समझने और उत्पन्न करने के लिए किया जाता है।",
            footerDesc: "इस साइट को एक सॉफ्टवेयर इंजीनियर ने अगली तकनीकों जैसे Next.js, Tailwind CSS, TypeScript और OpenAI API का उपयोग करके बनाया है। इसके अलावा, वेब स्पीच एपीआई का उपयोग करके भाषण पहचान की सुविधा जोड़ी गई है।",
            doesntSupport: "आपका ब्राउज़र आवाज सहायक का समर्थन नहीं करता। कृपया किसी अन्य ब्राउज़र का प्रयास करें।",
            firstTime: "स्वागत है, इसका उपयोग शुरू करने के लिए कृपया वृत्ताकार आइकन पर टैप करें।"
        }
    },

}
