const countries = require("./data/countries");
const flagUrls = require("./data/flagUrlByIso3");
const {
	findFlagUrlByCountryName,
	findFlagUrlByNationality,
	findFlagUrlByIso2Code,
	findFlagUrlByIso3Code,
	findCountryNameByIso2Code,
	findCountryNameByIso3Code,
	findCountryByIso2Code,
	findCountryByIso3Code,
	fetchAllCountries
} = require("./lib/api");

module.exports = {
	countries,
	flagUrls,
	findFlagUrlByCountryName,
	findFlagUrlByNationality,
	findFlagUrlByIso2Code,
	findFlagUrlByIso3Code,
	findCountryNameByIso2Code,
	findCountryNameByIso3Code,
	findCountryByIso2Code,
	findCountryByIso3Code,
	fetchAllCountries
};
