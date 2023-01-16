import React, { FC, ComponentProps } from 'react';

export const Dxf: FC<ComponentProps<'svg'>> = (props) => (
  <svg fill="none" viewBox="0 0 144 186" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Dxf file extension icon</title>
    <g filter="url(#c)">
      <path
        d="m100 2 41 41v127c0 6.627-5.323 12-11.951 12h-114.08c-6.6274 0-11.97-5.31-11.97-11.937v-156.14c0-6.6274 5.3726-11.924 12-11.924h85z"
        clipRule="evenodd"
        fill="#1F2937"
        fillRule="evenodd"
      />
      <path
        d="m100 2 41 41v127c0 6.627-5.323 12-11.951 12h-114.08c-6.6274 0-11.97-5.31-11.97-11.937v-156.14c0-6.6274 5.3726-11.924 12-11.924h85z"
        clipRule="evenodd"
        fillRule="evenodd"
        style={{ mixBlendMode: 'multiply' }}
      />
      <g filter="url(#b)">
        <path
          d="m100 2v29c0 6.6274 5.373 12 12 12h29l-41-41z"
          clipRule="evenodd"
          fill="#fff"
          fillOpacity=".3"
          fillRule="evenodd"
          shapeRendering="crispEdges"
        />
      </g>
    </g>
    <path
      d="m82.03 65.823 30.652 71.869h-22.551l-30.009-69.43 6.0374 19.71-13.85 33.916-14.561 1.243h40.841l-36.714 15.64c-1.5719 0.67-3.3848-0.106-3.9848-1.706l-6.472-17.259c-0.2684-0.716-0.2534-1.507 0.0419-2.212l21.676-51.753c0.467-1.1153 1.558-1.8411 2.767-1.8411h23.368c1.202 0 2.2879 0.7174 2.7595 1.8231z"
      fill="#fff"
    />
    <defs>
      <filter
        id="c"
        x="0"
        y="0"
        width="144"
        height="186"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_3450_10329" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend in2="effect1_dropShadow_3450_10329" result="effect2_dropShadow_3450_10329" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_3450_10329" result="shape" />
      </filter>
      <filter
        id="b"
        x="97"
        y="0"
        width="47"
        height="47"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_3450_10329" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend in2="effect1_dropShadow_3450_10329" result="effect2_dropShadow_3450_10329" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_3450_10329" result="shape" />
      </filter>
      <radialGradient
        id="a"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="translate(72 2) rotate(90) scale(180 180.82)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity="0" offset=".29742" />
        <stop stopOpacity=".08" offset="1" />
      </radialGradient>
    </defs>
  </svg>
);
