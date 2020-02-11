import React, { createContext, useState, useEffect } from 'react';

import { API } from '../config';

const PlayerContext = createContext();

const PlayerProvider = props => {
	const [currentTrack, setCurrentTrack] = useState({
		title_short: '',
		duration: 0,
		name: ''
	});
	const [tracks, setTracks] = useState(null);
	const [playList, setPlayList] = useState({});

	async function fetchData() {
		const response = await fetch(API, {
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const res = await response.json();
		const {
			title,
			duration,
			nb_tracks,
			creator: { name },
			tracks: { data }
		} = res;
		setTracks(data);
		setPlayList({ name, title, duration, nb_tracks });
	}

	useEffect(() => {
		fetchData();
		return () => {
			setTracks(null);
			setPlayList({});
		};
	}, []);

	const handleCurrentTrack = ({ title_short, duration, artist: { name } }) => {
		const curr = {
			title_short,
			duration,
			name
		};
		setCurrentTrack(curr);
	};
	return (
		<PlayerContext.Provider
			value={{
				tracks,
				playList,
				currentTrack,
				handleCurrentTrack
			}}
		>
			{props.children}
		</PlayerContext.Provider>
	);
};

export { PlayerContext, PlayerProvider };
