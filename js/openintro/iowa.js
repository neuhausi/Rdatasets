var iowaInfo ={
   "format" : "A data frame with 1386 observations on the following 5 variables.",
   "description" : "Description\nA data frame containing information about the 2016 US Presidential Election for the state of Iowa.",
   "title" : "iowa",
   "usage" : "iowa",
   "reference" : "library(ggplot2)\nlibrary(dplyr)\n\nplot_data <- iowa |>\n  filter(candidate != \"Total\") |>\n  group_by(candidate) |>\n  summarize(total_votes = sum(votes) / 1000)\n\nggplot(plot_data, aes(total_votes, candidate)) +\n  geom_col() +\n  theme_minimal() +\n  labs(\n    title = \"2016 Presidential Election in Iowa\",\n    subtitle = \"Popular vote\",\n    y = \"\",\n    x = \"Number of Votes (in thousands)\n    \"\n  )",
   "parameters" : {
      "party" : "Political part of the candidate.",
      "votes" : "Number of votes received by the candidate.",
      "candidate" : "President/Vice President pairs who were running for office.",
      "office" : "The office that the candidates were running for.",
      "county" : "County in Iowa where the votes were cast."
   }
}

var iowa = [
   [
      "office",
      "candidate",
      "party",
      "county",
      "votes"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Adair",
      "10"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Adair",
      "32"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Adair",
      "127"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Adair",
      "5"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Adair",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Adair",
      "10"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Adair",
      "1133"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Adair",
      "14"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Adair",
      "3"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Adair",
      "2461"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Adair",
      "3848"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Adair",
      "38"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Adair",
      "5"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Adair",
      "10"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Adams",
      "6"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Adams",
      "22"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Adams",
      "93"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Adams",
      "3"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Adams",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Adams",
      "13"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Adams",
      "565"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Adams",
      "9"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Adams",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Adams",
      "1395"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Adams",
      "2131"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Adams",
      "22"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Adams",
      "1"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Adams",
      "1"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Allamakee",
      "34"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Allamakee",
      "91"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Allamakee",
      "227"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Allamakee",
      "21"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Allamakee",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Allamakee",
      "35"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Allamakee",
      "2421"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Allamakee",
      "46"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Allamakee",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Allamakee",
      "4093"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Allamakee",
      "7035"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Allamakee",
      "49"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Allamakee",
      "10"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Allamakee",
      "6"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Appanoose",
      "24"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Appanoose",
      "54"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Appanoose",
      "139"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Appanoose",
      "6"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Appanoose",
      "2"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Appanoose",
      "25"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Appanoose",
      "1814"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Appanoose",
      "42"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Appanoose",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Appanoose",
      "4033"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Appanoose",
      "6196"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Appanoose",
      "37"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Appanoose",
      "8"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Appanoose",
      "11"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Audubon",
      "9"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Audubon",
      "69"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Audubon",
      "107"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Audubon",
      "5"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Audubon",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Audubon",
      "17"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Audubon",
      "1080"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Audubon",
      "24"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Audubon",
      "2"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Audubon",
      "2136"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Audubon",
      "3486"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Audubon",
      "30"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Audubon",
      "2"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Audubon",
      "4"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Benton",
      "70"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Benton",
      "111"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Benton",
      "542"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Benton",
      "16"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Benton",
      "4"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Benton",
      "61"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Benton",
      "4678"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Benton",
      "86"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Benton",
      "2"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Benton",
      "8232"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Benton",
      "13971"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Benton",
      "139"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Benton",
      "17"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Benton",
      "13"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Black Hawk",
      "490"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Black Hawk",
      "491"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Black Hawk",
      "2368"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Black Hawk",
      "111"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Black Hawk",
      "11"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Black Hawk",
      "203"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Black Hawk",
      "32233"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Black Hawk",
      "610"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Black Hawk",
      "22"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Black Hawk",
      "27476"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Black Hawk",
      "65007"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Black Hawk",
      "835"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Black Hawk",
      "60"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Black Hawk",
      "97"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Boone",
      "158"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Boone",
      "98"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Boone",
      "643"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Boone",
      "16"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Boone",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Boone",
      "56"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Boone",
      "5541"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Boone",
      "104"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Boone",
      "6"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Boone",
      "7484"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Boone",
      "14310"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Boone",
      "162"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Boone",
      "22"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Boone",
      "20"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Bremer",
      "88"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Bremer",
      "133"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Bremer",
      "543"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Bremer",
      "20"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Bremer",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Bremer",
      "54"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Bremer",
      "5356"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Bremer",
      "81"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Bremer",
      "5"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Bremer",
      "7208"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Bremer",
      "13691"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Bremer",
      "171"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Bremer",
      "10"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Bremer",
      "21"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Buchanan",
      "48"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Buchanan",
      "97"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Buchanan",
      "478"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Buchanan",
      "28"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Buchanan",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Buchanan",
      "58"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Buchanan",
      "3970"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Buchanan",
      "54"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Buchanan",
      "2"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Buchanan",
      "5510"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Buchanan",
      "10377"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Buchanan",
      "105"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Buchanan",
      "17"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Buchanan",
      "9"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Buena Vista",
      "58"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Buena Vista",
      "77"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Buena Vista",
      "288"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Buena Vista",
      "26"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Buena Vista",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Buena Vista",
      "23"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Buena Vista",
      "2856"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Buena Vista",
      "48"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Buena Vista",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Buena Vista",
      "4903"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Buena Vista",
      "8381"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Buena Vista",
      "84"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Buena Vista",
      "13"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Buena Vista",
      "4"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Butler",
      "50"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Butler",
      "61"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Butler",
      "219"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Butler",
      "9"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Butler",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Butler",
      "47"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Butler",
      "2157"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Butler",
      "43"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Butler",
      "3"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Butler",
      "4921"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Butler",
      "7583"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Butler",
      "57"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Butler",
      "5"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Butler",
      "11"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Calhoun",
      "17"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Calhoun",
      "52"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Calhoun",
      "173"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Calhoun",
      "7"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Calhoun",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Calhoun",
      "29"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Calhoun",
      "1398"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Calhoun",
      "18"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Calhoun",
      "0"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Calhoun",
      "3468"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Calhoun",
      "5218"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Calhoun",
      "49"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Calhoun",
      "4"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Calhoun",
      "2"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Carroll",
      "54"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Carroll",
      "125"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Carroll",
      "318"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Carroll",
      "13"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Carroll",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Carroll",
      "41"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Carroll",
      "3309"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Carroll",
      "61"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Carroll",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Carroll",
      "6638"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Carroll",
      "10682"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Carroll",
      "90"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Carroll",
      "19"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Carroll",
      "13"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Cass",
      "51"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Cass",
      "59"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Cass",
      "206"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Cass",
      "14"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Cass",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Cass",
      "25"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Cass",
      "1951"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Cass",
      "52"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Cass",
      "0"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Cass",
      "4761"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Cass",
      "7198"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Cass",
      "57"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Cass",
      "13"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Cass",
      "8"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Cedar",
      "38"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Cedar",
      "80"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Cedar",
      "365"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Cedar",
      "10"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Cedar",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Cedar",
      "35"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Cedar",
      "3599"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Cedar",
      "70"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Cedar",
      "2"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Cedar",
      "5295"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Cedar",
      "9631"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Cedar",
      "111"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Cedar",
      "10"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Cedar",
      "16"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Cerro Gordo",
      "145"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Cerro Gordo",
      "141"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Cerro Gordo",
      "851"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Cerro Gordo",
      "31"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Cerro Gordo",
      "2"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Cerro Gordo",
      "26"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Cerro Gordo",
      "9862"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Cerro Gordo",
      "130"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Cerro Gordo",
      "8"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Cerro Gordo",
      "11621"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Cerro Gordo",
      "23137"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Cerro Gordo",
      "256"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Cerro Gordo",
      "43"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Cerro Gordo",
      "21"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Cherokee",
      "41"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Cherokee",
      "49"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Cherokee",
      "206"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Cherokee",
      "8"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Cherokee",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Cherokee",
      "29"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Cherokee",
      "1679"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Cherokee",
      "29"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Cherokee",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Cherokee",
      "4192"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Cherokee",
      "6315"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Cherokee",
      "65"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Cherokee",
      "9"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Cherokee",
      "7"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Chickasaw",
      "28"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Chickasaw",
      "75"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Chickasaw",
      "236"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Chickasaw",
      "8"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Chickasaw",
      "3"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Chickasaw",
      "33"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Chickasaw",
      "2266"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Chickasaw",
      "48"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Chickasaw",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Chickasaw",
      "3742"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Chickasaw",
      "6518"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Chickasaw",
      "63"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Chickasaw",
      "10"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Chickasaw",
      "5"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Clarke",
      "20"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Clarke",
      "51"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Clarke",
      "160"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Clarke",
      "4"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Clarke",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Clarke",
      "26"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Clarke",
      "1465"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Clarke",
      "18"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Clarke",
      "0"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Clarke",
      "2713"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Clarke",
      "4509"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Clarke",
      "39"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Clarke",
      "9"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Clarke",
      "4"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Clay",
      "58"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Clay",
      "74"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Clay",
      "288"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Clay",
      "15"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Clay",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Clay",
      "25"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Clay",
      "2249"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Clay",
      "35"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Clay",
      "2"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Clay",
      "5877"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Clay",
      "8706"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Clay",
      "63"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Clay",
      "13"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Clay",
      "6"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Clayton",
      "47"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Clayton",
      "75"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Clayton",
      "334"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Clayton",
      "13"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Clayton",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Clayton",
      "16"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Clayton",
      "3237"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Clayton",
      "51"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Clayton",
      "3"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Clayton",
      "5317"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Clayton",
      "9217"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Clayton",
      "70"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Clayton",
      "30"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Clayton",
      "23"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Clinton",
      "135"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Clinton",
      "183"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Clinton",
      "825"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Clinton",
      "97"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Clinton",
      "6"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Clinton",
      "105"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Clinton",
      "10095"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Clinton",
      "184"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Clinton",
      "5"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Clinton",
      "11276"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Clinton",
      "23347"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Clinton",
      "267"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Clinton",
      "66"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Clinton",
      "103"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Crawford",
      "19"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Crawford",
      "74"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Crawford",
      "172"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Crawford",
      "28"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Crawford",
      "2"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Crawford",
      "25"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Crawford",
      "1991"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Crawford",
      "33"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Crawford",
      "6"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Crawford",
      "4617"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Crawford",
      "7037"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Crawford",
      "57"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Crawford",
      "7"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Crawford",
      "6"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Dallas",
      "519"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Dallas",
      "289"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Dallas",
      "1757"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Dallas",
      "47"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Dallas",
      "8"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Dallas",
      "143"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Dallas",
      "15701"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Dallas",
      "181"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Dallas",
      "15"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Dallas",
      "19339"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Dallas",
      "38588"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Dallas",
      "535"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Dallas",
      "28"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Dallas",
      "26"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Davis",
      "21"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Davis",
      "55"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Davis",
      "85"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Davis",
      "6"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Davis",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Davis",
      "17"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Davis",
      "977"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Davis",
      "25"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Davis",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Davis",
      "2723"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Davis",
      "3943"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Davis",
      "20"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Davis",
      "7"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Davis",
      "6"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Decatur",
      "20"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Decatur",
      "37"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Decatur",
      "123"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Decatur",
      "13"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Decatur",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Decatur",
      "26"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Decatur",
      "1201"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Decatur",
      "29"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Decatur",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Decatur",
      "2296"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Decatur",
      "3784"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Decatur",
      "31"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Decatur",
      "5"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Decatur",
      "1"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Delaware",
      "47"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Delaware",
      "85"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Delaware",
      "337"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Delaware",
      "13"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Delaware",
      "2"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Delaware",
      "38"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Delaware",
      "2957"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Delaware",
      "40"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Delaware",
      "0"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Delaware",
      "5694"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Delaware",
      "9339"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Delaware",
      "69"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Delaware",
      "39"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Delaware",
      "18"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Des Moines",
      "130"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Des Moines",
      "143"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Des Moines",
      "635"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Des Moines",
      "25"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Des Moines",
      "4"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Des Moines",
      "75"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Des Moines",
      "8212"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Des Moines",
      "134"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Des Moines",
      "8"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Des Moines",
      "9529"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Des Moines",
      "19271"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Des Moines",
      "300"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Des Moines",
      "40"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Des Moines",
      "36"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Dickinson",
      "51"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Dickinson",
      "88"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Dickinson",
      "292"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Dickinson",
      "15"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Dickinson",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Dickinson",
      "31"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Dickinson",
      "3056"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Dickinson",
      "54"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Dickinson",
      "6"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Dickinson",
      "6753"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Dickinson",
      "10457"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Dickinson",
      "89"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Dickinson",
      "8"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Dickinson",
      "14"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Dubuque",
      "305"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Dubuque",
      "461"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Dubuque",
      "2013"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Dubuque",
      "39"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Dubuque",
      "12"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Dubuque",
      "60"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Dubuque",
      "22850"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Dubuque",
      "379"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Dubuque",
      "12"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Dubuque",
      "23460"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Dubuque",
      "50221"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Dubuque",
      "504"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Dubuque",
      "88"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Dubuque",
      "38"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Emmet",
      "16"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Emmet",
      "47"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Emmet",
      "139"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Emmet",
      "10"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Emmet",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Emmet",
      "20"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Emmet",
      "1357"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Emmet",
      "26"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Emmet",
      "0"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Emmet",
      "3124"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Emmet",
      "4810"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Emmet",
      "41"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Emmet",
      "16"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Emmet",
      "13"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Fayette",
      "65"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Fayette",
      "105"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Fayette",
      "328"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Fayette",
      "18"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Fayette",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Fayette",
      "43"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Fayette",
      "3689"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Fayette",
      "62"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Fayette",
      "4"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Fayette",
      "5620"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Fayette",
      "10098"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Fayette",
      "104"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Fayette",
      "24"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Fayette",
      "35"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Floyd",
      "63"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Floyd",
      "86"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Floyd",
      "241"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Floyd",
      "13"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Floyd",
      "3"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Floyd",
      "43"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Floyd",
      "3179"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Floyd",
      "60"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Floyd",
      "3"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Floyd",
      "4375"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Floyd",
      "8159"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Floyd",
      "69"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Floyd",
      "16"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Floyd",
      "8"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Franklin",
      "28"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Franklin",
      "65"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Franklin",
      "188"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Franklin",
      "13"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Franklin",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Franklin",
      "16"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Franklin",
      "1493"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Franklin",
      "31"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Franklin",
      "2"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Franklin",
      "3163"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Franklin",
      "5046"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Franklin",
      "38"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Franklin",
      "4"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Franklin",
      "5"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Fremont",
      "19"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Fremont",
      "33"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Fremont",
      "115"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Fremont",
      "5"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Fremont",
      "2"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Fremont",
      "15"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Fremont",
      "963"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Fremont",
      "21"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Fremont",
      "3"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Fremont",
      "2407"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Fremont",
      "3633"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Fremont",
      "31"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Fremont",
      "9"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Fremont",
      "10"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Greene",
      "29"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Greene",
      "49"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Greene",
      "160"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Greene",
      "6"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Greene",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Greene",
      "20"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Greene",
      "1691"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Greene",
      "31"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Greene",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Greene",
      "2820"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Greene",
      "4876"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Greene",
      "55"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Greene",
      "4"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Greene",
      "9"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Grundy",
      "50"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Grundy",
      "71"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Grundy",
      "233"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Grundy",
      "1"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Grundy",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Grundy",
      "37"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Grundy",
      "1856"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Grundy",
      "38"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Grundy",
      "3"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Grundy",
      "4527"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Grundy",
      "6944"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Grundy",
      "96"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Grundy",
      "21"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Grundy",
      "11"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Guthrie",
      "18"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Guthrie",
      "61"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Guthrie",
      "258"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Guthrie",
      "5"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Guthrie",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Guthrie",
      "20"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Guthrie",
      "1732"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Guthrie",
      "19"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Guthrie",
      "0"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Guthrie",
      "3628"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Guthrie",
      "5816"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Guthrie",
      "53"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Guthrie",
      "7"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Guthrie",
      "15"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Hamilton",
      "68"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Hamilton",
      "68"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Hamilton",
      "259"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Hamilton",
      "23"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Hamilton",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Hamilton",
      "51"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Hamilton",
      "2726"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Hamilton",
      "31"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Hamilton",
      "3"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Hamilton",
      "4463"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Hamilton",
      "7785"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Hamilton",
      "80"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Hamilton",
      "8"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Hamilton",
      "5"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Hancock",
      "31"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Hancock",
      "50"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Hancock",
      "166"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Hancock",
      "12"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Hancock",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Hancock",
      "23"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Hancock",
      "1587"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Hancock",
      "24"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Hancock",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Hancock",
      "3977"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Hancock",
      "5933"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Hancock",
      "41"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Hancock",
      "13"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Hancock",
      "8"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Hardin",
      "69"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Hardin",
      "85"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Hardin",
      "298"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Hardin",
      "21"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Hardin",
      "4"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Hardin",
      "8"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Hardin",
      "2787"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Hardin",
      "28"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Hardin",
      "4"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Hardin",
      "5254"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Hardin",
      "8639"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Hardin",
      "69"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Hardin",
      "9"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Hardin",
      "3"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Harrison",
      "39"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Harrison",
      "73"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Harrison",
      "210"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Harrison",
      "14"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Harrison",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Harrison",
      "37"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Harrison",
      "2131"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Harrison",
      "50"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Harrison",
      "3"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Harrison",
      "4902"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Harrison",
      "7552"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Harrison",
      "68"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Harrison",
      "17"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Harrison",
      "7"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Henry",
      "100"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Henry",
      "73"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Henry",
      "337"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Henry",
      "23"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Henry",
      "4"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Henry",
      "40"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Henry",
      "2904"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Henry",
      "113"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Henry",
      "4"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Henry",
      "5779"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Henry",
      "9500"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Henry",
      "94"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Henry",
      "14"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Henry",
      "15"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Howard",
      "15"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Howard",
      "72"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Howard",
      "131"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Howard",
      "9"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Howard",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Howard",
      "15"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Howard",
      "1677"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Howard",
      "38"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Howard",
      "0"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Howard",
      "2611"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Howard",
      "4640"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Howard",
      "47"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Howard",
      "11"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Howard",
      "13"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Humboldt",
      "40"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Humboldt",
      "45"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Humboldt",
      "127"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Humboldt",
      "9"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Humboldt",
      "2"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Humboldt",
      "13"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Humboldt",
      "1252"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Humboldt",
      "20"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Humboldt",
      "2"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Humboldt",
      "3568"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Humboldt",
      "5141"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Humboldt",
      "49"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Humboldt",
      "8"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Humboldt",
      "6"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Ida",
      "16"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Ida",
      "33"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Ida",
      "103"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Ida",
      "3"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Ida",
      "2"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Ida",
      "8"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Ida",
      "792"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Ida",
      "9"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Ida",
      "0"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Ida",
      "2655"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Ida",
      "3648"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Ida",
      "21"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Ida",
      "2"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Ida",
      "4"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Iowa",
      "54"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Iowa",
      "90"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Iowa",
      "317"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Iowa",
      "8"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Iowa",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Iowa",
      "69"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Iowa",
      "3084"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Iowa",
      "61"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Iowa",
      "6"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Iowa",
      "5205"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Iowa",
      "9002"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Iowa",
      "85"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Iowa",
      "14"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Iowa",
      "9"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Jackson",
      "55"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Jackson",
      "167"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Jackson",
      "319"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Jackson",
      "27"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Jackson",
      "2"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Jackson",
      "53"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Jackson",
      "3837"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Jackson",
      "85"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Jackson",
      "7"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Jackson",
      "5824"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Jackson",
      "10504"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Jackson",
      "102"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Jackson",
      "12"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Jackson",
      "14"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Jasper",
      "91"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Jasper",
      "134"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Jasper",
      "715"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Jasper",
      "58"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Jasper",
      "2"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Jasper",
      "90"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Jasper",
      "7109"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Jasper",
      "95"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Jasper",
      "4"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Jasper",
      "10560"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Jasper",
      "19226"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Jasper",
      "253"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Jasper",
      "39"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Jasper",
      "76"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Jefferson",
      "25"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Jefferson",
      "110"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Jefferson",
      "246"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Jefferson",
      "19"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Jefferson",
      "2"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Jefferson",
      "22"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Jefferson",
      "3710"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Jefferson",
      "256"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Jefferson",
      "0"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Jefferson",
      "3748"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Jefferson",
      "8285"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Jefferson",
      "136"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Jefferson",
      "6"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Jefferson",
      "5"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Johnson",
      "721"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Johnson",
      "423"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Johnson",
      "2758"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Johnson",
      "113"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Johnson",
      "35"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Johnson",
      "130"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Johnson",
      "50200"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Johnson",
      "878"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Johnson",
      "18"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Johnson",
      "21044"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Johnson",
      "77476"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Johnson",
      "964"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Johnson",
      "67"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Johnson",
      "125"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Jones",
      "50"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Jones",
      "95"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Jones",
      "305"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Jones",
      "8"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Jones",
      "2"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Jones",
      "40"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Jones",
      "3787"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Jones",
      "62"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Jones",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Jones",
      "5720"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Jones",
      "10236"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Jones",
      "109"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Jones",
      "25"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Jones",
      "32"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Keokuk",
      "15"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Keokuk",
      "44"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Keokuk",
      "139"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Keokuk",
      "6"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Keokuk",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Keokuk",
      "17"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Keokuk",
      "1342"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Keokuk",
      "28"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Keokuk",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Keokuk",
      "3390"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Keokuk",
      "5035"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Keokuk",
      "44"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Keokuk",
      "7"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Keokuk",
      "1"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Kossuth",
      "36"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Kossuth",
      "94"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Kossuth",
      "194"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Kossuth",
      "41"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Kossuth",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Kossuth",
      "22"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Kossuth",
      "2543"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Kossuth",
      "33"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Kossuth",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Kossuth",
      "5653"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Kossuth",
      "8742"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Kossuth",
      "70"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Kossuth",
      "28"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Kossuth",
      "26"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Lee",
      "84"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Lee",
      "148"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Lee",
      "510"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Lee",
      "48"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Lee",
      "5"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Lee",
      "77"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Lee",
      "6215"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Lee",
      "145"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Lee",
      "8"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Lee",
      "8803"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Lee",
      "16347"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Lee",
      "187"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Lee",
      "39"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Lee",
      "78"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Linn",
      "933"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Linn",
      "770"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Linn",
      "5557"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Linn",
      "248"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Linn",
      "23"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Linn",
      "266"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Linn",
      "58935"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Linn",
      "1005"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Linn",
      "34"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Linn",
      "48390"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Linn",
      "118116"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Linn",
      "1703"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Linn",
      "133"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Linn",
      "119"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Louisa",
      "39"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Louisa",
      "55"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Louisa",
      "136"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Louisa",
      "13"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Louisa",
      "4"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Louisa",
      "26"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Louisa",
      "1648"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Louisa",
      "28"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Louisa",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Louisa",
      "3069"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Louisa",
      "5076"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Louisa",
      "48"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Louisa",
      "5"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Louisa",
      "4"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Lucas",
      "16"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Lucas",
      "28"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Lucas",
      "115"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Lucas",
      "10"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Lucas",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Lucas",
      "18"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Lucas",
      "1239"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Lucas",
      "28"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Lucas",
      "0"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Lucas",
      "2877"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Lucas",
      "4392"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Lucas",
      "50"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Lucas",
      "4"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Lucas",
      "6"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Lyon",
      "35"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Lyon",
      "47"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Lyon",
      "137"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Lyon",
      "7"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Lyon",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Lyon",
      "18"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Lyon",
      "920"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Lyon",
      "18"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Lyon",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Lyon",
      "5192"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Lyon",
      "6431"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Lyon",
      "32"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Lyon",
      "16"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Lyon",
      "7"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Madison",
      "84"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Madison",
      "67"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Madison",
      "347"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Madison",
      "3"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Madison",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Madison",
      "37"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Madison",
      "2678"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Madison",
      "41"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Madison",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Madison",
      "5360"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Madison",
      "8706"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Madison",
      "71"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Madison",
      "11"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Madison",
      "5"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Mahaska",
      "73"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Mahaska",
      "79"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Mahaska",
      "318"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Mahaska",
      "12"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Mahaska",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Mahaska",
      "35"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Mahaska",
      "2619"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Mahaska",
      "38"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Mahaska",
      "0"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Mahaska",
      "7432"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Mahaska",
      "10723"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Mahaska",
      "95"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Mahaska",
      "13"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Mahaska",
      "9"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Marion",
      "204"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Marion",
      "175"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Marion",
      "706"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Marion",
      "0"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Marion",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Marion",
      "111"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Marion",
      "5482"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Marion",
      "73"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Marion",
      "7"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Marion",
      "10962"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Marion",
      "17991"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Marion",
      "223"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Marion",
      "28"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Marion",
      "19"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Marshall",
      "104"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Marshall",
      "153"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Marshall",
      "577"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Marshall",
      "42"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Marshall",
      "7"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Marshall",
      "77"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Marshall",
      "7652"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Marshall",
      "117"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Marshall",
      "5"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Marshall",
      "9146"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Marshall",
      "18175"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Marshall",
      "228"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Marshall",
      "33"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Marshall",
      "34"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Mills",
      "76"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Mills",
      "63"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Mills",
      "307"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Mills",
      "11"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Mills",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Mills",
      "26"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Mills",
      "2090"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Mills",
      "56"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Mills",
      "2"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Mills",
      "5067"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Mills",
      "7772"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Mills",
      "59"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Mills",
      "7"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Mills",
      "8"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Mitchell",
      "25"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Mitchell",
      "101"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Mitchell",
      "210"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Mitchell",
      "3"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Mitchell",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Mitchell",
      "16"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Mitchell",
      "1888"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Mitchell",
      "28"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Mitchell",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Mitchell",
      "3190"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Mitchell",
      "5521"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Mitchell",
      "34"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Mitchell",
      "14"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Mitchell",
      "10"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Monona",
      "12"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Monona",
      "46"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Monona",
      "112"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Monona",
      "11"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Monona",
      "2"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Monona",
      "10"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Monona",
      "1247"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Monona",
      "22"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Monona",
      "0"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Monona",
      "3120"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Monona",
      "4629"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Monona",
      "39"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Monona",
      "4"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Monona",
      "4"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Monroe",
      "15"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Monroe",
      "37"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Monroe",
      "104"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Monroe",
      "5"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Monroe",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Monroe",
      "20"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Monroe",
      "1056"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Monroe",
      "13"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Monroe",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Monroe",
      "2638"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Monroe",
      "3907"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Monroe",
      "14"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Monroe",
      "1"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Monroe",
      "3"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Montgomery",
      "27"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Montgomery",
      "50"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Montgomery",
      "152"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Montgomery",
      "8"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Montgomery",
      "3"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Montgomery",
      "21"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Montgomery",
      "1314"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Montgomery",
      "38"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Montgomery",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Montgomery",
      "3436"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Montgomery",
      "5102"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Montgomery",
      "39"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Montgomery",
      "8"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Montgomery",
      "5"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Muscatine",
      "136"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Muscatine",
      "155"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Muscatine",
      "748"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Muscatine",
      "34"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Muscatine",
      "7"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Muscatine",
      "87"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Muscatine",
      "8368"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Muscatine",
      "183"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Muscatine",
      "3"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Muscatine",
      "9584"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Muscatine",
      "19623"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Muscatine",
      "213"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Muscatine",
      "42"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Muscatine",
      "63"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "O'Brien",
      "31"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "O'Brien",
      "52"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "O'Brien",
      "197"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "O'Brien",
      "2"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "O'Brien",
      "2"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "O'Brien",
      "22"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "O'Brien",
      "1315"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "O'Brien",
      "28"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "O'Brien",
      "3"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "O'Brien",
      "5752"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "O'Brien",
      "7460"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "O'Brien",
      "36"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "O'Brien",
      "16"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "O'Brien",
      "4"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Osceola",
      "20"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Osceola",
      "35"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Osceola",
      "73"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Osceola",
      "3"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Osceola",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Osceola",
      "10"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Osceola",
      "552"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Osceola",
      "10"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Osceola",
      "0"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Osceola",
      "2531"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Osceola",
      "3251"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Osceola",
      "13"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Osceola",
      "3"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Osceola",
      "0"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Page",
      "35"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Page",
      "62"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Page",
      "176"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Page",
      "15"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Page",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Page",
      "30"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Page",
      "1807"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Page",
      "37"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Page",
      "3"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Page",
      "4893"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Page",
      "7121"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Page",
      "49"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Page",
      "7"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Page",
      "7"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Palo Alto",
      "13"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Palo Alto",
      "37"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Palo Alto",
      "131"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Palo Alto",
      "20"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Palo Alto",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Palo Alto",
      "12"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Palo Alto",
      "1398"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Palo Alto",
      "20"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Palo Alto",
      "0"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Palo Alto",
      "3081"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Palo Alto",
      "4760"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Palo Alto",
      "24"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Palo Alto",
      "14"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Palo Alto",
      "9"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Plymouth",
      "72"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Plymouth",
      "62"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Plymouth",
      "343"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Plymouth",
      "22"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Plymouth",
      "3"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Plymouth",
      "33"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Plymouth",
      "2885"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Plymouth",
      "52"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Plymouth",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Plymouth",
      "9680"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Plymouth",
      "13274"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Plymouth",
      "102"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Plymouth",
      "14"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Plymouth",
      "5"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Pocahontas",
      "14"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Pocahontas",
      "51"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Pocahontas",
      "115"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Pocahontas",
      "2"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Pocahontas",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Pocahontas",
      "21"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Pocahontas",
      "963"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Pocahontas",
      "14"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Pocahontas",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Pocahontas",
      "2702"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Pocahontas",
      "3918"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Pocahontas",
      "23"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Pocahontas",
      "6"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Pocahontas",
      "6"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Polk",
      "2380"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Polk",
      "1668"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Polk",
      "10029"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Polk",
      "162"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Polk",
      "51"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Polk",
      "672"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Polk",
      "119804"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Polk",
      "1737"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Polk",
      "73"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Polk",
      "93492"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Polk",
      "233385"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Polk",
      "2896"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Polk",
      "221"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Polk",
      "200"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Pottawattami",
      "253"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Pottawattami",
      "259"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Pottawattami",
      "1469"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Pottawattami",
      "119"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Pottawattami",
      "6"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Pottawattami",
      "93"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Pottawattami",
      "15355"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Pottawattami",
      "327"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Pottawattami",
      "8"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Pottawattami",
      "24447"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Pottawattami",
      "43058"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Pottawattami",
      "431"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Pottawattami",
      "154"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Pottawattami",
      "137"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Poweshiek",
      "46"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Poweshiek",
      "67"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Poweshiek",
      "283"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Poweshiek",
      "16"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Poweshiek",
      "8"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Poweshiek",
      "44"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Poweshiek",
      "4304"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Poweshiek",
      "73"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Poweshiek",
      "3"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Poweshiek",
      "4946"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Poweshiek",
      "9916"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Poweshiek",
      "95"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Poweshiek",
      "11"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Poweshiek",
      "20"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Ringgold",
      "7"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Ringgold",
      "43"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Ringgold",
      "72"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Ringgold",
      "2"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Ringgold",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Ringgold",
      "15"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Ringgold",
      "753"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Ringgold",
      "8"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Ringgold",
      "2"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Ringgold",
      "1824"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Ringgold",
      "2752"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Ringgold",
      "19"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Ringgold",
      "5"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Ringgold",
      "2"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Sac",
      "15"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Sac",
      "41"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Sac",
      "129"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Sac",
      "4"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Sac",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Sac",
      "17"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Sac",
      "1270"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Sac",
      "23"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Sac",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Sac",
      "3703"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Sac",
      "5257"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Sac",
      "42"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Sac",
      "8"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Sac",
      "4"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Scott",
      "647"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Scott",
      "986"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Scott",
      "3555"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Scott",
      "80"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Scott",
      "16"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Scott",
      "298"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Scott",
      "40440"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Scott",
      "784"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Scott",
      "28"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Scott",
      "39149"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Scott",
      "87286"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Scott",
      "1119"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Scott",
      "85"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Scott",
      "99"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Shelby",
      "39"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Shelby",
      "73"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Shelby",
      "174"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Shelby",
      "5"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Shelby",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Shelby",
      "21"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Shelby",
      "1662"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Shelby",
      "28"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Shelby",
      "2"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Shelby",
      "4362"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Shelby",
      "6448"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Shelby",
      "63"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Shelby",
      "13"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Shelby",
      "5"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Sioux",
      "352"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Sioux",
      "120"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Sioux",
      "435"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Sioux",
      "18"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Sioux",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Sioux",
      "86"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Sioux",
      "2300"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Sioux",
      "53"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Sioux",
      "4"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Sioux",
      "14785"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Sioux",
      "18332"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Sioux",
      "165"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Sioux",
      "9"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Sioux",
      "5"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Story",
      "1061"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Story",
      "290"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Story",
      "3014"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Story",
      "17"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Story",
      "15"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Story",
      "126"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Story",
      "25709"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Story",
      "491"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Story",
      "15"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Story",
      "19458"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Story",
      "50974"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Story",
      "691"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Story",
      "63"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Story",
      "24"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Tama",
      "44"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Tama",
      "105"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Tama",
      "245"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Tama",
      "9"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Tama",
      "3"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Tama",
      "46"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Tama",
      "3196"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Tama",
      "79"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Tama",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Tama",
      "4971"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Tama",
      "8866"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Tama",
      "110"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Tama",
      "20"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Tama",
      "37"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Taylor",
      "12"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Taylor",
      "32"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Taylor",
      "97"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Taylor",
      "4"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Taylor",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Taylor",
      "14"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Taylor",
      "758"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Taylor",
      "10"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Taylor",
      "2"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Taylor",
      "2111"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Taylor",
      "3065"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Taylor",
      "20"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Taylor",
      "3"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Taylor",
      "2"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Union",
      "18"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Union",
      "37"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Union",
      "213"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Union",
      "16"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Union",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Union",
      "26"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Union",
      "1922"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Union",
      "52"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Union",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Union",
      "3525"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Union",
      "5885"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Union",
      "57"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Union",
      "9"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Union",
      "9"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Van Buren",
      "21"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Van Buren",
      "28"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Van Buren",
      "83"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Van Buren",
      "6"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Van Buren",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Van Buren",
      "22"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Van Buren",
      "845"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Van Buren",
      "19"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Van Buren",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Van Buren",
      "2527"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Van Buren",
      "3595"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Van Buren",
      "32"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Van Buren",
      "8"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Van Buren",
      "3"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Wapello",
      "65"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Wapello",
      "100"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Wapello",
      "380"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Wapello",
      "28"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Wapello",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Wapello",
      "49"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Wapello",
      "5594"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Wapello",
      "122"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Wapello",
      "4"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Wapello",
      "8715"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Wapello",
      "15277"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Wapello",
      "144"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Wapello",
      "30"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Wapello",
      "45"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Warren",
      "194"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Warren",
      "192"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Warren",
      "1275"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Warren",
      "15"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Warren",
      "7"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Warren",
      "124"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Warren",
      "10411"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Warren",
      "123"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Warren",
      "12"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Warren",
      "14814"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Warren",
      "27507"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Warren",
      "295"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Warren",
      "28"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Warren",
      "17"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Washington",
      "92"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Washington",
      "137"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Washington",
      "459"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Washington",
      "26"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Washington",
      "2"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Washington",
      "63"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Washington",
      "3943"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Washington",
      "79"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Washington",
      "2"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Washington",
      "6173"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Washington",
      "11092"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Washington",
      "96"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Washington",
      "10"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Washington",
      "10"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Wayne",
      "20"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Wayne",
      "42"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Wayne",
      "78"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Wayne",
      "7"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Wayne",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Wayne",
      "10"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Wayne",
      "719"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Wayne",
      "17"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Wayne",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Wayne",
      "2069"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Wayne",
      "2989"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Wayne",
      "19"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Wayne",
      "4"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Wayne",
      "3"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Webster",
      "104"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Webster",
      "116"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Webster",
      "569"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Webster",
      "47"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Webster",
      "3"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Webster",
      "65"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Webster",
      "6305"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Webster",
      "113"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Webster",
      "5"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Webster",
      "10056"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Webster",
      "17593"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Webster",
      "170"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Webster",
      "16"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Webster",
      "24"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Winnebago",
      "49"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Winnebago",
      "57"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Winnebago",
      "218"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Winnebago",
      "20"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Winnebago",
      "1"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Winnebago",
      "36"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Winnebago",
      "1931"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Winnebago",
      "34"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Winnebago",
      "7"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Winnebago",
      "3447"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Winnebago",
      "5864"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Winnebago",
      "48"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Winnebago",
      "10"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Winnebago",
      "6"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Winneshiek",
      "102"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Winneshiek",
      "126"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Winneshiek",
      "382"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Winneshiek",
      "23"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Winneshiek",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Winneshiek",
      "35"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Winneshiek",
      "5254"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Winneshiek",
      "99"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Winneshiek",
      "0"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Winneshiek",
      "5344"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Winneshiek",
      "11511"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Winneshiek",
      "116"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Winneshiek",
      "17"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Winneshiek",
      "13"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Woodbury",
      "234"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Woodbury",
      "318"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Woodbury",
      "1179"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Woodbury",
      "131"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Woodbury",
      "12"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Woodbury",
      "207"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Woodbury",
      "16210"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Woodbury",
      "324"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Woodbury",
      "12"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Woodbury",
      "24727"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Woodbury",
      "44167"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Woodbury",
      "569"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Woodbury",
      "93"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Woodbury",
      "151"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Worth",
      "34"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Worth",
      "43"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Worth",
      "165"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Worth",
      "5"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Worth",
      "0"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Worth",
      "15"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Worth",
      "1530"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Worth",
      "24"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Worth",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Worth",
      "2453"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Worth",
      "4305"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Worth",
      "24"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Worth",
      "7"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Worth",
      "4"
   ],
   [
      "President/Vice President",
      "Evan McMullin / Nathan Johnson",
      "Nominated by Petition",
      "Wright",
      "25"
   ],
   [
      "President/Vice President",
      "Under Votes",
      "",
      "Wright",
      "56"
   ],
   [
      "President/Vice President",
      "Gary Johnson / Bill Weld",
      "Libertarian",
      "Wright",
      "176"
   ],
   [
      "President/Vice President",
      "Over Votes",
      "",
      "Wright",
      "10"
   ],
   [
      "President/Vice President",
      "Gloria La Riva / Dennis J. Banks",
      "Socialism and Liberation",
      "Wright",
      "2"
   ],
   [
      "President/Vice President",
      "Darrell L. Castle / Scott N. Bradley",
      "Constitution",
      "Wright",
      "19"
   ],
   [
      "President/Vice President",
      "Hillary Clinton / Tim Kaine",
      "Democratic",
      "Wright",
      "1896"
   ],
   [
      "President/Vice President",
      "Jill Stein / Ajamu Baraka",
      "Green",
      "Wright",
      "35"
   ],
   [
      "President/Vice President",
      "Rocky Roque De La Fuente / Michael Steinberg",
      "Nominated by Petition",
      "Wright",
      "1"
   ],
   [
      "President/Vice President",
      "Donald Trump / Mike Pence",
      "Republican",
      "Wright",
      "3800"
   ],
   [
      "President/Vice President",
      "Total",
      "",
      "Wright",
      "6092"
   ],
   [
      "President/Vice President",
      "Write-In",
      "",
      "Wright",
      "60"
   ],
   [
      "President/Vice President",
      "Lynn Kahn / Jay Stolba",
      "New Independent",
      "Wright",
      "6"
   ],
   [
      "President/Vice President",
      "Dan R. Vacek / Mark G. Elworth",
      "Legal Marijuana Now",
      "Wright",
      "6"
   ]
]
