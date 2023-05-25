import React from "react";

export default function Circle(props) {
  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 17 18"
        fill="none"
        {...props}
      >
        <circle
          cx="8.5"
          cy="9"
          r="6.5"
          stroke="#281C08"
          strokeWidth="4"
        ></circle>
      </svg>
  );
}
