import styled from 'styled-components';
import AdditionalSkills from '../Components/additionalskills';
import PersonalSkills from '../Components/personalskills';

const cardClasses = 'bg-[rgb(17 24 39)] p-4 rounded-lg shadow-lg w-full md:w-fit';
const tagClasses = 'bg-gray-800 text-white px-3 py-1 rounded-full';
const cardClass = "max-w-fit mx-auto p-6 bg-card rounded-lg shadow-lg flex";
const cardClass2 = "max-w-fit mx-auto p-1 bg-card rounded-lg shadow-lg flex";

const Container = styled.div`
  background-color: #1f2937;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  margin-left: 0;
  margin-right: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const sharedClasses = {
  zincBackground: 'bg-zinc-800',
  zincText: 'text-zinc-300',
  zincAccent: 'bg-zinc-700',
  zincOverlay: 'bg-zinc-900/40',
};

const Skills = () => {
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
    
      <h2 className="mt-8 text-4xl font-semibold text-white">Programming Languages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-left w-4/5 m-auto">
        <div className={cardClasses}style={{ backgroundColor: 'rgb(17 24 39)' }}>
        <img
  src="https://www.vectorlogo.zone/logos/java/java-icon.svg"
  alt="Flowbite logo"
  className="w-24 h-24 mx-auto rounded-full" // Adjust size and rounded class
/>
          <h3 className="font-bold text-xl text-white">Java</h3>
          <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold ${sharedClasses.zincText} rounded-md ${sharedClasses.zincAccent} whitespace-nowrap`}>
          Intermediate
          </span>
          <p className="mt-2 text-white">
          Experienced in Java, I develop robust and scalable applications, utilizing object-oriented principles and frameworks to solve complex programming challenges.
          </p>
        </div>

        <div className={cardClasses} style={{ backgroundColor: 'rgb(17 24 39)' }}>
        <img
  src="https://www.vectorlogo.zone/logos/php/php-icon.svg"
  alt="Flowbite logo"
  className="w-24 h-24 mx-auto rounded-full" // Adjust size and rounded class
/>
          <h3 className="font-bold text-xl text-white">Php</h3>
          <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold ${sharedClasses.zincText} rounded-md ${sharedClasses.zincAccent} whitespace-nowrap`}>
          Intermediate
          </span>
          <p className="mt-2 text-white">
          Proficient in PHP, I build dynamic and interactive web applications, handling server-side scripting and integrating databases effectively.
          </p>
        </div>

        <div className={cardClasses} style={{ backgroundColor: 'rgb(17 24 39)' }}>
        <img
  src="https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg"
  alt="Flowbite logo"
  className="w-24 h-24 mx-auto rounded-full" // Adjust size and rounded class
/>
          <h3 className="font-bold text-xl text-white">JavaScript</h3>
          <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold ${sharedClasses.zincText} rounded-md ${sharedClasses.zincAccent} whitespace-nowrap`}>
          Intermediate
          </span>
          <p className="mt-2 text-white" style={{ backgroundColor: 'rgb(17 24 39)' }}>
          Skilled in JavaScript, I create responsive and interactive web features, enhancing user experiences with client-side scripting and modern frameworks.
          </p>
        </div>

        <div className={cardClasses} style={{ backgroundColor: 'rgb(17 24 39)' }}>
        <img
  src="https://www.pngitem.com/pimgs/m/198-1985043_html-css-logo-transparent-hd-png-download.png"
  alt="Flowbite logo"
  className="w-24 h-24 mx-auto rounded-full" // Adjust size and rounded class
/>
          <h3 className="font-bold text-xl text-white">HTML/CSS</h3>
          <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold ${sharedClasses.zincText} rounded-md ${sharedClasses.zincAccent} whitespace-nowrap`}>
          Intermediate
          </span>
          <p className="mt-2 text-white">
          Competent in HTML and CSS, I design clean and accessible web layouts, ensuring that websites are visually appealing and responsive across various devices.
          </p>
        </div>
        
      </div>

    <br></br>

    <h2 className="mt-8 text-3xl font-semibold text-white">Technologies</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-left w-4/5 m-auto">
      <div className={cardClasses}style={{ backgroundColor: 'rgb(17 24 39)' }}>
      <img
  src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
  alt="Flowbite logo"
  className="w-24 h-24 mx-auto rounded-full" // Adjust size and rounded class
/>
        <h3 className="font-bold text-xl text-white">Spring</h3>
        <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold ${sharedClasses.zincText} rounded-md ${sharedClasses.zincAccent} whitespace-nowrap`}>
        Intermediate
        </span>
        <p className="mt-2 text-white">
        Experienced in Java, I develop robust and scalable applications, utilizing object-oriented principles and frameworks to solve complex programming challenges.
        </p>
      </div>

      <div className={cardClasses} style={{ backgroundColor: 'rgb(17 24 39)' }}>
      <img
  src="https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg"
  alt="Flowbite logo"
  className="w-24 h-24 mx-auto rounded-full" // Adjust size and rounded class
/>
        <h3 className="font-bold text-xl text-white">Laravel</h3>
        <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold ${sharedClasses.zincText} rounded-md ${sharedClasses.zincAccent} whitespace-nowrap`}>
        Intermediate
        </span>
        <p className="mt-2 text-white">
        Proficient in PHP, I build dynamic and interactive web applications, handling server-side scripting and integrating databases effectively.
        </p>
      </div>

      <div className={cardClasses} style={{ backgroundColor: 'rgb(17 24 39)' }}>
      <img
  src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
  alt="Flowbite logo"
  className="w-24 h-24 mx-auto rounded-full" // Adjust size and rounded class
/>
        <h3 className="font-bold text-xl text-white">React</h3>
        <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold ${sharedClasses.zincText} rounded-md ${sharedClasses.zincAccent} whitespace-nowrap`}>
        Intermediate
        </span>
        <p className="mt-2 text-white" style={{ backgroundColor: 'rgb(17 24 39)' }}>
        Skilled in JavaScript, I create responsive and interactive web features, enhancing user experiences with client-side scripting and modern frameworks.
        </p>
      </div>

      <div className={cardClasses} style={{ backgroundColor: 'rgb(17 24 39)' }}>
      <img
  src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
  alt="Flowbite logo"
  className="w-24 h-24 mx-auto rounded-full" // Adjust size and rounded class
/>
        <h3 className="font-bold text-xl text-white">Node.js</h3>
        <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold ${sharedClasses.zincText} rounded-md ${sharedClasses.zincAccent} whitespace-nowrap`}>
        Intermediate
        </span>
        <p className="mt-2 text-white">
        Competent in HTML and CSS, I design clean and accessible web layouts, ensuring that websites are visually appealing and responsive across various devices.
        </p>
      </div>
    </div>
    <div className="py-10 bg-background text-foreground p-8">
    <div className={`${cardClass} flex-1 text-left`} style={{ backgroundColor: 'rgb(17 24 39)' }}>
    <AdditionalSkills />
    </div>
    </div>

    <div className="py-10 bg-background text-foreground p-8 pt-0">
    <div className={`${cardClass2} flex-1 text-left`} style={{ backgroundColor: 'rgb(17 24 39)' }}>
    <PersonalSkills />
    </div>
    </div>
  </Container>
    </>
  );
};

export default Skills;