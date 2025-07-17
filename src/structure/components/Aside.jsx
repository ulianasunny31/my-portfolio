import profilePic from '../../assets/profile-pic.jpg';

const Aside = () => {
  return (
    <aside className="sidebar">
      <img src={profilePic} alt="Profile picture"></img>
      <h3>Uliana Seredenko</h3>
      <p>Essen, NRW, Germany </p>
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
    </aside>
  );
};

export default Aside;
