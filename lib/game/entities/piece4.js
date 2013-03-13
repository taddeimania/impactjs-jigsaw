ig.module( 
	'game.entities.piece4' 
)
.requires(
	'game.entities.basePiece'
)
.defines(function(){
EntityPiece4 = EntityBasePiece.extend({
	animSheet: new ig.AnimationSheet('media/thomas4.png'),
    init: function (x, y, settings) {
        this.size = {x: 188, y: 286};
        this.origin = {x: 627, y: 0};
        this.parent(x, y, settings);
    }
});
});
