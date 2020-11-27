export default class TileBag {
  tiles = [];

  tilesFromFile() {
    this.tiles = [];
    // Read the tile info from file
    ($.get('tiles.txt'))
      .split('\r').join('') // 
      .split('\n').forEach(x => {
        x = x.split(' ');
        x[0] = x[0] === '_' ? ' ' : x[0];
        // add tiles to this.tiles
        while (x[2]--) {
          this.tiles.push({ char: x[0], points: +x[1] })
        }
      });
  }

  shuffle() {
    // Shuffle in random order
    this.tiles.sort(() => Math.random() - 0.5);
  }
}