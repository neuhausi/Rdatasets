var TrucksInfo ={
   "format" : "A data frame with 24 observations on 5 variables.",
   "title" : "Truck Accidents Data",
   "reference" : "E. B. Andersen (1991),\nThe Statistical Analysis of Categorical Data, Table 6.8.",
   "parameters" : {
      "period" : "factor indicating time period (before, after)\n1971-11-01.",
      "Freq" : "frequency of accidents involving trucks.",
      "parked" : "factor indicating whether the truck was parked (yes,\nno).",
      "light" : "factor indicating light conditions: day light (daylight),\nnight on an illuminated road (night, illuminate), night on a dark\nroad (night, dark).",
      "collision" : "factor indicating whether the collision was in the\nback or forward (including the front and the sides) of the truck\n(back, forward)."
   },
   "usage" : "data(\"Trucks\")",
   "description" : "Description\nData from a study in England in two periods from November 1969 to\nOctober 1971 and November 1971 to October 1973.  A new compulsory\nsafety measure for trucks was introduced in October 1971.  Therefore,\nthe question is whether the safety measure had an effect on the number\nof accidents and on the point of collision on the truck."
}

var Trucks = [
   [
      "Freq",
      "period",
      "collision",
      "parked",
      "light"
   ],
   [
      "712",
      "before",
      "back",
      "yes",
      "daylight"
   ],
   [
      "613",
      "after",
      "back",
      "yes",
      "daylight"
   ],
   [
      "192",
      "before",
      "forward",
      "yes",
      "daylight"
   ],
   [
      "179",
      "after",
      "forward",
      "yes",
      "daylight"
   ],
   [
      "2557",
      "before",
      "back",
      "no",
      "daylight"
   ],
   [
      "2373",
      "after",
      "back",
      "no",
      "daylight"
   ],
   [
      "10749",
      "before",
      "forward",
      "no",
      "daylight"
   ],
   [
      "9768",
      "after",
      "forward",
      "no",
      "daylight"
   ],
   [
      "634",
      "before",
      "back",
      "yes",
      "night, illuminate"
   ],
   [
      "411",
      "after",
      "back",
      "yes",
      "night, illuminate"
   ],
   [
      "95",
      "before",
      "forward",
      "yes",
      "night, illuminate"
   ],
   [
      "55",
      "after",
      "forward",
      "yes",
      "night, illuminate"
   ],
   [
      "325",
      "before",
      "back",
      "no",
      "night, illuminate"
   ],
   [
      "283",
      "after",
      "back",
      "no",
      "night, illuminate"
   ],
   [
      "1256",
      "before",
      "forward",
      "no",
      "night, illuminate"
   ],
   [
      "987",
      "after",
      "forward",
      "no",
      "night, illuminate"
   ],
   [
      "345",
      "before",
      "back",
      "yes",
      "night, dark"
   ],
   [
      "179",
      "after",
      "back",
      "yes",
      "night, dark"
   ],
   [
      "46",
      "before",
      "forward",
      "yes",
      "night, dark"
   ],
   [
      "39",
      "after",
      "forward",
      "yes",
      "night, dark"
   ],
   [
      "579",
      "before",
      "back",
      "no",
      "night, dark"
   ],
   [
      "494",
      "after",
      "back",
      "no",
      "night, dark"
   ],
   [
      "1018",
      "before",
      "forward",
      "no",
      "night, dark"
   ],
   [
      "885",
      "after",
      "forward",
      "no",
      "night, dark"
   ]
]
