import React, { useState } from 'react';
import { Board } from './Board';
import { calculateWinner, Player } from '../utils/gameLogic';

export const Game: React.FC = () => {
  // State: Array panjang 9 diisi null
  const [squares, setSquares] = useState<Player[]>(Array(9).fill(null));
  // State: Giliran siapa sekarang? (Default true = X)
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);

  const handlePlay = (i: number) => {
    // 1. Validasi: Jika sudah ada pemenang ATAU kotak sudah terisi, stop.
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    // 2. Immutability: Copy array lama ke array baru
    const nextSquares = squares.slice();
    
    // 3. Update kotak yang diklik
    nextSquares[i] = xIsNext ? 'X' : 'O';

    // 4. Simpan state baru
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Tic-Tac-Toe</h1>
      
      <div className="mb-4 text-xl font-semibold">
        {winner 
          ? `Winner: ${winner} 🎉` 
          : isDraw 
          ? "It's a Draw! 🤝" 
          : `Next Player: ${xIsNext ? 'X' : 'O'}`}
      </div>

      <Board squares={squares} onPlay={handlePlay} />

      <button
        onClick={resetGame}
        className="mt-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Reset Game
      </button>
    </div>
  );
};