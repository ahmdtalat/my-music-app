import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Track = ({ track }) => {
	const { title, duration, artist } = track;

	return (
		<View style={s.track}>
			<Text>{title}</Text>
			<Text>{duration}</Text>
		</View>
	);
};

const s = StyleSheet.create({
	track: {
		flexDirection: 'row',
		backgroundColor: '#02111B',
		padding: 10,
		marginVertical: 5,
		borderRadius: 8
	}
});

export default Track;
