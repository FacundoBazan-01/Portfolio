import { motion } from "framer-motion";
import { fadeIn } from "../../frameMotion/variants";

const SingleExp = ({ exp }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}

      className="md:h-auto md:w-[300px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-6" 
    >
      <p className="font-bold text-cyan text-lg"> {exp.rol} </p> 
      <p className="text-orange font-medium"> {exp.proyecto} </p>
      <p className="text-lightGrey text-sm mb-2"> {exp.dato} </p> 
      <ul className="list-disc pl-4 text-white text-sm leading-relaxed"> 
        {exp.resposabilidades.map((resp, index) => {
          return <li key={index} className="mb-1"> {resp} </li>; 
        })}
      </ul>
    </motion.div>
  );
};

export default SingleExp;