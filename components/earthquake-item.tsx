import React from "react";

export interface Earthquake {
	id: string;
	date: string;
	time: string;
	latitude: string;
	longitude: string;
	depth: string;
	magnitudes: {
		MD: string;
		ML: string;
		Mw: string;
	};
	location: string;
}

type Props = {
	earthquake: Earthquake;
};

export function EarthQuakeItem(props: Props) {
	const { earthquake } = props;
	return (
		<article className="flex gap-2">
			<h2>Earthquake</h2>
			<p>date: {earthquake.date}</p>
			<p>time: {earthquake.time}</p>
			<p>latitude: {earthquake.latitude}</p>
			<p>longitude: {earthquake.longitude}</p>
			<p>depth: {earthquake.depth}</p>
			<p>magnitudes: {earthquake.magnitudes.MD}</p>
			<p>magnitudes: {earthquake.magnitudes.MD}</p>
			<p>magnitudes: {earthquake.magnitudes.MD}</p>

			<p>location: {earthquake.location}</p>
		</article>
	);
}
