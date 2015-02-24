animalShelter.controller("AnimalsCtrl", function AnimalsCtrl($scope, AnimalsFactory) {
  $scope.animals = AnimalFactory.animals;
  $scope.AnimalsFactory = AnimalsFactory;
});
