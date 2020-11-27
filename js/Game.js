import Board from "./Board.js";
import TileBag from "./TileBag.js";
import Player from "./Player.js";
import { getTileDivDatasetAsObject } from "./Helpers/TileHelper.js";

export default class Game {
  board = new Board();
  bag = new TileBag();
  players = [];
  running = false;

  async start() { this.init(); }

  game() {
    this.update();
    this.render();
    //this.currentPlayer = this.players[0];
    //this.render();
  }

  update() {
    this.numberOfPlayers = this.players.length;
    this.currentRound = 1;
    this.currentTurn = 1;
    this.currentPlayer = this.getPlayer(0);

    console.log(this.currentPlayer.getName());
  }

  render() {
    this.board.render();
    this.currentPlayer.render();
    /*
    $players.append(this.currentPlayer.render());
    if (this.tiles.length < 7) {
      $('#changeTilesButton').hide();
    }

    $('.tiles').html(
      this.tiles.map(x => `<div>${x.char}</div>`).join('')
    );

    this.addDragEvents();
    */
  }

  displayNamePlayerForm() {
    let inputFields = [
      { label: 'Player 1', id: 'player_1', required: true },
      { label: 'Player 2', id: 'player_2', required: true },
      { label: 'Player 3', id: 'player_3', required: false },
      { label: 'Player 4', id: 'player_4', required: false }
    ]
    let formContainer = $('<div id="namePlayers"></div>');
    let form = $('<form id="namePlayersForm"></form>');
    for (let field of inputFields) {
      form.append(`
        <div>
        <label for="${field.id}"><span>${field.label}</span></lable>
        <input type="text" id="${field.id}" placeholder="Write name here..." minlength="2" ${field.required ? 'required' : ''}>
        </div>
      `)
    }
    form.append(`<button class="startGameButton" name="startGame" id="startGame" type="submit">start game</button>`);
    formContainer.append(form);
    $('#startPage').append(formContainer);
  }

  startGameButtonListener() {
    let that = this;
    function submitForm(e) {
      e.preventDefault();
      let playerIDs = ['player_1', 'player_2', 'player_3', 'player_4'];
      that.players = [];
      for (let playerID of playerIDs) {
        let playerName = $('#' + playerID).val();
        if (playerName.length > 0) { that.players.push(new Player(playerName)) };
      }
      $('#startPage').hide();
      $('#gamePage').show();
      $('header').animate({ "font-size": "15px", "padding": "5px" });
      $('footer').animate({ "font-size": "10px", "padding": "3px" });
      that.game();
    }
    let form = document.getElementById('namePlayersForm');
    form.addEventListener('submit', submitForm);
  }

  init() {
    $('#gamePage').hide();
    this.displayNamePlayerForm();
    this.startGameButtonListener();
  }

  getPlayers() { return this.players; }
  getPlayer(id) { return this.getPlayers()[id]; }
}
