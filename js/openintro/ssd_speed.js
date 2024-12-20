var ssd_speedInfo ={
   "parameters" : {
      "read" : "Average read speed from user benchmarks in MB/s.",
      "nvme" : "If a drive uses the nvme protocol this value is 1, 0 if it does not.",
      "form_factor" : "Physical form of the drive with levels 2.5, m.2, and mSATA.",
      "samples" : "Number of user submitted benchmarks.",
      "model" : "Model name of the drive.",
      "write" : "Average write speed from user benchmarks in MB/s.",
      "brand" : "Brand name of the drive."
   },
   "description" : "Description\nUser submitted data on 1TB solid state drives (SSD).",
   "title" : "SSD read and write speeds",
   "usage" : "ssd_speed",
   "reference" : "UserBenchmark, retrieved September 1, 2020.",
   "format" : "A data frame with 54 rows and 7 variables."
}

var ssd_speed = [
   [
      "brand",
      "model",
      "samples",
      "form_factor",
      "nvme",
      "read",
      "write"
   ],
   [
      "Corsair",
      "Force MP600",
      "11526",
      "m.2",
      "1",
      "1958",
      "3144"
   ],
   [
      "Samsung",
      "840 Evo",
      "16888",
      "2.5",
      "0",
      "470",
      "389"
   ],
   [
      "Samsung",
      "960 Evo",
      "25990",
      "m.2",
      "1",
      "1798",
      "1562"
   ],
   [
      "Samsung",
      "850 Pro",
      "14690",
      "2.5",
      "0",
      "476",
      "418"
   ],
   [
      "Samsung",
      "970 Pro",
      "21981",
      "m.2",
      "1",
      "2327",
      "2056"
   ],
   [
      "Samsung",
      "860 Pro",
      "2785",
      "2.5",
      "0",
      "481",
      "437"
   ],
   [
      "Samsung",
      "850 Evo",
      "92620",
      "2.5",
      "0",
      "471",
      "433"
   ],
   [
      "Samsung",
      "970 Evo Plus",
      "101848",
      "m.2",
      "1",
      "2381",
      "2170"
   ],
   [
      "Samsung",
      "970 Evo",
      "121774",
      "m.2",
      "1",
      "2342",
      "2126"
   ],
   [
      "Samsung",
      "860 Evo",
      "255164",
      "2.5",
      "0",
      "485",
      "444"
   ],
   [
      "Samsung",
      "860 QVO",
      "71901",
      "2.5",
      "0",
      "478",
      "400"
   ],
   [
      "Samsung",
      "PM951",
      "1938",
      "m.2",
      "1",
      "968",
      "641"
   ],
   [
      "Samsung",
      "840 Evo",
      "462",
      "mSATA",
      "0",
      "469",
      "359"
   ],
   [
      "Samsung",
      "PM961",
      "4374",
      "m.2",
      "1",
      "1538",
      "1280"
   ],
   [
      "Samsung",
      "PM981",
      "18364",
      "m.2",
      "1",
      "1573",
      "1710"
   ],
   [
      "Samsung",
      "960 Pro",
      "11872",
      "m.2",
      "1",
      "2079",
      "1462"
   ],
   [
      "Western Digital",
      "Black SN750",
      "16269",
      "m.2",
      "1",
      "1851",
      "2069"
   ],
   [
      "Western Digital",
      "Blue",
      "4444",
      "2.5",
      "0",
      "448",
      "390"
   ],
   [
      "Western Digital",
      "Blue",
      "1714",
      "m.2",
      "0",
      "442",
      "385"
   ],
   [
      "Western Digital",
      "Blue SN550",
      "13225",
      "m.2",
      "1",
      "1499",
      "1665"
   ],
   [
      "Western Digital",
      "Blue 3D",
      "6898",
      "m.2",
      "0",
      "463",
      "428"
   ],
   [
      "Western Digital",
      "Blue 3d",
      "10067",
      "2.5",
      "0",
      "459",
      "420"
   ],
   [
      "Western Digital",
      "Black",
      "4158",
      "m.2",
      "1",
      "1765",
      "1944"
   ],
   [
      "Crucial",
      "P5 3D",
      "151",
      "m.2",
      "1",
      "1911",
      "1795"
   ],
   [
      "Crucial",
      "MX500",
      "71026",
      "2.5",
      "0",
      "477",
      "424"
   ],
   [
      "Crucial",
      "P1 3D",
      "62766",
      "m.2",
      "1",
      "1511",
      "1425"
   ],
   [
      "Crucial",
      "M550",
      "1211",
      "2.5",
      "0",
      "408",
      "419"
   ],
   [
      "Crucial",
      "BX100",
      "1010",
      "2.5",
      "0",
      "474",
      "401"
   ],
   [
      "Crucial",
      "MX200",
      "2472",
      "2.5",
      "0",
      "376",
      "361"
   ],
   [
      "Adata",
      "Ultimate SU800",
      "10959",
      "2.5",
      "0",
      "484",
      "425"
   ],
   [
      "Adata",
      "Premier SP610",
      "116",
      "2.5",
      "0",
      "483",
      "405"
   ],
   [
      "Adata",
      "XPG SX6000",
      "133",
      "m.2",
      "1",
      "561",
      "695"
   ],
   [
      "Adata",
      "XPG SX6000 Pro",
      "2969",
      "m.2",
      "1",
      "1759",
      "944"
   ],
   [
      "Adata",
      "XPG SX8200 Pro",
      "33430",
      "m.2",
      "1",
      "2277",
      "1719"
   ],
   [
      "HP",
      "EX900",
      "80",
      "m.2",
      "1",
      "1363",
      "1134"
   ],
   [
      "HP",
      "EX950",
      "1692",
      "m.2",
      "1",
      "2281",
      "1817"
   ],
   [
      "HP",
      "EX920",
      "7532",
      "m.2",
      "1",
      "2225",
      "1423"
   ],
   [
      "HP",
      "S700 Pro",
      "53",
      "2.5",
      "0",
      "488",
      "380"
   ],
   [
      "SanDisk",
      "X400",
      "1549",
      "2.5",
      "0",
      "443",
      "381"
   ],
   [
      "SanDisk",
      "Extreme Pro",
      "899",
      "m.2",
      "1",
      "1761",
      "1958"
   ],
   [
      "SanDisk",
      "Ultra 3D",
      "3753",
      "2.5",
      "0",
      "456",
      "418"
   ],
   [
      "Intel",
      "660p",
      "88237",
      "m.2",
      "1",
      "1372",
      "1362"
   ],
   [
      "Intel",
      "540s",
      "1152",
      "2.5",
      "0",
      "445",
      "389"
   ],
   [
      "Sabrent",
      "Rocket 4",
      "12240",
      "m.2",
      "1",
      "1948",
      "3103"
   ],
   [
      "Sabrent",
      "Rocket",
      "396",
      "m.2",
      "1",
      "1171",
      "1891"
   ],
   [
      "Plextor",
      "M8Se",
      "96",
      "m.2",
      "1",
      "1223",
      "623"
   ],
   [
      "Plextor",
      "M8Pe",
      "306",
      "m.2",
      "1",
      "1457",
      "994"
   ],
   [
      "Gigabyte",
      "Aorus",
      "5490",
      "m.2",
      "1",
      "1953",
      "3064"
   ],
   [
      "Kingston",
      "KC400",
      "485",
      "2.5",
      "0",
      "465",
      "407"
   ],
   [
      "Mushkin",
      "Reactor",
      "6572",
      "2.5",
      "0",
      "470",
      "391"
   ],
   [
      "MyDigitalSSD",
      "SBX",
      "29",
      "m.2",
      "1",
      "670",
      "681"
   ],
   [
      "Seagate",
      "FireCuda 510",
      "840",
      "m.2",
      "1",
      "1213",
      "2020"
   ],
   [
      "Toshiba",
      "XG5",
      "6387",
      "m.2",
      "1",
      "1146",
      "737"
   ],
   [
      "Transcend",
      "SSD370",
      "182",
      "2.5",
      "0",
      "472",
      "394"
   ]
]
