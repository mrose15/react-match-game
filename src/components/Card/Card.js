import React, { useState } from "react";

const Card = React.forwardRef((props, ref) => {
  const [cardDataset] = useState(props.cardDataset);
  const [cardBackAlt] = useState(props.cardBackAlt);
  const [cardBackgroundImg] = useState(props.cardBackgroundImg);

  return (
    <div className="game__card" data-name={`${cardDataset}`}>
      <div className="game__card--front" alt="Animal Crossing DIY Card"></div>
      <div
        className="game__card--back"
        style={{ backgroundImage: `url(${cardBackgroundImg})` }}
        alt={`${cardBackAlt}`}
      ></div>
    </div>
  );
});

export default Card;
