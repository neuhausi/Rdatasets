var Harman.politicalInfo ={
   "format" : "Harman.Holzinger: 9 x 9 correlation matrix of ability tests, N = 696.\n\n\n Harman.Burt: a 8 x 8 correlation matrix of &ldquo;emotional\" items. N = 172\n\n\n Harman.5:  12 census tracts for 5 socioeconomic data (Harman p 14)\n\n\n Harman.political:  p 166.\n\n\n Harman.8   8 physical measures",
   "usage" : "data(Harman)  \ndata(Harman.5)\ndata(Harman.political)\ndata(Harman.8)",
   "reference" : "Harman (1967 p 164 and p 244.)",
   "title" : "Five data sets from Harman (1967). 9 cognitive variables from Holzinger and 8 emotional variables from Burt",
   "description" : "Description\nFive classic data sets reported by Harman (1967) are 9 psychological (cognitive) variables taken from Holzinger  and 8 emotional variables taken from Burt. Two others are socioeconomic and political data sets. Additionally, 8 physical variables.  All five of these are used for tests and demonstrations of various factoring algortithms.",
   "parameters" : {
      "Harman.Holzinger" : " 9 x 9 correlation matrix of ability tests, N = 696.",
      "Harman.political" : "  p 166.",
      "Harman.Burt" : " a 8 x 8 correlation matrix of &ldquo;emotional\" items. N = 172",
      "Harman.8   8 physical measures" : null,
      "Harman.5" : "  12 census tracts for 5 socioeconomic data (Harman p 14)"
   }
}

var Harman.political = [
   [
      "Lewis",
      "Roosevelt",
      "Party Voting",
      "Median Rental",
      "Homeownership",
      "Unemployment",
      "Mobility",
      "Education"
   ],
   [
      "1",
      "0.84",
      "0.62",
      "-0.53",
      "0.03",
      "0.57",
      "-0.33",
      "-0.63"
   ],
   [
      "0.84",
      "1",
      "0.84",
      "-0.68",
      "-0.05",
      "0.76",
      "-0.35",
      "-0.73"
   ],
   [
      "0.62",
      "0.84",
      "1",
      "-0.76",
      "0.08",
      "0.81",
      "-0.51",
      "-0.81"
   ],
   [
      "-0.53",
      "-0.68",
      "-0.76",
      "1",
      "-0.25",
      "-0.8",
      "0.62",
      "0.88"
   ],
   [
      "0.03",
      "-0.05",
      "0.08",
      "-0.25",
      "1",
      "0.25",
      "-0.72",
      "-0.36"
   ],
   [
      "0.57",
      "0.76",
      "0.81",
      "-0.8",
      "0.25",
      "1",
      "-0.58",
      "-0.84"
   ],
   [
      "-0.33",
      "-0.35",
      "-0.51",
      "0.62",
      "-0.72",
      "-0.58",
      "1",
      "0.68"
   ],
   [
      "-0.63",
      "-0.73",
      "-0.81",
      "0.88",
      "-0.36",
      "-0.84",
      "0.68",
      "1"
   ]
]
