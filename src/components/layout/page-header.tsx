import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description: string;
  backgroundImage?: string;
}

const defaultBackgroundImage = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW18ZW58MHx8fHx8MTcyNDU1NDUzN3ww&ixlib=rb-4.1.0&q=80&w=1920";

export default function PageHeader({ title, description, backgroundImage = defaultBackgroundImage }: PageHeaderProps) {
  return (
    <section
      className="relative flex h-[400px] w-full items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container px-4">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80 md:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
