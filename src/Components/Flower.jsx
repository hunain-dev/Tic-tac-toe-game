import React from "react";
import { motion } from "framer-motion";
import image from '/src/assets/flo.png';

function Flower() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        perspective: "1000px",
      }}
    >
      <motion.div
        initial={{ scale: 1, rotateX: 0 }}
        whileHover={{ scale: 1.1, rotateX: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          width: 150,
          height: 150,
          backgroundImage: `url(${image})`, // ✅ Correct usage
          backgroundSize: "cover",
          borderRadius: "16px",
          transformStyle: "preserve-3d",
        }}
      />
    </div>
  );
}

export default Flower;
