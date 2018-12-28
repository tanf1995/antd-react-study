import routes from './routes'

export default {
    plugins: [
        ['umi-plugin-react', {
            dva: true,
            antd: true
        }]
    ],
    routes: routes
}