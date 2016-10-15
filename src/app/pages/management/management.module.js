/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management', [
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('management', {
          url: '/management',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'Management',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 100,
          },
        })
		.state('management.rules', {
          url: '/rules',
          templateUrl: 'app/pages/management/rules/rules.html',
          title: 'Rules',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('management.environment', {
          url: '/enviornment',
          templateUrl: 'app/pages/management/environment/environment.html',
          title: 'Enviornment',
          sidebarMeta: {
            order: 100,
          },
        })
        .state('management.project',
        {
          url: '/project',
          templateUrl: 'app/pages/management/project/project.html',
          /* controller: 'WizardCtrl',
          controllerAs: 'vm', */
          title: 'Project',
          sidebarMeta: {
            order: 200,
          },
        });
  }

})();
