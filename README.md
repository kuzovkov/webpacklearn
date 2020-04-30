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






