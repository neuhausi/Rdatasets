var scurvyInfo ={
   "description" : "Description\nResults of a randomized, 6-arm comparator-controlled trial of 6 interventions to treat scurvy in 12 disabled seamen, as reported by James Lind in 1757 (more details available below the variable definitions).",
   "usage" : "scurvy",
   "parameters" : {
      "lassitude_d6" : "rating of symptom of lassitude (generalized weakness); type: factor, with levels: 0=none, 1=mild, 2=moderate, 3=severe",
      "treatment" : "assigned treatment, levels: cider, dilute_sulfuric_acid, vinegar, sea_water, citrus, purgative_mixture; type: factor",
      "skin_sores_d6" : "rating of symptom of skin sores; type: factor, with levels: 0=none, 1=mild, 2=moderate, 3=severe",
      "study_id" : "invented id number for each participant; type: character",
      "weakness_of_the_knees_d6" : "rating of symptom of weakness of the knees (ability to stand); type: factor, with levels: 0=none, 1=mild, 2=moderate, 3=severe",
      "gum_rot_d6" : "rating of symptom of rotting of gums; type: factor, with levels: 0=none, 1=mild, 2=moderate, 3=severe",
      "fit_for_duty_d6" : "dichotomous fitness for duty as a seaman; type: factor: 0_no, 1_yes",
      "dosing_regimen_for_scurvy" : "details on daily dosing and schedule; type: character"
   },
   "reference" : "Scurvy was a common affliction of seamen on long voyages, leading to mouth sores, skin lesions, weakness of the knees, and lassitude. Scurvy could be fatal on long voyages. James Lind reported the treatment of 12 seamen with scurvy in 1757, in A Treatise on the Scurvy in Three Parts. This 476 page bloviation can be found scanned to the Google Books website A Treatise on the Scurvy.    Pages 149-153 are a rare gem among what can be generously described as 400+ pages of evidence-free blathering, and these 4 pages may represent the first report of a controlled clinical trial. \nLind was the ship's surgeon on board the HMS Salisbury, and had a number of scurvy-affected seamen at his disposal. Many remedies had been described and advocated for, with no more than anecdotal evidence. On May 20, 1747, Lind decided to try the 6 available therapies at his disposal in a comparative study in 12 affected seamen. He selected 12 with roughly similar severity, with notable skin and mouth sores, weakness of the knees, and significant lassitude, making them unfit for duty. They each received the standard shipboard diet of gruel and mutton broth, supplemented with occasional biscuits and puddings. Each treatment was a dietary supplement (including citrus fruits) or a medicinal. \nThis data frame was reconstructed from Lind's account as recorded on these 4 pages, with his estimates of severity translated to a 4 point Likert scale (0-3) for each of the symptoms he described at his chosen endpoint on day 6. A fanciful study_id variable was added, along with detailed descriptions of the dosing schedule of each treatment. \nOf note, there is some dispute about whether this was truly the first clinical trial, or whether it actually happened. See link about the historical debate.     Lind reported that the seamen treated with 2 lemons and an orange daily did best, followed by those treated with cider. Those treated with elixir of vitriol only had improvement in mouth sores. One imagines that acidic substances (like dilute sulfuric acid, vinegar, cider, and citrus fruits) might have been rather painful on these mouth sores. Unfortunately, the burial of 4 valuable pages of data in 476 pages of noise, a publication delay of 10 years, and Lind's half-hearted conclusions, meant that it took until 1795 before the British Navy mandated daily limes for seamen.",
   "format" : "A data frame with 12 observations and 8 variables",
   "title" : "Randomized Trial of Six Therapies for Scurvy"
}

var scurvy = [
   [
      "study_id",
      "treatment",
      "dosing_regimen_for_scurvy",
      "gum_rot_d6",
      "skin_sores_d6",
      "weakness_of_the_knees_d6",
      "lassitude_d6",
      "fit_for_duty_d6"
   ],
   [
      "001",
      "cider",
      "1 quart per day",
      "2_moderate",
      "2_moderate",
      "2_moderate",
      "2_moderate",
      "0_no"
   ],
   [
      "002",
      "cider",
      "1 quart per day",
      "2_moderate",
      "1_mild",
      "2_moderate",
      "3_severe",
      "0_no"
   ],
   [
      "003",
      "dilute_sulfuric_acid",
      "25 drops of elixir of vitriol, three times a day",
      "1_mild",
      "3_severe",
      "3_severe",
      "3_severe",
      "0_no"
   ],
   [
      "004",
      "dilute_sulfuric_acid",
      "25 drops of elixir of vitriol, three times a day",
      "2_moderate",
      "3_severe",
      "3_severe",
      "3_severe",
      "0_no"
   ],
   [
      "005",
      "vinegar",
      "two spoonfuls, three times daily",
      "3_severe",
      "3_severe",
      "3_severe",
      "3_severe",
      "0_no"
   ],
   [
      "006",
      "vinegar",
      "two spoonfuls, three times daily",
      "3_severe",
      "3_severe",
      "3_severe",
      "3_severe",
      "0_no"
   ],
   [
      "007",
      "sea_water",
      "half pint daily",
      "3_severe",
      "3_severe",
      "3_severe",
      "3_severe",
      "0_no"
   ],
   [
      "008",
      "sea_water",
      "half pint daily",
      "3_severe",
      "3_severe",
      "3_severe",
      "3_severe",
      "0_no"
   ],
   [
      "009",
      "citrus",
      "two lemons and an orange daily",
      "1_mild",
      "1_mild",
      "0_none",
      "1_mild",
      "0_no"
   ],
   [
      "010",
      "citrus",
      "two lemons and an orange daily",
      "0_none",
      "0_none",
      "0_none",
      "0_none",
      "1_yes"
   ],
   [
      "011",
      "purgative_mixture",
      "a nutmeg-sized paste of garlic, mustard seed, horseradish, balsam of Peru, and gum myrrh three times a day",
      "3_severe",
      "3_severe",
      "3_severe",
      "3_severe",
      "0_no"
   ],
   [
      "012",
      "purgative_mixture",
      "a nutmeg-sized paste of garlic, mustard seed, horseradish, balsam of Peru, and gum myrrh three times a day",
      "3_severe",
      "3_severe",
      "3_severe",
      "3_severe",
      "0_no"
   ]
]
