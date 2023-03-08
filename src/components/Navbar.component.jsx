import {
	View,
	TouchableOpacity,
	Image,
	Text,
	ImageBackground
} from 'react-native';
import React from 'react';

const Navbar = () => {
	return (
		<View className=' absolute bottom-0 w-full h-20 flex-row justify-around rounded-t-full px-10'>
			{navItems.map((navItem, i) => (
				<TouchableOpacity key={i} className='items-center'>
					<View className='w-16 h-16 rounded-full bg-[#3b3e45d5] items-center justify-center -translate-y-8'>
						<Image
							source={{
								uri: navItem.icon
							}}
							className='w-7 h-7'
						/>
					</View>
					<Text className='-translate-y-8 mt-2'>{navItem.title}</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

const navItems = [
	{
		title: 'Home',
		to: 'Home',
		icon: 'https://img.icons8.com/sf-regular/48/ffffff/home-page.png'
	},
	{
		title: 'Home',
		to: 'Home',
		icon: 'https://img.icons8.com/sf-regular/48/ffffff/home-page.png'
	},
	{
		title: 'Home',
		to: 'Home',
		icon: 'https://img.icons8.com/sf-regular/48/ffffff/home-page.png'
	}
];

export default Navbar;
