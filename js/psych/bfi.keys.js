var bfi.keysInfo ={
   "format" : "A data frame with 2800 observations on the following 28 variables. (The q numbers are the SAPA item numbers).",
   "parameters" : {
      "O5" : "Will not probe deeply into a subject. (q_1964)",
      "A4" : "Love children. (q_1364)",
      "C4" : "Do things in a half-way manner. (q_626)",
      "N4" : "Often feel blue. (q_1479)",
      "E4" : "Make friends easily. (q_1410)",
      "E5" : "Take charge. (q_1768)",
      "N5" : "Panic easily. (q_1505)",
      "C5" : "Waste my time. (q_1949)",
      "A5" : "Make people feel at ease. (q_1419)",
      "O4" : "Spend time reflecting on things. (q_1738)",
      "C3" : "Do things according to a plan. (q_619)",
      "C2" : "Continue until everything is perfect. (q_530)",
      "O1" : "Am full of ideas. (q_128)",
      "A3" : "Know how to comfort others. (q_1206)",
      "A2" : "Inquire about others' well-being. (q_1162)",
      "gender" : "Males = 1, Females =2",
      "N3" : "Have frequent mood swings. (q_1099",
      "E3" : "Know how to captivate people. (q_1205)",
      "E2" : "Find it difficult to approach others. (q_901)",
      "N2" : "Get irritated easily. (q_974)",
      "N1" : "Get angry easily. (q_952)",
      "E1" : "Don't talk a lot. (q_712)",
      "A1" : "Am indifferent to the feelings of others. (q_146)",
      "O3" : "Carry the conversation to a higher level. (q_492)",
      "O2" : "Avoid difficult reading material.(q_316)",
      "C1" : "Am exacting in my work. (q_124)",
      "age" : "age in years",
      "education" : "1 = HS, 2 = finished HS, 3 = some college, 4 = college graduate 5 = graduate degree"
   },
   "title" : "25 Personality items representing 5 factors",
   "description" : "Description\n25 personality self report items taken from the International Personality Item Pool (ipip.ori.org) were included as part of the Synthetic Aperture Personality Assessment (SAPA) web based personality assessment project.  The data from 2800 subjects are included here as a demonstration set for scale construction, factor analysis, and Item Response Theory analysis.  Three additional demographic variables (sex, education, and age) are also included.",
   "usage" : "data(bfi)\ndata(bfi.dictionary)",
   "reference" : "The first 25 items are organized by five putative factors: Agreeableness, Conscientiousness, Extraversion, Neuroticism, and Opennness.  The scoring key is created using  make.keys, the scores are found using  score.items."
}

var bfi.keys = [
   [
      "agree",
      "conscientious",
      "extraversion",
      "neuroticism",
      "openness",
      "Row"
   ],
   [
      "-A1",
      "C1",
      "-E1",
      "N1",
      "O1",
      1
   ],
   [
      "A2",
      "C2",
      "-E2",
      "N2",
      "-O2",
      2
   ],
   [
      "A3",
      "C3",
      "E3",
      "N3",
      "O3",
      3
   ],
   [
      "A4",
      "-C4",
      "E4",
      "N4",
      "O4",
      4
   ],
   [
      "A5",
      "-C5",
      "E5",
      "N5",
      "-O5",
      5
   ]
]
