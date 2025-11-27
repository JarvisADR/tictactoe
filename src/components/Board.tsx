// src/components/Board.tsx
import React from 'react';
import { Square } from './Square';
import { Player } from '../utils/gameLogic';

interface BoardProps {
  squares: Player[];
  onPlay: (index: number) => void;
  winningLine: number[] | null;
}

export const Board: React.FC<BoardProps> = ({ squares, onPlay, winningLine }) => {
  return (
    <div className="grid grid-cols-3 gap-1 bg-black border-4 border-black">
      {squares.map((squareValue, index) => {
        const isWinningSquare = winningLine?.includes(index) ?? false;
        return (
          <Square
            key={index}
            value={squareValue}
            onSquareClick={() => onPlay(index)}
            isWinningSquare={isWinningSquare}
          />
        );
      })}
    </div>
  );
};