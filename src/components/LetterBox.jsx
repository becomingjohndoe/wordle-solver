import React from "react";

export default function LetterBox({ reference, letter, addToGuess, index }) {
	return (
		<div className="flex flex-col">
			<div
				ref={reference}
				className="flex items-center justify-center h-16 w-16 border-slate-600 border-2 sm:text-4xl text-4xl font-extrabold p-4 rounded"
			>
				{letter}
			</div>
			<div className="flex flex-col sm:flex-row mt-2 gap-1">
				<div
					onClick={() => {
						addToGuess(reference, reference.current.innerHTML, index, "-", "grey");
					}}
					className="bg-slate-400 h-8 w-full border border-slate-600 rounded cursor-pointer"
				></div>
				<div
					onClick={() => {
						addToGuess(reference, reference.current.innerHTML, index, "O", "yellow");
					}}
					className="bg-yellow-400 h-8 w-full border border-slate-600 rounded cursor-pointer"
				></div>
				<div
					onClick={() => {
						addToGuess(reference, reference.current.innerHTML, index, "X", "green");
					}}
					className="bg-green-400 h-8 w-full border border-slate-600 rounded cursor-pointer"
				></div>
			</div>
		</div>
	);
}
