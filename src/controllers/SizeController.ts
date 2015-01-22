module elasticui.controllers {

    export interface ISizeScope extends IIndexScope {
        pageSize: { size: any };
    }

    export class SizeController{
        private scope: ISizeScope;

        static $inject = ['$scope'];
        constructor($scope: ISizeScope){
            this.scope = $scope;
        }

        public init() {
            this.scope.$watch('pageSize.size', () => this.updateSize());
            this.updateSize();
        }

        private updateSize() {
            this.scope.indexVM.pageSize = this.scope.pageSize.size;
        }
    }
}
