TestUserCollection = Backbone.Collection.extend({
    model: Backbone.NestedModel,
    url: function() {
        return '../api/teams/cc0dec743ded447693e6d417f106210e/users';
    },
    parse: function(response) {
        return response.team_user_profiles;
    }
});