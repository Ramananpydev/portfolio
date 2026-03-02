import React from 'react'
import './contact.css'
import { useState } from 'react';

function Contact() {
      const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xaqdzgew", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
}
  return (
    <div>
      <section id='contact'>
    <div className="get-in-touch" >
   
        <div className="contact">
            <h3 className="title">Get In<span>Touch</span></h3>
            <p className="subtitle">If you'd like to collaborate, discuss a project, or need help building a full-stack application, feel free to reach out. I’m always open to new opportunities, freelance work, internships, and creative ideas. You can contact me anytime through email or connect with me on social platforms.</p>
        </div>

        <div className="contact-container" >


    <div className="left-form">
        <form action="https://formspree.io/f/xaqdzgew" method="post" onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" required/>

            <label>Email</label>
            <input type="email" name="email" required/>

            <label>Subject</label>
            <input type="text" name="subject"/>

            <label>Message</label>
            <textarea name="message" rows="6" required></textarea>

            <button type="submit">Send Message</button>


          {status === "SUCCESS" && (
            alert("✅ Message Sent Successfully!")
          )}

          {status === "ERROR" && (
            alert("❌ Something went wrong!")
          )}

        </form>
    </div>


    <div className="right-connect">
        <h4>Let's Connect</h4>
        <p>I'm always excited to work on new projects...</p>

        <div className="connect">
            <a href="mailto:ramanan.pydev@gmail.com"><div className="email">
                <i className="fa-solid fa-envelope-circle-check"></i>
                <h4>Email</h4>
                <p>ramanan.pydev@gmail.com</p>
            </div></a>

            <a href="tel:+919384415892"><div className="phone">
                <i className="fa-solid fa-phone"></i>
                <h4>Phone</h4>
                <p>+91 93844 15892</p>
            </div></a>

            <a href="https://wa.me/919384415892" target="_blank"><div className="location">
                <i className="fa-brands fa-whatsapp"></i>
                <h4>Whatsapp</h4>
                <p>+91 93844 15892</p>
            </div></a>
        </div>

        <div className="social-icons">
           <i className="fa-brands fa-instagram"></i>
          <a href="https://www.linkedin.com/in/ramanan-pydev/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
        </div>
    </div>

</div>
</div>
</section>

    </div>
  )
}

export default Contact
