var schooldataInfo ={
   "parameters" : {
      "visit" : "Parental visits index\nrepresenting the number of visits to the school site",
      "selfesteem" : "Coopersmith Self-Esteem Inventory, intended as a measure of self-esteem",
      "mathematics" : "Mathematics score as measured by the Metropolitan Achievement Test",
      "counseling" : "Parent counseling index calculated from data on\ntime spent with child on school-related topics such as reading together, etc.",
      "education" : "Education level of mother as measured in\nterms of percentage of high school graduates among female parents",
      "reading" : "Reading score as measured by the Metropolitan Achievement Test",
      "teacher" : "Number of teachers at a given site",
      "occupation" : "Highest occupation of a family member according\nto a pre-arranged rating scale"
   },
   "title" : "School Data",
   "description" : "Description\nSchool Data, from Charnes et al. (1981). The aim is to explain scores on 3\ndifferent tests, reading, mathematics and selfesteem\nfrom 70 school sites by means of 5 explanatory variables related to parents\nand teachers.",
   "usage" : "A data frame with 70 observations on the following 8 variables.",
   "reference" : "This dataset was shamelessly borrowed from the FRB package."
}

var schooldata = [
   [
      "education",
      "occupation",
      "visit",
      "counseling",
      "teacher",
      "reading",
      "mathematics",
      "selfesteem"
   ],
   [
      "86.13",
      "16.24",
      "48.21",
      "49.69",
      "9",
      "54.53",
      "58.98",
      "38.16"
   ],
   [
      "29.26",
      "10.24",
      "41.96",
      "40.65",
      "5",
      "24.69",
      "33.89",
      "26.02"
   ],
   [
      "43.12",
      "11.31",
      "38.19",
      "35.03",
      "9",
      "36.41",
      "40.62",
      "28.51"
   ],
   [
      "24.96",
      "6.14",
      "24.81",
      "25.15",
      "7",
      "14.94",
      "17.58",
      "16.19"
   ],
   [
      "11.62",
      "2.21",
      "6.85",
      "6.37",
      "4",
      "7.81",
      "6.94",
      "5.37"
   ],
   [
      "11.88",
      "4.97",
      "18.73",
      "18.04",
      "4",
      "12.59",
      "16.85",
      "12.84"
   ],
   [
      "32.64",
      "6.88",
      "28.1",
      "25.45",
      "7",
      "17.06",
      "16.99",
      "17.82"
   ],
   [
      "20.79",
      "12.97",
      "54.85",
      "52.07",
      "8",
      "20.29",
      "30.64",
      "33.16"
   ],
   [
      "34.4",
      "11.04",
      "38.16",
      "42.4",
      "8",
      "26.13",
      "29.8",
      "26.29"
   ],
   [
      "61.74",
      "14.5",
      "49.09",
      "42.92",
      "9",
      "46.42",
      "51.59",
      "35.2"
   ],
   [
      "52.92",
      "11.67",
      "39.48",
      "39.64",
      "5",
      "39.8",
      "37.73",
      "30.29"
   ],
   [
      "36",
      "10.15",
      "37.8",
      "39.52",
      "5",
      "37.84",
      "47.85",
      "25.35"
   ],
   [
      "39.2",
      "10.8",
      "41.04",
      "41.12",
      "7",
      "26.48",
      "31.36",
      "26.54"
   ],
   [
      "14.6",
      "2.88",
      "9.64",
      "11.14",
      "3",
      "10.31",
      "10.86",
      "7.47"
   ],
   [
      "4.29",
      "5.42",
      "21.45",
      "17.27",
      "5",
      "14.39",
      "18.3",
      "14.33"
   ],
   [
      "27.25",
      "14.17",
      "56.46",
      "55.26",
      "9",
      "32.94",
      "36.03",
      "38.19"
   ],
   [
      "22.63",
      "4.43",
      "15.4",
      "15",
      "2",
      "17.25",
      "20.8",
      "12.07"
   ],
   [
      "28",
      "7.61",
      "28.73",
      "27.04",
      "9",
      "27.55",
      "38.19",
      "20.44"
   ],
   [
      "53.56",
      "13.7",
      "53.04",
      "49.85",
      "7",
      "41.12",
      "43.8",
      "36.54"
   ],
   [
      "25.42",
      "9.05",
      "29.69",
      "31.74",
      "4",
      "29.43",
      "42.63",
      "23.34"
   ],
   [
      "31.57",
      "10.08",
      "39.34",
      "40.57",
      "6",
      "37.46",
      "51.02",
      "27.44"
   ],
   [
      "16.34",
      "5.84",
      "20.89",
      "22.1",
      "4",
      "19.4",
      "25.18",
      "16.52"
   ],
   [
      "44.28",
      "14.14",
      "56.7",
      "52.27",
      "11",
      "39.88",
      "47.72",
      "38.97"
   ],
   [
      "19.74",
      "6.43",
      "24.2",
      "25.66",
      "3",
      "25.72",
      "30.81",
      "16.54"
   ],
   [
      "24.4",
      "8.05",
      "33.42",
      "31.29",
      "7",
      "24.88",
      "25.27",
      "22.43"
   ],
   [
      "41.4",
      "11.7",
      "44.01",
      "46.35",
      "7",
      "31.62",
      "40.78",
      "31.16"
   ],
   [
      "27.2",
      "9.38",
      "37.8",
      "31.55",
      "4",
      "31.31",
      "38.32",
      "25.03"
   ],
   [
      "23.92",
      "7.12",
      "25.58",
      "29.01",
      "3",
      "21",
      "21.3",
      "18.3"
   ],
   [
      "10.62",
      "2.55",
      "10.1",
      "9.09",
      "4",
      "6.51",
      "7.02",
      "6.16"
   ],
   [
      "12.48",
      "6.14",
      "23.13",
      "22.46",
      "6",
      "11.64",
      "15.26",
      "15.68"
   ],
   [
      "19.32",
      "5.89",
      "24.01",
      "24.74",
      "6",
      "12.58",
      "15.9",
      "14.42"
   ],
   [
      "6.3",
      "1.93",
      "7.11",
      "7.68",
      "4",
      "4.59",
      "6.16",
      "4.99"
   ],
   [
      "46.62",
      "14.65",
      "65.71",
      "57.49",
      "10",
      "43.76",
      "46.64",
      "39.1"
   ],
   [
      "38.95",
      "12.82",
      "47.02",
      "48.92",
      "9",
      "32.38",
      "38.55",
      "31.05"
   ],
   [
      "61.6",
      "15.56",
      "53.98",
      "50.29",
      "6",
      "34.64",
      "45.46",
      "39.22"
   ],
   [
      "31.08",
      "6.26",
      "22.18",
      "21.96",
      "4",
      "11.52",
      "15.14",
      "13.91"
   ],
   [
      "19.35",
      "6.68",
      "22.61",
      "23.31",
      "4",
      "15.96",
      "19.21",
      "15.3"
   ],
   [
      "11.2",
      "3.08",
      "9.9",
      "10.06",
      "2",
      "9.91",
      "12.3",
      "7.22"
   ],
   [
      "34.4",
      "11.61",
      "41.79",
      "41.79",
      "5",
      "30.44",
      "33.53",
      "29.8"
   ],
   [
      "35.55",
      "6.48",
      "21.69",
      "21.69",
      "6",
      "22.63",
      "25.24",
      "17.15"
   ],
   [
      "30.53",
      "9.3",
      "35.5",
      "35.14",
      "8",
      "24.41",
      "27.16",
      "25.3"
   ],
   [
      "25.44",
      "7.1",
      "26.81",
      "26.23",
      "3",
      "23.11",
      "22.67",
      "17.56"
   ],
   [
      "26.66",
      "11.43",
      "41.36",
      "44.63",
      "6",
      "21.82",
      "31.45",
      "27.54"
   ],
   [
      "39.79",
      "22.49",
      "84.77",
      "76.12",
      "11",
      "63.92",
      "79.67",
      "63.11"
   ],
   [
      "8.32",
      "3.64",
      "12.92",
      "13.13",
      "2",
      "9.47",
      "11.92",
      "8.85"
   ],
   [
      "59.78",
      "13.52",
      "48.8",
      "49.69",
      "15",
      "33.94",
      "39.18",
      "34.61"
   ],
   [
      "39.22",
      "10.06",
      "37",
      "38.33",
      "4",
      "29.42",
      "35.1",
      "28.42"
   ],
   [
      "3.24",
      "3.18",
      "13.12",
      "12.71",
      "5",
      "7.7",
      "11.02",
      "9.02"
   ],
   [
      "7.14",
      "5.29",
      "23.1",
      "19.06",
      "8",
      "12.17",
      "16.03",
      "15.82"
   ],
   [
      "68.16",
      "12.28",
      "33.58",
      "34.64",
      "15",
      "39.07",
      "42.71",
      "27.67"
   ],
   [
      "11.88",
      "3.59",
      "13.41",
      "13.82",
      "8",
      "9.96",
      "14.34",
      "9.33"
   ],
   [
      "55.3",
      "11.53",
      "36.73",
      "35.78",
      "6",
      "45.37",
      "51.38",
      "31.61"
   ],
   [
      "16.2",
      "7.02",
      "26.94",
      "26.3",
      "9",
      "18.23",
      "22.05",
      "17.56"
   ],
   [
      "82.45",
      "15.52",
      "45",
      "44.23",
      "13",
      "59.63",
      "64.41",
      "35.89"
   ],
   [
      "15.81",
      "6.93",
      "23.91",
      "23.61",
      "7",
      "24.2",
      "28.21",
      "18.74"
   ],
   [
      "4.65",
      "5.5",
      "20.91",
      "23.39",
      "5",
      "13.53",
      "17.09",
      "15.61"
   ],
   [
      "41.25",
      "8.41",
      "26.23",
      "25.24",
      "10",
      "28.39",
      "27.65",
      "20.79"
   ],
   [
      "10.44",
      "5.22",
      "17.1",
      "18.93",
      "3",
      "21.67",
      "26.22",
      "13.66"
   ],
   [
      "139.65",
      "35.03",
      "119.56",
      "130.83",
      "22",
      "120.17",
      "144.67",
      "88.59"
   ],
   [
      "16.28",
      "4.81",
      "18.2",
      "18.98",
      "5",
      "15.15",
      "18.04",
      "13.58"
   ],
   [
      "12.06",
      "2.59",
      "8.74",
      "8.17",
      "5",
      "6.92",
      "7.1",
      "6.35"
   ],
   [
      "4.2",
      "2.64",
      "9.89",
      "11.25",
      "2",
      "9.35",
      "9.85",
      "7.7"
   ],
   [
      "19.44",
      "3.83",
      "12.87",
      "13.23",
      "5",
      "13.03",
      "13.4",
      "10.29"
   ],
   [
      "28.38",
      "8.91",
      "30.95",
      "33.33",
      "8",
      "18.63",
      "24.48",
      "23.13"
   ],
   [
      "13.5",
      "3.61",
      "15.6",
      "12.39",
      "4",
      "12.28",
      "13.01",
      "9.89"
   ],
   [
      "23.32",
      "7.1",
      "24.96",
      "28.56",
      "22",
      "16.81",
      "19.72",
      "18.7"
   ],
   [
      "27.6",
      "9.38",
      "32.29",
      "34.01",
      "20",
      "26.36",
      "28.22",
      "24.46"
   ],
   [
      "11.7",
      "10.53",
      "37.67",
      "43.6",
      "8",
      "22.85",
      "26.21",
      "28.14"
   ],
   [
      "4.68",
      "1.85",
      "6.22",
      "5.46",
      "5",
      "8.17",
      "8.7",
      "5.12"
   ],
   [
      "10.44",
      "4.82",
      "17.13",
      "18.21",
      "9",
      "13.69",
      "14.19",
      "12.99"
   ]
]