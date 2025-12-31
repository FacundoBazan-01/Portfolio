import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactForm = () => {
  const from = useRef();
  const [nombre,setNombre]= useState("")
  const [email, setEmail]= useState("")
  const [mensaje, setMensaje] = useState("")
  const [enviar, setEnviar] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_buvvbmm", "template_i5rjvd8", from.current, {
        publicKey: "mlHwJxIfaMKCTFiwj",
      })
      .then(
        () => {
          setNombre(""),
          setEmail(""),
          setMensaje("")
          setEnviar("Mensaje Enviado!")
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
        <p className="text-cyan"> {enviar} </p>
      <form className="flex flex-col gap-4 text-white" ref={from} onSubmit={sendEmail}>
        <input
          name="name"
          type="text"
          placeholder="Escribe tu Nombre"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          name="email"
          type="email"
          placeholder="Escribe tu Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          type="text"
          placeholder="Escribe tu Mensaje"
          rows="9"
          cols="50"
          required
          className="rounded-lg bg-lightBrown p-2"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold hover:bg-darkCyan bg-cyan transition-all duration-500 "
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
