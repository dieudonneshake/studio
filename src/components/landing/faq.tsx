import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the typical timeline for a project?",
    answer: "Project timelines vary depending on the complexity and scope. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months or more. We provide a detailed timeline after our initial discovery phase.",
  },
  {
    question: "How much does a project cost?",
    answer: "Project costs are tailored to your specific needs. We offer a detailed proposal with a transparent cost breakdown after discussing your requirements. We focus on providing maximum value and a high return on investment.",
  },
  {
    question: "What kind of support do you offer after the project is launched?",
    answer: "We offer various post-launch support and maintenance packages to ensure your application remains secure, up-to-date, and performs optimally. We can discuss a plan that fits your long-term needs.",
  },
  {
    question: "How do you handle project management and communication?",
    answer: "We use agile methodologies and maintain constant communication through regular meetings, emails, and project management tools. You'll have a dedicated project manager and full visibility into our progress.",
  },
    {
    question: "Can you work with our existing team or systems?",
    answer: "Absolutely. We are experienced in collaborating with in-house teams and integrating our solutions with existing systems and third-party services to ensure a seamless workflow.",
  },
];


export default function FaqSection() {
  return (
    <section id="faq" className="container">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Frequently Asked Questions</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Have questions? We have answers. Here are some common things clients ask us.
        </p>
      </div>
      <div className="mt-12 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
