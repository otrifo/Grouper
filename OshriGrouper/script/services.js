app.factory('saveUser', ['$http', function ($http) {
    return $http;
}]);
app.factory('search', ['$http', function ($http) {
    return $http.get('/dataBaseGrouper.json')
        .success(function (data) {
            return data;
        })
        .error(function (err) {
            return err;
        });
}]);
app.factory('userSearch', function () {
    var userSelect;
    return {
        saveuserSelect: function (data) {
            userSelect = data;
        },
        getuserSelect: function () {
            return userSelect;
        }
    };
});