/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardTablesPageCtrl', DashboardTablesPageCtrl);

  /** @ngInject */
  function DashboardTablesPageCtrl($scope, $filter, editableOptions, editableThemes) {

    $scope.exceptionTablePageSize = 10;

    $scope.exceptionTableData = [
      {
        id: 1,
        exceptionName: 'Exception 1',
        exceptionDesc: 'Null pointer exception',
        time: '01/01/2000 11:59:45',
		status: 'In Progress',
        handledBy: 'mshar106'
      },{
        id: 2,
        exceptionName: 'Exception 1',
        exceptionDesc: 'Null pointer exception',
        time: '01/01/2000 11:59:45',
		status: 'In Progress',
        handledBy: 'mshar106'
      },{
        id: 3,
        exceptionName: 'Exception 1',
        exceptionDesc: 'Null pointer exception',
        time: '01/01/2000 11:59:45',
		status: 'In Progress',
        handledBy: 'mshar106'
      },{
        id: 4,
        exceptionName: 'Exception 1',
        exceptionDesc: 'Null pointer exception',
        time: '01/01/2000 11:59:45',
		status: 'In Progress',
        handledBy: 'mshar106'
      },{
        id: 5,
        exceptionName: 'Exception 1',
        exceptionDesc: 'Null pointer exception',
        time: '01/01/2000 11:59:45',
		status: 'In Progress',
        handledBy: 'mshar106'
      },{
        id: 6,
        exceptionName: 'Exception 1',
        exceptionDesc: 'Null pointer exception',
        time: '01/01/2000 11:59:45',
		status: 'In Progress',
        handledBy: 'mshar106'
      },{
        id: 7,
        exceptionName: 'Exception 1',
        exceptionDesc: 'Null pointer exception',
        time: '01/01/2000 11:59:45',
		status: 'In Progress',
        handledBy: 'mshar106'
      },{
        id: 8,
        exceptionName: 'Exception 1',
        exceptionDesc: 'Null pointer exception',
        time: '01/01/2000 11:59:45',
		status: 'In Progress',
        handledBy: 'mshar106'
      },{
        id: 9,
        exceptionName: 'Exception 1',
        exceptionDesc: 'Null pointer exception',
        time: '01/01/2000 11:59:45',
		status: 'In Progress',
        handledBy: 'mshar106'
      },{
        id: 10,
        exceptionName: 'Exception 1',
        exceptionDesc: 'Null pointer exception',
        time: '01/01/2000 11:59:45',
		status: 'In Progress',
        handledBy: 'mshar106'
      },{
        id: 11,
        exceptionName: 'Exception 1',
        exceptionDesc: 'Null pointer exception',
        time: '01/01/2000 11:59:45',
		status: 'In Progress',
        handledBy: 'mshar106'
      },{
        id: 12,
        exceptionName: 'Exception 1',
        exceptionDesc: 'Null pointer exception',
        time: '01/01/2000 11:59:45',
		status: 'In Progress',
        handledBy: 'mshar106'
      },{
        id: 13,
        exceptionName: 'Exception 1',
        exceptionDesc: 'Null pointer exception',
        time: '01/01/2000 11:59:45',
		status: 'In Progress',
        handledBy: 'mshar106'
      },{
        id: 14,
        exceptionName: 'Exception 1',
        exceptionDesc: 'Null pointer exception',
        time: '01/01/2000 11:59:45',
		status: 'In Progress',
        handledBy: 'mshar106'
      },{
        id: 15,
        exceptionName: 'Exception 1',
        exceptionDesc: 'Null pointer exception',
        time: '01/01/2000 11:59:45',
		status: 'In Progress',
        handledBy: 'mshar106'
      },{
        id: 16,
        exceptionName: 'Exception 1',
        exceptionDesc: 'Null pointer exception',
        time: '01/01/2000 11:59:45',
		status: 'In Progress',
        handledBy: 'mshar106'
      },{
        id: 17,
        exceptionName: 'Exception 1',
        exceptionDesc: 'Null pointer exception',
        time: '01/01/2000 11:59:45',
		status: 'In Progress',
        handledBy: 'mshar106'
      },{
        id: 18,
        exceptionName: 'Exception 1',
        exceptionDesc: 'Null pointer exception',
        time: '01/01/2000 11:59:45',
		status: 'In Progress',
        handledBy: 'mshar106'
      },{
        id: 19,
        exceptionName: 'Exception 1',
        exceptionDesc: 'Null pointer exception',
        time: '01/01/2000 11:59:45',
		status: 'In Progress',
        handledBy: 'mshar106'
      },{
        id: 20,
        exceptionName: 'Exception 1',
        exceptionDesc: 'Null pointer exception',
        time: '01/01/2000 11:59:45',
		status: 'In Progress',
        handledBy: 'mshar106'
      }
    ];
  }

})();
