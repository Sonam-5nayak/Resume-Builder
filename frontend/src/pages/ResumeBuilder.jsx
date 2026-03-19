import { useState } from "react";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import AnalyticsPanel from "../components/AnalyticsPanel";

export default function ResumeBuilder() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedIn: "",
    summary: "",
    skills: [],
    education: [],
    experience: [],
    projects: []
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 min-h-screen">
      {/* Form */}
      <div>
        <ResumeForm data={data} setData={setData} />
      </div>

      {/* Preview + Analytics */}
      <div className="space-y-6">
        <ResumePreview data={data} />
        <AnalyticsPanel data={data} />
      </div>
    </div>
  );
}