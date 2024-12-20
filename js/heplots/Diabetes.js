var DiabetesInfo ={
   "title" : "Diabetes Dataset",
   "description" : "Description\nReaven and Miller (1979) examined the relationship among blood chemistry\nmeasures of glucose tolerance and insulin in 145 nonobese adults. They used\nthe PRIM9 system at the Stanford Linear Accelerator Center to visualize the\ndata in 3D, and discovered a peculiar pattern that looked like a large blob\nwith two wings in different directions.",
   "reference" : "After further analysis, the subjects were classified as subclinical\n(chemical) diabetics, overt diabetics and normals.  This study was\ninfluential in defining the stages of development of Type 2 diabetes. Overt\ndiabetes is the most advanced stage, characterized by elevated fasting blood\nglucose concentration and classical symptoms. Preceding overt diabetes is\nthe latent or chemical diabetic stage, with no symptoms of diabetes but\ndemonstrable abnormality of oral or intravenous glucose tolerance.",
   "usage" : "A data frame with 145 observations on the following 6 variables.",
   "parameters" : {
      "sspg" : "steady state plasma glucose, a measure of insulin resistance, a numeric vector",
      "group" : "diagnostic group, a factor with levels Normal Chemical_Diabetic\nOvert_Diabetic",
      "instest" : "plasma insulin during test, a measure of insulin response to oral glucose, a numeric vector",
      "relwt" : "relative weight, expressed as the ratio of actual weight to expected weight, given the person's height, a numeric vector",
      "glutest" : "test plasma glucose level, a measure of glucose intolerance, a numeric vector",
      "glufast" : "fasting plasma glucose level, a numeric vector"
   }
}

var Diabetes = [
   [
      "relwt",
      "glufast",
      "glutest",
      "instest",
      "sspg",
      "group"
   ],
   [
      "0.81",
      "80",
      "356",
      "124",
      "55",
      "Normal"
   ],
   [
      "0.95",
      "97",
      "289",
      "117",
      "76",
      "Normal"
   ],
   [
      "0.94",
      "105",
      "319",
      "143",
      "105",
      "Normal"
   ],
   [
      "1.04",
      "90",
      "356",
      "199",
      "108",
      "Normal"
   ],
   [
      "1",
      "90",
      "323",
      "240",
      "143",
      "Normal"
   ],
   [
      "0.76",
      "86",
      "381",
      "157",
      "165",
      "Normal"
   ],
   [
      "0.91",
      "100",
      "350",
      "221",
      "119",
      "Normal"
   ],
   [
      "1.1",
      "85",
      "301",
      "186",
      "105",
      "Normal"
   ],
   [
      "0.99",
      "97",
      "379",
      "142",
      "98",
      "Normal"
   ],
   [
      "0.78",
      "97",
      "296",
      "131",
      "94",
      "Normal"
   ],
   [
      "0.9",
      "91",
      "353",
      "221",
      "53",
      "Normal"
   ],
   [
      "0.73",
      "87",
      "306",
      "178",
      "66",
      "Normal"
   ],
   [
      "0.96",
      "78",
      "290",
      "136",
      "142",
      "Normal"
   ],
   [
      "0.84",
      "90",
      "371",
      "200",
      "93",
      "Normal"
   ],
   [
      "0.74",
      "86",
      "312",
      "208",
      "68",
      "Normal"
   ],
   [
      "0.98",
      "80",
      "393",
      "202",
      "102",
      "Normal"
   ],
   [
      "1.1",
      "90",
      "364",
      "152",
      "76",
      "Normal"
   ],
   [
      "0.85",
      "99",
      "359",
      "185",
      "37",
      "Normal"
   ],
   [
      "0.83",
      "85",
      "296",
      "116",
      "60",
      "Normal"
   ],
   [
      "0.93",
      "90",
      "345",
      "123",
      "50",
      "Normal"
   ],
   [
      "0.95",
      "90",
      "378",
      "136",
      "47",
      "Normal"
   ],
   [
      "0.74",
      "88",
      "304",
      "134",
      "50",
      "Normal"
   ],
   [
      "0.95",
      "95",
      "347",
      "184",
      "91",
      "Normal"
   ],
   [
      "0.97",
      "90",
      "327",
      "192",
      "124",
      "Normal"
   ],
   [
      "0.72",
      "92",
      "386",
      "279",
      "74",
      "Normal"
   ],
   [
      "1.11",
      "74",
      "365",
      "228",
      "235",
      "Normal"
   ],
   [
      "1.2",
      "98",
      "365",
      "145",
      "158",
      "Normal"
   ],
   [
      "1.13",
      "100",
      "352",
      "172",
      "140",
      "Normal"
   ],
   [
      "1",
      "86",
      "325",
      "179",
      "145",
      "Normal"
   ],
   [
      "0.78",
      "98",
      "321",
      "222",
      "99",
      "Normal"
   ],
   [
      "1",
      "70",
      "360",
      "134",
      "90",
      "Normal"
   ],
   [
      "1",
      "99",
      "336",
      "143",
      "105",
      "Normal"
   ],
   [
      "0.71",
      "75",
      "352",
      "169",
      "32",
      "Normal"
   ],
   [
      "0.76",
      "90",
      "353",
      "263",
      "165",
      "Normal"
   ],
   [
      "0.89",
      "85",
      "373",
      "174",
      "78",
      "Normal"
   ],
   [
      "0.88",
      "99",
      "376",
      "134",
      "80",
      "Normal"
   ],
   [
      "1.17",
      "100",
      "367",
      "182",
      "54",
      "Normal"
   ],
   [
      "0.85",
      "78",
      "335",
      "241",
      "175",
      "Normal"
   ],
   [
      "0.97",
      "106",
      "396",
      "128",
      "80",
      "Normal"
   ],
   [
      "1",
      "98",
      "277",
      "222",
      "186",
      "Normal"
   ],
   [
      "1",
      "102",
      "378",
      "165",
      "117",
      "Normal"
   ],
   [
      "0.89",
      "90",
      "360",
      "282",
      "160",
      "Normal"
   ],
   [
      "0.98",
      "94",
      "291",
      "94",
      "71",
      "Normal"
   ],
   [
      "0.78",
      "80",
      "269",
      "121",
      "29",
      "Normal"
   ],
   [
      "0.74",
      "93",
      "318",
      "73",
      "42",
      "Normal"
   ],
   [
      "0.91",
      "86",
      "328",
      "106",
      "56",
      "Normal"
   ],
   [
      "0.95",
      "85",
      "334",
      "118",
      "122",
      "Normal"
   ],
   [
      "0.95",
      "96",
      "356",
      "112",
      "73",
      "Normal"
   ],
   [
      "1.03",
      "88",
      "291",
      "157",
      "122",
      "Normal"
   ],
   [
      "0.87",
      "87",
      "360",
      "292",
      "128",
      "Normal"
   ],
   [
      "0.87",
      "94",
      "313",
      "200",
      "233",
      "Normal"
   ],
   [
      "1.17",
      "93",
      "306",
      "220",
      "132",
      "Normal"
   ],
   [
      "0.83",
      "86",
      "319",
      "144",
      "138",
      "Normal"
   ],
   [
      "0.82",
      "86",
      "349",
      "109",
      "83",
      "Normal"
   ],
   [
      "0.86",
      "96",
      "332",
      "151",
      "109",
      "Normal"
   ],
   [
      "1.01",
      "86",
      "323",
      "158",
      "96",
      "Normal"
   ],
   [
      "0.88",
      "89",
      "323",
      "73",
      "52",
      "Normal"
   ],
   [
      "0.75",
      "83",
      "351",
      "81",
      "42",
      "Normal"
   ],
   [
      "0.99",
      "98",
      "478",
      "151",
      "122",
      "Chemical_Diabetic"
   ],
   [
      "1.12",
      "100",
      "398",
      "122",
      "176",
      "Normal"
   ],
   [
      "1.09",
      "110",
      "426",
      "117",
      "118",
      "Normal"
   ],
   [
      "1.02",
      "88",
      "439",
      "208",
      "244",
      "Chemical_Diabetic"
   ],
   [
      "1.19",
      "100",
      "429",
      "201",
      "194",
      "Chemical_Diabetic"
   ],
   [
      "1.06",
      "80",
      "333",
      "131",
      "136",
      "Normal"
   ],
   [
      "1.2",
      "89",
      "472",
      "162",
      "257",
      "Chemical_Diabetic"
   ],
   [
      "1.05",
      "91",
      "436",
      "148",
      "167",
      "Chemical_Diabetic"
   ],
   [
      "1.18",
      "96",
      "418",
      "130",
      "153",
      "Normal"
   ],
   [
      "1.01",
      "95",
      "391",
      "137",
      "248",
      "Normal"
   ],
   [
      "0.91",
      "82",
      "390",
      "375",
      "273",
      "Normal"
   ],
   [
      "0.81",
      "84",
      "416",
      "146",
      "80",
      "Normal"
   ],
   [
      "1.1",
      "90",
      "413",
      "344",
      "270",
      "Chemical_Diabetic"
   ],
   [
      "1.03",
      "100",
      "385",
      "192",
      "180",
      "Normal"
   ],
   [
      "0.97",
      "86",
      "393",
      "115",
      "85",
      "Normal"
   ],
   [
      "0.96",
      "93",
      "376",
      "195",
      "106",
      "Normal"
   ],
   [
      "1.1",
      "107",
      "403",
      "267",
      "254",
      "Normal"
   ],
   [
      "1.07",
      "112",
      "414",
      "281",
      "119",
      "Normal"
   ],
   [
      "1.08",
      "94",
      "426",
      "213",
      "177",
      "Chemical_Diabetic"
   ],
   [
      "0.95",
      "93",
      "364",
      "156",
      "159",
      "Normal"
   ],
   [
      "0.74",
      "93",
      "391",
      "221",
      "103",
      "Normal"
   ],
   [
      "0.84",
      "90",
      "356",
      "199",
      "59",
      "Normal"
   ],
   [
      "0.89",
      "99",
      "398",
      "76",
      "108",
      "Normal"
   ],
   [
      "1.11",
      "93",
      "393",
      "490",
      "259",
      "Normal"
   ],
   [
      "1.19",
      "85",
      "425",
      "143",
      "204",
      "Chemical_Diabetic"
   ],
   [
      "1.18",
      "89",
      "318",
      "73",
      "220",
      "Normal"
   ],
   [
      "1.06",
      "96",
      "465",
      "237",
      "111",
      "Chemical_Diabetic"
   ],
   [
      "0.95",
      "111",
      "558",
      "748",
      "122",
      "Chemical_Diabetic"
   ],
   [
      "1.06",
      "107",
      "503",
      "320",
      "253",
      "Chemical_Diabetic"
   ],
   [
      "0.98",
      "114",
      "540",
      "188",
      "211",
      "Chemical_Diabetic"
   ],
   [
      "1.16",
      "101",
      "469",
      "607",
      "271",
      "Chemical_Diabetic"
   ],
   [
      "1.18",
      "108",
      "486",
      "297",
      "220",
      "Chemical_Diabetic"
   ],
   [
      "1.2",
      "112",
      "568",
      "232",
      "276",
      "Chemical_Diabetic"
   ],
   [
      "1.08",
      "105",
      "527",
      "480",
      "233",
      "Chemical_Diabetic"
   ],
   [
      "0.91",
      "103",
      "537",
      "622",
      "264",
      "Chemical_Diabetic"
   ],
   [
      "1.03",
      "99",
      "466",
      "287",
      "231",
      "Chemical_Diabetic"
   ],
   [
      "1.09",
      "102",
      "599",
      "266",
      "268",
      "Chemical_Diabetic"
   ],
   [
      "1.05",
      "110",
      "477",
      "124",
      "60",
      "Chemical_Diabetic"
   ],
   [
      "1.2",
      "102",
      "472",
      "297",
      "272",
      "Chemical_Diabetic"
   ],
   [
      "1.05",
      "96",
      "456",
      "326",
      "235",
      "Chemical_Diabetic"
   ],
   [
      "1.1",
      "95",
      "517",
      "564",
      "206",
      "Chemical_Diabetic"
   ],
   [
      "1.12",
      "112",
      "503",
      "408",
      "300",
      "Chemical_Diabetic"
   ],
   [
      "0.96",
      "110",
      "522",
      "325",
      "286",
      "Chemical_Diabetic"
   ],
   [
      "1.13",
      "92",
      "476",
      "433",
      "226",
      "Chemical_Diabetic"
   ],
   [
      "1.07",
      "104",
      "472",
      "180",
      "239",
      "Chemical_Diabetic"
   ],
   [
      "1.1",
      "75",
      "455",
      "392",
      "242",
      "Chemical_Diabetic"
   ],
   [
      "0.94",
      "92",
      "442",
      "109",
      "157",
      "Chemical_Diabetic"
   ],
   [
      "1.12",
      "92",
      "541",
      "313",
      "267",
      "Chemical_Diabetic"
   ],
   [
      "0.88",
      "92",
      "580",
      "132",
      "155",
      "Chemical_Diabetic"
   ],
   [
      "0.93",
      "93",
      "472",
      "285",
      "194",
      "Chemical_Diabetic"
   ],
   [
      "1.16",
      "112",
      "562",
      "139",
      "198",
      "Chemical_Diabetic"
   ],
   [
      "0.94",
      "88",
      "423",
      "212",
      "156",
      "Chemical_Diabetic"
   ],
   [
      "0.91",
      "114",
      "643",
      "155",
      "100",
      "Chemical_Diabetic"
   ],
   [
      "0.83",
      "103",
      "533",
      "120",
      "135",
      "Chemical_Diabetic"
   ],
   [
      "0.92",
      "300",
      "1468",
      "28",
      "455",
      "Overt_Diabetic"
   ],
   [
      "0.86",
      "303",
      "1487",
      "23",
      "327",
      "Overt_Diabetic"
   ],
   [
      "0.85",
      "125",
      "714",
      "232",
      "279",
      "Overt_Diabetic"
   ],
   [
      "0.83",
      "280",
      "1470",
      "54",
      "382",
      "Overt_Diabetic"
   ],
   [
      "0.85",
      "216",
      "1113",
      "81",
      "378",
      "Overt_Diabetic"
   ],
   [
      "1.06",
      "190",
      "972",
      "87",
      "374",
      "Overt_Diabetic"
   ],
   [
      "1.06",
      "151",
      "854",
      "76",
      "260",
      "Overt_Diabetic"
   ],
   [
      "0.92",
      "303",
      "1364",
      "42",
      "346",
      "Overt_Diabetic"
   ],
   [
      "1.2",
      "173",
      "832",
      "102",
      "319",
      "Overt_Diabetic"
   ],
   [
      "1.04",
      "203",
      "967",
      "138",
      "351",
      "Overt_Diabetic"
   ],
   [
      "1.16",
      "195",
      "920",
      "160",
      "357",
      "Overt_Diabetic"
   ],
   [
      "1.08",
      "140",
      "613",
      "131",
      "248",
      "Overt_Diabetic"
   ],
   [
      "0.95",
      "151",
      "857",
      "145",
      "324",
      "Overt_Diabetic"
   ],
   [
      "0.86",
      "275",
      "1373",
      "45",
      "300",
      "Overt_Diabetic"
   ],
   [
      "0.9",
      "260",
      "1133",
      "118",
      "300",
      "Overt_Diabetic"
   ],
   [
      "0.97",
      "149",
      "849",
      "159",
      "310",
      "Overt_Diabetic"
   ],
   [
      "1.16",
      "233",
      "1183",
      "73",
      "458",
      "Overt_Diabetic"
   ],
   [
      "1.12",
      "146",
      "847",
      "103",
      "339",
      "Overt_Diabetic"
   ],
   [
      "1.07",
      "124",
      "538",
      "460",
      "320",
      "Overt_Diabetic"
   ],
   [
      "0.93",
      "213",
      "1001",
      "42",
      "297",
      "Overt_Diabetic"
   ],
   [
      "0.85",
      "330",
      "1520",
      "13",
      "303",
      "Overt_Diabetic"
   ],
   [
      "0.81",
      "123",
      "557",
      "130",
      "152",
      "Overt_Diabetic"
   ],
   [
      "0.98",
      "130",
      "670",
      "44",
      "167",
      "Overt_Diabetic"
   ],
   [
      "1.01",
      "120",
      "636",
      "314",
      "220",
      "Overt_Diabetic"
   ],
   [
      "1.19",
      "138",
      "741",
      "219",
      "209",
      "Overt_Diabetic"
   ],
   [
      "1.04",
      "188",
      "958",
      "100",
      "351",
      "Overt_Diabetic"
   ],
   [
      "1.06",
      "339",
      "1354",
      "10",
      "450",
      "Overt_Diabetic"
   ],
   [
      "1.03",
      "265",
      "1263",
      "83",
      "413",
      "Overt_Diabetic"
   ],
   [
      "1.05",
      "353",
      "1428",
      "41",
      "480",
      "Overt_Diabetic"
   ],
   [
      "0.91",
      "180",
      "923",
      "77",
      "150",
      "Overt_Diabetic"
   ],
   [
      "0.9",
      "213",
      "1025",
      "29",
      "209",
      "Overt_Diabetic"
   ],
   [
      "1.11",
      "328",
      "1246",
      "124",
      "442",
      "Overt_Diabetic"
   ],
   [
      "0.74",
      "346",
      "1568",
      "15",
      "253",
      "Overt_Diabetic"
   ]
]
