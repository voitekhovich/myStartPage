import "./Elements.css";
import Element from "@components/Element";
import { projectsList } from '@constants/projectsList';

const Elements = () => {
  return (
    <div className="projects" >
      <ul>
        { projectsList.map(project =>
          <Element data={project}/>
        )}
      </ul>
      
    </div>
  );
};

export default Elements;
