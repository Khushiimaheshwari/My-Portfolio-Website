export const fadeIn = (direction, delay) => {
    return {
      hidden: {
        y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        opacity: 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };

export const dropdownVariants = (yOffset = 20, duration = 0.4) => ({
  hidden: {
    opacity: 0,
    y: -yOffset,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -yOffset - 20,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
});