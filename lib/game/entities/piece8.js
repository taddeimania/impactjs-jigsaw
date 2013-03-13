ig.module( 
	'game.entities.piece8' 
)
.requires(
	'game.entities.basePiece'
)
.defines(function(){
EntityPiece8 = EntityBasePiece.extend({
	animSheet: new ig.AnimationSheet('media/thomas8.png'),
    init: function (x, y, settings) {
        this.size = {x: 230, y: 331};
        this.origin = {x: 396, y: 149};
        this.parent(x, y, settings);
    }
});
});
