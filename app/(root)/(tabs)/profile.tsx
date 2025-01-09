import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageSourcePropType,
  TextStyle,
} from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constants/icons';
import images from '@/constants/images';
import { settings } from '@/constants/data';

// Define the SettingItemProps interface
interface SettingItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string | TextStyle;
  showArrow?: boolean;
}

// SettingItem component
const SettingItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingItemProps) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex flex-row items-center justify-between py-4">
      <View className="flex flex-row items-center gap-3">
        <Image source={icon} className="w-6 h-6 mr-3" />
        <Text  className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>
          {title}
        </Text>
      </View>
      {showArrow && <Image source={icons.rightArrow} className='size-5'/>}
    </TouchableOpacity>
  );
};

// Profile component
const Profile = () => {
  const router = useRouter();

  const handleLogout = async () => {
    router.push('/sign-in');
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        {/* Profile Header */}
        <View className="flex flex-row items-center justify-between mt-5 pr-2">
          <Text className="text-xl font-rubik-bold">Profile</Text>
          <Image source={icons.bell} className="w-5 h-5" />
        </View>

        {/* Profile Avatar Section */}
        <View className="flex-row justify-center flex mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <Image
              source={images.avatar}
              className="w-44 h-44 rounded-full"
            />
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image source={icons.edit} className="w-9 h-9" />
            </TouchableOpacity>
            <Text className="text-2xl font-rubik-bold mt-2">
              Adrian James
            </Text>
          </View>
        </View>

        {/* Settings Section */}
        <View className="flex flex-col mt-10">
          <SettingItem
            icon={icons.calendar}
            title="My Calendar"
            onPress={() => console.log('Navigate to Calendar')}
          />
          <SettingItem
            icon={icons.wallet}
            title="Payments"
            onPress={() => console.log('Navigate to Payments')}
          />
         
        </View>
        <View className='flex flex-col mt-10 border-t pt-5 border-primary-200'>{
          settings.slice(2).map((item,index)=>(
            <SettingItem
              key={index}
             {...item}
            />
          ))
          }

        </View>
        <View className='flex flex-col mt-10 border-t pt-5 border-primary-200'>
          <SettingItem title='Logout' icon={icons.logout} textStyle="text-danger" showArrow={false} onPress={handleLogout} />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
