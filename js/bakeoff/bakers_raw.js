var bakers_rawInfo ={
   "parameters" : {
      "baker_full" : "A character string giving full name.",
      "baker_last" : "A character string giving family name.",
      "occupation" : "A character string giving occupation.",
      "age" : "An integer denoting age in years at first episode appeared.",
      "baker_first" : "A character string giving given name.",
      "series" : "A factor denoting UK series (1-10).",
      "hometown" : "A character string giving hometown.",
      "baker" : "A character string with a given name or nickname."
   },
   "usage" : "bakers_raw",
   "reference" : "See\nhttps://en.wikipedia.org/wiki/The_Great_British_Bake_Off_(series_1)#The_Bakers,\nfor example, for series 1 bakers.",
   "title" : "Bakers (raw)",
   "description" : "Description\nInformation about each baker who has appeared on the show.",
   "format" : "A data frame with 120 rows representing individual bakers and 8\nvariables:"
}

var bakers_raw = [
   [
      "series",
      "baker_full",
      "baker",
      "age",
      "occupation",
      "hometown",
      "baker_last",
      "baker_first"
   ],
   [
      "1",
      "Annetha Mills",
      "Annetha",
      "30",
      "Midwife",
      "Essex",
      "Mills",
      "Annetha"
   ],
   [
      "1",
      "David Chambers",
      "David",
      "31",
      "Entrepreneur",
      "Milton Keynes",
      "Chambers",
      "David"
   ],
   [
      "1",
      "Edward  Edd  Kimber",
      "Edd",
      "24",
      "Debt collector for Yorkshire Bank",
      "Bradford",
      "Kimber",
      "Edward"
   ],
   [
      "1",
      "Jasminder Randhawa",
      "Jasminder",
      "45",
      "Assistant Credit Control Manager",
      "Birmingham",
      "Randhawa",
      "Jasminder"
   ],
   [
      "1",
      "Jonathan Shepherd",
      "Jonathan",
      "25",
      "Research Analyst",
      "St Albans",
      "Shepherd",
      "Jonathan"
   ],
   [
      "1",
      "Lea Harris",
      "Lea",
      "51",
      "Retired",
      "Midlothian, Scotland",
      "Harris",
      "Lea"
   ],
   [
      "1",
      "Louise Brimelow",
      "Louise",
      "44",
      "Police Officer",
      "Manchester",
      "Brimelow",
      "Louise"
   ],
   [
      "1",
      "Mark Whithers",
      "Mark",
      "48",
      "Bus Driver",
      "South Wales",
      "Whithers",
      "Mark"
   ],
   [
      "1",
      "Miranda Gore Browne",
      "Miranda",
      "37",
      "Food buyer for Marks & Spencer",
      "Midhurst, West Sussex",
      "Browne",
      "Miranda"
   ],
   [
      "1",
      "Ruth Clemens",
      "Ruth",
      "31",
      "Retail manager/Housewife",
      "Poynton, Cheshire",
      "Clemens",
      "Ruth"
   ],
   [
      "2",
      "Ben Frazer",
      "Ben",
      "31",
      "Graphic Designer",
      "Northampton",
      "Frazer",
      "Ben"
   ],
   [
      "2",
      "Holly Bell",
      "Holly",
      "31",
      "Advertising executive",
      "Leicester",
      "Bell",
      "Holly"
   ],
   [
      "2",
      "Ian Vallance",
      "Ian",
      "40",
      "Fundraiser for English Heritage",
      "Dunstable, Bedfordshire",
      "Vallance",
      "Ian"
   ],
   [
      "2",
      "Janet Basu",
      "Janet",
      "63",
      "Teacher of Modern Languages",
      "Formby, Liverpool",
      "Basu",
      "Janet"
   ],
   [
      "2",
      "Jason White",
      "Jason",
      "19",
      "Civil Engineering Student",
      "Croydon",
      "White",
      "Jason"
   ],
   [
      "2",
      "Joanne  Jo  Wheatley",
      "Joanne",
      "41",
      "Housewife",
      "Ongar, Essex",
      "Wheatley",
      "Joanne"
   ],
   [
      "2",
      "Keith Batsford",
      "Keith",
      "31",
      "House husband",
      "Arlesey, Bedfordshire",
      "Batsford",
      "Keith"
   ],
   [
      "2",
      "Mary-Anne Boermans",
      "Mary-Anne",
      "45",
      "Housewife",
      "Kidderminster, Worcestershire",
      "Boermans",
      "Mary-Anne"
   ],
   [
      "2",
      "Robert Billington",
      "Robert",
      "25",
      "Photographer",
      "London",
      "Billington",
      "Robert"
   ],
   [
      "2",
      "Simon Blackwell",
      "Simon",
      "31",
      "Rugby Coach",
      "Norfolk",
      "Blackwell",
      "Simon"
   ],
   [
      "2",
      "Urvashi Roe",
      "Urvashi",
      "40",
      "Head of Marketing",
      "Enfield, London",
      "Roe",
      "Urvashi"
   ],
   [
      "2",
      "Yasmin Limbert",
      "Yasmin",
      "43",
      "Childminder",
      "West Kirby, The Wirral",
      "Limbert",
      "Yasmin"
   ],
   [
      "3",
      "Brendan Lynch",
      "Brendan",
      "63",
      "Recruitment consultant",
      "Sutton Coldfield",
      "Lynch",
      "Brendan"
   ],
   [
      "3",
      "Cathryn Dresser",
      "Cathryn",
      "27",
      "Shop assistant",
      "Pease Pottage, West Sussex",
      "Dresser",
      "Cathryn"
   ],
   [
      "3",
      "Danny Bryden",
      "Danny",
      "45",
      "Intensive care consultant",
      "Sheffield",
      "Bryden",
      "Danny"
   ],
   [
      "3",
      "James Morton",
      "James",
      "21",
      "Medical student",
      "Hillswick, Shetland Islands",
      "Morton",
      "James"
   ],
   [
      "3",
      "John Whaite",
      "John",
      "22",
      "Law student",
      "Wigan",
      "Whaite",
      "John"
   ],
   [
      "3",
      "Manisha Parmar",
      "Manisha",
      "27",
      "Nursery nurse",
      "Leicester",
      "Parmar",
      "Manisha"
   ],
   [
      "3",
      "Natasha Stringer",
      "Natasha",
      "36",
      "Midwife",
      "Tamworth, Staffordshire",
      "Stringer",
      "Natasha"
   ],
   [
      "3",
      "Peter Maloney",
      "Peter",
      "43",
      "Sales manager",
      "Windsor, Berkshire",
      "Maloney",
      "Peter"
   ],
   [
      "3",
      "Ryan Chong",
      "Ryan",
      "38",
      "Photographer",
      "Bristol",
      "Chong",
      "Ryan"
   ],
   [
      "3",
      "Sarah-Jane Willis",
      "Sarah-Jane",
      "28",
      "Vicar's wife",
      "Bewbush, West Sussex",
      "Willis",
      "Sarah-Jane"
   ],
   [
      "3",
      "Stuart Marston-Smith",
      "Stuart",
      "26",
      "PE teacher",
      "Lichfield, Staffordshire",
      "Marston-Smith",
      "Stuart"
   ],
   [
      "3",
      "Victoria Chester",
      "Victoria",
      "50",
      "CEO of the charity Plantlife",
      "Somerset",
      "Chester",
      "Victoria"
   ],
   [
      "4",
      "Ali Imdad",
      "Ali",
      "25",
      "Charity worker",
      "Saltley, Birmingham",
      "Imdad",
      "Ali"
   ],
   [
      "4",
      "Beca Lyne-Pirkis",
      "Beca",
      "31",
      "Military Wives' Choir Singer",
      "Aldershot, Hampshire",
      "Lyne-Pirkis",
      "Beca"
   ],
   [
      "4",
      "Christine Wallace",
      "Christine",
      "66",
      "Director of an engraving company",
      "Didcot, Oxfordshire",
      "Wallace",
      "Christine"
   ],
   [
      "4",
      "Deborah Manger",
      "Deborah",
      "51",
      "Dentist",
      "Peterborough",
      "Manger",
      "Deborah"
   ],
   [
      "4",
      "Frances Quinn",
      "Frances",
      "31",
      "Children's Clothes Designer",
      "Market Harborough, Leicestershire",
      "Quinn",
      "Frances"
   ],
   [
      "4",
      "Glenn Cosby",
      "Glenn",
      "37",
      "English Teacher",
      "Teignmouth, Devon",
      "Cosby",
      "Glenn"
   ],
   [
      "4",
      "Howard Middleton",
      "Howard",
      "51",
      "Council Worker",
      "Sheffield",
      "Middleton",
      "Howard"
   ],
   [
      "4",
      "Kimberley Wilson",
      "Kimberley",
      "30",
      "Psychologist",
      "London",
      "Wilson",
      "Kimberley"
   ],
   [
      "4",
      "Lucy Bellamy",
      "Lucy",
      "38",
      "Horticulturist",
      "Grimsby, Lincolnshire",
      "Bellamy",
      "Lucy"
   ],
   [
      "4",
      "Mark Onley",
      "Mark",
      "37",
      "Carpenter and Kitchen Fitter",
      "Milton Keynes",
      "Onley",
      "Mark"
   ],
   [
      "4",
      "Robert Smart",
      "Robert",
      "54",
      "Space Satellite Designer",
      "Melbourn, Cambridgeshire",
      "Smart",
      "Robert"
   ],
   [
      "4",
      "Ruby Tandoh",
      "Ruby",
      "20",
      "History of Art and Philosophy Student",
      "Southend, Essex",
      "Tandoh",
      "Ruby"
   ],
   [
      "4",
      "Toby Waterworth",
      "Toby",
      "30",
      "Web Programmer",
      "Reading, Berkshire",
      "Waterworth",
      "Toby"
   ],
   [
      "5",
      "Chetna Makan",
      "Chetna",
      "35",
      "Fashion Designer",
      "Broadstairs, Kent",
      "Makan",
      "Chetna"
   ],
   [
      "5",
      "Claire Goodwin",
      "Claire",
      "31",
      "Speech Therapist",
      "Ashton upon Mersey, Trafford",
      "Goodwin",
      "Claire"
   ],
   [
      "5",
      "Diana Beard",
      "Diana",
      "69",
      "Women's Institute (WI) Judge",
      "Alkington, Shropshire",
      "Beard",
      "Diana"
   ],
   [
      "5",
      "Enwezor Nzegwu",
      "Enwezor",
      "39",
      "Business Consultant",
      "Portsmouth, Hampshire",
      "Nzegwu",
      "Enwezor"
   ],
   [
      "5",
      "Iain Watters",
      "Iain",
      "31",
      "Construction Engineer",
      "London/Belfast",
      "Watters",
      "Iain"
   ],
   [
      "5",
      "Jordan Cox",
      "Jordan",
      "32",
      "IT Manager",
      "Sneinton, Nottingham",
      "Cox",
      "Jordan"
   ],
   [
      "5",
      "Kate Henry",
      "Kate",
      "41",
      "Furniture Restorer",
      "Brighton, East Sussex",
      "Henry",
      "Kate"
   ],
   [
      "5",
      "Luis Troyano",
      "Luis",
      "42",
      "Graphic Designer",
      "Poynton, Cheshire",
      "Troyano",
      "Luis"
   ],
   [
      "5",
      "Martha Collison",
      "Martha",
      "17",
      "Student",
      "Ascot, Berkshire",
      "Collison",
      "Martha"
   ],
   [
      "5",
      "Nancy Birtwhistle",
      "Nancy",
      "60",
      "Retired Practice Manager",
      "Barton-upon-Humber, Lincolnshire",
      "Birtwhistle",
      "Nancy"
   ],
   [
      "5",
      "Norman Calder",
      "Norman",
      "66",
      "Retired Naval Officer",
      "Portknockie, Moray",
      "Calder",
      "Norman"
   ],
   [
      "5",
      "Richard Burr",
      "Richard",
      "38",
      "Builder",
      "Mill Hill, London",
      "Burr",
      "Richard"
   ],
   [
      "6",
      "Alvin Magallanes",
      "Alvin",
      "37",
      "Nurse",
      "Bracknell, Berkshire",
      "Magallanes",
      "Alvin"
   ],
   [
      "6",
      "Dorret Conway",
      "Dorret",
      "53",
      "Accountant",
      "Penwortham, Lancashire",
      "Conway",
      "Dorret"
   ],
   [
      "6",
      "Flora Shedden",
      "Flora",
      "19",
      "Art gallery assistant",
      "Dunkeld, Perth and Kinross",
      "Shedden",
      "Flora"
   ],
   [
      "6",
      "Ian Cumming",
      "Ian",
      "41",
      "Travel photographer",
      "Great Wilbraham, Cambridgeshire",
      "Cumming",
      "Ian"
   ],
   [
      "6",
      "Marie Campbell",
      "Marie",
      "66",
      "Retired",
      "Auchterarder, Perthshire",
      "Campbell",
      "Marie"
   ],
   [
      "6",
      "Mat Riley",
      "Mat",
      "37",
      "Fire fighter",
      "London",
      "Riley",
      "Mat"
   ],
   [
      "6",
      "Nadiya Hussain",
      "Nadiya",
      "30",
      "Full-time mother",
      "Leeds / Luton",
      "Hussain",
      "Nadiya"
   ],
   [
      "6",
      "Paul Jagger",
      "Paul",
      "49",
      "Prison governor",
      "Swansea, Wales",
      "Jagger",
      "Paul"
   ],
   [
      "6",
      "Sandy Docherty",
      "Sandy",
      "49",
      "Child welfare officer",
      "Yeadon, West Yorkshire",
      "Docherty",
      "Sandy"
   ],
   [
      "6",
      "Stu Henshall",
      "Stu",
      "35",
      "Professional musician",
      "Guildford, Surrey",
      "Henshall",
      "Stu"
   ],
   [
      "6",
      "Tamal Ray",
      "Tamal",
      "29",
      "Trainee anaesthetist",
      "Manchester",
      "Ray",
      "Tamal"
   ],
   [
      "6",
      "Ugnė Bubnaityte",
      "Ugnė",
      "32",
      "PA and administrator",
      "Woodford, London / Vilkaviškis, Lithuania",
      "Bubnaityte",
      "Ugnė"
   ],
   [
      "7",
      "Andrew Smyth",
      "Andrew",
      "25",
      "Aerospace engineer",
      "Derby / Holywood, County Down",
      "Smyth",
      "Andrew"
   ],
   [
      "7",
      "Benjamina Ebuehi",
      "Benjamina",
      "23",
      "Teaching assistant",
      "South London",
      "Ebuehi",
      "Benjamina"
   ],
   [
      "7",
      "Candice Brown",
      "Candice",
      "31",
      "PE teacher",
      "Barton-Le-Clay, Bedfordshire",
      "Brown",
      "Candice"
   ],
   [
      "7",
      "Jane Beedle",
      "Jane",
      "61",
      "Garden designer",
      "Beckenham",
      "Beedle",
      "Jane"
   ],
   [
      "7",
      "Kate Barmby",
      "Kate",
      "37",
      "Nurse",
      "Brooke, Norfolk",
      "Barmby",
      "Kate"
   ],
   [
      "7",
      "Lee Banfield",
      "Lee",
      "67",
      "Pastor",
      "Bolton",
      "Banfield",
      "Lee"
   ],
   [
      "7",
      "Louise Williams",
      "Louise",
      "46",
      "Hairdresser",
      "Cardiff",
      "Williams",
      "Louise"
   ],
   [
      "7",
      "Michael Georgiou",
      "Michael",
      "20",
      "Student",
      "Durham",
      "Georgiou",
      "Michael"
   ],
   [
      "7",
      "Rav Bansal",
      "Rav",
      "28",
      "Student support",
      "Erith",
      "Bansal",
      "Rav"
   ],
   [
      "7",
      "Selasi Gbormittah",
      "Selasi",
      "30",
      "Client service associate",
      "London",
      "Gbormittah",
      "Selasi"
   ],
   [
      "7",
      "Tom Gilliford",
      "Tom",
      "26",
      "Project engagement manager",
      "Rochdale",
      "Gilliford",
      "Tom"
   ],
   [
      "7",
      "Valerie  Val  Stones",
      "Val",
      "66",
      "Semi-retired, Substitute teacher",
      "Yeovil",
      "Stones",
      "Valerie"
   ],
   [
      "8",
      "Chris Geiger",
      "Chris",
      "50",
      "Software developer",
      "Bristol",
      "Geiger",
      "Chris"
   ],
   [
      "8",
      "Flo Atkins",
      "Flo",
      "71",
      "Retired",
      "Merseyside",
      "Atkins",
      "Flo"
   ],
   [
      "8",
      "James Hillery",
      "James",
      "46",
      "Banker",
      "Brentwood, Essex",
      "Hillery",
      "James"
   ],
   [
      "8",
      "Julia Chernogorova",
      "Julia",
      "21",
      "Aviation Broker",
      "Crawley, West Sussex",
      "Chernogorova",
      "Julia"
   ],
   [
      "8",
      "Kate Lyon",
      "Kate",
      "29",
      "Health and safety inspector",
      "Merseyside",
      "Lyon",
      "Kate"
   ],
   [
      "8",
      "Liam Charles",
      "Liam",
      "19",
      "Student",
      "North London",
      "Charles",
      "Liam"
   ],
   [
      "8",
      "Peter Abatan",
      "Peter",
      "52",
      "IT programme manager",
      "Southend, Essex",
      "Abatan",
      "Peter"
   ],
   [
      "8",
      "Sophie Faldo",
      "Sophie",
      "33",
      "Former army officer and trainee stuntwoman",
      "West Molesey, Surrey",
      "Faldo",
      "Sophie"
   ],
   [
      "8",
      "Stacey Hart",
      "Stacey",
      "42",
      "Former school teacher",
      "Radlett, Hertfordshire",
      "Hart",
      "Stacey"
   ],
   [
      "8",
      "Steven Carter-Bailey",
      "Steven",
      "34",
      "Marketer",
      "Watford, Hertfordshire",
      "Carter-Bailey",
      "Steven"
   ],
   [
      "8",
      "Tom Hetherington",
      "Tom",
      "29",
      "Architect",
      "Edinburgh",
      "Hetherington",
      "Tom"
   ],
   [
      "8",
      "Chuen-Yan  Yan  Tsou",
      "Yan",
      "46",
      "Laboratory research scientist",
      "North London",
      "Tsou",
      "Chuen-Yan"
   ],
   [
      "9",
      "Antony Amourdoux",
      "Antony",
      "30",
      "Banker",
      "London",
      "Amourdoux",
      "Antony"
   ],
   [
      "9",
      "Briony Williams",
      "Briony",
      "33",
      "Full-time parent",
      "Bristol",
      "Williams",
      "Briony"
   ],
   [
      "9",
      "Dan Beasley-Harling",
      "Dan",
      "36",
      "Full-time parent",
      "London",
      "Beasley-Harling",
      "Dan"
   ],
   [
      "9",
      "Imelda McCarron",
      "Imelda",
      "33",
      "Countryside recreation officer",
      "County Tyrone",
      "McCarron",
      "Imelda"
   ],
   [
      "9",
      "Jon Jenkins",
      "Jon",
      "47",
      "Blood courier",
      "Newport",
      "Jenkins",
      "Jon"
   ],
   [
      "9",
      "Karen Wright",
      "Karen",
      "60",
      "In-store sampling assistant",
      "Wakefield",
      "Wright",
      "Karen"
   ],
   [
      "9",
      "Kim-Joy Hewlett",
      "Kim-Joy",
      "27",
      "Mental health specialist",
      "Leeds",
      "Hewlett",
      "Kim-Joy"
   ],
   [
      "9",
      "Luke Thompson",
      "Luke",
      "30",
      "Civil servant/house and techno DJ",
      "Sheffield",
      "Thompson",
      "Luke"
   ],
   [
      "9",
      "Manon Lagrève",
      "Manon",
      "26",
      "Software project manager",
      "London",
      "Lagrève",
      "Manon"
   ],
   [
      "9",
      "Rahul Mandal",
      "Rahul",
      "30",
      "Research scientist",
      "Rotherham",
      "Mandal",
      "Rahul"
   ],
   [
      "9",
      "Ruby Bhogal",
      "Ruby",
      "29",
      "Project manager",
      "London",
      "Bhogal",
      "Ruby"
   ],
   [
      "9",
      "Terry Hartill",
      "Terry",
      "56",
      "Retired air steward",
      "West Midlands",
      "Hartill",
      "Terry"
   ],
   [
      "10",
      "Alice Fevronia",
      "Alice",
      "28",
      "Geography teacher",
      "Essex",
      "Fevronia",
      "Alice"
   ],
   [
      "10",
      "Amelia Le Bruin",
      "Amelia",
      "24",
      "Fashion designer",
      "Halifax",
      "Bruin",
      "Amelia"
   ],
   [
      "10",
      "Dan Chambers",
      "Dan",
      "32",
      "Support worker",
      "Rotherham",
      "Chambers",
      "Dan"
   ],
   [
      "10",
      "David Atherton",
      "David",
      "36",
      "International health adviser",
      "Whitby",
      "Atherton",
      "David"
   ],
   [
      "10",
      "Helena Garcia",
      "Helena",
      "40",
      "Online project manager",
      "Leeds",
      "Garcia",
      "Helena"
   ],
   [
      "10",
      "Henry Bird",
      "Henry",
      "20",
      "Student",
      "Durham",
      "Bird",
      "Henry"
   ],
   [
      "10",
      "Jamie Finn",
      "Jamie",
      "20",
      "Part-time waiter",
      "Surrey",
      "Finn",
      "Jamie"
   ],
   [
      "10",
      "Michael Chakraverty",
      "Michael",
      "26",
      "Theatre manager/fitness instructor",
      "Stratford-upon-Avon",
      "Chakraverty",
      "Michael"
   ],
   [
      "10",
      "Michelle Evans-Fecci",
      "Michelle",
      "35",
      "Print shop administrator",
      "Tenby, Wales",
      "Evans-Fecci",
      "Michelle"
   ],
   [
      "10",
      "Phil Thorne",
      "Phil",
      "56",
      "HGV driver",
      "Rainham",
      "Thorne",
      "Phil"
   ],
   [
      "10",
      "Priya O'Shea",
      "Priya",
      "34",
      "Marketing consultant",
      "Leicester",
      "O'Shea",
      "Priya"
   ],
   [
      "10",
      "Rosie Brandreth-Poynter",
      "Rosie",
      "28",
      "Veterinary surgeon",
      "Somerset",
      "Brandreth-Poynter",
      "Rosie"
   ],
   [
      "10",
      "Steph Blackwell",
      "Steph",
      "28",
      "Shop assistant",
      "Chester",
      "Blackwell",
      "Steph"
   ]
]
