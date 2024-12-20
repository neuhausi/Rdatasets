var ukdemoInfo ={
   "title" : "United Kingdom Demographic Data",
   "description" : "Description\nThis dataset comes from the Guardian's Data Blog and includes five\nfinancial demographic variables.",
   "usage" : "ukdemo",
   "reference" : "The data was described in the Guardian Data Blog:\nhttps://www.theguardian.com/news/datablog/interactive/2011/oct/27/debt-money-expert-facts,\nretrieved 2011-11-01.",
   "parameters" : {
      "house" : "Average house price, in pounds",
      "pay" : "Average hourly pay, in pounds",
      "unemployment" : "Percent unemployment",
      "rpi" : "Retail price index, which is standardized to 100 for the entire UK,\nand lower index scores correspond to lower prices",
      "region" : "Region in the United Kingdom",
      "debt" : "Average regional debt, not including mortgages, in pounds"
   },
   "format" : "A data frame with 12 observations on the following 6 variables."
}

var ukdemo = [
   [
      "region",
      "debt",
      "unemployment",
      "house",
      "pay",
      "rpi"
   ],
   [
      "South West",
      "10737.65",
      "3.2",
      "212572",
      "11.68",
      "99.5"
   ],
   [
      "South East (inc. London)",
      "10501.22",
      "4.3",
      "306842",
      "14.88",
      "102.3"
   ],
   [
      "Northern Ireland",
      "10091.96",
      "7.3",
      "144163",
      "10.5",
      "98.1"
   ],
   [
      "East Midlands",
      "9910.04",
      "4.8",
      "160323",
      "11.47",
      "99.4"
   ],
   [
      "Yorkshire & Humber",
      "9863.52",
      "6",
      "150144",
      "11.5",
      "97"
   ],
   [
      "West Midlands",
      "9671.82",
      "6.2",
      "164716",
      "11.71",
      "100.6"
   ],
   [
      "North West",
      "9287.02",
      "5.5",
      "147977",
      "11.92",
      "98.2"
   ],
   [
      "North East",
      "8729.6",
      "7",
      "133460",
      "11.23",
      "98.2"
   ],
   [
      "East Anglia",
      "8609.45",
      "3.9",
      "228780",
      "13.12",
      "101.2"
   ],
   [
      "Scotland",
      "8398.8",
      "5.4",
      "163790",
      "12.28",
      "99.7"
   ],
   [
      "Wales",
      "8006.06",
      "5.3",
      "149807",
      "11.52",
      "98.4"
   ],
   [
      "UK Average",
      "9606.52",
      "4.9",
      "189120",
      "12.57",
      "100"
   ]
]
