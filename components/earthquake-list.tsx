import React from "react";
import { EarthQuakeItem, Earthquake } from "./earthquake-item";

type Props = {
	items: Earthquake[];
};

export function EarthquakeList(props: Props) {
	const { items } = props;

	return (
		<div>
			{items.map((item) => {
				return <EarthQuakeItem key={item.id} earthquake={item} />;
			})}
		</div>
	);
}
