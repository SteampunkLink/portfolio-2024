const Card = ({ extraStyles, children }) => {
  return (
    <div style={{ ...extraStyles }} className="card">
      {children}
    </div>
  );
};

export default Card;
