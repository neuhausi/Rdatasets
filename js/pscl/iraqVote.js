var iraqVoteInfo ={
   "format" : "A data frame with 100 observations on the following 6 variables.",
   "description" : "Description\nOn October 11, 2002, the United States Senate\nvoted 77-23 to authorize the use of military force against Iraq.  This data set lists the &ldquo;Ayes&rdquo; and &ldquo;Nays&rdquo; for each Senator and some covariates.",
   "title" : "U.S. Senate vote on the use of force against Iraq, 2002.",
   "reference" : "The only Republican to vote against the resolution was Lincoln\nChafee (Rhode Island); Democrats split 29-22 in favor of the\nresolution.",
   "usage" : "data(iraqVote)",
   "parameters" : {
      "state.abb" : "two letter abbreviation for each state",
      "gorevote" : "numeric, the vote share recorded by Al Gore in the corresponding state in the 2000 Presidential election",
      "state.name" : "name of state",
      "rep" : "logical, TRUE for Republican senators",
      "name" : "senator name, party and state, e.g., AKAKA (D HI)",
      "y" : "a numeric vector, the recorded vote (1 if Aye, 0 if Nay)"
   }
}

var iraqVote = [
   [
      "y",
      "state.abb",
      "name",
      "rep",
      "state.name",
      "gorevote"
   ],
   [
      "1",
      "AL",
      "SESSIONS (R AL)",
      "TRUE",
      "Alabama",
      "41.59"
   ],
   [
      "1",
      "AL",
      "SHELBY (R AL)",
      "TRUE",
      "Alabama",
      "41.59"
   ],
   [
      "1",
      "AK",
      "MURKOWSKI (R AK)",
      "TRUE",
      "Alaska",
      "27.67"
   ],
   [
      "1",
      "AK",
      "STEVENS (R AK)",
      "TRUE",
      "Alaska",
      "27.67"
   ],
   [
      "1",
      "AZ",
      "KYL (R AZ)",
      "TRUE",
      "Arizona",
      "44.67"
   ],
   [
      "1",
      "AZ",
      "MCCAIN (R AZ)",
      "TRUE",
      "Arizona",
      "44.67"
   ],
   [
      "1",
      "AR",
      "HUTCHINSON (R AR)",
      "TRUE",
      "Arkansas",
      "45.86"
   ],
   [
      "1",
      "AR",
      "LINCOLN (D AR)",
      "FALSE",
      "Arkansas",
      "45.86"
   ],
   [
      "0",
      "CA",
      "BOXER (D CA)",
      "FALSE",
      "California",
      "53.45"
   ],
   [
      "1",
      "CA",
      "FEINSTEIN (D CA)",
      "FALSE",
      "California",
      "53.45"
   ],
   [
      "1",
      "CO",
      "ALLARD (R CO)",
      "TRUE",
      "Colorado",
      "42.39"
   ],
   [
      "1",
      "CO",
      "CAMPBELL (R CO)",
      "TRUE",
      "Colorado",
      "42.39"
   ],
   [
      "1",
      "CT",
      "DODD (D CT)",
      "FALSE",
      "Connecticut",
      "55.91"
   ],
   [
      "1",
      "CT",
      "LIEBERMAN (D CT)",
      "FALSE",
      "Connecticut",
      "55.91"
   ],
   [
      "1",
      "DE",
      "BIDEN (D DE)",
      "FALSE",
      "Delaware",
      "54.96"
   ],
   [
      "1",
      "DE",
      "CARPER (D DE)",
      "FALSE",
      "Delaware",
      "54.96"
   ],
   [
      "0",
      "FL",
      "GRAHAM (D FL)",
      "FALSE",
      "Florida",
      "48.84"
   ],
   [
      "1",
      "FL",
      "NELSON (D FL)",
      "FALSE",
      "Florida",
      "48.84"
   ],
   [
      "1",
      "GA",
      "CLELAND (D GA)",
      "FALSE",
      "Georgia",
      "42.98"
   ],
   [
      "1",
      "GA",
      "MILLER (D GA)",
      "FALSE",
      "Georgia",
      "42.98"
   ],
   [
      "0",
      "HI",
      "AKAKA (D HI)",
      "FALSE",
      "Hawaii",
      "55.79"
   ],
   [
      "0",
      "HI",
      "INOUYE (D HI)",
      "FALSE",
      "Hawaii",
      "55.79"
   ],
   [
      "1",
      "ID",
      "CRAIG (R ID)",
      "TRUE",
      "Idaho",
      "27.64"
   ],
   [
      "1",
      "ID",
      "CRAPO (R ID)",
      "TRUE",
      "Idaho",
      "27.64"
   ],
   [
      "0",
      "IL",
      "DURBIN (D IL)",
      "FALSE",
      "Illinois",
      "54.6"
   ],
   [
      "1",
      "IL",
      "FITZGERALD (R IL)",
      "TRUE",
      "Illinois",
      "54.6"
   ],
   [
      "1",
      "IN",
      "BAYH (D IN)",
      "FALSE",
      "Indiana",
      "41.01"
   ],
   [
      "1",
      "IN",
      "LUGAR (R IN)",
      "TRUE",
      "Indiana",
      "41.01"
   ],
   [
      "1",
      "IA",
      "GRASSLEY (R IA)",
      "TRUE",
      "Iowa",
      "48.54"
   ],
   [
      "1",
      "IA",
      "HARKIN (D IA)",
      "FALSE",
      "Iowa",
      "48.54"
   ],
   [
      "1",
      "KS",
      "BROWNBACK (R KS)",
      "TRUE",
      "Kansas",
      "37.24"
   ],
   [
      "1",
      "KS",
      "ROBERTS (R KS)",
      "TRUE",
      "Kansas",
      "37.24"
   ],
   [
      "1",
      "KY",
      "BUNNING (R KY)",
      "TRUE",
      "Kentucky",
      "41.37"
   ],
   [
      "1",
      "KY",
      "MCCONNELL (R KY)",
      "TRUE",
      "Kentucky",
      "41.37"
   ],
   [
      "1",
      "LA",
      "BREAUX (D LA)",
      "FALSE",
      "Louisiana",
      "44.88"
   ],
   [
      "1",
      "LA",
      "LANDRIEU (D LA)",
      "FALSE",
      "Louisiana",
      "44.88"
   ],
   [
      "1",
      "ME",
      "COLLINS (R ME)",
      "TRUE",
      "Maine",
      "49.09"
   ],
   [
      "1",
      "ME",
      "SNOWE (R ME)",
      "TRUE",
      "Maine",
      "49.09"
   ],
   [
      "0",
      "MD",
      "MIKULSKI (D MD)",
      "FALSE",
      "Maryland",
      "56.57"
   ],
   [
      "0",
      "MD",
      "SARBANES (D MD)",
      "FALSE",
      "Maryland",
      "56.57"
   ],
   [
      "0",
      "MA",
      "KENNEDY (D MA)",
      "FALSE",
      "Massachusetts",
      "59.8"
   ],
   [
      "1",
      "MA",
      "KERRY (D MA)",
      "FALSE",
      "Massachusetts",
      "59.8"
   ],
   [
      "0",
      "MI",
      "STABENOW (D MI)",
      "FALSE",
      "Michigan",
      "51.28"
   ],
   [
      "0",
      "MI",
      "LEVIN (D MI)",
      "FALSE",
      "Michigan",
      "51.28"
   ],
   [
      "0",
      "MN",
      "DAYTON (D MN)",
      "FALSE",
      "Minnesota",
      "47.91"
   ],
   [
      "0",
      "MN",
      "WELLSTONE (D MN)",
      "FALSE",
      "Minnesota",
      "47.91"
   ],
   [
      "1",
      "MS",
      "COCHRAN (R MS)",
      "TRUE",
      "Mississippi",
      "40.7"
   ],
   [
      "1",
      "MS",
      "LOTT (R MS)",
      "TRUE",
      "Mississippi",
      "40.7"
   ],
   [
      "1",
      "MO",
      "CARNAHAN (D MO)",
      "FALSE",
      "Missouri",
      "47.08"
   ],
   [
      "1",
      "MO",
      "BOND (R MO)",
      "TRUE",
      "Missouri",
      "47.08"
   ],
   [
      "1",
      "MT",
      "BAUCUS (D MT)",
      "FALSE",
      "Montana",
      "33.36"
   ],
   [
      "1",
      "MT",
      "BURNS (R MT)",
      "TRUE",
      "Montana",
      "33.36"
   ],
   [
      "1",
      "NE",
      "HAGEL (R NE)",
      "TRUE",
      "Nebraska",
      "33.25"
   ],
   [
      "1",
      "NE",
      "NELSON (D NE)",
      "FALSE",
      "Nebraska",
      "33.25"
   ],
   [
      "1",
      "NV",
      "ENSIGN (R NV)",
      "TRUE",
      "Nevada",
      "45.98"
   ],
   [
      "1",
      "NV",
      "REID (D NV)",
      "FALSE",
      "Nevada",
      "45.98"
   ],
   [
      "1",
      "NH",
      "GREGG (R NH)",
      "TRUE",
      "New Hampshire",
      "46.8"
   ],
   [
      "1",
      "NH",
      "SMITH (R NH)",
      "TRUE",
      "New Hampshire",
      "46.8"
   ],
   [
      "0",
      "NJ",
      "CORZINE (D NJ)",
      "FALSE",
      "New Jersey",
      "56.13"
   ],
   [
      "1",
      "NJ",
      "TORRICELLI (D NJ)",
      "FALSE",
      "New Jersey",
      "56.13"
   ],
   [
      "0",
      "NM",
      "BINGAMAN (D NM)",
      "FALSE",
      "New Mexico",
      "47.91"
   ],
   [
      "1",
      "NM",
      "DOMENICI (R NM)",
      "TRUE",
      "New Mexico",
      "47.91"
   ],
   [
      "1",
      "NY",
      "CLINTON (D NY)",
      "FALSE",
      "New York",
      "60.21"
   ],
   [
      "1",
      "NY",
      "SCHUMER (D NY)",
      "FALSE",
      "New York",
      "60.21"
   ],
   [
      "1",
      "NC",
      "EDWARDS (D NC)",
      "FALSE",
      "North Carolina",
      "43.2"
   ],
   [
      "1",
      "NC",
      "HELMS (R NC)",
      "TRUE",
      "North Carolina",
      "43.2"
   ],
   [
      "0",
      "ND",
      "CONRAD (D ND)",
      "FALSE",
      "North Dakota",
      "33.05"
   ],
   [
      "1",
      "ND",
      "DORGAN (D ND)",
      "FALSE",
      "North Dakota",
      "33.05"
   ],
   [
      "1",
      "OH",
      "DEWINE (R OH)",
      "TRUE",
      "Ohio",
      "46.46"
   ],
   [
      "1",
      "OH",
      "VOINOVICH (R OH)",
      "TRUE",
      "Ohio",
      "46.46"
   ],
   [
      "1",
      "OK",
      "INHOFE (R OK)",
      "TRUE",
      "Oklahoma",
      "38.43"
   ],
   [
      "1",
      "OK",
      "NICKLES (R OK)",
      "TRUE",
      "Oklahoma",
      "38.43"
   ],
   [
      "1",
      "OR",
      "SMITH (R OR)",
      "TRUE",
      "Oregon",
      "46.96"
   ],
   [
      "0",
      "OR",
      "WYDEN (D OR)",
      "FALSE",
      "Oregon",
      "46.96"
   ],
   [
      "1",
      "PA",
      "SANTORUM (R PA)",
      "TRUE",
      "Pennsylvania",
      "50.6"
   ],
   [
      "1",
      "PA",
      "SPECTER (R PA)",
      "TRUE",
      "Pennsylvania",
      "50.6"
   ],
   [
      "0",
      "RI",
      "CHAFEE (R RI)",
      "TRUE",
      "Rhode Island",
      "60.99"
   ],
   [
      "0",
      "RI",
      "REED (D RI)",
      "FALSE",
      "Rhode Island",
      "60.99"
   ],
   [
      "1",
      "SC",
      "HOLLINGS (D SC)",
      "FALSE",
      "South Carolina",
      "40.91"
   ],
   [
      "1",
      "SC",
      "THURMOND (R SC)",
      "TRUE",
      "South Carolina",
      "40.91"
   ],
   [
      "1",
      "SD",
      "DASCHLE (D SD)",
      "FALSE",
      "South Dakota",
      "37.56"
   ],
   [
      "1",
      "SD",
      "JOHNSON (D SD)",
      "FALSE",
      "South Dakota",
      "37.56"
   ],
   [
      "1",
      "TN",
      "FRIST (R TN)",
      "TRUE",
      "Tennessee",
      "47.28"
   ],
   [
      "1",
      "TN",
      "THOMPSON (R TN)",
      "TRUE",
      "Tennessee",
      "47.28"
   ],
   [
      "1",
      "TX",
      "GRAMM (R TX)",
      "TRUE",
      "Texas",
      "37.98"
   ],
   [
      "1",
      "TX",
      "HUTCHISON (R TX)",
      "TRUE",
      "Texas",
      "37.98"
   ],
   [
      "1",
      "UT",
      "BENNETT (R UT)",
      "TRUE",
      "Utah",
      "26.34"
   ],
   [
      "1",
      "UT",
      "HATCH (R UT)",
      "TRUE",
      "Utah",
      "26.34"
   ],
   [
      "0",
      "VT",
      "JEFFORDS (Indep VT)",
      "FALSE",
      "Vermont",
      "50.63"
   ],
   [
      "0",
      "VT",
      "LEAHY (D VT)",
      "FALSE",
      "Vermont",
      "50.63"
   ],
   [
      "1",
      "VA",
      "ALLEN (R VA)",
      "TRUE",
      "Virginia",
      "44.44"
   ],
   [
      "1",
      "VA",
      "WARNER (R VA)",
      "TRUE",
      "Virginia",
      "44.44"
   ],
   [
      "1",
      "WA",
      "CANTWELL (D WA)",
      "FALSE",
      "Washington",
      "50.13"
   ],
   [
      "0",
      "WA",
      "MURRAY (D WA)",
      "FALSE",
      "Washington",
      "50.13"
   ],
   [
      "0",
      "WV",
      "BYRD (D WV)",
      "FALSE",
      "West Virginia",
      "45.59"
   ],
   [
      "1",
      "WV",
      "ROCKEFELLER (D WV)",
      "FALSE",
      "West Virginia",
      "45.59"
   ],
   [
      "0",
      "WI",
      "FEINGOLD (D WI)",
      "FALSE",
      "Wisconsin",
      "47.83"
   ],
   [
      "1",
      "WI",
      "KOHL (D WI)",
      "FALSE",
      "Wisconsin",
      "47.83"
   ],
   [
      "1",
      "WY",
      "ENZI (R WY)",
      "TRUE",
      "Wyoming",
      "27.7"
   ],
   [
      "1",
      "WY",
      "THOMAS (R WY)",
      "TRUE",
      "Wyoming",
      "27.7"
   ]
]
