import { useEffect, useState } from "react";
// for work_images
import work1 from "../assets/images/work_images/1.png";
import work2 from "../assets/images/work_images/2.jpg";
import work3 from "../assets/images/work_images/3.png";
import work4 from "../assets/images/work_images/4.png";
import work5 from "../assets/images/work_images/5.png";
import work6 from "../assets/images/work_images/6.png";
import work7 from "../assets/images/work_images/7.png";
import work8 from "../assets/images/work_images/8.png";
/*import work9 from "../assets/images/work_images/9.jpg";*/
// works small images
import workSmall1 from "../assets/images/work_images/small/1.png";
import workSmall2 from "../assets/images/work_images/small/2.jpg";
import workSmall3 from "../assets/images/work_images/small/3.png";
import workSmall4 from "../assets/images/work_images/small/4.png";
import workSmall5 from "../assets/images/work_images/small/5.png";
import workSmall6 from "../assets/images/work_images/small/6.png";
import workSmall7 from "../assets/images/work_images/small/7.png";
import workSmall8 from "../assets/images/work_images/small/8.png";
/*import workSmall9 from "../assets/images/work_images/small/9.jpg";*/
// blog post images
import blog1 from "../assets/images/blog_images/1.webp";
import blog6 from "../assets/images/blog_images/6.jpg";
import blog4 from "../assets/images/blog_images/4.webp";
import blog2 from "../assets/images/blog_images/2.jpg";
import blog3 from "../assets/images/blog_images/3.jpg";
import blog5 from "../assets/images/blog_images/5.png";
// blog image small
import blogSmall6 from "../assets/images/blog_images/small/6.jpg";
import blogSmall4 from "../assets/images/blog_images/small/4.webp";
import blogSmall2 from "../assets/images/blog_images/small/2.jpg";
import blogSmall1 from "../assets/images/blog_images/small/1.webp";
import blogSmall3 from "../assets/images/blog_images/small/3.jpg";
import blogSmall5 from "../assets/images/blog_images/small/5.png";

import img1 from "../assets/images/slider/brand-1.png";
import img2 from "../assets/images/slider/brand-2.png";
import img3 from "../assets/images/slider/brand-3.png";
import img4 from "../assets/images/slider/brand-4.png";
import img5 from "../assets/images/slider/brand-5.png";
//  icon use as img here
import icon from "../assets/images/icons/icon-1.svg";
import icon1 from "../assets/images/icons/icon-2.svg";
import icon2 from "../assets/images/icons/icon-3.svg";
import icon3 from "../assets/images/icons/icon-4.svg";
import icon4 from "../assets/images/icons/icon-5.svg";
import icon5 from "../assets/images/icons/icon-6.svg";
// contact image
import iconPhone from "../assets/images/contact/phone-call 1.png";
import iconEmail from "../assets/images/contact/email 1.png";
import iconMap from "../assets/images/contact/map 1.png";
import { CgNotes } from "react-icons/cg";
import { FaBlogger, FaRegUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // find items for Blogs  modal open
  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for protfilo section
  const workItems = [
    {
   
      id: "1",
      tag: "Web Design",
      title: "Airport Operations Managment System",
      img: work1,
      imgSmall: workSmall1,
      bg: "#FFF3FC",
      client: "Hamrah Kousha Kish",
      langages: "PHP ,HTML, CSS, Javascript",
      link: "https://www.fph.hamrahkousha.ir",
      linkText: "Occ Software",
      description:
        " This software is used for flight scheduling and various airlines. Airports that are under contract with Kosha Hamrah Company use this software to register information and facilitate communication between internal airport units and (origin and destination airports). With this software, forming operational teams becomes easier, and flight information and LDM, etc., are automatically sent to the national airline organization.",
    },
    {
      id: "2",
      tag: "Web Design",
      title: "Motekhasess Plus Aplication",
      img: work2,
      imgSmall: workSmall2,
      bg: "#FFF3FC",
      client: "Motekhasess Plus",
      langages: "PHP ,HTML, CSS, Javascript",
      link: "https://www.motekhasesplus.ir/",
      linkText: "Motekhasess Plus",
      description:
        " This software is for ease of supervision of construction and installation works.",
    },
    {
      id: "3",
      tag: "Web Design",
      title: "Hamrah Kousha Kish",
      img: work3,
      imgSmall: workSmall3,
      bg: "#FFF3FC",
      client: "Hamrah Kousha",
      langages: "PHP ,HTML, CSS, Javascript",
      link: "https://www.hamrahkousha.ir",
      linkText: "Hamrah Kousha",
      description:
        " A website to introduce the company, operational units, and airport equipment ordered by Kosha Kish Company.",
    },
    {
      id: "4",
      tag: "Web Design",
      title: "lotus beauty",
      img: work4,
      imgSmall: workSmall4,
      bg: "#FFF3FC",
      client: "lotus beauty",
      langages: "PHP ,HTML, CSS, Javascript",
      link: "https://lotusmed-beauty.com/",
      linkText: "lotus beauty",
      description:
        " Company site for introducing and selling beauty products.",
    },
    {
      id: "5",
      tag: "Web Design",
      title: "Ansel",
      img: work5,
      imgSmall: workSmall5,
      bg: "#FFF3FC",
      client: "ANSEL",
      langages: "Flutter,Dart",
      link: "#",
      linkText: "ANSEL",
      description:
        "The designed application has the ability to determine the time and percentage of the mobile battery charge, enabling it to control the battery charge and prevent damage.",
    },
    {
      id: "6",
      tag: "Web Design",
      title: "IFund Prop Panel",
      img: work6,
      imgSmall: workSmall6,
      bg: "#FFF3FC",
      client: "IFund",
      langages: "Laravel,React",
      link: "https://dashboard.ifund.trade/",
      linkText: "IFund Prop Panel",
      description:
        "Prop Firm Panel",
    },
    {
      id: "7",
      tag: "Web Design",
      title: "IFund Prop",
      img: work7,
      imgSmall: workSmall7,
      bg: "#FFF3FC",
      client: "IFund",
      langages: "Laravel,React",
      link: "https://ifund.trade/",
      linkText: "IFund Prop",
      description:
        "Prop Firm Panel",
    },
    {
      id: "8",
      tag: "Web Design",
      title: "Azin Khodro CO",
      img: work8,
      imgSmall: workSmall8,
      bg: "#FFF3FC",
      client: "Azin Khodro",
      langages: "Laravel,React",
      link: "https://azinkhodroco.ir/",
      linkText: "Azin Khodro CO",
      description:"Azin Khodro CO",
    },
    
  ];
  const [data, setData] = useState(workItems);

  // Elements for Blogs section
  const blogsData = [
    {
      id: "1",
      img: blog1,
      imgSmall: blogSmall1,
      date: "202 April",
      category: "Web Design",
      title: "Top 5 Benefits of Laravel Development Services .",
      bg: "#FCF4FF",
      description:`
                  <p>In the digital age, the need to set up a solid net presence is critical for businesses trying to expand their reach and advantage access to an ever-developing target audience. An expertly designed website, stocked with intuitive functions and seamless functions, can be the foundation of success for companies across all industries. But, getting through the myriad of options for eCommerce platforms could be overwhelming if you don’t have a solid grasp of the frameworks that underlie them.</p>         
                  <p>Enter Laravel, a flexible and feature-rich framework that has become a leader in web-based development. With many benefits, Laravel has cemented its place in the top ten desired platforms in the world. We’ll take a look at the top five advantages that Laravel development services can bring into the equation:</p>
                  <p><b>Technology and Dynamic Development:</b>
                  Laravel is synonymous with the latest innovations and constant evolution within the technological environment. The company’s explosive growth is evident in introducing new features and improvements designed to elevate your web projects to ever-higher highs. Becoming aware of current advancements and developments is vital, so it’s essential to work with skilled Laravel development solutions to achieve the best outcomes. With Laravel’s flexible web solutions, organizations can carve out their space and be a major player in the world of digital.</p>
                  <p><h2><b>Open-Source Accessibility:</b></h2></p>
                  <p>One of its most distinctive characteristics is its open-source nature, which allows for broad accessibility to developers. With the bare necessities of PHP and the ability to edit text, developers can use Laravel’s flexible framework to create various websites and apps ranging from simple to complex. Additionally, the frequent improvements and constant updates enable users to design solutions that are in sync with the goals of your company. Pre-built solutions and routing middleware also ease the process of coding, creating the highest efficiency and flexibility.</p>
                  <p><h2><b>Cost-Effectiveness:</b></h2></p>
                  <p>Accepting Laravel results in cost-effectiveness, without compromising the quality of service. Its cost-effective framework paves the way for the seamless development of user-friendly, responsive applications that aren’t costly. If you’re looking for low-cost solutions, or a programmer seeking to maximize the use of resources, Laravel offers a wealth of options for stakeholders who are budget-conscious.</p>
                  <p><h2><b>Optimized Performance:</b></h2></p>
                  <p>In the crowded world of online commerce, speed is crucial for sustainable expansion. Laravel stands out as a beacon of quality, providing unbeatable efficiency and scaling capabilities to help propel enterprises to the next level. With the help of Laravel’s powerful abilities to develop, companies can create the best strategies for engaging their audience efficiently. From faster web app development to better support, Laravel provides enterprises of all sizes with the necessary tools to succeed in the rapidly evolving digital world. Additionally, features like Redis and Memcached help improve app performance, usability, and efficiency, providing users with a smooth experience.</p>
                  <p><h2><b>MVC Architecture:</b></h2></p>
                  <p>Laravel’s adoption of the Model-View-Controller (MVC) architecture underscores its dedication to established and organized net improvement. This architectural version divides web applications into 3 distinct factors: model, view, and controller, allowing for fast development and improved transparency in the task. Additionally, MVC architecture simplifies tasks and ensures efficiency in documentation and project management, which ensures a consistent and efficient development process.</p>
                  `
                },
    {
      id: "4",
      img: blog4,
      imgSmall: blogSmall4,
      date: "22 April",
      category: "Web Design",
      title: "Frontend Development with Laravel",
      bg: "#EEFBFF",
      description:
        `
        <p><h2><b>Introduction:</b></h2></p>
        <p>Frontend development plays a crucial role in crafting modern web applications that are not only visually appealing but also highly functional and user-friendly. While there are numerous frontend frameworks and tools available, Laravel, primarily known as a backend PHP framework, offers a unique approach to frontend development. In this article, we will explore how Laravel, with its frontend capabilities and ecosystem, provides developers with a comprehensive solution for building dynamic and engaging user interfaces.</p>
        <p>1.</p>
        <p><h2>Blade Templating Engine:</h2></p>
        <p>Laravel introduces Blade, a powerful templating engine, which simplifies the process of creating frontend views. Blade templates allow developers to write clean and efficient PHP code mixed with HTML, enhancing code readability and maintainability. With features like template inheritance, control structures, and reusable components, Blade empowers developers to build complex layouts with ease.</p>
        <p>2.</p>
        <p><h2>Laravel Mix:</h2></p>
        <p>Laravel Mix is a fluent API wrapper for Webpack, a popular module bundler for modern JavaScript applications. With Laravel Mix, developers can define asset compilation tasks using a simple and intuitive API, abstracting away the complexity of Webpack configuration. Whether it's compiling CSS preprocessors, processing JavaScript files, or optimizing images, Laravel Mix streamlines the frontend build process, enabling developers to focus on writing code rather than build configurations.</p>
        <p>3.</p>
        <p><h2>Vue.js Integration:</h2></p>
        <p>Laravel provides first-class support for Vue.js, a progressive JavaScript framework for building user interfaces. With Laravel's built-in support for Vue.js, developers can effortlessly integrate Vue components into their applications and leverage reactive data binding, component-based architecture, and other Vue features. The tight integration between Laravel and Vue.js fosters a seamless development experience, allowing developers to build interactive and responsive frontend interfaces.</p>
        <p>3.</p>
        <p><h2>Laravel UI Presets:</h2></p>
        <p>Laravel UI presets offer pre-built frontend scaffolding for popular frontend frameworks like Vue.js, React, and Bootstrap. With Laravel UI, developers can quickly set up frontend assets, including authentication views, without the need for manual configuration. By providing ready-to-use templates and components, Laravel UI accelerates frontend development, enabling developers to kickstart their projects with minimal setup overhead.</p>
        `
    
      },
    {
      id: "2",
      img: blog2,
      imgSmall: blogSmall2,
      date: "21 April",
      category: "Web Design",
      title: "Laravel is one of the popular and widely-used frameworks for web development",
      bg: "#FFF0F0",
      description:
        `
        <p>Laravel is one of the popular and widely-used frameworks for web development, offering many features and capabilities that set it apart from its competitors. Below are some of the distinguishing features of Laravel compared to its competitors:</p>
        <p>1.</p>
        <p><h2>Eloquent ORM:</h2></p>
        <p>Laravel utilizes a powerful Object-Relational Mapping (ORM) called Eloquent for database communication. This ORM allows developers to work with object-oriented models, making database operations easy without needing to write SQL code. This feature simplifies the development process and enhances database capabilities and quality.</p>
        <p>2.</p>
        <p><h2>Routing and Controllers System:</h2></p>
        <p>Laravel boasts a robust routing system, enabling developers to define various routes in their applications and connect them to controllers. This routing system facilitates seamless navigation between different pages and resources within applications.</p>
        <p>3.</p>
        <p><h2>Powerful Configuration System:</h2></p>
        <p>Laravel features a powerful configuration system that allows developers to easily manage different settings of their applications. This configuration system enables developers to centralize various settings management and ensures accuracy and predictability in application changes.</p>
        <p>4.</p>
        <p><h2>Validation and Authentication System:</h2></p>
        <p>Laravel comes with a robust validation and authentication system, empowering developers to customize user validation and authentication using different rules and constraints. This feature ensures developers can easily enforce security measures and prevent unauthorized access.</p>
        <p>5.</p>
        <p><h2>Event and Listener System:</h2></p>
        <p>Laravel includes a powerful event and listener system, allowing developers to respond to various events in their applications and perform different actions. This event and listener system enables developers to react to events, publish them, and track them within their applications seamlessly.</p>
        `
    },
    {
      id: "5",
      img: blog5,
      imgSmall: blogSmall5,
      date: "27 April",
      category: "Front-end",
      title: "Unleashing the Power of React.js",
      bg: "#FCF4FF",
      description:
        `
        <p><h2>Introduction:</h2></p>
        <p>In the rapidly evolving landscape of web development, frontend technologies play a pivotal role in creating immersive and dynamic user experiences. Among these technologies, React.js stands out as a powerful and innovative JavaScript library for building user interfaces. In this article, we will delve into the unique features and capabilities of React.js and explore how it is revolutionizing frontend development.</p>
        <p>1.</p>
        <p><h2>Declarative and Component-Based Architecture:</h2></p>
        One of the defining features of React.js is its declarative and component-based architecture. React allows developers to build UI components as independent and reusable units, each encapsulating its own logic and presentation. This modular approach simplifies code organization, promotes reusability, and enhances maintainability, making it easier to manage complex UIs.</h2></p>
        <p>2.</p>
        <p><h2>Virtual DOM for Efficient Rendering:</h2></p>
        <p>React employs a virtual DOM (Document Object Model) to efficiently update and render UI components. Instead of directly manipulating the browser DOM, React creates a lightweight representation of the DOM in memory. By comparing the virtual DOM with the actual DOM, React identifies the minimal set of changes needed to update the UI, resulting in faster rendering and improved performance.</p>
        <p>3.</p>
        <p><h2>JSX for Enhanced Developer Productivity:</h2></p>
        <p>JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code directly within JavaScript. With JSX, developers can seamlessly integrate UI components and logic, streamlining the development process and improving code readability. JSX also provides syntactic sugar for creating React elements, reducing the verbosity of traditional JavaScript syntax.</p>
        <p>4.</p>
        <p><h2>Unidirectional Data Flow with Flux and Redux:</h2></p>
        <p>React promotes a unidirectional data flow architecture, which helps manage state and data flow within an application. Flux and Redux are popular state management libraries that complement React, providing predictable state management and efficient data propagation. By centralizing application state and enforcing strict data flow patterns, Flux and Redux enable developers to build scalable and maintainable frontend applications.</p>
        <p>5.</p>
        <p><h2>Rich Ecosystem and Community Support:</h2></p>
        <p>React.js benefits from a vibrant ecosystem and a thriving community of developers and contributors. The React ecosystem encompasses a wide range of libraries, tools, and frameworks, including React Router for routing, Material-UI for UI components, and Next.js for server-side rendering. Additionally, the React community actively shares knowledge, best practices, and reusable components, fostering collaboration and innovation.</p>
        `
    },
   
   
  ];

  // Menu items for Homepage One
  const menuItem = [
    {
      id: "01",
      name: "Home",
      link: "/home/homePage",
      icon: <AiOutlineHome />,
    },
    {
      id: "02",
      name: "About",
      link: "/home/about",
      icon: <FaRegUser />,
    },
    {
      id: "06",
      name: "Resume",
      link: "/home/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/home/works",
      icon: <FiCodesandbox />,
    },
    {
      id: "04",
      name: "Blogs",
      link: "/home/blogs",
      icon: <FaBlogger />,
    },
    {
      id: "05",
      name: "Contact",
      link: "/home/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Menu items for Homepage Two
  const menuItemTwo = [
    {
      id: "01",
      name: "About",
      link: "/about",
      icon: <FaRegUser />,
    },
    {
      id: "02",
      name: "Resume",
      link: "/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/works",
      icon: <FiCodesandbox />,
    },
    {
      id: "04",
      name: "Blogs",
      link: "/blogs",
      icon: <FaBlogger />,
    },
    {
      id: "05",
      name: "Contact",
      link: "/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Slider image for Clients
  const sliderImg = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img2,
    img3,
    img4,
    img5,
  ];

  // serviceArray items for about page
  const serviceArray = [
    {
      id: "1",
      icon: icon,
      title: "Ui/Ux Design",
      des: "Architecting and developing new products from the ground up.",
      color: "#D566FF",
      bg: "#FCF4FF",
    },
    {
      id: "2",
      icon: icon1,
      title: "App Development",
      des: "Rapidly developing MVP's and prototypes",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    {
      id: "3",
      icon: icon2,
      title: "Photography",
      des: "- Re-engineering and Innovation of existing products",
      color: "#8774FF",
      bg: "#FCF4FF",
    },
    {
      id: "4",
      icon: icon3,
      title: "Photography",
      des: "Designing and managing cloud based systems",
      color: "#FF6080",
      bg: "#FFF4F4",
    },
    {
      id: "5",
      icon: icon4,
      title: "Managment",
      des: "Transforming technology teams and processes to improve efficiency, timeliness, and quality ",
      color: "#FF75D8",
      bg: "#FFF0F8",
    },
    {
      id: "6",
      icon: icon5,
      title: "Web Development",
      des: "Technology strategy and roadmaps ",
      color: "#269FFF",
      bg: "#F3FAFF",
    },
    {
      id: "7",
      icon: icon5,
      title: "Web Development",
      des: "Technology due diligence and assessments ",
      color: "#269FFF",
      bg: "#F3FAFF",
    },
    {
      id: "8",
      icon: icon5,
      title: "Web Development",
      des: "Security and risk assessments ",
      color: "#269FFF",
      bg: "#F3FAFF",
    },
    {
      id: "9",
      icon: icon5,
      title: "Web Development",
      des: "Leading and building distributed product development teams ",
      color: "#269FFF",
      bg: "#F3FAFF",
    },
  ];

  // educationArray items for Resume page
  const educationArray = [
    {
      id: 1,
      date: "2021-2023",
      title: "Bachelor of IT ",
      place: "Karaj University",
      bg: "#FFF4F4",
    },

    {
      id: 2,
      date: "2010-2013",
      title: "Associate in Software Engineering",
      place: "Abadan University",
      bg: "#FFF1FB",
    },

  
  ];
  // experiencesArray items for Resume page
  const experiencesArray = [
    {
      id: 1,
      date: "2022-2023",
      title: "Project Manager ",
      place: "In StackTeam   . http://www.stackteam.org/",
      bg: "#EEF5FA",
    },
    {
      id: 2,
      date: "2017-2022",
      title: "Full-Stack Developer ",
      place: "In Hamrah Kousha Kish Company  - My achievements : occ software design - Kosha Kish company site design - logistics process design. http://www.hamrahkousha.ir/ . http://www.fph.hamrahkousha.ir/",
      bg: "#EEF5FA",
    },

    {
      id: 3,
      date: "2014-2017",
      title: "Full-Stack Developer",
      place: "Saman Handling -  Education software design. Software design for traffic unit shift. https://www.saman.aero/",
      bg: "#F2F4FF",
    },

    {
      id: 4,
      date: "2012-2013",
      title: "developer and suporter software",
      place: "Development of integrated enterprise software. Developing software and creating reports was only through writing Stored Procedures,functions in SQL Server. https://avasamane.com/fa/",
      bg: "#EEF5FA",
    },
  ];
  // awardsArray items for Resume page
  const awardsArray = [
    {
      id: 1,
      date: "2015-2017",
      title: "  Graphic Designer",
      place: "Web Graphy, Los Angeles, CA",
      bg: "#FCF4FF",
    },

    {
      id: 2,
      date: "2014 - 2015",
      title: "Jr. Web Developer",
      place: "Creative Gigs.",
      bg: "#FCF9F2",
    },

    {
      id: 3,
      date: "2015-2017",
      title: "Best Freelancer",
      place: "Fiver & Upwork Level 2 & Top Rated",
      bg: "#FCF4FF",
    },
  ];

  // Working Skills items for Resume page
  const lineArray = [
    {
      id: "01",
      color: "#FF6464",
      name: "Laravel",
      number: "90",
    },
    {
      id: "02",
      color: "#9272D4",
      name: "Microservice ",
      number: "85",
    },
    {
      id: "03",
      color: "#5185D4",
      name: "OOP",
      number: "95",
    },
    {
      id: "03",
      color: "#CA56F2",
      name: "RESTful API",
      number: "100",
    },
    {
      id: "04",
      color: "#CA56F2",
      name: " DesignPatterns",
      number: "75",
    },
    {
      id: "05",
      color: "#CA56F2",
      name: "Sql / nosql",
      number: "90",
    },
    {
      id: "06",
      color: "#CA56F2",
      name: "Clean code",
      number: "95",
    },
    {
      id: "07",
      color: "#CA56F2",
      name: "RabbitMQ",
      number: "80",
    },
    {
      id: "08",
      color: "#CA56F2",
      name: "React.js",
      number: "75",
    },
    {
      id: "09",
      color: "#CA56F2",
      name: "Next.js",
      number: "75",
    },
  ];

  // Personal information for contact pages
  const contactArray = [
    {
      id: "01",
      icon: iconPhone,
      title: "Phone ",
      item1: "+452 666 386",
      item2: "+452 666 386",
      bg: "#FCF4FF",
    },
    {
      id: "02",
      icon: iconEmail,
      title: "Email ",
      item1: "support@gmail.com",
      item2: "example@gmail.com",
      bg: "#EEFBFF",
    },
    {
      id: "03",
      icon: iconMap,
      title: "Address ",
      item1: "Maount View, Oval",
      item2: "Road, New York, USA",
      bg: "#F2F4FF",
    },
  ];

  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
    menuItem,
    NavLink,
    menuItemTwo,
    serviceArray,
    sliderImg,
    educationArray,
    experiencesArray,
    awardsArray,
    lineArray,
    contactArray,
  };
};

export default AllData;
