ig.module( 
	'game.entities.piece2' 
)
.requires(
	'game.entities.basePiece'
)
.defines(function(){
EntityPiece2 = EntityBasePiece.extend({
	animSheet: new ig.AnimationSheet('media/thomas2.png'),
    init: function (x, y, settings) {
        this.size = {x: 202, y: 277};
        this.origin = {x: 201, y: 0};
        this.parent(x, y, settings);
    }
});
});
