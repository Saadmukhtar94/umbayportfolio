export default function Projects() {
    const projects = [
      {
        title: "3D Platformer",
        description: "A dynamic 3D platforming experience",
        image: "https://via.placeholder.com/400x250"
      },
      {
        title: "VR Adventure",
        description: "Immersive virtual reality game",
        image: "https://via.placeholder.com/400x250"
      }
    ];
  
    return (
      <section id="projects" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-700 rounded-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }