var piracyInfo ={
   "parameters" : {
      "name" : "Name of legislator.",
      "money_con" : "Amount of money in dollars contributed to the legislator's campaign in 2010 by groups generally thought to be opposed to PIPA/SOPA: computer and internet companies.",
      "chamber" : "Whether the legislator is a member of either the house or senate.",
      "years" : "Number of years of service in Congress.",
      "party" : "Party affiliation as democrat (D), Republican (R), or Independent (I).",
      "money_pro" : "Amount of money in dollars contributed to the legislator's campaign in 2010 by groups generally thought to be supportive of PIPA/SOPA: movie and TV studios, record labels.",
      "state" : "Two letter state abbreviation.",
      "stance" : "Degree of support for PIPA/SOPA with levels Leaning No, No, Undecided, Unknown, Yes"
   },
   "usage" : "piracy",
   "reference" : "The Stop Online Piracy Act (SOPA) and the Protect Intellectual Property Act\n(PIPA) were two bills introduced in the US House of Representatives and the\nUS Senate, respectively, to curtail copyright infringement.  The bill was\ncontroversial because there were concerns the bill limited free speech\nrights.  ProPublica, the independent and non-profit news organization,\ncompiled this dataset to compare the stance of legislators towards the\nbills with the amount of campaign funds that they received from groups\nconsidered to be supportive of or in opposition to the legislation.",
   "description" : "Description\nThis dataset contains observations on all 100 US Senators and 434 of the\n325 US Congressional Representatives related to their support of anti-piracy\nlegislation that was introduced at the end of 2011.",
   "title" : "Piracy and PIPA/SOPA",
   "format" : "A data frame with 534 observations on the following 8 variables."
}

var piracy = [
   [
      "name",
      "party",
      "state",
      "money_pro",
      "money_con",
      "years",
      "stance",
      "chamber"
   ],
   [
      "Ackerman, Gary",
      " D",
      "NY",
      "13350",
      "14800",
      "30",
      "unknown",
      "house"
   ],
   [
      "Adams, Sandra",
      " R",
      "FL",
      "3500",
      "5650",
      "2",
      "unknown",
      "house"
   ],
   [
      "Aderholt, Robert",
      " R",
      "AL",
      "4779",
      "23944",
      "16",
      "unknown",
      "house"
   ],
   [
      "Akin, Todd",
      " R",
      "MO",
      "2500",
      "8200",
      "12",
      "no",
      "house"
   ],
   [
      "Alexander, Rodney",
      " R",
      "LA",
      "3500",
      "2700",
      "10",
      "no",
      "house"
   ],
   [
      "Altmire, Jason",
      " D",
      "PA",
      "24250",
      "10650",
      "6",
      "unknown",
      "house"
   ],
   [
      "Amash, Justin",
      " R",
      "MI",
      "6750",
      "1700",
      "2",
      "no",
      "house"
   ],
   [
      "Amodei, Mark",
      " R",
      "NV",
      "",
      "",
      "2",
      "yes",
      "house"
   ],
   [
      "Andrews, Robert",
      " D",
      "NJ",
      "9000",
      "6400",
      "24",
      "no",
      "house"
   ],
   [
      "Austria, Steve",
      " R",
      "OH",
      "4500",
      "36474",
      "4",
      "unknown",
      "house"
   ],
   [
      "Baca, Joe",
      " D",
      "CA",
      "12500",
      "3800",
      "14",
      "yes",
      "house"
   ],
   [
      "Bachmann, Michele",
      " R",
      "MN",
      "35690",
      "37900",
      "6",
      "no",
      "house"
   ],
   [
      "Bachus, Spencer",
      " R",
      "AL",
      "9500",
      "6750",
      "20",
      "no",
      "house"
   ],
   [
      "Baldwin, Tammy",
      " D",
      "WI",
      "25400",
      "11600",
      "14",
      "leaning no",
      "house"
   ],
   [
      "Barletta, Lou",
      " R",
      "PA",
      "4200",
      "8450",
      "2",
      "unknown",
      "house"
   ],
   [
      "Barrow, John",
      " D",
      "GA",
      "55550",
      "10300",
      "8",
      "yes",
      "house"
   ],
   [
      "Bartlett, Roscoe",
      " R",
      "MD",
      "750",
      "2400",
      "20",
      "unknown",
      "house"
   ],
   [
      "Barton, Joe",
      " R",
      "TX",
      "58500",
      "27150",
      "28",
      "unknown",
      "house"
   ],
   [
      "Bass, Charles",
      " R",
      "NH",
      "36300",
      "11250",
      "2",
      "leaning no",
      "house"
   ],
   [
      "Bass, Karen",
      " D",
      "CA",
      "52400",
      "16800",
      "2",
      "yes",
      "house"
   ],
   [
      "Becerra, Xavier",
      " D",
      "CA",
      "90944",
      "28200",
      "20",
      "unknown",
      "house"
   ],
   [
      "Benishek, Dan",
      " R",
      "MI",
      "5620",
      "7550",
      "2",
      "no",
      "house"
   ],
   [
      "Berg, Rick",
      " R",
      "ND",
      "7300",
      "12800",
      "2",
      "unknown",
      "house"
   ],
   [
      "Berkley, Shelley",
      " D",
      "NV",
      "11211",
      "7300",
      "14",
      "unknown",
      "house"
   ],
   [
      "Berman, Howard",
      " D",
      "CA",
      "286400",
      "73539",
      "30",
      "yes",
      "house"
   ],
   [
      "Biggert, Judy",
      " R",
      "IL",
      "12750",
      "7500",
      "14",
      "no",
      "house"
   ],
   [
      "Bilbray, Brian",
      " R",
      "CA",
      "16000",
      "30000",
      "8",
      "unknown",
      "house"
   ],
   [
      "Bilirakis, Gus",
      " R",
      "FL",
      "13050",
      "2000",
      "8",
      "unknown",
      "house"
   ],
   [
      "Bishop, Timothy",
      " D",
      "NY",
      "36200",
      "21450",
      "10",
      "leaning no",
      "house"
   ],
   [
      "Bishop, Rob",
      " R",
      "UT",
      "950",
      "11400",
      "10",
      "leaning no",
      "house"
   ],
   [
      "Bishop Jr., Sanford",
      " D",
      "GA",
      "9150",
      "17000",
      "20",
      "unknown",
      "house"
   ],
   [
      "Black, Diane",
      " R",
      "TN",
      "9750",
      "",
      "2",
      "unknown",
      "house"
   ],
   [
      "Blackburn, Marsha",
      " R",
      "TN",
      "85750",
      "16750",
      "10",
      "yes",
      "house"
   ],
   [
      "Blumenauer, Earl",
      " D",
      "OR",
      "6750",
      "25850",
      "18",
      "no",
      "house"
   ],
   [
      "Boehner, John",
      " R",
      "OH",
      "109600",
      "72920",
      "2",
      "unknown",
      "house"
   ],
   [
      "Bonner, Jo",
      " R",
      "AL",
      "3750",
      "15600",
      "10",
      "unknown",
      "house"
   ],
   [
      "Bono Mack, Mary",
      " R",
      "CA",
      "173890",
      "30926",
      "16",
      "yes",
      "house"
   ],
   [
      "Boren, Dan",
      " D",
      "OK",
      "5400",
      "6300",
      "8",
      "unknown",
      "house"
   ],
   [
      "Boswell, Leonard",
      " D",
      "IA",
      "16100",
      "",
      "16",
      "unknown",
      "house"
   ],
   [
      "Boustany Jr., Charles",
      " R",
      "LA",
      "7500",
      "13350",
      "8",
      "unknown",
      "house"
   ],
   [
      "Brady, Kevin",
      " R",
      "TX",
      "15000",
      "19000",
      "16",
      "unknown",
      "house"
   ],
   [
      "Brady, Robert",
      " D",
      "PA",
      "36400",
      "3000",
      "16",
      "unknown",
      "house"
   ],
   [
      "Braley, Bruce",
      " D",
      "IA",
      "28200",
      "16000",
      "6",
      "no",
      "house"
   ],
   [
      "Brooks, Mo",
      " R",
      "AL",
      "1000",
      "23150",
      "2",
      "unknown",
      "house"
   ],
   [
      "Broun, Paul",
      " R",
      "GA",
      "9629",
      "2000",
      "6",
      "no",
      "house"
   ],
   [
      "Brown, Corrine",
      " D",
      "FL",
      "2500",
      "13200",
      "20",
      "unknown",
      "house"
   ],
   [
      "Buchanan, Vern",
      " R",
      "FL",
      "34300",
      "42050",
      "6",
      "unknown",
      "house"
   ],
   [
      "Bucshon, Larry",
      " R",
      "IN",
      "1700",
      "3250",
      "2",
      "unknown",
      "house"
   ],
   [
      "Buerkle, Ann Marie",
      " R",
      "NY",
      "2900",
      "900",
      "2",
      "unknown",
      "house"
   ],
   [
      "Burgess, Michael",
      " R",
      "TX",
      "20000",
      "15500",
      "10",
      "unknown",
      "house"
   ],
   [
      "Burton, Dan",
      " R",
      "IN",
      "1250",
      "",
      "30",
      "unknown",
      "house"
   ],
   [
      "Butterfield, G.",
      " D",
      "NC",
      "21000",
      "2000",
      "10",
      "unknown",
      "house"
   ],
   [
      "Calvert, Ken",
      " R",
      "CA",
      "24000",
      "15400",
      "20",
      "unknown",
      "house"
   ],
   [
      "Camp, Dave",
      " R",
      "MI",
      "31000",
      "62350",
      "22",
      "unknown",
      "house"
   ],
   [
      "Campbell, John",
      " R",
      "CA",
      "6000",
      "32700",
      "8",
      "no",
      "house"
   ],
   [
      "Canseco, Francisco",
      " R",
      "TX",
      "4900",
      "500",
      "2",
      "unknown",
      "house"
   ],
   [
      "Cantor, Eric",
      " R",
      "VA",
      "103700",
      "122650",
      "12",
      "unknown",
      "house"
   ],
   [
      "Capito, Shelley",
      " R",
      "WV",
      "12000",
      "10800",
      "12",
      "unknown",
      "house"
   ],
   [
      "Capps, Lois",
      " D",
      "CA",
      "37350",
      "7950",
      "16",
      "unknown",
      "house"
   ],
   [
      "Capuano, Michael",
      " D",
      "MA",
      "20750",
      "26600",
      "14",
      "leaning no",
      "house"
   ],
   [
      "Cardoza, Dennis",
      " D",
      "CA",
      "15250",
      "3500",
      "10",
      "unknown",
      "house"
   ],
   [
      "Carnahan, Russ",
      " D",
      "MO",
      "21800",
      "12500",
      "8",
      "unknown",
      "house"
   ],
   [
      "Carney, John",
      " D",
      "DE",
      "14300",
      "1750",
      "2",
      "unknown",
      "house"
   ],
   [
      "Carson, Andre",
      " D",
      "IN",
      "6000",
      "1400",
      "6",
      "no",
      "house"
   ],
   [
      "Carter, John",
      " R",
      "TX",
      "12000",
      "33000",
      "10",
      "no",
      "house"
   ],
   [
      "Cassidy, Bill",
      " R",
      "LA",
      "17000",
      "3400",
      "4",
      "unknown",
      "house"
   ],
   [
      "Castor, Kathy",
      " D",
      "FL",
      "20750",
      "8500",
      "6",
      "unknown",
      "house"
   ],
   [
      "Chabot, Steven",
      " R",
      "OH",
      "10800",
      "27100",
      "2",
      "yes",
      "house"
   ],
   [
      "Chaffetz, Jason",
      " R",
      "UT",
      "12000",
      "23407",
      "4",
      "no",
      "house"
   ],
   [
      "Chandler, Ben",
      " D",
      "KY",
      "9000",
      "8250",
      "10",
      "unknown",
      "house"
   ],
   [
      "Chu, Judy",
      " D",
      "CA",
      "47300",
      "8500",
      "6",
      "yes",
      "house"
   ],
   [
      "Cicilline, David",
      " D",
      "RI",
      "45850",
      "6850",
      "2",
      "unknown",
      "house"
   ],
   [
      "Clarke, Yvette",
      " D",
      "NY",
      "9550",
      "22250",
      "6",
      "no",
      "house"
   ],
   [
      "Clarke, Hansen",
      " D",
      "MI",
      "1000",
      "1750",
      "2",
      "unknown",
      "house"
   ],
   [
      "Clay, William",
      " D",
      "MO",
      "7000",
      "9300",
      "12",
      "unknown",
      "house"
   ],
   [
      "Cleaver II, Emanuel",
      " D",
      "MO",
      "3000",
      "3650",
      "8",
      "unknown",
      "house"
   ],
   [
      "Clyburn, James",
      " D",
      "SC",
      "86600",
      "62593",
      "20",
      "unknown",
      "house"
   ],
   [
      "Coble, Howard",
      " R",
      "NC",
      "29250",
      "10000",
      "28",
      "unknown",
      "house"
   ],
   [
      "Coffman, Mike",
      " R",
      "CO",
      "24670",
      "6300",
      "4",
      "no",
      "house"
   ],
   [
      "Cohen, Steve",
      " D",
      "TN",
      "28000",
      "23450",
      "6",
      "unknown",
      "house"
   ],
   [
      "Cole, Tom",
      " R",
      "OK",
      "3000",
      "8354",
      "10",
      "unknown",
      "house"
   ],
   [
      "Conaway, K.",
      " R",
      "TX",
      "16500",
      "",
      "8",
      "unknown",
      "house"
   ],
   [
      "Connolly, Gerald",
      " D",
      "VA",
      "26334",
      "96683",
      "4",
      "no",
      "house"
   ],
   [
      "Conyers Jr., John",
      " D",
      "MI",
      "84591",
      "73983",
      "48",
      "yes",
      "house"
   ],
   [
      "Cooper, Jim",
      " D",
      "TN",
      "11050",
      "8000",
      "10",
      "yes",
      "house"
   ],
   [
      "Costa, Jim",
      " D",
      "CA",
      "13800",
      "3400",
      "8",
      "unknown",
      "house"
   ],
   [
      "Costello, Jerry",
      " D",
      "IL",
      "2000",
      "",
      "26",
      "unknown",
      "house"
   ],
   [
      "Courtney, Joe",
      " D",
      "CT",
      "14900",
      "1250",
      "6",
      "no",
      "house"
   ],
   [
      "Cravaack, Chip",
      " R",
      "MN",
      "1500",
      "500",
      "2",
      "no",
      "house"
   ],
   [
      "Crawford, Rick",
      " R",
      "AR",
      "2500",
      "4650",
      "2",
      "leaning no",
      "house"
   ],
   [
      "Crenshaw, Ander",
      " R",
      "FL",
      "5000",
      "15350",
      "12",
      "unknown",
      "house"
   ],
   [
      "Critz, Mark",
      " D",
      "PA",
      "23200",
      "61800",
      "4",
      "unknown",
      "house"
   ],
   [
      "Crowley, Joseph",
      " D",
      "NY",
      "44300",
      "31449",
      "14",
      "unknown",
      "house"
   ],
   [
      "Cuellar, Henry",
      " D",
      "TX",
      "12400",
      "3000",
      "8",
      "leaning no",
      "house"
   ],
   [
      "Culberson, John",
      " R",
      "TX",
      "5000",
      "7000",
      "12",
      "no",
      "house"
   ],
   [
      "Cummings, Elijah",
      " D",
      "MD",
      "4250",
      "5500",
      "18",
      "unknown",
      "house"
   ],
   [
      "Davis, Danny",
      " D",
      "IL",
      "1000",
      "3500",
      "16",
      "unknown",
      "house"
   ],
   [
      "Davis, Susan",
      " D",
      "CA",
      "2400",
      "13700",
      "12",
      "unknown",
      "house"
   ],
   [
      "Davis, Geoff",
      " R",
      "KY",
      "13400",
      "11800",
      "8",
      "unknown",
      "house"
   ],
   [
      "DeFazio, Peter",
      " D",
      "OR",
      "1000",
      "2786",
      "26",
      "no",
      "house"
   ],
   [
      "DeGette, Diana",
      " D",
      "CO",
      "39600",
      "1250",
      "16",
      "leaning no",
      "house"
   ],
   [
      "DeLauro, Rosa",
      " D",
      "CT",
      "13150",
      "5250",
      "22",
      "no",
      "house"
   ],
   [
      "Denham, Jeffrey",
      " R",
      "CA",
      "4100",
      "4250",
      "2",
      "unknown",
      "house"
   ],
   [
      "Dent, Charlie",
      " R",
      "PA",
      "35050",
      "13400",
      "8",
      "leaning no",
      "house"
   ],
   [
      "DesJarlais, Scott",
      " R",
      "TN",
      "5000",
      "",
      "2",
      "no",
      "house"
   ],
   [
      "Deutch, Ted",
      " D",
      "FL",
      "12500",
      "13900",
      "4",
      "yes",
      "house"
   ],
   [
      "Diaz-Balart, Mario",
      " R",
      "FL",
      "15250",
      "2000",
      "10",
      "unknown",
      "house"
   ],
   [
      "Dicks, Norman",
      " D",
      "WA",
      "2000",
      "49700",
      "36",
      "no",
      "house"
   ],
   [
      "Dingell, John",
      " D",
      "MI",
      "94500",
      "14000",
      "58",
      "unknown",
      "house"
   ],
   [
      "Doggett, Lloyd",
      " D",
      "TX",
      "13900",
      "22050",
      "18",
      "no",
      "house"
   ],
   [
      "Dold, Robert",
      " R",
      "IL",
      "11800",
      "14700",
      "2",
      "leaning no",
      "house"
   ],
   [
      "Donnelly, Joe",
      " D",
      "IN",
      "7800",
      "1900",
      "6",
      "unknown",
      "house"
   ],
   [
      "Doyle, Mike",
      " D",
      "PA",
      "26000",
      "8500",
      "18",
      "no",
      "house"
   ],
   [
      "Dreier, David",
      " R",
      "CA",
      "52100",
      "33419",
      "32",
      "unknown",
      "house"
   ],
   [
      "Duffy, Sean",
      " R",
      "WI",
      "5250",
      "1250",
      "2",
      "unknown",
      "house"
   ],
   [
      "Duncan, Jeffrey",
      " R",
      "SC",
      "1000",
      "1000",
      "2",
      "no",
      "house"
   ],
   [
      "Duncan Jr., John",
      " R",
      "TN",
      "3500",
      "",
      "26",
      "unknown",
      "house"
   ],
   [
      "Edwards, Donna",
      " D",
      "MD",
      "3062",
      "3700",
      "6",
      "unknown",
      "house"
   ],
   [
      "Ellison, Keith",
      " D",
      "MN",
      "4650",
      "10060",
      "6",
      "no",
      "house"
   ],
   [
      "Ellmers, Renee",
      " R",
      "NC",
      "",
      "2950",
      "2",
      "unknown",
      "house"
   ],
   [
      "Emerson, Jo Ann",
      " R",
      "MO",
      "26150",
      "24900",
      "18",
      "unknown",
      "house"
   ],
   [
      "Engel, Eliot",
      " D",
      "NY",
      "30900",
      "1250",
      "24",
      "unknown",
      "house"
   ],
   [
      "Eshoo, Anna",
      " D",
      "CA",
      "22400",
      "163585",
      "20",
      "no",
      "house"
   ],
   [
      "Farenthold, Blake",
      " R",
      "TX",
      "",
      "",
      "2",
      "no",
      "house"
   ],
   [
      "Farr, Sam",
      " D",
      "CA",
      "1500",
      "850",
      "20",
      "unknown",
      "house"
   ],
   [
      "Fattah, Chaka",
      " D",
      "PA",
      "27500",
      "3000",
      "18",
      "unknown",
      "house"
   ],
   [
      "Filner, Bob",
      " D",
      "CA",
      "14800",
      "13800",
      "20",
      "unknown",
      "house"
   ],
   [
      "Fincher, Stephen",
      " R",
      "TN",
      "34700",
      "2000",
      "2",
      "unknown",
      "house"
   ],
   [
      "Fitzpatrick, Michael",
      " R",
      "PA",
      "15600",
      "16450",
      "2",
      "unknown",
      "house"
   ],
   [
      "Flake, Jeff",
      " R",
      "AZ",
      "",
      "16300",
      "12",
      "no",
      "house"
   ],
   [
      "Fleischmann, Chuck",
      " R",
      "TN",
      "6400",
      "2000",
      "2",
      "unknown",
      "house"
   ],
   [
      "Fleming, John",
      " R",
      "LA",
      "3500",
      "1000",
      "4",
      "unknown",
      "house"
   ],
   [
      "Flores, Bill",
      " R",
      "TX",
      "1000",
      "7800",
      "2",
      "leaning no",
      "house"
   ],
   [
      "Forbes, J.",
      " R",
      "VA",
      "14250",
      "7950",
      "12",
      "unknown",
      "house"
   ],
   [
      "Fortenberry, Jeff",
      " R",
      "NE",
      "2000",
      "500",
      "8",
      "no",
      "house"
   ],
   [
      "Foxx, Virginia",
      " R",
      "NC",
      "5000",
      "9910",
      "6",
      "unknown",
      "house"
   ],
   [
      "Frank, Barney",
      " D",
      "MA",
      "32350",
      "23900",
      "32",
      "unknown",
      "house"
   ],
   [
      "Franks, Trent",
      " R",
      "AZ",
      "14300",
      "23550",
      "10",
      "unknown",
      "house"
   ],
   [
      "Frelinghuysen, Rodney",
      " R",
      "NJ",
      "11000",
      "5250",
      "18",
      "unknown",
      "house"
   ],
   [
      "Fudge, Marcia",
      " D",
      "OH",
      "2000",
      "1500",
      "6",
      "unknown",
      "house"
   ],
   [
      "Gallegly, Elton",
      " R",
      "CA",
      "19625",
      "6515",
      "26",
      "yes",
      "house"
   ],
   [
      "Garamendi, John",
      " D",
      "CA",
      "35850",
      "20600",
      "4",
      "unknown",
      "house"
   ],
   [
      "Gardner, Cory",
      " R",
      "CO",
      "15500",
      "10731",
      "2",
      "unknown",
      "house"
   ],
   [
      "Garrett, Scott",
      " R",
      "NJ",
      "13950",
      "22900",
      "10",
      "unknown",
      "house"
   ],
   [
      "Gerlach, Jim",
      " R",
      "PA",
      "30900",
      "29150",
      "10",
      "unknown",
      "house"
   ],
   [
      "Gibbs, Bob",
      " R",
      "OH",
      "3000",
      "1750",
      "2",
      "unknown",
      "house"
   ],
   [
      "Gibson, Chris",
      " R",
      "NY",
      "4900",
      "7550",
      "2",
      "unknown",
      "house"
   ],
   [
      "Giffords, Gabrielle",
      " D",
      "AZ",
      "19750",
      "73915",
      "6",
      "unknown",
      "house"
   ],
   [
      "Gingrey, Phil",
      " R",
      "GA",
      "25000",
      "20933",
      "10",
      "unknown",
      "house"
   ],
   [
      "Gohmert, Louie",
      " R",
      "TX",
      "16650",
      "3000",
      "8",
      "unknown",
      "house"
   ],
   [
      "Gonzalez, Charlie",
      " D",
      "TX",
      "57500",
      "6500",
      "14",
      "unknown",
      "house"
   ],
   [
      "Goodlatte, Robert",
      " R",
      "VA",
      "56500",
      "67819",
      "20",
      "yes",
      "house"
   ],
   [
      "Gosar, Paul",
      " R",
      "AZ",
      "250",
      "11400",
      "2",
      "no",
      "house"
   ],
   [
      "Gowdy, Trey",
      " R",
      "SC",
      "1250",
      "",
      "2",
      "unknown",
      "house"
   ],
   [
      "Granger, Kay",
      " R",
      "TX",
      "9500",
      "26350",
      "16",
      "unknown",
      "house"
   ],
   [
      "Graves, Sam",
      " R",
      "MO",
      "16000",
      "16150",
      "12",
      "unknown",
      "house"
   ],
   [
      "Graves, Tom",
      " R",
      "GA",
      "23900",
      "7750",
      "4",
      "no",
      "house"
   ],
   [
      "Green, Gene",
      " D",
      "TX",
      "37000",
      "5800",
      "20",
      "unknown",
      "house"
   ],
   [
      "Green, Al",
      " D",
      "TX",
      "1500",
      "",
      "8",
      "unknown",
      "house"
   ],
   [
      "Griffin, Tim",
      " R",
      "AR",
      "1500",
      "12050",
      "2",
      "no",
      "house"
   ],
   [
      "Griffith, Morgan",
      " R",
      "VA",
      "3500",
      "4350",
      "2",
      "unknown",
      "house"
   ],
   [
      "Grijalva, Raul",
      " D",
      "AZ",
      "10150",
      "1555",
      "10",
      "no",
      "house"
   ],
   [
      "Grimm, Mike",
      " R",
      "NY",
      "1500",
      "",
      "2",
      "unknown",
      "house"
   ],
   [
      "Guinta, Frank",
      " R",
      "NH",
      "5050",
      "11500",
      "2",
      "leaning no",
      "house"
   ],
   [
      "Guthrie, Brett",
      " R",
      "KY",
      "12500",
      "3000",
      "4",
      "unknown",
      "house"
   ],
   [
      "Gutierrez, Luis",
      " D",
      "IL",
      "8000",
      "1000",
      "20",
      "unknown",
      "house"
   ],
   [
      "Hahn, Janice",
      " D",
      "CA",
      "",
      "",
      "2",
      "undecided",
      "house"
   ],
   [
      "Hall, Ralph",
      " R",
      "TX",
      "11500",
      "7930",
      "32",
      "unknown",
      "house"
   ],
   [
      "Hanabusa, Colleen",
      " D",
      "HI",
      "16900",
      "33650",
      "2",
      "unknown",
      "house"
   ],
   [
      "Hanna, Richard",
      " R",
      "NY",
      "3089",
      "500",
      "2",
      "unknown",
      "house"
   ],
   [
      "Harper, Gregg",
      " R",
      "MS",
      "19000",
      "4000",
      "4",
      "unknown",
      "house"
   ],
   [
      "Harris, Andy",
      " R",
      "MD",
      "3800",
      "8000",
      "2",
      "unknown",
      "house"
   ],
   [
      "Hartzler, Vicky",
      " R",
      "MO",
      "1800",
      "16250",
      "2",
      "unknown",
      "house"
   ],
   [
      "Hastings, Alcee",
      " D",
      "FL",
      "5000",
      "7700",
      "20",
      "unknown",
      "house"
   ],
   [
      "Hastings, Doc",
      " R",
      "WA",
      "9750",
      "10500",
      "18",
      "unknown",
      "house"
   ],
   [
      "Hayworth, Nan",
      " R",
      "NY",
      "1500",
      "9050",
      "2",
      "unknown",
      "house"
   ],
   [
      "Heck, Joe",
      " R",
      "NV",
      "3200",
      "8750",
      "2",
      "unknown",
      "house"
   ],
   [
      "Heinrich, Martin",
      " D",
      "NM",
      "21450",
      "23919",
      "4",
      "no",
      "house"
   ],
   [
      "Hensarling, Jeb",
      " R",
      "TX",
      "12800",
      "11950",
      "10",
      "unknown",
      "house"
   ],
   [
      "Herger, Wally",
      " R",
      "CA",
      "3500",
      "5000",
      "26",
      "no",
      "house"
   ],
   [
      "Herrera Beutler, Jaime",
      " R",
      "WA",
      "4200",
      "10150",
      "2",
      "unknown",
      "house"
   ],
   [
      "Higgins, Brian",
      " D",
      "NY",
      "250",
      "1000",
      "6",
      "no",
      "house"
   ],
   [
      "Himes, Jim",
      " D",
      "CT",
      "42150",
      "7864",
      "4",
      "leaning no",
      "house"
   ],
   [
      "Hinchey, Maurice",
      " D",
      "NY",
      "11750",
      "9000",
      "20",
      "unknown",
      "house"
   ],
   [
      "Hinojosa, Ruben",
      " D",
      "TX",
      "3900",
      "5150",
      "16",
      "unknown",
      "house"
   ],
   [
      "Hirono, Mazie",
      " D",
      "HI",
      "250",
      "9400",
      "6",
      "unknown",
      "house"
   ],
   [
      "Hochul, Kathy",
      " D",
      "NY",
      "",
      "",
      "2",
      "unknown",
      "house"
   ],
   [
      "Holden, Tim",
      " D",
      "PA",
      "15500",
      "9000",
      "20",
      "no",
      "house"
   ],
   [
      "Holt, Rush",
      " D",
      "NJ",
      "22200",
      "15300",
      "14",
      "no",
      "house"
   ],
   [
      "Honda, Michael",
      " D",
      "CA",
      "3600",
      "42807",
      "12",
      "no",
      "house"
   ],
   [
      "Hoyer, Steny",
      " D",
      "MD",
      "117190",
      "41150",
      "32",
      "unknown",
      "house"
   ],
   [
      "Huelskamp, Tim",
      " R",
      "KS",
      "4125",
      "7500",
      "2",
      "no",
      "house"
   ],
   [
      "Huizenga, Bill",
      " R",
      "MI",
      "3750",
      "",
      "2",
      "unknown",
      "house"
   ],
   [
      "Hultgren, Randy",
      " R",
      "IL",
      "7400",
      "2750",
      "2",
      "leaning no",
      "house"
   ],
   [
      "Hunter, Duncan",
      " R",
      "CA",
      "5000",
      "10950",
      "4",
      "unknown",
      "house"
   ],
   [
      "Hurt, Robert",
      " R",
      "VA",
      "11650",
      "21050",
      "2",
      "unknown",
      "house"
   ],
   [
      "Inslee, Jay",
      " D",
      "WA",
      "20400",
      "70515",
      "14",
      "undecided",
      "house"
   ],
   [
      "Israel, Steve",
      " D",
      "NY",
      "41700",
      "28100",
      "12",
      "leaning no",
      "house"
   ],
   [
      "Issa, Darrell",
      " R",
      "CA",
      "33300",
      "60324",
      "12",
      "no",
      "house"
   ],
   [
      "Jackson Jr., Jesse",
      " D",
      "IL",
      "7800",
      "1000",
      "18",
      "unknown",
      "house"
   ],
   [
      "Jackson-Lee, Sheila",
      " D",
      "TX",
      "11500",
      "6500",
      "18",
      "leaning no",
      "house"
   ],
   [
      "Jenkins, Lynn",
      " R",
      "KS",
      "10500",
      "11732",
      "4",
      "no",
      "house"
   ],
   [
      "Johnson, Eddie",
      " D",
      "TX",
      "2800",
      "3800",
      "20",
      "unknown",
      "house"
   ],
   [
      "Johnson, Sam",
      " R",
      "TX",
      "4500",
      "8700",
      "22",
      "unknown",
      "house"
   ],
   [
      "Johnson, Timothy",
      " R",
      "IL",
      "2000",
      "",
      "12",
      "no",
      "house"
   ],
   [
      "Johnson, Hank",
      " D",
      "GA",
      "14900",
      "5750",
      "6",
      "no",
      "house"
   ],
   [
      "Johnson, Bill",
      " R",
      "OH",
      "12700",
      "750",
      "2",
      "unknown",
      "house"
   ],
   [
      "Jones, Walter",
      " R",
      "NC",
      "1500",
      "1250",
      "18",
      "no",
      "house"
   ],
   [
      "Jordan, Jim",
      " R",
      "OH",
      "30800",
      "4300",
      "6",
      "unknown",
      "house"
   ],
   [
      "Kaptur, Marcy",
      " D",
      "OH",
      "500",
      "",
      "30",
      "unknown",
      "house"
   ],
   [
      "Keating, Bill",
      " D",
      "MA",
      "3400",
      "9800",
      "2",
      "unknown",
      "house"
   ],
   [
      "Kelly, Mike",
      " R",
      "PA",
      "7800",
      "3500",
      "2",
      "unknown",
      "house"
   ],
   [
      "Kildee, Dale",
      " D",
      "MI",
      "3000",
      "",
      "36",
      "unknown",
      "house"
   ],
   [
      "Kind, Ron",
      " D",
      "WI",
      "19500",
      "19861",
      "16",
      "unknown",
      "house"
   ],
   [
      "King, Peter",
      " R",
      "NY",
      "12400",
      "24150",
      "20",
      "yes",
      "house"
   ],
   [
      "King, Steve",
      " R",
      "IA",
      "12500",
      "4500",
      "10",
      "unknown",
      "house"
   ],
   [
      "Kingston, Jack",
      " R",
      "GA",
      "9750",
      "16650",
      "20",
      "unknown",
      "house"
   ],
   [
      "Kinzinger, Adam",
      " R",
      "IL",
      "9100",
      "1950",
      "2",
      "leaning no",
      "house"
   ],
   [
      "Kissell, Larry",
      " D",
      "NC",
      "9000",
      "4840",
      "4",
      "unknown",
      "house"
   ],
   [
      "Kline, John",
      " R",
      "MN",
      "16600",
      "16950",
      "10",
      "no",
      "house"
   ],
   [
      "Kucinich, Dennis",
      " D",
      "OH",
      "16950",
      "1500",
      "16",
      "unknown",
      "house"
   ],
   [
      "Labrador, Raul",
      " R",
      "ID",
      "1000",
      "5250",
      "2",
      "leaning no",
      "house"
   ],
   [
      "Lamborn, Doug",
      " R",
      "CO",
      "2500",
      "7400",
      "6",
      "unknown",
      "house"
   ],
   [
      "Lance, Leonard",
      " R",
      "NJ",
      "18550",
      "1500",
      "4",
      "leaning no",
      "house"
   ],
   [
      "Landry, Jeff",
      " R",
      "LA",
      "3500",
      "1000",
      "2",
      "unknown",
      "house"
   ],
   [
      "Langevin, Jim",
      " D",
      "RI",
      "1250",
      "32850",
      "12",
      "no",
      "house"
   ],
   [
      "Lankford, James",
      " R",
      "OK",
      "1000",
      "9700",
      "2",
      "leaning no",
      "house"
   ],
   [
      "Larsen, Rick",
      " D",
      "WA",
      "15300",
      "53200",
      "12",
      "no",
      "house"
   ],
   [
      "Larson, John",
      " D",
      "CT",
      "35150",
      "18644",
      "14",
      "yes",
      "house"
   ],
   [
      "Latham, Tom",
      " R",
      "IA",
      "8000",
      "",
      "18",
      "no",
      "house"
   ],
   [
      "LaTourette, Steven",
      " R",
      "OH",
      "9000",
      "3500",
      "18",
      "unknown",
      "house"
   ],
   [
      "Latta, Robert",
      " R",
      "OH",
      "29500",
      "5000",
      "6",
      "leaning no",
      "house"
   ],
   [
      "Lee, Barbara",
      " D",
      "CA",
      "18407",
      "15750",
      "16",
      "leaning no",
      "house"
   ],
   [
      "Levin, Sander",
      " D",
      "MI",
      "26400",
      "24000",
      "30",
      "no",
      "house"
   ],
   [
      "Lewis, Jerry",
      " R",
      "CA",
      "8400",
      "23050",
      "34",
      "undecided",
      "house"
   ],
   [
      "Lewis, John",
      " D",
      "GA",
      "20000",
      "7000",
      "26",
      "leaning no",
      "house"
   ],
   [
      "Lipinski, Daniel",
      " D",
      "IL",
      "1000",
      "",
      "8",
      "unknown",
      "house"
   ],
   [
      "Loebsack, Dave",
      " D",
      "IA",
      "5000",
      "1000",
      "6",
      "unknown",
      "house"
   ],
   [
      "Lofgren, Zoe",
      " D",
      "CA",
      "17850",
      "142897",
      "18",
      "no",
      "house"
   ],
   [
      "Long, Billy",
      " R",
      "MO",
      "4350",
      "3400",
      "2",
      "unknown",
      "house"
   ],
   [
      "Lowey, Nita",
      " D",
      "NY",
      "23900",
      "750",
      "24",
      "unknown",
      "house"
   ],
   [
      "Lucas, Frank",
      " R",
      "OK",
      "3750",
      "1000",
      "20",
      "unknown",
      "house"
   ],
   [
      "Luetkemeyer, Blaine",
      " R",
      "MO",
      "11250",
      "4750",
      "4",
      "unknown",
      "house"
   ],
   [
      "Lujan, Ben",
      " D",
      "NM",
      "19300",
      "12250",
      "4",
      "yes",
      "house"
   ],
   [
      "Lummis, Cynthia",
      " R",
      "WY",
      "6000",
      "2250",
      "4",
      "unknown",
      "house"
   ],
   [
      "Lungren, Dan",
      " R",
      "CA",
      "40000",
      "61935",
      "8",
      "unknown",
      "house"
   ],
   [
      "Lynch, Stephen",
      " D",
      "MA",
      "500",
      "1000",
      "12",
      "unknown",
      "house"
   ],
   [
      "Mack, Connie",
      " R",
      "FL",
      "14200",
      "4000",
      "8",
      "unknown",
      "house"
   ],
   [
      "Maloney, Carolyn",
      " D",
      "NY",
      "44040",
      "20800",
      "20",
      "unknown",
      "house"
   ],
   [
      "Manzullo, Donald",
      " R",
      "IL",
      "6500",
      "4500",
      "20",
      "no",
      "house"
   ],
   [
      "Marchant, Kenny",
      " R",
      "TX",
      "5500",
      "4750",
      "8",
      "no",
      "house"
   ],
   [
      "Marino, Tom",
      " R",
      "PA",
      "2800",
      "2250",
      "2",
      "yes",
      "house"
   ],
   [
      "Markey, Edward",
      " D",
      "MA",
      "65750",
      "45658",
      "38",
      "unknown",
      "house"
   ],
   [
      "Matheson, Jim",
      " D",
      "UT",
      "42250",
      "26850",
      "12",
      "no",
      "house"
   ],
   [
      "Matsui, Doris",
      " D",
      "CA",
      "31000",
      "15000",
      "8",
      "no",
      "house"
   ],
   [
      "McCarthy, Carolyn",
      " D",
      "NY",
      "10850",
      "2650",
      "16",
      "unknown",
      "house"
   ],
   [
      "McCarthy, Kevin",
      " R",
      "CA",
      "48500",
      "51500",
      "6",
      "unknown",
      "house"
   ],
   [
      "McCaul, Michael",
      " R",
      "TX",
      "46200",
      "76600",
      "8",
      "unknown",
      "house"
   ],
   [
      "McClintock, Tom",
      " R",
      "CA",
      "4950",
      "24900",
      "4",
      "unknown",
      "house"
   ],
   [
      "McCollum, Betty",
      " D",
      "MN",
      "2450",
      "4700",
      "12",
      "no",
      "house"
   ],
   [
      "McCotter, Thaddeus",
      " R",
      "MI",
      "19309",
      "4000",
      "10",
      "no",
      "house"
   ],
   [
      "McDermott, Jim",
      " D",
      "WA",
      "4800",
      "7700",
      "24",
      "no",
      "house"
   ],
   [
      "McGovern, Jim",
      " D",
      "MA",
      "5400",
      "17151",
      "16",
      "leaning no",
      "house"
   ],
   [
      "McHenry, Patrick",
      " R",
      "NC",
      "12000",
      "4500",
      "8",
      "no",
      "house"
   ],
   [
      "McIntyre, Mike",
      " D",
      "NC",
      "11000",
      "7000",
      "16",
      "unknown",
      "house"
   ],
   [
      "McKeon, Howard",
      " R",
      "CA",
      "10990",
      "13000",
      "20",
      "unknown",
      "house"
   ],
   [
      "McKinley, David",
      " R",
      "WV",
      "2000",
      "4900",
      "2",
      "unknown",
      "house"
   ],
   [
      "McMorris Rodgers, Cathy",
      " R",
      "WA",
      "15000",
      "25288",
      "8",
      "unknown",
      "house"
   ],
   [
      "McNerney, Jerry",
      " D",
      "CA",
      "45100",
      "86850",
      "6",
      "no",
      "house"
   ],
   [
      "Meehan, Pat",
      " R",
      "PA",
      "20800",
      "16025",
      "2",
      "unknown",
      "house"
   ],
   [
      "Meeks, Gregory",
      " D",
      "NY",
      "7050",
      "10015",
      "16",
      "unknown",
      "house"
   ],
   [
      "Mica, John",
      " R",
      "FL",
      "5250",
      "2550",
      "20",
      "unknown",
      "house"
   ],
   [
      "Michaud, Michael",
      " D",
      "ME",
      "4500",
      "5499",
      "10",
      "no",
      "house"
   ],
   [
      "Miller, George",
      " D",
      "CA",
      "7650",
      "8650",
      "38",
      "no",
      "house"
   ],
   [
      "Miller, Gary",
      " R",
      "CA",
      "4500",
      "750",
      "14",
      "unknown",
      "house"
   ],
   [
      "Miller, Jeff",
      " R",
      "FL",
      "4500",
      "34250",
      "12",
      "unknown",
      "house"
   ],
   [
      "Miller, Candice",
      " R",
      "MI",
      "6600",
      "1550",
      "10",
      "no",
      "house"
   ],
   [
      "Miller, Brad",
      " D",
      "NC",
      "5500",
      "12100",
      "10",
      "unknown",
      "house"
   ],
   [
      "Moore, Gwen",
      " D",
      "WI",
      "2750",
      "",
      "8",
      "unknown",
      "house"
   ],
   [
      "Moran, James",
      " D",
      "VA",
      "",
      "129150",
      "22",
      "no",
      "house"
   ],
   [
      "Mulvaney, Mick",
      " R",
      "SC",
      "1000",
      "15460",
      "2",
      "unknown",
      "house"
   ],
   [
      "Murphy, Tim",
      " R",
      "PA",
      "26500",
      "14650",
      "10",
      "unknown",
      "house"
   ],
   [
      "Murphy, Christopher",
      " D",
      "CT",
      "69700",
      "19500",
      "6",
      "unknown",
      "house"
   ],
   [
      "Myrick, Sue",
      " R",
      "NC",
      "32250",
      "12750",
      "18",
      "unknown",
      "house"
   ],
   [
      "Nadler, Jerrold",
      " D",
      "NY",
      "36500",
      "8750",
      "22",
      "unknown",
      "house"
   ],
   [
      "Napolitano, Grace",
      " D",
      "CA",
      "3000",
      "",
      "14",
      "unknown",
      "house"
   ],
   [
      "Neal, Richard",
      " D",
      "MA",
      "7750",
      "41716",
      "24",
      "unknown",
      "house"
   ],
   [
      "Neugebauer, Randy",
      " R",
      "TX",
      "4000",
      "1500",
      "10",
      "unknown",
      "house"
   ],
   [
      "Noem, Kristi",
      " R",
      "SD",
      "3950",
      "5800",
      "2",
      "undecided",
      "house"
   ],
   [
      "Nugent, Richard",
      " R",
      "FL",
      "2750",
      "500",
      "2",
      "no",
      "house"
   ],
   [
      "Nunes, Devin",
      " R",
      "CA",
      "11000",
      "11000",
      "10",
      "unknown",
      "house"
   ],
   [
      "Nunnelee, Alan",
      " R",
      "MS",
      "1700",
      "6000",
      "2",
      "yes",
      "house"
   ],
   [
      "Olson, Pete",
      " R",
      "TX",
      "6000",
      "9450",
      "4",
      "unknown",
      "house"
   ],
   [
      "Olver, John",
      " D",
      "MA",
      "1550",
      "2500",
      "22",
      "leaning no",
      "house"
   ],
   [
      "Owens, Bill",
      " D",
      "NY",
      "35850",
      "8550",
      "4",
      "yes",
      "house"
   ],
   [
      "Palazzo, Steven",
      " R",
      "MS",
      "500",
      "7250",
      "2",
      "unknown",
      "house"
   ],
   [
      "Pallone, Frank",
      " D",
      "NJ",
      "49200",
      "11500",
      "26",
      "unknown",
      "house"
   ],
   [
      "Pascrell Jr., Bill",
      " D",
      "NJ",
      "6000",
      "1500",
      "16",
      "no",
      "house"
   ],
   [
      "Pastor, Ed",
      " D",
      "AZ",
      "3000",
      "5250",
      "22",
      "unknown",
      "house"
   ],
   [
      "Paul, Ron",
      " R",
      "TX",
      "500",
      "3856",
      "24",
      "no",
      "house"
   ],
   [
      "Paulsen, Erik",
      " R",
      "MN",
      "39300",
      "19600",
      "4",
      "no",
      "house"
   ],
   [
      "Payne, Donald",
      " D",
      "NJ",
      "6000",
      "2250",
      "24",
      "unknown",
      "house"
   ],
   [
      "Pearce, Steve",
      " R",
      "NM",
      "20400",
      "7150",
      "2",
      "unknown",
      "house"
   ],
   [
      "Pelosi, Nancy",
      " D",
      "CA",
      "76950",
      "63475",
      "24",
      "no",
      "house"
   ],
   [
      "Pence, Mike",
      " R",
      "IN",
      "33150",
      "23228",
      "12",
      "unknown",
      "house"
   ],
   [
      "Perlmutter, Ed",
      " D",
      "CO",
      "29350",
      "13500",
      "6",
      "unknown",
      "house"
   ],
   [
      "Peters, Gary",
      " D",
      "MI",
      "25450",
      "24650",
      "4",
      "unknown",
      "house"
   ],
   [
      "Peterson, Collin",
      " D",
      "MN",
      "5900",
      "",
      "22",
      "unknown",
      "house"
   ],
   [
      "Petri, Tom",
      " R",
      "WI",
      "7200",
      "500",
      "34",
      "unknown",
      "house"
   ],
   [
      "Pingree, Chellie",
      " D",
      "ME",
      "11300",
      "500",
      "4",
      "no",
      "house"
   ],
   [
      "Pitts, Joe",
      " R",
      "PA",
      "26300",
      "11500",
      "16",
      "unknown",
      "house"
   ],
   [
      "Platts, Todd",
      " R",
      "PA",
      "2000",
      "200",
      "12",
      "unknown",
      "house"
   ],
   [
      "Poe, Ted",
      " R",
      "TX",
      "15500",
      "4300",
      "8",
      "unknown",
      "house"
   ],
   [
      "Polis, Jared",
      " D",
      "CO",
      "3500",
      "4500",
      "4",
      "no",
      "house"
   ],
   [
      "Pompeo, Mike",
      " R",
      "KS",
      "7850",
      "6665",
      "2",
      "leaning no",
      "house"
   ],
   [
      "Posey, Bill",
      " R",
      "FL",
      "6500",
      "6250",
      "4",
      "unknown",
      "house"
   ],
   [
      "Price, David",
      " D",
      "NC",
      "2500",
      "22950",
      "24",
      "leaning no",
      "house"
   ],
   [
      "Price, Tom",
      " R",
      "GA",
      "11000",
      "19233",
      "8",
      "unknown",
      "house"
   ],
   [
      "Quayle, Ben",
      " R",
      "AZ",
      "35850",
      "33233",
      "2",
      "no",
      "house"
   ],
   [
      "Quigley, Mike",
      " D",
      "IL",
      "7000",
      "13732",
      "4",
      "unknown",
      "house"
   ],
   [
      "Rahall II, Nick",
      " D",
      "WV",
      "8650",
      "9800",
      "36",
      "unknown",
      "house"
   ],
   [
      "Rangel, Charles",
      " D",
      "NY",
      "36450",
      "45883",
      "42",
      "unknown",
      "house"
   ],
   [
      "Reed, Tom",
      " R",
      "NY",
      "1000",
      "25350",
      "4",
      "unknown",
      "house"
   ],
   [
      "Rehberg, Denny",
      " R",
      "MT",
      "20050",
      "7900",
      "12",
      "undecided",
      "house"
   ],
   [
      "Reichert, Dave",
      " R",
      "WA",
      "26950",
      "72876",
      "8",
      "unknown",
      "house"
   ],
   [
      "Renacci, Jim",
      " R",
      "OH",
      "19650",
      "2400",
      "2",
      "leaning no",
      "house"
   ],
   [
      "Reyes, Silvestre",
      " D",
      "TX",
      "8400",
      "11900",
      "16",
      "no",
      "house"
   ],
   [
      "Ribble, Reid",
      " R",
      "WI",
      "300",
      "",
      "2",
      "unknown",
      "house"
   ],
   [
      "Richardson, Laura",
      " D",
      "CA",
      "5250",
      "10000",
      "6",
      "unknown",
      "house"
   ],
   [
      "Richmond, Cedric",
      " D",
      "LA",
      "3500",
      "6650",
      "2",
      "unknown",
      "house"
   ],
   [
      "Rigell, Scott",
      " R",
      "VA",
      "10300",
      "12700",
      "2",
      "unknown",
      "house"
   ],
   [
      "Rivera, David",
      " R",
      "FL",
      "5500",
      "17400",
      "2",
      "unknown",
      "house"
   ],
   [
      "Roby, Martha",
      " R",
      "AL",
      "2720",
      "6100",
      "2",
      "unknown",
      "house"
   ],
   [
      "Roe, Phil",
      " R",
      "TN",
      "200",
      "",
      "4",
      "unknown",
      "house"
   ],
   [
      "Rogers, Harold",
      " R",
      "KY",
      "9000",
      "35500",
      "32",
      "unknown",
      "house"
   ],
   [
      "Rogers, Mike",
      " R",
      "MI",
      "47400",
      "46000",
      "12",
      "leaning no",
      "house"
   ],
   [
      "Rogers, Mike",
      " R",
      "AL",
      "500",
      "12333",
      "12",
      "unknown",
      "house"
   ],
   [
      "Rohrabacher, Dana",
      " R",
      "CA",
      "500",
      "10200",
      "24",
      "unknown",
      "house"
   ],
   [
      "Rokita, Todd",
      " R",
      "IN",
      "7500",
      "8550",
      "2",
      "leaning no",
      "house"
   ],
   [
      "Rooney, Tom",
      " R",
      "FL",
      "35250",
      "14600",
      "4",
      "unknown",
      "house"
   ],
   [
      "Ros-Lehtinen, Ileana",
      " R",
      "FL",
      "37200",
      "13650",
      "24",
      "unknown",
      "house"
   ],
   [
      "Roskam, Peter",
      " R",
      "IL",
      "14000",
      "26750",
      "6",
      "leaning no",
      "house"
   ],
   [
      "Ross, Mike",
      " D",
      "AR",
      "43700",
      "13000",
      "12",
      "unknown",
      "house"
   ],
   [
      "Ross, Dennis",
      " R",
      "FL",
      "8500",
      "3000",
      "2",
      "yes",
      "house"
   ],
   [
      "Rothman, Steven",
      " D",
      "NJ",
      "4500",
      "9400",
      "16",
      "unknown",
      "house"
   ],
   [
      "Roybal-Allard, Lucille",
      " D",
      "CA",
      "4400",
      "1000",
      "20",
      "unknown",
      "house"
   ],
   [
      "Royce, Ed",
      " R",
      "CA",
      "6150",
      "3800",
      "20",
      "unknown",
      "house"
   ],
   [
      "Runyan, Jon",
      " R",
      "NJ",
      "5700",
      "2000",
      "2",
      "unknown",
      "house"
   ],
   [
      "Ruppersberger, C.A. Dutch",
      " D",
      "MD",
      "23500",
      "32200",
      "10",
      "unknown",
      "house"
   ],
   [
      "Rush, Bobby",
      " D",
      "IL",
      "33000",
      "15250",
      "20",
      "unknown",
      "house"
   ],
   [
      "Ryan, Paul",
      " R",
      "WI",
      "24250",
      "28850",
      "14",
      "no",
      "house"
   ],
   [
      "Ryan, Tim",
      " D",
      "OH",
      "7000",
      "7200",
      "10",
      "unknown",
      "house"
   ],
   [
      "Sanchez, Loretta",
      " D",
      "CA",
      "56725",
      "26400",
      "16",
      "unknown",
      "house"
   ],
   [
      "Sanchez, Linda",
      " D",
      "CA",
      "24400",
      "9019",
      "10",
      "unknown",
      "house"
   ],
   [
      "Sarbanes, John",
      " D",
      "MD",
      "1000",
      "3000",
      "6",
      "leaning no",
      "house"
   ],
   [
      "Scalise, Steve",
      " R",
      "LA",
      "37250",
      "20300",
      "6",
      "no",
      "house"
   ],
   [
      "Schakowsky, Jan",
      " D",
      "IL",
      "12050",
      "10700",
      "14",
      "no",
      "house"
   ],
   [
      "Schiff, Adam",
      " D",
      "CA",
      "62700",
      "6250",
      "12",
      "yes",
      "house"
   ],
   [
      "Schilling, Bobby",
      " R",
      "IL",
      "2750",
      "2300",
      "2",
      "leaning no",
      "house"
   ],
   [
      "Schmidt, Jean",
      " R",
      "OH",
      "750",
      "2400",
      "8",
      "unknown",
      "house"
   ],
   [
      "Schock, Aaron",
      " R",
      "IL",
      "29100",
      "8750",
      "4",
      "no",
      "house"
   ],
   [
      "Schrader, Kurt",
      " D",
      "OR",
      "25600",
      "30800",
      "4",
      "no",
      "house"
   ],
   [
      "Schwartz, Allyson",
      " D",
      "PA",
      "39200",
      "42550",
      "6",
      "no",
      "house"
   ],
   [
      "Schweikert, David",
      " R",
      "AZ",
      "5000",
      "14683",
      "2",
      "unknown",
      "house"
   ],
   [
      "Scott, Robert",
      " D",
      "VA",
      "11000",
      "10000",
      "20",
      "unknown",
      "house"
   ],
   [
      "Scott, David",
      " D",
      "GA",
      "7500",
      "1000",
      "10",
      "unknown",
      "house"
   ],
   [
      "Scott, Tim",
      " R",
      "SC",
      "3750",
      "4000",
      "2",
      "no",
      "house"
   ],
   [
      "Scott, Austin",
      " R",
      "GA",
      "2750",
      "9000",
      "2",
      "unknown",
      "house"
   ],
   [
      "Sensenbrenner, F.",
      " R",
      "WI",
      "33500",
      "13000",
      "34",
      "no",
      "house"
   ],
   [
      "Serrano, Jose",
      " D",
      "NY",
      "2400",
      "2250",
      "24",
      "unknown",
      "house"
   ],
   [
      "Sessions, Pete",
      " R",
      "TX",
      "17500",
      "28950",
      "16",
      "unknown",
      "house"
   ],
   [
      "Sewell, Terri",
      " D",
      "AL",
      "14800",
      "6500",
      "2",
      "unknown",
      "house"
   ],
   [
      "Sherman, Brad",
      " D",
      "CA",
      "97500",
      "18800",
      "16",
      "yes",
      "house"
   ],
   [
      "Shimkus, John",
      " R",
      "IL",
      "50250",
      "20750",
      "16",
      "leaning no",
      "house"
   ],
   [
      "Shuler, Heath",
      " D",
      "NC",
      "14000",
      "11400",
      "6",
      "unknown",
      "house"
   ],
   [
      "Shuster, Bill",
      " R",
      "PA",
      "14500",
      "4400",
      "12",
      "unknown",
      "house"
   ],
   [
      "Simpson, Mike",
      " R",
      "ID",
      "8000",
      "13210",
      "14",
      "unknown",
      "house"
   ],
   [
      "Sires, Albio",
      " D",
      "NJ",
      "16800",
      "",
      "8",
      "unknown",
      "house"
   ],
   [
      "Slaughter, Louise",
      " D",
      "NY",
      "10000",
      "11750",
      "26",
      "no",
      "house"
   ],
   [
      "Smith, Adam",
      " D",
      "WA",
      "5000",
      "36446",
      "16",
      "no",
      "house"
   ],
   [
      "Smith, Christopher",
      " R",
      "NJ",
      "10500",
      "2900",
      "32",
      "unknown",
      "house"
   ],
   [
      "Smith, Lamar",
      " R",
      "TX",
      "90850",
      "47250",
      "26",
      "yes",
      "house"
   ],
   [
      "Smith, Adrian",
      " R",
      "NE",
      "11500",
      "4800",
      "6",
      "unknown",
      "house"
   ],
   [
      "Southerland, Steve",
      " R",
      "FL",
      "2200",
      "4750",
      "2",
      "no",
      "house"
   ],
   [
      "Speier, Jackie",
      " D",
      "CA",
      "2000",
      "21950",
      "6",
      "no",
      "house"
   ],
   [
      "Stark, Pete",
      " D",
      "CA",
      "",
      "1000",
      "40",
      "no",
      "house"
   ],
   [
      "Stearns, Cliff",
      " R",
      "FL",
      "66500",
      "24400",
      "24",
      "unknown",
      "house"
   ],
   [
      "Stivers, Steve",
      " R",
      "OH",
      "22551",
      "6750",
      "2",
      "leaning no",
      "house"
   ],
   [
      "Stutzman, Marlin",
      " R",
      "IN",
      "2750",
      "3200",
      "4",
      "undecided",
      "house"
   ],
   [
      "Sullivan, John",
      " R",
      "OK",
      "39000",
      "2000",
      "12",
      "leaning no",
      "house"
   ],
   [
      "Sutton, Betty",
      " D",
      "OH",
      "18100",
      "2750",
      "6",
      "unknown",
      "house"
   ],
   [
      "Terry, Lee",
      " R",
      "NE",
      "52750",
      "26150",
      "14",
      "no",
      "house"
   ],
   [
      "Thompson, Bennie",
      " D",
      "MS",
      "8450",
      "44000",
      "20",
      "unknown",
      "house"
   ],
   [
      "Thompson, Mike",
      " D",
      "CA",
      "4500",
      "9127",
      "14",
      "no",
      "house"
   ],
   [
      "Thompson, Glenn",
      " R",
      "PA",
      "12000",
      "2900",
      "4",
      "unknown",
      "house"
   ],
   [
      "Thornberry, William",
      " R",
      "TX",
      "4000",
      "5150",
      "18",
      "no",
      "house"
   ],
   [
      "Tiberi, Pat",
      " R",
      "OH",
      "27450",
      "23400",
      "12",
      "unknown",
      "house"
   ],
   [
      "Tierney, John",
      " D",
      "MA",
      "2250",
      "16600",
      "16",
      "unknown",
      "house"
   ],
   [
      "Tipton, Scott",
      " R",
      "CO",
      "13900",
      "6400",
      "2",
      "unknown",
      "house"
   ],
   [
      "Tonko, Paul",
      " D",
      "NY",
      "3500",
      "12800",
      "4",
      "unknown",
      "house"
   ],
   [
      "Towns, Edolphus",
      " D",
      "NY",
      "64350",
      "46000",
      "30",
      "unknown",
      "house"
   ],
   [
      "Tsongas, Niki",
      " D",
      "MA",
      "25950",
      "25550",
      "6",
      "no",
      "house"
   ],
   [
      "Turner, Michael",
      " R",
      "OH",
      "1000",
      "33050",
      "10",
      "no",
      "house"
   ],
   [
      "Turner, Bob",
      " R",
      "NY",
      "1000",
      "",
      "2",
      "unknown",
      "house"
   ],
   [
      "Upton, Fred",
      " R",
      "MI",
      "101350",
      "38076",
      "26",
      "unknown",
      "house"
   ],
   [
      "Van Hollen, Chris",
      " D",
      "MD",
      "18500",
      "33350",
      "10",
      "unknown",
      "house"
   ],
   [
      "Velazquez, Nydia",
      " D",
      "NY",
      "17000",
      "20750",
      "20",
      "unknown",
      "house"
   ],
   [
      "Visclosky, Peter",
      " D",
      "IN",
      "500",
      "3000",
      "28",
      "unknown",
      "house"
   ],
   [
      "Walberg, Tim",
      " R",
      "MI",
      "12600",
      "2250",
      "2",
      "unknown",
      "house"
   ],
   [
      "Walden, Greg",
      " R",
      "OR",
      "69600",
      "48250",
      "14",
      "unknown",
      "house"
   ],
   [
      "Walsh, Joe",
      " R",
      "IL",
      "2500",
      "1500",
      "2",
      "no",
      "house"
   ],
   [
      "Walz, Tim",
      " D",
      "MN",
      "13900",
      "2870",
      "6",
      "no",
      "house"
   ],
   [
      "Wasserman Schultz, Debbie",
      " D",
      "FL",
      "70600",
      "23169",
      "8",
      "yes",
      "house"
   ],
   [
      "Waters, Maxine",
      " D",
      "CA",
      "4900",
      "5800",
      "22",
      "unknown",
      "house"
   ],
   [
      "Watt, Melvin",
      " D",
      "NC",
      "25000",
      "7000",
      "20",
      "yes",
      "house"
   ],
   [
      "Waxman, Henry",
      " D",
      "CA",
      "148150",
      "31547",
      "38",
      "unknown",
      "house"
   ],
   [
      "Webster, Daniel",
      " R",
      "FL",
      "11000",
      "4250",
      "2",
      "unknown",
      "house"
   ],
   [
      "Welch, Peter",
      " D",
      "VT",
      "37400",
      "13750",
      "6",
      "unknown",
      "house"
   ],
   [
      "West, Allen",
      " R",
      "FL",
      "12690",
      "17850",
      "2",
      "unknown",
      "house"
   ],
   [
      "Westmoreland, Lynn",
      " R",
      "GA",
      "10000",
      "8083",
      "8",
      "no",
      "house"
   ],
   [
      "Whitfield, Edward",
      " R",
      "KY",
      "33750",
      "13000",
      "18",
      "unknown",
      "house"
   ],
   [
      "Wilson, Joe",
      " R",
      "SC",
      "5650",
      "7400",
      "12",
      "unknown",
      "house"
   ],
   [
      "Wilson, Frederica",
      " D",
      "FL",
      "1250",
      "",
      "2",
      "unknown",
      "house"
   ],
   [
      "Wittman, Robert",
      " R",
      "VA",
      "7250",
      "8950",
      "6",
      "unknown",
      "house"
   ],
   [
      "Wolf, Frank",
      " R",
      "VA",
      "6000",
      "54500",
      "32",
      "unknown",
      "house"
   ],
   [
      "Womack, Steve",
      " R",
      "AR",
      "18460",
      "",
      "2",
      "unknown",
      "house"
   ],
   [
      "Woodall, Rob",
      " R",
      "GA",
      "2750",
      "2500",
      "2",
      "no",
      "house"
   ],
   [
      "Woolsey, Lynn",
      " D",
      "CA",
      "6350",
      "5250",
      "20",
      "unknown",
      "house"
   ],
   [
      "Yarmuth, John",
      " D",
      "KY",
      "7050",
      "6900",
      "6",
      "leaning no",
      "house"
   ],
   [
      "Yoder, Kevin",
      " R",
      "KS",
      "3380",
      "28142",
      "2",
      "no",
      "house"
   ],
   [
      "Young, C. W. Bill",
      " R",
      "FL",
      "3000",
      "6650",
      "42",
      "unknown",
      "house"
   ],
   [
      "Young, Don",
      " R",
      "AK",
      "7200",
      "5750",
      "40",
      "unknown",
      "house"
   ],
   [
      "Young, Todd",
      " R",
      "IN",
      "2000",
      "15150",
      "2",
      "unknown",
      "house"
   ],
   [
      "LoBiondo, Frank",
      " R",
      "NJ",
      "9000",
      "1500",
      "18",
      "leaning no",
      "house"
   ],
   [
      "Akaka, Daniel",
      " D",
      "HI",
      "",
      "1000",
      "21",
      "unknown",
      "senate"
   ],
   [
      "Alexander, Lamar",
      " R",
      "TN",
      "1000",
      "3000",
      "9",
      "yes",
      "senate"
   ],
   [
      "Ayotte, Kelly",
      " R",
      "NH",
      "55900",
      "59216",
      "1",
      "no",
      "senate"
   ],
   [
      "Barrasso, John",
      " R",
      "WY",
      "12500",
      "1000",
      "5",
      "unknown",
      "senate"
   ],
   [
      "Baucus, Max",
      " D",
      "MT",
      "4000",
      "24000",
      "33",
      "unknown",
      "senate"
   ],
   [
      "Begich, Mark",
      " D",
      "AK",
      "5000",
      "4000",
      "3",
      "no",
      "senate"
   ],
   [
      "Bennet, Michael",
      " D",
      "CO",
      "367733",
      "162575",
      "3",
      "yes",
      "senate"
   ],
   [
      "Bingaman, Jeff",
      " D",
      "NM",
      "2000",
      "1750",
      "29",
      "yes",
      "senate"
   ],
   [
      "Blumenthal, Richard",
      " D",
      "CT",
      "154066",
      "52150",
      "1",
      "yes",
      "senate"
   ],
   [
      "Blunt, Roy",
      " R",
      "MO",
      "154166",
      "64238",
      "1",
      "no",
      "senate"
   ],
   [
      "Boozman, John",
      " R",
      "AR",
      "13150",
      "9346",
      "1",
      "no",
      "senate"
   ],
   [
      "Boxer, Barbara",
      " D",
      "CA",
      "571600",
      "348691",
      "19",
      "yes",
      "senate"
   ],
   [
      "Brown, Scott",
      " R",
      "MA",
      "36255",
      "153050",
      "3",
      "no",
      "senate"
   ],
   [
      "Brown, Sherrod",
      " D",
      "OH",
      "9150",
      "21350",
      "5",
      "yes",
      "senate"
   ],
   [
      "Burr, Richard",
      " R",
      "NC",
      "67150",
      "66288",
      "7",
      "unknown",
      "senate"
   ],
   [
      "Cantwell, Maria",
      " D",
      "WA",
      "7650",
      "24838",
      "11",
      "no",
      "senate"
   ],
   [
      "Cardin, Benjamin",
      " D",
      "MD",
      "7000",
      "5500",
      "5",
      "yes",
      "senate"
   ],
   [
      "Carper, Thomas",
      " D",
      "DE",
      "1400",
      "7030",
      "11",
      "unknown",
      "senate"
   ],
   [
      "Casey, Bob",
      " D",
      "PA",
      "75800",
      "12100",
      "5",
      "yes",
      "senate"
   ],
   [
      "Chambliss, Saxby",
      " R",
      "GA",
      "-5000",
      "1250",
      "9",
      "yes",
      "senate"
   ],
   [
      "Coats, Daniel",
      " R",
      "IN",
      "36200",
      "26714",
      "1",
      "unknown",
      "senate"
   ],
   [
      "Coburn, Tom",
      " R",
      "OK",
      "41500",
      "25800",
      "7",
      "leaning no",
      "senate"
   ],
   [
      "Cochran, Thad",
      " R",
      "MS",
      "",
      "",
      "33",
      "yes",
      "senate"
   ],
   [
      "Collins, Susan",
      " R",
      "ME",
      "4750",
      "5000",
      "15",
      "undecided",
      "senate"
   ],
   [
      "Conrad, Kent",
      " D",
      "ND",
      "3500",
      "1000",
      "25",
      "unknown",
      "senate"
   ],
   [
      "Coons, Christopher",
      " D",
      "DE",
      "92700",
      "23950",
      "3",
      "yes",
      "senate"
   ],
   [
      "Corker, Bob",
      " R",
      "TN",
      "21250",
      "7600",
      "5",
      "yes",
      "senate"
   ],
   [
      "Cornyn, John",
      " R",
      "TX",
      "18150",
      "21800",
      "9",
      "leaning no",
      "senate"
   ],
   [
      "Crapo, Michael",
      " R",
      "ID",
      "33500",
      "53670",
      "13",
      "unknown",
      "senate"
   ],
   [
      "DeMint, Jim",
      " R",
      "SC",
      "56500",
      "50950",
      "7",
      "no",
      "senate"
   ],
   [
      "Durbin, Richard",
      " D",
      "IL",
      "13050",
      "5000",
      "15",
      "yes",
      "senate"
   ],
   [
      "Enzi, Michael",
      " R",
      "WY",
      "2000",
      "",
      "15",
      "yes",
      "senate"
   ],
   [
      "Feinstein, Dianne",
      " D",
      "CA",
      "54750",
      "33300",
      "19",
      "yes",
      "senate"
   ],
   [
      "Franken, Al",
      " D",
      "MN",
      "88900",
      "30300",
      "3",
      "yes",
      "senate"
   ],
   [
      "Gillibrand, Kirsten",
      " D",
      "NY",
      "360541",
      "217750",
      "3",
      "yes",
      "senate"
   ],
   [
      "Graham, Lindsey",
      " R",
      "SC",
      "21993",
      "5250",
      "9",
      "yes",
      "senate"
   ],
   [
      "Grassley, Charles",
      " R",
      "IA",
      "111150",
      "92976",
      "31",
      "yes",
      "senate"
   ],
   [
      "Hagan, Kay",
      " D",
      "NC",
      "21000",
      "15000",
      "3",
      "yes",
      "senate"
   ],
   [
      "Harkin, Tom",
      " D",
      "IA",
      "27400",
      "2000",
      "27",
      "unknown",
      "senate"
   ],
   [
      "Hatch, Orrin",
      " R",
      "UT",
      "37300",
      "20500",
      "35",
      "no",
      "senate"
   ],
   [
      "Heller, Dean",
      " R",
      "NV",
      "36800",
      "7500",
      "1",
      "unknown",
      "senate"
   ],
   [
      "Hoeven, John",
      " R",
      "ND",
      "37500",
      "41355",
      "1",
      "unknown",
      "senate"
   ],
   [
      "Hutchison, Kay",
      " R",
      "TX",
      "2500",
      "2000",
      "19",
      "unknown",
      "senate"
   ],
   [
      "Inhofe, James",
      " R",
      "OK",
      "1000",
      "6900",
      "19",
      "no",
      "senate"
   ],
   [
      "Inouye, Daniel",
      " D",
      "HI",
      "99900",
      "61500",
      "43",
      "unknown",
      "senate"
   ],
   [
      "Isakson, Johnny",
      " R",
      "GA",
      "97400",
      "74000",
      "7",
      "yes",
      "senate"
   ],
   [
      "Johanns, Mike",
      " R",
      "NE",
      "6500",
      "5750",
      "3",
      "no",
      "senate"
   ],
   [
      "Johnson, Ron",
      " R",
      "WI",
      "20400",
      "20550",
      "1",
      "unknown",
      "senate"
   ],
   [
      "Johnson, Tim",
      " D",
      "SD",
      "2500",
      "",
      "15",
      "yes",
      "senate"
   ],
   [
      "Kerry, John",
      " D",
      "MA",
      "46700",
      "23250",
      "27",
      "unknown",
      "senate"
   ],
   [
      "Kirk, Mark",
      " R",
      "IL",
      "75900",
      "49850",
      "3",
      "leaning no",
      "senate"
   ],
   [
      "Klobuchar, Amy",
      " D",
      "MN",
      "32200.000000000004",
      "25823",
      "5",
      "yes",
      "senate"
   ],
   [
      "Kohl, Herb",
      " D",
      "WI",
      "",
      "",
      "23",
      "yes",
      "senate"
   ],
   [
      "Kyl, Jon",
      " R",
      "AZ",
      "8500",
      "12500",
      "17",
      "yes",
      "senate"
   ],
   [
      "Landrieu, Mary",
      " D",
      "LA",
      "2500",
      "11350",
      "15",
      "yes",
      "senate"
   ],
   [
      "Lautenberg, Frank",
      " D",
      "NJ",
      "5500",
      "-1000",
      "27",
      "undecided",
      "senate"
   ],
   [
      "Leahy, Patrick",
      " D",
      "VT",
      "346056",
      "140620",
      "37",
      "yes",
      "senate"
   ],
   [
      "Lee, Mike",
      " R",
      "UT",
      "16500",
      "63800",
      "1",
      "leaning no",
      "senate"
   ],
   [
      "Levin, Carl",
      " D",
      "MI",
      "",
      "",
      "33",
      "unknown",
      "senate"
   ],
   [
      "Lieberman, Joseph",
      " I",
      "CT",
      "4800",
      "8250",
      "23",
      "yes",
      "senate"
   ],
   [
      "Lugar, Richard",
      " R",
      "IN",
      "",
      "550000",
      "35",
      "unknown",
      "senate"
   ],
   [
      "Manchin III, Joe",
      " D",
      "WV",
      "34200",
      "33750",
      "3",
      "unknown",
      "senate"
   ],
   [
      "McCain, John",
      " R",
      "AZ",
      "104472",
      "116318",
      "25",
      "yes",
      "senate"
   ],
   [
      "McCaskill, Claire",
      " D",
      "MO",
      "44475",
      "24300",
      "5",
      "leaning no",
      "senate"
   ],
   [
      "McConnell, Mitch",
      " R",
      "KY",
      "21200",
      "30250",
      "27",
      "unknown",
      "senate"
   ],
   [
      "Menendez, Robert",
      " D",
      "NJ",
      "53150",
      "33500",
      "6",
      "yes",
      "senate"
   ],
   [
      "Merkley, Jeff",
      " D",
      "OR",
      "9500",
      "23050",
      "3",
      "no",
      "senate"
   ],
   [
      "Mikulski, Barbara",
      " D",
      "MD",
      "22866",
      "51050",
      "25",
      "undecided",
      "senate"
   ],
   [
      "Moran, Jerry",
      " R",
      "KS",
      "23250",
      "16743",
      "1",
      "no",
      "senate"
   ],
   [
      "Murkowski, Lisa",
      " R",
      "AK",
      "50900",
      "19050",
      "11",
      "no",
      "senate"
   ],
   [
      "Murray, Patty",
      " D",
      "WA",
      "99166",
      "363129",
      "19",
      "unknown",
      "senate"
   ],
   [
      "Nelson, Ben",
      " D",
      "NE",
      "24200",
      "2000",
      "11",
      "undecided",
      "senate"
   ],
   [
      "Nelson, Bill",
      " D",
      "FL",
      "17750",
      "18100",
      "11",
      "yes",
      "senate"
   ],
   [
      "Paul, Rand",
      " R",
      "KY",
      "14300",
      "53195",
      "1",
      "no",
      "senate"
   ],
   [
      "Portman, Rob",
      " R",
      "OH",
      "81265",
      "148500",
      "1",
      "unknown",
      "senate"
   ],
   [
      "Pryor, Mark",
      " D",
      "AR",
      "250000",
      "9000",
      "9",
      "no",
      "senate"
   ],
   [
      "Reed, Jack",
      " D",
      "RI",
      "",
      "",
      "15",
      "unknown",
      "senate"
   ],
   [
      "Reid, Harry",
      " D",
      "NV",
      "500300",
      "299448",
      "25",
      "yes",
      "senate"
   ],
   [
      "Risch, Jim",
      " R",
      "ID",
      "2500",
      "1250",
      "3",
      "yes",
      "senate"
   ],
   [
      "Roberts, Pat",
      " R",
      "KS",
      "5800",
      "7250",
      "15",
      "no",
      "senate"
   ],
   [
      "Rockefeller IV, John",
      " D",
      "WV",
      "31000",
      "7500",
      "27",
      "unknown",
      "senate"
   ],
   [
      "Rubio, Marco",
      " R",
      "FL",
      "55050",
      "94107",
      "1",
      "no",
      "senate"
   ],
   [
      "Sanders, Bernard",
      " I",
      "VT",
      "11550",
      "5591",
      "5",
      "unknown",
      "senate"
   ],
   [
      "Schumer, Charles",
      " D",
      "NY",
      "494325",
      "291384",
      "13",
      "yes",
      "senate"
   ],
   [
      "Sessions, Jeff",
      " R",
      "AL",
      "1000",
      "3000",
      "15",
      "leaning no",
      "senate"
   ],
   [
      "Shaheen, Jeanne",
      " D",
      "NH",
      "3250",
      "16500",
      "3",
      "yes",
      "senate"
   ],
   [
      "Shelby, Richard",
      " R",
      "AL",
      "28000",
      "101250",
      "25",
      "unknown",
      "senate"
   ],
   [
      "Snowe, Olympia",
      " R",
      "ME",
      "22500",
      "10000",
      "17",
      "undecided",
      "senate"
   ],
   [
      "Stabenow, Debbie",
      " D",
      "MI",
      "20600",
      "26100",
      "11",
      "unknown",
      "senate"
   ],
   [
      "Tester, Jon",
      " D",
      "MT",
      "20300",
      "4850",
      "5",
      "unknown",
      "senate"
   ],
   [
      "Thune, John",
      " R",
      "SD",
      "97915",
      "80300",
      "7",
      "unknown",
      "senate"
   ],
   [
      "Toomey, Patrick",
      " R",
      "PA",
      "43500",
      "82222",
      "1",
      "no",
      "senate"
   ],
   [
      "Udall, Mark",
      " D",
      "CO",
      "4375",
      "9000",
      "4",
      "no",
      "senate"
   ],
   [
      "Udall, Tom",
      " D",
      "NM",
      "11500",
      "2000",
      "4",
      "yes",
      "senate"
   ],
   [
      "Vitter, David",
      " R",
      "LA",
      "74850",
      "26502",
      "7",
      "no",
      "senate"
   ],
   [
      "Warner, Mark",
      " D",
      "VA",
      "19550",
      "61250",
      "3",
      "no",
      "senate"
   ],
   [
      "Webb, Jim",
      " D",
      "VA",
      "6000",
      "18150",
      "5",
      "unknown",
      "senate"
   ],
   [
      "Whitehouse, Sheldon",
      " D",
      "RI",
      "10250",
      "23476",
      "5",
      "yes",
      "senate"
   ],
   [
      "Wicker, Roger",
      " R",
      "MS",
      "7750",
      "11700",
      "5",
      "unknown",
      "senate"
   ],
   [
      "Wyden, Ron",
      " D",
      "OR",
      "67200",
      "189350",
      "16",
      "no",
      "senate"
   ]
]
