app.directive('scrollBars', function () {
    return {
        restrict: 'A',
        scope: { theme: "@", position: "@",autoHide:"@",axis:"@" },
        link: function (scope, element, attrs) {
            if (!scope.autoHide) {
                scope.autoHide = true;
            }
            if(!scope.axis){
                scope.axis = 'y';
            }
            element.mCustomScrollbar({
                axis: scope.axis,
                theme: scope.theme,
                scrollInertia: 200,
                autoDraggerLength: true,
                autoExpandScrollbar: false,
                autoHideScrollbar: scope.autoHide,
                scrollbarPosition: scope.position,
                contentTouchScroll: true,
                keyboard: { enable: true },
                mouseWheel: { preventDefault: false },
                advanced: { autoScrollOnFocus: false }
            });
        }
    };
});
