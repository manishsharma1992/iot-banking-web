/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('dashboardTables', dashboardTables);

  /** @ngInject */
  function dashboardTables() {
    return {
      restrict: 'E',
      controller: 'DashboardTablesPageCtrl',
      templateUrl: 'app/pages/dashboard/dashboardTables/smart/tables.html'
    };
  }
})();