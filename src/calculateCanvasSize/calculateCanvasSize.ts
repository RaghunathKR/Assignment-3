export default function calculateCanvasSize(length: string, width: string): number {
  const l = Number(length);
  const w = Number(width);

  if (isNaN(l) || isNaN(w)) return NaN;

  return l * w;
}
