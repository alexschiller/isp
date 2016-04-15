import Ember from 'ember';

const countries = [{
    "name": "Argentina",
    "code": "AR",
    "languages": ["Argentinian Spanish"]
}, {
    "name": "Austria",
    "code": "AT",
    "languages": ["Deutsch"]
}, {
    "name": "Belgium",
    "code": "BE",
    "languages": ["Dutch"]
}, {
    "name": "Brazil",
    "code": "BR",
    "languages": ["Portuguese"]
}, {
    "name": "Canada",
    "code": "CA",
    "languages": ["English", "French"]
}, {
    "name": "Chile",
    "code": "CL",
    "languages": ["Spanish"]
}, {
    "name": "China",
    "code": "CN",
    "langauages": ["Chinese (simplified)"]
}, {
    "name": "Croatia",
    "code": "CR",
    "languages": ["Croatian"]
}, {
    "name": "Czech Republic",
    "code": "CZ",
    "languages": ["Czech"]
}, {
    "name": "Denmark",
    "code": "DK",
    "languages": ["Danish"]
}, {
    "name": "Estonia",
    "code": "EE",
    "langauges": ["Estonian"]
}, {
    "name": "Ethiopia",
    "code": "ET",
    "languages": ["Amharic"]
}, {
    "name": "Finland",
    "code": "FI",
    "langauges": ["Finnish"]
}, {
    "name": "France",
    "code": "FR",
    "languages": ["French"]
}, {
    "name": "Germany",
    "code": "DE",
    "languages": ["German"]
}, {
    "name": "Greece",
    "code": "GR",
    "languages": ["Greek"]
}, {
    "name": "Hong Kong",
    "code": "HK",
    "languages": ["Hong Kong Chinese"]
}, {
    "name": "Hungary",
    "code": "HU",
    "languages": ["Hungarian"]
}, {
    "name": "Iceland",
    "code": "IS",
    "languages": ["Icelandic"]
}, {
    "name": "India",
    "code": "IN",
    "languages": ["English", "Marathi", "Hindi"]
}, {
    "name": "Israel",
    "code": "IL",
    "languages": ["Hebrew"]
}, {
    "name": "Italy",
    "code": "IT",
    "languages": ["Italian"]
}, {
    "name": "Japan",
    "code": "JP",
    "languages": ["Japanese"]
}, {
    "name": "Jordan",
    "code": "JO",
    "languages": ["Arabic"]
}, {
    "name": "Latvia",
    "code": "LV",
    "languages": ["Latvian"]
}, {
    "name": "Lithuania",
    "code": "LT",
    "languages": ["Lithuanian"]
}, {
    "name": "Macedonia",
    "code": "MK",
    "languages": ["Macedonian"]
}, {
    "name": "Malaysia",
    "code": "MY",
    "languages": ["Malay"]
}, {
    "name": "Mexico",
    "code": "MX",
    "languages": ["Spanish"]
}, {
    "name": "Netherlands",
    "code": "NL",
    "languages": ["Dutch"]
}, {
    "name": "New Zealand",
    "code": "NZ",
    "languages": ["New Zealand English"]
}, {
    "name": "Norway",
    "code": "NO",
    "languages": ["Norwegian"]
}, {
    "name": "Pakistan",
    "code": "PK",
    "languages": ["Urdu"]
}, {
    "name": "Palestine",
    "code": "PS",
    "languages": ["Arabic"]
}, {
    "name": "Peru",
    "code": "PE",
    "languages": ["Español"]
}, {
    "name": "Philippines",
    "code": "PH",
    "languages": ["English"]
}, {
    "name": "Poland",
    "code": "PL",
    "languages": ["Polish"]
}, {
    "name": "Portugal",
    "code": "PT",
    "languages": ["Portugese"]
}, {
    "name": "Romania",
    "code": "RO",
    "languages": ["Romanian"]
}, {
    "name": "Russia",
    "code": "RU",
    "languages": ["Russian"]
}, {
    "name": "Senegal",
    "code": "SN",
    "languages": ["French"]
}, {
    "name": "Serbia",
    "code": "RS",
    "languages": ["Serbian"]
}, {
    "name": "Singapore",
    "code": "SG",
    "languages": ["English"]
}, {
    "name": "Slovakia",
    "code": "SK",
    "languages": ["Slovak"]
}, {
    "name": "Slovenia",
    "code": "SI",
    "languages": ["Slovenian"]
}, {
    "name": "South Korea",
    "code": "KR",
    "languages": ["Korean"]
}, {
    "name": "Spain",
    "code": "ES",
    "languages": ["Catalan", "Spanish"]
}, {
    "name": "Sweden",
    "code": "SE",
    "languages": ["Swedish"]
}, {
    "name": "Switzerland",
    "code": "CH",
    "languages": ["French", "Deutsch"]
}, {
    "name": "Turkey",
    "code": "TR",
    "languages": ["Turkish"]
}, {
    "name": "Uganda",
    "code": "UG",
    "languages": ["English", "Luganda", "Runyankore"]
}, {
    "name": "Ukraine",
    "code": "UA",
    "languages": ["Ukrainian", "Russian"]
}, {
    "name": "United Arab Emirates",
    "code": "AE",
    "languages": ["English", "Arabic"]
}, {
    "name": "United Kingdom",
    "code": "GB",
    "languages": ["English"]
}, {
    "name": "USA",
    "code": "US",
    "languages": ["English"]
}];

export default Ember.Component.extend({
    countries: countries,
    onPick: null,
    country: null,
    actions: {
	pickCountry(country) {
	    this.set('country', country);
	},
	pickLangauge(language) {
	    this.get('onPick')(language);
	}
    }
});
