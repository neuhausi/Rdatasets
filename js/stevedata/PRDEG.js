var PRDEGInfo ={
   "title" : "Property Rights, Democracy, and Economic Growth",
   "description" : "Description\nA data set for replicating David Leblang's (1996) analysis on property rights,\ndemocracy, and economic growth.",
   "usage" : "PRDEG",
   "reference" : "Data come Joshua Alley's Github repository on cross-sectional OLS\nregressions. Please read David Leblang's (1996) article for some more detail\nabout the variables included in the model.",
   "parameters" : {
      "sec" : "a numeric vector for secondary school attainment",
      "xcontrol" : "a numeric vector for exchange controls",
      "rgdp" : "a numeric vector for the initial level of real per capita GDP",
      "country" : "a character vector for the country",
      "grow" : "a numeric vector for per capita growth rate",
      "democ" : "a numeric vector for the level of democracy",
      "pri" : "a numeric vector for primary school attainment",
      "decade" : "a numeric vector for a decade",
      "private" : "a numeric vector for credit allocated to private enterprise",
      "levine" : "a numeric vector that servies as a cross-section identifier"
   },
   "format" : "A data frame with 147 observations on the following 10 variables."
}

var PRDEG = [
   [
      "levine",
      "country",
      "decade",
      "private",
      "rgdp",
      "democ",
      "pri",
      "sec",
      "grow",
      "xcontrol"
   ],
   [
      "4",
      "Argentina",
      "1",
      "0.07971300184726715",
      "3.0910000801086426",
      "3",
      "19.889999389648438",
      "5.190000057220459",
      "2.774399995803833",
      "0.5"
   ],
   [
      "4",
      "Argentina",
      "2",
      "0.16568399965763092",
      "4.001999855041504",
      "1",
      "30.600000381469727",
      "7.5",
      "1.37909996509552",
      "0.5454545617103577"
   ],
   [
      "4",
      "Argentina",
      "3",
      "0.12765400111675262",
      "4.3420000076293945",
      "1",
      "33",
      "9.170000076293945",
      "-2.3492000102996826",
      "0.800000011920929"
   ],
   [
      "5",
      "Australia",
      "1",
      "0.21842999756336212",
      "5.182000160217285",
      "10",
      "19.969999313354492",
      "25.59000015258789",
      "3.109800100326538",
      "0.5"
   ],
   [
      "5",
      "Australia",
      "2",
      "0.25943198800086975",
      "7.343999862670898",
      "10",
      "16.170000076293945",
      "20.90999984741211",
      "1.7933000326156616",
      "0"
   ],
   [
      "5",
      "Australia",
      "3",
      "0.35113900899887085",
      "8.348999977111816",
      "10",
      "15.9399995803833",
      "21.360000610351562",
      "1.7289999723434448",
      "0"
   ],
   [
      "6",
      "Austria",
      "1",
      "0.4252510070800781",
      "3.9079999923706055",
      "10",
      "50.31999969482422",
      "1.9900000095367432",
      "3.739300012588501",
      "1"
   ],
   [
      "6",
      "Austria",
      "2",
      "0.5385950207710266",
      "5.8429999351501465",
      "10",
      "33.150001525878906",
      "15.5",
      "3.7788000106811523",
      "0.27272728085517883"
   ],
   [
      "6",
      "Austria",
      "3",
      "0.6819180250167847",
      "8.229999542236328",
      "10",
      "32.380001068115234",
      "16.489999771118164",
      "1.9009000062942505",
      "0"
   ],
   [
      "9",
      "Belgium",
      "1",
      "0.13455499708652496",
      "4.379000186920166",
      "10",
      "36.959999084472656",
      "11.729999542236328",
      "4.257999897003174",
      "0.3499999940395355"
   ],
   [
      "9",
      "Belgium",
      "2",
      "0.2100760042667389",
      "6.75",
      "10",
      "34.029998779296875",
      "15.069999694824219",
      "3.2177000045776367",
      "0"
   ],
   [
      "9",
      "Belgium",
      "3",
      "0.27442699670791626",
      "9.227999687194824",
      "10",
      "28.139999389648438",
      "17.31999969482422",
      "1.7947999238967896",
      "0"
   ],
   [
      "10",
      "Bolivia",
      "1",
      "0.01911799982190132",
      "0.8820000290870667",
      "2",
      "4.940000057220459",
      "5.909999847412109",
      "2.6935999393463135",
      "0"
   ],
   [
      "10",
      "Bolivia",
      "2",
      "0.07560399919748306",
      "1.2369999885559082",
      "1",
      "5.389999866485596",
      "7.539999961853027",
      "1.646899938583374",
      "0"
   ],
   [
      "10",
      "Bolivia",
      "3",
      "0.04340000078082085",
      "1.5290000438690186",
      "1",
      "7.210000038146973",
      "6.769999980926514",
      "-3.308500051498413",
      "0.5"
   ],
   [
      "12",
      "Brazil",
      "1",
      "0.05927899852395058",
      "1.312999963760376",
      "4",
      "11.489999771118164",
      "4.480000019073486",
      "2.8566999435424805",
      "1"
   ],
   [
      "12",
      "Brazil",
      "2",
      "0.22293999791145325",
      "1.8070000410079956",
      "1",
      "19.399999618530273",
      "3.700000047683716",
      "5.920400142669678",
      "1"
   ],
   [
      "12",
      "Brazil",
      "3",
      "0.07246799767017365",
      "3.3559999465942383",
      "4",
      "4.900000095367432",
      "2.740000009536743",
      "0.7949000000953674",
      "1"
   ],
   [
      "15",
      "Canada",
      "1",
      "0.20938099920749664",
      "6.068999767303467",
      "10",
      "27.149999618530273",
      "17.5",
      "3.5762999057769775",
      "0"
   ],
   [
      "15",
      "Canada",
      "2",
      "0.30672699213027954",
      "8.494999885559082",
      "10",
      "20",
      "18.110000610351562",
      "3.497299909591675",
      "0"
   ],
   [
      "15",
      "Canada",
      "3",
      "0.4452430009841919",
      "11.331999778747559",
      "10",
      "9.5",
      "13.720000267028809",
      "2.1851999759674072",
      "0"
   ],
   [
      "18",
      "Chile",
      "3",
      "0.2780509889125824",
      "4.270999908447266",
      "0",
      "13.800000190734863",
      "11.5600004196167",
      "1.8712999820709229",
      "0.800000011920929"
   ],
   [
      "19",
      "Colombia",
      "1",
      "0.13024599850177765",
      "1.343999981880188",
      "8",
      "11.069999694824219",
      "4.610000133514404",
      "1.9030998945236206",
      "1"
   ],
   [
      "19",
      "Colombia",
      "2",
      "0.12828600406646729",
      "1.7109999656677246",
      "9",
      "13.289999961853027",
      "3.8499999046325684",
      "3.7402000427246094",
      "1"
   ],
   [
      "19",
      "Colombia",
      "3",
      "0.0674929991364479",
      "2.552000045776367",
      "10",
      "13.3100004196167",
      "7.110000133514404",
      "1.509200096130371",
      "1"
   ],
   [
      "21",
      "CostaRica",
      "1",
      "0.19221900403499603",
      "1.6629999876022339",
      "10",
      "18.459999084472656",
      "2.2100000381469727",
      "2.2572999000549316",
      "0"
   ],
   [
      "21",
      "CostaRica",
      "2",
      "0.2068289965391159",
      "2.299999952316284",
      "10",
      "12.100000381469727",
      "2.9000000953674316",
      "3.6022000312805176",
      "0.27272728085517883"
   ],
   [
      "21",
      "CostaRica",
      "3",
      "0.16606800258159637",
      "3.0309998989105225",
      "10",
      "16.260000228881836",
      "4.71999979019165",
      "-0.1266999989748001",
      "0.8999999761581421"
   ],
   [
      "24",
      "Denmark",
      "1",
      "0.4694350063800812",
      "5.489999771118164",
      "10",
      "35.209999084472656",
      "8.989999771118164",
      "3.9275999069213867",
      "0.5"
   ],
   [
      "24",
      "Denmark",
      "2",
      "0.46563801169395447",
      "7.064000129699707",
      "10",
      "31.489999771118164",
      "11.970000267028809",
      "2.050600051879883",
      "0"
   ],
   [
      "24",
      "Denmark",
      "3",
      "0.482930988073349",
      "9.597999572753906",
      "10",
      "26.59000015258789",
      "14.859999656677246",
      "1.5976001024246216",
      "0"
   ],
   [
      "31",
      "Finland",
      "1",
      "0.3838669955730438",
      "4.072999954223633",
      "10",
      "48.779998779296875",
      "1.8300000429153442",
      "4.049499988555908",
      "1"
   ],
   [
      "31",
      "Finland",
      "2",
      "0.41986799240112305",
      "6.185999870300293",
      "10",
      "37.93000030517578",
      "6.199999809265137",
      "3.47979998588562",
      "0.09090909361839294"
   ],
   [
      "31",
      "Finland",
      "3",
      "0.5483059883117676",
      "8.392999649047852",
      "10",
      "27.6200008392334",
      "29.200000762939453",
      "3.0626001358032227",
      "0"
   ],
   [
      "32",
      "France",
      "1",
      "0.2522439956665039",
      "4.4730000495910645",
      "6",
      "30.899999618530273",
      "2.799999952316284",
      "4.4369001388549805",
      "0.8999999761581421"
   ],
   [
      "32",
      "France",
      "2",
      "0.43362900614738464",
      "7.078000068664551",
      "6",
      "39.70000076293945",
      "5.03000020980835",
      "3.0950000286102295",
      "0.09090909361839294"
   ],
   [
      "32",
      "France",
      "3",
      "0.7657150030136108",
      "9.687999725341797",
      "6",
      "29.200000762939453",
      "8.300000190734863",
      "1.4424999952316284",
      "0.10000000149011612"
   ],
   [
      "35",
      "Germany",
      "1",
      "0.5257120132446289",
      "5.2170000076293945",
      "10",
      "47.529998779296875",
      "4.800000190734863",
      "3.5020999908447266",
      "0.31578946113586426"
   ],
   [
      "35",
      "Germany",
      "2",
      "0.665956974029541",
      "7.442999839782715",
      "10",
      "42.59000015258789",
      "8.229999542236328",
      "2.8740999698638916",
      "0"
   ],
   [
      "35",
      "Germany",
      "3",
      "0.8172159790992737",
      "9.795000076293945",
      "10",
      "41.650001525878906",
      "7.579999923706055",
      "1.8085999488830566",
      "0"
   ],
   [
      "36",
      "Ghana",
      "1",
      "0.06987699866294861",
      "0.5339999794960022",
      "1",
      "2.809999942779541",
      "0.25",
      "-0.1428000032901764",
      "1"
   ],
   [
      "36",
      "Ghana",
      "2",
      "0.06114000082015991",
      "0.5680000185966492",
      "5",
      "1.350000023841858",
      "3.299999952316284",
      "-0.621999979019165",
      "1"
   ],
   [
      "36",
      "Ghana",
      "3",
      "0.021568000316619873",
      "0.42100000381469727",
      "6",
      "4.449999809265137",
      "2.180000066757202",
      "-1.1420999765396118",
      "1"
   ],
   [
      "37",
      "Greece",
      "1",
      "0.2468010038137436",
      "1.4739999771118164",
      "7",
      "36.900001525878906",
      "3.309999942779541",
      "6.86329984664917",
      "0.8999999761581421"
   ],
   [
      "37",
      "Greece",
      "2",
      "0.3718990087509155",
      "3.125999927520752",
      "0",
      "45.099998474121094",
      "5.340000152587891",
      "4.394799709320068",
      "1"
   ],
   [
      "37",
      "Greece",
      "3",
      "0.34572601318359375",
      "4.382999897003174",
      "8",
      "44.29999923706055",
      "13.600000381469727",
      "0.9142999649047852",
      "1"
   ],
   [
      "41",
      "Honduras",
      "1",
      "0.08206100016832352",
      "0.7480000257492065",
      "1",
      "6.900000095367432",
      "1.559999942779541",
      "1.5875000953674316",
      "0"
   ],
   [
      "41",
      "Honduras",
      "2",
      "0.19076600670814514",
      "0.9269999861717224",
      "1",
      "8.760000228881836",
      "2.450000047683716",
      "2.497499942779541",
      "0"
   ],
   [
      "41",
      "Honduras",
      "3",
      "0.21359500288963318",
      "1.0750000476837158",
      "1",
      "8.869999885559082",
      "4.329999923706055",
      "-1.2525999546051025",
      "0.8999999761581421"
   ],
   [
      "43",
      "Iceland",
      "1",
      "0.3832480013370514",
      "4.644000053405762",
      "10",
      "47.779998779296875",
      "4.239999771118164",
      "2.6849000453948975",
      "1"
   ],
   [
      "43",
      "Iceland",
      "2",
      "0.2680070102214813",
      "6.1570000648498535",
      "10",
      "41.90999984741211",
      "8.430000305175781",
      "5.437099933624268",
      "1"
   ],
   [
      "43",
      "Iceland",
      "3",
      "0.32972800731658936",
      "9.28499984741211",
      "10",
      "33.47999954223633",
      "13.859999656677246",
      "2.2994000911712646",
      "1"
   ],
   [
      "44",
      "India",
      "1",
      "0.10141299664974213",
      "0.5329999923706055",
      "10",
      "6.300000190734863",
      "0.8999999761581421",
      "1.7430000305175781",
      "1"
   ],
   [
      "44",
      "India",
      "2",
      "0.1618420034646988",
      "0.5759999752044678",
      "10",
      "8.15999984741211",
      "1.4600000381469727",
      "0.5989999771118164",
      "1"
   ],
   [
      "44",
      "India",
      "3",
      "0.2405110001564026",
      "0.6140000224113464",
      "10",
      "4.190000057220459",
      "5.130000114440918",
      "3.566200017929077",
      "1"
   ],
   [
      "45",
      "Indonesia",
      "1",
      "0.012226000428199768",
      "0.49300000071525574",
      "2",
      "7.599999904632568",
      "0.5",
      "1.6641000509262085",
      "0.25"
   ],
   [
      "45",
      "Indonesia",
      "2",
      "0.09765700250864029",
      "0.5590000152587891",
      "1",
      "17",
      "2.299999952316284",
      "5.3850998878479",
      "0.09090909361839294"
   ],
   [
      "45",
      "Indonesia",
      "3",
      "0.15937599539756775",
      "1.062999963760376",
      "1",
      "16.799999237060547",
      "4.900000095367432",
      "3.558300018310547",
      "0"
   ],
   [
      "48",
      "Ireland",
      "1",
      "0.31009799242019653",
      "2.5450000762939453",
      "10",
      "35.189998626708984",
      "12.020000457763672",
      "4.029899597167969",
      "0.529411792755127"
   ],
   [
      "48",
      "Ireland",
      "2",
      "0.2609750032424927",
      "3.628000020980835",
      "10",
      "35.599998474121094",
      "11.859999656677246",
      "3.148400068283081",
      "0"
   ],
   [
      "48",
      "Ireland",
      "3",
      "0.2631480097770691",
      "4.928999900817871",
      "10",
      "27.399999618530273",
      "17.229999542236328",
      "1.6978999376296997",
      "0"
   ],
   [
      "49",
      "Israel",
      "1",
      "0.11770500242710114",
      "2.8380000591278076",
      "10",
      "14.430000305175781",
      "13.609999656677246",
      "5.454599857330322",
      "1"
   ],
   [
      "49",
      "Israel",
      "2",
      "0.32694000005722046",
      "4.861000061035156",
      "10",
      "12.390000343322754",
      "15.270000457763672",
      "2.9416000843048096",
      "0.6363636255264282"
   ],
   [
      "49",
      "Israel",
      "3",
      "0.47376999258995056",
      "6.144999980926514",
      "10",
      "10.239999771118164",
      "18",
      "1.5888999700546265",
      "0.5"
   ],
   [
      "50",
      "Italy",
      "1",
      "0.3796379864215851",
      "3.2330000400543213",
      "10",
      "42.560001373291016",
      "5.199999809265137",
      "5.052499771118164",
      "0"
   ],
   [
      "50",
      "Italy",
      "2",
      "0.4327329993247986",
      "5.0279998779296875",
      "10",
      "48.900001525878906",
      "7.159999847412109",
      "3.3539998531341553",
      "0.6363636255264282"
   ],
   [
      "50",
      "Italy",
      "3",
      "0.3268060088157654",
      "7.164000034332275",
      "10",
      "29.93000030517578",
      "11.199999809265137",
      "2.2425999641418457",
      "0.20000000298023224"
   ],
   [
      "52",
      "Japan",
      "1",
      "0.7213730216026306",
      "2.239000082015991",
      "10",
      "28.969999313354492",
      "10.0600004196167",
      "9.311100006103516",
      "0.9473684430122375"
   ],
   [
      "52",
      "Japan",
      "2",
      "0.8108050227165222",
      "5.495999813079834",
      "10",
      "28.040000915527344",
      "11.050000190734863",
      "4.090100288391113",
      "0"
   ],
   [
      "52",
      "Japan",
      "3",
      "0.9522719979286194",
      "8.116999626159668",
      "10",
      "20.700000762939453",
      "13.550000190734863",
      "3.446500062942505",
      "0"
   ],
   [
      "54",
      "Kenya",
      "2",
      "0.1656319946050644",
      "0.5519999861717224",
      "2",
      "4.769999980926514",
      "0.5299999713897705",
      "3.0215001106262207",
      "1"
   ],
   [
      "54",
      "Kenya",
      "3",
      "0.18717800080776215",
      "0.6620000004768372",
      "1",
      "7.489999771118164",
      "0.8199999928474426",
      "0.27320000529289246",
      "1"
   ],
   [
      "62",
      "Malaysia",
      "1",
      "0.122359998524189",
      "1.1030000448226929",
      "10",
      "11.229999542236328",
      "2.4000000953674316",
      "3.4774999618530273",
      "0"
   ],
   [
      "62",
      "Malaysia",
      "2",
      "0.22730199992656708",
      "1.524999976158142",
      "10",
      "13.699999809265137",
      "3.9600000381469727",
      "5.217700004577637",
      "0"
   ],
   [
      "62",
      "Malaysia",
      "3",
      "0.5216820240020752",
      "3.111999988555908",
      "10",
      "23",
      "9.800000190734863",
      "3.101300001144409",
      "0"
   ],
   [
      "67",
      "Mexico",
      "1",
      "0.051065001636743546",
      "2.1570000648498535",
      "1",
      "10.399999618530273",
      "1.5",
      "3.697999954223633",
      "0"
   ],
   [
      "67",
      "Mexico",
      "2",
      "0.07119999825954437",
      "3.062999963760376",
      "1",
      "15.300000190734863",
      "3.700000047683716",
      "3.373999834060669",
      "0"
   ],
   [
      "67",
      "Mexico",
      "3",
      "0.10259799659252167",
      "4.333000183105469",
      "3",
      "17.299999237060547",
      "1.7000000476837158",
      "-0.120899997651577",
      "0.5"
   ],
   [
      "70",
      "Netherlands",
      "1",
      "0.2725749909877777",
      "4.690000057220459",
      "10",
      "48.38999938964844",
      "3",
      "3.7085001468658447",
      "0.6499999761581421"
   ],
   [
      "70",
      "Netherlands",
      "2",
      "0.4245940148830414",
      "6.914999961853027",
      "10",
      "25.959999084472656",
      "9.100000381469727",
      "2.4865000247955322",
      "0"
   ],
   [
      "70",
      "Netherlands",
      "3",
      "0.6804630160331726",
      "9.03600025177002",
      "10",
      "23.739999771118164",
      "12.449999809265137",
      "0.8930999636650085",
      "0"
   ],
   [
      "71",
      "NewZealand",
      "1",
      "0.14361000061035156",
      "5.571000099182129",
      "10",
      "20.649999618530273",
      "25.049999237060547",
      "1.7330000400543213",
      "1"
   ],
   [
      "71",
      "NewZealand",
      "2",
      "0.1581999957561493",
      "6.59499979019165",
      "10",
      "21.1299991607666",
      "23.739999771118164",
      "0.858199954032898",
      "0.27272728085517883"
   ],
   [
      "71",
      "NewZealand",
      "3",
      "0.23134399950504303",
      "7.36299991607666",
      "10",
      "6.570000171661377",
      "26.600000381469727",
      "0.9991999864578247",
      "0"
   ],
   [
      "72",
      "Nicaragua",
      "1",
      "0.16998499631881714",
      "1.5880000591278076",
      "1",
      "11.09000015258789",
      "1.1299999952316284",
      "4.563499927520752",
      "0"
   ],
   [
      "72",
      "Nicaragua",
      "2",
      "0.2310909926891327",
      "2.2920000553131104",
      "1",
      "21.469999313354492",
      "1.2699999809265137",
      "-2.5662999153137207",
      "0.27272728085517883"
   ],
   [
      "72",
      "Nicaragua",
      "3",
      "0.3350679874420166",
      "2.01200008392334",
      "0",
      "9.949999809265137",
      "1.809999942779541",
      "-2.5659000873565674",
      "1"
   ],
   [
      "75",
      "Norway",
      "1",
      "0.35974499583244324",
      "5.000999927520752",
      "10",
      "45.869998931884766",
      "6.619999885559082",
      "3.6077001094818115",
      "0.30000001192092896"
   ],
   [
      "75",
      "Norway",
      "2",
      "0.35863399505615234",
      "7.104000091552734",
      "10",
      "38.060001373291016",
      "14.399999618530273",
      "3.937700033187866",
      "0"
   ],
   [
      "75",
      "Norway",
      "3",
      "0.46108001470565796",
      "11.093999862670898",
      "10",
      "0",
      "26.200000762939453",
      "3.1017000675201416",
      "0"
   ],
   [
      "77",
      "Pakistan",
      "1",
      "0.1656150072813034",
      "0.5580000281333923",
      "6",
      "1.2000000476837158",
      "0.8999999761581421",
      "3.9158999919891357",
      "1"
   ],
   [
      "77",
      "Pakistan",
      "2",
      "0.22154200077056885",
      "0.796999990940094",
      "4",
      "5.699999809265137",
      "3.5999999046325684",
      "1.6413999795913696",
      "1"
   ],
   [
      "77",
      "Pakistan",
      "3",
      "0.26491498947143555",
      "0.9890000224113464",
      "0",
      "3.680000066757202",
      "3.930000066757202",
      "3.6658997535705566",
      "1"
   ],
   [
      "78",
      "Panama",
      "1",
      "0.23934000730514526",
      "1.2549999952316284",
      "4",
      "24.399999618530273",
      "4.099999904632568",
      "5.0370001792907715",
      "0"
   ],
   [
      "78",
      "Panama",
      "2",
      "0.5318769812583923",
      "2.0929999351501465",
      "0",
      "16.399999618530273",
      "8.399999618530273",
      "2.20770001411438",
      "0"
   ],
   [
      "78",
      "Panama",
      "3",
      "0.5611249804496765",
      "2.809999942779541",
      "1",
      "23.399999618530273",
      "11.800000190734863",
      "2.0772998332977295",
      "0"
   ],
   [
      "81",
      "Peru",
      "1",
      "0.11672499775886536",
      "1.7209999561309814",
      "6",
      "11.210000038146973",
      "3.5",
      "2.440500020980835",
      "0"
   ],
   [
      "81",
      "Peru",
      "2",
      "0.09100800007581711",
      "2.2850000858306885",
      "0",
      "12.529999732971191",
      "5.420000076293945",
      "1.1237000226974487",
      "0.6363636255264282"
   ],
   [
      "81",
      "Peru",
      "3",
      "0.0647599995136261",
      "2.4560000896453857",
      "9",
      "17.200000762939453",
      "10.699999809265137",
      "-2.228800058364868",
      "0.6000000238418579"
   ],
   [
      "82",
      "Philippines",
      "1",
      "0.1687300056219101",
      "0.8740000128746033",
      "6",
      "17.420000076293945",
      "4.480000019073486",
      "2.008200168609619",
      "0.75"
   ],
   [
      "82",
      "Philippines",
      "2",
      "0.2098030000925064",
      "1.093999981880188",
      "4",
      "20.270000457763672",
      "6",
      "3.2228000164031982",
      "1"
   ],
   [
      "82",
      "Philippines",
      "3",
      "0.2190150022506714",
      "1.5509999990463257",
      "1",
      "22.799999237060547",
      "7.989999771118164",
      "-0.3114999830722809",
      "0.8999999761581421"
   ],
   [
      "83",
      "Portugal",
      "1",
      "0.528885006904602",
      "1.4290000200271606",
      "1",
      "21.600000381469727",
      "1.5199999809265137",
      "5.813899993896484",
      "1"
   ],
   [
      "83",
      "Portugal",
      "2",
      "0.6912879943847656",
      "2.575000047683716",
      "1",
      "13.630000114440918",
      "0.8700000047683716",
      "4.55109977722168",
      "1"
   ],
   [
      "83",
      "Portugal",
      "3",
      "0.45770499110221863",
      "3.7330000400543213",
      "9",
      "26.809999465942383",
      "4.550000190734863",
      "2.5317001342773438",
      "0.800000011920929"
   ],
   [
      "88",
      "Singapore",
      "1",
      "0.17957499623298645",
      "1.527999997138977",
      "0",
      "5.289999961853027",
      "7.550000190734863",
      "5.852599620819092",
      "0"
   ],
   [
      "88",
      "Singapore",
      "2",
      "0.5146740078926086",
      "2.86899995803833",
      "4",
      "11.850000381469727",
      "7",
      "7.70359992980957",
      "0"
   ],
   [
      "88",
      "Singapore",
      "3",
      "0.800944983959198",
      "5.816999912261963",
      "4",
      "15.329999923706055",
      "5",
      "6.076300144195557",
      "0"
   ],
   [
      "90",
      "SouthAfrica",
      "1",
      "0.20911499857902527",
      "2.627000093460083",
      "7",
      "14.199999809265137",
      "6.679999828338623",
      "3.4497997760772705",
      "1"
   ],
   [
      "90",
      "SouthAfrica",
      "2",
      "0.2630409896373749",
      "3.6089999675750732",
      "7",
      "5.300000190734863",
      "6.699999809265137",
      "0.8666999340057373",
      "0.45454543828964233"
   ],
   [
      "90",
      "SouthAfrica",
      "3",
      "0.31614500284194946",
      "4.285999774932861",
      "7",
      "8.210000038146973",
      "4.53000020980835",
      "-0.09390000253915787",
      "1"
   ],
   [
      "91",
      "Spain",
      "1",
      "0.416269987821579",
      "2.424999952316284",
      "0",
      "43.7400016784668",
      "1.5299999713897705",
      "6.7459001541137695",
      "1"
   ],
   [
      "91",
      "Spain",
      "2",
      "0.6475920081138611",
      "4.379000186920166",
      "0",
      "64.69999694824219",
      "2.5999999046325684",
      "2.703700065612793",
      "0.45454543828964233"
   ],
   [
      "91",
      "Spain",
      "3",
      "0.6167250275611877",
      "6.13100004196167",
      "9",
      "43.34000015258789",
      "5.699999809265137",
      "2.0534000396728516",
      "0"
   ],
   [
      "95",
      "Sweden",
      "1",
      "0.41150999069213867",
      "5.14900016784668",
      "10",
      "30.84000015258789",
      "17.850000381469727",
      "3.8341000080108643",
      "0.4736842215061188"
   ],
   [
      "95",
      "Sweden",
      "2",
      "0.3991459906101227",
      "7.401000022888184",
      "10",
      "7.5",
      "27.100000381469727",
      "2.064700126647949",
      "0"
   ],
   [
      "95",
      "Sweden",
      "3",
      "0.4046249985694885",
      "8.86299991607666",
      "10",
      "16.360000610351562",
      "35.70000076293945",
      "1.9394999742507935",
      "0"
   ],
   [
      "99",
      "Tanzania",
      "1",
      "0.08612500131130219",
      "0.20800000429153442",
      "1",
      "3.6600000858306885",
      "0.25",
      "2.2695999145507812",
      "1"
   ],
   [
      "99",
      "Tanzania",
      "2",
      "0.03957999870181084",
      "0.28299999237060547",
      "1",
      "9.5",
      "0.20999999344348907",
      "0.2768999934196472",
      "1"
   ],
   [
      "99",
      "Tanzania",
      "3",
      "0.021205000579357147",
      "0.3529999852180481",
      "1",
      "8.699999809265137",
      "0.10000000149011612",
      "-1.00600004196167",
      "1"
   ],
   [
      "100",
      "Thailand",
      "1",
      "0.12726999819278717",
      "0.6880000233650208",
      "0",
      "33.900001525878906",
      "1.6200000047683716",
      "4.6585001945495605",
      "0"
   ],
   [
      "100",
      "Thailand",
      "2",
      "0.2196130007505417",
      "1.062999963760376",
      "5",
      "21.469999313354492",
      "1.4600000381469727",
      "4.252300262451172",
      "0"
   ],
   [
      "100",
      "Thailand",
      "3",
      "0.3964250087738037",
      "1.694000005722046",
      "8",
      "2.4000000953674316",
      "2.299999952316284",
      "4.571300029754639",
      "0"
   ],
   [
      "104",
      "Turkey",
      "1",
      "0.2098969966173172",
      "1.2549999952316284",
      "10",
      "21.700000762939453",
      "1.9900000095367432",
      "3.248300075531006",
      "1"
   ],
   [
      "104",
      "Turkey",
      "2",
      "0.1932779997587204",
      "1.7020000219345093",
      "10",
      "16.1200008392334",
      "2.740000009536743",
      "3.317699909210205",
      "1"
   ],
   [
      "104",
      "Turkey",
      "3",
      "0.17185500264167786",
      "2.319000005722046",
      "0",
      "16.6299991607666",
      "3.7699999809265137",
      "1.9805999994277954",
      "0.8999999761581421"
   ],
   [
      "105",
      "Uganda",
      "1",
      "0.09821800142526627",
      "0.32199999690055847",
      "7",
      "5.800000190734863",
      "1.100000023841858",
      "1.298799991607666",
      "1"
   ],
   [
      "105",
      "Uganda",
      "2",
      "0.06515499949455261",
      "0.35199999809265137",
      "1",
      "3",
      "0.10000000149011612",
      "-4.293399810791016",
      "1"
   ],
   [
      "105",
      "Uganda",
      "3",
      "0.026240000501275063",
      "0.25699999928474426",
      "0",
      "7.489999771118164",
      "0.18000000715255737",
      "-0.7003999948501587",
      "1"
   ],
   [
      "106",
      "UK",
      "1",
      "0.18760399520397186",
      "4.96999979019165",
      "10",
      "67.0999984741211",
      "2.299999952316284",
      "2.271899938583374",
      "1"
   ],
   [
      "106",
      "UK",
      "2",
      "0.26111000776290894",
      "6.318999767303467",
      "10",
      "35.0099983215332",
      "6.599999904632568",
      "2.1739001274108887",
      "0.09090909361839294"
   ],
   [
      "106",
      "UK",
      "3",
      "0.4404749870300293",
      "7.974999904632568",
      "10",
      "24.190000534057617",
      "9.869999885559082",
      "2.2422001361846924",
      "0"
   ],
   [
      "107",
      "USA",
      "1",
      "0.47382500767707825",
      "7.380000114440918",
      "10",
      "17.5",
      "18.940000534057617",
      "2.917799949645996",
      "0"
   ],
   [
      "107",
      "USA",
      "2",
      "0.5998460054397583",
      "9.4589996337890625",
      "10",
      "20",
      "27.100000381469727",
      "1.6449000835418701",
      "0"
   ],
   [
      "107",
      "USA",
      "3",
      "0.6567249894142151",
      "11.404000282287598",
      "10",
      "3.700000047683716",
      "49.099998474121094",
      "1.8597999811172485",
      "0"
   ],
   [
      "108",
      "Uruguay",
      "1",
      "0.22626100480556488",
      "3.2709999084472656",
      "8",
      "19.969999313354492",
      "4.099999904632568",
      "0.7473999857902527",
      "0.5"
   ],
   [
      "108",
      "Uruguay",
      "2",
      "0.1651110053062439",
      "3.453000068664551",
      "8",
      "23.950000762939453",
      "4.630000114440918",
      "2.7901999950408936",
      "0.5454545617103577"
   ],
   [
      "108",
      "Uruguay",
      "3",
      "0.3777250051498413",
      "4.501999855041504",
      "1",
      "19.559999465942383",
      "5.960000038146973",
      "0.120899997651577",
      "0"
   ],
   [
      "109",
      "Venezuela",
      "1",
      "0.14672599732875824",
      "5.308000087738037",
      "6",
      "15.699999809265137",
      "2.200000047683716",
      "1.4157999753952026",
      "0"
   ],
   [
      "109",
      "Venezuela",
      "2",
      "0.21228399872779846",
      "6.607999801635742",
      "8",
      "9.489999771118164",
      "4.579999923706055",
      "0.39100000262260437",
      "0"
   ],
   [
      "109",
      "Venezuela",
      "3",
      "0.2600350081920624",
      "4.423999786376953",
      "8",
      "10.619999885559082",
      "9.170000076293945",
      "-2.803499937057495",
      "0.5"
   ],
   [
      "111",
      "Zaire",
      "1",
      "0.01587199978530407",
      "0.3140000104904175",
      "1",
      "2.5999999046325684",
      "0.20999999344348907",
      "1.646799921989441",
      "1"
   ],
   [
      "111",
      "Zaire",
      "2",
      "0.0832270011305809",
      "0.3580000102519989",
      "1",
      "5.28000020980835",
      "0.3700000047683716",
      "-2.6297998428344727",
      "1"
   ],
   [
      "111",
      "Zaire",
      "3",
      "0.044610001146793365",
      "0.2240000069141388",
      "1",
      "7.809999942779541",
      "0.8700000047683716",
      "-1.8402999639511108",
      "1"
   ],
   [
      "112",
      "Zambia",
      "2",
      "0.16478799283504486",
      "0.7889999747276306",
      "4",
      "6.5",
      "1.7000000476837158",
      "-1.416100025177002",
      "1"
   ],
   [
      "112",
      "Zambia",
      "3",
      "0.1774899959564209",
      "0.7160000205039978",
      "1",
      "7.559999942779541",
      "3.490000009536743",
      "-1.7706999778747559",
      "1"
   ],
   [
      "118",
      "Nepal",
      "2",
      "0.04121499881148338",
      "0.5059999823570251",
      "0",
      "0.029999999329447746",
      "0.10000000149011612",
      "0.039000000804662704",
      "1"
   ]
]