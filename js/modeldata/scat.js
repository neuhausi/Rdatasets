var scatInfo ={
   "description" : "Description\nReid (2015) collected data on animal feses in coastal California. The data\nconsist of DNA verified species designations as well as fields related to\nthe time and place of the collection and the scat itself. The data are on\nthe three main species.",
   "title" : "Morphometric data on scat",
   "usage" : "scat\n\na tibble",
   "format" : "Reid, R. E. B. (2015). A morphometric modeling approach to\ndistinguishing among bobcat, coyote and gray fox scats. Wildlife\nBiology, 21(5), 254-262"
}

var scat = [
   [
      "Species",
      "Month",
      "Year",
      "Site",
      "Location",
      "Age",
      "Number",
      "Length",
      "Diameter",
      "Taper",
      "TI",
      "Mass",
      "d13C",
      "d15N",
      "CN",
      "ropey",
      "segmented",
      "flat",
      "scrape"
   ],
   [
      "coyote",
      "January",
      "2012",
      "YOLA",
      "edge",
      "5",
      "2",
      "9.5",
      "25.7",
      "41.9",
      "1.63",
      "15.89",
      "-26.85",
      "6.94",
      "8.5",
      "0",
      "0",
      "0",
      "0"
   ],
   [
      "coyote",
      "January",
      "2012",
      "YOLA",
      "edge",
      "3",
      "2",
      "14",
      "25.4",
      "37.1",
      "1.46",
      "17.61",
      "-29.62",
      "9.87",
      "11.3",
      "0",
      "0",
      "0",
      "0"
   ],
   [
      "bobcat",
      "January",
      "2012",
      "YOLA",
      "middle",
      "3",
      "2",
      "9",
      "18.8",
      "16.5",
      "0.88",
      "8.4",
      "-28.73",
      "8.52",
      "8.1",
      "1",
      "1",
      "0",
      "1"
   ],
   [
      "coyote",
      "January",
      "2012",
      "YOLA",
      "middle",
      "5",
      "2",
      "8.5",
      "18.1",
      "24.7",
      "1.36",
      "7.4",
      "-20.07",
      "5.79",
      "11.5",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "coyote",
      "January",
      "2012",
      "YOLA",
      "edge",
      "5",
      "4",
      "8",
      "20.7",
      "20.1",
      "0.97",
      "25.45",
      "-23.24",
      "7.01",
      "10.6",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "coyote",
      "January",
      "2012",
      "YOLA",
      "edge",
      "5",
      "3",
      "9",
      "21.2",
      "28.5",
      "1.34",
      "14.14",
      "-29",
      "8.28",
      "9",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "bobcat",
      "January",
      "2012",
      "ANNU",
      "off_edge",
      "1",
      "5",
      "6",
      "15.7",
      "8.2",
      "0.52",
      "14.82",
      "-28.06",
      "4.2",
      "5.4",
      "1",
      "1",
      "0",
      "1"
   ],
   [
      "bobcat",
      "January",
      "2012",
      "ANNU",
      "off_edge",
      "3",
      "7",
      "5.5",
      "21.9",
      "19.3",
      "0.88",
      "26.41",
      "-27.6",
      "3.89",
      "5.6",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "January",
      "2012",
      "ANNU",
      "off_edge",
      "5",
      "2",
      "11",
      "17.5",
      "29.1",
      "1.66",
      "16.24",
      "-28.64",
      "7.34",
      "5.8",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "January",
      "2012",
      "ANNU",
      "middle",
      "5",
      "1",
      "20.5",
      "18",
      "21.4",
      "1.19",
      "11.22",
      "-27.35",
      "6.06",
      "7.7",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "gray_fox",
      "January",
      "2012",
      "ANNU",
      "middle",
      "3",
      "1",
      "8",
      "",
      "",
      "",
      "2.51",
      "-25.79",
      "7.83",
      "20.5",
      "0",
      "0",
      "1",
      "0"
   ],
   [
      "gray_fox",
      "January",
      "2012",
      "ANNU",
      "middle",
      "1",
      "1",
      "8",
      "12.9",
      "14.7",
      "1.14",
      "8.55",
      "-25.71",
      "8.47",
      "18.1",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "gray_fox",
      "January",
      "2012",
      "ANNU",
      "middle",
      "3",
      "1",
      "12",
      "",
      "",
      "",
      "18.14",
      "-25.18",
      "10.1",
      "15.5",
      "0",
      "0",
      "1",
      "0"
   ],
   [
      "gray_fox",
      "January",
      "2012",
      "ANNU",
      "middle",
      "3",
      "1",
      "11.5",
      "",
      "",
      "",
      "8.17",
      "-25.73",
      "9.72",
      "18.9",
      "0",
      "0",
      "1",
      "0"
   ],
   [
      "gray_fox",
      "January",
      "2012",
      "ANNU",
      "middle",
      "1",
      "1",
      "8.5",
      "",
      "",
      "",
      "3.43",
      "-26.17",
      "8.07",
      "19.9",
      "0",
      "0",
      "1",
      "0"
   ],
   [
      "gray_fox",
      "January",
      "2012",
      "ANNU",
      "middle",
      "5",
      "1",
      "10.5",
      "12.1",
      "11.9",
      "0.98",
      "3.1",
      "-26.88",
      "6.7",
      "7",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "February",
      "2013",
      "ANNU",
      "edge",
      "5",
      "7",
      "5",
      "13",
      "37.6",
      "2.89",
      "9.75",
      "-27.92",
      "7.57",
      "5.8",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "coyote",
      "February",
      "2013",
      "ANNU",
      "edge",
      "5",
      "6",
      "6.5",
      "24",
      "23.1",
      "0.96",
      "33",
      "-27.66",
      "12.88",
      "7.7",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "February",
      "2013",
      "ANNU",
      "edge",
      "5",
      "4",
      "10.5",
      "15.5",
      "38.2",
      "2.46",
      "12.76",
      "-25.77",
      "3.88",
      "5.7",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "bobcat",
      "February",
      "2013",
      "ANNU",
      "off_edge",
      "3",
      "3",
      "11",
      "16.5",
      "25.8",
      "1.56",
      "18.75",
      "-28.91",
      "6.36",
      "6",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "February",
      "2013",
      "ANNU",
      "off_edge",
      "5",
      "4",
      "11.5",
      "17.5",
      "18.9",
      "1.08",
      "14.08",
      "-27.3",
      "6.61",
      "6.9",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "February",
      "2013",
      "ANNU",
      "off_edge",
      "5",
      "5",
      "7.5",
      "18",
      "32.1",
      "1.78",
      "21.69",
      "-27.2",
      "9.07",
      "5.8",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "April",
      "2012",
      "YOLA",
      "middle",
      "4",
      "4",
      "5.5",
      "21.7",
      "18.9",
      "0.87",
      "19.15",
      "-29.12",
      "8.72",
      "6.05",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "April",
      "2012",
      "YOLA",
      "middle",
      "3",
      "1",
      "9",
      "21.6",
      "11.4",
      "0.53",
      "9.74",
      "-29.85",
      "10.32",
      "7.48",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "coyote",
      "April",
      "2012",
      "YOLA",
      "middle",
      "5",
      "2",
      "17",
      "22.1",
      "5",
      "0.23",
      "24.69",
      "-27.82",
      "7.95",
      "7.3",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "coyote",
      "April",
      "2012",
      "YOLA",
      "middle",
      "3",
      "2",
      "6",
      "12.5",
      "21.4",
      "1.71",
      "5.05",
      "-29.52",
      "8.91",
      "7.5",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "bobcat",
      "April",
      "2012",
      "YOLA",
      "off_edge",
      "5",
      "2",
      "16.5",
      "18.7",
      "23",
      "1.23",
      "10.21",
      "-28.53",
      "5.59",
      "7.84",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "April",
      "2012",
      "ANNU",
      "off_edge",
      "4",
      "1",
      "16.5",
      "16.5",
      "28.9",
      "1.83",
      "7.11",
      "-27.66",
      "8.06",
      "6.2",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "gray_fox",
      "April",
      "2012",
      "ANNU",
      "middle",
      "1",
      "1",
      "10",
      "",
      "",
      "",
      "5.53",
      "-26.58",
      "8.17",
      "18.9",
      "0",
      "0",
      "1",
      "0"
   ],
   [
      "gray_fox",
      "April",
      "2012",
      "ANNU",
      "off_edge",
      "4",
      "3",
      "13.5",
      "19.1",
      "12.8",
      "0.67",
      "9.23",
      "-28.17",
      "5.88",
      "7.7",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "gray_fox",
      "April",
      "2012",
      "ANNU",
      "middle",
      "4",
      "2",
      "9.5",
      "18.4",
      "28.8",
      "1.57",
      "4.37",
      "-27.37",
      "4.9",
      "6.6",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "gray_fox",
      "April",
      "2012",
      "ANNU",
      "off_edge",
      "5",
      "1",
      "12",
      "14.7",
      "34.7",
      "2.38",
      "7.97",
      "-26.99",
      "5.87",
      "9.2",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "bobcat",
      "April",
      "2012",
      "ANNU",
      "off_edge",
      "3",
      "2",
      "7",
      "15.7",
      "20.9",
      "1.33",
      "8.98",
      "-28.17",
      "7.08",
      "6.2",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "gray_fox",
      "April",
      "2012",
      "ANNU",
      "edge",
      "5",
      "1",
      "10.5",
      "17.7",
      "7.5",
      "0.42",
      "7.14",
      "-25.94",
      "7.56",
      "7.7",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "April",
      "2012",
      "ANNU",
      "edge",
      "3",
      "6",
      "4",
      "20.8",
      "12.4",
      "0.6",
      "25.73",
      "-29.55",
      "8.56",
      "7",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "April",
      "2012",
      "ANNU",
      "off_edge",
      "4",
      "5",
      "5",
      "13.8",
      "18.8",
      "1.36",
      "5.5",
      "-27.72",
      "1.84",
      "6.2",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "May",
      "2013",
      "ANNU",
      "middle",
      "3",
      "2",
      "9",
      "17.7",
      "44.7",
      "2.53",
      "6.46",
      "-28.48",
      "6.29",
      "5.6",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "May",
      "2013",
      "ANNU",
      "edge",
      "3",
      "3",
      "12",
      "22",
      "38.9",
      "1.77",
      "23.73",
      "-28.92",
      "5.17",
      "6.2",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "May",
      "2013",
      "ANNU",
      "edge",
      "4",
      "2",
      "15",
      "21.7",
      "53.4",
      "2.46",
      "18",
      "-27.25",
      "6.94",
      "5.5",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "May",
      "2013",
      "ANNU",
      "edge",
      "4",
      "1",
      "11",
      "16.5",
      "16",
      "0.97",
      "11.25",
      "-27.92",
      "8.38",
      "7.7",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "May",
      "2013",
      "ANNU",
      "off_edge",
      "5",
      "4",
      "6",
      "15.9",
      "52.8",
      "3.32",
      "10.6",
      "-28.73",
      "7.74",
      "8.4",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "May",
      "2013",
      "ANNU",
      "edge",
      "3",
      "4",
      "12",
      "21.4",
      "12",
      "0.56",
      "19.04",
      "-28.72",
      "6.94",
      "6.8",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "May",
      "2013",
      "ANNU",
      "off_edge",
      "5",
      "3",
      "10.5",
      "22",
      "37.2",
      "1.69",
      "18.9",
      "-28",
      "6.42",
      "6.9",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "bobcat",
      "May",
      "2013",
      "ANNU",
      "edge",
      "3",
      "2",
      "4.5",
      "18.2",
      "37.8",
      "2.08",
      "3.82",
      "-25.76",
      "3.5",
      "7.3",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "bobcat",
      "May",
      "2013",
      "ANNU",
      "edge",
      "3",
      "2",
      "7.5",
      "16.1",
      "32",
      "1.99",
      "6.7",
      "-26.7",
      "7.52",
      "6",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "bobcat",
      "June",
      "2012",
      "ANNU",
      "edge",
      "1",
      "1",
      "5.5",
      "19.6",
      "25",
      "1.28",
      "1.5",
      "-27.4",
      "8.89",
      "4.9",
      "0",
      "0",
      "0",
      "0"
   ],
   [
      "gray_fox",
      "June",
      "2012",
      "ANNU",
      "middle",
      "2",
      "3",
      "6.5",
      "15.1",
      "37.4",
      "2.48",
      "4.31",
      "-28.47",
      "6.39",
      "10.1",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "gray_fox",
      "June",
      "2012",
      "ANNU",
      "edge",
      "1",
      "1",
      "11.5",
      "10.3",
      "30.8",
      "2.99",
      "2.23",
      "-28.04",
      "6.51",
      "7.2",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "bobcat",
      "June",
      "2012",
      "ANNU",
      "middle",
      "2",
      "5",
      "9.5",
      "21.3",
      "18.3",
      "0.86",
      "16.33",
      "-28.56",
      "7.54",
      "6.7",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "June",
      "2012",
      "ANNU",
      "edge",
      "5",
      "3",
      "12",
      "18.7",
      "30.3",
      "1.62",
      "13.19",
      "-27.72",
      "7.25",
      "5",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "June",
      "2012",
      "ANNU",
      "middle",
      "3",
      "3",
      "10",
      "24.1",
      "",
      "",
      "26.89",
      "-27.15",
      "3.46",
      "5.5",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "coyote",
      "June",
      "2012",
      "ANNU",
      "edge",
      "3",
      "2",
      "12",
      "23.1",
      "39.1",
      "1.69",
      "22.59",
      "-22.19",
      "18",
      "6",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "coyote",
      "June",
      "2012",
      "ANNU",
      "edge",
      "5",
      "2",
      "6",
      "14.1",
      "20.1",
      "1.43",
      "23.22",
      "-19.67",
      "15.48",
      "7.8",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "coyote",
      "June",
      "2012",
      "ANNU",
      "middle",
      "3",
      "3",
      "14.5",
      "23.7",
      "31.4",
      "1.32",
      "28.11",
      "-22.43",
      "15.37",
      "6.7",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "bobcat",
      "June",
      "2012",
      "YOLA",
      "middle",
      "2",
      "2",
      "7",
      "17.1",
      "27.1",
      "1.58",
      "13",
      "-25.23",
      "5.09",
      "4.5",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "June",
      "2012",
      "YOLA",
      "off_edge",
      "3",
      "2",
      "7",
      "16.3",
      "42",
      "2.58",
      "4.49",
      "-27.92",
      "5.56",
      "10.4",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "June",
      "2012",
      "YOLA",
      "off_edge",
      "4",
      "4",
      "8.5",
      "20.9",
      "37.3",
      "1.78",
      "21.64",
      "-28.06",
      "5.36",
      "7.6",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "coyote",
      "June",
      "2012",
      "YOLA",
      "middle",
      "4",
      "1",
      "17",
      "17",
      "53",
      "3.12",
      "9.12",
      "-27.49",
      "5.5",
      "13.4",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "August",
      "2013",
      "ANNU",
      "edge",
      "3",
      "1",
      "11.5",
      "16.4",
      "37.8",
      "3.18",
      "3.94",
      "-26.82",
      "6.52",
      "5.5",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "gray_fox",
      "August",
      "2013",
      "ANNU",
      "edge",
      "3",
      "2",
      "9.5",
      "17.8",
      "18.8",
      "1.06",
      "5.38",
      "",
      "",
      "",
      "0",
      "0",
      "0",
      "0"
   ],
   [
      "gray_fox",
      "August",
      "2013",
      "ANNU",
      "edge",
      "5",
      "2",
      "9",
      "18.5",
      "20",
      "1.16",
      "6.4",
      "-28.67",
      "3.9",
      "12.3",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "gray_fox",
      "August",
      "2013",
      "ANNU",
      "middle",
      "5",
      "3",
      "7.5",
      "16",
      "20",
      "1.25",
      "6.23",
      "-28.56",
      "5.32",
      "10.6",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "bobcat",
      "August",
      "2013",
      "ANNU",
      "middle",
      "3",
      "1",
      "14",
      "23.4",
      "41.2",
      "2.38",
      "4.47",
      "-29",
      "7.63",
      "7.2",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "gray_fox",
      "August",
      "2013",
      "ANNU",
      "middle",
      "3",
      "4",
      "6",
      "16.8",
      "31.4",
      "1.83",
      "4.4",
      "-27.57",
      "5.87",
      "5.7",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "August",
      "2013",
      "ANNU",
      "middle",
      "3",
      "4",
      "6.5",
      "17.4",
      "17.8",
      "1.02",
      "10.98",
      "-28.84",
      "3.79",
      "7.5",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "August",
      "2013",
      "ANNU",
      "edge",
      "3",
      "2",
      "11.5",
      "18",
      "15.9",
      "1.06",
      "13",
      "-27.84",
      "5.36",
      "6",
      "0",
      "1",
      "0",
      "1"
   ],
   [
      "bobcat",
      "August",
      "2013",
      "ANNU",
      "edge",
      "1",
      "3",
      "9.5",
      "19.3",
      "32.8",
      "1.7",
      "14.94",
      "",
      "",
      "",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "September",
      "2011",
      "ANNU",
      "edge",
      "1",
      "3",
      "5",
      "17.9",
      "",
      "",
      "9.51",
      "-27.5",
      "5.87",
      "7",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "coyote",
      "September",
      "2011",
      "ANNU",
      "middle",
      "3",
      "5",
      "2.5",
      "18.1",
      "",
      "",
      "18.26",
      "-26.43",
      "7.91",
      "9.3",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "September",
      "2011",
      "ANNU",
      "middle",
      "5",
      "1",
      "10",
      "25.8",
      "",
      "",
      "8.73",
      "-26.83",
      "5.97",
      "7.4",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "bobcat",
      "September",
      "2011",
      "ANNU",
      "middle",
      "5",
      "1",
      "10",
      "22.2",
      "",
      "",
      "25.9",
      "-26.81",
      "6.91",
      "7.7",
      "0",
      "0",
      "0",
      "0"
   ],
   [
      "coyote",
      "September",
      "2011",
      "ANNU",
      "edge",
      "5",
      "3",
      "5",
      "20.1",
      "",
      "",
      "14.46",
      "-22.54",
      "13.19",
      "7.7",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "coyote",
      "September",
      "2011",
      "ANNU",
      "middle",
      "4",
      "2",
      "9",
      "17.8",
      "",
      "",
      "10.26",
      "-19.76",
      "17.1",
      "7.2",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "bobcat",
      "September",
      "2011",
      "ANNU",
      "middle",
      "5",
      "2",
      "6",
      "15.2",
      "20.6",
      "1.35",
      "3.92",
      "-27.81",
      "5.24",
      "8.4",
      "0",
      "0",
      "0",
      "0"
   ],
   [
      "bobcat",
      "September",
      "2011",
      "ANNU",
      "middle",
      "5",
      "3",
      "6",
      "19.3",
      "",
      "",
      "14.55",
      "-27.79",
      "2.62",
      "7.7",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "September",
      "2011",
      "ANNU",
      "middle",
      "5",
      "1",
      "6",
      "24.8",
      "",
      "",
      "5.66",
      "-28.15",
      "5.87",
      "8.5",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "gray_fox",
      "September",
      "2011",
      "ANNU",
      "middle",
      "4",
      "2",
      "7.5",
      "7.8",
      "67.7",
      "8.68",
      "2.05",
      "-26.99",
      "8.26",
      "8.8",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "gray_fox",
      "September",
      "2011",
      "ANNU",
      "middle",
      "5",
      "3",
      "5",
      "11.6",
      "11.5",
      "0.99",
      "2.78",
      "-27.27",
      "3.9",
      "19.1",
      "0",
      "0",
      "0",
      "0"
   ],
   [
      "gray_fox",
      "September",
      "2011",
      "ANNU",
      "middle",
      "3",
      "5",
      "5",
      "9.8",
      "9.6",
      "0.98",
      "3.4",
      "-28.9",
      "4.05",
      "23.6",
      "0",
      "0",
      "0",
      "0"
   ],
   [
      "gray_fox",
      "September",
      "2011",
      "ANNU",
      "middle",
      "2",
      "2",
      "7",
      "14.9",
      "",
      "",
      "",
      "-28.92",
      "5.23",
      "13.2",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "bobcat",
      "September",
      "2011",
      "YOLA",
      "middle",
      "1",
      "3",
      "6.7",
      "17.6",
      "15",
      "0.85",
      "14.62",
      "-27.95",
      "7.28",
      "5.8",
      "0",
      "1",
      "0",
      "1"
   ],
   [
      "bobcat",
      "October",
      "2012",
      "ANNU",
      "edge",
      "1",
      "3",
      "6",
      "18.1",
      "2.4",
      "1.62",
      "11.62",
      "-27.44",
      "7.96",
      "5.7",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "bobcat",
      "October",
      "2012",
      "ANNU",
      "edge",
      "3",
      "3",
      "11.5",
      "16.8",
      "40.4",
      "2.4",
      "6.16",
      "-27.65",
      "5.79",
      "8.6",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "bobcat",
      "October",
      "2012",
      "ANNU",
      "edge",
      "1",
      "3",
      "12",
      "15.7",
      "2.3",
      "1.48",
      "5.15",
      "-24.55",
      "4.31",
      "7",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "gray_fox",
      "October",
      "2012",
      "ANNU",
      "edge",
      "4",
      "3",
      "6",
      "15.8",
      "2.5",
      "2.02",
      "4.81",
      "-28.97",
      "5.56",
      "6.3",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "gray_fox",
      "October",
      "2012",
      "ANNU",
      "off_edge",
      "1",
      "2",
      "9.5",
      "17.3",
      "",
      "",
      "6.77",
      "-27.33",
      "6.73",
      "9.2",
      "0",
      "0",
      "0",
      "0"
   ],
   [
      "coyote",
      "October",
      "2012",
      "ANNU",
      "edge",
      "1",
      "2",
      "11",
      "30",
      "56.8",
      "1.89",
      "0.94",
      "-27.25",
      "8.09",
      "15.4",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "coyote",
      "October",
      "2012",
      "ANNU",
      "middle",
      "3",
      "3",
      "16",
      "24.8",
      "36.7",
      "1.48",
      "21.25",
      "-26.75",
      "6.19",
      "6.4",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "coyote",
      "October",
      "2012",
      "ANNU",
      "off_edge",
      "3",
      "4",
      "14",
      "15.2",
      "39.7",
      "2.61",
      "12.91",
      "-20.62",
      "3.97",
      "4.9",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "October",
      "2012",
      "ANNU",
      "off_edge",
      "4",
      "4",
      "7.5",
      "20",
      "17.3",
      "0.87",
      "9.68",
      "-28.29",
      "5.98",
      "6.7",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "October",
      "2012",
      "ANNU",
      "edge",
      "3",
      "3",
      "11",
      "24.7",
      "28.8",
      "1.17",
      "5.93",
      "-28.02",
      "6.86",
      "7.8",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "bobcat",
      "October",
      "2012",
      "ANNU",
      "middle",
      "3",
      "2",
      "14",
      "24.5",
      "29.8",
      "1.22",
      "23.55",
      "-27.52",
      "5.84",
      "7",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "October",
      "2012",
      "ANNU",
      "off_edge",
      "3",
      "6",
      "7",
      "16.1",
      "2.3",
      "1.27",
      "11.48",
      "-26.79",
      "6.21",
      "7",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "coyote",
      "November",
      "2011",
      "ANNU",
      "edge",
      "4",
      "3",
      "3.1",
      "22.9",
      "19.9",
      "0.87",
      "24.01",
      "-22.58",
      "8.23",
      "6.7",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "coyote",
      "November",
      "2011",
      "ANNU",
      "off_edge",
      "3",
      "1",
      "4.5",
      "",
      "",
      "",
      "20.29",
      "-22.69",
      "13.32",
      "10.4",
      "0",
      "0",
      "1",
      "0"
   ],
   [
      "coyote",
      "November",
      "2011",
      "ANNU",
      "middle",
      "2",
      "2",
      "9.5",
      "14.8",
      "22.4",
      "1.52",
      "1.81",
      "-26.45",
      "8.92",
      "7.7",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "coyote",
      "November",
      "2011",
      "ANNU",
      "middle",
      "1",
      "1",
      "5.5",
      "11",
      "15.8",
      "1.44",
      "9.24",
      "-22.46",
      "14.59",
      "9.6",
      "0",
      "0",
      "0",
      "0"
   ],
   [
      "bobcat",
      "November",
      "2011",
      "ANNU",
      "off_edge",
      "4",
      "2",
      "11.5",
      "20",
      "25.9",
      "1.3",
      "9.66",
      "-26.72",
      "6.06",
      "6.6",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "coyote",
      "November",
      "2011",
      "ANNU",
      "off_edge",
      "1",
      "3",
      "7",
      "21",
      "24.6",
      "1.17",
      "32.75",
      "-22.36",
      "15.06",
      "7",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "coyote",
      "November",
      "2011",
      "ANNU",
      "off_edge",
      "1",
      "4",
      "6.5",
      "24",
      "91.5",
      "0.81",
      "53.7",
      "-23.84",
      "12.59",
      "7",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "coyote",
      "November",
      "2011",
      "ANNU",
      "edge",
      "3",
      "1",
      "12",
      "16",
      "43.2",
      "2.7",
      "13.93",
      "-25.16",
      "12.29",
      "7.4",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "coyote",
      "November",
      "2011",
      "ANNU",
      "edge",
      "3",
      "4",
      "10.5",
      "20.4",
      "15",
      "0.74",
      "9.03",
      "-28.03",
      "11.08",
      "9.7",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "November",
      "2011",
      "ANNU",
      "edge",
      "5",
      "2",
      "7",
      "21",
      "48.7",
      "2.32",
      "8.36",
      "-27.45",
      "4.87",
      "6.6",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "gray_fox",
      "November",
      "2011",
      "ANNU",
      "middle",
      "1",
      "2",
      "6",
      "15.8",
      "15.7",
      "0.99",
      "4.13",
      "-26.74",
      "4.51",
      "8.1",
      "1",
      "1",
      "0",
      "0"
   ],
   [
      "bobcat",
      "November",
      "2011",
      "ANNU",
      "edge",
      "3",
      "2",
      "11",
      "19",
      "38.6",
      "2.03",
      "6.4",
      "-25.16",
      "6.65",
      "7",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "gray_fox",
      "November",
      "2011",
      "ANNU",
      "off_edge",
      "4",
      "1",
      "14",
      "17",
      "38.9",
      "2.29",
      "4.24",
      "-27.79",
      "5.63",
      "6.7",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "bobcat",
      "November",
      "2011",
      "ANNU",
      "middle",
      "5",
      "2",
      "7.5",
      "21.8",
      "26.2",
      "1.2",
      "11.39",
      "-27.92",
      "6.85",
      "6",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "bobcat",
      "November",
      "2011",
      "YOLA",
      "middle",
      "1",
      "5",
      "14.5",
      "17.8",
      "9.1",
      "0.51",
      "15.8",
      "-27.72",
      "11.27",
      "6.1",
      "0",
      "1",
      "0",
      "1"
   ],
   [
      "coyote",
      "November",
      "2011",
      "YOLA",
      "middle",
      "4",
      "1",
      "12",
      "20.6",
      "36.9",
      "1.79",
      "36.84",
      "-26.84",
      "8.84",
      "6.8",
      "0",
      "0",
      "0",
      "0"
   ],
   [
      "coyote",
      "November",
      "2011",
      "ANNU",
      "middle",
      "3",
      "3",
      "11.5",
      "22.9",
      "49.6",
      "2.17",
      "4.92",
      "-25.68",
      "7.23",
      "10.1",
      "1",
      "0",
      "0",
      "0"
   ]
]