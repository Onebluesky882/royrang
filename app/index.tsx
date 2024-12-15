import { FlatList } from "react-native";
import products from "../assets/products.json";
import ProductListItem from "../components/ProductListItem";
import { Button, ButtonText } from "../components/ui/button";
const HomeScreen = () => {
  return (
    <>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item.name} />}
      />
      <Button>
        <ButtonText>hello</ButtonText>
      </Button>
    </>
  );
};
export default HomeScreen;
