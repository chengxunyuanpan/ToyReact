module.exports = {
    entry: {
        main: './main.js' //打包文件
    },
    module: { //配置babel将高版本语法转换为低版本语法
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [[
                            '@babel/plugin-transform-react-jsx',
                            {pragma:'ToyReact.createElement'}
                        ]]
                    }
                }
            }
        ]
    },
    mode: 'development',
    optimization: {
        minimize: false //不压缩文件
    }
};