import "./Project.css";

const Project = ( {project} ) => {
  return (
    <li>
      <h2>{project.name}</h2>
      <video src={project.videoUrl} controls></video>
      <a href={project.gitHubUrl}>GitHub</a>
      <p>{project.description}</p>
    </li>
  );
};

export default Project;
