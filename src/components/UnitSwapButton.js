import React from "react";

export default function UnitSwapButton({ onClick }) {
  return (
    <div className="unitSwapButton" onClick={onClick}>
      <svg
        style={{ width: "24px", height: "24px" }}
        viewBox="0 0 24 24"
      >
        <path
          fill="#000000"
          d="M9,3L5,7H8V14H10V7H13M16,17V10H14V17H11L15,21L19,17H16Z"
        />
      </svg>
    </div>
  );
}
