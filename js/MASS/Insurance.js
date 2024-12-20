var InsuranceInfo ={
   "format" : "This data frame contains the following columns:",
   "usage" : "Insurance",
   "reference" : "L. A. Baxter, S. M. Coutts and G. A. F. Ross (1980) Applications of\nlinear models in motor insurance.\nProceedings of the 21st International Congress of Actuaries, Zurich\npp. 11&ndash;29.",
   "title" : "Numbers of Car Insurance claims",
   "description" : "Description\nThe data given in data frame Insurance consist of the\nnumbers of policyholders of an insurance company who were\nexposed to risk, and the numbers of car insurance claims made by\nthose policyholders in the third quarter of 1973.",
   "parameters" : {
      "Age" : "an ordered factor: the age of the insured in 4 groups labelled\n<25, 25&ndash;29, 30&ndash;35, >35.",
      "Holders" : "numbers of policyholders.",
      "Group" : "an ordered factor: group of car with levels  <1 litre, 1&ndash;1.5 litre,\n1.5&ndash;2 litre, >2 litre.",
      "Claims" : "numbers of claims",
      "District" : "factor: district of residence of policyholder (1 to 4): 4 is major cities."
   }
}

var Insurance = [
   [
      "District",
      "Group",
      "Age",
      "Holders",
      "Claims"
   ],
   [
      "1",
      "<1l",
      "<25",
      "197",
      "38"
   ],
   [
      "1",
      "<1l",
      "25-29",
      "264",
      "35"
   ],
   [
      "1",
      "<1l",
      "30-35",
      "246",
      "20"
   ],
   [
      "1",
      "<1l",
      ">35",
      "1680",
      "156"
   ],
   [
      "1",
      "1-1.5l",
      "<25",
      "284",
      "63"
   ],
   [
      "1",
      "1-1.5l",
      "25-29",
      "536",
      "84"
   ],
   [
      "1",
      "1-1.5l",
      "30-35",
      "696",
      "89"
   ],
   [
      "1",
      "1-1.5l",
      ">35",
      "3582",
      "400"
   ],
   [
      "1",
      "1.5-2l",
      "<25",
      "133",
      "19"
   ],
   [
      "1",
      "1.5-2l",
      "25-29",
      "286",
      "52"
   ],
   [
      "1",
      "1.5-2l",
      "30-35",
      "355",
      "74"
   ],
   [
      "1",
      "1.5-2l",
      ">35",
      "1640",
      "233"
   ],
   [
      "1",
      ">2l",
      "<25",
      "24",
      "4"
   ],
   [
      "1",
      ">2l",
      "25-29",
      "71",
      "18"
   ],
   [
      "1",
      ">2l",
      "30-35",
      "99",
      "19"
   ],
   [
      "1",
      ">2l",
      ">35",
      "452",
      "77"
   ],
   [
      "2",
      "<1l",
      "<25",
      "85",
      "22"
   ],
   [
      "2",
      "<1l",
      "25-29",
      "139",
      "19"
   ],
   [
      "2",
      "<1l",
      "30-35",
      "151",
      "22"
   ],
   [
      "2",
      "<1l",
      ">35",
      "931",
      "87"
   ],
   [
      "2",
      "1-1.5l",
      "<25",
      "149",
      "25"
   ],
   [
      "2",
      "1-1.5l",
      "25-29",
      "313",
      "51"
   ],
   [
      "2",
      "1-1.5l",
      "30-35",
      "419",
      "49"
   ],
   [
      "2",
      "1-1.5l",
      ">35",
      "2443",
      "290"
   ],
   [
      "2",
      "1.5-2l",
      "<25",
      "66",
      "14"
   ],
   [
      "2",
      "1.5-2l",
      "25-29",
      "175",
      "46"
   ],
   [
      "2",
      "1.5-2l",
      "30-35",
      "221",
      "39"
   ],
   [
      "2",
      "1.5-2l",
      ">35",
      "1110",
      "143"
   ],
   [
      "2",
      ">2l",
      "<25",
      "9",
      "4"
   ],
   [
      "2",
      ">2l",
      "25-29",
      "48",
      "15"
   ],
   [
      "2",
      ">2l",
      "30-35",
      "72",
      "12"
   ],
   [
      "2",
      ">2l",
      ">35",
      "322",
      "53"
   ],
   [
      "3",
      "<1l",
      "<25",
      "35",
      "5"
   ],
   [
      "3",
      "<1l",
      "25-29",
      "73",
      "11"
   ],
   [
      "3",
      "<1l",
      "30-35",
      "89",
      "10"
   ],
   [
      "3",
      "<1l",
      ">35",
      "648",
      "67"
   ],
   [
      "3",
      "1-1.5l",
      "<25",
      "53",
      "10"
   ],
   [
      "3",
      "1-1.5l",
      "25-29",
      "155",
      "24"
   ],
   [
      "3",
      "1-1.5l",
      "30-35",
      "240",
      "37"
   ],
   [
      "3",
      "1-1.5l",
      ">35",
      "1635",
      "187"
   ],
   [
      "3",
      "1.5-2l",
      "<25",
      "24",
      "8"
   ],
   [
      "3",
      "1.5-2l",
      "25-29",
      "78",
      "19"
   ],
   [
      "3",
      "1.5-2l",
      "30-35",
      "121",
      "24"
   ],
   [
      "3",
      "1.5-2l",
      ">35",
      "692",
      "101"
   ],
   [
      "3",
      ">2l",
      "<25",
      "7",
      "3"
   ],
   [
      "3",
      ">2l",
      "25-29",
      "29",
      "2"
   ],
   [
      "3",
      ">2l",
      "30-35",
      "43",
      "8"
   ],
   [
      "3",
      ">2l",
      ">35",
      "245",
      "37"
   ],
   [
      "4",
      "<1l",
      "<25",
      "20",
      "2"
   ],
   [
      "4",
      "<1l",
      "25-29",
      "33",
      "5"
   ],
   [
      "4",
      "<1l",
      "30-35",
      "40",
      "4"
   ],
   [
      "4",
      "<1l",
      ">35",
      "316",
      "36"
   ],
   [
      "4",
      "1-1.5l",
      "<25",
      "31",
      "7"
   ],
   [
      "4",
      "1-1.5l",
      "25-29",
      "81",
      "10"
   ],
   [
      "4",
      "1-1.5l",
      "30-35",
      "122",
      "22"
   ],
   [
      "4",
      "1-1.5l",
      ">35",
      "724",
      "102"
   ],
   [
      "4",
      "1.5-2l",
      "<25",
      "18",
      "5"
   ],
   [
      "4",
      "1.5-2l",
      "25-29",
      "39",
      "7"
   ],
   [
      "4",
      "1.5-2l",
      "30-35",
      "68",
      "16"
   ],
   [
      "4",
      "1.5-2l",
      ">35",
      "344",
      "63"
   ],
   [
      "4",
      ">2l",
      "<25",
      "3",
      "0"
   ],
   [
      "4",
      ">2l",
      "25-29",
      "16",
      "6"
   ],
   [
      "4",
      ">2l",
      "30-35",
      "25",
      "8"
   ],
   [
      "4",
      ">2l",
      ">35",
      "114",
      "33"
   ]
]
