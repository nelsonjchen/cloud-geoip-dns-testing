// File started off with `aws route53 list-geo-locations > aws-geo-code-list.ts`
// and then modified to export the data as a module

const data = {
    "GeoLocationDetailsList": [
        {
            "CountryCode": "*",
            "CountryName": "Default"
        },
        {
            "CountryCode": "AD",
            "CountryName": "Andorra"
        },
        {
            "CountryCode": "AE",
            "CountryName": "United Arab Emirates"
        },
        {
            "CountryCode": "AF",
            "CountryName": "Afghanistan"
        },
        {
            "CountryCode": "AG",
            "CountryName": "Antigua and Barbuda"
        },
        {
            "CountryCode": "AI",
            "CountryName": "Anguilla"
        },
        {
            "CountryCode": "AL",
            "CountryName": "Albania"
        },
        {
            "CountryCode": "AM",
            "CountryName": "Armenia"
        },
        {
            "CountryCode": "AO",
            "CountryName": "Angola"
        },
        {
            "CountryCode": "AQ",
            "CountryName": "Antarctica"
        },
        {
            "CountryCode": "AR",
            "CountryName": "Argentina"
        },
        {
            "CountryCode": "AS",
            "CountryName": "American Samoa"
        },
        {
            "CountryCode": "AT",
            "CountryName": "Austria"
        },
        {
            "CountryCode": "AU",
            "CountryName": "Australia"
        },
        {
            "CountryCode": "AW",
            "CountryName": "Aruba"
        },
        {
            "CountryCode": "AX",
            "CountryName": "Åland"
        },
        {
            "CountryCode": "AZ",
            "CountryName": "Azerbaijan"
        },
        {
            "CountryCode": "BA",
            "CountryName": "Bosnia and Herzegovina"
        },
        {
            "CountryCode": "BB",
            "CountryName": "Barbados"
        },
        {
            "CountryCode": "BD",
            "CountryName": "Bangladesh"
        },
        {
            "CountryCode": "BE",
            "CountryName": "Belgium"
        },
        {
            "CountryCode": "BF",
            "CountryName": "Burkina Faso"
        },
        {
            "CountryCode": "BG",
            "CountryName": "Bulgaria"
        },
        {
            "CountryCode": "BH",
            "CountryName": "Bahrain"
        },
        {
            "CountryCode": "BI",
            "CountryName": "Burundi"
        },
        {
            "CountryCode": "BJ",
            "CountryName": "Benin"
        },
        {
            "CountryCode": "BL",
            "CountryName": "Saint Barthélemy"
        },
        {
            "CountryCode": "BM",
            "CountryName": "Bermuda"
        },
        {
            "CountryCode": "BN",
            "CountryName": "Brunei"
        },
        {
            "CountryCode": "BO",
            "CountryName": "Bolivia"
        },
        {
            "CountryCode": "BQ",
            "CountryName": "Bonaire"
        },
        {
            "CountryCode": "BR",
            "CountryName": "Brazil"
        },
        {
            "CountryCode": "BS",
            "CountryName": "Bahamas"
        },
        {
            "CountryCode": "BT",
            "CountryName": "Bhutan"
        },
        {
            "CountryCode": "BW",
            "CountryName": "Botswana"
        },
        {
            "CountryCode": "BY",
            "CountryName": "Belarus"
        },
        {
            "CountryCode": "BZ",
            "CountryName": "Belize"
        },
        {
            "CountryCode": "CA",
            "CountryName": "Canada"
        },
        {
            "CountryCode": "CC",
            "CountryName": "Cocos [Keeling] Islands"
        },
        {
            "CountryCode": "CD",
            "CountryName": "Congo"
        },
        {
            "CountryCode": "CF",
            "CountryName": "Central African Republic"
        },
        {
            "CountryCode": "CG",
            "CountryName": "Republic of the Congo"
        },
        {
            "CountryCode": "CH",
            "CountryName": "Switzerland"
        },
        {
            "CountryCode": "CI",
            "CountryName": "Ivory Coast"
        },
        {
            "CountryCode": "CK",
            "CountryName": "Cook Islands"
        },
        {
            "CountryCode": "CL",
            "CountryName": "Chile"
        },
        {
            "CountryCode": "CM",
            "CountryName": "Cameroon"
        },
        {
            "CountryCode": "CN",
            "CountryName": "China"
        },
        {
            "CountryCode": "CO",
            "CountryName": "Colombia"
        },
        {
            "CountryCode": "CR",
            "CountryName": "Costa Rica"
        },
        {
            "CountryCode": "CU",
            "CountryName": "Cuba"
        },
        {
            "CountryCode": "CV",
            "CountryName": "Cape Verde"
        },
        {
            "CountryCode": "CW",
            "CountryName": "Curaçao"
        },
        {
            "CountryCode": "CY",
            "CountryName": "Cyprus"
        },
        {
            "CountryCode": "CZ",
            "CountryName": "Czech Republic"
        },
        {
            "CountryCode": "DE",
            "CountryName": "Germany"
        },
        {
            "CountryCode": "DJ",
            "CountryName": "Djibouti"
        },
        {
            "CountryCode": "DK",
            "CountryName": "Denmark"
        },
        {
            "CountryCode": "DM",
            "CountryName": "Dominica"
        },
        {
            "CountryCode": "DO",
            "CountryName": "Dominican Republic"
        },
        {
            "CountryCode": "DZ",
            "CountryName": "Algeria"
        },
        {
            "CountryCode": "EC",
            "CountryName": "Ecuador"
        },
        {
            "CountryCode": "EE",
            "CountryName": "Estonia"
        },
        {
            "CountryCode": "EG",
            "CountryName": "Egypt"
        },
        {
            "CountryCode": "ER",
            "CountryName": "Eritrea"
        },
        {
            "CountryCode": "ES",
            "CountryName": "Spain"
        },
        {
            "CountryCode": "ET",
            "CountryName": "Ethiopia"
        },
        {
            "CountryCode": "FI",
            "CountryName": "Finland"
        },
        {
            "CountryCode": "FJ",
            "CountryName": "Fiji"
        },
        {
            "CountryCode": "FK",
            "CountryName": "Falkland Islands"
        },
        {
            "CountryCode": "FM",
            "CountryName": "Federated States of Micronesia"
        },
        {
            "CountryCode": "FO",
            "CountryName": "Faroe Islands"
        },
        {
            "CountryCode": "FR",
            "CountryName": "France"
        },
        {
            "CountryCode": "GA",
            "CountryName": "Gabon"
        },
        {
            "CountryCode": "GB",
            "CountryName": "United Kingdom"
        },
        {
            "CountryCode": "GD",
            "CountryName": "Grenada"
        },
        {
            "CountryCode": "GE",
            "CountryName": "Georgia"
        },
        {
            "CountryCode": "GF",
            "CountryName": "French Guiana"
        },
        {
            "CountryCode": "GG",
            "CountryName": "Guernsey"
        },
        {
            "CountryCode": "GH",
            "CountryName": "Ghana"
        },
        {
            "CountryCode": "GI",
            "CountryName": "Gibraltar"
        },
        {
            "CountryCode": "GL",
            "CountryName": "Greenland"
        },
        {
            "CountryCode": "GM",
            "CountryName": "Gambia"
        },
        {
            "CountryCode": "GN",
            "CountryName": "Guinea"
        },
        {
            "CountryCode": "GP",
            "CountryName": "Guadeloupe"
        },
        {
            "CountryCode": "GQ",
            "CountryName": "Equatorial Guinea"
        },
        {
            "CountryCode": "GR",
            "CountryName": "Greece"
        },
        {
            "CountryCode": "GS",
            "CountryName": "South Georgia and the South Sandwich Islands"
        },
        {
            "CountryCode": "GT",
            "CountryName": "Guatemala"
        },
        {
            "CountryCode": "GU",
            "CountryName": "Guam"
        },
        {
            "CountryCode": "GW",
            "CountryName": "Guinea-Bissau"
        },
        {
            "CountryCode": "GY",
            "CountryName": "Guyana"
        },
        {
            "CountryCode": "HK",
            "CountryName": "Hong Kong"
        },
        {
            "CountryCode": "HN",
            "CountryName": "Honduras"
        },
        {
            "CountryCode": "HR",
            "CountryName": "Croatia"
        },
        {
            "CountryCode": "HT",
            "CountryName": "Haiti"
        },
        {
            "CountryCode": "HU",
            "CountryName": "Hungary"
        },
        {
            "CountryCode": "ID",
            "CountryName": "Indonesia"
        },
        {
            "CountryCode": "IE",
            "CountryName": "Ireland"
        },
        {
            "CountryCode": "IL",
            "CountryName": "Israel"
        },
        {
            "CountryCode": "IM",
            "CountryName": "Isle of Man"
        },
        {
            "CountryCode": "IN",
            "CountryName": "India"
        },
        {
            "CountryCode": "IO",
            "CountryName": "British Indian Ocean Territory"
        },
        {
            "CountryCode": "IQ",
            "CountryName": "Iraq"
        },
        {
            "CountryCode": "IR",
            "CountryName": "Iran"
        },
        {
            "CountryCode": "IS",
            "CountryName": "Iceland"
        },
        {
            "CountryCode": "IT",
            "CountryName": "Italy"
        },
        {
            "CountryCode": "JE",
            "CountryName": "Jersey"
        },
        {
            "CountryCode": "JM",
            "CountryName": "Jamaica"
        },
        {
            "CountryCode": "JO",
            "CountryName": "Hashemite Kingdom of Jordan"
        },
        {
            "CountryCode": "JP",
            "CountryName": "Japan"
        },
        {
            "CountryCode": "KE",
            "CountryName": "Kenya"
        },
        {
            "CountryCode": "KG",
            "CountryName": "Kyrgyzstan"
        },
        {
            "CountryCode": "KH",
            "CountryName": "Cambodia"
        },
        {
            "CountryCode": "KI",
            "CountryName": "Kiribati"
        },
        {
            "CountryCode": "KM",
            "CountryName": "Comoros"
        },
        {
            "CountryCode": "KN",
            "CountryName": "Saint Kitts and Nevis"
        },
        {
            "CountryCode": "KP",
            "CountryName": "North Korea"
        },
        {
            "CountryCode": "KR",
            "CountryName": "Republic of Korea"
        },
        {
            "CountryCode": "KW",
            "CountryName": "Kuwait"
        },
        {
            "CountryCode": "KY",
            "CountryName": "Cayman Islands"
        },
        {
            "CountryCode": "KZ",
            "CountryName": "Kazakhstan"
        },
        {
            "CountryCode": "LA",
            "CountryName": "Laos"
        },
        {
            "CountryCode": "LB",
            "CountryName": "Lebanon"
        },
        {
            "CountryCode": "LC",
            "CountryName": "Saint Lucia"
        },
        {
            "CountryCode": "LI",
            "CountryName": "Liechtenstein"
        },
        {
            "CountryCode": "LK",
            "CountryName": "Sri Lanka"
        },
        {
            "CountryCode": "LR",
            "CountryName": "Liberia"
        },
        {
            "CountryCode": "LS",
            "CountryName": "Lesotho"
        },
        {
            "CountryCode": "LT",
            "CountryName": "Lithuania"
        },
        {
            "CountryCode": "LU",
            "CountryName": "Luxembourg"
        },
        {
            "CountryCode": "LV",
            "CountryName": "Latvia"
        },
        {
            "CountryCode": "LY",
            "CountryName": "Libya"
        },
        {
            "CountryCode": "MA",
            "CountryName": "Morocco"
        },
        {
            "CountryCode": "MC",
            "CountryName": "Monaco"
        },
        {
            "CountryCode": "MD",
            "CountryName": "Republic of Moldova"
        },
        {
            "CountryCode": "ME",
            "CountryName": "Montenegro"
        },
        {
            "CountryCode": "MF",
            "CountryName": "Saint Martin"
        },
        {
            "CountryCode": "MG",
            "CountryName": "Madagascar"
        },
        {
            "CountryCode": "MH",
            "CountryName": "Marshall Islands"
        },
        {
            "CountryCode": "MK",
            "CountryName": "Macedonia"
        },
        {
            "CountryCode": "ML",
            "CountryName": "Mali"
        },
        {
            "CountryCode": "MM",
            "CountryName": "Myanmar [Burma]"
        },
        {
            "CountryCode": "MN",
            "CountryName": "Mongolia"
        },
        {
            "CountryCode": "MO",
            "CountryName": "Macao"
        },
        {
            "CountryCode": "MP",
            "CountryName": "Northern Mariana Islands"
        },
        {
            "CountryCode": "MQ",
            "CountryName": "Martinique"
        },
        {
            "CountryCode": "MR",
            "CountryName": "Mauritania"
        },
        {
            "CountryCode": "MS",
            "CountryName": "Montserrat"
        },
        {
            "CountryCode": "MT",
            "CountryName": "Malta"
        },
        {
            "CountryCode": "MU",
            "CountryName": "Mauritius"
        },
        {
            "CountryCode": "MV",
            "CountryName": "Maldives"
        },
        {
            "CountryCode": "MW",
            "CountryName": "Malawi"
        },
        {
            "CountryCode": "MX",
            "CountryName": "Mexico"
        },
        {
            "CountryCode": "MY",
            "CountryName": "Malaysia"
        },
        {
            "CountryCode": "MZ",
            "CountryName": "Mozambique"
        },
        {
            "CountryCode": "NA",
            "CountryName": "Namibia"
        },
        {
            "CountryCode": "NC",
            "CountryName": "New Caledonia"
        },
        {
            "CountryCode": "NE",
            "CountryName": "Niger"
        },
        {
            "CountryCode": "NF",
            "CountryName": "Norfolk Island"
        },
        {
            "CountryCode": "NG",
            "CountryName": "Nigeria"
        },
        {
            "CountryCode": "NI",
            "CountryName": "Nicaragua"
        },
        {
            "CountryCode": "NL",
            "CountryName": "Netherlands"
        },
        {
            "CountryCode": "NO",
            "CountryName": "Norway"
        },
        {
            "CountryCode": "NP",
            "CountryName": "Nepal"
        },
        {
            "CountryCode": "NR",
            "CountryName": "Nauru"
        },
        {
            "CountryCode": "NU",
            "CountryName": "Niue"
        },
        {
            "CountryCode": "NZ",
            "CountryName": "New Zealand"
        },
        {
            "CountryCode": "OM",
            "CountryName": "Oman"
        },
        {
            "CountryCode": "PA",
            "CountryName": "Panama"
        },
        {
            "CountryCode": "PE",
            "CountryName": "Peru"
        },
        {
            "CountryCode": "PF",
            "CountryName": "French Polynesia"
        },
        {
            "CountryCode": "PG",
            "CountryName": "Papua New Guinea"
        },
        {
            "CountryCode": "PH",
            "CountryName": "Philippines"
        },
        {
            "CountryCode": "PK",
            "CountryName": "Pakistan"
        },
        {
            "CountryCode": "PL",
            "CountryName": "Poland"
        },
        {
            "CountryCode": "PM",
            "CountryName": "Saint Pierre and Miquelon"
        },
        {
            "CountryCode": "PN",
            "CountryName": "Pitcairn Islands"
        },
        {
            "CountryCode": "PR",
            "CountryName": "Puerto Rico"
        },
        {
            "CountryCode": "PS",
            "CountryName": "Palestine"
        },
        {
            "CountryCode": "PT",
            "CountryName": "Portugal"
        },
        {
            "CountryCode": "PW",
            "CountryName": "Palau"
        },
        {
            "CountryCode": "PY",
            "CountryName": "Paraguay"
        },
        {
            "CountryCode": "QA",
            "CountryName": "Qatar"
        },
        {
            "CountryCode": "RE",
            "CountryName": "Réunion"
        },
        {
            "CountryCode": "RO",
            "CountryName": "Romania"
        },
        {
            "CountryCode": "RS",
            "CountryName": "Serbia"
        },
        {
            "CountryCode": "RU",
            "CountryName": "Russia"
        },
        {
            "CountryCode": "RW",
            "CountryName": "Rwanda"
        },
        {
            "CountryCode": "SA",
            "CountryName": "Saudi Arabia"
        },
        {
            "CountryCode": "SB",
            "CountryName": "Solomon Islands"
        },
        {
            "CountryCode": "SC",
            "CountryName": "Seychelles"
        },
        {
            "CountryCode": "SD",
            "CountryName": "Sudan"
        },
        {
            "CountryCode": "SE",
            "CountryName": "Sweden"
        },
        {
            "CountryCode": "SG",
            "CountryName": "Singapore"
        },
        {
            "CountryCode": "SH",
            "CountryName": "Saint Helena"
        },
        {
            "CountryCode": "SI",
            "CountryName": "Slovenia"
        },
        {
            "CountryCode": "SJ",
            "CountryName": "Svalbard and Jan Mayen"
        },
        {
            "CountryCode": "SK",
            "CountryName": "Slovakia"
        },
        {
            "CountryCode": "SL",
            "CountryName": "Sierra Leone"
        },
        {
            "CountryCode": "SM",
            "CountryName": "San Marino"
        },
        {
            "CountryCode": "SN",
            "CountryName": "Senegal"
        },
        {
            "CountryCode": "SO",
            "CountryName": "Somalia"
        },
        {
            "CountryCode": "SR",
            "CountryName": "Suriname"
        },
        {
            "CountryCode": "SS",
            "CountryName": "South Sudan"
        },
        {
            "CountryCode": "ST",
            "CountryName": "São Tomé and Príncipe"
        },
        {
            "CountryCode": "SV",
            "CountryName": "El Salvador"
        },
        {
            "CountryCode": "SX",
            "CountryName": "Sint Maarten"
        },
        {
            "CountryCode": "SY",
            "CountryName": "Syria"
        },
        {
            "CountryCode": "SZ",
            "CountryName": "Swaziland"
        },
        {
            "CountryCode": "TC",
            "CountryName": "Turks and Caicos Islands"
        },
        {
            "CountryCode": "TD",
            "CountryName": "Chad"
        },
        {
            "CountryCode": "TF",
            "CountryName": "French Southern Territories"
        },
        {
            "CountryCode": "TG",
            "CountryName": "Togo"
        },
        {
            "CountryCode": "TH",
            "CountryName": "Thailand"
        },
        {
            "CountryCode": "TJ",
            "CountryName": "Tajikistan"
        },
        {
            "CountryCode": "TK",
            "CountryName": "Tokelau"
        },
        {
            "CountryCode": "TL",
            "CountryName": "East Timor"
        },
        {
            "CountryCode": "TM",
            "CountryName": "Turkmenistan"
        },
        {
            "CountryCode": "TN",
            "CountryName": "Tunisia"
        },
        {
            "CountryCode": "TO",
            "CountryName": "Tonga"
        },
        {
            "CountryCode": "TR",
            "CountryName": "Turkey"
        },
        {
            "CountryCode": "TT",
            "CountryName": "Trinidad and Tobago"
        },
        {
            "CountryCode": "TV",
            "CountryName": "Tuvalu"
        },
        {
            "CountryCode": "TW",
            "CountryName": "Taiwan"
        },
        {
            "CountryCode": "TZ",
            "CountryName": "Tanzania"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "05",
            "SubdivisionName": "Vinnytska oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "07",
            "SubdivisionName": "Volynska oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "09",
            "SubdivisionName": "Luhanska oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "11",
            "SubdivisionName": "Crimea"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "12",
            "SubdivisionName": "Dnipropetrovska oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "14",
            "SubdivisionName": "Donetska oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "18",
            "SubdivisionName": "Zhytomyrska oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "20",
            "SubdivisionName": "Sevastopol"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "21",
            "SubdivisionName": "Zakarpatska oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "23",
            "SubdivisionName": "Zaporizka oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "26",
            "SubdivisionName": "Ivano-Frankivska oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "30",
            "SubdivisionName": "Kyiv"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "32",
            "SubdivisionName": "Kyivska oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "35",
            "SubdivisionName": "Kirovohradska oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "46",
            "SubdivisionName": "Lvivska oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "48",
            "SubdivisionName": "Mykolaivska oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "51",
            "SubdivisionName": "Odeska oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "53",
            "SubdivisionName": "Poltavska oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "56",
            "SubdivisionName": "Rivnenska oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "59",
            "SubdivisionName": "Sumska oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "61",
            "SubdivisionName": "Ternopilska oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "63",
            "SubdivisionName": "Kharkivska oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "65",
            "SubdivisionName": "Khersonska oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "68",
            "SubdivisionName": "Khmelnytska oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "71",
            "SubdivisionName": "Cherkaska oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "74",
            "SubdivisionName": "Chernihivska oblast"
        },
        {
            "CountryCode": "UA",
            "CountryName": "Ukraine",
            "SubdivisionCode": "77",
            "SubdivisionName": "Chernivetska oblast"
        },
        {
            "CountryCode": "UG",
            "CountryName": "Uganda"
        },
        {
            "CountryCode": "UM",
            "CountryName": "U.S. Minor Outlying Islands"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "AK",
            "SubdivisionName": "Alaska"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "AL",
            "SubdivisionName": "Alabama"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "AR",
            "SubdivisionName": "Arkansas"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "AZ",
            "SubdivisionName": "Arizona"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "CA",
            "SubdivisionName": "California"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "CO",
            "SubdivisionName": "Colorado"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "CT",
            "SubdivisionName": "Connecticut"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "DC",
            "SubdivisionName": "District of Columbia"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "DE",
            "SubdivisionName": "Delaware"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "FL",
            "SubdivisionName": "Florida"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "GA",
            "SubdivisionName": "Georgia"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "HI",
            "SubdivisionName": "Hawaii"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "IA",
            "SubdivisionName": "Iowa"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "ID",
            "SubdivisionName": "Idaho"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "IL",
            "SubdivisionName": "Illinois"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "IN",
            "SubdivisionName": "Indiana"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "KS",
            "SubdivisionName": "Kansas"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "KY",
            "SubdivisionName": "Kentucky"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "LA",
            "SubdivisionName": "Louisiana"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "MA",
            "SubdivisionName": "Massachusetts"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "MD",
            "SubdivisionName": "Maryland"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "ME",
            "SubdivisionName": "Maine"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "MI",
            "SubdivisionName": "Michigan"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "MN",
            "SubdivisionName": "Minnesota"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "MO",
            "SubdivisionName": "Missouri"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "MS",
            "SubdivisionName": "Mississippi"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "MT",
            "SubdivisionName": "Montana"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "NC",
            "SubdivisionName": "North Carolina"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "ND",
            "SubdivisionName": "North Dakota"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "NE",
            "SubdivisionName": "Nebraska"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "NH",
            "SubdivisionName": "New Hampshire"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "NJ",
            "SubdivisionName": "New Jersey"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "NM",
            "SubdivisionName": "New Mexico"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "NV",
            "SubdivisionName": "Nevada"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "NY",
            "SubdivisionName": "New York"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "OH",
            "SubdivisionName": "Ohio"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "OK",
            "SubdivisionName": "Oklahoma"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "OR",
            "SubdivisionName": "Oregon"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "PA",
            "SubdivisionName": "Pennsylvania"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "RI",
            "SubdivisionName": "Rhode Island"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "SC",
            "SubdivisionName": "South Carolina"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "SD",
            "SubdivisionName": "South Dakota"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "TN",
            "SubdivisionName": "Tennessee"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "TX",
            "SubdivisionName": "Texas"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "UT",
            "SubdivisionName": "Utah"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "VA",
            "SubdivisionName": "Virginia"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "VT",
            "SubdivisionName": "Vermont"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "WA",
            "SubdivisionName": "Washington"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "WI",
            "SubdivisionName": "Wisconsin"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "WV",
            "SubdivisionName": "West Virginia"
        },
        {
            "CountryCode": "US",
            "CountryName": "United States",
            "SubdivisionCode": "WY",
            "SubdivisionName": "Wyoming"
        },
        {
            "CountryCode": "UY",
            "CountryName": "Uruguay"
        },
        {
            "CountryCode": "UZ",
            "CountryName": "Uzbekistan"
        },
        {
            "CountryCode": "VA",
            "CountryName": "Vatican City"
        },
        {
            "CountryCode": "VC",
            "CountryName": "Saint Vincent and the Grenadines"
        },
        {
            "CountryCode": "VE",
            "CountryName": "Venezuela"
        },
        {
            "CountryCode": "VG",
            "CountryName": "British Virgin Islands"
        },
        {
            "CountryCode": "VI",
            "CountryName": "U.S. Virgin Islands"
        },
        {
            "CountryCode": "VN",
            "CountryName": "Vietnam"
        },
        {
            "CountryCode": "VU",
            "CountryName": "Vanuatu"
        },
        {
            "CountryCode": "WF",
            "CountryName": "Wallis and Futuna"
        },
        {
            "CountryCode": "WS",
            "CountryName": "Samoa"
        },
        {
            "CountryCode": "XK",
            "CountryName": "Kosovo"
        },
        {
            "CountryCode": "YE",
            "CountryName": "Yemen"
        },
        {
            "CountryCode": "YT",
            "CountryName": "Mayotte"
        },
        {
            "CountryCode": "ZA",
            "CountryName": "South Africa"
        },
        {
            "CountryCode": "ZM",
            "CountryName": "Zambia"
        },
        {
            "CountryCode": "ZW",
            "CountryName": "Zimbabwe"
        },
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
}
export default data;