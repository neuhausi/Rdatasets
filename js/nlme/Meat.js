var MeatInfo ={
   "parameters" : {
      "score" : "a numeric vector giving the tenderness score of beef roast.",
      "Storage" : "an ordered factor specifying the storage treatment - 1 (0\ndays), 2 (1 day),  3 (2 days), 4 (4 days), 5 (9 days), and 6\n(18 days)",
      "Pair" : "an ordered factor giving the unique identifier for each pair\nof beef roasts with levels II-1 < ... < IV-1",
      "Block" : "an ordered factor identifying the muscle from which the\nroast was extracted with levels \nII < V < I < III < IV"
   },
   "usage" : "This data frame contains the following columns:",
   "reference" : "Cochran and Cox (section 11.51, 1957) describe data from an\nexperiment conducted at Iowa State College (Paul, 1943) to\ncompare the effects of length of cold storage on the tenderness of\nbeef roasts.  Six storage periods ranging from 0 to 18 days were used.\nThirty roasts were scored by four judges on a scale from 0 to 10, with\nthe score increasing with tenderness. The response was the sum of all\nfour scores. Left and right roasts from the same animal were grouped\ninto pairs, which were further grouped into five blocks, according to\nthe muscle from which they were extracted. Different storage periods\nwere applied to each roast within a pair according to a balanced\nincomplete block design.",
   "title" : "Tenderness of meat",
   "description" : "Description\nThe Meat data frame has 30 rows and 4 columns."
}

var Meat = [
   [
      "Storage",
      "score",
      "Block",
      "Pair"
   ],
   [
      " 0",
      "7",
      "I",
      "I-1"
   ],
   [
      " 1",
      "17",
      "I",
      "I-1"
   ],
   [
      " 2",
      "26",
      "I",
      "I-2"
   ],
   [
      " 4",
      "25",
      "I",
      "I-2"
   ],
   [
      " 9",
      "33",
      "I",
      "I-3"
   ],
   [
      "18",
      "29",
      "I",
      "I-3"
   ],
   [
      " 0",
      "17",
      "II",
      "II-1"
   ],
   [
      " 2",
      "27",
      "II",
      "II-1"
   ],
   [
      " 1",
      "23",
      "II",
      "II-2"
   ],
   [
      " 9",
      "27",
      "II",
      "II-2"
   ],
   [
      " 4",
      "29",
      "II",
      "II-3"
   ],
   [
      "18",
      "30",
      "II",
      "II-3"
   ],
   [
      " 0",
      "10",
      "III",
      "III-1"
   ],
   [
      " 4",
      "25",
      "III",
      "III-1"
   ],
   [
      " 1",
      "26",
      "III",
      "III-2"
   ],
   [
      "18",
      "37",
      "III",
      "III-2"
   ],
   [
      " 2",
      "24",
      "III",
      "III-3"
   ],
   [
      " 9",
      "26",
      "III",
      "III-3"
   ],
   [
      " 0",
      "25",
      "IV",
      "IV-1"
   ],
   [
      " 9",
      "40",
      "IV",
      "IV-1"
   ],
   [
      " 1",
      "25",
      "IV",
      "IV-2"
   ],
   [
      " 4",
      "34",
      "IV",
      "IV-2"
   ],
   [
      " 2",
      "34",
      "IV",
      "IV-3"
   ],
   [
      "18",
      "32",
      "IV",
      "IV-3"
   ],
   [
      " 0",
      "11",
      "V",
      "V-1"
   ],
   [
      "18",
      "27",
      "V",
      "V-1"
   ],
   [
      " 1",
      "24",
      "V",
      "V-2"
   ],
   [
      " 2",
      "21",
      "V",
      "V-2"
   ],
   [
      " 4",
      "26",
      "V",
      "V-3"
   ],
   [
      " 9",
      "32",
      "V",
      "V-3"
   ]
]
