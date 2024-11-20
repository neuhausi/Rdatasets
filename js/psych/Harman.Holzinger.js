var Harman.HolzingerInfo ={
   "parameters" : {
      "Harman.Holzinger" : " 9 x 9 correlation matrix of ability tests, N = 696.",
      "Harman.8   8 physical measures" : null,
      "Harman.5" : "  12 census tracts for 5 socioeconomic data (Harman p 14)",
      "Harman.Burt" : " a 8 x 8 correlation matrix of &ldquo;emotional\" items. N = 172",
      "Harman.political" : "  p 166."
   },
   "reference" : "Harman (1967 p 164 and p 244.)",
   "usage" : "data(Harman)  \ndata(Harman.5)\ndata(Harman.political)\ndata(Harman.8)",
   "description" : "Description\nFive classic data sets reported by Harman (1967) are 9 psychological (cognitive) variables taken from Holzinger  and 8 emotional variables taken from Burt. Two others are socioeconomic and political data sets. Additionally, 8 physical variables.  All five of these are used for tests and demonstrations of various factoring algortithms.",
   "title" : "Five data sets from Harman (1967). 9 cognitive variables from Holzinger and 8 emotional variables from Burt",
   "format" : "Harman.Holzinger: 9 x 9 correlation matrix of ability tests, N = 696.\n\n\n Harman.Burt: a 8 x 8 correlation matrix of &ldquo;emotional\" items. N = 172\n\n\n Harman.5:  12 census tracts for 5 socioeconomic data (Harman p 14)\n\n\n Harman.political:  p 166.\n\n\n Harman.8   8 physical measures"
}

var Harman.Holzinger = [
   [
      "Word_meaning",
      "Sentence_completion",
      "Odd_words",
      "Mixed_Arithmetic",
      "Remainders",
      "Missing_Numbers",
      "Gloves",
      "Boots",
      "Hatchets"
   ],
   [
      "1",
      "0.75",
      "0.78",
      "0.44",
      "0.45",
      "0.51",
      "0.21",
      "0.3",
      "0.31"
   ],
   [
      "0.75",
      "1",
      "0.72",
      "0.52",
      "0.53",
      "0.58",
      "0.23",
      "0.32",
      "0.3"
   ],
   [
      "0.78",
      "0.72",
      "1",
      "0.47",
      "0.48",
      "0.54",
      "0.28",
      "0.37",
      "0.37"
   ],
   [
      "0.44",
      "0.52",
      "0.47",
      "1",
      "0.82",
      "0.82",
      "0.33",
      "0.33",
      "0.31"
   ],
   [
      "0.45",
      "0.53",
      "0.48",
      "0.82",
      "1",
      "0.74",
      "0.37",
      "0.36",
      "0.36"
   ],
   [
      "0.51",
      "0.58",
      "0.54",
      "0.82",
      "0.74",
      "1",
      "0.35",
      "0.38",
      "0.38"
   ],
   [
      "0.21",
      "0.23",
      "0.28",
      "0.33",
      "0.37",
      "0.35",
      "1",
      "0.45",
      "0.52"
   ],
   [
      "0.3",
      "0.32",
      "0.37",
      "0.33",
      "0.36",
      "0.38",
      "0.45",
      "1",
      "0.67"
   ],
   [
      "0.31",
      "0.3",
      "0.37",
      "0.31",
      "0.36",
      "0.38",
      "0.52",
      "0.67",
      "1"
   ]
]
