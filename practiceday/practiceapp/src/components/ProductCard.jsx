const ProductCard = ({ username, email, password }) => {
  return (
    <div>
      <h2>Name :{username}</h2>
      <p>Email :{email}</p>
      <p> Password:{password}</p>
    </div>
  );
};

export default ProductCard;
