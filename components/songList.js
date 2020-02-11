import React, { useState, useEffect } from 'react';
import {
	View,
	FlatList,
	TouchableOpacity,
	StyleSheet,
	ActivityIndicator,
	Text
} from 'react-native';

import Track from './track.js';
import PlayListHeader from './playlistHeader';
import { API } from '../config';

const SongList = () => {
	const [tracks, setTracks] = useState(null);
	const [playList, setPlayList] = useState({});

	async function fetchData() {
		const response = await fetch(API, {
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const res = await response.json();
		const {
			title,
			duration,
			nb_tracks,
			creator: { name },
			tracks: { data }
		} = res;
		setTracks(data);
		setPlayList({ name, title, duration, nb_tracks });
	}

	useEffect(() => {
		fetchData();
		return () => {
			setTracks(null);
			setPlayList({});
		};
	}, []);

	return (
		<View style={s.list}>
			{tracks && <PlayListHeader playlist={playList} />}
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
		justifyContent: 'center',
		marginHorizontal: 15
	}
});
export default SongList;
