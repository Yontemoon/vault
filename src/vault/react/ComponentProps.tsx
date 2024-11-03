/**
 *
 * ? November 3rd, 2024
 *
 * * This is related with React & PropTypes...
 * TODO: Possibly put this in a different file such as react-ts
 *
 */

import type { ComponentProps, ButtonHTMLAttributes } from "react";

// ! This is technically correct, but syntax heavy, I like the
// ! ComponentProp method a but better
type OldButtonProp = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

type ButtonProps = {
  children: React.ReactNode;
} & ComponentProps<"button">;

const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

const ParentComponent = () => {
  return <Button>Click Me</Button>;
};

export default Button;
