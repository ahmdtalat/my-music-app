import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = () => {
	return (
		<View style={s.header}>
			<Text style={s.headerText}>My Music</Text>
		</View>
	);
};

const s = StyleSheet.create({
	header: {
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#02111B'
	},
	headerText: {
		marginTop: 20,
		color: '#eee',
		fontSize: 22,
		letterSpacing: 1.2,
		fontFamily: 'lora-italic'
	}
});

export default Header;
