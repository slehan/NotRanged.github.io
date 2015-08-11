'use strict';

angular.module('ffxivCraftOptWeb.components')
  .directive('actionTable', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/action-table.html',
      scope: {
        cls: '=',
        onClick: '=',
        actionClasses: '=',
        selectable: '=',
        draggable: '=',
        tooltipPlacement: '@'
      },
      controller: function ($scope, $rootScope, $translate, _allActions, _allClasses, _actionGroups, _actionsByName, _xivdbtooltips) {
        $scope.actionGroups = _actionGroups;

        $scope.getActionImagePath = function(action, cls) {
          if (!angular.isDefined(action)) {
            console.error('undefined action param');
            return undefined;
          }
          var info = _actionsByName[action];
          if (!angular.isDefined(info)) {
            console.error('unknown action: %s', action);
            return undefined;
          }
          return info.imagePaths[cls];
        };

        $scope.actionTooltip = function (action, cls) {
          return _xivdbtooltips.actionTooltip(action, cls);
        };

        $scope._actionClasses = function (action, cls) {
          var classes = $scope.actionClasses(action, cls);
          classes['selectable'] = $scope.selectable;
          return classes;
        }
      }
    }
  });
