import * as React from "react"
import { Svg } from "./styles"

export const Logo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={530.656}
    height={122}
    preserveAspectRatio="xMidYMid"
    style={{
      background: "0 0",
    }}
    viewBox="-15.328 14 530.656 122"
    {...props}
  >
    <defs>
      <filter id="a" width="300%" height="300%" x="-100%" y="-100%">
        <feFlood floodColor="#000" result="black" />
        <feMorphology
          in="SourceGraphic"
          operator="dilate"
          radius={2}
          result="erode"
        />
        <feGaussianBlur in="erode" result="blur" stdDeviation={4} />
        <feOffset dx={2} dy={2} in="blur" result="offset" />
        <feComposite in="offset" in2="black" operator="atop" result="merge" />
        <feComposite
          in="merge"
          in2="SourceGraphic"
          operator="in"
          result="inner-shadow"
        />
      </filter>
    </defs>
    <g filter="url(#a)">
      <path
        fill="#f3faff"
        d="M97.745 91.22q1.66 1.22 1.66 3.81t-1.12 4.42q-1.12 1.82-3.3 3.23-4.67 3.01-12.83 3.01t-12.61-4.26q-4.44-4.26-4.44-11.81 0-10.69 5.56-18.81 4.23-6.02 11.78-8.58 3.9-1.28 7.74-1.28 3.84 0 6.21.51t4.16 1.54q3.91 2.24 3.91 5.82 0 3.27-3.08 5.7-2.81 2.17-5.12 2.17-2.3 0-3.26-.32.26-2.3.26-3.8 0-1.51-.07-2.6-.06-1.08-.38-2.11-.64-2.37-2.59-2.37-1.96 0-3.91 1.83-1.95 1.82-3.61 4.89-3.78 6.98-3.78 15.24 0 3.96 2.24 6.24 2.24 2.27 7.04 2.27 3.58 0 6.98-2.37 1.47-1.02 2.56-2.37Zm27-4.73q2.31-4.1 2.31-8.26 0-2.75-1.99-2.75-1.53 0-3.13 2.62-1.67 2.63-2.18 6.02l-3.33 20.35-13.24 1.28 6.52-33.92 10.56-1.28-1.15 6.46q3.14-6.46 10.18-6.46 3.71 0 5.73 1.92 2.01 1.92 2.01 5.86 0 3.93-2.59 6.43-2.59 2.49-7.01 2.49-1.92 0-2.69-.76Zm16.1 16.06q-1.5-1.66-2.18-4.29-.67-2.62-.67-6.91t1.47-8.19q1.48-3.91 4.16-6.72 5.51-5.89 14.6-5.89 3.26 0 5.63 1.09l10.94-1.09-4.73 24.96q-.2.77-.2 2.18 0 1.4.87 2.3.86.9 2.14 1.02-.64 2.18-2.97 3.46-2.34 1.28-4.96 1.28-2.63 0-4.39-.99-1.76-.99-2.27-2.66-1.02 1.6-3.2 2.63-2.18 1.02-5.09 1.02-2.91 0-5.28-.77t-3.87-2.43Zm13.5-25.98q-.73 1.15-1.37 3.1-.64 1.95-1.7 7.17-1.05 5.21-1.05 8.93 0 3.71.57 4.8.58 1.08 1.6 1.08 2.05 0 3.55-1.95 1.51-1.95 2.08-5.41l3.4-18.75q-1.35-1.15-2.92-1.15-1.56 0-2.49.51-.93.51-1.67 1.67Zm48.87-9.22q.89-1.54.89-3.2 0-2.94-1.79-2.94-2.75 0-3.9 5.63l-.96 4.99h5.82l-.38 2.88h-6.02l-5.76 29.76-12.93 1.28 6.15-31.04h-4.55l.58-2.88h4.48l1.34-5.06q1.16-4.67 6.08-6.84 3.59-1.54 9.6-1.54 6.02 0 8.71 1.54 2.69 1.53 2.69 3.58t-1.6 3.33q-1.6 1.28-3.4 1.28-3.52 0-5.05-.77Zm.51 30.72q0-1.73.9-6.08l3.39-17.28h-3.78l.26-1.92q7.68-2.3 15.1-7.94h3.07l-1.53 6.98h4.99l-.58 2.88h-4.92l-3.27 17.28q-.83 3.97-.83 5.31 0 3.07 2.69 3.71-.64 2.18-2.95 3.46-2.3 1.28-5.56 1.28-3.27 0-5.12-2.05-1.86-2.05-1.86-5.63Zm42.43-.83q-3.33 3.45-9.41 3.45-7.61 0-9.21-5.56-.51-1.67-.51-3.52 0-1.86.38-3.78l3.01-16 12.99-1.28-3.52 18.62q-.13.84-.32 1.73-.19.9-.19 1.83 0 .92.32 1.53t.77.99q.76.52 2.14.52 1.38 0 2.56-1.67 1.18-1.66 1.76-4.54l3.52-17.73 12.61-1.28-4.8 25.15q-2.37 12.29-7.23 17.15-2.5 2.5-5.73 3.49-3.23.99-7.39.99-6.72 0-10.56-2.11-3.84-2.11-3.84-5.63 0-2.62 1.98-4.13 1.98-1.5 5.06-1.5 2.68 0 4.73 1.15 1.22.7 1.79 1.6-1.47 1.28-1.47 3.39 0 2.82 2.56 2.82 4.23 0 6.66-9.73.7-2.88 1.34-5.95Zm45.12-13.38 12.93-1.15q-4.61 10.11-4.61 21.82-1.73 1.22-4.25 1.22-2.53 0-4.13-1.18-1.6-1.19-1.92-2.4-1.6 1.66-4.19 2.62-2.6.96-5.35.96-2.75 0-5.15-.9-2.4-.89-4.26-2.88-4.09-4.35-4.09-12.6 0-12.8 6.85-20.48 7.04-7.94 19.52-7.94 8.64 0 11.71 4.48.96 1.41.96 3.1 0 1.7-.74 3.14-.73 1.44-1.89 2.59-2.75 2.56-6.14 2.56-1.34 0-2.62-.45.25-1.92.25-4.16t-.16-3.26q-.16-1.02-.54-1.86-.83-1.72-2.66-1.72-1.82 0-3.84 1.95-2.01 1.95-3.61 5.15-3.52 7.17-3.52 15.81 0 3.97 1.53 6.78 1.67 3.07 4.61 3.07 1.02 0 1.95-.51.93-.51 1.31-.89l2.05-12.87Zm36.1 2.63q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.17 6.02l-3.33 20.35-13.25 1.28 6.53-33.92 10.56-1.28-1.15 6.46q3.13-6.46 10.17-6.46 3.71 0 5.73 1.92 2.02 1.92 2.02 5.86 0 3.93-2.6 6.43-2.59 2.49-7 2.49-1.92 0-2.69-.76Zm16.09 16.06q-1.5-1.66-2.17-4.29-.67-2.62-.67-6.91t1.47-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.26 0 5.63 1.09l10.95-1.09-4.74 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.87.9 2.15 1.02-.64 2.18-2.98 3.46-2.34 1.28-4.96 1.28t-4.38-.99q-1.76-.99-2.28-2.66-1.02 1.6-3.2 2.63-2.17 1.02-5.08 1.02-2.92 0-5.28-.77-2.37-.77-3.88-2.43Zm13.51-25.98q-.74 1.15-1.38 3.1-.64 1.95-1.69 7.17-1.06 5.21-1.06 8.93 0 3.71.58 4.8.57 1.08 1.6 1.08 2.04 0 3.55-1.95 1.5-1.95 2.08-5.41l3.39-18.75q-1.34-1.15-2.91-1.15t-2.5.51q-.93.51-1.66 1.67Zm69.98 29.18q-7.74 0-7.74-6.02 0-2.62 1.12-7.71t1.5-7.13q.9-4.68.9-6.15 0-3.26-2.43-3.26-1.6 0-3.14 2.21-1.54 2.2-2.24 6.62l-3.97 20.16-12.48 1.28 3.46-17.41q.57-2.88 1.09-6.14.51-3.27.51-3.78 0-2.94-2.18-2.94-1.47 0-3.07 2.17-1.6 2.18-2.5 6.66l-3.9 20.16-12.61 1.28 6.72-33.92 10.43-1.28-1.08 6.46q1.66-3.45 4.73-4.96 3.07-1.5 7.87-1.5 2.76 0 4.55 1.34 1.79 1.35 2.37 3.52 1.08-2.24 3.87-3.55 2.78-1.31 6.21-1.31 3.42 0 5.12.74 1.69.73 2.72 1.95 1.72 2.24 1.72 6.33 0 4.04-1.72 12.42-.9 4.1-.9 5.6t.86 2.4q.87.9 2.15 1.02-.64 2.18-2.85 3.46-2.21 1.28-5.09 1.28Z"
      />
    </g>
  </Svg>
)