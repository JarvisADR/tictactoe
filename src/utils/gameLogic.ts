// Tipe data untuk nilai kotak: X, O, atau null
export type Player = 'X' | 'O' | null;

export function calculateWinner(squares: Player[]): Player {
  // Semua kemungkinan garis kemenangan [a, b, c]
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertikal
    [0, 4, 8], [2, 4, 6]             // Diagonal
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // Cek apakah kotak a ada isinya, dan sama dengan b & c
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}