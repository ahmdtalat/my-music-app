import React, { useState } from 'react';
import {
	StyleSheet,
	Keyboard,
	TouchableWithoutFeedback,
	View
} from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/header';
import Search from './components/search';
import SongList from './components/songList';

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (fontLoaded) {
		return (
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.container}>
					<Header />
					<Search />
					<SongList />
				</View>
			</TouchableWithoutFeedback>
		);
	} else {
		return (
			<AppLoading startAsync={getFonts} onFinish={() => setFontLoaded(true)} />
		);
	}
}

const getFonts = () =>
	Font.loadAsync({
		'lora-regular': require('./assets/fonts/lora-regular.ttf'),
		'lora-italic': require('./assets/fonts/lora-italic.ttf')
	});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#223'
	}
});
