const Education = () => {
  const educationData = [
    {
      year: "2019 - 2023",
      degree: "Bachelor of Technology in Civil Engineering",
      institution: "Velagapudi Ramakrishna Siddhartha Engineering College",
    },
    {
      year: "2017 - 2019",
      degree: "Intermediate",
      institution: "Sri Sarada Junior College",
    },
    {
      year: "2016 - 2017",
      degree: "High School",
      institution: "Ravindra Bharathi High School",
    },
  ];

  return (
    <section id="education" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

        {/* Education Entries */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Year */}
              <p className="text-blue-500 font-bold text-lg mb-2">{edu.year}</p>

              {/* Degree and Institution */}
              <h3 className="text-2xl font-semibold mb-1">{edu.degree}</h3>
              <p className="text-gray-600 mb-4">{edu.institution}</p>

              {/* Description */}
              <p className="text-gray-500">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
