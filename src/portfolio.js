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
  logo_name: "ElijahPris",
  nickname: "@ElijahPris",
  subTitle:
  "I'm Elijah Prisyazhnyuk, or just Elijah Pris. I'm an embedded engineer with a background in data science and industrial electronics. This allows me to understand hardware and software integration more deeply. I am a passionate individual who designs, implements and programs MCU-based, IoT devices to solve real-world industry problems.",
  resumeLink:
    "https://drive.google.com/file/d/1JYHozlWYlqqDUvcXAPjgVkszkW84s8YY/view?usp=sharing",
  portfolio_repository: "https://github.com/Elijah-Prisyazhnyuk/masterPortfolio",
  githubProfile: "https://github.com/Elijah-Prisyazhnyuk",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

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
      fileName: "EmbeddedEngineerImg",
      skills: [
        "⚡ Designing and implementing of frequency converter, encoder, and control devices for a variety of electric drives",
        "⚡ Developing smart IoT devices and projects using microcontrollers, sensors and RF circuits",
        "⚡ Mathematical modeling for various applications using software such as MatLAB/Simulink, CFD Analysis software and Open Source solutions",
        "⚡ Developing firmware for embedded devices using C++, micropython, python, MatLAB",
      ],
      softwareSkills: [
        {
          skillName: "MATLAB & Simulink",
          imageSrc: "matlab-512.svg",
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
      fileName: "DataScienceImg",
      skills: [
        "⚡ Collecting, processing, and analyzing data from various sensors and IoT devices",
        "⚡ Integration of smart IoT devices with Web-interfaces and Cloud-based technologies",
        "⚡ Implementation of machine learning models in various MCUs",
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
      fileName: "DesignImg",
      skills: [
        "⚡ Creating and designing 3D models and prototypes using CAD software",
        "⚡ Designing attractive user interface for mobile and web applications",
        "⚡ Creating Web-interfaces for IoT projects using React.js, Flask and Open-source solution",
      ],
      softwareSkills: [
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
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
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
      subtitle: "Bachelor's degree in Industrial Electronics",
      logo_path: "sibsiu.png",
      alt_name: "SibSIU",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic electrical engineering subjects like power electronics, embedded systems, electronic components, semiconductor devices, math, analog and digital integrated circuits, process control systems, industrial automation and etc.",
        "⚡ During my time in this university, I have developed a number of valuable professional relationships. Through collaborative research and participation in conferences, I was able to contribute to the publication of several articles in scientific journals and in the Russian Science Citation Index.",
        "🏆 I have been selected to receive a research scholarship for two consecutive years for my scientific publications. Additionally, I have also been awarded a scholarship of the Russian Federal Government for my systematic success in research activities, participation in Olympiad events, conferences, and excellent academic performance.",
      ],
      website_link: "https://sibsiu.ru/",
    },
    {
      title: "South Ural State University",
      subtitle: "Unfinished Master's degree in Machine learning & Big Data analisys",
      logo_path: "susu.png",
      alt_name: "SUSU",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ It was an enriching experience, filled with a wealth of new knowledge and skills at the forefront of science and technology.",
        "⚡ Lectures and practical sessions were conducted in an engaging manner by professors with significant academic achievements.",
        "😔 Unfortunately, I had to interrupt my studies a year before graduation due to trip to the USA.",
      ],
      website_link: "https://www.susu.ru/en",
    },
    {
      title: "Trip to USA",
      subtitle: "Six months of immersion in advanced English",
      logo_path: "US.png",
      alt_name: "US",
      duration: "2023 - 2024",
      descriptions: [
        "🌍 It was the second and longest trip to the USA.",
      ],
      website_link: "",
    },
    {
      title: "Clark College",
      subtitle: "Electrical Engineering major",
      logo_path: "clark.png",
      alt_name: "Clark_college",
      duration: "2023 - 2024",
      descriptions: [
        "⚡ High scores on the placement test in math (Alex test) allowed me to enroll without taking additional exams such as English, and to take more advanced courses",
        "⚡ Admission to college also allowed me to take free courses on software such as Tableau",
      ],
      website_link: "https://www.clark.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "III degree Diploma",
      subtitle: "The 59th Scientific and Technical Conference of Young Professionals from the Siberian Division \"Your Challenge\"",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1SJ5-icna_lkDWMurHjFYhpXQCnTPWtc5/view?usp=sharing",
      alt_name: "EVRAZ",
      color_code: "#8C151599",
    },
    {
      title: "ALEKS Placement Math test",
      subtitle: "79/100 Math Placement Assessment proctored test",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www-awu.aleks.com/alekscgi/x/Isl.exe/153G76PXL6QWrJhTSB-ZUhv7Nbm28fgdixj_yJiwIACfpT95owKJRC7yjOVPAoj7uyaRdVW6nDgmgH_zlXncrO2aBPxWQ5NqgC7s1RdKcp54mqwNb/Placement_Assessment_Results.pdf?1cx_4_BkUiVxBTF9zFRJJbzF92yqZgv1BzX3ti06yGg6FjEYdT7IPqNF7ltCXK5MWpc5ZUD2WCq7U66K4PhNxeW2Nq3Gb56OCukPRNHxMvdmGIOgN0hyoYei6Ejut_k6Ne1xB7mq0QYy3Mo7WpcKWElWqI-rnO8Sos2Wy02tUO8F3LmV1wK7AqHDyGw9Kqn0L8LGT3bmvIj1k1Ac__o",
      alt_name: "ALEKS",
      color_code: "#00000099",
    },
    {
      title: "Scholarship of the Russian Federal Government",
      subtitle: "The scholarship of the government of the Russian Federation for priority areas of modernization and technological development in the Russian economy.",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.sibsiu.ru/studentu/novosti-i-meropriyatiya/?ELEMENT_ID=16988",
      alt_name: "Scholarship",
      color_code: "#0C9D5899",
    },
    {
      title: "Сertificate",
      subtitle: "Certificate of participation in the II (Final) round of the Olympiad for the discipline \"Computer Science\"",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1OBbGsw7mmuT1OHZ6oUaOOtS43nVWZE-v/view?usp=sharing",
      alt_name: "CS_certificate",
      color_code: "#1F70C199",
    },
    {
      title: "Certificate",
      subtitle: "Certificate of participation in the II round of the Olympiad for the discipline \"Culture Science\"",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1sqSN3hO3-OAtreOiL3AEYYNJF0GCWC00/view?usp=sharing",
      alt_name: "Culture_certificate",
      color_code: "#D83B0199",
    },
    {
      title: "I degree Diploma",
      subtitle: "I place in University round of the Olympiad for the discipline \"Computer Science\"",
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
  subtitle: "Internship and Freelance",
  description:
    "I have experience of working with different data sources from online marketplaces and social networks. Junior Data Analyst with strong Electrical Engineer background. Prefer a data mining, visualization and creating specialized AI tools. I have experience of working for a large industrial company such as EVRAZ as a design engineer. I also have experience in academic freelance assignments related to MatLAB, IoT, Proteus. ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Your job offer may be here",
          company: "Your company may be here",
          company_url: "https://legatohealthtech.com/",
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
          title: "Participant of the 95th Scientific and Technical Conference \"Your Challenge\"",
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
  description:
    "My projects makes use of vast variety of latest technology tools and academic research. My passion for advanced and innovative technologies such as augmented reality (AR), virtual reality (VR), 3D and artificial intelligence (AI) is evident in the projects I have worked on.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Virtual reality glove",
      createdAt: "2020-03-06T00:00:00Z",
      description: "Virtual reality glove concept using pneumatic drive",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "portfolio.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  addressSection: {
    title: "Address",
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
    title: "",
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
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
