var WorkerSatInfo ={
   "description" : "Description\nBlue collar workers job satisfaction from large scale investigation in Denmark in 1968 (Andersen, 1991).",
   "usage" : "data(\"WorkerSat\")",
   "parameters" : {
      "Worker" : "Worker job satisfaction, an ordered factor with levels low < high",
      "Super" : "Supervisor satisfaction, an ordered factor with levels low < high",
      "Freq" : "a numeric vector",
      "Manage" : "Quality of management, an ordered factor with levels bad < good"
   },
   "format" : "A frequency data frame with 8 observations on the following 4 variables, representing the 2 x 2 x 2 classification of 715 cases.",
   "title" : "Worker Satisfaction Data",
   "reference" : "Originally from https://online.stat.psu.edu/stat504/lesson/10/"
}

var WorkerSat = [
   [
      "Manage",
      "Super",
      "Worker",
      "Freq"
   ],
   [
      "bad",
      "low",
      "low",
      "103"
   ],
   [
      "bad",
      "low",
      "high",
      "87"
   ],
   [
      "bad",
      "high",
      "low",
      "32"
   ],
   [
      "bad",
      "high",
      "high",
      "42"
   ],
   [
      "good",
      "low",
      "low",
      "59"
   ],
   [
      "good",
      "low",
      "high",
      "109"
   ],
   [
      "good",
      "high",
      "low",
      "78"
   ],
   [
      "good",
      "high",
      "high",
      "205"
   ]
]
