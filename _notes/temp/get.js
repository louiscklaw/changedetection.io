const fs = require('fs');

const data = JSON.parse(fs.readFileSync('test.json'));

const result = Object.entries(data.watching).reduce((acc, [key, value]) => {
  acc.push({
    url: value.url,
    title: value.title,
  });
  return acc;
}, []);

let filtered = result.filter(item => item !== null && item.title !== null && item.title.includes('jable'));

let temp = '';

for (let i = 0; i < filtered.length; i++) {
  temp += `,TRUE,${filtered[i].title},${filtered[i].title},http://192.168.10.21:13010/jable_model,,system,POST,${filtered[i].url},jabletv_model`;
  temp += '\n';
}

console.log(temp);

fs.writeFileSync('result.csv', temp);
