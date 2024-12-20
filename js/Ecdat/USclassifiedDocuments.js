var USclassifiedDocumentsInfo ={
   "format" : "A dataframe containing :",
   "description" : "Description\nData on classification activity of the United \nStates government.\nFitzpatrick (2013) notes that the dramatic jump \nin derivative classification activity\n(DerivClassActivity) that occurred in 2009\ncoincided with \"New guidance issued to include\nelectronic environment\".  Apart from the jump in\n2009, the DerivClassActivity tended to\nincrease by roughly 12 percent per year (with a\nstandard deviation of the increase in the natural\nlogarithm of DerivClassActivity of 0.18).",
   "title" : "Official Secrecy of the United States Government",
   "reference" : "The lag 1 autocorrelation of the first \ndifference of the logarithms of\nDerivClassActivity through 2008 is \n-0.52.  However, because there are only \n13 numbers (12 differences), this negative\ncorrelation is not statistically significant.",
   "usage" : "data(USclassifiedDocuments)",
   "parameters" : {
      "OCAuthority" : "Number of people in the government designated \nas Original Classification Authorities for \nthe indicated year.",
      "year" : "the calendar year",
      "TenYearDeclass" : "Percent of OCActivity covered by the \n10 year declassification rules.",
      "DerivClassActivity" : "Derivative classification activity for the\nindicated year:  These are the number of\ndocuments created that claim another document \nas the authority for classification.",
      "OCActivity" : "Original classification activity for the\nindicated year:  These are the number of\ndocuments created with an original\nclassification, i.e., so designated by an\nofficial Original Classification Authority."
   }
}

var USclassifiedDocuments = [
   [
      "year",
      "OCAuthorities",
      "OCActivity",
      "TenYrDeclass",
      "DerivClassActivity"
   ],
   [
      "1980",
      "7149",
      "",
      "",
      ""
   ],
   [
      "1982",
      "6943",
      "",
      "",
      ""
   ],
   [
      "1984",
      "6900",
      "",
      "",
      ""
   ],
   [
      "1986",
      "6756",
      "",
      "",
      ""
   ],
   [
      "1988",
      "6654",
      "",
      "",
      ""
   ],
   [
      "1989",
      "",
      "507794",
      "",
      ""
   ],
   [
      "1990",
      "6492",
      "490975",
      "",
      ""
   ],
   [
      "1991",
      "",
      "511858",
      "",
      ""
   ],
   [
      "1992",
      "5793",
      "480843",
      "",
      ""
   ],
   [
      "1993",
      "",
      "245951",
      "",
      ""
   ],
   [
      "1994",
      "5461",
      "204683",
      "",
      ""
   ],
   [
      "1995",
      "",
      "167840",
      "",
      ""
   ],
   [
      "1996",
      "4420",
      "105163",
      "0.5",
      "5685462"
   ],
   [
      "1997",
      "",
      "158788",
      "0.5",
      "6361366"
   ],
   [
      "1998",
      "3903",
      "137005",
      "0.36",
      "7157763"
   ],
   [
      "1999",
      "",
      "169735",
      "0.5",
      "7858857"
   ],
   [
      "2000",
      "4130",
      "220926",
      "0.59",
      "10929943"
   ],
   [
      "2001",
      "",
      "260678",
      "0.54",
      "8390057"
   ],
   [
      "2002",
      "4006",
      "217268",
      "0.57",
      "11054350"
   ],
   [
      "2003",
      "",
      "234052",
      "0.52",
      "13993968"
   ],
   [
      "2004",
      "4007",
      "351150",
      "0.34",
      "15294087"
   ],
   [
      "2005",
      "",
      "258633",
      "0.64",
      "13948140"
   ],
   [
      "2006",
      "4042",
      "231005",
      "0.61",
      "20324450"
   ],
   [
      "2007",
      "",
      "233630",
      "0.57",
      "22868618"
   ],
   [
      "2008",
      "4109",
      "203541",
      "0.58",
      "23217557"
   ],
   [
      "2009",
      "",
      "183224",
      "0.67",
      "54651765"
   ],
   [
      "2010",
      "2378",
      "224734",
      "0.74",
      "76571211"
   ],
   [
      "2011",
      "2362",
      "127072",
      "0.7",
      "92064862"
   ],
   [
      "2012",
      "2326",
      "73477",
      "0.48",
      "95180243"
   ]
]
