import React from "react";

type Props = {
  className?: string;
};

const Icon: React.FC<Props> = ({ className }) => (
  <span aria-hidden="true">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <mask
        id="mask0_126_449"
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h24v24H0z"></path>
      </mask>
      <g mask="url(#mask0_126_449)">
        <path
          fill="#1C1B1F"
          d="M7 15q1.25 0 2.125-.875A2.9 2.9 0 0 0 10 12q0-1.25-.875-2.125A2.9 2.9 0 0 0 7 9q-1.25 0-2.125.875A2.9 2.9 0 0 0 4 12q0 1.25.875 2.125A2.9 2.9 0 0 0 7 15m0 3q-2.5 0-4.25-1.75T1 12t1.75-4.25T7 6q2.026 0 3.537 1.15Q12.05 8.3 12.65 10h8.375L23 11.975l-3.5 4L17 14l-2 2-2-2h-.35a5.8 5.8 0 0 1-2.175 2.9A5.86 5.86 0 0 1 7 18"
        ></path>
      </g>
    </svg>
  </span>
);

export default Icon;
