import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const aboutImage = PlaceHolderImages.find(img => img.id === 'about-section');

export default function AboutSection() {
  return (
    <section id="about" className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="mx-auto max-w-4xl text-center md:text-left">
            <p className="text-lg leading-8 text-muted-foreground">
            THE SEMICOLON is a premium software and digital solutions agency with a mission to build technology that empowers businesses and enriches lives. We believe in the power of great design and robust engineering to create digital experiences that are not only beautiful but also meaningful and effective.
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
            As a proud branch of <a href="https://linktr.ee/masteryhub.co.rw" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">Mastery Hub of Rwanda</a>, we are committed to fostering innovation and excellence within the local and global tech ecosystems. Our team is a collective of passionate creators, thinkers, and problem-solvers dedicated to our clients' success.
            </p>
        </div>
        {aboutImage && (
            <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description || "About us"}
                    width={1200}
                    height={800}
                    className="object-cover w-full h-full"
                    data-ai-hint={aboutImage.imageHint}
                />
            </div>
        )}
      </div>
    </section>
  );
}
