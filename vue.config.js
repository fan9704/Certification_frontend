module.exports = {
    pluginOptions: {
        vuetify: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
        },
    },
    devServer: {

        proxy: {
            '/api': {
                target: 'https://127.0.0.1:8000', //API服务器的地址
                secure: false,
                ws: true, //代理websockets
                changeOrigin: true,
                pathRewrite: {
                    '': ''
                },

            }
        }
    }
};