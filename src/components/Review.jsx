import "./review.css";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";

const Review = ({ name, designation, review, star }) => {
  return (
    <div className="review">
      <div className="top_review_section flex_box justify_between align_center">
        <div className="left_section flex_box align_center">
          <div className="review_img"></div>
          <div className="info">
            <h4>{name}</h4>
            <p>{designation}</p>
          </div>
        </div>
        <div className="right_section">
          <ul className="flex_box align_center ">
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <FaStar style={{ color: i < star ? "#FFD700" : "#ccc" }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="buttom_review_section flex_box justify_between">
        <div className="quote">
          <BiSolidQuoteSingleLeft />
        </div>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default Review;
