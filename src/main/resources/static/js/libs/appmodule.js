(
    function () {
        var app = angular.module('modone', []);

        app.controller('plan_control', 

            function($scope,$http){
                $scope.posts = [];
                $scope.loadData = function() {
                    var configList = {
                        method: "GET",
                        url: "blueprints"
                    };

                    var response=$http(configList);

                    response.success(function(data, status, headers, config) {
                        $scope.variable = data;
                    });

                    response.error(function(data, status, headers, config) {
                        alert("The petition has failed. HTTP Status:"+status);
                    });
                };
            }
                    
            
        );
    }        
)
();







