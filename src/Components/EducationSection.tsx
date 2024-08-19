const cardClasses = "p-4 bg-white text-gray-800 rounded-xl shadow-lg";
const containerClasses = "min-w-fit mx-auto p-6 bg-card rounded-lg shadow-lg";
const titleClasses = "text-3xl font-bold text-foreground mb-4";
const separatorClasses = "w-1 h-full bg-gray-800";
const dotClasses = "w-6 h-6 bg-white border-4 border-gray-800 rounded-full";

const Chronology = () => {
  return (
    <div className="p-4">
    <div className={containerClasses} style={{ backgroundColor: 'rgb(17 24 39)' }}>
      <h2 className={titleClasses}>Education</h2>
      <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        <div className="flex md:contents flex-row-reverse">
          <div className={`${cardClasses} col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto relative`}>
            <h3 className="text-lg font-semibold lg:text-xl">Lithan Educlaas</h3>
            <p className="mt-2 leading-6">Applied Degree in Software Engineering (BDSE)</p>
            <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">2023 - Present</span>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className={`h-full ${separatorClasses} rounded-t-full bg-gradient-to-b from-gray-800 to-gray-800`}></div>
            </div>
            <div className={`absolute ${dotClasses} -mt-3 top-1/2`}></div>
          </div>
        </div>

        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className={`${separatorClasses}`}></div>
            </div>
            <div className={`absolute ${dotClasses} -mt-3 top-1/2`}></div>
          </div>
          <div className={`${cardClasses} col-start-6 col-end-10 mr-auto relative`}>
            <h3 className="text-lg font-semibold lg:text-xl">First City Providential College</h3>
            <p className="mt-2 leading-6">Bachelor of Science in Computer Science</p>
            <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">2023 - Present</span>
          </div>
        </div>

        <div className="flex md:contents flex-row-reverse">
          <div className={`${cardClasses} col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto relative`}>
            <h3 className="text-lg font-semibold lg:text-xl">New Era University</h3>
            <p className="mt-2 leading-6">Senior High School (K-12): ICT-TechVoc</p>
            <p className="mt-2 leading-6">Pursued Degree in Computer Science</p>
            <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">2018 - 2021</span>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className={`h-full ${separatorClasses} rounded-t-full bg-gradient-to-b from-gray-800 to-gray-800`}></div>
            </div>
            <div className={`absolute ${dotClasses} -mt-3 top-1/2`}></div>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Chronology;
