var mcu_filmsInfo ={
   "parameters" : {
      "length_hrs" : "Length of the movie: hours portion.",
      "opening_weekend_us" : "Box office totals for opening weekend in the US.",
      "gross_world" : "All box office totals world wide.",
      "movie" : "Title of the movie.",
      "gross_us" : "All box office totals in US.",
      "length_min" : "Length of the movie: minutes portion.",
      "release_date" : "Date the movie was released in the US."
   },
   "title" : "Marvel Cinematic Universe films",
   "description" : "Description\nA list of Marvel Cinematic Universe films through the Infinity saga.\nThe Infinity saga is a 23 movie storyline spanning from Ironman\nin 2008 to Endgame in 2019.",
   "usage" : "mcu_films",
   "reference" : "Box office figures are not adjusted to a specific year.\nThey are from the year the film was released.",
   "format" : "A data frame with 23 rows and 7 variables."
}

var mcu_films = [
   [
      "movie",
      "length_hrs",
      "length_min",
      "release_date",
      "opening_weekend_us",
      "gross_us",
      "gross_world"
   ],
   [
      "Iron Man",
      "2",
      "6",
      "5/2/2008",
      "98618668",
      "319034126",
      "585796247"
   ],
   [
      "The Incredible Hulk",
      "1",
      "52",
      "6/12/2008",
      "55414050",
      "134806913",
      "264770996"
   ],
   [
      "Iron Man 2",
      "2",
      "4",
      "5/7/2010",
      "128122480",
      "312433331",
      "623933331"
   ],
   [
      "Thor",
      "1",
      "55",
      "5/6/2011",
      "65723338",
      "181030624",
      "449326618"
   ],
   [
      "Captain America: The First Avenger",
      "2",
      "4",
      "7/22/2011",
      "65058524",
      "176654505",
      "370569774"
   ],
   [
      "Marvel's The Avengers",
      "2",
      "23",
      "5/4/2012",
      "207438708",
      "623357910",
      "1518815515"
   ],
   [
      "Iron Man 3",
      "2",
      "10",
      "5/3/2013",
      "174144585",
      "409013994",
      "1214811252"
   ],
   [
      "Thor: The Dark World",
      "1",
      "52",
      "11/8/2013",
      "85737841",
      "206362140",
      "644783140"
   ],
   [
      "Captain America: The Winder Soldier",
      "2",
      "16",
      "4/4/2014",
      "95023721",
      "259766572",
      "714421503"
   ],
   [
      "Guardians of the Galaxy",
      "2",
      "1",
      "8/1/2014",
      "94320883",
      "333718600",
      "773341024"
   ],
   [
      "Avengers: Age of Ultron",
      "2",
      "21",
      "5/1/2015",
      "191271109",
      "459005868",
      "1402809540"
   ],
   [
      "Ant-Man",
      "1",
      "57",
      "7/17/2015",
      "57225526",
      "180202163",
      "519311965"
   ],
   [
      "Captain America: Civil War",
      "2",
      "27",
      "5/6/2016",
      "179139142",
      "408084349",
      "1153561649"
   ],
   [
      "Doctor Strange",
      "1",
      "55",
      "11/4/2016",
      "85058311",
      "232641920",
      "677796076"
   ],
   [
      "Guardians of the Galaxy Vol. 2",
      "2",
      "16",
      "5/5/2017",
      "146510104",
      "389813101",
      "863756051"
   ],
   [
      "Spiderman: Homecoming",
      "2",
      "13",
      "7/7/2017",
      "117027503",
      "334201140",
      "880166924"
   ],
   [
      "Thor: Ragnarok",
      "2",
      "10",
      "11/3/2017",
      "122744989",
      "315058289",
      "853983829"
   ],
   [
      "Black Panther",
      "2",
      "14",
      "2/16/2018",
      "202003951",
      "700426566",
      "1347598739"
   ],
   [
      "Avengers: Infinity War",
      "2",
      "29",
      "4/27/2018",
      "257698183",
      "678815482",
      "2048359754"
   ],
   [
      "Ant-Man and the Wasp",
      "1",
      "58",
      "7/6/2018",
      "75812208",
      "216648740",
      "622674139"
   ],
   [
      "Captain Marvel",
      "2",
      "3",
      "3/8/2019",
      "153433423",
      "426829839",
      "1128437854"
   ],
   [
      "Avengers: Endgame",
      "3",
      "1",
      "4/26/2019",
      "357115007",
      "858373000",
      "2797800564"
   ],
   [
      "Spiderman: Far from Home",
      "2",
      "9",
      "7/2/2019",
      "92579212",
      "390532085",
      "1131927996"
   ]
]