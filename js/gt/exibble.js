var exibbleInfo ={
   "description" : "Description\nThis tibble contains data of a few different classes, which makes it\nwell-suited for quick experimentation with the functions in this package. It\ncontains only eight rows with numeric, character, and factor columns. The\nlast 4 rows contain NA values in the majority of this tibble's columns (1\nmissing value per column). The date, time, and datetime columns are\ncharacter-based dates/times in the familiar ISO 8601 format. The row and\ngroup columns provide for unique rownames and two groups (grp_a and\ngrp_b) for experimenting with the gt() function's rowname_col and\ngroupname_col arguments.",
   "usage" : "exibble",
   "parameters" : {
      "fctr" : "A factor column with numbers from 1 to 8, written out.",
      "currency" : "A numeric column that is useful for testing currency-based\nformatting.",
      "char" : "A character column composed of names of fruits from a to h.",
      "date, time, datetime" : "Character columns with dates, times, and\ndatetimes.",
      "row" : "A character column in the format row_X which can be useful for\ntesting with row labels in a table stub.",
      "group" : "A character column with four grp_a values and four grp_b\nvalues which can be useful for testing tables that contain row groups.",
      "num" : "A numeric column ordered with increasingly larger values."
   },
   "format" : "A tibble with 8 rows and 9 variables:",
   "title" : "A toy example tibble for testing with gt: exibble",
   "reference" : "Here is the entirety of the exibble table."
}

var exibble = [
   [
      "num",
      "char",
      "fctr",
      "date",
      "time",
      "datetime",
      "currency",
      "row",
      "group",
      "Row"
   ],
   [
      "0.1111",
      "apricot",
      "one",
      "2015-01-15",
      "13:35",
      "2018-01-01 02:22",
      "49.95",
      "row_1",
      "grp_a",
      1
   ],
   [
      "2.222",
      "banana",
      "two",
      "2015-02-15",
      "14:40",
      "2018-02-02 14:33",
      "17.95",
      "row_2",
      "grp_a",
      2
   ],
   [
      "33.33",
      "coconut",
      "three",
      "2015-03-15",
      "15:45",
      "2018-03-03 03:44",
      "1.39",
      "row_3",
      "grp_a",
      3
   ],
   [
      "444.4",
      "durian",
      "four",
      "2015-04-15",
      "16:50",
      "2018-04-04 15:55",
      "65100",
      "row_4",
      "grp_a",
      4
   ],
   [
      "5550",
      "",
      "five",
      "2015-05-15",
      "17:55",
      "2018-05-05 04:00",
      "1325.81",
      "row_5",
      "grp_b",
      5
   ],
   [
      "",
      "fig",
      "six",
      "2015-06-15",
      "",
      "2018-06-06 16:11",
      "13.255",
      "row_6",
      "grp_b",
      6
   ],
   [
      "777000",
      "grapefruit",
      "seven",
      "",
      "19:10",
      "2018-07-07 05:22",
      "",
      "row_7",
      "grp_b",
      7
   ],
   [
      "8880000",
      "honeydew",
      "eight",
      "2015-08-15",
      "20:20",
      "",
      "0.44",
      "row_8",
      "grp_b",
      8
   ]
]
