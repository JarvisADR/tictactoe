// src/utils/gameLogic.ts
export type Player = 'X' | 'O' | null;

// Kita tambahkan interface baru untuk hasil
export interface WinResult {
  winner: Player;
  line: number[] | null;
}

export function calculateWinner(squares: Player[]): WinResult {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertikal
    [0, 4, 8], [2, 4, 6]             // Diagonal
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // Kembalikan object, bukan cuma string
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  
  // Jika tidak ada pemenang, kembalikan object kosong
  return { winner: null, line: null };
}