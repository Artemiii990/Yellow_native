import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import Header from '../app/components/header';
import RemoveIcon from '../app/icons/removeIcon';
import ProductCard from '../app/components/productCard';
import Path from '../app/components/path';

import { paths } from '../app/index'
import { products } from '../app/index';





export default function HomeScreen() {
  const insets = useSafeAreaInsets();


  type ProductKey = keyof typeof paths;

  const currentProduct = "Apple iPhone 17 Pro";
  const currentSeries = currentProduct.match(/iPhone \d{2}/)?.[0];
  const currentSeriesKey = currentSeries?.replace(/\s/, "") as ProductKey;



  return (
    <View style={{flex: 1, backgroundColor: "#fff"}}>
      <View style={{height: insets.top, backgroundColor: "#1b1b1b"}} />
      <Header />



      <FlatList
        ListHeaderComponent={
          <View>
            <Path path={paths[currentSeriesKey]} />

            <View><Text style={styles.currentProduct}>{currentProduct}</Text></View>

            <Pressable style={styles.choosenParametersButton}><Text style={{color: "#6a5eff", fontSize: 11, fontWeight: 500}}>Выбранные параметры:</Text></Pressable>
            
            <View style={{flexDirection: "row", alignItems: "center"}}>
              <RemoveIcon />
              <Text style={{fontSize: 12}}>Серия: {currentSeries}</Text>
            </View>

            <Text style={{fontSize: 11, color: "#6a5eff"}}>Очистить все</Text>

            <Pressable style={styles.filtersButton}><Text style={{color: "#6a5eff", fontSize: 11}}>Фильтры ᐯ</Text></Pressable>

            <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 20, gap: 10, marginBottom: 30}}>
              <Text style={{fontSize: 10}}>сортировка:</Text>
              <Pressable style={styles.changeSortWayButton}>
                <Text style={{fontSize: 10}}>Новинки</Text>
                <Text style={{fontSize: 6, color: "#ffd420"}}>ᐯ</Text>
              </Pressable>
            </View>
          </View>
        }
        ListHeaderComponentStyle={{padding: 20}}


        data={products}
        renderItem={({item}) => (
          <Pressable onPress={() => router.push({pathname: '/product', params: {productName: item.name, price: item.price, description: item.description, photo: item.photo, isAvailable: String(item.isAvailable), code: item.code, itemNumber: item.itemNumber}})}>
            <ProductCard productName={item.name} price={item.price} photo={item.photo} isAvailable={item.isAvailable} code={item.code} />
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{gap: 10, paddingHorizontal: 20}}
        contentContainerStyle={{gap: 10}}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  textColor: {
    color: "#333333"
  },

  specialColor: {
    color: "#999999"
  },





  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },



  path: {},


  currentProduct: {
    fontSize: 20,

    marginTop: 10
  },


  choosenParametersButton: {
    borderColor: "#d3ceff",
    borderRadius: 5,
    borderWidth: 1,

    padding: 10,

    alignSelf: "flex-start",

    marginTop: 25
  },


  filtersButton: {
    borderColor: "#6a5eff",
    borderRadius: 5,
    borderWidth: 1,

    alignSelf: "flex-start",

    paddingHorizontal: 20,
    paddingVertical: 7,

    marginTop: 25
  },


  changeSortWayButton: {
    borderRadius: 20,
    borderColor: "#999999",
    borderWidth: 1,

    paddingHorizontal: 15,
    paddingVertical: 7,

    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",

    width: 140,
  },



  table: {
    flexDirection: "row",
    gap: 10
  }
});