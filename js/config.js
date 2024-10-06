import level1 from './level_1.js'
import level2 from './level_2.js';
import mainScene from './main.js';
import menuScene from './menu.js'
import howToPlay from './how-to-play.js'


var config = {
    type: Phaser.AUTO,
    width:1000,
    height:600,
    backgroundColor: 0x384b6b,
    scene: [mainScene,menuScene,level1,level2, howToPlay],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: false
            
        }
    },

};

export default config;