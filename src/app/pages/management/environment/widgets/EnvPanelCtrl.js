/**
 * @author v.lugovsky
 * created on 22.04.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management')
      .controller('EnvPanelCtrl', EnvPanelCtrl);

  /** @ngInject */
  function EnvPanelCtrl() {
    var vm = this;

    vm.standardSelectItems = [
      { label: 'OTC Derivatives', value: 'otcderiv' }
    ];
  }
})();
