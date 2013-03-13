ig.module( 
	'game.entities.piece7' 
)
.requires(
	'game.entities.basePiece'
)
.defines(function(){
EntityPiece7 = EntityBasePiece.extend({
	animSheet: new ig.AnimationSheet('media/thomas7.png'),
    init: function (x, y, settings) {
        this.size = {x: 316, y: 224};
        this.origin = {x: 147, y: 198};
        this.parent(x, y, settings);
    }
});
});
