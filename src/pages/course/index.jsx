import React, { Fragment } from 'react'
import Head from 'next/head'
import CoursesHeroSection from '@/sections/CoursesSection/coursehero/CoursesHeroSection'
import CoursesImageSection from '@/sections/CoursesSection/imagesection/CoursesImageSection'
import CoursesCardSection from '@/sections/CoursesSection/cardsection/CoursesCardSection'
import StudentSection from '@/sections/CoursesSection/studentsection/StudentSection'
import CoursesQnSection from '@/sections/CoursesSection/qnsection/CoursesQnSection'

import { useRouter } from "next/router";

const courseData = {
  fullstackuiux: {
    hero: {
      title: "Full Stack Development with UI/UX",
      description: "Kickstart your Path to Becoming a Web Development and UI/UX Pro with our Unique Program! Enroll Today and Excel Quickly in Both Fields."
    },
    imageSection: {
      image: "/images/frontend.jpg",
      title: "Full Stack Development with UI/UX",
      description: "Enroll in this intensive program covering Photoshop, Illustrator, Figma, HTML, CSS, JavaScript, Angular or React, SQL, MongoDB, Node.js, and AWS. Master web development and UI/UX design for contemporary digital innovation."

    },
    qna: [
      { q: "What will I learn in this course?", a: "You’ll explore advanced UI/UX design, web development (front-end & back-end), and responsive design principles." },
      { q: "Which tools and technologies are covered?", a: "HTML, CSS, SQL for web development, plus Photoshop, Figma, and more for UI/UX." },
      { q: "What support will I get during the course?", a: "You’ll receive guidance and mentorship from experienced instructors throughout the program." },
      { q: "Who is this course for?", a: " It’s ideal for those with basic UI/UX or web development knowledge, including designers, developers, and product managers." }
    ]
  },
  mobileappuiux: {
    hero: {
      title: "Frontend Development with UI/UX",
      description: "Master the art of building engaging mobile applications with our Mobile App Development with UI/UX Design Certification Course, focusing on intuitive design principles, seamless user experiences, and hands-on app development for real-world industry readiness."

    },
    imageSection: {
      image: "/images/frontend.jpg",
      title: "Frontend Development",
      description: "Our Front-End Development course equips you with the skills to tackle real-world design challenges. Gain expertise in HTML, CSS, JavaScript, Bootstrap and Angular/React, preparing you for dynamic roles like Front-End Developer."

    },

    qna: [
      { q: "Do you cover Tailwind CSS?", a: "Yes, fully." },
      { q: "Are projects included?", a: "Yes, 5+ real projects." }
    ]
  },
  advuiux: {
    hero: {
      title: "Advanced UI/UX Design Course",
      description: "Enhance your creativity and design expertise with our Advanced UI/UX Design Certification Course, focusing on user-centered design, advanced prototyping, and real-world project experience to build industry-ready skills."

    },
    imageSection: {
      image: "/images/frontend.jpg",
      title: "Advanced UI/UX Design Course",
      description: "Our Advanced UI/UX Design course takes your design skills to the next level with in-depth training on advanced design principles, wireframing, prototyping, usability testing, and modern design tools like Figma and Photoshop. You’ll learn how to create user-friendly, engaging, and industry-ready digital experiences."

    },

    qna: [
      { q: "Do I get a certificate after completing the course?", a: "Yes, you’ll receive an industry-recognized certificate validating your expertise in advanced UI/UX design." },
      { q: "What materials are provided during the course?", a: "Students get access to downloadable PDFs, design resources, and project files through the ALO Educational Hub mobile app." },
      { q: "What kind of support is offered throughout the course?", a: "We provide one-on-one mentoring, project feedback, and career guidance to help you grow as a professional designer." },
      { q: "How long does it usually take to complete the course?", a: "The Advanced UI/UX Design course typically takes around 4–6 months, depending on your pace and learning style." }
    ]
  },
  frontenddev: {
    hero: {
      title: " Front-End Development",
      description: "Take your Coding Skills to the Next Level with our Front-End Development Certification Course, Focusing on Practical Application and Industry Insights."
    },
    imageSection: {
      image: "/images/frontend.jpg",
      title: "Frontend Development",
      description: "Our Front-End Development course equips you with the skills to tackle real-world design challenges. Gain expertise in HTML, CSS, JavaScript, Bootstrap and Angular/React, preparing you for dynamic roles like Front-End Developer."

    },

    qna: [
      { q: "Which programming languages and frameworks will I learn in the Front-End Development course?", a: "You will learn HTML, CSS, JavaScript, and frameworks like Angular or React." },
      { q: "How will my progress be evaluated during the course?", a: "Your progress will be assessed through tasks, weekly assessments, instructor feedback, and peer reviews." },
      { q: "Will I get internship opportunities during the course?", a: " Yes, students who perform exceptionally well may receive internship opportunities." },
      { q: "What learning resources are provided in the course?", a: "You will get downloadable PDF materials through the ALO Educational Hub mobile app for easy access anytime." }
    ]
  },
  backenddev: {
    hero: {
      title: "Backend Development ",
      description: "Delve into the Fundamentals of Back-End Development, Mastering Database Handling, Server Optimization, and API Design."
    },
    imageSection: {
      image: "/images/frontend.jpg",
      title: "Backend Development",
      description: "Our Back-End Development Course offers gain in-depth knowledge of server-side programming, database handling, and API integration to build scalable web solutions across various industries. "

    },
    qna: [
      { q: "What skills will I gain from this course?", a: "You’ll learn server-side programming, database management, API development, server setup, and troubleshooting. You’ll also use industry tools and practices needed for Back-End projects." },
      { q: "What makes this Back-End Development course unique?", a: "Our course is unique because it offers hands-on learning, personalized mentorship, real-world projects, and the latest industry updates to keep your skills in demand." },
      { q: "Does the institution provide career support?", a: "Yes! We provide career guidance and placement assistance to help you start your career in Back-End Development." },
      { q: "Will I learn about databases in this course?", a: "Yes, you’ll learn database design, implementation, and optimization using SQL and other tools." }
    ]
  },
  mobileapp: {
    hero: {
      title: "Mobile-App Development",
      description: "Become a Skilled Mobile-App Developer with our Certification Course, Focusing on App Development Lifecycle, User Experience, and Platform-Specific Requirements."
    },
    imageSection: {
      image: "/images/frontend.jpg",
      title: "Mobile-App Development",
      description: "Our Mobile-App Development course gives you the skills in Flutter, Kotlin, and Android Java to become a sought-after Mobile Developer or Software Engineer in today’s competitive market."

    },


    qna: [
      { q: "What programming languages will I learn in this course?", a: " You’ll learn Dart, Flutter, Java, and Kotlin — the key languages for building apps on both iOS and Android platforms." },
      { q: "Is the course more theory or practical?", a: "The course covers both theory and practice, but with a strong focus on real-time projects to prepare you for actual app development." },
      { q: "Do I get a certification after the course?", a: "Yes, you’ll receive an industry-recognized certificate that validates your skills and boosts your career opportunities." },
      { q: "How long does the course take to complete?", a: " The course usually takes about 3 months, but it may vary depending on your learning pace and prior experience." }
    ]
  },
  uiux: {
    hero: {
      title: "UI/UX DESIGN",
      description: "Learn Photoshop, Illustrator, and Figma Skills while Mastering UI/UX Design to Create Stunning Visuals and Improve User Experiences Effectively."
    },
    imageSection: {
      image: "/images/frontend.jpg",
      title: "UI/UX DESIGN",
      description: "Our UI/UX designs course provides hands-on experience with Photoshop, Illustrator, and Figma, equipping you with the skills to tackle real-world design challenges and create impactful solutions"

    },
    qna: [
      { q: "What tools will I learn in this course?", a: "You’ll work with Photoshop, Illustrator, and Figma — the key tools for modern UI/UX design." },
      { q: "What’s the difference between UI and UX design?", a: "UI is about the look and feel of interfaces, while UX is about the overall user journey and usability." },
      { q: "What career options will I have after this course?", a: "You can become a UI/UX Designer, Graphic Designer, or take up other design-related roles." },
      { q: " How is this course different from others?", a: "It combines theory with hands-on projects, real-world case studies, expert mentorship, and the latest industry trends." }
    ]
  },
  python: {
    hero: {
      title: "Python",
      description: "Explore the world of Python with our Certification Course, emphasizing programming fundamentals, and practical applications to elevate your skills."
    },
    imageSection: {
      image: "/images/frontend.jpg",
      title: "Python",
      description: "Our Python course covers programming fundamentals, data manipulation, and web development, equipping you with essential skills for diverse tech careers and expanding your professional opportunities."

    },
    qna: [
      { q: "Do I receive a certificate after completing the course?", a: "Yes, you will get a certificate that recognizes your skills and achievement in Python." },
      { q: "What learning materials are provided?", a: "You’ll have access to downloadable PDFs through the ALO Educational Hub mobile app." },
      { q: "What kind of support is available during the course?", a: "Students get tutoring, guidance, and career counseling throughout the program." },
      { q: "How long does it usually take to complete the course?", a: "The course typically takes around 2 months, depending on your pace." }
    ]
  },
  digital: {
    hero: {
      title: "Digital Marketing",
      description: "Start your Journey in Digital Marketing with our Specialized Program. Enroll Today to Enhance your Skills and Boost Career Growth."
    },
    imageSection: {
      image: "/images/frontend.jpg",
      title: "Digital Marketing",
      description: "Become a skilled Digital Marketer through our Certification Course, focusing on SEO, SMM, PPC, and hands-on experience in marketing automation and customer relationship management."

    },
    qna: [
      { q: "What topics are covered?", a: "SEO, Social Media Marketing (SMM), and Pay-Per-Click (PPC) advertising." },
      { q: "What makes this course unique?", a: " Hands-on projects, real-world case studies, and personalized mentorship for practical skills." },
      { q: " Is the course beginner-friendly?", a: "Yes, it’s designed for beginners with no prior marketing experience." },
      { q: "Are course materials provided?", a: "Yes, PDFs and resources are available via the ALO Educational Hub mobile app." }
    ]
  },
  fullstackdev: {
    hero: {
      title: "Full-Stack Development",
      description: "Take your coding and development skills to the next level with our Full-Stack Development Certification Course, focusing on hands-on projects, real-world applications, and industry-ready skills."
    },
    imageSection: {
      image: "/images/frontend.jpg",
      title: "Full-Stack Development",
      description: "Our Full-Stack Development course covers both front-end and back-end programming, database management, and server-side development, equipping you with essential skills for diverse tech careers and expanding your professional opportunities."

    },
    qna: [
      { q: "Do I receive a certificate after completing the course?", a: "Yes, you will get a certificate that recognizes your skills and achievement in Full-Stack Development." },
      { q: "What learning materials are provided?", a: "You’ll have access to downloadable PDFs through the ALO Educational Hub mobile app." },
      { q: "What kind of support is available during the course?", a: "Students get tutoring, guidance, and career counseling throughout the program." },
      { q: "How long does it usually take to complete the course?", a: "The course typically takes around 6 months, depending on your pace." }
    ]
  },
  devops: {
    hero: {
      title: "DevOps",
      description: "Start your Journey in Digital Marketing with our Specialized Program. Enroll Today to Enhance your Skills and Boost Career Growth."
    },
    imageSection: {
      image: "/images/frontend.jpg",
      title: "DevOps",
      description: "Our DevOps course covers key practices like continuous integration (CI), continuous deployment (CD), automation, containerization, and cloud infrastructure management, equipping you with essential skills for diverse tech careers and expanding your professional opportunities."

    },
    qna: [
      { q: "Do I receive a certificate after completing the course?", a: "Yes, you will get a certificate that recognizes your skills and achievement in DevOps." },
      { q: "What learning materials are provided?", a: "You’ll have access to downloadable PDFs through the ALO Educational Hub mobile app." },
      { q: "What kind of support is available during the course?", a: "Students get tutoring, guidance, and career counseling throughout the program." },
      { q: "How long does it usually take to complete the course?", a: "The course typically takes around 4 months, depending on your pace." }
    ]
  },
  mern: {
    hero: {
      title: "MERN Stack Development",
      description: "Take your full-stack development skills to the next level with our MERN Stack Certification Course, focusing on hands-on projects and industry-relevant training."
    },
    imageSection: {
      image: "/images/frontend.jpg",
      title: "MERN Stack Development",
      description: "Our MERN Stack course covers MongoDB, Express.js, React.js, and Node.js, equipping you with essential skills for full-stack web development and expanding your professional opportunities."

    },
    qna: [
      { q: "What technologies are covered in the MERN Stack course?", a: "You’ll learn MongoDB, Express.js, React.js, and Node.js, gaining full-stack development skills." },
      { q: "Is this course suitable for beginners?", a: "Yes, the course starts with foundational concepts and gradually moves to advanced full-stack development." },
      { q: "Will I work on real projects?", a: "Absolutely! The course includes hands-on projects to build practical, job-ready experience." },
      { q: "Do I receive a certificate after completion?", a: "Yes, you will get an industry-recognized certificate upon successfully finishing the course." }
    ]
  },
  mean: {
    hero: {
      title: "MEAN Stack Development",
      description: "Enhance your full-stack development skills with our MEAN Stack Certification Course, focusing on practical projects, real-world applications, and industry insights."
    },
    imageSection: {
      image: "/images/frontend.jpg",
      title: "MEAN Stack Development",
      description: "Our MEAN Stack course covers MongoDB, Express.js, Angular, and Node.js, equipping you with essential skills for full-stack web development and expanding your professional opportunities."

    },
    qna: [
      { q: "Do I receive a certificate after completing the course?", a: "Yes, you will get a certificate that recognizes your skills and achievement in MEAN Stack Development." },
      { q: "What learning materials are provided?", a: "You’ll have access to downloadable PDFs through the ALO Educational Hub mobile app." },
      { q: "What kind of support is available during the course?", a: "Students get tutoring, guidance, and career counseling throughout the program." },
      { q: "How long does it usually take to complete the course?", a: "The course typically takes around 6 months, depending on your pace." }
    ]
  },
  graphic: {
    hero: {
      title: "Graphic Design",
      description: "Unleash your creativity with our Graphic Design Certification Course, focusing on visual communication, branding, and hands-on projects to develop practical, industry-ready design skills for real-world creative success."
    },
    imageSection: {
      image: "/images/frontend.jpg",
      title: "Graphic Design",
      description: "Our Graphic Design course covers design principles, typography, color theory, branding, and digital illustration, helping you build strong creative skills to excel in print, digital, and multimedia design industries."

    },
    qna: [
      { q: "Do I receive a certificate after completing the course?", a: "Yes, you will get a certificate that recognizes your skills and achievement in Graphic Design." },
      { q: "What learning materials are provided?", a: "You’ll have access to downloadable PDFs through the ALO Educational Hub mobile app." },
      { q: "What kind of support is available during the course?", a: "Students get mentoring, guidance, and career counseling throughout the program." },
      { q: "How long does it usually take to complete the course?", a: "The course typically takes around 4 months, depending on your pace." }
    ]
  },
  video: {
    hero: {
      title: "Video Editing",
      description: "Master the art of storytelling with our Video Editing Certification Course, focusing on advanced editing techniques, motion graphics, and real-world projects to build professional, industry-ready video production skills."
    },
    imageSection: {
      image: "/images/frontend.jpg",
      title: "Video Editing",
      description: "Our Video Editing course trains you in editing workflows, audio enhancement, and visual effects, helping you craft engaging and professional videos for YouTube, marketing, and film projects."

    },
    qna: [
      { q: "Do I receive a certificate after completing the course?", a: "Yes, you’ll receive a certificate that validates your Video Editing expertise." },
      { q: "Are learning resources included?", a: "Yes, you’ll gain access to PDFs, tutorials, and sample project files via the ALO Educational Hub app." },
      { q: "What kind of support can I expect?", a: "Our team offers one-on-one mentoring, technical assistance, and career guidance throughout the course." },
      { q: "How long is the course?", a: "This course can typically be completed in 3 months, based on your learning pace." }
    ]
  },
  tally: {
    hero: {
      title: "Tally ERP",
      description: "Join our Tally Course to Refine your Accounting Skills and Achieve your Career Aspirations. Enroll Now for Professional Development!"
    },
    imageSection: {
      image: "/images/frontend.jpg",
      title: "Tally ERP",
      description: "Our Tally ERP course is designed to provide hands-on training in accounting software, including topics like ledger creation, GST compliance, and balance sheet preparation. It’s ideal for those who want practical accounting knowledge."

    },
    qna: [
      { q: "Is a certificate included after the course?", a: "Yes, you’ll receive a certificate validating your achievement in Tally ERP." },
      { q: "What resources are provided for learning?", a: "Students have access to PDF notes, assignments, and case studies via our mobile app." },
      { q: "What kind of support can I expect?", a: "We offer tutor guidance, live query sessions, and career counseling throughout the course." },
      { q: "How long will it take to complete?", a: "The course generally takes around 2–3 months, depending on your pace." }
    ]
  },
  sap: {
    hero: {
      title: "SAP FICO ",
      description: "Advance your career in finance and accounting with our SAP FICO Certification Course, focusing on financial management, controlling processes, and real-world business applications to build practical, industry-ready expertise."
    },
    imageSection: {
      image: "/images/frontend.jpg",
      title: "SAP FICO",
      description: "Our SAP FICO course provides comprehensive training in financial accounting (FI) and controlling (CO), helping you master business finance management, reporting, and decision-making processes. You’ll gain the skills to manage accounting data, analyze financial reports, and streamline business operations with SAP software."

    },
    qna: [
      { q: "Do I get a certificate after completing the course?", a: "Yes, you’ll receive a recognized certificate in SAP FICO, validating your expertise and skills." },
      { q: "What study materials are provided?", a: "Students get access to PDFs, notes, and case studies via the ALO Educational Hub mobile app for effective learning." },
      { q: "What kind of support is offered during the course?", a: "We provide mentoring, tutoring, and career counseling to ensure you’re industry-ready." },
      { q: "How long does the course usually take?", a: "The SAP FICO course typically takes around 3–4 months, depending on your pace and practice." }
    ]
  },
  hrm: {
    hero: {
      title: "HRM ",
      description: "Kickstart your Career in HRM with our Specialized Course. Join now to Elevate your Skills and Grow Professionally!"
    },
    imageSection: {
      image: "/images/frontend.jpg",
      title: "HRM ",
      description: "Our HRM course includes comprehensive training in payroll management, recruitment and selection, labor law, and employee relations, equipping you with essential skills for a thriving career in human resource management and organizational success."

    },
    qna: [
      { q: "Is the course practical or theoretical?", a: "It balances theory with hands-on activities, case studies, and real-world scenarios." },
      { q: "Do I get a certificate?", a: "Yes, you’ll receive a certification upon successful completion." },
      { q: "How can I get support during the course?", a: "You can contact our support team via email or the course platform." },
      { q: "Course duration and topics?", a: "The course lasts 3 months and includes payroll, labor laws, recruitment, employee relations, and other HR skills." }
    ]
  },
  science: {
    hero: {
      title: "Data Science ",
      description: "Advance your career with our Data Science Certification Course, focusing on data analysis, machine learning, and real-world projects to build practical, industry-ready skills for solving complex business challenges."
    },
    imageSection: {
      image: "/images/frontend.jpg",
      title: "Data Science",
      description: "Our 3-month Data Science course provides comprehensive training in data analysis, statistical modeling, machine learning, and visualization using tools like Python, R, and Tableau. The program combines theoretical knowledge with practical projects and real-world datasets to prepare you for a successful career in data science."

    },
    qna: [
      { q: "Is the course focused on theory or practical skills?", a: "The course balances theory with hands-on projects, exercises, and real-world datasets to develop practical data science expertise." },
      { q: "Will I receive a certificate?", a: "Yes, upon completing the course, you’ll receive a certificate validating your skills in data science." },
      { q: "How can I get support during the course?", a: "Our support team is available via email or the course platform to answer your questions and guide you throughout the course." },
      { q: "What is the duration and what topics are covered?", a: "The course lasts 3 months and covers data analysis, statistical modeling, machine learning, and data visualization using industry-standard tools." }
    ]
  },
  analytics: {
    hero: {
      title: "Data Analytics",
      description: "Kickstart your Career in HRM with our Specialized Course. Join now to Elevate your Skills and Grow Professionally!"
    },
    imageSection: {
      image: "/images/frontend.jpg",
      title: "Data Analytics ",
      description: "Our 3-month Data Analytics course provides comprehensive training in data collection, cleaning, visualization, and analysis using tools like Excel, SQL, and Tableau. The program combines theoretical concepts with practical projects and real-world datasets to prepare you for a successful career in data analytics."

    },
    qna: [
      { q: "Is the course focused on theory or practical skills?", a: "The course balances theory with hands-on exercises, projects, and real-world datasets to build practical analytics skills." },
      { q: "Will I receive a certificate?", a: "Yes, upon completing the course, you’ll receive a certificate validating your skills in data analytics." },
      { q: "How can I get support during the course?", a: "Our support team is available via email or the course platform to answer your queries and provide guidance throughout your learning journey" },
      { q: "What is the duration and what topics are covered?", a: "The course lasts 3 months and includes data collection, cleaning, visualization, analysis, and reporting using popular analytics tools." }
    ]
  },
  testing: {
    hero: {
      title: "Software Testing ",
      description: "Strengthen your analytical and technical skills with our Software Testing Certification Course, focusing on manual and automation testing, real-time projects, and industry-based practices to ensure you’re job-ready and confident in quality assurance."
    },
    imageSection: {
      image: "/images/frontend.jpg",
      title: "Data Analytics ",
      description: "Our Software Testing course teaches manual and automation testing, test case creation, bug tracking, and tools like Selenium and JIRA. You’ll gain practical skills to start a career in software testing."

    },
    qna: [
      { q: "Is the course practical or theoretical?", a: "It combines theory with hands-on exercises and real testing projects." },
      { q: "Will I get a certificate?", a: "Yes, you’ll receive a certificate upon course completion." },
      { q: "How can I get support?", a: "Support is available via email or the course platform for guidance and questions." },
      { q: "What is the duration and topics?", a: "The course lasts 3 months and covers manual and automation testing, test cases, and bug tracking." }
    ]
  },
  java: {
    hero: {
      title: "Java",
      description: "Strengthen your programming foundation with our Java Development Certification Course, focusing on core Java concepts, object-oriented programming, and real-world projects to build strong, industry-ready development skills."
    },
    imageSection: {
      image: "/images/frontend.jpg",
      title: "Java ",
      description: "Our Software Testing course teaches manual and automation testing, test case creation, bug tracking, and tools like Selenium and JIRA. You’ll gain practical skills to start a career in software testing."

    },
    qna: [
      { q: "Is the course practical or theoretical?", a: "It combines theory with hands-on exercises and real testing projects." },
      { q: "Will I get a certificate?", a: "Yes, you’ll receive a certificate upon course completion." },
      { q: "How can I get support?", a: "Support is available via email or the course platform for guidance and questions." },
      { q: "What is the duration and topics?", a: "The course lasts 3 months and covers manual and automation testing, test cases, and bug tracking." }
    ]
  },
};

const Course = () => {
  const router = useRouter();
  const { type } = router.query;

  const course = courseData[type] || courseData.fullstackuiux;
  return (
    <Fragment>
      {/* <Head>
        <title>Courses - Boiler Code</title> */}
      {/* enter seo here */}
      {/* </Head> */}
      <CoursesHeroSection {...course.hero} />
      <CoursesImageSection {...course.imageSection} />
      <CoursesCardSection />
      <StudentSection />
      <CoursesQnSection qna={course.qna} />

    </Fragment>
  )
}

export default Course