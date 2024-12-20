var cms_patient_experienceInfo ={
   "usage" : "cms_patient_experience\n\ncms_patient_care",
   "reference" : "cms_patient_experience %>%\n  dplyr::distinct(measure_cd, measure_title)\n\ncms_patient_experience %>%\n  pivot_wider(\n    id_cols = starts_with(\"org\"),\n    names_from = measure_cd,\n    values_from = prf_rate\n )\n\ncms_patient_care %>%\n  pivot_wider(\n    names_from = type,\n    values_from = score\n  )\n\ncms_patient_care %>%\n  pivot_wider(\n    names_from = measure_abbr,\n    values_from = score\n  )\n\ncms_patient_care %>%\n  pivot_wider(\n    names_from = c(measure_abbr, type),\n    values_from = score\n  )",
   "title" : "Data from the Centers for Medicare & Medicaid Services",
   "description" : "Description\nTwo datasets from public data provided the Centers for Medicare & Medicaid\nServices, https://data.cms.gov.\ncms_patient_experience contains some lightly cleaned data from\n\"Hospice - Provider Data\", which provides a list of hospice agencies\nalong with some data on quality of patient care,\nhttps://data.cms.gov/provider-data/dataset/252m-zfp9.\n\n\n cms_patient_care \"Doctors and Clinicians Quality Payment Program PY 2020\nVirtual Group Public Reporting\",\nhttps://data.cms.gov/provider-data/dataset/8c70-d353",
   "parameters" : {
      "org_pac_id,org_nm" : "Organisation ID and name",
      "prf_rate" : "Measure performance rate",
      "measure_cd,measure_title" : "Measure code and title"
   },
   "format" : "cms_patient_experience is a data frame with 500 observations and\nfive variables:"
}

var cms_patient_experience = [
   [
      "org_pac_id",
      "org_nm",
      "measure_cd",
      "measure_title",
      "prf_rate"
   ],
   [
      "0446157747",
      "USC CARE MEDICAL GROUP INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "63"
   ],
   [
      "0446157747",
      "USC CARE MEDICAL GROUP INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "87"
   ],
   [
      "0446157747",
      "USC CARE MEDICAL GROUP INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "86"
   ],
   [
      "0446157747",
      "USC CARE MEDICAL GROUP INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "57"
   ],
   [
      "0446157747",
      "USC CARE MEDICAL GROUP INC",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      "85"
   ],
   [
      "0446157747",
      "USC CARE MEDICAL GROUP INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "24"
   ],
   [
      "0446162697",
      "ASSOCIATION OF UNIVERSITY PHYSICIANS",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "59"
   ],
   [
      "0446162697",
      "ASSOCIATION OF UNIVERSITY PHYSICIANS",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "85"
   ],
   [
      "0446162697",
      "ASSOCIATION OF UNIVERSITY PHYSICIANS",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "83"
   ],
   [
      "0446162697",
      "ASSOCIATION OF UNIVERSITY PHYSICIANS",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "63"
   ],
   [
      "0446162697",
      "ASSOCIATION OF UNIVERSITY PHYSICIANS",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      "88"
   ],
   [
      "0446162697",
      "ASSOCIATION OF UNIVERSITY PHYSICIANS",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "22"
   ],
   [
      "0547164295",
      "BEAVER MEDICAL GROUP PC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "49"
   ],
   [
      "0547164295",
      "BEAVER MEDICAL GROUP PC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "0547164295",
      "BEAVER MEDICAL GROUP PC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "75"
   ],
   [
      "0547164295",
      "BEAVER MEDICAL GROUP PC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "44"
   ],
   [
      "0547164295",
      "BEAVER MEDICAL GROUP PC",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      "73"
   ],
   [
      "0547164295",
      "BEAVER MEDICAL GROUP PC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "12"
   ],
   [
      "0749333730",
      "CAPE PHYSICIANS ASSOCIATES PA",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "67"
   ],
   [
      "0749333730",
      "CAPE PHYSICIANS ASSOCIATES PA",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "84"
   ],
   [
      "0749333730",
      "CAPE PHYSICIANS ASSOCIATES PA",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "85"
   ],
   [
      "0749333730",
      "CAPE PHYSICIANS ASSOCIATES PA",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "65"
   ],
   [
      "0749333730",
      "CAPE PHYSICIANS ASSOCIATES PA",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      "82"
   ],
   [
      "0749333730",
      "CAPE PHYSICIANS ASSOCIATES PA",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "24"
   ],
   [
      "0840104360",
      "ALLIANCE PHYSICIANS INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "66"
   ],
   [
      "0840104360",
      "ALLIANCE PHYSICIANS INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "87"
   ],
   [
      "0840104360",
      "ALLIANCE PHYSICIANS INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "87"
   ],
   [
      "0840104360",
      "ALLIANCE PHYSICIANS INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "64"
   ],
   [
      "0840104360",
      "ALLIANCE PHYSICIANS INC",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      "87"
   ],
   [
      "0840104360",
      "ALLIANCE PHYSICIANS INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "28"
   ],
   [
      "0840109864",
      "REX HOSPITAL INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "73"
   ],
   [
      "0840109864",
      "REX HOSPITAL INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "87"
   ],
   [
      "0840109864",
      "REX HOSPITAL INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "84"
   ],
   [
      "0840109864",
      "REX HOSPITAL INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "67"
   ],
   [
      "0840109864",
      "REX HOSPITAL INC",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      "91"
   ],
   [
      "0840109864",
      "REX HOSPITAL INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "30"
   ],
   [
      "0840513552",
      "SCL HEALTH MEDICAL GROUP DENVER LLC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "58"
   ],
   [
      "0840513552",
      "SCL HEALTH MEDICAL GROUP DENVER LLC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "83"
   ],
   [
      "0840513552",
      "SCL HEALTH MEDICAL GROUP DENVER LLC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "76"
   ],
   [
      "0840513552",
      "SCL HEALTH MEDICAL GROUP DENVER LLC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "58"
   ],
   [
      "0840513552",
      "SCL HEALTH MEDICAL GROUP DENVER LLC",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      "78"
   ],
   [
      "0840513552",
      "SCL HEALTH MEDICAL GROUP DENVER LLC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "26"
   ],
   [
      "0941545784",
      "GRITMAN MEDICAL CENTER INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "46"
   ],
   [
      "0941545784",
      "GRITMAN MEDICAL CENTER INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "86"
   ],
   [
      "0941545784",
      "GRITMAN MEDICAL CENTER INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "81"
   ],
   [
      "0941545784",
      "GRITMAN MEDICAL CENTER INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "54"
   ],
   [
      "0941545784",
      "GRITMAN MEDICAL CENTER INC",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      ""
   ],
   [
      "0941545784",
      "GRITMAN MEDICAL CENTER INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "25"
   ],
   [
      "1052612785",
      "COMMUNITY MEDICAL GROUP LLC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "65"
   ],
   [
      "1052612785",
      "COMMUNITY MEDICAL GROUP LLC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "84"
   ],
   [
      "1052612785",
      "COMMUNITY MEDICAL GROUP LLC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "80"
   ],
   [
      "1052612785",
      "COMMUNITY MEDICAL GROUP LLC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "58"
   ],
   [
      "1052612785",
      "COMMUNITY MEDICAL GROUP LLC",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      "87"
   ],
   [
      "1052612785",
      "COMMUNITY MEDICAL GROUP LLC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "29"
   ],
   [
      "1254237779",
      "OUR LADY OF LOURDES MEMORIAL HOSPITAL, INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "61"
   ],
   [
      "1254237779",
      "OUR LADY OF LOURDES MEMORIAL HOSPITAL, INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "1254237779",
      "OUR LADY OF LOURDES MEMORIAL HOSPITAL, INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      ""
   ],
   [
      "1254237779",
      "OUR LADY OF LOURDES MEMORIAL HOSPITAL, INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "65"
   ],
   [
      "1254237779",
      "OUR LADY OF LOURDES MEMORIAL HOSPITAL, INC",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      ""
   ],
   [
      "1254237779",
      "OUR LADY OF LOURDES MEMORIAL HOSPITAL, INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "17"
   ],
   [
      "1557267069",
      "ST MARYS HOSPITAL AND MEDICAL CENTER INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      ""
   ],
   [
      "1557267069",
      "ST MARYS HOSPITAL AND MEDICAL CENTER INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "1557267069",
      "ST MARYS HOSPITAL AND MEDICAL CENTER INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      ""
   ],
   [
      "1557267069",
      "ST MARYS HOSPITAL AND MEDICAL CENTER INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      ""
   ],
   [
      "1557267069",
      "ST MARYS HOSPITAL AND MEDICAL CENTER INC",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      ""
   ],
   [
      "1557267069",
      "ST MARYS HOSPITAL AND MEDICAL CENTER INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      ""
   ],
   [
      "1759293111",
      "ALBANY MEDICAL COLLEGE",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "65"
   ],
   [
      "1759293111",
      "ALBANY MEDICAL COLLEGE",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "86"
   ],
   [
      "1759293111",
      "ALBANY MEDICAL COLLEGE",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "81"
   ],
   [
      "1759293111",
      "ALBANY MEDICAL COLLEGE",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "62"
   ],
   [
      "1759293111",
      "ALBANY MEDICAL COLLEGE",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      "76"
   ],
   [
      "1759293111",
      "ALBANY MEDICAL COLLEGE",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "17"
   ],
   [
      "1759293954",
      "GROUP HEALTH PLAN INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "60"
   ],
   [
      "1759293954",
      "GROUP HEALTH PLAN INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "89"
   ],
   [
      "1759293954",
      "GROUP HEALTH PLAN INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "86"
   ],
   [
      "1759293954",
      "GROUP HEALTH PLAN INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "58"
   ],
   [
      "1759293954",
      "GROUP HEALTH PLAN INC",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      "88"
   ],
   [
      "1759293954",
      "GROUP HEALTH PLAN INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "13"
   ],
   [
      "1759392079",
      "OHH PHYSICIANS LLC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "75"
   ],
   [
      "1759392079",
      "OHH PHYSICIANS LLC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "1759392079",
      "OHH PHYSICIANS LLC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "86"
   ],
   [
      "1759392079",
      "OHH PHYSICIANS LLC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "55"
   ],
   [
      "1759392079",
      "OHH PHYSICIANS LLC",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      "89"
   ],
   [
      "1759392079",
      "OHH PHYSICIANS LLC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "19"
   ],
   [
      "2163417478",
      "UNITED REGIONAL PHYSICIAN GROUP",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "63"
   ],
   [
      "2163417478",
      "UNITED REGIONAL PHYSICIAN GROUP",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "2163417478",
      "UNITED REGIONAL PHYSICIAN GROUP",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "76"
   ],
   [
      "2163417478",
      "UNITED REGIONAL PHYSICIAN GROUP",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "60"
   ],
   [
      "2163417478",
      "UNITED REGIONAL PHYSICIAN GROUP",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      "84"
   ],
   [
      "2163417478",
      "UNITED REGIONAL PHYSICIAN GROUP",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "20"
   ],
   [
      "2264345206",
      "MARSHFIELD CLINIC INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "56"
   ],
   [
      "2264345206",
      "MARSHFIELD CLINIC INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "83"
   ],
   [
      "2264345206",
      "MARSHFIELD CLINIC INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "80"
   ],
   [
      "2264345206",
      "MARSHFIELD CLINIC INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "65"
   ],
   [
      "2264345206",
      "MARSHFIELD CLINIC INC",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      "81"
   ],
   [
      "2264345206",
      "MARSHFIELD CLINIC INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "17"
   ],
   [
      "2365352820",
      "SIU PHYSICIANS AND SURGEONS INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      ""
   ],
   [
      "2365352820",
      "SIU PHYSICIANS AND SURGEONS INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "2365352820",
      "SIU PHYSICIANS AND SURGEONS INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "85"
   ],
   [
      "2365352820",
      "SIU PHYSICIANS AND SURGEONS INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "60"
   ],
   [
      "2365352820",
      "SIU PHYSICIANS AND SURGEONS INC",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      "81"
   ],
   [
      "2365352820",
      "SIU PHYSICIANS AND SURGEONS INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "24"
   ],
   [
      "2466351481",
      "CHRISTIANA CARE HEALTH INITIATIVES",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "68"
   ],
   [
      "2466351481",
      "CHRISTIANA CARE HEALTH INITIATIVES",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "2466351481",
      "CHRISTIANA CARE HEALTH INITIATIVES",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "86"
   ],
   [
      "2466351481",
      "CHRISTIANA CARE HEALTH INITIATIVES",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "74"
   ],
   [
      "2466351481",
      "CHRISTIANA CARE HEALTH INITIATIVES",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      ""
   ],
   [
      "2466351481",
      "CHRISTIANA CARE HEALTH INITIATIVES",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      ""
   ],
   [
      "2466356209",
      "HARBOR MEDICAL ASSOCIATES INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "57"
   ],
   [
      "2466356209",
      "HARBOR MEDICAL ASSOCIATES INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "87"
   ],
   [
      "2466356209",
      "HARBOR MEDICAL ASSOCIATES INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "85"
   ],
   [
      "2466356209",
      "HARBOR MEDICAL ASSOCIATES INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "67"
   ],
   [
      "2466356209",
      "HARBOR MEDICAL ASSOCIATES INC",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      "82"
   ],
   [
      "2466356209",
      "HARBOR MEDICAL ASSOCIATES INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "16"
   ],
   [
      "2466633102",
      "SCL HEALTH MEDICAL GROUP - BUTTE LLC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "66"
   ],
   [
      "2466633102",
      "SCL HEALTH MEDICAL GROUP - BUTTE LLC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "2466633102",
      "SCL HEALTH MEDICAL GROUP - BUTTE LLC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      ""
   ],
   [
      "2466633102",
      "SCL HEALTH MEDICAL GROUP - BUTTE LLC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "54"
   ],
   [
      "2466633102",
      "SCL HEALTH MEDICAL GROUP - BUTTE LLC",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      "83"
   ],
   [
      "2466633102",
      "SCL HEALTH MEDICAL GROUP - BUTTE LLC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      ""
   ],
   [
      "2860304334",
      "BOARD OF REGENTS OF THE UNIVERSITY OF OKLAHOMA - OU PHYSICIANS",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "69"
   ],
   [
      "2860304334",
      "BOARD OF REGENTS OF THE UNIVERSITY OF OKLAHOMA - OU PHYSICIANS",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "91"
   ],
   [
      "2860304334",
      "BOARD OF REGENTS OF THE UNIVERSITY OF OKLAHOMA - OU PHYSICIANS",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "89"
   ],
   [
      "2860304334",
      "BOARD OF REGENTS OF THE UNIVERSITY OF OKLAHOMA - OU PHYSICIANS",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "64"
   ],
   [
      "2860304334",
      "BOARD OF REGENTS OF THE UNIVERSITY OF OKLAHOMA - OU PHYSICIANS",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      "87"
   ],
   [
      "2860304334",
      "BOARD OF REGENTS OF THE UNIVERSITY OF OKLAHOMA - OU PHYSICIANS",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "27"
   ],
   [
      "2860392529",
      "CAMPBELL COUNTY HOSPITAL DISTRICT",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "64"
   ],
   [
      "2860392529",
      "CAMPBELL COUNTY HOSPITAL DISTRICT",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "82"
   ],
   [
      "2860392529",
      "CAMPBELL COUNTY HOSPITAL DISTRICT",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "80"
   ],
   [
      "2860392529",
      "CAMPBELL COUNTY HOSPITAL DISTRICT",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "56"
   ],
   [
      "2860392529",
      "CAMPBELL COUNTY HOSPITAL DISTRICT",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      "84"
   ],
   [
      "2860392529",
      "CAMPBELL COUNTY HOSPITAL DISTRICT",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "30"
   ],
   [
      "2860396330",
      "SUMMIT MEDICAL GROUP PLLC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "70"
   ],
   [
      "2860396330",
      "SUMMIT MEDICAL GROUP PLLC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "88"
   ],
   [
      "2860396330",
      "SUMMIT MEDICAL GROUP PLLC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "86"
   ],
   [
      "2860396330",
      "SUMMIT MEDICAL GROUP PLLC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "64"
   ],
   [
      "2860396330",
      "SUMMIT MEDICAL GROUP PLLC",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      "84"
   ],
   [
      "2860396330",
      "SUMMIT MEDICAL GROUP PLLC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "27"
   ],
   [
      "3072422716",
      "THE BOARD OF TRUSTEES OF THE UNIVERSITY OF ILLINOIS",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      ""
   ],
   [
      "3072422716",
      "THE BOARD OF TRUSTEES OF THE UNIVERSITY OF ILLINOIS",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "3072422716",
      "THE BOARD OF TRUSTEES OF THE UNIVERSITY OF ILLINOIS",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "86"
   ],
   [
      "3072422716",
      "THE BOARD OF TRUSTEES OF THE UNIVERSITY OF ILLINOIS",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      ""
   ],
   [
      "3072422716",
      "THE BOARD OF TRUSTEES OF THE UNIVERSITY OF ILLINOIS",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      ""
   ],
   [
      "3072422716",
      "THE BOARD OF TRUSTEES OF THE UNIVERSITY OF ILLINOIS",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      ""
   ],
   [
      "3173436490",
      "THE VANCOUVER CLINIC INC PS",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "60"
   ],
   [
      "3173436490",
      "THE VANCOUVER CLINIC INC PS",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "85"
   ],
   [
      "3173436490",
      "THE VANCOUVER CLINIC INC PS",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "82"
   ],
   [
      "3173436490",
      "THE VANCOUVER CLINIC INC PS",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "57"
   ],
   [
      "3173436490",
      "THE VANCOUVER CLINIC INC PS",
      "CAHPS_GRP_8",
      "CAHPS for MIPS SSM: Courteous and Helpful Office Staff",
      "83"
   ],
   [
      "3173436490",
      "THE VANCOUVER CLINIC INC PS",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "21"
   ],
   [
      "3173660776",
      "WESTCHESTER MEDICAL CENTER ADVANCED PHYSICIAN SERVICES PC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "72"
   ],
   [
      "3173660776",
      "WESTCHESTER MEDICAL CENTER ADVANCED PHYSICIAN SERVICES PC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "88"
   ],
   [
      "3173660776",
      "WESTCHESTER MEDICAL CENTER ADVANCED PHYSICIAN SERVICES PC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "85"
   ],
   [
      "3173660776",
      "WESTCHESTER MEDICAL CENTER ADVANCED PHYSICIAN SERVICES PC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "59"
   ],
   [
      "3173660776",
      "WESTCHESTER MEDICAL CENTER ADVANCED PHYSICIAN SERVICES PC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "21"
   ],
   [
      "3375456734",
      "UTMB FACULTY GROUP PRACTICE",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      ""
   ],
   [
      "3375456734",
      "UTMB FACULTY GROUP PRACTICE",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "3375456734",
      "UTMB FACULTY GROUP PRACTICE",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      ""
   ],
   [
      "3375456734",
      "UTMB FACULTY GROUP PRACTICE",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "59"
   ],
   [
      "3375456734",
      "UTMB FACULTY GROUP PRACTICE",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "24"
   ],
   [
      "3476725599",
      "UNIVERSITY OF LOUISVILLE PHYSICIANS, INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "69"
   ],
   [
      "3476725599",
      "UNIVERSITY OF LOUISVILLE PHYSICIANS, INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "90"
   ],
   [
      "3476725599",
      "UNIVERSITY OF LOUISVILLE PHYSICIANS, INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "86"
   ],
   [
      "3476725599",
      "UNIVERSITY OF LOUISVILLE PHYSICIANS, INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "59"
   ],
   [
      "3476725599",
      "UNIVERSITY OF LOUISVILLE PHYSICIANS, INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "29"
   ],
   [
      "3779751656",
      "CITY OF HOPE MEDICAL FOUNDATION",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "72"
   ],
   [
      "3779751656",
      "CITY OF HOPE MEDICAL FOUNDATION",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "87"
   ],
   [
      "3779751656",
      "CITY OF HOPE MEDICAL FOUNDATION",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "86"
   ],
   [
      "3779751656",
      "CITY OF HOPE MEDICAL FOUNDATION",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "53"
   ],
   [
      "3779751656",
      "CITY OF HOPE MEDICAL FOUNDATION",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "19"
   ],
   [
      "3870405988",
      "BRIGHAM AND WOMENS PHYSICIANS ORGANIZATION INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "65"
   ],
   [
      "3870405988",
      "BRIGHAM AND WOMENS PHYSICIANS ORGANIZATION INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "88"
   ],
   [
      "3870405988",
      "BRIGHAM AND WOMENS PHYSICIANS ORGANIZATION INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "80"
   ],
   [
      "3870405988",
      "BRIGHAM AND WOMENS PHYSICIANS ORGANIZATION INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "67"
   ],
   [
      "3870405988",
      "BRIGHAM AND WOMENS PHYSICIANS ORGANIZATION INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "18"
   ],
   [
      "4284538778",
      "SUTTER BAY MEDICAL FOUNDATION",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "65"
   ],
   [
      "4284538778",
      "SUTTER BAY MEDICAL FOUNDATION",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "88"
   ],
   [
      "4284538778",
      "SUTTER BAY MEDICAL FOUNDATION",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "86"
   ],
   [
      "4284538778",
      "SUTTER BAY MEDICAL FOUNDATION",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "57"
   ],
   [
      "4284538778",
      "SUTTER BAY MEDICAL FOUNDATION",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "20"
   ],
   [
      "4385538735",
      "PATIENT FIRST MARYLAND MEDICAL GROUP PLLC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      ""
   ],
   [
      "4385538735",
      "PATIENT FIRST MARYLAND MEDICAL GROUP PLLC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "4385538735",
      "PATIENT FIRST MARYLAND MEDICAL GROUP PLLC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      ""
   ],
   [
      "4385538735",
      "PATIENT FIRST MARYLAND MEDICAL GROUP PLLC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "44"
   ],
   [
      "4385538735",
      "PATIENT FIRST MARYLAND MEDICAL GROUP PLLC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "24"
   ],
   [
      "4486568698",
      "MEDICAL ASSOCIATES OF EAST AL, PC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      ""
   ],
   [
      "4486568698",
      "MEDICAL ASSOCIATES OF EAST AL, PC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "4486568698",
      "MEDICAL ASSOCIATES OF EAST AL, PC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      ""
   ],
   [
      "4486568698",
      "MEDICAL ASSOCIATES OF EAST AL, PC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      ""
   ],
   [
      "4486568698",
      "MEDICAL ASSOCIATES OF EAST AL, PC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      ""
   ],
   [
      "4486646197",
      "SJHMC PHYSICIAN SERVICES C/O DIGNITY HEALTH",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "59"
   ],
   [
      "4486646197",
      "SJHMC PHYSICIAN SERVICES C/O DIGNITY HEALTH",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "88"
   ],
   [
      "4486646197",
      "SJHMC PHYSICIAN SERVICES C/O DIGNITY HEALTH",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "85"
   ],
   [
      "4486646197",
      "SJHMC PHYSICIAN SERVICES C/O DIGNITY HEALTH",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "68"
   ],
   [
      "4486646197",
      "SJHMC PHYSICIAN SERVICES C/O DIGNITY HEALTH",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "23"
   ],
   [
      "4587575550",
      "THE MARY LANNING MEMORIAL HOSPITAL ASSOCIATION",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "68"
   ],
   [
      "4587575550",
      "THE MARY LANNING MEMORIAL HOSPITAL ASSOCIATION",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "85"
   ],
   [
      "4587575550",
      "THE MARY LANNING MEMORIAL HOSPITAL ASSOCIATION",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "79"
   ],
   [
      "4587575550",
      "THE MARY LANNING MEMORIAL HOSPITAL ASSOCIATION",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "65"
   ],
   [
      "4587575550",
      "THE MARY LANNING MEMORIAL HOSPITAL ASSOCIATION",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "26"
   ],
   [
      "4587578042",
      "LITTLE COMPANY OF MARY HOSPITAL OF INDIANA INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "75"
   ],
   [
      "4587578042",
      "LITTLE COMPANY OF MARY HOSPITAL OF INDIANA INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "90"
   ],
   [
      "4587578042",
      "LITTLE COMPANY OF MARY HOSPITAL OF INDIANA INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "87"
   ],
   [
      "4587578042",
      "LITTLE COMPANY OF MARY HOSPITAL OF INDIANA INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "62"
   ],
   [
      "4587578042",
      "LITTLE COMPANY OF MARY HOSPITAL OF INDIANA INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "33"
   ],
   [
      "4880590728",
      "UNIVERSITY OF VIRGINIA PHYSICIANS GROUP",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "63"
   ],
   [
      "4880590728",
      "UNIVERSITY OF VIRGINIA PHYSICIANS GROUP",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "86"
   ],
   [
      "4880590728",
      "UNIVERSITY OF VIRGINIA PHYSICIANS GROUP",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "81"
   ],
   [
      "4880590728",
      "UNIVERSITY OF VIRGINIA PHYSICIANS GROUP",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "61"
   ],
   [
      "4880590728",
      "UNIVERSITY OF VIRGINIA PHYSICIANS GROUP",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "23"
   ],
   [
      "5092628479",
      "KAUAI MEDICAL CLINIC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "60"
   ],
   [
      "5092628479",
      "KAUAI MEDICAL CLINIC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "83"
   ],
   [
      "5092628479",
      "KAUAI MEDICAL CLINIC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "80"
   ],
   [
      "5092628479",
      "KAUAI MEDICAL CLINIC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "56"
   ],
   [
      "5092628479",
      "KAUAI MEDICAL CLINIC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "18"
   ],
   [
      "5193900280",
      "PATIENT FIRST PENNSYLVANIA MEDICAL GROUP PLLC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      ""
   ],
   [
      "5193900280",
      "PATIENT FIRST PENNSYLVANIA MEDICAL GROUP PLLC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "5193900280",
      "PATIENT FIRST PENNSYLVANIA MEDICAL GROUP PLLC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "77"
   ],
   [
      "5193900280",
      "PATIENT FIRST PENNSYLVANIA MEDICAL GROUP PLLC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      ""
   ],
   [
      "5193900280",
      "PATIENT FIRST PENNSYLVANIA MEDICAL GROUP PLLC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      ""
   ],
   [
      "5294644381",
      "KALISPELL REGIONAL MEDICAL CENTER INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "60"
   ],
   [
      "5294644381",
      "KALISPELL REGIONAL MEDICAL CENTER INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "81"
   ],
   [
      "5294644381",
      "KALISPELL REGIONAL MEDICAL CENTER INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "77"
   ],
   [
      "5294644381",
      "KALISPELL REGIONAL MEDICAL CENTER INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "56"
   ],
   [
      "5294644381",
      "KALISPELL REGIONAL MEDICAL CENTER INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "23"
   ],
   [
      "5294646378",
      "UNIVERSITY HEALTH SYSTEM,INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "64"
   ],
   [
      "5294646378",
      "UNIVERSITY HEALTH SYSTEM,INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "89"
   ],
   [
      "5294646378",
      "UNIVERSITY HEALTH SYSTEM,INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "87"
   ],
   [
      "5294646378",
      "UNIVERSITY HEALTH SYSTEM,INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "62"
   ],
   [
      "5294646378",
      "UNIVERSITY HEALTH SYSTEM,INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "31"
   ],
   [
      "5395642276",
      "SUMMIT MEDICAL GROUP PA",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "64"
   ],
   [
      "5395642276",
      "SUMMIT MEDICAL GROUP PA",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "86"
   ],
   [
      "5395642276",
      "SUMMIT MEDICAL GROUP PA",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "84"
   ],
   [
      "5395642276",
      "SUMMIT MEDICAL GROUP PA",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "65"
   ],
   [
      "5395642276",
      "SUMMIT MEDICAL GROUP PA",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "20"
   ],
   [
      "5496648875",
      "TRINITY WEST",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "76"
   ],
   [
      "5496648875",
      "TRINITY WEST",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "90"
   ],
   [
      "5496648875",
      "TRINITY WEST",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "88"
   ],
   [
      "5496648875",
      "TRINITY WEST",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "57"
   ],
   [
      "5496648875",
      "TRINITY WEST",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "37"
   ],
   [
      "5799694675",
      "ST VINCENT HOSPITAL-HOSPITAL SISTERS-THIRD ORDER OF ST FRANCIS",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "65"
   ],
   [
      "5799694675",
      "ST VINCENT HOSPITAL-HOSPITAL SISTERS-THIRD ORDER OF ST FRANCIS",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "86"
   ],
   [
      "5799694675",
      "ST VINCENT HOSPITAL-HOSPITAL SISTERS-THIRD ORDER OF ST FRANCIS",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "84"
   ],
   [
      "5799694675",
      "ST VINCENT HOSPITAL-HOSPITAL SISTERS-THIRD ORDER OF ST FRANCIS",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "59"
   ],
   [
      "5799694675",
      "ST VINCENT HOSPITAL-HOSPITAL SISTERS-THIRD ORDER OF ST FRANCIS",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "22"
   ],
   [
      "5799698346",
      "SWEDISHAMERICAN HOSPITAL",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "55"
   ],
   [
      "5799698346",
      "SWEDISHAMERICAN HOSPITAL",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "81"
   ],
   [
      "5799698346",
      "SWEDISHAMERICAN HOSPITAL",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "77"
   ],
   [
      "5799698346",
      "SWEDISHAMERICAN HOSPITAL",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "65"
   ],
   [
      "5799698346",
      "SWEDISHAMERICAN HOSPITAL",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "20"
   ],
   [
      "5890054100",
      "PLATTE VALLEY MEDICAL GROUP LLC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "64"
   ],
   [
      "5890054100",
      "PLATTE VALLEY MEDICAL GROUP LLC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "5890054100",
      "PLATTE VALLEY MEDICAL GROUP LLC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "81"
   ],
   [
      "5890054100",
      "PLATTE VALLEY MEDICAL GROUP LLC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "57"
   ],
   [
      "5890054100",
      "PLATTE VALLEY MEDICAL GROUP LLC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "18"
   ],
   [
      "5890606008",
      "HOLZER CLINIC LLC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "74"
   ],
   [
      "5890606008",
      "HOLZER CLINIC LLC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "90"
   ],
   [
      "5890606008",
      "HOLZER CLINIC LLC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "85"
   ],
   [
      "5890606008",
      "HOLZER CLINIC LLC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "67"
   ],
   [
      "5890606008",
      "HOLZER CLINIC LLC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "28"
   ],
   [
      "5890689657",
      "EISENHOWER MEDICAL CENTER",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "56"
   ],
   [
      "5890689657",
      "EISENHOWER MEDICAL CENTER",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "83"
   ],
   [
      "5890689657",
      "EISENHOWER MEDICAL CENTER",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "78"
   ],
   [
      "5890689657",
      "EISENHOWER MEDICAL CENTER",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "66"
   ],
   [
      "5890689657",
      "EISENHOWER MEDICAL CENTER",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "20"
   ],
   [
      "5890689715",
      "DUBOIS REGIONAL MEDICAL CENTER",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "62"
   ],
   [
      "5890689715",
      "DUBOIS REGIONAL MEDICAL CENTER",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "5890689715",
      "DUBOIS REGIONAL MEDICAL CENTER",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      ""
   ],
   [
      "5890689715",
      "DUBOIS REGIONAL MEDICAL CENTER",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "66"
   ],
   [
      "5890689715",
      "DUBOIS REGIONAL MEDICAL CENTER",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      ""
   ],
   [
      "5890691075",
      "RAPID CITY MEDICAL CENTER LLP",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "68"
   ],
   [
      "5890691075",
      "RAPID CITY MEDICAL CENTER LLP",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "84"
   ],
   [
      "5890691075",
      "RAPID CITY MEDICAL CENTER LLP",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "81"
   ],
   [
      "5890691075",
      "RAPID CITY MEDICAL CENTER LLP",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "53"
   ],
   [
      "5890691075",
      "RAPID CITY MEDICAL CENTER LLP",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "24"
   ],
   [
      "5991776635",
      "MARTIN'S POINT HEALTH CARE",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "61"
   ],
   [
      "5991776635",
      "MARTIN'S POINT HEALTH CARE",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "85"
   ],
   [
      "5991776635",
      "MARTIN'S POINT HEALTH CARE",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "78"
   ],
   [
      "5991776635",
      "MARTIN'S POINT HEALTH CARE",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "59"
   ],
   [
      "5991776635",
      "MARTIN'S POINT HEALTH CARE",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "17"
   ],
   [
      "6002728656",
      "GUTHRIE MEDICAL GROUP PC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "70"
   ],
   [
      "6002728656",
      "GUTHRIE MEDICAL GROUP PC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "88"
   ],
   [
      "6002728656",
      "GUTHRIE MEDICAL GROUP PC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "82"
   ],
   [
      "6002728656",
      "GUTHRIE MEDICAL GROUP PC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "64"
   ],
   [
      "6002728656",
      "GUTHRIE MEDICAL GROUP PC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "20"
   ],
   [
      "6103115183",
      "SILICON VALLEY MEDICAL DEVELOPMENT LLC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "57"
   ],
   [
      "6103115183",
      "SILICON VALLEY MEDICAL DEVELOPMENT LLC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "87"
   ],
   [
      "6103115183",
      "SILICON VALLEY MEDICAL DEVELOPMENT LLC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "83"
   ],
   [
      "6103115183",
      "SILICON VALLEY MEDICAL DEVELOPMENT LLC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "58"
   ],
   [
      "6103115183",
      "SILICON VALLEY MEDICAL DEVELOPMENT LLC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "22"
   ],
   [
      "6204740731",
      "LICKING MEMORIAL PROFESSIONAL CORPORATION",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "62"
   ],
   [
      "6204740731",
      "LICKING MEMORIAL PROFESSIONAL CORPORATION",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "6204740731",
      "LICKING MEMORIAL PROFESSIONAL CORPORATION",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "77"
   ],
   [
      "6204740731",
      "LICKING MEMORIAL PROFESSIONAL CORPORATION",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "53"
   ],
   [
      "6204740731",
      "LICKING MEMORIAL PROFESSIONAL CORPORATION",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "24"
   ],
   [
      "6305759754",
      "STRAUB CLINIC AND HOSPITAL",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "71"
   ],
   [
      "6305759754",
      "STRAUB CLINIC AND HOSPITAL",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "86"
   ],
   [
      "6305759754",
      "STRAUB CLINIC AND HOSPITAL",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "82"
   ],
   [
      "6305759754",
      "STRAUB CLINIC AND HOSPITAL",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "57"
   ],
   [
      "6305759754",
      "STRAUB CLINIC AND HOSPITAL",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "15"
   ],
   [
      "6305810201",
      "NORTH COAST PROFESSIONAL COMPANY, LLC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "77"
   ],
   [
      "6305810201",
      "NORTH COAST PROFESSIONAL COMPANY, LLC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "93"
   ],
   [
      "6305810201",
      "NORTH COAST PROFESSIONAL COMPANY, LLC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "89"
   ],
   [
      "6305810201",
      "NORTH COAST PROFESSIONAL COMPANY, LLC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "65"
   ],
   [
      "6305810201",
      "NORTH COAST PROFESSIONAL COMPANY, LLC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "32"
   ],
   [
      "6406752153",
      "THE EVERETT CLINIC, PLLC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "62"
   ],
   [
      "6406752153",
      "THE EVERETT CLINIC, PLLC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "86"
   ],
   [
      "6406752153",
      "THE EVERETT CLINIC, PLLC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "79"
   ],
   [
      "6406752153",
      "THE EVERETT CLINIC, PLLC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "57"
   ],
   [
      "6406752153",
      "THE EVERETT CLINIC, PLLC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "17"
   ],
   [
      "6406901941",
      "MONTAGE MEDICAL GROUP",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "53"
   ],
   [
      "6406901941",
      "MONTAGE MEDICAL GROUP",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "6406901941",
      "MONTAGE MEDICAL GROUP",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "70"
   ],
   [
      "6406901941",
      "MONTAGE MEDICAL GROUP",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "57"
   ],
   [
      "6406901941",
      "MONTAGE MEDICAL GROUP",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "20"
   ],
   [
      "6709772767",
      "HEARTLAND REGIONAL MEDICAL CENTER",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "74"
   ],
   [
      "6709772767",
      "HEARTLAND REGIONAL MEDICAL CENTER",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "84"
   ],
   [
      "6709772767",
      "HEARTLAND REGIONAL MEDICAL CENTER",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "87"
   ],
   [
      "6709772767",
      "HEARTLAND REGIONAL MEDICAL CENTER",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "64"
   ],
   [
      "6709772767",
      "HEARTLAND REGIONAL MEDICAL CENTER",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "21"
   ],
   [
      "6709797491",
      "STANFORD HEALTH CARE",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "59"
   ],
   [
      "6709797491",
      "STANFORD HEALTH CARE",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "6709797491",
      "STANFORD HEALTH CARE",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "86"
   ],
   [
      "6709797491",
      "STANFORD HEALTH CARE",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "58"
   ],
   [
      "6709797491",
      "STANFORD HEALTH CARE",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "22"
   ],
   [
      "6901099746",
      "STAMFORD HEALTH MEDICAL GROUP INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "73"
   ],
   [
      "6901099746",
      "STAMFORD HEALTH MEDICAL GROUP INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "91"
   ],
   [
      "6901099746",
      "STAMFORD HEALTH MEDICAL GROUP INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "88"
   ],
   [
      "6901099746",
      "STAMFORD HEALTH MEDICAL GROUP INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "58"
   ],
   [
      "6901099746",
      "STAMFORD HEALTH MEDICAL GROUP INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "23"
   ],
   [
      "6901791367",
      "KINGMAN HEALTHCARE, INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      ""
   ],
   [
      "6901791367",
      "KINGMAN HEALTHCARE, INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "6901791367",
      "KINGMAN HEALTHCARE, INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "72"
   ],
   [
      "6901791367",
      "KINGMAN HEALTHCARE, INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "55"
   ],
   [
      "6901791367",
      "KINGMAN HEALTHCARE, INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "16"
   ],
   [
      "7012058548",
      "SOUTHEASTERN REGIONAL PHYSICIAN SERVICES",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "66"
   ],
   [
      "7012058548",
      "SOUTHEASTERN REGIONAL PHYSICIAN SERVICES",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "85"
   ],
   [
      "7012058548",
      "SOUTHEASTERN REGIONAL PHYSICIAN SERVICES",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "75"
   ],
   [
      "7012058548",
      "SOUTHEASTERN REGIONAL PHYSICIAN SERVICES",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "61"
   ],
   [
      "7012058548",
      "SOUTHEASTERN REGIONAL PHYSICIAN SERVICES",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      ""
   ],
   [
      "7012808827",
      "OVERLAKE MEDICAL CLINICS LLC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "66"
   ],
   [
      "7012808827",
      "OVERLAKE MEDICAL CLINICS LLC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "87"
   ],
   [
      "7012808827",
      "OVERLAKE MEDICAL CLINICS LLC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "84"
   ],
   [
      "7012808827",
      "OVERLAKE MEDICAL CLINICS LLC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "63"
   ],
   [
      "7012808827",
      "OVERLAKE MEDICAL CLINICS LLC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "25"
   ],
   [
      "7214841436",
      "GENESIS HEALTH SYSTEM",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "72"
   ],
   [
      "7214841436",
      "GENESIS HEALTH SYSTEM",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "89"
   ],
   [
      "7214841436",
      "GENESIS HEALTH SYSTEM",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "86"
   ],
   [
      "7214841436",
      "GENESIS HEALTH SYSTEM",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "64"
   ],
   [
      "7214841436",
      "GENESIS HEALTH SYSTEM",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "20"
   ],
   [
      "7214936533",
      "BEND MEMORIAL CLINIC PC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "57"
   ],
   [
      "7214936533",
      "BEND MEMORIAL CLINIC PC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "85"
   ],
   [
      "7214936533",
      "BEND MEMORIAL CLINIC PC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "76"
   ],
   [
      "7214936533",
      "BEND MEMORIAL CLINIC PC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "63"
   ],
   [
      "7214936533",
      "BEND MEMORIAL CLINIC PC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "25"
   ],
   [
      "7618270729",
      "RMH MEDICAL GROUP LLC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "61"
   ],
   [
      "7618270729",
      "RMH MEDICAL GROUP LLC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "84"
   ],
   [
      "7618270729",
      "RMH MEDICAL GROUP LLC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "81"
   ],
   [
      "7618270729",
      "RMH MEDICAL GROUP LLC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "57"
   ],
   [
      "7618270729",
      "RMH MEDICAL GROUP LLC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "21"
   ],
   [
      "7618861105",
      "MERCY HOSPITAL AND MEDICAL CENTER",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "61"
   ],
   [
      "7618861105",
      "MERCY HOSPITAL AND MEDICAL CENTER",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "85"
   ],
   [
      "7618861105",
      "MERCY HOSPITAL AND MEDICAL CENTER",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "76"
   ],
   [
      "7618861105",
      "MERCY HOSPITAL AND MEDICAL CENTER",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "63"
   ],
   [
      "7618861105",
      "MERCY HOSPITAL AND MEDICAL CENTER",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "21"
   ],
   [
      "7618871799",
      "LEXINGTON COUNTY HEALTH SERVICES DISTRICT INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "73"
   ],
   [
      "7618871799",
      "LEXINGTON COUNTY HEALTH SERVICES DISTRICT INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "88"
   ],
   [
      "7618871799",
      "LEXINGTON COUNTY HEALTH SERVICES DISTRICT INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "87"
   ],
   [
      "7618871799",
      "LEXINGTON COUNTY HEALTH SERVICES DISTRICT INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "53"
   ],
   [
      "7618871799",
      "LEXINGTON COUNTY HEALTH SERVICES DISTRICT INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "22"
   ],
   [
      "7618880097",
      "KING COUNTY PUBLIC HOSPITAL DISTRICT NO 2",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "57"
   ],
   [
      "7618880097",
      "KING COUNTY PUBLIC HOSPITAL DISTRICT NO 2",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "89"
   ],
   [
      "7618880097",
      "KING COUNTY PUBLIC HOSPITAL DISTRICT NO 2",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "83"
   ],
   [
      "7618880097",
      "KING COUNTY PUBLIC HOSPITAL DISTRICT NO 2",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "59"
   ],
   [
      "7618880097",
      "KING COUNTY PUBLIC HOSPITAL DISTRICT NO 2",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "19"
   ],
   [
      "7719876267",
      "SIGNATURE HEALTHCARE MEDICAL GROUP INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "60"
   ],
   [
      "7719876267",
      "SIGNATURE HEALTHCARE MEDICAL GROUP INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "82"
   ],
   [
      "7719876267",
      "SIGNATURE HEALTHCARE MEDICAL GROUP INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "78"
   ],
   [
      "7719876267",
      "SIGNATURE HEALTHCARE MEDICAL GROUP INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "63"
   ],
   [
      "7719876267",
      "SIGNATURE HEALTHCARE MEDICAL GROUP INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "17"
   ],
   [
      "7911801410",
      "PHYSICIANS REFERRAL SERVICE",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "76"
   ],
   [
      "7911801410",
      "PHYSICIANS REFERRAL SERVICE",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "7911801410",
      "PHYSICIANS REFERRAL SERVICE",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "96"
   ],
   [
      "7911801410",
      "PHYSICIANS REFERRAL SERVICE",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      ""
   ],
   [
      "7911801410",
      "PHYSICIANS REFERRAL SERVICE",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      ""
   ],
   [
      "7911816020",
      "TRINITY HEALTH",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "58"
   ],
   [
      "7911816020",
      "TRINITY HEALTH",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "83"
   ],
   [
      "7911816020",
      "TRINITY HEALTH",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "75"
   ],
   [
      "7911816020",
      "TRINITY HEALTH",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "59"
   ],
   [
      "7911816020",
      "TRINITY HEALTH",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "23"
   ],
   [
      "8022904473",
      "COMMUNITY CARE PHYSICIANS PC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "67"
   ],
   [
      "8022904473",
      "COMMUNITY CARE PHYSICIANS PC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "85"
   ],
   [
      "8022904473",
      "COMMUNITY CARE PHYSICIANS PC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "81"
   ],
   [
      "8022904473",
      "COMMUNITY CARE PHYSICIANS PC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "61"
   ],
   [
      "8022904473",
      "COMMUNITY CARE PHYSICIANS PC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "18"
   ],
   [
      "8123200540",
      "STERN CARDIOVASCULAR FOUNDATION, INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "69"
   ],
   [
      "8123200540",
      "STERN CARDIOVASCULAR FOUNDATION, INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "87"
   ],
   [
      "8123200540",
      "STERN CARDIOVASCULAR FOUNDATION, INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "85"
   ],
   [
      "8123200540",
      "STERN CARDIOVASCULAR FOUNDATION, INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "54"
   ],
   [
      "8123200540",
      "STERN CARDIOVASCULAR FOUNDATION, INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "30"
   ],
   [
      "8325952914",
      "LAKELAND REGIONAL HEALTH SYSTEMS INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "62"
   ],
   [
      "8325952914",
      "LAKELAND REGIONAL HEALTH SYSTEMS INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "80"
   ],
   [
      "8325952914",
      "LAKELAND REGIONAL HEALTH SYSTEMS INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "78"
   ],
   [
      "8325952914",
      "LAKELAND REGIONAL HEALTH SYSTEMS INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "65"
   ],
   [
      "8325952914",
      "LAKELAND REGIONAL HEALTH SYSTEMS INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "21"
   ],
   [
      "8426112350",
      "PHOEBE PHYSICIAN GROUP INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "64"
   ],
   [
      "8426112350",
      "PHOEBE PHYSICIAN GROUP INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "8426112350",
      "PHOEBE PHYSICIAN GROUP INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "85"
   ],
   [
      "8426112350",
      "PHOEBE PHYSICIAN GROUP INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "53"
   ],
   [
      "8426112350",
      "PHOEBE PHYSICIAN GROUP INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "16"
   ],
   [
      "8426113663",
      "CHESAPEAKE REGIONAL MEDICAL GROUP",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "69"
   ],
   [
      "8426113663",
      "CHESAPEAKE REGIONAL MEDICAL GROUP",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "84"
   ],
   [
      "8426113663",
      "CHESAPEAKE REGIONAL MEDICAL GROUP",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "82"
   ],
   [
      "8426113663",
      "CHESAPEAKE REGIONAL MEDICAL GROUP",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "64"
   ],
   [
      "8426113663",
      "CHESAPEAKE REGIONAL MEDICAL GROUP",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "23"
   ],
   [
      "8426136797",
      "MOUNT NITTANY MEDICAL CENTER HEALTH SERVICES INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "71"
   ],
   [
      "8426136797",
      "MOUNT NITTANY MEDICAL CENTER HEALTH SERVICES INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "90"
   ],
   [
      "8426136797",
      "MOUNT NITTANY MEDICAL CENTER HEALTH SERVICES INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "88"
   ],
   [
      "8426136797",
      "MOUNT NITTANY MEDICAL CENTER HEALTH SERVICES INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "62"
   ],
   [
      "8426136797",
      "MOUNT NITTANY MEDICAL CENTER HEALTH SERVICES INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "26"
   ],
   [
      "8426231119",
      "VIRGINIA HOSPITAL CENTER PHYSICIAN GROUP LLC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "56"
   ],
   [
      "8426231119",
      "VIRGINIA HOSPITAL CENTER PHYSICIAN GROUP LLC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "85"
   ],
   [
      "8426231119",
      "VIRGINIA HOSPITAL CENTER PHYSICIAN GROUP LLC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "80"
   ],
   [
      "8426231119",
      "VIRGINIA HOSPITAL CENTER PHYSICIAN GROUP LLC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "61"
   ],
   [
      "8426231119",
      "VIRGINIA HOSPITAL CENTER PHYSICIAN GROUP LLC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "16"
   ],
   [
      "8527044551",
      "MICHIGAN PRIMARY CARE PARTNERS P C",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      ""
   ],
   [
      "8527044551",
      "MICHIGAN PRIMARY CARE PARTNERS P C",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "8527044551",
      "MICHIGAN PRIMARY CARE PARTNERS P C",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      ""
   ],
   [
      "8527044551",
      "MICHIGAN PRIMARY CARE PARTNERS P C",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      ""
   ],
   [
      "8527044551",
      "MICHIGAN PRIMARY CARE PARTNERS P C",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      ""
   ],
   [
      "8628073236",
      "PHYSICIAN PRIMECARE, INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "62"
   ],
   [
      "8628073236",
      "PHYSICIAN PRIMECARE, INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "88"
   ],
   [
      "8628073236",
      "PHYSICIAN PRIMECARE, INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "88"
   ],
   [
      "8628073236",
      "PHYSICIAN PRIMECARE, INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "58"
   ],
   [
      "8628073236",
      "PHYSICIAN PRIMECARE, INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "22"
   ],
   [
      "8729072418",
      "SACRED HEART HOSPITAL OF THE HOSPITAL SISTERS-3RD ORDER OF ST FRANCIS",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "75"
   ],
   [
      "8729072418",
      "SACRED HEART HOSPITAL OF THE HOSPITAL SISTERS-3RD ORDER OF ST FRANCIS",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "88"
   ],
   [
      "8729072418",
      "SACRED HEART HOSPITAL OF THE HOSPITAL SISTERS-3RD ORDER OF ST FRANCIS",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "86"
   ],
   [
      "8729072418",
      "SACRED HEART HOSPITAL OF THE HOSPITAL SISTERS-3RD ORDER OF ST FRANCIS",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "57"
   ],
   [
      "8729072418",
      "SACRED HEART HOSPITAL OF THE HOSPITAL SISTERS-3RD ORDER OF ST FRANCIS",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      ""
   ],
   [
      "8729139852",
      "ALBEMARLE PHYSICIAN SERVICES- SENTARA INC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      ""
   ],
   [
      "8729139852",
      "ALBEMARLE PHYSICIAN SERVICES- SENTARA INC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "8729139852",
      "ALBEMARLE PHYSICIAN SERVICES- SENTARA INC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      ""
   ],
   [
      "8729139852",
      "ALBEMARLE PHYSICIAN SERVICES- SENTARA INC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      ""
   ],
   [
      "8729139852",
      "ALBEMARLE PHYSICIAN SERVICES- SENTARA INC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      ""
   ],
   [
      "8729351077",
      "PENN STATE HEALTH COMMUNITY MEDICAL GROUP, LLC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "70"
   ],
   [
      "8729351077",
      "PENN STATE HEALTH COMMUNITY MEDICAL GROUP, LLC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "90"
   ],
   [
      "8729351077",
      "PENN STATE HEALTH COMMUNITY MEDICAL GROUP, LLC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "87"
   ],
   [
      "8729351077",
      "PENN STATE HEALTH COMMUNITY MEDICAL GROUP, LLC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "64"
   ],
   [
      "8729351077",
      "PENN STATE HEALTH COMMUNITY MEDICAL GROUP, LLC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "32"
   ],
   [
      "9032125810",
      "OPTUMCARE NEW MEXICO, LLC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "51"
   ],
   [
      "9032125810",
      "OPTUMCARE NEW MEXICO, LLC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "9032125810",
      "OPTUMCARE NEW MEXICO, LLC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "79"
   ],
   [
      "9032125810",
      "OPTUMCARE NEW MEXICO, LLC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "47"
   ],
   [
      "9032125810",
      "OPTUMCARE NEW MEXICO, LLC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "15"
   ],
   [
      "9133024334",
      "SOUTHEAST MISSOURI HOSPITAL PHYSICIANS LLC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "77"
   ],
   [
      "9133024334",
      "SOUTHEAST MISSOURI HOSPITAL PHYSICIANS LLC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "88"
   ],
   [
      "9133024334",
      "SOUTHEAST MISSOURI HOSPITAL PHYSICIANS LLC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "84"
   ],
   [
      "9133024334",
      "SOUTHEAST MISSOURI HOSPITAL PHYSICIANS LLC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "53"
   ],
   [
      "9133024334",
      "SOUTHEAST MISSOURI HOSPITAL PHYSICIANS LLC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "26"
   ],
   [
      "9133378870",
      "NORTH OAKS PHYSICIAN GROUP, LLC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "69"
   ],
   [
      "9133378870",
      "NORTH OAKS PHYSICIAN GROUP, LLC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "89"
   ],
   [
      "9133378870",
      "NORTH OAKS PHYSICIAN GROUP, LLC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "89"
   ],
   [
      "9133378870",
      "NORTH OAKS PHYSICIAN GROUP, LLC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "63"
   ],
   [
      "9133378870",
      "NORTH OAKS PHYSICIAN GROUP, LLC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "22"
   ],
   [
      "9234041708",
      "PRESBYTERIAN HEALTHCARE SERVICES",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      ""
   ],
   [
      "9234041708",
      "PRESBYTERIAN HEALTHCARE SERVICES",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "9234041708",
      "PRESBYTERIAN HEALTHCARE SERVICES",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      ""
   ],
   [
      "9234041708",
      "PRESBYTERIAN HEALTHCARE SERVICES",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "60"
   ],
   [
      "9234041708",
      "PRESBYTERIAN HEALTHCARE SERVICES",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "16"
   ],
   [
      "9638491574",
      "SCL HEALTH MEDICAL GROUP - BILLINGS LLC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "61"
   ],
   [
      "9638491574",
      "SCL HEALTH MEDICAL GROUP - BILLINGS LLC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "84"
   ],
   [
      "9638491574",
      "SCL HEALTH MEDICAL GROUP - BILLINGS LLC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "82"
   ],
   [
      "9638491574",
      "SCL HEALTH MEDICAL GROUP - BILLINGS LLC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "67"
   ],
   [
      "9638491574",
      "SCL HEALTH MEDICAL GROUP - BILLINGS LLC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "24"
   ],
   [
      "9830002617",
      "VIRGINIA MASON MEDICAL CENTER",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "55"
   ],
   [
      "9830002617",
      "VIRGINIA MASON MEDICAL CENTER",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "81"
   ],
   [
      "9830002617",
      "VIRGINIA MASON MEDICAL CENTER",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "80"
   ],
   [
      "9830002617",
      "VIRGINIA MASON MEDICAL CENTER",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "62"
   ],
   [
      "9830002617",
      "VIRGINIA MASON MEDICAL CENTER",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "20"
   ],
   [
      "9830008770",
      "WASHINGTON UNIVERSITY",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "65"
   ],
   [
      "9830008770",
      "WASHINGTON UNIVERSITY",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "9830008770",
      "WASHINGTON UNIVERSITY",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      ""
   ],
   [
      "9830008770",
      "WASHINGTON UNIVERSITY",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "61"
   ],
   [
      "9830008770",
      "WASHINGTON UNIVERSITY",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "28"
   ],
   [
      "9830093640",
      "COOPERATIVE HEALTHCARE SERVICES, INC.",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "65"
   ],
   [
      "9830093640",
      "COOPERATIVE HEALTHCARE SERVICES, INC.",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      "87"
   ],
   [
      "9830093640",
      "COOPERATIVE HEALTHCARE SERVICES, INC.",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "78"
   ],
   [
      "9830093640",
      "COOPERATIVE HEALTHCARE SERVICES, INC.",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "52"
   ],
   [
      "9830093640",
      "COOPERATIVE HEALTHCARE SERVICES, INC.",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "25"
   ],
   [
      "9830094515",
      "SUTTER VALLEY MEDICAL FOUNDATION",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "60"
   ],
   [
      "9830094515",
      "SUTTER VALLEY MEDICAL FOUNDATION",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "9830094515",
      "SUTTER VALLEY MEDICAL FOUNDATION",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      "88"
   ],
   [
      "9830094515",
      "SUTTER VALLEY MEDICAL FOUNDATION",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "55"
   ],
   [
      "9830094515",
      "SUTTER VALLEY MEDICAL FOUNDATION",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "24"
   ],
   [
      "9931011434",
      "PATIENT FIRST RICHMOND MEDICAL GROUP PLLC",
      "CAHPS_GRP_1",
      "CAHPS for MIPS SSM: Getting Timely Care, Appointments, and Information",
      "80"
   ],
   [
      "9931011434",
      "PATIENT FIRST RICHMOND MEDICAL GROUP PLLC",
      "CAHPS_GRP_2",
      "CAHPS for MIPS SSM: How Well Providers Communicate",
      ""
   ],
   [
      "9931011434",
      "PATIENT FIRST RICHMOND MEDICAL GROUP PLLC",
      "CAHPS_GRP_3",
      "CAHPS for MIPS SSM: Patient's Rating of Provider",
      ""
   ],
   [
      "9931011434",
      "PATIENT FIRST RICHMOND MEDICAL GROUP PLLC",
      "CAHPS_GRP_5",
      "CAHPS for MIPS SSM: Health Promotion and Education",
      "45"
   ],
   [
      "9931011434",
      "PATIENT FIRST RICHMOND MEDICAL GROUP PLLC",
      "CAHPS_GRP_12",
      "CAHPS for MIPS SSM: Stewardship of Patient Resources",
      "19"
   ]
]
