// kotak buat isi

import React from 'react';
import { Player } from '../utils/gameLogic';

interface SquareProps {
  value: Player;
  onSquareClick: () => void;
  isWinningSquare: boolean;
}

export const Square: React.FC<SquareProps> = ({ value, onSquareClick, isWinningSquare }) => {
  return (
    <button
      className={`h-20 w-20 border-2 border-black text-4xl font-bold flex items-center justify-center transition-colors duration-300
        ${isWinningSquare ? 'bg-green-300 scale-100' : 'hover:bg-gray-100 bg-white'} 
      `}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};