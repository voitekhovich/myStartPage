import noImageImg from "@images/noimage.jpg";
import "./Element.css";

const Element = ( {data} ) => {
  return (
    <li className="element">
      {/* <video className="element__video" src={data.videoUrl} controls></video> */}
      <a className="element__link"
        href={data.link ? data.link : '#'}
        target="_blank"
        rel="noreferrer">
          <img className="element__image" 
            src={data.image ? data.image : noImageImg} 
            alt={data.name}/>
      </a>
      <h2 className="element__title">{data.name}</h2>
      <a className="element__github"
        href={data.gitHub}
        target="_blank"
        rel="noreferrer">GitHub</a>
      {/* <p className="element__description">{data.description}</p> */}
    </li>
  );
};

export default Element;
