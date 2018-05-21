import React, { Component } from 'react'
import { Slat } from '../Styles';
import { dropScript } from '../util';

export default class Play extends Component {
  state = {
    loaded: false
  }
  setup = () => {
    const Phaser = window.Phaser;
    const CONFIG = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 500 },
          debug: false
        }
      },
      scene: {
        key: 'main',
        preload: () => {},
        create: () => {},
        update: () => {}
      }
    };
    this.game = new Phaser.Game(CONFIG, 800, 600, Phaser.CANVAS, 'phaser-root', {
      preload: this.preload,
      create: this.create,
    });
    window.game = this.game;
  }
  preload = () => {
    const { game } = this; 
    game.stage.backgroundColor = '#2d2d2d';

  }
  componentDidMount = () => {
    dropScript('//cdn.jsdelivr.net/npm/phaser@3.5.1/dist/phaser.js', () => {
      this.setState({ loaded: true });
      this.setup();
    });
  }
  
  render() {
    return (
      <Slat>
        <div id="phaser-root"></div>
      </Slat>
    );
  }
}