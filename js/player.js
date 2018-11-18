var Player = function ( $target )
{
	this.$ = {};
	this.$.body  	    = $target;
	this.$.prev 	 		= this.$.body.find('.prev');
	this.$.next 		    = this.$.body.find('.next');
	this.$.play 		    = this.$.body.find('.play');
	this.$.playall 		    = this.$.body.find('.playall');
	this.$.name 		    = this.$.body.find('.name');
	this.$.seek_bar			= this.$.body.find('.seek-bar');
	this.$.progress_bar		= this.$.body.find('.progress-bar');
	this.$.music			= this.$.body.find('.music');
	this.$.lyriciframe		= this.$.body.find('.lyriciframe');
	this.$.lyrics			= this.$.body.find('.lyrics');
	this.$.n1 				= this.$.body.find('.n1');
	this.$.n2 				= this.$.body.find('.n2');

	this.count = this.$.n1.length;
	this.count = this.$.n2.length;
	this.init_events();
};

Player.prototype.index = 0;
Player.prototype.count = 0;
Player.prototype.progress_ratio = 0;

Player.prototype.init_events = function (){
	var that = this;

	/* On click on the next and prev button, swipe the carousel */ 
	this.$.next.on('click', function(){
		that.next();
		return false;
	});
	this.$.prev.on('click', function(){
		that.prev();
		return false;
	});

this.$.n1.each(function (data) {
$(this).on('click', function (){
that.go_to( data, $carousel.index);
$(".amusica").text($("div.ativo").text());
});});
this.$.n2.each(function (data) {
$(this).on('click', function (){
that.go_to( data, $carousel.index);
$(".amusica").text($("div.ativo").text());
});});
this.changeMusic();

	$(window).keydown(function(evt) {
		if (evt.which == 39) {
			that.next();
			return false;
	  	}
	  	if (evt.which == 37) {
			that.prev();
			return false;
	  	}
	  	if (evt.which == 32) {
	  		play = !play;
			that.changeMusic();
			return false;
	  	}
	});

	/* CHECK WHEN WE PAUSE BY CLICKING ON THE IMAGE */
	this.$.play.on('click', function(){
		play = !play;
		that.changeMusic();
		return false;
	});

	
	/* CHECK WHEN THE MUSIC ENDS */ 
	this.$.music.bind('ended', function(){
		that.next();
	});


	/**** SEEK BAR ****/
	window.setInterval(function () {
		this.progress_ratio = that.$.music[0].currentTime / that.$.music[0].duration;
	    that.$.progress_bar.css({
		  transform: "scaleX(" + progress_ratio + ")"
		});
	}, 50);
	/* Allows to change the current time of the song */ 
	this.$.seek_bar.on('click', function (e) {
	        var x = e.clientX - that.$.seek_bar.offset().left,
	        ratio = x / that.$.seek_bar.width(),
	        time = ratio * that.$.music[0].duration;
	    that.$.music[0].currentTime = time;
	});
};

Player.prototype.next = function()
{
	this.go_to( this.index + 1, this.index);
};
Player.prototype.prev = function()
{
	this.go_to( this.index - 1, this.index);

};

Player.prototype.go_to = function( index, currentIndex )
{	
	if (currentIndex != index) { //Avoid to start over the audio by clicking on the current music

		index = index%this.count;
		if (index < 0)
			index = index + this.count;
		
		this.$.n1[currentIndex].classList.remove('ativa');
		this.$.n1[index].classList.add('ativa');
		this.$.n2[currentIndex].classList.remove('ativa');
		this.$.n2[index].classList.add('ativa');
		this.$.name[currentIndex].classList.remove('ativo');
		this.$.name[index].classList.add('ativo');
		/* Change the source of the music */
		this.$.music[0].setAttribute('src', 'https://1dplayer.github.io/app/songs/' + index + '.mp3');
		this.$.lyriciframe[0].setAttribute('src', 'lyrics/' + index + '.html');
		
		this.changeMusic();
		
		$(".amusica").text($("div.ativo").text());
		this.index = index;
	}
};

Player.prototype.changeMusic = function()
{	
	/* Play or pause the music */ 	
	if (play == true) {
		this.$.play[0].classList.add('invisible');
		this.$.playall[0].classList.add('invisible');
		this.$.music[0].play();
		
		$(".amusica").text($("div.ativo").text());
	}
	else {
		this.$.play[0].classList.remove('invisible');
		this.$.playall[0].classList.remove('invisible');
		this.$.music[0].pause();
	}
};

var $carousel = new Player( $('body') );
var play = false
