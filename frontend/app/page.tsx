"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
	const [response, setResponse] = useState("");

	function ButtonTest() {
		fetch("http://127.0.0.1:5000/hello_gemini")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				if (data.ai_response) {
					setResponse(data.ai_response);
				} else {
					setResponse("No message received");
				}
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
