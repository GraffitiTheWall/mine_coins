class menuScene extends Phaser.Scene {
    constructor() {
        super('menu')
    }
    preload() {

    }
    create() {
        this.level1 = this.add.text(50,50, 'Level 1: Tunnel Ferocious - Nashville, Tennessee.')
        this.level1.setInteractive()
        this.level1.on('pointerdown', () => {this.scene.start('level1')})

        this.level2 = this.add.text(50,75, 'Level 2: Tunnel Down - Houston, Texas.')
        this.level2.setInteractive()
        this.level2.on('pointerdown', () => {this.scene.start('level2')})

        this.back = this.add.text(450,500, 'Go Back', {fill: '#fff', fontSize:'32px', fontFamily:'pixels_small'})
        this.back.setInteractive()
        this.back.on('pointerdown', () => {this.scene.start('main')})
    }
    update() {

    }
}
export default menuScene;