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
        id="mask0_121_384"
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h24v24H0z"></path>
      </mask>
      <g mask="url(#mask0_121_384)">
        <path
          fill="#1C1B1F"
          d="M5.85 17.1q1.275-.975 2.85-1.538A9.7 9.7 0 0 1 12 15q1.725 0 3.3.563t2.85 1.537a7.7 7.7 0 0 0 1.363-2.325A7.8 7.8 0 0 0 20 12q0-3.325-2.337-5.662Q15.325 4 12 4T6.338 6.338 4 12q0 1.474.487 2.775.488 1.3 1.363 2.325M12 13q-1.474 0-2.488-1.012Q8.5 10.975 8.5 9.5q0-1.474 1.012-2.487T12 6t2.488 1.013Q15.5 8.026 15.5 9.5t-1.012 2.488Q13.475 13 12 13m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22"
        ></path>
      </g>
    </svg>
  </span>
);

export default Icon;
