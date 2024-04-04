import React from "react";
import UseData from "../../Hooks/UseData";
import Footer from "../../Share/Footer";
import "../../Share/Style.css";
import SliderCommon from "../../Share/SliderCommon";
import AboutCard from "./AboutCard";
import HomeCard from "../../Share/HomeCard";
import PageTitle from "../../Share/PageTitle";

const AboutTwo = () => {
  const { local, serviceArray } = UseData();

  return (
    <section>
      <PageTitle title="About"></PageTitle>
      {/* End pagetitle */}

      <div className=" lg:rounded-2xl bg-white dark:bg-[#111111]">
        <div data-aos="fade">
          <div className=" pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
            {/* About page title */}
            <h2 className="after-effect after:left-52 lg:block hidden">
              About Me
            </h2>
            <div className="lg:hidden">
              {/* Sidebar personal information for mobile devices */}
              <HomeCard />
              <div className=" md:gap-10 mb-12 md:pt-[30px] items-center lg:hidden ">
                <h2 className="after-effect after:left-52 mb-5">About Me</h2>
                <div className="col-span-12 space-y-2.5">
                  <div className="lg:mr-16">
                    <p className="text-gray-lite  dark:text-color-910 leading-7">
                      I'm Creative Director and UI/UX Designer from Sydney,
                      Australia, working in web development and print media. I
                      enjoy turning complex problems into simple, beautiful and
                      intuitive designs.
                    </p>
                    <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                      My aim is to bring across your message and identity in the
                      most creative way. I created web design for many famous
                      brand companies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden ">
              <div className="col-span-12 space-y-2.5">
                <div className="lg:mr-16">
                  <p className="text-gray-lite  dark:text-color-910 leading-7">
                  I'm a software design specialist with over 10 years of professional experience in the programming industry. With a bachelor's degree in software engineering, I've honed my technical skills and gained valuable expertise in programming.
                  </p>
                  <p className="text-gray-lite  dark:text-color-910 leading-7">
                  I'm dedicated to using my experience and specialized knowledge as a professional programmer to tackle complex software challenges and efficiently develop various projects. 
                  </p>
                  <p className="text-gray-lite  dark:text-color-910 leading-7">
                  💻 I'm also eager to collaborate on diverse software projects, sharing my experiences with you. Feel free to reach out to discuss your projects, and together, we can explore the exciting world of programming! 
                  </p>
                  <p className="text-gray-lite  dark:text-color-910 leading-7">
                  I know all web and mobile, so you do not need to know any technical details before contacting me. All you need to get an excellent result with me is just an idea. I love my work, and I have a pretty good eye for detail. I always aim to do more work than required. Therefore, my clients are always satisfied. I am looking forward to hearing from you!
                  </p>
                  <p className="text-gray-lite  dark:text-color-910 leading-7">
                  📞 Available for regular call sessions throughout the project to keep it on track and ensure timely delivery.
                  </p>
                  <p className="text-gray-lite  dark:text-color-910 leading-7">
                  📱 Always prioritize mobile responsiveness on websites, no extra charges for the mobile version.
                  </p>
                  <p className="text-gray-lite  dark:text-color-910 leading-7">
                  🎯 My goal is to complete and implement my clients' objectives and ideas, ensuring their complete satisfaction!
                  </p>
                  <p className="text-gray-lite  dark:text-color-910 leading-7">
                  🧩 Select and utilize the most flexible technology stack for each project individually.
                  </p>
                  <p className="text-gray-lite  dark:text-color-910 leading-7">
                  🤝 Ready to assist everyone in building their dream solution!
                  </p>
                  
                  
                </div>
              </div>
            </div>
          </div>
          {/* End about descriptions */}

          <div className="  pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
            <h3 className="text-[35px] dark:text-white font-medium pb-5">
              What I do!
            </h3>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
              {/* Experience information  */}

              {serviceArray.map((item) => (
                <AboutCard key={Math.random()} item={item} local={local} />
              ))}
            </div>
          </div>
          {/* service provide end */}

          <div className="px-2 sm:px-5 md:px-10 lg:px-14 ">
            {/* Slick Slider call here  */}
            <SliderCommon />
          </div>

          {/* Common Footer call here */}
          <Footer bg={"#FFFF"} />
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
