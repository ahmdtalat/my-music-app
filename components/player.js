import React, { useState, useContext } from 'react';
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	ProgressBarAndroid,
	Text
} from 'react-native';
import { Audio } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons/';

import { PlayerContext } from './context';
import { getTime } from './util';

const soundObject = new Audio.Sound();

const Player = () => {
	const [isOn, setIsOn] = useState(false);
	const { currentTrack } = useContext(PlayerContext);

	const { title_short, duration, name } = currentTrack;
	const { mins, fSecs } = getTime(duration);

	const togglePlayer = async () => {
		setIsOn(!isOn);
		// await soundObject.loadAsync({
		// 	uri: 'https://www.deezer.com/en/track/530231361'
		// });
		// await soundObject.playAsync();
	};
	return (
		<View style={s.container}>
			<View style={s.progress}>
				<ProgressBarAndroid
					styleAttr='Horizontal'
					color='#2196F3'
					indeterminate={false}
					progress={1}
					style={{ width: '82%' }}
				/>
				<Text style={{ color: '#0A474D' }}>
					{duration ? `${mins}:${fSecs}` : '--:--'} min
				</Text>
			</View>
			<View style={s.media}>
				<TouchableWithoutFeedback>
					<FontAwesome
						style={s.backward}
						name='step-backward'
						size={32}
						color='#0A474D'
					/>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback style={{ width: 100, alignItems: 'center' }}>
					<FontAwesome
						style={s.play}
						name={isOn ? 'pause-circle' : 'play-circle'}
						size={56}
						color='#0A474D'
						onPress={togglePlayer}
					/>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback>
					<FontAwesome
						style={s.forward}
						name='step-forward'
						size={32}
						color='#0A474D'
					/>
				</TouchableWithoutFeedback>
			</View>
			<View style={s.info}>
				<Text style={{ fontSize: 16, color: '#0A474D', width: '65%' }}>
					{title_short}
				</Text>
				<Text style={{ fontSize: 16, color: '#0A474D' }}>{name}</Text>
			</View>
		</View>
	);
};

const s = StyleSheet.create({
	container: {
		height: 100,
		backgroundColor: '#02111B',
		opacity: 0.5
	},
	progress: {
		flexDirection: 'row',
		paddingHorizontal: 5,
		justifyContent: 'space-between'
	},
	media: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	play: {
		marginHorizontal: 20
	},
	info: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 5
	}
});
export default Player;
