import Banner from "../components/Banner";
import Card from "../components/Card";
import Counter from "../components/Counter";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Subscribe from "../components/Subscribe";
import Title from "../components/Title";
import img01 from "../assets/img01.png";
import "./home.css";
import Review from "../components/Review";
import CountUp from "react-countup";
const Home = () => {
  const counters = [{ value: 999, text: "Clients Rating" }];
  let popular_games = [
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "99",
      img: img01,
      link: "",
    },
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "99",
      img: img01,
      link: "",
    },
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "99",
      img: img01,
      link: "",
    },
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "99",
      img: img01,
      link: "",
    },
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "99",
      img: img01,
      link: "",
    },
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "99",
      img: img01,
      link: "",
    },
  ];
  let popular_sounds = [
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "99",
      img: img01,
      link: "",
    },
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "99",
      img: img01,
      link: "",
    },
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "99",
      img: img01,
      link: "",
    },
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "99",
      img: img01,
      link: "",
    },
  ];
  let popular_guis = [
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "99",
      img: img01,
      link: "",
    },
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "99",
      img: img01,
      link: "",
    },
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "99",
      img: img01,
      link: "",
    },
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "99",
      img: img01,
      link: "",
    },
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "99",
      img: img01,
      link: "",
    },
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "99",
      img: img01,
      link: "",
    },
  ];
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
      <Hero />
      <Service />
      <section className="container popular_game_asset">
        <Title semi_title="Recent Popular Assets" title="Latest Game Assets" />
        <div className="asset_grid">
          {popular_games.map((popular_game, index) => (
            <Card
              key={index}
              title={popular_game.title}
              dev={popular_game.dev}
              info={popular_game.info}
              price={popular_game.price}
              link={popular_game.link}
              img={popular_game.img}
            />
          ))}
        </div>
      </section>
      <Banner />
      <section className="container popular_sound_asset">
        <Title semi_title="Recent Popular Assets" title="Latest Sound Assets" />
        <div className="asset_grid">
          {popular_sounds.map((popular_sound, index) => (
            <Card
              key={index}
              title={popular_sound.title}
              dev={popular_sound.dev}
              info={popular_sound.info}
              price={popular_sound.price}
              link={popular_sound.link}
              img={popular_sound.img}
            />
          ))}
        </div>
      </section>

      <Counter />
      <section className="container popular_gui_asset">
        <Title semi_title="Recent Popular Assets" title="Latest GUI Assets" />
        <div className="asset_grid">
          {popular_guis.map((popular_gui, index) => (
            <Card
              key={index}
              title={popular_gui.title}
              dev={popular_gui.dev}
              info={popular_gui.info}
              price={popular_gui.price}
              link={popular_gui.link}
              img={popular_gui.img}
            />
          ))}
        </div>
      </section>
      <div className="container">
        <Title semi_title="our testimonials" title="Our testimonials" />
        <div className="flex_box justify_between align_center review_container">
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
              <div className="clients" key={index}>
                <CountUp
                  start={0}
                  end={item.value}
                  duration={3}
                  delay={0.5}
                  className="clients_number"
                />
                <p>{item.text}+</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default Home;
