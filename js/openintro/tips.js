var tipsInfo ={
   "format" : "A data frame with 95 observations on the following 5 variables.",
   "usage" : "tips",
   "reference" : "This dataset was built using simulations of tables, then bills, then tips\nbased on the bills. Large groups were assumed to only pay the gratuity,\nwhich is evident in the data. Tips were set to be plausible round values;\nthey were often (but not always) rounded to dollars, quarters, etc.",
   "title" : "Tip data",
   "description" : "Description\nA simulated dataset of tips over a few weeks on a couple days per week.\nEach tip is associated with a single group, which may include several bills\nand tables (i.e. groups paid in one lump sum in simulations).",
   "parameters" : {
      "day" : "Day, either Friday or Tuesday.",
      "week" : "Week number.",
      "n_peop" : "Number of people associated with the group.",
      "bill" : "Total bill for the group.",
      "tip" : "Total tip from the group."
   }
}

var tips = [
   [
      "week",
      "day",
      "n_peop",
      "bill",
      "tip"
   ],
   [
      "1",
      "Tuesday",
      "0.67",
      "17.99",
      "2"
   ],
   [
      "1",
      "Tuesday",
      "1.33",
      "26.05",
      "4"
   ],
   [
      "1",
      "Tuesday",
      "5.33",
      "79.49",
      "14.3082"
   ],
   [
      "1",
      "Tuesday",
      "2.67",
      "32.69",
      "5.5"
   ],
   [
      "1",
      "Tuesday",
      "1.33",
      "29.97",
      "6"
   ],
   [
      "1",
      "Tuesday",
      "2",
      "23.91",
      "7.5"
   ],
   [
      "1",
      "Tuesday",
      "1.33",
      "18.18",
      "3.06"
   ],
   [
      "1",
      "Tuesday",
      "2.67",
      "41.23",
      "8.5"
   ],
   [
      "1",
      "Tuesday",
      "2",
      "25.19",
      "8.5"
   ],
   [
      "1",
      "Tuesday",
      "1.33",
      "19.22",
      "3"
   ],
   [
      "1",
      "Tuesday",
      "1.33",
      "20.6",
      "5"
   ],
   [
      "1",
      "Tuesday",
      "1.33",
      "30.15",
      "3.5"
   ],
   [
      "1",
      "Tuesday",
      "1.33",
      "31.03",
      "3"
   ],
   [
      "1",
      "Tuesday",
      "7.33",
      "124.44",
      "22.3992"
   ],
   [
      "1",
      "Tuesday",
      "4.67",
      "69.4",
      "18"
   ],
   [
      "1",
      "Tuesday",
      "1.33",
      "23.45",
      "8.5"
   ],
   [
      "1",
      "Tuesday",
      "1.33",
      "19.75",
      "2.5"
   ],
   [
      "1",
      "Tuesday",
      "2.67",
      "39.88",
      "7.5"
   ],
   [
      "1",
      "Tuesday",
      "1.33",
      "21.19",
      "5"
   ],
   [
      "1",
      "Friday",
      "1.33",
      "17.83",
      "2.25"
   ],
   [
      "1",
      "Friday",
      "6",
      "91.43",
      "16.4574"
   ],
   [
      "1",
      "Friday",
      "6",
      "78.18",
      "14.0724"
   ],
   [
      "1",
      "Friday",
      "3.33",
      "53.04",
      "7.57"
   ],
   [
      "1",
      "Friday",
      "1.33",
      "26.75",
      "0"
   ],
   [
      "1",
      "Friday",
      "0.67",
      "15.23",
      "2.81"
   ],
   [
      "1",
      "Friday",
      "2.67",
      "28.05",
      "3"
   ],
   [
      "1",
      "Friday",
      "0.67",
      "10.99",
      "2"
   ],
   [
      "1",
      "Friday",
      "5.33",
      "71.47",
      "12.8646"
   ],
   [
      "1",
      "Friday",
      "1.33",
      "24.71",
      "3"
   ],
   [
      "1",
      "Friday",
      "4",
      "66.48",
      "16"
   ],
   [
      "1",
      "Friday",
      "4",
      "53.39",
      "7"
   ],
   [
      "1",
      "Friday",
      "2.67",
      "38.88",
      "2.9"
   ],
   [
      "1",
      "Friday",
      "4.67",
      "60.17",
      "7"
   ],
   [
      "1",
      "Friday",
      "8.67",
      "124.9",
      "22.482"
   ],
   [
      "1",
      "Friday",
      "1.33",
      "24.82",
      "6"
   ],
   [
      "1",
      "Friday",
      "2.67",
      "35.71",
      "6"
   ],
   [
      "1",
      "Friday",
      "5.33",
      "75.12",
      "13.5216"
   ],
   [
      "2",
      "Tuesday",
      "0.67",
      "8.31",
      "1.5"
   ],
   [
      "2",
      "Tuesday",
      "0.67",
      "14.57",
      "7"
   ],
   [
      "2",
      "Tuesday",
      "1.33",
      "20.07",
      "3"
   ],
   [
      "2",
      "Tuesday",
      "4",
      "64.25",
      "5.5"
   ],
   [
      "2",
      "Tuesday",
      "1.33",
      "22.38",
      "3.25"
   ],
   [
      "2",
      "Tuesday",
      "2",
      "30.21",
      "6"
   ],
   [
      "2",
      "Tuesday",
      "2",
      "23.27",
      "2"
   ],
   [
      "2",
      "Tuesday",
      "2",
      "22.36",
      "3.5"
   ],
   [
      "2",
      "Tuesday",
      "0.67",
      "18.65",
      "6"
   ],
   [
      "2",
      "Tuesday",
      "2",
      "32.33",
      "3.5"
   ],
   [
      "2",
      "Tuesday",
      "2",
      "34.35",
      "7.32"
   ],
   [
      "2",
      "Tuesday",
      "1.33",
      "23.78",
      "9.5"
   ],
   [
      "2",
      "Tuesday",
      "1.33",
      "19.68",
      "3"
   ],
   [
      "2",
      "Tuesday",
      "2",
      "20.82",
      "3.5"
   ],
   [
      "2",
      "Tuesday",
      "6.67",
      "96.11",
      "17.2998"
   ],
   [
      "2",
      "Friday",
      "1.33",
      "15.14",
      "2.5"
   ],
   [
      "2",
      "Friday",
      "2",
      "36.77",
      "4"
   ],
   [
      "2",
      "Friday",
      "4.67",
      "59.97",
      "9"
   ],
   [
      "2",
      "Friday",
      "2",
      "27.33",
      "4"
   ],
   [
      "2",
      "Friday",
      "2.67",
      "30.99",
      "3.25"
   ],
   [
      "2",
      "Friday",
      "2.67",
      "35.12",
      "6"
   ],
   [
      "2",
      "Friday",
      "8",
      "117.15",
      "21.087"
   ],
   [
      "2",
      "Friday",
      "9.33",
      "144.18",
      "25.9524"
   ],
   [
      "2",
      "Friday",
      "1.33",
      "21.37",
      "6"
   ],
   [
      "2",
      "Friday",
      "2.67",
      "32.45",
      "5.5"
   ],
   [
      "2",
      "Friday",
      "1.33",
      "25.05",
      "4"
   ],
   [
      "2",
      "Friday",
      "2.67",
      "42.51",
      "6.5"
   ],
   [
      "2",
      "Friday",
      "1.33",
      "10.91",
      "3"
   ],
   [
      "2",
      "Friday",
      "2",
      "33.72",
      "7.75"
   ],
   [
      "2",
      "Friday",
      "1.33",
      "25.21",
      "6"
   ],
   [
      "2",
      "Friday",
      "0.67",
      "19.08",
      "4"
   ],
   [
      "2",
      "Friday",
      "9.33",
      "141.76",
      "25.5168"
   ],
   [
      "2",
      "Friday",
      "8",
      "93.37",
      "16.8066"
   ],
   [
      "3",
      "Tuesday",
      "6.67",
      "101.26",
      "18.2268"
   ],
   [
      "3",
      "Tuesday",
      "2",
      "42.81",
      "5"
   ],
   [
      "3",
      "Tuesday",
      "0.67",
      "4.98",
      "0.5"
   ],
   [
      "3",
      "Tuesday",
      "2",
      "28.17",
      "7.5"
   ],
   [
      "3",
      "Tuesday",
      "0.67",
      "5.55",
      "0.75"
   ],
   [
      "3",
      "Tuesday",
      "4.67",
      "60.47",
      "15"
   ],
   [
      "3",
      "Tuesday",
      "1.33",
      "24.67",
      "6"
   ],
   [
      "3",
      "Tuesday",
      "1.33",
      "17.77",
      "0.75"
   ],
   [
      "3",
      "Friday",
      "0.67",
      "13.67",
      "3.5"
   ],
   [
      "3",
      "Friday",
      "2",
      "23.25",
      "7"
   ],
   [
      "3",
      "Friday",
      "2.67",
      "31.38",
      "8"
   ],
   [
      "3",
      "Friday",
      "2.67",
      "42.55",
      "6"
   ],
   [
      "3",
      "Friday",
      "2",
      "39.13",
      "6"
   ],
   [
      "3",
      "Friday",
      "2",
      "38.77",
      "4"
   ],
   [
      "3",
      "Friday",
      "0.67",
      "10",
      "3.5"
   ],
   [
      "3",
      "Friday",
      "4",
      "72.84",
      "11.5"
   ],
   [
      "3",
      "Friday",
      "2",
      "29.07",
      "7"
   ],
   [
      "3",
      "Friday",
      "0.67",
      "14.83",
      "1.5"
   ],
   [
      "3",
      "Friday",
      "0.67",
      "18.31",
      "1"
   ],
   [
      "3",
      "Friday",
      "4",
      "64.93",
      "7"
   ],
   [
      "3",
      "Friday",
      "1.33",
      "25.04",
      "6"
   ],
   [
      "3",
      "Friday",
      "4",
      "76.27",
      "13"
   ],
   [
      "3",
      "Friday",
      "1.33",
      "24.21",
      "3.75"
   ],
   [
      "3",
      "Friday",
      "1.33",
      "34.05",
      "8.5"
   ],
   [
      "3",
      "Friday",
      "8.67",
      "115.39",
      "20.7702"
   ]
]
