var smartpillInfo ={
   "format" : "A data frame with 95 obsrvations and 22 variables",
   "title" : "Prospective Cohort Study of Intestinal Transit using a SmartPill to Compare Trauma Patients to Healthy Volunteers",
   "description" : "Description\nThis study evaluated gastric emptying, small bowel transit time, and total intestinal transit time in 8 critically ill trauma patients. These data were compared with those obtained in 87 healthy volunteers from a separate trial. Data were obtained with a motility capsule that wirelessly transmitted pH, pressure, and temperature to a recorder attached to each subject's abdomen. Transit times were available for almost all patients, however, pH, pressure and temperature data is missing for all critically ill patients and sparsely missing for the healthy volunteers (more details available below the variable definitions)",
   "reference" : "The Smart Pill dataset was contributed by Dr. Amy Nowacki, Associate Professor, Cleveland Clinic. Please refer to this resource as: Amy S. Nowacki, 'Smart Pill Dataset', TSHS Resources Portal (2017). Available at https://www.causeweb.org/tshs/smart-pill/. \nDelayed gastric emptying is a well-known problem in critically ill patients and is associated with feeding disturbances and inadequate nutrition. However, evaluating gastrointestinal function remains challenging in critically ill patients who are mechanically ventilated. Many tests that are practical and accurate under standardized, controlled conditions often fail in the critical care setting. For example, the consensus recommendations for gastric emptying scintigraphy are impractical in intubated patients because they recommend low-fat, egg white meal with imaging at 0, 1, 2, and 4 hours after meal ingestion. Another test, the lactulose hydrogen breath test, relies on prompt bacterial breakdown of lactulose in the colon; however, changes in bacterial flora - which are presumably common in critical care patients - can produce false transit times.\nThe 13C-octanoic acid breath test was reported as successful when used bedside to measure gastric emptying. However, manometry only assesses the upper gastrointestinal function, mainly esophagus, stomach, and proximal small bowel. Finally, video capsule technology has been used to determine small bowel transit time and pathomorphology in critically ill patients, although inadequate battery lifespan of the capsule (approximately 8-10 hours) could prevent complete examination in some cases.\nAn alternative technique, wireless capsule technology, may be useful for evaluating gastrointestinal motility in critical care patients. A newly developed motility capsule for assessing gastric emptying in patients with suspected gastroparesis has been available since 2006. It is a wireless capsule that transmits pH, pressure, and temperature.\nThis study describes the first use of a novel motility capsule to compare gastric emptying and small bowel transit times in critically ill trauma patients with intracranial hemorrhage with times recorded previously in healthy volunteers. Secondly, this study compares critically ill patients and volunteers on whole-gut transit time.",
   "usage" : "smartpill",
   "parameters" : {
      "C.Mean.Peak.Amplitude" : "Colon mean peak amplitude is the sum of amplitudes divided by number of contractions (mm Hg), numeric, range:  32.8-    64.2",
      "Gender" : "Gender, numeric, range: 0 = Female, 1 = Male",
      "Colon.Contractions" : "Colon contractions are counted if the peak amplitude of the contraction is over 10 mmHg and under 300 mmHg, numeric, range:  41.0-2672.0",
      "Weight" : "Weight (kilograms), numeric, range:  44.9-127.0",
      "WG.Time" : "Whole Gut Time is time from ingestion to body exit (hours), numeric, range:   6.0-816.0",
      "SB.Mean.pH" : "Small Bowel mean pH is the average pH over the whole recording time in the small bowel, normal ~ 6-7.4, numeric, range:   4.7-8.6",
      "GE.Time" : "Gastric Emptying Time is time from ingestion to gastric emptying (hours), numeric, range:   1.7-74.3",
      "C.Mean.pH" : "Colon mean pH is the average pH over the whole recording time in the colon, normal ~ 5-7-6.7, numeric, range:   3.9-8.1",
      "Race" : "Race, numeric, 1 = White, 2 = Black, 3 = Asian/Pacific Islander, 4 = Hispanic, 5 = Other",
      "S.Sum.of.Amplitudes" : "Stomach sum of amplitudes (mm Hg), numeric, range: 655.6-33800.3",
      "Age" : "Age (years), numeric, range:  18.0-72.0",
      "Group" : "Study group, numeric, 0 = Critically Ill Trama Patient, 1 = Healthy Volunteer",
      "S.Mean.Peak.Amplitude" : "Stomach mean peak amplitude is the sum of amplitudes divided by number of contractions (mm Hg), numeric, range:   4.6-43.4",
      "Height" : "Height (centimeters), numeric, range: 132.1-193.0",
      "Colon.Sum.of.Amplitudes" : "Colon sum of amplitudes (mm Hg), numeric, range:1872.6-117707.5",
      "SB.Time" : "Small Bowel Transit Time is time from gastric emptying to ileocecal junction (hours), numeric, range:   1.8-13.8",
      "S.Contractions" : "Stomach contractions are counted if the peak amplitude of the contraction is over 10 mmHg and under 300 mmHg, numeric, range:  47.0-1665.0",
      "C.Time" : "Colonic Transit Time is time from ileocecal junction to body exit (hours), numeric, range:   0.7-118.9",
      "SB.Contractions" : "Small Bowel contractions are counted if the peak amplitude of the contraction is over 10 mmHg and under 300 mmHg, numeric, range: 223.0-2375.0",
      "SB.Sum.of.Amplitudes" : "Small Bowel sum of amplitudes (mm Hg), numeric, range:3899.4-41122.5",
      "S.Mean.pH" : "Stomach mean pH is the average pH over the whole recording time in the stomach with normal ~ 1.5-3.5, numeric, range:   1.5-5.9",
      "SB.Mean.Peak.Amplitude" : "Small Bowell mean peak amplitude is the sum of amplitudes divided by number of contractions (mm Hg), numeric, range:  15.0-27.9"
   }
}

var smartpill = [
   [
      "Group",
      "Gender",
      "Race",
      "Height",
      "Weight",
      "Age",
      "GE.Time",
      "SB.Time",
      "C.Time",
      "WG.Time",
      "S.Contractions",
      "S.Sum.of.Amplitudes",
      "S.Mean.Peak.Amplitude",
      "S.Mean.pH",
      "SB.Contractions",
      "SB.Sum.of.Amplitudes",
      "SB.Mean.Peak.Amplitude",
      "SB.Mean.pH",
      "Colon.Contractions",
      "Colon.Sum.of.Amplitudes",
      "C.Mean.Peak.Amplitude",
      "C.Mean.pH"
   ],
   [
      "0",
      "1",
      "",
      "182.88",
      "102.0582",
      "25",
      "74.3",
      "8.4",
      "",
      "816",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
   ],
   [
      "0",
      "1",
      "",
      "180.34",
      "102.0582",
      "39",
      "73.3",
      "13.8",
      "",
      "168",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
   ],
   [
      "0",
      "1",
      "",
      "180.34",
      "68.0388",
      "44",
      "4.3",
      "6.7",
      "",
      "240",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
   ],
   [
      "0",
      "1",
      "",
      "175.26",
      "69.853168",
      "53",
      "",
      "",
      "",
      "216",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
   ],
   [
      "0",
      "0",
      "",
      "152.4",
      "44.905608",
      "57",
      "13.9",
      "5.1",
      "",
      "120",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
   ],
   [
      "0",
      "1",
      "",
      "185.42",
      "94.800728",
      "43",
      "23.3",
      "8.7",
      "",
      "384",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
   ],
   [
      "0",
      "1",
      "",
      "187.96",
      "86.18248",
      "38",
      "7.5",
      "3.7",
      "",
      "240",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
   ],
   [
      "0",
      "0",
      "",
      "165.1",
      "76.203456",
      "23",
      "5.6",
      "3.4",
      "",
      "288",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "1",
      "1",
      "172.72",
      "74.389088",
      "21",
      "2.73",
      "5.12",
      "43.28",
      "51.13",
      "145",
      "2254.16",
      "15.545931",
      "2.07",
      "298",
      "5382.65",
      "18.0625839",
      "7.26",
      "507",
      "19073.39",
      "37.6200986",
      "7.58"
   ],
   [
      "1",
      "0",
      "1",
      "170.18",
      "64.863656",
      "24",
      "5.02",
      "3.3",
      "14.03",
      "22.35",
      "114",
      "3747.7",
      "32.8745614",
      "2.28",
      "782",
      "14044.54",
      "17.9597698",
      "7.21",
      "50",
      "1872.63",
      "37.4526",
      "7.21"
   ],
   [
      "1",
      "1",
      "3",
      "180.34",
      "58.96696",
      "24",
      "1.97",
      "4.46",
      "44.82",
      "51.25",
      "47",
      "1243.4",
      "26.4553192",
      "3.63",
      "514",
      "8057.5",
      "15.67607",
      "7.04",
      "615",
      "23738.55",
      "38.5992683",
      "6.96"
   ],
   [
      "1",
      "0",
      "1",
      "160.02",
      "72.57472",
      "28",
      "2.9",
      "4.17",
      "16.48",
      "23.55",
      "115",
      "2362.17",
      "20.5406087",
      "3.35",
      "686",
      "10557.72",
      "15.3902624",
      "7.08",
      "289",
      "10804.28",
      "37.3850519",
      "7.07"
   ],
   [
      "1",
      "1",
      "1",
      "180.34",
      "81.64656",
      "23",
      "2.54",
      "3.15",
      "24.25",
      "29.94",
      "92",
      "1934.87",
      "21.0311957",
      "3.72",
      "323",
      "5457.92",
      "16.8975851",
      "7.35",
      "344",
      "14388.44",
      "41.8268605",
      "7.51"
   ],
   [
      "1",
      "0",
      "1",
      "161.29",
      "58.96696",
      "32",
      "3.47",
      "4.55",
      "23.08",
      "31.1",
      "99",
      "2878.43",
      "29.0750505",
      "3.8",
      "1017",
      "21231",
      "20.8761062",
      "7.42",
      "870",
      "34252.14",
      "39.3702759",
      "7.48"
   ],
   [
      "1",
      "1",
      "3",
      "180.34",
      "69.399576",
      "22",
      "2.3",
      "3.72",
      "4.83",
      "10.85",
      "312",
      "6541.72",
      "20.9670513",
      "4.88",
      "937",
      "18096.22",
      "19.3129349",
      "8.55",
      "190",
      "6411.08",
      "33.7425263",
      "7.67"
   ],
   [
      "1",
      "1",
      "3",
      "175.26",
      "77.11064",
      "22",
      "2.68",
      "",
      "",
      "11.4",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "1",
      "1",
      "175.26",
      "77.11064",
      "56",
      "2.95",
      "4.25",
      "11.7",
      "18.9",
      "80",
      "1908.23",
      "23.852875",
      "2.93",
      "856",
      "17960.18",
      "20.9815187",
      "7.02",
      "245",
      "11178.98",
      "45.6284898",
      "7.24"
   ],
   [
      "1",
      "1",
      "2",
      "182.88",
      "87.543256",
      "38",
      "4.45",
      "5.33",
      "15.72",
      "25.5",
      "179",
      "3521.92",
      "19.6755307",
      "2.35",
      "1467",
      "27197.41",
      "18.5394751",
      "7.26",
      "276",
      "12109.95",
      "43.8766304",
      "5.88"
   ],
   [
      "1",
      "0",
      "1",
      "167.64",
      "77.11064",
      "37",
      "2.47",
      "3.82",
      "92.61",
      "98.9",
      "756",
      "13216.65",
      "17.4823413",
      "2.39",
      "1270",
      "24570.12",
      "19.3465512",
      "6.33",
      "1019",
      "43797.6",
      "42.9809617",
      "6.81"
   ],
   [
      "1",
      "1",
      "4",
      "172.72",
      "77.11064",
      "40",
      "2.96",
      "3.47",
      "1.68",
      "8.11",
      "72",
      "1155.44",
      "16.0477778",
      "3.3",
      "332",
      "6033.49",
      "18.1731627",
      "6.93",
      "82",
      "3185.28",
      "38.8448781",
      "6.95"
   ],
   [
      "1",
      "0",
      "2",
      "154.94",
      "79.3786",
      "50",
      "5.68",
      "13.45",
      "13.2",
      "32.33",
      "531",
      "11498.41",
      "21.6542561",
      "2.57",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "1",
      "2",
      "180.34",
      "83.91452",
      "38",
      "2.51",
      "5.03",
      "58.04",
      "65.58",
      "144",
      "655.57",
      "4.55256944",
      "2.33",
      "686",
      "12678.62",
      "18.4819534",
      "6.95",
      "2134",
      "108317.43",
      "50.7579335",
      "7.21"
   ],
   [
      "1",
      "0",
      "2",
      "175.26",
      "69.853168",
      "18",
      "3.64",
      "5.96",
      "118.87",
      "128.47",
      "195",
      "3443.05",
      "17.6566667",
      "2.27",
      "1926",
      "34892.11",
      "18.1163603",
      "7.44",
      "1585",
      "63621.7",
      "40.1398738",
      "7.16"
   ],
   [
      "1",
      "0",
      "1",
      "160.02",
      "61.688512",
      "19",
      "3.63",
      "3.37",
      "19.4",
      "26.4",
      "138",
      "2757.41",
      "19.9812319",
      "3.68",
      "416",
      "7639.09",
      "18.3631971",
      "6.87",
      "737",
      "28518.43",
      "38.6952917",
      "7.91"
   ],
   [
      "1",
      "1",
      "1",
      "182.88",
      "74.84268",
      "28",
      "3.93",
      "2.52",
      "21.7",
      "28.15",
      "122",
      "2285.98",
      "18.737541",
      "1.96",
      "225",
      "3899.38",
      "17.3305778",
      "6.83",
      "298",
      "9780.58",
      "32.8207383",
      "6.53"
   ],
   [
      "1",
      "1",
      "3",
      "175.26",
      "77.564232",
      "31",
      "2.82",
      "4.87",
      "13.35",
      "21.04",
      "279",
      "4200.98",
      "15.057276",
      "3.26",
      "986",
      "14773.17",
      "14.982931",
      "6.98",
      "292",
      "13341.08",
      "45.6886301",
      "7.23"
   ],
   [
      "1",
      "0",
      "4",
      "162.56",
      "59.874144",
      "38",
      "3.45",
      "2.87",
      "27.56",
      "33.88",
      "274",
      "4844.47",
      "17.6805475",
      "3.14",
      "930",
      "21308.33",
      "22.9121828",
      "7.23",
      "662",
      "31176.6",
      "47.0945619",
      "8.1"
   ],
   [
      "1",
      "1",
      "1",
      "170.18",
      "87.543256",
      "50",
      "2.3",
      "2.25",
      "16.29",
      "20.84",
      "215",
      "4022.44",
      "18.7090233",
      "4.43",
      "967",
      "26734.08",
      "27.6464116",
      "7.11",
      "1021",
      "50266.53",
      "49.2326445",
      "7.43"
   ],
   [
      "1",
      "1",
      "2",
      "175.26",
      "86.18248",
      "44",
      "2.72",
      "3.71",
      "1.19",
      "7.62",
      "142",
      "3912.15",
      "27.5503521",
      "4.82",
      "338",
      "6462.99",
      "19.1212722",
      "6.5",
      "97",
      "3620.37",
      "37.3234021",
      "6.44"
   ],
   [
      "1",
      "1",
      "4",
      "162.56",
      "60.781328",
      "57",
      "3.95",
      "2.8",
      "22.03",
      "28.78",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "1",
      "2",
      "162.56",
      "74.84268",
      "41",
      "2.13",
      "2.92",
      "17.83",
      "22.88",
      "113",
      "2756.66",
      "24.3952212",
      "4.28",
      "759",
      "13068.14",
      "17.2175758",
      "7.04",
      "773",
      "43683.05",
      "56.5110608",
      "7.22"
   ],
   [
      "1",
      "0",
      "1",
      "167.64",
      "72.57472",
      "50",
      "2.7",
      "3.47",
      "19.75",
      "25.92",
      "134",
      "2261.28",
      "16.8752239",
      "3.18",
      "324",
      "5390.28",
      "16.6366667",
      "7.1",
      "836",
      "34536.38",
      "41.3114593",
      "6.82"
   ],
   [
      "1",
      "0",
      "1",
      "175.26",
      "79.3786",
      "37",
      "3.32",
      "2.75",
      "7.43",
      "13.5",
      "138",
      "2682.13",
      "19.4357246",
      "2.89",
      "488",
      "9454.08",
      "19.3731148",
      "7.3",
      "295",
      "12672.7",
      "42.9583051",
      "6.75"
   ],
   [
      "1",
      "1",
      "1",
      "162.56",
      "70.760352",
      "37",
      "3.04",
      "4.46",
      "43.54",
      "51.04",
      "241",
      "5180.03",
      "21.4939004",
      "3.65",
      "556",
      "9875.23",
      "17.761205",
      "7",
      "1112",
      "46344.61",
      "41.6768076",
      "7.36"
   ],
   [
      "1",
      "1",
      "1",
      "177.8",
      "68.0388",
      "23",
      "4.7",
      "3.75",
      "17.75",
      "26.2",
      "175",
      "3797.16",
      "21.6980571",
      "1.82",
      "242",
      "4685.4",
      "19.361157",
      "6.01",
      "364",
      "16101.2",
      "44.2340659",
      "7.33"
   ],
   [
      "1",
      "1",
      "1",
      "177.8",
      "97.52228",
      "40",
      "3.58",
      "2.5",
      "4.35",
      "10.43",
      "110",
      "2648.17",
      "24.0742727",
      "3.6",
      "243",
      "5229.87",
      "21.5220988",
      "6.22",
      "189",
      "7471.15",
      "39.5298942",
      "7.5"
   ],
   [
      "1",
      "0",
      "1",
      "177.8",
      "72.57472",
      "34",
      "2.92",
      "",
      "",
      "5.99",
      "305",
      "6681.77",
      "21.9074426",
      "2.39",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "0",
      "1",
      "172.72",
      "74.84268",
      "64",
      "2.17",
      "4.21",
      "17.49",
      "23.87",
      "227",
      "5522.37",
      "24.3276212",
      "3.03",
      "1106",
      "23068.54",
      "20.8576311",
      "7.08",
      "289",
      "11615.46",
      "40.1919031",
      "6.82"
   ],
   [
      "1",
      "1",
      "1",
      "167.64",
      "96.161504",
      "26",
      "2.2",
      "4.28",
      "20.43",
      "26.91",
      "212",
      "4362.78",
      "20.5791509",
      "3.32",
      "899",
      "18630.71",
      "20.7238154",
      "7.23",
      "606",
      "26615.6",
      "43.920132",
      "7.55"
   ],
   [
      "1",
      "1",
      "1",
      "165.1",
      "59.874144",
      "25",
      "2.33",
      "2.6",
      "3.65",
      "8.58",
      "160",
      "3926.22",
      "24.538875",
      "2.68",
      "856",
      "15314.1",
      "17.8903037",
      "7.01",
      "329",
      "12971.06",
      "39.4257143",
      "7.3"
   ],
   [
      "1",
      "1",
      "1",
      "175.26",
      "74.84268",
      "48",
      "3.02",
      "3.9",
      "16.83",
      "23.75",
      "74",
      "2034.5",
      "27.4932432",
      "1.77",
      "559",
      "9313.22",
      "16.6605009",
      "7.08",
      "215",
      "7468.76",
      "34.7384186",
      "6.64"
   ],
   [
      "1",
      "1",
      "1",
      "182.88",
      "95.25432",
      "30",
      "2.72",
      "3.68",
      "18.48",
      "24.88",
      "144",
      "3063.96",
      "21.2775",
      "3.16",
      "578",
      "9246.72",
      "15.9977855",
      "6.02",
      "688",
      "27222.44",
      "39.5675",
      "5.41"
   ],
   [
      "1",
      "0",
      "1",
      "177.8",
      "61.23492",
      "42",
      "3.66",
      "1.95",
      "18.99",
      "24.6",
      "150",
      "4210.46",
      "28.0697333",
      "2.59",
      "248",
      "4168.28",
      "16.8075807",
      "6.99",
      "489",
      "21979.21",
      "44.9472597",
      "7.1"
   ],
   [
      "1",
      "0",
      "2",
      "162.56",
      "108.86208",
      "34",
      "3.15",
      "6.97",
      "58.43",
      "68.55",
      "233",
      "4144.57",
      "17.7878541",
      "3.18",
      "1121",
      "18536.38",
      "16.5355754",
      "7.1",
      "984",
      "39755.86",
      "40.4022968",
      "7.17"
   ],
   [
      "1",
      "0",
      "1",
      "165.1",
      "54.43104",
      "25",
      "2.75",
      "3.87",
      "98.65",
      "105.27",
      "123",
      "4426.2",
      "35.9853659",
      "3.94",
      "223",
      "4310.84",
      "19.3311211",
      "7.85",
      "1346",
      "54531.16",
      "40.5134918",
      "6.51"
   ],
   [
      "1",
      "1",
      "1",
      "182.88",
      "68.0388",
      "25",
      "2.48",
      "8.25",
      "24.68",
      "35.41",
      "94",
      "2018.92",
      "21.4778723",
      "4.15",
      "1055",
      "17342",
      "16.4379147",
      "7.46",
      "809",
      "30402",
      "37.5797281",
      "7.37"
   ],
   [
      "1",
      "0",
      "2",
      "172.72",
      "68.0388",
      "30",
      "3.74",
      "2.45",
      "15.51",
      "21.7",
      "85",
      "2125.56",
      "25.0065882",
      "2.1",
      "341",
      "6527.95",
      "19.1435484",
      "6.75",
      "341",
      "14369.54",
      "42.1394135",
      "6.7"
   ],
   [
      "1",
      "1",
      "1",
      "162.56",
      "85.275296",
      "31",
      "2.63",
      "4.85",
      "46.64",
      "54.12",
      "53",
      "1543.3",
      "29.1188679",
      "4.03",
      "426",
      "6725.94",
      "15.7885916",
      "7.09",
      "1005",
      "41721.32",
      "41.5137512",
      "6.69"
   ],
   [
      "1",
      "0",
      "1",
      "193.04",
      "101.151016",
      "28",
      "2.05",
      "4.45",
      "19.55",
      "26.05",
      "78",
      "1932.2",
      "24.7717949",
      "3.95",
      "695",
      "11009.42",
      "15.8408921",
      "6.87",
      "156",
      "5611.52",
      "35.9712821",
      "7.8"
   ],
   [
      "1",
      "0",
      "1",
      "157.48",
      "77.11064",
      "44",
      "5",
      "3.21",
      "41.8",
      "50.01",
      "359",
      "11353.4",
      "31.6250696",
      "2.38",
      "1092",
      "25839.58",
      "23.6626191",
      "7.11",
      "1697",
      "96236.76",
      "56.7099352",
      "7.38"
   ],
   [
      "1",
      "1",
      "1",
      "162.56",
      "68.0388",
      "48",
      "2.39",
      "2.55",
      "17.31",
      "22.25",
      "230",
      "5840.74",
      "25.3945217",
      "3.59",
      "701",
      "13269.14",
      "18.928873",
      "7.44",
      "744",
      "32079.13",
      "43.1171102",
      "7.95"
   ],
   [
      "1",
      "0",
      "1",
      "175.26",
      "75.296272",
      "40",
      "3.88",
      "2.72",
      "19",
      "25.6",
      "276",
      "6237.77",
      "22.6006159",
      "2.86",
      "535",
      "11180.79",
      "20.8986729",
      "6.69",
      "548",
      "26667.1",
      "48.6625912",
      "7.12"
   ],
   [
      "1",
      "1",
      "1",
      "175.26",
      "65.77084",
      "43",
      "2.82",
      "3.25",
      "15.15",
      "21.22",
      "200",
      "5194.81",
      "25.97405",
      "4.19",
      "727",
      "15065.66",
      "20.7230537",
      "6.79",
      "784",
      "49277.83",
      "62.854375",
      "7.3"
   ],
   [
      "1",
      "1",
      "1",
      "172.72",
      "71.667536",
      "42",
      "1.84",
      "1.81",
      "3.62",
      "7.27",
      "256",
      "5284.98",
      "20.6444531",
      "2.2",
      "793",
      "20236.5",
      "25.5189155",
      "6.98",
      "486",
      "25233.77",
      "51.9213375",
      "6.76"
   ],
   [
      "1",
      "1",
      "1",
      "193.04",
      "111.13004",
      "53",
      "2.64",
      "7.11",
      "22.69",
      "32.44",
      "305",
      "4989.59",
      "16.3593115",
      "3.14",
      "794",
      "13304.83",
      "16.7567129",
      "6.53",
      "919",
      "35378.86",
      "38.4971273",
      "7.08"
   ],
   [
      "1",
      "0",
      "1",
      "165.1",
      "111.13004",
      "34",
      "6.33",
      "2.05",
      "17.32",
      "25.7",
      "609",
      "12138.54",
      "19.9319212",
      "1.86",
      "716",
      "14797.22",
      "20.6665084",
      "7.46",
      "187",
      "7403.14",
      "39.588984",
      "5.93"
   ],
   [
      "1",
      "1",
      "2",
      "180.34",
      "72.57472",
      "26",
      "2.43",
      "4",
      "26.82",
      "33.25",
      "468",
      "9340.66",
      "19.9586752",
      "1.47",
      "742",
      "13286.67",
      "17.9065633",
      "4.72",
      "758",
      "30064.37",
      "39.6627573",
      "4.77"
   ],
   [
      "1",
      "1",
      "2",
      "165.1",
      "81.64656",
      "29",
      "4.16",
      "3.9",
      "50.59",
      "58.65",
      "563",
      "10489.17",
      "18.6308526",
      "2.38",
      "482",
      "8095.76",
      "16.7961826",
      "5.51",
      "963",
      "50388",
      "52.3239875",
      "5.18"
   ],
   [
      "1",
      "1",
      "1",
      "182.88",
      "90.7184",
      "40",
      "2.54",
      "3.13",
      "32.03",
      "37.7",
      "622",
      "11412.5",
      "18.3480707",
      "3.02",
      "1131",
      "21416.04",
      "18.9354907",
      "7.29",
      "772",
      "28039.38",
      "36.3204404",
      "7.33"
   ],
   [
      "1",
      "0",
      "1",
      "157.48",
      "95.25432",
      "52",
      "17.1",
      "5.98",
      "49.59",
      "72.67",
      "1665",
      "33800.28",
      "20.3004685",
      "3.13",
      "872",
      "22162.75",
      "25.4159977",
      "7.51",
      "2571",
      "112295.79",
      "43.6778646",
      "7.87"
   ],
   [
      "1",
      "0",
      "1",
      "157.48",
      "51.709488",
      "66",
      "",
      "",
      "",
      "72.08",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "1",
      "1",
      "177.8",
      "74.84268",
      "20",
      "2.38",
      "3.75",
      "10.72",
      "16.85",
      "85",
      "2406.32",
      "28.3096471",
      "1.49",
      "378",
      "6263.06",
      "16.5689418",
      "6.2",
      "433",
      "16052.92",
      "37.0737182",
      "5.85"
   ],
   [
      "1",
      "1",
      "1",
      "191.77",
      "127.00576",
      "43",
      "2.07",
      "3.95",
      "2.45",
      "8.47",
      "87",
      "2543.9",
      "29.2402299",
      "2.99",
      "912",
      "18624.05",
      "20.4211075",
      "6.97",
      "137",
      "5963.58",
      "43.529781",
      "6.58"
   ],
   [
      "1",
      "1",
      "1",
      "182.88",
      "81.64656",
      "55",
      "4.6",
      "3.52",
      "14.5",
      "22.62",
      "229",
      "4141.03",
      "18.0831004",
      "3.6",
      "507",
      "8389.34",
      "16.5470217",
      "7.2",
      "470",
      "22093.26",
      "47.0069362",
      "7.25"
   ],
   [
      "1",
      "1",
      "1",
      "179.07",
      "114.305184",
      "72",
      "1.68",
      "3.37",
      "5.67",
      "10.72",
      "119",
      "2833.09",
      "23.807479",
      "5.93",
      "284",
      "5911.17",
      "20.8139789",
      "6.77",
      "143",
      "6487.7",
      "45.3685315",
      "6.83"
   ],
   [
      "1",
      "0",
      "1",
      "160.02",
      "66.224432",
      "52",
      "2.99",
      "5.71",
      "33.42",
      "42.12",
      "122",
      "3052.61",
      "25.0213934",
      "2.48",
      "715",
      "13609.79",
      "19.0346713",
      "7.35",
      "715",
      "32398.91",
      "45.3131608",
      "6.82"
   ],
   [
      "1",
      "1",
      "1",
      "180.34",
      "87.543256",
      "20",
      "2.35",
      "5.87",
      "94.38",
      "102.6",
      "107",
      "3916.87",
      "36.6062617",
      "2.72",
      "1200",
      "19256.32",
      "16.0469333",
      "6.84",
      "1334",
      "50660.97",
      "37.9767391",
      "6.32"
   ],
   [
      "1",
      "1",
      "3",
      "175.26",
      "72.57472",
      "29",
      "11.19",
      "5.63",
      "35.93",
      "52.75",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "0",
      "1",
      "152.4",
      "53.977448",
      "25",
      "3.61",
      "4.7",
      "21.62",
      "29.93",
      "367",
      "8086.87",
      "22.0350681",
      "4.16",
      "1115",
      "22601.83",
      "20.2706996",
      "7.28",
      "147",
      "5549.72",
      "37.7531973",
      "6.89"
   ],
   [
      "1",
      "0",
      "1",
      "167.64",
      "68.0388",
      "38",
      "2.39",
      "4.88",
      "2.48",
      "9.75",
      "240",
      "4699.1",
      "19.5795833",
      "3.58",
      "906",
      "15142.34",
      "16.7133996",
      "7.21",
      "51",
      "1939.82",
      "38.0356863",
      "6.55"
   ],
   [
      "1",
      "1",
      "1",
      "175.26",
      "97.52228",
      "33",
      "2.81",
      "3.29",
      "21.05",
      "27.15",
      "599",
      "10124.54",
      "16.902404",
      "3.28",
      "828",
      "14741.83",
      "17.8041425",
      "6.78",
      "742",
      "27804.89",
      "37.4728976",
      "7.24"
   ],
   [
      "1",
      "0",
      "1",
      "170.18",
      "74.84268",
      "29",
      "2.72",
      "3.8",
      "23.65",
      "30.17",
      "446",
      "9009.67",
      "20.2010538",
      "2.51",
      "883",
      "16151.4",
      "18.2915062",
      "7.16",
      "351",
      "13511.02",
      "38.4929345",
      "6.56"
   ],
   [
      "1",
      "0",
      "1",
      "167.64",
      "57.606184",
      "30",
      "4.25",
      "2.58",
      "38.87",
      "45.7",
      "218",
      "4366.71",
      "20.0307798",
      "1.94",
      "352",
      "6635.77",
      "18.8516193",
      "6.42",
      "500",
      "17973.59",
      "35.94718",
      "6.73"
   ],
   [
      "1",
      "0",
      "1",
      "165.1",
      "67.131616",
      "44",
      "2.73",
      "4.85",
      "39.52",
      "47.1",
      "186",
      "6048.19",
      "32.5171505",
      "1.83",
      "807",
      "12659.39",
      "15.6869765",
      "7.21",
      "747",
      "28777.56",
      "38.5241767",
      "3.92"
   ],
   [
      "1",
      "0",
      "1",
      "162.56",
      "65.997636",
      "46",
      "4.58",
      "2.89",
      "37.31",
      "44.78",
      "378",
      "10596.32",
      "28.0325926",
      "2.16",
      "1035",
      "19908.89",
      "19.2356425",
      "6.92",
      "1618",
      "74847.92",
      "46.2595303",
      "7"
   ],
   [
      "1",
      "0",
      "1",
      "172.72",
      "78.471416",
      "51",
      "9",
      "2.4",
      "58.79",
      "70.19",
      "944",
      "19196.54",
      "20.3353178",
      "2.56",
      "667",
      "13374.02",
      "20.0510045",
      "7.1",
      "2672",
      "117707.52",
      "44.0522156",
      "7.55"
   ],
   [
      "1",
      "0",
      "1",
      "169.672",
      "58.4680088",
      "30",
      "2.74",
      "3.58",
      "39.5",
      "45.82",
      "330",
      "8249.89",
      "24.9996667",
      "3.63",
      "394",
      "7021.46",
      "17.8209645",
      "7.29",
      "1340",
      "55715.71",
      "41.5788881",
      "7.12"
   ],
   [
      "1",
      "1",
      "1",
      "190.5",
      "106.9569936",
      "34",
      "2.46",
      "4.02",
      "17.22",
      "23.7",
      "175",
      "3596.11",
      "20.5492",
      "2.3",
      "951",
      "18496.45",
      "19.4494742",
      "6.72",
      "479",
      "17154.9",
      "35.8139875",
      "6.66"
   ],
   [
      "1",
      "0",
      "1",
      "157.48",
      "64.6822192",
      "57",
      "5.97",
      "2.58",
      "36.8",
      "45.35",
      "170",
      "6737.64",
      "39.6331765",
      "2.8",
      "643",
      "11619.54",
      "18.0708243",
      "7.71",
      "1173",
      "75326.91",
      "64.2173146",
      "7.2"
   ],
   [
      "1",
      "1",
      "1",
      "179.07",
      "64.63686",
      "26",
      "4.11",
      "3.5",
      "",
      "",
      "88",
      "1842.84",
      "20.9413636",
      "3.24",
      "709",
      "14282.2",
      "20.1441467",
      "7.07",
      "203",
      "12705.97",
      "62.5909852",
      "6.2"
   ],
   [
      "1",
      "1",
      "1",
      "180.34",
      "68.265596",
      "26",
      "3.88",
      "5.3",
      "22.14",
      "31.32",
      "125",
      "2217.59",
      "17.74072",
      "2.65",
      "894",
      "24900.92",
      "27.8533781",
      "7.04",
      "604",
      "24827.43",
      "41.1050166",
      "6.67"
   ],
   [
      "1",
      "0",
      "1",
      "181.864",
      "97.1594064",
      "30",
      "3.21",
      "3.05",
      "6.45",
      "12.71",
      "88",
      "3822.61",
      "43.43875",
      "2.96",
      "278",
      "5777.83",
      "20.7835612",
      "6.9",
      "211",
      "9811.75",
      "46.5011848",
      "6.63"
   ],
   [
      "1",
      "0",
      "1",
      "165.1",
      "77.11064",
      "61",
      "4.2",
      "2.67",
      "23.35",
      "30.22",
      "233",
      "5332.35",
      "22.8856223",
      "4.85",
      "337",
      "6274.24",
      "18.6179229",
      "6.94",
      "598",
      "24831.63",
      "41.5244649",
      "6.94"
   ],
   [
      "1",
      "1",
      "1",
      "187.96",
      "108.86208",
      "49",
      "3.52",
      "4.62",
      "43.95",
      "52.09",
      "215",
      "5837.64",
      "27.151814",
      "2.58",
      "648",
      "13751.31",
      "21.2211574",
      "6.8",
      "1028",
      "47234.62",
      "45.9480739",
      "7.25"
   ],
   [
      "1",
      "1",
      "1",
      "179.07",
      "102.738588",
      "59",
      "1.87",
      "3.51",
      "33.1",
      "38.48",
      "102",
      "2076.17",
      "20.3546078",
      "2.87",
      "613",
      "9712.96",
      "15.8449592",
      "6.44",
      "358",
      "17267.23",
      "48.232486",
      "6.31"
   ],
   [
      "1",
      "1",
      "3",
      "145.542",
      "77.0652808",
      "35",
      "",
      "",
      "",
      "23.29",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "0",
      "1",
      "132.08",
      "56.245408",
      "55",
      "4.01",
      "3.57",
      "28.58",
      "36.16",
      "307",
      "5154.94",
      "16.7913355",
      "2",
      "923",
      "18286.8",
      "19.812351",
      "7.21",
      "698",
      "27490.84",
      "39.3851576",
      "7.33"
   ],
   [
      "1",
      "1",
      "2",
      "179.07",
      "82.0094336",
      "29",
      "3.43",
      "4.19",
      "13.25",
      "20.87",
      "271",
      "5238.33",
      "19.329631",
      "2.91",
      "985",
      "16899.99",
      "17.1573503",
      "7.44",
      "427",
      "16841.82",
      "39.4422014",
      "7.21"
   ],
   [
      "1",
      "1",
      "4",
      "180.34",
      "77.2013584",
      "33",
      "2.1",
      "4.32",
      "27.48",
      "33.9",
      "160",
      "3936.15",
      "24.6009375",
      "3.34",
      "454",
      "6997.24",
      "15.4124229",
      "7.14",
      "460",
      "24274.54",
      "52.7707391",
      "6.98"
   ],
   [
      "1",
      "1",
      "2",
      "175.26",
      "83.460928",
      "44",
      "3.2",
      "5.95",
      "25.92",
      "35.07",
      "748",
      "12334.89",
      "16.4904947",
      "2.94",
      "2375",
      "41122.53",
      "17.3147495",
      "7.11",
      "1057",
      "40580.38",
      "38.3920341",
      "6.87"
   ],
   [
      "1",
      "0",
      "5",
      "163.83",
      "57.9690576",
      "38",
      "3.15",
      "3.52",
      "15.03",
      "21.7",
      "414",
      "8505.56",
      "20.5448309",
      "3.28",
      "831",
      "13836.5",
      "16.6504212",
      "6.68",
      "240",
      "8786.68",
      "36.6111667",
      "6.94"
   ],
   [
      "1",
      "1",
      "1",
      "187.96",
      "90.7184",
      "28",
      "4.07",
      "3.7",
      "0.7",
      "8.47",
      "70",
      "2355.62",
      "33.6517143",
      "2.59",
      "559",
      "9550.59",
      "17.0851342",
      "6.65",
      "41",
      "1877.85",
      "45.8012195",
      "6.51"
   ],
   [
      "1",
      "0",
      "1",
      "171.45",
      "61.5977936",
      "21",
      "3.77",
      "6.05",
      "46.1",
      "55.92",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "0",
      "1",
      "154.94",
      "58.6948048",
      "43",
      "3.58",
      "3.63",
      "22.47",
      "29.68",
      "119",
      "2820.22",
      "23.6993277",
      "1.98",
      "711",
      "12829.08",
      "18.0437131",
      "7.02",
      "816",
      "33248.68",
      "40.7459314",
      "7.39"
   ],
   [
      "1",
      "0",
      "1",
      "162.56",
      "59.7834256",
      "27",
      "4.15",
      "4.75",
      "43.17",
      "52.07",
      "875",
      "18529.84",
      "21.17696",
      "3.6",
      "906",
      "14233.5",
      "15.7102649",
      "7.24",
      "2007",
      "82586.08",
      "41.1490184",
      "7.26"
   ]
]