const Education = () => {
  return (
    <div className="educationDiv">
      <h2>EDUCATION</h2>
      <ul className="edList">
        <li>
          <h3 className="edPlace">GoIT Global</h3>
          <h3 className="edName">Fullstack Developer Course</h3>
          <p className="p1">2024 - 2025</p>

          <ul className="edDuties">
            <li>
              Learned full-stack development through personal and group
              projects.
            </li>
            <li>
              Strengthened communication and problem-solving abilities while
              collaborating in team settings.
            </li>
          </ul>
        </li>

        <li>
          <h3 className="edPlace">V. N. Karazin Kharkiv National University</h3>
          <h3 className="edName">Foreign Languages and Literatures, General</h3>
          <p className="p2">September 2020 - July 2024</p>
          <ul className="edDuties">
            <li>
              English translation and teaching English to children and adults
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Education;
