import "./Projects.css";
import Project from "../Project";
import { projects } from '../../constants/projects';

const Projects = () => {
  return (
    <div className="projects" >
      <ul>
        { projects.map(project =>
          <Project project={project}/>
        )}
      </ul>
      
    </div>
  );
};

export default Projects;
