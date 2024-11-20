var Wheat.monarchsInfo ={
   "title" : "Playfair's Data on Wages and the Price of Wheat",
   "format" : "Wheat\nA data frame with 53 observations on the following 3 variables.",
   "reference" : "Playfair, W. (1821). Letter on our Agricultural Distresses, Their Causes and Remedies. London: W. Sams, 1821",
   "parameters" : {
      "Wages" : "Weekly wage (Shillings): a numeric vector",
      "Wheat" : "Price of Wheat (Shillings/Quarter bushel): a numeric vector",
      "Year" : "Year, in intervals of 5 from 1565 to 1821: a numeric vector"
   },
   "usage" : "data(Wheat)\ndata(Wheat.monarchs)",
   "description" : "Description\nPlayfair (1821) used a graph, showing parallel time-series of the price of wheat\nand the typical weekly wage for a \"good mechanic\" from 1565 to 1821 to argue\nthat working men had never been as well-off in terms of purchasing power as\nthey had become toward the end of this period.\nHis graph is a classic in the history of data visualization, but commits the\nsin of showing two non-commensurable Y variables on different axes.\nScatterplots of wages vs. price or plots of ratios (e.g., wages/price) \nare in some ways better, but both of these ideas were unknown in 1821.\nIn this version, information on the reigns of British monarchs is provided\nin a separate data.frame, Wheat.monarch."
}

var Wheat.monarchs = [
   [
      "name",
      "start",
      "end",
      "commonwealth"
   ],
   [
      "Elizabeth",
      "1565",
      "1603",
      "0"
   ],
   [
      "James I",
      "1603",
      "1625",
      "0"
   ],
   [
      "Charles I",
      "1625",
      "1649",
      "0"
   ],
   [
      "Cromwell",
      "1649",
      "1660",
      "1"
   ],
   [
      "Charles II",
      "1660",
      "1685",
      "0"
   ],
   [
      "James II",
      "1685",
      "1689",
      "0"
   ],
   [
      "W&M",
      "1689",
      "1702",
      "0"
   ],
   [
      "Anne",
      "1702",
      "1714",
      "0"
   ],
   [
      "George I",
      "1714",
      "1727",
      "0"
   ],
   [
      "George II",
      "1727",
      "1760",
      "0"
   ],
   [
      "George III",
      "1760",
      "1820",
      "0"
   ],
   [
      "George IV",
      "1820",
      "1821",
      "0"
   ]
]
