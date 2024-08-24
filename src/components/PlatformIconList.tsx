import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { Platform } from "../hooks/UseGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    nintendo: SiNintendoswitch,
    playstation: FaPlaystation,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color='gray.500' />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
