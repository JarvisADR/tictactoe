import React from 'react';
import { Player } from '../utils/gameLogic';

interface SquareProps {
  value: Player;
  onSquareClick: () => void;
}

// Menggunakan React.FC (Functional Component) dengan Typing yang ketat
export const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <button
      className="h-20 w-20 border-2 border-gray-400 text-4xl font-bold flex items-center justify-center hover:bg-gray-100 transition-colors"
      onClick={onSquareClick}
    >
      {/* Jika value null, render string kosong agar rapi */}
      {value}
    </button>
  );
};