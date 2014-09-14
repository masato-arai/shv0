function ProjectsCtrl($scope) {
    $scope.getContent = function(project){
        return '<div class="date">' + project.date + '</div>' +
               '<div class="title">' + project.title + '</div>' +
               '<div class="tag">' + project.tag + '</div>'
    }
    $scope.projects = [
        {
            date: '19/08/2014',
            title: '<a href="" target="_blank">MIX YOUTUBE IN THE HOUSE</a>',
            tag: '<span class="www">WWW</span>' + ', ' + '<span class="app">Application</span>'
        },
        {
            date: '05/07/2014',
            title: '<a href="" target="_blank">MELODY WALKS</a>',
            tag: '<span class="instalation">Instalation</span>'
        },
        {
            date: '23/06/2014',
            title: '<a href="" target="_blank">DIGITAL ARK</a>',
            tag: 'Project' + ', ' + 'Video'
        },
        {
            date: '16/05/2014',
            title: '<a href="" target="_blank">aquaptic</a>',
            tag: 'Instalation'
        },
        {
            date: '14/05/2014',
            title: '<a href="" target="_blank">MA Interactive Media 13-14 Work in Progress Show</a>',
            tag: 'WWW'
        },
        {
            date: '02/05/2014',
            title: '<a href="" target="_blank">ATELIER KEIICHI MATSUDA</a>',
            tag: 'WWW'
        },
        {
            date: '12/09/2013',
            title: '<a href="" target="_blank">@kiki</a>',
            tag: 'WWW'
        },
        {
            date: '06/11/2012',
            title: '<a href="" target="_blank">Alexander Soloviev</a>',
            tag: 'WWW'
        }
    ];
}