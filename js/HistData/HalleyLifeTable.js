var HalleyLifeTableInfo ={
   "format" : "A data frame with 84 observations on the following 4 variables.",
   "description" : "Description\nIn 1693 the famous English astronomer Edmond Halley studied\nthe birth and death records of the city of Breslau, which\nhad been transmitted to the Royal Society by Caspar Neumann.\nHe produced a life table showing the number of people\nsurviving to any age from a cohort born the same year. He\nalso used his table to compute the price of life annuities.",
   "title" : "Halley's Life Table",
   "usage" : "data(\"HalleyLifeTable\")",
   "reference" : "Halley's table contained only age and number.\nFor people aged over 84 years, Halley just noted that their total number was 107.\nThis value is not included in the data set.",
   "parameters" : {
      "age" : "a numeric vector",
      "deaths" : "number of deaths, D_k, among people of age k, a numeric vector",
      "number" : "size of the population, P_k surviving until this age, a numeric vector",
      "ratio" : "the ratio P_{k+1}/P_k, the conditional probability\nof surviving until age k + 1 given that one had already reached age k, a numeric vector"
   }
}

var HalleyLifeTable = [
   [
      "age",
      "deaths",
      "number",
      "ratio"
   ],
   [
      "1",
      "238",
      "1000",
      "0.855"
   ],
   [
      "2",
      "145",
      "855",
      "0.9333333333333333"
   ],
   [
      "3",
      "57",
      "798",
      "0.9523809523809523"
   ],
   [
      "4",
      "38",
      "760",
      "0.9631578947368421"
   ],
   [
      "5",
      "28",
      "732",
      "0.9699453551912568"
   ],
   [
      "6",
      "22",
      "710",
      "0.9746478873239437"
   ],
   [
      "7",
      "18",
      "692",
      "0.9826589595375722"
   ],
   [
      "8",
      "12",
      "680",
      "0.9852941176470589"
   ],
   [
      "9",
      "10",
      "670",
      "0.9865671641791045"
   ],
   [
      "10",
      "9",
      "661",
      "0.9878971255673222"
   ],
   [
      "11",
      "8",
      "653",
      "0.98928024502297085"
   ],
   [
      "12",
      "7",
      "646",
      "0.9907120743034056"
   ],
   [
      "13",
      "6",
      "640",
      "0.990625"
   ],
   [
      "14",
      "6",
      "634",
      "0.9905362776025236"
   ],
   [
      "15",
      "6",
      "628",
      "0.9904458598726115"
   ],
   [
      "16",
      "6",
      "622",
      "0.9903536977491961"
   ],
   [
      "17",
      "6",
      "616",
      "0.9902597402597403"
   ],
   [
      "18",
      "6",
      "610",
      "0.9901639344262295"
   ],
   [
      "19",
      "6",
      "604",
      "0.9900662251655629"
   ],
   [
      "20",
      "6",
      "598",
      "0.9899665551839465"
   ],
   [
      "21",
      "6",
      "592",
      "0.9898648648648649"
   ],
   [
      "22",
      "6",
      "586",
      "0.9880546075085325"
   ],
   [
      "23",
      "7",
      "579",
      "0.9896373056994818"
   ],
   [
      "24",
      "6",
      "573",
      "0.9895287958115183"
   ],
   [
      "25",
      "6",
      "567",
      "0.9876543209876543"
   ],
   [
      "26",
      "7",
      "560",
      "0.9875"
   ],
   [
      "27",
      "7",
      "553",
      "0.9873417721518988"
   ],
   [
      "28",
      "7",
      "546",
      "0.9871794871794872"
   ],
   [
      "29",
      "7",
      "539",
      "0.9851576994434137"
   ],
   [
      "30",
      "8",
      "531",
      "0.9849340866290018"
   ],
   [
      "31",
      "8",
      "523",
      "0.9847036328871893"
   ],
   [
      "32",
      "8",
      "515",
      "0.9844660194174757"
   ],
   [
      "33",
      "8",
      "507",
      "0.9842209072978304"
   ],
   [
      "34",
      "8",
      "499",
      "0.9819639278557114"
   ],
   [
      "35",
      "9",
      "490",
      "0.9816326530612245"
   ],
   [
      "36",
      "9",
      "481",
      "0.9812889812889813"
   ],
   [
      "37",
      "9",
      "472",
      "0.9809322033898306"
   ],
   [
      "38",
      "9",
      "463",
      "0.980561555075594"
   ],
   [
      "39",
      "9",
      "454",
      "0.9801762114537445"
   ],
   [
      "40",
      "9",
      "445",
      "0.9797752808988764"
   ],
   [
      "41",
      "9",
      "436",
      "0.9793577981651376"
   ],
   [
      "42",
      "9",
      "427",
      "0.9765807962529274"
   ],
   [
      "43",
      "10",
      "417",
      "0.9760191846522782"
   ],
   [
      "44",
      "10",
      "407",
      "0.9754299754299754"
   ],
   [
      "45",
      "10",
      "397",
      "0.9748110831234257"
   ],
   [
      "46",
      "10",
      "387",
      "0.9741602067183462"
   ],
   [
      "47",
      "10",
      "377",
      "0.9734748010610079"
   ],
   [
      "48",
      "10",
      "367",
      "0.9727520435967303"
   ],
   [
      "49",
      "10",
      "357",
      "0.969187675070028"
   ],
   [
      "50",
      "11",
      "346",
      "0.9682080924855492"
   ],
   [
      "51",
      "11",
      "335",
      "0.9671641791044776"
   ],
   [
      "52",
      "11",
      "324",
      "0.9660493827160493"
   ],
   [
      "53",
      "11",
      "313",
      "0.9648562300319489"
   ],
   [
      "54",
      "11",
      "302",
      "0.9668874172185431"
   ],
   [
      "55",
      "10",
      "292",
      "0.9657534246575342"
   ],
   [
      "56",
      "10",
      "282",
      "0.9645390070921985"
   ],
   [
      "57",
      "10",
      "272",
      "0.9632352941176471"
   ],
   [
      "58",
      "10",
      "262",
      "0.9618320610687023"
   ],
   [
      "59",
      "10",
      "252",
      "0.9603174603174603"
   ],
   [
      "60",
      "10",
      "242",
      "0.9586776859504132"
   ],
   [
      "61",
      "10",
      "232",
      "0.9568965517241379"
   ],
   [
      "62",
      "10",
      "222",
      "0.954954954954955"
   ],
   [
      "63",
      "10",
      "212",
      "0.9528301886792453"
   ],
   [
      "64",
      "10",
      "202",
      "0.9504950495049505"
   ],
   [
      "65",
      "10",
      "192",
      "0.9479166666666666"
   ],
   [
      "66",
      "10",
      "182",
      "0.945054945054945"
   ],
   [
      "67",
      "10",
      "172",
      "0.9418604651162791"
   ],
   [
      "68",
      "10",
      "162",
      "0.9382716049382716"
   ],
   [
      "69",
      "10",
      "152",
      "0.9342105263157895"
   ],
   [
      "70",
      "10",
      "142",
      "0.9225352112676056"
   ],
   [
      "71",
      "11",
      "131",
      "0.916030534351145"
   ],
   [
      "72",
      "11",
      "120",
      "0.9083333333333333"
   ],
   [
      "73",
      "11",
      "109",
      "0.8990825688073395"
   ],
   [
      "74",
      "11",
      "98",
      "0.8979591836734694"
   ],
   [
      "75",
      "10",
      "88",
      "0.8863636363636364"
   ],
   [
      "76",
      "10",
      "78",
      "0.8717948717948718"
   ],
   [
      "77",
      "10",
      "68",
      "0.8529411764705882"
   ],
   [
      "78",
      "10",
      "58",
      "0.8620689655172413"
   ],
   [
      "79",
      "8",
      "50",
      "0.82"
   ],
   [
      "80",
      "9",
      "41",
      "0.8292682926829268"
   ],
   [
      "81",
      "7",
      "34",
      "0.8235294117647058"
   ],
   [
      "82",
      "6",
      "28",
      "0.8214285714285714"
   ],
   [
      "83",
      "5",
      "23",
      "0.8695652173913043"
   ],
   [
      "84",
      "3",
      "20",
      ""
   ]
]