var HeatXInfo ={
   "parameters" : {
      "T.hot.out" : "temperature (C) of the hot water as it leaves the apparatus",
      "T.cold.in" : "temperature (C) of the cold water as it enters the apparatus",
      "T.hot.in" : "temperature (C) of the hot water as it enters the apparatus",
      "m.hot" : "flow rate (L/min) of the hot water",
      "trial" : "trial number",
      "T.cold.out" : "temperature (C) of the cold water as it leaves the apparatus",
      "m.cold" : "flow rate (L/min) of the cold water"
   },
   "title" : "Data from a heat exchanger laboratory",
   "reference" : "# We can test for heat exchange with the environment by checking to see if the\n# heat gained by the cold water matches the heat lost by the hot water.\nC_p <- 4.182 / 60  # / 60 because measuring m in L/min\nHeatX2 <-\n  dplyr::mutate(HeatX,\n    Q.cold = m.cold * C_p * (T.cold.out - T.cold.in),\n    Q.hot  = m.hot * C_p * (T.hot.out- T.hot.in),\n    Q.env  = Q.cold + Q.hot\n  )\nif (require(ggformula)) {\n  gf_jitter( \"\" ~ Q.env, data = HeatX2, alpha = 0.6, size = 4,\n    width = 0, height = 0.1, seed = 123) |>\n  gf_labs(y = \"\")\n}\nif (require(mosaic)) {\n  t.test( ~Q.env, data = HeatX2 )\n}",
   "format" : "A data frame with 6 observations on the following variables.",
   "description" : "Description\nThese data were collected by engineering students at Calvin College.\nThe apparatus consists of concentric pipes insulated from the environment so that\nas nearly as can be managed the only heat exchange is between the hot and cold water.",
   "usage" : "data(HeatX)"
}

var HeatX = [
   [
      "trial",
      "T.cold.in",
      "T.cold.out",
      "T.hot.in",
      "T.hot.out",
      "m.cold",
      "m.hot"
   ],
   [
      "1",
      "14.3",
      "18.6",
      "38.2",
      "33.9",
      "10",
      "10"
   ],
   [
      "2",
      "14.1",
      "18.7",
      "35.9",
      "32.8",
      "7.5",
      "10"
   ],
   [
      "3",
      "14.1",
      "19.4",
      "35.9",
      "33.4",
      "5",
      "10"
   ],
   [
      "4",
      "14.2",
      "18.4",
      "35.8",
      "31.8",
      "5",
      "5"
   ],
   [
      "5",
      "14.1",
      "17.4",
      "35.7",
      "30.9",
      "7.5",
      "5"
   ],
   [
      "6",
      "14.1",
      "16.9",
      "35.8",
      "30.4",
      "10",
      "5"
   ]
]
