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
import blog6 from "../assets/images/blog_images/6.jpg";
import blog4 from "../assets/images/blog_images/4.jpg";
import blog2 from "../assets/images/blog_images/2.jpg";
import blog1 from "../assets/images/blog_images/1.jpg";
import blog3 from "../assets/images/blog_images/3.jpg";
import blog5 from "../assets/images/blog_images/5.jpg";
// blog image small
import blogSmall6 from "../assets/images/blog_images/small/6.jpg";
import blogSmall4 from "../assets/images/blog_images/small/4.jpg";
import blogSmall2 from "../assets/images/blog_images/small/2.jpg";
import blogSmall1 from "../assets/images/blog_images/small/1.jpg";
import blogSmall3 from "../assets/images/blog_images/small/3.jpg";
import blogSmall5 from "../assets/images/blog_images/small/5.jpg";

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
      date: "177 April",
      category: "Inspiration",
      title: "How to Own Your Audience by Creating an Email List.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "4",
      img: blog4,
      imgSmall: blogSmall4,
      date: "000 April",
      category: "Inspiration",
      title: "Everything You Need to Know About Web Accessibility.",
      bg: "#EEFBFF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "2",
      img: blog2,
      imgSmall: blogSmall2,
      date: "21 April",
      category: "Web Design",
      title: "The window know to say beside you",
      bg: "#FFF0F0",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "5",
      img: blog5,
      imgSmall: blogSmall5,
      date: "27 April",
      category: "Inspiration",
      title: "Top 10 Toolkits for Deep Learning in 2021.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "3",
      img: blog3,
      imgSmall: blogSmall3,
      date: "27 April",
      category: "Inspiration",
      title: "How to Own Your Audience by Creating an Email List.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "6",
      img: blog6,
      imgSmall: blogSmall6,
      date: "27 April",
      category: "Inspiration",
      title: "Everything You Need to Know About Web Accessibility.",
      bg: "#EEFBFF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
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
