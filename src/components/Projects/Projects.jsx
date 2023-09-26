import "./Projects.css";
import Project from "../Project";
import { projects } from '../../constants/projects';

const Projects = () => {
  return (
    <div className="projects" >
      <h2>Вот, что я могу:</h2>
      <ul>
        { projects.map(project =>
          <Project project={project}/>
        )}
      </ul>
      
    </div>
  );
};

export default Projects;
