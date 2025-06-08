Steps for setting up github pages
npm i --save-dev gh-pages

Add this to package.json
"scripts": {
"deploy": "gh-pages -d dist"
}

Run
npm run deploy

Go to github repo
Settings > Pages
Source
gh-pages branch
root folder

Make sure you update the paths in index.html to ./assets. It gets built as /assets