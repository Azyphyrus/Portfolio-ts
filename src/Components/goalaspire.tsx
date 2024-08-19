import {Timeline } from "flowbite-react";


//const cardClasses = "max-w-fit mx-auto p-6 bg-card rounded-lg shadow-lg flex";
const cardClasses = "max-w-fit mx-auto p-6 bg-card rounded-t-none rounded-b-lg shadow-lg flex";

const goalsaspire = () => {
  return (
    <div className="p-4 pt-0 ">
    <div className={`${cardClasses} text-left `} style={{ backgroundColor: 'rgb(17 24 39)' }}>
    <Timeline>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title className='text-white'>Engineering</Timeline.Title>
          <Timeline.Body className='text-white'>
          First impressions matter, and effective website design plays a crucial role in making a positive impact. A great website blends functionality with user-friendly navigation, focusing on creating an intuitive and seamless experience. As a full-stack developer, I am committed to tackling technical challenges and ensuring that the websites I build are both functional and easy to use. I adhere to technical standards and modern practices, striving to deliver reliable and well-optimized solutions.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title className='text-white'>Product</Timeline.Title>
          <Timeline.Body className='text-white'>
          Though I may not follow the traditional path of a product manager, my diverse background in research, product design, and coordination equips me to drive a product from its early stages to success. As a strong analytical thinker, I maintain the product's vision throughout its development, bridging the gap between technical and product aspects. My approach ensures that every step from inception to launch is managed effectively, fostering growth and achieving success.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title className='text-white'>Design</Timeline.Title>
          <Timeline.Body className='text-white'>
          While I may not be the quintessential designer known for intricate aesthetics, my focus is on creating user interfaces that are simple, intuitive, and effective. I prioritize ease of use and functionality, ensuring that the UI I develop meets the needs of a broad audience. My aim is to deliver a design that enhances usability and accessibility, rather than just focusing on visual style.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title className='text-white'>Leadership</Timeline.Title>
          <Timeline.Body className='text-white'>
          Although my experience in leadership may be limited, I am committed to developing my skills and aspiring to be an effective leader. I strive to inspire and guide teams with dedication and a clear vision, fostering a collaborative environment that encourages growth and success. My goal is to continually learn and improve, working towards becoming a leader who motivates and drives positive outcomes.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
        </div>
    </div>
  );
}

export default goalsaspire;