import User from "../icons_assets/user1.jpeg";
import User2 from "../icons_assets/user2.jpeg";
import User3 from "../icons_assets/user3.jpeg";

const Testimonials = () => {
  return (
    <div className="test-parents">
      <p>Testimonials</p>
      <div className="testimonials">
        <div className="testimonial">
          <img className="reviewer-img" src={User} alt="reviewer1" />
          <div className="name-rating">
            <p className="reviewer-name">Jessica Rand</p>
            <p className="reviewer-rating">5/5</p>
          </div>
          <div className="review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa
            massa, semper sed enim at, faucibus mattis lorem. Donec vehicula,
            leo ut auctor ullamcorper, diam tortor dignissim velit, ac iaculis
            libero lacus non diam.
          </div>
        </div>
        <div className="testimonial">
          <img className="reviewer-img" src={User2} alt="reviewer2" />
          <div className="name-rating">
            <p className="reviewer-name">John Doe</p>
            <p className="reviewer-rating">3/5</p>
          </div>
          <div className="review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa
            massa, semper sed enim at, faucibus mattis lorem. Donec vehicula,
            leo ut auctor ullamcorper, diam tortor dignissim velit, ac iaculis
            libero lacus non diam.
          </div>
        </div>
        <div className="testimonial">
          <img className="reviewer-img" src={User3} alt="reviewer3" />
          <div className="name-rating">
            <p className="reviewer-name">Vladimir Shumilova</p>
            <p className="reviewer-rating">5/5</p>
          </div>
          <div className="review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa
            massa, semper sed enim at, faucibus mattis lorem. Donec vehicula,
            leo ut auctor ullamcorper, diam tortor dignissim velit, ac iaculis
            libero lacus non diam.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
