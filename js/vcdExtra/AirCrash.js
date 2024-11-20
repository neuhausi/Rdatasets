var AirCrashInfo ={
   "description" : "Description\nData on all fatal commercial airplane crashes from 1993&ndash;2015.\nExcludes small planes (less than 6 passengers) and non-commercial (cargo, military, private) aircraft.",
   "usage" : "data(\"AirCrash\")",
   "parameters" : {
      "Fatalities" : "number of fatalities, a numeric vector",
      "Year" : "year, a numeric vector",
      "date" : "date of crash, a Date",
      "Phase" : "phase of the flight, a factor with levels en route landing standing take-off unknown",
      "Cause" : "a factor with levels criminal human error mechanical unknown weather"
   },
   "reference" : "Phase of the flight was cleaned by combining related variants, spelling, etc.",
   "title" : "Air Crash Data",
   "format" : "A data frame with 439 observations on the following 5 variables."
}

var AirCrash = [
   [
      "Phase",
      "Cause",
      "date",
      "Fatalities",
      "Year"
   ],
   [
      "landing",
      "criminal",
      "1993-09-21",
      "27",
      "1993"
   ],
   [
      "landing",
      "criminal",
      "1993-09-22",
      "108",
      "1993"
   ],
   [
      "landing",
      "criminal",
      "1996-11-23",
      "125",
      "1996"
   ],
   [
      "landing",
      "criminal",
      "2002-05-07",
      "112",
      "2002"
   ],
   [
      "landing",
      "unknown",
      "1993-07-01",
      "41",
      "1993"
   ],
   [
      "landing",
      "unknown",
      "1993-07-31",
      "19",
      "1993"
   ],
   [
      "landing",
      "unknown",
      "1994-05-07",
      "8",
      "1994"
   ],
   [
      "landing",
      "unknown",
      "2000-01-13",
      "22",
      "2000"
   ],
   [
      "landing",
      "unknown",
      "2002-05-07",
      "14",
      "2002"
   ],
   [
      "landing",
      "unknown",
      "2004-02-10",
      "43",
      "2004"
   ],
   [
      "landing",
      "unknown",
      "2004-05-14",
      "33",
      "2004"
   ],
   [
      "landing",
      "unknown",
      "2006-09-01",
      "28",
      "2006"
   ],
   [
      "landing",
      "unknown",
      "2007-06-28",
      "6",
      "2007"
   ],
   [
      "landing",
      "unknown",
      "2007-07-17",
      "199",
      "2007"
   ],
   [
      "landing",
      "unknown",
      "2008-04-16",
      "13",
      "2008"
   ],
   [
      "landing",
      "unknown",
      "2009-08-04",
      "1",
      "2009"
   ],
   [
      "landing",
      "unknown",
      "2010-09-13",
      "17",
      "2010"
   ],
   [
      "landing",
      "unknown",
      "2011-09-06",
      "8",
      "2011"
   ],
   [
      "landing",
      "unknown",
      "2012-05-14",
      "15",
      "2012"
   ],
   [
      "landing",
      "unknown",
      "2012-12-22",
      "1",
      "2012"
   ],
   [
      "landing",
      "unknown",
      "2012-12-25",
      "2",
      "2012"
   ],
   [
      "landing",
      "unknown",
      "2013-11-17",
      "50",
      "2013"
   ],
   [
      "landing",
      "mechanical",
      "1993-06-09",
      "9",
      "1993"
   ],
   [
      "landing",
      "mechanical",
      "1993-11-13",
      "12",
      "1993"
   ],
   [
      "landing",
      "mechanical",
      "1994-09-08",
      "132",
      "1994"
   ],
   [
      "landing",
      "mechanical",
      "1995-09-20",
      "6",
      "1995"
   ],
   [
      "landing",
      "mechanical",
      "1995-12-03",
      "71",
      "1995"
   ],
   [
      "landing",
      "mechanical",
      "1996-12-07",
      "18",
      "1996"
   ],
   [
      "landing",
      "mechanical",
      "1998-03-28",
      "22",
      "1998"
   ],
   [
      "landing",
      "mechanical",
      "1999-02-24",
      "61",
      "1999"
   ],
   [
      "landing",
      "mechanical",
      "2000-01-05",
      "2",
      "2000"
   ],
   [
      "landing",
      "mechanical",
      "2001-08-29",
      "4",
      "2001"
   ],
   [
      "landing",
      "mechanical",
      "2002-11-28",
      "1",
      "2002"
   ],
   [
      "landing",
      "mechanical",
      "2003-07-08",
      "116",
      "2003"
   ],
   [
      "landing",
      "mechanical",
      "2005-04-20",
      "3",
      "2005"
   ],
   [
      "landing",
      "mechanical",
      "2006-10-10",
      "4",
      "2006"
   ],
   [
      "landing",
      "mechanical",
      "2006-11-09",
      "1",
      "2006"
   ],
   [
      "landing",
      "mechanical",
      "2009-02-25",
      "9",
      "2009"
   ],
   [
      "landing",
      "mechanical",
      "2010-12-04",
      "2",
      "2010"
   ],
   [
      "landing",
      "mechanical",
      "2011-10-13",
      "28",
      "2011"
   ],
   [
      "landing",
      "mechanical",
      "2012-06-03",
      "163",
      "2012"
   ],
   [
      "landing",
      "weather",
      "1993-02-28",
      "6",
      "1993"
   ],
   [
      "landing",
      "weather",
      "1993-03-19",
      "3",
      "1993"
   ],
   [
      "landing",
      "weather",
      "1993-07-26",
      "68",
      "1993"
   ],
   [
      "landing",
      "weather",
      "1993-10-26",
      "2",
      "1993"
   ],
   [
      "landing",
      "weather",
      "1993-12-13",
      "18",
      "1993"
   ],
   [
      "landing",
      "weather",
      "1994-06-13",
      "9",
      "1994"
   ],
   [
      "landing",
      "weather",
      "1994-06-18",
      "12",
      "1994"
   ],
   [
      "landing",
      "weather",
      "1994-07-01",
      "80",
      "1994"
   ],
   [
      "landing",
      "weather",
      "1994-09-18",
      "5",
      "1994"
   ],
   [
      "landing",
      "weather",
      "1994-10-31",
      "68",
      "1994"
   ],
   [
      "landing",
      "weather",
      "1994-12-29",
      "57",
      "1994"
   ],
   [
      "landing",
      "weather",
      "1995-06-24",
      "16",
      "1995"
   ],
   [
      "landing",
      "weather",
      "1995-09-09",
      "22",
      "1995"
   ],
   [
      "landing",
      "weather",
      "1996-05-03",
      "53",
      "1996"
   ],
   [
      "landing",
      "weather",
      "1996-05-10",
      "16",
      "1996"
   ],
   [
      "landing",
      "weather",
      "1996-07-24",
      "8",
      "1996"
   ],
   [
      "landing",
      "weather",
      "1996-11-01",
      "14",
      "1996"
   ],
   [
      "landing",
      "weather",
      "1997-01-09",
      "29",
      "1997"
   ],
   [
      "landing",
      "weather",
      "1997-02-14",
      "1",
      "1997"
   ],
   [
      "landing",
      "weather",
      "1997-05-08",
      "35",
      "1997"
   ],
   [
      "landing",
      "weather",
      "1997-07-29",
      "1",
      "1997"
   ],
   [
      "landing",
      "weather",
      "1997-08-10",
      "16",
      "1997"
   ],
   [
      "landing",
      "weather",
      "1997-12-09",
      "4",
      "1997"
   ],
   [
      "landing",
      "weather",
      "1998-05-05",
      "75",
      "1998"
   ],
   [
      "landing",
      "weather",
      "1998-11-01",
      "11",
      "1998"
   ],
   [
      "landing",
      "weather",
      "1998-12-11",
      "101",
      "1998"
   ],
   [
      "landing",
      "weather",
      "1999-02-25",
      "4",
      "1999"
   ],
   [
      "landing",
      "weather",
      "1999-12-21",
      "18",
      "1999"
   ],
   [
      "landing",
      "weather",
      "2000-05-17",
      "3",
      "2000"
   ],
   [
      "landing",
      "weather",
      "2000-06-22",
      "49",
      "2000"
   ],
   [
      "landing",
      "weather",
      "2000-10-19",
      "8",
      "2000"
   ],
   [
      "landing",
      "weather",
      "2001-03-17",
      "16",
      "2001"
   ],
   [
      "landing",
      "weather",
      "2001-03-29",
      "18",
      "2001"
   ],
   [
      "landing",
      "weather",
      "2002-01-16",
      "1",
      "2002"
   ],
   [
      "landing",
      "weather",
      "2002-02-12",
      "119",
      "2002"
   ],
   [
      "landing",
      "weather",
      "2002-04-15",
      "129",
      "2002"
   ],
   [
      "landing",
      "weather",
      "2002-08-22",
      "18",
      "2002"
   ],
   [
      "landing",
      "weather",
      "2002-08-29",
      "16",
      "2002"
   ],
   [
      "landing",
      "weather",
      "2002-08-30",
      "23",
      "2002"
   ],
   [
      "landing",
      "weather",
      "2002-12-27",
      "1",
      "2002"
   ],
   [
      "landing",
      "weather",
      "2003-01-08",
      "75",
      "2003"
   ],
   [
      "landing",
      "weather",
      "2004-01-13",
      "37",
      "2004"
   ],
   [
      "landing",
      "weather",
      "2004-11-18",
      "4",
      "2004"
   ],
   [
      "landing",
      "weather",
      "2004-11-30",
      "25",
      "2004"
   ],
   [
      "landing",
      "weather",
      "2005-02-22",
      "2",
      "2005"
   ],
   [
      "landing",
      "weather",
      "2005-09-05",
      "11",
      "2005"
   ],
   [
      "landing",
      "weather",
      "2006-04-16",
      "1",
      "2006"
   ],
   [
      "landing",
      "weather",
      "2010-05-12",
      "103",
      "2010"
   ],
   [
      "landing",
      "weather",
      "2011-01-09",
      "77",
      "2011"
   ],
   [
      "landing",
      "weather",
      "2011-02-10",
      "6",
      "2011"
   ],
   [
      "landing",
      "weather",
      "2011-04-04",
      "32",
      "2011"
   ],
   [
      "landing",
      "weather",
      "2011-07-08",
      "77",
      "2011"
   ],
   [
      "landing",
      "weather",
      "2012-08-19",
      "32",
      "2012"
   ],
   [
      "landing",
      "weather",
      "2013-01-29",
      "21",
      "2013"
   ],
   [
      "landing",
      "weather",
      "2013-10-16",
      "49",
      "2013"
   ],
   [
      "landing",
      "human error",
      "1993-01-06",
      "4",
      "1993"
   ],
   [
      "landing",
      "human error",
      "1993-08-26",
      "24",
      "1993"
   ],
   [
      "landing",
      "human error",
      "1993-09-14",
      "2",
      "1993"
   ],
   [
      "landing",
      "human error",
      "1993-10-27",
      "6",
      "1993"
   ],
   [
      "landing",
      "human error",
      "1993-11-20",
      "116",
      "1993"
   ],
   [
      "landing",
      "human error",
      "1993-12-01",
      "18",
      "1993"
   ],
   [
      "landing",
      "human error",
      "1993-12-09",
      "3",
      "1993"
   ],
   [
      "landing",
      "human error",
      "1993-12-26",
      "35",
      "1993"
   ],
   [
      "landing",
      "human error",
      "1994-01-07",
      "5",
      "1994"
   ],
   [
      "landing",
      "human error",
      "1994-04-04",
      "3",
      "1994"
   ],
   [
      "landing",
      "human error",
      "1994-04-26",
      "264",
      "1994"
   ],
   [
      "landing",
      "human error",
      "1994-06-26",
      "17",
      "1994"
   ],
   [
      "landing",
      "human error",
      "1994-07-02",
      "37",
      "1994"
   ],
   [
      "landing",
      "human error",
      "1994-07-17",
      "6",
      "1994"
   ],
   [
      "landing",
      "human error",
      "1994-09-13",
      "2",
      "1994"
   ],
   [
      "landing",
      "human error",
      "1994-11-05",
      "6",
      "1994"
   ],
   [
      "landing",
      "human error",
      "1994-12-13",
      "15",
      "1994"
   ],
   [
      "landing",
      "human error",
      "1995-01-10",
      "51",
      "1995"
   ],
   [
      "landing",
      "human error",
      "1995-05-01",
      "3",
      "1995"
   ],
   [
      "landing",
      "human error",
      "1995-06-09",
      "4",
      "1995"
   ],
   [
      "landing",
      "human error",
      "1995-07-18",
      "36",
      "1995"
   ],
   [
      "landing",
      "human error",
      "1995-08-09",
      "65",
      "1995"
   ],
   [
      "landing",
      "human error",
      "1995-09-11",
      "3",
      "1995"
   ],
   [
      "landing",
      "human error",
      "1995-09-15",
      "34",
      "1995"
   ],
   [
      "landing",
      "human error",
      "1995-09-21",
      "42",
      "1995"
   ],
   [
      "landing",
      "human error",
      "1995-11-13",
      "11",
      "1995"
   ],
   [
      "landing",
      "human error",
      "1995-12-20",
      "159",
      "1995"
   ],
   [
      "landing",
      "human error",
      "1996-02-29",
      "123",
      "1996"
   ],
   [
      "landing",
      "human error",
      "1996-03-02",
      "9",
      "1996"
   ],
   [
      "landing",
      "human error",
      "1996-04-05",
      "6",
      "1996"
   ],
   [
      "landing",
      "human error",
      "1996-06-21",
      "2",
      "1996"
   ],
   [
      "landing",
      "human error",
      "1996-07-11",
      "9",
      "1996"
   ],
   [
      "landing",
      "human error",
      "1996-08-29",
      "141",
      "1996"
   ],
   [
      "landing",
      "human error",
      "1996-10-26",
      "5",
      "1996"
   ],
   [
      "landing",
      "human error",
      "1996-11-07",
      "144",
      "1996"
   ],
   [
      "landing",
      "human error",
      "1996-11-19",
      "14",
      "1996"
   ],
   [
      "landing",
      "human error",
      "1997-01-31",
      "5",
      "1997"
   ],
   [
      "landing",
      "human error",
      "1997-04-19",
      "15",
      "1997"
   ],
   [
      "landing",
      "human error",
      "1997-06-10",
      "7",
      "1997"
   ],
   [
      "landing",
      "human error",
      "1997-07-30",
      "1",
      "1997"
   ],
   [
      "landing",
      "human error",
      "1997-08-06",
      "228",
      "1997"
   ],
   [
      "landing",
      "human error",
      "1997-09-03",
      "65",
      "1997"
   ],
   [
      "landing",
      "human error",
      "1997-09-06",
      "10",
      "1997"
   ],
   [
      "landing",
      "human error",
      "1997-09-26",
      "234",
      "1997"
   ],
   [
      "landing",
      "human error",
      "1997-12-15",
      "85",
      "1997"
   ],
   [
      "landing",
      "human error",
      "1998-02-16",
      "202",
      "1998"
   ],
   [
      "landing",
      "human error",
      "1998-03-22",
      "3",
      "1998"
   ],
   [
      "landing",
      "human error",
      "1998-06-18",
      "11",
      "1998"
   ],
   [
      "landing",
      "human error",
      "1998-07-27",
      "2",
      "1998"
   ],
   [
      "landing",
      "human error",
      "1998-07-30",
      "14",
      "1998"
   ],
   [
      "landing",
      "human error",
      "1998-08-24",
      "36",
      "1998"
   ],
   [
      "landing",
      "human error",
      "1998-09-25",
      "38",
      "1998"
   ],
   [
      "landing",
      "human error",
      "1999-06-01",
      "11",
      "1999"
   ],
   [
      "landing",
      "human error",
      "1999-07-04",
      "4",
      "1999"
   ],
   [
      "landing",
      "human error",
      "1999-08-12",
      "1",
      "1999"
   ],
   [
      "landing",
      "human error",
      "1999-08-22",
      "3",
      "1999"
   ],
   [
      "landing",
      "human error",
      "1999-08-24",
      "1",
      "1999"
   ],
   [
      "landing",
      "human error",
      "1999-08-26",
      "2",
      "1999"
   ],
   [
      "landing",
      "human error",
      "1999-09-05",
      "15",
      "1999"
   ],
   [
      "landing",
      "human error",
      "1999-12-25",
      "22",
      "1999"
   ],
   [
      "landing",
      "human error",
      "2000-04-19",
      "131",
      "2000"
   ],
   [
      "landing",
      "human error",
      "2000-05-21",
      "19",
      "2000"
   ],
   [
      "landing",
      "human error",
      "2000-06-05",
      "7",
      "2000"
   ],
   [
      "landing",
      "human error",
      "2000-07-17",
      "60",
      "2000"
   ],
   [
      "landing",
      "human error",
      "2000-08-23",
      "143",
      "2000"
   ],
   [
      "landing",
      "human error",
      "2001-02-10",
      "10",
      "2001"
   ],
   [
      "landing",
      "human error",
      "2001-03-24",
      "20",
      "2001"
   ],
   [
      "landing",
      "human error",
      "2001-07-04",
      "145",
      "2001"
   ],
   [
      "landing",
      "human error",
      "2001-11-24",
      "24",
      "2001"
   ],
   [
      "landing",
      "human error",
      "2002-01-28",
      "94",
      "2002"
   ],
   [
      "landing",
      "human error",
      "2002-09-28",
      "3",
      "2002"
   ],
   [
      "landing",
      "human error",
      "2002-10-25",
      "8",
      "2002"
   ],
   [
      "landing",
      "human error",
      "2002-11-06",
      "20",
      "2002"
   ],
   [
      "landing",
      "human error",
      "2003-01-09",
      "46",
      "2003"
   ],
   [
      "landing",
      "human error",
      "2003-05-26",
      "75",
      "2003"
   ],
   [
      "landing",
      "human error",
      "2003-06-22",
      "1",
      "2003"
   ],
   [
      "landing",
      "human error",
      "2004-01-28",
      "1",
      "2004"
   ],
   [
      "landing",
      "human error",
      "2004-10-19",
      "13",
      "2004"
   ],
   [
      "landing",
      "human error",
      "2005-03-16",
      "28",
      "2005"
   ],
   [
      "landing",
      "human error",
      "2005-05-05",
      "10",
      "2005"
   ],
   [
      "landing",
      "human error",
      "2005-05-07",
      "15",
      "2005"
   ],
   [
      "landing",
      "human error",
      "2005-08-23",
      "40",
      "2005"
   ],
   [
      "landing",
      "human error",
      "2005-12-08",
      "1",
      "2005"
   ],
   [
      "landing",
      "human error",
      "2005-12-10",
      "108",
      "2005"
   ],
   [
      "landing",
      "human error",
      "2006-04-24",
      "5",
      "2006"
   ],
   [
      "landing",
      "human error",
      "2006-05-03",
      "113",
      "2006"
   ],
   [
      "landing",
      "human error",
      "2006-06-21",
      "9",
      "2006"
   ],
   [
      "landing",
      "human error",
      "2006-07-09",
      "125",
      "2006"
   ],
   [
      "landing",
      "human error",
      "2007-03-07",
      "21",
      "2007"
   ],
   [
      "landing",
      "human error",
      "2007-03-17",
      "6",
      "2007"
   ],
   [
      "landing",
      "human error",
      "2007-09-16",
      "90",
      "2007"
   ],
   [
      "landing",
      "human error",
      "2007-11-30",
      "57",
      "2007"
   ],
   [
      "landing",
      "human error",
      "2008-01-19",
      "13",
      "2008"
   ],
   [
      "landing",
      "human error",
      "2008-05-30",
      "5",
      "2008"
   ],
   [
      "landing",
      "human error",
      "2008-06-10",
      "30",
      "2008"
   ],
   [
      "landing",
      "human error",
      "2008-07-10",
      "9",
      "2008"
   ],
   [
      "landing",
      "human error",
      "2008-08-24",
      "65",
      "2008"
   ],
   [
      "landing",
      "human error",
      "2008-09-14",
      "88",
      "2008"
   ],
   [
      "landing",
      "human error",
      "2008-10-08",
      "18",
      "2008"
   ],
   [
      "landing",
      "human error",
      "2009-02-12",
      "50",
      "2009"
   ],
   [
      "landing",
      "human error",
      "2009-06-30",
      "152",
      "2009"
   ],
   [
      "landing",
      "human error",
      "2009-07-24",
      "16",
      "2009"
   ],
   [
      "landing",
      "human error",
      "2010-05-22",
      "158",
      "2010"
   ],
   [
      "landing",
      "human error",
      "2010-07-28",
      "152",
      "2010"
   ],
   [
      "landing",
      "human error",
      "2010-08-16",
      "2",
      "2010"
   ],
   [
      "landing",
      "human error",
      "2010-08-24",
      "44",
      "2010"
   ],
   [
      "landing",
      "human error",
      "2011-05-07",
      "25",
      "2011"
   ],
   [
      "landing",
      "human error",
      "2011-06-20",
      "47",
      "2011"
   ],
   [
      "landing",
      "human error",
      "2011-08-20",
      "12",
      "2011"
   ],
   [
      "landing",
      "human error",
      "2011-09-25",
      "19",
      "2011"
   ],
   [
      "landing",
      "human error",
      "2012-04-20",
      "127",
      "2012"
   ],
   [
      "landing",
      "human error",
      "2012-09-12",
      "10",
      "2012"
   ],
   [
      "landing",
      "human error",
      "2013-02-13",
      "5",
      "2013"
   ],
   [
      "landing",
      "human error",
      "2013-07-06",
      "2",
      "2013"
   ],
   [
      "en route",
      "criminal",
      "1994-07-19",
      "21",
      "1994"
   ],
   [
      "en route",
      "criminal",
      "1994-12-10",
      "1",
      "1994"
   ],
   [
      "en route",
      "criminal",
      "1997-07-09",
      "1",
      "1997"
   ],
   [
      "en route",
      "criminal",
      "1997-12-19",
      "104",
      "1997"
   ],
   [
      "en route",
      "criminal",
      "1998-09-29",
      "55",
      "1998"
   ],
   [
      "en route",
      "criminal",
      "1998-10-10",
      "41",
      "1998"
   ],
   [
      "en route",
      "criminal",
      "1999-12-24",
      "1",
      "1999"
   ],
   [
      "en route",
      "criminal",
      "2000-09-27",
      "1",
      "2000"
   ],
   [
      "en route",
      "criminal",
      "2001-09-11",
      "44",
      "2001"
   ],
   [
      "en route",
      "criminal",
      "2001-09-11",
      "189",
      "2001"
   ],
   [
      "en route",
      "criminal",
      "2001-09-11",
      "965",
      "2001"
   ],
   [
      "en route",
      "criminal",
      "2001-09-11",
      "1692",
      "2001"
   ],
   [
      "en route",
      "criminal",
      "2004-08-24",
      "44",
      "2004"
   ],
   [
      "en route",
      "criminal",
      "2004-08-24",
      "46",
      "2004"
   ],
   [
      "en route",
      "criminal",
      "2012-06-29",
      "2",
      "2012"
   ],
   [
      "en route",
      "criminal",
      "2014-07-17",
      "298",
      "2014"
   ],
   [
      "en route",
      "unknown",
      "1997-06-06",
      "23",
      "1997"
   ],
   [
      "en route",
      "unknown",
      "1998-08-21",
      "18",
      "1998"
   ],
   [
      "en route",
      "unknown",
      "1999-12-07",
      "17",
      "1999"
   ],
   [
      "en route",
      "unknown",
      "1999-12-25",
      "10",
      "1999"
   ],
   [
      "en route",
      "unknown",
      "2000-03-17",
      "10",
      "2000"
   ],
   [
      "en route",
      "unknown",
      "2003-03-27",
      "4",
      "2003"
   ],
   [
      "en route",
      "unknown",
      "2003-07-13",
      "4",
      "2003"
   ],
   [
      "en route",
      "unknown",
      "2003-07-19",
      "14",
      "2003"
   ],
   [
      "en route",
      "unknown",
      "2004-01-03",
      "148",
      "2004"
   ],
   [
      "en route",
      "unknown",
      "2005-04-12",
      "17",
      "2005"
   ],
   [
      "en route",
      "unknown",
      "2005-05-25",
      "27",
      "2005"
   ],
   [
      "en route",
      "unknown",
      "2005-07-16",
      "60",
      "2005"
   ],
   [
      "en route",
      "unknown",
      "2005-09-09",
      "13",
      "2005"
   ],
   [
      "en route",
      "unknown",
      "2006-08-03",
      "17",
      "2006"
   ],
   [
      "en route",
      "unknown",
      "2006-11-17",
      "12",
      "2006"
   ],
   [
      "en route",
      "unknown",
      "2007-06-21",
      "1",
      "2007"
   ],
   [
      "en route",
      "unknown",
      "2007-06-25",
      "22",
      "2007"
   ],
   [
      "en route",
      "unknown",
      "2008-04-03",
      "19",
      "2008"
   ],
   [
      "en route",
      "unknown",
      "2009-07-15",
      "168",
      "2009"
   ],
   [
      "en route",
      "unknown",
      "2011-02-14",
      "14",
      "2011"
   ],
   [
      "en route",
      "unknown",
      "2011-09-20",
      "3",
      "2011"
   ],
   [
      "en route",
      "unknown",
      "2011-09-29",
      "18",
      "2011"
   ],
   [
      "en route",
      "unknown",
      "2013-11-29",
      "33",
      "2013"
   ],
   [
      "en route",
      "unknown",
      "2014-03-08",
      "239",
      "2014"
   ],
   [
      "en route",
      "unknown",
      "2015-03-24",
      "150",
      "2015"
   ],
   [
      "en route",
      "mechanical",
      "1993-04-06",
      "2",
      "1993"
   ],
   [
      "en route",
      "mechanical",
      "1993-12-03",
      "7",
      "1993"
   ],
   [
      "en route",
      "mechanical",
      "1994-06-06",
      "160",
      "1994"
   ],
   [
      "en route",
      "mechanical",
      "1994-10-12",
      "66",
      "1994"
   ],
   [
      "en route",
      "mechanical",
      "1995-05-24",
      "12",
      "1995"
   ],
   [
      "en route",
      "mechanical",
      "1995-07-12",
      "15",
      "1995"
   ],
   [
      "en route",
      "mechanical",
      "1995-08-21",
      "9",
      "1995"
   ],
   [
      "en route",
      "mechanical",
      "1995-12-07",
      "98",
      "1995"
   ],
   [
      "en route",
      "mechanical",
      "1996-05-11",
      "110",
      "1996"
   ],
   [
      "en route",
      "mechanical",
      "1996-07-17",
      "230",
      "1996"
   ],
   [
      "en route",
      "mechanical",
      "1997-07-11",
      "44",
      "1997"
   ],
   [
      "en route",
      "mechanical",
      "1997-07-17",
      "28",
      "1997"
   ],
   [
      "en route",
      "mechanical",
      "1998-09-02",
      "24",
      "1998"
   ],
   [
      "en route",
      "mechanical",
      "1998-09-02",
      "229",
      "1998"
   ],
   [
      "en route",
      "mechanical",
      "2000-09-04",
      "8",
      "2000"
   ],
   [
      "en route",
      "mechanical",
      "2001-01-25",
      "24",
      "2001"
   ],
   [
      "en route",
      "mechanical",
      "2001-09-15",
      "1",
      "2001"
   ],
   [
      "en route",
      "mechanical",
      "2002-03-14",
      "16",
      "2002"
   ],
   [
      "en route",
      "mechanical",
      "2002-05-04",
      "149",
      "2002"
   ],
   [
      "en route",
      "mechanical",
      "2002-05-25",
      "225",
      "2002"
   ],
   [
      "en route",
      "mechanical",
      "2002-11-11",
      "19",
      "2002"
   ],
   [
      "en route",
      "mechanical",
      "2003-08-24",
      "21",
      "2003"
   ],
   [
      "en route",
      "mechanical",
      "2004-06-08",
      "19",
      "2004"
   ],
   [
      "en route",
      "mechanical",
      "2004-06-26",
      "2",
      "2004"
   ],
   [
      "en route",
      "mechanical",
      "2005-12-23",
      "23",
      "2005"
   ],
   [
      "en route",
      "mechanical",
      "2008-01-04",
      "14",
      "2008"
   ],
   [
      "en route",
      "mechanical",
      "2008-05-02",
      "21",
      "2008"
   ],
   [
      "en route",
      "mechanical",
      "2009-02-07",
      "24",
      "2009"
   ],
   [
      "en route",
      "mechanical",
      "2011-05-18",
      "22",
      "2011"
   ],
   [
      "en route",
      "weather",
      "1993-01-31",
      "14",
      "1993"
   ],
   [
      "en route",
      "weather",
      "1993-03-23",
      "6",
      "1993"
   ],
   [
      "en route",
      "weather",
      "1993-06-17",
      "41",
      "1993"
   ],
   [
      "en route",
      "weather",
      "1994-06-23",
      "7",
      "1994"
   ],
   [
      "en route",
      "weather",
      "1994-11-22",
      "7",
      "1994"
   ],
   [
      "en route",
      "weather",
      "1995-01-10",
      "14",
      "1995"
   ],
   [
      "en route",
      "weather",
      "1995-06-16",
      "13",
      "1995"
   ],
   [
      "en route",
      "weather",
      "1995-11-08",
      "53",
      "1995"
   ],
   [
      "en route",
      "weather",
      "1998-03-19",
      "45",
      "1998"
   ],
   [
      "en route",
      "weather",
      "1999-04-08",
      "5",
      "1999"
   ],
   [
      "en route",
      "weather",
      "1999-04-07",
      "6",
      "1999"
   ],
   [
      "en route",
      "weather",
      "1999-05-08",
      "7",
      "1999"
   ],
   [
      "en route",
      "weather",
      "1999-08-07",
      "18",
      "1999"
   ],
   [
      "en route",
      "weather",
      "1999-12-11",
      "35",
      "1999"
   ],
   [
      "en route",
      "weather",
      "2000-07-08",
      "19",
      "2000"
   ],
   [
      "en route",
      "weather",
      "2001-05-17",
      "30",
      "2001"
   ],
   [
      "en route",
      "weather",
      "2002-05-25",
      "6",
      "2002"
   ],
   [
      "en route",
      "weather",
      "2002-07-17",
      "4",
      "2002"
   ],
   [
      "en route",
      "weather",
      "2005-02-03",
      "104",
      "2005"
   ],
   [
      "en route",
      "weather",
      "2010-05-17",
      "44",
      "2010"
   ],
   [
      "en route",
      "weather",
      "2014-02-16",
      "18",
      "2014"
   ],
   [
      "en route",
      "weather",
      "2014-07-23",
      "48",
      "2014"
   ],
   [
      "en route",
      "weather",
      "2014-07-24",
      "116",
      "2014"
   ],
   [
      "en route",
      "weather",
      "2014-12-28",
      "162",
      "2014"
   ],
   [
      "en route",
      "human error",
      "1993-02-08",
      "131",
      "1993"
   ],
   [
      "en route",
      "human error",
      "1993-04-23",
      "32",
      "1993"
   ],
   [
      "en route",
      "human error",
      "1993-05-19",
      "132",
      "1993"
   ],
   [
      "en route",
      "human error",
      "1994-01-03",
      "125",
      "1994"
   ],
   [
      "en route",
      "human error",
      "1994-02-25",
      "31",
      "1994"
   ],
   [
      "en route",
      "human error",
      "1994-03-23",
      "75",
      "1994"
   ],
   [
      "en route",
      "human error",
      "1994-04-25",
      "10",
      "1994"
   ],
   [
      "en route",
      "human error",
      "1994-08-21",
      "44",
      "1994"
   ],
   [
      "en route",
      "human error",
      "1994-09-26",
      "28",
      "1994"
   ],
   [
      "en route",
      "human error",
      "1994-12-17",
      "28",
      "1994"
   ],
   [
      "en route",
      "human error",
      "1995-03-31",
      "60",
      "1995"
   ],
   [
      "en route",
      "human error",
      "1995-08-09",
      "10",
      "1995"
   ],
   [
      "en route",
      "human error",
      "1995-08-14",
      "8",
      "1995"
   ],
   [
      "en route",
      "human error",
      "1995-12-07",
      "20",
      "1995"
   ],
   [
      "en route",
      "human error",
      "1996-02-06",
      "189",
      "1996"
   ],
   [
      "en route",
      "human error",
      "1996-10-02",
      "70",
      "1996"
   ],
   [
      "en route",
      "human error",
      "1996-11-12",
      "37",
      "1996"
   ],
   [
      "en route",
      "human error",
      "1996-11-12",
      "312",
      "1996"
   ],
   [
      "en route",
      "human error",
      "1996-11-30",
      "14",
      "1996"
   ],
   [
      "en route",
      "human error",
      "1997-01-07",
      "3",
      "1997"
   ],
   [
      "en route",
      "human error",
      "1997-03-18",
      "50",
      "1997"
   ],
   [
      "en route",
      "human error",
      "1997-09-12",
      "19",
      "1997"
   ],
   [
      "en route",
      "human error",
      "1997-10-10",
      "74",
      "1997"
   ],
   [
      "en route",
      "human error",
      "1997-12-17",
      "70",
      "1997"
   ],
   [
      "en route",
      "human error",
      "1997-12-28",
      "1",
      "1997"
   ],
   [
      "en route",
      "human error",
      "1998-02-02",
      "104",
      "1998"
   ],
   [
      "en route",
      "human error",
      "1998-03-18",
      "13",
      "1998"
   ],
   [
      "en route",
      "human error",
      "1998-04-20",
      "53",
      "1998"
   ],
   [
      "en route",
      "human error",
      "1998-05-26",
      "28",
      "1998"
   ],
   [
      "en route",
      "human error",
      "1998-07-29",
      "12",
      "1998"
   ],
   [
      "en route",
      "human error",
      "1999-06-17",
      "17",
      "1999"
   ],
   [
      "en route",
      "human error",
      "1999-07-24",
      "17",
      "1999"
   ],
   [
      "en route",
      "human error",
      "1999-10-31",
      "217",
      "1999"
   ],
   [
      "en route",
      "human error",
      "1999-11-09",
      "18",
      "1999"
   ],
   [
      "en route",
      "human error",
      "1999-11-12",
      "24",
      "1999"
   ],
   [
      "en route",
      "human error",
      "2000-01-10",
      "10",
      "2000"
   ],
   [
      "en route",
      "human error",
      "2000-01-15",
      "5",
      "2000"
   ],
   [
      "en route",
      "human error",
      "2000-01-31",
      "88",
      "2000"
   ],
   [
      "en route",
      "human error",
      "2000-07-27",
      "25",
      "2000"
   ],
   [
      "en route",
      "human error",
      "2001-08-23",
      "4",
      "2001"
   ],
   [
      "en route",
      "human error",
      "2001-10-04",
      "78",
      "2001"
   ],
   [
      "en route",
      "human error",
      "2001-11-12",
      "265",
      "2001"
   ],
   [
      "en route",
      "human error",
      "2001-11-19",
      "27",
      "2001"
   ],
   [
      "en route",
      "human error",
      "2001-12-16",
      "16",
      "2001"
   ],
   [
      "en route",
      "human error",
      "2002-01-17",
      "26",
      "2002"
   ],
   [
      "en route",
      "human error",
      "2002-07-01",
      "69",
      "2002"
   ],
   [
      "en route",
      "human error",
      "2002-12-23",
      "44",
      "2002"
   ],
   [
      "en route",
      "human error",
      "2004-11-30",
      "2",
      "2004"
   ],
   [
      "en route",
      "human error",
      "2005-08-06",
      "16",
      "2005"
   ],
   [
      "en route",
      "human error",
      "2005-08-14",
      "121",
      "2005"
   ],
   [
      "en route",
      "human error",
      "2005-08-16",
      "160",
      "2005"
   ],
   [
      "en route",
      "human error",
      "2005-10-22",
      "117",
      "2005"
   ],
   [
      "en route",
      "human error",
      "2006-03-31",
      "19",
      "2006"
   ],
   [
      "en route",
      "human error",
      "2006-08-22",
      "170",
      "2006"
   ],
   [
      "en route",
      "human error",
      "2006-09-29",
      "154",
      "2006"
   ],
   [
      "en route",
      "human error",
      "2007-01-01",
      "102",
      "2007"
   ],
   [
      "en route",
      "human error",
      "2007-05-05",
      "114",
      "2007"
   ],
   [
      "en route",
      "human error",
      "2007-10-08",
      "17",
      "2007"
   ],
   [
      "en route",
      "human error",
      "2008-02-21",
      "46",
      "2008"
   ],
   [
      "en route",
      "human error",
      "2009-06-01",
      "228",
      "2009"
   ],
   [
      "en route",
      "human error",
      "2009-08-02",
      "15",
      "2009"
   ],
   [
      "en route",
      "human error",
      "2010-11-04",
      "68",
      "2010"
   ],
   [
      "en route",
      "human error",
      "2011-07-11",
      "7",
      "2011"
   ],
   [
      "take-off",
      "criminal",
      "1995-01-28",
      "2",
      "1995"
   ],
   [
      "take-off",
      "unknown",
      "1993-06-28",
      "3",
      "1993"
   ],
   [
      "take-off",
      "unknown",
      "1996-09-18",
      "5",
      "1996"
   ],
   [
      "take-off",
      "unknown",
      "2000-02-08",
      "1",
      "2000"
   ],
   [
      "take-off",
      "unknown",
      "2008-04-15",
      "40",
      "2008"
   ],
   [
      "take-off",
      "unknown",
      "2012-08-22",
      "4",
      "2012"
   ],
   [
      "take-off",
      "unknown",
      "2013-07-07",
      "10",
      "2013"
   ],
   [
      "take-off",
      "unknown",
      "2014-08-10",
      "39",
      "2014"
   ],
   [
      "take-off",
      "unknown",
      "2015-02-04",
      "43",
      "2015"
   ],
   [
      "take-off",
      "mechanical",
      "1993-01-09",
      "15",
      "1993"
   ],
   [
      "take-off",
      "mechanical",
      "1993-07-23",
      "55",
      "1993"
   ],
   [
      "take-off",
      "mechanical",
      "1994-05-28",
      "7",
      "1994"
   ],
   [
      "take-off",
      "mechanical",
      "1994-09-26",
      "1",
      "1994"
   ],
   [
      "take-off",
      "mechanical",
      "1995-01-17",
      "2",
      "1995"
   ],
   [
      "take-off",
      "mechanical",
      "1995-01-20",
      "3",
      "1995"
   ],
   [
      "take-off",
      "mechanical",
      "1995-12-05",
      "52",
      "1995"
   ],
   [
      "take-off",
      "mechanical",
      "1996-02-12",
      "10",
      "1996"
   ],
   [
      "take-off",
      "mechanical",
      "1996-10-31",
      "103",
      "1996"
   ],
   [
      "take-off",
      "mechanical",
      "1997-12-13",
      "10",
      "1997"
   ],
   [
      "take-off",
      "mechanical",
      "1998-01-27",
      "16",
      "1998"
   ],
   [
      "take-off",
      "mechanical",
      "1998-07-30",
      "9",
      "1998"
   ],
   [
      "take-off",
      "mechanical",
      "2000-03-25",
      "3",
      "2000"
   ],
   [
      "take-off",
      "mechanical",
      "2000-07-25",
      "113",
      "2000"
   ],
   [
      "take-off",
      "mechanical",
      "2000-11-07",
      "2",
      "2000"
   ],
   [
      "take-off",
      "mechanical",
      "2000-11-15",
      "57",
      "2000"
   ],
   [
      "take-off",
      "mechanical",
      "2001-09-12",
      "19",
      "2001"
   ],
   [
      "take-off",
      "mechanical",
      "2003-03-06",
      "102",
      "2003"
   ],
   [
      "take-off",
      "mechanical",
      "2003-11-08",
      "2",
      "2003"
   ],
   [
      "take-off",
      "mechanical",
      "2005-03-26",
      "9",
      "2005"
   ],
   [
      "take-off",
      "mechanical",
      "2005-06-02",
      "7",
      "2005"
   ],
   [
      "take-off",
      "mechanical",
      "2007-08-09",
      "20",
      "2007"
   ],
   [
      "take-off",
      "mechanical",
      "2011-07-13",
      "16",
      "2011"
   ],
   [
      "take-off",
      "mechanical",
      "2012-09-28",
      "19",
      "2012"
   ],
   [
      "take-off",
      "weather",
      "1995-07-17",
      "1",
      "1995"
   ],
   [
      "take-off",
      "weather",
      "2000-03-09",
      "9",
      "2000"
   ],
   [
      "take-off",
      "weather",
      "2004-11-21",
      "55",
      "2004"
   ],
   [
      "take-off",
      "human error",
      "1993-03-05",
      "83",
      "1993"
   ],
   [
      "take-off",
      "human error",
      "1993-04-26",
      "55",
      "1993"
   ],
   [
      "take-off",
      "human error",
      "1993-08-28",
      "82",
      "1993"
   ],
   [
      "take-off",
      "human error",
      "1993-11-10",
      "7",
      "1993"
   ],
   [
      "take-off",
      "human error",
      "1994-09-29",
      "8",
      "1994"
   ],
   [
      "take-off",
      "human error",
      "1995-12-13",
      "49",
      "1995"
   ],
   [
      "take-off",
      "human error",
      "1996-01-08",
      "237",
      "1996"
   ],
   [
      "take-off",
      "human error",
      "1996-06-13",
      "3",
      "1996"
   ],
   [
      "take-off",
      "human error",
      "1996-07-06",
      "2",
      "1996"
   ],
   [
      "take-off",
      "human error",
      "1996-11-14",
      "14",
      "1996"
   ],
   [
      "take-off",
      "human error",
      "1998-08-29",
      "80",
      "1998"
   ],
   [
      "take-off",
      "human error",
      "1999-08-31",
      "65",
      "1999"
   ],
   [
      "take-off",
      "human error",
      "2000-01-30",
      "169",
      "2000"
   ],
   [
      "take-off",
      "human error",
      "2000-10-31",
      "83",
      "2000"
   ],
   [
      "take-off",
      "human error",
      "2001-09-18",
      "8",
      "2001"
   ],
   [
      "take-off",
      "human error",
      "2001-10-08",
      "114",
      "2001"
   ],
   [
      "take-off",
      "human error",
      "2003-01-08",
      "21",
      "2003"
   ],
   [
      "take-off",
      "human error",
      "2003-12-16",
      "2",
      "2003"
   ],
   [
      "take-off",
      "human error",
      "2003-12-25",
      "141",
      "2003"
   ],
   [
      "take-off",
      "human error",
      "2004-11-28",
      "3",
      "2004"
   ],
   [
      "take-off",
      "human error",
      "2005-09-05",
      "149",
      "2005"
   ],
   [
      "take-off",
      "human error",
      "2005-12-19",
      "20",
      "2005"
   ],
   [
      "take-off",
      "human error",
      "2006-07-10",
      "45",
      "2006"
   ],
   [
      "take-off",
      "human error",
      "2006-08-27",
      "49",
      "2006"
   ],
   [
      "take-off",
      "human error",
      "2006-10-29",
      "96",
      "2006"
   ],
   [
      "take-off",
      "human error",
      "2008-08-20",
      "154",
      "2008"
   ],
   [
      "take-off",
      "human error",
      "2010-01-25",
      "90",
      "2010"
   ],
   [
      "take-off",
      "human error",
      "2011-09-07",
      "44",
      "2011"
   ],
   [
      "take-off",
      "human error",
      "2012-04-02",
      "33",
      "2012"
   ],
   [
      "standing",
      "criminal",
      "1993-09-23",
      "1",
      "1993"
   ],
   [
      "standing",
      "criminal",
      "1994-12-26",
      "7",
      "1994"
   ],
   [
      "standing",
      "mechanical",
      "2009-11-12",
      "1",
      "2009"
   ],
   [
      "standing",
      "mechanical",
      "2011-01-01",
      "3",
      "2011"
   ],
   [
      "unknown",
      "unknown",
      "2000-08-12",
      "27",
      "2000"
   ],
   [
      "unknown",
      "weather",
      "2004-05-11",
      "1",
      "2004"
   ],
   [
      "unknown",
      "human error",
      "1995-12-18",
      "141",
      "1995"
   ]
]
