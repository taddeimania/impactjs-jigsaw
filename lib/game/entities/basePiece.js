ig.module( 
	'game.entities.basePiece' 
)
.requires(
	'impact.entity'
)
.defines(function(){
EntityBasePiece = ig.Entity.extend({
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
        var filename = 'media/' + settings.name + '.png'
        console.log(filename);
	    this.animSheet = new ig.AnimationSheet(filename, this.size.x, this.size.y);
        this.draggable = true;
        this.dragging = false;
        this.addAnim('idle', 1, [0]);
        this.currentAnim = this.anims.idle;
        this.setupPixelOrigin();
	},
    update: function () {
        if (this.clickOnMe()){
            this.dragging = true;
            this.zIndex = 1;
            ig.game.sortEntitiesDeferred();
        } else if (ig.input.released('click') || !this.draggable){
            this.zIndex = 0;
            this.dragging = false;
            ig.game.sortEntitiesDeferred();
        }

        if ((this.pos.x < (this.origin.x + 10) && this.pos.x > (this.origin.x - 10))
           && (this.pos.y < (this.origin.y + 10) && this.pos.y > (this.origin.y -10))){
               this.draggable = false;
               this.dragging = false;
               this.pos.x = this.origin.x;
               this.pos.y = this.origin.y;
        }
        if (this.dragging){
            console.log(this.pos.x + ' ' + this.pos.y);
            this.newMouseX = ig.input.mouse.x;
            this.newMouseY = ig.input.mouse.y;
            if (this.oldMouseX && this.oldMouseX != this.newMouseX){
                var dX = this.newMouseX - this.oldMouseX;
                this.pos.x = this.pos.x + dX;
            }
            if (this.oldMouseY && this.oldMouseY != this.newMouseY){
                var dY = this.newMouseY - this.oldMouseY;
                this.pos.y = this.pos.y + dY;
            }
            this.oldMouseX = ig.input.mouse.x;
            this.oldMouseY = ig.input.mouse.y;
        } else {
            this.oldMouseX = undefined;
            this.oldMouseY = undefined;
        }
    },
    setupPixelOrigin: function () {
        var tmpOrginCanvas = ig.$new('canvas');
        var tmpContext = tmpOrginCanvas.getContext( "2d" );
        tmpOrginCanvas.height = this.animSheet.image.data.height;
        tmpOrginCanvas.width = this.animSheet.image.data.width;
        tmpContext.drawImage( this.animSheet.image.data, 0, 0 );
        this.pixelOrigin = tmpContext.getImageData( 0, 0, this.animSheet.image.data.width, this.animSheet.image.data.height );
    },
    clickOnMe: function () {
        var mouseX = ig.input.mouse.x + ig.game.screen.x;
        var mouseY = ig.input.mouse.y + ig.game.screen.y;
        var tilesPerRow = this.pixelOrigin.width / (this.size.x * ig.system.scale);
        var currentTile = this.currentAnim.tile;
        var tileRows = (currentTile / tilesPerRow).floor();
        relX = (mouseX - this.pos.x - 1).round() * ig.system.scale + ((currentTile - tileRows*tilesPerRow) * this.size.x * ig.system.scale);
        relY = (mouseY - this.pos.y - 1).round() * ig.system.scale + (tileRows * this.size.y * ig.system.scale);
        var pixelAlpha = ((relY * this.pixelOrigin.width + relX) * 4) + 3;

        return ig.input.pressed('click')
            && (ig.input.mouse.y > this.pos.y
            && ig.input.mouse.y < this.pos.y + this.size.y)
            && (ig.input.mouse.x > this.pos.x
            && ig.input.mouse.x < this.pos.x + this.size.x)
            && (this.pixelOrigin.data[pixelAlpha] > 0)
            && this.draggable;
    },

});
});
