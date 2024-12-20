var recessionsInfo ={
   "usage" : "recessions",
   "reference" : "Data come from via scraping job of https://www.nber.org/research/data/us-business-cycle-expansions-and-contractions",
   "description" : "Description\nData on U.S. recessions, past to present. Data include information on contraction,\nexpansion, and cycle.",
   "title" : "United States Recessions, 1855-present",
   "parameters" : {
      "p2t" : "peak to trough (in months)",
      "prev_t2p" : "previous trough to this peak (in months)",
      "pfpp" : "peak from previous peak (in months)",
      "trough" : "the year-month of the trough, as a date",
      "troughq" : "the trough quarter",
      "peakq" : "the peak quarter",
      "peak" : "the year-month of the peak, as a date",
      "tfpt" : "trough from previous trough (in months)"
   },
   "format" : "A data frame with 35 observations on the following 8 variables."
}

var recessions = [
   [
      "peak",
      "trough",
      "peakq",
      "troughq",
      "p2t",
      "prev_t2p",
      "tfpt",
      "pfpp",
      "Row"
   ],
   [
      "",
      "1854-12-01",
      "",
      "4",
      "",
      "",
      "",
      "",
      1
   ],
   [
      "1857-06-01",
      "1858-12-01",
      "2",
      "4",
      "18",
      "30",
      "48",
      "",
      2
   ],
   [
      "1860-10-01",
      "1861-06-01",
      "3",
      "3",
      "8",
      "22",
      "30",
      "40",
      3
   ],
   [
      "1865-04-01",
      "1867-12-01",
      "1",
      "1",
      "32",
      "46",
      "78",
      "54",
      4
   ],
   [
      "1869-06-01",
      "1870-12-01",
      "2",
      "4",
      "18",
      "18",
      "36",
      "50",
      5
   ],
   [
      "1873-10-01",
      "1879-03-01",
      "3",
      "1",
      "65",
      "34",
      "99",
      "52",
      6
   ],
   [
      "1182-03-01",
      "1885-05-01",
      "1",
      "2",
      "38",
      "36",
      "74",
      "101",
      7
   ],
   [
      "1887-03-01",
      "1888-04-01",
      "2",
      "1",
      "13",
      "22",
      "35",
      "60",
      8
   ],
   [
      "1890-07-01",
      "1891-05-01",
      "3",
      "2",
      "10",
      "27",
      "37",
      "40",
      9
   ],
   [
      "1893-01-01",
      "1894-06-01",
      "1",
      "2",
      "17",
      "20",
      "37",
      "30",
      10
   ],
   [
      "1895-12-01",
      "1897-06-01",
      "4",
      "2",
      "18",
      "18",
      "36",
      "35",
      11
   ],
   [
      "1899-06-01",
      "1900-12-01",
      "3",
      "4",
      "18",
      "24",
      "42",
      "42",
      12
   ],
   [
      "1902-09-01",
      "1904-08-01",
      "4",
      "3",
      "23",
      "21",
      "44",
      "39",
      13
   ],
   [
      "1907-05-01",
      "1908-06-01",
      "2",
      "2",
      "13",
      "33",
      "46",
      "56",
      14
   ],
   [
      "1910-01-01",
      "1912-01-01",
      "1",
      "4",
      "24",
      "19",
      "43",
      "32",
      15
   ],
   [
      "1913-01-01",
      "1914-12-01",
      "1",
      "4",
      "23",
      "12",
      "35",
      "36",
      16
   ],
   [
      "1918-08-01",
      "1919-03-01",
      "3",
      "1",
      "7",
      "44",
      "51",
      "67",
      17
   ],
   [
      "1920-01-01",
      "1921-07-01",
      "1",
      "3",
      "18",
      "10",
      "28",
      "17",
      18
   ],
   [
      "1923-05-01",
      "1924-07-01",
      "2",
      "3",
      "14",
      "22",
      "36",
      "40",
      19
   ],
   [
      "1926-10-01",
      "1927-11-01",
      "3",
      "4",
      "13",
      "27",
      "40",
      "41",
      20
   ],
   [
      "1929-08-01",
      "1933-03-01",
      "3",
      "1",
      "43",
      "21",
      "64",
      "34",
      21
   ],
   [
      "1937-05-01",
      "1938-06-01",
      "2",
      "2",
      "13",
      "50",
      "63",
      "93",
      22
   ],
   [
      "1945-02-01",
      "1945-10-01",
      "1",
      "4",
      "8",
      "80",
      "88",
      "93",
      23
   ],
   [
      "1948-11-01",
      "1949-10-01",
      "4",
      "4",
      "11",
      "37",
      "48",
      "45",
      24
   ],
   [
      "1953-07-01",
      "1954-05-01",
      "2",
      "2",
      "10",
      "45",
      "55",
      "56",
      25
   ],
   [
      "1957-08-01",
      "1958-04-01",
      "3",
      "2",
      "8",
      "39",
      "47",
      "49",
      26
   ],
   [
      "1960-04-01",
      "1961-02-01",
      "2",
      "1",
      "10",
      "24",
      "34",
      "32",
      27
   ],
   [
      "1969-12-01",
      "1970-11-01",
      "4",
      "4",
      "11",
      "106",
      "117",
      "116",
      28
   ],
   [
      "1973-11-01",
      "1975-03-01",
      "4",
      "1",
      "16",
      "36",
      "52",
      "47",
      29
   ],
   [
      "1980-01-01",
      "1980-07-01",
      "1",
      "3",
      "6",
      "58",
      "64",
      "74",
      30
   ],
   [
      "1981-07-01",
      "1982-11-01",
      "3",
      "4",
      "16",
      "12",
      "28",
      "18",
      31
   ],
   [
      "1990-07-01",
      "1991-03-01",
      "3",
      "1",
      "8",
      "92",
      "100",
      "108",
      32
   ],
   [
      "2001-03-01",
      "2001-11-01",
      "1",
      "4",
      "8",
      "120",
      "128",
      "128",
      33
   ],
   [
      "2007-12-01",
      "2009-06-01",
      "4",
      "2",
      "18",
      "73",
      "91",
      "8",
      34
   ],
   [
      "2020-02-01",
      "",
      "",
      "",
      "",
      "128",
      "",
      "146",
      35
   ]
]
