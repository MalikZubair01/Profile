import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href=" https://github.com/berryboostbb/mediTour_b2b  " 
                target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://meditour.global/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Medi Tour </h3>

              <p>
              Worked as a Frontend Developer on a large-scale multi-vendor and multi-user medical platform. My responsibilities included developing and optimizing the platform’s frontend, ensuring a seamless user experience. The platform facilitates efficient management for medical service providers while offering an intuitive interface for users. Focused on building a scalable, responsive, and high-performance frontend using modern web technologies.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/MalikZubair01/industrymall-front-end" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://www.industry-mall.net/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Industry Mall</h3>
              <p>



                Worked as a Frontend Developer on Industry Mall, a large-scale multi-vendor e-commerce platform for industrial machines, similar to Daraz. The platform facilitates buying and selling of industrial equipment, enabling vendors to list their products and customers to make purchases seamlessly. Developed and optimized the frontend using React, Bootstrap, and other technologies, ensuring a responsive, user-friendly, and efficient interface. Focused on enhancing user experience, implementing key functionalities, and improving platform performance
              </p>
            </div>
      
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="#" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://voltonic.net/" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Voltonic SOlutions</h3>
              <p>
              Worked as a Frontend Developer on Industry Mall, a multi-vendor e-commerce platform for industrial machines, motors, mechanical, and electrical parts. The platform operates like Daraz, allowing vendors to list their products while enabling customers to browse and purchase seamlessly. Played a key role in designing and developing a responsive, user-friendly interface, ensuring smooth navigation and efficient functionality. Focused on enhancing user experience, optimizing performance, and implementing essential frontend features to improve platform usability.
              </p>
            </div>
         
          </div>
        </ScrollAnimation>


      </div>
    </Container>
  );
}