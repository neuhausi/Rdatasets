var Harman.8Info ={
   "parameters" : {
      "Harman.Holzinger" : " 9 x 9 correlation matrix of ability tests, N = 696.",
      "Harman.5" : "  12 census tracts for 5 socioeconomic data (Harman p 14)",
      "Harman.8   8 physical measures" : null,
      "Harman.Burt" : " a 8 x 8 correlation matrix of &ldquo;emotional\" items. N = 172",
      "Harman.political" : "  p 166."
   },
   "usage" : "data(Harman)  \ndata(Harman.5)\ndata(Harman.political)\ndata(Harman.8)",
   "reference" : "Harman (1967 p 164 and p 244.)",
   "title" : "Five data sets from Harman (1967). 9 cognitive variables from Holzinger and 8 emotional variables from Burt",
   "description" : "Description\nFive classic data sets reported by Harman (1967) are 9 psychological (cognitive) variables taken from Holzinger  and 8 emotional variables taken from Burt. Two others are socioeconomic and political data sets. Additionally, 8 physical variables.  All five of these are used for tests and demonstrations of various factoring algortithms.",
   "format" : "Harman.Holzinger: 9 x 9 correlation matrix of ability tests, N = 696.\n\n\n Harman.Burt: a 8 x 8 correlation matrix of &ldquo;emotional\" items. N = 172\n\n\n Harman.5:  12 census tracts for 5 socioeconomic data (Harman p 14)\n\n\n Harman.political:  p 166.\n\n\n Harman.8   8 physical measures"
}

var Harman.8 = [
   [
      "Height",
      "Arm span",
      "Forearm",
      "Leg length",
      "Weight",
      "Hips",
      "Chest girth",
      "Chest width"
   ],
   [
      "1",
      "0.846",
      "0.805",
      "0.859",
      "0.473",
      "0.398",
      "0.301",
      "0.382"
   ],
   [
      "0.846",
      "1",
      "0.881",
      "0.826",
      "0.376",
      "0.326",
      "0.277",
      "0.415"
   ],
   [
      "0.805",
      "0.881",
      "1",
      "0.801",
      "0.38",
      "0.319",
      "0.237",
      "0.345"
   ],
   [
      "0.859",
      "0.826",
      "0.801",
      "1",
      "0.436",
      "0.329",
      "0.327",
      "0.365"
   ],
   [
      "0.473",
      "0.376",
      "0.38",
      "0.436",
      "1",
      "0.762",
      "0.73",
      "0.629"
   ],
   [
      "0.398",
      "0.326",
      "0.319",
      "0.329",
      "0.762",
      "1",
      "0.583",
      "0.577"
   ],
   [
      "0.301",
      "0.277",
      "0.237",
      "0.327",
      "0.73",
      "0.583",
      "1",
      "0.539"
   ],
   [
      "0.382",
      "0.415",
      "0.345",
      "0.365",
      "0.629",
      "0.577",
      "0.539",
      "1"
   ]
]
