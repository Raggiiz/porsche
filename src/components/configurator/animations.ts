export const customBlockAnimation = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    height: "79px",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
  selectedExteriorType: {
    height: "112px",
  },
};

export const rotateArrowAnimation = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

export const upItem = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
