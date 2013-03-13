ig.module(
    'game.main'
)
.requires(
    'impact.game',
    'impact.font',
    'game.entities.piece1',
    'game.entities.piece2',
    'game.entities.piece3',
    'game.entities.piece4',
    'game.entities.piece5',
    'game.entities.piece6',
    'game.entities.piece7',
    'game.entities.piece8'
)
.defines(function(){

MyGame = ig.Game.extend({
    font: new ig.Font( 'media/04b03.font.png' ),
    init: function() {
        ig.input.bind(ig.KEY.MOUSE1, 'click');
        // ig.game.spawnEntity('EntityPiece1', 0, 0, {name: "thomas1"});
        // ig.game.spawnEntity('EntityPiece2', 201, 0, {name: "thomas2"});
        // ig.game.spawnEntity('EntityPiece3', 341, 0, {name: "thomas3"});
        // ig.game.spawnEntity('EntityPiece4', 627, 0, {name: "thomas4"});
        // ig.game.spawnEntity('EntityPiece5', 760, 0, {name: "thomas5"});
        // ig.game.spawnEntity('EntityPiece6', 0, 136, {name: "thomas6"});
        // ig.game.spawnEntity('EntityPiece7', 147, 198, {name: "thomas7"});
        // ig.game.spawnEntity('EntityPiece8', 396, 149, {name: "thomas8"});
        ig.game.spawnEntity('EntityPiece1', 132, 434, {name: "thomas1"});
        ig.game.spawnEntity('EntityPiece2', 2341, 543, {name: "thomas2"});
        ig.game.spawnEntity('EntityPiece3', 432, 0, {name: "thomas3"});
        ig.game.spawnEntity('EntityPiece4', 627, 434, {name: "thomas4"});
        ig.game.spawnEntity('EntityPiece5', 760, 54, {name: "thomas5"});
        ig.game.spawnEntity('EntityPiece6', 0, 136, {name: "thomas6"});
        ig.game.spawnEntity('EntityPiece7', 147, 198, {name: "thomas7"});
        ig.game.spawnEntity('EntityPiece8', 396, 149, {name: "thomas8"});
    },
    draw: function() {
        this.parent();
        var x = ig.system.width/2,
            y = ig.system.height/2;
        this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
    }
});
ig.main( '#canvas', MyGame, 60, 1024, 836, 1 );
});
