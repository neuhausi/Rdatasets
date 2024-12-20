var indomethInfo ={
   "format" : "A data frame with 66 observations and 3 variables",
   "usage" : "indometh",
   "reference" : "This data set contains data on 6 healthy volunteer subjects who participated in a pharmacokinetic study of intravenous indomethacin. Indomethacin is an anti-inflammatory and pain-relieving non-steroidal medication. It can be administered by the intravenous, oral, or rectal suppository routes. Some of the indomethacin is excreted in the bile and reabsorbed by the intestine. This phenomenon, called enterohepatic circulation, keeps the drug around longer than would be expected otherwise. \nEach subject in Study 1 (intravenous route) received a single 50 mg dose of radioactively labeled indomethacin (^14^-carbon-labeled, with each dose containing 25 microCuries of radioactivity). Subjects received a standard meal (one 8-oz can of Metrecal, 8 oz of whole milk, and one medium-size apple) 30 rain prior to medication and 8 oz of water every 2 hr throughout the waking hours to ensure adequate urine output.\nBlood samples were taken at frequent intervals over the first 8 hours after dosing, and the quantity of indomethacin in the plasma (as well as stool and urine) at each time point was measured in micrograms per milliliter. This data set only contains the plasma measurements from Table 1 on page 258 of the manuscript. While this paper was published in 1976 (post-Tuskegee reveal), there is no mention of ethics review, IRB review, or consent of the healthy volunteers. \nThe abstract from the original manuscript: \nThere are no discernible quantitative differences in the biotransformation and the excretion of indomethacin following oral, rectal, and intravenous administration of indomethacin-2-^14^C. Approximately 50% (range 24-115% for n = 6) of an intravenous dose undergoes enterohepatic circulation. Thus the bioavailability of indomethacin to the systemic circulation may exceed the administered dose. Relative to the intravenous dose, indomethacin is 80 and 100% bioavailable from suppositories and capsules, respectively. Absorption and/or reabsorption appears to be more rapid and uniform by the rectal route. Recognition of the attributes of biliary recycling also helps to explain the observed variability in apparent plasma half-life, while their neglect requires alternative explanations for anomalies between the disappearance rate from plasma and the corresponding appearance rate in urine.",
   "description" : "Description\nResults of a Cohort Study of the Pharmacokinetics of Intravenous Indomethacin, with plasma concentrations over time (more details available below the variable definitions).",
   "title" : "Cohort Study of the Pharmacokinetics of Intravenous Indomethacin",
   "parameters" : {
      "conc" : "Concentration of indomethacin in the plasma in micrograms per milliliter' type: double",
      "Subject" : "subject id number for each participant; type: character",
      "time" : "Time from initial dose in hours; type: double"
   }
}

var indometh = [
   [
      "Subject",
      "time",
      "conc"
   ],
   [
      "1",
      "0.25",
      "1.5"
   ],
   [
      "1",
      "0.5",
      "0.94"
   ],
   [
      "1",
      "0.75",
      "0.78"
   ],
   [
      "1",
      "1",
      "0.48"
   ],
   [
      "1",
      "1.25",
      "0.37"
   ],
   [
      "1",
      "2",
      "0.19"
   ],
   [
      "1",
      "3",
      "0.12"
   ],
   [
      "1",
      "4",
      "0.11"
   ],
   [
      "1",
      "5",
      "0.08"
   ],
   [
      "1",
      "6",
      "0.07"
   ],
   [
      "1",
      "8",
      "0.05"
   ],
   [
      "2",
      "0.25",
      "2.03"
   ],
   [
      "2",
      "0.5",
      "1.63"
   ],
   [
      "2",
      "0.75",
      "0.71"
   ],
   [
      "2",
      "1",
      "0.7"
   ],
   [
      "2",
      "1.25",
      "0.64"
   ],
   [
      "2",
      "2",
      "0.36"
   ],
   [
      "2",
      "3",
      "0.32"
   ],
   [
      "2",
      "4",
      "0.2"
   ],
   [
      "2",
      "5",
      "0.25"
   ],
   [
      "2",
      "6",
      "0.12"
   ],
   [
      "2",
      "8",
      "0.08"
   ],
   [
      "3",
      "0.25",
      "2.72"
   ],
   [
      "3",
      "0.5",
      "1.49"
   ],
   [
      "3",
      "0.75",
      "1.16"
   ],
   [
      "3",
      "1",
      "0.8"
   ],
   [
      "3",
      "1.25",
      "0.8"
   ],
   [
      "3",
      "2",
      "0.39"
   ],
   [
      "3",
      "3",
      "0.22"
   ],
   [
      "3",
      "4",
      "0.12"
   ],
   [
      "3",
      "5",
      "0.11"
   ],
   [
      "3",
      "6",
      "0.08"
   ],
   [
      "3",
      "8",
      "0.08"
   ],
   [
      "4",
      "0.25",
      "1.85"
   ],
   [
      "4",
      "0.5",
      "1.39"
   ],
   [
      "4",
      "0.75",
      "1.02"
   ],
   [
      "4",
      "1",
      "0.89"
   ],
   [
      "4",
      "1.25",
      "0.59"
   ],
   [
      "4",
      "2",
      "0.4"
   ],
   [
      "4",
      "3",
      "0.16"
   ],
   [
      "4",
      "4",
      "0.11"
   ],
   [
      "4",
      "5",
      "0.1"
   ],
   [
      "4",
      "6",
      "0.07"
   ],
   [
      "4",
      "8",
      "0.07"
   ],
   [
      "5",
      "0.25",
      "2.05"
   ],
   [
      "5",
      "0.5",
      "1.04"
   ],
   [
      "5",
      "0.75",
      "0.81"
   ],
   [
      "5",
      "1",
      "0.39"
   ],
   [
      "5",
      "1.25",
      "0.3"
   ],
   [
      "5",
      "2",
      "0.23"
   ],
   [
      "5",
      "3",
      "0.13"
   ],
   [
      "5",
      "4",
      "0.11"
   ],
   [
      "5",
      "5",
      "0.08"
   ],
   [
      "5",
      "6",
      "0.1"
   ],
   [
      "5",
      "8",
      "0.06"
   ],
   [
      "6",
      "0.25",
      "2.31"
   ],
   [
      "6",
      "0.5",
      "1.44"
   ],
   [
      "6",
      "0.75",
      "1.03"
   ],
   [
      "6",
      "1",
      "0.84"
   ],
   [
      "6",
      "1.25",
      "0.64"
   ],
   [
      "6",
      "2",
      "0.42"
   ],
   [
      "6",
      "3",
      "0.24"
   ],
   [
      "6",
      "4",
      "0.17"
   ],
   [
      "6",
      "5",
      "0.13"
   ],
   [
      "6",
      "6",
      "0.1"
   ],
   [
      "6",
      "8",
      "0.09"
   ]
]
