import React from "react";

type Props = {
  className?: string;
};

const Icon: React.FC<Props> = () => (
  <span aria-hidden="true">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        fill="#3B5999"
        d="M20.444 6.65H23V2.196C22.559 2.137 21.043 2 19.276 2c-8.086 0-5.886 9.158-6.208 10.5H9v4.977h4.067V30h4.986V17.478h3.902l.62-4.977H18.05c.22-3.294-.887-5.852 2.393-5.852"
      ></path>
    </svg>
  </span>
);

export default Icon;
