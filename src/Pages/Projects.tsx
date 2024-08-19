import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const cardClass = 'max-w-fit min-h-3.5 mx-auto bg-card rounded-lg shadow-lg overflow-hidden'
const tagClasses = 'bg-gray-800 text-white px-3 py-1 rounded-full';
const flexClass = 'flex items-center justify-center h-48 bg-muted'
const textClass = 'text-lg text-white font-semibold text-foreground'
const textMutedClass = 'text-muted-foreground text-white'

const Container = styled.div`
  background-color: #1f2937;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  margin-left: 0;
  margin-right: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;


const Projects = () => {
  return (
    <>
    <div className="h-56 rounded-xl overflow-hidden relative border border-black border-opacity-60 bg-black bg-opacity-60 flex items-center justify-center">
    <div className="bg-animation absolute inset-0 z-0">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="stars4"></div>
    </div>

    <div className="relative z-10 text-center">
      <h1 className="text-4xl font-bold text-white">Azer Sagucio</h1>
      <p className="mt-2 text-lg text-white">Software Developer | Full-Stack Engineer</p>

      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        <span className={tagClasses}>React</span>
        <span className={tagClasses}>Node.js</span>
        <span className={tagClasses}>Spring</span>
        <span className={tagClasses}>Laravel</span>
        <span className={tagClasses}>MySql</span>
      </div>
    </div>
  </div>
    <Container>
    
      <h2 className="mt-8 text-4xl text-white font-semibold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-left w-4/5 m-auto">

      <div className={cardClass} style={{ backgroundColor: 'rgb(17 24 39)' }}>
      <div className={flexClass}>
        <img aria-hidden="true" alt="placeholder" src="/images/judocalc.jpg"    style={{
            width: '100%', 
            height: '220px',
            objectFit: 'cover',
          }} />
      </div>
      <div className="p-4">
        <h2 className={textClass}>Judo Student Management System</h2>
        <p className={textMutedClass}>Developed software to automate and streamline student fee management, including tracking, calculating, and organizing fees and personal information. The system supports data entry, management, and retrieval, reducing paper use improving efficiency for institutions.</p>
        <a href="https://github.com/your-profile" className="text-gray-700 hover:text-primary" target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-6 w-6" />
        </a>
      </div>
    </div>



    
    <div className={cardClass} style={{ backgroundColor: 'rgb(17 24 39)' }}>
      <div className={flexClass}>
        <img aria-hidden="true" alt="placeholder" src="/images/dobu.jpg"    style={{
            width: '100%', 
            height: '220px',
            objectFit: 'cover',
          }} />
      </div>
      <div className="p-4">
        <h2 className={textClass}>Dobu Martial Arts</h2>
        <p className={textMutedClass}>This project is a comprehensive platform designed for managing and promoting martial arts classes. It features a user-friendly interface for students and instructors, and class scheduling.</p>
        <a href="https://github.com/your-profile" className="text-gray-700 hover:text-primary" target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-6 w-6" />
        </a>
      </div>
    </div>


    <div className={cardClass} style={{ backgroundColor: 'rgb(17 24 39)' }}>
      <div className={flexClass}>
        <img aria-hidden="true" alt="placeholder" src="/images/ddi.jpg"   style={{
            width: '100%', 
            height: '220px',
            objectFit: 'cover',
          }} />
      </div>
      <div className="p-4">
        <h2 className={textClass}>Manzaneque Limited IT Helpdesk</h2>
        <p className={textMutedClass}>Designed and implemented a robust database system for Manzaneque Limited’s IT Helpdesk to support their rapid growth. The database handles information on hardware, software, user profiles, and issue resolutions, optimizing operations across the company’s diverse real estate activities.</p>
        <a href="https://github.com/your-profile" className="text-gray-700 hover:text-primary" target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-6 w-6" />
        </a>
      </div>
    </div>
    
    <div className={cardClass} style={{ backgroundColor: 'rgb(17 24 39)' }}>
      <div className={flexClass}>
        <img aria-hidden="true" alt="placeholder" src="/images/boutiqa.jpg"   style={{
            width: '100%', 
            height: '220px',
            objectFit: 'cover',
          }} />
      </div>
      <div className="p-4">
        <h2 className={textClass}>Boutiqa Online Marketplace (Prototype)</h2>
        <p className={textMutedClass}>A Rich Internet Application built with Axure to improve Boutiqa's user experience. The project focused on streamlined features for Sellers and Consumers, guided by user personas and refined through usability testing.</p>
        <a href="https://github.com/your-profile" className="text-gray-700 hover:text-primary" target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-6 w-6" />
        </a>
      </div>
    </div>

    <div className={cardClass} style={{ backgroundColor: 'rgb(17 24 39)' }}>
      <div className={flexClass}>
        <img aria-hidden="true" alt="placeholder" src="/images/enomy.jpg"   style={{
            width: '100%', 
            height: '220px',
            objectFit: 'cover',
          }} />
      </div>
      <div className="p-4">
        <h2 className={textClass}>Enomy-Finances Modernization</h2>
        <p className={textMutedClass}>Upgraded Enomy-Finances' system from centralized servers to a web-based application, improving tools for currency conversion, savings, and investment planning while enhancing data management and security.</p>
        <a href="https://github.com/your-profile" className="text-gray-700 hover:text-primary" target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-6 w-6" />
        </a>
      </div>
    </div>

    <div className={cardClass} style={{ backgroundColor: 'rgb(17 24 39)' }}>
      <div className={flexClass}>
        <img aria-hidden="true" alt="placeholder" src="/images/abc.jpg"   style={{
            width: '100%', 
            height: '220px',
            objectFit: 'cover',
          }} />
      </div>
      <div className="p-4">
        <h2 className={textClass}>ABC Cars Used Car Sales Portal</h2>
        <p className={textMutedClass}>Created a web platform for ABC Cars to streamline used car sales with features for listing, searching, and booking test drives, using Spring Framework and MySQL for a robust, scalable solution.</p>
        <a href="https://github.com/your-profile" className="text-gray-700 hover:text-primary" target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-6 w-6" />
        </a>
      </div>
    </div>

    <div className={cardClass} style={{ backgroundColor: 'rgb(17 24 39)' }}>
      <div className={flexClass}>
        <img aria-hidden="true" alt="placeholder" src="/images/dea.jpg"   style={{
            width: '100%', 
            height: '220px',
            objectFit: 'cover',
          }} />
      </div>
      <div className="p-4">
        <h2 className={textClass}>Meals on Wheels</h2>
        <p className={textMutedClass}>Created a web application to assist elderly individuals with ordering and managing meal deliveries. The platform features an intuitive interface for browsing meals, placing orders, and tracking deliveries, while providing administrators with tools to manage meals, orders, and delivery staff effectively.</p>
        <a href="https://github.com/your-profile" className="text-gray-700 hover:text-primary" target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-6 w-6" />
        </a>
      </div>
    </div>
    
      </div>
  </Container>
    </>
  );
};

export default Projects;