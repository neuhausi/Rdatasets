var thatcher_approvalInfo ={
   "format" : "A data frame with 125 observations on the following 8 variables.",
   "title" : "Margaret Thatcher Satisfaction Ratings, 1980-1990",
   "description" : "Description\nA data set on satisfaction/dissatisfaction ratings during Margaret Thatcher's tenure as prime minister.",
   "reference" : "Data come from Ipsos. \"Leader of the opposition\" was typically named in the exact poll. In the\nlifetime of this series, the leader of the opposition was James Callaghan until Nov. 10 1980. Thereafter, it\nwas Michael Foot until Oct. 2 1983. Neil Kinnock replaces him for the duration of this series. Interpret\n\"leader of the opposition\" with that in mind.",
   "usage" : "thatcher_approval",
   "parameters" : {
      "opp_sat" : "the percentage of respondents saying they were satisfied with the leader of the opposition",
      "opp_dis" : "the percentage of respondents saying they were dissatisfied with the leader of the opposition",
      "poll_date" : "the effective \"date\" of the public opinion poll",
      "thatcher_dis" : "the percentage of respondents saying they were dissatisfied with Margaret Thatcher",
      "thatcher_sat" : "the percentage of respondents saying they were satisfied with Margaret Thatcher",
      "date" : "a date for the poll, to make for easier plotting",
      "govt_dis" : "the percentage of respondents saying they were dissatisfied with the government",
      "govt_sat" : "the percentage of respondents saying they were satisfied with the government"
   }
}

var thatcher_approval = [
   [
      "poll_date",
      "date",
      "govt_sat",
      "govt_dis",
      "thatcher_sat",
      "thatcher_dis",
      "opp_sat",
      "opp_dis"
   ],
   [
      "January",
      "1980-01-01",
      "30",
      "59",
      "39",
      "50",
      "35",
      "41"
   ],
   [
      "February",
      "1980-02-01",
      "26",
      "63",
      "37",
      "55",
      "38",
      "42"
   ],
   [
      "March",
      "1980-03-01",
      "28",
      "62",
      "37",
      "56",
      "44",
      "34"
   ],
   [
      "April",
      "1980-04-01",
      "33",
      "57",
      "43",
      "50",
      "41",
      "37"
   ],
   [
      "June",
      "1980-06-01",
      "32",
      "59",
      "42",
      "52",
      "37",
      "43"
   ],
   [
      "July",
      "1980-07-01",
      "32",
      "62",
      "38",
      "57",
      "42",
      "41"
   ],
   [
      "August",
      "1980-08-01",
      "30",
      "61",
      "37",
      "56",
      "37",
      "44"
   ],
   [
      "September",
      "1980-09-01",
      "27",
      "64",
      "35",
      "58",
      "41",
      "41"
   ],
   [
      "October",
      "1980-10-01",
      "27",
      "65",
      "34",
      "58",
      "",
      ""
   ],
   [
      "November",
      "1980-11-01",
      "25",
      "65",
      "32",
      "61",
      "23",
      "21"
   ],
   [
      "January",
      "1981-01-01",
      "26",
      "66",
      "33",
      "61",
      "24",
      "37"
   ],
   [
      "February",
      "1981-02-01",
      "23",
      "69",
      "32",
      "63",
      "24",
      "45"
   ],
   [
      "March",
      "1981-03-01",
      "16",
      "74",
      "29",
      "65",
      "23",
      "50"
   ],
   [
      "April",
      "1981-04-01",
      "24",
      "68",
      "33",
      "60",
      "24",
      "50"
   ],
   [
      "June",
      "1981-06-01",
      "25",
      "68",
      "34",
      "61",
      "29",
      "47"
   ],
   [
      "July",
      "1981-07-01",
      "22",
      "70",
      "31",
      "62",
      "25",
      "51"
   ],
   [
      "August",
      "1981-08-01",
      "22",
      "70",
      "29",
      "64",
      "24",
      "51"
   ],
   [
      "September",
      "1981-09-01",
      "20",
      "71",
      "28",
      "65",
      "25",
      "49"
   ],
   [
      "October",
      "1981-10-01",
      "22",
      "72",
      "30",
      "65",
      "24",
      "56"
   ],
   [
      "November",
      "1981-11-01",
      "20",
      "72",
      "28",
      "64",
      "17",
      "63"
   ],
   [
      "December",
      "1981-12-01",
      "18",
      "73",
      "25",
      "66",
      "16",
      "64"
   ],
   [
      "January",
      "1982-01-01",
      "23",
      "68",
      "32",
      "61",
      "20",
      "60"
   ],
   [
      "February",
      "1982-02-01",
      "23",
      "69",
      "30",
      "63",
      "18",
      "62"
   ],
   [
      "March",
      "1982-03-01",
      "29",
      "63",
      "36",
      "57",
      "22",
      "59"
   ],
   [
      "April",
      "1982-04-01",
      "34",
      "56",
      "41",
      "53",
      "21",
      "56"
   ],
   [
      "May",
      "1982-05-01",
      "49",
      "44",
      "56",
      "40",
      "18",
      "67"
   ],
   [
      "June",
      "1982-06-01",
      "51",
      "39",
      "59",
      "36",
      "17",
      "68"
   ],
   [
      "July",
      "1982-07-01",
      "42",
      "47",
      "51",
      "41",
      "14",
      "68"
   ],
   [
      "August",
      "1982-08-01",
      "40",
      "49",
      "49",
      "43",
      "13",
      "69"
   ],
   [
      "September",
      "1982-09-01",
      "37",
      "54",
      "46",
      "48",
      "16",
      "66"
   ],
   [
      "October",
      "1982-10-01",
      "38",
      "51",
      "46",
      "46",
      "19",
      "63"
   ],
   [
      "November",
      "1982-11-01",
      "41",
      "49",
      "48",
      "45",
      "22",
      "58"
   ],
   [
      "December",
      "1982-12-01",
      "38",
      "51",
      "47",
      "45",
      "22",
      "60"
   ],
   [
      "January 20-26",
      "1983-01-20",
      "42",
      "48",
      "49",
      "45",
      "20",
      "64"
   ],
   [
      "February 17-23",
      "1983-02-17",
      "41",
      "50",
      "49",
      "45",
      "16",
      "68"
   ],
   [
      "March 17-23",
      "1983-03-17",
      "42",
      "50",
      "48",
      "46",
      "19",
      "66"
   ],
   [
      "April 17-23",
      "1983-04-17",
      "41",
      "48",
      "49",
      "44",
      "20",
      "65"
   ],
   [
      "May 19-23",
      "1983-05-19",
      "43",
      "46",
      "51",
      "42",
      "22",
      "61"
   ],
   [
      "June 16-20",
      "1983-06-16",
      "",
      "",
      "54",
      "34",
      "18",
      "69"
   ],
   [
      "July 21-25",
      "1983-07-21",
      "43",
      "48",
      "49",
      "43",
      "",
      ""
   ],
   [
      "August 18-22",
      "1983-08-18",
      "46",
      "45",
      "53",
      "40",
      "",
      ""
   ],
   [
      "September 22-26",
      "1983-09-22",
      "42",
      "49",
      "50",
      "43",
      "",
      ""
   ],
   [
      "October 20-24",
      "1983-10-20",
      "39",
      "51",
      "47",
      "46",
      "33",
      "13"
   ],
   [
      "December 2",
      "1983-12-02",
      "36",
      "56",
      "47",
      "48",
      "39",
      "26"
   ],
   [
      "January 5-11",
      "1984-01-05",
      "40",
      "51",
      "48",
      "45",
      "35",
      "22"
   ],
   [
      "February 16-20",
      "1984-02-16",
      "38",
      "54",
      "47",
      "47",
      "39",
      "25"
   ],
   [
      "March 14-20",
      "1984-03-14",
      "38",
      "55",
      "43",
      "52",
      "43",
      "26"
   ],
   [
      "April 25 - May 1",
      "1984-04-25",
      "36",
      "55",
      "42",
      "51",
      "38",
      "31"
   ],
   [
      "May 24-29",
      "1984-05-24",
      "36",
      "56",
      "43",
      "52",
      "37",
      "35"
   ],
   [
      "June 21-25",
      "1984-06-21",
      "32",
      "60",
      "39",
      "54",
      "37",
      "37"
   ],
   [
      "August 16-20",
      "1984-08-16",
      "32",
      "59",
      "41",
      "52",
      "34",
      "41"
   ],
   [
      "September 17-21",
      "1984-09-17",
      "35",
      "56",
      "41",
      "51",
      "29",
      "45"
   ],
   [
      "October 18-22",
      "1984-10-18",
      "37",
      "54",
      "48",
      "46",
      "30",
      "45"
   ],
   [
      "November 15-19",
      "1984-11-15",
      "36",
      "53",
      "44",
      "47",
      "32",
      "47"
   ],
   [
      "December 6-10",
      "1984-12-06",
      "33",
      "57",
      "41",
      "51",
      "29",
      "48"
   ],
   [
      "January 2-7",
      "1985-01-02",
      "33",
      "57",
      "44",
      "49",
      "30",
      "46"
   ],
   [
      "February 19-24",
      "1985-02-19",
      "30",
      "61",
      "41",
      "53",
      "28",
      "53"
   ],
   [
      "March 19-24",
      "1985-03-19",
      "29",
      "63",
      "37",
      "56",
      "33",
      "46"
   ],
   [
      "April 25-28",
      "1985-04-25",
      "31",
      "62",
      "38",
      "57",
      "32",
      "48"
   ],
   [
      "May 21-26",
      "1985-05-21",
      "26",
      "64",
      "35",
      "58",
      "30",
      "50"
   ],
   [
      "June 18-23",
      "1985-06-18",
      "29",
      "62",
      "38",
      "54",
      "31",
      "49"
   ],
   [
      "July 16-21",
      "1985-07-16",
      "28",
      "64",
      "38",
      "56",
      "31",
      "51"
   ],
   [
      "August 13-18",
      "1985-08-13",
      "26",
      "65",
      "33",
      "60",
      "29",
      "49"
   ],
   [
      "September 17-22",
      "1985-09-17",
      "28",
      "62",
      "35",
      "58",
      "30",
      "49"
   ],
   [
      "October 15-20",
      "1985-10-15",
      "30",
      "60",
      "39",
      "55",
      "43",
      "39"
   ],
   [
      "November 19-24",
      "1985-11-19",
      "31",
      "61",
      "39",
      "55",
      "42",
      "42"
   ],
   [
      "December 3-8",
      "1985-12-03",
      "30",
      "59",
      "39",
      "53",
      "45",
      "36"
   ],
   [
      "January 4-8",
      "1986-01-04",
      "28",
      "62",
      "34",
      "58",
      "40",
      "40"
   ],
   [
      "February 22-26",
      "1986-02-22",
      "23",
      "69",
      "29",
      "64",
      "37",
      "46"
   ],
   [
      "March 22-26",
      "1986-03-22",
      "27",
      "65",
      "32",
      "61",
      "35",
      "46"
   ],
   [
      "April 19-22",
      "1986-04-19",
      "26",
      "64",
      "32",
      "61",
      "38",
      "45"
   ],
   [
      "May 17-21",
      "1986-05-17",
      "23",
      "69",
      "29",
      "64",
      "39",
      "42"
   ],
   [
      "June 20-24",
      "1986-06-20",
      "25",
      "66",
      "30",
      "62",
      "38",
      "43"
   ],
   [
      "July 18-22",
      "1986-07-18",
      "26",
      "53",
      "30",
      "61",
      "33",
      "44"
   ],
   [
      "August 15-19",
      "1986-08-15",
      "24",
      "67",
      "27",
      "65",
      "32",
      "48"
   ],
   [
      "September 19-23",
      "1986-09-19",
      "26",
      "63",
      "32",
      "59",
      "32",
      "46"
   ],
   [
      "October 17-22",
      "1986-10-17",
      "30",
      "58",
      "35",
      "55",
      "40",
      "40"
   ],
   [
      "November 20-26",
      "1986-11-20",
      "32",
      "57",
      "37",
      "54",
      "37",
      "45"
   ],
   [
      "December 27-30",
      "1986-12-27",
      "34",
      "59",
      "39",
      "55",
      "36",
      "50"
   ],
   [
      "January 23-28",
      "1987-01-23",
      "32",
      "58",
      "37",
      "56",
      "37",
      "47"
   ],
   [
      "February 20-25",
      "1987-02-20",
      "33",
      "58",
      "38",
      "54",
      "30",
      "53"
   ],
   [
      "March 26-April 2",
      "1987-03-26",
      "37",
      "55",
      "44",
      "50",
      "28",
      "58"
   ],
   [
      "April 24-30",
      "1987-04-24",
      "40",
      "51",
      "47",
      "46",
      "27",
      "57"
   ],
   [
      "June 25-July 1",
      "1987-06-25",
      "48",
      "43",
      "51",
      "41",
      "36",
      "49"
   ],
   [
      "July 21-28",
      "1987-07-21",
      "47",
      "41",
      "54",
      "38",
      "37",
      "47"
   ],
   [
      "August 21-26",
      "1987-08-21",
      "44",
      "46",
      "48",
      "45",
      "36",
      "48"
   ],
   [
      "September 24-30",
      "1987-09-24",
      "44",
      "48",
      "48",
      "45",
      "36",
      "47"
   ],
   [
      "October 21-26",
      "1987-10-21",
      "45",
      "44",
      "49",
      "43",
      "38",
      "46"
   ],
   [
      "November 19-25",
      "1987-11-19",
      "44",
      "47",
      "49",
      "44",
      "37",
      "47"
   ],
   [
      "December 29-30",
      "1987-12-29",
      "43",
      "50",
      "48",
      "46",
      "35",
      "50"
   ],
   [
      "January 22-26",
      "1988-01-22",
      "40",
      "50",
      "46",
      "47",
      "33",
      "48"
   ],
   [
      "February 26-March 1",
      "1988-02-26",
      "37",
      "53",
      "45",
      "48",
      "35",
      "49"
   ],
   [
      "March 24-28",
      "1988-03-24",
      "39",
      "54",
      "47",
      "49",
      "36",
      "50"
   ],
   [
      "April 22-26",
      "1988-04-22",
      "38",
      "56",
      "43",
      "52",
      "39",
      "47"
   ],
   [
      "May 27-1 June",
      "1988-05-27",
      "39",
      "52",
      "43",
      "51",
      "37",
      "49"
   ],
   [
      "June 22-28",
      "1988-06-22",
      "42",
      "49",
      "49",
      "46",
      "32",
      "55"
   ],
   [
      "July 21-25",
      "1988-07-21",
      "41",
      "53",
      "46",
      "49",
      "30",
      "57"
   ],
   [
      "August 18-22",
      "1988-08-18",
      "44",
      "48",
      "50",
      "45",
      "28",
      "59"
   ],
   [
      "September 21-26",
      "1988-09-21",
      "38",
      "53",
      "46",
      "47",
      "32",
      "53"
   ],
   [
      "October 26-31",
      "1988-10-26",
      "40",
      "52",
      "46",
      "48",
      "36",
      "51"
   ],
   [
      "November 25-30",
      "1988-11-25",
      "37",
      "56",
      "47",
      "48",
      "34",
      "55"
   ],
   [
      "December 28-29",
      "1988-12-28",
      "41",
      "51",
      "48",
      "48",
      "27",
      "61"
   ],
   [
      "January 26-30",
      "1989-01-26",
      "38",
      "54",
      "46",
      "48",
      "30",
      "57"
   ],
   [
      "February 23-28",
      "1989-02-23",
      "34",
      "57",
      "44",
      "51",
      "34",
      "53"
   ],
   [
      "March 15-19",
      "1989-03-15",
      "36",
      "57",
      "43",
      "52",
      "33",
      "55"
   ],
   [
      "April 20-24",
      "1989-04-20",
      "32",
      "60",
      "41",
      "54",
      "33",
      "52"
   ],
   [
      "May 18-22",
      "1989-05-18",
      "33",
      "59",
      "40",
      "54",
      "38",
      "48"
   ],
   [
      "June 22-27",
      "1989-06-22",
      "28",
      "64",
      "34",
      "60",
      "41",
      "45"
   ],
   [
      "July 20-26",
      "1989-07-20",
      "28",
      "66",
      "34",
      "61",
      "38",
      "49"
   ],
   [
      "August 17-21",
      "1989-08-17",
      "31",
      "62",
      "38",
      "57",
      "39",
      "47"
   ],
   [
      "September 21-26",
      "1989-09-21",
      "30",
      "62",
      "41",
      "54",
      "39",
      "47"
   ],
   [
      "October 19-23",
      "1989-10-19",
      "27",
      "66",
      "35",
      "60",
      "43",
      "44"
   ],
   [
      "November 23-27",
      "1989-11-23",
      "28",
      "66",
      "33",
      "63",
      "42",
      "44"
   ],
   [
      "December 27-28",
      "1989-12-27",
      "28",
      "67",
      "33",
      "64",
      "42",
      "47"
   ],
   [
      "January 18-22",
      "1990-01-18",
      "25",
      "69",
      "31",
      "65",
      "43",
      "44"
   ],
   [
      "February 15-19",
      "1990-02-15",
      "19",
      "74",
      "29",
      "66",
      "41",
      "44"
   ],
   [
      "March 15-20",
      "1990-03-15",
      "16",
      "79",
      "20",
      "76",
      "43",
      "43"
   ],
   [
      "April 19-24",
      "1990-04-19",
      "17",
      "77",
      "21",
      "75",
      "39",
      "45"
   ],
   [
      "May 17-21",
      "1990-05-17",
      "23",
      "71",
      "26",
      "70",
      "40",
      "46"
   ],
   [
      "June 13-18",
      "1990-06-13",
      "24",
      "66",
      "30",
      "62",
      "38",
      "46"
   ],
   [
      "July 19-23",
      "1990-07-19",
      "24",
      "70",
      "30",
      "65",
      "37",
      "50"
   ],
   [
      "August 16-20",
      "1990-08-16",
      "25",
      "68",
      "33",
      "63",
      "39",
      "47"
   ],
   [
      "September 20-24",
      "1990-09-20",
      "25",
      "69",
      "36",
      "59",
      "41",
      "43"
   ],
   [
      "October 18-22",
      "1990-10-18",
      "22",
      "70",
      "29",
      "66",
      "45",
      "42"
   ],
   [
      "November 15-19",
      "1990-11-15",
      "22",
      "73",
      "25",
      "71",
      "42",
      "41"
   ]
]
