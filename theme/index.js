const theme = {
  typography: "Montserrat",
  bar: {
    height: { sm: "0.125rem", md: "0.25rem", lg: "0.35rem" },
    width: { normal: "3.2rem", full: "100%" },
  },
  fontSizes: {
    sm: "0.8rem",
    default: "1rem",
    md: "1.2rem",
    lg: "1.65rem",
    xl: "3.75rem",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  lineHeights: {
    sm: "1.2",
    md: "1.4",
    lg: "1.6",
    custom: "26px"
  },
  gap: {
    sm: "0.6rem 1.2rem",
    md: "0.8rem 1.6rem",
    lg: "1rem 2rem",
  },
  color: {
    primary: "#60C3D8",
    primaryDarkShade: "#47488e",
    secondary: "#eaeaff",
    hover: "#3B3B3B",
    text: "#333333",
    white: "#ffffff",
    red: "#cd1a3e",
  },
  responsive: {
    mobile: "768px",
    tab: "998px",
    desktop: "1170px",
  },
};

export default theme;