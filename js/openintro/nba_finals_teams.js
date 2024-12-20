var nba_finals_teamsInfo ={
   "parameters" : {
      "win" : "Number of NBA Championships won.",
      "pct" : "Win percentage.",
      "years_lost" : "Years in which the team lost a Championship.",
      "apps" : "Number of NBA Finals appearances.",
      "loss" : "Number of NBA Championships lost.",
      "years_won" : "Years in which the team won a Championship.",
      "team" : "Team name."
   },
   "usage" : "nba_finals_teams",
   "reference" : "Notes:",
   "title" : "NBA Finals Team Summary",
   "description" : "Description\nA dataset with individual team summaries for the NBA Finals series from 1950 to 2022. To win the Finals, a team must win 4 games. The maximum number of games in a series is 7.",
   "format" : "A data frame with 33 rows and 7 variables:"
}

var nba_finals_teams = [
   [
      "team",
      "win",
      "loss",
      "apps",
      "pct",
      "years_won",
      "years_lost"
   ],
   [
      "Los Angeles Lakers",
      "17",
      "15",
      "32",
      "0.531",
      "1949, 1950, 1952, 1953, 1954, 1972, 1980, 1982, 1985, 1987, 1988, 2000, 2001, 2002, 2009, 2010, 2020",
      "1959, 1962, 1963, 1965, 1966, 1968, 1969, 1970, 1973, 1983, 1984, 1989, 1991, 2004, 2008"
   ],
   [
      "Boston Celtics",
      "17",
      "5",
      "22",
      "0.773",
      "1957, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1968, 1969, 1974, 1976, 1981, 1984, 1986, 2008",
      "1958, 1985, 1987, 2010, 2022"
   ],
   [
      "Golden State Warriors",
      "7",
      "5",
      "12",
      "0.583",
      "1947, 1956, 1975, 2015, 2017, 2018, 2022",
      "1948, 1964, 1967, 2016, 2019"
   ],
   [
      "Chicago Bulls",
      "6",
      "0",
      "6",
      "1",
      "1991, 1992, 1993, 1996, 1997, 1998",
      ""
   ],
   [
      "San Antonio Spurs",
      "5",
      "1",
      "6",
      "0.833",
      "1999, 2003, 2005, 2007, 2014",
      "2013"
   ],
   [
      "Philadelphia 76ers",
      "3",
      "6",
      "9",
      "0.333",
      "1955, 1967, 1983",
      "1950, 1954, 1977, 1980, 1982, 2001"
   ],
   [
      "Detroit Pistons",
      "3",
      "4",
      "7",
      "0.429",
      "1989, 1990, 2004",
      "1955, 1956, 1988, 2005"
   ],
   [
      "Miami Heat",
      "3",
      "3",
      "6",
      "0.5",
      "2006, 2012, 2013",
      "2011, 2014, 2020"
   ],
   [
      "New York Knicks",
      "2",
      "6",
      "8",
      "0.25",
      "1970, 1973",
      "1951, 1952, 1953, 1972, 1994, 1999"
   ],
   [
      "Houston Rockets",
      "2",
      "2",
      "4",
      "0.5",
      "1994, 1995",
      "1981, 1986"
   ],
   [
      "Milwaukee Bucks",
      "2",
      "1",
      "3",
      "0.667",
      "1971, 2021",
      "1974"
   ],
   [
      "Cleveland Cavaliers",
      "1",
      "4",
      "5",
      "0.2",
      "2016",
      "2007, 2015, 2017, 2018"
   ],
   [
      "Atlanta Hawks",
      "1",
      "3",
      "4",
      "0.25",
      "1958",
      "1957, 1960, 1961"
   ],
   [
      "Washington Wizards",
      "1",
      "3",
      "4",
      "0.25",
      "1978",
      "1971, 1975, 1979"
   ],
   [
      "Oklahoma City Thunder",
      "1",
      "3",
      "4",
      "0.25",
      "1979",
      "1978, 1996, 2012"
   ],
   [
      "Portland Trail Blazers",
      "1",
      "2",
      "3",
      "0.333",
      "1977",
      "1990, 1992"
   ],
   [
      "Dallas Mavericks",
      "1",
      "1",
      "2",
      "0.5",
      "2011",
      "2006"
   ],
   [
      "Baltimore Bullets",
      "1",
      "0",
      "1",
      "1",
      "1948",
      ""
   ],
   [
      "Sacramento Kings",
      "1",
      "0",
      "1",
      "1",
      "1951",
      ""
   ],
   [
      "Toronto Raptors",
      "1",
      "0",
      "1",
      "1",
      "2019",
      ""
   ],
   [
      "Phoenix Suns",
      "0",
      "3",
      "3",
      "0",
      "",
      "1976, 1993, 2021"
   ],
   [
      "Utah Jazz",
      "0",
      "2",
      "2",
      "0",
      "",
      "1997, 1998"
   ],
   [
      "Brooklyn Nets",
      "0",
      "2",
      "2",
      "0",
      "",
      "2002, 2003"
   ],
   [
      "Orlando Magic",
      "0",
      "2",
      "2",
      "0",
      "",
      "1995, 2009"
   ],
   [
      "Chicago Stags ",
      "0",
      "1",
      "1",
      "0",
      "",
      "1947"
   ],
   [
      "Washington Capitols ",
      "0",
      "1",
      "1",
      "0",
      "",
      "1949"
   ],
   [
      "Indiana Pacers",
      "0",
      "1",
      "1",
      "0",
      "",
      "2000"
   ],
   [
      "Charlotte Hornets",
      "0",
      "0",
      "0",
      "0",
      "",
      ""
   ],
   [
      "Denver Nuggets",
      "0",
      "0",
      "0",
      "0",
      "",
      ""
   ],
   [
      "Los Angeles Clippers",
      "0",
      "0",
      "0",
      "0",
      "",
      ""
   ],
   [
      "Memphis Grizzlies",
      "0",
      "0",
      "0",
      "0",
      "",
      ""
   ],
   [
      "Minnesota Timberwolves",
      "0",
      "0",
      "0",
      "0",
      "",
      ""
   ],
   [
      "New Orleans Pelicans",
      "0",
      "0",
      "0",
      "0",
      "",
      ""
   ]
]
