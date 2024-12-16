import { FlatList, useWindowDimensions } from "react-native";
import products from "../assets/products.json";
import ProductListItem from "@/components/ProductListItem";
const HomeScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <FlatList
        data={products.slice(0, 9)}
        keyExtractor={(item) => item.id.toString()}
        numColumns={width >= 700 ? 3 : 2}
        contentContainerClassName="gap-2"
        columnWrapperClassName=" max-w-[960px] mx-auto"
        renderItem={({ item }) => (
          <ProductListItem
            id={item.id}
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        )}
      />
    </>
  );
};
export default HomeScreen;
