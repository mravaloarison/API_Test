"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
	const [response, setResponse] = useState("");

	function ButtonTest() {
		// Make a request to https://zany-goggles-wq5pxqw94jpf5rv4-5000.app.github.dev/

		console.log("ButtonTest pressed");
		fetch("https://zany-goggles-wq5pxqw94jpf5rv4-5000.app.github.dev/")
			.then((response) => response.json())
			.then((data) => {
				// setResponse(data.message);
				console.log(data);
			});
	}

	return (
		<div className="flex h-screen flex-col justify-center items-center gap-2">
			<div>
				<p>Test Test</p>
			</div>
			<Button onClick={ButtonTest}>Click here to run test</Button>

			<p>{response}</p>
		</div>
	);
}
