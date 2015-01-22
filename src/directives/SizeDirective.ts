module elasticui.directives {
    export class SizeDirective {
        constructor() {
            var directive: ng.IDirective = {};
            directive.restrict = 'A';
            directive.scope = true;

            directive.controller = controllers.SizeController;
            directive.link = function (scope, element, attrs: any, sizeCtl) {
                scope.$watch(element.attr('eui-size'), (val) => scope.pageSize.size = val);

                scope.pageSize = {
                    size: scope.$eval(element.attr('eui-size')),
                };

                sizeCtl.init();
            }
            return directive;
        }
    }
    directives.directive('euiSize', SizeDirective);
}
