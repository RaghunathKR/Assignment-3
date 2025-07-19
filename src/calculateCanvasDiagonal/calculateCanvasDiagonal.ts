export default function calculateCanvasDiagonal(length: string, width: string): number {
  const l = Number(length);
  const w = Number(width);

  if (isNaN(l) || isNaN(w)) return NaN;

  return Math.sqrt(Math.pow(Math.abs(l), 2) + Math.pow(Math.abs(w), 2));
}
