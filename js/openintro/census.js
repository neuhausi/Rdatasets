var censusInfo ={
   "title" : "Random sample of 2000 U.S. Census Data",
   "description" : "Description\nA random sample of 500 observations from the 2000 U.S. Census Data.",
   "usage" : "census",
   "reference" : "https://data.census.gov/cedsci",
   "parameters" : {
      "sex" : "Sex with levels Female and Male.",
      "census_year" : "Census Year.",
      "total_personal_income" : "Total personal income (in U.S. dollars).",
      "state_fips_code" : "Name of state.",
      "race_general" : "Race with levels American Indian or Alaska Native, Black, Chinese, Japanese, Other Asian or Pacific Islander, Two major races, White and Other.",
      "total_family_income" : "Total family income (in U.S. dollars).",
      "marital_status" : "Marital status with levels Divorced, Married/spouse absent, Married/spouse present, Never married/single, Separated and Widowed.",
      "age" : "Age."
   },
   "format" : "A data frame with 500 observations on the following 8 variables."
}

var census = [
   [
      "census_year",
      "state_fips_code",
      "total_family_income",
      "age",
      "sex",
      "race_general",
      "marital_status",
      "total_personal_income"
   ],
   [
      "2000",
      "Florida",
      "14550",
      "44",
      "Male",
      "Two major races",
      "Married/spouse present",
      "0"
   ],
   [
      "2000",
      "Florida",
      "22800",
      "20",
      "Female",
      "White",
      "Never married/single",
      "13000"
   ],
   [
      "2000",
      "Florida",
      "0",
      "20",
      "Male",
      "Black",
      "Never married/single",
      "20000"
   ],
   [
      "2000",
      "Florida",
      "23000",
      "6",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Florida",
      "48000",
      "55",
      "Male",
      "White",
      "Married/spouse present",
      "36000"
   ],
   [
      "2000",
      "Florida",
      "74000",
      "43",
      "Female",
      "White",
      "Married/spouse present",
      "27000"
   ],
   [
      "2000",
      "Florida",
      "23000",
      "60",
      "Female",
      "White",
      "Married/spouse present",
      "11800"
   ],
   [
      "2000",
      "Florida",
      "74000",
      "47",
      "Female",
      "White",
      "Married/spouse present",
      "48000"
   ],
   [
      "2000",
      "Florida",
      "60000",
      "54",
      "Female",
      "Black",
      "Married/spouse present",
      "40000"
   ],
   [
      "2000",
      "Florida",
      "14600",
      "58",
      "Female",
      "White",
      "Widowed",
      "14600"
   ],
   [
      "2000",
      "Florida",
      "0",
      "33",
      "Female",
      "White",
      "Never married/single",
      "23000"
   ],
   [
      "2000",
      "Florida",
      "37000",
      "51",
      "Female",
      "White",
      "Divorced",
      "37000"
   ],
   [
      "2000",
      "Florida",
      "32000",
      "62",
      "Female",
      "White",
      "Divorced",
      "32000"
   ],
   [
      "2000",
      "Florida",
      "113000",
      "8",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Florida",
      "76900",
      "25",
      "Male",
      "White",
      "Never married/single",
      "6000"
   ],
   [
      "2000",
      "Florida",
      "100100",
      "44",
      "Female",
      "White",
      "Married/spouse present",
      "16100"
   ],
   [
      "2000",
      "Florida",
      "48000",
      "28",
      "Female",
      "White",
      "Married/spouse present",
      "12000"
   ],
   [
      "2000",
      "Florida",
      "48000",
      "1",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Florida",
      "57200",
      "31",
      "Male",
      "White",
      "Married/spouse present",
      "20000"
   ],
   [
      "2000",
      "Florida",
      "43950",
      "69",
      "Female",
      "White",
      "Married/spouse present",
      "4800"
   ],
   [
      "2000",
      "Florida",
      "49000",
      "31",
      "Male",
      "White",
      "Married/spouse present",
      "28000"
   ],
   [
      "2000",
      "Florida",
      "31600",
      "80",
      "Female",
      "White",
      "Widowed",
      "31600"
   ],
   [
      "2000",
      "Florida",
      "50090",
      "2",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Florida",
      "64800",
      "47",
      "Male",
      "White",
      "Never married/single",
      "49300"
   ],
   [
      "2000",
      "Florida",
      "90000",
      "12",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Florida",
      "38320",
      "47",
      "Male",
      "White",
      "Married/spouse present",
      "34320"
   ],
   [
      "2000",
      "Florida",
      "103700",
      "8",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Florida",
      "0",
      "67",
      "Male",
      "Black",
      "Widowed",
      "8400"
   ],
   [
      "2000",
      "Florida",
      "70700",
      "17",
      "Female",
      "White",
      "Never married/single",
      "3700"
   ],
   [
      "2000",
      "Florida",
      "64800",
      "69",
      "Female",
      "White",
      "Divorced",
      "4800"
   ],
   [
      "2000",
      "Florida",
      "60000",
      "55",
      "Male",
      "White",
      "Married/spouse present",
      "53000"
   ],
   [
      "2000",
      "Florida",
      "118100",
      "18",
      "Female",
      "White",
      "Never married/single",
      "7500"
   ],
   [
      "2000",
      "Florida",
      "21000",
      "66",
      "Female",
      "White",
      "Married/spouse present",
      "6000"
   ],
   [
      "2000",
      "Florida",
      "40000",
      "58",
      "Female",
      "White",
      "Married/spouse present",
      "0"
   ],
   [
      "2000",
      "Florida",
      "17300",
      "21",
      "Male",
      "Black",
      "Never married/single",
      "4800"
   ],
   [
      "2000",
      "Florida",
      "61300",
      "52",
      "Male",
      "White",
      "Married/spouse present",
      "35000"
   ],
   [
      "2000",
      "Florida",
      "0",
      "18",
      "Male",
      "White",
      "Never married/single",
      "2000"
   ],
   [
      "2000",
      "Florida",
      "6000",
      "2",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Florida",
      "30270",
      "26",
      "Male",
      "Other",
      "Married/spouse present",
      "24250"
   ],
   [
      "2000",
      "New York",
      "8800",
      "82",
      "Female",
      "White",
      "Widowed",
      "8800"
   ],
   [
      "2000",
      "New York",
      "0",
      "46",
      "Female",
      "White",
      "Divorced",
      "17000"
   ],
   [
      "2000",
      "New York",
      "165000",
      "63",
      "Male",
      "White",
      "Married/spouse present",
      "123000"
   ],
   [
      "2000",
      "New York",
      "15570",
      "83",
      "Male",
      "White",
      "Widowed",
      "15570"
   ],
   [
      "2000",
      "New York",
      "48630",
      "35",
      "Female",
      "White",
      "Married/spouse present",
      "15830"
   ],
   [
      "2000",
      "New York",
      "13000",
      "1",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "New York",
      "68020",
      "2",
      "Female",
      "Chinese",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "New York",
      "130000",
      "54",
      "Female",
      "White",
      "Married/spouse present",
      "64000"
   ],
   [
      "2000",
      "New York",
      "0",
      "36",
      "Male",
      "White",
      "Never married/single",
      "17500"
   ],
   [
      "2000",
      "New York",
      "",
      "28",
      "Male",
      "White",
      "Separated",
      "0"
   ],
   [
      "2000",
      "New York",
      "12400",
      "7",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "New York",
      "50400",
      "21",
      "Female",
      "White",
      "Never married/single",
      "4000"
   ],
   [
      "2000",
      "New York",
      "65000",
      "1",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "New York",
      "62900",
      "17",
      "Female",
      "Black",
      "Never married/single",
      "2000"
   ],
   [
      "2000",
      "New York",
      "31200",
      "29",
      "Male",
      "Black",
      "Never married/single",
      "10000"
   ],
   [
      "2000",
      "New York",
      "81710",
      "14",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "New York",
      "37100",
      "33",
      "Male",
      "White",
      "Never married/single",
      "37100"
   ],
   [
      "2000",
      "New York",
      "9500",
      "16",
      "Male",
      "White",
      "Never married/single",
      "1800"
   ],
   [
      "2000",
      "New York",
      "25000",
      "40",
      "Female",
      "Two major races",
      "Divorced",
      "25000"
   ],
   [
      "2000",
      "New York",
      "168200",
      "34",
      "Male",
      "White",
      "Married/spouse present",
      "121600"
   ],
   [
      "2000",
      "New York",
      "168200",
      "6",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "New York",
      "55300",
      "49",
      "Male",
      "White",
      "Married/spouse present",
      "55300"
   ],
   [
      "2000",
      "New York",
      "",
      "17",
      "Male",
      "Black",
      "Never married/single",
      "2000"
   ],
   [
      "2000",
      "New York",
      "",
      "37",
      "Male",
      "Black",
      "Never married/single",
      "0"
   ],
   [
      "2000",
      "New York",
      "17000",
      "2",
      "Male",
      "Two major races",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "New York",
      "43000",
      "40",
      "Female",
      "Black",
      "Married/spouse present",
      "0"
   ],
   [
      "2000",
      "New York",
      "18800",
      "10",
      "Female",
      "Black",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "New York",
      "105000",
      "61",
      "Female",
      "White",
      "Divorced",
      "105000"
   ],
   [
      "2000",
      "New York",
      "48400",
      "24",
      "Female",
      "Chinese",
      "Married/spouse present",
      "0"
   ],
   [
      "2000",
      "New York",
      "56000",
      "23",
      "Female",
      "Chinese",
      "Never married/single",
      "0"
   ],
   [
      "2000",
      "New York",
      "88000",
      "16",
      "Female",
      "Other Asian or Pacific Islander",
      "Never married/single",
      "0"
   ],
   [
      "2000",
      "New York",
      "34900",
      "36",
      "Female",
      "Black",
      "Married/spouse present",
      "19900"
   ],
   [
      "2000",
      "New York",
      "0",
      "7",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "New York",
      "106000",
      "32",
      "Female",
      "White",
      "Married/spouse present",
      "22000"
   ],
   [
      "2000",
      "New York",
      "62820",
      "19",
      "Male",
      "Black",
      "Never married/single",
      "720"
   ],
   [
      "2000",
      "New York",
      "55000",
      "81",
      "Male",
      "White",
      "Widowed",
      "55000"
   ],
   [
      "2000",
      "New York",
      "38000",
      "47",
      "Male",
      "White",
      "Married/spouse present",
      "38000"
   ],
   [
      "2000",
      "New York",
      "37000",
      "72",
      "Female",
      "White",
      "Widowed",
      "17300"
   ],
   [
      "2000",
      "New York",
      "77600",
      "2",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "New York",
      "40400",
      "46",
      "Female",
      "Black",
      "Married/spouse present",
      "14200"
   ],
   [
      "2000",
      "New York",
      "59700",
      "27",
      "Female",
      "White",
      "Married/spouse present",
      "14500"
   ],
   [
      "2000",
      "New York",
      "75000",
      "2",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "New York",
      "104000",
      "10",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Rhode Island",
      "44004",
      "30",
      "Female",
      "White",
      "Never married/single",
      "44004"
   ],
   [
      "2000",
      "Rhode Island",
      "43000",
      "39",
      "Male",
      "White",
      "Never married/single",
      "43000"
   ],
   [
      "2000",
      "Wyoming",
      "146000",
      "12",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Alabama",
      "5500",
      "73",
      "Female",
      "Black",
      "Divorced",
      "3000"
   ],
   [
      "2000",
      "Alabama",
      "63820",
      "40",
      "Male",
      "White",
      "Married/spouse present",
      "47950"
   ],
   [
      "2000",
      "Alabama",
      "11200",
      "60",
      "Female",
      "Black",
      "Divorced",
      "11200"
   ],
   [
      "2000",
      "Alabama",
      "34500",
      "43",
      "Female",
      "Other",
      "Married/spouse present",
      "15300"
   ],
   [
      "2000",
      "Alabama",
      "33600",
      "7",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "California",
      "52000",
      "40",
      "Female",
      "White",
      "Married/spouse present",
      "27000"
   ],
   [
      "2000",
      "California",
      "156000",
      "65",
      "Female",
      "White",
      "Married/spouse present",
      "10000"
   ],
   [
      "2000",
      "California",
      "59000",
      "80",
      "Male",
      "White",
      "Married/spouse present",
      "52100"
   ],
   [
      "2000",
      "California",
      "37500",
      "46",
      "Female",
      "White",
      "Married/spouse present",
      "17500"
   ],
   [
      "2000",
      "California",
      "67500",
      "3",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "California",
      "21800",
      "6",
      "Male",
      "Other Asian or Pacific Islander",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "California",
      "79000",
      "26",
      "Female",
      "White",
      "Never married/single",
      "25000"
   ],
   [
      "2000",
      "California",
      "134000",
      "58",
      "Male",
      "White",
      "Married/spouse present",
      "134000"
   ],
   [
      "2000",
      "California",
      "77000",
      "48",
      "Female",
      "Two major races",
      "Married/spouse present",
      "0"
   ],
   [
      "2000",
      "California",
      "130000",
      "62",
      "Male",
      "White",
      "Married/spouse present",
      "115000"
   ],
   [
      "2000",
      "California",
      "10000",
      "22",
      "Female",
      "White",
      "Never married/single",
      "10000"
   ],
   [
      "2000",
      "California",
      "12000",
      "52",
      "Female",
      "White",
      "Divorced",
      "5100"
   ],
   [
      "2000",
      "California",
      "101800",
      "60",
      "Female",
      "White",
      "Married/spouse present",
      "4400"
   ],
   [
      "2000",
      "California",
      "21000",
      "3",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "California",
      "43900",
      "21",
      "Female",
      "Other",
      "Married/spouse absent",
      "9500"
   ],
   [
      "2000",
      "California",
      "113710",
      "30",
      "Female",
      "White",
      "Married/spouse present",
      "38400"
   ],
   [
      "2000",
      "California",
      "82300",
      "58",
      "Female",
      "Chinese",
      "Widowed",
      "0"
   ],
   [
      "2000",
      "California",
      "82300",
      "5",
      "Male",
      "Chinese",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "California",
      "80300",
      "20",
      "Male",
      "White",
      "Divorced",
      "26300"
   ],
   [
      "2000",
      "California",
      "36100",
      "18",
      "Female",
      "Other",
      "Married/spouse present",
      "0"
   ],
   [
      "2000",
      "California",
      "60980",
      "45",
      "Female",
      "Other",
      "Married/spouse present",
      "0"
   ],
   [
      "2000",
      "California",
      "58760",
      "20",
      "Male",
      "Other",
      "Never married/single",
      "4000"
   ],
   [
      "2000",
      "California",
      "35000",
      "28",
      "Female",
      "White",
      "Married/spouse present",
      "15000"
   ],
   [
      "2000",
      "California",
      "7400",
      "19",
      "Female",
      "White",
      "Never married/single",
      "5600"
   ],
   [
      "2000",
      "California",
      "141000",
      "60",
      "Male",
      "White",
      "Married/spouse present",
      "111000"
   ],
   [
      "2000",
      "California",
      "10200",
      "75",
      "Female",
      "White",
      "Never married/single",
      "10200"
   ],
   [
      "2000",
      "California",
      "",
      "22",
      "Male",
      "White",
      "Never married/single",
      "14100"
   ],
   [
      "2000",
      "California",
      "85400",
      "58",
      "Female",
      "White",
      "Married/spouse present",
      "32400"
   ],
   [
      "2000",
      "California",
      "77700",
      "52",
      "Male",
      "White",
      "Married/spouse present",
      "45000"
   ],
   [
      "2000",
      "California",
      "13500",
      "58",
      "Male",
      "Other",
      "Divorced",
      "0"
   ],
   [
      "2000",
      "California",
      "24800",
      "24",
      "Female",
      "White",
      "Married/spouse present",
      "18800"
   ],
   [
      "2000",
      "California",
      "87100",
      "46",
      "Male",
      "White",
      "Married/spouse present",
      "36000"
   ],
   [
      "2000",
      "California",
      "47300",
      "43",
      "Female",
      "White",
      "Married/spouse present",
      "28000"
   ],
   [
      "2000",
      "California",
      "34850",
      "41",
      "Male",
      "Other Asian or Pacific Islander",
      "Married/spouse present",
      "30000"
   ],
   [
      "2000",
      "California",
      "62000",
      "47",
      "Female",
      "White",
      "Never married/single",
      "34000"
   ],
   [
      "2000",
      "California",
      "90000",
      "40",
      "Female",
      "Black",
      "Married/spouse present",
      "40000"
   ],
   [
      "2000",
      "California",
      "18000",
      "24",
      "Male",
      "Other",
      "Never married/single",
      "3600"
   ],
   [
      "2000",
      "California",
      "27500",
      "13",
      "Male",
      "Two major races",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "California",
      "57190",
      "41",
      "Male",
      "Black",
      "Never married/single",
      "57190"
   ],
   [
      "2000",
      "California",
      "37600",
      "4",
      "Male",
      "Two major races",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "California",
      "9700",
      "77",
      "Male",
      "White",
      "Married/spouse present",
      "9700"
   ],
   [
      "2000",
      "California",
      "353100",
      "60",
      "Male",
      "White",
      "Married/spouse present",
      "330000"
   ],
   [
      "2000",
      "California",
      "7500",
      "7",
      "Male",
      "Other",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "California",
      "48000",
      "35",
      "Female",
      "Chinese",
      "Married/spouse present",
      "0"
   ],
   [
      "2000",
      "California",
      "65000",
      "52",
      "Male",
      "White",
      "Married/spouse present",
      "58000"
   ],
   [
      "2000",
      "California",
      "193000",
      "72",
      "Male",
      "Chinese",
      "Married/spouse present",
      "20000"
   ],
   [
      "2000",
      "California",
      "60000",
      "31",
      "Male",
      "Other",
      "Married/spouse present",
      "36000"
   ],
   [
      "2000",
      "California",
      "162600",
      "45",
      "Male",
      "Other Asian or Pacific Islander",
      "Married/spouse present",
      "160000"
   ],
   [
      "2000",
      "California",
      "41500",
      "79",
      "Female",
      "White",
      "Widowed",
      "41500"
   ],
   [
      "2000",
      "California",
      "14900",
      "16",
      "Male",
      "White",
      "Never married/single",
      "0"
   ],
   [
      "2000",
      "California",
      "103000",
      "41",
      "Male",
      "White",
      "Married/spouse present",
      "75000"
   ],
   [
      "2000",
      "California",
      "64800",
      "37",
      "Female",
      "Other Asian or Pacific Islander",
      "Separated",
      "10300"
   ],
   [
      "2000",
      "California",
      "44000",
      "26",
      "Female",
      "White",
      "Married/spouse present",
      "1000"
   ],
   [
      "2000",
      "California",
      "99600",
      "8",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "California",
      "18500",
      "6",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "California",
      "111850",
      "8",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "California",
      "102000",
      "60",
      "Female",
      "Other",
      "Married/spouse present",
      "0"
   ],
   [
      "2000",
      "California",
      "118000",
      "4",
      "Male",
      "Black",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "California",
      "0",
      "22",
      "Female",
      "Other Asian or Pacific Islander",
      "Never married/single",
      "32000"
   ],
   [
      "2000",
      "California",
      "30500",
      "49",
      "Female",
      "Other",
      "Married/spouse present",
      "0"
   ],
   [
      "2000",
      "California",
      "62400",
      "4",
      "Male",
      "Two major races",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "California",
      "378200",
      "52",
      "Female",
      "White",
      "Married/spouse present",
      "0"
   ],
   [
      "2000",
      "Illinois",
      "45000",
      "47",
      "Male",
      "White",
      "Divorced",
      "45000"
   ],
   [
      "2000",
      "Illinois",
      "158000",
      "39",
      "Male",
      "White",
      "Married/spouse present",
      "50000"
   ],
   [
      "2000",
      "Illinois",
      "98000",
      "34",
      "Female",
      "White",
      "Married/spouse present",
      "53000"
   ],
   [
      "2000",
      "Illinois",
      "13000",
      "23",
      "Female",
      "White",
      "Never married/single",
      "28000"
   ],
   [
      "2000",
      "Illinois",
      "73020",
      "49",
      "Male",
      "White",
      "Married/spouse present",
      "43020"
   ],
   [
      "2000",
      "Illinois",
      "20000",
      "21",
      "Female",
      "White",
      "Never married/single",
      "8000"
   ],
   [
      "2000",
      "Illinois",
      "33300",
      "56",
      "Female",
      "White",
      "Married/spouse present",
      "3000"
   ],
   [
      "2000",
      "Illinois",
      "34000",
      "62",
      "Male",
      "White",
      "Divorced",
      "34000"
   ],
   [
      "2000",
      "Illinois",
      "84000",
      "40",
      "Female",
      "White",
      "Married/spouse present",
      "24000"
   ],
   [
      "2000",
      "Illinois",
      "12800",
      "62",
      "Female",
      "White",
      "Married/spouse present",
      "0"
   ],
   [
      "2000",
      "Illinois",
      "40600",
      "37",
      "Male",
      "Other",
      "Married/spouse present",
      "40600"
   ],
   [
      "2000",
      "Illinois",
      "154630",
      "50",
      "Female",
      "White",
      "Married/spouse present",
      "0"
   ],
   [
      "2000",
      "Illinois",
      "88000",
      "20",
      "Female",
      "White",
      "Married/spouse present",
      "5000"
   ],
   [
      "2000",
      "Illinois",
      "42000",
      "15",
      "Male",
      "White",
      "Never married/single",
      "0"
   ],
   [
      "2000",
      "Illinois",
      "48790",
      "39",
      "Male",
      "White",
      "Married/spouse absent",
      "22000"
   ],
   [
      "2000",
      "Illinois",
      "",
      "87",
      "Female",
      "White",
      "Married/spouse absent",
      "13000"
   ],
   [
      "2000",
      "Illinois",
      "20300",
      "78",
      "Female",
      "White",
      "Married/spouse present",
      "1100"
   ],
   [
      "2000",
      "Illinois",
      "30000",
      "35",
      "Female",
      "Black",
      "Divorced",
      "30000"
   ],
   [
      "2000",
      "Illinois",
      "64890",
      "48",
      "Male",
      "White",
      "Never married/single",
      "63000"
   ],
   [
      "2000",
      "Illinois",
      "38500",
      "41",
      "Female",
      "White",
      "Divorced",
      "38500"
   ],
   [
      "2000",
      "Illinois",
      "20600",
      "51",
      "Male",
      "White",
      "Married/spouse present",
      "6500"
   ],
   [
      "2000",
      "Kansas",
      "42000",
      "24",
      "Male",
      "White",
      "Never married/single",
      "42000"
   ],
   [
      "2000",
      "Kansas",
      "5800",
      "21",
      "Female",
      "White",
      "Never married/single",
      "484"
   ],
   [
      "2000",
      "Kansas",
      "40000",
      "25",
      "Male",
      "White",
      "Never married/single",
      "40000"
   ],
   [
      "2000",
      "Maryland",
      "21200",
      "51",
      "Male",
      "Two major races",
      "Never married/single",
      "22460"
   ],
   [
      "2000",
      "Maryland",
      "",
      "25",
      "Male",
      "Black",
      "Married/spouse absent",
      "19200"
   ],
   [
      "2000",
      "Maryland",
      "93500",
      "32",
      "Female",
      "White",
      "Married/spouse present",
      "59700"
   ],
   [
      "2000",
      "Maryland",
      "42960",
      "40",
      "Male",
      "White",
      "Never married/single",
      "44000"
   ],
   [
      "2000",
      "Maryland",
      "45400",
      "29",
      "Female",
      "White",
      "Married/spouse present",
      "14000"
   ],
   [
      "2000",
      "Maryland",
      "9500",
      "54",
      "Male",
      "Black",
      "Never married/single",
      "1600"
   ],
   [
      "2000",
      "Maryland",
      "208100",
      "69",
      "Male",
      "White",
      "Married/spouse present",
      "49700"
   ],
   [
      "2000",
      "Maryland",
      "95500",
      "2",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Maryland",
      "44500",
      "40",
      "Female",
      "Black",
      "Married/spouse present",
      "9500"
   ],
   [
      "2000",
      "Maryland",
      "360900",
      "6",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Nebraska",
      "67050",
      "38",
      "Male",
      "Two major races",
      "Never married/single",
      "40000"
   ],
   [
      "2000",
      "New Jersey",
      "4500",
      "46",
      "Female",
      "Black",
      "Divorced",
      "4500"
   ],
   [
      "2000",
      "New Jersey",
      "46600",
      "54",
      "Female",
      "Black",
      "Married/spouse present",
      "23000"
   ],
   [
      "2000",
      "New Jersey",
      "22800",
      "73",
      "Male",
      "White",
      "Married/spouse present",
      "14000"
   ],
   [
      "2000",
      "New Jersey",
      "80000",
      "38",
      "Female",
      "White",
      "Married/spouse present",
      "0"
   ],
   [
      "2000",
      "New Jersey",
      "36200",
      "31",
      "Female",
      "White",
      "Divorced",
      "36200"
   ],
   [
      "2000",
      "New Jersey",
      "50000",
      "32",
      "Female",
      "Black",
      "Never married/single",
      "25000"
   ],
   [
      "2000",
      "New Jersey",
      "73500",
      "14",
      "Female",
      "Other",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "New Jersey",
      "54240",
      "38",
      "Male",
      "White",
      "Divorced",
      "8840"
   ],
   [
      "2000",
      "New Jersey",
      "79300",
      "46",
      "Female",
      "Black",
      "Married/spouse present",
      "36000"
   ],
   [
      "2000",
      "New Jersey",
      "72020",
      "25",
      "Male",
      "Two major races",
      "Never married/single",
      "24500"
   ],
   [
      "2000",
      "New Jersey",
      "52000",
      "35",
      "Male",
      "Black",
      "Married/spouse present",
      "36000"
   ],
   [
      "2000",
      "New Jersey",
      "342000",
      "40",
      "Male",
      "Other Asian or Pacific Islander",
      "Married/spouse present",
      "317000"
   ],
   [
      "2000",
      "New Jersey",
      "122310",
      "17",
      "Female",
      "White",
      "Never married/single",
      "10"
   ],
   [
      "2000",
      "New Jersey",
      "113000",
      "55",
      "Female",
      "White",
      "Married/spouse present",
      "24000"
   ],
   [
      "2000",
      "New Jersey",
      "14000",
      "70",
      "Female",
      "Black",
      "Married/spouse present",
      "4000"
   ],
   [
      "2000",
      "Ohio",
      "40750",
      "24",
      "Female",
      "White",
      "Married/spouse present",
      "10000"
   ],
   [
      "2000",
      "Ohio",
      "50000",
      "6",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Ohio",
      "22000",
      "29",
      "Male",
      "White",
      "Married/spouse present",
      "22000"
   ],
   [
      "2000",
      "Ohio",
      "72100",
      "52",
      "Male",
      "White",
      "Married/spouse present",
      "47100"
   ],
   [
      "2000",
      "Ohio",
      "63130",
      "56",
      "Male",
      "White",
      "Married/spouse present",
      "43030"
   ],
   [
      "2000",
      "Ohio",
      "20020",
      "69",
      "Female",
      "White",
      "Married/spouse present",
      "4800"
   ],
   [
      "2000",
      "Ohio",
      "22990",
      "15",
      "Female",
      "White",
      "Never married/single",
      "0"
   ],
   [
      "2000",
      "Ohio",
      "12600",
      "65",
      "Male",
      "White",
      "Divorced",
      "12600"
   ],
   [
      "2000",
      "Ohio",
      "19604",
      "50",
      "Female",
      "Black",
      "Widowed",
      "19604"
   ],
   [
      "2000",
      "Ohio",
      "13100",
      "11",
      "Female",
      "Black",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Ohio",
      "0",
      "37",
      "Male",
      "White",
      "Never married/single",
      "22000"
   ],
   [
      "2000",
      "Ohio",
      "13400",
      "12",
      "Male",
      "Black",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Ohio",
      "79100",
      "40",
      "Male",
      "White",
      "Married/spouse present",
      "23700"
   ],
   [
      "2000",
      "Ohio",
      "77000",
      "21",
      "Female",
      "Two major races",
      "Married/spouse present",
      "0"
   ],
   [
      "2000",
      "Ohio",
      "10400",
      "75",
      "Female",
      "White",
      "Widowed",
      "10400"
   ],
   [
      "2000",
      "Ohio",
      "44200",
      "53",
      "Female",
      "White",
      "Divorced",
      "44200"
   ],
   [
      "2000",
      "Ohio",
      "65100",
      "10",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Ohio",
      "63000",
      "27",
      "Male",
      "Other Asian or Pacific Islander",
      "Never married/single",
      "12000"
   ],
   [
      "2000",
      "Ohio",
      "80000",
      "33",
      "Female",
      "White",
      "Married/spouse present",
      "40000"
   ],
   [
      "2000",
      "Ohio",
      "11900",
      "2",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Ohio",
      "61700",
      "57",
      "Male",
      "White",
      "Married/spouse present",
      "61700"
   ],
   [
      "2000",
      "Ohio",
      "25100",
      "12",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Ohio",
      "70000",
      "21",
      "Female",
      "White",
      "Never married/single",
      "16000"
   ],
   [
      "2000",
      "Oklahoma",
      "100000",
      "45",
      "Female",
      "White",
      "Married/spouse present",
      "50000"
   ],
   [
      "2000",
      "Oklahoma",
      "40400",
      "15",
      "Male",
      "White",
      "Never married/single",
      "0"
   ],
   [
      "2000",
      "Oklahoma",
      "25700",
      "4",
      "Male",
      "Other",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Oklahoma",
      "97900",
      "49",
      "Male",
      "White",
      "Never married/single",
      "72600"
   ],
   [
      "2000",
      "Oklahoma",
      "119000",
      "48",
      "Male",
      "White",
      "Married/spouse present",
      "59000"
   ],
   [
      "2000",
      "Oklahoma",
      "29200",
      "52",
      "Female",
      "White",
      "Married/spouse present",
      "4200"
   ],
   [
      "2000",
      "Texas",
      "80000",
      "14",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Texas",
      "45400",
      "64",
      "Female",
      "White",
      "Married/spouse present",
      "8000"
   ],
   [
      "2000",
      "Texas",
      "50030",
      "46",
      "Male",
      "White",
      "Married/spouse present",
      "30030"
   ],
   [
      "2000",
      "Texas",
      "44000",
      "35",
      "Male",
      "White",
      "Married/spouse present",
      "16000"
   ],
   [
      "2000",
      "Texas",
      "32000",
      "27",
      "Female",
      "White",
      "Divorced",
      "0"
   ],
   [
      "2000",
      "Texas",
      "32000",
      "45",
      "Female",
      "Black",
      "Married/spouse present",
      "10000"
   ],
   [
      "2000",
      "Texas",
      "4600",
      "21",
      "Female",
      "White",
      "Never married/single",
      "4600"
   ],
   [
      "2000",
      "Texas",
      "56000",
      "63",
      "Male",
      "White",
      "Married/spouse present",
      "38000"
   ],
   [
      "2000",
      "Texas",
      "348000",
      "36",
      "Female",
      "White",
      "Married/spouse present",
      "15000"
   ],
   [
      "2000",
      "Texas",
      "27000",
      "29",
      "Male",
      "White",
      "Never married/single",
      "27000"
   ],
   [
      "2000",
      "Texas",
      "2800",
      "5",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Texas",
      "9200",
      "0",
      "Male",
      "Black",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Texas",
      "150500",
      "45",
      "Male",
      "White",
      "Divorced",
      "150500"
   ],
   [
      "2000",
      "Texas",
      "237000",
      "45",
      "Male",
      "White",
      "Married/spouse present",
      "155000"
   ],
   [
      "2000",
      "Texas",
      "",
      "36",
      "Male",
      "Black",
      "Never married/single",
      "90"
   ],
   [
      "2000",
      "Texas",
      "9300",
      "15",
      "Female",
      "White",
      "Never married/single",
      "0"
   ],
   [
      "2000",
      "Texas",
      "30100",
      "4",
      "Male",
      "Black",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Texas",
      "40050",
      "35",
      "Male",
      "White",
      "Divorced",
      "40050"
   ],
   [
      "2000",
      "Texas",
      "19200",
      "17",
      "Female",
      "Other",
      "Never married/single",
      "0"
   ],
   [
      "2000",
      "Texas",
      "37500",
      "49",
      "Male",
      "Black",
      "Married/spouse absent",
      "0"
   ],
   [
      "2000",
      "Texas",
      "7600",
      "6",
      "Female",
      "Black",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Texas",
      "141900",
      "43",
      "Male",
      "White",
      "Never married/single",
      "141900"
   ],
   [
      "2000",
      "Texas",
      "45800",
      "46",
      "Female",
      "White",
      "Never married/single",
      "45800"
   ],
   [
      "2000",
      "Texas",
      "22050",
      "5",
      "Male",
      "Black",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Texas",
      "38000",
      "37",
      "Female",
      "White",
      "Married/spouse present",
      "0"
   ],
   [
      "2000",
      "Texas",
      "32500",
      "4",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Texas",
      "199000",
      "14",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Texas",
      "51000",
      "45",
      "Female",
      "White",
      "Married/spouse present",
      "20000"
   ],
   [
      "2000",
      "Texas",
      "55000",
      "44",
      "Male",
      "White",
      "Divorced",
      "55000"
   ],
   [
      "2000",
      "Texas",
      "59300",
      "39",
      "Male",
      "Black",
      "Married/spouse present",
      "26300"
   ],
   [
      "2000",
      "Texas",
      "58000",
      "23",
      "Male",
      "White",
      "Married/spouse present",
      "36000"
   ],
   [
      "2000",
      "Texas",
      "22400",
      "12",
      "Female",
      "Other",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Texas",
      "13000",
      "20",
      "Female",
      "White",
      "Never married/single",
      "13000"
   ],
   [
      "2000",
      "Texas",
      "21500",
      "12",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Texas",
      "63600",
      "54",
      "Male",
      "White",
      "Married/spouse present",
      "-4400"
   ],
   [
      "2000",
      "Texas",
      "0",
      "52",
      "Female",
      "White",
      "Widowed",
      "0"
   ],
   [
      "2000",
      "Texas",
      "11300",
      "70",
      "Male",
      "White",
      "Widowed",
      "5100"
   ],
   [
      "2000",
      "District of Columbia",
      "30000",
      "27",
      "Female",
      "White",
      "Never married/single",
      "30000"
   ],
   [
      "2000",
      "District of Columbia",
      "125680",
      "16",
      "Male",
      "White",
      "Never married/single",
      "17190"
   ],
   [
      "2000",
      "Colorado",
      "26700",
      "30",
      "Female",
      "American Indian or Alaska Native",
      "Never married/single",
      "26700"
   ],
   [
      "2000",
      "Colorado",
      "12900",
      "48",
      "Male",
      "White",
      "Divorced",
      "100"
   ],
   [
      "2000",
      "Colorado",
      "892050",
      "46",
      "Male",
      "White",
      "Married/spouse present",
      "446000"
   ],
   [
      "2000",
      "Colorado",
      "49100",
      "35",
      "Male",
      "Other",
      "Married/spouse absent",
      "13000"
   ],
   [
      "2000",
      "Connecticut",
      "",
      "56",
      "Female",
      "Black",
      "Never married/single",
      "3600"
   ],
   [
      "2000",
      "Connecticut",
      "0",
      "52",
      "Male",
      "White",
      "Divorced",
      "51000"
   ],
   [
      "2000",
      "Connecticut",
      "80100",
      "16",
      "Male",
      "White",
      "Never married/single",
      "0"
   ],
   [
      "2000",
      "Connecticut",
      "129300",
      "32",
      "Female",
      "White",
      "Married/spouse present",
      "34300"
   ],
   [
      "2000",
      "Iowa",
      "48000",
      "47",
      "Male",
      "White",
      "Married/spouse present",
      "36000"
   ],
   [
      "2000",
      "Iowa",
      "14300",
      "61",
      "Female",
      "White",
      "Divorced",
      "14300"
   ],
   [
      "2000",
      "Iowa",
      "35320",
      "6",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Iowa",
      "13900",
      "10",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Iowa",
      "93000",
      "48",
      "Male",
      "White",
      "Married/spouse present",
      "21000"
   ],
   [
      "2000",
      "Kentucky",
      "30100",
      "29",
      "Male",
      "White",
      "Married/spouse present",
      "24000"
   ],
   [
      "2000",
      "Kentucky",
      "6800",
      "30",
      "Female",
      "White",
      "Married/spouse present",
      "3500"
   ],
   [
      "2000",
      "Kentucky",
      "74200",
      "66",
      "Female",
      "White",
      "Married/spouse present",
      "23700"
   ],
   [
      "2000",
      "Kentucky",
      "100000",
      "37",
      "Male",
      "Black",
      "Married/spouse absent",
      "100000"
   ],
   [
      "2000",
      "Kentucky",
      "3800",
      "60",
      "Male",
      "Black",
      "Widowed",
      "3800"
   ],
   [
      "2000",
      "Kentucky",
      "458000",
      "57",
      "Male",
      "White",
      "Married/spouse present",
      "456000"
   ],
   [
      "2000",
      "Maine",
      "10700",
      "39",
      "Male",
      "White",
      "Never married/single",
      "10700"
   ],
   [
      "2000",
      "Massachusetts",
      "34300",
      "82",
      "Female",
      "White",
      "Widowed",
      "22700"
   ],
   [
      "2000",
      "Massachusetts",
      "0",
      "18",
      "Female",
      "Other",
      "Never married/single",
      "0"
   ],
   [
      "2000",
      "Massachusetts",
      "112500",
      "24",
      "Female",
      "White",
      "Never married/single",
      "37500"
   ],
   [
      "2000",
      "Massachusetts",
      "116720",
      "48",
      "Female",
      "White",
      "Married/spouse present",
      "51500"
   ],
   [
      "2000",
      "Massachusetts",
      "60700",
      "36",
      "Male",
      "White",
      "Married/spouse present",
      "60000"
   ],
   [
      "2000",
      "Massachusetts",
      "51500",
      "15",
      "Male",
      "White",
      "Never married/single",
      "0"
   ],
   [
      "2000",
      "Massachusetts",
      "92000",
      "39",
      "Female",
      "White",
      "Married/spouse present",
      "40000"
   ],
   [
      "2000",
      "Massachusetts",
      "31300",
      "31",
      "Female",
      "White",
      "Married/spouse present",
      "0"
   ],
   [
      "2000",
      "Massachusetts",
      "10250",
      "23",
      "Male",
      "White",
      "Never married/single",
      "12500"
   ],
   [
      "2000",
      "Massachusetts",
      "89100",
      "75",
      "Female",
      "White",
      "Married/spouse present",
      "60900"
   ],
   [
      "2000",
      "Massachusetts",
      "82700",
      "39",
      "Female",
      "White",
      "Married/spouse present",
      "32700"
   ],
   [
      "2000",
      "Massachusetts",
      "33000",
      "8",
      "Female",
      "Black",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Montana",
      "36000",
      "29",
      "Male",
      "White",
      "Married/spouse present",
      "36000"
   ],
   [
      "2000",
      "Nevada",
      "0",
      "6",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Nevada",
      "28800",
      "5",
      "Female",
      "Two major races",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Nevada",
      "75330",
      "11",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Nevada",
      "23000",
      "28",
      "Male",
      "Other Asian or Pacific Islander",
      "Never married/single",
      "23000"
   ],
   [
      "2000",
      "New Mexico",
      "35900",
      "70",
      "Male",
      "Other",
      "Married/spouse present",
      "10600"
   ],
   [
      "2000",
      "New Mexico",
      "0",
      "46",
      "Male",
      "White",
      "Divorced",
      "44000"
   ],
   [
      "2000",
      "New Mexico",
      "94400",
      "12",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Oregon",
      "13800",
      "9",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Oregon",
      "9300",
      "2",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Oregon",
      "25900",
      "61",
      "Male",
      "White",
      "Married/spouse present",
      "0"
   ],
   [
      "2000",
      "Oregon",
      "24000",
      "31",
      "Male",
      "White",
      "Never married/single",
      "24000"
   ],
   [
      "2000",
      "Oregon",
      "49300",
      "7",
      "Female",
      "Other",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Oregon",
      "627300",
      "10",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Utah",
      "76500",
      "36",
      "Male",
      "White",
      "Married/spouse present",
      "72600"
   ],
   [
      "2000",
      "Utah",
      "15000",
      "29",
      "Female",
      "White",
      "Never married/single",
      "15000"
   ],
   [
      "2000",
      "Arizona",
      "32500",
      "9",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Arizona",
      "46800",
      "53",
      "Female",
      "White",
      "Married/spouse absent",
      "30000"
   ],
   [
      "2000",
      "Arizona",
      "30000",
      "60",
      "Female",
      "White",
      "Widowed",
      "30000"
   ],
   [
      "2000",
      "Arizona",
      "0",
      "67",
      "Female",
      "White",
      "Widowed",
      "0"
   ],
   [
      "2000",
      "Arizona",
      "51000",
      "27",
      "Male",
      "White",
      "Married/spouse present",
      "14000"
   ],
   [
      "2000",
      "Arizona",
      "6000",
      "10",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Arizona",
      "45000",
      "48",
      "Male",
      "Japanese",
      "Married/spouse present",
      "45000"
   ],
   [
      "2000",
      "Delaware",
      "57000",
      "8",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Delaware",
      "46200",
      "85",
      "Female",
      "White",
      "Widowed",
      "9100"
   ],
   [
      "2000",
      "Georgia",
      "21100",
      "57",
      "Female",
      "White",
      "Married/spouse present",
      "7600"
   ],
   [
      "2000",
      "Georgia",
      "42524",
      "39",
      "Male",
      "White",
      "Never married/single",
      "10424"
   ],
   [
      "2000",
      "Georgia",
      "122000",
      "52",
      "Male",
      "White",
      "Married/spouse present",
      "110000"
   ],
   [
      "2000",
      "Georgia",
      "40900",
      "38",
      "Female",
      "White",
      "Married/spouse present",
      "2900"
   ],
   [
      "2000",
      "Georgia",
      "63740",
      "13",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Georgia",
      "",
      "40",
      "Male",
      "Black",
      "Married/spouse absent",
      "25000"
   ],
   [
      "2000",
      "Georgia",
      "206700",
      "10",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Georgia",
      "145600",
      "37",
      "Female",
      "White",
      "Married/spouse present",
      "46400"
   ],
   [
      "2000",
      "Georgia",
      "56740",
      "53",
      "Female",
      "White",
      "Divorced",
      "56740"
   ],
   [
      "2000",
      "Georgia",
      "47400",
      "40",
      "Male",
      "Black",
      "Married/spouse present",
      "23300"
   ],
   [
      "2000",
      "Georgia",
      "88200",
      "4",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Georgia",
      "35000",
      "27",
      "Male",
      "Black",
      "Never married/single",
      "35000"
   ],
   [
      "2000",
      "Georgia",
      "20000",
      "28",
      "Female",
      "Black",
      "Married/spouse absent",
      "15000"
   ],
   [
      "2000",
      "Georgia",
      "26700",
      "30",
      "Male",
      "Black",
      "Never married/single",
      "16800"
   ],
   [
      "2000",
      "Georgia",
      "42700",
      "45",
      "Female",
      "Black",
      "Divorced",
      "21000"
   ],
   [
      "2000",
      "Georgia",
      "21200",
      "59",
      "Female",
      "Black",
      "Widowed",
      "21200"
   ],
   [
      "2000",
      "Georgia",
      "24000",
      "67",
      "Male",
      "Two major races",
      "Married/spouse present",
      "19700"
   ],
   [
      "2000",
      "Georgia",
      "23800",
      "5",
      "Male",
      "Black",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Michigan",
      "51400",
      "13",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Michigan",
      "49000",
      "15",
      "Female",
      "White",
      "Never married/single",
      "0"
   ],
   [
      "2000",
      "Michigan",
      "87880",
      "16",
      "Female",
      "White",
      "Never married/single",
      "480"
   ],
   [
      "2000",
      "Michigan",
      "57400",
      "1",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Michigan",
      "42000",
      "6",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Michigan",
      "77620",
      "35",
      "Male",
      "White",
      "Married/spouse present",
      "76020"
   ],
   [
      "2000",
      "Michigan",
      "24900",
      "71",
      "Male",
      "White",
      "Married/spouse present",
      "18900"
   ],
   [
      "2000",
      "Michigan",
      "69220",
      "48",
      "Male",
      "White",
      "Married/spouse present",
      "37000"
   ],
   [
      "2000",
      "Michigan",
      "25980",
      "18",
      "Male",
      "White",
      "Never married/single",
      "980"
   ],
   [
      "2000",
      "Michigan",
      "92000",
      "46",
      "Male",
      "White",
      "Married/spouse present",
      "80900"
   ],
   [
      "2000",
      "Michigan",
      "69000",
      "40",
      "Male",
      "Two major races",
      "Never married/single",
      "69000"
   ],
   [
      "2000",
      "Michigan",
      "20340",
      "2",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Michigan",
      "113500",
      "44",
      "Male",
      "White",
      "Married/spouse present",
      "86000"
   ],
   [
      "2000",
      "Michigan",
      "48000",
      "31",
      "Female",
      "American Indian or Alaska Native",
      "Married/spouse present",
      "20000"
   ],
   [
      "2000",
      "Minnesota",
      "75000",
      "35",
      "Female",
      "White",
      "Married/spouse present",
      "17000"
   ],
   [
      "2000",
      "Minnesota",
      "55600",
      "26",
      "Female",
      "White",
      "Married/spouse present",
      "34100"
   ],
   [
      "2000",
      "Minnesota",
      "10000",
      "46",
      "Male",
      "White",
      "Never married/single",
      "0"
   ],
   [
      "2000",
      "Minnesota",
      "92900",
      "54",
      "Male",
      "White",
      "Married/spouse present",
      "43000"
   ],
   [
      "2000",
      "Minnesota",
      "43010",
      "2",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Minnesota",
      "46000",
      "37",
      "Female",
      "White",
      "Never married/single",
      "46000"
   ],
   [
      "2000",
      "Minnesota",
      "33200",
      "42",
      "Female",
      "White",
      "Never married/single",
      "33200"
   ],
   [
      "2000",
      "Minnesota",
      "17000",
      "69",
      "Female",
      "White",
      "Widowed",
      "17000"
   ],
   [
      "2000",
      "Minnesota",
      "0",
      "81",
      "Female",
      "White",
      "Widowed",
      "0"
   ],
   [
      "2000",
      "Minnesota",
      "52500",
      "16",
      "Male",
      "White",
      "Never married/single",
      "0"
   ],
   [
      "2000",
      "New Hampshire",
      "52000",
      "10",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "New Hampshire",
      "58000",
      "10",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "New Hampshire",
      "61500",
      "57",
      "Male",
      "White",
      "Married/spouse present",
      "14700"
   ],
   [
      "2000",
      "North Carolina",
      "60720",
      "18",
      "Male",
      "White",
      "Never married/single",
      "980"
   ],
   [
      "2000",
      "North Carolina",
      "12600",
      "24",
      "Male",
      "White",
      "Never married/single",
      "3600"
   ],
   [
      "2000",
      "North Carolina",
      "4800",
      "30",
      "Male",
      "Black",
      "Never married/single",
      "0"
   ],
   [
      "2000",
      "North Carolina",
      "13460",
      "8",
      "Female",
      "Two major races",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "North Carolina",
      "38000",
      "25",
      "Male",
      "Black",
      "Married/spouse present",
      "28000"
   ],
   [
      "2000",
      "North Carolina",
      "39500",
      "4",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "North Carolina",
      "120000",
      "35",
      "Male",
      "White",
      "Married/spouse present",
      "60000"
   ],
   [
      "2000",
      "North Carolina",
      "52500",
      "60",
      "Female",
      "White",
      "Married/spouse present",
      "8200"
   ],
   [
      "2000",
      "South Carolina",
      "48300",
      "5",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "South Carolina",
      "111000",
      "53",
      "Male",
      "White",
      "Married/spouse present",
      "70000"
   ],
   [
      "2000",
      "South Carolina",
      "5000",
      "40",
      "Male",
      "White",
      "Divorced",
      "5000"
   ],
   [
      "2000",
      "South Carolina",
      "22000",
      "4",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "South Carolina",
      "33100",
      "78",
      "Male",
      "White",
      "Married/spouse present",
      "26700"
   ],
   [
      "2000",
      "South Carolina",
      "86720",
      "60",
      "Male",
      "White",
      "Married/spouse present",
      "24100"
   ],
   [
      "2000",
      "South Carolina",
      "49900",
      "52",
      "Male",
      "White",
      "Married/spouse present",
      "9000"
   ],
   [
      "2000",
      "South Carolina",
      "53000",
      "42",
      "Female",
      "Black",
      "Married/spouse present",
      "15000"
   ],
   [
      "2000",
      "South Carolina",
      "29600",
      "7",
      "Male",
      "Two major races",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "South Carolina",
      "54000",
      "26",
      "Female",
      "White",
      "Married/spouse present",
      "23000"
   ],
   [
      "2000",
      "Tennessee",
      "15000",
      "34",
      "Female",
      "White",
      "Married/spouse present",
      "12600"
   ],
   [
      "2000",
      "Tennessee",
      "148400",
      "73",
      "Male",
      "White",
      "Married/spouse present",
      "140900"
   ],
   [
      "2000",
      "Tennessee",
      "45800",
      "27",
      "Male",
      "White",
      "Never married/single",
      "12800"
   ],
   [
      "2000",
      "Tennessee",
      "84000",
      "40",
      "Male",
      "White",
      "Married/spouse present",
      "68000"
   ],
   [
      "2000",
      "Tennessee",
      "29000",
      "22",
      "Female",
      "White",
      "Married/spouse present",
      "9000"
   ],
   [
      "2000",
      "Tennessee",
      "25000",
      "26",
      "Male",
      "White",
      "Separated",
      "25000"
   ],
   [
      "2000",
      "Tennessee",
      "66400",
      "18",
      "Female",
      "White",
      "Never married/single",
      "15000"
   ],
   [
      "2000",
      "Washington",
      "11620",
      "39",
      "Female",
      "White",
      "Never married/single",
      "11620"
   ],
   [
      "2000",
      "Washington",
      "36400",
      "49",
      "Male",
      "White",
      "Never married/single",
      "50000"
   ],
   [
      "2000",
      "Washington",
      "12000",
      "27",
      "Male",
      "Other",
      "Married/spouse present",
      "16000"
   ],
   [
      "2000",
      "Washington",
      "12300",
      "23",
      "Female",
      "White",
      "Never married/single",
      "4980"
   ],
   [
      "2000",
      "Washington",
      "18150",
      "30",
      "Male",
      "White",
      "Married/spouse present",
      "13500"
   ],
   [
      "2000",
      "Washington",
      "0",
      "39",
      "Male",
      "American Indian or Alaska Native",
      "Never married/single",
      "0"
   ],
   [
      "2000",
      "Washington",
      "21500",
      "64",
      "Male",
      "Other Asian or Pacific Islander",
      "Widowed",
      "15000"
   ],
   [
      "2000",
      "Washington",
      "48200",
      "71",
      "Male",
      "White",
      "Married/spouse present",
      "42600"
   ],
   [
      "2000",
      "Washington",
      "23600",
      "2",
      "Female",
      "Other Asian or Pacific Islander",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Washington",
      "17100",
      "4",
      "Male",
      "Other",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Washington",
      "20000",
      "18",
      "Male",
      "White",
      "Never married/single",
      "0"
   ],
   [
      "2000",
      "West Virginia",
      "0",
      "87",
      "Male",
      "White",
      "Widowed",
      "0"
   ],
   [
      "2000",
      "Wisconsin",
      "72520",
      "31",
      "Male",
      "White",
      "Married/spouse present",
      "39510"
   ],
   [
      "2000",
      "Wisconsin",
      "34500",
      "63",
      "Male",
      "White",
      "Divorced",
      "34500"
   ],
   [
      "2000",
      "Wisconsin",
      "38400",
      "78",
      "Male",
      "White",
      "Never married/single",
      "38400"
   ],
   [
      "2000",
      "Wisconsin",
      "45000",
      "29",
      "Female",
      "White",
      "Married/spouse present",
      "20000"
   ],
   [
      "2000",
      "Wisconsin",
      "50000",
      "10",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Wisconsin",
      "33780",
      "30",
      "Male",
      "White",
      "Never married/single",
      "33780"
   ],
   [
      "2000",
      "Wisconsin",
      "175000",
      "61",
      "Male",
      "White",
      "Married/spouse present",
      "55000"
   ],
   [
      "2000",
      "Wisconsin",
      "53000",
      "40",
      "Male",
      "White",
      "Divorced",
      "49100"
   ],
   [
      "2000",
      "Wisconsin",
      "5080",
      "21",
      "Male",
      "White",
      "Never married/single",
      "6420"
   ],
   [
      "2000",
      "Wisconsin",
      "14620",
      "9",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Arkansas",
      "10940",
      "6",
      "Female",
      "Black",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Hawaii",
      "108484",
      "49",
      "Female",
      "Other Asian or Pacific Islander",
      "Married/spouse present",
      "22000"
   ],
   [
      "2000",
      "Hawaii",
      "44410",
      "54",
      "Female",
      "Chinese",
      "Married/spouse present",
      "34600"
   ],
   [
      "2000",
      "Idaho",
      "38800",
      "60",
      "Male",
      "White",
      "Married/spouse present",
      "23000"
   ],
   [
      "2000",
      "Indiana",
      "42000",
      "5",
      "Female",
      "Other",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Indiana",
      "8000",
      "85",
      "Male",
      "Black",
      "Widowed",
      "8000"
   ],
   [
      "2000",
      "Indiana",
      "",
      "35",
      "Male",
      "Black",
      "Never married/single",
      "0"
   ],
   [
      "2000",
      "Indiana",
      "31500",
      "29",
      "Male",
      "White",
      "Married/spouse present",
      "6500"
   ],
   [
      "2000",
      "Indiana",
      "36000",
      "33",
      "Male",
      "White",
      "Divorced",
      "36000"
   ],
   [
      "2000",
      "Indiana",
      "42900",
      "73",
      "Female",
      "White",
      "Never married/single",
      "38900"
   ],
   [
      "2000",
      "Indiana",
      "5000",
      "20",
      "Female",
      "White",
      "Never married/single",
      "5000"
   ],
   [
      "2000",
      "Indiana",
      "11580",
      "76",
      "Female",
      "White",
      "Widowed",
      "11580"
   ],
   [
      "2000",
      "Indiana",
      "78700",
      "37",
      "Male",
      "Other Asian or Pacific Islander",
      "Married/spouse present",
      "39920"
   ],
   [
      "2000",
      "Indiana",
      "29340",
      "57",
      "Female",
      "White",
      "Married/spouse absent",
      "29340"
   ],
   [
      "2000",
      "Indiana",
      "77500",
      "29",
      "Female",
      "White",
      "Married/spouse present",
      "45500"
   ],
   [
      "2000",
      "Indiana",
      "36000",
      "26",
      "Female",
      "White",
      "Married/spouse present",
      "0"
   ],
   [
      "2000",
      "Indiana",
      "130000",
      "8",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Indiana",
      "64500",
      "40",
      "Female",
      "White",
      "Divorced",
      "9000"
   ],
   [
      "2000",
      "Indiana",
      "62490",
      "9",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Indiana",
      "67300",
      "7",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Indiana",
      "25000",
      "70",
      "Female",
      "White",
      "Widowed",
      "15800"
   ],
   [
      "2000",
      "Louisiana",
      "43000",
      "37",
      "Female",
      "White",
      "Married/spouse present",
      "24000"
   ],
   [
      "2000",
      "Louisiana",
      "13300",
      "71",
      "Male",
      "Black",
      "Widowed",
      "13300"
   ],
   [
      "2000",
      "Louisiana",
      "30900",
      "49",
      "Male",
      "White",
      "Married/spouse present",
      "29800"
   ],
   [
      "2000",
      "Louisiana",
      "",
      "44",
      "Male",
      "Black",
      "Married/spouse absent",
      "0"
   ],
   [
      "2000",
      "Louisiana",
      "54090",
      "31",
      "Male",
      "White",
      "Married/spouse present",
      "6000"
   ],
   [
      "2000",
      "Louisiana",
      "146500",
      "74",
      "Male",
      "White",
      "Married/spouse present",
      "104800"
   ],
   [
      "2000",
      "Louisiana",
      "500",
      "10",
      "Male",
      "Black",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Louisiana",
      "21700",
      "71",
      "Male",
      "White",
      "Never married/single",
      "21700"
   ],
   [
      "2000",
      "Louisiana",
      "10000",
      "54",
      "Male",
      "Black",
      "Married/spouse present",
      "0"
   ],
   [
      "2000",
      "Louisiana",
      "55800",
      "4",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Louisiana",
      "0",
      "54",
      "Male",
      "Black",
      "Divorced",
      "12100"
   ],
   [
      "2000",
      "Louisiana",
      "8100",
      "93",
      "Female",
      "White",
      "Widowed",
      "8100"
   ],
   [
      "2000",
      "Mississippi",
      "1400",
      "32",
      "Female",
      "Black",
      "Never married/single",
      "1400"
   ],
   [
      "2000",
      "Mississippi",
      "39900",
      "46",
      "Female",
      "White",
      "Married/spouse present",
      "25000"
   ],
   [
      "2000",
      "Mississippi",
      "57700",
      "45",
      "Female",
      "Black",
      "Married/spouse present",
      "0"
   ],
   [
      "2000",
      "Mississippi",
      "3300",
      "3",
      "Male",
      "Black",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Mississippi",
      "",
      "31",
      "Male",
      "White",
      "Never married/single",
      "25000"
   ],
   [
      "2000",
      "Missouri",
      "16300",
      "70",
      "Male",
      "White",
      "Married/spouse present",
      "11800"
   ],
   [
      "2000",
      "Missouri",
      "54000",
      "41",
      "Female",
      "Black",
      "Never married/single",
      "54000"
   ],
   [
      "2000",
      "Missouri",
      "36400",
      "3",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Missouri",
      "15600",
      "44",
      "Female",
      "White",
      "Divorced",
      "14000"
   ],
   [
      "2000",
      "Missouri",
      "9400",
      "81",
      "Female",
      "White",
      "Widowed",
      "9400"
   ],
   [
      "2000",
      "Missouri",
      "74000",
      "12",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Missouri",
      "25280",
      "81",
      "Male",
      "White",
      "Married/spouse present",
      "16300"
   ],
   [
      "2000",
      "Missouri",
      "55500",
      "17",
      "Female",
      "White",
      "Never married/single",
      "0"
   ],
   [
      "2000",
      "Missouri",
      "22200",
      "30",
      "Male",
      "White",
      "Married/spouse present",
      "15700"
   ],
   [
      "2000",
      "Missouri",
      "79100",
      "10",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Pennsylvania",
      "75050",
      "5",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Pennsylvania",
      "74490",
      "42",
      "Male",
      "White",
      "Married/spouse present",
      "68020"
   ],
   [
      "2000",
      "Pennsylvania",
      "20000",
      "3",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Pennsylvania",
      "27150",
      "1",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Pennsylvania",
      "40300",
      "29",
      "Female",
      "White",
      "Married/spouse present",
      "2800"
   ],
   [
      "2000",
      "Pennsylvania",
      "18600",
      "61",
      "Female",
      "White",
      "Never married/single",
      "6700"
   ],
   [
      "2000",
      "Pennsylvania",
      "",
      "36",
      "Male",
      "Black",
      "Married/spouse absent",
      "6500"
   ],
   [
      "2000",
      "Pennsylvania",
      "0",
      "25",
      "Female",
      "White",
      "Never married/single",
      "16000"
   ],
   [
      "2000",
      "Pennsylvania",
      "24000",
      "41",
      "Male",
      "White",
      "Married/spouse present",
      "24000"
   ],
   [
      "2000",
      "Pennsylvania",
      "24000",
      "9",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Pennsylvania",
      "17900",
      "10",
      "Female",
      "Black",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Pennsylvania",
      "32350",
      "13",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Pennsylvania",
      "42300",
      "3",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Pennsylvania",
      "17800",
      "15",
      "Male",
      "Other",
      "Never married/single",
      "0"
   ],
   [
      "2000",
      "Pennsylvania",
      "33000",
      "32",
      "Female",
      "Black",
      "Never married/single",
      "27000"
   ],
   [
      "2000",
      "Pennsylvania",
      "",
      "68",
      "Male",
      "White",
      "Widowed",
      "9100"
   ],
   [
      "2000",
      "Pennsylvania",
      "44000",
      "32",
      "Female",
      "White",
      "Married/spouse present",
      "21000"
   ],
   [
      "2000",
      "Pennsylvania",
      "24700",
      "32",
      "Female",
      "White",
      "Never married/single",
      "9500"
   ],
   [
      "2000",
      "Pennsylvania",
      "0",
      "24",
      "Male",
      "White",
      "Never married/single",
      "2200"
   ],
   [
      "2000",
      "Pennsylvania",
      "69000",
      "18",
      "Male",
      "White",
      "Never married/single",
      "15000"
   ],
   [
      "2000",
      "Pennsylvania",
      "60300",
      "41",
      "Female",
      "White",
      "Married/spouse present",
      "9100"
   ],
   [
      "2000",
      "Pennsylvania",
      "150000",
      "6",
      "Female",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Pennsylvania",
      "171000",
      "38",
      "Male",
      "White",
      "Married/spouse present",
      "103000"
   ],
   [
      "2000",
      "Pennsylvania",
      "103000",
      "43",
      "Male",
      "White",
      "Married/spouse present",
      "68000"
   ],
   [
      "2000",
      "Pennsylvania",
      "51700",
      "76",
      "Male",
      "White",
      "Married/spouse present",
      "14500"
   ],
   [
      "2000",
      "Pennsylvania",
      "119800",
      "24",
      "Male",
      "White",
      "Never married/single",
      "22000"
   ],
   [
      "2000",
      "Virginia",
      "18000",
      "36",
      "Male",
      "White",
      "Married/spouse present",
      "18000"
   ],
   [
      "2000",
      "Virginia",
      "45100",
      "5",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Virginia",
      "8500",
      "68",
      "Female",
      "White",
      "Divorced",
      "8500"
   ],
   [
      "2000",
      "Virginia",
      "55400",
      "12",
      "Male",
      "White",
      "Never married/single",
      ""
   ],
   [
      "2000",
      "Virginia",
      "15000",
      "60",
      "Male",
      "Black",
      "Widowed",
      "15000"
   ],
   [
      "2000",
      "Virginia",
      "",
      "60",
      "Male",
      "Black",
      "Married/spouse absent",
      "48600"
   ],
   [
      "2000",
      "Virginia",
      "39370",
      "47",
      "Male",
      "White",
      "Married/spouse present",
      "19800"
   ]
]
