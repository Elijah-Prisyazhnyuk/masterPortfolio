/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Elijah's Portfolio.",
  description:
  "I'm Elijah Prisyazhnyuk, or just Elijah Pris. I'm an embedded engineer with a background in machine learning and industrial electronics. This allows me to understand hardware and software integration more deeply. I am a passionate individual who designs, implements and programs MCU-based, IoT devices to solve real-world industry problems.",
  og: {
    title: "Elijah Prisyazhnyuk Portfolio",
    type: "website",
    url: "https://elijah-pris.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Elijah Prisyazhnyuk",
  title_ru: "Илья Присяжнюк",
  title_de: "Elias Prisjashnjuk",
  logo_name: "ElijahPris",
  nickname: "@ElijahPris",
  subTitle:
  "I'm Elijah Prisyazhnyuk, or just Elijah Pris. I'm an embedded engineer with a background in machine learning and industrial electronics. This allows me to understand hardware and software integration more deeply. I am a passionate individual who designs, implements and programs MCU-based, IoT devices to solve real-world industry problems.",
  subTitle_ru: "Я инженер-электронщик с компетенциями в сфере радиоэлектронники, промышленной электронники и машинного обучения. Это позволяет мне глубже понимать интеграцию аппаратной и программной частей различных устройств. Я увлекаюсь проектированием, сборкой и программированием микропроцессорных устройств для различных применений.",
  subTitle_de: "",
  resumeLink:
    "https://drive.google.com/file/d/1JYHozlWYlqqDUvcXAPjgVkszkW84s8YY/view?usp=sharing",
  portfolio_repository: "https://github.com/Elijah-Prisyazhnyuk/masterPortfolio",
  githubProfile: "https://github.com/Elijah-Prisyazhnyuk",
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
      title: "Embedded Engineer",
      title_ru: "Инженер-электронщик",
      title_de: "",
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
      title: "Machine Learning & Data analysis",
      title_ru: "Инженер данных",
      title_de: "",
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
      title: "3D & Web designer",
      title_ru: "3D & Web дизайнер",
      title_de: "",
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
  degrees: [
    {
      title: "Siberian State Industrial University",
      title_ru: "Сибирский Государственный Индустриальный Университет",
      title_de: "",
      subtitle: "Bachelor's degree in Industrial Electronics",
      subtitle_ru: "Степень магистратуры в Промышленной Электронике",
      subtitle_en: "",
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
      button_text: "Diploma",
      button_text_ru: "Диплом",
      button_text_de: "Диплом",
    },
    {
      title: "South Ural State University",
      title_ru: "Южно-Уральский Государственный Университет",
      title_de: "",
      subtitle: "Unfinished Master's degree in Machine learning & Big Data analisys",
      subtitle_ru: "Незаконченная магистратура по направлению Машинное обучение и анализ больших данных",
      subtitle_en: "",
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
      button_text: "Documents",
      button_text_ru: "Документа",
      button_text_de: "Диплом",
    },
    {
      title: "Trip to USA",
      title_ru: "Поездка в США",
      title_de: "",
      subtitle: "Six months of immersion in advanced English",
      subtitle_ru: "6 месяцев углубленного изучения английского",
      subtitle_en: "",
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
      button_text: "",
      button_text_ru: "",
      button_text_de: "",
    },
    {
      title: "Clark College",
      title_ru: "Clark Колледж",
      title_de: "",
      subtitle: "Electrical Engineering major",
      subtitle_ru: "Специальность Инженер-Электрик",
      subtitle_en: "",
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
            "⚡ Высокие баллы за вступительный тест по математике (ALEKS тест) позволиле мне поступить без дополнительных экзаменов таких как Английский язык, а также позволило брать более продвинутые курсы.",
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
      button_text: "Documents",
      button_text_ru: "Документы",
      button_text_de: "Диплом",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "III degree Diploma",
      title_ru: "Диплом III степени",
      title_de: "",
      subtitle: "The 59th Scientific and Technical Conference of Young Professionals from the Siberian Division \"Your Challenge\"",
      subtitle_ru: "59-ая Научно-техническая конференция молодых специалистов Дивизиона Сибирь \"Твой вызов\"",
      subtitle_de: "",
      logo_path: "EVZ.svg",
      certificate_link:
        "https://drive.google.com/file/d/1SJ5-icna_lkDWMurHjFYhpXQCnTPWtc5/view?usp=sharing",
      alt_name: "EVRAZ",
      color_code: "#8C151599",
    },
    {
      title: "ALEKS Placement Math test",
      title_ru: "Вступительный тест по математике ALEKS",
      title_de: "",
      subtitle: "79/100 Math Placement Assessment proctored test",
      subtitle_ru: "79/100 вступительный тест по математике с контролем",
      subtitle_de: "",
      logo_path: "aleks.png",
      certificate_link:
        "https://drive.google.com/file/d/167wVrLmgPIkqK26O4ivBQnVcsSQ8cUie/view?usp=sharing",
      alt_name: "ALEKS",
      color_code: "#00000099",
    },
    {
      title: "Scholarship of the Russian Federal Government",
      title_ru: "Стипендия Правительства РФ",
      title_de: "",
      subtitle: "The scholarship of the government of the Russian Federation for priority areas of modernization and technological development in the Russian economy.",
      subtitle_ru: "Стипендия Пра",
      subtitle_de: "",
      logo_path: "rf.png",
      certificate_link:
        "https://drive.google.com/file/d/19sMVp7eDLWRDMD0diPxd62C49ne_8ffS/view?usp=sharing",
      alt_name: "Scholarship",
      color_code: "#0C9D5899",
    },
    {
      title: "Сertificate",
      title_ru: "",
      title_de: "",
      subtitle: "Certificate of participation in the II (Final) round of the Olympiad for the discipline \"Computer Science\"",
      subtitle_ru: "",
      subtitle_de: "",
      logo_path: "sibsiu.png",
      certificate_link:
        "https://drive.google.com/file/d/1OBbGsw7mmuT1OHZ6oUaOOtS43nVWZE-v/view?usp=sharing",
      alt_name: "CS_certificate",
      color_code: "#1F70C199",
    },
    {
      title: "Certificate",
      title_ru: "",
      title_de: "",
      subtitle: "Certificate of participation in the II round of the Olympiad for the discipline \"Culture Science\"",
      subtitle_ru: "",
      subtitle_de: "",
      logo_path: "sibsiu.png",
      certificate_link:
        "https://drive.google.com/file/d/1sqSN3hO3-OAtreOiL3AEYYNJF0GCWC00/view?usp=sharing",
      alt_name: "Culture_certificate",
      color_code: "#D83B0199",
    },
    {
      title: "I degree Diploma",
      title_ru: "",
      title_de: "",
      subtitle: "I place in University round of the Olympiad for the discipline \"Computer Science\"",
      subtitle_ru: "",
      subtitle_de: "",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1vYnoj_qy_hVXoPYbcSobgeH9QQfT64IA/view?usp=sharing",
      alt_name: "Diploma",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  title_ru: "",
  title_de: "",
  subtitle: "Internship and Freelance",
  description:
    "Skilled in industrial and converter electronics, I utilize a combination of embedded microprocessor devices, machine learning techniques, and web-based interfaces in my projects. I have experience with Python and MATLAB for mathematical modeling, simulation, and reporting. My key quality is the ability to respond and adapt to changing priorities quickly and efficiently. ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      title_ru: "",
      title_de: "",
      work: true,
      experiences: [
        {
          title: "Your job offer may be here",
          title_ru: "",
          title_de: "",
          company: "Your company may be here",
          company_url: "https://elijah-pris.vercel.app/contact",
          logo_path: "list.png",
          duration: "Now - further",
          location: "Somewhere in Chelyabinsk",
          description:
            "I am looking for a offer in the field of industrial, converter or embedded electronics",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "CAD Engineer Designer Intern",
          title_ru: "",
          title_de: "",
          company: "EVRAZ WSMP",
          company_url: "https://www.evraz.com/ru/company/assets/steel/",
          logo_path: "EVZ.svg",
          duration: "Aug 2021 - Sep 2021",
          location: "Russia, Novokuznetsk, Regional Design and Engineering Center",
          description:
            "After winning the scientific and technical conference, the participants of the winning teams were given the opportunity to select a department for practical training. I worked with the team on designing and making edits to AutoCAD. Our team focused primarily on the design of power supply and grounding systems. It was a comfortable working environment, and I enjoyed working with the team.",
          color: "#000000",
        },
        {
          title: "Participant of the 59th Scientific and Technical Conference \"Your Challenge\"",
          title_ru: "",
          title_de: "",
          company: "EVRAZ WSMP",
          company_url: "https://www.evraz.com/ru/company/assets/steel/",
          logo_path: "EVZ.svg",
          duration: "Feb 2021 - May 2021",
          location: "Russia, Novokuznetsk, Coke and Chemical Shop",
          description:
            "It was a challenging, yet very interesting and hands-on competition in two rounds. The first round focused on \"Risk Hunting\", and the second involved solving the practical technical challenge of freezing coke on the coke ramp. The scientific and technical conference spanned several months, and through well-coordinated teamwork, our group was able to win a prize and achieve our objectives. My contribution to the team included mathematical modeling of technical solutions using CAD, CFD, and FEM analysis, as well as visual representation of the results.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Freelance",
      experiences: [
        {
          title: "Online Freelance",
          title_ru: "",
          title_de: "",
          company: "Upwork, Freelance",
          company_url: "https://about.google/",
          logo_path: "UPWK.svg",
          duration: "Jun 2023 - Now",
          location: "World Wide Web",
          description:
            "I am exploring new opportunities through the use of platforms such as UpWork and Fiverr. I am available to provide my services in the following areas: STM32 development, Arduino programming, MATLAB, React.js development and Tableau data visualization.",
          color: "#4285F4",
        },
        {
          title: "Academic Freelance",
          title_ru: "",
          title_de: "",
          company: "SibSIU",
          company_url: "https://sibsiu.ru/",
          logo_path: "sibsiu.png",
          duration: "Sep 2019 - May 2022",
          location: "Russia, Novokuznetsk",
          description:
            "From the second year onwards, and until the completion of my studies, I have actively accepted orders for assistance with academic work, such as tests, lab work, scientific research and graduation projects. Due to the high quality of my work, I have received a large volume of orders.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  title_ru: "",
  title_de: "",
  description:
    "My projects makes use of vast variety of latest technology tools and academic research. My passion for advanced and innovative technologies such as augmented reality (AR), virtual reality (VR), 3D and artificial intelligence (AI) is evident in the projects I have worked on.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  title_ru: "",
  title_de: "",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Virtual reality glove",
      createdAt: "2020-11-26T00:00:00Z",
      description: "Virtual reality glove concept using pneumatic drive with feedback",
      url:
        "https://library.sibsiu.ru/LibrArticlesSectionsEditionsFiles.asp?lngSection=22&lngEdition=8116",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Simulation of the Patch Antenna LTE MIMO",
      createdAt: "2021-05-12T00:00:00Z",
      description: "Simulation of the receiving and transmitting patch antenna \"F-20\" LTE MIMO 4X4 1800Mhz",
      url:
        "https://elibrary.ru/item.asp?id=48031211",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "The inheritance of the \"Arthurian legend\"",
      createdAt: "2020-05-19T00:00:00Z",
      description: "The inheritance of the \"Arthurian legend\" in pop and rock music in the USA and Great Britain",
      url:
        "https://elibrary.ru/item.asp?id=44587770",
    },
  ],
};

/********************              Hobbies         ********************/

const hobbies = {
  title: "Hobbies",
  title_ru: "",
  title_de: "",
  subTitle: "I spend my leisure with my hobbies!",
  hobbies: [
    {
      title: "Reading Books",
      title_ru: "",
      title_de: "",
      description: "!",
      image_path: "Reading.png",
    },
    {
      title: "Writing",
      title_ru: "",
      title_de: "",
      description: "!",
      image_path: "Writing.png",
    },
    {
      title: "Art",
      title_ru: "",
      title_de: "",
      description:
        "!",
      image_path: "Memeing.png",
    },
    {
      title: "Traveling Music",
      title_ru: "",
      title_de: "",
      description: "!",
      image_path: "Music.png",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    title_ru: "",
    title_de: "",
    profile_image_path: "portfolio.png",
    description:
      "Contact me for any queries or collaboration. I am always available for a chat. You can also ask me about my projects, research or anything you want to know.",
  },
  addressSection: {
    title: "Address",
    title_ru: "",
    title_de: "",
    subtitle:
      "Russia, Chelyabinsk region, Chelyabinsk, Dzerzhinskogo street 97/b - 454078",
    locality: "Chelyabinsk",
    country: "RU",
    region: "Chelyabinsk region",
    postalCode: "454078",
    streetAddress: "Dzerzhninskogo street, 97/b",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/M5re4r8Tdjp4ZuBn9",
  },
  phoneSection: {
    title: "+7(951)-571-64-50",
    subtitle: "",
  },
};

export {
  settings,
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
