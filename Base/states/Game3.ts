var Game3 = function () {
};

Game3.prototype = {

    config: {

        //Background Animation
        dustNumber: 200,

        //Size of the world - used for UI elements
        //These have to be the same as the canvas size
        worldSizeX: 1200,
        worldSizeY: 800,


        //Where to place the Question answered text
        textPlace: 30,

        //Players Information
        //startValue: 0,
        startSpeed: 400,
        endValue: 10,

        //State of the Player
        alive: true,
        lives: 3,
        answerStart: 0,
        startSpeed: 400,


        levels: {
            1: {
                startValue: 1,
                endValue: 10,
                sharks: [
                    {
                        value: 1,
                        initialCount: 2,
                    },
                    {
                        value: 2,
                        initialCount: 10,
                    },
                    {
                        value: 5,
                        initialCount: 5
                    },
                    {
                        value: 7,
                        initialCount: 5
                    },
                    {
                        value: 10,
                        initialCount: 5
                    }
                ],
                eats: [
                    {
                        value: 1,
                        text: '+1',
                        initialCount: 20
                    },
                ]
            },
            2: {
                startValue: 50,
                endValue: 0,
                sharks: [
                    {
                        value: 0,
                        initialCount: 2,
                    },
                    {
                        value: 1,
                        initialCount: 2,
                    },
                    {
                        value: 4,
                        initialCount: 2,
                    },
                    {
                        value: 9,
                        initialCount: 2,
                    },
                    {
                        value: 10,
                        initialCount: 2,
                    },
                    {
                        value: 19,
                        initialCount: 2,
                    },
                    {
                        value: 24,
                        initialCount: 2,
                    },
                    {
                        value: 25,
                        initialCount: 2,
                    },
                    {
                        value: 33,
                        initialCount: 2,
                    },
                    {
                        value: 37,
                        initialCount: 2,
                    },
                    {
                        value: 50,
                        initialCount: 2,
                    },
                    {
                        value: 48,
                        initialCount: 2,
                    }
                ],
                eats: [
                    {
                        value: -1,
                        text: '-1',
                        initialCount: 20
                    },
                    {
                        value: -2,
                        text: '-2',
                        initialCount: 20
                    },
                    {
                        value: -5,
                        text: '-5',
                        initialCount: 20
                    },
                ],
            },
            3: {
                startValue: 0,
                endValue: 50,
                sharks: [
                    {
                        value: 0,
                        initialCount: 1,
                    },
                    {
                        value: 1,
                        initialCount: 1,
                    },
                    {
                        value: 4,
                        initialCount: 1,
                    },
                    {
                        value: 9,
                        initialCount: 1,
                    },
                    {
                        value: 10,
                        initialCount: 1,
                    },
                    {
                        value: 19,
                        initialCount: 1,
                    },
                    {
                        value: 24,
                        initialCount: 1,
                    },
                    {
                        value: 25,
                        initialCount: 1,
                    },
                    {
                        value: 33,
                        initialCount: 1,
                    },
                    {
                        value: 37,
                        initialCount: 1,
                    },
                    {
                        value: 50,
                        initialCount: 1,
                    },
                    {
                        value: 48,
                        initialCount: 1,
                    },

                    {
                        value: 99,
                        initialCount: 1,
                    },
                    {
                        value: 77,
                        initialCount: 1,
                    },
                    {
                        value: 91,
                        initialCount: 1,
                    },
                    {
                        value: 68,
                        initialCount: 1,
                    },
                    {
                        value: 84,
                        initialCount: 1,
                    },
                    {
                        value: -33,
                        initialCount: 1,
                    },
                    {
                        value: -49,
                        initialCount: 1,
                    },
                    {
                        value: -28,
                        initialCount: 1,
                    },
                    {
                        value: -18,
                        initialCount: 1,
                    },
                    {
                        value: -14,
                        initialCount: 1,
                    },
                    {
                        value: -6,
                        initialCount: 1,
                    },
                    {
                        value: 7,
                        initialCount: 1,
                    }
                ],
                eats: [
                    {
                        value: -1,
                        text: '-1',
                        initialCount: 5
                    },
                    {
                        value: -2,
                        text: '-2',
                        initialCount: 5
                    },
                    {
                        value: -5,
                        text: '-5',
                        initialCount: 5
                    },
                    {
                        value: -10,
                        text: '-10',
                        initialCount: 5
                    },
                    {
                        value: 1,
                        text: '+1',
                        initialCount: 5
                    },
                    {
                        value: 2,
                        text: '+2',
                        initialCount: 5
                    },
                    {
                        value: 5,
                        text: '+5',
                        initialCount: 5
                    },
                    {
                        value: 10,
                        text: '+10',
                        initialCount: 5
                    },
                ],
            },
        },
    },

    gameState: {},


    create: function () {

        var levelId = 3;

        this.addWorld();

        this.gameState = {
            currentLevel: levelId,
            currentValue: this.config.levels[levelId].startValue,
            endValue: this.config.levels[levelId].endValue,
            alive: this.config.alive,
            lives: this.config.lives,
            currentSpeed: this.config.startSpeed,
            answered: this.config.answerStart,
            textPlace: this.config.textPlace,
            physicsGroup: this.add.group(),
            sharkGroups: [],
            jellyGroups: [],
            eatGroups: [],
        };

        this._createEntities();

        //has to be added last otherwise things swim over it
        this.addUI();
    },


    update: function () {
        //Player movement
        if (this.game.input.activePointer.isDown) {
            //  400 is the speed it will move towards the mouse
            this.game.physics.arcade.moveToPointer(this.player, this.gameState.currentSpeed);

            //  if it's overlapping the mouse, don't move any more
            if (Phaser.Rectangle.contains(this.player.body, game.input.x, game.input.y)) {
                this.player.body.velocity.setTo(0, 0);
            }
        }
        else {
            this.player.body.velocity.setTo(0, 0);
        }


        if (this.gameState.alive == false) {

        } else {

            for (var i = 0; i < this.gameState.eatGroups.length; ++i) {
                var currentEatGroup = this.gameState.eatGroups[i];

                this.game.physics.arcade.overlap(
                    this.player,
                    currentEatGroup,
                    function (player, eats) {
                        this.eatsCollected(
                            player,
                            eats,
                            currentEatGroup,
                            currentEatGroup.value,
                            currentEatGroup.text,
                            'block'
                        );
                    },
                    null,
                    this
                );
            }


            for (var i = 0; i < this.gameState.sharkGroups.length; ++i) {
                var currentSharkGroup = this.gameState.sharkGroups[i];

                this.game.physics.arcade.overlap(
                    this.player,
                    currentSharkGroup,
                    function (player, shark) {
                        this.sharkAttack(
                            player,
                            shark,
                            currentSharkGroup,
                            currentSharkGroup.value,
                            'enemy'
                        );
                    },
                    null,
                    this
                );
            }

            for (var i = 0; i < this.gameState.jellyGroups.length; ++i) {
                var currentJellyGroup = this.gameState.jellyGroups[i];

                this.game.physics.arcade.overlap(
                    this.player,
                    currentJellyGroup,
                    function (player, jelly) {
                        this.jellyAttack(
                            player,
                            jelly,
                            currentJellyGroup,
                            currentJellyGroup.value,
                            'jelly'
                        );
                    },
                    null,
                    this
                );
            }


            //A colision with a clam
            this.game.physics.arcade.overlap(this.player, this.clamSprite, this.nextLevel, null, this);

        }

    },


    //Functions for Building the Environment

    addWorld: function () {

        //create world bounds, background image and lock to camera
        this.game.world.setBounds(0, 0, 2500, 2500);
        this.bounds = new Phaser.Rectangle(100, 100, 2500, 2500);
        this.background = game.add.tileSprite(0, 0, 1200, 800, 'bg');
        this.background.fixedToCamera = true;

        //enable Input
        this.game.cursors = this.game.input.keyboard.createCursorKeys();


        //The Background aninimated dust particles
        this.dusts = this.add.group();
        this.dustPhysicsGroup = this.game.make.group();

        for (var i = 0; i < this.config.dustNumber; i++) {
            this.dust = this.dusts.create(this.bounds.randomX, this.bounds.randomY, 'blob');
            this.physics.enable(this.dust, Phaser.Physics.ARCADE);
            this.dust.body.velocity.x = game.rnd.integerInRange(-200, 200);
            this.dust.body.velocity.y = game.rnd.integerInRange(-220, 200);
        }

        this._createGroupPhyscis(this.dusts, this.dustPhysicsGroup);


    },

    addUI: function () {
        //Lives in top left corner of the Camera
        this.livesSprite = this.add.sprite(10, 10, 'lives');
        this.livesSprite.fixedToCamera = true;

        this.livesSprite.frame = 2;

        //Score Board - Top Eats
        this.topEatsUI = this.add.image(500, 500, 'eatsUI')
        this.topEatsUI.fixedToCamera = true;
        this.topEatsUI.cameraOffset.setTo(this.config.worldSizeX - 200, 10);

        this.config.scoreValue += 25;

    },

    _createEntities: function () {


        if (this.config.levels[this.gameState.currentLevel].eats){
            var eats = this.config.levels[this.gameState.currentLevel].eats;
            for (var i=0; i < eats.length; ++i){
                var eatsConfig = eats[i];
                this._addAllStaticObjects(eatsConfig.initialCount, this.gameState.eatGroups, eatsConfig.value, eatsConfig.text, 'block')
            }
        }

        if (this.config.levels[this.gameState.currentLevel].sharks){
            var sharks = this.config.levels[this.gameState.currentLevel].sharks;
            for (var i = 0; i < sharks.length; ++i) {
                var sharkConfig = sharks[i];
                this._addAllMovingObjects(sharkConfig.initialCount, this.gameState.sharkGroups, sharkConfig.value, 'enemy');
            }
        }

        if (this.config.levels[this.gameState.currentLevel].jellys) {

            var jellys = this.config.levels[this.gameState.currentLevel].jellys;
            for (var i = 0; i < jellys.length; ++i) {
                var jellyConfig = jellys[i];
                this._addAllMovingObjects(sharkConfig.initialCount, this.gameState.jellyGroups, jellyConfig.value, 'jelly');
            }
        }

        this.addPlayer();
    },

    addPlayer: function () {

        this.player = this.add.sprite(1000, 1000, 'you');

        //Player Physics
        this.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.setSize(75, 75, 0, 0);
        this.player.body.collideWorldBounds = true;
        this.player.body.bounce.x = 1;
        this.player.body.bounce.y = 1;
        this.player.body.minBounceVelocity = 0;

        this.game.camera.follow(this.player);

        //Text on Player - Showing the players value
        this.Number = this.make.text(25, 20, this.config.levels[this.gameState.currentLevel].startValue, {fill: '#000000'});
        this.player.addChild(this.Number);

    },


    //Game Play Functions

    moreLives: function () {
        if (this.gameState.lives < 5) {
            this.gameState.lives += 1;
            this.livesSprite.frame -= 1;

            //if you have more lives you go slower
            this.gameState.currentSpeed -= 80;

        } else {
            this.gameState.lives = 5;
        }

        this.tenToWin();
        console.log(this.gameState.currentSpeed);

    },

    died: function () {
        this.player.frame = 1;
        this.gameState.alive = false;
        this.game.time.events.add(Phaser.Timer.SECOND * 4, this.reBorn, this);

        this.gameState.lives -= 1;

        if (this.gameState.lives <= 0) {
            //you now have full lives and you speed is reset to fastest

            this.gameState.currentSpeed = 0;
            this.gameState.currentSpeed += this.config.startSpeed;
            this.gameState.lives = 5;
        } else {
            //you have less lives so you go faster
            this.gameState.currentSpeed += 80;
            this.livesSprite.frame += 1;
        }
        console.log(this.gameState.currentSpeed);

    },

    reBorn: function () {
        this.player.frame = 0;
        this.gameState.alive = true;
    },

    tenToWin: function () {
        if (this.gameState.answered < 10) {
            this.gameState.answered += 1;
        } else {

            this.addClam();
        }

    },

    addClam: function () {

        this.clamSprite = this.add.sprite(250, 250, 'clam');
        this.physics.enable(this.clamSprite, Phaser.Physics.ARCADE);
        this.clamSprite.enableBody = true;

        this.clamText = this.make.text(65, 50, this.gameState.endValue, {fill: '#FFFFFF'});
        this.clamSprite.addChild(this.clamText);

        this.endingText = this.add.text(400, 600, 'Become ' + this.gameState.endValue + ' and Get to the Clam!', {fill: '#000000'});
        this.endingText.fixedToCamera = true;

        console.log('there is a clam')
        console.log(this.clamSprite.body);


    },

    nextLevel: function () {
        if (this.gameState.currentValue < this.gameState.endValue){
        }else{
            game.state.start('Win');
            console.log('Go to the next level!')
        }
    },



//Creating Moving Objects - Such as sharks or jelly fish or dust
    _addAllMovingObjects: function (amount, groupName, value, image) {
        var group = this.add.group();

        group.value = value;

        groupName.push(group);

        this._createMovingObject(amount, group, value, image);
        this._createGroupPhyscis(group, this.gameState.physicsGroup);
    },

    _createMovingObject: function (amount, groupName, value, image) {
        for (var i = 0; i < amount; i++) {
            this._createMovingObjectAndAddToGroup(groupName, value, image);
        }
    },

    _createMovingObjectAndAddToGroup: function(groupName, value, image){
        var object = groupName.create(this.bounds.randomX, this.bounds.randomY, image);

        this.physics.enable(object, Phaser.Physics.ARCADE);

        //give the object a random speed
        object.body.velocity.x = game.rnd.integerInRange(-200, 200);
        object.body.velocity.y = game.rnd.integerInRange(-220, 200);

        var text = this.make.text(25, 25, value, {fill: '#FFFFFF'});
        object.addChild(text);

    },



//Creating Static Objects - Such as collectabled 'eats'
    _createStaticObject: function (amount, groupName, value, textValue, image) {
        for (var i = 0; i < amount; i++) {
            this._createStaticObjectAndAddToGroup(groupName, value, textValue, image);
        }
    },

    _createStaticObjectAndAddToGroup: function(groupName, value, textValue, image){
        var object = groupName.create(this.bounds.randomX, this.bounds.randomY, image);

        this.physics.enable(object, Phaser.Physics.ARCADE);

        var text = this.make.text(5, 5, textValue, {fill: '#000000'});
        object.addChild(text);

    },

    _addAllStaticObjects: function (amount, groupName, value, textValue, image) {
        var group = this.add.group();

        group.value = value;

        groupName.push(group);

        this._createStaticObject(amount, group, value, textValue, image);
        this._createGroupPhyscis(group, this.gameState.physicsGroup);
    },


//This physics is used for both static and moving objects
    _createGroupPhyscis: function (groupName, physicsGroup) {
        //Some more physics information for the Shark
        physicsGroup = this.game.make.group();
        physicsGroup.create(-50, -50, 'block');
        groupName.add(physicsGroup);

        groupName.setAll('body.collideWorldBounds', true);
        groupName.setAll('body.bounce.x', 1);
        groupName.setAll('body.bounce.y', 1);
        groupName.setAll('body.minBounceVelocity', 0);
    },


    //Functions that happen when a group of object e.g. sharks, jellys, eats have been colldied with

    _addSharkSolvedMath: function (currentValue, sharkValue, worldSizeX, textPlace) {
        this.scoreUI = game.add.text(600, 500, currentValue + ' > ' + sharkValue, {
            fill: "#000000",
            align: "center"
        });
        this.scoreUI.fixedToCamera = true;
        this.scoreUI.cameraOffset.setTo(worldSizeX - 150, 10 + textPlace);

    },

    _addJellySolvedMath: function (currentValue, jellyValue, worldSizeX, textPlace) {
        this.scoreUI = game.add.text(600, 500, currentValue + ' < ' + jellyValue, {
            fill: "#000000",
            align: "center"
        });
        this.scoreUI.fixedToCamera = true;
        this.scoreUI.cameraOffset.setTo(worldSizeX - 150, 10 + textPlace);

    },

    sharkAttack: function (player, shark, sharkGroup, sharkValue, image) {

        if (this.gameState.currentValue <= sharkValue) {
            this.died();
        }
        else {
            shark.kill();
            this._addSharkSolvedMath(this.gameState.currentValue, sharkValue, this.config.worldSizeX, this.gameState.textPlace);

            this.gameState.textPlace += 25;
            this.moreLives();

            this._createMovingObjectAndAddToGroup(sharkGroup, sharkValue, image);
        }
    },

    jellyAttack: function (player, jelly, jellyGroup, jellyValue, image) {

        if (this.gameState.currentValue >= jellyValue) {
            this.died();
        }
        else {
            jelly.kill();
            this._addJellySolvedMath(this.gameState.currentValue, jellyValue, this.config.worldSizeX, this.gameState.textPlace);

            this.gameState.textPlace += 25;
            this.moreLives();

            this._createMovingObjectAndAddToGroup(jellyGroup, jellyValue, image);
        }
    },

    eatsCollected: function(player, eats, groupName, value, textValue, image){
        eats.kill();

        this.gameState.currentValue += (value);

        this._createStaticObjectAndAddToGroup(groupName, value, textValue, image);

        console.log(value);
        console.log(this.gameState.currentValue);

        this.Number.setText(this.gameState.currentValue);
    }

}