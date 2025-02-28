export default function Skills() {
    const skills = ["Unity", "C#", "3D Modeling"];
  
    return (
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 px-6 py-3 rounded-full">
                <span className="text-blue-400 mr-2">▣</span> {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }