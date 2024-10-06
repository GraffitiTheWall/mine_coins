class howToPlay extends Phaser.Scene {
    constructor() {
        super('how-to-play')
    }
    preload() {

    }
    create() {
        this.add.text(50,50, 'MINE_COINS  is  a  game  about  a  young  ninja  looking  for\nmine_coins, which  is  the  currency  of the  city  he/she\nlives  in,  Scrapex City.  To  do s o,  he/she  travels\nthroughout  America\'s  tunnels  (where  the\nmine_coins  are  located  in)  to  look  for  them.', {fill:'#fff', fontSize:'32px', fontFamily:'pixels_small'})
        this.add.text(50,200, '\nYou are the ninja.', {fill:'#fff', fontSize:'32px', fontFamily:'pixels'})
        this.add.text(50,275, 'You capture the mine_coins.', {fill:'#fff', fontSize:'32px', fontFamily:'pixels'})

        this.add.text(50, 300, '\nKEYS: Press space to jump. Avoid the spikes. Capture as many \ncoins as you can.',{fill:'#fff', fontSize:'32px', fontFamily:'pixels_small'})
        this.back = this.add.text(450,500, 'Go Back', {fill: '#fff', fontSize:'32px', fontFamily:'pixels_small'})
        this.back.setInteractive()
        this.back.on('pointerdown', () => {this.scene.start('main')})
    }
    update() {

    }
}
export default howToPlay;