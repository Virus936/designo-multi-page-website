const ProjectItem = ({img, title, desc}) => {
  return <div>
    <img src={img} alt={img} />
    <h1>{title}</h1>
    <p>{desc}</p>
    </div>
}

export default ProjectItem
