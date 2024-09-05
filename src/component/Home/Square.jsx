import colorSchemes from "../../utils/colorSchemes";

const Square = ({ scheme }) => {
  const changeColor = (e) => {
    const selectRandomColor = Math.floor(
      Math.random() * colorSchemes[scheme].squareColors.length
    );
    const randomColor = colorSchemes[scheme].squareColors[selectRandomColor];
    e.target.style.transition = "0s";
    e.target.style.background = randomColor;
    e.target.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
  };
  const revertColor = (e) => {
    e.target.style.transition = "2s";
    e.target.style.background = "transparent";
    e.target.style.boxShadow = "0 0 2px transparent";
  };
  return (
    <div
      className="square"
      onMouseOver={changeColor}
      onMouseLeave={revertColor}
    ></div>
  );
};

export default Square;
