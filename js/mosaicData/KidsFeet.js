var KidsFeetInfo ={
   "title" : "Foot measurements in children",
   "description" : "Description\nThese data were collected by a statistician, Mary C. Meyer, in a\nfourth grade classroom in Ann Arbor, MI, in October 1997.  They are a\nconvenience sample &mdash; the kids who were in the fourth grade.",
   "usage" : "data(KidsFeet)",
   "reference" : "Quoted from the source: \"From a very young age, shoes for boys tend to be wider than shoes for girls.  Is this because boys have wider feet, or because it is assumed that\ngirls, even in elementary school, are willing to sacrifice comfort for fashion?\nTo assess the former, a statistician measures kids' feet.\"",
   "parameters" : {
      "sex" : "a factor with levels B G",
      "name" : "a factor with levels corresponding to the name of each child",
      "biggerfoot" : "a factor with levels L R",
      "domhand" : "a factor with levels L R",
      "birthyear" : "the year of birth",
      "length" : "length of longer foot (in cm)",
      "birthmonth" : "the month of birth",
      "width" : "width of longer foot (in cm)"
   },
   "format" : "A data frame with 39 observations on the following variables."
}

var KidsFeet = [
   [
      "name",
      "birthmonth",
      "birthyear",
      "length",
      "width",
      "sex",
      "biggerfoot",
      "domhand"
   ],
   [
      "David",
      "5",
      "88",
      "24.4",
      "8.4",
      "B",
      "L",
      "R"
   ],
   [
      "Lars",
      "10",
      "87",
      "25.4",
      "8.8",
      "B",
      "L",
      "L"
   ],
   [
      "Zach",
      "12",
      "87",
      "24.5",
      "9.7",
      "B",
      "R",
      "R"
   ],
   [
      "Josh",
      "1",
      "88",
      "25.2",
      "9.8",
      "B",
      "L",
      "R"
   ],
   [
      "Lang",
      "2",
      "88",
      "25.1",
      "8.9",
      "B",
      "L",
      "R"
   ],
   [
      "Scotty",
      "3",
      "88",
      "25.7",
      "9.7",
      "B",
      "R",
      "R"
   ],
   [
      "Edward",
      "2",
      "88",
      "26.1",
      "9.6",
      "B",
      "L",
      "R"
   ],
   [
      "Caitlin",
      "6",
      "88",
      "23",
      "8.8",
      "G",
      "L",
      "R"
   ],
   [
      "Eleanor",
      "5",
      "88",
      "23.6",
      "9.3",
      "G",
      "R",
      "R"
   ],
   [
      "Damon",
      "9",
      "88",
      "22.9",
      "8.8",
      "B",
      "R",
      "L"
   ],
   [
      "Mark",
      "9",
      "87",
      "27.5",
      "9.8",
      "B",
      "R",
      "R"
   ],
   [
      "Ray",
      "3",
      "88",
      "24.8",
      "8.9",
      "B",
      "L",
      "R"
   ],
   [
      "Cal",
      "8",
      "87",
      "26.1",
      "9.1",
      "B",
      "L",
      "R"
   ],
   [
      "Cam",
      "3",
      "88",
      "27",
      "9.8",
      "B",
      "L",
      "R"
   ],
   [
      "Julie",
      "11",
      "87",
      "26",
      "9.3",
      "G",
      "L",
      "R"
   ],
   [
      "Kate",
      "4",
      "88",
      "23.7",
      "7.9",
      "G",
      "R",
      "R"
   ],
   [
      "Caroline",
      "12",
      "87",
      "24",
      "8.7",
      "G",
      "R",
      "L"
   ],
   [
      "Maggie",
      "3",
      "88",
      "24.7",
      "8.8",
      "G",
      "R",
      "R"
   ],
   [
      "Lee",
      "6",
      "88",
      "26.7",
      "9",
      "G",
      "L",
      "L"
   ],
   [
      "Heather",
      "3",
      "88",
      "25.5",
      "9.5",
      "G",
      "R",
      "R"
   ],
   [
      "Andy",
      "6",
      "88",
      "24",
      "9.2",
      "B",
      "R",
      "R"
   ],
   [
      "Josh",
      "7",
      "88",
      "24.4",
      "8.6",
      "B",
      "L",
      "R"
   ],
   [
      "Laura",
      "9",
      "88",
      "24",
      "8.3",
      "G",
      "R",
      "L"
   ],
   [
      "Erica",
      "9",
      "88",
      "24.5",
      "9",
      "G",
      "L",
      "R"
   ],
   [
      "Peggy",
      "10",
      "88",
      "24.2",
      "8.1",
      "G",
      "L",
      "R"
   ],
   [
      "Glen",
      "7",
      "88",
      "27.1",
      "9.4",
      "B",
      "L",
      "R"
   ],
   [
      "Abby",
      "2",
      "88",
      "26.1",
      "9.5",
      "G",
      "L",
      "R"
   ],
   [
      "David",
      "12",
      "87",
      "25.5",
      "9.5",
      "B",
      "R",
      "R"
   ],
   [
      "Mike",
      "11",
      "88",
      "24.2",
      "8.9",
      "B",
      "L",
      "R"
   ],
   [
      "Dwayne",
      "8",
      "88",
      "23.9",
      "9.3",
      "B",
      "R",
      "L"
   ],
   [
      "Danielle",
      "6",
      "88",
      "24",
      "9.3",
      "G",
      "L",
      "R"
   ],
   [
      "Caitlin",
      "7",
      "88",
      "22.5",
      "8.6",
      "G",
      "R",
      "R"
   ],
   [
      "Leigh",
      "3",
      "88",
      "24.5",
      "8.6",
      "G",
      "L",
      "R"
   ],
   [
      "Dylan",
      "4",
      "88",
      "23.6",
      "9",
      "B",
      "R",
      "L"
   ],
   [
      "Peter",
      "4",
      "88",
      "24.7",
      "8.6",
      "B",
      "R",
      "L"
   ],
   [
      "Hannah",
      "3",
      "88",
      "22.9",
      "8.5",
      "G",
      "L",
      "R"
   ],
   [
      "Teshanna",
      "3",
      "88",
      "26",
      "9",
      "G",
      "L",
      "R"
   ],
   [
      "Hayley",
      "1",
      "88",
      "21.6",
      "7.9",
      "G",
      "R",
      "R"
   ],
   [
      "Alisha",
      "9",
      "88",
      "24.6",
      "8.8",
      "G",
      "L",
      "R"
   ]
]