/* jQuery Color Cycle Plugin - v0.1.1 - created by: jon@flatironschool.com */
(function ($) {
    
    $.fn.colorCycle = function( options ) {
        
        var settings = $.extend({
                 colors: ['#ff0000', '#ff6600', '#ff9900', '#ffcc00', '#ffff00', '#ccff00', '#99ff00', '#66ff00', '#00ff66', '#00ff99', '#00ffcc', '#00ffff', '#00ccff', '#0099ff', '#0066ff', '#0033ff', '#0000ff', '#3300ff', '#6600ff', '#9900ff', '#cc00ff', '#ff00ff', '#ff00cc', '#ff0099', '#ff0066'],
                 animationStartRange: 1000,
                 animationEndRange: 2000,
                 loopStartRange: 1000,
                 loopEndRange: 4000
            }, options),
            $el = this,
            generateTime = function (min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            },
            selectColor = function () {
                return settings.colors[Math.floor(Math.random() * settings.colors.length)];
            },
            changeColor = function (ele) {
                ele.animate({
                    'background-color': selectColor()
                }, generateTime(settings.animationStartRange, settings.animationEndRange), function () {
                    setTimeout(function () {
                        changeColor(ele);
                    }, generateTime(settings.loopStartRange, settings.loopEndRange));
                });
            },
            initialize = function () {
                for (i = 0; i < $el.size(); i++){
                    changeColor($el.eq(i));
                }
            };
        
        initialize();
        return $el;  
    }
})(jQuery);
