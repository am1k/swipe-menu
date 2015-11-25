function slideNavigation(){

    var swipe = {

        el: {
            slider: $("#slider"),
            holder: $(".holder"),
            imgSlide: $(".slide-image")
        },

        slideWidth: $('.navigation').width(),
        touchstartx: undefined,
        touchmovex: undefined,

        init: function() {
            this.bindEvents();
        },

        bindEvents: function() {
            this.el.holder.on("touchstart", function(event) {
                swipe.start(event);
            });
            this.el.holder.on("touchmove", function(event) {
                swipe.move(event);
            });
            this.el.holder.on("touchend", function(event) {
                swipe.end(event);
            });

        },

        start: function(event) {

            this.touchstartx =  event.originalEvent.touches[0].pageX;
            $('.animate').removeClass('animate');
        },

        move: function(event) {
            this.touchmovex =  event.originalEvent.touches[0].pageX;
            this.movex = (this.touchmovex - this.touchstartx);
            var movexBack = this.slideWidth + this.movex;
            if (this.movex < this.slideWidth && this.movex > 0) {
                this.el.imgSlide.css('transform','translate3d(' + this.movex + 'px,0,0)');
            }
            if( movexBack > 0 && this.movex < 0) {
                this.el.imgSlide.css('transform','translate3d(' + movexBack + 'px,0,0)');
            }
        },

        end: function() {
            if(this.touchstartx < this.touchmovex){
                this.el.imgSlide.addClass('animate').css('transform', 'translate3d(' + this.slideWidth + 'px,0,0)');
            } else {
                this.el.imgSlide.addClass('animate').css('transform', 'translate3d(' + 0 + 'px,0,0)');
            }
        }
    };
    swipe.init();

}

slideNavigation();
