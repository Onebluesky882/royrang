import { FlatList } from "react-native";
import products from "../assets/products.json";
import ProductListItem from "../components/ProductListItem";

const HomeScreen = () => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item.name} />}
    />
  );
};
export default HomeScreen;
