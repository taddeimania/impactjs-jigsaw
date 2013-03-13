ig.module( 
	'game.entities.piece1' 
)
.requires(
	'game.entities.basePiece'
)
.defines(function(){
EntityPiece1 = EntityBasePiece.extend({
	animSheet: new ig.AnimationSheet('media/thomas1.png'),
    init: function (x, y, settings) {
        this.size = {x: 264, y: 202};
        this.origin = {x: 0, y: 0};
        this.parent(x, y, settings);
    }
});
});
