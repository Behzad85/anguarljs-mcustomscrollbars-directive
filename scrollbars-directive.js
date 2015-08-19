app.directive('scrollBars', function () {
    return {
        restrict: 'A',
        scope: { theme: "@", position: "@",autoHide:"@" },
        link: function (scope, element, attrs) {
            if (!scope.autoHide) {
                scope.autoHide = true;
            }
            element.mCustomScrollbar({
                axis: "y",
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
            console.log("Theme : " + scope.theme + " Position : " + scope.position + " AutoHide : " + scope.autoHide);
        }
    };
});
app.directive('scrollBarsX', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.mCustomScrollbar({
                theme: "light-thin",
                suppressScrollY: true,
                scrollInertia: 200,
                axis: 'x',
                autoDraggerLength: true,
                autoExpandScrollbar: true,
                contentTouchScroll: true,
                scrollbarPosition: 'inside',
                keyboard: { enable: true },
                advanced:{ autoScrollOnFocus: false },
                mouseWheel: { preventDefault: true }
            });
        }
    };
});