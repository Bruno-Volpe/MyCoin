const routerPaths = {
    dashboard: '/',
    coinId: function(id?: string) {
        return `/coin/${id || ':id'}`;
    },
    notFound: '*'
} 

export {
    routerPaths
}