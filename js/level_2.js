class level2 extends Phaser.Scene {
    constructor() {
        super('level2')
        this.vel = 5000
        this.wall_vel = 15
        this.BORDER_LEFT = 208.5
        this.BORDER_RIGHT = 789.5
        this.addition = 0
        this.score = 0
    }
    preload() {
       this.load.image('star', 'assets/star.png')
       this.load.image('wall', 'assets/wall.png')
       this.load.image('spike', 'assets/spike.png')
    }
    create() {
        function create_assets(spikes,hit_boxes) {
            let b_left = 208.5
            let b_right = 789.5
            let x_chr = 75
            let time = 0
            spikes.create(b_left-5,1500, 'spike').setScale(0.5).setRotation(1.55)
            hit_boxes.create(b_left-5-x_chr,1500, 'spike').setScale(0.3).setRotation(1.55)
            time += 250
            setTimeout(() => {spikes.create(b_right+5,1500, 'spike').setScale(0.5).setRotation(-1.55)},time)
            setTimeout(() => {hit_boxes.create(b_right+5+x_chr,1500, 'spike').setScale(0.3).setRotation(-1.55)},time)
            time += 250
            setTimeout(() => {spikes.create(b_left-5,1500, 'spike').setScale(0.5).setRotation(1.55)},time)
            setTimeout(() => {hit_boxes.create(b_left-5-x_chr,1500, 'spike').setScale(0.3).setRotation(1.55)},time)
            time += 450
            setTimeout(() => {spikes.create(b_right+5,1500, 'spike').setScale(0.5).setRotation(-1.55)},time)
            setTimeout(() => {hit_boxes.create(b_right+5+x_chr,1500, 'spike').setScale(0.3).setRotation(-1.55)},time)
            time += 250
            setTimeout(() => {spikes.create(b_left-5,1500, 'spike').setScale(0.5).setRotation(1.55)},time)
            setTimeout(() => {hit_boxes.create(b_left-5-x_chr,1500, 'spike').setScale(0.3).setRotation(1.55)},time)
            time += 450
            setTimeout(() => {spikes.create(b_right+5,1500, 'spike').setScale(0.5).setRotation(-1.55)},time)
            setTimeout(() => {hit_boxes.create(b_right+5+x_chr,1500, 'spike').setScale(0.3).setRotation(-1.55)},time)
            time += 250
            setTimeout(() => {spikes.create(b_left-5,1500, 'spike').setScale(0.5).setRotation(1.55)},time)
            setTimeout(() => {hit_boxes.create(b_left-5-x_chr,1500, 'spike').setScale(0.3).setRotation(1.55)},time)
            time += 650
            setTimeout(() => {spikes.create(b_right+5,1500, 'spike').setScale(0.5).setRotation(-1.55)},time)
            setTimeout(() => {hit_boxes.create(b_right+5+x_chr,1500, 'spike').setScale(0.3).setRotation(-1.55)},time)
            time += 650
            setTimeout(() => {spikes.create(b_left-5,1500, 'spike').setScale(0.5).setRotation(1.55)},time)
            setTimeout(() => {hit_boxes.create(b_left-5-x_chr,1500, 'spike').setScale(0.3).setRotation(1.55)},time)
            time += 650
            setTimeout(() => {spikes.create(b_right+5,1500, 'spike').setScale(0.5).setRotation(-1.55)},time)
            setTimeout(() => {hit_boxes.create(b_right+5+x_chr,1500, 'spike').setScale(0.3).setRotation(-1.55)},time)
            time += 650
            setTimeout(() => {spikes.create(b_left-5,1500, 'spike').setScale(0.5).setRotation(1.55)},time)
            setTimeout(() => {hit_boxes.create(b_left-5-x_chr,1500, 'spike').setScale(0.3).setRotation(1.55)},time)
            time += 250
            setTimeout(() => {spikes.create(b_right+5,1500, 'spike').setScale(0.5).setRotation(-1.55)},time)
            setTimeout(() => {hit_boxes.create(b_right+5+x_chr,1500, 'spike').setScale(0.3).setRotation(-1.55)},time)
            time += 250
            setTimeout(() => {spikes.create(b_left-5,1500, 'spike').setScale(0.5).setRotation(1.55)},time)
            setTimeout(() => {hit_boxes.create(b_left-5-x_chr,1500, 'spike').setScale(0.3).setRotation(1.55)},time)
            time += 250
            setTimeout(() => {spikes.create(b_right+5,1500, 'spike').setScale(0.5).setRotation(-1.55)},time)
            setTimeout(() => {hit_boxes.create(b_right+5+x_chr,1500, 'spike').setScale(0.3).setRotation(-1.55)},time)
            time += 250
            setTimeout(() => {spikes.create(b_left-5,1500, 'spike').setScale(0.5).setRotation(1.55)},time)
            setTimeout(() => {hit_boxes.create(b_left-5-x_chr,1500, 'spike').setScale(0.3).setRotation(1.55)},time)


            
        }
        this.hero = this.physics.add.sprite(208.5,200, 'star').setScale(0.7)
        this.hero.setGravityY(-300)
        this.hero.setCollideWorldBounds(true)
        this.walls = this.physics.add.group()
        this.walls.create(62,900, 'wall').setScale(0.5).setGravityY(-300)
        this.walls.create(936,900, 'wall').setScale(0.5).setGravityY(-300)
        this.physics.add.collider(this.hero, this.walls)
        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        this.spikes = this.physics.add.group()
        this.hit_boxes = this.physics.add.group()
        create_assets(this.spikes, this.hit_boxes)
        this.physics.add.collider(this.hero,this.hit_boxes, () => {this.physics.pause(); 
                                                                this.wall_vel =0;
                                                                var highestTimeoutId = setTimeout(";");
                                                                    for (var i = 0 ; i < highestTimeoutId ; i++) {
                                                                        clearTimeout(i); 
                                                                    }
                                                                this.tt = this.add.text(415,500,'Try again?', {fill:'#fff', fontSize:'32px', fontFamily:'pixels_small'});
                                                                this.tt.setInteractive()
                                                                this.tt.on('pointerdown', () => {
                                                                    this.vel = 5000
                                                                    this.wall_vel = 15
                                                                    this.BORDER_LEFT = 208.5
                                                                    this.BORDER_RIGHT = 789.5
                                                                    this.addition = 0
                                                                    this.score = 0
                                                                    this.scene.start('level2')})
                                                                this.go_back = this.add.text(385,550,'Go Back To Menu.', {fill:'#39FF14', fontSize:'32px', fontFamily:'pixels_small'})
                                                                this.go_back.setInteractive()
                                                                this.go_back.on('pointerdown', ()=>{
                                                                    this.vel = 5000;
                                                                    this.wall_vel = 15;
                                                                    this.BORDER_LEFT = 208.5;
                                                                    this.BORDER_RIGHT = 789.5;
                                                                    this.addition = 0;
                                                                    this.score = 0;
                                                                    this.scene.start('main')})},null,this)
        this.physics.add.overlap(this.hero,this.pockets, () => {this.score += 1;
                                                                this.text.setText(`You have: ~${this.score}~ mine coins.`)
        })
        this.text = this.add.text(300,50, `You have: ~${this.score}~ mine coins.`, {fontSize: '32px', fill:'#03cffc',fontFamily: 'pixels_small'})
        

    }
    update() {
        this.cursors = this.input.keyboard.createCursorKeys()

        if (this.space.isDown) {
            if (this.hero.x == this.BORDER_LEFT) {
                this.hero.setVelocityX(this.vel)
        
            } else if (this.hero.x == this.BORDER_RIGHT) {
                this.hero.setVelocityX(-this.vel)
                

            }


        }
        this.hit_boxes.children.iterate((hit_box) => {
            hit_box.y -= this.wall_vel
            hit_box.setGravityY(-300)
            hit_box.visible = false
        })
        this.spikes.children.iterate((spike) => {
            spike.y -= this.wall_vel
            spike.setGravityY(-300)
        })

        if (this.wall_vel >= 8) {
            this.addition = 50 * this.wall_vel
        } 
        this.walls.children.iterate((wall) => {
            try {
                wall.setImmovable()
                wall.y -= this.wall_vel
                
                if (wall.y == (900 - this.wall_vel*70) + this.addition) {
                    this.walls.create(wall.x, 900, 'wall').setScale(0.5).setGravityY(-300)
                } else if (wall.y < -300) {
                    wall.destroy()
                }
            }
            
            catch(err) {
                null
            }

        })
    }
}
export default level2;