// console.log('hello world')

// var app = angular.module('myApp', []);
// app.controller('myCtrl', function ($scope) {
//     $scope.firstName = "";
//     $scope.lastName = "";
//     $scope.quantity = "";
//     $scope.cost = "";
//     // $scope.showMe = false;
//     // $scope.myFunction = function() {
//     //     alert("hello world")
//     // }
//     // $scope.myFunc = function() {
//     //     $scope.showMe = !$scope.showMe;
//     // }
// });

// // app.directive("w3TestDirective", function () {
// //     return {
// //         template: "<div ng-app='clickEvent'>\
// //         <button ng-click='myFunction()'>click me</button> Please\
// //         </div>"
// //     };
// // });

// // app.directive("testDirective", function(){
// //     return {
// //         template: "<div>\
// //         <button ng-click='myFunc()'>Show Menu</button>\
// //         <div ng-show='showMe'>\
// //           <h1>Menu:</h1>\
// //           <div>Pizza</div>\
// //           <div>Pasta</div>\
// //           <div>Pesce</div>\
// //         </div>\
// //         </div>"
// //     }
// // })

// // var clickMeButton = angular.module('clickEvent', []);
// // clickMeButton.controller('clickController', function() {
    
// // })













// <!DOCTYPE html>
// <html>
// <header>
//     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
//     <script src="./controllers/myApp.js"></script>
//     <script src="./controllers/myCtrl.js"></script>
//     <script src="./services/myService.js"></script>
//     <script src="./controllers/personCtrl.js"></script>
// </header>

// <body ng-app="myApp" ng-controller="rootCtrl">
//     <div ng-init="myCol='lightblue'; product = {quantity:'10', cost:'1212'}; 
//     person={firstName:'John',lastName:'Doe'};init([1,15,19,2,40,9]);names=['abcd','efgh']">
//     <div ng-repeat ="x in myDogModule.dogs" class="doginfo">
//         {{ $index + 1 }} - Name: {{x.name}}, Breed: {{x.breed}}<br>
//         <img src={{x.image}}>
//     </div>
    
//     <select ng-model="selectedName" ng-options="x for x in names">
//     </select>

//     <name-person></name-person>
//     <ul>
//         <li ng-repeat="x in results"> 
//             {{x}}
//         </li>
//     </ul>
//     <ul>
//         <li ng-repeat="x in names"> 
//             {{x | myFormat}}
//         </li>
//     </ul>
//     <!-- <img src="{{newDog.message}}"></img> -->

//         <!-- <p>The rootScope's favorite color:</p>
//         <h1>{{color}}</h1>

//         <div ng-controller="childCtrl">
//             <p>The scope of the controller's favorite color:</p>
//             <h1>{{color}}</h1>
//             <div ng-controller="grandchildCtrl">
//                 <p>The grandChild's favorite color is:</p>
//                 <h1>{{color}}</h1>
//             </div>
//         </div>
//         <div>
//             <p>The rootScope's favorite color is still:</p>
//             <h1>{{color | uppercase }}</h1>
//         </div> -->

//         <!-- <p>
//             Quantity: <input type="int" ng-model="quantity"><br>
//             Cost: <input type="int" ng-model="cost"><br>
//         </p>
//         <p>
//             Total in dollar: {{ (quantity * cost) | currency }}
//         </p> -->
//         <!-- <w3-test-directive></w3-test-directive>
//         <form name="myForm">
//             Email:
//             <input type="email" name="myAddress" ng-model="text" id="email-input">
//             <h1>Status</h1>
//             valid: {{myForm.myAddress.$valid}}<br>
//             dirty: {{myForm.myAddress.$dirty}}<br>
//             touched: {{myForm.myAddress.$touched}}<br>
//             <span ng-show="myForm.myAddress.$error.email">Not a valid e-mail address</span>
//         </form> -->
//     </div>
//     <!-- <div ng-init="names=[
//     {name:'Jani',country:'Norway',id:'2'},
//     {name:'Hege',country:'Sweden',id:'3'},
//     {name:'Kai',country:'Denmark',id:'1'}]">
//         <ul>
//             <li ng-repeat="x in names | orderBy:'id'">
//                 {{ x.name + ', ' + x.country }}
//             </li>
//         </ul>

//         </ul>
//     </div> -->
//     <!-- <p>
//         {{points[points.length-2]}}
//     </p> -->
//     <!-- <textarea style="background-color:{{myCol}}" ng-model="myCol"></textarea> -->
// </body>

// <style>
//     input.ng-invalid {
//         background-color: rgb(255, 38, 0);
//         color: white;
//     }

//     #email-input.ng-empty {
//         background-color: rgb(238, 255, 0);
//     }

//     .doginfo {
//         border: 1px solid rgb(7, 246, 39);
//         padding: 5px;
//     }
// </style>

// </html>