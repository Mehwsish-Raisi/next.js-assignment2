import React from "react";
import CSS from "./about.module.css"


const AboutPage = () => {
  return (
    <div>
      <h1 className={CSS.head}> This is about page</h1>
      <p className={CSS.about}>
        I am a web developer with a strong foundation in HTML, CSS, and
        TypeScript, currently expanding my skills by learning Next.js. With a
        Bachelor of Commerce (BCom) from the University of Karachi, I bring both
        technical expertise and a solid understanding of business principles to
        my projects. I enjoy building dynamic, responsive web applications and
        am always eager to explore new technologies and frameworks to enhance my
        development skills
      </p>
    </div>
  );
};

export default AboutPage;
