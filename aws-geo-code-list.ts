// File started off with `aws route53 list-geo-locations > aws-geo-code-list.ts`
// and then modified to export the data as a module
// Further enriched with o1 model to add ContinentCode (might not be accurate)

const data = {
    "GeoLocationDetailsList": [
        {
            "CountryCode": "*",
            "CountryName": "Default"
            // No continent for the default record
        },
        {
            "CountryCode": "AD",
            "CountryName": "Andorra",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "AE",
            "CountryName": "United Arab Emirates",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "AF",
            "CountryName": "Afghanistan",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "AG",
            "CountryName": "Antigua and Barbuda",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "AI",
            "CountryName": "Anguilla",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "AL",
            "CountryName": "Albania",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "AM",
            "CountryName": "Armenia",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "AO",
            "CountryName": "Angola",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "AQ",
            "CountryName": "Antarctica",
            "ContinentCode": "AN"
        },
        {
            "CountryCode": "AR",
            "CountryName": "Argentina",
            "ContinentCode": "SA"
        },
        {
            "CountryCode": "AS",
            "CountryName": "American Samoa",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "AT",
            "CountryName": "Austria",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "AU",
            "CountryName": "Australia",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "AW",
            "CountryName": "Aruba",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "AX",
            "CountryName": "Åland",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "AZ",
            "CountryName": "Azerbaijan",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "BA",
            "CountryName": "Bosnia and Herzegovina",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "BB",
            "CountryName": "Barbados",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "BD",
            "CountryName": "Bangladesh",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "BE",
            "CountryName": "Belgium",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "BF",
            "CountryName": "Burkina Faso",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "BG",
            "CountryName": "Bulgaria",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "BH",
            "CountryName": "Bahrain",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "BI",
            "CountryName": "Burundi",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "BJ",
            "CountryName": "Benin",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "BL",
            "CountryName": "Saint Barthélemy",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "BM",
            "CountryName": "Bermuda",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "BN",
            "CountryName": "Brunei",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "BO",
            "CountryName": "Bolivia",
            "ContinentCode": "SA"
        },
        {
            "CountryCode": "BQ",
            "CountryName": "Bonaire",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "BR",
            "CountryName": "Brazil",
            "ContinentCode": "SA"
        },
        {
            "CountryCode": "BS",
            "CountryName": "Bahamas",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "BT",
            "CountryName": "Bhutan",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "BW",
            "CountryName": "Botswana",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "BY",
            "CountryName": "Belarus",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "BZ",
            "CountryName": "Belize",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "CA",
            "CountryName": "Canada",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "CC",
            "CountryName": "Cocos [Keeling] Islands",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "CD",
            "CountryName": "Congo",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "CF",
            "CountryName": "Central African Republic",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "CG",
            "CountryName": "Republic of the Congo",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "CH",
            "CountryName": "Switzerland",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "CI",
            "CountryName": "Ivory Coast",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "CK",
            "CountryName": "Cook Islands",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "CL",
            "CountryName": "Chile",
            "ContinentCode": "SA"
        },
        {
            "CountryCode": "CM",
            "CountryName": "Cameroon",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "CN",
            "CountryName": "China",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "CO",
            "CountryName": "Colombia",
            "ContinentCode": "SA"
        },
        {
            "CountryCode": "CR",
            "CountryName": "Costa Rica",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "CU",
            "CountryName": "Cuba",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "CV",
            "CountryName": "Cape Verde",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "CW",
            "CountryName": "Curaçao",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "CY",
            "CountryName": "Cyprus",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "CZ",
            "CountryName": "Czech Republic",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "DE",
            "CountryName": "Germany",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "DJ",
            "CountryName": "Djibouti",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "DK",
            "CountryName": "Denmark",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "DM",
            "CountryName": "Dominica",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "DO",
            "CountryName": "Dominican Republic",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "DZ",
            "CountryName": "Algeria",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "EC",
            "CountryName": "Ecuador",
            "ContinentCode": "SA"
        },
        {
            "CountryCode": "EE",
            "CountryName": "Estonia",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "EG",
            "CountryName": "Egypt",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "ER",
            "CountryName": "Eritrea",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "ES",
            "CountryName": "Spain",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "ET",
            "CountryName": "Ethiopia",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "FI",
            "CountryName": "Finland",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "FJ",
            "CountryName": "Fiji",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "FK",
            "CountryName": "Falkland Islands",
            "ContinentCode": "SA"
        },
        {
            "CountryCode": "FM",
            "CountryName": "Federated States of Micronesia",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "FO",
            "CountryName": "Faroe Islands",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "FR",
            "CountryName": "France",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "GA",
            "CountryName": "Gabon",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "GB",
            "CountryName": "United Kingdom",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "GD",
            "CountryName": "Grenada",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "GE",
            "CountryName": "Georgia",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "GF",
            "CountryName": "French Guiana",
            "ContinentCode": "SA"
        },
        {
            "CountryCode": "GG",
            "CountryName": "Guernsey",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "GH",
            "CountryName": "Ghana",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "GI",
            "CountryName": "Gibraltar",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "GL",
            "CountryName": "Greenland",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "GM",
            "CountryName": "Gambia",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "GN",
            "CountryName": "Guinea",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "GP",
            "CountryName": "Guadeloupe",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "GQ",
            "CountryName": "Equatorial Guinea",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "GR",
            "CountryName": "Greece",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "GS",
            "CountryName": "South Georgia and the South Sandwich Islands",
            "ContinentCode": "AN"
        },
        {
            "CountryCode": "GT",
            "CountryName": "Guatemala",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "GU",
            "CountryName": "Guam",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "GW",
            "CountryName": "Guinea-Bissau",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "GY",
            "CountryName": "Guyana",
            "ContinentCode": "SA"
        },
        {
            "CountryCode": "HK",
            "CountryName": "Hong Kong",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "HN",
            "CountryName": "Honduras",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "HR",
            "CountryName": "Croatia",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "HT",
            "CountryName": "Haiti",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "HU",
            "CountryName": "Hungary",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "ID",
            "CountryName": "Indonesia",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "IE",
            "CountryName": "Ireland",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "IL",
            "CountryName": "Israel",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "IM",
            "CountryName": "Isle of Man",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "IN",
            "CountryName": "India",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "IO",
            "CountryName": "British Indian Ocean Territory",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "IQ",
            "CountryName": "Iraq",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "IR",
            "CountryName": "Iran",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "IS",
            "CountryName": "Iceland",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "IT",
            "CountryName": "Italy",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "JE",
            "CountryName": "Jersey",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "JM",
            "CountryName": "Jamaica",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "JO",
            "CountryName": "Hashemite Kingdom of Jordan",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "JP",
            "CountryName": "Japan",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "KE",
            "CountryName": "Kenya",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "KG",
            "CountryName": "Kyrgyzstan",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "KH",
            "CountryName": "Cambodia",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "KI",
            "CountryName": "Kiribati",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "KM",
            "CountryName": "Comoros",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "KN",
            "CountryName": "Saint Kitts and Nevis",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "KP",
            "CountryName": "North Korea",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "KR",
            "CountryName": "Republic of Korea",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "KW",
            "CountryName": "Kuwait",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "KY",
            "CountryName": "Cayman Islands",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "KZ",
            "CountryName": "Kazakhstan",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "LA",
            "CountryName": "Laos",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "LB",
            "CountryName": "Lebanon",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "LC",
            "CountryName": "Saint Lucia",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "LI",
            "CountryName": "Liechtenstein",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "LK",
            "CountryName": "Sri Lanka",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "LR",
            "CountryName": "Liberia",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "LS",
            "CountryName": "Lesotho",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "LT",
            "CountryName": "Lithuania",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "LU",
            "CountryName": "Luxembourg",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "LV",
            "CountryName": "Latvia",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "LY",
            "CountryName": "Libya",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "MA",
            "CountryName": "Morocco",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "MC",
            "CountryName": "Monaco",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "MD",
            "CountryName": "Republic of Moldova",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "ME",
            "CountryName": "Montenegro",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "MF",
            "CountryName": "Saint Martin",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "MG",
            "CountryName": "Madagascar",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "MH",
            "CountryName": "Marshall Islands",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "MK",
            "CountryName": "Macedonia",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "ML",
            "CountryName": "Mali",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "MM",
            "CountryName": "Myanmar [Burma]",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "MN",
            "CountryName": "Mongolia",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "MO",
            "CountryName": "Macao",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "MP",
            "CountryName": "Northern Mariana Islands",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "MQ",
            "CountryName": "Martinique",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "MR",
            "CountryName": "Mauritania",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "MS",
            "CountryName": "Montserrat",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "MT",
            "CountryName": "Malta",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "MU",
            "CountryName": "Mauritius",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "MV",
            "CountryName": "Maldives",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "MW",
            "CountryName": "Malawi",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "MX",
            "CountryName": "Mexico",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "MY",
            "CountryName": "Malaysia",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "MZ",
            "CountryName": "Mozambique",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "NA",
            "CountryName": "Namibia",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "NC",
            "CountryName": "New Caledonia",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "NE",
            "CountryName": "Niger",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "NF",
            "CountryName": "Norfolk Island",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "NG",
            "CountryName": "Nigeria",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "NI",
            "CountryName": "Nicaragua",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "NL",
            "CountryName": "Netherlands",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "NO",
            "CountryName": "Norway",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "NP",
            "CountryName": "Nepal",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "NR",
            "CountryName": "Nauru",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "NU",
            "CountryName": "Niue",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "NZ",
            "CountryName": "New Zealand",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "OM",
            "CountryName": "Oman",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "PA",
            "CountryName": "Panama",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "PE",
            "CountryName": "Peru",
            "ContinentCode": "SA"
        },
        {
            "CountryCode": "PF",
            "CountryName": "French Polynesia",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "PG",
            "CountryName": "Papua New Guinea",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "PH",
            "CountryName": "Philippines",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "PK",
            "CountryName": "Pakistan",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "PL",
            "CountryName": "Poland",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "PM",
            "CountryName": "Saint Pierre and Miquelon",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "PN",
            "CountryName": "Pitcairn Islands",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "PR",
            "CountryName": "Puerto Rico",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "PS",
            "CountryName": "Palestine",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "PT",
            "CountryName": "Portugal",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "PW",
            "CountryName": "Palau",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "PY",
            "CountryName": "Paraguay",
            "ContinentCode": "SA"
        },
        {
            "CountryCode": "QA",
            "CountryName": "Qatar",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "RE",
            "CountryName": "Réunion",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "RO",
            "CountryName": "Romania",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "RS",
            "CountryName": "Serbia",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "RU",
            "CountryName": "Russia",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "RW",
            "CountryName": "Rwanda",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "SA",
            "CountryName": "Saudi Arabia",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "SB",
            "CountryName": "Solomon Islands",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "SC",
            "CountryName": "Seychelles",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "SD",
            "CountryName": "Sudan",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "SE",
            "CountryName": "Sweden",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "SG",
            "CountryName": "Singapore",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "SH",
            "CountryName": "Saint Helena",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "SI",
            "CountryName": "Slovenia",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "SJ",
            "CountryName": "Svalbard and Jan Mayen",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "SK",
            "CountryName": "Slovakia",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "SL",
            "CountryName": "Sierra Leone",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "SM",
            "CountryName": "San Marino",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "SN",
            "CountryName": "Senegal",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "SO",
            "CountryName": "Somalia",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "SR",
            "CountryName": "Suriname",
            "ContinentCode": "SA"
        },
        {
            "CountryCode": "SS",
            "CountryName": "South Sudan",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "ST",
            "CountryName": "São Tomé and Príncipe",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "SV",
            "CountryName": "El Salvador",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "SX",
            "CountryName": "Sint Maarten",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "SY",
            "CountryName": "Syria",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "SZ",
            "CountryName": "Swaziland",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "TC",
            "CountryName": "Turks and Caicos Islands",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "TD",
            "CountryName": "Chad",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "TF",
            "CountryName": "French Southern Territories",
            "ContinentCode": "AN"
        },
        {
            "CountryCode": "TG",
            "CountryName": "Togo",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "TH",
            "CountryName": "Thailand",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "TJ",
            "CountryName": "Tajikistan",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "TK",
            "CountryName": "Tokelau",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "TL",
            "CountryName": "East Timor",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "TM",
            "CountryName": "Turkmenistan",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "TN",
            "CountryName": "Tunisia",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "TO",
            "CountryName": "Tonga",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "TR",
            "CountryName": "Turkey",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "TT",
            "CountryName": "Trinidad and Tobago",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "TV",
            "CountryName": "Tuvalu",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "TW",
            "CountryName": "Taiwan",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "TZ",
            "CountryName": "Tanzania",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "05",
            "SubdivisionName": "Vinnytska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "07",
            "SubdivisionName": "Volynska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "09",
            "SubdivisionName": "Luhanska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "11",
            "SubdivisionName": "Crimea",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "12",
            "SubdivisionName": "Dnipropetrovska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "14",
            "SubdivisionName": "Donetska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "18",
            "SubdivisionName": "Zhytomyrska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "20",
            "SubdivisionName": "Sevastopol",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "21",
            "SubdivisionName": "Zakarpatska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "23",
            "SubdivisionName": "Zaporizka oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "26",
            "SubdivisionName": "Ivano-Frankivska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "30",
            "SubdivisionName": "Kyiv",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "32",
            "SubdivisionName": "Kyivska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "35",
            "SubdivisionName": "Kirovohradska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "46",
            "SubdivisionName": "Lvivska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "48",
            "SubdivisionName": "Mykolaivska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "51",
            "SubdivisionName": "Odeska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "53",
            "SubdivisionName": "Poltavska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "56",
            "SubdivisionName": "Rivnenska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "59",
            "SubdivisionName": "Sumska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "61",
            "SubdivisionName": "Ternopilska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "63",
            "SubdivisionName": "Kharkivska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "65",
            "SubdivisionName": "Khersonska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "68",
            "SubdivisionName": "Khmelnytska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "71",
            "SubdivisionName": "Cherkaska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "74",
            "SubdivisionName": "Chernihivska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "77",
            "SubdivisionName": "Chernivetska oblast",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "UG",
            "CountryName": "Uganda",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "UM",
            "CountryName": "U.S. Minor Outlying Islands",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "AK",
            "SubdivisionName": "Alaska",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "AL",
            "SubdivisionName": "Alabama",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "AR",
            "SubdivisionName": "Arkansas",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "AZ",
            "SubdivisionName": "Arizona",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "CA",
            "SubdivisionName": "California",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "CO",
            "SubdivisionName": "Colorado",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "CT",
            "SubdivisionName": "Connecticut",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "DC",
            "SubdivisionName": "District of Columbia",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "DE",
            "SubdivisionName": "Delaware",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "FL",
            "SubdivisionName": "Florida",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "GA",
            "SubdivisionName": "Georgia",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "HI",
            "SubdivisionName": "Hawaii",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "IA",
            "SubdivisionName": "Iowa",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "ID",
            "SubdivisionName": "Idaho",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "IL",
            "SubdivisionName": "Illinois",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "IN",
            "SubdivisionName": "Indiana",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "KS",
            "SubdivisionName": "Kansas",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "KY",
            "SubdivisionName": "Kentucky",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "LA",
            "SubdivisionName": "Louisiana",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "MA",
            "SubdivisionName": "Massachusetts",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "MD",
            "SubdivisionName": "Maryland",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "ME",
            "SubdivisionName": "Maine",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "MI",
            "SubdivisionName": "Michigan",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "MN",
            "SubdivisionName": "Minnesota",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "MO",
            "SubdivisionName": "Missouri",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "MS",
            "SubdivisionName": "Mississippi",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "MT",
            "SubdivisionName": "Montana",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "NC",
            "SubdivisionName": "North Carolina",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "ND",
            "SubdivisionName": "North Dakota",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "NE",
            "SubdivisionName": "Nebraska",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "NH",
            "SubdivisionName": "New Hampshire",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "NJ",
            "SubdivisionName": "New Jersey",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "NM",
            "SubdivisionName": "New Mexico",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "NV",
            "SubdivisionName": "Nevada",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "NY",
            "SubdivisionName": "New York",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "OH",
            "SubdivisionName": "Ohio",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "OK",
            "SubdivisionName": "Oklahoma",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "OR",
            "SubdivisionName": "Oregon",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "PA",
            "SubdivisionName": "Pennsylvania",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "RI",
            "SubdivisionName": "Rhode Island",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "SC",
            "SubdivisionName": "South Carolina",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "SD",
            "SubdivisionName": "South Dakota",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "TN",
            "SubdivisionName": "Tennessee",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "TX",
            "SubdivisionName": "Texas",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "UT",
            "SubdivisionName": "Utah",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "VA",
            "SubdivisionName": "Virginia",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "VT",
            "SubdivisionName": "Vermont",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "WA",
            "SubdivisionName": "Washington",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "WI",
            "SubdivisionName": "Wisconsin",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "WV",
            "SubdivisionName": "West Virginia",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "WY",
            "SubdivisionName": "Wyoming",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "UY",
            "CountryName": "Uruguay",
            "ContinentCode": "SA"
        },
        {
            "CountryCode": "UZ",
            "CountryName": "Uzbekistan",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "VA",
            "CountryName": "Vatican City",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "VC",
            "CountryName": "Saint Vincent and the Grenadines",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "VE",
            "CountryName": "Venezuela",
            "ContinentCode": "SA"
        },
        {
            "CountryCode": "VG",
            "CountryName": "British Virgin Islands",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "VI",
            "CountryName": "U.S. Virgin Islands",
            "ContinentCode": "NA"
        },
        {
            "CountryCode": "VN",
            "CountryName": "Vietnam",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "VU",
            "CountryName": "Vanuatu",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "WF",
            "CountryName": "Wallis and Futuna",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "WS",
            "CountryName": "Samoa",
            "ContinentCode": "OC"
        },
        {
            "CountryCode": "XK",
            "CountryName": "Kosovo",
            "ContinentCode": "EU"
        },
        {
            "CountryCode": "YE",
            "CountryName": "Yemen",
            "ContinentCode": "AS"
        },
        {
            "CountryCode": "YT",
            "CountryName": "Mayotte",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "ZA",
            "CountryName": "South Africa",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "ZM",
            "CountryName": "Zambia",
            "ContinentCode": "AF"
        },
        {
            "CountryCode": "ZW",
            "CountryName": "Zimbabwe",
            "ContinentCode": "AF"
        },

        // These are the “continent” rows from the original data
        // left as-is (not countries, so they already have ContinentCode).
        {
            "ContinentCode": "AF",
            "ContinentName": "Africa"
        },
        {
            "ContinentCode": "AN",
            "ContinentName": "Antarctica"
        },
        {
            "ContinentCode": "AS",
            "ContinentName": "Asia"
        },
        {
            "ContinentCode": "EU",
            "ContinentName": "Europe"
        },
        {
            "ContinentCode": "NA",
            "ContinentName": "North America"
        },
        {
            "ContinentCode": "OC",
            "ContinentName": "Oceania"
        },
        {
            "ContinentCode": "SA",
            "ContinentName": "South America"
        }
    ],
    "IsTruncated": false,
    "MaxItems": "500"
};

export default data;