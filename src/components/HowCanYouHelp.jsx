import React, { useEffect } from "react";
import { HelpOption } from "./HelpOption";
import CoolBg from "../assets/cool-background.png";
import Aos from "aos";
export default function HowYouCanHelp() {
  const helpOptions = [
    {
      icon: "👚", // You can use emojis or replace with icons
      title: "Donate Clothes",
      description: "Help those in need by donating winter clothing.",
      link: "/donate", // Replace with your actual donation page link
    },
    {
      icon: "🤝",
      title: "Become a Volunteer",
      description:
        "Join our network of volunteers to help distribute donations.",
      link: "/volunteer", // Replace with your actual volunteer page link
    },
    {
      icon: "📢",
      title: "Spread the Word",
      description: "Help us raise awareness by sharing our mission.",
      link: "/spread-awareness", // Replace with your awareness campaign link
    },
  ];
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      className={` bg-[url('https://i.ibb.co.com/G7dvRjb/cool-background.png')] bg-no-repeat bg-cover py-12 px-4`}
    >
      <h2 className="text-center text-3xl font-bold mb-8">How You Can Help</h2>
      <div className="grid grid-cols-1 w-4/5 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {helpOptions.map((option, index) => (
          <HelpOption key={index} {...option} />
        ))}
      </div>
    </div>
  );
}
