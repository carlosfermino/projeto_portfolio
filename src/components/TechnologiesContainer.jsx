import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMongodb,
  DiMysql,
  DiReact,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  //{ id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "mongodb", name: "MongoDb", icon: <DiMongodb /> },
  { id: "react", name: "React", icon: <DiReact /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
        <p>Todas as tecnologias abaixo foram lecionadas e apreendidas do nível básico ao nível avançado</p>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
