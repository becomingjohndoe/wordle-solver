import { useState, useRef } from "react";
import Footer from "./Footer";
import guesses from "../constants/valid-guesses";
import LetterBox from "./LetterBox";
import wordle from "../images/wordle.gif";
const incorrect = [];
export const getGuess = (guess) => {
	const correct = [];

	const wrongPlace = [];
	for (const key in guess) {
		if (guess[key][0] === "X") {
			correct.push([guess[key][1], key]);
		}
		if (guess[key][0] === "O") {
			wrongPlace.push([guess[key][1], key]);
		}
		if (guess[key][0] === "-") {
			incorrect.push([guess[key][1], key]);
		}
	}
	const nextGuesses = guesses.filter((g) => {
		const upper = g.toUpperCase();
		if (correct.every((c) => g[c[1]].toUpperCase() === c[0])) {
			if (incorrect.every((i) => !upper.includes(i[0]))) {
				if (wrongPlace.every((w) => upper.includes(w[0]) && upper[w[1]] !== w[0])) {
					return g;
				}
			}
		}
		return false;
	});
	return nextGuesses;
};

export default function Home() {
	const letterOne = useRef(null);
	const letterTwo = useRef(null);
	const letterThree = useRef(null);
	const letterFour = useRef(null);
	const letterFive = useRef(null);
	const [guess, setGuess] = useState({
		0: [],
		1: [],
		2: [],
		3: [],
		4: [],
	});
	const [next, setNext] = useState();
	const [input, setInput] = useState("SOLVE");

	const resetColors = () => {
		letterOne.current.style.backgroundColor = "white";
		letterTwo.current.style.backgroundColor = "white";
		letterThree.current.style.backgroundColor = "white";
		letterFour.current.style.backgroundColor = "white";
		letterFive.current.style.backgroundColor = "white";
	};

	const addToGuess = (ref, letter, index, symbol, colour) => {
		const newGuess = { ...guess };
		newGuess[index] = [symbol, letter];
		setGuess(newGuess);
		ref.current.style.backgroundColor = colour;
	};

	return (
		<>
			{/* HEADER */}
			<div className="mb-10 flex flex-col items-center justify-center h-full">
				<div className="absolute text-slate-800 drop-shadow-2xl shadow-white sm:text-6xl text-4xl z-10 font-semibold">
					WORDLE SOLVER
				</div>
				<img className="h-40 w-full object-cover opacity-50" src={wordle} alt="" />
			</div>
			{/* MAIN */}
			<div className="flex flex-col items-center font-sans">
				{/* INPUT */}
				<span className="text-2xl mb-2 font-medium text-slate-600">
					1. INPUT YOUR GUESS
				</span>
				<input
					onChange={(e) => {
						if (e.target.value.length < 5) resetColors();
						setInput(e.target.value.toUpperCase());
					}}
					className="border-2 border-slate-700 uppercase text-center text-2xl sm:text-4xl font-semibold"
					type="text"
					name=""
					id=""
					defaultValue="SOLVE"
					maxLength={5}
				/>
				{/* COLOUR SELECTOR */}
				<span className="text-2xl my-2 font-medium text-slate-600">
					2. SELECT COLOURS
				</span>
				<div className="flex sm:gap-6 gap-3 mt-4">
					<LetterBox
						reference={letterOne}
						index={0}
						letter={input[0]}
						addToGuess={addToGuess}
					/>
					<LetterBox
						reference={letterTwo}
						index={1}
						letter={input[1]}
						addToGuess={addToGuess}
					/>
					<LetterBox
						reference={letterThree}
						index={2}
						letter={input[2]}
						addToGuess={addToGuess}
					/>
					<LetterBox
						reference={letterFour}
						index={3}
						letter={input[3]}
						addToGuess={addToGuess}
					/>
					<LetterBox
						reference={letterFive}
						index={4}
						letter={input[4]}
						addToGuess={addToGuess}
					/>
				</div>
				{/* Guess Button */}
				<span className="text-2xl mt-8 font-medium text-slate-600">
					3. GET SUGGESTIONS
				</span>
				<button
					onClick={() => {
						setNext(getGuess(guess));
					}}
					className="w-auto bg-slate-600 border p-2 mt-2 border-slate-400 text-slate-50 text-2xl"
				>
					GO
				</button>
				{/* NEXT Guesses */}

				<div className="flex flex-col">
					{next && next.length ? (
						<div className="flex flex-wrap gap-2 p-10 max-h-96 overflow-hidden">
							{next.slice(0, 10).map((n, i) => (
								<div key={i} className="text-2xl border border-slate-600 p-4">
									{n}
								</div>
							))}
						</div>
					) : (
						<div className="mt-5">No Suggestions!</div>
					)}
				</div>
				{/* RESTART */}
				<div className="flex flex-col items-center">
					<span className="text-2xl my-2 font-medium text-slate-600">
						4. FOUND SOLUTION?
					</span>
					<button className="w-auto whitespace-nowrap border p-2 mt-4 border-slate-400 text-slate-50 text-2xl bg-slate-600">
						<a href="/">NEW WORD</a>
					</button>
				</div>
				{/* FOOTER */}
				<Footer />
			</div>
		</>
	);
}
