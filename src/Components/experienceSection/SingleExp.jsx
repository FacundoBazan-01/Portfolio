import { motion } from "framer-motion";
import { fadeIn } from "../../frameMotion/variants";

const SingleExp = ({ exp }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      // CAMBIOS AQUÍ:
      // 1. md:h-auto (en vez de [350px]) para que crezca según el texto.
      // 2. md:w-[300px] (en vez de [240px]) para darle más aire a los costados.
      className="md:h-auto md:w-[300px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-6" // Cambié p-4 a p-6 para un poquito más de relleno interno
    >
      <p className="font-bold text-cyan text-lg"> {exp.rol} </p> {/* Le di un toque más de tamaño al rol */}
      <p className="text-orange font-medium"> {exp.proyecto} </p>
      <p className="text-lightGrey text-sm mb-2"> {exp.dato} </p> {/* Un margin-bottom para separar la fecha de la lista */}
      <ul className="list-disc pl-4 text-white text-sm leading-relaxed"> {/* leading-relaxed separa un poco los renglones para leer mejor */}
        {exp.resposabilidades.map((resp, index) => {
          return <li key={index} className="mb-1"> {resp} </li>; // Un pequeño espacio entre bullets
        })}
      </ul>
    </motion.div>
  );
};

export default SingleExp;