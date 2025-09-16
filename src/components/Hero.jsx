import "./hero.css";
const Hero = () => {
  return (
    <div className="hero_section flex_box  justify_evenly align_center ">
      <div className="hero_section_left">
        <h5>Your ultimate game development journey </h5>
        <h2>Level up new game development experience with our assets</h2>
        <div className="my-24 flex_box btn_f w_100">
          <div className="btn btn_lg flex_box align_center justify_center">
            Purchase Game
          </div>
          <div className="btn_secondary ml-24 btn_lg flex_box align_center justify_center">
            View More
          </div>
        </div>
      </div>
      <div className="hero_section_right">
      
      </div>
    </div>
  );
};

export default Hero;
