import "./Elements.css";
import Element from "@components/Element";
import { projectsList } from "@constants/projectsList";

const Elements = () => {
  return (
    <div className="elements">
      <ul className="elements-content">
        {projectsList.map((project) => (
          <Element data={project} key={project.projectName} />
        ))}
      </ul>
    </div>
  );
};

export default Elements;
