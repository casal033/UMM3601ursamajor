'use strict';

angular.module('umm3601ursamajorApp')
  .controller('SubformeditorCtrl', function ($scope, $http, Auth, $location) {

        if(Auth.isLoggedIn() === false) {
            $location.path('/');
        }

        $scope.submissionTextArray = [];
        $scope.submissionText = {};

        // Need to get what should be the only seed subformtext from the database.
        // that will be the one that is updated each time the editor is used.
        $http.get('/api/subformtexts').success(function(submissionTextArray) {
            $scope.submissionTextArray = submissionTextArray;
            $scope.submissionText = $scope.submissionTextArray[0];
        });

        $scope.submitChanges = function() {

//            $http.put('api/subformtexts/:$scope.submissionText._id' ,
//                {
//                    title: $scope.submissionText.title,
//                    adviserDisclaimer: $scope.submissionText.adviserDisclaimer,
//                    ursSummary: $scope.submissionText.ursSummary,
//                    notes1: $scope.submissionText.notes1,
//                    nameDisclaimer: $scope.submissionText.nameDisclaimer,
//                    header1: $scope.submissionText.header1,
//                    criteria: $scope.submissionText.criteria,
//                    header2: $scope.submissionText.header2,
//                    notes2: $scope.submissionText.notes2,
//                    artistCriteria: $scope.submissionText.artistCriteria,
//                    humanitiesCriteria: $scope.submissionText.humanitiesCriteria,
//                    scienceCriteria: $scope.submissionText.scienceCriteria,
//                    notes3: $scope.submissionText.notes3,
//                    submissionTitle: $scope.submissionText.submissionTitle,
//                    submissionFormat: $scope.submissionText.Format,
//                    submissionAbstract: $scope.submissionText.submissionAbstract,
//                    submissionAbstractNotes: $scope.submissionText.submissionAbstractNotes,
//                    submissionPresentationType: $scope.submissionText.submissionPresentationType,
//                    submissionFormatChange: $scope.submissionText.submissionFormatChange,
//                    submissionChangeNotes: $scope.submissionText.submissionChangeNotes,
//                    submissionPresenter: $scope.submissionText.submissionPresenter,
//                    submissionCopresenterOne: $scope.submissionText.submissionCopresenterOne,
//                    submissionCopresenterTwo: $scope.submissionText.submissionCopresenterTwo,
//                    submissionSponsors: $scope.submissionText.submissionSponsors,
//                    submissionSponsorsNotes: $scope.submissionText.submissionSponsorsNotes,
//                    submissionAdviser: $scope.submissionText.submissionAdviser,
//                    submissionAdviserNotes: $scope.submissionText.submissionAdviserNotes,
//                    submissionFeatured: $scope.submissionText.submissionFeatured,
//                    submissionMediaServices: $scope.submissionText.submissionMediaServices,
//                    submissionSpecialRequirements: $scope.submissionText.submissionSpecialRequirements,
//                    submissionTee: $scope.submissionText.submissionTee,
//                    submissionTeeNotes: $scope.submissionText.submissionTeeNotes,
//                    submissionOther: $scope.submissionText.submissionOther
//                }
//            );

            $http.post('api/subformtexts/' ,
                {
                    title: $scope.submissionText.title,
                    adviserDisclaimer: $scope.submissionText.adviserDisclaimer,
                    ursSummary: $scope.submissionText.ursSummary,
                    notes1: $scope.submissionText.notes1,
                    nameDisclaimer: $scope.submissionText.nameDisclaimer,
                    header1: $scope.submissionText.header1,
                    criteria: $scope.submissionText.criteria,
                    header2: $scope.submissionText.header2,
                    notes2: $scope.submissionText.notes2,
                    artistCriteria: $scope.submissionText.artistCriteria,
                    humanitiesCriteria: $scope.submissionText.humanitiesCriteria,
                    scienceCriteria: $scope.submissionText.scienceCriteria,
                    notes3: $scope.submissionText.notes3,
                    submissionTitle: $scope.submissionText.submissionTitle,
                    submissionFormat: $scope.submissionText.Format,
                    submissionAbstract: $scope.submissionText.submissionAbstract,
                    submissionAbstractNotes: $scope.submissionText.submissionAbstractNotes,
                    submissionPresentationType: $scope.submissionText.submissionPresentationType,
                    submissionFormatChange: $scope.submissionText.submissionFormatChange,
                    submissionChangeNotes: $scope.submissionText.submissionChangeNotes,
                    submissionPresenter: $scope.submissionText.submissionPresenter,
                    submissionCopresenterOne: $scope.submissionText.submissionCopresenterOne,
                    submissionCopresenterTwo: $scope.submissionText.submissionCopresenterTwo,
                    submissionSponsors: $scope.submissionText.submissionSponsors,
                    submissionSponsorsNotes: $scope.submissionText.submissionSponsorsNotes,
                    submissionAdviser: $scope.submissionText.submissionAdviser,
                    submissionAdviserNotes: $scope.submissionText.submissionAdviserNotes,
                    submissionFeatured: $scope.submissionText.submissionFeatured,
                    submissionMediaServices: $scope.submissionText.submissionMediaServices,
                    submissionSpecialRequirements: $scope.submissionText.submissionSpecialRequirements,
                    submissionTee: $scope.submissionText.submissionTee,
                    submissionTeeNotes: $scope.submissionText.submissionTeeNotes,
                    submissionOther: $scope.submissionText.submissionOther
                }
            );

            $location.path('/admin');
        };

  });