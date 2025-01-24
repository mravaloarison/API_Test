"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

interface Pokemon {
	name: string;
	url: string;
}

export default function Home() {
	const [response, setResponse] = useState("");
	const [pokemons, setPokemons] = useState([] as Pokemon[]);

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

	function ShowPokemons() {
		fetch("http://127.0.0.1:5000/all_pokemons")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				if (data.result) {
					setPokemons(data.result);
				}
			});
	}

	return (
		<div className="flex min-h-screen flex-col justify-center items-center gap-2">
			<div>
				<p>Test Test</p>
			</div>
			<div className="flex flex-row gap-4">
				<Button onClick={ButtonTest}>Click here to run test</Button>
				<Button onClick={ShowPokemons} variant="secondary">
					Show Pokemons
				</Button>
			</div>
			<p>{response}</p>
			<div className="grid grid-cols-3">
				{pokemons.length > 0 && (
					<>
						{pokemons.map((pokemon) => (
							<div key={pokemon.name} className="p-4">
								<p>{pokemon.name}</p>
								<Link
									href={pokemon.url}
									className="text-blue-500"
								>
									Link
								</Link>
								<hr />
							</div>
						))}
					</>
				)}
			</div>
		</div>
	);
}
