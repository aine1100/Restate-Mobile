import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import images from '@/constants/images'

const NoResults = () => {
  return (
    <View>
        <Image source={images.noResult} className='w-11/12 h-80' resizeMode='contain'/>
      <Text className='text-2xl font-rubik-bold text-black-300 mt-5'>NoResults</Text>
      <Text className='text-base text-black-100 mt-5'>
        We couldnt find any result

      </Text>
    </View>
  )
}

export default NoResults

const styles = StyleSheet.create({})