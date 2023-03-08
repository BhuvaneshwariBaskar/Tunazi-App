import { Text, ImageBackground } from 'react-native';
import React from 'react';

const HomeFeed = ({ music }) => {
	return (
		<ImageBackground
			className='flex-1 h-screen'
			source={{ uri: music.thumbnail }}
		>
            <Text>fsdfs</Text>
        </ImageBackground>
	);
};

export default HomeFeed;
