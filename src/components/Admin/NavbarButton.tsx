import { HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { NavItem } from "../../data/navItems";
import useExtractSecondPathSegment from "../../hooks/useExtractSecondPathSegment";
import theme from "../../theme";

const NavbarButton = ({ icon: Icon, label, url }: NavItem) => {
  const active = useExtractSecondPathSegment() === url;

  return (
    <Link to={url ? `/admin/${url}` : "/admin"} style={{ width: "100%" }}>
      <HStack
        paddingX={2}
        paddingY={{ base: 1, lg: 2.5 }}
        spacing={4}
        border="2px solid transparent"
        borderRadius={{ base: 0, lg: 6 }}
        bgColor={active ? "lightBlue" : "transparent"}
        _hover={{ borderColor: "lightBlue" }}
      >
        <Icon
          size={20}
          color={active ? theme.colors.white : theme.colors.lightBlue}
        />
        <Text fontSize={20} color={active ? "white" : "lightBlue"}>
          {label}
        </Text>
      </HStack>
    </Link>
  );
};

export default NavbarButton;
