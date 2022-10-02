# 7-1-system-codebase-prefig

Open terminal and initialize package json
```
npm init
```
Press enter until the file package.json is created. 
Then, go to the package.json and modify the "scripts" section.
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
  },
```
```
  "scripts": {
    "sass": "sass --watch ./style.scss:.style.css --style compressed"
  },
```
 Add the auto prefixer

```
  "scripts": {
    "sass": "sass --watch ./style.scss:.style.css --style compressed",
    "prefix": "postcss ./public/css/style.css 
              --use autoprefixer -d./public/css/prefixed/"  
  },
```
Add new element
```
"browserslist": "last 4 versions"
```
Launch the preffixer
```
npm run prefix
```
