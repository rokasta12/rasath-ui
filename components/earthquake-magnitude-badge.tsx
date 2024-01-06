import React, { useMemo } from "react";
import { Badge } from "./ui/badge";

type Props = {
	magnitude: number;
};

export function MagnitudeBadge(props: Props) {
	const { magnitude } = props;

	const bg = useMemo(() => {
		switch (true) {
			case magnitude < 2:
				return "bg-red-50 text-black";
			case magnitude >= 2 && magnitude <= 5:
				return "bg-red-200 text-black";
			case magnitude > 5 && magnitude <= 8:
				return "bg-red-600";
			default:
				return "bg-slate-400";
		}
	}, [magnitude]);

	return (
		<Badge variant={"default"} className={bg}>
			{magnitude}
		</Badge>
	);
}
