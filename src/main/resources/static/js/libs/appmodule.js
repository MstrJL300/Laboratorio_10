(
    function () {
        var app = angular.module('modone', []);

        app.controller('plan_control', function($scope,$http){
            
                var c = document.getElementById("myCanvas");
                var ctx = c.getContext("2d");                
                
                $scope.posts = [];
                $scope.o = {};
                
                $scope.loadData = function() {
                    var configList = {
                        method: "GET",
                        url: "blueprints"
                    };

                    var response=$http(configList);

                    response.success(function(data, status, headers, config) {
                        $scope.posts = data;
                    });

                    response.error(function(data, status, headers, config) {
                        alert("The petition has failed. HTTP Status:"+status);
                    });
                };
                
                $scope.select = function (){                    
                                       
                    var configList = {
                        method: "GET",
                        url: "blueprints/"+$scope.o
                    };
                    
                    var response=$http(configList);

                    response.success(function(data, status, headers, config) {
                        $scope.o = data;            
                        
                        ctx.moveTo($scope.o.points[0].x,$scope.o.points[0].y);                        
                        ctx.lineTo($scope.o.points[1].x,$scope.o.points[1].y);
                        
                        if($scope.o.name == "rayon"){
                            
                            ctx.moveTo($scope.o.points[1].x,$scope.o.points[1].y);                        
                            ctx.lineTo($scope.o.points[2].x,$scope.o.points[2].y);
                        }
                                               
                        if($scope.o.name == "poligono1"){
                            
                            ctx.moveTo($scope.o.points[1].x,$scope.o.points[1].y);                        
                            ctx.lineTo($scope.o.points[2].x,$scope.o.points[2].y);
                            
                            ctx.moveTo($scope.o.points[2].x,$scope.o.points[2].y);                        
                            ctx.lineTo($scope.o.points[3].x,$scope.o.points[3].y);
                            
                            ctx.moveTo($scope.o.points[3].x,$scope.o.points[3].y);                        
                            ctx.lineTo($scope.o.points[4].x,$scope.o.points[4].y);
                        }
                        
                        ctx.stroke();
                        
                    });

                    response.error(function(data, status, headers, config) {
                        alert("The petition has failed. HTTP Status:"+status);
                    });
                };
        });
    }        
)
();