ig.module( 
	'game.entities.piece3' 
)
.requires(
	'game.entities.basePiece'
)
.defines(function(){
EntityPiece3 = EntityBasePiece.extend({
	animSheet: new ig.AnimationSheet('media/thomas3.png'),
    init: function (x, y, settings) {
        this.size = {x: 346, y: 221};
        this.origin = {x: 341, y: 0};
        this.parent(x, y, settings);
    }
});
});
