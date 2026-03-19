export default function ResumePreview({ data }) {
  return (
    <div className="bg-white shadow-xl p-8 w-[850px] mx-auto my-6 rounded-lg font-sans">
      {/* Header */}
      <div className="border-b pb-4 mb-4">
        <h1 className="text-4xl font-bold">{data.name}</h1>
        <p className="text-gray-700 mt-1">
          {data.email} | {data.phone} | {data.linkedIn}
        </p>
      </div>

      {/* Professional Summary */}
      {data.summary && (
        <div className="mb-4">
          <h2 className="text-2xl font-semibold border-b pb-1">Professional Summary</h2>
          <p className="mt-2 text-gray-800 whitespace-pre-line">{data.summary}</p>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div className="mb-4">
          <h2 className="text-2xl font-semibold border-b pb-1">Skills</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.skills.map((skill, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-4">
          <h2 className="text-2xl font-semibold border-b pb-1">Education</h2>
          <ul className="mt-2 list-disc list-inside text-gray-800">
            {data.education.map((edu, idx) => (
              <li key={idx}>
                <span className="font-semibold">{edu.degree}</span> - {edu.institute} ({edu.year})
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-4">
          <h2 className="text-2xl font-semibold border-b pb-1">Work Experience</h2>
          <ul className="mt-2 list-disc list-inside text-gray-800">
            {data.experience.map((exp, idx) => (
              <li key={idx}>
                <span className="font-semibold">{exp.title}</span> at {exp.company} ({exp.duration})
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <div className="mb-4">
          <h2 className="text-2xl font-semibold border-b pb-1">Projects</h2>
          <ul className="mt-2 list-disc list-inside text-gray-800">
            {data.projects.map((proj, idx) => (
              <li key={idx}>
                <span className="font-semibold">{proj.title}</span>: {proj.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}