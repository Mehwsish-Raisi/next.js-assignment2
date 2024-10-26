import React from "react";
import cssStyle from "./contact.module.css";

const ContactPage = () => {
  return (
    <div>
      <h1 className={cssStyle.contact}>This is a Contact Page</h1>

      <p className={cssStyle.paragraph}>
        If you have any query,{" "}
        <a className={cssStyle.mail} href="mailto:raisimish@gmail.com">
          Contact Us Via Email
        </a>
      </p>
    </div>
  );
};

export default ContactPage;
