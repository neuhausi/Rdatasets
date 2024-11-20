var hoelInfo ={
   "parameters" : {
      "id" : "mouse id",
      "outcome" : "outcome: censor, thymic\n\tlymphoma, reticulum cell sarcoma other causes",
      "days" : "days until death",
      "trt" : "treatment assignment: Control or Germ-free"
   },
   "title" : "Mouse cancer data",
   "format" : "A data frame with 181 observations on the following 4 variables.",
   "reference" : "Two groups of male mice were given 300 rads of radiation and followed\nfor cancer incidence.  One group was maintained in a germ free\nenvironment.  The data set is used as an example of competing risks in\nKalbfleisch and Prentice.  The germ-free environment has little effect\non the rate of occurence of thymic lymphoma, but significantly delays\nthe other causes of death.",
   "description" : "Description\nDays until occurence of cancer for male mice",
   "usage" : "data(\"cancer\")"
}

var hoel = [
   [
      "trt",
      "days",
      "outcome",
      "id"
   ],
   [
      "Control",
      "159",
      "thymic lymphoma",
      "1"
   ],
   [
      "Control",
      "189",
      "thymic lymphoma",
      "2"
   ],
   [
      "Control",
      "191",
      "thymic lymphoma",
      "3"
   ],
   [
      "Control",
      "198",
      "thymic lymphoma",
      "4"
   ],
   [
      "Control",
      "200",
      "thymic lymphoma",
      "5"
   ],
   [
      "Control",
      "207",
      "thymic lymphoma",
      "6"
   ],
   [
      "Control",
      "220",
      "thymic lymphoma",
      "7"
   ],
   [
      "Control",
      "235",
      "thymic lymphoma",
      "8"
   ],
   [
      "Control",
      "245",
      "thymic lymphoma",
      "9"
   ],
   [
      "Control",
      "250",
      "thymic lymphoma",
      "10"
   ],
   [
      "Control",
      "256",
      "thymic lymphoma",
      "11"
   ],
   [
      "Control",
      "261",
      "thymic lymphoma",
      "12"
   ],
   [
      "Control",
      "265",
      "thymic lymphoma",
      "13"
   ],
   [
      "Control",
      "266",
      "thymic lymphoma",
      "14"
   ],
   [
      "Control",
      "280",
      "thymic lymphoma",
      "15"
   ],
   [
      "Control",
      "343",
      "thymic lymphoma",
      "16"
   ],
   [
      "Control",
      "356",
      "thymic lymphoma",
      "17"
   ],
   [
      "Control",
      "383",
      "thymic lymphoma",
      "18"
   ],
   [
      "Control",
      "403",
      "thymic lymphoma",
      "19"
   ],
   [
      "Control",
      "414",
      "thymic lymphoma",
      "20"
   ],
   [
      "Control",
      "428",
      "thymic lymphoma",
      "21"
   ],
   [
      "Control",
      "432",
      "thymic lymphoma",
      "22"
   ],
   [
      "Control",
      "317",
      "reticulum cell sarcoma",
      "23"
   ],
   [
      "Control",
      "318",
      "reticulum cell sarcoma",
      "24"
   ],
   [
      "Control",
      "399",
      "reticulum cell sarcoma",
      "25"
   ],
   [
      "Control",
      "495",
      "reticulum cell sarcoma",
      "26"
   ],
   [
      "Control",
      "525",
      "reticulum cell sarcoma",
      "27"
   ],
   [
      "Control",
      "536",
      "reticulum cell sarcoma",
      "28"
   ],
   [
      "Control",
      "549",
      "reticulum cell sarcoma",
      "29"
   ],
   [
      "Control",
      "552",
      "reticulum cell sarcoma",
      "30"
   ],
   [
      "Control",
      "554",
      "reticulum cell sarcoma",
      "31"
   ],
   [
      "Control",
      "337",
      "reticulum cell sarcoma",
      "32"
   ],
   [
      "Control",
      "558",
      "reticulum cell sarcoma",
      "33"
   ],
   [
      "Control",
      "571",
      "reticulum cell sarcoma",
      "34"
   ],
   [
      "Control",
      "586",
      "reticulum cell sarcoma",
      "35"
   ],
   [
      "Control",
      "594",
      "reticulum cell sarcoma",
      "36"
   ],
   [
      "Control",
      "596",
      "reticulum cell sarcoma",
      "37"
   ],
   [
      "Control",
      "605",
      "reticulum cell sarcoma",
      "38"
   ],
   [
      "Control",
      "612",
      "reticulum cell sarcoma",
      "39"
   ],
   [
      "Control",
      "621",
      "reticulum cell sarcoma",
      "40"
   ],
   [
      "Control",
      "628",
      "reticulum cell sarcoma",
      "41"
   ],
   [
      "Control",
      "631",
      "reticulum cell sarcoma",
      "42"
   ],
   [
      "Control",
      "636",
      "reticulum cell sarcoma",
      "43"
   ],
   [
      "Control",
      "643",
      "reticulum cell sarcoma",
      "44"
   ],
   [
      "Control",
      "647",
      "reticulum cell sarcoma",
      "45"
   ],
   [
      "Control",
      "648",
      "reticulum cell sarcoma",
      "46"
   ],
   [
      "Control",
      "649",
      "reticulum cell sarcoma",
      "47"
   ],
   [
      "Control",
      "661",
      "reticulum cell sarcoma",
      "48"
   ],
   [
      "Control",
      "663",
      "reticulum cell sarcoma",
      "49"
   ],
   [
      "Control",
      "666",
      "reticulum cell sarcoma",
      "50"
   ],
   [
      "Control",
      "670",
      "reticulum cell sarcoma",
      "51"
   ],
   [
      "Control",
      "695",
      "reticulum cell sarcoma",
      "52"
   ],
   [
      "Control",
      "697",
      "reticulum cell sarcoma",
      "53"
   ],
   [
      "Control",
      "700",
      "reticulum cell sarcoma",
      "54"
   ],
   [
      "Control",
      "705",
      "reticulum cell sarcoma",
      "55"
   ],
   [
      "Control",
      "712",
      "reticulum cell sarcoma",
      "56"
   ],
   [
      "Control",
      "713",
      "reticulum cell sarcoma",
      "57"
   ],
   [
      "Control",
      "738",
      "reticulum cell sarcoma",
      "58"
   ],
   [
      "Control",
      "748",
      "reticulum cell sarcoma",
      "59"
   ],
   [
      "Control",
      "753",
      "reticulum cell sarcoma",
      "60"
   ],
   [
      "Control",
      "40",
      "other",
      "61"
   ],
   [
      "Control",
      "42",
      "other",
      "62"
   ],
   [
      "Control",
      "51",
      "other",
      "63"
   ],
   [
      "Control",
      "62",
      "other",
      "64"
   ],
   [
      "Control",
      "163",
      "other",
      "65"
   ],
   [
      "Control",
      "179",
      "other",
      "66"
   ],
   [
      "Control",
      "206",
      "other",
      "67"
   ],
   [
      "Control",
      "222",
      "other",
      "68"
   ],
   [
      "Control",
      "228",
      "other",
      "69"
   ],
   [
      "Control",
      "252",
      "other",
      "70"
   ],
   [
      "Control",
      "249",
      "other",
      "71"
   ],
   [
      "Control",
      "282",
      "other",
      "72"
   ],
   [
      "Control",
      "324",
      "other",
      "73"
   ],
   [
      "Control",
      "333",
      "other",
      "74"
   ],
   [
      "Control",
      "341",
      "other",
      "75"
   ],
   [
      "Control",
      "366",
      "other",
      "76"
   ],
   [
      "Control",
      "385",
      "other",
      "77"
   ],
   [
      "Control",
      "407",
      "other",
      "78"
   ],
   [
      "Control",
      "420",
      "other",
      "79"
   ],
   [
      "Control",
      "431",
      "other",
      "80"
   ],
   [
      "Control",
      "441",
      "other",
      "81"
   ],
   [
      "Control",
      "461",
      "other",
      "82"
   ],
   [
      "Control",
      "462",
      "other",
      "83"
   ],
   [
      "Control",
      "482",
      "other",
      "84"
   ],
   [
      "Control",
      "517",
      "other",
      "85"
   ],
   [
      "Control",
      "517",
      "other",
      "86"
   ],
   [
      "Control",
      "524",
      "other",
      "87"
   ],
   [
      "Control",
      "564",
      "other",
      "88"
   ],
   [
      "Control",
      "567",
      "other",
      "89"
   ],
   [
      "Control",
      "586",
      "other",
      "90"
   ],
   [
      "Control",
      "619",
      "other",
      "91"
   ],
   [
      "Control",
      "620",
      "other",
      "92"
   ],
   [
      "Control",
      "621",
      "other",
      "93"
   ],
   [
      "Control",
      "622",
      "other",
      "94"
   ],
   [
      "Control",
      "647",
      "other",
      "95"
   ],
   [
      "Control",
      "651",
      "other",
      "96"
   ],
   [
      "Control",
      "686",
      "other",
      "97"
   ],
   [
      "Control",
      "761",
      "other",
      "98"
   ],
   [
      "Control",
      "763",
      "other",
      "99"
   ],
   [
      "Germ-free",
      "158",
      "thymic lymphoma",
      "100"
   ],
   [
      "Germ-free",
      "192",
      "thymic lymphoma",
      "101"
   ],
   [
      "Germ-free",
      "193",
      "thymic lymphoma",
      "102"
   ],
   [
      "Germ-free",
      "194",
      "thymic lymphoma",
      "103"
   ],
   [
      "Germ-free",
      "195",
      "thymic lymphoma",
      "104"
   ],
   [
      "Germ-free",
      "202",
      "thymic lymphoma",
      "105"
   ],
   [
      "Germ-free",
      "212",
      "thymic lymphoma",
      "106"
   ],
   [
      "Germ-free",
      "215",
      "thymic lymphoma",
      "107"
   ],
   [
      "Germ-free",
      "229",
      "thymic lymphoma",
      "108"
   ],
   [
      "Germ-free",
      "230",
      "thymic lymphoma",
      "109"
   ],
   [
      "Germ-free",
      "237",
      "thymic lymphoma",
      "110"
   ],
   [
      "Germ-free",
      "240",
      "thymic lymphoma",
      "111"
   ],
   [
      "Germ-free",
      "244",
      "thymic lymphoma",
      "112"
   ],
   [
      "Germ-free",
      "247",
      "thymic lymphoma",
      "113"
   ],
   [
      "Germ-free",
      "259",
      "thymic lymphoma",
      "114"
   ],
   [
      "Germ-free",
      "300",
      "thymic lymphoma",
      "115"
   ],
   [
      "Germ-free",
      "301",
      "thymic lymphoma",
      "116"
   ],
   [
      "Germ-free",
      "321",
      "thymic lymphoma",
      "117"
   ],
   [
      "Germ-free",
      "337",
      "thymic lymphoma",
      "118"
   ],
   [
      "Germ-free",
      "415",
      "thymic lymphoma",
      "119"
   ],
   [
      "Germ-free",
      "434",
      "thymic lymphoma",
      "120"
   ],
   [
      "Germ-free",
      "444",
      "thymic lymphoma",
      "121"
   ],
   [
      "Germ-free",
      "485",
      "thymic lymphoma",
      "122"
   ],
   [
      "Germ-free",
      "496",
      "thymic lymphoma",
      "123"
   ],
   [
      "Germ-free",
      "529",
      "thymic lymphoma",
      "124"
   ],
   [
      "Germ-free",
      "537",
      "thymic lymphoma",
      "125"
   ],
   [
      "Germ-free",
      "624",
      "thymic lymphoma",
      "126"
   ],
   [
      "Germ-free",
      "707",
      "thymic lymphoma",
      "127"
   ],
   [
      "Germ-free",
      "800",
      "thymic lymphoma",
      "128"
   ],
   [
      "Germ-free",
      "430",
      "reticulum cell sarcoma",
      "129"
   ],
   [
      "Germ-free",
      "590",
      "reticulum cell sarcoma",
      "130"
   ],
   [
      "Germ-free",
      "606",
      "reticulum cell sarcoma",
      "131"
   ],
   [
      "Germ-free",
      "638",
      "reticulum cell sarcoma",
      "132"
   ],
   [
      "Germ-free",
      "655",
      "reticulum cell sarcoma",
      "133"
   ],
   [
      "Germ-free",
      "679",
      "reticulum cell sarcoma",
      "134"
   ],
   [
      "Germ-free",
      "691",
      "reticulum cell sarcoma",
      "135"
   ],
   [
      "Germ-free",
      "693",
      "reticulum cell sarcoma",
      "136"
   ],
   [
      "Germ-free",
      "696",
      "reticulum cell sarcoma",
      "137"
   ],
   [
      "Germ-free",
      "747",
      "reticulum cell sarcoma",
      "138"
   ],
   [
      "Germ-free",
      "752",
      "reticulum cell sarcoma",
      "139"
   ],
   [
      "Germ-free",
      "760",
      "reticulum cell sarcoma",
      "140"
   ],
   [
      "Germ-free",
      "778",
      "reticulum cell sarcoma",
      "141"
   ],
   [
      "Germ-free",
      "821",
      "reticulum cell sarcoma",
      "142"
   ],
   [
      "Germ-free",
      "986",
      "reticulum cell sarcoma",
      "143"
   ],
   [
      "Germ-free",
      "136",
      "other",
      "144"
   ],
   [
      "Germ-free",
      "246",
      "other",
      "145"
   ],
   [
      "Germ-free",
      "255",
      "other",
      "146"
   ],
   [
      "Germ-free",
      "376",
      "other",
      "147"
   ],
   [
      "Germ-free",
      "421",
      "other",
      "148"
   ],
   [
      "Germ-free",
      "565",
      "other",
      "149"
   ],
   [
      "Germ-free",
      "616",
      "other",
      "150"
   ],
   [
      "Germ-free",
      "617",
      "other",
      "151"
   ],
   [
      "Germ-free",
      "652",
      "other",
      "152"
   ],
   [
      "Germ-free",
      "655",
      "other",
      "153"
   ],
   [
      "Germ-free",
      "658",
      "other",
      "154"
   ],
   [
      "Germ-free",
      "660",
      "other",
      "155"
   ],
   [
      "Germ-free",
      "662",
      "other",
      "156"
   ],
   [
      "Germ-free",
      "675",
      "other",
      "157"
   ],
   [
      "Germ-free",
      "681",
      "other",
      "158"
   ],
   [
      "Germ-free",
      "734",
      "other",
      "159"
   ],
   [
      "Germ-free",
      "736",
      "other",
      "160"
   ],
   [
      "Germ-free",
      "737",
      "other",
      "161"
   ],
   [
      "Germ-free",
      "757",
      "other",
      "162"
   ],
   [
      "Germ-free",
      "769",
      "other",
      "163"
   ],
   [
      "Germ-free",
      "777",
      "other",
      "164"
   ],
   [
      "Germ-free",
      "800",
      "other",
      "165"
   ],
   [
      "Germ-free",
      "807",
      "other",
      "166"
   ],
   [
      "Germ-free",
      "825",
      "other",
      "167"
   ],
   [
      "Germ-free",
      "855",
      "other",
      "168"
   ],
   [
      "Germ-free",
      "857",
      "other",
      "169"
   ],
   [
      "Germ-free",
      "864",
      "other",
      "170"
   ],
   [
      "Germ-free",
      "868",
      "other",
      "171"
   ],
   [
      "Germ-free",
      "870",
      "other",
      "172"
   ],
   [
      "Germ-free",
      "870",
      "other",
      "173"
   ],
   [
      "Germ-free",
      "873",
      "other",
      "174"
   ],
   [
      "Germ-free",
      "882",
      "other",
      "175"
   ],
   [
      "Germ-free",
      "895",
      "other",
      "176"
   ],
   [
      "Germ-free",
      "910",
      "other",
      "177"
   ],
   [
      "Germ-free",
      "934",
      "other",
      "178"
   ],
   [
      "Germ-free",
      "942",
      "other",
      "179"
   ],
   [
      "Germ-free",
      "1015",
      "other",
      "180"
   ],
   [
      "Germ-free",
      "1019",
      "other",
      "181"
   ]
]
