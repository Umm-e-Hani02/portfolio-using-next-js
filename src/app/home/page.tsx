export default function HomeSection() {
  return (
    <section id="hero-section">
      <div>
        <p>Hi there!</p>
        <h1>
          I am <span>UMM-E-HANI</span>
        </h1>
        <p>
          I'm on a journey to bring creativity and technology together to create
          engaging <br /> web experiences. As I explore the world of web
          development, AI, and the Metaverse, <br /> I'm constantly learning,
          building, and evolving. Here you can check out my <br />
          ongoing projects and the skills I'm developing along the way.
        </p>

        <div>
          <button id="hire-me">
            <a href="/contact">Hire Me</a>
          </button>

          <button id="download">
            <a
              href="https://hackathon-milestones1-2-journey.vercel.app/"
              target="_blank"
            >
              {" "}
              Download CV
            </a>
          </button>
        </div>
      </div>

      <div>
        <img src="images/pfp.jpg" alt="landing-img" />
      </div>
    </section>
  );
}
