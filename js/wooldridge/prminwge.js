var prminwgeInfo ={
   "format" : "A data.frame with 38 observations on 25 variables:",
   "parameters" : {
      "avgwage" : " wghted avg hrly wge, 44 indust",
      "post74" : " time trend",
      "lprgnp" : " log(prgnp)",
      "prepopf" : " PR employ/popul ratio, alter.",
      "prepop" : " PR employ/popul ratio",
      "lusgnp" : " log(usgnp)",
      "prunemp" : " PR unemployment rate",
      "covt" : " economy-wide coverage of min wg",
      "usgnp" : " US GNP",
      "lkaitz" : " log(kaitz)",
      "prgnp" : " PR GNP",
      "mincov" : " (avgmin/avgwage)*avgcov",
      "lprunemp" : " log(prunemp)",
      "lprepop" : " log(prepop)",
      "t" : " time trend",
      "prdef" : " Puerto Rican price deflator",
      "avgmin" : " weighted avg min wge, 44 indust",
      "mfgwage" : " avg manuf. wage",
      "lmincov" : " log(mincov)",
      "kaitz" : " Kaitz min wage index",
      "avgcov" : " wghted avg coverage, 8 indust",
      "lprep_1" : " lprepop[_n-1]",
      "lavgmin" : " log(avgmin)",
      "year" : " 1950-1987",
      "lprun_1" : " lprunemp[_n-1]"
   },
   "title" : "prminwge",
   "description" : "Description\nWooldridge Source: A.J. Castillo-Freeman and R.B. Freeman (1992), âWhen the Minimum Wage Really Bites: The Effect of the U.S.-Level Minimum Wage on Puerto Rico,â in Immigration and the Work Force, edited by G.J. Borjas and R.B. Freeman, 177-211. Chicago: University of Chicago Press. The data are reported in the article. Data loads lazily.",
   "usage" : "data('prminwge')",
   "reference" : "Given the ongoing debate on the employment effects of the minimum wage, this would be a great data set to try to update. The coverage rates are the most difficult variables to construct."
}

var prminwge = [
   [
      "year",
      "avgmin",
      "avgwage",
      "kaitz",
      "avgcov",
      "covt",
      "mfgwage",
      "prdef",
      "prepop",
      "prepopf",
      "prgnp",
      "prunemp",
      "usgnp",
      "t",
      "post74",
      "lprunemp",
      "lprgnp",
      "lusgnp",
      "lkaitz",
      "lprun_1",
      "lprepop",
      "lprep_1",
      "mincov",
      "lmincov",
      "lavgmin"
   ],
   [
      "1950",
      "0.1979999989271164",
      "0.39800000190734863",
      "0.1550000011920929",
      "0.20100000500679016",
      "0.28999999165534973",
      "0.4300000071525574",
      "0.859000027179718",
      "0.4699999988079071",
      "0.4699999988079071",
      "878.70001220703125",
      "15.399999618530273",
      "1203.699951171875",
      "1",
      "0",
      "2.7343673706054688",
      "6.778443336486816",
      "7.093155384063721",
      "-1.8643301725387573",
      "",
      "-0.7550225853919983",
      "",
      "0.09999497979879379",
      "-2.3026351928710938",
      "-1.61948823928833"
   ],
   [
      "1951",
      "0.20900000631809235",
      "0.4099999964237213",
      "0.164000004529953",
      "0.2070000022649765",
      "0.28999999165534973",
      "0.44999998807907104",
      "0.8809999823570251",
      "0.4490000009536743",
      "0.4490000009536743",
      "925",
      "16",
      "1328.199951171875",
      "2",
      "0",
      "2.7725887298583984",
      "6.829793930053711",
      "7.191579818725586",
      "-1.8078888654708862",
      "-1.870802640914917",
      "-0.8007323741912842",
      "-0.7550225853919983",
      "0.10551951825618744",
      "-2.248859405517578",
      "-1.5654209852218628"
   ],
   [
      "1952",
      "0.22499999403953552",
      "0.42100000381469727",
      "0.18000000715255737",
      "0.22599999606609344",
      "0.28999999165534973",
      "0.47999998927116394",
      "0.953000009059906",
      "0.4339999854564667",
      "0.4339999854564667",
      "1015.9000244140625",
      "14.800000190734863",
      "1380",
      "3",
      "0",
      "2.694627285003662",
      "6.923530101776123",
      "7.229838848114014",
      "-1.7147983312606812",
      "-1.8325815200805664",
      "-0.8347107768058777",
      "-0.8007323741912842",
      "0.12078384310007095",
      "-2.113752841949463",
      "-1.491654872894287"
   ],
   [
      "1953",
      "0.3109999895095825",
      "0.47999998927116394",
      "0.2290000021457672",
      "0.23100000619888306",
      "0.28999999165534973",
      "0.5",
      "0.9700000286102295",
      "0.42800000309944153",
      "0.42800000309944153",
      "1081.300048828125",
      "14.5",
      "1435.300048828125",
      "4",
      "0",
      "2.6741485595703125",
      "6.98591947555542",
      "7.269129276275635",
      "-1.474033236503601",
      "-1.9105429649353027",
      "-0.8486320972442627",
      "-0.8347107768058777",
      "0.14966875314712524",
      "-1.899330735206604",
      "-1.1679624319076538"
   ],
   [
      "1954",
      "0.31299999356269836",
      "0.5080000162124634",
      "0.210999995470047",
      "0.2240000069141388",
      "0.28999999165534973",
      "0.5199999809265137",
      "1",
      "0.41499999165534973",
      "0.41499999165534973",
      "1104.4000244140625",
      "15.299999237060547",
      "1416.199951171875",
      "5",
      "0",
      "2.7278528213500977",
      "7.0070576667785645",
      "7.255732536315918",
      "-1.5558971166610718",
      "-1.9310215711593628",
      "-0.87947678565979",
      "-0.8486320972442627",
      "0.1380157470703125",
      "-1.9803874492645264",
      "-1.16155207157135"
   ],
   [
      "1955",
      "0.36899998784065247",
      "0.546999990940094",
      "0.23100000619888306",
      "0.23600000143051147",
      "0.28999999165534973",
      "0.5699999928474426",
      "1.003000020980835",
      "0.4189999997615814",
      "0.4189999997615814",
      "1138.5",
      "13.199999809265137",
      "1494.9000244140625",
      "6",
      "0",
      "2.580216884613037",
      "7.037467002868652",
      "7.309814453125",
      "-1.4653375148773193",
      "-1.8773174285888672",
      "-0.8698843717575073",
      "-0.87947678565979",
      "0.1592029184103012",
      "-1.8375756740570068",
      "-0.9969586730003357"
   ],
   [
      "1956",
      "0.44699999690055847",
      "0.6010000109672546",
      "0.25699999928474426",
      "0.24500000476837158",
      "0.28999999165534973",
      "0.6399999856948853",
      "1.0110000371932983",
      "0.41200000047683716",
      "0.41200000047683716",
      "1185.0999755859375",
      "13.300000190734863",
      "1525.5999755859375",
      "7",
      "0",
      "2.587764024734497",
      "7.077582359313965",
      "7.330142974853516",
      "-1.358679175376892",
      "-2.0249533653259277",
      "-0.8867319226264954",
      "-0.8698843717575073",
      "0.18222129344940186",
      "-1.702533483505249",
      "-0.8051967024803162"
   ],
   [
      "1957",
      "0.4880000054836273",
      "0.6850000023841858",
      "0.25099998712539673",
      "0.24400000274181366",
      "0.28999999165534973",
      "0.7599999904632568",
      "1.034999966621399",
      "0.41200000047683716",
      "0.41200000047683716",
      "1221.800048828125",
      "12.800000190734863",
      "1551.0999755859375",
      "8",
      "0",
      "2.549445152282715",
      "7.1080803871154785",
      "7.346719741821289",
      "-1.3823024034500122",
      "-2.0174062252044678",
      "-0.8867319226264954",
      "-0.8867319226264954",
      "0.17382773756980896",
      "-1.7496905326843262",
      "-0.7174398899078369"
   ],
   [
      "1958",
      "0.5550000071525574",
      "0.7160000205039978",
      "0.257999986410141",
      "0.23800000548362732",
      "0.28999999165534973",
      "0.8299999833106995",
      "1.0889999866485596",
      "0.3970000147819519",
      "0.3970000147819519",
      "1258.4000244140625",
      "14.200000762939453",
      "1539.199951171875",
      "9",
      "0",
      "2.6532421112060547",
      "7.137596607208252",
      "7.339017868041992",
      "-1.3547956943511963",
      "-2.055724859237671",
      "-0.9238189458847046",
      "-0.8867319226264954",
      "0.18448324501514435",
      "-1.6901966333389282",
      "-0.5887871384620667"
   ],
   [
      "1959",
      "0.5879999995231628",
      "0.7889999747276306",
      "0.26600000262260437",
      "0.25999999046325684",
      "0.28999999165534973",
      "0.8700000047683716",
      "1.1100000143051147",
      "0.39399999380111694",
      "0.39399999380111694",
      "1363.5999755859375",
      "13.300000190734863",
      "1629.0999755859375",
      "10",
      "0",
      "2.587764024734497",
      "7.217883586883545",
      "7.395782947540283",
      "-1.3242589235305786",
      "-1.9519281387329102",
      "-0.9314044117927551",
      "-0.9238189458847046",
      "0.19376425445079803",
      "-1.641113042831421",
      "-0.5310283303260803"
   ],
   [
      "1960",
      "0.6159999966621399",
      "0.8399999737739563",
      "0.2680000066757202",
      "0.27000001072883606",
      "0.28999999165534973",
      "0.9200000166893005",
      "1.1380000114440918",
      "0.40299999713897705",
      "0.40299999713897705",
      "1473.199951171875",
      "11.800000190734863",
      "1665.300048828125",
      "11",
      "0",
      "2.468099594116211",
      "7.295192241668701",
      "7.417760372161865",
      "-1.3167682886123657",
      "-2.0174062252044678",
      "-0.9088187217712402",
      "-0.9314044117927551",
      "0.1980000138282776",
      "-1.6194881200790405",
      "-0.48450833559036255"
   ],
   [
      "1961",
      "0.6079999804496765",
      "0.875",
      "0.25099998712539673",
      "0.26899999380111694",
      "0.28999999165534973",
      "0.9900000095367432",
      "1.1729999780654907",
      "0.3970000147819519",
      "0.3970000147819519",
      "1562.800048828125",
      "12.700000762939453",
      "1708.699951171875",
      "12",
      "0",
      "2.54160213470459",
      "7.354234218597412",
      "7.443488121032715",
      "-1.3823024034500122",
      "-2.137070655822754",
      "-0.9238189458847046",
      "-0.9088187217712402",
      "0.1869165599346161",
      "-1.6770929098129272",
      "-0.4975804388523102"
   ],
   [
      "1962",
      "0.7070000171661377",
      "0.9330000281333923",
      "0.27000001072883606",
      "0.27900001406669617",
      "0.28999999165534973",
      "1.059999942779541",
      "1.215999960899353",
      "0.38499999046325684",
      "0.38499999046325684",
      "1683.9000244140625",
      "12.800000190734863",
      "1799.4000244140625",
      "13",
      "0",
      "2.549445152282715",
      "7.428867816925049",
      "7.495208740234375",
      "-1.309333324432373",
      "-2.063568115234375",
      "-0.9545119404792786",
      "-0.9238189458847046",
      "0.211418017745018",
      "-1.5539180040359497",
      "-0.34672459959983826"
   ],
   [
      "1963",
      "0.7229999899864197",
      "1.0360000133514404",
      "0.2549999952316284",
      "0.27900001406669617",
      "0.28999999165534973",
      "1.1299999952316284",
      "1.246999979019165",
      "0.39500001072883606",
      "0.39500001072883606",
      "1820.699951171875",
      "11",
      "1873.300048828125",
      "14",
      "0",
      "2.397895336151123",
      "7.506976127624512",
      "7.535456657409668",
      "-1.3664917945861816",
      "-2.055724859237671",
      "-0.9288694858551025",
      "-0.9545119404792786",
      "0.19470752775669098",
      "-1.6362566947937012",
      "-0.32434606552124023"
   ],
   [
      "1964",
      "0.8090000152587891",
      "1.097000002861023",
      "0.27399998903274536",
      "0.2939999997615814",
      "0.3100000023841858",
      "1.1799999475479126",
      "1.2979999780654907",
      "0.3959999978542328",
      "0.3959999978542328",
      "1916.800048828125",
      "11.200000762939453",
      "1973.300048828125",
      "15",
      "0",
      "2.4159138202667236",
      "7.558412551879883",
      "7.587462425231934",
      "-1.2946271896362305",
      "-2.207274913787842",
      "-0.9263410568237305",
      "-0.9288694858551025",
      "0.21681495010852814",
      "-1.5287110805511475",
      "-0.21195633709430695"
   ],
   [
      "1965",
      "0.8339999914169312",
      "1.1759999990463257",
      "0.2709999978542328",
      "0.3019999861717224",
      "0.3100000023841858",
      "1.2300000190734863",
      "1.3270000219345093",
      "0.4009999930858612",
      "0.4009999930858612",
      "2083",
      "11.699999809265137",
      "2087.60009765625",
      "16",
      "0",
      "2.4595887660980225",
      "7.64156436920166",
      "7.643770217895508",
      "-1.3056365251541138",
      "-2.189256429672241",
      "-0.9137938618659973",
      "-0.9263410568237305",
      "0.21417345106601715",
      "-1.5409690141677856",
      "-0.18152189254760742"
   ],
   [
      "1966",
      "0.8539999723434448",
      "1.2879999876022339",
      "0.32499998807907104",
      "0.4440000057220459",
      "0.4399999976158142",
      "1.2899999618530273",
      "1.3580000400543213",
      "0.39899998903274536",
      "0.39899998903274536",
      "2223.199951171875",
      "12.300000190734863",
      "2208.300048828125",
      "17",
      "0",
      "2.509599208831787",
      "7.706702709197998",
      "7.699978351593018",
      "-1.1239300966262817",
      "-2.1455812454223633",
      "-0.9187939167022705",
      "-0.9137938618659973",
      "0.29439130425453186",
      "-1.222845435142517",
      "-0.15782411396503448"
   ],
   [
      "1967",
      "0.9710000157356262",
      "1.371000051498413",
      "0.36500000953674316",
      "0.4480000138282776",
      "0.4399999976158142",
      "1.3899999856948853",
      "1.4210000038146973",
      "0.39899998903274536",
      "0.39899998903274536",
      "2328.39990234375",
      "11.59999942779541",
      "2271.39990234375",
      "18",
      "0",
      "2.451004981994629",
      "7.752936363220215",
      "7.728151798248291",
      "-1.0078579187393188",
      "-2.0955708026885986",
      "-0.9187939167022705",
      "-0.9187939167022705",
      "0.3172924816608429",
      "-1.1479312181472778",
      "-0.029428794980049133"
   ],
   [
      "1968",
      "1.1039999723434448",
      "1.5119999647140503",
      "0.38100001215934753",
      "0.45500001311302185",
      "0.4399999976158142",
      "1.5499999523162842",
      "1.5",
      "0.40299999713897705",
      "0.40299999713897705",
      "2455.300048828125",
      "10.300000190734863",
      "2365.60009765625",
      "19",
      "0",
      "2.332144021987915",
      "7.806004047393799",
      "7.768786907196045",
      "-0.9649558663368225",
      "-2.154165029525757",
      "-0.9088187217712402",
      "-0.9187939167022705",
      "0.33222222328186035",
      "-1.101951241493225",
      "0.0989399254322052"
   ],
   [
      "1969",
      "1.1490000486373901",
      "1.6670000553131104",
      "0.36000001430511475",
      "0.45500001311302185",
      "0.49000000953674316",
      "1.649999976158142",
      "1.5520000457763672",
      "0.39899998903274536",
      "0.39899998903274536",
      "2684",
      "10.300000190734863",
      "2423.300048828125",
      "20",
      "0",
      "2.332144021987915",
      "7.895063400268555",
      "7.792885780334473",
      "-1.0216511487960815",
      "-2.27302622795105",
      "-0.9187939167022705",
      "-0.9088187217712402",
      "0.31361427903175354",
      "-1.1595914363861084",
      "0.1388920396566391"
   ],
   [
      "1970",
      "1.2089999914169312",
      "1.8559999465942383",
      "0.34700000286102295",
      "0.4580000042915344",
      "0.4699999988079071",
      "1.7599999904632568",
      "1.6160000562667847",
      "0.42800000309944153",
      "0.39500001072883606",
      "2901.39990234375",
      "10.699999809265137",
      "2416.199951171875",
      "21",
      "0",
      "2.370243787765503",
      "7.9729485511779785",
      "7.789951324462891",
      "-1.0584304332733154",
      "-2.27302622795105",
      "-0.8486320972442627",
      "-0.9187939167022705",
      "0.2983416020870209",
      "-1.209516167640686",
      "0.18979357182979584"
   ],
   [
      "1971",
      "1.2239999771118164",
      "1.9900000095367432",
      "0.3310000002384186",
      "0.4569999873638153",
      "0.4699999988079071",
      "1.8700000047683716",
      "1.7079999446868896",
      "0.4230000078678131",
      "0.39800000190734863",
      "3075.60009765625",
      "11.59999942779541",
      "2484.800048828125",
      "22",
      "0",
      "2.451004981994629",
      "8.031255722045898",
      "7.8179473876953125",
      "-1.1056369543075562",
      "-2.234926462173462",
      "-0.8603830933570862",
      "-0.8486320972442627",
      "0.2810894250869751",
      "-1.2690824270248413",
      "0.20212416350841522"
   ],
   [
      "1972",
      "1.2569999694824219",
      "2.1440000534057617",
      "0.3160000145435333",
      "0.4490000009536743",
      "0.4699999988079071",
      "2",
      "1.7799999713897705",
      "0.4230000078678131",
      "0.3930000066757202",
      "3215.89990234375",
      "11.90000057220459",
      "2608.5",
      "23",
      "0",
      "2.4765384197235107",
      "8.075862884521484",
      "7.866530418395996",
      "-1.1520130634307861",
      "-2.154165029525757",
      "-0.8603830933570862",
      "-0.8603830933570862",
      "0.2632429897785187",
      "-1.334677815437317",
      "0.22872790694236755"
   ],
   [
      "1973",
      "1.2619999647140503",
      "2.2809998989105225",
      "0.30399999022483826",
      "0.4519999921321869",
      "0.4699999988079071",
      "2.130000114440918",
      "1.8170000314712524",
      "0.42100000381469727",
      "0.3889999985694885",
      "3450.300048828125",
      "11.59999942779541",
      "2744.10009765625",
      "24",
      "0",
      "2.451004981994629",
      "8.14621639251709",
      "7.917208671569824",
      "-1.1907275915145874",
      "-2.128631830215454",
      "-0.8651224374771118",
      "-0.8603830933570862",
      "0.2500762939453125",
      "-1.3859891891479492",
      "0.2326977401971817"
   ],
   [
      "1974",
      "1.680999994277954",
      "2.4519999027252197",
      "0.38100001215934753",
      "0.5440000295639038",
      "0.6000000238418579",
      "2.319999933242798",
      "1.9459999799728394",
      "0.4050000011920929",
      "0.3580000102519989",
      "3493.60009765625",
      "13.199999809265137",
      "2729.300048828125",
      "25",
      "1",
      "2.580216884613037",
      "8.158687591552734",
      "7.911800384521484",
      "-0.9649558663368225",
      "-2.154165029525757",
      "-0.9038681983947754",
      "-0.8651224374771118",
      "0.37294620275497437",
      "-0.9863210916519165",
      "0.5193888545036316"
   ],
   [
      "1975",
      "1.871000051498413",
      "2.562000036239624",
      "0.4339999854564667",
      "0.593999981880188",
      "0.6600000262260437",
      "2.559999942779541",
      "2.0820000171661377",
      "0.36800000071525574",
      "0.335999995470047",
      "3424.699951171875",
      "18.099998474121094",
      "2695",
      "26",
      "2",
      "2.895911931991577",
      "8.138769149780273",
      "7.899153709411621",
      "-0.8347107768058777",
      "-2.0249533653259277",
      "-0.9996723532676697",
      "-0.9038681983947754",
      "0.43379154801368713",
      "-0.8351911902427673",
      "0.626473069190979"
   ],
   [
      "1976",
      "2.0339999198913574",
      "2.680999994277954",
      "0.44200000166893005",
      "0.5879999995231628",
      "0.6399999856948853",
      "2.7799999713897705",
      "2.1740000247955322",
      "0.36399999260902405",
      "0.33399999141693115",
      "3461.60009765625",
      "19.5",
      "2826.699951171875",
      "27",
      "3",
      "2.970414400100708",
      "8.149486541748047",
      "7.946865081787109",
      "-0.8164454102516174",
      "-1.7092583179473877",
      "-1.0106014013290405",
      "-0.9996723532676697",
      "0.446099191904068",
      "-0.8072139620780945",
      "0.7100042700767517"
   ],
   [
      "1977",
      "2.197999954223633",
      "3.0230000019073486",
      "0.4350000023841858",
      "0.5899999737739563",
      "0.6399999856948853",
      "3.0199999809265137",
      "2.240000009536743",
      "0.3580000102519989",
      "0.36399999260902405",
      "3623.5",
      "19.899999618530273",
      "2958.60009765625",
      "28",
      "4",
      "2.990719795227051",
      "8.195196151733398",
      "7.992471694946289",
      "-0.8324092626571655",
      "-1.6347557306289673",
      "-1.0272222757339478",
      "-1.0106014013290405",
      "0.4289844334125519",
      "-0.8463346362113953",
      "0.7875478267669678"
   ],
   [
      "1978",
      "2.509000062942505",
      "3.322999954223633",
      "0.4560000002384186",
      "0.5960000157356262",
      "0.6399999856948853",
      "3.359999895095825",
      "2.3399999141693115",
      "0.3619999885559082",
      "0.36000001430511475",
      "3817.39990234375",
      "18.099998474121094",
      "3115.199951171875",
      "29",
      "5",
      "2.895911931991577",
      "8.24732494354248",
      "8.044048309326172",
      "-0.7852624654769897",
      "-1.614450454711914",
      "-1.016111135482788",
      "-1.0272222757339478",
      "0.4500042498111725",
      "-0.798498272895813",
      "0.9198842644691467"
   ],
   [
      "1979",
      "2.7679998874664307",
      "3.5889999866485596",
      "0.46799999475479126",
      "0.593999981880188",
      "0.6399999856948853",
      "3.690000057220459",
      "2.4830000400543213",
      "0.36000001430511475",
      "0.36000001430511475",
      "4025",
      "17",
      "3192.39990234375",
      "30",
      "6",
      "2.8332133293151855",
      "8.300280570983887",
      "8.068528175354004",
      "-0.7592869997024536",
      "-1.7092583179473877",
      "-1.0216511487960815",
      "-1.016111135482788",
      "0.45811977982521057",
      "-0.7806246280670166",
      "1.0181249380111694"
   ],
   [
      "1980",
      "2.996999979019165",
      "3.882999897003174",
      "0.460999995470047",
      "0.5889999866485596",
      "0.6399999856948853",
      "4.019999980926514",
      "2.7160000801086426",
      "0.35899999737739563",
      "0.35499998927116394",
      "4076.800048828125",
      "17.100000381469727",
      "3187.10009765625",
      "31",
      "7",
      "2.839078426361084",
      "8.313067436218262",
      "8.066866874694824",
      "-0.774357259273529",
      "-1.7719568014144897",
      "-1.024432897567749",
      "-1.0216511487960815",
      "0.45460546016693115",
      "-0.7883253693580627",
      "1.0976117849349976"
   ],
   [
      "1981",
      "3.2639999389648438",
      "4.181000232696533",
      "0.46700000762939453",
      "0.5870000123977661",
      "0.6399999856948853",
      "4.389999866485596",
      "2.9539999961853027",
      "0.34299999475479126",
      "0.328000009059906",
      "4127",
      "19.899999618530273",
      "3248.800048828125",
      "32",
      "8",
      "2.990719795227051",
      "8.325305938720703",
      "8.086041450500488",
      "-0.7614260315895081",
      "-1.7660917043685913",
      "-1.070024847984314",
      "-1.024432897567749",
      "0.4582558870315552",
      "-0.780327558517456",
      "1.1829534769058228"
   ],
   [
      "1982",
      "3.305000066757202",
      "4.317999839782715",
      "0.460999995470047",
      "0.5849999785423279",
      "0.6399999856948853",
      "4.639999866485596",
      "3.174999952316284",
      "0.3179999887943268",
      "0.3140000104904175",
      "3976.5",
      "22.799999237060547",
      "3166",
      "33",
      "9",
      "3.126760482788086",
      "8.28815746307373",
      "8.060224533081055",
      "-0.774357259273529",
      "-1.614450454711914",
      "-1.145703911781311",
      "-1.070024847984314",
      "0.44775938987731934",
      "-0.8034992814064026",
      "1.1954364776611328"
   ],
   [
      "1983",
      "3.3499999046325684",
      "4.455999851226807",
      "0.45399999618530273",
      "0.5830000042915344",
      "0.6399999856948853",
      "4.829999923706055",
      "3.321000099182129",
      "0.32100000977516174",
      "0.32899999618530273",
      "3894.800048828125",
      "23.399999618530273",
      "3279.10009765625",
      "34",
      "10",
      "3.152735948562622",
      "8.2673978805542",
      "8.095324516296387",
      "-0.7896580696105957",
      "-1.4784096479415894",
      "-1.1363141536712646",
      "-1.145703911781311",
      "0.43829667568206787",
      "-0.8248592615127563",
      "1.2089602947235107"
   ],
   [
      "1984",
      "3.3499999046325684",
      "4.498000144958496",
      "0.4490000009536743",
      "0.5860000252723694",
      "0.6399999856948853",
      "5.019999980926514",
      "3.4609999656677246",
      "0.33399999141693115",
      "0.3319999873638153",
      "4048.39990234375",
      "20.700000762939453",
      "3501.39990234375",
      "35",
      "11",
      "3.0301337242126465",
      "8.306077003479004",
      "8.160918235778809",
      "-0.8007323741912842",
      "-1.4524341821670532",
      "-1.0966143608093262",
      "-1.1363141536712646",
      "0.4364384114742279",
      "-0.8291079998016357",
      "1.2089602947235107"
   ],
   [
      "1985",
      "3.3499999046325684",
      "4.565000057220459",
      "0.4399999976158142",
      "0.5789999961853027",
      "0.6399999856948853",
      "5.190000057220459",
      "3.5480000972747803",
      "0.3310000002384186",
      "0.33799999952316284",
      "4172.7998046875",
      "21.799999237060547",
      "3607.5",
      "36",
      "12",
      "3.0819098949432373",
      "8.336342811584473",
      "8.190770149230957",
      "-0.8209805488586426",
      "-1.5750365257263184",
      "-1.1056369543075562",
      "-1.0966143608093262",
      "0.42489591240882874",
      "-0.8559110760688782",
      "1.2089602947235107"
   ],
   [
      "1986",
      "3.3499999046325684",
      "4.724999904632568",
      "0.4259999990463257",
      "0.5809999704360962",
      "0.6399999856948853",
      "5.309999942779541",
      "3.697000026702881",
      "0.35100001096725464",
      "0.3619999885559082",
      "4281.60009765625",
      "18.899999618530273",
      "3713.300048828125",
      "37",
      "13",
      "2.939162015914917",
      "8.362082481384277",
      "8.21967601776123",
      "-0.8533159494400024",
      "-1.523260235786438",
      "-1.0469690561294556",
      "-1.1056369543075562",
      "0.41192591190338135",
      "-0.8869117498397827",
      "1.2089602947235107"
   ],
   [
      "1987",
      "3.3499999046325684",
      "4.879000186920166",
      "0.4090000092983246",
      "0.5820000171661377",
      "0.6399999856948853",
      "5.329999923706055",
      "3.7869999408721924",
      "0.36899998784065247",
      "0.37700000405311584",
      "4496.7001953125",
      "16.799999237060547",
      "3819.60009765625",
      "38",
      "14",
      "2.8213789463043213",
      "8.411099433898926",
      "8.24790096282959",
      "-0.8940401077270508",
      "-1.6660082340240479",
      "-0.9969586730003357",
      "-1.0469690561294556",
      "0.3996105492115021",
      "-0.9172648191452026",
      "1.2089602947235107"
   ]
]