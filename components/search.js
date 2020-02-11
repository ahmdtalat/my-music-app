import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Keyboard } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

const Search = () => {
	const [q, setQ] = useState('');
	const [placeHolder, setPlaceHolder] = useState('Search');

	const handlePress = () => {
		// Todo: implement search functionality
		setQ('');
		Keyboard.dismiss();
	};

	return (
		<View style={s.layout}>
			<TextInput
				value={q}
				onChangeText={text => setQ(text)}
				placeholder={placeHolder}
				placeholderTextColor='green'
				onSubmitEditing={() => {
					setQ('');
				}}
				onFocus={() => setPlaceHolder('')}
				onBlur={() => setPlaceHolder('Search')}
				style={s.input}
			/>
			<FontAwesome
				name='search'
				size={32}
				onPress={handlePress}
				style={s.icon}
				color='green'
			/>
		</View>
	);
};

const s = StyleSheet.create({
	layout: {
		position: 'relative',
		paddingHorizontal: 5
	},
	input: {
		height: 50,
		marginVertical: 10,
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: '#02111B',
		borderRadius: 30,
		color: '#ccc'
	},
	icon: {
		position: 'absolute',
		top: 18,
		left: '88%'
	}
});

export default Search;
