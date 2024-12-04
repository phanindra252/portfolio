const Skills = () => {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Node.js", level: 70 },
    { name: "PostgreSQL", level: 70 },
    { name: "Express.js", level: 65 },
    { name: "Python", level: 75 },
    { name: "DevOps", level: 65 },
  ];

  return (
    <section id="skills" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

        {/* Skill Entries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-lg font-medium text-gray-700">
                  {skill.name}
                </span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
