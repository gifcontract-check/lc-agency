import { Rocket } from 'lucide-react';
import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <Rocket {...props} className="text-primary" />
);

export default Logo;
