var Langren1644Info ={
   "format" : "Langren1644: A data frame with 12 observations on the following 9 variables,\ngiving determinations of the distance in longitude between Toledo and Rome, from the 1644 graph.",
   "description" : "Description\nMichael Florent van Langren (1598-1675) was a Dutch mathematician and astronomer, who served\nas a royal mathematician to King Phillip IV of Spain, and who worked on one of the most significant\nproblems of his time&mdash; the accurate determination of longitude, particularly for navigation at sea.\nIn order to convince the Spanish court of the seriousness of the problem (often resulting in\ngreat losses through ship wrecks), he prepared a 1-dimensional line graph, showing all the \navailable estimates of the distance in longitude between Toledo and Rome, which showed\nlarge errors, for even this modest distance.  This 1D line graph, from Langren (1644), is believed\nto be the first known graph of statistical data (Friendly etal., 2010).\nIt provides a compelling example of the notions of statistical variability and bias.\nThe data frame Langren1644 gives the estimates and other information derived from the\npreviously known 1644 graph.  \nIt turns out that van Langren produced other versions of this graph, as early as 1628.\nThe data frame Langren.all gives the estimates derived\nfrom all known versions of this graph.",
   "title" : "van Langren's Data on Longitude Distance between Toledo and Rome",
   "usage" : "data(Langren1644)\n\tdata(Langren.all)",
   "reference" : "In all the graphs, Toledo is implicitly at the origin and Rome is located relatively at the value of Longitude  \nTo judge correspondence with an actual map, the positions in (lat, long) are",
   "parameters" : {
      "Gap" : "A numeric vector indicating whether the Longitude value is below or above the median",
      "Name" : "The name of the person giving a determination, a factor with levels A. Argelius ... T. Brahe",
      "Year" : "Year associated with this determination",
      "Longname" : "A longer version of the Name, where appropriate; a factor with levels Andrea Argoli Christoph Clavius  Tycho Brahe",
      "Source" : "Likely source for this determination of Longitude; a factor with levels Astron Map",
      "Longitude" : "Estimated value of the longitude distance between Toledo and Rome",
      "City" : "The principal city where this person worked; a factor with levels Alexandria Amsterdam Bamberg Bologna Frankfurt Hven Leuven Middelburg Nuremberg Padua Paris Rome",
      "Latitude" : "Latitude of this City; a numeric vector",
      "Country" : "The country where this person worked; a factor with levels Belgium Denmark Egypt Flanders France Germany Italy Italy"
   }
}

var Langren1644 = [
   [
      "Name",
      "Longitude",
      "Year",
      "Longname",
      "City",
      "Country",
      "Latitude",
      "Source",
      "Gap"
   ],
   [
      "G. Jansonius",
      "17.736",
      "1605",
      "Jan Jansson",
      "Amsterdam",
      "Flanders",
      "52.373056",
      "Map",
      "0"
   ],
   [
      "G. Mercator",
      "19.872",
      "1567",
      "Gerardus Mercator",
      "Leuven",
      "Flanders",
      "50.883333",
      "Map",
      "0"
   ],
   [
      "I. Schonerus",
      "20.638",
      "1536",
      "Johann Schoner",
      "Bamberg",
      "Germany",
      "49.891667",
      "Astron",
      "0"
   ],
   [
      "P. Lantsbergius",
      "21.106",
      "1530",
      "Phillip van Lansberge",
      "Middelburg",
      "Belgium",
      "51.5",
      "Astron",
      "0"
   ],
   [
      "T. Brahe",
      "21.447",
      "1578",
      "Tycho Brahe",
      "Hven",
      "Denmark",
      "55.866667",
      "Astron",
      "0"
   ],
   [
      "I. Regiomontanus",
      "25.617",
      "1463",
      "Johann Muller",
      "Nuremberg",
      "Germany",
      "49.45",
      "Astron",
      "1"
   ],
   [
      "Orontius",
      "26",
      "1542",
      "Oronce Fine",
      "Paris",
      "France",
      "48.866667",
      "Astron",
      "1"
   ],
   [
      "C. Clavius",
      "26.34",
      "1567",
      "Christoph Clavius",
      "Rome",
      "Italy",
      "41.9",
      "Astron",
      "1"
   ],
   [
      "C. Ptolomeus",
      "27.787",
      "150",
      "Claudius Ptolemaeus",
      "Alexandria",
      "Egypt",
      "31.1980556",
      "Astron",
      "1"
   ],
   [
      "A. Argelius",
      "28.17",
      "1610",
      "Andrea Argoli",
      "Padua",
      "Italy ",
      "45.4166667",
      "Astron",
      "1"
   ],
   [
      "A. Maginus",
      "29.787",
      "1582",
      "Giovanni Antonio Magini",
      "Bologna",
      "Italy",
      "44.4833333",
      "Astron",
      "1"
   ],
   [
      "D. Origanus",
      "30.128",
      "1601",
      "David Origanus",
      "Frankfurt",
      "Germany",
      "52.3471",
      "Astron",
      "1"
   ]
]
