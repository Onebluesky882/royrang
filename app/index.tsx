import { FlatList } from "react-native";
import products from "../assets/products.json";
import ProductListItem from "@/components/ProductListItem";
const HomeScreen = () => {
  return (
    <>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerClassName="gap-2"
        columnWrapperClassName="gap-2"
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
