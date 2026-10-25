import { View, Image, StyleSheet, Text, Pressable, Dimensions } from "react-native";
import CompareIcon from "../icons/compareIcon";
import ChatIcon from "../icons/chatIcon";





type ProductCardProps = {
  productName: string;
  price: string;
  photo: string;
  isAvailable: boolean;
  code: string
};



export default function ProductCard({productName, price, photo, isAvailable, code}: ProductCardProps) {
  const width = Dimensions.get('window').width;
  const maxWidth = (width - 20 - 20 - 10) / 2;



  return (
    <View style={[styles.card, {width: maxWidth}]}>
      <View style={{flexDirection: "row", gap: 20, marginBottom: 30}}>
        <View style={{gap: 20}}>
          <CompareIcon width={17} height={17} color="#000" />
          <ChatIcon width={17} height={17} />
        </View>

        <Image source={{uri: photo}} style={{width: 90, aspectRatio: 966/1200}} />
      </View>


      <View>
        <View style={styles.productNameContainer}>
          <Text style={styles.productName}>{productName}</Text>
        </View>
        <Text style={styles.price}>{price} грн</Text>

        <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 15}}>
          <Pressable style={styles.buyButton}><Text style={styles.buyButtonText}>Купить</Text></Pressable>
          <Pressable style={styles.creditButton}><Text style={styles.creditButtonText}>В кредит</Text></Pressable>
        </View>

        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          {isAvailable ? <Text style={styles.available}>Есть в наличии</Text> : <Text style={styles.notAvailable}>Нет в наличии</Text>}
          <Text style={styles.code}>код: {code}</Text>
        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  card: {
    borderColor: "#dddddd",
    borderRadius: 15,
    borderWidth: 1,

    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 20,
  },



  productNameContainer: {
    height: 53
  },
  productName: {
    fontSize: 10,
    marginBottom: 3
  },

  price: {
    fontSize: 12,
    fontWeight: 600,

    marginBottom: 10
  },


  buyButton: {
    backgroundColor: "#ffce00",

    borderRadius: 15,

    paddingHorizontal: 13,
    paddingVertical: 8
  },
  buyButtonText: {
    fontSize: 9
  },

  creditButton: {
    borderColor: "#ffce00",
    borderRadius: 15,
    borderWidth: 1,

    paddingHorizontal: 13,
    paddingVertical: 8
  },
  creditButtonText: {
    fontSize: 7
  },


  available: {
    color: "#28CF4D",
    fontSize: 6
  },
  notAvailable: {
    color: "#000",
    fontSize: 5
  },

  code: {
    color: "#c4c4c4",
    fontSize: 6
  }
});