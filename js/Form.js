class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "título do jogo");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120, 160);
    this.input.position(width / 2 - 110, height / 2 + 50);
    this.playButton.position(width / 2, height / 2 + 80);
    this.greeting.position(width / 2 - 300, height / 2 + 100);
  }


  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
      this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Olá ${this.input.value()}
      </br>espere outro jogador entrar...`;
      this.greeting.html(message);
      playerCount += 1; //novo
      player.name = this.input.value(); 
      player.index = playerCount; 
      player.updateCount(playerCount);
      player.addPlayer();
      player.getDistance();
    });
  }

  display() {
   this.setElementsPosition();
    //this.setElementsStyle();
    this.handleMousePressed();
  }
}
