var USMortalityInfo ={
   "description" : "Description\nThese datasets record mortality rates across all ages in the USA by\ncause of death, sex, and rural/urban status, 2011&ndash;2013. The two\ndatasets represent the national aggregate rates and the region-wise\nrates for each administrative region under the Department of Health\nand Human Services (HHS).",
   "title" : "Mortality Rates in US by Cause and Gender",
   "usage" : "USMortality\nUSRegionalMortality",
   "reference" : "The region-wise data give estimated rates separately for each\nof 10 HHS regions. The location of the regional offices and their\ncoverage area, available from\nhttps://www.hhs.gov/about/agencies/iea/regional-offices/index.html,\nis given below.",
   "parameters" : {
      "SE" : "Standard error for the rate",
      "Region" : "A factor specifying HHS Region. See details.",
      "Cause" : "Cause of death. A factor with levels\nAlzheimers, Cancer, Cerebrovascular diseases,\nDiabetes, Flu and pneumonia, Heart disease,\nLower respiratory, Nephritis, Suicide, and\nUnintentional injuries",
      "Status" : "A factor with levels Rural and Urban",
      "Sex" : "A factor with levels Female and Male",
      "Rate" : "Age-adjusted death rate per 100,000 population"
   },
   "format" : "USRegionalMortality is a data frame with 400 observations on\nthe following 6 variables."
}

var USMortality = [
   [
      "Status",
      "Sex",
      "Cause",
      "Rate",
      "SE"
   ],
   [
      "Urban",
      "Male",
      "Heart disease",
      "210.2",
      "0.2"
   ],
   [
      "Rural",
      "Male",
      "Heart disease",
      "242.7",
      "0.6"
   ],
   [
      "Urban",
      "Female",
      "Heart disease",
      "132.5",
      "0.2"
   ],
   [
      "Rural",
      "Female",
      "Heart disease",
      "154.9",
      "0.4"
   ],
   [
      "Urban",
      "Male",
      "Cancer",
      "195.9",
      "0.2"
   ],
   [
      "Rural",
      "Male",
      "Cancer",
      "219.3",
      "0.5"
   ],
   [
      "Urban",
      "Female",
      "Cancer",
      "140.2",
      "0.2"
   ],
   [
      "Rural",
      "Female",
      "Cancer",
      "150.8",
      "0.4"
   ],
   [
      "Urban",
      "Male",
      "Lower respiratory",
      "44.5",
      "0.1"
   ],
   [
      "Rural",
      "Male",
      "Lower respiratory",
      "62.8",
      "0.3"
   ],
   [
      "Urban",
      "Female",
      "Lower respiratory",
      "36.5",
      "0.1"
   ],
   [
      "Rural",
      "Female",
      "Lower respiratory",
      "46.9",
      "0.2"
   ],
   [
      "Urban",
      "Male",
      "Unintentional injuries",
      "49.6",
      "0.1"
   ],
   [
      "Rural",
      "Male",
      "Unintentional injuries",
      "71.3",
      "0.3"
   ],
   [
      "Urban",
      "Female",
      "Unintentional injuries",
      "24.7",
      "0.1"
   ],
   [
      "Rural",
      "Female",
      "Unintentional injuries",
      "37.2",
      "0.2"
   ],
   [
      "Urban",
      "Male",
      "Cerebrovascular diseases",
      "36.1",
      "0.1"
   ],
   [
      "Rural",
      "Male",
      "Cerebrovascular diseases",
      "42.2",
      "0.2"
   ],
   [
      "Urban",
      "Female",
      "Cerebrovascular diseases",
      "34.9",
      "0.1"
   ],
   [
      "Rural",
      "Female",
      "Cerebrovascular diseases",
      "42.2",
      "0.2"
   ],
   [
      "Urban",
      "Male",
      "Alzheimers",
      "19.4",
      "0.1"
   ],
   [
      "Rural",
      "Male",
      "Alzheimers",
      "21.8",
      "0.2"
   ],
   [
      "Urban",
      "Female",
      "Alzheimers",
      "25.5",
      "0.1"
   ],
   [
      "Rural",
      "Female",
      "Alzheimers",
      "30.6",
      "0.2"
   ],
   [
      "Urban",
      "Male",
      "Diabetes",
      "24.9",
      "0.1"
   ],
   [
      "Rural",
      "Male",
      "Diabetes",
      "29.5",
      "0.2"
   ],
   [
      "Urban",
      "Female",
      "Diabetes",
      "17.1",
      "0.1"
   ],
   [
      "Rural",
      "Female",
      "Diabetes",
      "21.8",
      "0.2"
   ],
   [
      "Urban",
      "Male",
      "Flu and pneumonia",
      "17.7",
      "0.1"
   ],
   [
      "Rural",
      "Male",
      "Flu and pneumonia",
      "20.8",
      "0.2"
   ],
   [
      "Urban",
      "Female",
      "Flu and pneumonia",
      "12.9",
      "0.1"
   ],
   [
      "Rural",
      "Female",
      "Flu and pneumonia",
      "16.3",
      "0.1"
   ],
   [
      "Urban",
      "Male",
      "Suicide",
      "19.2",
      "0.1"
   ],
   [
      "Rural",
      "Male",
      "Suicide",
      "26.3",
      "0.2"
   ],
   [
      "Urban",
      "Female",
      "Suicide",
      "5.3",
      "0"
   ],
   [
      "Rural",
      "Female",
      "Suicide",
      "6.2",
      "0.1"
   ],
   [
      "Urban",
      "Male",
      "Nephritis",
      "15.7",
      "0.1"
   ],
   [
      "Rural",
      "Male",
      "Nephritis",
      "18.3",
      "0.2"
   ],
   [
      "Urban",
      "Female",
      "Nephritis",
      "10.7",
      "0"
   ],
   [
      "Rural",
      "Female",
      "Nephritis",
      "13.9",
      "0.1"
   ]
]
