import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const PlayListHeader = ({ playlist }) => {
	const { title, duration, nb_tracks, name } = playlist;

	return (
		<TouchableOpacity>
			<View style={s.playlist}>
				<View>
					<Text style={s.info}>playlist: {title}</Text>
					<Text style={s.info}>
						<FontAwesome name='user' size={16} color='green' /> {name}
					</Text>
				</View>
				<View>
					<Text style={s.info}>track: {nb_tracks}</Text>
					<Text style={s.info}>
						<FontAwesome name='hourglass-start' size={16} color='green' />{' '}
						{duration / 60} min
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const s = StyleSheet.create({
	playlist: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingHorizontal: 10,
		paddingVertical: 10,
		marginBottom: 8,
		borderBottomColor: '#000',
		borderRadius: 8,
		shadowOffset: {
			width: 0,
			height: 6
		},
		shadowOpacity: 0.5,
		shadowRadius: 9.65,

		elevation: 3
	},
	info: {
		color: 'green',
		fontFamily: 'lora-italic',
		fontSize: 16
	}
});
export default PlayListHeader;
