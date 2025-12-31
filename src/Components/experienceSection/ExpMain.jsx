import { motion } from "framer-motion";
import { fadeIn } from "../../frameMotion/variants";
import ExpText from './ExpText'
import ExpTop from './ExpTop'
import AllExp from './AllExp'

const ExpMain = () => {
  return (
    <div id='experience' className='max-w-[1200px] mx-auto px-4'>
      <motion.div
              variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
      >

      <ExpText/>
      </motion.div>
      <motion.div
              variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
      >
      <ExpTop/>

      </motion.div>
      <div className='w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden'></div>
      <AllExp/>
    </div>
  )
}

export default ExpMain
