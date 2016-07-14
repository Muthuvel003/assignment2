/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/
$('document').ready(function() {
    $('.navbar-text').each(function() {
        var target = $(this).html();
        target = target.split("");
        var result = "";
        for (var i = 0, len = target.length; i < len; i++) {
            result += '<span class="' + target[i] + '">' + target[i] + '</span>';
        }
        $(this).html(result);
    });
});