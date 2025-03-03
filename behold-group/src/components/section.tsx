interface SectionProps {
    title: string;
    content: string;
    bgColor?: string;
  }

  const Section = ({ title, content, bgColor = 'bg-white' }: SectionProps) => {
    return (
      <section className={`py-16 px-4 ${bgColor}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-lg text-gray-700">{content}</p>
        </div>
      </section>
    );
  };

  export default Section;
