import { View, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';

import Navbar from '../components/Navbar.component';
import HomeFeed from '../components/Home/HomeFeed.component';
import { fetchMusic } from '../axios/music.axios';

const Home = () => {
	const [musics, setMusics] = useState([]);

	useEffect(() => {
		fetchMusic().then((res) => {
			setMusics(res.data);
		});
	}, []);

	return (
		<View className='flex-1 bg-black '>
			<FlatList
				data={musics}
				pagingEnabled
				showsVerticalScrollIndicator={false}
				// onScroll={(e) => {
				// 	setSelectedIndex(
				// 		Math.round(e.nativeEvent.contentOffset.y.toFixed(0) / windowHeight)
				// 	);
				// }}
				// onMomentumScrollEnd={() => setIsTeaserPaused(false)}
				// onEndReached={() => {
				// 	setZuleOffset(randomZules.length);
				// }}
				renderItem={({ item, index }) => <HomeFeed music={item} />}
			/>
			{/* <Navbar /> */}
		</View>
	);
};

export default Home;
