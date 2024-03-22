/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

const error = {
  h1: {
    en: "Woops",
    ru: "Извините",
    de: "Entschuldigung",
  },
  p: {
    en: "The requested page is unavailable at the moment!",
    ru: "Заправшиваемая страница недоступна",
    de: "Die angeforderte Seite ist momentan nicht verfügbar!",
  },
  text: {
    en: "Go Home",
    ru: "На Главную",
    de: "Zur Startseite",
  },
}

const header = {
  home: {
    en: "Home",
    ru: "Главная",
    de: "Homepage",
  },
  education: {
    en: "Education",
    ru: "Образование",
    de: "Ausbildung",
  },
  experience: {
    en: "Experience",
    ru: "Опыт",
    de: "Erfahrung",
  },
  projects: {
    en: "Projects",
    ru: "Проекты",
    de: "Vorhaben",
  },
  hobby: {
    en: "Hobby & Interests",
    ru: "Увлечения и Интересы",
    de: "Hobbys & Interessen",
  },
  contacts: {
    en: "Contact me",
    ru: "Контакты",
    de: "Kontaktieren",
  },
}

//SEO Related settings
const seo = {
  title: "Elijah's Portfolio.",
  description:
  "I'm Elijah Prisyazhnyuk, or just Elijah Pris. I'm an embedded engineer with a background in machine learning and industrial electronics. This allows me to understand hardware and software integration more deeply. I am a passionate individual who designs, implements and programs MCU-based, IoT devices to solve real-world industry problems.",
  og: {
    title: "Elijah Prisyazhnyuk Portfolio | Илья Присяжнюк портфолио",
    type: "website",
    url: "https://elijah-pris.vercel.app/",
  },
};

//Home Page
const greeting = {
  title_en: "Elijah Prisyazhnyuk",
  title_ru: "Илья Присяжнюк",
  title_de: "Elias Prisjashnjuk",
  logo_name: "ElijahPris",
  nickname: "@ElijahPris",
  subTitle_en: "I'm Elijah Prisyazhnyuk, or just Elijah Pris. I'm an embedded engineer with a background in machine learning and industrial electronics. This allows me to understand hardware and software integration more deeply. I am a passionate individual who designs, implements and programs MCU-based, IoT devices to solve real-world industry problems.",
  subTitle_ru: "Я инженер-электронщик с компетенциями в сфере радиоэлектронники, промышленной электронники и машинного обучения. Это позволяет мне глубже понимать интеграцию аппаратной и программной частей различных устройств. Я увлекаюсь проектированием, сборкой и программированием микропроцессорных устройств для различных применений.",
  subTitle_de: "Ich bin Elias Prisjashnjuk, oder einfach Elias Pris. Ich bin ein Embedded-Ingenieur mit Erfahrung in maschinellem Lernen und industrieller Elektronik. Dies ermöglicht es mir, die Integration von Hardware und Software tiefer zu verstehen. Ich bin eine leidenschaftliche Person, die MCU-basierte IoT-Geräte entwirft, implementiert und programmiert, um reale branchenspezifische Probleme zu lösen.",
  resumeLink:
    "https://drive.google.com/file/d/1JYHozlWYlqqDUvcXAPjgVkszkW84s8YY/view?usp=sharing",
  portfolio_repository: "https://github.com/Elijah-Prisyazhnyuk/masterPortfolio",
  githubProfile: "https://github.com/Elijah-Prisyazhnyuk",
  btn_contact: {
    en: "Contact me",
    ru: "Мои контакты",
    de: "Kontaktiere mich",
  },
  btn_resume: {
    en: "See my resume",
    ru: "Моё резюме",
    de: "Lebenslauf",
  },
  pro:{
    en: "What I Do?",
    ru: "Мои компетенции",
    de: "Meine Kompetenzen",
  }
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/Elijah-Prisyazhnyuk",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/elijah-pris",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Telegram",
    link: "https://t.me/ElijahPris",
    fontAwesomeIcon: "fa-telegram-plane", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#3db0e3", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "mailto:elijah.zhn@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/elijah.pris/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/elijahpris/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title_en: "Embedded Engineer",
      title_ru: "Инженер-электронщик",
      title_de: "Embedded-Entwickler",
      fileName: "EmbeddedEngineerImg",
      skills: [
        {
          en: [
            "⚡ Designing and implementing of frequency converter, encoder, and control devices for a variety of electric drives",
            "⚡ Developing smart IoT devices and projects using microcontrollers, sensors and RF circuits",
            "⚡ Mathematical modeling for various applications using software such as MatLAB/Simulink, CFD Analysis software and Open Source solutions",
            "⚡ Developing firmware for embedded devices using C++, micropython, python, MatLAB",
          ]
        },
        {
          ru: [
            "⚡ Проектирование и сборка инвенторов, преобразователей частоты, энкодеров и управляющих устройств для различных электроприводов",
            "⚡ Разработка умных IoT устройств и проектов с помощью микроконтроллеров, сенсоров и радиомодулей",
            "⚡ Математическое моделирование электронных схем с использованием MatLAB/Simulink, Altium Designer, Proteus. А также анализ теплопроводности, прочности различных конструкций и корпусов методом конечных элементов (МКУ)",
            "⚡ Разработка ПО для микроконтроллеров в следующих языках программирования: C++, micropython, python, MatLAB",
          ]
        },
        {
          de: [
            "⚡ Entwurf und Implementierung von Frequenzumrichtern, Encodern und Steuergeräten für verschiedene Elektroantriebe",
            "⚡ Entwicklung intelligenter IoT-Geräte und Projekte unter Verwendung von Mikrocontrollern, Sensoren und RF-Schaltungen",
            "⚡ Mathematische Modellierung für verschiedene Anwendungen mit Software wie MatLAB/Simulink, CFD-Analyse-Software und Open-Source-Lösungen",
            "⚡ Entwicklung von Firmware für eingebettete Geräte unter Verwendung von C++, Micropython, Python und MatLAB",
          ]
        },
      ],
      softwareSkills: [
        {
          skillName: "MATLAB & Simulink",
          imageSrc: "matlab-512.svg",
        },
        {
          skillName: "GNU Octave",
          imageSrc: "GNU_Octave.svg",
        },
        {
          skillName: "Altium Designer",
          imageSrc: "Altium.svg"
        },
        {
          skillName: "KiCAD",
          imageSrc: "KiCad-Logo.svg"
        },
        {
          skillName: "STM32CubeMX",
          imageSrc: "STM32.svg"
        },
        {
          skillName: "STM",
          imageSrc: "STM.svg",
        },
        {
          skillName: "Schneider Electric",
          imageSrc: "Schneider_Electric.svg"
        },
        {
          skillName: "Arduino",
          imageSrc: "Arduino.svg"
        },
        {
          skillName: "Thonny - Micropython IDE",
          imageSrc: "Thonny_logo.png"
        },
        {
          skillName: "Linux",
          imageSrc: "Linux.svg"
        },
        {
          skillName: "My Home OS - EndeavourOS",
          imageSrc: "EndeavourOS_Logo.svg"
        },
      ],
    },
    {
      title_en: "Machine Learning & Data analysis",
      title_ru: "Инженер данных",
      title_de: "Maschinelles Lernen & Datenanalyse",
      fileName: "DataScienceImg",
      skills: [
        {
          en: [
            "⚡ Collecting, processing, and analyzing data from various sensors and IoT devices",
            "⚡ Integration of smart IoT devices with Web-interfaces and Cloud-based technologies",
            "⚡ Implementation of machine learning models in various MCUs",
          ]
        },
        {
          ru: [
            "⚡ Получение, обработка и анализ данных с различных датчиков и IoT устройств",
            "⚡ Интеграция умных IoT устройств с Web-интерфейсами и облачными технологиями",
            "⚡ Использование моделей машинного обучения в различных микропроцессорных устройствах",
          ]
        },
        {
          de: [
            "⚡ Sammeln, Verarbeiten und Analysieren von Daten aus verschiedenen Sensoren und IoT-Geräten",
            "⚡ Integration von intelligenten IoT-Geräten mit Web-Benutzeroberflächen und Cloud-basierten Technologien",
            "⚡ Implementierung von maschinellen Lernmodellen in verschiedenen Mikrocontrollern"
          ]
        },
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Thingspeak",
          imageSrc: "Thingspeak_logo.png"
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "MySQL",
          imageSrc: "MySQL.svg",
        },
        {
          skillName: "PostgreSQL",
          imageSrc: "PostgreSQL.svg",
        },
        {
          skillName: "Bash",
          imageSrc: "Bash.svg",
        },
      ],
    },
    {
      title_en: "3D & Web designer",
      title_ru: "3D & Web дизайнер",
      title_de: "3D- und Webdesigner",
      fileName: "DesignImg",
      skills: [
        {
          en: [
            "⚡ Creating and designing 3D models and prototypes using CAD software",
            "⚡ Designing attractive user interface for mobile and web applications",
            "⚡ Creating Web-interfaces for IoT projects using React.js, Flask and Open-source solution",
          ]
        },
        {
          ru: [
            "⚡ Создание и доработка 3D/2D моделей и чертежей в CAD программах",
            "⚡ Дизайн и разработка привлекательных пользовательский интерфейсов для мобильных и web приложений",
            "⚡ Создание Web-интерфейсов для IoT проектов в React.js, Flask с использованием Open-source решений",
          ]
        },
        {
          de: [
            "⚡ Erstellung und Design von 3D-Modellen und Prototypen mit CAD-Software",
            "⚡ Gestaltung ansprechender Benutzeroberflächen für mobile und Webanwendungen",
            "⚡ Erstellung von Web-Schnittstellen für IoT-Projekte mit React.js, Flask und Open-Source-Lösungen"
          ]
        },
      ],
      softwareSkills: [
        {
          skillName: "AutoCAD",
          imageSrc: "AutoCAD.svg",
        },
        {
          skillName: "Autodesk",
          imageSrc: "Autodesk.svg",
        },
        {
          skillName: "SOLIDWORKS",
          imageSrc: "SOLIDWORKS.svg",
        },
        {
          skillName: "KOMPAS 3D",
          imageSrc: "kompas3d.png",
        },
        {
          skillName: "Blender",
          imageSrc: "Blender.png",
        },
        {
          skillName: "FreeCAD",
          imageSrc: "FreeCAD.svg",
        },
        {
          skillName: "Gimp",
          imageSrc: "Gimp.svg",
        },
        {
          skillName: "React.js",
          imageSrc: "Reactjs.svg",
        },
        {
          skillName: "Codepen",
          imageSrc: "codepen.svg",
        },
        {
          skillName: "Django",
          imageSrc: "Django.svg",
        },
        {
          skillName: "Flask",
          imageSrc: "Flask.svg",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/ElijahPris/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/elijahprisiazhniuk",
    },
  ],
};

const degrees = {
  h1: {
    en: "Education",
    ru: "Образование",
    de: "Ausbildung",
  },
  h3: {
    en: "Skill Assessment",
    ru: "Подтверждение навыков",
    de: "Fähigkeitsbewertung",
  },
  title_en: "Degrees Received",
  title_ru: "Полученное образование",
  title_de: "Erworbene Abschlüsse",
  button_vst: {
    en: "Visit Website", 
    ru: "Сайт ВУЗа",
    de: "Website besuchen",
  },
  degrees: [
    {
      title_en: "Siberian State Industrial University",
      title_ru: "Сибирский Государственный Индустриальный Университет",
      title_de: "Sibirische Staatliche Industrieuniversität",
      subtitle_en: "Bachelor's degree in Industrial Electronics",
      subtitle_ru: "Бакалавриат по направлению Промышленная Электроника",
      subtitle_de: "Bachelor-Abschluss in Industrieelektronik",
      logo_path: "sibsiu.png",
      alt_name: "SibSIU",
      duration: "2018 - 2022",
      descriptions: [
        {
          en: [
            "⚡ I have studied basic electrical engineering subjects like power electronics, embedded systems, electronic components, semiconductor devices, math, analog and digital integrated circuits, process control systems, industrial automation and etc.",
            "⚡ During my time in this university, I have developed a number of valuable professional relationships. Through collaborative research and participation in conferences, I was able to contribute to the publication of several articles in scientific journals and in the Russian Science Citation Index.",
            "🏆 I have been selected to receive a research scholarship for two consecutive years for my scientific publications. Additionally, I have also been awarded a scholarship of the Russian Federal Government for my systematic success in research activities, participation in Olympiad events, conferences, and excellent academic performance.",
          ]
        },
        {
          ru: [
            "⚡ Я изучал основы промышленной электронники в таких дисциплинах как силовая электронника, аналоговые и цифровые компоненты, схемотехника, микроконтроллеры и управляющие устройства, микропроцессоры, полупроводниковые устройства, математическое моделирование, промышленная автоматика.",
            "⚡ За время обучения в университете у меня сложилось немало профессиональных связей, в результате совместных исследований и участий в конференциях. Это позволило мне опубликовать несколько статей в университетском научном журнале и Российском Научном Индексе Цитирования (РНИЦ).",
            "🏆 Я получал повышенную стипендию за научно-исследовательскую работу (участие в конференциях и публикации) два года подряд. После чего я получил стипендию Российской Федерации за систематический успех в учебной и научно-исследовательской деятельности.",
          ]
        },
        {
          de: [
            "⚡ Ich habe grundlegende elektrotechnische Themen wie Leistungselektronik, eingebettete Systeme, elektronische Bauelemente, Halbleiterbauelemente, Mathematik, analoge und digitale integrierte Schaltungen, Prozessleitsysteme, industrielle Automation usw. studiert.",
            "⚡ Während meiner Zeit an dieser Universität habe ich eine Reihe wertvoller beruflicher Beziehungen aufgebaut. Durch gemeinsame Forschungsarbeiten und die Teilnahme an Konferenzen konnte ich zu Veröffentlichungen mehrerer Artikel in wissenschaftlichen Zeitschriften und im Russian Science Citation Index beitragen.",
            "🏆 Ich wurde zwei aufeinanderfolgende Jahre lang ausgewählt, um ein Forschungsstipendium für meine wissenschaftlichen Veröffentlichungen zu erhalten. Darüber hinaus wurde mir auch ein Stipendium der Russischen Bundesregierung für meinen systematischen Erfolg in Forschungsaktivitäten, die Teilnahme an Olympiadeveranstaltungen, Konferenzen und herausragende akademische Leistungen verliehen."
          ]
        },
      ],
      website_link: "https://sibsiu.ru/",
      document_link: "https://drive.google.com/file/d/1i_uL0ZgaQb10vlNBEMh091r4yDgPHcSe/view?usp=sharing",
      button_text_en: "Diploma",
      button_text_ru: "Диплом",
      button_text_de: "Diplom",
    },
    {
      title_en: "South Ural State University",
      title_ru: "Южно-Уральский Государственный Университет",
      title_de: "Süd-Ural-Staatliche Universität",
      subtitle_en: "Unfinished Master's degree in Machine learning & Big Data analisys",
      subtitle_ru: "Незаконченная магистратура по направлению Машинное обучение и анализ больших данных",
      subtitle_de: "Nicht abgeschlossenes Masterstudium in Maschinellem Lernen & Big Data Analyse",
      logo_path: "susu.png",
      alt_name: "SUSU",
      duration: "2022 - 2023",
      descriptions: [
        {
          en: [
            "⚡ It was an enriching experience, filled with a wealth of new knowledge and skills at the forefront of science and technology.",
            "⚡ Lectures and practical sessions were conducted in an engaging manner by professors with significant academic achievements.",
            "😔 Unfortunately, I had to interrupt my studies a year before graduation due to trip to the USA.",
          ]
        },
        {
          ru: [
            "⚡ Это был захватывающий опыт, насыщенный новыми знаниями и навыками на пике научно-технической мысли.",
            "⚡ Лекции и практические занятие проводились в увлекательной форме профессорами с выдающимися академическими достижениями.",
            "😔 К сожалению, я был вынужден прервать моё обучение за год до дипломирования из-за поездки в США.",
          ]
        },
        {
          de: [
            "⚡ Es war eine bereichernde Erfahrung, gefüllt mit einem Reichtum an neuen Kenntnissen und Fähigkeiten an vorderster Front von Wissenschaft und Technologie.",
            "⚡ Vorlesungen und praktische Sitzungen wurden auf ansprechende Weise von Professoren mit bedeutenden akademischen Leistungen durchgeführt.",
            "😔 Leider musste ich ein Jahr vor meinem Abschluss mein Studium unterbrechen, aufgrund einer Reise in die USA.",
          ]
        },
      ],
      website_link: "https://www.susu.ru/en",
      document_link: "https://www.susu.ru/en",
      button_text_en: "Documents",
      button_text_ru: "Документы",
      button_text_de: "Dokumente",
    },
    {
      title_en: "Trip to USA",
      title_ru: "Поездка в США",
      title_de: "Reise in die USA",
      subtitle_en: "Six months of immersion in advanced English",
      subtitle_ru: "6 месяцев углубленного изучения английского",
      subtitle_de: "6 Monate intensive Auseinandersetzung mit fortgeschrittenem Englisch",
      logo_path: "US.png",
      alt_name: "US",
      duration: "2023 - 2024",
      descriptions: [
        {
          en: [
            "🌍 It was the second and longest trip to the USA.",
          ]
        },
        {
          ru: [
            "🌍 Это было второе и самое длительное путешествие в США",
          ]
        },
        {
          de: [
            "🌍 Es war die zweite und längste Reise in die USA.",
          ]
        },
      ],
      website_link: "",
      document_link: "",
      button_text_en: "",
      button_text_ru: "",
      button_text_de: "",
    },
    {
      title_en: "Clark College",
      title_ru: "Clark Колледж",
      title_de: "Clark College",
      subtitle_en: "Electrical Engineering major",
      subtitle_ru: "Специальность Инженер-Электрик",
      subtitle_de: "Hauptfach Elektrotechnik",
      logo_path: "clark.png",
      alt_name: "Clark_college",
      duration: "2023 - 2024",
      descriptions: [
        {
          en: [
            "⚡ High scores on the placement test in math (ALEKS test) allowed me to enroll without taking additional exams such as English, and to take more advanced courses.",
            "⚡ Admission to college also allowed me to take free courses on software such as Tableau.",
          ]
        },
        {
          ru: [
            "⚡ Высокие баллы за вступительный тест по математике (ALEKS тест) позволили мне поступить без дополнительных экзаменов таких как Английский язык, а также брать более продвинутые курсы.",
            "⚡ Поступление в колледж также позволило мне брать бесплатные курсы по ПО, например такому как Tableau.",
          ]
        },
        {
          de: [
            "⚡ Hohe Punktzahlen beim Platzierungstest in Mathematik (ALEKS-Test) ermöglichten es mir, mich ohne zusätzliche Prüfungen wie Englisch einzuschreiben und fortgeschrittenere Kurse zu belegen.",
            "⚡ Die Zulassung zum College ermöglichte es mir auch, kostenlose Kurse in Software wie Tableau zu belegen.",
          ]
        },
      ],
      website_link: "https://www.clark.edu/",
      document_link: "https://www.clark.edu/",
      button_text_en: "Documents",
      button_text_ru: "Документы",
      button_text_de: "Dokumente",
    },
  ],
};

const certifications = {
  h1: {
    en: "Awards",
    ru: "Награды",
    de: "Auszeichnungen",
  },
  certifications: [
    {
      title_en: "III degree Diploma",
      title_ru: "Диплом III степени",
      title_de: "Diplom III. Grades",
      subtitle_en: "The 59th Scientific and Technical Conference of Young Professionals from the Siberian Division \"Your Challenge\"",
      subtitle_ru: "59-ая Научно-техническая конференция молодых специалистов Дивизиона Сибирь \"Твой вызов\"",
      subtitle_de: "Die 59. Wissenschaftliche und Technische Konferenz junger Fachleute aus der sibirischen Abteilung \"Ihre Herausforderung\"",
      logo_path: "EVZ.svg",
      certificate_link:
        "https://drive.google.com/file/d/1SJ5-icna_lkDWMurHjFYhpXQCnTPWtc5/view?usp=sharing",
      alt_name: "EVRAZ",
      color_code: "#8C151599",
      fade: {
        en: "Diploma",
        ru: "Диплом",
        de: "Diplom",
      }
    },
    {
      title_en: "ALEKS Placement Math test",
      title_ru: "Вступительный тест по математике ALEKS",
      title_de: "ALEKS Platzierungstest Mathematik",
      subtitle_en: "79/100 Math Placement Assessment proctored test",
      subtitle_ru: "79/100 вступительный тест по математике с контролем",
      subtitle_de: "79/100 Mathematik-Platzierungsprüfung unter Aufsicht",
      logo_path: "aleks.png",
      certificate_link:
        "https://drive.google.com/file/d/167wVrLmgPIkqK26O4ivBQnVcsSQ8cUie/view?usp=sharing",
      alt_name: "ALEKS",
      color_code: "#00000099",
      fade: {
        en: "Certificate",
        ru: "Сертификат",
        de: "Zertifikat",
      }
    },
    {
      title_en: "Scholarship of the Russian Federal Government",
      title_ru: "Стипендия Правительства РФ",
      title_de: "Stipendium der russischen Bundesregierung",
      subtitle_en: "The scholarship of the government of the Russian Federation for priority areas of modernization and technological development in the Russian economy.",
      subtitle_ru: "Стипендия Правительства РФ по приоритетным направлениям модернизации и технологического развития Российской экономики.",
      subtitle_de: "Das Stipendium der Regierung der Russischen Föderation für prioritäre Bereiche der Modernisierung und technologischen Entwicklung in der Russischen Wirtschaft",
      logo_path: "rf.png",
      certificate_link:
        "https://drive.google.com/file/d/19sMVp7eDLWRDMD0diPxd62C49ne_8ffS/view?usp=sharing",
      alt_name: "Scholarship",
      color_code: "#0C9D5899",
      fade: {
        en: "Scholarship",
        ru: "Стипендия",
        de: "Stipendium",
      }
    },
    {
      title_en: "Сertificate",
      title_ru: "Сертификат",
      title_de: "Zertifikat",
      subtitle_en: "Certificate of participation in the II (Final) round of the Olympiad for the discipline \"Computer Science\"",
      subtitle_ru: "Сертификат за участие во II (заключительном) туре Интернет-олимпиады по дисциплине \"Информатика\"",
      subtitle_de: "Teilnahmezertifikat an der II. (Endrunde) Olympiade für das Fach \"Informatik\"",
      logo_path: "sibsiu.png",
      certificate_link:
        "https://drive.google.com/file/d/1OBbGsw7mmuT1OHZ6oUaOOtS43nVWZE-v/view?usp=sharing",
      alt_name: "CS_certificate",
      color_code: "#1F70C199",
      fade: {
        en: "Certificate",
        ru: "Сертификат",
        de: "Zertifikat",
      }
    },
    {
      title_en: "Certificate",
      title_ru: "Сертификат",
      title_de: "Zertifikat",
      subtitle_en: "Certificate of participation in the II round of the Olympiad for the discipline \"Culture Science\"",
      subtitle_ru: "Сертификат за участие во II туре Интернет-олимпиады по дисциплине \"Культурология\"",
      subtitle_de: "Teilnahmezertifikat an der II. Runde der Olympiade für das Fach \"Kulturwissenschaft\"",
      logo_path: "sibsiu.png",
      certificate_link:
        "https://drive.google.com/file/d/1sqSN3hO3-OAtreOiL3AEYYNJF0GCWC00/view?usp=sharing",
      alt_name: "Culture_certificate",
      color_code: "#D83B0199",
      fade: {
        en: "Certificate",
        ru: "Сертификат",
        de: "Zertifikat",
      }
    },
    {
      title_en: "I degree Diploma",
      title_ru: "",
      title_de: "",
      subtitle_en: "I place in University round of the Olympiad for the discipline \"Computer Science\"",
      subtitle_ru: ".",
      subtitle_de: "",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1vYnoj_qy_hVXoPYbcSobgeH9QQfT64IA/view?usp=sharing",
      alt_name: "Diploma",
      color_code: "#1F70C199",
      fade: {
        en: "Diploma",
        ru: "Диплом",
        de: "Diplom",
      }
    },
  ],
};

// Experience Page
const experience = {
  title_en: "Experience",
  title_ru: "Опыт",
  title_de: "Berufserfahrung",
  subtitle_en: "Internship and Freelance",
  subtitle_ru: "Стажировка и Фриланс",
  subtitle_de: "Praktikum und freiberufliche Tätigkeit",
  description_en: "Skilled in industrial and converter electronics, I utilize a combination of embedded microprocessor devices, machine learning techniques, and web-based interfaces in my projects. I have experience with Python and MATLAB for mathematical modeling, simulation, and reporting. My key quality is the ability to respond and adapt to changing priorities quickly and efficiently.",
  description_ru: "Я имею компетенции в промышленной и преобразовательной электронике. Мой любимый стэк технологий это микроконтроллеры и микропроцессорные устройства, модели машинного обучения и Web-интерфейсы который я использую в моих проектах. У меня также есть опыт использования Python и MatLAB для математического моделирования и исследования. Мои ключевые навыки это ответственность и умение быстро адаптироваться под изменяющиеся требования.",
  description_de: "Kundig in Industrie- und Umrichterelektronik, nutze ich eine Kombination aus eingebetteten Mikroprozessorgeräten, maschinellem Lernen und webbasierten Schnittstellen in meinen Projekten. Ich habe Erfahrung mit Python und MATLAB für mathematische Modellierung, Simulation und Berichterstattung. Meine wichtigste Eigenschaft ist die Fähigkeit, schnell und effizient auf sich ändernde Prioritäten zu reagieren und sich anzupassen.",
  header_image_path: "experience.svg",
  sections: [
    {
      title_en: "Work",
      title_ru: "Работа",
      title_de: "Arbeit",
      work: true,
      experiences: [
        {
          title_en: "Your job offer may be here",
          title_ru: "Ваша вакансия может быть здесь!",
          title_de: "Ihr Stellenangebot könnte hier sein",
          company_en: "Your company may be here",
          company_ru: "Ваша компания может быть здесь!",
          company_de: "Ihr Unternehmen könnte hier sein",
          company_url: "https://elijah-pris.vercel.app/contact",
          logo_path: "list.png",
          duration_en: "Now - further",
          duration_ru: "Сейчас - будущее",
          duration_de: "Jetzt - weiter",
          location_en: "Somewhere in Chelyabinsk",
          location_ru: "Где-то в Челябинске",
          location_de: "Irgendwo in Tscheljabinsk",
          description_en: "I am looking for a offer in the field of industrial, converter or embedded electronics",
          description_ru: "Я открыт для предложений в сфере промышленной, преобразовательной или радио электронники",
          description_de: "Ich suche ein Angebot im Bereich industrielle, Umrichter- oder Embedded-Elektronik",
          color: "#0879bf",
        },
      ],
    },
    {
      title_en: "Internships",
      title_ru: "Стажировка",
      title_de: "Praktika",
      experiences: [
        {
          title_en: "CAD Engineer Designer Intern",
          title_ru: "Стажер Инженер-проектировщик",
          title_de: "Praktikant als CAD-Engineer",
          company_en: "EVRAZ WSMP",
          company_ru: "ЕВРАЗ ЗСМК",
          company_de: "EVRAZ Westsibirischer Metallurgiebetrieb",
          company_url: "https://www.evraz.com/ru/company/assets/steel/",
          logo_path: "EVZ.svg",
          duration_en: "Aug 2021 - Sep 2021",
          duration_ru: "Авг 2021 - Сен 2021",
          duration_de: "Aug 2021 - Sep 2021",
          location_en: "Russia, Novokuznetsk, Regional Design and Engineering Center",
          location_ru: "Россия, Новокузнецк, ЗСМК, РПКЦ",
          location_de: "Russland, Nowokusnezk, Regionales Konstruktions- und Ingenieurbüro",
          description_en:
            "After winning the scientific and technical conference, the participants of the winning teams were given the opportunity to select a department for practical training. I worked with the team on designing and making edits to AutoCAD. Our team focused primarily on the design of power supply and grounding systems. It was a comfortable working environment, and I enjoyed working with the team.",
          description_ru: "После победы в научно-практической конференции, участники победивших команд получили возможность выбрать отделение для прохождения практики и стажировки. Я работал в команде по проектированию в AutoCAD. Наша команда занималась преимущественно проектными работами по прокладке кабелей, установке шкафов и заземлений. Это была ОЧЕНЬ уютная команда и отличный опыт.",
          description_de: "Nachdem ich die wissenschaftlich-technische Konferenz gewonnen hatte, erhielten die Teilnehmer der siegreichen Teams die Möglichkeit, eine Abteilung für ein Praktikum auszuwählen. Ich arbeitete mit dem Team an der Gestaltung und Bearbeitung von AutoCAD. Unser Team konzentrierte sich hauptsächlich auf die Gestaltung von Stromversorgungs- und Erdungssystemen. Es war eine angenehme Arbeitsumgebung, und ich habe die Zusammenarbeit mit dem Team genossen.",
          color: "#000000",
        },
        {
          title_en: "Participant of the 59th Scientific and Technical Conference \"Your Challenge\"",
          title_ru: "Участие в 59-ой научно-технической конференции \"Твой вызов\"",
          title_de: "Teilnehmer der 59. Wissenschaftlich-Technischen Konferenz \"Deine Herausforderung\"",
          company_en: "EVRAZ WSMP",
          company_ru: "ЕВРАЗ ЗСМК",
          company_de: "EVRAZ Westsibirischer Metallurgiebetrieb",
          company_url: "https://www.evraz.com/ru/company/assets/steel/",
          logo_path: "EVZ.svg",
          duration_en: "Feb 2021 - May 2021",
          duration_ru: "Фев 2021 - Май 2021",
          duration_de: "Feb 2021 - Mai 2021",
          location_en: "Russia, Novokuznetsk, Coke and Chemical Shop",
          location_ru: "Россия, Новокузнецк, ЗСМК, КХЦ",
          location_de: "Russland, Nowokusnezk, Koksochemische Abteilung",
          description_en:
            "It was a challenging, yet very interesting and hands-on competition in two rounds. The first round focused on \"Risk Hunting\", and the second involved solving the practical technical challenge of freezing coke on the coke ramp. The scientific and technical conference spanned several months, and through well-coordinated teamwork, our group was able to win a prize and achieve our objectives. My contribution to the team included mathematical modeling of technical solutions using CAD, CFD, and FEM analysis, as well as visual representation of the results.",
          description_ru: "Это было сложное, но очень интересное и практическое соревнование в два тура. Первый тур был посвящен \"Охоте за рисками\", а второй включал решение практической технической задачи по замораживанию кокса на коксовой рампе. Научно-техническая конференция длилась несколько месяцев, и благодаря слаженной командной работе наша группа смогла выиграть приз и достичь поставленных целей. Мой вклад в работу команды включал математическое моделирование технических решений с использованием CAD, CFD и FEM-анализа, а также визуальное представление результатов.",
          description_de: "Es war eine anspruchsvolle, aber sehr interessante und praktische Wettkampf in zwei Runden. Die erste Runde konzentrierte sich auf \"Risikoerkennung\", und die zweite bestand darin, die praktische technische Herausforderung des Einfrierens von Koks auf der Koksrutsche zu lösen. Die wissenschaftliche und technische Konferenz erstreckte sich über mehrere Monate, und durch gut koordinierte Teamarbeit konnte unsere Gruppe einen Preis gewinnen und unsere Ziele erreichen. Mein Beitrag zum Team umfasste mathematische Modellierung von technischen Lösungen mithilfe von CAD, CFD- und FEM-Analysen sowie visuelle Darstellung der Ergebnisse.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title_en: "Freelance",
      title_ru: "Фриланс",
      title_de: "Freiberuflich",
      experiences: [
        {
          title_en: "Online Freelance",
          title_ru: "Онлайн Фриланс",
          title_de: "Online Freiberuflich",
          company_en: "UpWork, Fiverr",
          company_ru: "UpWork, Fiverr",
          company_de: "UpWork, Fiverr",
          company_url: "https://about.google/",
          logo_path: "UPWK.svg",
          duration_en: "Jun 2023 - Now",
          duration_ru: "Июнь 2023 - Сегодня",
          duration_de: "Jun 2023 - Jetzt",
          location_en: "World Wide Web",
          location_ru: "World Wide Web",
          location_de: "Das Internet",
          description_en: "I am exploring new opportunities through the use of platforms such as UpWork and Fiverr. I am available to provide my services in the following areas: STM32 development, Arduino programming, MATLAB, React.js development and Tableau data visualization.",
          description_ru: "Я ищу новые возможности через такие площадки как UpWork и Fiverr. Я предоставляю свои услуги в следующих областях: STM32 разработка, программирование Arduino, MatLAB/Simulink моделирование, React.js разработка и визуализация данных в Tableau.",
          description_de: "Ich erkunde neue Möglichkeiten durch die Nutzung von Plattformen wie UpWork und Fiverr. Ich stehe zur Verfügung, um meine Dienste in folgenden Bereichen anzubieten: STM32-Entwicklung, Arduino-Programmierung, MATLAB, React.js-Entwicklung und Datenvisualisierung mit Tableau.",
          color: "#4285F4",
        },
        {
          title_en: "Academic Freelance",
          title_ru: "Академический Фриланс",
          title_de: "Akademischer Freiberufler",
          company_en: "SibSIU",
          company_ru: "СибГИУ",
          company_de: "Sibirischer Staatlicher Industrieuniversität",
          company_url: "https://sibsiu.ru/",
          logo_path: "sibsiu.png",
          duration_en: "Sep 2019 - May 2022",
          duration_ru: "Сен 2019 - Май 2022",
          duration_de: "Sep 2019 - Mai 2022",
          location_en: "Russia, Novokuznetsk",
          location_ru: "Россия, Новокузнецк",
          location_de: "Russland, Nowokusnezk",
          description_en: "From the second year onwards, and until the completion of my studies, I have actively accepted orders for assistance with academic work, such as tests, lab work, scientific research and graduation projects. Due to the high quality of my work, I have received a large volume of orders.",
          description_ru: "Со второго курса и до окончания обучения я активно принимал заказы на помощь с академическими работами такими как тесты, лабораторные работы, научные статьи и дипломные работы. Из-за высоких отметок получаемых в результате моей помощи я имел большие объемы заказов.",
          description_de: "Ab dem zweiten Studienjahr und bis zum Abschluss meines Studiums habe ich aktiv Aufträge zur Unterstützung bei akademischen Arbeiten angenommen, wie z.B. Tests, Laborarbeiten, wissenschaftliche Forschung und Abschlussprojekte. Aufgrund der hohen Qualität meiner Arbeit habe ich eine große Anzahl von Aufträgen erhalten.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title_en: "Projects",
  title_ru: "Проекты",
  title_de: "Projekte",
  description_en: "My projects makes use of vast variety of latest technology tools and academic research. My passion for advanced and innovative technologies such as augmented reality (AR), virtual reality (VR), 3D and artificial intelligence (AI) is evident in the projects I have worked on.",
  description_ru: "В своих проектах я использую наиболее современные технологические инструменты и научные исследования. Мой интерес к современным и иновационным технологиям такие как AR, VR, 3D и ИИ находят отражение в проектах и публикациях с которыми я работал.",
  description_de: "Meine Projekte nutzen eine breite Palette von modernsten Technologie-Tools und akademischer Forschung. Meine Leidenschaft für fortschrittliche und innovative Technologien wie erweiterte Realität (AR), virtuelle Realität (VR), 3D und künstliche Intelligenz (KI) ist in den Projekten, an denen ich gearbeitet habe, deutlich erkennbar.",
  avatar_image_path: "projects_image.svg",
  btn_text: {
    en: "Let us collaborate on more projects",
    ru: "Давайте создадим больше проектов вместе!",
    de: "Lass uns zusammenarbeiten",
  }
};

const publicationsHeader = {
  title_en: "Publications",
  title_ru: "Научные публикации",
  title_de: "Veröffentlichungen",
  description_en: "I have worked on and published a few research papers and publications of my own.",
  description_ru: "Я опубликовал несколько исследовательских статей.",
  description_de: "Ich habe an einigen Forschungspapieren und Publikationen gearbeitet und eigene veröffentlicht.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name_en: "Virtual reality glove",
      name_ru: "Перчатка виртуальной реальности",
      name_de: "Virtual-Reality-Handschuh",
      createdAt: "2020-11-26T00:00:00Z",
      description_en: "Virtual reality glove concept using pneumatic drive with feedback",
      description_ru: "Концепт перчатки виртуальной реальности с обратной связью с использованием пневмомодулей",
      description_de: "Das Konzept eines Virtual-Reality-Handschuhs mit pneumatischem Antrieb und Rückmeldung.",
      url:
        "https://library.sibsiu.ru/LibrArticlesSectionsEditionsFiles.asp?lngSection=22&lngEdition=8116",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name_en: "Simulation of the Patch Antenna LTE MIMO",
      name_ru: "Симуляция патч-антенны LTE MIMO",
      name_de: "Simulation der Patch-Antenne LTE MIMO.",
      createdAt: "2021-05-12T00:00:00Z",
      description_en: "Simulation of the receiving and transmitting patch antenna \"F-20\" LTE MIMO 4X4 1800Mhz",
      description_ru: "Симуляция приемо-передающей патч-антенны F-20 LTE MIMO 4x4 1800МГц",
      description_de: "Simulation der Empfangs- und Sende-Patch-Antenne \"F-20\" LTE MIMO 4X4 1800 MHz.",
      url:
        "https://elibrary.ru/item.asp?id=48031211",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name_en: "The inheritance of the \"Arthurian legend\"",
      name_ru: "Наследование \"Артуровской легенды\"",
      name_de: "Das Erbe der \"Artuslegende\"",
      createdAt: "2020-05-19T00:00:00Z",
      description_en: "The inheritance of the \"Arthurian legend\" in pop and rock music in the USA and Great Britain",
      description_ru: "Наследование \"Артуровской легенды\" в поп- и рок-музыке США и Великобритании.",
      description_de: "Das Erbe der \"Artuslegende\" in der Pop- und Rockmusik in den USA und Großbritannien.",
      url:
        "https://elibrary.ru/item.asp?id=44587770",
    },
  ],
};

/********************              Hobbies         ********************/

const hobbies = {
  title_en: "Hobbies",
  title_ru: "Хобби",
  title_de: "Die Hobbys",
  subTitle_en: "I spend my leisure with my hobbies!",
  subTitle_ru: "",
  subTitle_de: "",
  hobbies: [
    {
      title_en: "Music",
      title_ru: "Музыка",
      title_de: "",
      description_en: "!",
      description_ru: "",
      description_de: "",
      image_path: "Music.png",
    },
    {
      title_en: "Writing",
      title_ru: "",
      title_de: "",
      description_en: "!",
      description_ru: "",
      description_de: "",
      image_path: "Reading.png",
    },
    {
      title_en: "Art",
      title_ru: "",
      title_de: "",
      description_en:
        "!",
      description_ru: "",
      description_de: "",
      image_path: "Memeing.png",
    },
    {
      title_en: "Traveling Music",
      title_ru: "",
      title_de: "",
      description_en: "!",
      description_ru: "",
      description_de: "",
      image_path: "Music.png",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title_en: "Contact Me",
    title_ru: "Связь со мной",
    title_de: "Kontaktiere mich",
    profile_image_path: "portfolio.png",
    description_en: "Contact me for any queries or collaboration. I am always available for a chat. You can also ask me about my projects, research or anything you want to know.",
    description_ru: "Свяжитесь со мной по любым вопросам или для сотрудничества. Вы также можете спросить меня по поводу моих проектов, услуг, исследований или чего-либо ещё.",
    description_de: "Kontaktieren Sie mich für Fragen oder Zusammenarbeit. Ich stehe immer für ein Gespräch zur Verfügung. Sie können mich auch nach meinen Projekten, Forschungen oder allem anderen fragen, was Sie wissen möchten.",
  },
  addressSection: {
    title_en: "Address",
    title_ru: "Адрес",
    title_de: "Adresse",
    subtitle_en:
      "Russia, Chelyabinsk region, Chelyabinsk, Dzerzhinskogo street 97/b - 454078",
    subtitle_ru: "Россия, Челябинская область, Челябинск, Ул. Дзержинского 97Б - 454078",
    subtitle_de: "Russland, Oblast Tscheljabinsk, Tscheljabinsk, Dzerzhinskogo-Straße 97/b - 454078",
    locality: "Chelyabinsk",
    country: "RU",
    region: "Chelyabinsk region",
    postalCode: "454078",
    streetAddress: "Dzerzhninskogo street, 97/b",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/M5re4r8Tdjp4ZuBn9",
    btn_maps: {
      en: "Visit on Google Maps",
      ru: "Открыть на Гугл Картах",
      de: "Auf Google Maps anzeigen",
    },
  },
  phoneSection: {
    title: "+7(951)-571-64-50",
    subtitle_en: "",
    subtitle_ru: "",
    subtitle_de: "",
  },
};

export {
  settings,
  error,
  header,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  hobbies,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
