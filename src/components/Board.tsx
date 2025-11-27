import React from 'react';
import { Square } from './Square';
import { Player } from '../utils/gameLogic';

interface BoardProps {
  squares: Player[];
  onPlay: (index: number) => void;
}

export const Board: React.FC<BoardProps> = ({ squares, onPlay }) => {
  return (
    <div className="grid grid-cols-3 gap-1 bg-gray-300 border-4 border-gray-500">
      {/* Kita map array squares ke komponen Square */}
      {squares.map((squareValue, index) => (
        <Square
          key={index}
          value={squareValue}
          onSquareClick={() => onPlay(index)}
        />
      ))}
    </div>
  );
};