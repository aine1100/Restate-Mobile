import React from 'react'
import { Cards, FeaturedCards } from "@/components/Cards";
import Filters from "@/components/filters";
import NoResults from "@/components/noResults";
import Search from "@/components/search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link, router } from "expo-router";
import { Text, View ,Image, Touchable, TouchableOpacity, FlatList, ActivityIndicator} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Property from '../properties/[id]';


const Explore = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList data={[1,2,3,4,6,7,8]} renderItem={({item})=><Cards/>}
      ListHeaderComponent={
     <View className='px-5'>
      <View className='flex flex-row items-center justify-between mt-5'>
        <TouchableOpacity onPress={()=>router.back()} className='flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center'>
          <Image source={icons.backArrow} className='size-5' />
         

        </TouchableOpacity>
        <Text className='text-base mr-2 text-center font-rubik-medium text-black-300'>Search for Ideal Home</Text>
        <Image source={icons.bell} className='w-6 h-6'/>

      </View>
      <Search/>
      <View className='mt-5'>
        <Filters/>
        <Text className='text-xl font-rubik-bold text-black-300'>
          Found 7 Properties

        </Text>

      </View>
      
     </View> 
     
      }
      keyExtractor={(item)=>item.toString()}
      numColumns={2}
      contentContainerClassName="pb-32"
      columnWrapperClassName="flex gap-5 px-5"
      showsVerticalScrollIndicator={false}
     
      />
      

    </SafeAreaView>
  )
}

export default Explore

