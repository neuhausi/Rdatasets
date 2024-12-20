var fridayInfo ={
   "format" : "A data frame with 61 observations and 6 variables.",
   "parameters" : {
      "location" : "Location where data is collected.",
      "thirteenth" : "Counts on the 13th of the month.",
      "date" : "Year and month of observation.",
      "sixth" : "Counts on the 6th of the month.",
      "diff" : "Difference between the sixth and the thirteenth.",
      "type" : "Type of observation, traffic, shopping, or accident."
   },
   "usage" : "friday",
   "reference" : "There are three types of observations: traffic, shopping, and accident. For\ntraffic, the researchers obtained information from the British Department of\nTransport regarding the traffic flows between junctions 7 to 8 and junctions\n9 to 10 of the M25 motorway. For shopping, they collected the numbers of\nshoppers in nine different supermarkets in southeast England. For accidents,\nthey collected numbers of emergency admissions to hospitals due to transport\naccidents.",
   "title" : "Friday the 13th",
   "description" : "Description\nThis dataset addresses issues of how superstitions regarding Friday the\n13th affect human behavior, and whether Friday the 13th is an unlucky day.\nScanlon, et al. collected data on traffic and shopping patterns and accident\nfrequency for Fridays the 6th and 13th between October of 1989 and November\nof 1992."
}

var friday = [
   [
      "type",
      "date",
      "sixth",
      "thirteenth",
      "diff",
      "location"
   ],
   [
      "traffic",
      "1990,  July",
      "139246",
      "138548",
      "698",
      "7 to 8"
   ],
   [
      "traffic",
      "1990,  July",
      "134012",
      "132908",
      "1104",
      "9 to 10"
   ],
   [
      "traffic",
      "1991,  September",
      "137055",
      "136018",
      "1037",
      "7 to 8"
   ],
   [
      "traffic",
      "1991,  September",
      "133732",
      "131843",
      "1889",
      "9 to 10"
   ],
   [
      "traffic",
      "1991,  December",
      "123552",
      "121641",
      "1911",
      "7 to 8"
   ],
   [
      "traffic",
      "1991,  December",
      "121139",
      "118723",
      "2416",
      "9 to 10"
   ],
   [
      "traffic",
      "1992,  March",
      "128293",
      "125532",
      "2761",
      "7 to 8"
   ],
   [
      "traffic",
      "1992,  March",
      "124631",
      "120249",
      "4382",
      "9 to 10"
   ],
   [
      "traffic",
      "1992,  November",
      "124609",
      "122770",
      "1839",
      "7 to 8"
   ],
   [
      "traffic",
      "1992,  November",
      "117584",
      "117263",
      "321",
      "9 to 10"
   ],
   [
      "shopping",
      "1990,  July",
      "4942",
      "4882",
      "60",
      "Epsom  "
   ],
   [
      "shopping",
      "1991,  September",
      "4895",
      "4736",
      "159",
      "Epsom  "
   ],
   [
      "shopping",
      "1991,  December",
      "4805",
      "4784",
      "21",
      "Epsom  "
   ],
   [
      "shopping",
      "1992,  March",
      "4570",
      "4603",
      "-33",
      "Epsom  "
   ],
   [
      "shopping",
      "1992,  November",
      "4506",
      "4629",
      "-123",
      "Epsom  "
   ],
   [
      "shopping",
      "1990,  July",
      "6754",
      "6998",
      "-244",
      "Guildford  "
   ],
   [
      "shopping",
      "1991,  September",
      "6704",
      "6707",
      "-3",
      "Guildford  "
   ],
   [
      "shopping",
      "1991,  December",
      "5871",
      "5662",
      "209",
      "Guildford  "
   ],
   [
      "shopping",
      "1992,  March",
      "6026",
      "6162",
      "-136",
      "Guildford  "
   ],
   [
      "shopping",
      "1992,  November",
      "5676",
      "5665",
      "11",
      "Guildford  "
   ],
   [
      "shopping",
      "1990,  July",
      "3685",
      "3848",
      "-163",
      "Dorking  "
   ],
   [
      "shopping",
      "1991,  September",
      "3799",
      "3680",
      "119",
      "Dorking  "
   ],
   [
      "shopping",
      "1991,  December",
      "3563",
      "3554",
      "9",
      "Dorking  "
   ],
   [
      "shopping",
      "1992,  March",
      "3673",
      "3676",
      "-3",
      "Dorking  "
   ],
   [
      "shopping",
      "1992,  November",
      "3558",
      "3613",
      "-55",
      "Dorking  "
   ],
   [
      "shopping",
      "1990,  July",
      "5751",
      "5993",
      "-242",
      "Chichester  "
   ],
   [
      "shopping",
      "1991,  September",
      "5367",
      "5320",
      "47",
      "Chichester  "
   ],
   [
      "shopping",
      "1991,  December",
      "4949",
      "4960",
      "-11",
      "Chichester  "
   ],
   [
      "shopping",
      "1992,  March",
      "5298",
      "5467",
      "-169",
      "Chichester  "
   ],
   [
      "shopping",
      "1992,  November",
      "5199",
      "5092",
      "107",
      "Chichester  "
   ],
   [
      "shopping",
      "1990,  July",
      "4141",
      "4389",
      "-248",
      "Horsham  "
   ],
   [
      "shopping",
      "1991,  September",
      "3674",
      "3660",
      "14",
      "Horsham  "
   ],
   [
      "shopping",
      "1991,  December",
      "3707",
      "3822",
      "-115",
      "Horsham  "
   ],
   [
      "shopping",
      "1992,  March",
      "3633",
      "3730",
      "-97",
      "Horsham  "
   ],
   [
      "shopping",
      "1992,  November",
      "3688",
      "3615",
      "73",
      "Horsham  "
   ],
   [
      "shopping",
      "1990,  July",
      "4266",
      "4532",
      "-266",
      "East Grinstead "
   ],
   [
      "shopping",
      "1991,  September",
      "3954",
      "3964",
      "-10",
      "East Grinstead "
   ],
   [
      "shopping",
      "1991,  December",
      "4028",
      "3926",
      "102",
      "East Grinstead "
   ],
   [
      "shopping",
      "1992,  March",
      "3689",
      "3692",
      "-3",
      "East Grinstead "
   ],
   [
      "shopping",
      "1992,  November",
      "3920",
      "3853",
      "67",
      "East Grinstead "
   ],
   [
      "shopping",
      "1990,  July",
      "7138",
      "6836",
      "302",
      "Lewisham  "
   ],
   [
      "shopping",
      "1991,  September",
      "6568",
      "6363",
      "205",
      "Lewisham  "
   ],
   [
      "shopping",
      "1991,  December",
      "6514",
      "6555",
      "-41",
      "Lewisham  "
   ],
   [
      "shopping",
      "1992,  March",
      "6115",
      "6412",
      "-297",
      "Lewisham  "
   ],
   [
      "shopping",
      "1992,  November",
      "5325",
      "6099",
      "-774",
      "Lewisham  "
   ],
   [
      "shopping",
      "1990,  July",
      "6502",
      "6648",
      "-146",
      "Nine Elms "
   ],
   [
      "shopping",
      "1991,  September",
      "6416",
      "6398",
      "18",
      "Nine Elms "
   ],
   [
      "shopping",
      "1991,  December",
      "6422",
      "6503",
      "-81",
      "Nine Elms "
   ],
   [
      "shopping",
      "1992,  March",
      "6748",
      "6716",
      "32",
      "Nine Elms "
   ],
   [
      "shopping",
      "1992,  November",
      "7023",
      "7057",
      "-34",
      "Nine Elms "
   ],
   [
      "shopping",
      "1990,  July",
      "4083",
      "4277",
      "-194",
      "Crystal Palace "
   ],
   [
      "shopping",
      "1991,  September",
      "4107",
      "4334",
      "-227",
      "Crystal Palace "
   ],
   [
      "shopping",
      "1991,  December",
      "4168",
      "4050",
      "118",
      "Crystal Palace "
   ],
   [
      "shopping",
      "1992,  March",
      "4174",
      "4198",
      "-24",
      "Crystal Palace "
   ],
   [
      "shopping",
      "1992,  November",
      "4079",
      "4105",
      "-26",
      "Crystal Palace "
   ],
   [
      "accident",
      "1989,  October",
      "9",
      "13",
      "-4",
      "SWTRHA hospital "
   ],
   [
      "accident",
      "1990,  July",
      "6",
      "12",
      "-6",
      "SWTRHA hospital "
   ],
   [
      "accident",
      "1991,  September",
      "11",
      "14",
      "-3",
      "SWTRHA hospital "
   ],
   [
      "accident",
      "1991,  December",
      "11",
      "10",
      "1",
      "SWTRHA hospital "
   ],
   [
      "accident",
      "1992,  March",
      "3",
      "4",
      "-1",
      "SWTRHA hospital "
   ],
   [
      "accident",
      "1992,  November",
      "5",
      "12",
      "-7",
      "SWTRHA hospital "
   ]
]
