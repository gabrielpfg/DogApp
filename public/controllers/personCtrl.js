app.controller('personCtrl', function ($scope) {
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.changeName = function () {
        $scope.firstName = "Nelly";
    };
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    }
});

app.controller('childCtrl', function ($scope) {
    $scope.color = "red";
});


app.controller('grandchildCtrl', function ($scope) {
    $scope.color = "I hate colors";
});

app.directive("namePerson", function () {
    return {
        template:
            "<div ng-controller='personCtrl'>\
            First Name: <input type='text' ng-model='firstName'><br>\
            Last Name: <input type='text' ng-model='lastName'><br>\
            <br>\
            Full Name: {{fullName()}}\
            </div>"
    };
});

{/* {{ firstName + ' ' + lastName}}\
<h1 ng-click='changeName()'>{{firstName}}</h1>\
<button ng-click='myFunction()'>Hi</button>\ */}