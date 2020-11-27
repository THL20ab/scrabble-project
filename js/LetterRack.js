export default class LetterRack {
  tiles = [];

  render() {
    let $gamePage = $('#gamePage');
    $gamePage.append('<div id="letterRack"></div>');
  }
}