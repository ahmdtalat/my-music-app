import React, { useState, useContext } from 'react';
import {
	View,
	StyleSheet,
	TouchableOpacity,
	ProgressBarAndroid,
	Text
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons/';

import { PlayerContext } from './context';
import { getTime } from './util';

const Player = () => {
	const [play, setPlay] = useState(false);
	const { currentTrack } = useContext(PlayerContext);

	const { title_short, duration, name } = currentTrack;
	const { mins, fSecs } = getTime(duration);

	const togglePlayer = () => {
		setPlay(!play);
	};
	return (
		<View style={s.container}>
			<View style={s.progress}>
				<ProgressBarAndroid
					styleAttr='Horizontal'
					color='#2196F3'
					indeterminate={false}
					progress={0.2}
					style={{ width: '82%' }}
				/>
				<Text style={{ color: '#0A474D' }}>
					{duration ? `${mins}:${fSecs}` : '--:--'} min
				</Text>
			</View>
			<View style={s.media}>
				<TouchableOpacity>
					<FontAwesome
						style={s.backward}
						name='step-backward'
						size={32}
						color='#0A474D'
					/>
				</TouchableOpacity>
				<TouchableOpacity style={{ width: 100, alignItems: 'center' }}>
					<FontAwesome
						style={s.play}
						name={play ? 'pause-circle' : 'play-circle'}
						size={56}
						color='#0A474D'
						onPress={togglePlayer}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<FontAwesome
						style={s.forward}
						name='step-forward'
						size={32}
						color='#0A474D'
					/>
				</TouchableOpacity>
			</View>
			<View style={s.info}>
				<Text style={{ fontSize: 16, color: '#0A474D', width: '70%' }}>
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
