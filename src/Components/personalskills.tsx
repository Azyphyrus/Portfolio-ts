// Define the types for the SkillCard props
interface Skill {
  icon: string;
  title: string;
  description: string;
}

// Define the SkillCard props type
interface SkillCardProps {
  skill: Skill;
}

// Define the skills data array
const SKILLS_DATA: Skill[] = [
  {
    icon: 'https://icons.veryicon.com/png/o/object/warning-icon/leadership.png',
    title: 'Leadership',
    description: 'I have experience leading cross-functional teams and coordinating project tasks to ensure successful delivery.',
  },
  {
    icon: 'https://www.svgrepo.com/show/228293/teamwork.svg',
    title: 'Teamwork',
    description: 'I excel at collaborating with colleagues, fostering a positive team dynamic, and contributing to a shared goal-oriented mindset.',
  },
  {
    icon: 'https://cdn.iconscout.com/icon/free/png-512/free-communication-icon-download-in-svg-png-gif-file-formats--consulting-conversation-deliberation-discussion-hr-management-pack-business-icons-1669591.png?f=webp&w=256',
    title: 'Communication',
    description: 'I have strong written and verbal communication skills, allowing me to effectively convey complex technical information to both technical and non-technical stakeholders.',
  },
  {
    icon: 'https://www.svgrepo.com/show/477079/color-blocks-documentation.svg',
    title: 'Documentation',
    description: 'I prioritize thorough documentation, ensuring that my work is well-organized, maintainable, and easily understandable by my team and future collaborators.',
  },
];

// Define CSS classes as constants
const CARD_CLASS = 'max-w-4xl mx-auto p-6 bg-card text-card-foreground text-white';
const GRID_CLASS = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white';
const CARD_ITEM_CLASS = 'p-4 border border-border rounded-lg text-center bg-gray-800 text-white';

// Define the SkillCard component
const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className={CARD_ITEM_CLASS}>
      <div className="mb-2">
        <img
          aria-hidden="true"
          alt={`${skill.title}-icon`}
          src={`${skill.icon}`}
          className="w-11 h-11" // Ensures icon is 24x24 pixels
        />
      </div>
      <h3 className="font-semibold text-lg">{skill.title}</h3>
      <p className="text-sm text-muted-foreground">{skill.description}</p>
    </div>
  );
};

// Define the AdditionalSkills component
const PersonalSkills: React.FC = () => {
  return (
    <div className={CARD_CLASS}>
      <h2 className="text-3xl font-bold mb-4">Personal Skills</h2>
      <p className="text-muted-foreground mb-8">
        In addition to my technical expertise, I possess a range of personal skills and strengths that enable me to excel in collaborative and leadership roles.
      </p>
      <div className={GRID_CLASS}>
        {SKILLS_DATA.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default PersonalSkills;
