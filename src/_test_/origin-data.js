// 这个数据来源于shopify
const originList = [
	{
			"currency": {
					"isoCode": "SHP",
					"name": "Saint Helenian Pound",
					"symbol": "£"
			},
			"isoCode": "AC",
			"name": "Ascension Island"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "AD",
			"name": "Andorra"
	},
	{
			"currency": {
					"isoCode": "AED",
					"name": "United Arab Emirates Dirham",
					"symbol": "د.إ"
			},
			"isoCode": "AE",
			"name": "United Arab Emirates"
	},
	{
			"currency": {
					"isoCode": "AFN",
					"name": "Afghan Afghani",
					"symbol": "؋"
			},
			"isoCode": "AF",
			"name": "Afghanistan"
	},
	{
			"currency": {
					"isoCode": "XCD",
					"name": "East Caribbean Dollar",
					"symbol": "$"
			},
			"isoCode": "AG",
			"name": "Antigua & Barbuda"
	},
	{
			"currency": {
					"isoCode": "XCD",
					"name": "East Caribbean Dollar",
					"symbol": "$"
			},
			"isoCode": "AI",
			"name": "Anguilla"
	},
	{
			"currency": {
					"isoCode": "ALL",
					"name": "Albanian Lek",
					"symbol": "L"
			},
			"isoCode": "AL",
			"name": "Albania"
	},
	{
			"currency": {
					"isoCode": "AMD",
					"name": "Armenian Dram",
					"symbol": "դր."
			},
			"isoCode": "AM",
			"name": "Armenia"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "AO",
			"name": "Angola"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "AR",
			"name": "Argentina"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "AT",
			"name": "Austria"
	},
	{
			"currency": {
					"isoCode": "AUD",
					"name": "Australian Dollar",
					"symbol": "$"
			},
			"isoCode": "AU",
			"name": "Australia"
	},
	{
			"currency": {
					"isoCode": "AWG",
					"name": "Aruban Florin",
					"symbol": "ƒ"
			},
			"isoCode": "AW",
			"name": "Aruba"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "AX",
			"name": "Åland Islands"
	},
	{
			"currency": {
					"isoCode": "AZN",
					"name": "Azerbaijani Manat",
					"symbol": "₼"
			},
			"isoCode": "AZ",
			"name": "Azerbaijan"
	},
	{
			"currency": {
					"isoCode": "BAM",
					"name": "Bosnia and Herzegovina Convertible Mark",
					"symbol": "КМ"
			},
			"isoCode": "BA",
			"name": "Bosnia & Herzegovina"
	},
	{
			"currency": {
					"isoCode": "BBD",
					"name": "Barbadian Dollar",
					"symbol": "$"
			},
			"isoCode": "BB",
			"name": "Barbados"
	},
	{
			"currency": {
					"isoCode": "BDT",
					"name": "Bangladeshi Taka",
					"symbol": "৳"
			},
			"isoCode": "BD",
			"name": "Bangladesh"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "BE",
			"name": "Belgium"
	},
	{
			"currency": {
					"isoCode": "XOF",
					"name": "West African Cfa Franc",
					"symbol": "Fr"
			},
			"isoCode": "BF",
			"name": "Burkina Faso"
	},
	{
			"currency": {
					"isoCode": "BGN",
					"name": "Bulgarian Lev",
					"symbol": "лв."
			},
			"isoCode": "BG",
			"name": "Bulgaria"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "BH",
			"name": "Bahrain"
	},
	{
			"currency": {
					"isoCode": "BIF",
					"name": "Burundian Franc",
					"symbol": "Fr"
			},
			"isoCode": "BI",
			"name": "Burundi"
	},
	{
			"currency": {
					"isoCode": "XOF",
					"name": "West African Cfa Franc",
					"symbol": "Fr"
			},
			"isoCode": "BJ",
			"name": "Benin"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "BL",
			"name": "St. Barthélemy"
	},
	{
			"currency": {
					"isoCode": "USD",
					"name": "United States Dollar",
					"symbol": "$"
			},
			"isoCode": "BM",
			"name": "Bermuda"
	},
	{
			"currency": {
					"isoCode": "BND",
					"name": "Brunei Dollar",
					"symbol": "$"
			},
			"isoCode": "BN",
			"name": "Brunei"
	},
	{
			"currency": {
					"isoCode": "BOB",
					"name": "Bolivian Boliviano",
					"symbol": "Bs."
			},
			"isoCode": "BO",
			"name": "Bolivia"
	},
	{
			"currency": {
					"isoCode": "USD",
					"name": "United States Dollar",
					"symbol": "$"
			},
			"isoCode": "BQ",
			"name": "Caribbean Netherlands"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "BR",
			"name": "Brazil"
	},
	{
			"currency": {
					"isoCode": "BSD",
					"name": "Bahamian Dollar",
					"symbol": "$"
			},
			"isoCode": "BS",
			"name": "Bahamas"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "BT",
			"name": "Bhutan"
	},
	{
			"currency": {
					"isoCode": "BWP",
					"name": "Botswana Pula",
					"symbol": "P"
			},
			"isoCode": "BW",
			"name": "Botswana"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "BY",
			"name": "Belarus"
	},
	{
			"currency": {
					"isoCode": "BZD",
					"name": "Belize Dollar",
					"symbol": "$"
			},
			"isoCode": "BZ",
			"name": "Belize"
	},
	{
			"currency": {
					"isoCode": "CAD",
					"name": "Canadian Dollar",
					"symbol": "$"
			},
			"isoCode": "CA",
			"name": "Canada"
	},
	{
			"currency": {
					"isoCode": "AUD",
					"name": "Australian Dollar",
					"symbol": "$"
			},
			"isoCode": "CC",
			"name": "Cocos (Keeling) Islands"
	},
	{
			"currency": {
					"isoCode": "CDF",
					"name": "Congolese Franc",
					"symbol": "Fr"
			},
			"isoCode": "CD",
			"name": "Congo - Kinshasa"
	},
	{
			"currency": {
					"isoCode": "XAF",
					"name": "Central African Cfa Franc",
					"symbol": "Fr"
			},
			"isoCode": "CF",
			"name": "Central African Republic"
	},
	{
			"currency": {
					"isoCode": "XAF",
					"name": "Central African Cfa Franc",
					"symbol": "Fr"
			},
			"isoCode": "CG",
			"name": "Congo - Brazzaville"
	},
	{
			"currency": {
					"isoCode": "CHF",
					"name": "Swiss Franc",
					"symbol": "CHF"
			},
			"isoCode": "CH",
			"name": "Switzerland"
	},
	{
			"currency": {
					"isoCode": "XOF",
					"name": "West African Cfa Franc",
					"symbol": "Fr"
			},
			"isoCode": "CI",
			"name": "Côte d’Ivoire"
	},
	{
			"currency": {
					"isoCode": "NZD",
					"name": "New Zealand Dollar",
					"symbol": "$"
			},
			"isoCode": "CK",
			"name": "Cook Islands"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "CL",
			"name": "Chile"
	},
	{
			"currency": {
					"isoCode": "XAF",
					"name": "Central African Cfa Franc",
					"symbol": "Fr"
			},
			"isoCode": "CM",
			"name": "Cameroon"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "CN",
			"name": "China"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "CO",
			"name": "Colombia"
	},
	{
			"currency": {
					"isoCode": "CRC",
					"name": "Costa Rican Colón",
					"symbol": "₡"
			},
			"isoCode": "CR",
			"name": "Costa Rica"
	},
	{
			"currency": {
					"isoCode": "CVE",
					"name": "Cape Verdean Escudo",
					"symbol": "$"
			},
			"isoCode": "CV",
			"name": "Cape Verde"
	},
	{
			"currency": {
					"isoCode": "ANG",
					"name": "Netherlands Antillean Gulden",
					"symbol": "ƒ"
			},
			"isoCode": "CW",
			"name": "Curaçao"
	},
	{
			"currency": {
					"isoCode": "AUD",
					"name": "Australian Dollar",
					"symbol": "$"
			},
			"isoCode": "CX",
			"name": "Christmas Island"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "CY",
			"name": "Cyprus"
	},
	{
			"currency": {
					"isoCode": "CZK",
					"name": "Czech Koruna",
					"symbol": "Kč"
			},
			"isoCode": "CZ",
			"name": "Czechia"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "DE",
			"name": "Germany"
	},
	{
			"currency": {
					"isoCode": "DJF",
					"name": "Djiboutian Franc",
					"symbol": "Fdj"
			},
			"isoCode": "DJ",
			"name": "Djibouti"
	},
	{
			"currency": {
					"isoCode": "DKK",
					"name": "Danish Krone",
					"symbol": "kr."
			},
			"isoCode": "DK",
			"name": "Denmark"
	},
	{
			"currency": {
					"isoCode": "XCD",
					"name": "East Caribbean Dollar",
					"symbol": "$"
			},
			"isoCode": "DM",
			"name": "Dominica"
	},
	{
			"currency": {
					"isoCode": "DOP",
					"name": "Dominican Peso",
					"symbol": "$"
			},
			"isoCode": "DO",
			"name": "Dominican Republic"
	},
	{
			"currency": {
					"isoCode": "DZD",
					"name": "Algerian Dinar",
					"symbol": "د.ج"
			},
			"isoCode": "DZ",
			"name": "Algeria"
	},
	{
			"currency": {
					"isoCode": "USD",
					"name": "United States Dollar",
					"symbol": "$"
			},
			"isoCode": "EC",
			"name": "Ecuador"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "EE",
			"name": "Estonia"
	},
	{
			"currency": {
					"isoCode": "EGP",
					"name": "Egyptian Pound",
					"symbol": "ج.م"
			},
			"isoCode": "EG",
			"name": "Egypt"
	},
	{
			"currency": {
					"isoCode": "MAD",
					"name": "Moroccan Dirham",
					"symbol": "د.م."
			},
			"isoCode": "EH",
			"name": "Western Sahara"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "ER",
			"name": "Eritrea"
	},
	{
			"currency": {
					"isoCode": "MXN",
					"name": "Mexican Peso",
					"symbol": "$"
			},
			"isoCode": "ES",
			"name": "Spain"
	},
	{
			"currency": {
					"isoCode": "ETB",
					"name": "Ethiopian Birr",
					"symbol": "Br"
			},
			"isoCode": "ET",
			"name": "Ethiopia"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "FI",
			"name": "Finland"
	},
	{
			"currency": {
					"isoCode": "FJD",
					"name": "Fijian Dollar",
					"symbol": "$"
			},
			"isoCode": "FJ",
			"name": "Fiji"
	},
	{
			"currency": {
					"isoCode": "FKP",
					"name": "Falkland Pound",
					"symbol": "£"
			},
			"isoCode": "FK",
			"name": "Falkland Islands"
	},
	{
			"currency": {
					"isoCode": "DKK",
					"name": "Danish Krone",
					"symbol": "kr."
			},
			"isoCode": "FO",
			"name": "Faroe Islands"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "FR",
			"name": "France"
	},
	{
			"currency": {
					"isoCode": "XOF",
					"name": "West African Cfa Franc",
					"symbol": "Fr"
			},
			"isoCode": "GA",
			"name": "Gabon"
	},
	{
			"currency": {
					"isoCode": "GBP",
					"name": "British Pound",
					"symbol": "£"
			},
			"isoCode": "GB",
			"name": "United Kingdom"
	},
	{
			"currency": {
					"isoCode": "XCD",
					"name": "East Caribbean Dollar",
					"symbol": "$"
			},
			"isoCode": "GD",
			"name": "Grenada"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "GE",
			"name": "Georgia"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "GF",
			"name": "French Guiana"
	},
	{
			"currency": {
					"isoCode": "GBP",
					"name": "British Pound",
					"symbol": "£"
			},
			"isoCode": "GG",
			"name": "Guernsey"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "GH",
			"name": "Ghana"
	},
	{
			"currency": {
					"isoCode": "GBP",
					"name": "British Pound",
					"symbol": "£"
			},
			"isoCode": "GI",
			"name": "Gibraltar"
	},
	{
			"currency": {
					"isoCode": "DKK",
					"name": "Danish Krone",
					"symbol": "kr."
			},
			"isoCode": "GL",
			"name": "Greenland"
	},
	{
			"currency": {
					"isoCode": "GMD",
					"name": "Gambian Dalasi",
					"symbol": "D"
			},
			"isoCode": "GM",
			"name": "Gambia"
	},
	{
			"currency": {
					"isoCode": "GNF",
					"name": "Guinean Franc",
					"symbol": "Fr"
			},
			"isoCode": "GN",
			"name": "Guinea"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "GP",
			"name": "Guadeloupe"
	},
	{
			"currency": {
					"isoCode": "XAF",
					"name": "Central African Cfa Franc",
					"symbol": "Fr"
			},
			"isoCode": "GQ",
			"name": "Equatorial Guinea"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "GR",
			"name": "Greece"
	},
	{
			"currency": {
					"isoCode": "GBP",
					"name": "British Pound",
					"symbol": "£"
			},
			"isoCode": "GS",
			"name": "South Georgia & South Sandwich Islands"
	},
	{
			"currency": {
					"isoCode": "GTQ",
					"name": "Guatemalan Quetzal",
					"symbol": "Q"
			},
			"isoCode": "GT",
			"name": "Guatemala"
	},
	{
			"currency": {
					"isoCode": "XOF",
					"name": "West African Cfa Franc",
					"symbol": "Fr"
			},
			"isoCode": "GW",
			"name": "Guinea-Bissau"
	},
	{
			"currency": {
					"isoCode": "GYD",
					"name": "Guyanese Dollar",
					"symbol": "$"
			},
			"isoCode": "GY",
			"name": "Guyana"
	},
	{
			"currency": {
					"isoCode": "HKD",
					"name": "Hong Kong Dollar",
					"symbol": "$"
			},
			"isoCode": "HK",
			"name": "Hong Kong SAR"
	},
	{
			"currency": {
					"isoCode": "HNL",
					"name": "Honduran Lempira",
					"symbol": "L"
			},
			"isoCode": "HN",
			"name": "Honduras"
	},
	{
			"currency": {
					"isoCode": "HRK",
					"name": "Croatian Kuna",
					"symbol": "kn"
			},
			"isoCode": "HR",
			"name": "Croatia"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "HT",
			"name": "Haiti"
	},
	{
			"currency": {
					"isoCode": "HUF",
					"name": "Hungarian Forint",
					"symbol": "Ft"
			},
			"isoCode": "HU",
			"name": "Hungary"
	},
	{
			"currency": {
					"isoCode": "IDR",
					"name": "Indonesian Rupiah",
					"symbol": "Rp"
			},
			"isoCode": "ID",
			"name": "Indonesia"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "IE",
			"name": "Ireland"
	},
	{
			"currency": {
					"isoCode": "ILS",
					"name": "Israeli New Sheqel",
					"symbol": "₪"
			},
			"isoCode": "IL",
			"name": "Israel"
	},
	{
			"currency": {
					"isoCode": "GBP",
					"name": "British Pound",
					"symbol": "£"
			},
			"isoCode": "IM",
			"name": "Isle of Man"
	},
	{
			"currency": {
					"isoCode": "INR",
					"name": "Indian Rupee",
					"symbol": "₹"
			},
			"isoCode": "IN",
			"name": "India"
	},
	{
			"currency": {
					"isoCode": "USD",
					"name": "United States Dollar",
					"symbol": "$"
			},
			"isoCode": "IO",
			"name": "British Indian Ocean Territory"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "IQ",
			"name": "Iraq"
	},
	{
			"currency": {
					"isoCode": "ISK",
					"name": "Icelandic Króna",
					"symbol": "kr"
			},
			"isoCode": "IS",
			"name": "Iceland"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "IT",
			"name": "Italy"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "JE",
			"name": "Jersey"
	},
	{
			"currency": {
					"isoCode": "JMD",
					"name": "Jamaican Dollar",
					"symbol": "$"
			},
			"isoCode": "JM",
			"name": "Jamaica"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "JO",
			"name": "Jordan"
	},
	{
			"currency": {
					"isoCode": "JPY",
					"name": "Japanese Yen",
					"symbol": "¥"
			},
			"isoCode": "JP",
			"name": "Japan"
	},
	{
			"currency": {
					"isoCode": "KES",
					"name": "Kenyan Shilling",
					"symbol": "KSh"
			},
			"isoCode": "KE",
			"name": "Kenya"
	},
	{
			"currency": {
					"isoCode": "KGS",
					"name": "Kyrgyzstani Som",
					"symbol": "som"
			},
			"isoCode": "KG",
			"name": "Kyrgyzstan"
	},
	{
			"currency": {
					"isoCode": "KHR",
					"name": "Cambodian Riel",
					"symbol": "៛"
			},
			"isoCode": "KH",
			"name": "Cambodia"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "KI",
			"name": "Kiribati"
	},
	{
			"currency": {
					"isoCode": "KMF",
					"name": "Comorian Franc",
					"symbol": "Fr"
			},
			"isoCode": "KM",
			"name": "Comoros"
	},
	{
			"currency": {
					"isoCode": "XCD",
					"name": "East Caribbean Dollar",
					"symbol": "$"
			},
			"isoCode": "KN",
			"name": "St. Kitts & Nevis"
	},
	{
			"currency": {
					"isoCode": "KRW",
					"name": "South Korean Won",
					"symbol": "₩"
			},
			"isoCode": "KR",
			"name": "South Korea"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "KW",
			"name": "Kuwait"
	},
	{
			"currency": {
					"isoCode": "KYD",
					"name": "Cayman Islands Dollar",
					"symbol": "$"
			},
			"isoCode": "KY",
			"name": "Cayman Islands"
	},
	{
			"currency": {
					"isoCode": "KZT",
					"name": "Kazakhstani Tenge",
					"symbol": "〒"
			},
			"isoCode": "KZ",
			"name": "Kazakhstan"
	},
	{
			"currency": {
					"isoCode": "LAK",
					"name": "Lao Kip",
					"symbol": "₭"
			},
			"isoCode": "LA",
			"name": "Laos"
	},
	{
			"currency": {
					"isoCode": "LBP",
					"name": "Lebanese Pound",
					"symbol": "ل.ل"
			},
			"isoCode": "LB",
			"name": "Lebanon"
	},
	{
			"currency": {
					"isoCode": "XCD",
					"name": "East Caribbean Dollar",
					"symbol": "$"
			},
			"isoCode": "LC",
			"name": "St. Lucia"
	},
	{
			"currency": {
					"isoCode": "CHF",
					"name": "Swiss Franc",
					"symbol": "CHF"
			},
			"isoCode": "LI",
			"name": "Liechtenstein"
	},
	{
			"currency": {
					"isoCode": "LKR",
					"name": "Sri Lankan Rupee",
					"symbol": "₨"
			},
			"isoCode": "LK",
			"name": "Sri Lanka"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "LR",
			"name": "Liberia"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "LS",
			"name": "Lesotho"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "LT",
			"name": "Lithuania"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "LU",
			"name": "Luxembourg"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "LV",
			"name": "Latvia"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "LY",
			"name": "Libya"
	},
	{
			"currency": {
					"isoCode": "MAD",
					"name": "Moroccan Dirham",
					"symbol": "د.م."
			},
			"isoCode": "MA",
			"name": "Morocco"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "MC",
			"name": "Monaco"
	},
	{
			"currency": {
					"isoCode": "MDL",
					"name": "Moldovan Leu",
					"symbol": "L"
			},
			"isoCode": "MD",
			"name": "Moldova"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "ME",
			"name": "Montenegro"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "MF",
			"name": "St. Martin"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "MG",
			"name": "Madagascar"
	},
	{
			"currency": {
					"isoCode": "MKD",
					"name": "Macedonian Denar",
					"symbol": "ден"
			},
			"isoCode": "MK",
			"name": "North Macedonia"
	},
	{
			"currency": {
					"isoCode": "XOF",
					"name": "West African Cfa Franc",
					"symbol": "Fr"
			},
			"isoCode": "ML",
			"name": "Mali"
	},
	{
			"currency": {
					"isoCode": "MMK",
					"name": "Myanmar Kyat",
					"symbol": "K"
			},
			"isoCode": "MM",
			"name": "Myanmar (Burma)"
	},
	{
			"currency": {
					"isoCode": "MNT",
					"name": "Mongolian Tögrög",
					"symbol": "₮"
			},
			"isoCode": "MN",
			"name": "Mongolia"
	},
	{
			"currency": {
					"isoCode": "MOP",
					"name": "Macanese Pataca",
					"symbol": "P"
			},
			"isoCode": "MO",
			"name": "Macao SAR"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "MQ",
			"name": "Martinique"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "MR",
			"name": "Mauritania"
	},
	{
			"currency": {
					"isoCode": "XCD",
					"name": "East Caribbean Dollar",
					"symbol": "$"
			},
			"isoCode": "MS",
			"name": "Montserrat"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "MT",
			"name": "Malta"
	},
	{
			"currency": {
					"isoCode": "MUR",
					"name": "Mauritian Rupee",
					"symbol": "₨"
			},
			"isoCode": "MU",
			"name": "Mauritius"
	},
	{
			"currency": {
					"isoCode": "MVR",
					"name": "Maldivian Rufiyaa",
					"symbol": "MVR"
			},
			"isoCode": "MV",
			"name": "Maldives"
	},
	{
			"currency": {
					"isoCode": "MWK",
					"name": "Malawian Kwacha",
					"symbol": "MK"
			},
			"isoCode": "MW",
			"name": "Malawi"
	},
	{
			"currency": {
					"isoCode": "MXN",
					"name": "Mexican Peso",
					"symbol": "$"
			},
			"isoCode": "MX",
			"name": "Mexico"
	},
	{
			"currency": {
					"isoCode": "MYR",
					"name": "Malaysian Ringgit",
					"symbol": "RM"
			},
			"isoCode": "MY",
			"name": "Malaysia"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "MZ",
			"name": "Mozambique"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "NA",
			"name": "Namibia"
	},
	{
			"currency": {
					"isoCode": "XPF",
					"name": "Cfp Franc",
					"symbol": "Fr"
			},
			"isoCode": "NC",
			"name": "New Caledonia"
	},
	{
			"currency": {
					"isoCode": "XOF",
					"name": "West African Cfa Franc",
					"symbol": "Fr"
			},
			"isoCode": "NE",
			"name": "Niger"
	},
	{
			"currency": {
					"isoCode": "AUD",
					"name": "Australian Dollar",
					"symbol": "$"
			},
			"isoCode": "NF",
			"name": "Norfolk Island"
	},
	{
			"currency": {
					"isoCode": "NGN",
					"name": "Nigerian Naira",
					"symbol": "₦"
			},
			"isoCode": "NG",
			"name": "Nigeria"
	},
	{
			"currency": {
					"isoCode": "NIO",
					"name": "Nicaraguan Córdoba",
					"symbol": "C$"
			},
			"isoCode": "NI",
			"name": "Nicaragua"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "NL",
			"name": "Netherlands"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "NO",
			"name": "Norway"
	},
	{
			"currency": {
					"isoCode": "NPR",
					"name": "Nepalese Rupee",
					"symbol": "₨"
			},
			"isoCode": "NP",
			"name": "Nepal"
	},
	{
			"currency": {
					"isoCode": "AUD",
					"name": "Australian Dollar",
					"symbol": "$"
			},
			"isoCode": "NR",
			"name": "Nauru"
	},
	{
			"currency": {
					"isoCode": "NZD",
					"name": "New Zealand Dollar",
					"symbol": "$"
			},
			"isoCode": "NU",
			"name": "Niue"
	},
	{
			"currency": {
					"isoCode": "NZD",
					"name": "New Zealand Dollar",
					"symbol": "$"
			},
			"isoCode": "NZ",
			"name": "New Zealand"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "OM",
			"name": "Oman"
	},
	{
			"currency": {
					"isoCode": "USD",
					"name": "United States Dollar",
					"symbol": "$"
			},
			"isoCode": "PA",
			"name": "Panama"
	},
	{
			"currency": {
					"isoCode": "PEN",
					"name": "Peruvian Sol",
					"symbol": "S/."
			},
			"isoCode": "PE",
			"name": "Peru"
	},
	{
			"currency": {
					"isoCode": "XPF",
					"name": "Cfp Franc",
					"symbol": "Fr"
			},
			"isoCode": "PF",
			"name": "French Polynesia"
	},
	{
			"currency": {
					"isoCode": "PGK",
					"name": "Papua New Guinean Kina",
					"symbol": "K"
			},
			"isoCode": "PG",
			"name": "Papua New Guinea"
	},
	{
			"currency": {
					"isoCode": "PHP",
					"name": "Philippine Peso",
					"symbol": "₱"
			},
			"isoCode": "PH",
			"name": "Philippines"
	},
	{
			"currency": {
					"isoCode": "PKR",
					"name": "Pakistani Rupee",
					"symbol": "₨"
			},
			"isoCode": "PK",
			"name": "Pakistan"
	},
	{
			"currency": {
					"isoCode": "PLN",
					"name": "Polish Złoty",
					"symbol": "zł"
			},
			"isoCode": "PL",
			"name": "Poland"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "PM",
			"name": "St. Pierre & Miquelon"
	},
	{
			"currency": {
					"isoCode": "NZD",
					"name": "New Zealand Dollar",
					"symbol": "$"
			},
			"isoCode": "PN",
			"name": "Pitcairn Islands"
	},
	{
			"currency": {
					"isoCode": "ILS",
					"name": "Israeli New Sheqel",
					"symbol": "₪"
			},
			"isoCode": "PS",
			"name": "Palestinian Territories"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "PT",
			"name": "Portugal"
	},
	{
			"currency": {
					"isoCode": "PYG",
					"name": "Paraguayan Guaraní",
					"symbol": "₲"
			},
			"isoCode": "PY",
			"name": "Paraguay"
	},
	{
			"currency": {
					"isoCode": "QAR",
					"name": "Qatari Riyal",
					"symbol": "ر.ق"
			},
			"isoCode": "QA",
			"name": "Qatar"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "RE",
			"name": "Réunion"
	},
	{
			"currency": {
					"isoCode": "RON",
					"name": "Romanian Leu",
					"symbol": "Lei"
			},
			"isoCode": "RO",
			"name": "Romania"
	},
	{
			"currency": {
					"isoCode": "RSD",
					"name": "Serbian Dinar",
					"symbol": "РСД"
			},
			"isoCode": "RS",
			"name": "Serbia"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "RU",
			"name": "Russia"
	},
	{
			"currency": {
					"isoCode": "RWF",
					"name": "Rwandan Franc",
					"symbol": "FRw"
			},
			"isoCode": "RW",
			"name": "Rwanda"
	},
	{
			"currency": {
					"isoCode": "SAR",
					"name": "Saudi Riyal",
					"symbol": "ر.س"
			},
			"isoCode": "SA",
			"name": "Saudi Arabia"
	},
	{
			"currency": {
					"isoCode": "SBD",
					"name": "Solomon Islands Dollar",
					"symbol": "$"
			},
			"isoCode": "SB",
			"name": "Solomon Islands"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "SC",
			"name": "Seychelles"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "SD",
			"name": "Sudan"
	},
	{
			"currency": {
					"isoCode": "SEK",
					"name": "Swedish Krona",
					"symbol": "kr"
			},
			"isoCode": "SE",
			"name": "Sweden"
	},
	{
			"currency": {
					"isoCode": "SGD",
					"name": "Singapore Dollar",
					"symbol": "$"
			},
			"isoCode": "SG",
			"name": "Singapore"
	},
	{
			"currency": {
					"isoCode": "SHP",
					"name": "Saint Helenian Pound",
					"symbol": "£"
			},
			"isoCode": "SH",
			"name": "St. Helena"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "SI",
			"name": "Slovenia"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "SJ",
			"name": "Svalbard & Jan Mayen"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "SK",
			"name": "Slovakia"
	},
	{
			"currency": {
					"isoCode": "SLL",
					"name": "Sierra Leonean Leone",
					"symbol": "Le"
			},
			"isoCode": "SL",
			"name": "Sierra Leone"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "SM",
			"name": "San Marino"
	},
	{
			"currency": {
					"isoCode": "XOF",
					"name": "West African Cfa Franc",
					"symbol": "Fr"
			},
			"isoCode": "SN",
			"name": "Senegal"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "SO",
			"name": "Somalia"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "SR",
			"name": "Suriname"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "SS",
			"name": "South Sudan"
	},
	{
			"currency": {
					"isoCode": "STD",
					"name": "São Tomé and Príncipe Dobra",
					"symbol": "Db"
			},
			"isoCode": "ST",
			"name": "São Tomé & Príncipe"
	},
	{
			"currency": {
					"isoCode": "USD",
					"name": "United States Dollar",
					"symbol": "$"
			},
			"isoCode": "SV",
			"name": "El Salvador"
	},
	{
			"currency": {
					"isoCode": "ANG",
					"name": "Netherlands Antillean Gulden",
					"symbol": "ƒ"
			},
			"isoCode": "SX",
			"name": "Sint Maarten"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "SZ",
			"name": "Eswatini"
	},
	{
			"currency": {
					"isoCode": "GBP",
					"name": "British Pound",
					"symbol": "£"
			},
			"isoCode": "TA",
			"name": "Tristan da Cunha"
	},
	{
			"currency": {
					"isoCode": "USD",
					"name": "United States Dollar",
					"symbol": "$"
			},
			"isoCode": "TC",
			"name": "Turks & Caicos Islands"
	},
	{
			"currency": {
					"isoCode": "XAF",
					"name": "Central African Cfa Franc",
					"symbol": "Fr"
			},
			"isoCode": "TD",
			"name": "Chad"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "TF",
			"name": "French Southern Territories"
	},
	{
			"currency": {
					"isoCode": "XOF",
					"name": "West African Cfa Franc",
					"symbol": "Fr"
			},
			"isoCode": "TG",
			"name": "Togo"
	},
	{
			"currency": {
					"isoCode": "THB",
					"name": "Thai Baht",
					"symbol": "฿"
			},
			"isoCode": "TH",
			"name": "Thailand"
	},
	{
			"currency": {
					"isoCode": "TJS",
					"name": "Tajikistani Somoni",
					"symbol": "ЅМ"
			},
			"isoCode": "TJ",
			"name": "Tajikistan"
	},
	{
			"currency": {
					"isoCode": "NZD",
					"name": "New Zealand Dollar",
					"symbol": "$"
			},
			"isoCode": "TK",
			"name": "Tokelau"
	},
	{
			"currency": {
					"isoCode": "USD",
					"name": "United States Dollar",
					"symbol": "$"
			},
			"isoCode": "TL",
			"name": "Timor-Leste"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "TM",
			"name": "Turkmenistan"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "TN",
			"name": "Tunisia"
	},
	{
			"currency": {
					"isoCode": "TOP",
					"name": "Tongan Paʻanga",
					"symbol": "T$"
			},
			"isoCode": "TO",
			"name": "Tonga"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "TR",
			"name": "Turkey"
	},
	{
			"currency": {
					"isoCode": "TTD",
					"name": "Trinidad and Tobago Dollar",
					"symbol": "$"
			},
			"isoCode": "TT",
			"name": "Trinidad & Tobago"
	},
	{
			"currency": {
					"isoCode": "AUD",
					"name": "Australian Dollar",
					"symbol": "$"
			},
			"isoCode": "TV",
			"name": "Tuvalu"
	},
	{
			"currency": {
					"isoCode": "TWD",
					"name": "New Taiwan Dollar",
					"symbol": "$"
			},
			"isoCode": "TW",
			"name": "Taiwan"
	},
	{
			"currency": {
					"isoCode": "TZS",
					"name": "Tanzanian Shilling",
					"symbol": "Sh"
			},
			"isoCode": "TZ",
			"name": "Tanzania"
	},
	{
			"currency": {
					"isoCode": "UAH",
					"name": "Ukrainian Hryvnia",
					"symbol": "₴"
			},
			"isoCode": "UA",
			"name": "Ukraine"
	},
	{
			"currency": {
					"isoCode": "UGX",
					"name": "Ugandan Shilling",
					"symbol": "USh"
			},
			"isoCode": "UG",
			"name": "Uganda"
	},
	{
			"currency": {
					"isoCode": "USD",
					"name": "United States Dollar",
					"symbol": "$"
			},
			"isoCode": "UM",
			"name": "U.S. Outlying Islands"
	},
	{
			"currency": {
					"isoCode": "USD",
					"name": "United States Dollar",
					"symbol": "$"
			},
			"isoCode": "US",
			"name": "United States"
	},
	{
			"currency": {
					"isoCode": "UYU",
					"name": "Uruguayan Peso",
					"symbol": "$"
			},
			"isoCode": "UY",
			"name": "Uruguay"
	},
	{
			"currency": {
					"isoCode": "UZS",
					"name": "Uzbekistan Som",
					"symbol": ""
			},
			"isoCode": "UZ",
			"name": "Uzbekistan"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "VA",
			"name": "Vatican City"
	},
	{
			"currency": {
					"isoCode": "XCD",
					"name": "East Caribbean Dollar",
					"symbol": "$"
			},
			"isoCode": "VC",
			"name": "St. Vincent & Grenadines"
	},
	{
			"currency": {
					"isoCode": "USD",
					"name": "United States Dollar",
					"symbol": "$"
			},
			"isoCode": "VE",
			"name": "Venezuela"
	},
	{
			"currency": {
					"isoCode": "USD",
					"name": "United States Dollar",
					"symbol": "$"
			},
			"isoCode": "VG",
			"name": "British Virgin Islands"
	},
	{
			"currency": {
					"isoCode": "VND",
					"name": "Vietnamese Đồng",
					"symbol": "₫"
			},
			"isoCode": "VN",
			"name": "Vietnam"
	},
	{
			"currency": {
					"isoCode": "VUV",
					"name": "Vanuatu Vatu",
					"symbol": "Vt"
			},
			"isoCode": "VU",
			"name": "Vanuatu"
	},
	{
			"currency": {
					"isoCode": "XPF",
					"name": "Cfp Franc",
					"symbol": "Fr"
			},
			"isoCode": "WF",
			"name": "Wallis & Futuna"
	},
	{
			"currency": {
					"isoCode": "WST",
					"name": "Samoan Tala",
					"symbol": "T"
			},
			"isoCode": "WS",
			"name": "Samoa"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "XK",
			"name": "Kosovo"
	},
	{
			"currency": {
					"isoCode": "YER",
					"name": "Yemeni Rial",
					"symbol": "﷼"
			},
			"isoCode": "YE",
			"name": "Yemen"
	},
	{
			"currency": {
					"isoCode": "EUR",
					"name": "Euro",
					"symbol": "€"
			},
			"isoCode": "YT",
			"name": "Mayotte"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "ZA",
			"name": "South Africa"
	},
	{
			"currency": {
					"isoCode": "CNY",
					"name": "Chinese Renminbi Yuan",
					"symbol": "¥"
			},
			"isoCode": "ZM",
			"name": "Zambia"
	},
	{
			"currency": {
					"isoCode": "USD",
					"name": "United States Dollar",
					"symbol": "$"
			},
			"isoCode": "ZW",
			"name": "Zimbabwe"
	}
]

exports.originList = originList