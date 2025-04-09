import { motion } from "framer-motion";

const Lifechange = () => {
  return (
    <motion.div 
      className="w-screen h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://quotefancy.com/media/wallpaper/3840x2160/8225411-Shannon-Hoon-Quote-When-life-is-hard-you-have-to-change.jpg')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
     
    </motion.div>
  );
};

export default Lifechange;
