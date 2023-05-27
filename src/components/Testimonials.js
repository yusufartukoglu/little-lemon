import User from "../icons_assets/user1.jpeg";
import User2 from "../icons_assets/user2.jpeg";
import User3 from "../icons_assets/user3.jpeg";

const Testimonials = () => {
  return (
    <div className="testimonials-parent">
      <p className="testimonials-title">Testimonials</p>
      <div className="testimonials">
          <div className="testimonial">
              <img className="reviewer-img" src={User} alt="greek salad"/>
              <div className="name-rating">
                  <p className="reviewer-name">Jennifer King</p>
                  <p className="reviewer-rating">5/5</p>
              </div>
              <div className="review-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                      semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, 
                      diam tortor dignissim velit, ac iaculis libero lacus non diam. </p>
              </div>
          </div>
          <div className="testimonial">
              <img className="reviewer-img" src={User2} alt="greek salad"/>
              <div className="name-rating">
                  <p className="reviewer-name">John Doe</p>
                  <p className="reviewer-rating">5/5</p>
              </div>
              <div className="review-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                      semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, 
                      diam tortor dignissim velit, ac iaculis libero lacus non diam. </p>
              </div>
          </div>
          <div className="testimonial">
              <img className="reviewer-img" src={User3} alt="greek salad"/>
              <div className="name-rating">
                  <p className="reviewer-name">Igor Daikin</p>
                  <p className="reviewer-rating">5/5</p>
              </div>
              <div className="review-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                      semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, 
                      diam tortor dignissim velit, ac iaculis libero lacus non diam. </p>
              </div>
          </div>
      </div>
    </div>
  )
};

export default Testimonials;
