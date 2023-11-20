import { ReactNode } from "react";
import { IconButton } from "@chakra-ui/react";

interface PaginationButtonProps {
  ariaLabel: string;
  icon: ReactNode;
  onClick: () => void;
  disable: boolean;
  isReverse?: boolean;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  ariaLabel,
  icon,
  onClick,
  disable,
  isReverse = false,
  ...rest
}) => {
  const applyReverse = (reverseStyle: string, defaultStyle: string = "") => {
    return isReverse ? reverseStyle : defaultStyle;
  };

  return (
    <IconButton
      border={applyReverse("1px solid gray")}
      isDisabled={disable}
      bgColor={applyReverse("transparent", "blue")}
      color={applyReverse("dark", "light")}
      variant={applyReverse("ghost")}
      px={8}
      fontSize="0.958rem"
      fontWeight={600}
      onClick={onClick}
      aria-label={ariaLabel}
      children={icon}
      _hover={{
        bg: applyReverse("blue"),
        color: applyReverse("light"),
      }}
      {...rest}
    />
  );
};

export default PaginationButton;
