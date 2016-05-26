
export default function routes($stateProvider) {
  $stateProvider
    .state('list', {
      url: '/list',
      template: require('./list.html'),
      controller: 'ListController',
      controllerAs: 'list'
    });
}