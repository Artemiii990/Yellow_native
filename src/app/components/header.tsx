import { View, Text, StyleSheet, Image } from 'react-native';
import Svg, { Path } from "react-native-svg";

import Logo from '../icons/logo';
import CompareIcon from '../icons/compareIcon';
import BagIcon from '../icons/bagIcon';





export default function Header() {
  return (
    <View style={styles.header}>
      <Svg width={35} height={35} viewBox="0 0 36 36"><Path fill="#fff" d="M32 29H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2"/><Path fill="#fff" d="M32 19H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2"/><Path fill="#fff" d="M32 9H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2"/><Path fill="none" d="M0 0h36v36H0z"/></Svg>

      <Logo />

      <View style={{flexDirection: "row", gap: 10}}>
        <CompareIcon width={25} height={25} color="#fff" />
        <BagIcon />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: "#1b1b1b",

    flexDirection: "row",

    alignItems: 'center',
    justifyContent: "space-between",

    paddingHorizontal: 20
  }
});