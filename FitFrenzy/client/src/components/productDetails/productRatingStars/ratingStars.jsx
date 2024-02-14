// eslint-disable-next-line react/prop-types
export const Rating = ({ rating }) => {
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    /*    console.log("fullStars", fullStars);
    console.log("hasHalfStar", hasHalfStar);
    console.log("remainingStar", remainingStars);
 */
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

    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span
          key={`empty-${i}`}
          style={{ color: "silver", fontSize: "1.25em" }}
        >
          &#9733;
        </span>
      );
    }

    return stars;
  };

  return <div className="product-rating">{renderStars()}</div>;
};
