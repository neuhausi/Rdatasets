var daycare_finesInfo ={
   "description" : "Description\nResearchers tested the deterrence hypothesis which predicts that the\nintroduction of a penalty will reduce the occurrence of the behavior subject\nto the fine, with the condition that the fine leaves everything else\nunchanged by instituting a fine for late pickup at daycare centers.\nFor this study, they worked with 10 volunteer daycare centers that did not\noriginally impose a fine to parents for picking up their kids late.\nThey randomly selected 6 of these daycare centers and instituted a monetary\nfine (of a considerable amount) for picking up children late and then removed it.\nIn the remaining 4 daycare centers no fine was introduced.\nThe study period was divided into four: before the fine (weeks 1â4), the first\n4 weeks with the fine (weeks 5-8), the entire period with the fine (weeks 5â16),\nand the after fine period (weeks 17-20). Throughout the study, the number of kids\nwho were picked up late was recorded each week for each daycare. The study\nfound that the number of late-coming parents increased significantly when the\nfine was introduced, and no reduction occurred after the fine was removed.",
   "usage" : "daycare_fines",
   "parameters" : {
      "group" : "Study group: test (fine instituted) or control (no fine).",
      "week" : "Week of study.",
      "study_period_3" : "Period of study, divided into 4 periods:\n&#8288;before fine&#8288;, &#8288;with fine&#8288;, &#8288;after fine&#8288;",
      "children" : "Number of children at daycare center.",
      "late_pickups" : "Number of late pickups for a given week and daycare center.",
      "study_period_4" : "Period of study, divided into 4 periods:\n&#8288;before fine&#8288;, &#8288;first 4 weeks with fine&#8288;, &#8288;last 8 weeks with fine&#8288;, &#8288;after fine&#8288;",
      "center" : "Daycare center id."
   },
   "title" : "Daycare fines",
   "reference" : "Gneezy, Uri, and Aldo Rustichini. \"A fine is a price.\"\nThe Journal of Legal Studies 29, no. 1 (2000): 1-17.",
   "format" : "A data frame with 200 observations on the following 7 variables."
}

var daycare_fines = [
   [
      "center",
      "group",
      "children",
      "week",
      "late_pickups",
      "study_period_4",
      "study_period_3"
   ],
   [
      "1",
      "test",
      "37",
      "1",
      "8",
      "before fine",
      "before fine"
   ],
   [
      "1",
      "test",
      "37",
      "2",
      "8",
      "before fine",
      "before fine"
   ],
   [
      "1",
      "test",
      "37",
      "3",
      "7",
      "before fine",
      "before fine"
   ],
   [
      "1",
      "test",
      "37",
      "4",
      "6",
      "before fine",
      "before fine"
   ],
   [
      "1",
      "test",
      "37",
      "5",
      "8",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "1",
      "test",
      "37",
      "6",
      "9",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "1",
      "test",
      "37",
      "7",
      "9",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "1",
      "test",
      "37",
      "8",
      "12",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "1",
      "test",
      "37",
      "9",
      "13",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "1",
      "test",
      "37",
      "10",
      "13",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "1",
      "test",
      "37",
      "11",
      "15",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "1",
      "test",
      "37",
      "12",
      "13",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "1",
      "test",
      "37",
      "13",
      "14",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "1",
      "test",
      "37",
      "14",
      "16",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "1",
      "test",
      "37",
      "15",
      "14",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "1",
      "test",
      "37",
      "16",
      "15",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "1",
      "test",
      "37",
      "17",
      "16",
      "after fine",
      "after fine"
   ],
   [
      "1",
      "test",
      "37",
      "18",
      "13",
      "after fine",
      "after fine"
   ],
   [
      "1",
      "test",
      "37",
      "19",
      "15",
      "after fine",
      "after fine"
   ],
   [
      "1",
      "test",
      "37",
      "20",
      "17",
      "after fine",
      "after fine"
   ],
   [
      "2",
      "test",
      "35",
      "1",
      "6",
      "before fine",
      "before fine"
   ],
   [
      "2",
      "test",
      "35",
      "2",
      "7",
      "before fine",
      "before fine"
   ],
   [
      "2",
      "test",
      "35",
      "3",
      "3",
      "before fine",
      "before fine"
   ],
   [
      "2",
      "test",
      "35",
      "4",
      "5",
      "before fine",
      "before fine"
   ],
   [
      "2",
      "test",
      "35",
      "5",
      "2",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "2",
      "test",
      "35",
      "6",
      "11",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "2",
      "test",
      "35",
      "7",
      "14",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "2",
      "test",
      "35",
      "8",
      "9",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "2",
      "test",
      "35",
      "9",
      "16",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "2",
      "test",
      "35",
      "10",
      "12",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "2",
      "test",
      "35",
      "11",
      "10",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "2",
      "test",
      "35",
      "12",
      "14",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "2",
      "test",
      "35",
      "13",
      "14",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "2",
      "test",
      "35",
      "14",
      "16",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "2",
      "test",
      "35",
      "15",
      "12",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "2",
      "test",
      "35",
      "16",
      "17",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "2",
      "test",
      "35",
      "17",
      "14",
      "after fine",
      "after fine"
   ],
   [
      "2",
      "test",
      "35",
      "18",
      "10",
      "after fine",
      "after fine"
   ],
   [
      "2",
      "test",
      "35",
      "19",
      "14",
      "after fine",
      "after fine"
   ],
   [
      "2",
      "test",
      "35",
      "20",
      "15",
      "after fine",
      "after fine"
   ],
   [
      "3",
      "test",
      "35",
      "1",
      "8",
      "before fine",
      "before fine"
   ],
   [
      "3",
      "test",
      "35",
      "2",
      "9",
      "before fine",
      "before fine"
   ],
   [
      "3",
      "test",
      "35",
      "3",
      "8",
      "before fine",
      "before fine"
   ],
   [
      "3",
      "test",
      "35",
      "4",
      "9",
      "before fine",
      "before fine"
   ],
   [
      "3",
      "test",
      "35",
      "5",
      "3",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "3",
      "test",
      "35",
      "6",
      "5",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "3",
      "test",
      "35",
      "7",
      "15",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "3",
      "test",
      "35",
      "8",
      "18",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "3",
      "test",
      "35",
      "9",
      "16",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "3",
      "test",
      "35",
      "10",
      "14",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "3",
      "test",
      "35",
      "11",
      "20",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "3",
      "test",
      "35",
      "12",
      "18",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "3",
      "test",
      "35",
      "13",
      "25",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "3",
      "test",
      "35",
      "14",
      "22",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "3",
      "test",
      "35",
      "15",
      "27",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "3",
      "test",
      "35",
      "16",
      "19",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "3",
      "test",
      "35",
      "17",
      "20",
      "after fine",
      "after fine"
   ],
   [
      "3",
      "test",
      "35",
      "18",
      "23",
      "after fine",
      "after fine"
   ],
   [
      "3",
      "test",
      "35",
      "19",
      "23",
      "after fine",
      "after fine"
   ],
   [
      "3",
      "test",
      "35",
      "20",
      "22",
      "after fine",
      "after fine"
   ],
   [
      "4",
      "test",
      "34",
      "1",
      "10",
      "before fine",
      "before fine"
   ],
   [
      "4",
      "test",
      "34",
      "2",
      "3",
      "before fine",
      "before fine"
   ],
   [
      "4",
      "test",
      "34",
      "3",
      "14",
      "before fine",
      "before fine"
   ],
   [
      "4",
      "test",
      "34",
      "4",
      "9",
      "before fine",
      "before fine"
   ],
   [
      "4",
      "test",
      "34",
      "5",
      "6",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "4",
      "test",
      "34",
      "6",
      "24",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "4",
      "test",
      "34",
      "7",
      "8",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "4",
      "test",
      "34",
      "8",
      "22",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "4",
      "test",
      "34",
      "9",
      "22",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "4",
      "test",
      "34",
      "10",
      "19",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "4",
      "test",
      "34",
      "11",
      "25",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "4",
      "test",
      "34",
      "12",
      "18",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "4",
      "test",
      "34",
      "13",
      "23",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "4",
      "test",
      "34",
      "14",
      "22",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "4",
      "test",
      "34",
      "15",
      "24",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "4",
      "test",
      "34",
      "16",
      "17",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "4",
      "test",
      "34",
      "17",
      "15",
      "after fine",
      "after fine"
   ],
   [
      "4",
      "test",
      "34",
      "18",
      "23",
      "after fine",
      "after fine"
   ],
   [
      "4",
      "test",
      "34",
      "19",
      "25",
      "after fine",
      "after fine"
   ],
   [
      "4",
      "test",
      "34",
      "20",
      "18",
      "after fine",
      "after fine"
   ],
   [
      "5",
      "test",
      "33",
      "1",
      "13",
      "before fine",
      "before fine"
   ],
   [
      "5",
      "test",
      "33",
      "2",
      "12",
      "before fine",
      "before fine"
   ],
   [
      "5",
      "test",
      "33",
      "3",
      "9",
      "before fine",
      "before fine"
   ],
   [
      "5",
      "test",
      "33",
      "4",
      "13",
      "before fine",
      "before fine"
   ],
   [
      "5",
      "test",
      "33",
      "5",
      "15",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "5",
      "test",
      "33",
      "6",
      "10",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "5",
      "test",
      "33",
      "7",
      "27",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "5",
      "test",
      "33",
      "8",
      "28",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "5",
      "test",
      "33",
      "9",
      "35",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "5",
      "test",
      "33",
      "10",
      "10",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "5",
      "test",
      "33",
      "11",
      "24",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "5",
      "test",
      "33",
      "12",
      "32",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "5",
      "test",
      "33",
      "13",
      "29",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "5",
      "test",
      "33",
      "14",
      "29",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "5",
      "test",
      "33",
      "15",
      "26",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "5",
      "test",
      "33",
      "16",
      "31",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "5",
      "test",
      "33",
      "17",
      "26",
      "after fine",
      "after fine"
   ],
   [
      "5",
      "test",
      "33",
      "18",
      "35",
      "after fine",
      "after fine"
   ],
   [
      "5",
      "test",
      "33",
      "19",
      "29",
      "after fine",
      "after fine"
   ],
   [
      "5",
      "test",
      "33",
      "20",
      "28",
      "after fine",
      "after fine"
   ],
   [
      "6",
      "test",
      "28",
      "1",
      "5",
      "before fine",
      "before fine"
   ],
   [
      "6",
      "test",
      "28",
      "2",
      "8",
      "before fine",
      "before fine"
   ],
   [
      "6",
      "test",
      "28",
      "3",
      "7",
      "before fine",
      "before fine"
   ],
   [
      "6",
      "test",
      "28",
      "4",
      "5",
      "before fine",
      "before fine"
   ],
   [
      "6",
      "test",
      "28",
      "5",
      "5",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "6",
      "test",
      "28",
      "6",
      "9",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "6",
      "test",
      "28",
      "7",
      "12",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "6",
      "test",
      "28",
      "8",
      "14",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "6",
      "test",
      "28",
      "9",
      "19",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "6",
      "test",
      "28",
      "10",
      "17",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "6",
      "test",
      "28",
      "11",
      "14",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "6",
      "test",
      "28",
      "12",
      "13",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "6",
      "test",
      "28",
      "13",
      "10",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "6",
      "test",
      "28",
      "14",
      "15",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "6",
      "test",
      "28",
      "15",
      "14",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "6",
      "test",
      "28",
      "16",
      "16",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "6",
      "test",
      "28",
      "17",
      "6",
      "after fine",
      "after fine"
   ],
   [
      "6",
      "test",
      "28",
      "18",
      "12",
      "after fine",
      "after fine"
   ],
   [
      "6",
      "test",
      "28",
      "19",
      "17",
      "after fine",
      "after fine"
   ],
   [
      "6",
      "test",
      "28",
      "20",
      "13",
      "after fine",
      "after fine"
   ],
   [
      "7",
      "control",
      "35",
      "1",
      "7",
      "before fine",
      "before fine"
   ],
   [
      "7",
      "control",
      "35",
      "2",
      "10",
      "before fine",
      "before fine"
   ],
   [
      "7",
      "control",
      "35",
      "3",
      "12",
      "before fine",
      "before fine"
   ],
   [
      "7",
      "control",
      "35",
      "4",
      "6",
      "before fine",
      "before fine"
   ],
   [
      "7",
      "control",
      "35",
      "5",
      "4",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "7",
      "control",
      "35",
      "6",
      "13",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "7",
      "control",
      "35",
      "7",
      "7",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "7",
      "control",
      "35",
      "8",
      "8",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "7",
      "control",
      "35",
      "9",
      "5",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "7",
      "control",
      "35",
      "10",
      "12",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "7",
      "control",
      "35",
      "11",
      "3",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "7",
      "control",
      "35",
      "12",
      "5",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "7",
      "control",
      "35",
      "13",
      "6",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "7",
      "control",
      "35",
      "14",
      "13",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "7",
      "control",
      "35",
      "15",
      "7",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "7",
      "control",
      "35",
      "16",
      "4",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "7",
      "control",
      "35",
      "17",
      "7",
      "after fine",
      "after fine"
   ],
   [
      "7",
      "control",
      "35",
      "18",
      "10",
      "after fine",
      "after fine"
   ],
   [
      "7",
      "control",
      "35",
      "19",
      "4",
      "after fine",
      "after fine"
   ],
   [
      "7",
      "control",
      "35",
      "20",
      "6",
      "after fine",
      "after fine"
   ],
   [
      "8",
      "control",
      "34",
      "1",
      "12",
      "before fine",
      "before fine"
   ],
   [
      "8",
      "control",
      "34",
      "2",
      "9",
      "before fine",
      "before fine"
   ],
   [
      "8",
      "control",
      "34",
      "3",
      "14",
      "before fine",
      "before fine"
   ],
   [
      "8",
      "control",
      "34",
      "4",
      "18",
      "before fine",
      "before fine"
   ],
   [
      "8",
      "control",
      "34",
      "5",
      "10",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "8",
      "control",
      "34",
      "6",
      "11",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "8",
      "control",
      "34",
      "7",
      "6",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "8",
      "control",
      "34",
      "8",
      "15",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "8",
      "control",
      "34",
      "9",
      "14",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "8",
      "control",
      "34",
      "10",
      "13",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "8",
      "control",
      "34",
      "11",
      "7",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "8",
      "control",
      "34",
      "12",
      "12",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "8",
      "control",
      "34",
      "13",
      "9",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "8",
      "control",
      "34",
      "14",
      "9",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "8",
      "control",
      "34",
      "15",
      "17",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "8",
      "control",
      "34",
      "16",
      "8",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "8",
      "control",
      "34",
      "17",
      "5",
      "after fine",
      "after fine"
   ],
   [
      "8",
      "control",
      "34",
      "18",
      "11",
      "after fine",
      "after fine"
   ],
   [
      "8",
      "control",
      "34",
      "19",
      "8",
      "after fine",
      "after fine"
   ],
   [
      "8",
      "control",
      "34",
      "20",
      "13",
      "after fine",
      "after fine"
   ],
   [
      "9",
      "control",
      "34",
      "1",
      "3",
      "before fine",
      "before fine"
   ],
   [
      "9",
      "control",
      "34",
      "2",
      "4",
      "before fine",
      "before fine"
   ],
   [
      "9",
      "control",
      "34",
      "3",
      "9",
      "before fine",
      "before fine"
   ],
   [
      "9",
      "control",
      "34",
      "4",
      "3",
      "before fine",
      "before fine"
   ],
   [
      "9",
      "control",
      "34",
      "5",
      "3",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "9",
      "control",
      "34",
      "6",
      "5",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "9",
      "control",
      "34",
      "7",
      "9",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "9",
      "control",
      "34",
      "8",
      "5",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "9",
      "control",
      "34",
      "9",
      "2",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "9",
      "control",
      "34",
      "10",
      "7",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "9",
      "control",
      "34",
      "11",
      "6",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "9",
      "control",
      "34",
      "12",
      "6",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "9",
      "control",
      "34",
      "13",
      "9",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "9",
      "control",
      "34",
      "14",
      "4",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "9",
      "control",
      "34",
      "15",
      "9",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "9",
      "control",
      "34",
      "16",
      "2",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "9",
      "control",
      "34",
      "17",
      "3",
      "after fine",
      "after fine"
   ],
   [
      "9",
      "control",
      "34",
      "18",
      "8",
      "after fine",
      "after fine"
   ],
   [
      "9",
      "control",
      "34",
      "19",
      "3",
      "after fine",
      "after fine"
   ],
   [
      "9",
      "control",
      "34",
      "20",
      "5",
      "after fine",
      "after fine"
   ],
   [
      "10",
      "control",
      "32",
      "1",
      "15",
      "before fine",
      "before fine"
   ],
   [
      "10",
      "control",
      "32",
      "2",
      "13",
      "before fine",
      "before fine"
   ],
   [
      "10",
      "control",
      "32",
      "3",
      "13",
      "before fine",
      "before fine"
   ],
   [
      "10",
      "control",
      "32",
      "4",
      "12",
      "before fine",
      "before fine"
   ],
   [
      "10",
      "control",
      "32",
      "5",
      "10",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "10",
      "control",
      "32",
      "6",
      "9",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "10",
      "control",
      "32",
      "7",
      "15",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "10",
      "control",
      "32",
      "8",
      "15",
      "first 4 weeks with fine",
      "with fine"
   ],
   [
      "10",
      "control",
      "32",
      "9",
      "15",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "10",
      "control",
      "32",
      "10",
      "10",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "10",
      "control",
      "32",
      "11",
      "17",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "10",
      "control",
      "32",
      "12",
      "12",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "10",
      "control",
      "32",
      "13",
      "13",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "10",
      "control",
      "32",
      "14",
      "11",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "10",
      "control",
      "32",
      "15",
      "14",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "10",
      "control",
      "32",
      "16",
      "17",
      "last 8 weeks with fine",
      "with fine"
   ],
   [
      "10",
      "control",
      "32",
      "17",
      "12",
      "after fine",
      "after fine"
   ],
   [
      "10",
      "control",
      "32",
      "18",
      "9",
      "after fine",
      "after fine"
   ],
   [
      "10",
      "control",
      "32",
      "19",
      "15",
      "after fine",
      "after fine"
   ],
   [
      "10",
      "control",
      "32",
      "20",
      "13",
      "after fine",
      "after fine"
   ]
]
