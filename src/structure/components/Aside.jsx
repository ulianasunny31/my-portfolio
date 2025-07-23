import profilePic from '../../assets/profile-pic.jpg';
import { FaLocationDot } from 'react-icons/fa6';
import FeedbackForm from './FeedbackForm';

const Aside = () => {
  return (
    <aside className="sidebar">
      <img src={profilePic} alt="Profile picture"></img>
      <h3>Uliana Seredenko</h3>
      <h4>Frontend Developer</h4>
      <p>
        <FaLocationDot className="location-icon" /> Essen, NRW, Germany
      </p>
      <ul className="contact-info">
        <li>
          Github:
          <a target="_blank" href="https://github.com/ulianasunny31">
            @ulianasunny31
          </a>
        </li>
        <li>
          Linkedin:
          <a
            target="_blank"
            href="https://www.linkedin.com/in/uliana-seredenko/"
          >
            @uliana-seredenko
          </a>
        </li>
        <li>
          Telegram:
          <a target="_blank" href="https://t.me/luzertak">
            @luzertak
          </a>
        </li>
      </ul>
      <FeedbackForm className="form feedbackFormAside" />
    </aside>
  );
};

export default Aside;
