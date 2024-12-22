import React from "react";

type Props = {
  className?: string;
};

const Icon: React.FC<Props> = ({ className }) => (
  <span aria-hidden="true">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      className={className}
    >
      <path
        fill="#FBBB00"
        d="m8.762 18.712-.905 3.379-3.308.07A12.94 12.94 0 0 1 3 16c0-2.157.524-4.19 1.454-5.98l2.945.54 1.29 2.928A7.7 7.7 0 0 0 8.272 16c0 .954.173 1.869.49 2.712"
      ></path>
      <path
        fill="#518EF8"
        d="M28.773 13.572Q28.999 14.753 29 16c0 .931-.098 1.839-.284 2.715a13 13 0 0 1-4.577 7.423h-.001l-3.71-.19-.524-3.277a7.75 7.75 0 0 0 3.333-3.956h-6.951v-5.143h12.487"
      ></path>
      <path
        fill="#28B446"
        d="M24.138 26.138A12.95 12.95 0 0 1 16 29c-4.951 0-9.255-2.767-11.451-6.839l4.213-3.449a7.73 7.73 0 0 0 11.141 3.959z"
      ></path>
      <path
        fill="#F14336"
        d="M24.298 5.993 20.087 9.44A7.732 7.732 0 0 0 8.69 13.489L4.453 10.02A13 13 0 0 1 16 3c3.154 0 6.047 1.124 8.298 2.993"
      ></path>
    </svg>
  </span>
);

export default Icon;
