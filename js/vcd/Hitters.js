var HittersInfo ={
   "reference" : "SAS System for Statistical Graphics, First Edition, Page A2.3",
   "usage" : "data(\"Hitters\")",
   "description" : "Description\nThis data set is deduced from the Baseball fielding data\nset: fielding performance basically includes the numbers of Errors,\nPutouts and Assists made by each player.  In order to reduce the\nnumber of observations, the was compressed by calculating the mean\nnumber of errors, putouts and assists for each team and for only 6\npositions (1B, 2B, 3B, C, OF, SS and UT).  In addition, each of these\nthree variables was scaled to a common range by dividing each variable\nby the maximum of the variable.",
   "title" : "Hitters Data",
   "parameters" : {
      "Errors" : "count the errors made by a player.",
      "Assists" : "are credited to other fielders involved in making\nthat putout.",
      "Positions" : "factor indicating the field position (1B=first\nbaseman, 2B=second baseman, 3B=third baseman, C=catcher,\nOF=outfielder, SS=Short Stop, UT=Utility Players).",
      "Putouts" : "occur when a fielder causes an opposing player to be\ntagged or forced out."
   },
   "format" : "A data frame with 154 observations and 4 variables."
}

var Hitters = [
   [
      "Positions",
      "Putouts",
      "Assists",
      "Errors"
   ],
   [
      "1B",
      "1",
      "0.20944558521560575",
      "0.2962962962962963"
   ],
   [
      "1B",
      "0.7583454281567489",
      "0.1806981519507187",
      "0.48148148148148145"
   ],
   [
      "1B",
      "0.7743105950653121",
      "0.32238193018480493",
      "0.5185185185185185"
   ],
   [
      "1B",
      "0.8867924528301887",
      "0.28542094455852157",
      "0.5555555555555556"
   ],
   [
      "1B",
      "0.6897677793904209",
      "0.1406570841889117",
      "0.2222222222222222"
   ],
   [
      "1B",
      "0.3466376390904693",
      "0.06981519507186858",
      "0.2222222222222222"
   ],
   [
      "1B",
      "0.613933236574746",
      "0.17248459958932238",
      "0.3333333333333333"
   ],
   [
      "1B",
      "0.5863570391872278",
      "0.22176591375770022",
      "0.07407407407407407"
   ],
   [
      "1B",
      "0.909288824383164",
      "0.22792607802874743",
      "0.4074074074074074"
   ],
   [
      "1B",
      "0.8969521044992743",
      "0.20123203285420946",
      "0.6666666666666666"
   ],
   [
      "1B",
      "0.3940493468795356",
      "0.12217659137577003",
      "0.14814814814814814"
   ],
   [
      "1B",
      "0.3711901306240929",
      "0.09240246406570841",
      "0.25925925925925924"
   ],
   [
      "1B",
      "0.8838896952104499",
      "0.2135523613963039",
      "0.37037037037037035"
   ],
   [
      "1B",
      "0.5841799709724238",
      "0.08213552361396304",
      "0.14814814814814814"
   ],
   [
      "1B",
      "0.9346879535558781",
      "0.25564681724845995",
      "0.2037037037037037"
   ],
   [
      "1B",
      "0.6618287373004355",
      "0.1806981519507187",
      "0.3333333333333333"
   ],
   [
      "1B",
      "0.8577648766328012",
      "0.1971252566735113",
      "0.48148148148148145"
   ],
   [
      "1B",
      "0.9579100145137881",
      "0.3408624229979466",
      "0.6296296296296297"
   ],
   [
      "1B",
      "0.841799709724238",
      "0.10882956878850103",
      "0.25925925925925924"
   ],
   [
      "1B",
      "0.3918722786647315",
      "0.08932238193018481",
      "0.2222222222222222"
   ],
   [
      "1B",
      "0.6386066763425254",
      "0.16837782340862423",
      "0.5185185185185185"
   ],
   [
      "1B",
      "0.4521044992743106",
      "0.07186858316221766",
      "0.1111111111111111"
   ],
   [
      "1B",
      "0.888243831640058",
      "0.23613963039014374",
      "0.4074074074074074"
   ],
   [
      "1B",
      "0.95355587808418",
      "0.26899383983572894",
      "0.4444444444444444"
   ],
   [
      "2B",
      "0.204644412191582",
      "1",
      "0.7037037037037037"
   ],
   [
      "2B",
      "0.08817126269956459",
      "0.29876796714579057",
      "0.2037037037037037"
   ],
   [
      "2B",
      "0.21988388969521044",
      "0.9240246406570842",
      "0.5185185185185185"
   ],
   [
      "2B",
      "0.09506531204644413",
      "0.49075975359342916",
      "0.25925925925925924"
   ],
   [
      "2B",
      "0.1600145137880987",
      "0.715605749486653",
      "0.18518518518518517"
   ],
   [
      "2B",
      "0.2663280116110305",
      "0.9753593429158111",
      "0.7037037037037037"
   ],
   [
      "2B",
      "0.25471698113207547",
      "0.9075975359342916",
      "0.6296296296296297"
   ],
   [
      "2B",
      "0.20029027576197386",
      "0.864476386036961",
      "0.4074074074074074"
   ],
   [
      "2B",
      "0.19013062409288825",
      "0.675564681724846",
      "0.5925925925925926"
   ],
   [
      "2B",
      "0.22931785195936139",
      "0.9014373716632443",
      "0.37037037037037035"
   ],
   [
      "2B",
      "0.2663280116110305",
      "0.8870636550308009",
      "0.5925925925925926"
   ],
   [
      "2B",
      "0.22060957910014514",
      "0.7125256673511293",
      "0.37037037037037035"
   ],
   [
      "2B",
      "0.20972423802612483",
      "0.8357289527720739",
      "0.2222222222222222"
   ],
   [
      "2B",
      "0.08925979680696662",
      "0.4219712525667351",
      "0.18518518518518517"
   ],
   [
      "2B",
      "0.15287856797290758",
      "0.5776865160848733",
      "0.5679012345679012"
   ],
   [
      "2B",
      "0.11611030478955008",
      "0.5954825462012321",
      "0.4074074074074074"
   ],
   [
      "2B",
      "0.2104499274310595",
      "0.9034907597535934",
      "0.9259259259259259"
   ],
   [
      "2B",
      "0.20319303338171263",
      "0.9835728952772074",
      "0.18518518518518517"
   ],
   [
      "2B",
      "0.13606676342525398",
      "0.42915811088295686",
      "0.24074074074074073"
   ],
   [
      "2B",
      "0.18505079825834542",
      "0.9240246406570842",
      "0.6296296296296297"
   ],
   [
      "2B",
      "0.20174165457184326",
      "0.8521560574948666",
      "0.5925925925925926"
   ],
   [
      "2B",
      "0.25544267053701014",
      "0.8501026694045175",
      "0.3333333333333333"
   ],
   [
      "2B",
      "0.1204644412191582",
      "0.433264887063655",
      "0.25925925925925924"
   ],
   [
      "2B",
      "0.1625544267053701",
      "0.5872689938398358",
      "0.2962962962962963"
   ],
   [
      "3B",
      "0.04716981132075472",
      "0.5297741273100616",
      "0.2962962962962963"
   ],
   [
      "3B",
      "0.027939042089985485",
      "0.21868583162217659",
      "0.4444444444444444"
   ],
   [
      "3B",
      "0.08780841799709724",
      "0.5482546201232033",
      "0.7037037037037037"
   ],
   [
      "3B",
      "0.05333817126269957",
      "0.2792607802874743",
      "0.25925925925925924"
   ],
   [
      "3B",
      "0.03580067731011127",
      "0.25667351129363447",
      "0.32098765432098764"
   ],
   [
      "3B",
      "0.07619738751814223",
      "0.5954825462012321",
      "0.37037037037037035"
   ],
   [
      "3B",
      "0.07910014513788098",
      "0.5995893223819302",
      "0.9259259259259259"
   ],
   [
      "3B",
      "0.07764876632801161",
      "0.49691991786447637",
      "0.8518518518518519"
   ],
   [
      "3B",
      "0.04245283018867924",
      "0.3049281314168378",
      "0.5925925925925926"
   ],
   [
      "3B",
      "0.07039187227866474",
      "0.44763860369609854",
      "0.5925925925925926"
   ],
   [
      "3B",
      "0.05224963715529753",
      "0.3490759753593429",
      "0.8888888888888888"
   ],
   [
      "3B",
      "0.04608127721335269",
      "0.2997946611909651",
      "0.7592592592592593"
   ],
   [
      "3B",
      "0.08563134978229318",
      "0.6858316221765913",
      "0.7777777777777778"
   ],
   [
      "3B",
      "0.06821480406386067",
      "0.5544147843942505",
      "0.5925925925925926"
   ],
   [
      "3B",
      "0.0693033381712627",
      "0.5",
      "0.6481481481481481"
   ],
   [
      "3B",
      "0.04862119013062409",
      "0.30184804928131415",
      "0.14814814814814814"
   ],
   [
      "3B",
      "0.04354136429608128",
      "0.32238193018480493",
      "0.35185185185185186"
   ],
   [
      "3B",
      "0.06676342525399129",
      "0.5277207392197125",
      "0.7407407407407407"
   ],
   [
      "3B",
      "0.0602322206095791",
      "0.35728952772073924",
      "0.5925925925925926"
   ],
   [
      "3B",
      "0.05297532656023222",
      "0.36344969199178645",
      "0.6666666666666666"
   ],
   [
      "3B",
      "0.07982583454281568",
      "0.6324435318275154",
      "0.5555555555555556"
   ],
   [
      "3B",
      "0.0965166908563135",
      "0.7618069815195072",
      "0.7407407407407407"
   ],
   [
      "3B",
      "0.08055152394775036",
      "0.46406570841889117",
      "0.4074074074074074"
   ],
   [
      "3B",
      "0.04354136429608128",
      "0.3613963039014374",
      "0.2222222222222222"
   ],
   [
      "C",
      "0.4949201741654572",
      "0.19096509240246407",
      "0.48148148148148145"
   ],
   [
      "C",
      "0.4782293178519594",
      "0.10882956878850103",
      "0.25925925925925924"
   ],
   [
      "C",
      "0.6284470246734397",
      "0.13347022587268995",
      "0.2222222222222222"
   ],
   [
      "C",
      "0.5892597968069666",
      "0.17248459958932238",
      "0.4074074074074074"
   ],
   [
      "C",
      "0.36308659893565554",
      "0.10882956878850103",
      "0.18518518518518517"
   ],
   [
      "C",
      "0.5312046444121916",
      "0.1704312114989733",
      "0.48148148148148145"
   ],
   [
      "C",
      "0.2920899854862119",
      "0.0646817248459959",
      "0.4444444444444444"
   ],
   [
      "C",
      "0.3505079825834543",
      "0.09856262833675565",
      "0.2222222222222222"
   ],
   [
      "C",
      "0.45863570391872277",
      "0.08829568788501027",
      "0.37037037037037035"
   ],
   [
      "C",
      "0.49782293178519593",
      "0.0944558521560575",
      "0.14814814814814814"
   ],
   [
      "C",
      "0.38461538461538464",
      "0.11190965092402463",
      "0.48148148148148145"
   ],
   [
      "C",
      "0.2960812772133527",
      "0.08932238193018481",
      "0.14814814814814814"
   ],
   [
      "C",
      "0.23923560716013548",
      "0.04380561259411362",
      "0.18518518518518517"
   ],
   [
      "C",
      "0.29245283018867924",
      "0.07494866529774127",
      "0.2037037037037037"
   ],
   [
      "C",
      "0.34954039671020803",
      "0.063655030800821355",
      "0.17283950617283952"
   ],
   [
      "C",
      "0.2768505079825834",
      "0.045174537987679675",
      "0.18518518518518517"
   ],
   [
      "C",
      "0.2692307692307692",
      "0.061601642710472276",
      "0.3148148148148148"
   ],
   [
      "C",
      "0.5878084179970973",
      "0.2032854209445585",
      "0.6666666666666666"
   ],
   [
      "C",
      "0.3243831640058055",
      "0.0944558521560575",
      "0.18518518518518517"
   ],
   [
      "C",
      "0.3483309143686502",
      "0.11704312114989733",
      "0.16666666666666666"
   ],
   [
      "C",
      "0.2539912917271408",
      "0.06878850102669405",
      "0.14814814814814814"
   ],
   [
      "C",
      "0.2637880986937591",
      "0.07905544147843943",
      "0.2962962962962963"
   ],
   [
      "C",
      "0.3867924528301887",
      "0.08213552361396304",
      "0.14814814814814814"
   ],
   [
      "C",
      "0.5145137880986937",
      "0.08418891170431211",
      "0.25925925925925924"
   ],
   [
      "OF",
      "0.05841799709724238",
      "0.006160164271047228",
      "0.07407407407407407"
   ],
   [
      "OF",
      "0.16110304789550073",
      "0.01026694045174538",
      "0.18518518518518517"
   ],
   [
      "OF",
      "0.10449927431059507",
      "0.012320328542094456",
      "0.18518518518518517"
   ],
   [
      "OF",
      "0.11683599419448476",
      "0.006160164271047228",
      "0.1111111111111111"
   ],
   [
      "OF",
      "0.06386066763425254",
      "0",
      "0.1111111111111111"
   ],
   [
      "OF",
      "0.11901306240928883",
      "0.003080082135523614",
      "0.1111111111111111"
   ],
   [
      "OF",
      "0.04716981132075472",
      "0",
      "0"
   ],
   [
      "OF",
      "0.08962264150943396",
      "0.008213552361396304",
      "0.09259259259259259"
   ],
   [
      "OF",
      "0.10522496371552975",
      "0.01026694045174538",
      "0.25925925925925924"
   ],
   [
      "OF",
      "0.11248185776487664",
      "0.006160164271047228",
      "0.07407407407407407"
   ],
   [
      "OF",
      "0.08563134978229318",
      "0",
      "0"
   ],
   [
      "OF",
      "0.07039187227866474",
      "0.004106776180698152",
      "0.07407407407407407"
   ],
   [
      "OF",
      "0.09845186260280599",
      "0.009582477754962355",
      "0.1111111111111111"
   ],
   [
      "OF",
      "0.05805515239477504",
      "0.008213552361396304",
      "0"
   ],
   [
      "OF",
      "0.10304789550072568",
      "0.011293634496919919",
      "0.07407407407407407"
   ],
   [
      "OF",
      "0.07764876632801161",
      "0.006160164271047228",
      "0.1111111111111111"
   ],
   [
      "OF",
      "0.14731494920174165",
      "0.006160164271047228",
      "0.1111111111111111"
   ],
   [
      "OF",
      "0.07474600870827286",
      "0.01026694045174538",
      "0.04938271604938271"
   ],
   [
      "OF",
      "0.1320754716981132",
      "0.018480492813141684",
      "0.14814814814814814"
   ],
   [
      "OF",
      "0.08708272859216255",
      "0.013347022587268994",
      "0.07407407407407407"
   ],
   [
      "OF",
      "0.14513788098693758",
      "0.014373716632443531",
      "0.2222222222222222"
   ],
   [
      "SS",
      "0.10377358490566038",
      "0.5954825462012321",
      "0.7037037037037037"
   ],
   [
      "SS",
      "0.1741654571843251",
      "0.9897330595482546",
      "0.48148148148148145"
   ],
   [
      "SS",
      "0.06821480406386067",
      "0.28952772073921973",
      "0.46296296296296297"
   ],
   [
      "SS",
      "0.17851959361393324",
      "0.7987679671457906",
      "0.6666666666666666"
   ],
   [
      "SS",
      "0.21081277213352684",
      "0.9486652977412731",
      "1"
   ],
   [
      "SS",
      "0.07764876632801161",
      "0.4209445585215606",
      "0.5925925925925926"
   ],
   [
      "SS",
      "0.1676342525399129",
      "0.7679671457905544",
      "0.6666666666666666"
   ],
   [
      "SS",
      "0.17271407837445574",
      "0.9137577002053389",
      "0.8148148148148148"
   ],
   [
      "SS",
      "0.0899854862119013",
      "0.4271047227926078",
      "0.3148148148148148"
   ],
   [
      "SS",
      "0.08091436865021771",
      "0.4722792607802875",
      "0.46296296296296297"
   ],
   [
      "SS",
      "0.12481857764876633",
      "0.6509240246406571",
      "0.9259259259259259"
   ],
   [
      "SS",
      "0.15384615384615385",
      "0.6714579055441479",
      "0.7407407407407407"
   ],
   [
      "SS",
      "0.16545718432510886",
      "0.7741273100616016",
      "0.9629629629629629"
   ],
   [
      "SS",
      "0.06531204644412192",
      "0.35010266940451745",
      "0.4444444444444444"
   ],
   [
      "SS",
      "0.09905660377358491",
      "0.5318275154004107",
      "0.5185185185185185"
   ],
   [
      "SS",
      "0.204644412191582",
      "0.864476386036961",
      "0.9259259259259259"
   ],
   [
      "SS",
      "0.16618287373004353",
      "0.8336755646817249",
      "0.8148148148148148"
   ],
   [
      "SS",
      "0.08490566037735849",
      "0.5523613963039015",
      "0.4444444444444444"
   ],
   [
      "SS",
      "0.15021770682148042",
      "0.7351129363449692",
      "0.7407407407407407"
   ],
   [
      "SS",
      "0.1806966618287373",
      "0.9117043121149897",
      "0.5925925925925926"
   ],
   [
      "SS",
      "0.1516690856313498",
      "0.7638603696098563",
      "0.6296296296296297"
   ],
   [
      "SS",
      "0.16618287373004353",
      "0.9301848049281314",
      "0.5555555555555556"
   ],
   [
      "SS",
      "0.14223512336719885",
      "0.7268993839835729",
      "0.5555555555555556"
   ],
   [
      "SS",
      "0.21335268505079827",
      "0.9137577002053389",
      "0.48148148148148145"
   ],
   [
      "UT",
      "0.12119013062409288",
      "0.03696098562628337",
      "0.2222222222222222"
   ],
   [
      "UT",
      "0.16473149492017417",
      "0.0811088295687885",
      "0.3333333333333333"
   ],
   [
      "UT",
      "0.04499274310595065",
      "0.18480492813141683",
      "0.1111111111111111"
   ],
   [
      "UT",
      "0.09579100145137881",
      "0.018480492813141684",
      "0"
   ],
   [
      "UT",
      "0.11103047895500726",
      "0.45790554414784396",
      "0.37037037037037035"
   ],
   [
      "UT",
      "0.07692307692307693",
      "0.29568788501026694",
      "0.25925925925925924"
   ],
   [
      "UT",
      "0.07474600870827286",
      "0.17248459958932238",
      "0.18518518518518517"
   ],
   [
      "UT",
      "0.2227866473149492",
      "0.0513347022587269",
      "0.037037037037037035"
   ],
   [
      "UT",
      "0.15965166908563136",
      "0.03285420944558522",
      "0.14814814814814814"
   ],
   [
      "UT",
      "0.05878084179970972",
      "0.30184804928131415",
      "0.14814814814814814"
   ],
   [
      "UT",
      "0.05805515239477504",
      "0.09240246406570841",
      "0.2962962962962963"
   ],
   [
      "UT",
      "0.06313497822931785",
      "0.3408624229979466",
      "0.5185185185185185"
   ],
   [
      "UT",
      "0.12917271407837447",
      "0.09240246406570841",
      "0.14814814814814814"
   ]
]