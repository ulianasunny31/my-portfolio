import { FaGithub } from 'react-icons/fa';
import { MdOutlinePreview } from 'react-icons/md';
import focusFrameImg from '../../assets/projects/focus-frame.png';
import devPortfolio from '../../assets/projects/devportfolio.png';
import moneyGuard from '../../assets/projects/money-guard.png';
import qubly from '../../assets/projects/qubly.png';
import theBox from '../../assets/projects/thebox.png';
import webStudio from '../../assets/projects/webstudio.png';

const Projects = () => {
  return (
    <div className="projectsContainer">
      <ul className="projectsList">
        {/* Project 1 */}
        <li>
          <img src={moneyGuard} alt="" />
          <div className="projectDescr">
            <h4 className="projectName">Money Guard</h4>
            <p className="descrP">
              Collaborated on project for budget tracking and financial planning
              focused mainly on React and Node.Js functionality. Personally
              developed a currency tab section, fully responsive an
              user-friendly.
            </p>
            <div className="sitesBtns">
              <a
                target="_blank"
                href="https://github.com/oykss/team-money-guard"
                className="githubBtn"
              >
                <FaGithub /> Github
              </a>
              <a
                target="_blank"
                href="https://team-money-guard.vercel.app/"
                className="websiteBtn"
              >
                <MdOutlinePreview /> Live Preview
              </a>
            </div>
          </div>
        </li>
        {/* Project 2 */}
        <li>
          <img src={devPortfolio} alt="Developer Portfolio" />
          <div className="projectDescr">
            <h4 className="projectName">Developer Portfolio</h4>
            <p className="descrP">
              Collaborated on a team portfolio project with a focus on
              JavaScript functionality. Personally developed and implemented the
              accordion section, ensuring seamless integration, responsiveness,
              and user-friendly design.
            </p>
            <div className="sitesBtns">
              <a
                href="https://github.com/1ster14ka/js-avengers"
                className="githubBtn"
              >
                <FaGithub />
                Github
              </a>
              <a
                target="_blank"
                href="https://1ster14ka.github.io/js-avengers/"
                className="websiteBtn"
              >
                <MdOutlinePreview />
                Live Preview
              </a>
            </div>
          </div>
        </li>
        {/* Project 3 */}
        <li>
          <img src={focusFrameImg} alt="Focus.Frame" />
          <div className="projectDescr">
            <h4 className="projectName">Focus.Frame</h4>
            <p className="descrP">
              Collaborated on a team project to develop a website, focusing on
              creating and implementing a specific section using HTML, CSS.
              Ensured responsive design, functionality, and seamless integration
              with other components.
            </p>

            <div className="sitesBtns">
              <a
                target="_blank"
                href="https://github.com/Skw1/project-Bt11cptb"
                className="githubBtn"
              >
                <FaGithub /> Github
              </a>
              <a
                target="_blank"
                href="https://skw1.github.io/project-Bt11cptb/"
                className="websiteBtn"
              >
                <MdOutlinePreview /> Live Preview
              </a>
            </div>
          </div>
        </li>
        {/* Project 4 */}
        <li>
          <img src={webStudio} alt="WEBSTUDIO" />
          <div className="projectDescr">
            <h4 className="projectName">WEBSTUDIO</h4>
            <p className="descrP">
              Developed a personal project featuring a responsive design and an
              interactive form using HTML, CSS, and JavaScript. Focused on
              usability, aesthetics, and ensuring compatibility across devices.
            </p>
            <div className="sitesBtns">
              <a
                target="_blank"
                href="https://github.com/ulianasunny31/goit-markup-hw-06"
                className="githubBtn"
              >
                <FaGithub /> Github
              </a>
              <a
                target="_blank"
                href="https://ulianasunny31.github.io/goit-markup-hw-06/"
                className="websiteBtn"
              >
                <MdOutlinePreview /> Live Preview
              </a>
            </div>
          </div>
        </li>
        {/* Project 5 */}
        <li>
          <img src={theBox} alt="The Box Landing" />
          <div className="projectDescr">
            <h4 className="projectName">The Box Landing</h4>
            <p className="descrP">
              Developed a landing page using HTML and CSS, focusing on clean
              structure and semantic markup.
            </p>
            <div className="sitesBtns">
              <a
                target="_blank"
                href="https://github.com/ulianasunny31/the-box-landing"
                className="githubBtn"
              >
                <FaGithub /> Github
              </a>
              <a
                target="_blank"
                href="https://ulianasunny31.github.io/the-box-landing/"
                className="websiteBtn"
              >
                <MdOutlinePreview /> Live Preview
              </a>
            </div>
          </div>
        </li>
        {/* Project 6*/}
        <li>
          <img src={qubly} alt="Qubly Landing" />
          <div className="projectDescr">
            <h4 className="projectName">Qubly Landing</h4>
            <p className="descrP">
              Designed and built a landing page with HTML and CSS. Focused on
              usability, performance, and maintainable code structure.
            </p>
            <div className="sitesBtns">
              <a
                target="_blank"
                href="https://github.com/ulianasunny31/qubly-landing"
                className="githubBtn"
              >
                <FaGithub />
                Github
              </a>
              <a
                target="_blank"
                href="https://ulianasunny31.github.io/qubly-landing/"
                className="websiteBtn"
              >
                <MdOutlinePreview />
                Live Preview
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
