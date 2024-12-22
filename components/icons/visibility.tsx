import React from "react";

type Props = {
  className?: string;
  color?: string;
};

const Icon: React.FC<Props> = ({ className, color }) => (
  <span aria-hidden="true">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <mask
        id="mask0_126_453"
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h24v24H0z"></path>
      </mask>
      <g mask="url(#mask0_126_453)">
        <path
          fill={color}
          d="M12 16q1.875 0 3.188-1.312Q16.5 13.375 16.5 11.5t-1.312-3.187T12 7 8.813 8.313Q7.499 9.625 7.5 11.5q0 1.875 1.313 3.188Q10.125 16 12 16m0-1.8q-1.125 0-1.912-.787A2.6 2.6 0 0 1 9.3 11.5q0-1.125.787-1.912A2.6 2.6 0 0 1 12 8.8q1.125 0 1.912.787.788.788.788 1.913t-.787 1.912A2.6 2.6 0 0 1 12 14.2m0 4.8q-3.65 0-6.65-2.038T1 11.5q1.35-3.425 4.35-5.462T12 4t6.65 2.037q3 2.039 4.35 5.463-1.35 3.425-4.35 5.462T12 19"
        ></path>
      </g>
    </svg>
  </span>
);

export default Icon;
