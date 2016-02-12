app.controller('logInController', ['$scope', '$mdDialog', '$mdMedia',/* '$mdBottomSheet', '$mdToast',*/ 'userSearch', function ($scope, $mdDialog, $mdMedia, $mdBottomSheet, $mdToast, userSearch) {
    $scope.radioss = ('5 10 15 20 25 30 35 40 45 50').split(' ').map(function (radios) {
        return {
            radios: radios
        };
    });
    $scope.interests = ('Football Tenis Yoga Runnig').split(' ').map(function (interest) {
        return {
            interest: interest
        };
    });
    $scope.userSelect = {};
    $scope.saveData = function (interest, radios) {
        userSearch.saveuserSelect($scope.userSelect);
    };
    $scope.showAdvanced = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
                controller: 'registrationController',
                templateUrl: 'registrationDialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });
        $scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function (wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });
    };
/*    $scope.showGridBottomSheet = function ($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'contactUs.html',
            controller: 'contactUsController',
            clickOutsideToClose: false,
            targetEvent: $event
        }).then(function (clickedItem) {
            $mdToast.show(
                $mdToast.simple()
                .textContent(clickedItem['name'] + ' clicked!')
                .position('top right')
                .hideDelay(1500)
            );
        });
    };*/
}]);

app.controller('registrationController', ['$scope', '$mdDialog', function ($scope, $mdDialog) {
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };
    $scope.userInsert = {};
    $scope.userInterests = ('Football Tenis Yoga Runnig').split(' ').map(function (userInterest) {
        return {
            abbrev: userInterest
        };
    });
}]);

app.controller('contactUsController', ['$scope', '$mdBottomSheet', function ($scope, $mdBottomSheet) {
    $scope.items = [
        {
            name: 'Google+',
            icon: 'google+'
                                },
        {
            name: 'Mail',
            icon: 'mail'
                                },
        {
            name: 'Message',
            icon: 'message'
                                },
        {
            name: 'Facebook',
            icon: 'facebook'
                                },
        {
            name: 'Twitter',
            icon: 'twitter'
                                }
     ];
    $scope.listItemClick = function ($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
}]).config(function ($mdIconProvider) {
    $mdIconProvider
        .icon('google+', 'img/googlePlus.svg', 24)
        .icon('mail', 'img/mail.svg', 24)
        .icon('message', 'img/speechBubble20.svg', 24)
        .icon('facebook', 'img/facebook2.svg', 24)
        .icon('twitter', 'img/twitter.svg', 24);
});

app.controller('searchResults', ['$scope', 'search', 'uiGmapGoogleMapApi', 'userSearch', function ($scope, search, uiGmapGoogleMapApi, userSearch) {
    search.success(function (data) {
        var userdata = userSearch.getuserSelect();
        console.log(userdata);
        console.log(data);
        angular.forEach(data, function (data) {
            if (data.interest == userdata.interest) {
                console.log("hi im here");
            }
        });
    });
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function (maps) {

    });

    $scope.map = {
        center: {
            longitude: 34.77,
            latitude: 32.078
        },
        zoom: 8
    };
}]);

app.controller('toolBar', function ($scope, $mdSidenav) {
    $scope.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    };
});

app.controller('mainController',['$scope', '$mdBottomSheet', '$mdToast', function ($scope, $mdBottomSheet, $mdToast) {
    $scope.showGridBottomSheet = function ($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'contactUs.html',
            controller: 'contactUsController',
            clickOutsideToClose: false,
            targetEvent: $event
        }).then(function (clickedItem) {
            $mdToast.show(
                $mdToast.simple()
                .textContent(clickedItem['name'] + ' clicked!')
                .position('top right')
                .hideDelay(1500)
            );
        });
    };
    /*$scop.menu = [
         {
      link : '',
      title: 'Groups',
      icon: './img/cross102.'
    },
    {
      link : '',
      title: 'Notifiction',
      icon: './img/mail.svg'
    },
    {
      link : '',
      title: 'Friends',
      icon: './img/twitter.svg'
    }
  ];*/
}]);