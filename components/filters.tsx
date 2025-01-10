import { ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { categories } from '@/constants/data'
import Index from '@/app/(root)/(tabs)'

const Filters = () => {
    const params=useLocalSearchParams<{filter ?:string}>()
    const [selectedCategory,setSelectedCategory]=useState(params.filter || 'All')

    const handleCategoryPress=(category:string)=>{
        if(selectedCategory==category){
            setSelectedCategory('All');
            router.setParams({filter:category})
            return 0;
        }
        setSelectedCategory(category)
        router.setParams({filter:category})
    }
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className='mt-5 mb-2'>
        {categories.map((item,index)=>(
            <TouchableOpacity className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full ${selectedCategory == item.category ? 'bg-primary-300':'bg-primary-100 border border-primary-200'}`} onPress={()=>handleCategoryPress(item.category)}>
                <Text className={`text-sm ${selectedCategory== item.category ? 'text-white font-rubik-bold mt-0.5':'text-black-300 font-rubik'}`}>{item.title}</Text>

            </TouchableOpacity>
        ))}
        <Text></Text>
    </ScrollView>
  )
}

export default Filters

const styles = StyleSheet.create({})