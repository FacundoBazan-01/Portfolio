import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="Facundo.mbazan@gmail.com" Image={HiOutlineMail}/>
      <SingleInfo text="+54 0381 628 1616" Image={FiPhone}/>
      <SingleInfo text="Argentina, Tucuman" Image={IoLocationOutline}/>
    </div>
  )
}

export default ContactInfo
