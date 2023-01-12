import { useEffect, useState } from 'react';

export default function DateTime({ datetime }: { datetime: Date }) {
	const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(new Date().toLocaleString());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	if (!datetime) return null;

	return (
		<>
			<p>{`Fetched time: ${datetime.toLocaleString()}`}</p>
			<div>{`Current time: ${currentTime}`}</div>
		</>
	);
}
