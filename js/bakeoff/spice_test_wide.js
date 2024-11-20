var spice_test_wideInfo ={
   "parameters" : {
      "guess_1,guess_2,guess_3" : "The different guesses (in order) for what\nthe mystery spice was.",
      "correct_1,correct_2,correct_3" : "An integer whether the guess was\ncorrect (1) or wrong (0).",
      "baker" : "A character string with a given name or nickname."
   },
   "usage" : "spice_test_wide",
   "reference" : "if (require('tibble')) {\n  spice_test_wide\n }\nhead(spice_test_wide)",
   "title" : "Spice Test",
   "description" : "Description\nResults of a knowledge test from Junior Bake Off (Series 2, Episode 14).",
   "format" : "A data frame with 4 rows representing baker results from the\nspice-based knowledge test and 7 variables:"
}

var spice_test_wide = [
   [
      "baker",
      "guess_1",
      "guess_2",
      "guess_3",
      "correct_1",
      "correct_2",
      "correct_3"
   ],
   [
      "Emma",
      "Cinnamon",
      "Cloves",
      "Nutmeg",
      "1",
      "0",
      "1"
   ],
   [
      "Harry",
      "Cinnamon",
      "Cardamom",
      "Nutmeg",
      "1",
      "1",
      "1"
   ],
   [
      "Ruby",
      "Cinnamon",
      "Cumin",
      "Nutmeg",
      "1",
      "0",
      "1"
   ],
   [
      "Zainab",
      "Cardamom",
      "Couldn't remember the name",
      "Cinnamon",
      "0",
      "0",
      "0"
   ]
]
