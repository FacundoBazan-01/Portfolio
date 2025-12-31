import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className=" text-6xl text-cyan mb-10">Sobre Mi</h2>
      <p className="text-white">
        Soy Facundo Bazan, Desarrollador Full Stack y estudiante avanzado de la
        Tecnicatura Universitaria en Programación (UTN), próximo a recibirme en
        febrero. Si bien disfruto creando interfaces modernas, mi verdadera
        pasión se encuentra en el Back-End. Me especializo en diseñar
        arquitecturas de bases de datos sólidas con MySQL y desarrollar la
        lógica de negocio utilizando Node.js. Disfruto "ordenando la casa" desde
        los cimientos, asegurando que cada sistema sea escalable y eficiente
        detrás de escena. Mi objetivo es sumarme a un equipo de desarrollo
        estable donde pueda aportar valor real, aplicando mi capacidad para
        estructurar soluciones robustas y seguir creciendo profesionalmente en
        cada desafío.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-darkBrown">
        <Link to="projects">Mis Proyectos</Link>
      </button>
    </div>
  );
};

export default AboutMeText;
