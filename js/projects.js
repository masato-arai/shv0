function ProjectsCtrl($scope) {
    $scope.getContent = function(project){
        return '<div class="date">' + project.date + '</div>' +
               '<div class="title">' + project.title + '</div>' +
               '<div class="tag">' + project.tag + '</div>'
    }
    $scope.projects = [
        {
            date: '19/08/2014',
            title: '<a href="http://mixyoutubeinthehouse.com/" target="_blank">MIX YOUTUBE IN THE HOUSE</a>',
            tag: '<span class="www">WWW</span>' + ', ' + '<span class="app">Application</span>'
        },
        {
            date: '02/08/2014',
            title: '<a href="http://km.cx/" target="_blank">ATELIER KEIICHI MATSUDA</a>',
            tag: 'WWW'
        },
        {
            date: '05/07/2014',
            title: '<a href="https://vimeo.com/100014968" target="_blank">MELODY WALKS</a>',
            tag: '<span class="instalation">Instalation</span>'
        },
        {
            date: '23/06/2014',
            title: '<a href="https://vimeo.com/97481244" target="_blank">DIGITAL ARK</a>',
            tag: 'Project' + ', ' + 'Video'
        },
        {
            date: '16/05/2014',
            title: '<a href="https://vimeo.com/94885880" target="_blank">aquaptic</a>',
            tag: 'Instalation'
        },
        {
            date: '14/05/2014',
            title: '<a href="http://wip14.int-des.com/" target="_blank">MA Interactive Media 13-14 Work in Progress Show</a>',
            tag: 'WWW'
        },
        {
            date: '04/04/2014',
            title: '<a href="https://vimeo.com/81094199" target="_blank">AInsole</a>',
            tag: 'Project' + ', ' + 'Video'
        },
        {
            date: '12/09/2013',
            title: '<a href="http://www.hitomihitomi.com/" target="_blank">@kiki</a>',
            tag: 'WWW'
        },
        {
            date: '06/11/2012',
            title: '<a href="http://alexandersoloviev.co.uk/" target="_blank">Alexander Soloviev</a>',
            tag: 'WWW'
        }
    ];
}