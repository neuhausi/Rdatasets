var supraclavicularInfo ={
   "format" : "A data frame with 103 observations and 17 variables",
   "parameters" : {
      "bmi" : "Body mass index (kg/m^2), numeric, range:19-43.5",
      "midazolam" : "Midazolam hypnotic-sedative medication, numeric, range: 0-9.0",
      "med_censor" : "Patients who did not take an analgesic were censored at 48 hours, numeric, 0 = nerve  succeeded, 1 = block failed (censored)",
      "opioid_total" : "Total opioid consumption in milligrams, numeric, range: 0-225.0",
      "subject" : "Subject ID, numeric, range: 1-103",
      "vps_rest" : "Maximum postop verbal pain score (at rest), on  11 point Likert scale (0-10), numeric, range: 0-10",
      "gender" : "Gender, numeric, 1 = Male; 0= Female",
      "vps_movement" : "Maximum postop verbal pain score (with movement), on  11 point Likert scale (0-10), numeric, range: 0-10",
      "nerve_block_censor" : "block failed, numeric, 0 = nerve block succeeded, 1 = block failed (censored)",
      "onset_sensory" : "Time to 4 nerve sensory block onset or, if onset_sensory block failed the observed worst outcome of minutes for any patient (50 minutes), numeric, range: 0-50.0",
      "group" : "Anesthetic group, numeric, 1 = Mixture; 2 = Sequential",
      "age" : "Age (years), numeric, range:18-74",
      "fentanyl" : "Fentanyl pain medication (micrograms), numeric, range: 0-250.0",
      "alfentanil" : "Alfentanil pain medication (milligrams), numeric, range: 0-4.3",
      "med_duration" : "Time from the onset of 4 nerve sensory block until the first request for an analgesic medication (hours), numeric, range: 0-48.0",
      "onset_first_sensory" : "Time to first sensory block in minutes, or if block failed, a value of 15 minutes, numeric, range: 6-15.0",
      "onset_motor" : "Time to complete motor block or, if motor block failed, the observed worst outcome of minutes for any patient (50 minutes), numeric, range: 1-50.0"
   },
   "usage" : "supraclavicular",
   "reference" : "The choice of anesthetic technique combined with a suitable plan for postoperative analgesia can facilitate early discharge, improve patient comfort, and increase overall satisfaction. Patients having painful procedures who undergo general anesthesia have a 2- to 5-fold greater risk of unplanned overnight admissions compared with those having regional anesthesia. Regional anesthetic techniques and peripheral nerve blocks are especially favored for surgeries on the extremities. Both rapid onset of the block and prolonged postoperative analgesia are desired characteristics of regional anesthesia.\nThe choice of local anesthetics or combinations thereof can greatly influence the effectiveness of the block, onset time, duration of postoperative analgesia, need for opioid use, and patient satisfaction. Mepivacaine and ropivacaine are commonly used in peripheral nerve blocks, their drawbacks being a short duration with 1.5% mepivacaine and a delayed onset with 0.5% ropivacaine. An ideal local anesthetic with high potency, low toxicity, rapid onset, and prolonged duration does not exist yet. Investigators have therefore tried mixtures of local anesthetics in an attempt to combine their advantages with conflicting results. A potential problem is that mixing drugs dilutes the effects of each. Thus, a mixture of a rapid-onset drug such as mepivacaine with a long-acting one such as ropivacaine may well result in slower onset than mepivacaine alone and shorter duration of action than ropivacaine alone. In contrast, sequential administration of the same amounts of the same drugs may preserve the desirable features of each.\nObjective: This study investigates whether sequential supraclavicular injection of 1.5% mepivacaine followed 90 seconds later by 0.5% ropivacaine provides a quicker onset and a longer duration of analgesia than an equidose combination of the 2 local anesthetics.",
   "description" : "Description\nThis data set contains 103 patients who were scheduled to undergo an upper extremity procedure suitable for supraclavicular anesthesia. Patients were randomly assigned to either (1) combined group-ropivacaine and mepivacaine mixture; or (2) sequential group-mepivacaine followed by ropivacaine. A number of demographic and post-op pain medication variables (fentanyl, alfentanil, midazolam) were collected. The primary outcome is time to 4-nerve sensory block onset. The dataset is cleaned and relatively complete. There are no outliers or data problems (more details available below the variable definitions).",
   "title" : "Study of Supraclavicular Anesthesia"
}

var supraclavicular = [
   [
      "subject",
      "group",
      "gender",
      "bmi",
      "age",
      "fentanyl",
      "alfentanil",
      "midazolam",
      "onset_sensory",
      "onset_first_sensory",
      "onset_motor",
      "nerve_block_censor",
      "med_duration",
      "med_censor",
      "vps_rest",
      "vps_movement",
      "opioid_total"
   ],
   [
      "1",
      "1",
      "0",
      "41.15",
      "52",
      "75",
      "0",
      "3",
      "0",
      "0",
      "7",
      "0",
      "22.467",
      "0",
      "0",
      "4",
      "30"
   ],
   [
      "2",
      "2",
      "0",
      "25.22",
      "54",
      "50",
      "2.045",
      "2",
      "7",
      "0",
      "11",
      "0",
      "21.417",
      "0",
      "8",
      "6",
      "150"
   ],
   [
      "3",
      "2",
      "0",
      "34.14",
      "46",
      "0",
      "2.872",
      "4",
      "24",
      "1",
      "14",
      "0",
      "17.917",
      "0",
      "1",
      "5",
      "0"
   ],
   [
      "4",
      "1",
      "0",
      "41.57",
      "54",
      "0",
      "1.723",
      "2",
      "4",
      "0",
      "10",
      "0",
      "17.533",
      "0",
      "10",
      "6",
      "15"
   ],
   [
      "5",
      "1",
      "1",
      "27.17",
      "41",
      "0",
      "1.007",
      "4",
      "30",
      "0",
      "26",
      "0",
      "22.2",
      "0",
      "1",
      "5",
      "90"
   ],
   [
      "6",
      "2",
      "1",
      "22.05",
      "21",
      "0",
      "1.251",
      "4",
      "4",
      "1",
      "31",
      "0",
      "20.9",
      "0",
      "1",
      "3",
      "15"
   ],
   [
      "7",
      "1",
      "1",
      "26.32",
      "68",
      "0",
      "1.804",
      "1",
      "12",
      "4",
      "15",
      "0",
      "20.8",
      "0",
      "5",
      "5",
      "15"
   ],
   [
      "8",
      "2",
      "1",
      "24.69",
      "61",
      "0",
      "0",
      "2",
      "13",
      "1",
      "22",
      "0",
      "23.9",
      "0",
      "6",
      "6",
      "60"
   ],
   [
      "9",
      "1",
      "0",
      "35.63",
      "44",
      "0",
      "0",
      "2",
      "27",
      "3",
      "33",
      "0",
      "23.767",
      "0",
      "4",
      "8",
      "90"
   ],
   [
      "10",
      "1",
      "0",
      "35.12",
      "28",
      "0",
      "0",
      "4",
      "4",
      "0",
      "9",
      "0",
      "15.733",
      "0",
      "1",
      "1",
      "0"
   ],
   [
      "11",
      "1",
      "0",
      "36.11",
      "36",
      "250",
      "0",
      "2",
      "3",
      "1",
      "14",
      "0",
      "23.333",
      "0",
      "2",
      "5",
      "7.5"
   ],
   [
      "12",
      "1",
      "0",
      "28.34",
      "60",
      "100",
      "1.44",
      "2",
      "21",
      "4",
      "30",
      "0",
      "20",
      "0",
      "0",
      "0",
      "7.5"
   ],
   [
      "13",
      "2",
      "0",
      "22.6",
      "34",
      "0",
      "0",
      "2",
      "9",
      "0",
      "13",
      "0",
      "19.483",
      "0",
      "0",
      "5",
      "7.5"
   ],
   [
      "14",
      "2",
      "1",
      "30.14",
      "64",
      "0",
      "0.688",
      "2",
      "9",
      "0",
      "12",
      "0",
      "18.55",
      "0",
      "5",
      "8",
      "30"
   ],
   [
      "15",
      "2",
      "1",
      "26.36",
      "37",
      "0",
      "0",
      "4",
      "5",
      "0",
      "21",
      "0",
      "15.7",
      "0",
      "4",
      "4",
      "6.67"
   ],
   [
      "16",
      "2",
      "0",
      "",
      "51",
      "0",
      "0.638",
      "0",
      "50",
      "15",
      "50",
      "1",
      "0",
      "0",
      "10",
      "10",
      "225"
   ],
   [
      "17",
      "2",
      "1",
      "22.32",
      "58",
      "0",
      "0",
      "2",
      "7",
      "2",
      "22",
      "0",
      "13.083",
      "0",
      "0",
      "1",
      "0"
   ],
   [
      "18",
      "1",
      "0",
      "37.84",
      "24",
      "100",
      "0",
      "0",
      "2",
      "0",
      "5",
      "0",
      "9.217",
      "0",
      "2",
      "4",
      "45"
   ],
   [
      "19",
      "2",
      "1",
      "39.85",
      "28",
      "100",
      "0",
      "2",
      "6",
      "2",
      "30",
      "0",
      "20.283",
      "0",
      "0",
      "0",
      "22.5"
   ],
   [
      "20",
      "1",
      "0",
      "31.21",
      "50",
      "50",
      "0",
      "2",
      "3",
      "0",
      "10",
      "0",
      "7.533",
      "0",
      "4",
      "6",
      "22.5"
   ],
   [
      "21",
      "2",
      "1",
      "25.64",
      "74",
      "50",
      "0",
      "0.5",
      "5",
      "2",
      "29",
      "0",
      "7.9",
      "0",
      "5",
      "5",
      "7.5"
   ],
   [
      "22",
      "2",
      "1",
      "21.26",
      "52",
      "0",
      "0.99",
      "2",
      "41",
      "0",
      "31",
      "0",
      "48",
      "1",
      "2",
      "7",
      "0"
   ],
   [
      "23",
      "1",
      "0",
      "24.22",
      "53",
      "0",
      "0",
      "0",
      "4",
      "0",
      "4",
      "0",
      "6.617",
      "0",
      "10",
      "10",
      "22.5"
   ],
   [
      "24",
      "2",
      "1",
      "25.1",
      "19",
      "0",
      "0",
      "4",
      "14",
      "0",
      "24",
      "0",
      "23.5",
      "0",
      "5",
      "6",
      "7.5"
   ],
   [
      "25",
      "1",
      "0",
      "25.42",
      "41",
      "50",
      "0",
      "4",
      "7",
      "0",
      "9",
      "0",
      "18.933",
      "0",
      "8",
      "9",
      "30"
   ],
   [
      "26",
      "1",
      "0",
      "23.6",
      "49",
      "50",
      "0",
      "2",
      "2",
      "0",
      "10",
      "0",
      "24.967",
      "0",
      "3",
      "5",
      "15"
   ],
   [
      "27",
      "2",
      "0",
      "28.2",
      "46",
      "0",
      "1.722",
      "2",
      "4",
      "0",
      "12",
      "0",
      "26.35",
      "0",
      "7",
      "7",
      "37.5"
   ],
   [
      "28",
      "1",
      "1",
      "28.33",
      "57",
      "0",
      "0",
      "2",
      "3",
      "0",
      "19",
      "0",
      "48",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "29",
      "2",
      "0",
      "30.4",
      "50",
      "0",
      "4.266",
      "2",
      "17",
      "0",
      "8",
      "0",
      "21.6",
      "0",
      "6",
      "1",
      "45"
   ],
   [
      "30",
      "1",
      "0",
      "42.38",
      "60",
      "25",
      "0",
      "2",
      "1",
      "0",
      "16",
      "0",
      "23.75",
      "0",
      "3",
      "5",
      "0"
   ],
   [
      "31",
      "1",
      "0",
      "36.98",
      "52",
      "0",
      "0",
      "4",
      "2",
      "0",
      "5",
      "0",
      "21.783",
      "0",
      "3",
      "3",
      "0"
   ],
   [
      "32",
      "2",
      "1",
      "30.67",
      "39",
      "0",
      "0.761",
      "2",
      "1",
      "0",
      "10",
      "0",
      "48",
      "1",
      "2",
      "3",
      "0"
   ],
   [
      "33",
      "1",
      "1",
      "23.43",
      "53",
      "0",
      "0",
      "2",
      "1",
      "0",
      "5",
      "0",
      "16.867",
      "0",
      "2",
      "4",
      "15"
   ],
   [
      "34",
      "2",
      "1",
      "30.61",
      "64",
      "0",
      "0",
      "2",
      "3",
      "0",
      "21",
      "0",
      "15.717",
      "0",
      "0",
      "0",
      "7.5"
   ],
   [
      "35",
      "2",
      "1",
      "23.62",
      "51",
      "0",
      "0",
      "4",
      "20",
      "1",
      "20",
      "0",
      "48",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "36",
      "1",
      "1",
      "30.17",
      "47",
      "100",
      "0",
      "3",
      "6",
      "0",
      "11",
      "0",
      "25",
      "0",
      "0",
      "2",
      "3.75"
   ],
   [
      "37",
      "1",
      "0",
      "18.8",
      "66",
      "25",
      "0",
      "0.5",
      "10",
      "4",
      "10",
      "0",
      "12.333",
      "0",
      "5",
      "5",
      "45"
   ],
   [
      "38",
      "1",
      "1",
      "24.52",
      "59",
      "0",
      "0",
      "2",
      "33",
      "0",
      "33",
      "0",
      "10.5",
      "0",
      "7",
      "7",
      "37.5"
   ],
   [
      "39",
      "2",
      "1",
      "29.6",
      "31",
      "0",
      "0",
      "6",
      "39",
      "0",
      "19",
      "0",
      "13.833",
      "0",
      "0",
      "0",
      "7.5"
   ],
   [
      "40",
      "1",
      "1",
      "29.16",
      "64",
      "0",
      "0",
      "3",
      "8",
      "0",
      "19",
      "0",
      "8.567",
      "0",
      "6",
      "6",
      "135"
   ],
   [
      "41",
      "1",
      "1",
      "25.85",
      "61",
      "0",
      "0",
      "4",
      "48",
      "0",
      "35",
      "0",
      "48",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "42",
      "2",
      "1",
      "25.84",
      "50",
      "150",
      "0",
      "6",
      "9",
      "0",
      "40",
      "0",
      "13.933",
      "0",
      "10",
      "10",
      "45"
   ],
   [
      "43",
      "2",
      "1",
      "35.36",
      "32",
      "0",
      "2.662",
      "3",
      "3",
      "0",
      "31",
      "0",
      "10.55",
      "0",
      "4",
      "6",
      "22.5"
   ],
   [
      "44",
      "1",
      "1",
      "28.43",
      "54",
      "0",
      "2.741",
      "2",
      "22",
      "6",
      "17",
      "0",
      "7.9",
      "0",
      "2",
      "4",
      "60"
   ],
   [
      "45",
      "2",
      "1",
      "35.25",
      "53",
      "25",
      "0",
      "4",
      "27",
      "3",
      "32",
      "0",
      "6.75",
      "0",
      "4",
      "4",
      "52.5"
   ],
   [
      "46",
      "2",
      "0",
      "19.7",
      "57",
      "0",
      "0",
      "2",
      "6",
      "0",
      "4",
      "0",
      "48",
      "1",
      "0",
      "1",
      "0"
   ],
   [
      "47",
      "2",
      "1",
      "27.5",
      "56",
      "25",
      "2.58",
      "2",
      "37",
      "0",
      "37",
      "0",
      "8.067",
      "0",
      "5",
      "8",
      "120"
   ],
   [
      "48",
      "2",
      "1",
      "24.4",
      "32",
      "0",
      "2.01",
      "2",
      "38",
      "1",
      "28",
      "0",
      "8.333",
      "0",
      "1",
      "0",
      "15"
   ],
   [
      "49",
      "1",
      "1",
      "24.3",
      "23",
      "0",
      "1.474",
      "2",
      "6",
      "0",
      "6",
      "0",
      "28.917",
      "0",
      "3",
      "9",
      "45"
   ],
   [
      "50",
      "1",
      "0",
      "37.92",
      "61",
      "50",
      "0",
      "3",
      "5",
      "0",
      "3",
      "0",
      "9.3",
      "0",
      "10",
      "10",
      "52.5"
   ],
   [
      "51",
      "1",
      "0",
      "23.76",
      "52",
      "0",
      "0",
      "2",
      "4",
      "0",
      "2",
      "0",
      "7.117",
      "0",
      "8",
      "9",
      "30"
   ],
   [
      "52",
      "2",
      "1",
      "22.12",
      "18",
      "0",
      "0",
      "2",
      "19",
      "0",
      "24",
      "0",
      "5.583",
      "0",
      "2",
      "7",
      "45"
   ],
   [
      "53",
      "2",
      "0",
      "32.4",
      "42",
      "0",
      "0",
      "4",
      "15",
      "0",
      "33",
      "0",
      "23.133",
      "0",
      "2",
      "2",
      "0"
   ],
   [
      "54",
      "2",
      "0",
      "20.49",
      "44",
      "0",
      "0",
      "2",
      "23",
      "0",
      "38",
      "0",
      "19.75",
      "0",
      "4",
      "6",
      "22.5"
   ],
   [
      "55",
      "1",
      "1",
      "",
      "22",
      "0",
      "0",
      "3",
      "16",
      "0",
      "7",
      "0",
      "4.283",
      "0",
      "8",
      "8",
      "0"
   ],
   [
      "56",
      "2",
      "0",
      "32.5",
      "48",
      "0",
      "3.399",
      "2",
      "8",
      "0",
      "21",
      "0",
      "5.3",
      "0",
      "5",
      "5",
      "0"
   ],
   [
      "57",
      "2",
      "0",
      "36.72",
      "52",
      "25",
      "0",
      "4",
      "10",
      "1",
      "2",
      "0",
      "6.417",
      "0",
      "5",
      "5",
      "15"
   ],
   [
      "58",
      "2",
      "0",
      "39.87",
      "48",
      "50",
      "0",
      "2",
      "19",
      "0",
      "5",
      "0",
      "4.733",
      "0",
      "8",
      "7",
      "225"
   ],
   [
      "59",
      "1",
      "0",
      "33",
      "51",
      "0",
      "1.748",
      "2",
      "13",
      "0",
      "19",
      "0",
      "6.083",
      "0",
      "4",
      "8",
      "105"
   ],
   [
      "60",
      "1",
      "1",
      "30.7",
      "54",
      "0",
      "0",
      "2",
      "6",
      "0",
      "8",
      "0",
      "8.567",
      "0",
      "8",
      "10",
      "15"
   ],
   [
      "61",
      "1",
      "0",
      "27.2",
      "36",
      "0",
      "0",
      "6",
      "9",
      "0",
      "4",
      "0",
      "6.333",
      "0",
      "2",
      "3",
      "90"
   ],
   [
      "62",
      "1",
      "0",
      "30.6",
      "53",
      "0",
      "0",
      "3",
      "9",
      "0",
      "6",
      "0",
      "6.183",
      "0",
      "7",
      "7",
      "45"
   ],
   [
      "63",
      "1",
      "0",
      "28.33",
      "66",
      "0",
      "0",
      "3",
      "11",
      "0",
      "13",
      "0",
      "5.7",
      "0",
      "7",
      "7",
      "37.5"
   ],
   [
      "64",
      "1",
      "0",
      "34.84",
      "60",
      "100",
      "1.952",
      "3",
      "50",
      "-2",
      "50",
      "0",
      "5.5",
      "0",
      "4",
      "5",
      "90"
   ],
   [
      "65",
      "1",
      "1",
      "",
      "50",
      "100",
      "0",
      "4",
      "6",
      "-4",
      "30",
      "0",
      "8.233",
      "0",
      "4",
      "6",
      "45"
   ],
   [
      "66",
      "2",
      "0",
      "29",
      "53",
      "0",
      "2.565",
      "3.5",
      "7",
      "0",
      "2",
      "0",
      "7.733",
      "0",
      "4",
      "4",
      "30"
   ],
   [
      "67",
      "2",
      "1",
      "28.59",
      "52",
      "0",
      "0",
      "2",
      "26",
      "0",
      "8",
      "0",
      "15.033",
      "0",
      "3",
      "4",
      "105"
   ],
   [
      "68",
      "2",
      "0",
      "38.19",
      "36",
      "0",
      "0",
      "4",
      "18",
      "-1",
      "6",
      "0",
      "6.033",
      "0",
      "4",
      "8",
      "180"
   ],
   [
      "69",
      "2",
      "0",
      "36.96",
      "66",
      "0",
      "0",
      "5",
      "9",
      "0",
      "3",
      "0",
      "3.817",
      "0",
      "10",
      "10",
      "82.5"
   ],
   [
      "70",
      "1",
      "1",
      "22.55",
      "32",
      "0",
      "0",
      "9",
      "16",
      "0",
      "15",
      "0",
      "6.917",
      "0",
      "4",
      "7",
      "0"
   ],
   [
      "71",
      "2",
      "1",
      "35.15",
      "57",
      "0",
      "0",
      "2",
      "6",
      "0",
      "6",
      "0",
      "6",
      "0",
      "0",
      "1",
      "0"
   ],
   [
      "72",
      "2",
      "0",
      "37.62",
      "54",
      "0",
      "0",
      "0",
      "19",
      "-1",
      "10",
      "0",
      "10.167",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "73",
      "1",
      "0",
      "42.93",
      "52",
      "0",
      "0",
      "2",
      "13",
      "1",
      "1",
      "0",
      "7.467",
      "0",
      "2",
      "4",
      "60"
   ],
   [
      "74",
      "2",
      "1",
      "20.98",
      "31",
      "0",
      "2.432",
      "4",
      "9",
      "0",
      "20",
      "0",
      "11.083",
      "0",
      "2",
      "4",
      "30"
   ],
   [
      "75",
      "2",
      "1",
      "27.37",
      "36",
      "0",
      "0",
      "0",
      "8",
      "2",
      "22",
      "0",
      "4.567",
      "0",
      "5",
      "7",
      "52.5"
   ],
   [
      "76",
      "1",
      "0",
      "27.02",
      "35",
      "175",
      "0",
      "2",
      "5",
      "0",
      "3",
      "0",
      "5.233",
      "0",
      "10",
      "10",
      "26.5"
   ],
   [
      "77",
      "1",
      "0",
      "22.83",
      "51",
      "0",
      "1.107",
      "1",
      "2",
      "0",
      "3",
      "0",
      "2.983",
      "0",
      "1",
      "3",
      "112.5"
   ],
   [
      "78",
      "1",
      "0",
      "28.73",
      "56",
      "0",
      "0",
      "0",
      "5",
      "0",
      "11",
      "0",
      "6.5",
      "0",
      "6",
      "6",
      "37.5"
   ],
   [
      "79",
      "2",
      "0",
      "29.49",
      "62",
      "50",
      "0",
      "1",
      "10",
      "0",
      "6",
      "0",
      "48",
      "1",
      "1",
      "2",
      "0"
   ],
   [
      "80",
      "1",
      "0",
      "34.08",
      "32",
      "0",
      "2.475",
      "2",
      "18",
      "0",
      "3",
      "0",
      "11.117",
      "0",
      "4",
      "6",
      "135"
   ],
   [
      "81",
      "1",
      "0",
      "25.59",
      "57",
      "0",
      "0",
      "5",
      "15",
      "0",
      "5",
      "0",
      "4.833",
      "0",
      "5",
      "7",
      "165"
   ],
   [
      "82",
      "1",
      "1",
      "34.17",
      "59",
      "0",
      "1.537",
      "0",
      "12",
      "0",
      "9",
      "0",
      "7.033",
      "0",
      "6",
      "9",
      "112.5"
   ],
   [
      "83",
      "2",
      "1",
      "31.39",
      "62",
      "0",
      "0",
      "2",
      "24",
      "1",
      "24",
      "0",
      "6.667",
      "0",
      "2",
      "2",
      "90"
   ],
   [
      "84",
      "2",
      "0",
      "21.26",
      "25",
      "",
      "",
      "",
      "50",
      "15",
      "50",
      "1",
      "0",
      "0",
      "10",
      "10",
      "225"
   ],
   [
      "85",
      "1",
      "0",
      "24.2",
      "29",
      "0",
      "0",
      "2",
      "8",
      "0",
      "10",
      "0",
      "4.867",
      "0",
      "7",
      "7",
      "22.5"
   ],
   [
      "86",
      "1",
      "1",
      "32.28",
      "65",
      "0",
      "0",
      "2",
      "4",
      "0",
      "10",
      "0",
      "48",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "87",
      "2",
      "1",
      "30.45",
      "28",
      "50",
      "0",
      "4",
      "8",
      "0",
      "3",
      "0",
      "10.383",
      "0",
      "4",
      "4",
      "45"
   ],
   [
      "88",
      "1",
      "1",
      "23.34",
      "65",
      "0",
      "0",
      "2",
      "6",
      "0",
      "21",
      "0",
      "6.383",
      "0",
      "3",
      "3",
      "52.5"
   ],
   [
      "89",
      "2",
      "0",
      "24.54",
      "46",
      "0",
      "0",
      "1",
      "5",
      "2",
      "9",
      "0",
      "7.317",
      "0",
      "2",
      "6",
      "142.5"
   ],
   [
      "90",
      "2",
      "0",
      "23.61",
      "67",
      "0",
      "0",
      "2",
      "10",
      "-4",
      "4",
      "0",
      "5.667",
      "0",
      "3",
      "3",
      "75"
   ],
   [
      "91",
      "2",
      "0",
      "43.46",
      "55",
      "175",
      "0",
      "2",
      "10",
      "-4",
      "5",
      "0",
      "6.667",
      "0",
      "8",
      "3",
      "30"
   ],
   [
      "92",
      "1",
      "0",
      "19.91",
      "59",
      "0",
      "0",
      "2",
      "3",
      "-6",
      "3",
      "0",
      "48",
      "1",
      "7",
      "3",
      "0"
   ],
   [
      "93",
      "1",
      "1",
      "24.45",
      "38",
      "0",
      "0",
      "2",
      "20",
      "-1",
      "21",
      "0",
      "48",
      "1",
      "1",
      "1",
      "0"
   ],
   [
      "94",
      "1",
      "0",
      "27.78",
      "60",
      "0",
      "0",
      "0",
      "7",
      "-6",
      "4",
      "0",
      "4.7",
      "0",
      "10",
      "10",
      "180"
   ],
   [
      "95",
      "2",
      "0",
      "23.06",
      "41",
      "0",
      "0",
      "2",
      "11",
      "0",
      "10",
      "0",
      "13.267",
      "0",
      "8",
      "10",
      "82.5"
   ],
   [
      "96",
      "2",
      "0",
      "32.79",
      "68",
      "25",
      "0",
      "1",
      "14",
      "-4",
      "1",
      "0",
      "7.2",
      "0",
      "6",
      "6",
      "180"
   ],
   [
      "97",
      "1",
      "1",
      "24.96",
      "66",
      "0",
      "0",
      "2",
      "12",
      "0",
      "14",
      "0",
      "8.817",
      "0",
      "5",
      "0",
      "195"
   ],
   [
      "98",
      "2",
      "0",
      "23.06",
      "41",
      "0",
      "0",
      "4",
      "10",
      "0",
      "12",
      "0",
      "7.083",
      "0",
      "6",
      "8",
      "75"
   ],
   [
      "99",
      "2",
      "1",
      "24.4",
      "19",
      "0",
      "0",
      "2",
      "10",
      "-1",
      "15",
      "0",
      "7.9",
      "0",
      "7",
      "9",
      "157.5"
   ],
   [
      "100",
      "1",
      "0",
      "22.24",
      "31",
      "0",
      "0",
      "2",
      "9",
      "-3",
      "4",
      "0",
      "7.667",
      "0",
      "6",
      "10",
      "165"
   ],
   [
      "101",
      "1",
      "0",
      "33.91",
      "40",
      "0",
      "0",
      "4",
      "11",
      "-2",
      "11",
      "0",
      "5.067",
      "0",
      "10",
      "10",
      "90"
   ],
   [
      "102",
      "2",
      "1",
      "31.65",
      "53",
      "50",
      "0",
      "4",
      "22",
      "0",
      "30",
      "0",
      "12.383",
      "0",
      "0",
      "0",
      "7.5"
   ],
   [
      "103",
      "1",
      "0",
      "41.54",
      "41",
      "100",
      "0",
      "4",
      "40",
      "0",
      "40",
      "0",
      "2.833",
      "0",
      "4",
      "4",
      "127.5"
   ]
]