import { Text, ImageBackground, Image } from 'react-native';
import React from 'react';
import { BlurView } from '@react-native-community/blur';
import { windowHeight, windowWidth } from '../../utils/constants.util';

const HomeFeed = ({ music }) => {
	return (
		<ImageBackground
			className='flex-1 h-screen'
			source={{ uri: music.thumbnail }}
		>
			<BlurView
				blurType='extraDark'
				blurRadius={5}
				blurAmount={100}
				reducedTransparencyFallbackColor='white'
				style={{
					width: windowWidth,
					height: windowHeight,
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Image source={{ uri: music.thumbnail }} className='object-contain' />
			</BlurView>
		</ImageBackground>
	);
};

export default HomeFeed;
