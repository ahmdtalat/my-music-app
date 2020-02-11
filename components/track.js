import React from 'react';
import { View, Text } from 'react-native';

const Track = ({ track }) => {
	const { title, duration, artist } = track;

	return (
		<View>
			<Text>{title}</Text>
			<Text>{duration}</Text>
		</View>
	);
};

export default Track;
