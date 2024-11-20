var Harman.BurtInfo ={
   "usage" : "data(Harman)  \ndata(Harman.5)\ndata(Harman.political)\ndata(Harman.8)",
   "description" : "Description\nFive classic data sets reported by Harman (1967) are 9 psychological (cognitive) variables taken from Holzinger  and 8 emotional variables taken from Burt. Two others are socioeconomic and political data sets. Additionally, 8 physical variables.  All five of these are used for tests and demonstrations of various factoring algortithms.",
   "format" : "Harman.Holzinger: 9 x 9 correlation matrix of ability tests, N = 696.\n\n\n Harman.Burt: a 8 x 8 correlation matrix of &ldquo;emotional\" items. N = 172\n\n\n Harman.5:  12 census tracts for 5 socioeconomic data (Harman p 14)\n\n\n Harman.political:  p 166.\n\n\n Harman.8   8 physical measures",
   "title" : "Five data sets from Harman (1967). 9 cognitive variables from Holzinger and 8 emotional variables from Burt",
   "reference" : "Harman (1967 p 164 and p 244.)",
   "parameters" : {
      "Harman.8   8 physical measures" : null,
      "Harman.5" : "  12 census tracts for 5 socioeconomic data (Harman p 14)",
      "Harman.political" : "  p 166.",
      "Harman.Holzinger" : " 9 x 9 correlation matrix of ability tests, N = 696.",
      "Harman.Burt" : " a 8 x 8 correlation matrix of &ldquo;emotional\" items. N = 172"
   }
}

var Harman.Burt = [
   [
      "Sociability",
      "Sorrow",
      "Tenderness",
      "Joy",
      "Wonder",
      "Disgust",
      "Anger",
      "Fear"
   ],
   [
      "1",
      "0.83",
      "0.81",
      "0.8",
      "0.71",
      "0.54",
      "0.53",
      "0.24"
   ],
   [
      "0.83",
      "1",
      "0.87",
      "0.62",
      "0.59",
      "0.58",
      "0.44",
      "0.45"
   ],
   [
      "0.81",
      "0.87",
      "1",
      "0.63",
      "0.37",
      "0.3",
      "0.12",
      "0.33"
   ],
   [
      "0.8",
      "0.62",
      "0.63",
      "1",
      "0.49",
      "0.3",
      "0.28",
      "0.29"
   ],
   [
      "0.71",
      "0.59",
      "0.37",
      "0.49",
      "1",
      "0.34",
      "0.55",
      "0.19"
   ],
   [
      "0.54",
      "0.58",
      "0.3",
      "0.3",
      "0.34",
      "1",
      "0.38",
      "0.21"
   ],
   [
      "0.53",
      "0.44",
      "0.12",
      "0.28",
      "0.55",
      "0.38",
      "1",
      "0.1"
   ],
   [
      "0.24",
      "0.45",
      "0.33",
      "0.29",
      "0.19",
      "0.21",
      "0.1",
      "1"
   ]
]
