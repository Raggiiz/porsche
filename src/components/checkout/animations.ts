export const collapsibleFormAnimation = {
  open: {
    opacity: 1,
    height: "auto",
    marginTop: "1.375rem",
    marginBottom: "1.375rem",
  },
  collapsed: {
    opacity: 0,
    height: 0,
    marginTop: 0,
    marginBottom: 0,
  },
};

export const arrowAnimation = {
  open: { rotateZ: "180deg" },
  collapsed: { rotateZ: "0deg" },
};

export const initialFadeInAnimation = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};
