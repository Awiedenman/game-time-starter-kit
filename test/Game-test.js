const chai = require('chai');
const expect = chai.expect;
const Bells = require('../lib/Bells');
// const Rabbit = require('../lib/Rabbit');
const Game = require('../lib/Game');

describe('Game', () => {
  let game;

  beforeEach(() => {
    let context = 0;

    game = new Game(context);
  });

  it('should instantiate our good friend Game', () => {
    expect(game).to.exist;
  });

  it('should instantiate a new instance of our wonderful friend Rabbit', () => {
    expect(game.rabbit).to.exist;
  }); 

  it('should have a property of score with and intial value of 0', () => {
    expect(game.score).to.equal(0);
  });

  it('should have a property of bells with an initial value of an empty array', () => {
    expect(game.bells).to.deep.equal([]);
  });

  it('should have a property of runGameLoop with an intial value false', () => {
    expect(game.runGameLoop).to.equal(false);
  });

  it('should add 10 to the score everytime you hit a bell', () => {
    game.scoring();

    expect(game.score).to.equal(10);
  });

  it('should shift all bells downward on contact', () => {
    game.bells = [new Bells(10, 10, 10, 10)];

    game.scrolling();
        
    expect(game.bells).to.deep.equal([new Bells(10, 60, 10, 10)]);
  });

  it('should toggle the property of runGameLoop off and on', () => {
    game.toggleGameLoop();

    expect(game.runGameLoop).to.equal(true);
  });

  it('should set the y value for rabbit back to 300 after the new level starts', () => {
    game.rabbit.y = -10;

    game.startNextLevel();

    expect(game.rabbit.y).to.equal(300);
  }); 

  it('should raise the variable of Frequency by 50 when startNextLevel is invoked', () => {
    expect(game.frequency).to.equal(25);

    game.startNextLevel();

    expect(game.frequency).to.equal(75);
  });

  it('should push an object into the bells when the generateRandomBells method is invoked', () => {
    expect(game.bells).to.be.an('array').that.is.empty;

    game.generateRandomBells();

    expect(game.bells).to.be.an('array').that.has.lengthOf(1);
  });
});
