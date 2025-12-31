import { motion } from "framer-motion";
import { fadeIn } from "../../frameMotion/variants";
import SingleExp from "./SingleExp";
import { FaArrowRight } from "react-icons/fa";

const AllExp = () => {
  const experiencias = [
    {
      rol: "Front-End Developer",
      proyecto: "Clon Mercado Libre", // Le agregué "Clon" para que sea más claro
      dato: "2024",
      resposabilidades: [
        "Desarrollo de interfaz pixel-perfect utilizando HTML5 y CSS3.",
        "Lógica de negocio compleja (Carrito, Favoritos, Login) con JavaScript Vanilla.",
        "Implementación de Backend simulado (JSON-Server) y consumo de API REST.",
        "Panel de administrador con funcionalidad CRUD completa.",
      ],
    },
    {
      rol: "Front-End & Back-End Developer",
      proyecto: "Pixel-Salud",
      dato: "2025",
      resposabilidades: [
        "Desarrollo Full Stack de plataforma de gestión para farmacias.",
        "Arquitectura de Base de Datos Relacional (MySQL) para stock y ventas.",
        "Sistema de Autenticación y Autorización (JWT) con roles diferenciados.",
        "Backend robusto en Node.js integrado con interfaz de usuario moderna.",
      ],
    },
  ];

  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiencias.map((exp, index) => {
        return (
          <>
            <SingleExp key={index} exp={exp} />
            {index < 1 ? (
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExp;