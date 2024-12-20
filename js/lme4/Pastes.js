var PastesInfo ={
   "usage" : "A data frame with 60 observations on the following 4 variables.",
   "reference" : "The data are described in Davies and Goldsmith (1972) as\ncoming from &ldquo; deliveries of a chemical paste\nproduct contained in casks where, in addition to sampling\nand testing errors, there are variations in quality\nbetween deliveries ... As a routine, three casks\nselected at random from each delivery were sampled and\nthe samples were kept for reference. ... Ten of the\ndelivery batches were sampled at random and two\nanalytical tests carried out on each of the 30 samples&rdquo;.",
   "description" : "Description\nStrength of a chemical paste product; its quality\ndepending on the delivery batch, and the cask within the\ndelivery.",
   "title" : "Paste strength by batch and cask",
   "parameters" : {
      "cask" : "cask within the delivery batch from which the\nsample was chosen.  A factor with 3 levels: &lsquo;a&rsquo; to\n&lsquo;c&rsquo;.",
      "sample" : "the sample of paste whose strength was assayed,\ntwo assays per sample. A factor with 30 levels: &lsquo;A:a&rsquo; to\n&lsquo;J:c&rsquo;.",
      "batch" : "delivery batch from which the sample was\nsample.  A factor with 10 levels: &lsquo;A&rsquo; to &lsquo;J&rsquo;.",
      "strength" : "paste strength."
   }
}

var Pastes = [
   [
      "strength",
      "batch",
      "cask",
      "sample"
   ],
   [
      "62.8",
      "A",
      "a",
      "A:a"
   ],
   [
      "62.6",
      "A",
      "a",
      "A:a"
   ],
   [
      "60.1",
      "A",
      "b",
      "A:b"
   ],
   [
      "62.3",
      "A",
      "b",
      "A:b"
   ],
   [
      "62.7",
      "A",
      "c",
      "A:c"
   ],
   [
      "63.1",
      "A",
      "c",
      "A:c"
   ],
   [
      "60",
      "B",
      "a",
      "B:a"
   ],
   [
      "61.4",
      "B",
      "a",
      "B:a"
   ],
   [
      "57.5",
      "B",
      "b",
      "B:b"
   ],
   [
      "56.9",
      "B",
      "b",
      "B:b"
   ],
   [
      "61.1",
      "B",
      "c",
      "B:c"
   ],
   [
      "58.9",
      "B",
      "c",
      "B:c"
   ],
   [
      "58.7",
      "C",
      "a",
      "C:a"
   ],
   [
      "57.5",
      "C",
      "a",
      "C:a"
   ],
   [
      "63.9",
      "C",
      "b",
      "C:b"
   ],
   [
      "63.1",
      "C",
      "b",
      "C:b"
   ],
   [
      "65.4",
      "C",
      "c",
      "C:c"
   ],
   [
      "63.7",
      "C",
      "c",
      "C:c"
   ],
   [
      "57.1",
      "D",
      "a",
      "D:a"
   ],
   [
      "56.4",
      "D",
      "a",
      "D:a"
   ],
   [
      "56.9",
      "D",
      "b",
      "D:b"
   ],
   [
      "58.6",
      "D",
      "b",
      "D:b"
   ],
   [
      "64.7",
      "D",
      "c",
      "D:c"
   ],
   [
      "64.5",
      "D",
      "c",
      "D:c"
   ],
   [
      "55.1",
      "E",
      "a",
      "E:a"
   ],
   [
      "55.1",
      "E",
      "a",
      "E:a"
   ],
   [
      "54.7",
      "E",
      "b",
      "E:b"
   ],
   [
      "54.2",
      "E",
      "b",
      "E:b"
   ],
   [
      "58.8",
      "E",
      "c",
      "E:c"
   ],
   [
      "57.5",
      "E",
      "c",
      "E:c"
   ],
   [
      "63.4",
      "F",
      "a",
      "F:a"
   ],
   [
      "64.9",
      "F",
      "a",
      "F:a"
   ],
   [
      "59.3",
      "F",
      "b",
      "F:b"
   ],
   [
      "58.1",
      "F",
      "b",
      "F:b"
   ],
   [
      "60.5",
      "F",
      "c",
      "F:c"
   ],
   [
      "60",
      "F",
      "c",
      "F:c"
   ],
   [
      "62.5",
      "G",
      "a",
      "G:a"
   ],
   [
      "62.6",
      "G",
      "a",
      "G:a"
   ],
   [
      "61",
      "G",
      "b",
      "G:b"
   ],
   [
      "58.7",
      "G",
      "b",
      "G:b"
   ],
   [
      "56.9",
      "G",
      "c",
      "G:c"
   ],
   [
      "57.7",
      "G",
      "c",
      "G:c"
   ],
   [
      "59.2",
      "H",
      "a",
      "H:a"
   ],
   [
      "59.4",
      "H",
      "a",
      "H:a"
   ],
   [
      "65.2",
      "H",
      "b",
      "H:b"
   ],
   [
      "66",
      "H",
      "b",
      "H:b"
   ],
   [
      "64.8",
      "H",
      "c",
      "H:c"
   ],
   [
      "64.1",
      "H",
      "c",
      "H:c"
   ],
   [
      "54.8",
      "I",
      "a",
      "I:a"
   ],
   [
      "54.8",
      "I",
      "a",
      "I:a"
   ],
   [
      "64",
      "I",
      "b",
      "I:b"
   ],
   [
      "64",
      "I",
      "b",
      "I:b"
   ],
   [
      "57.7",
      "I",
      "c",
      "I:c"
   ],
   [
      "56.8",
      "I",
      "c",
      "I:c"
   ],
   [
      "58.3",
      "J",
      "a",
      "J:a"
   ],
   [
      "59.3",
      "J",
      "a",
      "J:a"
   ],
   [
      "59.2",
      "J",
      "b",
      "J:b"
   ],
   [
      "59.2",
      "J",
      "b",
      "J:b"
   ],
   [
      "58.9",
      "J",
      "c",
      "J:c"
   ],
   [
      "56.6",
      "J",
      "c",
      "J:c"
   ]
]
