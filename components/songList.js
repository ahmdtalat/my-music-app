import React, { useContext } from 'react';
import {
	View,
	FlatList,
	TouchableOpacity,
	StyleSheet,
	ActivityIndicator
} from 'react-native';

import { PlayerContext } from './context';
import Track from './track.js';
import PlayListHeader from './playlistHeader';

const SongList = () => {
	const { tracks, playList, handleCurrentTrack, currentTrack } = useContext(
		PlayerContext
	);

	return (
		<View style={s.list}>
			{tracks && <PlayListHeader playlist={playList} />}
			{tracks ? (
				<FlatList
					data={tracks}
					keyExtractor={track => `${track.id}`}
					initialNumToRender={10}
					renderItem={({ item }) => (
						<TouchableOpacity onPress={() => handleCurrentTrack(item)}>
							<Track track={item} playing={currentTrack.id === item.id} />
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
