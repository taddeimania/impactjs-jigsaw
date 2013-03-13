ig.module( 
	'game.entities.piece6' 
)
.requires(
	'game.entities.basePiece'
)
.defines(function(){
EntityPiece6 = EntityBasePiece.extend({
	animSheet: new ig.AnimationSheet('media/thomas6.png'),
    init: function (x, y, settings) {
        this.size = {x: 209, y: 359};
        this.origin = {x: 0, y: 136};
        this.parent(x, y, settings);
    }
});
});
