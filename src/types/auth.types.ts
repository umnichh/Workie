export interface LoginCredentials {
  identifier: string;
  password: string;
}

export interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
}

export interface AuthProps {
  backgroundImages: AuthBackground[];
  backgroundSvgs: AuthSvg[];
}

export interface AuthBackground {
  id: number;
  src: string;
  isActive: boolean;
}

export interface AuthSvg {
  id: number;
  src: React.FC<React.SVGProps<SVGSVGElement>>;
  className: string;
}

