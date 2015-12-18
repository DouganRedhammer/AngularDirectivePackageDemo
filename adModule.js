(function(ng) {
	"use strict";
ng.module("adModule", []);


	ng.module("adModule")
		.directive("banner", function(){
    		return {
			restrict: "E",
			template: "<img src='https://s-media-cache-ak0.pinimg.com/236x/4f/63/a2/4f63a2f227fb15b4cf6786bcd5caa253.jpg'></img>"
		}
    });
}(angular));