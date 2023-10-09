import "./Lead.css";

const Lead = () => {
  return (
    <div className="lead">
      <div className="lead-content">
        <h1 className="lead__title">
          Привет, я <span>web</span> разработчик
        </h1>
        <hr className="lead__line" />
        <p className="lead__description">Здесь живут мои проекты</p>
      </div>
    </div>
  );
};

export default Lead;
