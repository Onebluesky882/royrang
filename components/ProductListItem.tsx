import { Box } from "@/components/ui/box";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { Pressable } from "react-native";

type ProductListItemProps = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
};
const ProductListItem = ({
  id,
  name,
  description,
  image,
  price,
}: ProductListItemProps) => {
  const formattedName =
    typeof name === "string" ? name.replace(/\s+/g, "-").toLowerCase() : "";

  return (
    <Link href={`product/${formattedName}`} asChild>
      <Pressable className="flex-1">
        <Card
          className="p-5 rounded-lg max-w-[460px] flex-1  mx-auto  "
          key={id}
        >
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
        </Card>
      </Pressable>
    </Link>
  );
};
export default ProductListItem;
