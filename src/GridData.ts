import { create as randomSeed } from 'random-seed';

export type Grid = Array<Row>;
type Row = Array<Cell>;
type Cell = number;

export default class GridData {
  seed: string;
  size: number;
  random: any; // TODO: figure out how to type this
  data: Grid;

  constructor (seed: string, size: number) {
    this.seed = seed;
    this.size = size;
    this.random = randomSeed(seed);
    this.data = this.generate();
  }

  private generate (): Grid {
    const grid = new Array(this.size).fill(this.size);
    return grid.map(this.generateRow.bind(this));
  }

  private generateRow (): Row {
    const row = new Array(this.size).fill(0);
    return row.map((_) => this.random.range(10));
  }
}
