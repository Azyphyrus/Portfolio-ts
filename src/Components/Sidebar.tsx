import { Flowbite } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { FaUser, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import {Sidebar} from "flowbite-react";

//import { BiBuoy } from "react-icons/bi";
//import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

const customTheme: CustomFlowbiteTheme = {
  sidebar: {
    root: {
      base: 'h-screen min-w-72 sticky top-0 hidden md:block' ,  // Set width to 240px and full height
      inner: 'h-full overflow-y-auto overflow-x-hidden bg-[rgb(28,36,52)] p-8', // Set font color and background color
    },
    
},
};


export function Component() {

  

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div className="dark">
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>

        <img
  src="https://i.pinimg.com/736x/26/d5/3b/26d53b63884223ae6af08014dea8842e.jpg"
  alt="Flowbite logo"
  className="w-24 h-24 mx-auto rounded-full" // Adjust size and rounded class
/>


        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
        <Sidebar.Item href="/" icon={FaUser} >
            Profile
          </Sidebar.Item>
          <Sidebar.Item href="/skills" icon={FaTools}>
            Skills
          </Sidebar.Item>
          <Sidebar.Item href="/projects" icon={FaProjectDiagram}>
            Projects
          </Sidebar.Item>
          <Sidebar.Item href="/contact" icon={FaEnvelope}>
            Contact
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
    </Flowbite>
  );
}
