import { personalInfo, skills } from "@/data/portfolio";

const About = () => {
  const allSkills = [
    ...skills.core,
    ...skills.frameworks,
    ...skills.styling,
    ...skills.tools,
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">
        <span className="numbered-heading">01.</span>
        About Me
      </h2>

      <div className="grid md:grid-cols-3 gap-12 mt-8">
        <div className="md:col-span-2 space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            {personalInfo.bio}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {personalInfo.summary}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Here are a few technologies I've been working with recently:
          </p>

          <ul className="grid grid-cols-2 gap-2 mt-4">
            {allSkills.slice(0, 8).map((skill) => (
              <li key={skill} className="flex items-center gap-2 text-sm">
                <span className="text-primary">▹</span>
                <span className="font-mono text-muted-foreground">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative group w-64">
          {/* Image */}
          <div className="relative z-10 overflow-hidden rounded-xl border border-primary/40">
            <img
              src="/assets/images/my-image.png"
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
