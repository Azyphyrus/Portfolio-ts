import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const cardClass = 'bg-[rgb(17 24 39)] p-4 rounded-lg shadow-md';
const textClass = 'text-muted-foreground'
const linkClass = 'text-accent hover:underline'
const buttonClasses = 'mt-2 inline-block bg-black text-white px-4 py-2 rounded';

const Goal = () => {
  return (
    <div className={`${cardClass} flex-1 text-left`} style={{ backgroundColor: 'rgb(17 24 39)' }}>
      <h3 className="text-primary text-white">Hi, I’m Azer</h3>
      <ul className={`list-disc list-inside text-white ${textClass}`}>
        <p>I am a software engineering student who aims to become skilled in solving tough problems and working on exciting projects.</p>
        <br />
        <p>I’m passionate about technology and innovation. I want to use my skills to build solutions that make a real difference, like improving user experiences, making systems run better, or creating new software that changes industries.</p>
      </ul>
      <a href="/skills" className={buttonClasses}>
            View Skills
          </a>
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className={`${cardClass} w-full md:w-1/2 md:w-1/3 flex items-center justify-center`} style={{ backgroundColor: 'rgb(17 24 39)' }}>
      <div className="text-center text-white">
        <p className={textClass}>
          Passionate developer with a love for creating innovative solutions. Experienced in full-stack development and always eager to learn more.
        </p>
        <a href="/contact" className={linkClass}>
          Contact Me...
        </a>
        <div className="flex mt-4 space-x-4">
        <a href="mailto:your-email@example.com" className="text-gray-700 hover:text-primary">
          <FaEnvelope className="h-6 w-6" />
        </a>
        <a href="https://instagram.com/your-profile" className="text-gray-700 hover:text-primary" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="h-6 w-6" />
        </a>
        <a href="https://linkedin.com/in/your-profile" className="text-gray-700 hover:text-primary" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="h-6 w-6" />
        </a>
        <a href="https://github.com/your-profile" className="text-gray-700 hover:text-primary" target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-6 w-6" />
        </a>
      </div>
      </div>
    </div>
  )
}


const TagNGoal = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 space-y-4 md:space-y-0 md:space-x-4">
      <AboutMe />
      <Goal />
    </div>
  )
}

export default TagNGoal