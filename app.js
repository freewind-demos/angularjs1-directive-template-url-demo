const app = angular.module('app', [])
app.directive('myDirective', function () {
    return {
        templateUrl: './my-directive.html',
        restrict: 'A'
    }
})