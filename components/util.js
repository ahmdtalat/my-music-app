export const getTime = duration => {
	const mins = Math.floor(duration / 60);
	const secs = duration - mins * 60;
	const fSecs = secs < 10 ? `0${secs}` : secs;
	return { mins, fSecs };
};
