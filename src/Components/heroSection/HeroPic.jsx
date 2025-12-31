import { PiHexagonThin } from "react-icons/pi";
import { motion } from "framer-motion"; // Asegurate que motion esté importado
import { fadeIn } from "../../frameMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center"
    >
      {/* CAMBIO AQUÍ: De <img> a <motion.img> */}
      <motion.img
        src="../images/Facu.png"
        alt="Facundo Bazan"
        className="max-h-[450px] w-auto object-cover object-center"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          // Agregamos 'cursor-pointer' para que la gente sepa que es interactivo
          cursor: "pointer"
        }}

        // ✨ LA MAGIA DEL HOVER ✨
        whileHover={{
          scale: 1.05, // Un zoom sutil del 5%
          filter: "brightness(1.1)", // Un poquito más de brillo
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }} // Transición suave y elástica
      />

      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
