var training_bias_reductionInfo ={
   "usage" : "training_bias_reduction",
   "description" : "Description\nThis simulated data is used to demonstrate the bias-reduction method in matching as per Abadie and Imbens (2011).",
   "format" : "A data frame with 8 rows and 4 variables",
   "title" : "Simulated data from a job training program for a bias reduction method",
   "reference" : "This data is used in the Matching and Subclassification chapter of Causal Inference: The Mixtape by Cunningham.",
   "parameters" : {
      "Unit" : "Unit ID",
      "D" : "Treatment",
      "X" : "Matching variable",
      "Y" : "Outcome"
   }
}

var training_bias_reduction = [
   [
      "Unit",
      "Y",
      "D",
      "X"
   ],
   [
      "1",
      "5",
      "1",
      "11"
   ],
   [
      "2",
      "2",
      "1",
      "7"
   ],
   [
      "3",
      "10",
      "1",
      "5"
   ],
   [
      "4",
      "6",
      "1",
      "3"
   ],
   [
      "5",
      "4",
      "0",
      "10"
   ],
   [
      "6",
      "0",
      "0",
      "8"
   ],
   [
      "7",
      "5",
      "0",
      "4"
   ],
   [
      "8",
      "1",
      "0",
      "1"
   ]
]
