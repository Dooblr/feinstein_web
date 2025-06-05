// Shared animation variants for consistent motion across components
export const fadeInContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const fadeInItem = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const scaleOnHover = {
  scale: 1.02,
  transition: { duration: 0.2 }
};

export const scaleOnTap = {
  scale: 0.98
}; 