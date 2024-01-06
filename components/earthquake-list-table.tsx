import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { earthquakes } from "./dummy";

const earthQuaketoTNTDamage = (magnitude: number) => {
	const tntDamage = Math.pow(10, 1.5 * magnitude + 4.8);
	return tntDamage;
};

const earthQuakeMLToTNTMegaTon = (ml: number) => {
	const tntDamage = earthQuaketoTNTDamage(ml);
	const tntMegaTon = tntDamage / 4.184e9;
	return tntMegaTon;
};

export function EarthquakeTable() {
	return (
		<Table className="mt-12">
			<TableCaption>en son depremler</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Tarih</TableHead>
					<TableHead>Saat</TableHead>
					<TableHead>Enlem</TableHead>
					<TableHead>Boylam</TableHead>
					<TableHead>Derinlik</TableHead>

					<TableHead>MD</TableHead>
					<TableHead>ML</TableHead>
					<TableHead>Mw</TableHead>

					<TableHead>Yer</TableHead>
					<TableHead>TNT 🧨</TableHead>
					<TableHead>Çözüm niteliği</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{earthquakes.map((item) => (
					<TableRow key={item.id}>
						<TableCell className="font-medium w-¨[100px]">
							{item.date}
						</TableCell>
						<TableCell>{item.time}</TableCell>
						<TableCell>{item.latitude}</TableCell>
						<TableCell>{item.longitude}</TableCell>
						<TableCell>{item.depth}</TableCell>

						<TableCell>{item.magnitudes.MD}</TableCell>
						<TableCell>{item.magnitudes.ML}</TableCell>
						<TableCell>{item.magnitudes.Mw}</TableCell>

						<TableCell>{item.location}</TableCell>
						<TableCell>
							{earthQuakeMLToTNTMegaTon(
								item.magnitudes.ML
							).toFixed(2)}{" "}
							Megaton
						</TableCell>
						<TableCell>Ilksel</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
