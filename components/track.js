import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Track = ({ track }) => {
	const {
		title_short,
		duration,
		artist: { name },
		album: { cover }
	} = track;
	const mins = Math.floor(duration / 60);
	const secs = duration - mins * 60;
	const fSecs = secs < 10 ? `0${secs}` : secs;
	return (
		<View style={s.track}>
			{!cover ? (
				<FontAwesome
					name='music'
					size={36}
					style={{ marginRight: 10 }}
					color='green'
				/>
			) : (
				<Image source={{ uri: cover }} size={64} style={s.img} />
			)}
			<View style={s.song}>
				<Text style={s.title}>{title_short}</Text>
				<Text style={s.artist}>{name || 'unknown'}</Text>
			</View>
			<Text style={s.duration}>{`${mins}:${fSecs} min`}</Text>
		</View>
	);
};

const s = StyleSheet.create({
	track: {
		height: 80,
		flexDirection: 'row',
		backgroundColor: '#02111B',
		alignItems: 'center',
		padding: 15,
		marginVertical: 5,
		borderRadius: 16,
		shadowOffset: {
			width: 0,
			height: 6
		},
		shadowOpacity: 0.5,
		shadowRadius: 9.65,

		elevation: 3
	},
	song: {
		width: '63%'
	},
	title: {
		color: '#509884'
	},
	artist: {
		color: '#0E3A48',
		fontSize: 16
	},
	duration: {
		color: '#103433'
	},
	img: {
		width: 50,
		height: 50,
		borderRadius: 50,
		marginRight: 10
	}
});

export default Track;
