ig.module( 
	'game.entities.piece5' 
)
.requires(
	'game.entities.basePiece'
)
.defines(function(){
EntityPiece5 = EntityBasePiece.extend({
	animSheet: new ig.AnimationSheet('media/thomas5.png'),
    init: function (x, y, settings) {
        this.size = {x: 268, y: 226};
        this.origin = {x: 760, y: 0};
        this.parent(x, y, settings);
    }
});
});
