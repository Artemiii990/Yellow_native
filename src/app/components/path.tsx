import { View, Text, StyleSheet } from "react-native";
import {Fragment} from "react";



type PathProps = {
  path: string[];
};



export default function Path({path}: PathProps) {
  return (
    <Text style={[{fontSize: 10, lineHeight: 16}, styles.textColor]}>
      {path.map((item, index) => (
        <Fragment key={item}>
          {index > 0 && (<Text style={styles.specialColor}>  ᐳ  </Text>)}
          <Text style={index === path.length - 1 ? {color: "#b6b6b6"} : undefined}>{item}</Text>
        </Fragment>
      ))}
    </Text>
  );
}



const styles = StyleSheet.create({
  textColor: {
    color: "#333333"
  },
  
  specialColor: {
    color: "#999999"
  }
})