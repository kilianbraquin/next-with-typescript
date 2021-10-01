import NextLink from "next/link";
import { HTMLProps } from "react";

type LinkProps = HTMLProps<HTMLAnchorElement>;

const Link: React.FC<LinkProps> = ({ href = "#", children, ...props }) => {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  );
};

export { Link };
export type { LinkProps };
