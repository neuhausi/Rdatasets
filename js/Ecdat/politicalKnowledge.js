var politicalKnowledgeInfo ={
   "format" : "A data.frame containing 12 columns and 4 rows.",
   "title" : "Political knowledge in the US and Europe",
   "description" : "Description\nData from McChesney and Nichols (2010) \non domestic and international knowledge \nin Denmark, Finland, the UK and the US \namong college graduates, people with \nsome college, and roughly 12th grade only.",
   "reference" : "Spencer Graves",
   "usage" : "data(politicalKnowledge)",
   "parameters" : {
      "DomesticKnowledge.hs, DomesticKnowledge.sc, \nDomesticKnowledge.c" : "percent correct answers to calibrated questions\nregarding knowledge of prominent items in domestic\nnews in a survey of residents of the four \ncountries among college graduates (ending \n\".c\"), some college (\".sc\") and\nhigh school (\".hs\").  Source:  McChesney \nand Nichols (2010, chapter 1, chart 8).",
      "PoliticalKnowledge.hs, \nPoliticalKnowledge.sc, \nPoliticalKnowledge.c" : "average of domestic and international \nknowledge",
      "PublicMediaPerCapita" : "Per capital spending on public media in 2007 \nin US dollars from McChesney and Nichols (2010, \nchapter 4, chart 1)",
      "country" : "a character vector of Denmark, Finland, UK, and \nUS, being the four countries compared in this data set.",
      "InternationalKnowledge.hs, \nInternationalKnowledge.sc, \nInternationalKnowledge.c" : "percent correct answers to calibrated \nquestions regarding knowledge of \nprominent items in international news \nin a survey of residents of the four \ncountries by education level as for \nDomesticKnowledge.  Source:  \nMcChesney and Nichols (2010, chapter 1, \nchart 7).",
      "PublicMediaRel2US" : "Spending on public media relative to the US, being \nPublicMediaPerCapita / PublicMediaPerCapita[4]."
   }
}

var politicalKnowledge = [
   [
      "country",
      "DomesticKnowledge.hs",
      "DomesticKnowledge.sc",
      "DomesticKnowledge.c",
      "InternationalKnowledge.hs",
      "InternationalKnowledge.sc",
      "InternationalKnowledge.c",
      "PoliticalKnowledge.hs",
      "PoliticalKnowledge.sc",
      "PoliticalKnowledge.c",
      "PublicMediaPerCapita",
      "PublicMediaRel2US"
   ],
   [
      "Denmark",
      "0.77",
      "0.79",
      "0.77",
      "0.65",
      "0.67",
      "0.65",
      "0.71",
      "0.73",
      "0.71",
      "101",
      "74.81"
   ],
   [
      "Finland",
      "0.74",
      "0.75",
      "0.85",
      "0.56",
      "0.69",
      "0.7",
      "0.65",
      "0.72",
      "0.775",
      "101",
      "74.81"
   ],
   [
      "UK",
      "0.62",
      "0.65",
      "0.72",
      "0.52",
      "0.54",
      "0.68",
      "0.57",
      "0.595",
      "0.7",
      "80",
      "59.26"
   ],
   [
      "US",
      "0.4",
      "0.61",
      "0.77",
      "0.22",
      "0.42",
      "0.65",
      "0.31",
      "0.515",
      "0.71",
      "1.35",
      "1"
   ]
]
