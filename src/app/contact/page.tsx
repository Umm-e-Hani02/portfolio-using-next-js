import Footer from "../components/Footer";
export default function Contact() {
    return (
        <>
        
        <section id="contact">
            <div id="left-container">
                <h1>Contact Me</h1>
                <p>
                    <img src="pngs/email.png" alt="email" id="email" />
                hanirh2468@gmail.com
                </p>
                <p>
                    <img src="pngs/location.png" alt="location" id="location" />
                Karachi, Pakistan
                </p>
                <p>
                    <img src="pngs/linkedin.png" alt="linkedin" id="linkedin" />
                    <a href="https://www.linkedin.com/in/umm-e-hani-400b812b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">UMM-E-HANI</a>
                </p>
                <p>
                    <img src="pngs/github.png" alt="github" id="github" />
                    <a href="https://github.com/Umm-e-Hani02" target="_blank">Umm-e-Hani02</a>
                </p>
            </div>

            <div id="right-container">
                <form action="" id="form">
                    <legend>Your Name:</legend>
                    <input type="text" id="name" name="name" required/>
                    <legend>Your Email:</legend>
                    <input type="email" id="email" name="email"/>
                    <legend>Your message:</legend>
                    <textarea name="message" id="message" rows={9} cols={30}></textarea> <br />
                    <button>Send Message</button>
                </form>
            </div>

        </section>

        <Footer/>
        </>

    );
}
