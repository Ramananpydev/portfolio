import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div>
      <section id='contact'>
    <div className="get-in-touch" >
   
        <div className="contact">
            <h3 className="title">Get In<span>Touch</span></h3>
            <p className="subtitle">If you'd like to collaborate, discuss a project, or need help building a full-stack application, feel free to reach out. I’m always open to new opportunities, freelance work, internships, and creative ideas. You can contact me anytime through email or connect with me on social platforms.</p>
        </div>

        <div className="contact-container" data-aos="fade-up" data-aos-delay="200">


    <div className="left-form">
        <form action="mailto:ramanan.pydev@gmail.com" method="post" enctype="text/plain">
            <label>Name</label>
            <input type="text" name="name" required/>

            <label>Email</label>
            <input type="email" name="email" required/>

            <label>Subject</label>
            <input type="text" name="subject"/>

            <label>Message</label>
            <textarea name="message" rows="6" required></textarea>

            <button type="submit">Send Message</button>
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

            <a href="tel:+919876543210"><div className="phone">
                <i className="fa-solid fa-phone"></i>
                <h4>Phone</h4>
                <p>+91 93844 15892</p>
            </div></a>

            <a href="https://wa.me/919876543210" target="_blank"><div className="location">
                <i className="fa-brands fa-whatsapp"></i>
                <h4>Whatsapp</h4>
                <p>+91 93844 15892</p>
            </div></a>
        </div>

        <div class="social-icons">
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
