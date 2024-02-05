// eslint-disable-next-line react/prop-types
const AverageRating = ({ averageRating }) => {
  const renderStars = () => {
    const fullStars = Math.floor(averageRating);
    const hasHalfStar = averageRating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span style={{ color: "gold", fontSize: "1.25em" }} key={i}>
          &#9733;
        </span>
      ); // Unicode character Full star
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" style={{ color: "gold", fontSize: "1.25em" }}>
          &#9734;
        </span> //Haft star? (tried different unicode characters but none worked)
      );
    }

    return stars;
  };

  return <div className="product-rating">{renderStars()}</div>;
};

export default AverageRating;
