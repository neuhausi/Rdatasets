var cms_patient_careInfo ={
   "format" : "cms_patient_experience is a data frame with 500 observations and\nfive variables:",
   "parameters" : {
      "measure_cd,measure_title" : "Measure code and title",
      "prf_rate" : "Measure performance rate",
      "org_pac_id,org_nm" : "Organisation ID and name"
   },
   "usage" : "cms_patient_experience\n\ncms_patient_care",
   "reference" : "cms_patient_experience %>%\n  dplyr::distinct(measure_cd, measure_title)\n\ncms_patient_experience %>%\n  pivot_wider(\n    id_cols = starts_with(\"org\"),\n    names_from = measure_cd,\n    values_from = prf_rate\n )\n\ncms_patient_care %>%\n  pivot_wider(\n    names_from = type,\n    values_from = score\n  )\n\ncms_patient_care %>%\n  pivot_wider(\n    names_from = measure_abbr,\n    values_from = score\n  )\n\ncms_patient_care %>%\n  pivot_wider(\n    names_from = c(measure_abbr, type),\n    values_from = score\n  )",
   "title" : "Data from the Centers for Medicare & Medicaid Services",
   "description" : "Description\nTwo datasets from public data provided the Centers for Medicare & Medicaid\nServices, https://data.cms.gov.\ncms_patient_experience contains some lightly cleaned data from\n\"Hospice - Provider Data\", which provides a list of hospice agencies\nalong with some data on quality of patient care,\nhttps://data.cms.gov/provider-data/dataset/252m-zfp9.\n\n\n cms_patient_care \"Doctors and Clinicians Quality Payment Program PY 2020\nVirtual Group Public Reporting\",\nhttps://data.cms.gov/provider-data/dataset/8c70-d353"
}

var cms_patient_care = [
   [
      "ccn",
      "facility_name",
      "measure_abbr",
      "score",
      "type"
   ],
   [
      "011500",
      "BAPTIST HOSPICE",
      "beliefs_addressed",
      "202",
      "denominator"
   ],
   [
      "011500",
      "BAPTIST HOSPICE",
      "beliefs_addressed",
      "100",
      "observed"
   ],
   [
      "011500",
      "BAPTIST HOSPICE",
      "composite_process",
      "202",
      "denominator"
   ],
   [
      "011500",
      "BAPTIST HOSPICE",
      "composite_process",
      "88.1",
      "observed"
   ],
   [
      "011500",
      "BAPTIST HOSPICE",
      "dyspena_treatment",
      "110",
      "denominator"
   ],
   [
      "011500",
      "BAPTIST HOSPICE",
      "dyspena_treatment",
      "99.1",
      "observed"
   ],
   [
      "011500",
      "BAPTIST HOSPICE",
      "dyspnea_screening",
      "202",
      "denominator"
   ],
   [
      "011500",
      "BAPTIST HOSPICE",
      "dyspnea_screening",
      "100",
      "observed"
   ],
   [
      "011500",
      "BAPTIST HOSPICE",
      "opioid_bowel",
      "61",
      "denominator"
   ],
   [
      "011500",
      "BAPTIST HOSPICE",
      "opioid_bowel",
      "100",
      "observed"
   ],
   [
      "011500",
      "BAPTIST HOSPICE",
      "pain_assessment",
      "107",
      "denominator"
   ],
   [
      "011500",
      "BAPTIST HOSPICE",
      "pain_assessment",
      "100",
      "observed"
   ],
   [
      "011500",
      "BAPTIST HOSPICE",
      "pain_screening",
      "202",
      "denominator"
   ],
   [
      "011500",
      "BAPTIST HOSPICE",
      "pain_screening",
      "88.6",
      "observed"
   ],
   [
      "011500",
      "BAPTIST HOSPICE",
      "treat_pref",
      "202",
      "denominator"
   ],
   [
      "011500",
      "BAPTIST HOSPICE",
      "treat_pref",
      "100",
      "observed"
   ],
   [
      "011500",
      "BAPTIST HOSPICE",
      "visits_imminent",
      "232",
      "denominator"
   ],
   [
      "011500",
      "BAPTIST HOSPICE",
      "visits_imminent",
      "96.1",
      "observed"
   ],
   [
      "011501",
      "SOUTHERNCARE NEW BEACON N. BIRMINGHAM",
      "beliefs_addressed",
      "525",
      "denominator"
   ],
   [
      "011501",
      "SOUTHERNCARE NEW BEACON N. BIRMINGHAM",
      "beliefs_addressed",
      "100",
      "observed"
   ],
   [
      "011501",
      "SOUTHERNCARE NEW BEACON N. BIRMINGHAM",
      "composite_process",
      "525",
      "denominator"
   ],
   [
      "011501",
      "SOUTHERNCARE NEW BEACON N. BIRMINGHAM",
      "composite_process",
      "100",
      "observed"
   ],
   [
      "011501",
      "SOUTHERNCARE NEW BEACON N. BIRMINGHAM",
      "dyspena_treatment",
      "438",
      "denominator"
   ],
   [
      "011501",
      "SOUTHERNCARE NEW BEACON N. BIRMINGHAM",
      "dyspena_treatment",
      "100",
      "observed"
   ],
   [
      "011501",
      "SOUTHERNCARE NEW BEACON N. BIRMINGHAM",
      "dyspnea_screening",
      "525",
      "denominator"
   ],
   [
      "011501",
      "SOUTHERNCARE NEW BEACON N. BIRMINGHAM",
      "dyspnea_screening",
      "100",
      "observed"
   ],
   [
      "011501",
      "SOUTHERNCARE NEW BEACON N. BIRMINGHAM",
      "opioid_bowel",
      "101",
      "denominator"
   ],
   [
      "011501",
      "SOUTHERNCARE NEW BEACON N. BIRMINGHAM",
      "opioid_bowel",
      "100",
      "observed"
   ],
   [
      "011501",
      "SOUTHERNCARE NEW BEACON N. BIRMINGHAM",
      "pain_assessment",
      "325",
      "denominator"
   ],
   [
      "011501",
      "SOUTHERNCARE NEW BEACON N. BIRMINGHAM",
      "pain_assessment",
      "100",
      "observed"
   ],
   [
      "011501",
      "SOUTHERNCARE NEW BEACON N. BIRMINGHAM",
      "pain_screening",
      "525",
      "denominator"
   ],
   [
      "011501",
      "SOUTHERNCARE NEW BEACON N. BIRMINGHAM",
      "pain_screening",
      "100",
      "observed"
   ],
   [
      "011501",
      "SOUTHERNCARE NEW BEACON N. BIRMINGHAM",
      "treat_pref",
      "525",
      "denominator"
   ],
   [
      "011501",
      "SOUTHERNCARE NEW BEACON N. BIRMINGHAM",
      "treat_pref",
      "100",
      "observed"
   ],
   [
      "011501",
      "SOUTHERNCARE NEW BEACON N. BIRMINGHAM",
      "visits_imminent",
      "586",
      "denominator"
   ],
   [
      "011501",
      "SOUTHERNCARE NEW BEACON N. BIRMINGHAM",
      "visits_imminent",
      "95.2",
      "observed"
   ],
   [
      "011502",
      "COMFORT CARE COASTAL HOSPICE - BALDWIN",
      "beliefs_addressed",
      "295",
      "denominator"
   ],
   [
      "011502",
      "COMFORT CARE COASTAL HOSPICE - BALDWIN",
      "beliefs_addressed",
      "100",
      "observed"
   ],
   [
      "011502",
      "COMFORT CARE COASTAL HOSPICE - BALDWIN",
      "composite_process",
      "295",
      "denominator"
   ],
   [
      "011502",
      "COMFORT CARE COASTAL HOSPICE - BALDWIN",
      "composite_process",
      "99.3",
      "observed"
   ],
   [
      "011502",
      "COMFORT CARE COASTAL HOSPICE - BALDWIN",
      "dyspena_treatment",
      "236",
      "denominator"
   ],
   [
      "011502",
      "COMFORT CARE COASTAL HOSPICE - BALDWIN",
      "dyspena_treatment",
      "99.2",
      "observed"
   ],
   [
      "011502",
      "COMFORT CARE COASTAL HOSPICE - BALDWIN",
      "dyspnea_screening",
      "295",
      "denominator"
   ],
   [
      "011502",
      "COMFORT CARE COASTAL HOSPICE - BALDWIN",
      "dyspnea_screening",
      "100",
      "observed"
   ],
   [
      "011502",
      "COMFORT CARE COASTAL HOSPICE - BALDWIN",
      "opioid_bowel",
      "38",
      "denominator"
   ],
   [
      "011502",
      "COMFORT CARE COASTAL HOSPICE - BALDWIN",
      "opioid_bowel",
      "100",
      "observed"
   ],
   [
      "011502",
      "COMFORT CARE COASTAL HOSPICE - BALDWIN",
      "pain_assessment",
      "121",
      "denominator"
   ],
   [
      "011502",
      "COMFORT CARE COASTAL HOSPICE - BALDWIN",
      "pain_assessment",
      "100",
      "observed"
   ],
   [
      "011502",
      "COMFORT CARE COASTAL HOSPICE - BALDWIN",
      "pain_screening",
      "295",
      "denominator"
   ],
   [
      "011502",
      "COMFORT CARE COASTAL HOSPICE - BALDWIN",
      "pain_screening",
      "100",
      "observed"
   ],
   [
      "011502",
      "COMFORT CARE COASTAL HOSPICE - BALDWIN",
      "treat_pref",
      "295",
      "denominator"
   ],
   [
      "011502",
      "COMFORT CARE COASTAL HOSPICE - BALDWIN",
      "treat_pref",
      "100",
      "observed"
   ],
   [
      "011502",
      "COMFORT CARE COASTAL HOSPICE - BALDWIN",
      "visits_imminent",
      "390",
      "denominator"
   ],
   [
      "011502",
      "COMFORT CARE COASTAL HOSPICE - BALDWIN",
      "visits_imminent",
      "99.7",
      "observed"
   ],
   [
      "011503",
      "SAAD HOSPICE SERVICES",
      "beliefs_addressed",
      "694",
      "denominator"
   ],
   [
      "011503",
      "SAAD HOSPICE SERVICES",
      "beliefs_addressed",
      "99.9",
      "observed"
   ],
   [
      "011503",
      "SAAD HOSPICE SERVICES",
      "composite_process",
      "694",
      "denominator"
   ],
   [
      "011503",
      "SAAD HOSPICE SERVICES",
      "composite_process",
      "96",
      "observed"
   ],
   [
      "011503",
      "SAAD HOSPICE SERVICES",
      "dyspena_treatment",
      "555",
      "denominator"
   ],
   [
      "011503",
      "SAAD HOSPICE SERVICES",
      "dyspena_treatment",
      "99.6",
      "observed"
   ],
   [
      "011503",
      "SAAD HOSPICE SERVICES",
      "dyspnea_screening",
      "694",
      "denominator"
   ],
   [
      "011503",
      "SAAD HOSPICE SERVICES",
      "dyspnea_screening",
      "98.3",
      "observed"
   ],
   [
      "011503",
      "SAAD HOSPICE SERVICES",
      "opioid_bowel",
      "37",
      "denominator"
   ],
   [
      "011503",
      "SAAD HOSPICE SERVICES",
      "opioid_bowel",
      "100",
      "observed"
   ],
   [
      "011503",
      "SAAD HOSPICE SERVICES",
      "pain_assessment",
      "677",
      "denominator"
   ],
   [
      "011503",
      "SAAD HOSPICE SERVICES",
      "pain_assessment",
      "99",
      "observed"
   ],
   [
      "011503",
      "SAAD HOSPICE SERVICES",
      "pain_screening",
      "694",
      "denominator"
   ],
   [
      "011503",
      "SAAD HOSPICE SERVICES",
      "pain_screening",
      "98.7",
      "observed"
   ],
   [
      "011503",
      "SAAD HOSPICE SERVICES",
      "treat_pref",
      "694",
      "denominator"
   ],
   [
      "011503",
      "SAAD HOSPICE SERVICES",
      "treat_pref",
      "100",
      "observed"
   ],
   [
      "011503",
      "SAAD HOSPICE SERVICES",
      "visits_imminent",
      "151",
      "denominator"
   ],
   [
      "011503",
      "SAAD HOSPICE SERVICES",
      "visits_imminent",
      "49.7",
      "observed"
   ],
   [
      "011505",
      "HOSPICE FAMILY CARE",
      "beliefs_addressed",
      "600",
      "denominator"
   ],
   [
      "011505",
      "HOSPICE FAMILY CARE",
      "beliefs_addressed",
      "97.8",
      "observed"
   ],
   [
      "011505",
      "HOSPICE FAMILY CARE",
      "composite_process",
      "600",
      "denominator"
   ],
   [
      "011505",
      "HOSPICE FAMILY CARE",
      "composite_process",
      "92",
      "observed"
   ],
   [
      "011505",
      "HOSPICE FAMILY CARE",
      "dyspena_treatment",
      "308",
      "denominator"
   ],
   [
      "011505",
      "HOSPICE FAMILY CARE",
      "dyspena_treatment",
      "97.7",
      "observed"
   ],
   [
      "011505",
      "HOSPICE FAMILY CARE",
      "dyspnea_screening",
      "600",
      "denominator"
   ],
   [
      "011505",
      "HOSPICE FAMILY CARE",
      "dyspnea_screening",
      "99.8",
      "observed"
   ],
   [
      "011505",
      "HOSPICE FAMILY CARE",
      "opioid_bowel",
      "151",
      "denominator"
   ],
   [
      "011505",
      "HOSPICE FAMILY CARE",
      "opioid_bowel",
      "98.7",
      "observed"
   ],
   [
      "011505",
      "HOSPICE FAMILY CARE",
      "pain_assessment",
      "308",
      "denominator"
   ],
   [
      "011505",
      "HOSPICE FAMILY CARE",
      "pain_assessment",
      "92.5",
      "observed"
   ],
   [
      "011505",
      "HOSPICE FAMILY CARE",
      "pain_screening",
      "600",
      "denominator"
   ],
   [
      "011505",
      "HOSPICE FAMILY CARE",
      "pain_screening",
      "99",
      "observed"
   ],
   [
      "011505",
      "HOSPICE FAMILY CARE",
      "treat_pref",
      "600",
      "denominator"
   ],
   [
      "011505",
      "HOSPICE FAMILY CARE",
      "treat_pref",
      "100",
      "observed"
   ],
   [
      "011505",
      "HOSPICE FAMILY CARE",
      "visits_imminent",
      "288",
      "denominator"
   ],
   [
      "011505",
      "HOSPICE FAMILY CARE",
      "visits_imminent",
      "86.8",
      "observed"
   ],
   [
      "011506",
      "SOUTHERNCARE NEW BEACON - JASPER",
      "beliefs_addressed",
      "589",
      "denominator"
   ],
   [
      "011506",
      "SOUTHERNCARE NEW BEACON - JASPER",
      "beliefs_addressed",
      "100",
      "observed"
   ],
   [
      "011506",
      "SOUTHERNCARE NEW BEACON - JASPER",
      "composite_process",
      "589",
      "denominator"
   ],
   [
      "011506",
      "SOUTHERNCARE NEW BEACON - JASPER",
      "composite_process",
      "99.7",
      "observed"
   ],
   [
      "011506",
      "SOUTHERNCARE NEW BEACON - JASPER",
      "dyspena_treatment",
      "477",
      "denominator"
   ],
   [
      "011506",
      "SOUTHERNCARE NEW BEACON - JASPER",
      "dyspena_treatment",
      "100",
      "observed"
   ],
   [
      "011506",
      "SOUTHERNCARE NEW BEACON - JASPER",
      "dyspnea_screening",
      "589",
      "denominator"
   ],
   [
      "011506",
      "SOUTHERNCARE NEW BEACON - JASPER",
      "dyspnea_screening",
      "100",
      "observed"
   ],
   [
      "011506",
      "SOUTHERNCARE NEW BEACON - JASPER",
      "opioid_bowel",
      "140",
      "denominator"
   ],
   [
      "011506",
      "SOUTHERNCARE NEW BEACON - JASPER",
      "opioid_bowel",
      "100",
      "observed"
   ],
   [
      "011506",
      "SOUTHERNCARE NEW BEACON - JASPER",
      "pain_assessment",
      "415",
      "denominator"
   ],
   [
      "011506",
      "SOUTHERNCARE NEW BEACON - JASPER",
      "pain_assessment",
      "99.8",
      "observed"
   ],
   [
      "011506",
      "SOUTHERNCARE NEW BEACON - JASPER",
      "pain_screening",
      "589",
      "denominator"
   ],
   [
      "011506",
      "SOUTHERNCARE NEW BEACON - JASPER",
      "pain_screening",
      "99.8",
      "observed"
   ],
   [
      "011506",
      "SOUTHERNCARE NEW BEACON - JASPER",
      "treat_pref",
      "589",
      "denominator"
   ],
   [
      "011506",
      "SOUTHERNCARE NEW BEACON - JASPER",
      "treat_pref",
      "100",
      "observed"
   ],
   [
      "011506",
      "SOUTHERNCARE NEW BEACON - JASPER",
      "visits_imminent",
      "531",
      "denominator"
   ],
   [
      "011506",
      "SOUTHERNCARE NEW BEACON - JASPER",
      "visits_imminent",
      "93.6",
      "observed"
   ],
   [
      "011508",
      "SOUTHERNCARE NEW BEACON OF ANNISTON",
      "beliefs_addressed",
      "420",
      "denominator"
   ],
   [
      "011508",
      "SOUTHERNCARE NEW BEACON OF ANNISTON",
      "beliefs_addressed",
      "100",
      "observed"
   ],
   [
      "011508",
      "SOUTHERNCARE NEW BEACON OF ANNISTON",
      "composite_process",
      "420",
      "denominator"
   ],
   [
      "011508",
      "SOUTHERNCARE NEW BEACON OF ANNISTON",
      "composite_process",
      "99.5",
      "observed"
   ],
   [
      "011508",
      "SOUTHERNCARE NEW BEACON OF ANNISTON",
      "dyspena_treatment",
      "347",
      "denominator"
   ],
   [
      "011508",
      "SOUTHERNCARE NEW BEACON OF ANNISTON",
      "dyspena_treatment",
      "100",
      "observed"
   ],
   [
      "011508",
      "SOUTHERNCARE NEW BEACON OF ANNISTON",
      "dyspnea_screening",
      "420",
      "denominator"
   ],
   [
      "011508",
      "SOUTHERNCARE NEW BEACON OF ANNISTON",
      "dyspnea_screening",
      "100",
      "observed"
   ],
   [
      "011508",
      "SOUTHERNCARE NEW BEACON OF ANNISTON",
      "opioid_bowel",
      "123",
      "denominator"
   ],
   [
      "011508",
      "SOUTHERNCARE NEW BEACON OF ANNISTON",
      "opioid_bowel",
      "100",
      "observed"
   ],
   [
      "011508",
      "SOUTHERNCARE NEW BEACON OF ANNISTON",
      "pain_assessment",
      "254",
      "denominator"
   ],
   [
      "011508",
      "SOUTHERNCARE NEW BEACON OF ANNISTON",
      "pain_assessment",
      "99.6",
      "observed"
   ],
   [
      "011508",
      "SOUTHERNCARE NEW BEACON OF ANNISTON",
      "pain_screening",
      "420",
      "denominator"
   ],
   [
      "011508",
      "SOUTHERNCARE NEW BEACON OF ANNISTON",
      "pain_screening",
      "99.8",
      "observed"
   ],
   [
      "011508",
      "SOUTHERNCARE NEW BEACON OF ANNISTON",
      "treat_pref",
      "420",
      "denominator"
   ],
   [
      "011508",
      "SOUTHERNCARE NEW BEACON OF ANNISTON",
      "treat_pref",
      "100",
      "observed"
   ],
   [
      "011508",
      "SOUTHERNCARE NEW BEACON OF ANNISTON",
      "visits_imminent",
      "387",
      "denominator"
   ],
   [
      "011508",
      "SOUTHERNCARE NEW BEACON OF ANNISTON",
      "visits_imminent",
      "94.3",
      "observed"
   ],
   [
      "011510",
      "CULLMAN REGIONAL HOSPICE",
      "beliefs_addressed",
      "54",
      "denominator"
   ],
   [
      "011510",
      "CULLMAN REGIONAL HOSPICE",
      "beliefs_addressed",
      "100",
      "observed"
   ],
   [
      "011510",
      "CULLMAN REGIONAL HOSPICE",
      "composite_process",
      "54",
      "denominator"
   ],
   [
      "011510",
      "CULLMAN REGIONAL HOSPICE",
      "composite_process",
      "90.7",
      "observed"
   ],
   [
      "011510",
      "CULLMAN REGIONAL HOSPICE",
      "dyspena_treatment",
      "27",
      "denominator"
   ],
   [
      "011510",
      "CULLMAN REGIONAL HOSPICE",
      "dyspena_treatment",
      "100",
      "observed"
   ],
   [
      "011510",
      "CULLMAN REGIONAL HOSPICE",
      "dyspnea_screening",
      "54",
      "denominator"
   ],
   [
      "011510",
      "CULLMAN REGIONAL HOSPICE",
      "dyspnea_screening",
      "100",
      "observed"
   ],
   [
      "011510",
      "CULLMAN REGIONAL HOSPICE",
      "opioid_bowel",
      "16",
      "denominator"
   ],
   [
      "011510",
      "CULLMAN REGIONAL HOSPICE",
      "opioid_bowel",
      "",
      "observed"
   ],
   [
      "011510",
      "CULLMAN REGIONAL HOSPICE",
      "pain_assessment",
      "24",
      "denominator"
   ],
   [
      "011510",
      "CULLMAN REGIONAL HOSPICE",
      "pain_assessment",
      "100",
      "observed"
   ],
   [
      "011510",
      "CULLMAN REGIONAL HOSPICE",
      "pain_screening",
      "54",
      "denominator"
   ],
   [
      "011510",
      "CULLMAN REGIONAL HOSPICE",
      "pain_screening",
      "94.4",
      "observed"
   ],
   [
      "011510",
      "CULLMAN REGIONAL HOSPICE",
      "treat_pref",
      "54",
      "denominator"
   ],
   [
      "011510",
      "CULLMAN REGIONAL HOSPICE",
      "treat_pref",
      "100",
      "observed"
   ],
   [
      "011510",
      "CULLMAN REGIONAL HOSPICE",
      "visits_imminent",
      "51",
      "denominator"
   ],
   [
      "011510",
      "CULLMAN REGIONAL HOSPICE",
      "visits_imminent",
      "96.1",
      "observed"
   ],
   [
      "011511",
      "HOSPICE OF THE VALLEY, INC",
      "beliefs_addressed",
      "179",
      "denominator"
   ],
   [
      "011511",
      "HOSPICE OF THE VALLEY, INC",
      "beliefs_addressed",
      "100",
      "observed"
   ],
   [
      "011511",
      "HOSPICE OF THE VALLEY, INC",
      "composite_process",
      "179",
      "denominator"
   ],
   [
      "011511",
      "HOSPICE OF THE VALLEY, INC",
      "composite_process",
      "99.4",
      "observed"
   ],
   [
      "011511",
      "HOSPICE OF THE VALLEY, INC",
      "dyspena_treatment",
      "123",
      "denominator"
   ],
   [
      "011511",
      "HOSPICE OF THE VALLEY, INC",
      "dyspena_treatment",
      "99.2",
      "observed"
   ],
   [
      "011511",
      "HOSPICE OF THE VALLEY, INC",
      "dyspnea_screening",
      "179",
      "denominator"
   ],
   [
      "011511",
      "HOSPICE OF THE VALLEY, INC",
      "dyspnea_screening",
      "100",
      "observed"
   ],
   [
      "011511",
      "HOSPICE OF THE VALLEY, INC",
      "opioid_bowel",
      "22",
      "denominator"
   ],
   [
      "011511",
      "HOSPICE OF THE VALLEY, INC",
      "opioid_bowel",
      "100",
      "observed"
   ],
   [
      "011511",
      "HOSPICE OF THE VALLEY, INC",
      "pain_assessment",
      "81",
      "denominator"
   ],
   [
      "011511",
      "HOSPICE OF THE VALLEY, INC",
      "pain_assessment",
      "100",
      "observed"
   ],
   [
      "011511",
      "HOSPICE OF THE VALLEY, INC",
      "pain_screening",
      "179",
      "denominator"
   ],
   [
      "011511",
      "HOSPICE OF THE VALLEY, INC",
      "pain_screening",
      "100",
      "observed"
   ],
   [
      "011511",
      "HOSPICE OF THE VALLEY, INC",
      "treat_pref",
      "179",
      "denominator"
   ],
   [
      "011511",
      "HOSPICE OF THE VALLEY, INC",
      "treat_pref",
      "100",
      "observed"
   ],
   [
      "011511",
      "HOSPICE OF THE VALLEY, INC",
      "visits_imminent",
      "257",
      "denominator"
   ],
   [
      "011511",
      "HOSPICE OF THE VALLEY, INC",
      "visits_imminent",
      "91.8",
      "observed"
   ],
   [
      "011512",
      "SOUTHERNCARE NEW BEACON SCOTTSBORO",
      "beliefs_addressed",
      "396",
      "denominator"
   ],
   [
      "011512",
      "SOUTHERNCARE NEW BEACON SCOTTSBORO",
      "beliefs_addressed",
      "100",
      "observed"
   ],
   [
      "011512",
      "SOUTHERNCARE NEW BEACON SCOTTSBORO",
      "composite_process",
      "396",
      "denominator"
   ],
   [
      "011512",
      "SOUTHERNCARE NEW BEACON SCOTTSBORO",
      "composite_process",
      "99.5",
      "observed"
   ],
   [
      "011512",
      "SOUTHERNCARE NEW BEACON SCOTTSBORO",
      "dyspena_treatment",
      "241",
      "denominator"
   ],
   [
      "011512",
      "SOUTHERNCARE NEW BEACON SCOTTSBORO",
      "dyspena_treatment",
      "100",
      "observed"
   ],
   [
      "011512",
      "SOUTHERNCARE NEW BEACON SCOTTSBORO",
      "dyspnea_screening",
      "396",
      "denominator"
   ],
   [
      "011512",
      "SOUTHERNCARE NEW BEACON SCOTTSBORO",
      "dyspnea_screening",
      "100",
      "observed"
   ],
   [
      "011512",
      "SOUTHERNCARE NEW BEACON SCOTTSBORO",
      "opioid_bowel",
      "109",
      "denominator"
   ],
   [
      "011512",
      "SOUTHERNCARE NEW BEACON SCOTTSBORO",
      "opioid_bowel",
      "100",
      "observed"
   ],
   [
      "011512",
      "SOUTHERNCARE NEW BEACON SCOTTSBORO",
      "pain_assessment",
      "237",
      "denominator"
   ],
   [
      "011512",
      "SOUTHERNCARE NEW BEACON SCOTTSBORO",
      "pain_assessment",
      "100",
      "observed"
   ],
   [
      "011512",
      "SOUTHERNCARE NEW BEACON SCOTTSBORO",
      "pain_screening",
      "396",
      "denominator"
   ],
   [
      "011512",
      "SOUTHERNCARE NEW BEACON SCOTTSBORO",
      "pain_screening",
      "99.5",
      "observed"
   ],
   [
      "011512",
      "SOUTHERNCARE NEW BEACON SCOTTSBORO",
      "treat_pref",
      "396",
      "denominator"
   ],
   [
      "011512",
      "SOUTHERNCARE NEW BEACON SCOTTSBORO",
      "treat_pref",
      "100",
      "observed"
   ],
   [
      "011512",
      "SOUTHERNCARE NEW BEACON SCOTTSBORO",
      "visits_imminent",
      "472",
      "denominator"
   ],
   [
      "011512",
      "SOUTHERNCARE NEW BEACON SCOTTSBORO",
      "visits_imminent",
      "93.6",
      "observed"
   ],
   [
      "011513",
      "SHEPHERD'S COVE HOSPICE",
      "beliefs_addressed",
      "335",
      "denominator"
   ],
   [
      "011513",
      "SHEPHERD'S COVE HOSPICE",
      "beliefs_addressed",
      "99.1",
      "observed"
   ],
   [
      "011513",
      "SHEPHERD'S COVE HOSPICE",
      "composite_process",
      "335",
      "denominator"
   ],
   [
      "011513",
      "SHEPHERD'S COVE HOSPICE",
      "composite_process",
      "87.2",
      "observed"
   ],
   [
      "011513",
      "SHEPHERD'S COVE HOSPICE",
      "dyspena_treatment",
      "154",
      "denominator"
   ],
   [
      "011513",
      "SHEPHERD'S COVE HOSPICE",
      "dyspena_treatment",
      "90.9",
      "observed"
   ],
   [
      "011513",
      "SHEPHERD'S COVE HOSPICE",
      "dyspnea_screening",
      "335",
      "denominator"
   ],
   [
      "011513",
      "SHEPHERD'S COVE HOSPICE",
      "dyspnea_screening",
      "96.1",
      "observed"
   ],
   [
      "011513",
      "SHEPHERD'S COVE HOSPICE",
      "opioid_bowel",
      "63",
      "denominator"
   ],
   [
      "011513",
      "SHEPHERD'S COVE HOSPICE",
      "opioid_bowel",
      "96.8",
      "observed"
   ],
   [
      "011513",
      "SHEPHERD'S COVE HOSPICE",
      "pain_assessment",
      "104",
      "denominator"
   ],
   [
      "011513",
      "SHEPHERD'S COVE HOSPICE",
      "pain_assessment",
      "99",
      "observed"
   ],
   [
      "011513",
      "SHEPHERD'S COVE HOSPICE",
      "pain_screening",
      "335",
      "denominator"
   ],
   [
      "011513",
      "SHEPHERD'S COVE HOSPICE",
      "pain_screening",
      "93.1",
      "observed"
   ],
   [
      "011513",
      "SHEPHERD'S COVE HOSPICE",
      "treat_pref",
      "335",
      "denominator"
   ],
   [
      "011513",
      "SHEPHERD'S COVE HOSPICE",
      "treat_pref",
      "99.7",
      "observed"
   ],
   [
      "011513",
      "SHEPHERD'S COVE HOSPICE",
      "visits_imminent",
      "222",
      "denominator"
   ],
   [
      "011513",
      "SHEPHERD'S COVE HOSPICE",
      "visits_imminent",
      "85.6",
      "observed"
   ],
   [
      "011514",
      "ST VINCENT'S HOSPICE",
      "beliefs_addressed",
      "210",
      "denominator"
   ],
   [
      "011514",
      "ST VINCENT'S HOSPICE",
      "beliefs_addressed",
      "100",
      "observed"
   ],
   [
      "011514",
      "ST VINCENT'S HOSPICE",
      "composite_process",
      "210",
      "denominator"
   ],
   [
      "011514",
      "ST VINCENT'S HOSPICE",
      "composite_process",
      "97.6",
      "observed"
   ],
   [
      "011514",
      "ST VINCENT'S HOSPICE",
      "dyspena_treatment",
      "137",
      "denominator"
   ],
   [
      "011514",
      "ST VINCENT'S HOSPICE",
      "dyspena_treatment",
      "100",
      "observed"
   ],
   [
      "011514",
      "ST VINCENT'S HOSPICE",
      "dyspnea_screening",
      "210",
      "denominator"
   ],
   [
      "011514",
      "ST VINCENT'S HOSPICE",
      "dyspnea_screening",
      "100",
      "observed"
   ],
   [
      "011514",
      "ST VINCENT'S HOSPICE",
      "opioid_bowel",
      "71",
      "denominator"
   ],
   [
      "011514",
      "ST VINCENT'S HOSPICE",
      "opioid_bowel",
      "98.6",
      "observed"
   ],
   [
      "011514",
      "ST VINCENT'S HOSPICE",
      "pain_assessment",
      "84",
      "denominator"
   ],
   [
      "011514",
      "ST VINCENT'S HOSPICE",
      "pain_assessment",
      "100",
      "observed"
   ],
   [
      "011514",
      "ST VINCENT'S HOSPICE",
      "pain_screening",
      "210",
      "denominator"
   ],
   [
      "011514",
      "ST VINCENT'S HOSPICE",
      "pain_screening",
      "98.6",
      "observed"
   ],
   [
      "011514",
      "ST VINCENT'S HOSPICE",
      "treat_pref",
      "210",
      "denominator"
   ],
   [
      "011514",
      "ST VINCENT'S HOSPICE",
      "treat_pref",
      "99.5",
      "observed"
   ],
   [
      "011514",
      "ST VINCENT'S HOSPICE",
      "visits_imminent",
      "303",
      "denominator"
   ],
   [
      "011514",
      "ST VINCENT'S HOSPICE",
      "visits_imminent",
      "94.7",
      "observed"
   ],
   [
      "011516",
      "HOSPICE OF LIMESTONE COUNTY",
      "beliefs_addressed",
      "103",
      "denominator"
   ],
   [
      "011516",
      "HOSPICE OF LIMESTONE COUNTY",
      "beliefs_addressed",
      "100",
      "observed"
   ],
   [
      "011516",
      "HOSPICE OF LIMESTONE COUNTY",
      "composite_process",
      "103",
      "denominator"
   ],
   [
      "011516",
      "HOSPICE OF LIMESTONE COUNTY",
      "composite_process",
      "97.1",
      "observed"
   ],
   [
      "011516",
      "HOSPICE OF LIMESTONE COUNTY",
      "dyspena_treatment",
      "75",
      "denominator"
   ],
   [
      "011516",
      "HOSPICE OF LIMESTONE COUNTY",
      "dyspena_treatment",
      "98.7",
      "observed"
   ],
   [
      "011516",
      "HOSPICE OF LIMESTONE COUNTY",
      "dyspnea_screening",
      "103",
      "denominator"
   ],
   [
      "011516",
      "HOSPICE OF LIMESTONE COUNTY",
      "dyspnea_screening",
      "98.1",
      "observed"
   ],
   [
      "011516",
      "HOSPICE OF LIMESTONE COUNTY",
      "opioid_bowel",
      "23",
      "denominator"
   ],
   [
      "011516",
      "HOSPICE OF LIMESTONE COUNTY",
      "opioid_bowel",
      "100",
      "observed"
   ],
   [
      "011516",
      "HOSPICE OF LIMESTONE COUNTY",
      "pain_assessment",
      "61",
      "denominator"
   ],
   [
      "011516",
      "HOSPICE OF LIMESTONE COUNTY",
      "pain_assessment",
      "100",
      "observed"
   ],
   [
      "011516",
      "HOSPICE OF LIMESTONE COUNTY",
      "pain_screening",
      "103",
      "denominator"
   ],
   [
      "011516",
      "HOSPICE OF LIMESTONE COUNTY",
      "pain_screening",
      "100",
      "observed"
   ],
   [
      "011516",
      "HOSPICE OF LIMESTONE COUNTY",
      "treat_pref",
      "103",
      "denominator"
   ],
   [
      "011516",
      "HOSPICE OF LIMESTONE COUNTY",
      "treat_pref",
      "100",
      "observed"
   ],
   [
      "011516",
      "HOSPICE OF LIMESTONE COUNTY",
      "visits_imminent",
      "114",
      "denominator"
   ],
   [
      "011516",
      "HOSPICE OF LIMESTONE COUNTY",
      "visits_imminent",
      "98.2",
      "observed"
   ],
   [
      "011517",
      "HOSPICE OF WEST ALABAMA",
      "beliefs_addressed",
      "400",
      "denominator"
   ],
   [
      "011517",
      "HOSPICE OF WEST ALABAMA",
      "beliefs_addressed",
      "99.8",
      "observed"
   ],
   [
      "011517",
      "HOSPICE OF WEST ALABAMA",
      "composite_process",
      "400",
      "denominator"
   ],
   [
      "011517",
      "HOSPICE OF WEST ALABAMA",
      "composite_process",
      "95.8",
      "observed"
   ],
   [
      "011517",
      "HOSPICE OF WEST ALABAMA",
      "dyspena_treatment",
      "182",
      "denominator"
   ],
   [
      "011517",
      "HOSPICE OF WEST ALABAMA",
      "dyspena_treatment",
      "99.5",
      "observed"
   ],
   [
      "011517",
      "HOSPICE OF WEST ALABAMA",
      "dyspnea_screening",
      "400",
      "denominator"
   ],
   [
      "011517",
      "HOSPICE OF WEST ALABAMA",
      "dyspnea_screening",
      "99.8",
      "observed"
   ],
   [
      "011517",
      "HOSPICE OF WEST ALABAMA",
      "opioid_bowel",
      "81",
      "denominator"
   ],
   [
      "011517",
      "HOSPICE OF WEST ALABAMA",
      "opioid_bowel",
      "97.5",
      "observed"
   ],
   [
      "011517",
      "HOSPICE OF WEST ALABAMA",
      "pain_assessment",
      "226",
      "denominator"
   ],
   [
      "011517",
      "HOSPICE OF WEST ALABAMA",
      "pain_assessment",
      "100",
      "observed"
   ],
   [
      "011517",
      "HOSPICE OF WEST ALABAMA",
      "pain_screening",
      "400",
      "denominator"
   ],
   [
      "011517",
      "HOSPICE OF WEST ALABAMA",
      "pain_screening",
      "97",
      "observed"
   ],
   [
      "011517",
      "HOSPICE OF WEST ALABAMA",
      "treat_pref",
      "400",
      "denominator"
   ],
   [
      "011517",
      "HOSPICE OF WEST ALABAMA",
      "treat_pref",
      "100",
      "observed"
   ],
   [
      "011517",
      "HOSPICE OF WEST ALABAMA",
      "visits_imminent",
      "198",
      "denominator"
   ],
   [
      "011517",
      "HOSPICE OF WEST ALABAMA",
      "visits_imminent",
      "98.5",
      "observed"
   ]
]
