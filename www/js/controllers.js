angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('StoriesCtrl', function($scope, Stories) {
    $scope.stories = Stories.all();
    $scope.recorded = function(story) {
        return story.recorded;
    }
})

.controller('StoryDetailCtrl', function($scope, $stateParams, Stories) {
    $scope.story = Stories.get($stateParams.storyId);
})

.controller('StoryRecordingCtrl', function($scope, $stateParams, Stories) {
    $scope.story = Stories.get($stateParams.storyId);
})

.controller('StoryIllustrationsCtrl', function($scope, $location, $stateParams, Stories) {
    $scope.story = Stories.get($stateParams.storyId);
    $scope.illustration = $scope.story.illustrations[$stateParams.illustrationId];

    $scope.onSwipeRight = function() {
        $location.path('tab/story/' + $stateParams.storyId + '/illustrations/' + (parseInt($stateParams.illustrationId) - 1))
    }

    $scope.onSwipeLeft = function() {
        $location.path('tab/story/' + $stateParams.storyId + '/illustrations/' + (parseInt($stateParams.illustrationId) + 1))
    }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
    $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
    $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
