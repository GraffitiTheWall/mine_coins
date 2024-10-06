class mainScene extends Phaser.Scene {
    constructor() {
        super('main')
    }
    preload() {
        this.load.image('coin','assets/mine-coin.png')
        this.load.image('star', 'assets/star.png')
    }
    create() {
        this.add.image(100,215,'coin').setScale(0.3)
        this.add.image(300,215,'coin').setScale(0.3)
        this.add.image(500,215,'coin').setScale(0.3)
        this.add.image(700,215,'coin').setScale(0.3)
        this.add.image(900,215,'coin').setScale(0.3)

        this.add.image(100,500,'star').setScale(0.5)
        this.add.image(900,500,'star').setScale(0.5)

        this.gameTitle = this.add.text(350,50,'mine_coins',{fontSize: '40px', fill: '#fff', fontFamily:'pixels'})
        this.options =  this.add.text(345,300,'< choose_a_level >' ,{fontSize: '25px', fill: '#fff', fontFamily:'pixels'})
        this.options.setInteractive()
        this.options.on('pointerdown', () => {this.scene.start('menu')})
        this.help = this.add.text(375,400,'< how_to_play >',{fontSize: '25px', fill: '#fff', fontFamily: 'pixels'})
        this.help.setInteractive()
        this.help.on('pointerdown', ()=> this.scene.start('how-to-play'))

    }
    update() {

    }
}
export default mainScene;