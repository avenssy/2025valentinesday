"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Game() {
  const router = useRouter();
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "Aven" : "Sandra";
    setBoard(newBoard);
    setIsXNext(!isXNext);
    checkWinner(newBoard);
  };

  const checkWinner = (board: string[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (let [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
    if (!board.includes("")) {
      setWinner("Draw");
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill("")); 
    setIsXNext(true);
    setWinner(null);
  };

  const handleExitClick = () => {
    router.push("/");
  }

  const renderCell = (cell: string) => {
    if (cell === "Aven") {
      return <Image src="/aven-game-pic.png" width={50} height={50} alt="Aven Pic" />;
    } else if (cell === "Sandra") {
      return <Image src="/sandra-game-pic.png" width={60} height={60} alt="Sandra Pic" />;
    }
    return null; // Empty cell
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-rose-200">
      <button 
        type="button" 
        className="absolute top-5 left-5 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={handleExitClick}
      >
        Exit
      </button>
      <h1 className="text-4xl font-bold mb-6 text-black">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-1 mb-4 text-black">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="w-20 h-20 bg-white border-2 border-gray-500 rounded flex items-center justify-center"
          >
            {renderCell(cell)}
          </button>
        ))}
      </div>
      <div className="mb-4 text-xl font-semibold text-black">
        {winner ? (winner === "Draw" ? "It's a Draw!" : `${winner} Wins!`) : `Next Player: ${isXNext ? "Aven" : "Sandra"}`}
      </div>
      <button
        onClick={handleReset}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Restart Game
      </button>
    </div>
  );
}