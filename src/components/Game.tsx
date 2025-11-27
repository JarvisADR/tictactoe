// src/components/Game.tsx

import React, { useState } from 'react';
import { Board } from './Board';
import { calculateWinner, Player } from '../utils/gameLogic';

export const Game: React.FC = () => {
  const [squares, setSquares] = useState<Player[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

  // Ambil winner DAN line dari fungsi logic
  const { winner, line } = calculateWinner(squares);
  
  const isDraw = !winner && squares.every((square) => square !== null);

  const startGame = (startingSymbol: Player) => {
    setXIsNext(startingSymbol === 'X');
    setIsGameStarted(true);
  };

  const handlePlay = (i: number) => {
    // Cek winner pakai properti .winner karena return valuenya sekarang objek
    if (calculateWinner(squares).winner || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsGameStarted(false);
  };

  if (!isGameStarted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Tic-Tac-Toe</h1>
        <h2 className="text-xl mb-6 text-gray-600">Who starts first?</h2>
        <div className="flex gap-6">
          <button onClick={() => startGame('X')} className="h-32 w-32 bg-blue-600 text-white text-5xl font-bold rounded-xl hover:-translate-y-1 transition">X</button>
          <button onClick={() => startGame('O')} className="h-32 w-32 bg-red-500 text-white text-5xl font-bold rounded-xl hover:-translate-y-1 transition">O</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Tic-Tac-Toe</h1>
      
      <div className="mb-4 text-xl font-semibold">
        {winner 
          ? <span className="text-green-600 font-bold">{winner} Win the game! </span>
          : isDraw 
          ? <span className="text-gray-500">Draw!</span>
          : <span>Next Player: <span className={xIsNext ? "text-blue-600" : "text-red-500"}>{xIsNext ? 'X' : 'O'}</span></span>}
      </div>

      {/* Oper winningLine ke Board */}
      <Board squares={squares} onPlay={handlePlay} winningLine={line} />

      <button
        onClick={resetGame}
        className="mt-8 px-6 py-2 bg-gray-600 text-white rounded-full"
      >
        Back to Menu
      </button>
    </div>
  );
};