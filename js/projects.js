function ProjectsCtrl($scope) {
    $scope.getContent = function(project){
        return project.date + " " + project.title + " " + project.tag
    }
    $scope.projects = [
        {date: '19/08/2014', title: 'MIX YOUTUBE IN THE HOUSE', tag: '<span class="www">WWW</span>' + ', ' + '<span class="app">Application</span>'},
        {date: '05/07/2014', title: 'MELODY WALKS', tag: 'Instalation'},
        {date: '23/06/2014', title: 'DIGITAL ARK', tag: 'Project' + ', ' + 'Video'},
        {date: '16/05/2014', title: 'aquaptic', tag: 'Instalation'},
        {date: '14/05/2014', title: 'MA Interactive Media 13-14 Work in Progress Show', tag: 'WWW'},
        {date: '02/05/2014', title: 'ATELIER KEIICHI MATSUDA', tag: 'WWW'},
        {date: '12/09/2013', title: '@kiki', tag: 'WWW'},
        {date: '06/11/2012', title: 'Alexander Soloviev', tag: 'WWW'}
    ];
}