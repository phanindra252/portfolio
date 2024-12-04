const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects and skills.",
    link: "http://localhost:5173/portfolio/",
  },
  {
    title: "Consultancy Website",
    description:
      "A responsive IT consulting website built with Tailwind CSS and React. ",
    link: "https://phanindra252.github.io/rbslpgml-react/",
  },
  {
    title: "Job listings site",
    description:
      "Developed a job listing platform with CRUD functionality using the PERN stack, allowing users to explore, apply, and manage job listings. ",
    link: "https://jobportal-1-vkqv.onrender.com/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
