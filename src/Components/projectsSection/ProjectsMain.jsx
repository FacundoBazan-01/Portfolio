import { motion } from "framer-motion";
import { fadeIn } from "../../frameMotion/variants";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";

const ProjectsMain = () => {
  const proyectos = [
    {
      nombre: "Clon Mercado Libre",
      anio: "Julio2024",
      alineacion: "derecha",
      imagen: "../images/website-img-1.jpg",
      link: "https://mer-libre.vercel.app/",
    },
    {
      nombre: "Pixel-Salud",
      anio: "Agosto2025",
      alineacion: "izquierda",
      imagen: "../images/website-img-3.jpg",
      link: "https://pixel-salud-gold.vercel.app/",
    },
  ];

  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 ">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {proyectos.map((item, index) => {
          return <SingleProject key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
