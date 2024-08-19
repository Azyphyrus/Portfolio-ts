
// Define the types for the SkillCard props
interface SkillCardProps {
  icon: string;
  title: string;
  items: string[];
}

// Define the CSS classes as constants
const cardClasses = 'bg-gray-800 p-4 rounded-lg shadow text-white';
const iconClasses = 'mr-2 w-12 h-12';
const listClasses = 'list-disc pl-5';

const AdditionalSkills: React.FC = () => {
  return (
    <section className="py-10 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-white">Additional Skills</h2>
        <p className="text-muted-foreground mb-8 text-white">
          I'm also proficient in a variety of other technologies and tools that I use to enhance my development workflow and deliver high-quality solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard icon="https://www.svgrepo.com/show/140748/database.svg" title="Databases" items={['MySQL', 'SQLite']} />
          <SkillCard icon="https://www.svgrepo.com/show/375914/tools.svg" title="Tools" items={['Git', 'GitHub', 'Postman', 'Axure', 'Figma']} />
          <SkillCard icon="https://www.svgrepo.com/show/439004/testing-methodologies.svg" title="Testing" items={['PHPUnit', 'JUnit']} />
        </div>
      </div>
    </section>
  );
};

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, items }) => {
  return (
    <div className={cardClasses}>
      <h3 className="font-semibold mb-2 flex items-center">
        <img
          aria-hidden="true"
          alt={`${title.toLowerCase()}-icon`}
          src={`${icon}`}
          className={iconClasses}
        />
        {title}
      </h3>
      <ul className={listClasses}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdditionalSkills;
