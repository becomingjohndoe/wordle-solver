import React from "react";

export default function LetterBox({ reference, letter, addToGuess, index }) {
	return (
		<div className="flex flex-col">
			<div
				ref={reference}
				className="h-24 w-24 border-slate-600 border-2 text-8xl text-center font-extrabold"
			>
				{letter}
			</div>
			<div className="flex ">
				<div
					onClick={() => {
						addToGuess(reference, reference.current.innerHTML, index, "-", "grey");
					}}
					className="bg-slate-400 h-8 w-8"
				></div>
				<div
					onClick={() => {
						addToGuess(reference, reference.current.innerHTML, index, "O", "yellow");
					}}
					className="bg-yellow-400 h-8 w-8"
				></div>
				<div
					onClick={() => {
						addToGuess(reference, reference.current.innerHTML, index, "X", "green");
					}}
					className="bg-green-400 h-8 w-8"
				></div>
			</div>
		</div>
	);
}
