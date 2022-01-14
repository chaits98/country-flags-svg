const flags = require("../src/data/flagUrlByIso3");
const {
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
	fetchAllCountries,
} = require("../src/index");

describe("countryFlagsSvg", () => {
	it("countries and svg urls should have equal amounts", () => {
		const amountOfFlagUrls = Object.keys(flagUrls).length;

		expect(countries).toHaveLength(amountOfFlagUrls);
	});

	it("all countries should have all svg urls", () => {
		for (const [flagUrlKey, flagUrlValue] of Object.entries(flagUrls)) {
			const country = countries.find(country => country.iso3 === flagUrlKey);
			expect(country).toBeDefined();
			expect(country.flag).toEqual(flagUrlValue);
		}
	});

	it("all countries must contain required properties", () => {
		const requiredProperties = ["name", "demonym", "flag", "iso2", "iso3"]

		expect(countries.every(country => requiredProperties.every(requiredProperty => country.hasOwnProperty(requiredProperty)))).toBe(true)
	})
});

describe("api", () => {
	describe("findFlagUrlByCountryName", () => {
		describe("should return correct flag url for Australia", () => {
			it("when argument in capital case", () => {
				const countryInfo = findFlagUrlByCountryName("Australia");

				expect(countryInfo).toBe(flags.AUS);
			});

			it("when argument in uppercase", () => {
				const countryInfo = findFlagUrlByCountryName("AUSTRALIA");

				expect(countryInfo).toBe(flags.AUS);
			});

			it("when argument in lowercase", () => {
				const countryInfo = findFlagUrlByCountryName("australia");

				expect(countryInfo).toBe(flags.AUS);
			});
		});

		it("should correctly find flag by alt spelling", () => {
			const countryInfo = findFlagUrlByCountryName("Republik Singapura");

			expect(countryInfo).toBe(flags.SGP);
		})

		it("should return empty string for incorrect arg", () => {
			expect(findFlagUrlByCountryName("111")).toBe("");
			expect(findFlagUrlByCountryName("")).toBe("");
			expect(findFlagUrlByCountryName("aassdd")).toBe("");
		});
	});

	describe("findFlagUrlByNationality", () => {
		describe("should return correct flag url for Australian", () => {
			it("when argument in capital case", () => {
				const countryInfo = findFlagUrlByNationality("Australian");

				expect(countryInfo).toBe(flags.AUS);
			});

			it("when argument in uppercase", () => {
				const countryInfo = findFlagUrlByNationality("AUSTRALIAN");

				expect(countryInfo).toBe(flags.AUS);
			});

			it("when argument in lowercase", () => {
				const countryInfo = findFlagUrlByNationality("australian");

				expect(countryInfo).toBe(flags.AUS);
			});
		});

		it("should return empty string for incorrect arg", () => {
			expect(findFlagUrlByNationality("111")).toBe("");
			expect(findFlagUrlByNationality("")).toBe("");
			expect(findFlagUrlByNationality("aassdd")).toBe("");
		});
	});

	describe("findFlagUrlByIso2Code", () => {
		describe("should return correct flag url for Australia", () => {
			it("when argument in uppercase", () => {
				const countryInfo = findFlagUrlByIso2Code("AU");

				expect(countryInfo).toBe(flags.AUS);
			});

			it("when argument in lowercase", () => {
				const countryInfo = findFlagUrlByIso2Code("au");

				expect(countryInfo).toBe(flags.AUS);
			});
		});

		it("should return empty string for incorrect arg", () => {
			expect(findFlagUrlByIso2Code("111")).toBe("");
			expect(findFlagUrlByIso2Code("")).toBe("");
			expect(findFlagUrlByIso2Code("aassdd")).toBe("");
		});
	});

	describe("findFlagUrlByIso3Code", () => {
		describe("should return correct flag url for Australia", () => {
			it("when argument in uppercase", () => {
				const countryInfo = findFlagUrlByIso3Code("AUS");

				expect(countryInfo).toBe(flags.AUS);
			});

			it("when argument in lowercase", () => {
				const countryInfo = findFlagUrlByIso3Code("aus");

				expect(countryInfo).toBe(flags.AUS);
			});
		});

		it("should return empty string for incorrect arg", () => {
			expect(findFlagUrlByIso3Code("111")).toBe("");
			expect(findFlagUrlByIso3Code("")).toBe("");
			expect(findFlagUrlByIso3Code("aassdd")).toBe("");
		});
	});

	describe("findCountryNameByIso2Code", () => {
		describe("should return correct country name for Australia", () => {
			it("when argument in uppercase", () => {
				const countryInfo = findCountryNameByIso2Code("AU");

				expect(countryInfo).toBe("Australia");
			});

			it("when argument in lowercase", () => {
				const countryInfo = findCountryNameByIso2Code("au");

				expect(countryInfo).toBe("Australia");
			});
		});

		it("should return empty string for incorrect arg", () => {
			expect(findCountryNameByIso2Code("111")).toBe("");
			expect(findCountryNameByIso2Code("")).toBe("");
			expect(findCountryNameByIso2Code("aassdd")).toBe("");
		});
	});

	describe("findCountryNameByIso3Code", () => {
		describe("should return correct country name for Australia", () => {
			it("when argument in uppercase", () => {
				const countryInfo = findCountryNameByIso3Code("AUS");

				expect(countryInfo).toBe("Australia");
			});

			it("when argument in lowercase", () => {
				const countryInfo = findCountryNameByIso3Code("aus");

				expect(countryInfo).toBe("Australia");
			});
		});

		it("should return empty string for incorrect arg", () => {
			expect(findCountryNameByIso3Code("111")).toBe("");
			expect(findCountryNameByIso3Code("")).toBe("");
			expect(findCountryNameByIso3Code("aassdd")).toBe("");
		});
	});

	describe("findCountryByIso2Code", () => {
		describe("should return correct country object for Australia", () => {
			it("when argument in uppercase", () => {
				const countryInfo = findCountryByIso2Code("AU");

				expect(countryInfo).toEqual({
					name: "Australia",
					demonym: "Australian",
					flag: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_(converted).svg",
					iso2: "AU",
					iso3: "AUS",
					altSpellings: [],
				});
			});

			it("when argument in lowercase", () => {
				const countryInfo = findCountryByIso2Code("au");

				expect(countryInfo).toEqual({
					name: "Australia",
					demonym: "Australian",
					flag: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_(converted).svg",
					iso2: "AU",
					iso3: "AUS",
					altSpellings: [],
				});
			});
		});

		it("should return undefined for incorrect arg", () => {
			expect(findCountryByIso2Code("111")).toBe(undefined);
			expect(findCountryByIso2Code("")).toBe(undefined);
			expect(findCountryByIso2Code("aassdd")).toBe(undefined);
		});
	});

	describe("findCountryByIso3Code", () => {
		describe("should return correct country object for Australia", () => {
			it("when argument in uppercase", () => {
				const countryInfo = findCountryByIso3Code("AUS");

				expect(countryInfo).toEqual({
					name: "Australia",
					demonym: "Australian",
					flag: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_(converted).svg",
					iso2: "AU",
					iso3: "AUS",
					altSpellings: [],
				});
			});

			it("when argument in lowercase", () => {
				const countryInfo = findCountryByIso3Code("aus");

				expect(countryInfo).toEqual({
					name: "Australia",
					demonym: "Australian",
					flag: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_(converted).svg",
					iso2: "AU",
					iso3: "AUS",
					altSpellings: [],
				});
			});
		});

		it("should return undefined for incorrect arg", () => {
			expect(findCountryByIso3Code("111")).toBe(undefined);
			expect(findCountryByIso3Code("")).toBe(undefined);
			expect(findCountryByIso3Code("aassdd")).toBe(undefined);
		});
	});

	describe("fetchAllCountries", () => {
		describe("should return all countries list", () => {
			it("all countries should be returned", () => {
				const countryInfo = fetchAllCountries();

				expect(countryInfo).toBe(countries);
			});
		});
	});
});
