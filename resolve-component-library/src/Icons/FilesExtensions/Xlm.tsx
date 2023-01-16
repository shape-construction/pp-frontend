import React, { FC, ComponentProps } from 'react';

export const Xlm: FC<ComponentProps<'svg'>> = (props) => (
  <svg fill="none" viewBox="0 0 144 186" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Xlm file extension icon</title>
    <g filter="url(#c)">
      <path
        d="m100 2 41 41v127c0 6.627-5.323 12-11.951 12h-114.08c-6.6274 0-11.97-5.31-11.97-11.937v-156.14c0-6.6274 5.3726-11.924 12-11.924h85z"
        clipRule="evenodd"
        fill="#059669"
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
      d="m84 66h-24v24h8v8h-32v16h-8v24h24v-24h-8v-8h24v8h-8v24h24v-24h-8v-8h24v8h-8v24h24v-24h-8v-16h-32v-8h8v-24z"
      clipRule="evenodd"
      fill="#fff"
      fillRule="evenodd"
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_3488_14386" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend in2="effect1_dropShadow_3488_14386" result="effect2_dropShadow_3488_14386" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_3488_14386" result="shape" />
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_3488_14386" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend in2="effect1_dropShadow_3488_14386" result="effect2_dropShadow_3488_14386" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_3488_14386" result="shape" />
      </filter>
      <radialGradient
        id="a"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="translate(72 2) rotate(90) scale(180 180.82)"
        gradientUnits="userSpaceOnUse"
      >
        <stop floodOpacity="0" offset=".29742" />
        <stop floodOpacity=".08" offset="1" />
      </radialGradient>
    </defs>
  </svg>
);
