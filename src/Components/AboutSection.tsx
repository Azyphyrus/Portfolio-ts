import { Button } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
//const cardClasses = "max-w-fit mx-auto p-6 bg-card rounded-lg shadow-lg flex";
const cardClasses = "max-w-fit mx-auto p-6 bg-card rounded-b-none rounded-t-lg shadow-lg flex";
const textClasses = "text-foreground text-muted-foreground";

const AboutMe = () => {
    return (
        <div className="p-4 pb-0">
        <div className={`${cardClasses} text-left`} style={{ backgroundColor: 'rgb(17 24 39)' }}>
            <div className="w-1/3 hidden sm:block">
                <img src="https://i.pinimg.com/564x/12/c1/85/12c18566c369d7059bf307baed6513f7.jpg" alt="Profile Image" className="rounded-lg" />
            </div>
            <div className="w-fit px-6 text-white">
                <h2 className="text-3xl font-bold text-foreground">About Me</h2>
                <h3 className="text-xl font-semibold text-muted-foreground">My Introduction</h3>
                <hr className="my-4 border-muted" />
                <h4 className="text-2xl font-semibold text-foreground">Designing with Purpose: A Full-Stack Developer’s Approach</h4>
                <p className={textClasses + " mt-2"}>
                As a Full-Stack Developer, I am dedicated to creating web applications that are both intuitive and efficient. My focus is on developing simple, user-friendly interfaces that provide a seamless experience for all users. I ensure that technology is approachable and easy to navigate, while also prioritizing a robust and optimized back-end for smooth performance.
                </p>
                <p className={textClasses + " mt-2"}>
                By integrating thoughtful design with strong technical foundations, I aim to build solutions that are not only accessible but also high-performing. My goal is to craft digital experiences that balance ease of use with technical excellence, delivering applications that are reliable, engaging, and effective for a wide range of users.
                </p>
                <Button color="gray" className="mt-2">
                Download CV
                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                </Button>
            </div>
        </div>
        </div>
    );
};

export default AboutMe;