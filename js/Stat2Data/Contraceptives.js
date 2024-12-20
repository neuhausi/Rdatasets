var ContraceptivesInfo ={
   "usage" : "A data frame with 44 observations on the following 6 variables.",
   "reference" : "Twenty-two female subjects were allocated randomly to one of two treatment sequences in a two period crossover design.  The two treatments were a new Drug D or placebo, both given concomitantly with a standard oral contraceptive which was given in both study periods.  The oral contraceptive has two components, ethinyl estradiol (EE) and norethindrone (NET).  The purpose of the study was to evaluate whether the presence of Drug D affected the bioavailability of each of the oral contraceptive components.  Note that our dataset does not include the NET variable.",
   "description" : "Description\nDrug interaction study with oral contraceptives",
   "title" : "Drug Interaction with Contraceptives",
   "parameters" : {
      "Treatment" : "Drug or Placebo",
      "Residuals" : "Residuals used for a Tukey nonadditivity plot",
      "ComparisonValues" : "Comparison values used for a Tukey nonadditivity plot",
      "EE" : "Bioavailability of the ethinyl estradiol  component of the oral contraceptive (in pg*hr/ml)",
      "StudyPeriod" : "1=first or 2=second",
      "ID" : "ID number for each of the women"
   }
}

var Contraceptives = [
   [
      "ID",
      "StudyPeriod",
      "Treatment",
      "EE",
      "ComparisonValues",
      "Residuals"
   ],
   [
      "1",
      "1",
      "Placebo",
      "2623",
      "4.438964242",
      "-320.9659091"
   ],
   [
      "1",
      "2",
      "Drug",
      "3744.8",
      "-4.438964242",
      "320.9659091"
   ],
   [
      "2",
      "1",
      "Drug",
      "3756.2",
      "-8.13810111",
      "382.6659091"
   ],
   [
      "2",
      "2",
      "Placebo",
      "2511",
      "8.13810111",
      "-382.6659091"
   ],
   [
      "3",
      "1",
      "Placebo",
      "2227.7",
      "65.84463625",
      "113.7840909"
   ],
   [
      "3",
      "2",
      "Drug",
      "2480",
      "-65.84463625",
      "-113.7840909"
   ],
   [
      "4",
      "1",
      "Drug",
      "2986.9",
      "-11.97780518",
      "-335.0840909"
   ],
   [
      "4",
      "2",
      "Placebo",
      "3177.2",
      "11.97780518",
      "335.0840909"
   ],
   [
      "5",
      "1",
      "Drug",
      "3858.2",
      "20.27127004",
      "100.7159091"
   ],
   [
      "5",
      "2",
      "Placebo",
      "3176.9",
      "-20.27127004",
      "-100.7159091"
   ],
   [
      "6",
      "1",
      "Placebo",
      "4493.7",
      "-97.94574599",
      "165.6840909"
   ],
   [
      "6",
      "2",
      "Drug",
      "4642.2",
      "97.94574599",
      "-165.6840909"
   ],
   [
      "7",
      "1",
      "Placebo",
      "2985.3",
      "23.04562269",
      "292.7340909"
   ],
   [
      "7",
      "2",
      "Drug",
      "2879.7",
      "-23.04562269",
      "-292.7340909"
   ],
   [
      "8",
      "1",
      "Drug",
      "3328.1",
      "-8.064118372",
      "-46.58409091"
   ],
   [
      "8",
      "2",
      "Placebo",
      "2941.4",
      "8.064118372",
      "46.58409091"
   ],
   [
      "9",
      "1",
      "Drug",
      "3005.8",
      "-16.57953144",
      "-253.9840909"
   ],
   [
      "9",
      "2",
      "Placebo",
      "3033.9",
      "16.57953144",
      "253.9840909"
   ],
   [
      "10",
      "1",
      "Placebo",
      "1919.7",
      "76.57213317",
      "-49.41590909"
   ],
   [
      "10",
      "2",
      "Drug",
      "2498.4",
      "-76.57213317",
      "49.41590909"
   ],
   [
      "11",
      "1",
      "Placebo",
      "2496.1",
      "63.84710234",
      "354.6840909"
   ],
   [
      "11",
      "2",
      "Drug",
      "2266.6",
      "-63.84710234",
      "-354.6840909"
   ],
   [
      "12",
      "1",
      "Drug",
      "5624.5",
      "154.6239211",
      "50.16590909"
   ],
   [
      "12",
      "2",
      "Placebo",
      "5044.3",
      "-154.6239211",
      "-50.16590909"
   ],
   [
      "13",
      "1",
      "Placebo",
      "3016",
      "-1.553637485",
      "-9.465909091"
   ],
   [
      "13",
      "2",
      "Drug",
      "3514.8",
      "1.553637485",
      "9.465909091"
   ],
   [
      "14",
      "1",
      "Drug",
      "3354.9",
      "-29.22318126",
      "265.7659091"
   ],
   [
      "14",
      "2",
      "Placebo",
      "2343.5",
      "29.22318126",
      "-265.7659091"
   ],
   [
      "15",
      "1",
      "Placebo",
      "2985.2",
      "10.65351418",
      "125.1840909"
   ],
   [
      "15",
      "2",
      "Drug",
      "3214.7",
      "-10.65351418",
      "-125.1840909"
   ],
   [
      "16",
      "1",
      "Drug",
      "3282.8",
      "-30.40690506",
      "209.9159091"
   ],
   [
      "16",
      "2",
      "Placebo",
      "2383.1",
      "30.40690506",
      "-209.9159091"
   ],
   [
      "17",
      "1",
      "Placebo",
      "3385.5",
      "-17.69667078",
      "142.2340909"
   ],
   [
      "17",
      "2",
      "Drug",
      "3580.9",
      "17.69667078",
      "-142.2340909"
   ],
   [
      "18",
      "1",
      "Drug",
      "5018",
      "99.580764490000007",
      "188.2159091"
   ],
   [
      "18",
      "2",
      "Placebo",
      "4161.7",
      "-99.580764490000007",
      "-188.2159091"
   ],
   [
      "19",
      "1",
      "Placebo",
      "2622",
      "32.70036991",
      "59.53409091"
   ],
   [
      "19",
      "2",
      "Drug",
      "2982.8",
      "-32.70036991",
      "-59.53409091"
   ],
   [
      "20",
      "1",
      "Drug",
      "2472",
      "-76.94204686",
      "27.71590909"
   ],
   [
      "20",
      "2",
      "Placebo",
      "1936.7",
      "76.94204686",
      "-27.71590909"
   ],
   [
      "21",
      "1",
      "Drug",
      "3819.6",
      "3.403205919",
      "289.5159091"
   ],
   [
      "21",
      "2",
      "Placebo",
      "2760.7",
      "-3.403205919",
      "-289.5159091"
   ],
   [
      "22",
      "1",
      "Placebo",
      "3863.5",
      "-63.18125771",
      "5.034090909"
   ],
   [
      "22",
      "2",
      "Drug",
      "4333.3",
      "63.18125771",
      "-5.034090909"
   ]
]
