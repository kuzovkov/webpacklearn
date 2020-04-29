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



