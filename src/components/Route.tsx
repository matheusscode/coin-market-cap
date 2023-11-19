import React from "react";
import { BreadcrumbLink } from "@chakra-ui/react";

interface BreadRouteProps {
  text: string;
  color: string;
  href?: string;
}

const BreadRoute: React.FC<BreadRouteProps> = ({ color, text, href }) => {
  return (
    <BreadcrumbLink
      fontWeight={600}
      fontSize="1rem"
      lineHeight="1.21rem"
      color={color}
      href={href}
    >
      {text}
    </BreadcrumbLink>
  );
};

export default BreadRoute;
