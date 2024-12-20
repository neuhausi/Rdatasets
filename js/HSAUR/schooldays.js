var schooldaysInfo ={
   "parameters" : {
      "learner" : "how good is the child in learning things, \na factor with levels average and\nslow.",
      "absent" : "number of days absent from school.",
      "sex" : "the sex of the child, a factor with levels \nfemale and male.",
      "school" : "the school type, a factor with levels \nF0 (primary), F1 (first), F2 (second) and  \nF3 (third form).",
      "race" : "race of the child, a factor with levels \naboriginal and non-aboriginal."
   },
   "usage" : "data(\"schooldays\")",
   "reference" : "The data arise from a sociological study\nof Australian Aboriginal and white children reported by\nQuine (1975).",
   "description" : "Description\nData from a sociological study, the number of days absent from school is\nthe response variable.",
   "title" : "Days not Spent at School",
   "format" : "A data frame with 154 observations on the following 5 variables."
}

var schooldays = [
   [
      "race",
      "sex",
      "school",
      "learner",
      "absent"
   ],
   [
      "aboriginal",
      "male",
      "F0",
      "slow",
      "2"
   ],
   [
      "aboriginal",
      "male",
      "F0",
      "slow",
      "11"
   ],
   [
      "aboriginal",
      "male",
      "F0",
      "slow",
      "14"
   ],
   [
      "aboriginal",
      "male",
      "F0",
      "average",
      "5"
   ],
   [
      "aboriginal",
      "male",
      "F0",
      "average",
      "5"
   ],
   [
      "aboriginal",
      "male",
      "F0",
      "average",
      "13"
   ],
   [
      "aboriginal",
      "male",
      "F0",
      "average",
      "20"
   ],
   [
      "aboriginal",
      "male",
      "F0",
      "average",
      "22"
   ],
   [
      "aboriginal",
      "male",
      "F1",
      "slow",
      "6"
   ],
   [
      "aboriginal",
      "male",
      "F1",
      "slow",
      "6"
   ],
   [
      "aboriginal",
      "male",
      "F1",
      "slow",
      "15"
   ],
   [
      "aboriginal",
      "male",
      "F1",
      "average",
      "7"
   ],
   [
      "aboriginal",
      "male",
      "F1",
      "average",
      "14"
   ],
   [
      "aboriginal",
      "male",
      "F2",
      "slow",
      "6"
   ],
   [
      "aboriginal",
      "male",
      "F2",
      "slow",
      "32"
   ],
   [
      "aboriginal",
      "male",
      "F2",
      "slow",
      "53"
   ],
   [
      "aboriginal",
      "male",
      "F2",
      "slow",
      "57"
   ],
   [
      "aboriginal",
      "male",
      "F2",
      "average",
      "14"
   ],
   [
      "aboriginal",
      "male",
      "F2",
      "average",
      "16"
   ],
   [
      "aboriginal",
      "male",
      "F2",
      "average",
      "16"
   ],
   [
      "aboriginal",
      "male",
      "F2",
      "average",
      "17"
   ],
   [
      "aboriginal",
      "male",
      "F2",
      "average",
      "40"
   ],
   [
      "aboriginal",
      "male",
      "F2",
      "average",
      "43"
   ],
   [
      "aboriginal",
      "male",
      "F2",
      "average",
      "46"
   ],
   [
      "aboriginal",
      "male",
      "F3",
      "slow",
      "12"
   ],
   [
      "aboriginal",
      "male",
      "F3",
      "slow",
      "15"
   ],
   [
      "aboriginal",
      "male",
      "F3",
      "average",
      "8"
   ],
   [
      "aboriginal",
      "male",
      "F3",
      "average",
      "23"
   ],
   [
      "aboriginal",
      "male",
      "F3",
      "average",
      "23"
   ],
   [
      "aboriginal",
      "male",
      "F3",
      "average",
      "28"
   ],
   [
      "aboriginal",
      "male",
      "F3",
      "average",
      "34"
   ],
   [
      "aboriginal",
      "male",
      "F3",
      "average",
      "36"
   ],
   [
      "aboriginal",
      "male",
      "F3",
      "average",
      "38"
   ],
   [
      "aboriginal",
      "female",
      "F0",
      "slow",
      "3"
   ],
   [
      "aboriginal",
      "female",
      "F0",
      "average",
      "5"
   ],
   [
      "aboriginal",
      "female",
      "F0",
      "average",
      "11"
   ],
   [
      "aboriginal",
      "female",
      "F0",
      "average",
      "24"
   ],
   [
      "aboriginal",
      "female",
      "F0",
      "average",
      "45"
   ],
   [
      "aboriginal",
      "female",
      "F1",
      "slow",
      "5"
   ],
   [
      "aboriginal",
      "female",
      "F1",
      "slow",
      "6"
   ],
   [
      "aboriginal",
      "female",
      "F1",
      "slow",
      "6"
   ],
   [
      "aboriginal",
      "female",
      "F1",
      "slow",
      "9"
   ],
   [
      "aboriginal",
      "female",
      "F1",
      "slow",
      "13"
   ],
   [
      "aboriginal",
      "female",
      "F1",
      "slow",
      "23"
   ],
   [
      "aboriginal",
      "female",
      "F1",
      "slow",
      "25"
   ],
   [
      "aboriginal",
      "female",
      "F1",
      "slow",
      "32"
   ],
   [
      "aboriginal",
      "female",
      "F1",
      "slow",
      "53"
   ],
   [
      "aboriginal",
      "female",
      "F1",
      "slow",
      "54"
   ],
   [
      "aboriginal",
      "female",
      "F1",
      "average",
      "5"
   ],
   [
      "aboriginal",
      "female",
      "F1",
      "average",
      "5"
   ],
   [
      "aboriginal",
      "female",
      "F1",
      "average",
      "11"
   ],
   [
      "aboriginal",
      "female",
      "F1",
      "average",
      "17"
   ],
   [
      "aboriginal",
      "female",
      "F1",
      "average",
      "19"
   ],
   [
      "aboriginal",
      "female",
      "F2",
      "slow",
      "8"
   ],
   [
      "aboriginal",
      "female",
      "F2",
      "slow",
      "13"
   ],
   [
      "aboriginal",
      "female",
      "F2",
      "slow",
      "14"
   ],
   [
      "aboriginal",
      "female",
      "F2",
      "slow",
      "20"
   ],
   [
      "aboriginal",
      "female",
      "F2",
      "slow",
      "47"
   ],
   [
      "aboriginal",
      "female",
      "F2",
      "slow",
      "48"
   ],
   [
      "aboriginal",
      "female",
      "F2",
      "slow",
      "60"
   ],
   [
      "aboriginal",
      "female",
      "F2",
      "slow",
      "81"
   ],
   [
      "aboriginal",
      "female",
      "F2",
      "average",
      "2"
   ],
   [
      "aboriginal",
      "female",
      "F3",
      "slow",
      "5"
   ],
   [
      "aboriginal",
      "female",
      "F3",
      "slow",
      "9"
   ],
   [
      "aboriginal",
      "female",
      "F3",
      "slow",
      "7"
   ],
   [
      "aboriginal",
      "female",
      "F3",
      "average",
      "0"
   ],
   [
      "aboriginal",
      "female",
      "F3",
      "average",
      "2"
   ],
   [
      "aboriginal",
      "female",
      "F3",
      "average",
      "3"
   ],
   [
      "aboriginal",
      "female",
      "F3",
      "average",
      "5"
   ],
   [
      "aboriginal",
      "female",
      "F3",
      "average",
      "10"
   ],
   [
      "aboriginal",
      "female",
      "F3",
      "average",
      "14"
   ],
   [
      "aboriginal",
      "female",
      "F3",
      "average",
      "21"
   ],
   [
      "aboriginal",
      "female",
      "F3",
      "average",
      "36"
   ],
   [
      "aboriginal",
      "female",
      "F3",
      "average",
      "40"
   ],
   [
      "non-aboriginal",
      "male",
      "F0",
      "slow",
      "6"
   ],
   [
      "non-aboriginal",
      "male",
      "F0",
      "slow",
      "17"
   ],
   [
      "non-aboriginal",
      "male",
      "F0",
      "slow",
      "67"
   ],
   [
      "non-aboriginal",
      "male",
      "F0",
      "average",
      "0"
   ],
   [
      "non-aboriginal",
      "male",
      "F0",
      "average",
      "0"
   ],
   [
      "non-aboriginal",
      "male",
      "F0",
      "average",
      "2"
   ],
   [
      "non-aboriginal",
      "male",
      "F0",
      "average",
      "7"
   ],
   [
      "non-aboriginal",
      "male",
      "F0",
      "average",
      "11"
   ],
   [
      "non-aboriginal",
      "male",
      "F0",
      "average",
      "12"
   ],
   [
      "non-aboriginal",
      "male",
      "F1",
      "slow",
      "0"
   ],
   [
      "non-aboriginal",
      "male",
      "F1",
      "slow",
      "0"
   ],
   [
      "non-aboriginal",
      "male",
      "F1",
      "slow",
      "5"
   ],
   [
      "non-aboriginal",
      "male",
      "F1",
      "slow",
      "5"
   ],
   [
      "non-aboriginal",
      "male",
      "F1",
      "slow",
      "5"
   ],
   [
      "non-aboriginal",
      "male",
      "F1",
      "slow",
      "11"
   ],
   [
      "non-aboriginal",
      "male",
      "F1",
      "slow",
      "17"
   ],
   [
      "non-aboriginal",
      "male",
      "F1",
      "average",
      "3"
   ],
   [
      "non-aboriginal",
      "male",
      "F1",
      "average",
      "3"
   ],
   [
      "non-aboriginal",
      "male",
      "F2",
      "slow",
      "22"
   ],
   [
      "non-aboriginal",
      "male",
      "F1",
      "average",
      "30"
   ],
   [
      "non-aboriginal",
      "male",
      "F1",
      "average",
      "36"
   ],
   [
      "non-aboriginal",
      "male",
      "F2",
      "average",
      "8"
   ],
   [
      "non-aboriginal",
      "male",
      "F2",
      "average",
      "0"
   ],
   [
      "non-aboriginal",
      "male",
      "F2",
      "average",
      "1"
   ],
   [
      "non-aboriginal",
      "male",
      "F2",
      "average",
      "5"
   ],
   [
      "non-aboriginal",
      "male",
      "F2",
      "average",
      "7"
   ],
   [
      "non-aboriginal",
      "male",
      "F2",
      "average",
      "16"
   ],
   [
      "non-aboriginal",
      "male",
      "F2",
      "average",
      "27"
   ],
   [
      "non-aboriginal",
      "male",
      "F3",
      "slow",
      "12"
   ],
   [
      "non-aboriginal",
      "male",
      "F3",
      "slow",
      "15"
   ],
   [
      "non-aboriginal",
      "male",
      "F3",
      "average",
      "0"
   ],
   [
      "non-aboriginal",
      "male",
      "F3",
      "average",
      "30"
   ],
   [
      "non-aboriginal",
      "male",
      "F3",
      "average",
      "10"
   ],
   [
      "non-aboriginal",
      "male",
      "F3",
      "average",
      "14"
   ],
   [
      "non-aboriginal",
      "male",
      "F3",
      "average",
      "27"
   ],
   [
      "non-aboriginal",
      "male",
      "F3",
      "average",
      "41"
   ],
   [
      "non-aboriginal",
      "male",
      "F3",
      "average",
      "69"
   ],
   [
      "non-aboriginal",
      "female",
      "F0",
      "slow",
      "25"
   ],
   [
      "non-aboriginal",
      "female",
      "F0",
      "average",
      "10"
   ],
   [
      "non-aboriginal",
      "female",
      "F0",
      "average",
      "11"
   ],
   [
      "non-aboriginal",
      "female",
      "F0",
      "average",
      "20"
   ],
   [
      "non-aboriginal",
      "female",
      "F0",
      "average",
      "33"
   ],
   [
      "non-aboriginal",
      "female",
      "F1",
      "slow",
      "5"
   ],
   [
      "non-aboriginal",
      "female",
      "F1",
      "slow",
      "7"
   ],
   [
      "non-aboriginal",
      "female",
      "F1",
      "slow",
      "0"
   ],
   [
      "non-aboriginal",
      "female",
      "F1",
      "slow",
      "1"
   ],
   [
      "non-aboriginal",
      "female",
      "F1",
      "slow",
      "5"
   ],
   [
      "non-aboriginal",
      "female",
      "F1",
      "slow",
      "5"
   ],
   [
      "non-aboriginal",
      "female",
      "F1",
      "slow",
      "5"
   ],
   [
      "non-aboriginal",
      "female",
      "F1",
      "slow",
      "5"
   ],
   [
      "non-aboriginal",
      "female",
      "F1",
      "slow",
      "7"
   ],
   [
      "non-aboriginal",
      "female",
      "F1",
      "slow",
      "11"
   ],
   [
      "non-aboriginal",
      "female",
      "F1",
      "slow",
      "15"
   ],
   [
      "non-aboriginal",
      "female",
      "F1",
      "average",
      "5"
   ],
   [
      "non-aboriginal",
      "female",
      "F1",
      "average",
      "14"
   ],
   [
      "non-aboriginal",
      "female",
      "F1",
      "average",
      "6"
   ],
   [
      "non-aboriginal",
      "female",
      "F1",
      "average",
      "6"
   ],
   [
      "non-aboriginal",
      "female",
      "F1",
      "average",
      "7"
   ],
   [
      "non-aboriginal",
      "female",
      "F1",
      "average",
      "28"
   ],
   [
      "non-aboriginal",
      "female",
      "F2",
      "slow",
      "0"
   ],
   [
      "non-aboriginal",
      "female",
      "F2",
      "slow",
      "5"
   ],
   [
      "non-aboriginal",
      "female",
      "F2",
      "slow",
      "14"
   ],
   [
      "non-aboriginal",
      "female",
      "F2",
      "slow",
      "2"
   ],
   [
      "non-aboriginal",
      "female",
      "F2",
      "slow",
      "2"
   ],
   [
      "non-aboriginal",
      "female",
      "F2",
      "slow",
      "3"
   ],
   [
      "non-aboriginal",
      "female",
      "F2",
      "slow",
      "8"
   ],
   [
      "non-aboriginal",
      "female",
      "F2",
      "slow",
      "10"
   ],
   [
      "non-aboriginal",
      "female",
      "F2",
      "slow",
      "12"
   ],
   [
      "non-aboriginal",
      "female",
      "F2",
      "average",
      "1"
   ],
   [
      "non-aboriginal",
      "female",
      "F3",
      "slow",
      "8"
   ],
   [
      "non-aboriginal",
      "female",
      "F3",
      "average",
      "1"
   ],
   [
      "non-aboriginal",
      "female",
      "F3",
      "average",
      "9"
   ],
   [
      "non-aboriginal",
      "female",
      "F3",
      "average",
      "22"
   ],
   [
      "non-aboriginal",
      "female",
      "F3",
      "average",
      "3"
   ],
   [
      "non-aboriginal",
      "female",
      "F3",
      "average",
      "3"
   ],
   [
      "non-aboriginal",
      "female",
      "F3",
      "average",
      "5"
   ],
   [
      "non-aboriginal",
      "female",
      "F3",
      "average",
      "15"
   ],
   [
      "non-aboriginal",
      "female",
      "F3",
      "average",
      "18"
   ],
   [
      "non-aboriginal",
      "female",
      "F3",
      "average",
      "22"
   ],
   [
      "non-aboriginal",
      "female",
      "F3",
      "average",
      "37"
   ]
]
