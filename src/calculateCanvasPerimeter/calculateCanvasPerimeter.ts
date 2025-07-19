export default function calculateCanvasPerimeter(length: string, width: string): number {
  const l = Number(length);
  const w = Number(width);

  if (isNaN(l) || isNaN(w)) return NaN;

  return 2 * (Math.abs(l) + Math.abs(w));
}
