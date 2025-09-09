import { FaGithub } from 'react-icons/fa';
import { MdOutlinePreview } from 'react-icons/md';
import focusFrameImg from '../../assets/projects/focus-frame.png';
import devPortfolio from '../../assets/projects/devportfolio.png';
import moneyGuard from '../../assets/projects/money-guard.png';
import qubly from '../../assets/projects/qubly.png';
import theBox from '../../assets/projects/thebox.png';

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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              asperiores nam ipsam ducimus corporis qui tempore vel, provident
              ullam similique obcaecati voluptate facere dolorum quidem
              perspiciatis velit doloremque minus non?
            </p>
            <div className="sitesBtns">
              <a
                href="https://github.com/oykss/team-money-guard"
                className="githubBtn"
              >
                <FaGithub /> Github
              </a>
              <a
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              exercitationem, officiis totam, quis similique aut adipisci eaque
              explicabo maiores facere ut laboriosam perspiciatis nobis
              obcaecati cum? Nisi, odit. Harum, fugit!
            </p>
            <div className="sitesBtns">
              <a href="" className="githubBtn">
                <FaGithub />
                Github
              </a>
              <a href="" className="websiteBtn">
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
            <p className="descrP"></p>

            <div className="sitesBtns">
              <a
                href="https://github.com/Skw1/project-Bt11cptb"
                className="githubBtn"
              >
                <FaGithub /> Github
              </a>
              <a
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
          <img src="" alt="" />
          <div className="projectDescr">
            <h4 className="projectName"></h4>
            <p className="descrP">WEBSTUDIO</p>
            <div className="sitesBtns">
              <a
                href="https://github.com/ulianasunny31/goit-markup-hw-06"
                className="githubBtn"
              >
                <FaGithub /> Github
              </a>
              <a
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
          <img src={theBox} alt="" />
          <div className="projectDescr">
            <h4 className="projectName">The Box Landing</h4>
            <p className="descrP"></p>
            <div className="sitesBtns">
              <a
                href="https://github.com/ulianasunny31/the-box-landing"
                className="githubBtn"
              >
                <FaGithub /> Github
              </a>
              <a
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
          <img src={qubly} alt="" />
          <div className="projectDescr">
            <h4 className="projectName">Qubly Landing</h4>
            <p className="descrP"></p>
            <div className="sitesBtns">
              <a
                href="https://github.com/ulianasunny31/qubly-landing"
                className="githubBtn"
              >
                <FaGithub />
                Github
              </a>
              <a
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
