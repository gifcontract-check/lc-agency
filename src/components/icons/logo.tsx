import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    className="text-primary"
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.18-.65-.87-2.2-.87-3.18-.05Z" />
    <path d="m12 15-3-3a2.2 2.2 0 0 1-1-1.5c-1.26-1.5-5-2-5-2s.5 3.74 2 5c.84.71 2.31.7 3.18.05.87-.65.87-2.2.05-3.18Z" />
    <path d="M22 2 11 13" />
    <path d="m19 2-3.44 3.44" />
    <path d="m15 12 3-3" />
  </svg>
);

export default Logo;
