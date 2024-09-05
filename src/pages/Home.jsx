import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Gutter from "../component/Home/Gutter";
import Card from "../component/Card";
import colorSchemes from "../utils/colorSchemes";
import projects from "../utils/projects";

const Home = () => {
  const [selectedScheme, setSelectedScheme] = useState(0);
  const [selectedProject, setSelectedProject] = useState(0);
  const handleSchemeSelect = (e) => setSelectedScheme(e.target.value);
  const slider = useRef(null);
  useEffect(() => {
    slider.current = setInterval(() => {
      let newSelected =
        selectedProject + 1 === projects.length ? 0 : selectedProject + 1;
      setSelectedProject(newSelected);
    }, 5000);

    return () => clearInterval(slider.current);
  });

  return (
    <div className="container">
      <Gutter
        scheme={selectedScheme}
        gutterBg={colorSchemes[selectedScheme].gutterBackground}
      />
      <main
        className="main"
        style={{ background: colorSchemes[selectedScheme].mainBackground }}
      >
        <div className="main-row header">
          <Card
            extraStyles={{
              ...colorSchemes[selectedScheme].cardStyles[0],
            }}
          >
            <h1>Neon Thorium</h1>
            <select
              style={{ ...colorSchemes[selectedScheme].themeSelectStyles }}
              onChange={handleSchemeSelect}
            >
              {colorSchemes.map((cs, idx) => (
                <option key={idx} value={idx}>
                  {cs.name}
                </option>
              ))}
            </select>
          </Card>
        </div>
        <div className="main-row row-top">
          <Card
            extraStyles={{
              width: "60%",
              ...colorSchemes[selectedScheme].cardStyles[1],
            }}
          >
            {projects.map((project, idx) => {
              return idx === selectedProject ? (
                <div
                  key={`project-${idx}`}
                  className="project-img-underlay"
                  style={{
                    background: colorSchemes[selectedScheme].underlayColor,
                  }}
                >
                  <img
                    className="project-img"
                    src={project.img}
                    alt={project.alt}
                    style={{ filter: colorSchemes[selectedScheme].imageFilter }}
                  />
                </div>
              ) : null;
            })}
          </Card>
          <Card
            extraStyles={{
              width: "35%",
              ...colorSchemes[selectedScheme].cardStyles[2],
            }}
          >
            {projects.map((project, idx) => {
              return idx === selectedProject ? (
                <div key={`details-${idx}`} className="project-details">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div>
                    {project.buttons.map((button, idx) =>
                      button.type === "button" ? (
                        <a
                          key={idx}
                          className="project-link"
                          style={{
                            ...colorSchemes[selectedScheme].projectButtons,
                          }}
                          href={button.link}
                        >
                          {button.text}
                        </a>
                      ) : (
                        <Link
                          key={idx}
                          to={button.link}
                          className="project-link"
                          style={{
                            ...colorSchemes[selectedScheme].projectButtons,
                          }}
                        >
                          {button.text}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              ) : null;
            })}
          </Card>
        </div>
        <div className="main-row row-bottom">
          <Card
            extraStyles={{
              flexGrow: 1,
              ...colorSchemes[selectedScheme].cardStyles[1],
            }}
          >
            1
          </Card>
          <Card
            extraStyles={{
              flexGrow: 1,
              ...colorSchemes[selectedScheme].cardStyles[2],
            }}
          >
            2
          </Card>
          <Card
            extraStyles={{
              flexGrow: 1,
              ...colorSchemes[selectedScheme].cardStyles[1],
            }}
          >
            1
          </Card>
        </div>
      </main>
      <Gutter
        scheme={selectedScheme}
        gutterBg={colorSchemes[selectedScheme].gutterBackground}
      />
    </div>
  );
};

export default Home;
