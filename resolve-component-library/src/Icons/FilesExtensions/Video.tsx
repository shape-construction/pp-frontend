import React, { FC, ComponentProps } from 'react';

export const Video: FC<ComponentProps<'svg'>> = (props) => (
  <svg fill="none" viewBox="0 0 144 186" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Video file extension icon</title>
    <g filter="url(#c)">
      <path
        d="m100 2 41 41v127c0 6.627-5.323 12-11.951 12h-114.08c-6.6274 0-11.97-5.31-11.97-11.937v-156.14c0-6.6274 5.3726-11.924 12-11.924h85z"
        clipRule="evenodd"
        fill="#3B82F6"
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
      d="m73.027 67c-19.327 0-35.027 15.7-35.027 35.027 0 19.327 15.7 34.973 35.027 34.973 19.327 0 34.973-15.646 34.973-34.973 0-19.327-15.7-34.973-34.973-35.027zm14.725 36.11c-0.2707 0.487-0.6496 0.866-1.1369 1.137l-19.977 10.015c-1.2451 0.596-2.761 0.108-3.3565-1.137-0.2166-0.325-0.2707-0.704-0.2707-1.137v-19.976c0-1.4076 1.1369-2.4903 2.4903-2.4903 0.379 0 0.758 0.0541 1.1369 0.2707l19.977 9.9613c1.2452 0.6497 1.7324 2.1117 1.1369 3.3567z"
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_3444_6885" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend in2="effect1_dropShadow_3444_6885" result="effect2_dropShadow_3444_6885" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_3444_6885" result="shape" />
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_3444_6885" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend in2="effect1_dropShadow_3444_6885" result="effect2_dropShadow_3444_6885" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_3444_6885" result="shape" />
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
