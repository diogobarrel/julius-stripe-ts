

module.exports = (env) => {

    const path = require('path')
    const { DefinePlugin } = require('webpack')

    return {
        entry: './src/index.ts',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new DefinePlugin({
                'process.env': JSON.stringify(require('dotenv').config({ path: './.env' }).parsed)
            })
        ]

    }
}
