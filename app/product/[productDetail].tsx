import { useLocalSearchParams } from "expo-router";
import products from "@/assets/products.json";
import ProductDetailCard from "@/components/ProductDetailCard";
import { FlatList, View, Text } from "react-native";
const Detail = () => {
  const { productDetail } = useLocalSearchParams();

  const findItem = products.find(
    (item) =>
      item.name.toLowerCase() ===
      (productDetail as string).toLowerCase().replace(/-/g, " ")
  );

  if (!findItem) {
    return <Text>not found</Text>;
  }
  return (
    <FlatList
      data={findItem ? [findItem] : []}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductDetailCard
          id={item.id}
          name={item.name}
          description={item.description}
          image={item.image}
          price={item.price}
        />
      )}
    />
  );
};
export default Detail;
