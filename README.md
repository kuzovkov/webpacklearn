```bash
sudo docker-compose build
sudo docker-compose up -d
sudo docker-compose exec app bash
cd app
```

#Building app

```bash
webpack --entry /usr/src/env/app/src/init.js -o dist/out.js
OR
webpack --entry /usr/src/env/app/src/init.js -o dist/out.js --mode development

#checking
node dist/out.js
```

#More options

auto rebuild when source changed
```bash
webpack --entry /usr/src/env/app/src/init.js -o dist/out.js --mode development --watch
```
add source map (for easy debugging)
```bash
webpack --entry /usr/src/env/app/src/init.js -o dist/out.js --mode development -d
```

#Work with NPM

Initialization (create `package.json`)

```bash
npm init
```

install library
```bash
npm install --save jquery
```

#Webpack Config

`webpack.config.js`:

```javascript
const path = require('path');

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: './init.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        extensions: ['.js']
    },

    watch: false,
    
    mode: 'development'

};
```

#Many entry points

`webpack.config.js`:

```javascript
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        index: './Home',
        shop: './Shop',
        profile: './Profile'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    mode: 'development'
};
```

#Исходные карты
`webpack.config.js`:

```javascript
const path = require('path');

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: './init.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        extensions: ['.js']
    },

    watch: false,
    
    mode: 'development',
    devtool: 'eval' //'source-map'

};
```
more info: https://webpack.js.org/configuration/devtool/


#Подключение плагинов

```bash
npm install --save-dev case-sensitive-paths-webpack-plugin
```
`webpack.config.js`:

```javascript
const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {

    context: path.join(__dirname, 'src'),
    entry: './init.js',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new CaseSensitivePathsPlugin()
    ]
};
```

#Плагин для мимнификации кода Uglify Js Plugin

Установка webpack локально (чтобы пользоваться его плагинами)
```bash
npm install --save-dev webpack
```
`webpack.config.js`:

```javascript
const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './init.js',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};
```
#Define and Provide Plugins 

(задание псевдоглобальных констант и подключение библиотек из node_modules)

Установка webpack локально (чтобы пользоваться его плагинами)
```bash
npm install --save-dev webpack
```
`webpack.config.js`:

```javascript
const path = require('path');
const webpack = require('webpack');
module.exports = {

    context: path.join(__dirname, 'src'),
    entry: './init.js',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify('0.0.2'),
            PRODUCTION: false,
            HTML5_SUPPORT: true
        }),
        new webpack.ProvidePlugin({
            myJquery: 'jquery'
        })
    ]
};
```
#HTML Webpack Plugin
```bash
npm install --save-dev webpack html-webpack-plugin
```
`webpack.config.js`:

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    context: path.join(__dirname, 'src'),
    entry: {
        index: './index',
        shop: './shop'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Application title 01',
            hash: true,
            template: './template.html'
        })
    ]
};
```

#Optimization
(разнесение кода библиотек и общих модулей по отдельным файлам)
```bash
npm install --save-dev webpack
npm install --save jquery lodash
```
`webpack.config.js`:

```javascript
const path = require('path');
const webpack = require('webpack');

module.exports = {

    context: path.join(__dirname, 'src'),
    entry: {
        index: './index',
        shop: './shop',
        profile: './profile',
        vendor: ['jquery', 'lodash']
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    mode: 'development',

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: "initial",
                    test: path.resolve(__dirname, "node_modules"),
                    name: "vendor",
                    enforce: true
                },
                commons: {
                    chunks: "initial",
                    minChunks: 2,
                    name: "commons",
                    test: /common/,
                    enforce: true
                }
            }
        }
    }
};
```

#Loaders
(для подключения файлов не JS, например `typescript`)

```bash
npm install --save-dev awesome-typescript-loader typescript
```
`webpack.config.js`:

```javascript
const path = require('path');

module.exports = {
    mode: 'development',
    context: path.join(__dirname, 'src'),
    entry: './index',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
};
```

#CSS Loaders. ExtractTextPlugin

```bash
npm install --save-dev css-loader style-loader
npm i -D --saev-dev extract-text-webpack-plugin@next
```
`webpack.config.js`:

```javascript
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    mode: 'development',
    entry: {
        index: './index.js',
        styles: './styles.css'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                //use: ['style-loader', 'css-loader'],
                 use: ExtractTextPlugin.extract({
                     fallback: 'style-loader',
                     use: 'css-loader'
                 })
            }
        ]
    },
    //
     plugins: [
         new ExtractTextPlugin('[name].css')
     ]
};
```







