var VirginisInfo ={
   "parameters" : {
      "year" : "year (\"epoch\") of the observation, a decimal numeric vector",
      "distance" : "separation distance between the two stars, a numeric vector",
      "authority" : "A simplified version of the notes giving just the attribution of authority of the observation, a character vector",
      "notes" : "Herschel's notes on this observation, a character vector",
      "weight" : "a subjective weight attributed to the accuracy of this observation, a numeric vector",
      "posangle" : "recorded position angle between the two stars, a numeric vector"
   },
   "usage" : "data(\"Virginis\")\n\tdata(\"Virginis.interp\")",
   "reference" : "The data in Virginis come from the table on p. 35 of the &ldquo;Micrometrical Measures&rdquo;\npaper.",
   "description" : "Description\nIn 1833 J. F. W. Herschel published two papers in the Memoirs of the Royal Astronomical Society\ndetailing his investigations of calculating the orbits of twin stars from observations of\ntheir relative position angle and angular distance.\nIn the process, he invented the scatterplot, and the use of visual smoothing to obtain a reliable\ncurve that surpassed the accuracy of individual observations (Friendly & Denis, 2005).\nHis data on the recordings of the twin stars \\gamma Virginis provide an\naccessible example of his methods.",
   "title" : "John F. W. Herschel's Data on the Orbit of the Twin Stars \\gamma Virginis",
   "format" : "Virgins: A data frame with 18 observations on the following 6 variables giving\nthe measurements of position angle and angular distance between the central (brightest)\nstar and its twin, recorded by various observers over more than 100 years."
}

var Virginis = [
   [
      "year",
      "posangle",
      "distance",
      "weight",
      "notes",
      "authority"
   ],
   [
      "1718.19",
      "160.8666667",
      "",
      "4",
      "Pound",
      "Pound"
   ],
   [
      "1718.2",
      "160.8666667",
      "",
      "4",
      "Bradley",
      "Bradley"
   ],
   [
      "1720.31",
      "139.1166667",
      "7.49",
      "0.1",
      "Cassini  very uncertain",
      "Cassini"
   ],
   [
      "1756",
      "144.3666667",
      "6.5",
      "4",
      "Mayer",
      "Mayer"
   ],
   [
      "1780.06",
      "",
      "5.7",
      "4",
      "H. Catal. 1782",
      "H"
   ],
   [
      "1781.89",
      "130.7333333",
      "",
      "4",
      "H. Catal  1782",
      "H"
   ],
   [
      "1803.2",
      "120.25",
      "",
      "8",
      "H. Mean of 8 measures",
      "H"
   ],
   [
      "1819.4",
      "",
      "3.56",
      "4",
      "Sigma  Descriptio Tubi Fraunhof., p. 17",
      "Sigma"
   ],
   [
      "1820.2",
      "105.25",
      "",
      "4",
      "Sigma. Addit. Dorp. Obs., ii 178",
      "Sigma"
   ],
   [
      "1822.25",
      "103.4",
      "3.79",
      "4",
      "Sh. Phil Trans 1824",
      "Sh"
   ],
   [
      "1822.5",
      "102.4",
      "",
      "4",
      "Sigma  Descriptio Tubi Fraunhof., p. 17",
      "Sigma"
   ],
   [
      "1825.32",
      "96.88333333",
      "3.26",
      "4",
      "S. Phil Trans",
      "S"
   ],
   [
      "1825.35",
      "97.96666667",
      "2.38",
      "4",
      "Sigma DTF & Mem Ast Soc; mean of dates ",
      "Sigma"
   ],
   [
      "1828.35",
      "90.5",
      "",
      "1",
      "h. One night measure. No reliance",
      "h"
   ],
   [
      "1829.16",
      "",
      "1.79",
      "2",
      "h. 2 nights obs",
      "h"
   ],
   [
      "1829.22",
      "87.71666667",
      "",
      "2",
      "h. 2 nights obs",
      "h"
   ],
   [
      "1830.24",
      "",
      "2.22",
      "6",
      "h. 6 nights obs",
      "h"
   ],
   [
      "1830.38",
      "82.08333333",
      "",
      "6",
      "h. 6 nights obs",
      "h"
   ]
]
