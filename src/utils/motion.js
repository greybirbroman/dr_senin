export const photoVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const titleVarians = {
  hidden:{
    x: 50,
    opacity: 0
  },
  show:{
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: 'spring',
    }
  },
}

export const listVariants = {
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 1,
    },
  }),
  hidden: {
    opacity: 0,
    x: -100,
  },
};