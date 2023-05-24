import Hero from "../icons_assets/restauranfood.jpg";

const Description = () => {
  return (
    <div className="restaurant-desc-parents">
      <div className="restaurant-desc"></div>
      <div className="little desc-title">Little Lemon</div>
      <div className="subtitle desc-subtitle">Chicago</div>
      <div className="desc-text desc">
        We are a family owned Mediterranean restaurant,
        focused on traditional recipes served with a modern twist.
      </div>
      <img className="desc-img" src={Hero} alt="Hero"></img>
    </div>
  );
};

export default Description;
