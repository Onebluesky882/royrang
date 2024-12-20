import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Heading } from "@/components/ui/heading";
import { VStack } from "../ui/vstack";
import { Box } from "../ui/box";
import { Button, ButtonText } from "../ui/button";
type ProductDetailCardProp = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
};

const ProductDetailCard = ({
  description,
  id,
  image,
  name,
  price,
}: ProductDetailCardProp) => {
  return (
    <Box className="flex-1 p-5">
      <Card className="p-5 rounded-lg max-w-[960px] mx-auto flex-1 " key={id}>
        <Image
          source={image}
          className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]  mx-auto"
          alt="image"
          resizeMode="contain"
        />

        <Text className="text-sm font-normal mb-2 text-typography-700">
          {name}
        </Text>
        <VStack className="mb-6">
          <Heading size="md" className="mb-4">
            ${price}
          </Heading>
          <Text size="sm">{description}</Text>
        </VStack>
        <Box className="flex-col sm:flex-row">
          <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
            <ButtonText size="sm">Add to cart</ButtonText>
          </Button>
          <Button
            variant="outline"
            className="px-4 py-2 border-outline-300 sm:flex-1"
          >
            <ButtonText size="sm" className="text-typography-600">
              Wishlist
            </ButtonText>
          </Button>
        </Box>
      </Card>
    </Box>
  );
};
export default ProductDetailCard;
