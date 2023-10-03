import "./Elements.css";
import Element from "@components/Element";
import { projectsList } from '@constants/projectsList';

const Elements = () => {
  return (
    <ul className="elements">
      { projectsList.map(project =>
        <Element data={project}/>
      )}
    </ul>
  );
};

export default Elements;
