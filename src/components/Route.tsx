import React from 'react'
import { BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';


interface BreadRouteProps {
  text: string;
  color: string;

}

const BreadRoute:React.FC<BreadRouteProps> = ({
  color,
  text}) => {

    return (

        <BreadcrumbLink
          fontWeight={600}
          fontSize="1rem"
          lineHeight="1.21rem"
          color={color}
          href="#"
        >
          {text}
        </BreadcrumbLink>

    );
};

export default BreadRoute;