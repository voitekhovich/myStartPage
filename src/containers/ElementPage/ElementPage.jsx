import { Link, useParams, useNavigate } from "react-router-dom";
import { projectsList } from "@constants/projectsList";
import noImageImg from "@images/noimage.jpg";

import "./ElementPage.css";

const ElementPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const data = projectsList.find((obj) => obj.projectName === params.id);

  return (
    <div className="element-page">
      <div className="element-page__content">
        {/* <button className="button__back" onClick={() => navigate(-1)}>
          &#8249; Назад
        </button> */}

        <h2 className="element-page__title">{data.name}</h2>

        {/* <p>{data.projectName}</p> */}
        <ul className="element-page__links">
          <li>
            <Link className="element-page__link" to={data.link}>
              Site Link
            </Link>
          </li>
          <li>
            <Link className="element-page__link" to={data.gitHub}>
              Git<span>Hub</span>
            </Link>
          </li>
        </ul>
        <div className="element-page__images">
          {data.video ? (
            <video className="element-page__video" controls>
              <source src={data.video} type="video/mp4"></source>
            </video>
          ) : (
            <img
              className="element-page__image"
              src={data.image ? data.image : noImageImg}
              alt={data.name}
            />
          )}
        </div>
        <p className="element-page__description">{data.description}</p>
      </div>
    </div>
  );
};

export default ElementPage;

// name: "Star Wars",
// projectName: "react-star-wars",
// link: "https://voitekhovich.github.io/react-star-wars/",
// description: "",
// gitHub: "https://github.com/voitekhovich/react-star-wars",
// video: "",
// image: starWarsImg,
// active: true
