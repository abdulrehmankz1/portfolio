import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

// Custom Upwork Icon
const UpworkIcon = ({ size = 20, className = "" }) => (
  <svg
    viewBox="91.34 181.708 329.318 209.64"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
  >
    <path d="M345.516 181.708c-42.168 0-65.774 27.481-72.532 55.773-7.658-14.416-13.335-33.698-17.75-51.628H196.94v72.531c0 26.31-11.984 45.772-35.41 45.772-23.427 0-36.852-19.462-36.852-45.772l.27-72.531H91.34v72.531c0 21.174 6.848 40.366 19.372 54.061 12.884 14.146 30.454 21.534 50.817 21.534 40.545 0 68.837-31.085 68.837-75.595V209.64c4.235 16.038 14.326 46.853 33.608 73.884l-18.02 102.625h34.148l11.893-72.712c3.875 3.244 8.02 6.127 12.434 8.74 11.443 7.208 24.508 11.263 38.023 11.713 0 0 2.073.09 3.154.09 41.807 0 75.054-32.346 75.054-76.045 0-43.7-33.337-76.226-75.144-76.226m0 122.358c-25.86 0-42.979-20.003-47.754-27.752 6.127-49.015 24.057-64.512 47.754-64.512 23.426 0 41.626 18.741 41.626 46.132 0 27.39-18.2 46.132-41.626 46.132" />
  </svg>
);

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: UpworkIcon, href: personalInfo.upwork, label: "Upwork" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        {/* Social Links - Mobile */}
        <div className="flex justify-center gap-6 mb-6 md:hidden">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href={personalInfo.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <p>Designed & Built by {personalInfo.name}</p>
          </a>
          <p className="font-mono text-xs text-muted-foreground/60 mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Social Links - Desktop Fixed */}
      <div className="hidden md:flex fixed bottom-0 left-10 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground/30">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover"
            aria-label={label}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>

      {/* Email - Desktop Fixed */}
      <div className="hidden md:flex fixed bottom-0 right-10 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground/30">
        <a
          href={`mailto:${personalInfo.email}`}
          className="font-mono text-xs link-hover [writing-mode:vertical-rl]"
        >
          {personalInfo.email}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
