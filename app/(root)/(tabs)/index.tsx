import { Cards, FeaturedCards } from "@/components/Cards";
import Search from "@/components/search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link } from "expo-router";
import { Text, View ,Image, Touchable, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image source={images.avatar} className="size-12 rounded-full"/>
            <View className="flex flex-col items-start ml-2 justify-start">
              <Text className="text-xs font-rubik text-black-100">Good Morning</Text>
              <Text className="text-base font-rubik-medium text-black-300">Adrian</Text>

            </View>

          </View>
          <Image source={icons.bell} resizeMode="contain" className="w-6 h-6"/>

        </View>
        <Search/>
      <View className="my-5">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
          <TouchableOpacity>
            <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
          </TouchableOpacity>
        

        </View>
        

      </View>
      <FeaturedCards/>
      <Cards/>

      </View>
      
     

    </SafeAreaView>
  );
}
