angular.module('Namer',[])
.controller('NamerController',['$scope', function($scope) {
    $scope.genders = [
        {text: 'Male', value: 1},
        {text: 'Female', value: 2}
    ];
        
    $scope.femaleNames = [
        {text: 'Akosua', value: 1},
        {text: 'Abena', value: 2}
    ];
    
    $scope.maleNames = [
        {text: 'Kwadwo', value: 1},
        {text: 'Kwabena', value: 2}
    ];
    
    $scope.getName = function(){
        if($scope.gender.value===1){
            
        } else {
            angular.forEach($scope.maleNames)
               if(maleNames.value===1) maleNames.text;  
            }  
        }
}]);