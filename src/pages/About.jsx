import Header from "../components/Header";
import img08 from "../assets/img08.jpg";
import img06 from "../assets/img06.png";
import { BiTargetLock } from "react-icons/bi";
import { TbDeviceVisionProFilled } from "react-icons/tb";
import { LuAudioLines } from "react-icons/lu";
import img05 from "../assets/img05.png"
import Subscribe from "../components/Subscribe";
import "./about.css";
import Review from "../components/Review";
import CountUp from "react-countup";
import Counter from "../components/Counter";
import Title from "../components/Title";

const About = () => {
   const counters = [{ value: 999, text: "Clients Rating" }];
     let reviews = [
    {
      name: "Deniel Smith",
      designation: "Software Developer",
      review: `This digital agency completely transformed our online presence. Their
          expertise, creativity, and attention to detail exceeded all our
          expectations. We highly rtheir...`,
      star: 3,
    },
    {
      name: "Deniel Smith",
      designation: "Software Developer",
      review: `This digital agency completely transformed our online presence. Their
          expertise, creativity, and attention to detail exceeded all our
          expectations. We highly rtheir...`,
      star: 5,
    },
    {
      name: "Deniel Smith",
      designation: "Software Developer",
      review: `This digital agency completely transformed our online presence. Their
          expertise, creativity, and attention to detail exceeded all our
          expectations. We highly rtheir...`,
      star: 5,
    },
  ];
  return (
    <>
      <Header title="About Us" para=" Know everything about us..." bg={img08} />
      <div className="about_section  flex_box justify_evenly align_center container">
        <div className="about_left">
          <h5>
            About<span> Nova Asset</span>
          </h5>
          <h3>
            the journey of the <span>Nova Asset</span>
          </h3>
          <p>
            A game studio crafting exciting, high-quality games assets,
            prioritizing immersive games.
          </p>
          <div className="sarvices">
            <div className="flex_box row">
              <div className="service flex_box ">
                <div className="service_icons">
                  <TbDeviceVisionProFilled />
                </div>
                <div className="service_des">
                  <h3>Vision</h3>
                  <p>Provieding Games Asset for game development</p>
                </div>
              </div>
              <div className="service flex_box">
                <div className="service_icons">
                  <BiTargetLock />
                </div>
                <div className="service_des">
                  <h3>Location Tagging</h3>
                  <p>A game studio crafting excutive video game</p>
                </div>
              </div>
            </div>
            <div className="flex_box row">
              <div className="service flex_box">
                <div className="service_icons">
                  <BiTargetLock />
                </div>
                <div className="service_des">
                  <h3>Location Tagging</h3>
                  <p>A game studio crafting excutive video game</p>
                </div>
              </div>
              <div className="service flex_box">
                <div className="service_icons">
                  <BiTargetLock />
                </div>
                <div className="service_des">
                  <h3>Location Tagging</h3>
                  <p>A game studio crafting excutive video game</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_right">
          <div className="about_img flex_box align_end">
            <img src={img06} width={256} />
            <div className="about_info">
              <h2>
               
                Biggest Platform for <span>Game assets</span>{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Counter />
      <div className=" features_section flex_box justify_evenly align_center container">
        <div className="features">
          <h5>Top Features</h5>
          <h2>great team deliver perfect work</h2>
          <p>
            We are specialized in developing out-of-the-box solutions using
            emerging technologies
          </p>
          <ul>
            <li className="flex_box align_center">
              <div className="icon">
                <LuAudioLines />
              </div>
              <div className="list_item">
                <h5>Audio & Sound Design</h5>
                <p>
                  We’re passionate about what we do and always seek new
                  opportunities. We are also flexible and proactive in business.
                </p>
              </div>
            </li>
          </ul>

          <ul>
            <li className="flex_box align_center">
              <div className="icon">
                <LuAudioLines />
              </div>
              <div className="list_item">
                <h5>Graphics & Performance</h5>
                <p>
                  We’re passionate about what we do and always seek new
                  opportunities. We are also flexible and proactive in business.
                </p>
              </div>
            </li>
          </ul>

          <ul>
            <li className="flex_box align_center">
              <div className="icon">
                <LuAudioLines />
              </div>
              <div className="list_item">
                <h5>Graphics & Performance</h5>
                <p>
                  We’re passionate about what we do and always seek new
                  opportunities. We are also flexible and proactive in business.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="poster">
          <img src={img05} alt="" />
        </div>
      </div>
<div className=" mt-24 container">
        <Title semi_title="our testimonials" title="Our testimonials" />
        <div className="flex_box align_center justify_between review_container">
          <div className="review_slider">
            {reviews.map((review, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  top: review.top,
                  left: review.left,
                }}
              >
                <Review
                  name={review.name}
                  designation={review.designation}
                  review={review.review}
                  star={review.star}
                />
              </div>
            ))}
          </div>
          <div className="happy_client">
            {counters.map((item, index) => (
              <div className="clients flex_box" key={index}>
                <CountUp
                  start={0}
                  end={item.value}
                  duration={3}
                  delay={0.5}
                  className="clients_number"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
       <Subscribe />
    </>
  );
};

export default About;
