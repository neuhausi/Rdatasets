var UStaxWordsInfo ={
   "parameters" : {
      "EntireTaxCode" : "number of words in thousands in the US \ntax code",
      "otherTaxCode" : "number of words in thousands in US tax \ncode other than income tax",
      "IncomeTaxCode" : "number of words in thousands in the US \nincome tax code",
      "otherTaxRegulations" : "number of words in thousands in US tax\nregulations other than income tax",
      "otherTaxCodeAndRegs" : "number of words in thousands in both \ncode and regulations for US taxes apart\nfrom income taxes.",
      "EntireTaxCodeAndRegs" : "number of words in thousands in US tax \ncode and regulations",
      "IncomeTaxRegulations" : "number of words in thousands in US \nincome tax regulations",
      "IncomeTaxCodeAndRegs" : "number of words in thousands in both \nthe code and regulations for the US\nincome tax",
      "year" : "tax year"
   },
   "title" : "Number of Words in US Tax Law",
   "description" : "Description\nThousands of words in US tax law for 1995\nto 2015 in 10 year intervals.  This\nincludes income taxes and all taxes in the\ncode itself (written by congress) and\nregulations (written by government \nadministrators).  For 2015 only \nEntireTaxCodeAndRegs is given;  for \nother years, this number is broken down by \nincome tax vs. other taxes and code vs. \nregulations.",
   "usage" : "data(UStaxWords)",
   "reference" : "Thousands of words in the US tax code and \nfederal tax regulations, 1955-2015.  This\nis based on data from the Tax Foundation\n(taxfoundation.org), adjusted to \neliminate an obvious questionable observation \nin otherTaxRegulations for 1965.  The\nnumbers of words in \notherTaxRegulations was not reported\ndirectly by the Tax Foundation but is\neasily computed as the difference between\ntheir Income and Entire tax numbers.  This\nseries  shows the numbers falling by 48\npercent between 1965 and 1975 and by 1.5\npercent between 1995 and 2005.  These are\nthe only declines seen in these numbers\nand seem inconsistent with the common \nconcern (expressed e.g., in Moody,\nWarcholik and Hodge, 2005) about the\ndifficulties of simplifying any \ngovernmental program, because vested \ninterest appear to defend almost anything.\nLessig (2011) notes that virtually all\nprovisions of US law that favor certain\nsegments of society are set to expire after\na modest number of years.  These sunset\nprovisions provide recurring opportunities\nfor incumbent politicians to extort \ncampaign contributions from those same\nsegments to ensure the continuation of the\nfavorable treatment.",
   "format" : "A data.frame containing:"
}

var UStaxWords = [
   [
      "year",
      "IncomeTaxCode",
      "otherTaxCode",
      "EntireTaxCode",
      "IncomeTaxRegulations",
      "otherTaxRegulations",
      "EntireTaxRegulations",
      "IncomeTaxCodeAndRegs",
      "otherTaxCodeAndRegs",
      "EntireTaxCodeAndRegs"
   ],
   [
      "1955",
      "172",
      "237",
      "409",
      "547",
      "440",
      "987",
      "718",
      "678",
      "1396"
   ],
   [
      "1965",
      "243",
      "305",
      "548",
      "1638",
      "565",
      "2203",
      "1881",
      "870",
      "2751"
   ],
   [
      "1975",
      "395",
      "363",
      "758",
      "2456",
      "692",
      "3148",
      "2851",
      "1055",
      "3906"
   ],
   [
      "1985",
      "776",
      "556",
      "1332",
      "3594",
      "813",
      "4407",
      "4369",
      "1370",
      "5739"
   ],
   [
      "1995",
      "1060",
      "731",
      "1791",
      "4663",
      "1198",
      "5861",
      "5722",
      "1930",
      "7652"
   ],
   [
      "2005",
      "1286",
      "853",
      "2139",
      "5778",
      "1180",
      "6958",
      "7064",
      "2033",
      "9097"
   ],
   [
      "2015",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "10067"
   ]
]
