import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const getFonts = () =>
	Font.loadAsync({
		'lora-regular': require('./assets/fonts/lora-regular.ttf'),
		'lora-italic': require('./assets/fonts/lora-italic.ttf')
	});

import Header from './components/header';

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (fontLoaded) {
		return (
			<View>
				<Header />
				<View style={styles.container}></View>
			</View>
		);
	} else {
		return (
			<AppLoading startAsync={getFonts} onFinish={() => setFontLoaded(true)} />
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	}
});
