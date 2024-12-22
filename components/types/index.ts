export interface LoginWithButtonProps {
    logo: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Allows any React component that renders an SVG
    text: string;
  }

export interface FormData {
  username: string;
  email: string;
  password: string;
}