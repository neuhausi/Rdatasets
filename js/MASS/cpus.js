var cpusInfo ={
   "format" : "The components are:",
   "parameters" : {
      "cach" : "cache size in kilobytes.",
      "chmin" : "minimum number of channels.",
      "name" : "manufacturer and model.",
      "mmin" : "minimum main memory in kilobytes.",
      "estperf" : "estimated performance (by Ein-Dor & Feldmesser).",
      "chmax" : "maximum number of channels.",
      "mmax" : "maximum main memory in kilobytes.",
      "perf" : "published performance on a benchmark mix relative to an IBM 370/158-3.",
      "syct" : "cycle time in nanoseconds."
   },
   "description" : "Description\nA relative performance measure and characteristics of 209 CPUs.",
   "title" : "Performance of Computer CPUs",
   "reference" : "P. Ein-Dor and J. Feldmesser (1987)\nAttributes of the performance of central processing units: a relative\nperformance prediction model.\nComm. ACM. 30, 308&ndash;317.",
   "usage" : "cpus"
}

var cpus = [
   [
      "name",
      "syct",
      "mmin",
      "mmax",
      "cach",
      "chmin",
      "chmax",
      "perf",
      "estperf"
   ],
   [
      "ADVISOR 32/60",
      "125",
      "256",
      "6000",
      "256",
      "16",
      "128",
      "198",
      "199"
   ],
   [
      "AMDAHL 470V/7",
      "29",
      "8000",
      "32000",
      "32",
      "8",
      "32",
      "269",
      "253"
   ],
   [
      "AMDAHL 470/7A",
      "29",
      "8000",
      "32000",
      "32",
      "8",
      "32",
      "220",
      "253"
   ],
   [
      "AMDAHL 470V/7B",
      "29",
      "8000",
      "32000",
      "32",
      "8",
      "32",
      "172",
      "253"
   ],
   [
      "AMDAHL 470V/7C",
      "29",
      "8000",
      "16000",
      "32",
      "8",
      "16",
      "132",
      "132"
   ],
   [
      "AMDAHL 470V/8",
      "26",
      "8000",
      "32000",
      "64",
      "8",
      "32",
      "318",
      "290"
   ],
   [
      "AMDAHL 580-5840",
      "23",
      "16000",
      "32000",
      "64",
      "16",
      "32",
      "367",
      "381"
   ],
   [
      "AMDAHL 580-5850",
      "23",
      "16000",
      "32000",
      "64",
      "16",
      "32",
      "489",
      "381"
   ],
   [
      "AMDAHL 580-5860",
      "23",
      "16000",
      "64000",
      "64",
      "16",
      "32",
      "636",
      "749"
   ],
   [
      "AMDAHL 580 5880",
      "23",
      "32000",
      "64000",
      "128",
      "32",
      "64",
      "1144",
      "1238"
   ],
   [
      "APOLLO DN320",
      "400",
      "1000",
      "3000",
      "0",
      "1",
      "2",
      "38",
      "23"
   ],
   [
      "APOLLO DN420",
      "400",
      "512",
      "3500",
      "4",
      "1",
      "6",
      "40",
      "24"
   ],
   [
      "BASF 7/65",
      "60",
      "2000",
      "8000",
      "65",
      "1",
      "8",
      "92",
      "70"
   ],
   [
      "BASF 7/68",
      "50",
      "4000",
      "16000",
      "65",
      "1",
      "8",
      "138",
      "117"
   ],
   [
      "BTI 5000",
      "350",
      "64",
      "64",
      "0",
      "1",
      "4",
      "10",
      "15"
   ],
   [
      "BTI 8000",
      "200",
      "512",
      "16000",
      "0",
      "4",
      "32",
      "35",
      "64"
   ],
   [
      "BURROUGHS B1955",
      "167",
      "524",
      "2000",
      "8",
      "4",
      "15",
      "19",
      "23"
   ],
   [
      "BURROUGHS B2900",
      "143",
      "512",
      "5000",
      "0",
      "7",
      "32",
      "28",
      "29"
   ],
   [
      "BURROUGHS B2925",
      "143",
      "1000",
      "2000",
      "0",
      "5",
      "16",
      "31",
      "22"
   ],
   [
      "BURROUGHS B4955",
      "110",
      "5000",
      "5000",
      "142",
      "8",
      "64",
      "120",
      "124"
   ],
   [
      "BURROUGHS B5900",
      "143",
      "1500",
      "6300",
      "0",
      "5",
      "32",
      "30",
      "35"
   ],
   [
      "BURROUGHS B5920",
      "143",
      "3100",
      "6200",
      "0",
      "5",
      "20",
      "33",
      "39"
   ],
   [
      "BURROUGHS B6900",
      "143",
      "2300",
      "6200",
      "0",
      "6",
      "64",
      "61",
      "40"
   ],
   [
      "BURROUGHS B6925",
      "110",
      "3100",
      "6200",
      "0",
      "6",
      "64",
      "76",
      "45"
   ],
   [
      "C.R.D. 68/10-80",
      "320",
      "128",
      "6000",
      "0",
      "1",
      "12",
      "23",
      "28"
   ],
   [
      "C.R.D. UNIVERSE 2203T",
      "320",
      "512",
      "2000",
      "4",
      "1",
      "3",
      "69",
      "21"
   ],
   [
      "C.R.D. UNIVERSE 68",
      "320",
      "256",
      "6000",
      "0",
      "1",
      "6",
      "33",
      "28"
   ],
   [
      "C.R.D. UNIVERSE 68/05",
      "320",
      "256",
      "3000",
      "4",
      "1",
      "3",
      "27",
      "22"
   ],
   [
      "C.R.D. UNIVERSE 68/137",
      "320",
      "512",
      "5000",
      "4",
      "1",
      "5",
      "77",
      "28"
   ],
   [
      "C.R.D. UNIVERSE 68/37",
      "320",
      "256",
      "5000",
      "4",
      "1",
      "6",
      "27",
      "27"
   ],
   [
      "CDC CYBER 170/750",
      "25",
      "1310",
      "2620",
      "131",
      "12",
      "24",
      "274",
      "102"
   ],
   [
      "CDC CYBER 170/760",
      "25",
      "1310",
      "2620",
      "131",
      "12",
      "24",
      "368",
      "102"
   ],
   [
      "CDC CYBER 170/815",
      "50",
      "2620",
      "10480",
      "30",
      "12",
      "24",
      "32",
      "74"
   ],
   [
      "CDC CYBER 170/825",
      "50",
      "2620",
      "10480",
      "30",
      "12",
      "24",
      "63",
      "74"
   ],
   [
      "CDC CYBER 170/835",
      "56",
      "5240",
      "20970",
      "30",
      "12",
      "24",
      "106",
      "138"
   ],
   [
      "CDC CYBER 170/845",
      "64",
      "5240",
      "20970",
      "30",
      "12",
      "24",
      "208",
      "136"
   ],
   [
      "CDC OMEGA 480-I",
      "50",
      "500",
      "2000",
      "8",
      "1",
      "4",
      "20",
      "23"
   ],
   [
      "CDC OMEGA 480-II",
      "50",
      "1000",
      "4000",
      "8",
      "1",
      "5",
      "29",
      "29"
   ],
   [
      "CDC OMEGA 480-III",
      "50",
      "2000",
      "8000",
      "8",
      "1",
      "5",
      "71",
      "44"
   ],
   [
      "CAMBEX 1636-1",
      "50",
      "1000",
      "4000",
      "8",
      "3",
      "5",
      "26",
      "30"
   ],
   [
      "CAMBEX 1636-10",
      "50",
      "1000",
      "8000",
      "8",
      "3",
      "5",
      "36",
      "41"
   ],
   [
      "CAMBEX 1641-1",
      "50",
      "2000",
      "16000",
      "8",
      "3",
      "5",
      "40",
      "74"
   ],
   [
      "CAMBEX 1641-11",
      "50",
      "2000",
      "16000",
      "8",
      "3",
      "6",
      "52",
      "74"
   ],
   [
      "CAMBEX 1651-1",
      "50",
      "2000",
      "16000",
      "8",
      "3",
      "6",
      "60",
      "74"
   ],
   [
      "DEC DECSYS 10 1091",
      "133",
      "1000",
      "12000",
      "9",
      "3",
      "12",
      "72",
      "54"
   ],
   [
      "DEC DECSYS 20 2060",
      "133",
      "1000",
      "8000",
      "9",
      "3",
      "12",
      "72",
      "41"
   ],
   [
      "DEC MICROVAX-1",
      "810",
      "512",
      "512",
      "8",
      "1",
      "1",
      "18",
      "18"
   ],
   [
      "DEC VAX 11/730",
      "810",
      "1000",
      "5000",
      "0",
      "1",
      "1",
      "20",
      "28"
   ],
   [
      "DEC VAX 11/750",
      "320",
      "512",
      "8000",
      "4",
      "1",
      "5",
      "40",
      "36"
   ],
   [
      "DEC VAX 11/780",
      "200",
      "512",
      "8000",
      "8",
      "1",
      "8",
      "62",
      "38"
   ],
   [
      "DG ECLIPSE C/350",
      "700",
      "384",
      "8000",
      "0",
      "1",
      "1",
      "24",
      "34"
   ],
   [
      "DG ECLIPSE M/600",
      "700",
      "256",
      "2000",
      "0",
      "1",
      "1",
      "24",
      "19"
   ],
   [
      "DG ECLIPSE MV/1000",
      "140",
      "1000",
      "16000",
      "16",
      "1",
      "3",
      "138",
      "72"
   ],
   [
      "DG ECLIPSE MV/4000",
      "200",
      "1000",
      "8000",
      "0",
      "1",
      "2",
      "36",
      "36"
   ],
   [
      "DG ECLIPSE MV/6000",
      "110",
      "1000",
      "4000",
      "16",
      "1",
      "2",
      "26",
      "30"
   ],
   [
      "DG ECLIPSE MV/8000",
      "110",
      "1000",
      "12000",
      "16",
      "1",
      "2",
      "60",
      "56"
   ],
   [
      "DG ECLIPSE MV/8000 II",
      "220",
      "1000",
      "8000",
      "16",
      "1",
      "2",
      "71",
      "42"
   ],
   [
      "FORMATION F4000/100",
      "800",
      "256",
      "8000",
      "0",
      "1",
      "4",
      "12",
      "34"
   ],
   [
      "FORMATION F4000/200",
      "800",
      "256",
      "8000",
      "0",
      "1",
      "4",
      "14",
      "34"
   ],
   [
      "FORMATION F4000/200AP",
      "800",
      "256",
      "8000",
      "0",
      "1",
      "4",
      "20",
      "34"
   ],
   [
      "FORMATION F4000/300",
      "800",
      "256",
      "8000",
      "0",
      "1",
      "4",
      "16",
      "34"
   ],
   [
      "FORMATION F4000/300AP",
      "800",
      "256",
      "8000",
      "0",
      "1",
      "4",
      "22",
      "34"
   ],
   [
      "FOUR PHASE 2000/260",
      "125",
      "512",
      "1000",
      "0",
      "8",
      "20",
      "36",
      "19"
   ],
   [
      "GOULD CONCEPT 32/8705",
      "75",
      "2000",
      "8000",
      "64",
      "1",
      "38",
      "144",
      "75"
   ],
   [
      "GOULD CONCEPT 32/8750",
      "75",
      "2000",
      "16000",
      "64",
      "1",
      "38",
      "144",
      "113"
   ],
   [
      "GOULD CONCEPT 32/8780",
      "75",
      "2000",
      "16000",
      "128",
      "1",
      "38",
      "259",
      "157"
   ],
   [
      "HP 3000/30",
      "90",
      "256",
      "1000",
      "0",
      "3",
      "10",
      "17",
      "18"
   ],
   [
      "HP 3000/40",
      "105",
      "256",
      "2000",
      "0",
      "3",
      "10",
      "26",
      "20"
   ],
   [
      "HP 3000/44",
      "105",
      "1000",
      "4000",
      "0",
      "3",
      "24",
      "32",
      "28"
   ],
   [
      "HP 3000/48",
      "105",
      "2000",
      "4000",
      "8",
      "3",
      "19",
      "32",
      "33"
   ],
   [
      "HP 3000/64",
      "75",
      "2000",
      "8000",
      "8",
      "3",
      "24",
      "62",
      "47"
   ],
   [
      "HP 3000/88",
      "75",
      "3000",
      "8000",
      "8",
      "3",
      "48",
      "64",
      "54"
   ],
   [
      "HP 3000/III",
      "175",
      "256",
      "2000",
      "0",
      "3",
      "24",
      "22",
      "20"
   ],
   [
      "HARRIS 100",
      "300",
      "768",
      "3000",
      "0",
      "6",
      "24",
      "36",
      "23"
   ],
   [
      "HARRIS 300",
      "300",
      "768",
      "3000",
      "6",
      "6",
      "24",
      "44",
      "25"
   ],
   [
      "HARRIS 500",
      "300",
      "768",
      "12000",
      "6",
      "6",
      "24",
      "50",
      "52"
   ],
   [
      "HARRIS 600",
      "300",
      "768",
      "4500",
      "0",
      "1",
      "24",
      "45",
      "27"
   ],
   [
      "HARRIS 700",
      "300",
      "384",
      "12000",
      "6",
      "1",
      "24",
      "53",
      "50"
   ],
   [
      "HARRIS 80",
      "300",
      "192",
      "768",
      "6",
      "6",
      "24",
      "36",
      "18"
   ],
   [
      "HARRIS 800",
      "180",
      "768",
      "12000",
      "6",
      "1",
      "31",
      "84",
      "53"
   ],
   [
      "HONEYWELL DPS 6/35",
      "330",
      "1000",
      "3000",
      "0",
      "2",
      "4",
      "16",
      "23"
   ],
   [
      "HONEYWELL DPS 6/92",
      "300",
      "1000",
      "4000",
      "8",
      "3",
      "64",
      "38",
      "30"
   ],
   [
      "HONEYWELL DPS 6/96",
      "300",
      "1000",
      "16000",
      "8",
      "2",
      "112",
      "38",
      "73"
   ],
   [
      "HONEYWELL DPS 7/35",
      "330",
      "1000",
      "2000",
      "0",
      "1",
      "2",
      "16",
      "20"
   ],
   [
      "HONEYWELL DPS 7/45",
      "330",
      "1000",
      "4000",
      "0",
      "3",
      "6",
      "22",
      "25"
   ],
   [
      "HONEYWELL DPS 7/55",
      "140",
      "2000",
      "4000",
      "0",
      "3",
      "6",
      "29",
      "28"
   ],
   [
      "HONEYWELL DPS 7/65",
      "140",
      "2000",
      "4000",
      "0",
      "4",
      "8",
      "40",
      "29"
   ],
   [
      "HONEYWELL DPS 8/44",
      "140",
      "2000",
      "4000",
      "8",
      "1",
      "20",
      "35",
      "32"
   ],
   [
      "HONEYWELL DPS 8/49",
      "140",
      "2000",
      "32000",
      "32",
      "1",
      "20",
      "134",
      "175"
   ],
   [
      "HONEYWELL DPS 8/50",
      "140",
      "2000",
      "8000",
      "32",
      "1",
      "54",
      "66",
      "57"
   ],
   [
      "HONEYWELL DPS 8/52",
      "140",
      "2000",
      "32000",
      "32",
      "1",
      "54",
      "141",
      "181"
   ],
   [
      "HONEYWELL DPS 8/62",
      "140",
      "2000",
      "32000",
      "32",
      "1",
      "54",
      "189",
      "181"
   ],
   [
      "HONEYWELL DPS 8/20",
      "140",
      "2000",
      "4000",
      "8",
      "1",
      "20",
      "22",
      "32"
   ],
   [
      "IBM 3033 S",
      "57",
      "4000",
      "16000",
      "1",
      "6",
      "12",
      "132",
      "82"
   ],
   [
      "IBM 3033 U",
      "57",
      "4000",
      "24000",
      "64",
      "12",
      "16",
      "237",
      "171"
   ],
   [
      "IBM 3081",
      "26",
      "16000",
      "32000",
      "64",
      "16",
      "24",
      "465",
      "361"
   ],
   [
      "IBM 3081 D",
      "26",
      "16000",
      "32000",
      "64",
      "8",
      "24",
      "465",
      "350"
   ],
   [
      "IBM 3083 B",
      "26",
      "8000",
      "32000",
      "0",
      "8",
      "24",
      "277",
      "220"
   ],
   [
      "IBM 3083 E",
      "26",
      "8000",
      "16000",
      "0",
      "8",
      "16",
      "185",
      "113"
   ],
   [
      "IBM 370/125-2",
      "480",
      "96",
      "512",
      "0",
      "1",
      "1",
      "6",
      "15"
   ],
   [
      "IBM 370/148",
      "203",
      "1000",
      "2000",
      "0",
      "1",
      "5",
      "24",
      "21"
   ],
   [
      "IBM 370/158-3",
      "115",
      "512",
      "6000",
      "16",
      "1",
      "6",
      "45",
      "35"
   ],
   [
      "IBM 38/3",
      "1100",
      "512",
      "1500",
      "0",
      "1",
      "1",
      "7",
      "18"
   ],
   [
      "IBM 38/4",
      "1100",
      "768",
      "2000",
      "0",
      "1",
      "1",
      "13",
      "20"
   ],
   [
      "IBM 38/5",
      "600",
      "768",
      "2000",
      "0",
      "1",
      "1",
      "16",
      "20"
   ],
   [
      "IBM 38/7",
      "400",
      "2000",
      "4000",
      "0",
      "1",
      "1",
      "32",
      "28"
   ],
   [
      "IBM 38/8",
      "400",
      "4000",
      "8000",
      "0",
      "1",
      "1",
      "32",
      "45"
   ],
   [
      "IBM 4321",
      "900",
      "1000",
      "1000",
      "0",
      "1",
      "2",
      "11",
      "18"
   ],
   [
      "IBM 4331-1",
      "900",
      "512",
      "1000",
      "0",
      "1",
      "2",
      "11",
      "17"
   ],
   [
      "IBM 4331-11",
      "900",
      "1000",
      "4000",
      "4",
      "1",
      "2",
      "18",
      "26"
   ],
   [
      "IBM 4331-2",
      "900",
      "1000",
      "4000",
      "8",
      "1",
      "2",
      "22",
      "28"
   ],
   [
      "IBM 4341",
      "900",
      "2000",
      "4000",
      "0",
      "3",
      "6",
      "37",
      "28"
   ],
   [
      "IBM 4341-1",
      "225",
      "2000",
      "4000",
      "8",
      "3",
      "6",
      "40",
      "31"
   ],
   [
      "IBM 4341-10",
      "225",
      "2000",
      "4000",
      "8",
      "3",
      "6",
      "34",
      "31"
   ],
   [
      "IBM 4341-11",
      "180",
      "2000",
      "8000",
      "8",
      "1",
      "6",
      "50",
      "42"
   ],
   [
      "IBM 4341-12",
      "185",
      "2000",
      "16000",
      "16",
      "1",
      "6",
      "76",
      "76"
   ],
   [
      "IBM 4341-2",
      "180",
      "2000",
      "16000",
      "16",
      "1",
      "6",
      "66",
      "76"
   ],
   [
      "IBM 4341-9",
      "225",
      "1000",
      "4000",
      "2",
      "3",
      "6",
      "24",
      "26"
   ],
   [
      "IBM 4361-4",
      "25",
      "2000",
      "12000",
      "8",
      "1",
      "4",
      "49",
      "59"
   ],
   [
      "IBM 4361-5",
      "25",
      "2000",
      "12000",
      "16",
      "3",
      "5",
      "66",
      "65"
   ],
   [
      "IBM 4381-1",
      "17",
      "4000",
      "16000",
      "8",
      "6",
      "12",
      "100",
      "101"
   ],
   [
      "IBM 4381-2",
      "17",
      "4000",
      "16000",
      "32",
      "6",
      "12",
      "133",
      "116"
   ],
   [
      "IBM 8130 A",
      "1500",
      "768",
      "1000",
      "0",
      "0",
      "0",
      "12",
      "18"
   ],
   [
      "IBM 8130 B",
      "1500",
      "768",
      "2000",
      "0",
      "0",
      "0",
      "18",
      "20"
   ],
   [
      "IBM 8140",
      "800",
      "768",
      "2000",
      "0",
      "0",
      "0",
      "20",
      "20"
   ],
   [
      "IPL 4436",
      "50",
      "2000",
      "4000",
      "0",
      "3",
      "6",
      "27",
      "30"
   ],
   [
      "IPL 4443",
      "50",
      "2000",
      "8000",
      "8",
      "3",
      "6",
      "45",
      "44"
   ],
   [
      "IPL 4445",
      "50",
      "2000",
      "8000",
      "8",
      "1",
      "6",
      "56",
      "44"
   ],
   [
      "IPL 4446",
      "50",
      "2000",
      "16000",
      "24",
      "1",
      "6",
      "70",
      "82"
   ],
   [
      "IPL 4460",
      "50",
      "2000",
      "16000",
      "24",
      "1",
      "6",
      "80",
      "82"
   ],
   [
      "IPL 4480",
      "50",
      "8000",
      "16000",
      "48",
      "1",
      "10",
      "136",
      "128"
   ],
   [
      "MAGNUSON M80/30",
      "100",
      "1000",
      "8000",
      "0",
      "2",
      "6",
      "16",
      "37"
   ],
   [
      "MAGNUSON M80/31",
      "100",
      "1000",
      "8000",
      "24",
      "2",
      "6",
      "26",
      "46"
   ],
   [
      "MAGNUSON M80/32",
      "100",
      "1000",
      "8000",
      "24",
      "3",
      "6",
      "32",
      "46"
   ],
   [
      "MAGNUSON M80/42",
      "50",
      "2000",
      "16000",
      "12",
      "3",
      "16",
      "45",
      "80"
   ],
   [
      "MAGNUSON M80/43",
      "50",
      "2000",
      "16000",
      "24",
      "6",
      "16",
      "54",
      "88"
   ],
   [
      "MAGNUSON M80/44",
      "50",
      "2000",
      "16000",
      "24",
      "6",
      "16",
      "65",
      "88"
   ],
   [
      "MICRODATA SEQ.MS/3200",
      "150",
      "512",
      "4000",
      "0",
      "8",
      "128",
      "30",
      "33"
   ],
   [
      "NAS AS/3000",
      "115",
      "2000",
      "8000",
      "16",
      "1",
      "3",
      "50",
      "46"
   ],
   [
      "NAS AS/3000 N",
      "115",
      "2000",
      "4000",
      "2",
      "1",
      "5",
      "40",
      "29"
   ],
   [
      "NAS AS/5000",
      "92",
      "2000",
      "8000",
      "32",
      "1",
      "6",
      "62",
      "53"
   ],
   [
      "NAS AS/5000 E",
      "92",
      "2000",
      "8000",
      "32",
      "1",
      "6",
      "60",
      "53"
   ],
   [
      "NAS AS/5000 N",
      "92",
      "2000",
      "8000",
      "4",
      "1",
      "6",
      "50",
      "41"
   ],
   [
      "NAS AS/6130",
      "75",
      "4000",
      "16000",
      "16",
      "1",
      "6",
      "66",
      "86"
   ],
   [
      "NAS AS/6150",
      "60",
      "4000",
      "16000",
      "32",
      "1",
      "6",
      "86",
      "95"
   ],
   [
      "NAS AS/6620",
      "60",
      "2000",
      "16000",
      "64",
      "5",
      "8",
      "74",
      "107"
   ],
   [
      "NAS AS/6630",
      "60",
      "4000",
      "16000",
      "64",
      "5",
      "8",
      "93",
      "117"
   ],
   [
      "NAS AS/6650",
      "50",
      "4000",
      "16000",
      "64",
      "5",
      "10",
      "110",
      "119"
   ],
   [
      "NAS AS/7000",
      "72",
      "4000",
      "16000",
      "64",
      "8",
      "16",
      "143",
      "120"
   ],
   [
      "NAS AS/7000 N",
      "72",
      "2000",
      "8000",
      "16",
      "6",
      "8",
      "105",
      "48"
   ],
   [
      "NAS AS/8040",
      "40",
      "8000",
      "16000",
      "32",
      "8",
      "16",
      "214",
      "126"
   ],
   [
      "NAS AS/8050",
      "40",
      "8000",
      "32000",
      "64",
      "8",
      "24",
      "277",
      "266"
   ],
   [
      "NAS AS/8060",
      "35",
      "8000",
      "32000",
      "64",
      "8",
      "24",
      "370",
      "270"
   ],
   [
      "NAS AS/9000 DPC",
      "38",
      "16000",
      "32000",
      "128",
      "16",
      "32",
      "510",
      "426"
   ],
   [
      "NAS AS/9000 N",
      "48",
      "4000",
      "24000",
      "32",
      "8",
      "24",
      "214",
      "151"
   ],
   [
      "NAS AS/9040",
      "38",
      "8000",
      "32000",
      "64",
      "8",
      "24",
      "326",
      "267"
   ],
   [
      "NAS AS/9060",
      "30",
      "16000",
      "32000",
      "256",
      "16",
      "24",
      "510",
      "603"
   ],
   [
      "NCR V8535 II",
      "112",
      "1000",
      "1000",
      "0",
      "1",
      "4",
      "8",
      "19"
   ],
   [
      "NCR V8545 II",
      "84",
      "1000",
      "2000",
      "0",
      "1",
      "6",
      "12",
      "21"
   ],
   [
      "NCR V8555 II",
      "56",
      "1000",
      "4000",
      "0",
      "1",
      "6",
      "17",
      "26"
   ],
   [
      "NCR V8565 II",
      "56",
      "2000",
      "6000",
      "0",
      "1",
      "8",
      "21",
      "35"
   ],
   [
      "NCR V8565 II E",
      "56",
      "2000",
      "8000",
      "0",
      "1",
      "8",
      "24",
      "41"
   ],
   [
      "NCR V8575 II",
      "56",
      "4000",
      "8000",
      "0",
      "1",
      "8",
      "34",
      "47"
   ],
   [
      "NCR V8585 II",
      "56",
      "4000",
      "12000",
      "0",
      "1",
      "8",
      "42",
      "62"
   ],
   [
      "NCR V8595 II",
      "56",
      "4000",
      "16000",
      "0",
      "1",
      "8",
      "46",
      "78"
   ],
   [
      "NCR V8635 ",
      "38",
      "4000",
      "8000",
      "32",
      "16",
      "32",
      "51",
      "80"
   ],
   [
      "NCR V8650",
      "38",
      "4000",
      "8000",
      "32",
      "16",
      "32",
      "116",
      "80"
   ],
   [
      "NCR V8635",
      "38",
      "8000",
      "16000",
      "64",
      "4",
      "8",
      "100",
      "142"
   ],
   [
      "NCR V8665",
      "38",
      "8000",
      "24000",
      "160",
      "4",
      "8",
      "140",
      "281"
   ],
   [
      "NCR V8670",
      "38",
      "4000",
      "16000",
      "128",
      "16",
      "32",
      "212",
      "190"
   ],
   [
      "NIXDORF 8890/30",
      "200",
      "1000",
      "2000",
      "0",
      "1",
      "2",
      "25",
      "21"
   ],
   [
      "NIXDORF 8890/50",
      "200",
      "1000",
      "4000",
      "0",
      "1",
      "4",
      "30",
      "25"
   ],
   [
      "NIXDORF 8890/70",
      "200",
      "2000",
      "8000",
      "64",
      "1",
      "5",
      "41",
      "67"
   ],
   [
      "PERKIN-ELMER 3205",
      "250",
      "512",
      "4000",
      "0",
      "1",
      "7",
      "25",
      "24"
   ],
   [
      "PERKIN-ELMER 3210",
      "250",
      "512",
      "4000",
      "0",
      "4",
      "7",
      "50",
      "24"
   ],
   [
      "PERKIN-ELMER 3230",
      "250",
      "1000",
      "16000",
      "1",
      "1",
      "8",
      "50",
      "64"
   ],
   [
      "PRIME 50-2250",
      "160",
      "512",
      "4000",
      "2",
      "1",
      "5",
      "30",
      "25"
   ],
   [
      "PRIME 50-250 II",
      "160",
      "512",
      "2000",
      "2",
      "3",
      "8",
      "32",
      "20"
   ],
   [
      "PRIME 50-550 II",
      "160",
      "1000",
      "4000",
      "8",
      "1",
      "14",
      "38",
      "29"
   ],
   [
      "PRIME 50-750 II",
      "160",
      "1000",
      "8000",
      "16",
      "1",
      "14",
      "60",
      "43"
   ],
   [
      "PRIME 50-850 II",
      "160",
      "2000",
      "8000",
      "32",
      "1",
      "13",
      "109",
      "53"
   ],
   [
      "SIEMENS 7.521",
      "240",
      "512",
      "1000",
      "8",
      "1",
      "3",
      "6",
      "19"
   ],
   [
      "SIEMENS 7.531",
      "240",
      "512",
      "2000",
      "8",
      "1",
      "5",
      "11",
      "22"
   ],
   [
      "SIEMENS 7.536",
      "105",
      "2000",
      "4000",
      "8",
      "3",
      "8",
      "22",
      "31"
   ],
   [
      "SIEMENS 7.541",
      "105",
      "2000",
      "6000",
      "16",
      "6",
      "16",
      "33",
      "41"
   ],
   [
      "SIEMENS 7.551",
      "105",
      "2000",
      "8000",
      "16",
      "4",
      "14",
      "58",
      "47"
   ],
   [
      "SIEMENS 7.561",
      "52",
      "4000",
      "16000",
      "32",
      "4",
      "12",
      "130",
      "99"
   ],
   [
      "SIEMENS 7.865-2",
      "70",
      "4000",
      "12000",
      "8",
      "6",
      "8",
      "75",
      "67"
   ],
   [
      "SIEMENS 7.870-2",
      "59",
      "4000",
      "12000",
      "32",
      "6",
      "12",
      "113",
      "81"
   ],
   [
      "SIEMENS 7.872-2",
      "59",
      "8000",
      "16000",
      "64",
      "12",
      "24",
      "188",
      "149"
   ],
   [
      "SIEMENS 7.875-2",
      "26",
      "8000",
      "24000",
      "32",
      "8",
      "16",
      "173",
      "183"
   ],
   [
      "SIEMENS 7.880-2",
      "26",
      "8000",
      "32000",
      "64",
      "12",
      "16",
      "248",
      "275"
   ],
   [
      "SIEMENS 7.881-2",
      "26",
      "8000",
      "32000",
      "128",
      "24",
      "32",
      "405",
      "382"
   ],
   [
      "SPERRY 1100/61 H1",
      "116",
      "2000",
      "8000",
      "32",
      "5",
      "28",
      "70",
      "56"
   ],
   [
      "SPERRY 1100/81",
      "50",
      "2000",
      "32000",
      "24",
      "6",
      "26",
      "114",
      "182"
   ],
   [
      "SPERRY 1100/82",
      "50",
      "2000",
      "32000",
      "48",
      "26",
      "52",
      "208",
      "227"
   ],
   [
      "SPERRY 1100/83",
      "50",
      "2000",
      "32000",
      "112",
      "52",
      "104",
      "307",
      "341"
   ],
   [
      "SPERRY 1100/84",
      "50",
      "4000",
      "32000",
      "112",
      "52",
      "104",
      "397",
      "360"
   ],
   [
      "SPERRY 1100/93",
      "30",
      "8000",
      "64000",
      "96",
      "12",
      "176",
      "915",
      "919"
   ],
   [
      "SPERRY 1100/94",
      "30",
      "8000",
      "64000",
      "128",
      "12",
      "176",
      "1150",
      "978"
   ],
   [
      "SPERRY 80/3",
      "180",
      "262",
      "4000",
      "0",
      "1",
      "3",
      "12",
      "24"
   ],
   [
      "SPERRY 80/4",
      "180",
      "512",
      "4000",
      "0",
      "1",
      "3",
      "14",
      "24"
   ],
   [
      "SPERRY 80/5",
      "180",
      "262",
      "4000",
      "0",
      "1",
      "3",
      "18",
      "24"
   ],
   [
      "SPERRY 80/6",
      "180",
      "512",
      "4000",
      "0",
      "1",
      "3",
      "21",
      "24"
   ],
   [
      "SPERRY 80/8",
      "124",
      "1000",
      "8000",
      "0",
      "1",
      "8",
      "42",
      "37"
   ],
   [
      "SPERRY 90/80 MODEL 3",
      "98",
      "1000",
      "8000",
      "32",
      "2",
      "8",
      "46",
      "50"
   ],
   [
      "STRATUS 32",
      "125",
      "2000",
      "8000",
      "0",
      "2",
      "14",
      "52",
      "41"
   ],
   [
      "WANG VS10",
      "480",
      "512",
      "8000",
      "32",
      "0",
      "0",
      "67",
      "47"
   ],
   [
      "WANG VS 90",
      "480",
      "1000",
      "4000",
      "0",
      "0",
      "0",
      "45",
      "25"
   ]
]
