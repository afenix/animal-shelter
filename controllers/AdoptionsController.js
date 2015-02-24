animalShelter.controller("AdoptionsCtrl", function AdoptionsCtrl($scope, AnimalsFactory) {
 $scope.animals = AnimalsFactory.animals;
 $scope.adoptAnimal = function(animal) {
   animal.adopted = true;
 };
});
