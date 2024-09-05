const colorSchemes = [
  {
    name: "Default",
    squareColors: ["#18e945", "#70eccc", "#ebd636", "#e747d4", "#335af0"], // green cyan yellow magenta blue
    mainBackground: "#5e74c9",
    gutterBackground: "black",
    underlayColor: "transparent",
    imageFilter: "",
    projectButtons: { background: "#70eccc", color: "black" },
    themeSelectStyles: { background: "white" },
    cardStyles: [
      {
        background: "#70eccc",
        borderRadius: "15px",
        boxShadow: "4px 4px 4px rgba(112, 236, 204, 0.6)",
        color: "black",
      },
      {
        background: "#e747d4",
        borderRadius: "15px",
        boxShadow: "4px 4px 4px rgba(231, 71, 212, 0.6)",
        color: "black",
      },
      {
        background: "#ebd636",
        borderRadius: "15px",
        boxShadow: "4px 4px 4px rgba(235, 214, 54, 0.6)",
        color: "black",
      },
    ],
  },
  {
    name: "Red",
    squareColors: ["#fc0000", "#cd0000", "#a00000", "#400000"],
    mainBackground: "black",
    gutterBackground: "black",
    underlayColor: "red",
    imageFilter: "opacity(75%) grayscale(1)",
    projectButtons: { border: "1px solid #fc0000", color: "#ff0000" },
    themeSelectStyles: {
      background: "black",
      border: "1px solid #fc0000",
      color: "#fc0000",
    },
    cardStyles: [
      {
        background: "#1b0000",
        border: "1px solid #fc0000",
        color: "#ff0000",
      },
      {
        background: "#1b0000",
        border: "1px solid #cd0000",
        color: "#ff0000",
      },
      {
        background: "#1b0000",
        border: "1px solid #a00000",
        color: "#ff0000",
      },
    ],
  },
  {
    name: "Vapor",
    squareColors: ["#ff06c1", "#8705e4", "#4605ec", "#11b4f5"],
    mainBackground: "#0dfdf9",
    gutterBackground: "#0dfdf9",
    underlayColor:
      "radial-gradient(circle, rgba(146,0,246,1) 0%, rgba(250,0,212,1) 100%)",
    imageFilter: "opacity(50%) grayscale(80%)",
    themeSelectStyles: {
      background: "#0dfdf9",
      color: "black",
    },
    cardStyles: [
      {
        background: "#ff06c1",
        borderRadius: "25px",
        boxShadow: "4px 4px 4px rgba(70, 5, 236, 0.6)",
        color: "black",
      },
      {
        background: "#8705e4",
        borderRadius: "25px",
        boxShadow: "4px 4px 4px rgba(70, 5, 236, 0.6)",
        color: "white",
      },
      {
        background: "#11b4f5",
        borderRadius: "25px",
        boxShadow: "4px 4px 4px rgba(70, 5, 236, 0.6)",
        color: "white",
      },
    ],
  },
];

export default colorSchemes;
