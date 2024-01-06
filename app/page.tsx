import { allPosts } from "@/.contentlayer/generated";
import { earthquakes } from "@/components/dummy";
import { EarthquakeList } from "@/components/earthquake-list";
import { EarthquakeTable } from "@/components/earthquake-list-table";
import Link from "next/link";

export default function Home() {
	return (
		<div className="prose dark:prose-invert">
			{/* 	{allPosts.map((post) => (
				<article key={post._id}>
					<Link href={post.slug}>
						<h2>{post.title}</h2>
					</Link>
					{post.description && <p>{post.description}</p>}
				</article>
			))} */}
			<EarthquakeTable />
			{/* <EarthquakeList items={earthquakes} /> */}
		</div>
	);
}
