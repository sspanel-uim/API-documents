module.exports = {
    base: '/API-documents/',
    title: 'SSpenl-Uim Api文档',
    themeConfig: {
        nav: [{
            text: 'Home',
            link: '/'
        }],
        sidebar: [{
            title: '首页',
            path: '/'
        }, {
            title: 'Global',
            path: '/Global'
        }, {
            title: 'User',
            path: '/User',
        }]
    },
    markdown: {
        anchor: {
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: '#',
            permalinkSpace: true
        }
    }
}