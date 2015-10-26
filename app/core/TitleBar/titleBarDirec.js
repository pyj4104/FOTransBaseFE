angular
	.module("FOTransBaseFE")
	.directive('titleBarDirec', titleBarDirec);

function titleBarDirec(){
	return {restrict: "AE", templateUrl: "./app/core/titleBar/titleBarTemplate.html"};
};