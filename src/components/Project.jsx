const Projects = () => {
  // Project configuration array
  const config = [
    {
      id: 1,
      title: "React CRUD App",
      link: "https://react-my-crudapp.netlify.app",
      image: "https://via.placeholder.com/300?text=React+CRUD+App",
    },
    {
      id: 2,
      title: "Weather App",
      link: "https://weather-app-link.com",
      image: "https://via.placeholder.com/300?text=Weather+App",
    },
  ];

  return (
    <section className="Projects" id="Project">
      <div className="container p-5">
        <h2 className="text-center ">My Projects</h2>
        {config.map((project) => (
          <div className="row mt-3 d-flex" key={project.id}>
            {/* Left Column: Project Image */}
            <div className="col-12  ">
              <img
                src={project.image}
                alt={project.title}
                className="img-fluid rounded shadow"
                style={{ maxWidth: "80%" }}
              />
            </div>

        
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
