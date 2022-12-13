import './SlidingTrack.css';
import React, { useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';

export default function SlidingTrack() {
  const [mouseDownAt, setmouseDownAt] = useState('0');
  const [prevPercent, setprevPercent] = useState('0');
  const [curPercent, setcurPercent] = useState('0');

  const handleMouseDown = (e: MouseEvent) => {
    setmouseDownAt(String(e.pageX));
  };

  const handleMouseUp = () => {
    setmouseDownAt('0');
    setprevPercent(curPercent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (mouseDownAt === '0') return;
    const mouseDelta = parseFloat(mouseDownAt) - e.pageX,
      maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100;

    const nextPercentage = parseFloat(prevPercent) + percentage;
    const curPercentage = String(Math.max(Math.min(nextPercentage, 0), -100));

    setcurPercent(curPercentage);
  };

  return (
    <motion.div
      id="sliding-track"
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseUp={() => handleMouseUp()}
      animate={{transform: `translate(${curPercent}%, -50%)`}}
      transition={{ease:"easeOut", duration: 3}}
    >
      <motion.img
        className="image"
        alt=""
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
        animate={{objectPosition:`${parseFloat(curPercent) + 100}% center`}}
        transition={{ease:"easeOut", duration: 2}}
      />
      <motion.img
        className="image"
        alt=""
        src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
        draggable="false"
        animate={{objectPosition:`${parseFloat(curPercent) + 100}% center`}}
        transition={{ease:"easeOut", duration: 2}}
      />
      <motion.img
        className="image"
        alt=""
        src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
        animate={{objectPosition:`${parseFloat(curPercent) + 100}% center`}}
        transition={{ease:"easeOut", duration: 2}}
        />
      <motion.img
        className="image"
        alt=""
        src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
        animate={{objectPosition:`${parseFloat(curPercent) + 100}% center`}}
        transition={{ease:"easeOut", duration: 2}}
        />
      <motion.img
        className="image"
        alt=""
        src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
        animate={{objectPosition:`${parseFloat(curPercent) + 100}% center`}}
        transition={{ease:"easeOut", duration: 2}}
        />
      <motion.img
        className="image"
        alt=""
        src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80"
        draggable="false"
        animate={{objectPosition:`${parseFloat(curPercent) + 100}% center`}}
        transition={{ease:"easeOut", duration: 2}}
        />
      <motion.img
        className="image"
        alt=""
        src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80"
        draggable="false"
        animate={{objectPosition:`${parseFloat(curPercent) + 100}% center`}}
        transition={{ease:"easeOut", duration: 2}}
        />
      <motion.img
        className="image"
        alt=""
        src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
        animate={{objectPosition:`${parseFloat(curPercent) + 100}% center`}}
        transition={{ease:"easeOut", duration: 2}}
        />
    </motion.div>
  );
}
