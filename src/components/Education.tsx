import { education, certifications } from "@/data/portfolio";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section className="section-container bg-card/30">
      <h2 className="section-title">
        <span className="numbered-heading">05.</span>
        Education & Certifications
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* Education */}
        <div className="p-6 rounded-lg bg-card border border-border card-hover">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Education</h3>
          </div>
          
          <div className="space-y-6">
            {education.entries.map((edu, index) => (
              <div key={index} className="border-b border-border last:border-0 pb-4 last:pb-0">
                <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                <p className="text-primary font-mono text-sm">{edu.institution}</p>
                <p className="text-muted-foreground text-sm">
                  {edu.location} • {edu.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Certifications */}
        <div className="p-6 rounded-lg bg-card border border-border card-hover">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
          </div>
          
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="pb-4 border-b border-border last:border-0 last:pb-0"
              >
                <h4 className="font-semibold text-foreground">{cert.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
