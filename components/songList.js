import React, { useState, useEffect } from 'react';
import {
	View,
	FlatList,
	TouchableOpacity,
	StyleSheet,
	ActivityIndicator
} from 'react-native';

import Track from './track.js';
import { API } from '../config';

const SongList = () => {
	const [tracks, setTracks] = useState(null);

	async function fetchData() {
		const response = await fetch(API, {
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const res = await response.json();
		const { data } = res;
		setTracks(data);
	}

	useEffect(() => {
		fetchData();
		return () => {
			setTracks(null);
		};
	}, []);

	return (
		<View style={s.list}>
			{tracks ? (
				<FlatList
					data={tracks}
					keyExtractor={track => `${track.id}`}
					renderItem={({ item }) => (
						<TouchableOpacity>
							<Track track={item} />
						</TouchableOpacity>
					)}
				/>
			) : (
				<ActivityIndicator size='large' color='#333' style={s.indicator} />
			)}
		</View>
	);
};

const s = StyleSheet.create({
	list: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
export default SongList;
