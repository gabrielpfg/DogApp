app.run(function ($rootScope) {
    $rootScope.color = 'blue';
});

app.controller('rootCtrl', function ($scope, $location, $http, $interval, helloWorld) {
    $scope.quantity = "";
    $scope.cost = "";
    $scope.results = [];
    $scope.myUrl = $location.absUrl();
    $scope.newDog = {};
    $scope.string = helloWorld.myFunc();
    $interval(function () {
        $http.get("https://dog.ceo/api/breeds/image/random").then(function (response) {
            $scope.newDog = response.data;
        });
    }, 5000);
    $http({
        method: "GET",
        url: "http://localhost:8080/doggo"
    }).then(function mySuccess(response) {
        $scope.myDogModule = response.data;
    }, function myError(response) {
        $scope.myDogModule = response.statusText;
    });
    $scope.myFunction = function () {
        console.log($scope.selectedName)
    }

    // $scope.init = function (array) {
    //     for (let i = 0; i < array.length; i++) {
    //         if (array[i] < 10) {
    //             $scope.results.push(array[i]);
    //         }
    //     }
    // }
});

// app.filter('myFormat', function () {
//     // $scope.array = [];
//     return function (x) {
//         if (x < 10) {
//             results.push(x);
//         }
//     };
//     // return function (x) {
//     //     var i, c, txt = "";
//     //     for (i = 0; i < x.length; i++) {
//     //         c = x[i];
//     //         if (i % 2 == 0) {
//     //             c += " ";
//     //         }
//     //         txt += c;
//     //     }
//     //     return txt;
//     // };
//  });  
// $scope.myFunction = function() {
    //     console.log(results);
    // }
    // $scope.myFunc = function() {
    //     $scope.showMe = !$scope.showMe;
    // }