var twinsInfo ={
   "description" : "Description\nA data frame containing data collected in the mid 20th century by Cyril Burt from a study tracked down identical twins who were separated at birth: one child was raised in the home of their biological parents and the other in a foster home. In an attempt to answer the question of whether intelligence is the result of nature or nurture, both children were given IQ tests.",
   "title" : "twins",
   "usage" : "twins",
   "reference" : "library(ggplot2)\nlibrary(dplyr)\nlibrary(tidyr)\n\nplot_data <- twins |>\n  pivot_longer(cols = c(foster, biological), names_to = \"twin\", values_to = \"iq\")\n\nggplot(plot_data, aes(iq, fill = twin)) +\n  geom_histogram(color = \"white\", binwidth = 5) +\n  facet_wrap(~twin) +\n  theme_minimal() +\n  labs(\n    title = \"IQ of identical twins\",\n    subtitle = \"Separated at birth\",\n    x = \"IQ\",\n    y = \"Count\",\n    fill = \"\"\n  )",
   "parameters" : {
      "biological" : "IQ score of the twin raised by Biological parents.",
      "foster" : "IQ score of the twin raised by Foster parents."
   },
   "format" : "A data frame with 27 observations on the following 2 variables."
}

var twins = [
   [
      "foster",
      "biological"
   ],
   [
      "82",
      "82"
   ],
   [
      "80",
      "90"
   ],
   [
      "88",
      "91"
   ],
   [
      "108",
      "115"
   ],
   [
      "116",
      "115"
   ],
   [
      "117",
      "129"
   ],
   [
      "132",
      "131"
   ],
   [
      "71",
      "78"
   ],
   [
      "75",
      "79"
   ],
   [
      "93",
      "82"
   ],
   [
      "95",
      "97"
   ],
   [
      "88",
      "100"
   ],
   [
      "111",
      "107"
   ],
   [
      "63",
      "68"
   ],
   [
      "77",
      "73"
   ],
   [
      "86",
      "81"
   ],
   [
      "83",
      "85"
   ],
   [
      "93",
      "87"
   ],
   [
      "97",
      "87"
   ],
   [
      "87",
      "93"
   ],
   [
      "94",
      "94"
   ],
   [
      "96",
      "95"
   ],
   [
      "112",
      "97"
   ],
   [
      "113",
      "97"
   ],
   [
      "106",
      "103"
   ],
   [
      "107",
      "106"
   ],
   [
      "98",
      "111"
   ]
]
