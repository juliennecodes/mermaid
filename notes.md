# steps for setting up github pages
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

# notes
Make sure you update the paths in index.html to ./assets. It gets built as /assets

# updating
make your changes
npm run build
update index.html to use ./assets instead of /assets
git add .
git commit
git push origin main
npm run deploy (so deployed site can reflect updated dist)

# fix generated js script from react
it will reference assets
the problem is it will look for it in abc.github.io/assets rather than abc.github.io/repoName/assets
