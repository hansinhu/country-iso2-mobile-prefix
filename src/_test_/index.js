const { countryList } = require('../index.js');
const { originList } = require('./origin-data.js');
const fse = require('fs-extra');

console.log(countryList.length);
console.log(originList.length);

const newList = countryList.map(item => {
	const findItem = originList.find(item2 => item2.isoCode === item.iso2);
	return {
		...item,
		symbol: findItem && findItem.currency.symbol !== '¥' && findItem.currency.symbol !== '$' ? findItem.currency.symbol : item.symbol
	}
})

newList.forEach(item => {
	const findItem = countryList.find(item2 => item2.iso2 === item.iso2);
	if (findItem.symbol !== item.symbol) {
		console.log(`${findItem.iso2}   ${findItem.symbol}  ${item.symbol}`);
	}
})

fse.writeFileSync('./src/_test_/country2.json', JSON.stringify(newList, null, 2));

