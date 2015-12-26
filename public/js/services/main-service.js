'use strict';

angular.module('MainService', []).factory('PiCheck', ['$rootScope', '$http', '$state', function($rootScope, $http, $state) {
  // Currently have 1,000 digits of pi for performance but I will need more
  // Should create function to find nth digit of pi instead of building out all digits
  var pi = '3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049951059731732816096318595024459455346908302642522308253344685035261931188171010003137838752886587533208381420617177669147303598253490428755468731159562863882353787593751957781857780532171226806613001927876611195909216420198';
  var userScore = 0;
  var scoreboard = [];

  return {
    test: function() {
      return 'PiCheck service is working'
    },
    checkDigit: function(digit) {
      var piDigit = pi[digit];
      return piDigit;
    },
    end: function(digit) {
      userScore = digit;
      console.log('Finsihed with score of ' + userScore);
      // Receive current scores
      $http({
        method: 'GET',
        url: '/scoreboard'
      })
      .then(function success(response) {
        console.dir(response.data);
        // If fewer than 20 scores, display name pop-up
        if(response.data.length < 20) {
          $state.go('home.high-score');
        }
        else if(userScore > response.data[19].score) {
          console.log('Deleting the score with ID ' + response.data[19]._id);
          // Delete lowest score
          $http({
            method: 'DELETE',
            url: '/scoreboard/' + response.data[19]._id
          })
          // Add new high score
          $state.go('home.high-score');
        }
        else {
          console.log('Not a new high score, please try again!');
        }
        // Save scoreboard
        scoreboard = response.data;
        // Show scoreboard
        $state.go('scoreboard');
      },
      function failure(response) {
        console.error(response);
      });
    },
    highScore: function(userName) {
      $http({
        method: 'POST',
        url: '/scoreboard',
        data: {
          name: userName,
          score: userScore
        }
      })
    },
    getScoreboard: function() {
      for(var i=0; i<scoreboard.length; i++) {
        scoreboard[i].rank = i+1;
      }
      return scoreboard;
    }
  }

}]);
