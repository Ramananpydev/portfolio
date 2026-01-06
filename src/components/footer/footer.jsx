import './footer.css'


function Footer(){
    return(
        <div>
            <footer>
    <div className="footer-content" data-aos="fade-up" >
        <div className="get">
            <p>Building modern, high-performance web experiences through elegant design, clean code, and the latest technologies.</p>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
        </div>

        <div className="quick-link">
            <ul>
                <li>About</li>
                <li>Skill</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
        </div>

        <div className="getintouch">
            <a href="mailto:ramanan.pydev@gmail.com">Email
            <p>ramanan.pydev@gmail.com</p></a>
            
            <a href="" target='_blank'>Location
            <p>Aarumuga nagar, kalugumalai-628552</p></a>
        </div>
    </div>
</footer>

        
        </div>
    )
}
export default Footer