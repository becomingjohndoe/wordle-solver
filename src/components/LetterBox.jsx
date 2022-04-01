import React from "react";

export default function LetterBox({ reference, letter, addToGuess, index }) {
	return (
		<div className="flex flex-col">
			<div
				ref={reference}
				className=" h-auto w-auto border-slate-600 border-2 sm:text-4xl text-4xl text-center font-extrabold p-4"
			>
				{letter}
			</div>
			<div className="flex flex-col sm:flex-row gro">
				<div
					onClick={() => {
						addToGuess(reference, reference.current.innerHTML, index, "-", "grey");
					}}
					className="bg-slate-400 h-8 w-full border border-slate-600"
				></div>
				<div
					onClick={() => {
						addToGuess(reference, reference.current.innerHTML, index, "O", "yellow");
					}}
					className="bg-yellow-400 h-8 w-full border border-slate-600"
				></div>
				<div
					onClick={() => {
						addToGuess(reference, reference.current.innerHTML, index, "X", "green");
					}}
					className="bg-green-400 h-8 w-full border border-slate-600"
				></div>
			</div>
		</div>
	);
}
