/**
 * @author v.lugovsky
 * created on 22.04.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management')
      .controller('RuleActionSelectpickerPanelCtrl', RuleActionSelectpickerPanelCtrl);

  /** @ngInject */
  function RuleActionSelectpickerPanelCtrl() {
    var vm = this;

    vm.standardSelectItems = [
      { label: 'None', value: 'none' },
      { label: 'Rest', value: 'rest' },
    ];
	
	vm.envLogFileSelect = [{
		label: 'DEV Log',
		value: 'devLog'
	}, {
		label: 'UAT Log',
		value: 'uatLog'
	}, {
		label: 'PROD Log',
		value: 'prodLog'
	}]
  }
})();
