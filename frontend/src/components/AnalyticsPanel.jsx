export default function AnalyticsPanel({ data }) {
  // Basic content stats
  const words = data.summary ? data.summary.split(" ").filter(Boolean).length : 0;
  const chars = data.summary ? data.summary.length : 0;
  const paragraphs = data.summary ? data.summary.split("\n").length : 0;

  // Skills, education, and experience stats
  const skillCount = data.skills.length;
  const educationCount = data.education.length;
  const experienceCount = data.experience.length;

  // Checks
  const warnings = [];
  if (words > 700) warnings.push("Recommended resume length is under 700 words");
  if (skillCount === 0) warnings.push("Add at least 3-5 key skills");
  if (educationCount === 0) warnings.push("Add your education history");
  if (experienceCount === 0) warnings.push("Add your work experience");

  return (
    <div className="analytics-panel p-4 max-w-md mx-auto bg-white rounded-lg shadow-md space-y-3">
      <h2 className="text-xl font-bold mb-2">Resume Analytics</h2>

      <div className="flex justify-between">
        <div>
          <p className="font-semibold">Summary Analysis:</p>
          <p>Words: {words}</p>
          <p>Characters: {chars}</p>
          <p>Paragraphs: {paragraphs}</p>
        </div>

        <div>
          <p className="font-semibold">Profile Overview:</p>
          <p>Skills: {skillCount}</p>
          <p>Education: {educationCount}</p>
          <p>Experience: {experienceCount}</p>
        </div>
      </div>

      {warnings.length > 0 && (
        <div className="mt-2 p-2 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 space-y-1">
          <p className="font-semibold">Recommendations:</p>
          <ul className="list-disc list-inside">
            {warnings.map((w, idx) => (
              <li key={idx}>{w}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}