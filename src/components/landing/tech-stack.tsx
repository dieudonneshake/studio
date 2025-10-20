import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiNodedotjs,
  SiTypescript,
  SiGooglecloud,
} from 'react-icons/si';
import { cn } from '@/lib/utils';

const technologies = [
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Google Cloud', icon: SiGooglecloud },
];

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="container">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Our Technology Stack
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We use modern, reliable technologies to build scalable and high-performance applications.
        </p>
      </div>
      <div className="mt-12">
        <div
          className="relative flex h-full w-full flex-row items-center justify-center overflow-hidden rounded-lg border bg-background/20 py-20 md:shadow-xl"
        >
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-10 md:gap-x-20">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <tech.icon className="h-12 w-12 text-muted-foreground transition-colors duration-300 hover:text-primary" />
                <span className="text-sm font-medium text-muted-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
