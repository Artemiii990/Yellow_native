import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from '../app/components/header'
import Path from '../app/components/path'
import CompareIcon from '../app/icons/compareIcon';

import { paths } from '../app/index';



export default function ProductScreen() {
  const insets = useSafeAreaInsets();

  const { productName, price, description, photo, isAvailable, code, itemNumber } = useLocalSearchParams<{ productName: string, price: string, description: string, photo: string, isAvailable: string, code: string, itemNumber: string }>();
  const available = isAvailable === "true";

  type ProductKey = keyof typeof paths;


  const currentSeries = productName.match(/iPhone \d{2}/)?.[0];
  const currentSeriesKey = currentSeries?.replace(/\s/, "") as ProductKey;

  const currentPath = [...paths[currentSeriesKey], productName];
  



  
  return (
    <ScrollView style={{backgroundColor: "#fff"}}>
      <View style={{height: insets.top, backgroundColor: "#1b1b1b"}} />
      <Header />



      <View style={styles.content}>
        <Path path={currentPath} />


        <View style={styles.product}>
          <Image source={{uri: photo}} style={{width: "70%", aspectRatio: 966/1200, alignSelf: "center", marginBottom: 15}} />

          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            {isAvailable ? <Text style={[styles.availabilityText, {color: "#5eb04c", backgroundColor: "#4aa85214"}]}>Есть в наличии</Text> : <Text>Нет в наличии</Text>}
            <View style={{gap: 5}}>
              <View style={styles.details}><Text style={{color: "#979797", fontSize: 10}}>Артикул: </Text><Text style={{fontSize: 10}}>{itemNumber}</Text></View>
              <View style={styles.details}><Text style={{color: "#979797", fontSize: 10}}>Код товара: </Text><Text style={{fontSize: 10}}>{code}</Text></View>
            </View>
          </View>

          <Text style={{marginTop: 10, fontSize: 15, fontWeight: 500, marginBottom: 10}}>{productName}</Text>
          <Text style={{fontSize: 10}}>{description}</Text>
          <View style={{flexDirection: "row", alignItems: "flex-end", gap: 10, marginTop: 10, marginBottom: 10}}><Text style={{fontSize: 25, fontWeight: 600}}>{price}</Text><Text>грн</Text></View>

          <View style={{flexDirection: "row", height: 40, gap: 10}}>
            <Pressable style={[styles.buyButton, {flex: 1}]}><Text>Купить</Text></Pressable>
            <Pressable style={styles.compareButton}><CompareIcon width={25} height={25} color='#000' /></Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  content: {
    padding: 20
  },



  product: {
    marginTop: 30
  },


  availabilityText: {
    paddingHorizontal: 10,
    paddingVertical: 3,

    alignSelf: "center",

    fontSize: 10
  },


  details: {
    backgroundColor: "#fafafa",
    flexDirection: "row",
    alignSelf: "flex-end",

    paddingHorizontal: 7,
    paddingVertical: 3
  },


  buyButton: {
    backgroundColor: "#ffce00",

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 5
  },

  compareButton: {
    borderColor: "#E7E7E7",
    borderRadius: 5,
    borderWidth: 1,

    width: 40,

    justifyContent: "center",
    alignItems: "center"
  }
});