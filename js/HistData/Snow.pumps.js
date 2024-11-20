var Snow.pumpsInfo ={
   "reference" : "The scale of the source map is approx. 1:2000.  The (x, y) coordinate units are 100 meters,\nwith an arbitrary origin.",
   "usage" : "data(Snow.deaths)\n\tdata(Snow.pumps)\n\tdata(Snow.streets)\n\tdata(Snow.polygons)\n\tdata(Snow.dates)",
   "description" : "Description\nThe Snow data consists of the relevant 1854 London streets, the location of 578 \ndeaths from cholera, and the position of 13 water pumps (wells)\nthat can be used to re-create John Snow's map showing deaths from\ncholera in the area surrounding Broad Street, London in the 1854 outbreak.\nAnother data frame provides boundaries of a tessellation of the map into \nThiessen (Voronoi) regions which include all cholera deaths nearer to\na given pump than to any other.\nThe apocryphal story of the significance of Snow's map is that, by closing  the\nBroad Street pump (by removing its  handle), Dr. Snow  stopped the epidemic,  and\ndemonstrated that  cholera is  a water  borne disease.  The method of contagion of cholera\nwas  not previously\nunderstood. Snow's map is the most famous and classical example in the field  of\nmedical cartography, even if  it didn't happen exactly  this way.\n(the apocryphal part is that the epidemic ended when the pump handle was removed.)\nAt any  rate,\nthe map, together with  various statistical annotations,  is  compelling because\nit points to the Broad Street pump as the source of the outbreak.",
   "title" : "John Snow's Map and Data on the 1854 London Cholera Outbreak",
   "parameters" : {
      "case" : "Sequential case number, in some arbitrary, randomized order",
      "y" : "y coordinate",
      "x" : "x coordinate"
   },
   "format" : "Snow.deaths: A  data frame  with 578  observations on  the following  3\nvariables, giving the  address of a  person who died  from cholera. When  many\npoints are associated with  a single street address,  they are \"stacked\" in  a\nline away from the street so that they are more easily visualized. This is how\nthey are displayed on  John Snow's original map.  The dates of the  deaths are\nnot individually recorded in this data set."
}

var Snow.pumps = [
   [
      "pump",
      "label",
      "x",
      "y"
   ],
   [
      "1",
      "Oxford Market",
      "8.6512012",
      "17.8915997"
   ],
   [
      "2",
      "Castle St E",
      "10.9847803",
      "18.5178509"
   ],
   [
      "3",
      "Oxford St #1",
      "13.37819",
      "17.3945408"
   ],
   [
      "4",
      "Oxford St #2",
      "14.8798304",
      "17.8099194"
   ],
   [
      "5",
      "Gt Marlborough",
      "8.694768",
      "14.9054699"
   ],
   [
      "6",
      "Crown Chapel",
      "8.8644161",
      "12.75354"
   ],
   [
      "7",
      "Broad St",
      "12.5713596",
      "11.72717"
   ],
   [
      "8",
      "Warwick",
      "10.6609697",
      "7.428647"
   ],
   [
      "9",
      "Briddle St",
      "13.5214596",
      "7.95825"
   ],
   [
      "10",
      "So Soho",
      "16.4348907",
      "9.2521296"
   ],
   [
      "11",
      "Dean St",
      "18.9143906",
      "9.7378187"
   ],
   [
      "12",
      "Coventry St",
      "16.0051098",
      "5.0468378"
   ],
   [
      "13",
      "Vigo St",
      "8.9994402",
      "5.1010232"
   ]
]
