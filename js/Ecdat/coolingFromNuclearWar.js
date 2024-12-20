var coolingFromNuclearWarInfo ={
   "format" : "A dataframe containing :",
   "parameters" : {
      "dC3g, dC10g, dC3n, dC10n" : "average change in surface temperature 3 and \n10 years after injection of smoke into \nthe upper troposphere globally (g) or in \nthe Northern Hemisphere (n) in degrees \nCelsius.",
      "smoke" : "teragrams = millions of metric tons"
   },
   "description" : "Description\nAverage surface temperature changes \nworld wide and in the Northern Hemisphere\n3 and 10 years after the injections of 5, \n50 and 150 Tg (teragrams = millions of \nmetric tons) of smoke into the upper \ntroposphere, per Robock, Oman, and \nStenchikov (2007).\nThese numbers are relative to the \naverage for 1925-1975, which explains why \nthe numbers are positive with smoke = 0.",
   "title" : "Global cooling from a nuclear war",
   "usage" : "data(coolingFromNuclearWar)",
   "reference" : "Alan Robock, Luke Oman, and Georgiy L. Stenchikov\n(2007) Nuclear winter revisited with a modern\nclimate model and current nuclear arsenals: Still\ncatastrophic consequences, \nJournal of Geophysical Research, 112"
}

var coolingFromNuclearWar = [
   [
      "smoke",
      "dC3g",
      "dC10g",
      "dC3n",
      "dC10n"
   ],
   [
      "0",
      "0.6",
      "0.6",
      "0.8",
      "0.8"
   ],
   [
      "5",
      "-0.7",
      "0.1",
      "-0.5",
      "0"
   ],
   [
      "50",
      "-3",
      "-0.9",
      "-4.4",
      "-1.9"
   ],
   [
      "150",
      "-7.1",
      "-3",
      "-10",
      "-4.2"
   ]
]
