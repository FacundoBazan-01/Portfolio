import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import SingleSkills from "./SingleSkills";
import { motion } from "framer-motion";
import { fadeIn } from "../../frameMotion/variants";

const AllSkills = () => {
  const skills = [
    {
      skill: "HTML",
      icon: FaHtml5,
    },
    {
      skill: "CSS",
      icon: FaCss3Alt,
    },
    {
      skill: "JavaScript",
      icon: IoLogoJavascript,
    },
    {
      skill: "MySQL",
      icon: SiMysql,
    },
    {
      skill: "ReactJS",
      icon: FaReact,
    },
    {
      skill: "MongoDB",
      icon: SiMongodb,
    },
    {
      skill: "NextJS",
      icon: SiNextdotjs,
    },
    {
      skill: "NodeJS",
      icon: FaNode,
    },
    {
      skill: "TailwindCSS",
      icon: RiTailwindCssFill,
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <SingleSkills
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
