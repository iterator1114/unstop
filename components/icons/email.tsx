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
        id="mask0_126_446"
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h24v24H0z"></path>
      </mask>
      <g mask="url(#mask0_126_446)">
        <path
          fill="#1C1B1F"
          d="M4 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 18V6q0-.824.587-1.412A1.93 1.93 0 0 1 4 4h16q.824 0 1.413.588Q22 5.175 22 6v12q0 .824-.587 1.413A1.93 1.93 0 0 1 20 20zm8-7 8-5V6l-8 5-8-5v2z"
        ></path>
      </g>
    </svg>
  </span>
);

export default Icon;
