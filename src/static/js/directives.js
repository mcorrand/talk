angular.module('appv4.directives', [])
    .directive('talkFloat', function() {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function(scope, elt, attrs, ngModel){
                if (!ngModel) { return; }

                // put model value in the dom
                ngModel.$render = function() {
                    elt.val(ngModel.$modelValue);
                };

                // read view value on these events
                elt.on('blur keyup change', function() {
                    scope.$apply(read);
                });
                
                // initialize
                read();

                function read() {
                    var val = elt.val();
                    // if we're trying to add decimals, don't parse on that change or it will be cancelled.
                    if (val.length > 0 && val.indexOf('.') == val.length - 1) return;

                    var parsed = parseFloat(val);
                    var modelvalue = parsed == null || isNaN(parsed)? 0: parsed;
                    ngModel.$setViewValue(modelvalue);
                    // call render manually as it doesn't get called for primitives.
                    ngModel.$render();
                };
            }
        };
    });
