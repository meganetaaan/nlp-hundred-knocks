const fs = require('fs');

const file = fs.readFileSync('./jawiki-country.json');
const articles = file.toString().split('\n')
  .filter((line)=>{return line.trim() !== '';})
  .map((line)=>{return JSON.parse(line)});

const article = articles.filter((article) => {
  return article.title = 'イギリス';
});

console.log(article);
