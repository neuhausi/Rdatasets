var PyxInfo ={
   "format" : "A frequency data frame with 72 observations on the following 4 variables giving the\ndistribution of 10,000 sovereigns, classified according to the Bags in which\nthey were collected and the Deviation from the standard weight.",
   "title" : "Trial of the Pyx",
   "reference" : "Bags 1-4 were selected as \"near to standard\", bags 5-7 as below standard, bags 8-10 as above standard.\nThis classification is reflected in Group.",
   "parameters" : {
      "Deviation" : "an ordered factor with levels Below -R < (-R to -.2) < (-.2 to -.l) < (-.1 to 0) < (0 to .l) < (.1 to .2) < (.2 to R) < Above R",
      "Group" : "an ordered factor with levels below std < near std < above std",
      "count" : "number of sovereigns",
      "Bags" : "an ordered factor with levels 1 and 2 < 3 < 4 < 5 < 6 < 7 < 8 < 9 < 10"
   },
   "usage" : "data(Pyx)",
   "description" : "Description\nStigler (1997, 1999) recounts the history of one of the oldest continuous schemes of\nsampling inspection carried out by the Royal Mint in London for about eight centuries.\nThe Trial of the Pyx was the final, ceremonial stage in a process designed to ensure that\nthe weight and quality of gold and silver coins from the mint met the standards for\ncoinage.\nAt regular intervals, coins would be taken from production and deposited into\na box called the Pyx.\nWhen a Trial of the Pyx was called, the contents of the Pyx would be counted, weighed\nand assayed for content, and the results would be compared with the standard set \nfor the Royal Mint.\nThe data frame Pyx gives the results for the year 1848 (Great Britain, 1848) in which 10,000\ngold sovereigns were assayed. The coins in each bag were classified according to the\ndeviation from the standard content of gold for each coin, called the Remedy,\nR = 123 * (12/5760) = .25625, in grains, for a single sovereign."
}

var Pyx = [
   [
      "Bags",
      "Group",
      "Deviation",
      "count"
   ],
   [
      "1 and 2",
      "near std",
      "Below -R",
      "34"
   ],
   [
      "3",
      "near std",
      "Below -R",
      "11"
   ],
   [
      "4",
      "near std",
      "Below -R",
      "20"
   ],
   [
      "5",
      "below std",
      "Below -R",
      "30"
   ],
   [
      "6",
      "below std",
      "Below -R",
      "32"
   ],
   [
      "7",
      "below std",
      "Below -R",
      "47"
   ],
   [
      "8",
      "above std",
      "Below -R",
      "11"
   ],
   [
      "9",
      "above std",
      "Below -R",
      "10"
   ],
   [
      "10",
      "above std",
      "Below -R",
      "14"
   ],
   [
      "1 and 2",
      "near std",
      "(-R to -.2)",
      "57"
   ],
   [
      "3",
      "near std",
      "(-R to -.2)",
      "17"
   ],
   [
      "4",
      "near std",
      "(-R to -.2)",
      "22"
   ],
   [
      "5",
      "below std",
      "(-R to -.2)",
      "102"
   ],
   [
      "6",
      "below std",
      "(-R to -.2)",
      "27"
   ],
   [
      "7",
      "below std",
      "(-R to -.2)",
      "65"
   ],
   [
      "8",
      "above std",
      "(-R to -.2)",
      "21"
   ],
   [
      "9",
      "above std",
      "(-R to -.2)",
      "38"
   ],
   [
      "10",
      "above std",
      "(-R to -.2)",
      "13"
   ],
   [
      "1 and 2",
      "near std",
      "(-.2 to -.l)",
      "172"
   ],
   [
      "3",
      "near std",
      "(-.2 to -.l)",
      "100"
   ],
   [
      "4",
      "near std",
      "(-.2 to -.l)",
      "135"
   ],
   [
      "5",
      "below std",
      "(-.2 to -.l)",
      "107"
   ],
   [
      "6",
      "below std",
      "(-.2 to -.l)",
      "267"
   ],
   [
      "7",
      "below std",
      "(-.2 to -.l)",
      "141"
   ],
   [
      "8",
      "above std",
      "(-.2 to -.l)",
      "110"
   ],
   [
      "9",
      "above std",
      "(-.2 to -.l)",
      "103"
   ],
   [
      "10",
      "above std",
      "(-.2 to -.l)",
      "126"
   ],
   [
      "1 and 2",
      "near std",
      "(-.1 to 0)",
      "630"
   ],
   [
      "3",
      "near std",
      "(-.1 to 0)",
      "412"
   ],
   [
      "4",
      "near std",
      "(-.1 to 0)",
      "350"
   ],
   [
      "5",
      "below std",
      "(-.1 to 0)",
      "289"
   ],
   [
      "6",
      "below std",
      "(-.1 to 0)",
      "210"
   ],
   [
      "7",
      "below std",
      "(-.1 to 0)",
      "380"
   ],
   [
      "8",
      "above std",
      "(-.1 to 0)",
      "215"
   ],
   [
      "9",
      "above std",
      "(-.1 to 0)",
      "228"
   ],
   [
      "10",
      "above std",
      "(-.1 to 0)",
      "309"
   ],
   [
      "1 and 2",
      "near std",
      "(0 to .l)",
      "597"
   ],
   [
      "3",
      "near std",
      "(0 to .l)",
      "172"
   ],
   [
      "4",
      "near std",
      "(0 to .l)",
      "184"
   ],
   [
      "5",
      "below std",
      "(0 to .l)",
      "209"
   ],
   [
      "6",
      "below std",
      "(0 to .l)",
      "236"
   ],
   [
      "7",
      "below std",
      "(0 to .l)",
      "157"
   ],
   [
      "8",
      "above std",
      "(0 to .l)",
      "361"
   ],
   [
      "9",
      "above std",
      "(0 to .l)",
      "425"
   ],
   [
      "10",
      "above std",
      "(0 to .l)",
      "290"
   ],
   [
      "1 and 2",
      "near std",
      "(.1 to .2)",
      "366"
   ],
   [
      "3",
      "near std",
      "(.1 to .2)",
      "218"
   ],
   [
      "4",
      "near std",
      "(.1 to .2)",
      "222"
   ],
   [
      "5",
      "below std",
      "(.1 to .2)",
      "184"
   ],
   [
      "6",
      "below std",
      "(.1 to .2)",
      "144"
   ],
   [
      "7",
      "below std",
      "(.1 to .2)",
      "135"
   ],
   [
      "8",
      "above std",
      "(.1 to .2)",
      "156"
   ],
   [
      "9",
      "above std",
      "(.1 to .2)",
      "140"
   ],
   [
      "10",
      "above std",
      "(.1 to .2)",
      "168"
   ],
   [
      "1 and 2",
      "near std",
      "(.2 to R)",
      "116"
   ],
   [
      "3",
      "near std",
      "(.2 to R)",
      "57"
   ],
   [
      "4",
      "near std",
      "(.2 to R)",
      "50"
   ],
   [
      "5",
      "below std",
      "(.2 to R)",
      "50"
   ],
   [
      "6",
      "below std",
      "(.2 to R)",
      "56"
   ],
   [
      "7",
      "below std",
      "(.2 to R)",
      "50"
   ],
   [
      "8",
      "above std",
      "(.2 to R)",
      "71"
   ],
   [
      "9",
      "above std",
      "(.2 to R)",
      "36"
   ],
   [
      "10",
      "above std",
      "(.2 to R)",
      "50"
   ],
   [
      "1 and 2",
      "near std",
      "Above R",
      "28"
   ],
   [
      "3",
      "near std",
      "Above R",
      "13"
   ],
   [
      "4",
      "near std",
      "Above R",
      "17"
   ],
   [
      "5",
      "below std",
      "Above R",
      "29"
   ],
   [
      "6",
      "below std",
      "Above R",
      "28"
   ],
   [
      "7",
      "below std",
      "Above R",
      "25"
   ],
   [
      "8",
      "above std",
      "Above R",
      "55"
   ],
   [
      "9",
      "above std",
      "Above R",
      "20"
   ],
   [
      "10",
      "above std",
      "Above R",
      "30"
   ]
]
