var mariokartInfo ={
   "format" : "A data frame with 143 observations on the following 12 variables.\nAll prices are in US dollars.",
   "parameters" : {
      "duration" : "Auction length, in days.",
      "ship_pr" : "Shipping price.",
      "total_pr" : "Total price, which equals the auction price plus the\nshipping price.",
      "n_bids" : "Number of bids.",
      "seller_rate" : "The seller's rating on Ebay. This is the number\nof positive ratings minus the number of negative ratings for the seller.",
      "ship_sp" : "Shipping speed or method.",
      "stock_photo" : "Whether the auction feature photo was a stock\nphoto or not. If the picture was used in many auctions, then it was called a\nstock photo.",
      "cond" : "Game condition, either new or used.",
      "start_pr" : "Start price of the auction.",
      "id" : "Auction ID assigned by Ebay.",
      "title" : "The title of the auctions.",
      "wheels" : "Number of Wii wheels included in the auction. These are steering\nwheel attachments to make it seem as though you are actually driving in the\ngame. When used with the controller, turning the wheel actually causes the\ncharacter on screen to turn."
   },
   "description" : "Description\nAuction data from Ebay for the game Mario Kart for the Nintendo Wii. This\ndata was collected in early October 2009.",
   "title" : "Wii Mario Kart auctions from Ebay",
   "usage" : "mariokart",
   "reference" : "There are several interesting features in the data. First off, note that\nthere are two outliers in the data. These serve as a nice example of what\none should do when encountering an outlier: examine the data point and\nremove it only if there is a good reason. In these two cases, we can see\nfrom the auction titles that they included other items in their auctions\nbesides the game, which justifies removing them from the dataset."
}

var mariokart = [
   [
      "id",
      "duration",
      "n_bids",
      "cond",
      "start_pr",
      "ship_pr",
      "total_pr",
      "ship_sp",
      "seller_rate",
      "stock_photo",
      "wheels",
      "title"
   ],
   [
      "150377422259",
      "3",
      "20",
      "new",
      "0.99",
      "4",
      "51.55",
      "standard",
      "1580",
      "yes",
      "1",
      "~~ Wii MARIO KART &amp; WHEEL ~ NINTENDO Wii ~ BRAND NEW ~~"
   ],
   [
      "260483376854",
      "7",
      "13",
      "used",
      "0.99",
      "3.99",
      "37.04",
      "firstClass",
      "365",
      "yes",
      "1",
      "Mariokart Wii Nintendo with wheel - Mario Kart Nintendo"
   ],
   [
      "320432342985",
      "3",
      "16",
      "new",
      "0.99",
      "3.5",
      "45.5",
      "firstClass",
      "998",
      "no",
      "1",
      "Mario Kart Wii (Wii)"
   ],
   [
      "280405224677",
      "3",
      "18",
      "new",
      "0.99",
      "0",
      "44",
      "standard",
      "7",
      "yes",
      "1",
      "Brand New Mario Kart Wii Comes with Wheel. Free Ship"
   ],
   [
      "170392227765",
      "1",
      "20",
      "new",
      "0.01",
      "0",
      "71",
      "media",
      "820",
      "yes",
      "2",
      "BRAND NEW NINTENDO 1 WII MARIO KART WITH 2 WHEELS +GAME"
   ],
   [
      "360195157625",
      "3",
      "19",
      "new",
      "0.99",
      "4",
      "45",
      "standard",
      "270144",
      "yes",
      "0",
      "Mario Kart Wii (GAME ONLY/NO WHEEL) - Nintendo Wii Game"
   ],
   [
      "120477729093",
      "1",
      "13",
      "used",
      "0.01",
      "0",
      "37.02",
      "standard",
      "7284",
      "yes",
      "0",
      "Mario Kart Wii (Wii) Nintendo Wii game *--WOW --AWESOME"
   ],
   [
      "300355501482",
      "1",
      "15",
      "new",
      "1",
      "2.99",
      "53.99",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ],
   [
      "200392065459",
      "3",
      "29",
      "used",
      "0.99",
      "4",
      "47",
      "priority",
      "27",
      "yes",
      "1",
      "Wii game Mario Kart in box with 1 wheel Fast Shipping"
   ],
   [
      "330364163424",
      "7",
      "8",
      "used",
      "19.99",
      "4",
      "50",
      "firstClass",
      "201",
      "no",
      "1",
      "Nintendo Wii : Mario Kart Wii w/ Wii Wheel (2008, MINT)"
   ],
   [
      "290355805215",
      "1",
      "15",
      "new",
      "1",
      "2.99",
      "54.99",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ],
   [
      "180415462166",
      "1",
      "15",
      "new",
      "0.01",
      "0",
      "56.01",
      "media",
      "820",
      "yes",
      "2",
      "BRAND NEW NINTENDO 1 WII MARIO KART WITH 2 WHEELS +GAME"
   ],
   [
      "300353460362",
      "1",
      "13",
      "new",
      "1",
      "2.99",
      "48",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ],
   [
      "180415244903",
      "1",
      "16",
      "new",
      "0.01",
      "0",
      "56",
      "media",
      "820",
      "yes",
      "2",
      "BRAND NEW NINTENDO 1 WII MARIO KART WITH 2 WHEELS +GAME"
   ],
   [
      "250505391611",
      "7",
      "6",
      "used",
      "24.99",
      "4",
      "43.33",
      "standard",
      "154",
      "yes",
      "1",
      "Mario Kart Wii (Wii) w/ Wii Wheel"
   ],
   [
      "120474800581",
      "7",
      "22",
      "used",
      "0.99",
      "4",
      "46",
      "media",
      "309",
      "yes",
      "0",
      "Mario Kart Wii (Wii) - GAME ONLY"
   ],
   [
      "140350383072",
      "3",
      "14",
      "new",
      "0.99",
      "8.7",
      "46.71",
      "priority",
      "251",
      "yes",
      "1",
      "Wii Mario Kart game + wheel:  NIB, factory sealed"
   ],
   [
      "280406546082",
      "3",
      "23",
      "new",
      "0.99",
      "0",
      "46",
      "standard",
      "7",
      "yes",
      "1",
      "Brand New Mario Kart Wii Comes with Wheel. Free Ship"
   ],
   [
      "290356835892",
      "1",
      "10",
      "new",
      "1",
      "2.99",
      "55.99",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ],
   [
      "110439174663",
      "7",
      "22",
      "used",
      "1",
      "25.51",
      "326.51",
      "parcel",
      "115",
      "no",
      "2",
      "Nintedo Wii Console Bundle Guitar Hero 5 Mario Kart "
   ],
   [
      "260486415542",
      "1",
      "7",
      "used",
      "0.99",
      "0",
      "31",
      "standard",
      "4982",
      "yes",
      "0",
      "Super Mario Kart Nintendo Wii Video Game Driving SMK"
   ],
   [
      "290356835900",
      "1",
      "16",
      "new",
      "1",
      "2.99",
      "53.98",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ],
   [
      "350261958546",
      "1",
      "1",
      "new",
      "64.95",
      "0",
      "64.95",
      "standard",
      "118345",
      "yes",
      "2",
      "MARIO KART WITH WII OFFICIAL WHEEL+1 COBALT BLUE WHEEL"
   ],
   [
      "110441494985",
      "1",
      "18",
      "new",
      "1",
      "2.99",
      "50.5",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ],
   [
      "110443013258",
      "3",
      "12",
      "used",
      "0.01",
      "4",
      "46.5",
      "firstClass",
      "172",
      "yes",
      "1",
      "Mario Kart Wii (Wii) Includes Steering Wheel!"
   ],
   [
      "180416694913",
      "1",
      "19",
      "new",
      "0.01",
      "0",
      "55",
      "media",
      "820",
      "yes",
      "2",
      "BRAND NEW NINTENDO 1 WII MARIO KART WITH 2 WHEELS +GAME"
   ],
   [
      "140350730320",
      "3",
      "5",
      "used",
      "15",
      "3.5",
      "34.5",
      "firstClass",
      "37",
      "yes",
      "0",
      "Mario Kart Wii (Wii)"
   ],
   [
      "300352773649",
      "3",
      "5",
      "used",
      "0.99",
      "0",
      "36",
      "upsGround",
      "15",
      "yes",
      "0",
      "Mario Kart Wii (Wii)"
   ],
   [
      "140350558850",
      "1",
      "13",
      "used",
      "0.99",
      "4",
      "40",
      "standard",
      "4200",
      "no",
      "0",
      "MARIO KART for Nintendo Wii"
   ],
   [
      "320430545471",
      "7",
      "15",
      "new",
      "9.99",
      "4",
      "47",
      "parcel",
      "62",
      "yes",
      "1",
      "Mario Kart Wii (Wii) - Brand New &amp; Sealed!!"
   ],
   [
      "170391192572",
      "1",
      "11",
      "used",
      "10",
      "4",
      "43",
      "priority",
      "18",
      "yes",
      "0",
      "Mario Kart Wii (Wii)"
   ],
   [
      "320429712274",
      "7",
      "14",
      "used",
      "1.99",
      "0",
      "31",
      "media",
      "166",
      "yes",
      "0",
      "Mario Kart Wii (Wii)"
   ],
   [
      "390101286838",
      "5",
      "13",
      "used",
      "0.99",
      "4",
      "41.99",
      "standard",
      "16041",
      "yes",
      "1",
      "Mario Kart Wii (Wii)"
   ],
   [
      "170388799958",
      "5",
      "24",
      "used",
      "0.99",
      "3.99",
      "49.49",
      "upsGround",
      "27",
      "yes",
      "2",
      ""
   ],
   [
      "190339151607",
      "3",
      "10",
      "used",
      "0.99",
      "0",
      "41",
      "priority",
      "42241",
      "yes",
      "1",
      "Mario Kart &amp; Wheel Nintendo Wii Game Free Priority Mail"
   ],
   [
      "150377945722",
      "3",
      "15",
      "used",
      "0.99",
      "8.7",
      "44.78",
      "priority",
      "88",
      "yes",
      "1",
      "MarioKart Wii"
   ],
   [
      "110441755664",
      "3",
      "16",
      "used",
      "0.99",
      "4",
      "47",
      "firstClass",
      "1270",
      "no",
      "0",
      "Mario Kart Wii (Wii) COMPLETE "
   ],
   [
      "140348739089",
      "7",
      "17",
      "used",
      "15",
      "4",
      "44",
      "priority",
      "2131",
      "no",
      "1",
      "Mario Kart Wii Complete"
   ],
   [
      "290356835914",
      "1",
      "9",
      "new",
      "1",
      "2.99",
      "63.99",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ],
   [
      "290356333829",
      "1",
      "14",
      "new",
      "1",
      "2.99",
      "53.76",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ],
   [
      "260482893160",
      "7",
      "5",
      "new",
      "30",
      "0",
      "46.03",
      "firstClass",
      "555",
      "no",
      "1",
      "New Nintendo Super Mario Kart Wii with Steering Wheel"
   ],
   [
      "360194236883",
      "3",
      "13",
      "used",
      "0.99",
      "0",
      "42.25",
      "priority",
      "42241",
      "no",
      "1",
      "Mario Kart &amp; Wheel Nintendo Wii Game Free Priority Mail"
   ],
   [
      "320433689752",
      "1",
      "14",
      "used",
      "0.99",
      "4",
      "46",
      "priority",
      "34",
      "no",
      "2",
      "Mario Kart with 2 wheels by Wii"
   ],
   [
      "110443667250",
      "1",
      "29",
      "new",
      "1",
      "2.99",
      "51.99",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ],
   [
      "110443342909",
      "1",
      "17",
      "new",
      "1",
      "2.99",
      "55.99",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ],
   [
      "180414145715",
      "3",
      "8",
      "used",
      "9.99",
      "3.99",
      "41.99",
      "firstClass",
      "69",
      "yes",
      "1",
      "Mario Kart Wii with Wii Wheel for Nintendo Wii FASTSHIP"
   ],
   [
      "290357882110",
      "1",
      "12",
      "new",
      "1",
      "2.99",
      "53.99",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ],
   [
      "190338339476",
      "7",
      "20",
      "used",
      "15",
      "0",
      "39",
      "firstClass",
      "422",
      "yes",
      "0",
      "Mario Kart Wii (Wii) Used Ships Free!"
   ],
   [
      "380164318834",
      "7",
      "21",
      "used",
      "0.99",
      "3",
      "38.06",
      "firstClass",
      "8625",
      "yes",
      "0",
      "MARIO KART - NINTENDO WII ============================="
   ],
   [
      "160365983438",
      "7",
      "16",
      "used",
      "0.99",
      "0",
      "46",
      "priority",
      "90",
      "no",
      "1",
      "Mario Kart Wii (Wii) USED ONLY ONCE! MINT CONDITION!"
   ],
   [
      "110442981432",
      "1",
      "10",
      "new",
      "1",
      "2.99",
      "59.88",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ],
   [
      "260487434344",
      "1",
      "17",
      "used",
      "0.99",
      "0",
      "28.98",
      "standard",
      "4982",
      "yes",
      "0",
      "Super Mario Kart Nintendo Wii Video Game Driving SMK"
   ],
   [
      "180414884615",
      "3",
      "16",
      "used",
      "0.99",
      "0",
      "36",
      "standard",
      "2046",
      "no",
      "1",
      "Mario Kart Wii Nintendo Wii Game &amp; Wheel"
   ],
   [
      "330364742474",
      "3",
      "2",
      "new",
      "51.99",
      "0",
      "51.99",
      "other",
      "223861",
      "yes",
      "0",
      "NINTENDO WII SUPER Mario Kart GAME ONLY NO Wheel NEW *"
   ],
   [
      "300353503260",
      "7",
      "16",
      "used",
      "0.99",
      "2.95",
      "43.95",
      "firstClass",
      "943",
      "yes",
      "0",
      "Wii Mario Kart Great Condition!"
   ],
   [
      "250507926501",
      "1",
      "14",
      "used",
      "0.99",
      "0",
      "32",
      "standard",
      "206",
      "yes",
      "0",
      "Mario Kart Wii (Wii) game "
   ],
   [
      "230383186236",
      "7",
      "10",
      "used",
      "0.99",
      "4",
      "40.06",
      "firstClass",
      "4473",
      "no",
      "1",
      "Mario Kart Wii (Wii) - Comes with Wheel - Used"
   ],
   [
      "290355740844",
      "5",
      "7",
      "used",
      "25",
      "2.99",
      "48",
      "priority",
      "239",
      "no",
      "1",
      "Mario Kart Wii + Wheel"
   ],
   [
      "230382161059",
      "7",
      "16",
      "used",
      "0.99",
      "4",
      "36",
      "parcel",
      "355",
      "no",
      "0",
      "Mario Kart Wii (Wii)"
   ],
   [
      "180413665867",
      "10",
      "3",
      "used",
      "30",
      "0",
      "31",
      "priority",
      "19",
      "no",
      "0",
      "Mario Kart Wii Good Condition (No Wii Wheel)"
   ],
   [
      "290356311538",
      "1",
      "23",
      "new",
      "1",
      "2.99",
      "53.99",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ],
   [
      "120477734245",
      "1",
      "12",
      "used",
      "0.01",
      "0",
      "30",
      "standard",
      "7284",
      "yes",
      "0",
      "Mario Kart Wii (Wii) Nintendo Wii game *--WOW --AWESOME"
   ],
   [
      "300355190611",
      "1",
      "9",
      "new",
      "1",
      "2.99",
      "58",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ],
   [
      "130334124980",
      "5",
      "18",
      "used",
      "9.99",
      "3.59",
      "38.1",
      "firstClass",
      "861",
      "no",
      "0",
      "MarioKart Mario Kart Nintendo Wii Rare great game race"
   ],
   [
      "130335427560",
      "3",
      "27",
      "used",
      "6.95",
      "4",
      "118.5",
      "parcel",
      "41",
      "no",
      "0",
      "10 Nintendo Wii Games - MarioKart Wii, SpiderMan 3, etc"
   ],
   [
      "110439935999",
      "7",
      "12",
      "used",
      "30",
      "0",
      "61.76",
      "standard",
      "27",
      "yes",
      "2",
      "Mario Kart Wii (Wii) game and 2 wheels!"
   ],
   [
      "110441494977",
      "1",
      "13",
      "new",
      "1",
      "2.99",
      "53.99",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ],
   [
      "160366874975",
      "7",
      "14",
      "used",
      "0.99",
      "3",
      "40",
      "media",
      "88",
      "yes",
      "1",
      "Mario Kart Wii (Wii)"
   ],
   [
      "360193279993",
      "7",
      "12",
      "used",
      "0.99",
      "4",
      "64.5",
      "standard",
      "991",
      "no",
      "3",
      "Wii  MARIO KART GAME  PLUS 3 STEERING WHEELS!   Wii "
   ],
   [
      "120474301183",
      "7",
      "16",
      "used",
      "5",
      "4",
      "49.01",
      "upsGround",
      "285",
      "no",
      "2",
      "Mario Kart For Wii with 2-steering wheels NO RESERVE"
   ],
   [
      "110442400658",
      "3",
      "9",
      "new",
      "25",
      "4",
      "47",
      "ups3Day",
      "627",
      "yes",
      "1",
      " Mario Kart Wii with Wii Wheel for Wii (New)"
   ],
   [
      "160366789855",
      "3",
      "17",
      "used",
      "0.99",
      "0",
      "40.1",
      "standard",
      "2046",
      "no",
      "1",
      "Mario Kart Wii Nintendo Wii Game &amp; Wheel"
   ],
   [
      "320429126014",
      "7",
      "16",
      "new",
      "0.99",
      "3.5",
      "41.5",
      "firstClass",
      "998",
      "no",
      "1",
      "Mario Kart Wii (Wii)"
   ],
   [
      "180415469294",
      "1",
      "20",
      "new",
      "0.01",
      "0",
      "56",
      "media",
      "820",
      "yes",
      "2",
      "BRAND NEW NINTENDO 1 WII MARIO KART WITH 2 WHEELS +GAME"
   ],
   [
      "400077480990",
      "1",
      "1",
      "new",
      "64.95",
      "0",
      "64.95",
      "standard",
      "118345",
      "yes",
      "2",
      "NEW MARIO KART GAME+OFFICIAL WHITE+CRIMSON RED WHEELS!!"
   ],
   [
      "110443314932",
      "1",
      "13",
      "used",
      "0.99",
      "8.02",
      "49",
      "parcel",
      "350",
      "no",
      "2",
      " NINTENDO Wii Mario Kart 2 wheels 1 reg &amp; 1 sport NR E"
   ],
   [
      "140350338936",
      "3",
      "4",
      "used",
      "34.99",
      "4",
      "48",
      "standard",
      "85",
      "yes",
      "1",
      "Mario Kart Wii (Wii) In Original Box With Wheel"
   ],
   [
      "170389806612",
      "5",
      "21",
      "used",
      "0.99",
      "4",
      "38",
      "firstClass",
      "14504",
      "no",
      "0",
      "Nintendo Wii Mario Kart GAME ONLY"
   ],
   [
      "270464680053",
      "3",
      "14",
      "used",
      "0.99",
      "4",
      "45",
      "standard",
      "270144",
      "yes",
      "0",
      "Mario Kart Wii (GAME ONLY/NO WHEEL) - Nintendo Wii Game"
   ],
   [
      "200389906028",
      "5",
      "18",
      "used",
      "19.99",
      "2.95",
      "41.95",
      "parcel",
      "194",
      "yes",
      "0",
      "Mario Kart Wii (Wii)"
   ],
   [
      "320429166256",
      "10",
      "15",
      "used",
      "9.99",
      "6",
      "43.36",
      "parcel",
      "2399",
      "yes",
      "1",
      "Mario Kart Wii (Nintendo Wii) Complete, Mint!!"
   ],
   [
      "110442967284",
      "1",
      "8",
      "new",
      "1",
      "2.99",
      "54.99",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ],
   [
      "280404748775",
      "3",
      "19",
      "used",
      "12",
      "4",
      "45.21",
      "standard",
      "64",
      "yes",
      "1",
      "Mario Kart Wii Nintendo Super"
   ],
   [
      "160366174782",
      "7",
      "2",
      "used",
      "55",
      "9.02",
      "65.02",
      "parcel",
      "25",
      "no",
      "4",
      "Mario Kart Wii (Wii) + 4 nerf wheels"
   ],
   [
      "110439483831",
      "7",
      "14",
      "used",
      "10",
      "3.75",
      "45.75",
      "upsGround",
      "0",
      "yes",
      "1",
      "Nintendo Wii MarioKart and Steering Wheel"
   ],
   [
      "160366410200",
      "3",
      "14",
      "new",
      "0.99",
      "4",
      "64",
      "standard",
      "127",
      "yes",
      "2",
      "Mario Kart Wii (Wii) w/ TWO OFFICIAL STEERING WHEELS"
   ],
   [
      "270464942103",
      "7",
      "7",
      "used",
      "0.99",
      "3",
      "36",
      "priority",
      "0",
      "yes",
      "0",
      "Mario Kart Wii (Wii)"
   ],
   [
      "280402374100",
      "7",
      "7",
      "new",
      "29.95",
      "8.7",
      "54.7",
      "priority",
      "208",
      "yes",
      "1",
      "Mario Kart Wii Game with 1 Wheel - (Wii)"
   ],
   [
      "120476317961",
      "5",
      "5",
      "new",
      "35",
      "4",
      "49.91",
      "parcel",
      "127",
      "yes",
      "1",
      "Mario Kart Wii (Wii) - NIB - Factory Sealed - NR"
   ],
   [
      "220491072489",
      "3",
      "16",
      "used",
      "0.99",
      "4",
      "47",
      "parcel",
      "231",
      "yes",
      "0",
      "Mario Kart Wii (Wii)"
   ],
   [
      "250505896381",
      "7",
      "13",
      "used",
      "10",
      "0",
      "43",
      "standard",
      "21",
      "no",
      "1",
      "Mario Kart Wii (Wii)"
   ],
   [
      "140349745540",
      "5",
      "10",
      "used",
      "9.99",
      "1.99",
      "35.99",
      "upsGround",
      "19",
      "yes",
      "0",
      "Mario Kart Wii (Wii)"
   ],
   [
      "180417692717",
      "1",
      "11",
      "used",
      "9.99",
      "3.99",
      "54.49",
      "firstClass",
      "69",
      "yes",
      "2",
      "MARIO KART FOR NINTENDO Wii WITH 2 WHEELS + GAME"
   ],
   [
      "230382795039",
      "7",
      "15",
      "used",
      "12",
      "0",
      "46",
      "priority",
      "15",
      "yes",
      "1",
      "Mario Kart Wii WITH  BONUS WHEEL!!!!!"
   ],
   [
      "110443640168",
      "1",
      "16",
      "used",
      "0.01",
      "0",
      "31.06",
      "standard",
      "7284",
      "yes",
      "0",
      "Mario Kart Wii (Wii) Nintendo Wii game *--WOW --AWESOME"
   ],
   [
      "260485846288",
      "3",
      "15",
      "used",
      "0.99",
      "0",
      "55.6",
      "upsGround",
      "54",
      "yes",
      "2",
      "Mario Kart Wii (Wii) w/2 Nintendo Wheels Excellent Cond"
   ],
   [
      "110441486551",
      "3",
      "23",
      "new",
      "0.99",
      "4",
      "40.1",
      "standard",
      "270144",
      "yes",
      "0",
      "Mario Kart Wii (GAME ONLY/NO WHEEL) - Nintendo Wii Game"
   ],
   [
      "110443692422",
      "1",
      "20",
      "new",
      "1",
      "2.99",
      "52.59",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ],
   [
      "180412891421",
      "7",
      "9",
      "used",
      "10",
      "4",
      "44",
      "other",
      "103",
      "no",
      "2",
      "Mario Kart Wii (Wii)"
   ],
   [
      "250505900389",
      "5",
      "14",
      "used",
      "10",
      "9.26",
      "38.26",
      "upsGround",
      "35",
      "no",
      "1",
      "Mario Kart (Wii) with Wii Wheel"
   ],
   [
      "110442288138",
      "5",
      "11",
      "used",
      "19.99",
      "4",
      "51",
      "priority",
      "36",
      "no",
      "2",
      "NINTENDO WII MARIO KART GAME DISK WITH TWO (2) WHEELS"
   ],
   [
      "290355806517",
      "1",
      "13",
      "new",
      "1",
      "2.99",
      "48.99",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ],
   [
      "400076879560",
      "1",
      "1",
      "new",
      "54.99",
      "11.45",
      "66.44",
      "upsGround",
      "118345",
      "yes",
      "2",
      "MARIO KART WITH WII WHEEL+1 GT PRO PINK WII WHEEL BUNDL"
   ],
   [
      "170390813853",
      "1",
      "22",
      "new",
      "0.01",
      "0",
      "63.5",
      "media",
      "820",
      "yes",
      "2",
      "BRAND NEW NINTENDO 1 WII MARIO KART WITH 2 WHEELS +GAME"
   ],
   [
      "350258355546",
      "5",
      "7",
      "used",
      "0.99",
      "4",
      "42",
      "firstClass",
      "14503",
      "no",
      "0",
      "Nintendo Wii Mario Kart GAME ONLY"
   ],
   [
      "230382266458",
      "7",
      "18",
      "new",
      "18",
      "4",
      "47",
      "standard",
      "389",
      "yes",
      "1",
      "Mario Kart Wii (Wii)"
   ],
   [
      "230382436039",
      "5",
      "17",
      "used",
      "0.99",
      "4",
      "55",
      "standard",
      "261",
      "no",
      "2",
      "Nintendo Wii Mario Kart With 2 Racing Wheels"
   ],
   [
      "290353981573",
      "7",
      "9",
      "used",
      "0.01",
      "3",
      "33.01",
      "media",
      "381",
      "yes",
      "1",
      "MarioKart (Wii) w/ wheel"
   ],
   [
      "300354031535",
      "1",
      "16",
      "new",
      "1",
      "2.99",
      "53.76",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ],
   [
      "320430035588",
      "5",
      "20",
      "new",
      "0.01",
      "0",
      "46",
      "media",
      "8224",
      "yes",
      "1",
      "BRAND NEW! FACTORY SEALED! MARIO KART WITH Wii WHEEL "
   ],
   [
      "360194338883",
      "3",
      "16",
      "used",
      "0.99",
      "4",
      "43",
      "standard",
      "270143",
      "yes",
      "0",
      "Mario Kart Wii (GAME ONLY/NO WHEEL) - Nintendo Wii Game"
   ],
   [
      "170389664528",
      "3",
      "5",
      "used",
      "35",
      "0",
      "42.55",
      "priority",
      "10",
      "yes",
      "1",
      "Mario Kart Wii (Wii) with 1 Wheel"
   ],
   [
      "190338974387",
      "7",
      "5",
      "used",
      "1",
      "0",
      "52.5",
      "standard",
      "116",
      "yes",
      "2",
      "Mario Kart Wii with Bonus Wheel!!! (2 Wheels Included)"
   ],
   [
      "110441494999",
      "1",
      "25",
      "new",
      "1",
      "2.99",
      "57.5",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ],
   [
      "350261016626",
      "1",
      "3",
      "new",
      "69.95",
      "0",
      "75",
      "standard",
      "118345",
      "yes",
      "3",
      "NEW MARIO KART WITH WII WHEEL+2 GT PRO WHITE WII WHEEL"
   ],
   [
      "150377042368",
      "7",
      "7",
      "used",
      "25",
      "11.42",
      "48.92",
      "parcel",
      "11",
      "yes",
      "1",
      "Mario Kart Wii (Wii)"
   ],
   [
      "160365924565",
      "7",
      "18",
      "new",
      "9.99",
      "4",
      "45.99",
      "firstClass",
      "1154",
      "yes",
      "1",
      "MARIO KART WII WITH STEERING WHEEL NEW NINTENDO WII"
   ],
   [
      "350258591183",
      "7",
      "10",
      "used",
      "0.99",
      "4",
      "40.05",
      "standard",
      "877",
      "yes",
      "1",
      "Mario Kart Wii (Wii) W/RACING WHEEL!"
   ],
   [
      "170389877681",
      "1",
      "13",
      "new",
      "0.01",
      "0",
      "45",
      "other",
      "556",
      "yes",
      "1",
      "Mario Kart Wii, Game and Wheel, Brand New Sealed"
   ],
   [
      "140350726723",
      "3",
      "8",
      "used",
      "20",
      "4",
      "50",
      "parcel",
      "63",
      "yes",
      "2",
      "Mario Kart Wii (Wii)"
   ],
   [
      "250505299784",
      "7",
      "16",
      "new",
      "9.99",
      "9.69",
      "49.75",
      "priority",
      "94",
      "yes",
      "0",
      "Mario Kart Wii (Wii)  *SEALED*"
   ],
   [
      "370266219023",
      "7",
      "3",
      "used",
      "38",
      "4",
      "47",
      "parcel",
      "508",
      "no",
      "1",
      "Mario Kart Wii (Wii)   -   Complete!    Perfect!"
   ],
   [
      "110443653510",
      "1",
      "17",
      "new",
      "1",
      "2.99",
      "56",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ],
   [
      "320431084246",
      "1",
      "11",
      "used",
      "1",
      "0",
      "41",
      "priority",
      "30",
      "no",
      "1",
      "Mario Kart Wii with Wii Wheel"
   ],
   [
      "120477418866",
      "3",
      "9",
      "new",
      "0.01",
      "0",
      "46",
      "firstClass",
      "1144",
      "no",
      "1",
      "NEW Mario Kart Nintendo Wii Racing Game w/Wheel Online"
   ],
   [
      "230383658784",
      "7",
      "10",
      "used",
      "0.99",
      "3.99",
      "34.99",
      "firstClass",
      "462",
      "yes",
      "1",
      "Mario Kart Wii (Wii) Game and Steering Wheel"
   ],
   [
      "320432437858",
      "1",
      "23",
      "used",
      "0.99",
      "0",
      "49",
      "parcel",
      "280",
      "yes",
      "2",
      "Mario Kart Wii (Nintendo Wii) comes with 2 Wheels NEW!!"
   ],
   [
      "170391971205",
      "1",
      "19",
      "new",
      "0.01",
      "0",
      "61",
      "media",
      "820",
      "yes",
      "2",
      "BRAND NEW NINTENDO 1 WII MARIO KART WITH 2 WHEELS +GAME"
   ],
   [
      "180416291487",
      "1",
      "14",
      "new",
      "0.01",
      "0",
      "62.89",
      "media",
      "820",
      "yes",
      "2",
      "BRAND NEW NINTENDO 1 WII MARIO KART WITH 2 WHEELS +GAME"
   ],
   [
      "270466062990",
      "3",
      "11",
      "new",
      "0.99",
      "4",
      "46",
      "firstClass",
      "299",
      "yes",
      "1",
      "NINTENDO ~ MARIO KART Wii ~ NEW IN BOX ~ FACTORY SEALED"
   ],
   [
      "390103890073",
      "1",
      "1",
      "new",
      "64.95",
      "0",
      "64.95",
      "standard",
      "118345",
      "yes",
      "2",
      "MARIO KART WITH WII OFFICIAL WHEEL+1 COBALT BLUE WHEEL"
   ],
   [
      "390099348424",
      "7",
      "14",
      "used",
      "9.95",
      "3.99",
      "36.99",
      "media",
      "2290",
      "no",
      "0",
      "Mario Kart Nintendo Wii Game Complete &amp; MINT !"
   ],
   [
      "280404385327",
      "7",
      "14",
      "used",
      "16",
      "4",
      "44",
      "priority",
      "37",
      "yes",
      "1",
      "Mario Kart Wii w/ wheel"
   ],
   [
      "350258416318",
      "5",
      "17",
      "used",
      "0.99",
      "10.35",
      "41.35",
      "priority",
      "14503",
      "yes",
      "1",
      "Wii Mario Kart Game &amp; Wheel In Original Box Tested WKIN"
   ],
   [
      "230383342455",
      "7",
      "11",
      "used",
      "9.99",
      "3",
      "37",
      "priority",
      "297",
      "no",
      "0",
      "MarioKart Wii"
   ],
   [
      "300354862386",
      "1",
      "18",
      "new",
      "1",
      "2.99",
      "58.98",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ],
   [
      "350258970192",
      "5",
      "20",
      "used",
      "0.99",
      "4",
      "39",
      "firstClass",
      "14503",
      "yes",
      "0",
      "Nintendo Wii Mario Kart GAME ONLY"
   ],
   [
      "120475800455",
      "7",
      "6",
      "used",
      "24.99",
      "8.7",
      "40.7",
      "priority",
      "3085",
      "no",
      "1",
      "NINTENDO WII MARIOKART (WHEEL AND GAME)"
   ],
   [
      "110441497272",
      "1",
      "20",
      "used",
      "0.01",
      "0",
      "39.51",
      "standard",
      "7284",
      "yes",
      "0",
      "Mario Kart Wii (Wii) Nintendo Wii game *--WOW --AWESOME"
   ],
   [
      "150376936435",
      "7",
      "9",
      "used",
      "17.99",
      "0",
      "52",
      "parcel",
      "121",
      "no",
      "2",
      "Mario Kart Wii (Wii)"
   ],
   [
      "140349730405",
      "3",
      "14",
      "new",
      "0.99",
      "8.7",
      "47.7",
      "priority",
      "251",
      "yes",
      "1",
      "Wii Mario Kart game + wheel:  NIB, factory sealed"
   ],
   [
      "300352306018",
      "7",
      "13",
      "used",
      "1",
      "4.9",
      "38.76",
      "parcel",
      "41",
      "no",
      "0",
      "Mario Kart Wii"
   ],
   [
      "110443320905",
      "1",
      "13",
      "new",
      "1",
      "2.99",
      "54.51",
      "upsGround",
      "4858",
      "yes",
      "2",
      "BRAND NEW NINTENDO MARIO KART WITH 2 WHEELS"
   ]
]
