var MockJuryInfo ={
   "reference" : "Then the participants were told that the person in the photo had committed a\nCrime, and asked to rate the seriousness of the crime and recommend a prison\nsentence, in Years.",
   "usage" : "A data frame with 114 observations on the following 17 variables.",
   "description" : "Description\nMale participants were shown a picture of one of three young women.  Pilot\nwork had indicated that the one woman was beautiful, another of average\nphysical attractiveness, and the third unattractive.  Participants rated the\nwoman they saw on each of twelve attributes.  These measures were used to\ncheck on the manipulation by the photo.",
   "title" : "Effects Of Physical Attractiveness Upon Mock Jury Decisions",
   "parameters" : {
      "Crime" : "Type of crime, a factor with levels Burglary (theft of items from victim's room) Swindle (conned a male victim)",
      "Serious" : "a rating of how serious the subject thought the defendant's crime was",
      "independent" : "rating of the photo for 'independent'",
      "Years" : "length of sentence given the defendant by the mock juror subject",
      "ownPA" : "self-rating of the subject for 'physical attractiveness'",
      "happy" : "rating of the photo for 'happy'",
      "intelligent" : "rating of the photo for 'intelligent'",
      "Attr" : "Attractiveness of the photo, a factor with levels Beautiful Average Unattractive",
      "phyattr" : "rating of the photo for 'physical attractiveness'",
      "exciting" : "rating of the photo for 'exciting'",
      "sincere" : "rating of the photo for 'sincere'",
      "calm" : "rating of the photo for 'calm'",
      "kind" : "rating of the photo for 'kind'",
      "sociable" : "rating of the photo for 'exciting'",
      "sophisticated" : "rating of the photo for 'sophisticated'",
      "strong" : "rating of the photo for 'strong'",
      "warm" : "rating of the photo for 'warm'"
   }
}

var MockJury = [
   [
      "Attr",
      "Crime",
      "Years",
      "Serious",
      "exciting",
      "calm",
      "independent",
      "sincere",
      "warm",
      "phyattr",
      "sociable",
      "kind",
      "intelligent",
      "strong",
      "sophisticated",
      "happy",
      "ownPA"
   ],
   [
      "Beautiful",
      "Burglary",
      "10",
      "8",
      "6",
      "9",
      "9",
      "8",
      "5",
      "9",
      "9",
      "9",
      "6",
      "9",
      "9",
      "5",
      "9"
   ],
   [
      "Beautiful",
      "Burglary",
      "3",
      "8",
      "9",
      "5",
      "9",
      "3",
      "5",
      "9",
      "9",
      "4",
      "9",
      "5",
      "5",
      "5",
      "7"
   ],
   [
      "Beautiful",
      "Burglary",
      "5",
      "5",
      "3",
      "4",
      "6",
      "3",
      "6",
      "7",
      "4",
      "2",
      "4",
      "5",
      "4",
      "5",
      "5"
   ],
   [
      "Beautiful",
      "Burglary",
      "1",
      "3",
      "3",
      "6",
      "9",
      "8",
      "8",
      "9",
      "9",
      "9",
      "9",
      "9",
      "9",
      "9",
      "9"
   ],
   [
      "Beautiful",
      "Burglary",
      "7",
      "9",
      "1",
      "1",
      "5",
      "1",
      "8",
      "8",
      "9",
      "4",
      "7",
      "9",
      "9",
      "8",
      "7"
   ],
   [
      "Beautiful",
      "Burglary",
      "7",
      "9",
      "1",
      "5",
      "7",
      "5",
      "8",
      "8",
      "9",
      "5",
      "8",
      "9",
      "9",
      "9",
      "9"
   ],
   [
      "Beautiful",
      "Burglary",
      "3",
      "4",
      "5",
      "6",
      "7",
      "6",
      "7",
      "8",
      "7",
      "5",
      "7",
      "5",
      "6",
      "5",
      "6"
   ],
   [
      "Beautiful",
      "Burglary",
      "7",
      "4",
      "4",
      "9",
      "2",
      "9",
      "6",
      "5",
      "2",
      "9",
      "9",
      "2",
      "2",
      "2",
      "5"
   ],
   [
      "Beautiful",
      "Burglary",
      "2",
      "5",
      "4",
      "8",
      "8",
      "7",
      "1",
      "9",
      "1",
      "5",
      "9",
      "7",
      "7",
      "6",
      "3"
   ],
   [
      "Beautiful",
      "Burglary",
      "3",
      "2",
      "6",
      "8",
      "7",
      "5",
      "7",
      "8",
      "9",
      "7",
      "9",
      "5",
      "6",
      "8",
      "6"
   ],
   [
      "Beautiful",
      "Burglary",
      "5",
      "9",
      "5",
      "3",
      "5",
      "6",
      "8",
      "9",
      "5",
      "7",
      "8",
      "2",
      "5",
      "2",
      "9"
   ],
   [
      "Beautiful",
      "Burglary",
      "1",
      "2",
      "6",
      "7",
      "9",
      "7",
      "4",
      "9",
      "4",
      "3",
      "7",
      "4",
      "7",
      "6",
      "9"
   ],
   [
      "Beautiful",
      "Burglary",
      "1",
      "3",
      "7",
      "8",
      "7",
      "8",
      "8",
      "9",
      "9",
      "7",
      "9",
      "8",
      "5",
      "7",
      "9"
   ],
   [
      "Beautiful",
      "Burglary",
      "1",
      "2",
      "4",
      "6",
      "6",
      "7",
      "4",
      "7",
      "7",
      "2",
      "3",
      "7",
      "2",
      "1",
      "9"
   ],
   [
      "Beautiful",
      "Burglary",
      "2",
      "4",
      "6",
      "8",
      "7",
      "7",
      "5",
      "9",
      "6",
      "9",
      "9",
      "3",
      "7",
      "6",
      "6"
   ],
   [
      "Beautiful",
      "Burglary",
      "2",
      "6",
      "7",
      "8",
      "6",
      "7",
      "5",
      "8",
      "6",
      "5",
      "7",
      "6",
      "7",
      "6",
      "9"
   ],
   [
      "Beautiful",
      "Burglary",
      "10",
      "7",
      "7",
      "4",
      "1",
      "1",
      "1",
      "9",
      "8",
      "1",
      "1",
      "1",
      "1",
      "1",
      "5"
   ],
   [
      "Beautiful",
      "Burglary",
      "10",
      "8",
      "6",
      "9",
      "9",
      "8",
      "5",
      "9",
      "9",
      "9",
      "6",
      "9",
      "9",
      "5",
      "9"
   ],
   [
      "Beautiful",
      "Burglary",
      "3",
      "4",
      "6",
      "4",
      "9",
      "7",
      "7",
      "7",
      "5",
      "7",
      "8",
      "6",
      "7",
      "4",
      "9"
   ],
   [
      "Beautiful",
      "Burglary",
      "4",
      "9",
      "9",
      "9",
      "7",
      "1",
      "9",
      "9",
      "1",
      "9",
      "1",
      "9",
      "9",
      "9",
      "9"
   ],
   [
      "Beautiful",
      "Burglary",
      "7",
      "1",
      "1",
      "1",
      "7",
      "9",
      "9",
      "9",
      "9",
      "1",
      "2",
      "9",
      "2",
      "1",
      "9"
   ],
   [
      "Unattractive",
      "Burglary",
      "1",
      "3",
      "2",
      "5",
      "6",
      "5",
      "6",
      "5",
      "3",
      "5",
      "4",
      "6",
      "2",
      "1",
      "9"
   ],
   [
      "Unattractive",
      "Burglary",
      "4",
      "8",
      "2",
      "3",
      "2",
      "9",
      "7",
      "6",
      "2",
      "4",
      "4",
      "5",
      "3",
      "5",
      "9"
   ],
   [
      "Unattractive",
      "Burglary",
      "3",
      "5",
      "5",
      "8",
      "9",
      "7",
      "6",
      "4",
      "8",
      "4",
      "6",
      "7",
      "8",
      "5",
      "9"
   ],
   [
      "Unattractive",
      "Burglary",
      "2",
      "2",
      "1",
      "9",
      "7",
      "1",
      "4",
      "1",
      "9",
      "5",
      "9",
      "5",
      "5",
      "5",
      "5"
   ],
   [
      "Unattractive",
      "Burglary",
      "8",
      "5",
      "2",
      "3",
      "5",
      "1",
      "4",
      "1",
      "1",
      "4",
      "9",
      "9",
      "2",
      "3",
      "4"
   ],
   [
      "Unattractive",
      "Burglary",
      "8",
      "9",
      "3",
      "8",
      "2",
      "8",
      "1",
      "1",
      "5",
      "4",
      "9",
      "6",
      "9",
      "5",
      "7"
   ],
   [
      "Unattractive",
      "Burglary",
      "1",
      "3",
      "5",
      "8",
      "8",
      "6",
      "9",
      "9",
      "6",
      "8",
      "9",
      "9",
      "7",
      "1",
      "5"
   ],
   [
      "Unattractive",
      "Burglary",
      "1",
      "5",
      "4",
      "8",
      "6",
      "4",
      "4",
      "6",
      "4",
      "7",
      "1",
      "5",
      "4",
      "9",
      "9"
   ],
   [
      "Unattractive",
      "Burglary",
      "5",
      "5",
      "4",
      "7",
      "3",
      "3",
      "3",
      "2",
      "6",
      "4",
      "8",
      "6",
      "5",
      "3",
      "4"
   ],
   [
      "Unattractive",
      "Burglary",
      "7",
      "5",
      "4",
      "6",
      "2",
      "9",
      "5",
      "4",
      "3",
      "9",
      "9",
      "5",
      "6",
      "4",
      "5"
   ],
   [
      "Unattractive",
      "Burglary",
      "1",
      "3",
      "5",
      "5",
      "6",
      "3",
      "4",
      "2",
      "5",
      "4",
      "6",
      "5",
      "4",
      "5",
      "4"
   ],
   [
      "Unattractive",
      "Burglary",
      "5",
      "3",
      "5",
      "5",
      "5",
      "6",
      "3",
      "1",
      "5",
      "4",
      "1",
      "5",
      "1",
      "1",
      "9"
   ],
   [
      "Unattractive",
      "Burglary",
      "2",
      "4",
      "4",
      "7",
      "3",
      "3",
      "2",
      "2",
      "8",
      "2",
      "8",
      "9",
      "2",
      "3",
      "7"
   ],
   [
      "Unattractive",
      "Burglary",
      "12",
      "9",
      "7",
      "3",
      "8",
      "1",
      "2",
      "1",
      "6",
      "1",
      "2",
      "5",
      "3",
      "4",
      "5"
   ],
   [
      "Unattractive",
      "Burglary",
      "10",
      "4",
      "1",
      "3",
      "9",
      "8",
      "9",
      "1",
      "4",
      "3",
      "9",
      "9",
      "5",
      "9",
      "3"
   ],
   [
      "Unattractive",
      "Burglary",
      "1",
      "4",
      "1",
      "5",
      "1",
      "3",
      "2",
      "1",
      "7",
      "2",
      "1",
      "1",
      "1",
      "1",
      "9"
   ],
   [
      "Unattractive",
      "Burglary",
      "6",
      "5",
      "4",
      "6",
      "6",
      "3",
      "3",
      "5",
      "2",
      "3",
      "8",
      "6",
      "5",
      "4",
      "8"
   ],
   [
      "Unattractive",
      "Burglary",
      "2",
      "2",
      "3",
      "2",
      "4",
      "6",
      "3",
      "3",
      "1",
      "7",
      "1",
      "4",
      "6",
      "2",
      "1"
   ],
   [
      "Unattractive",
      "Burglary",
      "5",
      "7",
      "6",
      "8",
      "7",
      "2",
      "2",
      "1",
      "6",
      "2",
      "1",
      "5",
      "4",
      "3",
      "9"
   ],
   [
      "Unattractive",
      "Burglary",
      "12",
      "9",
      "7",
      "3",
      "2",
      "2",
      "1",
      "1",
      "5",
      "2",
      "2",
      "6",
      "1",
      "3",
      "7"
   ],
   [
      "Unattractive",
      "Swindle",
      "6",
      "5",
      "3",
      "7",
      "3",
      "2",
      "3",
      "4",
      "4",
      "5",
      "5",
      "6",
      "4",
      "5",
      "5"
   ],
   [
      "Unattractive",
      "Swindle",
      "3",
      "6",
      "3",
      "7",
      "7",
      "8",
      "8",
      "1",
      "7",
      "8",
      "9",
      "5",
      "8",
      "8",
      "5"
   ],
   [
      "Unattractive",
      "Swindle",
      "8",
      "6",
      "3",
      "5",
      "5",
      "3",
      "2",
      "1",
      "7",
      "2",
      "4",
      "1",
      "2",
      "4",
      "4"
   ],
   [
      "Unattractive",
      "Swindle",
      "4",
      "5",
      "3",
      "6",
      "6",
      "4",
      "3",
      "4",
      "6",
      "4",
      "7",
      "7",
      "2",
      "5",
      "2"
   ],
   [
      "Unattractive",
      "Swindle",
      "10",
      "5",
      "6",
      "6",
      "5",
      "9",
      "5",
      "5",
      "6",
      "9",
      "9",
      "9",
      "9",
      "9",
      "9"
   ],
   [
      "Unattractive",
      "Swindle",
      "10",
      "8",
      "4",
      "7",
      "6",
      "3",
      "7",
      "4",
      "5",
      "6",
      "8",
      "9",
      "7",
      "8",
      "6"
   ],
   [
      "Unattractive",
      "Swindle",
      "15",
      "9",
      "9",
      "9",
      "9",
      "5",
      "5",
      "5",
      "8",
      "5",
      "9",
      "9",
      "1",
      "5",
      "9"
   ],
   [
      "Unattractive",
      "Swindle",
      "15",
      "5",
      "7",
      "8",
      "3",
      "3",
      "4",
      "2",
      "7",
      "3",
      "7",
      "2",
      "7",
      "2",
      "7"
   ],
   [
      "Unattractive",
      "Swindle",
      "3",
      "4",
      "6",
      "8",
      "8",
      "3",
      "2",
      "5",
      "7",
      "3",
      "8",
      "6",
      "7",
      "4",
      "8"
   ],
   [
      "Unattractive",
      "Swindle",
      "3",
      "4",
      "2",
      "6",
      "5",
      "3",
      "1",
      "1",
      "3",
      "3",
      "3",
      "3",
      "2",
      "2",
      "8"
   ],
   [
      "Unattractive",
      "Swindle",
      "3",
      "3",
      "5",
      "1",
      "9",
      "3",
      "5",
      "3",
      "7",
      "5",
      "8",
      "6",
      "4",
      "5",
      "5"
   ],
   [
      "Unattractive",
      "Swindle",
      "11",
      "7",
      "4",
      "1",
      "1",
      "8",
      "2",
      "1",
      "1",
      "1",
      "1",
      "1",
      "2",
      "2",
      "6"
   ],
   [
      "Unattractive",
      "Swindle",
      "12",
      "7",
      "1",
      "5",
      "6",
      "1",
      "1",
      "1",
      "2",
      "1",
      "6",
      "3",
      "5",
      "1",
      "6"
   ],
   [
      "Unattractive",
      "Swindle",
      "2",
      "2",
      "5",
      "7",
      "7",
      "4",
      "4",
      "4",
      "7",
      "4",
      "8",
      "6",
      "7",
      "6",
      "6"
   ],
   [
      "Unattractive",
      "Swindle",
      "1",
      "2",
      "1",
      "4",
      "1",
      "1",
      "1",
      "1",
      "5",
      "5",
      "3",
      "2",
      "3",
      "3",
      "7"
   ],
   [
      "Unattractive",
      "Swindle",
      "1",
      "2",
      "3",
      "4",
      "1",
      "1",
      "2",
      "4",
      "1",
      "3",
      "5",
      "2",
      "3",
      "1",
      "7"
   ],
   [
      "Unattractive",
      "Swindle",
      "12",
      "4",
      "7",
      "6",
      "2",
      "2",
      "3",
      "4",
      "8",
      "3",
      "3",
      "3",
      "4",
      "2",
      "9"
   ],
   [
      "Average",
      "Burglary",
      "5",
      "4",
      "2",
      "4",
      "6",
      "6",
      "6",
      "1",
      "6",
      "5",
      "5",
      "5",
      "6",
      "6",
      "5"
   ],
   [
      "Average",
      "Burglary",
      "5",
      "4",
      "6",
      "7",
      "3",
      "3",
      "2",
      "3",
      "7",
      "3",
      "7",
      "6",
      "5",
      "3",
      "5"
   ],
   [
      "Average",
      "Burglary",
      "4",
      "3",
      "2",
      "7",
      "6",
      "5",
      "5",
      "4",
      "4",
      "5",
      "7",
      "5",
      "6",
      "5",
      "4"
   ],
   [
      "Average",
      "Burglary",
      "3",
      "5",
      "3",
      "7",
      "9",
      "2",
      "5",
      "1",
      "4",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5"
   ],
   [
      "Average",
      "Burglary",
      "6",
      "4",
      "3",
      "7",
      "6",
      "8",
      "6",
      "4",
      "5",
      "3",
      "7",
      "9",
      "7",
      "4",
      "7"
   ],
   [
      "Average",
      "Burglary",
      "4",
      "3",
      "5",
      "6",
      "3",
      "2",
      "5",
      "2",
      "6",
      "5",
      "6",
      "4",
      "4",
      "3",
      "5"
   ],
   [
      "Average",
      "Burglary",
      "9",
      "9",
      "9",
      "9",
      "9",
      "7",
      "1",
      "1",
      "3",
      "1",
      "1",
      "4",
      "5",
      "5",
      "4"
   ],
   [
      "Average",
      "Burglary",
      "8",
      "8",
      "5",
      "7",
      "9",
      "4",
      "6",
      "5",
      "8",
      "7",
      "9",
      "8",
      "6",
      "7",
      "4"
   ],
   [
      "Average",
      "Burglary",
      "3",
      "6",
      "7",
      "5",
      "5",
      "3",
      "7",
      "4",
      "7",
      "1",
      "4",
      "3",
      "4",
      "7",
      "2"
   ],
   [
      "Average",
      "Burglary",
      "2",
      "6",
      "5",
      "9",
      "9",
      "7",
      "5",
      "6",
      "8",
      "5",
      "9",
      "7",
      "6",
      "5",
      "6"
   ],
   [
      "Average",
      "Burglary",
      "10",
      "5",
      "8",
      "9",
      "8",
      "6",
      "5",
      "6",
      "6",
      "7",
      "7",
      "6",
      "4",
      "6",
      "5"
   ],
   [
      "Average",
      "Burglary",
      "1",
      "7",
      "2",
      "2",
      "6",
      "8",
      "8",
      "6",
      "7",
      "5",
      "9",
      "8",
      "8",
      "9",
      "7"
   ],
   [
      "Average",
      "Burglary",
      "1",
      "3",
      "5",
      "5",
      "8",
      "5",
      "5",
      "5",
      "5",
      "5",
      "3",
      "6",
      "4",
      "4",
      "6"
   ],
   [
      "Average",
      "Burglary",
      "3",
      "3",
      "5",
      "6",
      "7",
      "5",
      "7",
      "8",
      "6",
      "7",
      "7",
      "6",
      "5",
      "6",
      "6"
   ],
   [
      "Average",
      "Burglary",
      "1",
      "2",
      "1",
      "1",
      "8",
      "8",
      "1",
      "1",
      "9",
      "1",
      "6",
      "5",
      "3",
      "5",
      "5"
   ],
   [
      "Average",
      "Burglary",
      "3",
      "4",
      "5",
      "9",
      "5",
      "5",
      "3",
      "4",
      "7",
      "4",
      "1",
      "3",
      "1",
      "7",
      "9"
   ],
   [
      "Average",
      "Burglary",
      "5",
      "7",
      "4",
      "5",
      "7",
      "2",
      "3",
      "1",
      "3",
      "5",
      "4",
      "3",
      "4",
      "5",
      "9"
   ],
   [
      "Average",
      "Burglary",
      "8",
      "5",
      "5",
      "4",
      "6",
      "6",
      "2",
      "7",
      "8",
      "7",
      "8",
      "2",
      "1",
      "1",
      "9"
   ],
   [
      "Beautiful",
      "Swindle",
      "1",
      "4",
      "6",
      "7",
      "5",
      "6",
      "7",
      "9",
      "8",
      "7",
      "6",
      "5",
      "7",
      "7",
      "4"
   ],
   [
      "Beautiful",
      "Swindle",
      "1",
      "5",
      "5",
      "6",
      "7",
      "6",
      "3",
      "9",
      "7",
      "6",
      "9",
      "7",
      "7",
      "9",
      "6"
   ],
   [
      "Beautiful",
      "Swindle",
      "2",
      "7",
      "9",
      "9",
      "5",
      "4",
      "8",
      "9",
      "8",
      "4",
      "8",
      "6",
      "8",
      "7",
      "8"
   ],
   [
      "Beautiful",
      "Swindle",
      "2",
      "6",
      "9",
      "8",
      "2",
      "6",
      "7",
      "9",
      "6",
      "8",
      "8",
      "7",
      "8",
      "6",
      "6"
   ],
   [
      "Beautiful",
      "Swindle",
      "3",
      "5",
      "6",
      "8",
      "5",
      "4",
      "1",
      "9",
      "5",
      "5",
      "9",
      "4",
      "4",
      "6",
      "9"
   ],
   [
      "Beautiful",
      "Swindle",
      "15",
      "7",
      "7",
      "1",
      "8",
      "1",
      "5",
      "9",
      "8",
      "4",
      "8",
      "6",
      "8",
      "5",
      "7"
   ],
   [
      "Beautiful",
      "Swindle",
      "4",
      "5",
      "5",
      "2",
      "6",
      "3",
      "2",
      "8",
      "8",
      "2",
      "7",
      "2",
      "7",
      "5",
      "7"
   ],
   [
      "Beautiful",
      "Swindle",
      "6",
      "6",
      "4",
      "7",
      "7",
      "4",
      "7",
      "7",
      "8",
      "5",
      "7",
      "6",
      "7",
      "8",
      "4"
   ],
   [
      "Beautiful",
      "Swindle",
      "2",
      "3",
      "8",
      "2",
      "9",
      "2",
      "8",
      "9",
      "8",
      "8",
      "9",
      "6",
      "8",
      "4",
      "8"
   ],
   [
      "Beautiful",
      "Swindle",
      "10",
      "6",
      "5",
      "5",
      "8",
      "3",
      "4",
      "7",
      "6",
      "2",
      "6",
      "5",
      "5",
      "2",
      "7"
   ],
   [
      "Beautiful",
      "Swindle",
      "3",
      "6",
      "8",
      "7",
      "6",
      "6",
      "8",
      "8",
      "8",
      "8",
      "7",
      "7",
      "6",
      "8",
      "8"
   ],
   [
      "Beautiful",
      "Swindle",
      "2",
      "2",
      "9",
      "9",
      "7",
      "6",
      "7",
      "8",
      "7",
      "6",
      "7",
      "7",
      "5",
      "6",
      "7"
   ],
   [
      "Beautiful",
      "Swindle",
      "3",
      "3",
      "5",
      "5",
      "8",
      "9",
      "1",
      "9",
      "9",
      "1",
      "1",
      "1",
      "1",
      "1",
      "8"
   ],
   [
      "Beautiful",
      "Swindle",
      "5",
      "3",
      "2",
      "5",
      "7",
      "5",
      "4",
      "5",
      "8",
      "5",
      "9",
      "7",
      "5",
      "4",
      "5"
   ],
   [
      "Beautiful",
      "Swindle",
      "10",
      "9",
      "5",
      "9",
      "1",
      "1",
      "6",
      "9",
      "9",
      "5",
      "6",
      "7",
      "4",
      "6",
      "6"
   ],
   [
      "Beautiful",
      "Swindle",
      "2",
      "5",
      "5",
      "7",
      "6",
      "3",
      "3",
      "7",
      "9",
      "3",
      "7",
      "5",
      "3",
      "5",
      "4"
   ],
   [
      "Beautiful",
      "Swindle",
      "2",
      "9",
      "8",
      "1",
      "9",
      "9",
      "1",
      "9",
      "9",
      "1",
      "1",
      "9",
      "9",
      "1",
      "9"
   ],
   [
      "Beautiful",
      "Swindle",
      "2",
      "4",
      "9",
      "7",
      "2",
      "7",
      "5",
      "9",
      "3",
      "5",
      "7",
      "6",
      "8",
      "9",
      "7"
   ],
   [
      "Average",
      "Swindle",
      "3",
      "4",
      "5",
      "7",
      "6",
      "8",
      "7",
      "6",
      "8",
      "9",
      "7",
      "7",
      "6",
      "9",
      "5"
   ],
   [
      "Average",
      "Swindle",
      "1",
      "5",
      "4",
      "4",
      "1",
      "1",
      "1",
      "2",
      "6",
      "3",
      "1",
      "5",
      "2",
      "1",
      "5"
   ],
   [
      "Average",
      "Swindle",
      "1",
      "6",
      "5",
      "7",
      "9",
      "3",
      "7",
      "1",
      "5",
      "4",
      "5",
      "5",
      "4",
      "6",
      "5"
   ],
   [
      "Average",
      "Swindle",
      "1",
      "5",
      "6",
      "2",
      "9",
      "5",
      "6",
      "2",
      "5",
      "8",
      "8",
      "6",
      "9",
      "8",
      "5"
   ],
   [
      "Average",
      "Swindle",
      "2",
      "9",
      "9",
      "9",
      "9",
      "9",
      "1",
      "1",
      "9",
      "1",
      "1",
      "9",
      "1",
      "9",
      "5"
   ],
   [
      "Average",
      "Swindle",
      "2",
      "4",
      "1",
      "7",
      "8",
      "3",
      "5",
      "1",
      "6",
      "7",
      "2",
      "3",
      "9",
      "8",
      "9"
   ],
   [
      "Average",
      "Swindle",
      "1",
      "3",
      "2",
      "7",
      "9",
      "1",
      "2",
      "3",
      "2",
      "2",
      "9",
      "7",
      "6",
      "7",
      "8"
   ],
   [
      "Average",
      "Swindle",
      "1",
      "6",
      "6",
      "3",
      "7",
      "1",
      "2",
      "6",
      "7",
      "2",
      "9",
      "8",
      "4",
      "5",
      "6"
   ],
   [
      "Average",
      "Swindle",
      "2",
      "5",
      "3",
      "2",
      "9",
      "8",
      "1",
      "5",
      "9",
      "1",
      "9",
      "9",
      "6",
      "9",
      "9"
   ],
   [
      "Average",
      "Swindle",
      "3",
      "3",
      "5",
      "9",
      "8",
      "8",
      "5",
      "4",
      "7",
      "5",
      "6",
      "3",
      "4",
      "6",
      "4"
   ],
   [
      "Average",
      "Swindle",
      "4",
      "7",
      "2",
      "9",
      "9",
      "5",
      "7",
      "2",
      "7",
      "7",
      "7",
      "4",
      "4",
      "4",
      "5"
   ],
   [
      "Average",
      "Swindle",
      "5",
      "3",
      "1",
      "8",
      "5",
      "9",
      "7",
      "3",
      "5",
      "4",
      "8",
      "6",
      "5",
      "6",
      "8"
   ],
   [
      "Average",
      "Swindle",
      "3",
      "3",
      "5",
      "9",
      "9",
      "2",
      "9",
      "3",
      "1",
      "9",
      "9",
      "3",
      "2",
      "9",
      "4"
   ],
   [
      "Average",
      "Swindle",
      "3",
      "3",
      "4",
      "7",
      "5",
      "4",
      "7",
      "8",
      "8",
      "8",
      "8",
      "7",
      "4",
      "8",
      "9"
   ],
   [
      "Average",
      "Swindle",
      "3",
      "2",
      "7",
      "6",
      "9",
      "9",
      "6",
      "4",
      "7",
      "6",
      "8",
      "6",
      "5",
      "7",
      "2"
   ],
   [
      "Average",
      "Swindle",
      "2",
      "1",
      "8",
      "8",
      "8",
      "8",
      "8",
      "8",
      "9",
      "9",
      "9",
      "9",
      "9",
      "9",
      "6"
   ],
   [
      "Average",
      "Swindle",
      "7",
      "4",
      "1",
      "6",
      "9",
      "1",
      "1",
      "1",
      "9",
      "4",
      "1",
      "1",
      "1",
      "1",
      "9"
   ],
   [
      "Average",
      "Swindle",
      "6",
      "3",
      "5",
      "3",
      "5",
      "2",
      "4",
      "1",
      "4",
      "9",
      "3",
      "3",
      "9",
      "5",
      "3"
   ],
   [
      "Average",
      "Swindle",
      "12",
      "9",
      "1",
      "9",
      "9",
      "1",
      "1",
      "1",
      "9",
      "1",
      "9",
      "9",
      "1",
      "9",
      "1"
   ],
   [
      "Average",
      "Swindle",
      "8",
      "8",
      "1",
      "9",
      "1",
      "5",
      "1",
      "1",
      "9",
      "1",
      "1",
      "9",
      "5",
      "1",
      "1"
   ]
]