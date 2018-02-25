export enum CellType {
  Rock = '#84703e',
  Water = '#53bbc6',
  Grass = '#81bc32',
};

export function valueToType(value: number): CellType {
  if (value > 6) {
    return CellType.Rock;
  } else if (value > 2) {
    return CellType.Grass;
  } else {
    return CellType.Water;
  }
}
