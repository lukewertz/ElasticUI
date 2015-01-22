﻿declare module elasticui.util {
    class EjsCollection {
        public ejsObjects: any[];
        private jsonObjects;
        public indexOf(ejsObject: any): number;
        public add(ejsObject: any): void;
        public remove(ejsObject: any): void;
    }
}
declare module elasticui.util {
    class FilterCollection extends EjsCollection {
        public getAsFilter(): any[];
        public getAsORFilter(): any[];
        public contains(filter: any): boolean;
    }
}
declare module elasticui.util {
    class FilterTool {
        static combineFilters(filters: any[]): any;
        static combineFiltersShould(filters: any[]): any;
    }
}
declare module elasticui.services {
    var services: ng.IModule;
}
declare module elasticui.directives {
    var directives: ng.IModule;
}
declare module elasticui.directives {
    class AggregationDirective {
        constructor();
    }
}
declare module elasticui.directives {
    class FilterDirective {
        constructor();
    }
}
declare module elasticui.directives {
    class IndexDirective {
        constructor();
    }
}
declare module elasticui.directives {
    class InvertedDirective {
        constructor();
    }
}
declare module elasticui.directives {
    class OrFilterDirective {
        constructor();
    }
}
declare module elasticui.directives {
    class SortDirective {
        constructor();
    }
}
declare module elasticui.directives {
    class VarDirective {
        static $inject: string[];
        constructor($timeout: any);
    }
}
declare module elasticui.filters {
    var filters: ng.IModule;
}
declare module elasticui.filters {
    class CachedFilter {
        constructor();
    }
}
declare module elasticui.filters {
    class MapFilter {
        private static parseString(input);
        private static getValue(element, propertyArray);
        constructor();
    }
}
declare module elasticui.filters {
    class PageRangeFilter {
        constructor();
    }
}
declare module elasticui.filters {
    class RangeFilter {
        constructor();
    }
}
declare module elasticui.filters {
    class RoundFilter {
        constructor();
    }
}
declare module elasticui.filters {
    class TimestampFilter {
        constructor();
    }
}
declare module elasticui.controllers {
    interface IAggregationScope extends IIndexScope {
        aggResult: any;
        aggregation: {
            agg: any;
            filterSelf: boolean;
        };
    }
    class AggregationController {
        private scope;
        private previousProvider;
        static $inject: string[];
        constructor($scope: IAggregationScope);
        public init(): void;
        private updateResults();
        public updateAgg(): void;
        private static getAggName(ejsAggregation);
        public getAggregationExplicit(ejsAggregation: any, filterSelf: boolean, filters: any[]): any;
        public getAggregation(filters: any[]): any;
    }
}
declare module elasticui.controllers {
    interface IFilterScope extends IIndexScope {
        filter: {
            filter: any;
            enabled: boolean;
        };
    }
    class FilterController {
        private scope;
        static $inject: string[];
        constructor($scope: IFilterScope);
        public init(): void;
        private updateFilter();
    }
}
declare module elasticui.controllers {
    interface IFilteredScope extends ng.IScope {
        filters: util.FilterCollection;
        combinedFilter: any;
    }
}
declare module elasticui.controllers {
    interface IIndexScope extends IFilteredScope {
        indexVM: IIndexViewModel;
        ejs: any;
    }
    interface IIndexViewModel {
        host: any;
        query: any;
        sort: any;
        aggregationProviders: util.SimpleSet;
        filters: util.FilterCollection;
        highlight: any;
        loaded: boolean;
        loading: boolean;
        page: number;
        index: string;
        pageCount: number;
        pageSize: number;
        results: any;
        refresh: () => void;
        error: any;
    }
}
declare module elasticui.controllers {
    class IndexController {
        private es;
        private $rootScope;
        public filters: util.FilterCollection;
        public indexVM: IIndexViewModel;
        public loaded(): void;
        static $inject: string[];
        constructor($scope: any, $timeout: any, $window: any, es: services.ElasticService, $rootScope: any);
        private getSearchPromise();
        private searchPromise;
        private refreshPromise;
        private onError(err);
        private search();
        public refreshIfDocCountChanged(): void;
        private onResult(body, updateOnlyIfCountChanged?);
    }
}
declare module elasticui.controllers {
    class OrFilterController {
        public filters: util.FilterCollection;
        private scope;
        static $inject: string[];
        constructor($scope: any);
        private updateCombinedFilter();
    }
}
declare module elasticui.controllers {
    interface ISortScope extends IIndexScope {
        sorting: {
            sort: any;
            enabled: boolean;
        };
    }
    class SortController {
        private scope;
        static $inject: string[];
        constructor($scope: ISortScope);
        public init(): void;
        private updateSort();
        public updateEnabled(): void;
        public isEnabledOnIndexScope(): boolean;
    }
}
declare module elasticui.services {
    class ElasticService {
        public client: any;
        private esFactory;
        private host;
        static $inject: string[];
        constructor(esFactory: any, euiHost: any);
        public setHost(host: any): boolean;
    }
}
declare module elasticui.widgets.directives {
    var directives: ng.IModule;
    var default_agg_count: number;
}
declare module elasticui.widgets.directives {
    class ChecklistDirective {
        static $inject: string[];
        constructor($parse: any);
    }
}
declare module elasticui.widgets.directives {
    class SimplePagingDirective {
        constructor();
    }
}
declare module elasticui.widgets.directives {
    class SingleselectDirective {
        static $inject: string[];
        constructor($parse: any);
    }
}
declare module elasticui.controllers {
    interface IHighlightScope extends IIndexScope {
        highlighting: {
            highlight: any;
            enabled: boolean;
        };
    }
    class HighlightController {
        private scope;
        static $inject: string[];
        constructor($scope: IHighlightScope);
        public init(): void;
        private updateHighlight();
        public updateEnabled(): void;
        public isEnabledOnIndexScope(): boolean;
    }
}
declare module elasticui.controllers {
    interface IHostScope extends IIndexScope {
        host: any;
    }
    class HostController {
        private scope;
        static $inject: string[];
        constructor($scope: IHostScope);
        public init(): void;
        private updateHost();
        public readHost(): void;
    }
}
declare module elasticui.controllers {
    interface IQueryScope extends IIndexScope {
        query: {
            query: any;
            enabled: boolean;
        };
    }
    class QueryController {
        private scope;
        static $inject: string[];
        constructor($scope: IQueryScope);
        public init(): void;
        private updateQuery();
    }
}
declare module elasticui.controllers {
    interface ISizeScope extends IIndexScope {
        pageSize: {
            size: any;
        };
    }
    class SizeController {
        private scope;
        static $inject: string[];
        constructor($scope: ISizeScope);
        public init(): void;
        private updateSize();
    }
}
declare module elasticui.directives {
    class HighlightDirective {
        constructor();
    }
}
declare module elasticui.directives {
    class HostDirective {
        constructor();
    }
}
declare module elasticui.directives {
    class QueryDirective {
        constructor();
    }
}
declare module elasticui.directives {
    class SizeDirective {
        constructor();
    }
}
declare module elasticui.util {
    class AngularTool {
        static setupBinding($parse: any, scope: any, attrs: any, attrsToBind: string[]): void;
    }
}
declare module elasticui.util {
    class EjsTool {
        static getJsonFromEjsObject(object: any): string;
        static equals(objectA: any, objectB: any): boolean;
    }
}
declare module elasticui.util {
    class SimpleSet {
        public objects: any[];
        public indexOf(object: any): number;
        public add(object: any): void;
        public remove(object: any): void;
    }
}
declare module elasticui.widgets.directives {
    class SearchboxDirective {
        static $inject: string[];
        constructor($parse: any);
    }
}
