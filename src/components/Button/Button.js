import React, { useState } from "react";

const Button = React.forwardRef((props, ref) => {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);

  return (
    <button
      ref={ref}
      className={`btn btn--${variant} btn--${size}`}
      onClick={props.handleChange}
    >
      {props.children}
    </button>
  );
});

export default Button;
