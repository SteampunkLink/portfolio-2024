import { useState, useEffect } from "react";
import Square from "./Square";

const Gutter = ({ scheme, gutterBg }) => {
  const [squareArr, setSquareArr] = useState([]);
  useEffect(() => {
    const createSquareArr = () => {
      const newArr = [];
      const squareX = Math.floor((window.innerWidth * 0.15) / 18);
      const squareY = Math.floor(window.innerHeight / 18);
      for (let i = 0; i < squareY; i++) {
        const newY = [];
        for (let j = 0; j < squareX; j++) {
          newY.push(`${i}-${j}`);
        }
        newArr.push(newY);
      }
      setSquareArr(newArr);
    };
    createSquareArr();
    window.addEventListener("resize", createSquareArr);
    return () => {
      window.removeEventListener("resize", createSquareArr);
    };
  }, []);
  return (
    <div className="gutter" style={{ background: gutterBg }}>
      {squareArr.map((row, idx) => (
        <div key={idx} className="row">
          {row.map((square) => (
            <Square key={square} scheme={scheme} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Gutter;
