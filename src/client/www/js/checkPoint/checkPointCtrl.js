define([
    'app',
    'text!data/gameInfo.json'
], function(
    module,
    gameInfo
) {
    return {
        name: 'CheckPointCtrl',

        inject: ['$scope', '$state', '$stateParams', 'localStorageService'],

        init: function() {
            this._checkpPointType = this.$stateParams.type;

            this._gameInfo = angular.fromJson(gameInfo);
            this._checkPointsData = _.find(this._gameInfo.checkPointTypes, {
                name: this._checkpPointType
            });

            this._gameStatus = angular.fromJson(this.localStorageService.get('gameStatus')) || {};

            this.$.currentCheckPointLevel = this._gameStatus[this._checkpPointType] || 0;
            this.$.checkPointLevelsCount = this._checkPointsData.checkPoints.length;

            this._initCurrentLevel();
        },

        _initCurrentLevel: function() {
            var checkPoint = this._checkPointsData.checkPoints[this.$.currentCheckPointLevel];
            if (!checkPoint) {
                return;
            }
            this.$.author = checkPoint.author;

            var imagesIds = [];
            while (imagesIds.length < 6) {
                var randomInt = _.random(1, 6);
                if (imagesIds.length >= 3) {
                    randomInt += 10 * randomInt
                }
                if (_.indexOf(imagesIds, randomInt) < 0) {
                    imagesIds.push(randomInt);
                }
            }
            this.$.images = _.chain(imagesIds).shuffle().map(function(imageName) {
                return {
                    id: imageName,
                    url: checkPoint.imagesPath + imageName + '.png'
                };
            }).value();
        },

        canConfirm: function() {
            return _.filter(this.$.images, {
                selected: true
            }).length === 3;
        },

        confirm: function() {
            var selectedImageIds = _.chain(this.$.images).filter({
                selected: true
            }).pluck('id').sort().value();
            var isAnswerRight = !(_.last(selectedImageIds) > 10 && _.first(selectedImageIds) < 10);
            if (isAnswerRight) {
                this._nextLevel();
            }
        },

        _nextLevel: function() {
            if (this.$.currentCheckPointLevel === this._checkPointsData.checkPoints.length) {
                alert("you win");
            } else {
                this._gameStatus[this._checkpPointType] = ++this.$.currentCheckPointLevel;
                this.localStorageService.set('gameStatus', angular.toJson(this._gameStatus));

                this._initCurrentLevel();
            }
        }
    };
});