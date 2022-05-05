import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./rating.css";

function Rating(props) {
  const [value, setValue] = React.useState(props.value);

  const renderStars = value => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        i < value ? (
          <FaStar className="m-star" key={i} onClick={() => setValue(i + 1)} />
        ) : (
          <FaRegStar
            className="m-star"
            key={i}
            onClick={() => setValue(i + 1)}
          />
        ),
      );
    }
    return stars;
  };

  return (
    <div className="rating-wrapper" style={{ color: props.color }}>
      {renderStars(value)}
    </div>
  );
}

export default Rating;

Rating.defaultProps = {
  value: 0,
  color: "#D7BE69",
};
