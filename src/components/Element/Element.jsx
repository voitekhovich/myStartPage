import { Link } from "react-router-dom";
import noImageImg from "@images/noimage.jpg";
import "./Element.css";

const Element = ({ data }) => {
  return (
    <li className="element">
      <Link className="element__link" to={`/project/${data.projectName}`}>
        <img
          className="element__image"
          src={data.image ? data.image : noImageImg}
          alt={data.name}
        />
        <h2 className="element__title">{data.name}</h2>
      </Link>
    </li>
  );
};

export default Element;
