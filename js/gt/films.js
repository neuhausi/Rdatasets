var filmsInfo ={
   "parameters" : {
      "imdb_url" : "The URL of the film's information page in the Internet Movie\nDatabase (IMDB).",
      "countries_of_origin" : "The country or countries of origin for the\nproduction. Here, 2-letter ISO 3166-1 country codes (set in uppercase) are\nused.",
      "run_time" : "The run time of the film in hours and minutes. This is given\nas a string in the format &#8288;[x]h [y]m&#8288;.",
      "title,original_title" : "The title field provides the film title used\nfor English-speaking audiences. The original_title field is populated when\ntitle differs greatly from the non-English original.",
      "languages" : "The languages spoken in the film in the order of appearance.\nThis consists of ISO 639 language codes (primarily as two-letter codes, but\nusing three-letter codes where necessary).",
      "year" : "The year of the festival in which the film was in competition.",
      "director" : "The director or set of co-directors for the film. Multiple\ndirectors are separated by a comma."
   },
   "title" : "Feature films in competition at the Cannes Film Festival",
   "description" : "Description\nEach entry in the films is a feature film that appeared in the official\nselection during a festival year (starting in 1946 and active to the present\nday). The year column refers to the year of the festival and this figure\ndoesn't always coincide with the release year of the film. The film's title\nreflects the most common title of the film in English, where the\noriginal_title column provides the title of the film in its spoken language\n(transliterated to Roman script where necessary).",
   "usage" : "films",
   "reference" : "Here is a glimpse at the data available in films.",
   "format" : "A tibble with 1,851 rows and 8 variables:"
}

var films = [
   [
      "year",
      "title",
      "original_title",
      "director",
      "languages",
      "countries_of_origin",
      "run_time",
      "imdb_url"
   ],
   [
      "1946",
      "The Lovers",
      "Amanti in fuga",
      "Giacomo Gentilomo",
      "it",
      "IT",
      "1h 30m",
      "https://www.imdb.com/title/tt0038297/"
   ],
   [
      "1946",
      "Anna and the King of Siam",
      "",
      "John Cromwell",
      "en",
      "US",
      "2h 8m",
      "https://www.imdb.com/title/tt0038303/"
   ],
   [
      "1946",
      "Blood and Fire",
      "Blod och eld",
      "Anders Henrikson",
      "sv",
      "SE",
      "1h 40m",
      "https://www.imdb.com/title/tt0037544/"
   ],
   [
      "1946",
      "Letter from the Dead",
      "Brevet fra afdøde",
      "Johan Jacobsen",
      "da",
      "DK",
      "1h 18m",
      "https://www.imdb.com/title/tt0124300/"
   ],
   [
      "1946",
      "Brief Encounter",
      "",
      "David Lean",
      "en,fr",
      "GB",
      "1h 26m",
      "https://www.imdb.com/title/tt0037558/"
   ],
   [
      "1946",
      "Caesar and Cleopatra",
      "",
      "Gabriel Pascal",
      "en",
      "GB",
      "2h 18m",
      "https://www.imdb.com/title/tt0038390/"
   ],
   [
      "1946",
      "Camões",
      "",
      "José Leitão de Barros",
      "pt",
      "PT",
      "1h 58m",
      "https://www.imdb.com/title/tt0038394/"
   ],
   [
      "1946",
      "Girl No. 217",
      "Chelovek No. 217",
      "Mikhail Romm",
      "ru",
      "SU",
      "1h 31m",
      "https://www.imdb.com/title/tt0037589/"
   ],
   [
      "1946",
      "Red Meadows",
      "De røde enge",
      "Bodil Ipsen, Lau Lauritzen",
      "da,de",
      "DK",
      "1h 25m",
      "https://www.imdb.com/title/tt0038043/"
   ],
   [
      "1946",
      "The Last Chance",
      "Die letzte Chance",
      "Leopold Lindtberg",
      "en,it,de,fr",
      "CH",
      "1h 53m",
      "https://www.imdb.com/title/tt0037871/"
   ],
   [
      "1946",
      "Dunia",
      "",
      "Muhammad Karim",
      "ar",
      "EG",
      "1h 46m",
      "https://www.imdb.com/title/tt0285527/"
   ],
   [
      "1946",
      "The Queen's Flower",
      "Floarea reginei",
      "Paul Calinescu",
      "ro",
      "RO",
      "21m",
      "https://www.imdb.com/title/tt0038530/"
   ],
   [
      "1946",
      "Gaslight",
      "",
      "George Cukor",
      "en,it",
      "US",
      "1h 54m",
      "https://www.imdb.com/title/tt0036855/"
   ],
   [
      "1946",
      "Gilda",
      "",
      "Charles Vidor",
      "en,es,fr,de",
      "US",
      "1h 50m",
      "https://www.imdb.com/title/tt0038559/"
   ],
   [
      "1946",
      "The Great Glinka",
      "Glinka",
      "Lev Arnshtam",
      "ru",
      "SU",
      "1h 56m",
      "https://www.imdb.com/title/tt0038566/"
   ],
   [
      "1946",
      "Torment",
      "Hets",
      "Alf Sjöberg",
      "sv",
      "SE",
      "1h 41m",
      "https://www.imdb.com/title/tt0036914/"
   ],
   [
      "1946",
      "The Bandit",
      "Il bandito",
      "Alberto Lattuada",
      "it,de,en",
      "IT",
      "1h 23m",
      "https://www.imdb.com/title/tt0038327/"
   ],
   [
      "1946",
      "The Stone Flower",
      "Kamennyy tsvetok",
      "Aleksandr Ptushko",
      "ru",
      "SU",
      "1h 29m",
      "https://www.imdb.com/title/tt0038666/"
   ],
   [
      "1946",
      "The Battle of the Rails",
      "La bataille du rail",
      "René Clément",
      "fr,de",
      "FR",
      "1h 25m",
      "https://www.imdb.com/title/tt0038334/"
   ],
   [
      "1946",
      "Beauty and the Beast",
      "La Belle et la Bête",
      "Jean Cocteau, René Clément",
      "fr",
      "FR",
      "1h 36m",
      "https://www.imdb.com/title/tt0038348/"
   ],
   [
      "1946",
      "Pastoral Symphony",
      "La symphonie pastorale",
      "Jean Delannoy",
      "fr",
      "FR",
      "1h 50m",
      "https://www.imdb.com/title/tt0039004/"
   ],
   [
      "1946",
      "His Young Wife",
      "Le miserie del signor Travet",
      "Mario Soldati",
      "it",
      "IT",
      "1h 40m",
      "https://www.imdb.com/title/tt0037916/"
   ],
   [
      "1946",
      "Mr. Orchid",
      "Le père tranquille",
      "René Clément",
      "fr",
      "FR",
      "1h 35m",
      "https://www.imdb.com/title/tt0038863/"
   ],
   [
      "1946",
      "The Three Musketeers",
      "Los tres mosqueteros",
      "Miguel M. Delgado",
      "es",
      "MX",
      "2h 16m",
      "https://www.imdb.com/title/tt0162020/"
   ],
   [
      "1946",
      "Make Mine Music",
      "",
      "Robert Cormack, Clyde Geronimi, Jack Kinney",
      "en",
      "US",
      "1h 15m",
      "https://www.imdb.com/title/tt0038718/"
   ],
   [
      "1946",
      "María Candelaria",
      "",
      "Emilio Fernández",
      "es",
      "MX",
      "1h 42m",
      "https://www.imdb.com/title/tt0037054/"
   ],
   [
      "1946",
      "Men Without Wings",
      "Muzi bez krídel",
      "Frantisek Cáp",
      "cs,de",
      "CS",
      "1h 19m",
      "https://www.imdb.com/title/tt0038760/"
   ],
   [
      "1946",
      "Neecha Nagar",
      "",
      "Chetan Anand",
      "hi",
      "IN",
      "2h 2m",
      "https://www.imdb.com/title/tt0154942/"
   ],
   [
      "1946",
      "The Adventurous Bachelor",
      "Nezbedný bakalár",
      "Otakar Vávra",
      "cs",
      "CS",
      "1h 36m",
      "https://www.imdb.com/title/tt0175955/"
   ],
   [
      "1946",
      "Notorious",
      "",
      "Alfred Hitchcock",
      "en,pt,fr",
      "US",
      "1h 42m",
      "https://www.imdb.com/title/tt0038787/"
   ],
   [
      "1946",
      "Patrie",
      "",
      "Louis Daquin",
      "fr",
      "FR",
      "1h 40m",
      "https://www.imdb.com/title/tt0192444/"
   ],
   [
      "1946",
      "Rhapsody in Blue",
      "",
      "Irving Rapper",
      "en",
      "US",
      "2h 15m",
      "https://www.imdb.com/title/tt0038026/"
   ],
   [
      "1946",
      "Rome, Open City",
      "Roma città aperta",
      "Roberto Rossellini",
      "it,de",
      "IT",
      "1h 43m",
      "https://www.imdb.com/title/tt0038890/"
   ],
   [
      "1946",
      "The Captive Heart",
      "",
      "Basil Dearden",
      "en,de",
      "GB",
      "1h 44m",
      "https://www.imdb.com/title/tt0038396/"
   ],
   [
      "1946",
      "The Lost Weekend",
      "",
      "Billy Wilder",
      "en",
      "US",
      "1h 41m",
      "https://www.imdb.com/title/tt0037884/"
   ],
   [
      "1946",
      "The Magic Bow",
      "",
      "Bernard Knowles",
      "en",
      "GB",
      "1h 46m",
      "https://www.imdb.com/title/tt0039594/"
   ],
   [
      "1946",
      "The Seventh Veil",
      "",
      "Compton Bennett",
      "en",
      "GB",
      "1h 34m",
      "https://www.imdb.com/title/tt0038924/"
   ],
   [
      "1946",
      "Três Dias Sem Deus",
      "",
      "Bárbara Virgínia",
      "pt",
      "PT",
      "1h 42m",
      "https://www.imdb.com/title/tt0039051/"
   ],
   [
      "1946",
      "Un giorno nella vita",
      "",
      "Alessandro Blasetti",
      "it",
      "IT",
      "1h 35m",
      "https://www.imdb.com/title/tt0038560/"
   ],
   [
      "1946",
      "A Lover's Return",
      "Un revenant",
      "Christian-Jaque",
      "fr",
      "FR",
      "1h 40m",
      "https://www.imdb.com/title/tt0039061/"
   ],
   [
      "1946",
      "The Turning Point",
      "Velikiy perelom",
      "Fridrikh Ermler",
      "ru,de",
      "SU",
      "1h 48m",
      "https://www.imdb.com/title/tt0037426/"
   ],
   [
      "1946",
      "Wonder Man",
      "",
      "H. Bruce Humberstone",
      "en,fr",
      "US",
      "1h 38m",
      "https://www.imdb.com/title/tt0038260/"
   ],
   [
      "1946",
      "Zdravstvuy, Moskva!",
      "",
      "Sergei Yutkevich",
      "ru",
      "SU",
      "1h 26m",
      "https://www.imdb.com/title/tt0038594/"
   ],
   [
      "1946",
      "Zoya",
      "",
      "Lev Arnshtam",
      "ru",
      "SU",
      "1h 35m",
      "https://www.imdb.com/title/tt0037482/"
   ],
   [
      "1947",
      "Antoine and Antoinette",
      "Antoine et Antoinette",
      "Jacques Becker",
      "fr",
      "FR",
      "1h 24m",
      "https://www.imdb.com/title/tt0039155/"
   ],
   [
      "1947",
      "Boomerang!",
      "",
      "Elia Kazan",
      "en",
      "US",
      "1h 28m",
      "https://www.imdb.com/title/tt0039208/"
   ],
   [
      "1947",
      "Crossfire",
      "",
      "Edward Dmytryk",
      "en",
      "US",
      "1h 26m",
      "https://www.imdb.com/title/tt0039286/"
   ],
   [
      "1947",
      "Dumbo",
      "",
      "Ben Sharpsteen",
      "en",
      "US",
      "1h 4m",
      "https://www.imdb.com/title/tt0033563/"
   ],
   [
      "1947",
      "Flesh Will Surrender",
      "Il delitto di Giovanni Episcopo",
      "Alberto Lattuada",
      "it",
      "IT",
      "1h 31m",
      "https://www.imdb.com/title/tt0039309/"
   ],
   [
      "1947",
      "Ivy",
      "",
      "Sam Wood",
      "en",
      "US",
      "1h 39m",
      "https://www.imdb.com/title/tt0039504/"
   ],
   [
      "1947",
      "Song of Dolores",
      "La copla de la Dolores",
      "Benito Perojo",
      "es",
      "AR",
      "1h 25m",
      "https://www.imdb.com/title/tt0039278/"
   ],
   [
      "1947",
      "The Captain's Daughter",
      "La figlia del capitano",
      "Mario Camerini",
      "it",
      "IT",
      "1h 42m",
      "https://www.imdb.com/title/tt0039381/"
   ],
   [
      "1947",
      "The Cat",
      "La gata",
      "Mario Soffici",
      "es",
      "AR",
      "1h 25m",
      "https://www.imdb.com/title/tt0039413/"
   ],
   [
      "1947",
      "The Lovers of the Pont Saint-Jean",
      "Les amants du pont Saint-Jean",
      "Henri Decoin",
      "fr",
      "FR",
      "1h 32m",
      "https://www.imdb.com/title/tt0154139/"
   ],
   [
      "1947",
      "Les jeux sont faits",
      "",
      "Jean Delannoy",
      "fr",
      "FR",
      "1h 45m",
      "https://www.imdb.com/title/tt0039512/"
   ],
   [
      "1947",
      "The Damned",
      "Les maudits",
      "René Clément",
      "fr,en,de,it",
      "FR",
      "1h 45m",
      "https://www.imdb.com/title/tt0039615/"
   ],
   [
      "1947",
      "Marouf, the Cairo Cobbler",
      "Marouf savetier du caire",
      "Jean Mauran",
      "fr",
      "MA",
      "1h 30m",
      "https://www.imdb.com/title/tt0255353/"
   ],
   [
      "1947",
      "Mine Own Executioner",
      "",
      "Anthony Kimmins",
      "en",
      "GB",
      "1h 48m",
      "https://www.imdb.com/title/tt0039627/"
   ],
   [
      "1947",
      "Paris 1900",
      "Paris mil neuf cent",
      "Nicole Védrès",
      "fr",
      "FR",
      "1h 22m",
      "https://www.imdb.com/title/tt0040683/"
   ],
   [
      "1947",
      "Possessed",
      "",
      "Curtis Bernhardt",
      "en",
      "US",
      "1h 48m",
      "https://www.imdb.com/title/tt0039725/"
   ],
   [
      "1947",
      "A Ship to India",
      "Skepp till India land",
      "Ingmar Bergman",
      "sv",
      "SE",
      "1h 38m",
      "https://www.imdb.com/title/tt0039834/"
   ],
   [
      "1947",
      "Lost in the Dark",
      "Sperduti nel buio",
      "Camillo Mastrocinque",
      "it",
      "IT",
      "1h 45m",
      "https://www.imdb.com/title/tt0039857/"
   ],
   [
      "1947",
      "The Schoolmistress",
      "A tanítónö",
      "Márton Keleti",
      "hu",
      "HU",
      "1h 10m",
      "https://www.imdb.com/title/tt0038150/"
   ],
   [
      "1947",
      "The Chase",
      "",
      "Arthur Ripley",
      "en,es",
      "US",
      "1h 26m",
      "https://www.imdb.com/title/tt0038409/"
   ],
   [
      "1947",
      "The Jolson Story",
      "",
      "Alfred E. Green",
      "en",
      "US",
      "2h 8m",
      "https://www.imdb.com/title/tt0038661/"
   ],
   [
      "1947",
      "The Strange Love of Martha Ivers",
      "",
      "Lewis Milestone",
      "en",
      "US",
      "1h 56m",
      "https://www.imdb.com/title/tt0038988/"
   ],
   [
      "1947",
      "Two Women",
      "Två kvinnor",
      "Arnold Sjöstrand",
      "sv",
      "SE",
      "1h 36m",
      "https://www.imdb.com/title/tt0039922/"
   ],
   [
      "1947",
      "Ziegfeld Follies",
      "",
      "Lemuel Ayers, Roy Del Ruth, Robert Lewis",
      "en",
      "US",
      "1h 50m",
      "https://www.imdb.com/title/tt0039116/"
   ],
   [
      "1949",
      "Act of Violence",
      "",
      "Fred Zinnemann",
      "en,de",
      "US",
      "1h 22m",
      "https://www.imdb.com/title/tt0041088/"
   ],
   [
      "1949",
      "Almafuerte",
      "",
      "Luis César Amadori",
      "es",
      "AR",
      "1h 32m",
      "https://www.imdb.com/title/tt0178228/"
   ],
   [
      "1949",
      "An Act of Murder",
      "",
      "Michael Gordon",
      "en",
      "US",
      "1h 31m",
      "https://www.imdb.com/title/tt0040072/"
   ],
   [
      "1949",
      "At the Grand Balcony",
      "Au grand balcon",
      "Henri Decoin",
      "fr,es,en",
      "FR",
      "2h 3m",
      "https://www.imdb.com/title/tt0154175/"
   ],
   [
      "1949",
      "The Original Sin",
      "Der Apfel ist ab",
      "Helmut Käutner",
      "de",
      "DE",
      "1h 45m",
      "https://www.imdb.com/title/tt0040105/"
   ],
   [
      "1949",
      "The Last Illusion",
      "Der Ruf",
      "Josef von Báky",
      "de,en",
      "DE",
      "1h 40m",
      "https://www.imdb.com/title/tt0041829/"
   ],
   [
      "1949",
      "Girls in Gingham",
      "Die Buntkarierten",
      "Kurt Maetzig",
      "de",
      "DD",
      "1h 40m",
      "https://www.imdb.com/title/tt0041215/"
   ],
   [
      "1949",
      "Eine große Liebe",
      "",
      "Hans Bertram",
      "de",
      "DE",
      "1h 30m",
      "https://www.imdb.com/title/tt0228352/"
   ],
   [
      "1949",
      "El bait el kabir",
      "",
      "Ahmad Kamel Mursi",
      "ar",
      "EG",
      "1h 50m",
      "https://www.imdb.com/title/tt0303708/"
   ],
   [
      "1949",
      "Eroica",
      "",
      "Walter Kolm-Veltée",
      "de",
      "AT",
      "1h 35m",
      "https://www.imdb.com/title/tt0041335/"
   ],
   [
      "1949",
      "Foreign Harbour",
      "Främmande hamn",
      "Hampe Faustman",
      "pl,sv,de",
      "SE",
      "1h 25m",
      "https://www.imdb.com/title/tt0040376/"
   ],
   [
      "1949",
      "House of Strangers",
      "",
      "Joseph L. Mankiewicz",
      "en,it",
      "US",
      "1h 41m",
      "https://www.imdb.com/title/tt0041487/"
   ],
   [
      "1949",
      "Images d'Ethiopie",
      "",
      "Jean Pichonnier, Paul Pichonnier",
      "fr",
      "BE",
      "1h 5m",
      "https://www.imdb.com/title/tt0286712/"
   ],
   [
      "1949",
      "Lies of Love",
      "L'amorosa menzogna",
      "Michelangelo Antonioni",
      "it",
      "IT",
      "11m",
      "https://www.imdb.com/title/tt0041120/"
   ],
   [
      "1949",
      "The Walls of Malapaga",
      "Le mura di Malapaga",
      "René Clément",
      "it,fr",
      "IT,FR",
      "1h 44m",
      "https://www.imdb.com/title/tt0040137/"
   ],
   [
      "1949",
      "Lost Boundaries",
      "",
      "Alfred L. Werker",
      "en",
      "US",
      "1h 39m",
      "https://www.imdb.com/title/tt0041600/"
   ],
   [
      "1949",
      "The Adventures of Antar and Abla",
      "Mughamarat Antar wa Abla",
      "Salah Abouseif",
      "ar",
      "EG",
      "1h 45m",
      "https://www.imdb.com/title/tt0040617/"
   ],
   [
      "1949",
      "On Our Own Land",
      "Na svoji zemlji",
      "France Stiglic",
      "sl",
      "YU",
      "1h 50m",
      "https://www.imdb.com/title/tt0040634/"
   ],
   [
      "1949",
      "The Hidden Room",
      "",
      "Edward Dmytryk",
      "en",
      "GB",
      "1h 36m",
      "https://www.imdb.com/title/tt0041460/"
   ],
   [
      "1949",
      "Keep an Eye on Amelia",
      "Occupe-toi d'Amélie..!",
      "Claude Autant-Lara",
      "fr",
      "FR,IT",
      "1h 32m",
      "https://www.imdb.com/title/tt0041710/"
   ],
   [
      "1949",
      "Pueblerina",
      "",
      "Emilio Fernández",
      "es",
      "MX",
      "1h 51m",
      "https://www.imdb.com/title/tt0040715/"
   ],
   [
      "1949",
      "Rendezvous in July",
      "Rendez-vous de juillet",
      "Jacques Becker",
      "fr",
      "FR",
      "1h 52m",
      "https://www.imdb.com/title/tt0041800/"
   ],
   [
      "1949",
      "Return to Life",
      "Retour à la vie",
      "André Cayatte, Henri-Georges Clouzot, Jean Dréville",
      "fr,en,de",
      "FR",
      "2h",
      "https://www.imdb.com/title/tt0041802/"
   ],
   [
      "1949",
      "Bitter Rice",
      "Riso amaro",
      "Giuseppe De Santis",
      "it",
      "IT",
      "1h 48m",
      "https://www.imdb.com/title/tt0040737/"
   ],
   [
      "1949",
      "Sertão",
      "",
      "João G. Martin",
      "pt",
      "BR",
      "1h 9m",
      "https://www.imdb.com/title/tt10302690/"
   ],
   [
      "1949",
      "The Passionate Friends",
      "",
      "David Lean",
      "en,fr",
      "GB",
      "1h 35m",
      "https://www.imdb.com/title/tt0041735/"
   ],
   [
      "1949",
      "The Queen of Spades",
      "",
      "Thorold Dickinson",
      "en",
      "GB",
      "1h 35m",
      "https://www.imdb.com/title/tt0041776/"
   ],
   [
      "1949",
      "The Set-Up",
      "",
      "Robert Wise",
      "en",
      "US",
      "1h 13m",
      "https://www.imdb.com/title/tt0041859/"
   ],
   [
      "1949",
      "The Third Man",
      "",
      "Carol Reed",
      "en,de,ru,fr",
      "GB,US",
      "1h 44m",
      "https://www.imdb.com/title/tt0041959/"
   ],
   [
      "1949",
      "Without Honor",
      "",
      "Irving Pichel",
      "en",
      "US",
      "1h 9m",
      "https://www.imdb.com/title/tt0042049/"
   ],
   [
      "1951",
      "A Place in the Sun",
      "",
      "George Stevens",
      "en",
      "US",
      "2h 2m",
      "https://www.imdb.com/title/tt0043924/"
   ],
   [
      "1951",
      "All About Eve",
      "",
      "Joseph L. Mankiewicz",
      "en,fr",
      "US",
      "2h 18m",
      "https://www.imdb.com/title/tt0042192/"
   ],
   [
      "1951",
      "Reckless",
      "Balarrasa",
      "José Antonio Nieves Conde",
      "es",
      "ES",
      "1h 30m",
      "https://www.imdb.com/title/tt0042222/"
   ],
   [
      "1951",
      "Bright Victory",
      "",
      "Mark Robson",
      "en",
      "US",
      "1h 37m",
      "https://www.imdb.com/title/tt0043361/"
   ],
   [
      "1951",
      "Caiçara",
      "",
      "Alberto Cavalcanti, Adolfo Celi, Tom Payne",
      "pt",
      "BR",
      "1h 32m",
      "https://www.imdb.com/title/tt0184322/"
   ],
   [
      "1951",
      "The Falling Star",
      "Der fallende Stern",
      "Harald Braun",
      "de",
      "DE",
      "1h 48m",
      "https://www.imdb.com/title/tt0042445/"
   ],
   [
      "1951",
      "The Deadly Dreams",
      "Die tödlichen Träume",
      "Paul Martin",
      "de",
      "DE",
      "1h 21m",
      "https://www.imdb.com/title/tt0348269/"
   ],
   [
      "1951",
      "Four in a Jeep",
      "Die Vier im Jeep",
      "Leopold Lindtberg",
      "fr,en",
      "CH",
      "1h 42m",
      "https://www.imdb.com/title/tt0044192/"
   ],
   [
      "1951",
      "The Devil Is a Woman",
      "Doña Diabla",
      "Tito Davison",
      "es",
      "MX",
      "1h 35m",
      "https://www.imdb.com/title/tt0040300/"
   ],
   [
      "1951",
      "Miss Julie",
      "Fröken Julie",
      "Alf Sjöberg",
      "sv,fr",
      "SE",
      "1h 30m",
      "https://www.imdb.com/title/tt0043567/"
   ],
   [
      "1951",
      "Paris Vice Squad",
      "Identité judiciaire",
      "Hervé Bromberger",
      "fr",
      "FR",
      "1h 30m",
      "https://www.imdb.com/title/tt0157786/"
   ],
   [
      "1951",
      "Path of Hope",
      "Il cammino della speranza",
      "Pietro Germi",
      "it",
      "IT",
      "1h 45m",
      "https://www.imdb.com/title/tt0042301/"
   ],
   [
      "1951",
      "The Forbidden Christ",
      "Il Cristo proibito",
      "Curzio Malaparte",
      "it",
      "IT",
      "1h 39m",
      "https://www.imdb.com/title/tt0042354/"
   ],
   [
      "1951",
      "Juliette, or Key of Dreams",
      "Juliette ou La clef des songes",
      "Marcel Carné",
      "fr",
      "FR",
      "1h 46m",
      "https://www.imdb.com/title/tt0042621/"
   ],
   [
      "1951",
      "Dream of a Cossack",
      "Kavalier zolotoy zvezdy",
      "Yuli Raizman",
      "ru",
      "SU",
      "1h 35m",
      "https://www.imdb.com/title/tt0043701/"
   ],
   [
      "1951",
      "The Yacht Isabel Arrived This Afternoon",
      "La balandra Isabel llegó esta tarde",
      "Carlos Hugo Christensen",
      "es",
      "VE,AR",
      "1h 36m",
      "https://www.imdb.com/title/tt0158482/"
   ],
   [
      "1951",
      "Dance of Fire",
      "La danza del fuego",
      "Daniel Tinayre",
      "es",
      "AR,ES",
      "1h 40m",
      "https://www.imdb.com/title/tt0041279/"
   ],
   [
      "1951",
      "The Honesty of the Lock",
      "La honradez de la cerradura",
      "Luis Escobar",
      "es",
      "ES",
      "1h 28m",
      "https://www.imdb.com/title/tt0042574/"
   ],
   [
      "1951",
      "La virgen gitana",
      "",
      "Ramón Torrado",
      "es",
      "ES",
      "1h 32m",
      "https://www.imdb.com/title/tt0042386/"
   ],
   [
      "1951",
      "Le Piège",
      "Past",
      "Martin Fric",
      "cs",
      "CS",
      "1h 34m",
      "https://www.imdb.com/title/tt0169118/"
   ],
   [
      "1951",
      "Los isleros",
      "",
      "Lucas Demare",
      "es",
      "AR",
      "1h 52m",
      "https://www.imdb.com/title/tt0043679/"
   ],
   [
      "1951",
      "Los Olvidados",
      "",
      "Luis Buñuel",
      "es",
      "MX",
      "1h 25m",
      "https://www.imdb.com/title/tt0042804/"
   ],
   [
      "1951",
      "The Sin of Harold Diddlebock",
      "",
      "Preston Sturges",
      "en",
      "US",
      "1h 29m",
      "https://www.imdb.com/title/tt0039825/"
   ],
   [
      "1951",
      "Marihuana",
      "",
      "León Klimovsky",
      "es",
      "ES,AR",
      "1h 38m",
      "https://www.imdb.com/title/tt0127017/"
   ],
   [
      "1951",
      "Miracle in Milan",
      "Miracolo a Milano",
      "Vittorio De Sica",
      "it,en",
      "IT",
      "1h 37m",
      "https://www.imdb.com/title/tt0043809/"
   ],
   [
      "1951",
      "Musorgskiy",
      "",
      "Grigoriy Roshal",
      "ru",
      "SU",
      "2h",
      "https://www.imdb.com/title/tt0042765/"
   ],
   [
      "1951",
      "Side Street Story",
      "Napoli milionaria",
      "Eduardo De Filippo",
      "en,it",
      "IT",
      "1h 36m",
      "https://www.imdb.com/title/tt0042780/"
   ],
   [
      "1951",
      "The New China",
      "Osvobozhdyonnyy Kitay",
      "Sergey Gerasimov, Eduard Volk",
      "ru",
      "SU,CN",
      "1h 45m",
      "https://www.imdb.com/title/tt0042785/"
   ],
   [
      "1951",
      "Unvanquished City",
      "Robinson warszawski",
      "Jerzy Zarzycki",
      "pl",
      "PL",
      "1h 26m",
      "https://www.imdb.com/title/tt0042731/"
   ],
   [
      "1951",
      "Rumbo",
      "",
      "Ramón Torrado",
      "es",
      "ES",
      "1h 30m",
      "https://www.imdb.com/title/tt0041830/"
   ],
   [
      "1951",
      "The Last Mission",
      "Teleftaia apostoli",
      "Nikos Tsiforos",
      "el,de",
      "GR",
      "1h 20m",
      "https://www.imdb.com/title/tt0205448/"
   ],
   [
      "1951",
      "The Browning Version",
      "",
      "Anthony Asquith",
      "en",
      "GB",
      "1h 30m",
      "https://www.imdb.com/title/tt0043362/"
   ],
   [
      "1951",
      "The Tales of Hoffmann",
      "",
      "Michael Powell, Emeric Pressburger",
      "en",
      "GB",
      "2h 13m",
      "https://www.imdb.com/title/tt0044103/"
   ],
   [
      "1951",
      "Különös házasság",
      "",
      "Márton Keleti",
      "hu",
      "HU",
      "1h 52m",
      "https://www.imdb.com/title/tt0042660/"
   ],
   [
      "1951",
      "Édouard et Caroline",
      "",
      "Jacques Becker",
      "fr",
      "FR",
      "1h 28m",
      "https://www.imdb.com/title/tt0042429/"
   ],
   [
      "1952",
      "Amar Bhoopali",
      "",
      "Shantaram Rajaram Vankudre",
      "mr",
      "IN",
      "2h 5m",
      "https://www.imdb.com/title/tt0331417/"
   ],
   [
      "1952",
      "An American in Paris",
      "",
      "Vincente Minnelli",
      "en,fr,de",
      "US",
      "1h 54m",
      "https://www.imdb.com/title/tt0043278/"
   ],
   [
      "1952",
      "Man in the Storm",
      "Arashi no naka no hara",
      "Kôzô Saeki",
      "ja",
      "JP",
      "1h 26m",
      "https://www.imdb.com/title/tt0243120/"
   ],
   [
      "1952",
      "Cry, the Beloved Country",
      "",
      "Zoltan Korda",
      "en",
      "GB",
      "1h 36m",
      "https://www.imdb.com/title/tt0043436/"
   ],
   [
      "1952",
      "Desires",
      "Das letzte Rezept",
      "Rolf Hansen",
      "de",
      "DE",
      "1h 37m",
      "https://www.imdb.com/title/tt0043737/"
   ],
   [
      "1952",
      "Der Weibsteufel",
      "",
      "Wolfgang Liebeneiner",
      "de",
      "AT",
      "1h 39m",
      "https://www.imdb.com/title/tt0236861/"
   ],
   [
      "1952",
      "Detective Story",
      "",
      "William Wyler",
      "en",
      "US",
      "1h 43m",
      "https://www.imdb.com/title/tt0043465/"
   ],
   [
      "1952",
      "Two Cents Worth of Hope",
      "Due soldi di speranza",
      "Renato Castellani",
      "it",
      "IT",
      "1h 50m",
      "https://www.imdb.com/title/tt0044572/"
   ],
   [
      "1952",
      "Encore",
      "",
      "Harold French, Pat Jackson, Anthony Pelissier",
      "en,fr",
      "GB",
      "1h 25m",
      "https://www.imdb.com/title/tt0044586/"
   ],
   [
      "1952",
      "Fanfan la Tulipe",
      "Fanfan la tulipe",
      "Christian-Jaque",
      "fr",
      "FR,IT",
      "1h 42m",
      "https://www.imdb.com/title/tt0044602/"
   ],
   [
      "1952",
      "The Tale of Genji",
      "Genji monogatari",
      "Kôzaburô Yoshimura",
      "ja",
      "JP",
      "2h 1m",
      "https://www.imdb.com/title/tt0043580/"
   ],
   [
      "1952",
      "Cops and Robbers",
      "Guardie e ladri",
      "Mario Monicelli, Steno",
      "it,en,fr",
      "IT",
      "1h 45m",
      "https://www.imdb.com/title/tt0043606/"
   ],
   [
      "1952",
      "No Greater Love",
      "Herz der Welt",
      "Harald Braun",
      "de",
      "DE",
      "1h 53m",
      "https://www.imdb.com/title/tt0043635/"
   ],
   [
      "1952",
      "One Summer of Happiness",
      "Hon dansade en sommar",
      "Arne Mattsson",
      "sv",
      "SE",
      "1h 43m",
      "https://www.imdb.com/title/tt0043652/"
   ],
   [
      "1952",
      "Son of the Nile",
      "Ibn el Nil",
      "Youssef Chahine",
      "ar",
      "EG",
      "2h 5m",
      "https://www.imdb.com/title/tt0043670/"
   ],
   [
      "1952",
      "The Overcoat",
      "Il cappotto",
      "Alberto Lattuada",
      "it",
      "IT",
      "1h 42m",
      "https://www.imdb.com/title/tt0044474/"
   ],
   [
      "1952",
      "The Absentee",
      "La ausente",
      "Julio Bracho",
      "es",
      "MX",
      "1h 52m",
      "https://www.imdb.com/title/tt0044384/"
   ],
   [
      "1952",
      "A Night of Love",
      "Lailat gharam",
      "Ahmed Badrakhan",
      "ar",
      "EG",
      "2h",
      "https://www.imdb.com/title/tt0311416/"
   ],
   [
      "1952",
      "The Smugglers' Banquet",
      "Le banquet des fraudeurs",
      "Henri Storck",
      "fr,nl",
      "BE,DE",
      "1h 30m",
      "https://www.imdb.com/title/tt0160028/"
   ],
   [
      "1952",
      "María Morena",
      "",
      "José María Forqué, Pedro Lazaga",
      "es",
      "ES",
      "1h 15m",
      "https://www.imdb.com/title/tt0043789/"
   ],
   [
      "1952",
      "Nami",
      "",
      "Noboru Nakamura",
      "ja",
      "JP",
      "1h 51m",
      "https://www.imdb.com/title/tt0243440/"
   ],
   [
      "1952",
      "Dead City",
      "Nekri politeia",
      "Frixos Iliadis",
      "el",
      "GR",
      "1h 16m",
      "https://www.imdb.com/title/tt0137126/"
   ],
   [
      "1952",
      "We Are All Murderers",
      "Nous sommes tous des assassins",
      "André Cayatte",
      "fr",
      "FR,IT",
      "1h 55m",
      "https://www.imdb.com/title/tt0044977/"
   ],
   [
      "1952",
      "Emergency Landing",
      "Nødlanding",
      "Arne Skouen",
      "en,no",
      "NO",
      "1h 40m",
      "https://www.imdb.com/title/tt0044980/"
   ],
   [
      "1952",
      "The Evil Forest",
      "Parsifal",
      "Daniel Mangrané, Carlos Serrano de Osma",
      "es",
      "ES",
      "1h 35m",
      "https://www.imdb.com/title/tt0043903/"
   ],
   [
      "1952",
      "Pasó en mi barrio",
      "",
      "Mario Soffici",
      "es",
      "AR",
      "1h 18m",
      "https://www.imdb.com/title/tt0200948/"
   ],
   [
      "1952",
      "Mexican Bus Ride",
      "Subida al cielo",
      "Luis Buñuel",
      "es",
      "MX",
      "1h 25m",
      "https://www.imdb.com/title/tt0044084/"
   ],
   [
      "1952",
      "Furrows",
      "Surcos",
      "José Antonio Nieves Conde",
      "es",
      "ES",
      "1h 44m",
      "https://www.imdb.com/title/tt0044092/"
   ],
   [
      "1952",
      "The Medium",
      "",
      "Gian Carlo Menotti",
      "en",
      "IT,US",
      "1h 24m",
      "https://www.imdb.com/title/tt0043794/"
   ],
   [
      "1952",
      "Othello",
      "The Tragedy of Othello: The Moor of Venice",
      "Orson Welles",
      "en",
      "IT,MA,US",
      "1h 30m",
      "https://www.imdb.com/title/tt0045251/"
   ],
   [
      "1952",
      "Tico-Tico no Fubá",
      "",
      "Adolfo Celi",
      "pt",
      "BR",
      "1h 49m",
      "https://www.imdb.com/title/tt0181855/"
   ],
   [
      "1952",
      "Three Women",
      "Trois femmes",
      "André Michel",
      "fr",
      "FR",
      "1h 44m",
      "https://www.imdb.com/title/tt0143956/"
   ],
   [
      "1952",
      "Umberto D.",
      "",
      "Vittorio De Sica",
      "it",
      "IT",
      "1h 29m",
      "https://www.imdb.com/title/tt0045274/"
   ],
   [
      "1952",
      "Under the Thousand Lanterns",
      "Unter den tausend Laternen",
      "Erich Engel",
      "de",
      "DE,FR",
      "1h 34m",
      "https://www.imdb.com/title/tt0136549/"
   ],
   [
      "1952",
      "Viva Zapata!",
      "",
      "Elia Kazan",
      "en,es",
      "US,MX",
      "1h 53m",
      "https://www.imdb.com/title/tt0045296/"
   ],
   [
      "1953",
      "1. April 2000",
      "",
      "Wolfgang Liebeneiner",
      "de",
      "AT",
      "1h 45m",
      "https://www.imdb.com/title/tt0044312/"
   ],
   [
      "1953",
      "Awaara",
      "",
      "Raj Kapoor",
      "hi",
      "IN",
      "3h 13m",
      "https://www.imdb.com/title/tt0043306/"
   ],
   [
      "1953",
      "Barabbas",
      "",
      "Alf Sjöberg",
      "sv",
      "SE",
      "2h 3m",
      "https://www.imdb.com/title/tt0045541/"
   ],
   [
      "1953",
      "Welcome Mr. Marshall!",
      "Bienvenido Mister Marshall",
      "Luis García Berlanga",
      "es,en",
      "ES",
      "1h 18m",
      "https://www.imdb.com/title/tt0045554/"
   ],
   [
      "1953",
      "Bongolo",
      "",
      "André Cauvin",
      "fr",
      "BE",
      "1h 25m",
      "https://www.imdb.com/title/tt0194714/"
   ],
   [
      "1953",
      "Call Me Madam",
      "",
      "Walter Lang",
      "en",
      "US",
      "1h 54m",
      "https://www.imdb.com/title/tt0045592/"
   ],
   [
      "1953",
      "Come Back, Little Sheba",
      "",
      "Daniel Mann",
      "en",
      "US",
      "1h 39m",
      "https://www.imdb.com/title/tt0044509/"
   ],
   [
      "1953",
      "Dedication of the Great Buddha",
      "Daibutsu kaigen",
      "Teinosuke Kinugasa",
      "ja",
      "JP",
      "2h 9m",
      "https://www.imdb.com/title/tt0044528/"
   ],
   [
      "1953",
      "Doña Francisquita",
      "",
      "Ladislao Vajda",
      "es",
      "ES",
      "1h 28m",
      "https://www.imdb.com/title/tt0044564/"
   ],
   [
      "1953",
      "Flamenco",
      "Duende y misterio del flamenco",
      "Edgar Neville",
      "es",
      "ES",
      "1h 15m",
      "https://www.imdb.com/title/tt0044574/"
   ],
   [
      "1953",
      "Él",
      "",
      "Luis Buñuel",
      "es",
      "MX",
      "1h 32m",
      "https://www.imdb.com/title/tt0045361/"
   ],
   [
      "1953",
      "For the Sake of My Intemperate Youth",
      "För min heta ungdoms skull",
      "Arne Mattsson",
      "sv",
      "SE",
      "1h 55m",
      "https://www.imdb.com/title/tt0044646/"
   ],
   [
      "1953",
      "Children of Hiroshima",
      "Genbaku no ko",
      "Kaneto Shindô",
      "ja",
      "JP",
      "1h 37m",
      "https://www.imdb.com/title/tt0044497/"
   ],
   [
      "1953",
      "Gendai-jin",
      "",
      "Minoru Shibuya",
      "ja",
      "JP",
      "1h 52m",
      "https://www.imdb.com/title/tt0246640/"
   ],
   [
      "1953",
      "Endless Horizons",
      "Horizons sans fin",
      "Jean Dréville",
      "fr",
      "FR",
      "1h 44m",
      "https://www.imdb.com/title/tt0097526/"
   ],
   [
      "1953",
      "I Confess",
      "",
      "Alfred Hitchcock",
      "en,fr,it,de",
      "US",
      "1h 35m",
      "https://www.imdb.com/title/tt0045897/"
   ],
   [
      "1953",
      "Intimate Relations",
      "",
      "Charles Frank",
      "en",
      "GB",
      "1h 26m",
      "https://www.imdb.com/title/tt0206046/"
   ],
   [
      "1953",
      "The Wayward Wife",
      "La provinciale",
      "Mario Soldati",
      "it",
      "IT",
      "1h 54m",
      "https://www.imdb.com/title/tt0046214/"
   ],
   [
      "1953",
      "Rossana",
      "La red",
      "Emilio Fernández",
      "es",
      "MX",
      "1h 23m",
      "https://www.imdb.com/title/tt0046233/"
   ],
   [
      "1953",
      "La vie passionnée de Clémenceau",
      "",
      "Gilbert Prouteau",
      "fr",
      "FR",
      "1h 35m",
      "https://www.imdb.com/title/tt0812400/"
   ],
   [
      "1953",
      "Las tres perfectas casadas",
      "",
      "Roberto Gavaldón",
      "es",
      "MX",
      "1h 50m",
      "https://www.imdb.com/title/tt0045260/"
   ],
   [
      "1953",
      "The Wages of Fear",
      "Le salaire de la peur",
      "Henri-Georges Clouzot",
      "fr,en,es,de,it,ru",
      "FR,IT",
      "2h 11m",
      "https://www.imdb.com/title/tt0046268/"
   ],
   [
      "1953",
      "Monsieur Hulot's Holiday",
      "Les vacances de Monsieur Hulot",
      "Jacques Tati",
      "fr,en,de",
      "FR",
      "1h 54m",
      "https://www.imdb.com/title/tt0046487/"
   ],
   [
      "1953",
      "Lili",
      "",
      "Charles Walters",
      "en",
      "US",
      "1h 21m",
      "https://www.imdb.com/title/tt0046000/"
   ],
   [
      "1953",
      "Light in the High Plains",
      "Luz en el páramo",
      "Víctor Urruchúa",
      "es",
      "VE",
      "1h 30m",
      "https://www.imdb.com/title/tt0201741/"
   ],
   [
      "1953",
      "Green Magic",
      "Magia verde",
      "Gian Gaspare Napolitano",
      "it",
      "IT,BR",
      "1h 25m",
      "https://www.imdb.com/title/tt0044867/"
   ],
   [
      "1953",
      "Perfidy",
      "Nevjera",
      "Vladimir Pogacic",
      "sr",
      "YU",
      "1h 20m",
      "https://www.imdb.com/title/tt0174067/"
   ],
   [
      "1953",
      "The Bandit",
      "O Cangaceiro",
      "Lima Barreto",
      "pt",
      "BR",
      "1h 45m",
      "https://www.imdb.com/title/tt0045595/"
   ],
   [
      "1953",
      "Peter Pan",
      "",
      "Clyde Geronimi, Wilfred Jackson, Hamilton Luske",
      "en",
      "US",
      "1h 17m",
      "https://www.imdb.com/title/tt0046183/"
   ],
   [
      "1953",
      "Emergency Ward",
      "Sala de guardia",
      "Tulio Demicheli",
      "es",
      "AR",
      "1h 41m",
      "https://www.imdb.com/title/tt0045169/"
   ],
   [
      "1953",
      "The Village",
      "Sie fanden eine Heimat",
      "Leopold Lindtberg",
      "en,de",
      "CH,GB",
      "1h 38m",
      "https://www.imdb.com/title/tt0044799/"
   ],
   [
      "1953",
      "Indiscretion of an American Wife",
      "Stazione Termini",
      "Vittorio De Sica",
      "it,en",
      "IT,US",
      "1h 30m",
      "https://www.imdb.com/title/tt0046366/"
   ],
   [
      "1953",
      "The Heart of the Matter",
      "",
      "George More O'Ferrall",
      "en",
      "GB",
      "1h 45m",
      "https://www.imdb.com/title/tt0047066/"
   ],
   [
      "1953",
      "The Sun Shines Bright",
      "",
      "John Ford",
      "en,de",
      "US",
      "1h 30m",
      "https://www.imdb.com/title/tt0046384/"
   ],
   [
      "1953",
      "The White Reindeer",
      "Valkoinen peura",
      "Erik Blomberg",
      "fi",
      "FI",
      "1h 14m",
      "https://www.imdb.com/title/tt0045283/"
   ],
   [
      "1954",
      "Before the Deluge",
      "Avant le déluge",
      "André Cayatte",
      "de,fr",
      "FR,IT",
      "2h 18m",
      "https://www.imdb.com/title/tt0045525/"
   ],
   [
      "1954",
      "Adventures of the Barber of Seville",
      "Aventuras del barbero de Sevilla",
      "Ladislao Vajda",
      "es",
      "ES,FR",
      "1h 32m",
      "https://www.imdb.com/title/tt0045527/"
   ],
   [
      "1954",
      "Beneath the 12-Mile Reef",
      "",
      "Robert D. Webb",
      "en,el",
      "US",
      "1h 42m",
      "https://www.imdb.com/title/tt0045551/"
   ],
   [
      "1954",
      "Neapolitan Carousel",
      "Carosello napoletano",
      "Ettore Giannini",
      "it",
      "IT",
      "2h 9m",
      "https://www.imdb.com/title/tt0046831/"
   ],
   [
      "1954",
      "Circus Fandango",
      "Cirkus Fandango",
      "Arne Skouen",
      "fr,es,da,no",
      "NO",
      "1h 27m",
      "https://www.imdb.com/title/tt0046857/"
   ],
   [
      "1954",
      "Chronicle of Poor Lovers",
      "Cronache di poveri amanti",
      "Carlo Lizzani",
      "it",
      "IT",
      "1h 47m",
      "https://www.imdb.com/title/tt0046881/"
   ],
   [
      "1954",
      "Comedians",
      "Cómicos",
      "Juan Antonio Bardem",
      "es",
      "ES,AR",
      "1h 32m",
      "https://www.imdb.com/title/tt0045665/"
   ],
   [
      "1954",
      "The Great Adventure",
      "Det stora äventyret",
      "Arne Sucksdorff",
      "sv",
      "SE",
      "1h 34m",
      "https://www.imdb.com/title/tt0046373/"
   ],
   [
      "1954",
      "The Last Bridge",
      "Die letzte Brücke",
      "Helmut Käutner",
      "de,sr,en",
      "AT,YU",
      "1h 42m",
      "https://www.imdb.com/title/tt0047172/"
   ],
   [
      "1954",
      "Do Bigha Zamin",
      "",
      "Bimal Roy",
      "hi",
      "IN",
      "2h 11m",
      "https://www.imdb.com/title/tt0045693/"
   ],
   [
      "1954",
      "The Martyr of Calvary",
      "El mártir del Calvario",
      "Miguel Morayta",
      "es",
      "MX",
      "1h 53m",
      "https://www.imdb.com/title/tt0268477/"
   ],
   [
      "1954",
      "The Boy and the Fog",
      "El niño y la niebla",
      "Roberto Gavaldón",
      "es",
      "MX",
      "1h 51m",
      "https://www.imdb.com/title/tt0046129/"
   ],
   [
      "1954",
      "The Monster",
      "El wahsh",
      "Salah Abouseif",
      "ar",
      "EG",
      "1h 55m",
      "https://www.imdb.com/title/tt0318821/"
   ],
   [
      "1954",
      "Naked Amazon",
      "Feitiço do Amazonas",
      "Zygmunt Sulistrowski",
      "pt",
      "BR",
      "1h 12m",
      "https://www.imdb.com/title/tt0341351/"
   ],
   [
      "1954",
      "From Here to Eternity",
      "",
      "Fred Zinnemann",
      "en",
      "US",
      "1h 58m",
      "https://www.imdb.com/title/tt0045793/"
   ],
   [
      "1954",
      "Gate of Hell",
      "Jigokumon",
      "Teinosuke Kinugasa",
      "ja",
      "JP",
      "1h 29m",
      "https://www.imdb.com/title/tt0045935/"
   ],
   [
      "1954",
      "Kiskrajcár",
      "",
      "Márton Keleti",
      "hu",
      "HU",
      "1h 47m",
      "https://www.imdb.com/title/tt0172655/"
   ],
   [
      "1954",
      "Knave of Hearts",
      "Monsieur Ripois",
      "René Clément",
      "fr,en",
      "FR,GB",
      "1h 40m",
      "https://www.imdb.com/title/tt0047243/"
   ],
   [
      "1954",
      "Knights of the Round Table",
      "",
      "Richard Thorpe",
      "en",
      "GB",
      "1h 55m",
      "https://www.imdb.com/title/tt0045966/"
   ],
   [
      "1954",
      "Love Letter",
      "Koibumi",
      "Kinuyo Tanaka",
      "ja",
      "JP",
      "1h 38m",
      "https://www.imdb.com/title/tt0407929/"
   ],
   [
      "1954",
      "Komedianti",
      "",
      "Vladimír Vlcek",
      "cs",
      "CS",
      "1h 35m",
      "https://www.imdb.com/title/tt0045968/"
   ],
   [
      "1954",
      "Windfall in Athens",
      "Kyriakatiko xypnima",
      "Michael Cacoyannis",
      "el",
      "GR",
      "1h 35m",
      "https://www.imdb.com/title/tt0139413/"
   ],
   [
      "1954",
      "Bread of Love",
      "Kärlekens bröd",
      "Arne Mattsson",
      "ru,sv",
      "SE",
      "1h 30m",
      "https://www.imdb.com/title/tt0045979/"
   ],
   [
      "1954",
      "Flesh and the Woman",
      "Le grand jeu",
      "Robert Siodmak",
      "fr",
      "FR,IT",
      "1h 40m",
      "https://www.imdb.com/title/tt0047044/"
   ],
   [
      "1954",
      "Little Boy Lost",
      "",
      "George Seaton",
      "en,fr",
      "US",
      "1h 35m",
      "https://www.imdb.com/title/tt0046003/"
   ],
   [
      "1954",
      "Maddalena",
      "",
      "Augusto Genina",
      "it",
      "IT,FR",
      "1h 42m",
      "https://www.imdb.com/title/tt0046023/"
   ],
   [
      "1954",
      "Man of Africa",
      "",
      "Cyril Frankel",
      "en",
      "GB",
      "1h 13m",
      "https://www.imdb.com/title/tt0046038/"
   ],
   [
      "1954",
      "Stars of the Russian Ballet",
      "Mastera russkogo baleta",
      "Gerbert Rappaport",
      "ru",
      "SU",
      "1h 20m",
      "https://www.imdb.com/title/tt0046055/"
   ],
   [
      "1954",
      "Mayurpankh",
      "",
      "Kishore Sahu",
      "hi,ur,en",
      "IN",
      "1h 46m",
      "https://www.imdb.com/title/tt0140370/"
   ],
   [
      "1954",
      "Memories of a Mexican",
      "Memorias de un mexicano",
      "Carmen Toscano, Salvador Toscano",
      "es",
      "MX",
      "1h 40m",
      "https://www.imdb.com/title/tt0042726/"
   ],
   [
      "1954",
      "An Inlet of Muddy Water",
      "Nigorie",
      "Tadashi Imai",
      "ja",
      "JP",
      "2h 10m",
      "https://www.imdb.com/title/tt0186387/"
   ],
   [
      "1954",
      "Song of the Sea",
      "O Canto do Mar",
      "Alberto Cavalcanti",
      "pt",
      "BR",
      "2h 4m",
      "https://www.imdb.com/title/tt0184327/"
   ],
   [
      "1954",
      "Pamposh",
      "",
      "Ezra Mir",
      "hi",
      "IN",
      "1h 10m",
      "https://www.imdb.com/title/tt0241799/"
   ],
   [
      "1954",
      "Five Boys from Barska Street",
      "Piatka z ulicy Barskiej",
      "Aleksander Ford",
      "pl",
      "PL",
      "1h 48m",
      "https://www.imdb.com/title/tt0047351/"
   ],
   [
      "1954",
      "Love in a Hot Climate",
      "Sangre y luces",
      "Georges Rouquier, Ricardo Muñoz Suay",
      "fr,es,de",
      "FR,ES",
      "1h 39m",
      "https://www.imdb.com/title/tt0046273/"
   ],
   [
      "1954",
      "Si mis campos hablaran",
      "",
      "José Bohr",
      "es",
      "CL",
      "1h 17m",
      "https://www.imdb.com/title/tt0123266/"
   ],
   [
      "1954",
      "The Blazing Sun",
      "Siraa Fil-Wadi",
      "Youssef Chahine",
      "ar",
      "EG",
      "1h 45m",
      "https://www.imdb.com/title/tt0044429/"
   ],
   [
      "1954",
      "As Long as You're Near Me",
      "Solange Du da bist",
      "Harald Braun",
      "de",
      "DE",
      "1h 43m",
      "https://www.imdb.com/title/tt0046340/"
   ],
   [
      "1954",
      "Marina's Destiny",
      "Sudba Mariny",
      "Viktor Ivchenko, Isaak Shmaruk",
      "ru",
      "SU",
      "1h 39m",
      "https://www.imdb.com/title/tt0046381/"
   ],
   [
      "1954",
      "The Kidnappers",
      "",
      "Philip Leacock",
      "en",
      "GB",
      "1h 33m",
      "https://www.imdb.com/title/tt0046006/"
   ],
   [
      "1954",
      "The Living Desert",
      "",
      "James Algar",
      "en",
      "US",
      "1h 9m",
      "https://www.imdb.com/title/tt0046008/"
   ],
   [
      "1954",
      "All Is Possible in Granada",
      "Todo es posible en Granada",
      "José Luis Sáenz de Heredia",
      "es",
      "ES",
      "1h 30m",
      "https://www.imdb.com/title/tt0047591/"
   ],
   [
      "1954",
      "The Great Warrior Skanderbeg",
      "Velikiy voin Albanii Skanderbeg",
      "Sergei Yutkevich",
      "ru,sq",
      "AL,SU",
      "1h 35m",
      "https://www.imdb.com/title/tt0046498/"
   ],
   [
      "1955",
      "A Kid for Two Farthings",
      "",
      "Carol Reed",
      "en",
      "GB",
      "1h 31m",
      "https://www.imdb.com/title/tt0048250/"
   ],
   [
      "1955",
      "Bad Day at Black Rock",
      "",
      "John Sturges",
      "en",
      "US",
      "1h 21m",
      "https://www.imdb.com/title/tt0047849/"
   ],
   [
      "1955",
      "Biraj Bahu",
      "",
      "Bimal Roy",
      "hi",
      "IN",
      "2h 25m",
      "https://www.imdb.com/title/tt0046780/"
   ],
   [
      "1955",
      "A Big Family",
      "Bolshaya semya",
      "Iosif Kheifits",
      "ru",
      "SU",
      "1h 48m",
      "https://www.imdb.com/title/tt0046797/"
   ],
   [
      "1955",
      "Boot Polish",
      "",
      "Prakash Arora",
      "hi",
      "IN",
      "2h 29m",
      "https://www.imdb.com/title/tt0046799/"
   ],
   [
      "1955",
      "Carmen Jones",
      "",
      "Otto Preminger",
      "en",
      "US",
      "1h 45m",
      "https://www.imdb.com/title/tt0046828/"
   ],
   [
      "1955",
      "The Crucified Lovers",
      "Chikamatsu monogatari",
      "Kenji Mizoguchi",
      "ja",
      "JP",
      "1h 42m",
      "https://www.imdb.com/title/tt0046851/"
   ],
   [
      "1955",
      "Lost Continent",
      "Continente perduto",
      "Enrico Gras, Giorgio Moser, Leonardo Bonzi",
      "it",
      "IT",
      "2h",
      "https://www.imdb.com/title/tt0046871/"
   ],
   [
      "1955",
      "Fire in the Night",
      "Det brenner i natt!",
      "Arne Skouen",
      "no",
      "NO",
      "1h 36m",
      "https://www.imdb.com/title/tt0047987/"
   ],
   [
      "1955",
      "Die Mücke",
      "",
      "Walter Reisch",
      "de",
      "DE",
      "1h 50m",
      "https://www.imdb.com/title/tt0047261/"
   ],
   [
      "1955",
      "Black Dossier",
      "Le dossier noir",
      "André Cayatte",
      "fr",
      "FR,IT",
      "1h 55m",
      "https://www.imdb.com/title/tt0048011/"
   ],
   [
      "1955",
      "Rififi",
      "Du rififi chez les hommes",
      "Jules Dassin",
      "fr,it,en",
      "FR",
      "1h 58m",
      "https://www.imdb.com/title/tt0048021/"
   ],
   [
      "1955",
      "East of Eden",
      "",
      "Elia Kazan",
      "en",
      "US",
      "1h 58m",
      "https://www.imdb.com/title/tt0048028/"
   ],
   [
      "1955",
      "Heroes of Shipka",
      "Geroite na Shipka",
      "Sergey Vasilev",
      "bg,ru",
      "BG,SU",
      "2h 17m",
      "https://www.imdb.com/title/tt0047021/"
   ],
   [
      "1955",
      "Life or Death",
      "Hayat ou maut",
      "Kamal El-Shaikh",
      "ar",
      "EG",
      "1h 15m",
      "https://www.imdb.com/title/tt0342512/"
   ],
   [
      "1955",
      "Hill 24 Doesn't Answer",
      "Giv'a 24 Eina Ona",
      "Thorold Dickinson",
      "en,he,de",
      "IL",
      "1h 41m",
      "https://www.imdb.com/title/tt0048121/"
   ],
   [
      "1955",
      "The Sign of Venus",
      "Il segno di Venere",
      "Dino Risi",
      "it",
      "IT",
      "1h 37m",
      "https://www.imdb.com/title/tt0046292/"
   ],
   [
      "1955",
      "Jedda",
      "",
      "Charles Chauvel",
      "en",
      "AU",
      "1h 41m",
      "https://www.imdb.com/title/tt0048227/"
   ],
   [
      "1955",
      "The Gold of Naples",
      "L'oro di Napoli",
      "Vittorio De Sica",
      "it",
      "IT",
      "2h 18m",
      "https://www.imdb.com/title/tt0047313/"
   ],
   [
      "1955",
      "Liliomfi",
      "",
      "Károly Makk",
      "hu",
      "HU",
      "1h 49m",
      "https://www.imdb.com/title/tt0047180/"
   ],
   [
      "1955",
      "Ludwig II",
      "Ludwig II: Glanz und Ende eines Königs",
      "Helmut Käutner",
      "de",
      "DE",
      "1h 55m",
      "https://www.imdb.com/title/tt0047195/"
   ],
   [
      "1955",
      "The Miracle of Marcelino",
      "Marcelino pan y vino",
      "Ladislao Vajda",
      "es",
      "ES,IT",
      "1h 31m",
      "https://www.imdb.com/title/tt0047216/"
   ],
   [
      "1955",
      "Marty",
      "",
      "Delbert Mann",
      "en,de,it",
      "US",
      "1h 30m",
      "https://www.imdb.com/title/tt0048356/"
   ],
   [
      "1955",
      "Onna no koyomi",
      "",
      "Seiji Hisamatsu",
      "ja",
      "JP",
      "1h 40m",
      "https://www.imdb.com/title/tt0330723/"
   ],
   [
      "1955",
      "Dog's Heads",
      "Psohlavci",
      "Martin Fric",
      "cs",
      "CS",
      "1h 37m",
      "https://www.imdb.com/title/tt0169151/"
   ],
   [
      "1955",
      "Roots",
      "Raíces",
      "Benito Alazraki",
      "es",
      "MX",
      "1h 43m",
      "https://www.imdb.com/title/tt0047395/"
   ],
   [
      "1955",
      "Romeo and Juliet",
      "Romeo i Dzhulyetta",
      "Lev Arnshtam, Leonid Lavrovsky",
      "ru",
      "SU",
      "1h 32m",
      "https://www.imdb.com/title/tt0048561/"
   ],
   [
      "1955",
      "Samba Fantástico",
      "",
      "Jean Manzon, René Persin",
      "pt",
      "BR,FR",
      "1h 21m",
      "https://www.imdb.com/title/tt0778830/"
   ],
   [
      "1955",
      "Senhime",
      "",
      "Keigo Kimura",
      "ja",
      "JP",
      "1h 35m",
      "https://www.imdb.com/title/tt1452603/"
   ],
   [
      "1955",
      "Stella",
      "",
      "Michael Cacoyannis",
      "el",
      "GR",
      "1h 30m",
      "https://www.imdb.com/title/tt0048657/"
   ],
   [
      "1955",
      "The Country Girl",
      "",
      "George Seaton",
      "en",
      "US",
      "1h 44m",
      "https://www.imdb.com/title/tt0046874/"
   ],
   [
      "1955",
      "The End of the Affair",
      "",
      "Edward Dmytryk",
      "en",
      "GB,US",
      "1h 45m",
      "https://www.imdb.com/title/tt0048034/"
   ],
   [
      "1955",
      "Un extraño en la escalera",
      "",
      "Tulio Demicheli",
      "es",
      "MX,CU",
      "1h 35m",
      "https://www.imdb.com/title/tt0046964/"
   ],
   [
      "1956",
      "The Protar Affair",
      "Afacerea Protar",
      "Haralambie Boros",
      "ro",
      "RO",
      "1h 25m",
      "https://www.imdb.com/title/tt0048930/"
   ],
   [
      "1956",
      "Shadow",
      "Cien",
      "Jerzy Kawalerowicz",
      "pl",
      "PL",
      "1h 38m",
      "https://www.imdb.com/title/tt0049077/"
   ],
   [
      "1956",
      "Dalibor",
      "",
      "Václav Krska",
      "cs",
      "CS",
      "1h 47m",
      "https://www.imdb.com/title/tt0172291/"
   ],
   [
      "1956",
      "El último perro",
      "",
      "Lucas Demare",
      "es",
      "AR",
      "1h 35m",
      "https://www.imdb.com/title/tt0048836/"
   ],
   [
      "1956",
      "Wild Love",
      "Gli innamorati",
      "Mauro Bolognini",
      "it",
      "IT,FR",
      "1h 25m",
      "https://www.imdb.com/title/tt0048207/"
   ],
   [
      "1956",
      "Hanka",
      "",
      "Slavko Vorkapich",
      "sr",
      "YU",
      "2h 12m",
      "https://www.imdb.com/title/tt0048146/"
   ],
   [
      "1956",
      "I'll Cry Tomorrow",
      "",
      "Daniel Mann",
      "en",
      "US",
      "1h 57m",
      "https://www.imdb.com/title/tt0048191/"
   ],
   [
      "1956",
      "I Live in Fear",
      "Ikimono no kiroku",
      "Akira Kurosawa",
      "ja",
      "JP",
      "1h 43m",
      "https://www.imdb.com/title/tt0048198/"
   ],
   [
      "1956",
      "The Railroad Man",
      "Il ferroviere",
      "Pietro Germi",
      "it",
      "IT",
      "1h 55m",
      "https://www.imdb.com/title/tt0049207/"
   ],
   [
      "1956",
      "The Roof",
      "Il tetto",
      "Vittorio De Sica",
      "it",
      "IT,FR",
      "1h 31m",
      "https://www.imdb.com/title/tt0049839/"
   ],
   [
      "1956",
      "Merry-Go-Round",
      "Körhinta",
      "Zoltán Fábri",
      "hu",
      "HU",
      "1h 35m",
      "https://www.imdb.com/title/tt0048275/"
   ],
   [
      "1956",
      "The Hidden One",
      "La escondida",
      "Roberto Gavaldón",
      "es",
      "MX",
      "1h 40m",
      "https://www.imdb.com/title/tt0048045/"
   ],
   [
      "1956",
      "The Silent World",
      "Le monde du silence",
      "Jacques-Yves Cousteau, Louis Malle",
      "fr",
      "FR,IT",
      "1h 26m",
      "https://www.imdb.com/title/tt0049518/"
   ],
   [
      "1956",
      "The Mystery of Picasso",
      "Le mystère Picasso",
      "Henri-Georges Clouzot",
      "fr",
      "FR",
      "1h 18m",
      "https://www.imdb.com/title/tt0049531/"
   ],
   [
      "1956",
      "The Phantom Horse",
      "Maboroshi no uma",
      "Kôji Shima",
      "ja",
      "JP",
      "1h 30m",
      "https://www.imdb.com/title/tt0203797/"
   ],
   [
      "1956",
      "Marie Antoinette Queen of France",
      "Marie-Antoinette reine de France",
      "Jean Delannoy",
      "fr",
      "FR,IT",
      "2h",
      "https://www.imdb.com/title/tt0048355/"
   ],
   [
      "1956",
      "Mother",
      "Mat",
      "Mark Donskoy",
      "ru",
      "SU",
      "1h 44m",
      "https://www.imdb.com/title/tt0048359/"
   ],
   [
      "1956",
      "Seagulls Die in the Harbour",
      "Meeuwen sterven in de haven",
      "Rik Kuypers, Ivo Michiels, Roland Verhavert",
      "nl,fr",
      "BE",
      "1h 34m",
      "https://www.imdb.com/title/tt0222186/"
   ],
   [
      "1956",
      "Mozart",
      "",
      "Karl Hartl",
      "de",
      "AT",
      "1h 40m",
      "https://www.imdb.com/title/tt0048391/"
   ],
   [
      "1956",
      "Othello",
      "",
      "Sergei Yutkevich",
      "ru",
      "SU",
      "1h 47m",
      "https://www.imdb.com/title/tt0048455/"
   ],
   [
      "1956",
      "Pather Panchali",
      "",
      "Satyajit Ray",
      "bn",
      "IN",
      "2h 5m",
      "https://www.imdb.com/title/tt0048473/"
   ],
   [
      "1956",
      "Road to Life",
      "",
      "Aleksey Maslyukov, Mechislava Mayevskaya",
      "ru",
      "SU",
      "1h 51m",
      "https://www.imdb.com/title/tt0048478/"
   ],
   [
      "1956",
      "Christ in Bronze",
      "Seido no Kirisuto",
      "Minoru Shibuya",
      "ja",
      "JP",
      "2h 6m",
      "https://www.imdb.com/title/tt0318677/"
   ],
   [
      "1956",
      "Seven Years in Tibet",
      "",
      "Hans Nieter",
      "en",
      "GB",
      "1h 19m",
      "https://www.imdb.com/title/tt0405304/"
   ],
   [
      "1956",
      "The Leech",
      "Shabab emraa",
      "Salah Abouseif, Ahmad El-Sabawi, Amin Yousseff Ghurab",
      "ar",
      "EG",
      "2h 6m",
      "https://www.imdb.com/title/tt0049746/"
   ],
   [
      "1956",
      "Shevagyachya Shenga",
      "",
      "Shantaram Athavale",
      "mr",
      "IN",
      "2h",
      "https://www.imdb.com/title/tt0155168/"
   ],
   [
      "1956",
      "Sob o Céu da Bahia",
      "",
      "Ernesto Remani",
      "pt",
      "BR",
      "3h 20m",
      "https://www.imdb.com/title/tt0341581/"
   ],
   [
      "1956",
      "Smiles of a Summer Night",
      "Sommarnattens leende",
      "Ingmar Bergman",
      "sv",
      "SE",
      "1h 49m",
      "https://www.imdb.com/title/tt0048641/"
   ],
   [
      "1956",
      "Talpa",
      "",
      "Alfredo B. Crevenna",
      "es",
      "MX",
      "1h 39m",
      "https://www.imdb.com/title/tt0242928/"
   ],
   [
      "1956",
      "Afternoon of the Bulls",
      "Tarde de toros",
      "Ladislao Vajda",
      "es",
      "ES",
      "1h 15m",
      "https://www.imdb.com/title/tt0048697/"
   ],
   [
      "1956",
      "The Harder They Fall",
      "",
      "Mark Robson",
      "en,es",
      "US",
      "1h 49m",
      "https://www.imdb.com/title/tt0049291/"
   ],
   [
      "1956",
      "The Man in the Gray Flannel Suit",
      "",
      "Nunnally Johnson",
      "en,it,de",
      "US",
      "2h 33m",
      "https://www.imdb.com/title/tt0049474/"
   ],
   [
      "1956",
      "The Man Who Knew Too Much",
      "",
      "Alfred Hitchcock",
      "en,ar,fr",
      "US",
      "2h",
      "https://www.imdb.com/title/tt0049470/"
   ],
   [
      "1956",
      "The Man Who Never Was",
      "",
      "Ronald Neame",
      "en,de,es",
      "GB,US",
      "1h 43m",
      "https://www.imdb.com/title/tt0049471/"
   ],
   [
      "1956",
      "A Girl in Black",
      "To koritsi me ta mavra",
      "Michael Cacoyannis",
      "el",
      "GR",
      "1h 40m",
      "https://www.imdb.com/title/tt0049419/"
   ],
   [
      "1956",
      "Item One",
      "Tochka parva",
      "Boyan Danovski",
      "bg",
      "BG",
      "1h 17m",
      "https://www.imdb.com/title/tt0278098/"
   ],
   [
      "1956",
      "The Unwilling Doctor",
      "Toubib el affia",
      "Henry Jacques",
      "ar",
      "MA,FR,EG,LB",
      "1h 35m",
      "https://www.imdb.com/title/tt0255663/"
   ],
   [
      "1956",
      "Walk Into Paradise",
      "",
      "Lee Robinson, Marcello Pagliero",
      "en",
      "FR,AU",
      "1h 33m",
      "https://www.imdb.com/title/tt0049931/"
   ],
   [
      "1956",
      "Yield to the Night",
      "",
      "J. Lee Thompson",
      "en",
      "GB",
      "1h 39m",
      "https://www.imdb.com/title/tt0049019/"
   ],
   [
      "1957",
      "Duped Till Doomsday",
      "Betrogen bis zum jüngsten Tag",
      "Kurt Jung-Alsen",
      "de",
      "DD",
      "1h 14m",
      "https://www.imdb.com/title/tt0050187/"
   ],
   [
      "1957",
      "He Who Must Die",
      "Celui qui doit mourir",
      "Jules Dassin",
      "fr",
      "FR,IT",
      "2h 2m",
      "https://www.imdb.com/title/tt0050237/"
   ],
   [
      "1957",
      "The Seventh Seal",
      "Det sjunde inseglet",
      "Ingmar Bergman",
      "sv",
      "SE",
      "1h 36m",
      "https://www.imdb.com/title/tt0050976/"
   ],
   [
      "1957",
      "Valley of Peace",
      "Dolina miru",
      "France Stiglic",
      "sl,de,en",
      "YU",
      "1h 22m",
      "https://www.imdb.com/title/tt0049150/"
   ],
   [
      "1957",
      "Don Quixote",
      "Don Kikhot",
      "Grigoriy Kozintsev",
      "ru",
      "SU",
      "1h 50m",
      "https://www.imdb.com/title/tt0050326/"
   ],
   [
      "1957",
      "The Harvest Month",
      "Elokuu",
      "Matti Kassila",
      "fi",
      "FI",
      "1h 34m",
      "https://www.imdb.com/title/tt0125730/"
   ],
   [
      "1957",
      "Faustina",
      "",
      "José Luis Sáenz de Heredia",
      "es",
      "ES",
      "1h 41m",
      "https://www.imdb.com/title/tt0050382/"
   ],
   [
      "1957",
      "Friendly Persuasion",
      "",
      "William Wyler",
      "en",
      "US",
      "2h 17m",
      "https://www.imdb.com/title/tt0049233/"
   ],
   [
      "1957",
      "Funny Face",
      "",
      "Stanley Donen",
      "en,fr",
      "US",
      "1h 43m",
      "https://www.imdb.com/title/tt0050419/"
   ],
   [
      "1957",
      "Gotoma the Buddha",
      "",
      "Rajbans Khanna",
      "hi",
      "IN",
      "1h 3m",
      "https://www.imdb.com/title/tt0317595/"
   ],
   [
      "1957",
      "Guendalina",
      "",
      "Alberto Lattuada",
      "it",
      "IT,FR",
      "1h 40m",
      "https://www.imdb.com/title/tt0049282/"
   ],
   [
      "1957",
      "High Tide at Noon",
      "",
      "Philip Leacock",
      "en",
      "GB",
      "1h 49m",
      "https://www.imdb.com/title/tt0050507/"
   ],
   [
      "1957",
      "Whither?",
      "Ila Ayn",
      "Georges Nasser",
      "ar",
      "LB",
      "1h 30m",
      "https://www.imdb.com/title/tt0251742/"
   ],
   [
      "1957",
      "Kanal",
      "Kanał",
      "Andrzej Wajda",
      "pl,de",
      "PL",
      "1h 31m",
      "https://www.imdb.com/title/tt0050585/"
   ],
   [
      "1957",
      "Rice",
      "Kome",
      "Tadashi Imai",
      "ja",
      "JP",
      "1h 58m",
      "https://www.imdb.com/title/tt0186276/"
   ],
   [
      "1957",
      "Two Confessions",
      "Két vallomás",
      "Márton Keleti",
      "hu",
      "HU",
      "1h 33m",
      "https://www.imdb.com/title/tt0050615/"
   ],
   [
      "1957",
      "The House of the Angel",
      "La casa del ángel",
      "Leopoldo Torre Nilsson",
      "es",
      "AR",
      "1h 16m",
      "https://www.imdb.com/title/tt0050231/"
   ],
   [
      "1957",
      "The Mill of Good Luck",
      "La 'Moara cu noroc'",
      "Victor Iliu",
      "ro",
      "RO",
      "1h 50m",
      "https://www.imdb.com/title/tt0048382/"
   ],
   [
      "1957",
      "Nights of Cabiria",
      "Le notti di Cabiria",
      "Federico Fellini",
      "it",
      "IT,FR",
      "1h 50m",
      "https://www.imdb.com/title/tt0050783/"
   ],
   [
      "1957",
      "Qivitoq",
      "Qivitoq - Fjeldgængeren",
      "Erik Balling",
      "da,kl",
      "DK",
      "1h 59m",
      "https://www.imdb.com/title/tt0048523/"
   ],
   [
      "1957",
      "Rekava",
      "",
      "Lester James Peries",
      "si",
      "LK",
      "1h 29m",
      "https://www.imdb.com/title/tt0337088/"
   ],
   [
      "1957",
      "Rose Bernd",
      "",
      "Wolfgang Staudte",
      "de",
      "DE",
      "1h 38m",
      "https://www.imdb.com/title/tt0049689/"
   ],
   [
      "1957",
      "Lapland Calendar",
      "Same Jakki",
      "Per Høst, Anders Pentha",
      "en,no",
      "NO",
      "1h 24m",
      "https://www.imdb.com/title/tt0274782/"
   ],
   [
      "1957",
      "Shiroi sanmyaku",
      "",
      "Sadao Imamura",
      "ja",
      "JP",
      "1h 11m",
      "https://www.imdb.com/title/tt0261299/"
   ],
   [
      "1957",
      "Sissi: The Young Empress",
      "Sissi - Die junge Kaiserin",
      "Ernst Marischka",
      "de,hu",
      "AT",
      "1h 47m",
      "https://www.imdb.com/title/tt0049762/"
   ],
   [
      "1957",
      "The Forty-First",
      "Sorok pervyy",
      "Grigoriy Chukhray",
      "ru",
      "SU",
      "1h 28m",
      "https://www.imdb.com/title/tt0049783/"
   ],
   [
      "1957",
      "The Bachelor Party",
      "",
      "Delbert Mann",
      "en",
      "US",
      "1h 32m",
      "https://www.imdb.com/title/tt0050156/"
   ],
   [
      "1957",
      "A Man Escaped",
      "Un condamné à mort s'est échappé ou Le vent souffle où il veut",
      "Robert Bresson",
      "fr,de",
      "FR",
      "1h 41m",
      "https://www.imdb.com/title/tt0049902/"
   ],
   [
      "1957",
      "Yangtse Incident: The Story of H.M.S. Amethyst",
      "",
      "Michael Anderson",
      "en",
      "GB",
      "1h 53m",
      "https://www.imdb.com/title/tt0051209/"
   ],
   [
      "1957",
      "Earth",
      "Zemya",
      "Zahari Zhandov",
      "bg",
      "BG",
      "1h 42m",
      "https://www.imdb.com/title/tt0279526/"
   ],
   [
      "1957",
      "Lost Children",
      "Ztracenci",
      "Milos Makovec",
      "cs",
      "CS",
      "1h 25m",
      "https://www.imdb.com/title/tt0431492/"
   ],
   [
      "1958",
      "The Thistles of the Baragan",
      "Ciulinii Baraganului",
      "Louis Daquin",
      "ro",
      "RO,FR",
      "1h 56m",
      "https://www.imdb.com/title/tt0154341/"
   ],
   [
      "1958",
      "The Spessart Inn",
      "Das Wirtshaus im Spessart",
      "Kurt Hoffmann",
      "de",
      "DE",
      "1h 39m",
      "https://www.imdb.com/title/tt0051200/"
   ],
   [
      "1958",
      "Desire Under the Elms",
      "",
      "Delbert Mann",
      "en",
      "US",
      "1h 51m",
      "https://www.imdb.com/title/tt0051534/"
   ],
   [
      "1958",
      "The Flute and the Arrow",
      "En djungelsaga",
      "Arne Sucksdorff",
      "sv",
      "SE",
      "1h 15m",
      "https://www.imdb.com/title/tt0050321/"
   ],
   [
      "1958",
      "Young Husbands",
      "Giovani mariti",
      "Mauro Bolognini",
      "it",
      "IT,FR",
      "1h 38m",
      "https://www.imdb.com/title/tt0050435/"
   ],
   [
      "1958",
      "Goha",
      "",
      "Jacques Baratier",
      "ar",
      "FR,TN",
      "1h 23m",
      "https://www.imdb.com/title/tt0052854/"
   ],
   [
      "1958",
      "Girl and the River",
      "L'eau vive",
      "François Villiers",
      "fr",
      "FR",
      "1h 36m",
      "https://www.imdb.com/title/tt0050346/"
   ],
   [
      "1958",
      "A Man of Straw",
      "L'uomo di paglia",
      "Pietro Germi",
      "it",
      "IT",
      "1h 48m",
      "https://www.imdb.com/title/tt0051142/"
   ],
   [
      "1958",
      "La caleta olvidada",
      "",
      "Bruno Gebel",
      "es",
      "CL",
      "2h 38m",
      "https://www.imdb.com/title/tt0242341/"
   ],
   [
      "1958",
      "Vengeance",
      "La venganza",
      "Juan Antonio Bardem",
      "es",
      "ES,IT",
      "2h 2m",
      "https://www.imdb.com/title/tt0051155/"
   ],
   [
      "1958",
      "The Cranes Are Flying",
      "Letyat zhuravli",
      "Mikhail Kalatozov",
      "ru",
      "SU",
      "1h 35m",
      "https://www.imdb.com/title/tt0050634/"
   ],
   [
      "1958",
      "Mon oncle",
      "",
      "Jacques Tati",
      "fr",
      "FR,IT",
      "1h 56m",
      "https://www.imdb.com/title/tt0050706/"
   ],
   [
      "1958",
      "Nine Lives",
      "Ni liv",
      "Arne Skouen",
      "de,no",
      "NO",
      "1h 36m",
      "https://www.imdb.com/title/tt0050762/"
   ],
   [
      "1958",
      "Brink of Life",
      "Nära livet",
      "Ingmar Bergman",
      "sv",
      "SE",
      "1h 24m",
      "https://www.imdb.com/title/tt0052017/"
   ],
   [
      "1958",
      "Orders to Kill",
      "",
      "Anthony Asquith",
      "en,fr,de",
      "GB",
      "1h 52m",
      "https://www.imdb.com/title/tt0052033/"
   ],
   [
      "1958",
      "Parash Pathar",
      "",
      "Satyajit Ray",
      "bn",
      "IN",
      "1h 51m",
      "https://www.imdb.com/title/tt0052046/"
   ],
   [
      "1958",
      "Pardesi",
      "",
      "Khwaja Ahmad Abbas, Vasili Pronin",
      "hi,ru",
      "IN,SU",
      "2h 32m",
      "https://www.imdb.com/title/tt0050820/"
   ],
   [
      "1958",
      "Rosaura at 10 O'Clock",
      "Rosaura a las 10",
      "Mario Soffici",
      "es",
      "AR",
      "1h 40m",
      "https://www.imdb.com/title/tt0121703/"
   ],
   [
      "1958",
      "Sissi: The Fateful Years of an Empress",
      "Sissi - Schicksalsjahre einer Kaiserin",
      "Ernst Marischka",
      "de,el,hu,it,pt",
      "AT",
      "1h 49m",
      "https://www.imdb.com/title/tt0050974/"
   ],
   [
      "1958",
      "The Brothers Karamazov",
      "",
      "Richard Brooks",
      "en,pl,ru",
      "US",
      "2h 25m",
      "https://www.imdb.com/title/tt0051435/"
   ],
   [
      "1958",
      "The Long, Hot Summer",
      "",
      "Martin Ritt",
      "en",
      "US",
      "1h 55m",
      "https://www.imdb.com/title/tt0051878/"
   ],
   [
      "1958",
      "A Matter of Dignity",
      "To teleftaio psemma",
      "Michael Cacoyannis",
      "el",
      "GR",
      "1h 52m",
      "https://www.imdb.com/title/tt0051065/"
   ],
   [
      "1958",
      "Iron Flower",
      "Vasvirág",
      "János Herskó",
      "hu",
      "HU",
      "1h 41m",
      "https://www.imdb.com/title/tt0052349/"
   ],
   [
      "1958",
      "Visages de bronze",
      "",
      "Bernard Taisant",
      "fr",
      "CH",
      "30m",
      "https://www.imdb.com/title/tt0170770"
   ],
   [
      "1958",
      "Snow Country",
      "Yukiguni",
      "Shirô Toyoda",
      "ja",
      "JP",
      "2h 13m",
      "https://www.imdb.com/title/tt0051217/"
   ],
   [
      "1958",
      "Suburban Romance",
      "Zizkovská romance",
      "Zbynek Brynych",
      "cs",
      "CS",
      "1h 40m",
      "https://www.imdb.com/title/tt0124221/"
   ],
   [
      "1959",
      "Araya",
      "",
      "Margot Benacerraf",
      "es",
      "VE,FR",
      "1h 30m",
      "https://www.imdb.com/title/tt0051372/"
   ],
   [
      "1959",
      "Compulsion",
      "",
      "Richard Fleischer",
      "en",
      "US",
      "1h 43m",
      "https://www.imdb.com/title/tt0052700/"
   ],
   [
      "1959",
      "Eva",
      "Die Halbzarte",
      "Rolf Thiele",
      "de",
      "AT",
      "1h 32m",
      "https://www.imdb.com/title/tt0051695/"
   ],
   [
      "1959",
      "Fanfare",
      "",
      "Bert Haanstra",
      "nl",
      "NL",
      "1h 26m",
      "https://www.imdb.com/title/tt0051600/"
   ],
   [
      "1959",
      "Miss April",
      "Fröken April",
      "Göran Gentele",
      "sv",
      "SE",
      "1h 38m",
      "https://www.imdb.com/title/tt0051641/"
   ],
   [
      "1959",
      "Arms and the Man",
      "Helden",
      "Franz Peter Wirth",
      "de",
      "DE",
      "1h 40m",
      "https://www.imdb.com/title/tt0051712/"
   ],
   [
      "1959",
      "Hiroshima mon amour",
      "",
      "Alain Resnais",
      "fr,ja,en",
      "FR,JP",
      "1h 30m",
      "https://www.imdb.com/title/tt0052893/"
   ],
   [
      "1959",
      "Court Martial",
      "Kriegsgericht",
      "Kurt Meisel",
      "de",
      "DE",
      "1h 24m",
      "https://www.imdb.com/title/tt0052979/"
   ],
   [
      "1959",
      "The Soldiers of Pancho Villa",
      "La cucaracha",
      "Ismael Rodríguez",
      "es",
      "MX",
      "1h 37m",
      "https://www.imdb.com/title/tt0051504/"
   ],
   [
      "1959",
      "Lajwanti",
      "",
      "Narendra Suri",
      "hi",
      "IN",
      "2h",
      "https://www.imdb.com/title/tt0051842/"
   ],
   [
      "1959",
      "The 400 Blows",
      "Les quatre cents coups",
      "François Truffaut",
      "fr,en",
      "FR",
      "1h 39m",
      "https://www.imdb.com/title/tt0053198/"
   ],
   [
      "1959",
      "Honeymoon",
      "Luna de miel",
      "Michael Powell",
      "en,es",
      "GB,ES",
      "1h 49m",
      "https://www.imdb.com/title/tt0053023/"
   ],
   [
      "1959",
      "Bloody Twilight",
      "Matomeno iliovasilemma",
      "Andreas Labrinos",
      "el",
      "GR",
      "1h 28m",
      "https://www.imdb.com/title/tt0256920/"
   ],
   [
      "1959",
      "Middle of the Night",
      "",
      "Delbert Mann",
      "en",
      "US",
      "1h 58m",
      "https://www.imdb.com/title/tt0053065/"
   ],
   [
      "1959",
      "Nazarín",
      "",
      "Luis Buñuel",
      "es",
      "MX",
      "1h 34m",
      "https://www.imdb.com/title/tt0051983/"
   ],
   [
      "1959",
      "Black Orpheus",
      "Orfeu Negro",
      "Marcel Camus",
      "pt",
      "BR,FR,IT",
      "1h 40m",
      "https://www.imdb.com/title/tt0053146/"
   ],
   [
      "1959",
      "A Home for Tanya",
      "Otchiy dom",
      "Lev Kulidzhanov",
      "ru",
      "SU",
      "1h 40m",
      "https://www.imdb.com/title/tt0053151/"
   ],
   [
      "1959",
      "Policarpo",
      "Policarpo 'ufficiale di scrittura'",
      "Mario Soldati",
      "it",
      "IT,FR,ES",
      "1h 44m",
      "https://www.imdb.com/title/tt0052078/"
   ],
   [
      "1959",
      "Portuguese Rhapsody",
      "Rapsódia Portuguesa",
      "João Mendes",
      "pt",
      "PT",
      "1h 26m",
      "https://www.imdb.com/title/tt0052118/"
   ],
   [
      "1959",
      "Room at the Top",
      "",
      "Jack Clayton",
      "en,fr",
      "GB",
      "1h 57m",
      "https://www.imdb.com/title/tt0053226/"
   ],
   [
      "1959",
      "A Midsummer Night's Dream",
      "Sen noci svatojánské",
      "Jirí Trnka",
      "cs",
      "CS",
      "1h 16m",
      "https://www.imdb.com/title/tt0053261/"
   ],
   [
      "1959",
      "The Snowy Heron",
      "Shirasagi",
      "Teinosuke Kinugasa",
      "ja",
      "JP",
      "1h 37m",
      "https://www.imdb.com/title/tt0052192/"
   ],
   [
      "1959",
      "Stars",
      "Sterne",
      "Konrad Wolf",
      "bg,de,el",
      "DD,BG",
      "1h 31m",
      "https://www.imdb.com/title/tt0053306/"
   ],
   [
      "1959",
      "The Sinner",
      "Tang fu yu sheng nu",
      "Shen Tien",
      "zh",
      "TW",
      "1h 30m",
      "https://www.imdb.com/title/tt11347488/"
   ],
   [
      "1959",
      "The Diary of Anne Frank",
      "",
      "George Stevens",
      "en,de",
      "US",
      "3h",
      "https://www.imdb.com/title/tt0052738/"
   ],
   [
      "1959",
      "Desire",
      "Touha",
      "Vojtech Jasný",
      "cs",
      "CS",
      "1h 35m",
      "https://www.imdb.com/title/tt0051533/"
   ],
   [
      "1959",
      "Train Without a Timetable",
      "Vlak bez voznog reda",
      "Veljko Bulajic",
      "sr",
      "YU",
      "2h 1m",
      "https://www.imdb.com/title/tt0170774/"
   ],
   [
      "1959",
      "Sugar Harvest",
      "Zafra",
      "Lucas Demare",
      "es",
      "AR",
      "1h 17m",
      "https://www.imdb.com/title/tt0052420/"
   ],
   [
      "1959",
      "Édes Anna",
      "",
      "Zoltán Fábri",
      "hu",
      "HU",
      "1h 24m",
      "https://www.imdb.com/title/tt0052438/"
   ],
   [
      "1960",
      "L'avventura",
      "",
      "Michelangelo Antonioni",
      "it,en,el",
      "IT,FR",
      "2h 24m",
      "https://www.imdb.com/title/tt0053619/"
   ],
   [
      "1960",
      "Ballad of a Soldier",
      "Ballada o soldate",
      "Grigoriy Chukhray",
      "ru",
      "SU",
      "1h 28m",
      "https://www.imdb.com/title/tt0052600/"
   ],
   [
      "1960",
      "Cidade Ameaçada",
      "",
      "Roberto Farias",
      "pt",
      "BR",
      "1h 44m",
      "https://www.imdb.com/title/tt0053713/"
   ],
   [
      "1960",
      "The Lady with the Dog",
      "Dama s sobachkoy",
      "Iosif Kheifits",
      "ru",
      "SU",
      "1h 23m",
      "https://www.imdb.com/title/tt0053746/"
   ],
   [
      "1960",
      "The Ninth Circle",
      "Deveti krug",
      "France Stiglic",
      "hr",
      "YU",
      "1h 47m",
      "https://www.imdb.com/title/tt0053764/"
   ],
   [
      "1960",
      "Home from the Hill",
      "",
      "Vincente Minnelli",
      "en",
      "US",
      "2h 30m",
      "https://www.imdb.com/title/tt0053917/"
   ],
   [
      "1960",
      "The Chasers",
      "Jakten",
      "Erik Løchen",
      "no",
      "NO",
      "1h 34m",
      "https://www.imdb.com/title/tt0052939/"
   ],
   [
      "1960",
      "The Virgin Spring",
      "Jungfrukällan",
      "Ingmar Bergman",
      "sv,de",
      "SE",
      "1h 29m",
      "https://www.imdb.com/title/tt0053976/"
   ],
   [
      "1960",
      "Odd Obsession",
      "Kagi",
      "Kon Ichikawa",
      "ja",
      "JP",
      "1h 36m",
      "https://www.imdb.com/title/tt0052957/"
   ],
   [
      "1960",
      "When the Woman Butts In",
      "Kam čert nemůže",
      "Zdenek Podskalský",
      "cs",
      "CS",
      "1h 20m",
      "https://www.imdb.com/title/tt0052958/"
   ],
   [
      "1960",
      "America as Seen by a Frenchman",
      "L'Amérique insolite",
      "François Reichenbach",
      "fr",
      "FR",
      "1h 30m",
      "https://www.imdb.com/title/tt0140808/"
   ],
   [
      "1960",
      "La dolce vita",
      "",
      "Federico Fellini",
      "it,en,fr,de",
      "IT,FR",
      "2h 54m",
      "https://www.imdb.com/title/tt0053779/"
   ],
   [
      "1960",
      "La Procesión",
      "",
      "Francis Lauric",
      "es",
      "AR",
      "1h 36m",
      "https://www.imdb.com/title/tt0293526/"
   ],
   [
      "1960",
      "The Hole",
      "Le trou",
      "Jacques Becker",
      "fr",
      "FR,IT",
      "2h 11m",
      "https://www.imdb.com/title/tt0054407/"
   ],
   [
      "1960",
      "The Delinquents",
      "Los golfos",
      "Carlos Saura",
      "es",
      "ES",
      "1h 20m",
      "https://www.imdb.com/title/tt0056034/"
   ],
   [
      "1960",
      "Macario",
      "",
      "Roberto Gavaldón",
      "es",
      "MX",
      "1h 31m",
      "https://www.imdb.com/title/tt0054042/"
   ],
   [
      "1960",
      "Seven Days... Seven Nights",
      "Moderato cantabile",
      "Peter Brook",
      "fr",
      "FR,IT",
      "1h 31m",
      "https://www.imdb.com/title/tt0054091/"
   ],
   [
      "1960",
      "Never on Sunday",
      "Pote tin Kyriaki",
      "Jules Dassin",
      "en,el,ru",
      "GR",
      "1h 31m",
      "https://www.imdb.com/title/tt0054198/"
   ],
   [
      "1960",
      "Letter Never Sent",
      "Neotpravlennoye pismo",
      "Mikhail Kalatozov",
      "ru",
      "SU",
      "1h 36m",
      "https://www.imdb.com/title/tt0053106/"
   ],
   [
      "1960",
      "The Savage Innocents",
      "",
      "Nicholas Ray",
      "en",
      "IT,FR,GB",
      "1h 50m",
      "https://www.imdb.com/title/tt0053244/"
   ],
   [
      "1960",
      "First Lesson",
      "Parvi urok",
      "Rangel Vulchanov",
      "bg",
      "BG,SU",
      "1h 38m",
      "https://www.imdb.com/title/tt0176006/"
   ],
   [
      "1960",
      "Paw",
      "",
      "Astrid Henning-Jensen",
      "da",
      "DK",
      "1h 33m",
      "https://www.imdb.com/title/tt0053158/"
   ],
   [
      "1960",
      "If the Wind Frightens You",
      "Si le vent te fait peur",
      "Emile Degelin",
      "fr",
      "BE",
      "1h 23m",
      "https://www.imdb.com/title/tt0192741/"
   ],
   [
      "1960",
      "Sons and Lovers",
      "",
      "Jack Cardiff",
      "en",
      "GB",
      "1h 43m",
      "https://www.imdb.com/title/tt0054326/"
   ],
   [
      "1960",
      "Sujata",
      "",
      "Bimal Roy",
      "hi",
      "IN",
      "2h 41m",
      "https://www.imdb.com/title/tt0053319/"
   ],
   [
      "1960",
      "The Enchanting Shadow",
      "Ching nu yu hun",
      "Han Hsiang Li",
      "zh",
      "HK",
      "1h 23m",
      "https://www.imdb.com/title/tt0059029/"
   ],
   [
      "1960",
      "Telegrame",
      "",
      "Aurel Miheles, Gheorghe Naghi",
      "ro",
      "RO",
      "1h 16m",
      "https://www.imdb.com/title/tt0053339/"
   ],
   [
      "1960",
      "The Young One",
      "",
      "Luis Buñuel",
      "en",
      "MX",
      "1h 36m",
      "https://www.imdb.com/title/tt0053967/"
   ],
   [
      "1960",
      "Bad Luck",
      "Zezowate szczescie",
      "Andrzej Munk",
      "pl",
      "PL",
      "1h 32m",
      "https://www.imdb.com/title/tt0054495/"
   ],
   [
      "1961",
      "The First Mass",
      "A Primeira Missa",
      "Lima Barreto",
      "pt",
      "BR",
      "1h 30m",
      "https://www.imdb.com/title/tt0055326/"
   ],
   [
      "1961",
      "A Raisin in the Sun",
      "",
      "Daniel Petrie",
      "en",
      "US",
      "2h 8m",
      "https://www.imdb.com/title/tt0055353/"
   ],
   [
      "1961",
      "Goodbye Again",
      "Aimez-vous Brahms?",
      "Anatole Litvak",
      "en,fr",
      "FR,US",
      "2h",
      "https://www.imdb.com/title/tt0054936/"
   ],
   [
      "1961",
      "The Joy of Living",
      "Che gioia vivere",
      "René Clément",
      "it,en,fr",
      "IT,FR",
      "2h 12m",
      "https://www.imdb.com/title/tt0053707/"
   ],
   [
      "1961",
      "The Fourteenth Day",
      "Dan cetrnaesti",
      "Zdravko Velimirovic",
      "sr",
      "YU",
      "1h 41m",
      "https://www.imdb.com/title/tt0053747/"
   ],
   [
      "1961",
      "Darclée",
      "",
      "Mihai Iacob",
      "ro",
      "RO",
      "1h 50m",
      "https://www.imdb.com/title/tt0054786/"
   ],
   [
      "1961",
      "The Last Witness",
      "Der letzte Zeuge",
      "Wolfgang Staudte",
      "de",
      "DE",
      "1h 42m",
      "https://www.imdb.com/title/tt0054025/"
   ],
   [
      "1961",
      "The Judge",
      "Domaren",
      "Alf Sjöberg",
      "sv",
      "SE",
      "1h 52m",
      "https://www.imdb.com/title/tt0053781/"
   ],
   [
      "1961",
      "The Brute",
      "Dúvad",
      "Zoltán Fábri",
      "hu",
      "HU",
      "1h 36m",
      "https://www.imdb.com/title/tt0052768/"
   ],
   [
      "1961",
      "That Forward Center Died at Dawn",
      "El centroforward murió al amanecer",
      "René Múgica",
      "es",
      "AR",
      "1h 20m",
      "https://www.imdb.com/title/tt0193048/"
   ],
   [
      "1961",
      "The Knife",
      "Het mes",
      "Fons Rademakers",
      "nl",
      "NL",
      "1h 29m",
      "https://www.imdb.com/title/tt0055168/"
   ],
   [
      "1961",
      "I Like Mike",
      "",
      "Peter Frye",
      "he",
      "IL",
      "2h",
      "https://www.imdb.com/title/tt0137009/"
   ],
   [
      "1961",
      "Two Women",
      "La ciociara",
      "Vittorio De Sica",
      "it,de,en",
      "IT,FR",
      "1h 41m",
      "https://www.imdb.com/title/tt0054749/"
   ],
   [
      "1961",
      "The Hand in the Trap",
      "La mano en la trampa",
      "Leopoldo Torre Nilsson",
      "es",
      "AR,ES",
      "1h 31m",
      "https://www.imdb.com/title/tt0055138/"
   ],
   [
      "1961",
      "Girl with a Suitcase",
      "La ragazza con la valigia",
      "Valerio Zurlini",
      "it",
      "IT,FR",
      "2h 1m",
      "https://www.imdb.com/title/tt0054225/"
   ],
   [
      "1961",
      "The Lovemakers",
      "La viaccia",
      "Mauro Bolognini",
      "it",
      "IT,FR",
      "1h 42m",
      "https://www.imdb.com/title/tt0056657/"
   ],
   [
      "1961",
      "Sky Above and Mud Beneath",
      "Le ciel et la boue",
      "Pierre-Dominique Gaisseau",
      "fr",
      "FR,LI",
      "1h 32m",
      "https://www.imdb.com/title/tt0053714/"
   ],
   [
      "1961",
      "The Cossacks",
      "",
      "Vasili Pronin",
      "ru",
      "SU",
      "1h 37m",
      "https://www.imdb.com/title/tt0174810/"
   ],
   [
      "1961",
      "Madalena",
      "",
      "Dinos Dimopoulos",
      "el",
      "GR",
      "1h 31m",
      "https://www.imdb.com/title/tt0055119/"
   ],
   [
      "1961",
      "Mother Joan of the Angels",
      "Matka Joanna od Aniolów",
      "Jerzy Kawalerowicz",
      "pl",
      "PL",
      "1h 50m",
      "https://www.imdb.com/title/tt0055153/"
   ],
   [
      "1961",
      "Her Brother",
      "Otôto",
      "Kon Ichikawa",
      "ja",
      "JP",
      "1h 38m",
      "https://www.imdb.com/title/tt0054151/"
   ],
   [
      "1961",
      "A Song About the Gray Pigeon",
      "Piesen o sivom holubovi",
      "Stanislav Barabas",
      "de,ru,sk",
      "CS",
      "1h 38m",
      "https://www.imdb.com/title/tt0232416/"
   ],
   [
      "1961",
      "Plein sud",
      "",
      "Gaston De Gerlache",
      "fr",
      "BE",
      "1h 30m",
      "https://www.imdb.com/title/tt0318580/"
   ],
   [
      "1961",
      "Chronicle of Flaming Years",
      "Povest plamennykh let",
      "Yuliya Solntseva",
      "ru,de",
      "SU",
      "1h 31m",
      "https://www.imdb.com/title/tt0054199/"
   ],
   [
      "1961",
      "The Hoodlum Priest",
      "",
      "Irvin Kershner",
      "en",
      "US",
      "1h 41m",
      "https://www.imdb.com/title/tt0054991/"
   ],
   [
      "1961",
      "The Mark",
      "",
      "Guy Green",
      "en,fr",
      "GB",
      "2h 7m",
      "https://www.imdb.com/title/tt0055146/"
   ],
   [
      "1961",
      "The Passionate Demons",
      "Line",
      "Nils-Reinhardt Christensen",
      "no",
      "NO",
      "1h 30m",
      "https://www.imdb.com/title/tt0056184/"
   ],
   [
      "1961",
      "The Wastrel",
      "Il relitto",
      "Michael Cacoyannis",
      "en",
      "IT,CY",
      "1h 24m",
      "https://www.imdb.com/title/tt0055364/"
   ],
   [
      "1961",
      "The Long Absence",
      "Une aussi longue absence",
      "Henri Colpi",
      "fr",
      "FR,IT",
      "1h 34m",
      "https://www.imdb.com/title/tt0054426/"
   ],
   [
      "1961",
      "Viridiana",
      "",
      "Luis Buñuel",
      "es,en",
      "MX,ES",
      "1h 31m",
      "https://www.imdb.com/title/tt0055601/"
   ],
   [
      "1962",
      "A Taste of Honey",
      "",
      "Tony Richardson",
      "en",
      "GB",
      "1h 41m",
      "https://www.imdb.com/title/tt0055506/"
   ],
   [
      "1962",
      "Advise & Consent",
      "",
      "Otto Preminger",
      "en",
      "US",
      "2h 19m",
      "https://www.imdb.com/title/tt0055728/"
   ],
   [
      "1962",
      "All Fall Down",
      "",
      "John Frankenheimer",
      "en",
      "US",
      "1h 51m",
      "https://www.imdb.com/title/tt0055738/"
   ],
   [
      "1962",
      "Âmes et rythmes",
      "",
      "Abdelaziz Ramdani",
      "ar",
      "MA",
      "1h 30m",
      "https://www.imdb.com/title/tt0878722/"
   ],
   [
      "1962",
      "Joseph the Dreamer",
      "Ba'al Hahalomot",
      "Alina Gross, Yoram Gross",
      "he",
      "IL",
      "1h 20m",
      "https://www.imdb.com/title/tt0056125/"
   ],
   [
      "1962",
      "Cléo from 5 to 7",
      "Cléo de 5 à 7",
      "Agnès Varda",
      "fr",
      "FR,IT",
      "1h 30m",
      "https://www.imdb.com/title/tt0055852/"
   ],
   [
      "1962",
      "Foundry Town",
      "Kyûpora no aru machi",
      "Kiriô Urayama",
      "ja",
      "JP",
      "1h 39m",
      "https://www.imdb.com/title/tt0228499/"
   ],
   [
      "1962",
      "The Bread of Those Early Years",
      "Das Brot der frühen Jahre",
      "Herbert Vesely",
      "de",
      "DE",
      "1h 24m",
      "https://www.imdb.com/title/tt0054705/"
   ],
   [
      "1962",
      "The Goddess",
      "Devi",
      "Satyajit Ray",
      "bn",
      "IN",
      "1h 33m",
      "https://www.imdb.com/title/tt0053765/"
   ],
   [
      "1962",
      "Divorce Italian Style",
      "Divorzio all'italiana",
      "Pietro Germi",
      "it",
      "IT",
      "1h 45m",
      "https://www.imdb.com/title/tt0055913/"
   ],
   [
      "1962",
      "The Impossible Goodbye",
      "Dom bez okien",
      "Stanislaw Jedryka",
      "pl",
      "PL",
      "1h 38m",
      "https://www.imdb.com/title/tt0055918/"
   ],
   [
      "1962",
      "And Love Has Vanished",
      "Dvoje",
      "Aleksandar Petrovic",
      "sr",
      "YU",
      "1h 28m",
      "https://www.imdb.com/title/tt0124452/"
   ],
   [
      "1962",
      "The Exterminating Angel",
      "El ángel exterminador",
      "Luis Buñuel",
      "es",
      "MX",
      "1h 35m",
      "https://www.imdb.com/title/tt0056732/"
   ],
   [
      "1962",
      "Elektra",
      "Ilektra",
      "Michael Cacoyannis",
      "el",
      "GR",
      "1h 50m",
      "https://www.imdb.com/title/tt0055950/"
   ],
   [
      "1962",
      "Harry and the Butler",
      "Harry og kammertjeneren",
      "Bent Christensen",
      "da",
      "DK",
      "1h 45m",
      "https://www.imdb.com/title/tt0054965/"
   ],
   [
      "1962",
      "In the Steps of Buddha",
      "",
      "Pragnasoma Hettiarachi",
      "ta",
      "LK",
      "1h",
      "https://www.imdb.com/title/tt11352386/"
   ],
   [
      "1962",
      "Adorable Julia",
      "Julia, du bist zauberhaft",
      "Alfred Weidenmann",
      "de",
      "AT,FR",
      "1h 37m",
      "https://www.imdb.com/title/tt0056129/"
   ],
   [
      "1962",
      "When the Trees Were Tall",
      "Kogda derevya byli bolshimi",
      "Lev Kulidzhanov",
      "ru",
      "SU",
      "1h 35m",
      "https://www.imdb.com/title/tt0055051/"
   ],
   [
      "1962",
      "Konga Yo",
      "",
      "Yves Allégret",
      "fr",
      "FR,CG",
      "1h 48m",
      "https://www.imdb.com/title/tt0056569/"
   ],
   [
      "1962",
      "L'eclisse",
      "",
      "Michelangelo Antonioni",
      "it,en",
      "IT,FR",
      "2h 6m",
      "https://www.imdb.com/title/tt0056736/"
   ],
   [
      "1962",
      "The Small Stranger",
      "Al gharib al saghir",
      "Georges Nasser",
      "ar",
      "EG",
      "1h 40m",
      "https://www.imdb.com/title/tt0252470/"
   ],
   [
      "1962",
      "The Lovers of Teruel",
      "Les Amants de Teruel",
      "Raymond Rouleau",
      "fr",
      "FR",
      "1h 30m",
      "https://www.imdb.com/title/tt0197227/"
   ],
   [
      "1962",
      "Children of the Sun",
      "",
      "Jacques Séverac",
      "ar",
      "MA,FR",
      "3h 5m",
      "https://www.imdb.com/title/tt0255054/"
   ],
   [
      "1962",
      "Liberté 1",
      "",
      "Yves Ciampi",
      "fr",
      "FR,SN",
      "1h 29m",
      "https://www.imdb.com/title/tt0056178/"
   ],
   [
      "1962",
      "Long Day's Journey Into Night",
      "",
      "Sidney Lumet",
      "en",
      "US",
      "2h 54m",
      "https://www.imdb.com/title/tt0056196/"
   ],
   [
      "1962",
      "A Dog's Life",
      "Mondo cane",
      "Paolo Cavara, Gualtiero Jacopetti, Franco Prosperi",
      "it",
      "IT",
      "1h 48m",
      "https://www.imdb.com/title/tt0057318/"
   ],
   [
      "1962",
      "The Man from the First Century",
      "Muz z prvního století",
      "Oldrich Lipský",
      "cs",
      "CS",
      "1h 36m",
      "https://www.imdb.com/title/tt0056265/"
   ],
   [
      "1962",
      "O Pagador de Promessas",
      "",
      "Anselmo Duarte",
      "pt",
      "BR",
      "1h 38m",
      "https://www.imdb.com/title/tt0056322/"
   ],
   [
      "1962",
      "Plácido",
      "",
      "Luis García Berlanga",
      "es",
      "ES",
      "1h 25m",
      "https://www.imdb.com/title/tt0055310/"
   ],
   [
      "1962",
      "Captive Flock",
      "Pleneno yato",
      "Ducho Mundrov",
      "bg",
      "BG",
      "1h 31m",
      "https://www.imdb.com/title/tt0253488/"
   ],
   [
      "1962",
      "The Trial of Joan of Arc",
      "Procès de Jeanne d'Arc",
      "Robert Bresson",
      "fr,en",
      "FR",
      "1h 4m",
      "https://www.imdb.com/title/tt0059616/"
   ],
   [
      "1962",
      "A Bomb Was Stolen",
      "S-a furat o bomba",
      "Ion Popescu-Gopo",
      "",
      "RO",
      "1h 14m",
      "https://www.imdb.com/title/tt0131571/"
   ],
   [
      "1962",
      "The Female: Seventy Times Seven",
      "Setenta veces siete",
      "Leopoldo Torre Nilsson",
      "es",
      "AR",
      "1h 32m",
      "https://www.imdb.com/title/tt0056471/"
   ],
   [
      "1962",
      "The Innocents",
      "",
      "Jack Clayton",
      "en",
      "GB",
      "1h 40m",
      "https://www.imdb.com/title/tt0055018/"
   ],
   [
      "1962",
      "The Magnificent Concubine",
      "Yang Gui Fei",
      "Han Hsiang Li",
      "zh",
      "HK",
      "1h 43m",
      "https://www.imdb.com/title/tt0058760/"
   ],
   [
      "1963",
      "Like Two Drops of Water",
      "Als twee druppels water",
      "Fons Rademakers",
      "nl,de",
      "NL",
      "1h 59m",
      "https://www.imdb.com/title/tt0056823/"
   ],
   [
      "1963",
      "Alvorada",
      "",
      "Hugo Niebeling",
      "de",
      "DE,FR,BR",
      "1h 17m",
      "https://www.imdb.com/title/tt0055742/"
   ],
   [
      "1963",
      "The Cassandra Cat",
      "Az prijde kocour",
      "Vojtech Jasný",
      "cs",
      "CS",
      "1h 44m",
      "https://www.imdb.com/title/tt0056844/"
   ],
   [
      "1963",
      "Carom Shots",
      "Carambolages",
      "Marcel Bluwal",
      "fr",
      "FR",
      "1h 28m",
      "https://www.imdb.com/title/tt0056906/"
   ],
   [
      "1963",
      "Codine",
      "",
      "Henri Colpi",
      "fr,ro",
      "FR,RO",
      "1h 38m",
      "https://www.imdb.com/title/tt0129831/"
   ],
   [
      "1963",
      "The Good Love",
      "El buen amor",
      "Francisco Regueiro",
      "es,fr",
      "ES",
      "1h 30m",
      "https://www.imdb.com/title/tt0056889/"
   ],
   [
      "1963",
      "El otro Cristóbal",
      "",
      "Armand Gatti",
      "es",
      "CU,FR",
      "1h 55m",
      "https://www.imdb.com/title/tt0309967/"
   ],
   [
      "1963",
      "I fidanzati",
      "",
      "Ermanno Olmi",
      "it",
      "IT",
      "1h 17m",
      "https://www.imdb.com/title/tt0055981/"
   ],
   [
      "1963",
      "The Leopard",
      "Il gattopardo",
      "Luchino Visconti",
      "it,fr",
      "IT,FR",
      "3h 6m",
      "https://www.imdb.com/title/tt0057091/"
   ],
   [
      "1963",
      "How to Be Loved",
      "Jak byc kochana",
      "Wojciech Has",
      "pl,de,fr",
      "PL",
      "1h 32m",
      "https://www.imdb.com/title/tt0057196/"
   ],
   [
      "1963",
      "A Cozy Cottage",
      "Kertes házak utcája",
      "Tamás Fejér",
      "hu",
      "HU",
      "1h 20m",
      "https://www.imdb.com/title/tt0056137/"
   ],
   [
      "1963",
      "The Conjugal Bed",
      "L'ape regina",
      "Marco Ferreri",
      "it",
      "IT,FR",
      "1h 30m",
      "https://www.imdb.com/title/tt0057532/"
   ],
   [
      "1963",
      "The Cage",
      "La cage",
      "Robert Darène",
      "fr",
      "GA,FR",
      "1h 25m",
      "https://www.imdb.com/title/tt0194730/"
   ],
   [
      "1963",
      "Empress Wu Tse-Tien",
      "Wu Ze Tian",
      "Han Hsiang Li",
      "zh",
      "HK",
      "2h",
      "https://www.imdb.com/title/tt0054486/"
   ],
   [
      "1963",
      "Rat Trap",
      "Le rat d'Amérique",
      "Jean-Gabriel Albicocco",
      "fr",
      "FR,IT",
      "1h 34m",
      "https://www.imdb.com/title/tt0056395/"
   ],
   [
      "1963",
      "Les Abysses",
      "",
      "Nikos Papatakis",
      "fr",
      "FR",
      "1h 30m",
      "https://www.imdb.com/title/tt0188388/"
   ],
   [
      "1963",
      "Lord of the Flies",
      "",
      "Peter Brook",
      "en",
      "GB",
      "1h 32m",
      "https://www.imdb.com/title/tt0057261/"
   ],
   [
      "1963",
      "The Venerable Ones",
      "Los venerables todos",
      "Manuel Antin",
      "es",
      "AR",
      "1h 25m",
      "https://www.imdb.com/title/tt0121848/"
   ],
   [
      "1963",
      "Optimistic Tragedy",
      "Optimisticheskaya tragediya",
      "Samson Samsonov",
      "ru",
      "SU",
      "2h",
      "https://www.imdb.com/title/tt0057388/"
   ],
   [
      "1963",
      "Glory Sky",
      "Ouranos",
      "Takis Kanellopoulos",
      "el",
      "GR",
      "1h 27m",
      "https://www.imdb.com/title/tt0196817/"
   ],
   [
      "1963",
      "Of Whales, the Moon, and Men",
      "Pour la suite du monde",
      "Michel Brault, Pierre Perrault",
      "fr",
      "CA",
      "1h 45m",
      "https://www.imdb.com/title/tt0057423/"
   ],
   [
      "1963",
      "Harakiri",
      "Seppuku",
      "Masaki Kobayashi",
      "ja",
      "JP",
      "2h 13m",
      "https://www.imdb.com/title/tt0056058/"
   ],
   [
      "1963",
      "This Sporting Life",
      "",
      "Lindsay Anderson",
      "en",
      "GB",
      "2h 14m",
      "https://www.imdb.com/title/tt0057578/"
   ],
   [
      "1963",
      "To Kill a Mockingbird",
      "",
      "Robert Mulligan",
      "en",
      "US",
      "2h 9m",
      "https://www.imdb.com/title/tt0056592/"
   ],
   [
      "1963",
      "Tobacco",
      "Tyutyun",
      "Nikola Korabov",
      "bg",
      "BG,SU",
      "2h 30m",
      "https://www.imdb.com/title/tt0173374/"
   ],
   [
      "1963",
      "What Ever Happened to Baby Jane?",
      "",
      "Robert Aldrich",
      "en",
      "US",
      "2h 14m",
      "https://www.imdb.com/title/tt0056687/"
   ],
   [
      "1964",
      "Greed in the Sun",
      "Cent mille dollars au soleil",
      "Henri Verneuil",
      "fr,ar",
      "FR,IT",
      "2h 10m",
      "https://www.imdb.com/title/tt0056917/"
   ],
   [
      "1964",
      "Black God, White Devil",
      "Deus e o Diabo na Terra do Sol",
      "Glauber Rocha",
      "pt",
      "BR",
      "2h",
      "https://www.imdb.com/title/tt0058006/"
   ],
   [
      "1964",
      "Dead Woman from Beverly Hills",
      "Die Tote von Beverly Hills",
      "Michael Pfleghar",
      "de",
      "DE",
      "1h 50m",
      "https://www.imdb.com/title/tt0058673/"
   ],
   [
      "1964",
      "Last Night",
      "El-Lailah el-Akhirah",
      "Kamal El-Shaikh",
      "ar",
      "EG",
      "2h",
      "https://www.imdb.com/title/tt0373080/"
   ],
   [
      "1964",
      "The Red Lanterns",
      "Ta kokkina fanaria",
      "Vasilis Georgiadis",
      "el,en",
      "GR",
      "2h 12m",
      "https://www.imdb.com/title/tt0057229/"
   ],
   [
      "1964",
      "The Cry",
      "Krik",
      "Jaromil Jires",
      "cs",
      "CS",
      "1h 20m",
      "https://www.imdb.com/title/tt0122574/"
   ],
   [
      "1964",
      "Raven's End",
      "Kvarteret Korpen",
      "Bo Widerberg",
      "sv",
      "SE",
      "1h 41m",
      "https://www.imdb.com/title/tt0057237/"
   ],
   [
      "1964",
      "The White Caravan",
      "Tetri karavani",
      "Tamaz Meliava, Eldar Shengelaia",
      "ka,ru",
      "SU",
      "1h 33m",
      "https://www.imdb.com/title/tt0175238/"
   ],
   [
      "1964",
      "The Ape Woman",
      "La donna scimmia",
      "Marco Ferreri",
      "it",
      "IT,FR",
      "1h 33m",
      "https://www.imdb.com/title/tt0057006/"
   ],
   [
      "1964",
      "The Girl in Mourning",
      "La niña de luto",
      "Manuel Summers",
      "es",
      "ES",
      "1h 25m",
      "https://www.imdb.com/title/tt0058411/"
   ],
   [
      "1964",
      "The Soft Skin",
      "La peau douce",
      "François Truffaut",
      "fr,pt,en",
      "FR",
      "1h 53m",
      "https://www.imdb.com/title/tt0058458/"
   ],
   [
      "1964",
      "The Umbrellas of Cherbourg",
      "",
      "Jacques Demy",
      "fr,en",
      "FR,DE",
      "1h 31m",
      "https://www.imdb.com/title/tt0058450/"
   ],
   [
      "1964",
      "Mujhe Jeene Do",
      "",
      "Moni Bhattacharjee",
      "hi,ur,bho,en",
      "IN",
      "1h 35m",
      "https://www.imdb.com/title/tt0057332/"
   ],
   [
      "1964",
      "One Potato, Two Potato",
      "",
      "Larry Peerce",
      "en",
      "US",
      "1h 23m",
      "https://www.imdb.com/title/tt0058429/"
   ],
   [
      "1964",
      "Drama of the Lark",
      "Pacsirta",
      "László Ranódy",
      "hu",
      "HU",
      "1h 33m",
      "https://www.imdb.com/title/tt0057394/"
   ],
   [
      "1964",
      "Passenger",
      "Pasazerka",
      "Andrzej Munk, Witold Lesiewicz",
      "pl",
      "PL",
      "1h 2m",
      "https://www.imdb.com/title/tt0054159/"
   ],
   [
      "1964",
      "Me First",
      "Primero yo",
      "Fernando Ayala",
      "es",
      "AR",
      "1h 30m",
      "https://www.imdb.com/title/tt0179429/"
   ],
   [
      "1964",
      "Walking the Streets of Moscow",
      "Ya shagayu po Moskve",
      "Georgiy Daneliya",
      "ru,en",
      "SU",
      "1h 18m",
      "https://www.imdb.com/title/tt0057694/"
   ],
   [
      "1964",
      "Seduced and Abandoned",
      "Sedotta e abbandonata",
      "Pietro Germi",
      "it",
      "IT,FR",
      "1h 58m",
      "https://www.imdb.com/title/tt0058564/"
   ],
   [
      "1964",
      "Woman in the Dunes",
      "Suna no onna",
      "Hiroshi Teshigahara",
      "ja",
      "JP",
      "2h 27m",
      "https://www.imdb.com/title/tt0058625/"
   ],
   [
      "1964",
      "Alone Across the Pacific",
      "Taiheiyô hitoribotchi",
      "Kon Ichikawa",
      "ja,en",
      "JP",
      "1h 44m",
      "https://www.imdb.com/title/tt0057553/"
   ],
   [
      "1964",
      "The Pumpkin Eater",
      "",
      "Jack Clayton",
      "en",
      "GB",
      "1h 58m",
      "https://www.imdb.com/title/tt0058500/"
   ],
   [
      "1964",
      "The Visit",
      "",
      "Bernhard Wicki",
      "en,fr",
      "US,IT,FR,DE",
      "1h 40m",
      "https://www.imdb.com/title/tt0058724/"
   ],
   [
      "1964",
      "The World of Henry Orient",
      "",
      "George Roy Hill",
      "en,it,fr",
      "US",
      "1h 46m",
      "https://www.imdb.com/title/tt0058756/"
   ],
   [
      "1964",
      "Vidas Secas",
      "",
      "Nelson Pereira dos Santos",
      "pt",
      "BR",
      "1h 43m",
      "https://www.imdb.com/title/tt0057654/"
   ],
   [
      "1965",
      "Loving Couples",
      "Älskande par",
      "Mai Zetterling",
      "sv",
      "SE",
      "1h 58m",
      "https://www.imdb.com/title/tt0058780/"
   ],
   [
      "1965",
      "Clay",
      "",
      "Giorgio Mangiamele",
      "en",
      "AU",
      "1h 25m",
      "https://www.imdb.com/title/tt0059040/"
   ],
   [
      "1965",
      "The Sin",
      "El haram",
      "Henry Barakat",
      "ar",
      "EG",
      "1h 45m",
      "https://www.imdb.com/title/tt0355521/"
   ],
   [
      "1965",
      "Snakes and Ladders",
      "El juego de la oca",
      "Manuel Summers",
      "es",
      "ES",
      "1h 52m",
      "https://www.imdb.com/title/tt0059340/"
   ],
   [
      "1965",
      "The Amphitheatre",
      "El reñidero",
      "René Múgica",
      "es",
      "AR",
      "1h 13m",
      "https://www.imdb.com/title/tt0320366/"
   ],
   [
      "1965",
      "A Girl Danced Into His Life",
      "Az életbe táncoltatott leány",
      "Tamás Banovich",
      "hu",
      "HU",
      "1h 20m",
      "https://www.imdb.com/title/tt0058786/"
   ],
   [
      "1965",
      "Circus Angel",
      "Fifi la plume",
      "Albert Lamorisse",
      "fr",
      "FR",
      "1h 15m",
      "https://www.imdb.com/title/tt0059177/"
   ],
   [
      "1965",
      "There Was an Old Couple",
      "Zhili-byli starik so starukhoy",
      "Grigoriy Chukhray",
      "ru",
      "SU",
      "2h 19m",
      "https://www.imdb.com/title/tt0059946/"
   ],
   [
      "1965",
      "Torrid Noon",
      "Goreshto pladne",
      "Zako Heskiya",
      "bg",
      "BG",
      "1h 29m",
      "https://www.imdb.com/title/tt0276986/"
   ],
   [
      "1965",
      "The Moment of Truth",
      "Il momento della verità",
      "Francesco Rosi",
      "it,en",
      "IT,ES",
      "1h 50m",
      "https://www.imdb.com/title/tt0059459/"
   ],
   [
      "1965",
      "Zhavoronok",
      "",
      "Nikita Kurikhin, Leonid Menaker",
      "ru",
      "SU",
      "1h 31m",
      "https://www.imdb.com/title/tt0314947/"
   ],
   [
      "1965",
      "Kwaidan",
      "Kaidan",
      "Masaki Kobayashi",
      "ja",
      "JP",
      "3h 3m",
      "https://www.imdb.com/title/tt0058279/"
   ],
   [
      "1965",
      "The 317th Platoon",
      "La 317ème section",
      "Pierre Schoendoerffer",
      "fr,vi",
      "FR,ES",
      "1h 40m",
      "https://www.imdb.com/title/tt0058863/"
   ],
   [
      "1965",
      "The Uninhibited",
      "Los pianos mecánicos",
      "Juan Antonio Bardem",
      "es",
      "ES,FR,IT",
      "1h 34m",
      "https://www.imdb.com/title/tt0059589/"
   ],
   [
      "1965",
      "My Home Is Copacabana",
      "Mitt hem är Copacabana",
      "Arne Sucksdorff",
      "sv,pt",
      "SE",
      "1h 28m",
      "https://www.imdb.com/title/tt0059456/"
   ],
   [
      "1965",
      "Men and Women",
      "Noite Vazia",
      "Walter Hugo Khouri",
      "pt",
      "BR",
      "1h 33m",
      "https://www.imdb.com/title/tt0189814/"
   ],
   [
      "1965",
      "The Shop on Main Street",
      "",
      "Ján Kadár, Elmar Klos",
      "sk,yi,de",
      "CS",
      "2h 8m",
      "https://www.imdb.com/title/tt0059527/"
   ],
   [
      "1965",
      "The Forest of the Hanged",
      "Padurea spânzuratilor",
      "Liviu Ciulei",
      "ro",
      "RO",
      "2h 34m",
      "https://www.imdb.com/title/tt0058439/"
   ],
   [
      "1965",
      "The First Day of Freedom",
      "Pierwszy dzien wolnosci",
      "Aleksander Ford",
      "pl,ru",
      "PL",
      "1h 29m",
      "https://www.imdb.com/title/tt0059593/"
   ],
   [
      "1965",
      "Prodosia",
      "",
      "Kostas Manoussakis",
      "el",
      "GR",
      "1h 36m",
      "https://www.imdb.com/title/tt0135616/"
   ],
   [
      "1965",
      "Always Further On",
      "Tarahumara (Cada vez más lejos)",
      "Luis Alcoriza",
      "es",
      "MX",
      "1h 45m",
      "https://www.imdb.com/title/tt0058637/"
   ],
   [
      "1965",
      "The Collector",
      "",
      "William Wyler",
      "en",
      "GB,US",
      "1h 59m",
      "https://www.imdb.com/title/tt0059043/"
   ],
   [
      "1965",
      "The Hill",
      "",
      "Sidney Lumet",
      "en",
      "GB",
      "2h 3m",
      "https://www.imdb.com/title/tt0059274/"
   ],
   [
      "1965",
      "The Ipcress File",
      "",
      "Sidney J. Furie",
      "en,sq",
      "GB",
      "1h 49m",
      "https://www.imdb.com/title/tt0059319/"
   ],
   [
      "1965",
      "The Knack ...and How to Get It",
      "",
      "Richard Lester",
      "en",
      "GB",
      "1h 25m",
      "https://www.imdb.com/title/tt0059362/"
   ],
   [
      "1965",
      "Yoyo",
      "",
      "Pierre Étaix",
      "fr",
      "FR",
      "1h 32m",
      "https://www.imdb.com/title/tt0059934/"
   ],
   [
      "1966",
      "The Hour and Turn of Augusto Matraga",
      "A Hora e Vez de Augusto Matraga",
      "Roberto Santos",
      "pt",
      "BR",
      "1h 49m",
      "https://www.imdb.com/title/tt0059281/"
   ],
   [
      "1966",
      "Alfie",
      "",
      "Lewis Gilbert",
      "en",
      "GB",
      "1h 54m",
      "https://www.imdb.com/title/tt0060086/"
   ],
   [
      "1966",
      "Hello, That's Me!",
      "Barev, yes em",
      "Frunze Dovlatyan",
      "ru,ar",
      "SU",
      "2h 17m",
      "https://www.imdb.com/title/tt0059943/"
   ],
   [
      "1966",
      "Chimes at Midnight",
      "Campanadas a medianoche",
      "Orson Welles",
      "en",
      "ES,CH,US",
      "1h 59m",
      "https://www.imdb.com/title/tt0059012/"
   ],
   [
      "1966",
      "With the East Wind",
      "Con el viento solano",
      "Mario Camus",
      "es",
      "ES",
      "1h 27m",
      "https://www.imdb.com/title/tt0059052/"
   ],
   [
      "1966",
      "Young Törless",
      "Der junge Törless",
      "Volker Schlöndorff",
      "de",
      "DE,FR",
      "1h 27m",
      "https://www.imdb.com/title/tt0060574/"
   ],
   [
      "1966",
      "Doctor Zhivago",
      "",
      "David Lean",
      "en,ru,fr",
      "IT,GB,US",
      "3h 17m",
      "https://www.imdb.com/title/tt0059113/"
   ],
   [
      "1966",
      "Dýmky",
      "",
      "Vojtech Jasný",
      "cs",
      "CS,AT",
      "1h 25m",
      "https://www.imdb.com/title/tt0060829/"
   ],
   [
      "1966",
      "Es",
      "",
      "Ulrich Schamoni",
      "de",
      "DE",
      "1h 26m",
      "https://www.imdb.com/title/tt0059153/"
   ],
   [
      "1966",
      "Pharaoh",
      "Faraon",
      "Jerzy Kawalerowicz",
      "pl",
      "PL",
      "3h",
      "https://www.imdb.com/title/tt0060401/"
   ],
   [
      "1966",
      "L'armata Brancaleone",
      "",
      "Mario Monicelli",
      "it",
      "IT,FR,ES",
      "2h",
      "https://www.imdb.com/title/tt0060125/"
   ],
   [
      "1966",
      "Lenin in Poland",
      "Lenin v Polshe",
      "Sergei Yutkevich",
      "ru",
      "SU,PL",
      "1h 38m",
      "https://www.imdb.com/title/tt0060625/"
   ],
   [
      "1966",
      "Mademoiselle",
      "",
      "Tony Richardson",
      "fr,en,it",
      "GB,FR",
      "1h 45m",
      "https://www.imdb.com/title/tt0060648/"
   ],
   [
      "1966",
      "Modesty Blaise",
      "",
      "Joseph Losey",
      "en,fr,it,ar,de,nl",
      "GB",
      "1h 59m",
      "https://www.imdb.com/title/tt0060708/"
   ],
   [
      "1966",
      "Morgan: A Suitable Case for Treatment",
      "",
      "Karel Reisz",
      "en",
      "GB",
      "1h 37m",
      "https://www.imdb.com/title/tt0060714/"
   ],
   [
      "1966",
      "Ön",
      "",
      "Alf Sjöberg",
      "sv",
      "SE",
      "1h 47m",
      "https://www.imdb.com/title/tt0061227/"
   ],
   [
      "1966",
      "The Ashes",
      "Popioly",
      "Andrzej Wajda",
      "pl,fr,de,es",
      "PL",
      "3h 54m",
      "https://www.imdb.com/title/tt0060847/"
   ],
   [
      "1966",
      "Rascoala",
      "",
      "Mircea Muresan",
      "ro",
      "RO",
      "1h 40m",
      "https://www.imdb.com/title/tt0059634/"
   ],
   [
      "1966",
      "Seconds",
      "",
      "John Frankenheimer",
      "en",
      "US",
      "1h 46m",
      "https://www.imdb.com/title/tt0060955/"
   ],
   [
      "1966",
      "Signore & signori",
      "",
      "Pietro Germi",
      "it",
      "IT,FR",
      "1h 58m",
      "https://www.imdb.com/title/tt0062271/"
   ],
   [
      "1966",
      "Hunger",
      "Sult",
      "Henning Carlsen",
      "da,sv,no",
      "DK,NO,SE",
      "1h 52m",
      "https://www.imdb.com/title/tt0061042/"
   ],
   [
      "1966",
      "The Nun",
      "La religieuse",
      "Jacques Rivette",
      "fr",
      "FR",
      "2h 20m",
      "https://www.imdb.com/title/tt0060891/"
   ],
   [
      "1966",
      "The Round-Up",
      "Szegénylegények",
      "Miklós Jancsó",
      "hu",
      "HU",
      "1h 30m",
      "https://www.imdb.com/title/tt0059776/"
   ],
   [
      "1966",
      "The Hawks and the Sparrows",
      "Uccellacci e uccellini",
      "Pier Paolo Pasolini",
      "it",
      "IT",
      "1h 29m",
      "https://www.imdb.com/title/tt0061132/"
   ],
   [
      "1966",
      "A Man and a Woman",
      "Un homme et une femme",
      "Claude Lelouch",
      "fr,en,es",
      "FR",
      "1h 42m",
      "https://www.imdb.com/title/tt0061138/"
   ],
   [
      "1967",
      "We Still Kill the Old Way",
      "A ciascuno il suo",
      "Elio Petri",
      "it",
      "IT",
      "1h 39m",
      "https://www.imdb.com/title/tt0061320/"
   ],
   [
      "1967",
      "Accident",
      "",
      "Joseph Losey",
      "en",
      "GB",
      "1h 45m",
      "https://www.imdb.com/title/tt0061328/"
   ],
   [
      "1967",
      "Blow-Up",
      "",
      "Michelangelo Antonioni",
      "en",
      "GB,IT",
      "1h 51m",
      "https://www.imdb.com/title/tt0060176/"
   ],
   [
      "1967",
      "Hagbard and Signe",
      "Den røde kappe",
      "Gabriel Axel",
      "da,no,sv",
      "DK,IS,SE",
      "1h 40m",
      "https://www.imdb.com/title/tt0063531/"
   ],
   [
      "1967",
      "Elvira Madigan",
      "",
      "Bo Widerberg",
      "sv,da",
      "SE",
      "1h 31m",
      "https://www.imdb.com/title/tt0061620/"
   ],
   [
      "1967",
      "Hotel for Strangers",
      "Hotel pro cizince",
      "Antonín Mása",
      "cs",
      "CS",
      "1h 43m",
      "https://www.imdb.com/title/tt0133012/"
   ],
   [
      "1967",
      "The Killing Game",
      "Jeu de massacre",
      "Alain Jessua",
      "fr",
      "FR",
      "1h 31m",
      "https://www.imdb.com/title/tt0061841/"
   ],
   [
      "1967",
      "Katerina Izmailova",
      "",
      "Mikhail Shapiro",
      "ru",
      "SU",
      "1h 56m",
      "https://www.imdb.com/title/tt0122128/"
   ],
   [
      "1967",
      "L'immorale",
      "",
      "Pietro Germi",
      "it",
      "IT,FR",
      "1h 40m",
      "https://www.imdb.com/title/tt0061808/"
   ],
   [
      "1967",
      "Misunderstood",
      "Incompreso",
      "Luigi Comencini",
      "it",
      "IT",
      "1h 44m",
      "https://www.imdb.com/title/tt0060538/"
   ],
   [
      "1967",
      "The Unknown Man of Shandigor",
      "L'inconnu de Shandigor",
      "Jean-Louis Roy",
      "fr",
      "CH",
      "1h 36m",
      "https://www.imdb.com/title/tt0061815/"
   ],
   [
      "1967",
      "The Winds of the Aures",
      "Rih al awras",
      "Mohammed Lakhdar-Hamina",
      "fr,ar",
      "DZ",
      "1h 35m",
      "https://www.imdb.com/title/tt0170758/"
   ],
   [
      "1967",
      "Mon amour Mon amour",
      "",
      "Nadine Trintignant",
      "fr",
      "FR",
      "1h 26m",
      "https://www.imdb.com/title/tt0061986/"
   ],
   [
      "1967",
      "Monday's Child",
      "La chica del lunes",
      "Leopoldo Torre Nilsson",
      "en,es",
      "AR",
      "1h 18m",
      "https://www.imdb.com/title/tt0061468/"
   ],
   [
      "1967",
      "Degree of Murder",
      "Mord und Totschlag",
      "Volker Schlöndorff",
      "de",
      "DE",
      "1h 27m",
      "https://www.imdb.com/title/tt0061992/"
   ],
   [
      "1967",
      "Mouchette",
      "",
      "Robert Bresson",
      "fr",
      "FR",
      "1h 21m",
      "https://www.imdb.com/title/tt0061996/"
   ],
   [
      "1967",
      "Pedro Páramo",
      "",
      "Carlos Velo",
      "es",
      "MX",
      "1h 50m",
      "https://www.imdb.com/title/tt0062108/"
   ],
   [
      "1967",
      "I Even Met Happy Gypsies",
      "Skupljaci perja",
      "Aleksandar Petrovic",
      "ro,sk,sr,rom",
      "YU",
      "1h 34m",
      "https://www.imdb.com/title/tt0062277/"
   ],
   [
      "1967",
      "Entranced Earth",
      "Terra em Transe",
      "Glauber Rocha",
      "pt",
      "BR",
      "1h 51m",
      "https://www.imdb.com/title/tt0062352/"
   ],
   [
      "1967",
      "Three Days and a Child",
      "Shlosha Yamim Veyeled",
      "Uri Zohar",
      "he",
      "IL",
      "1h 30m",
      "https://www.imdb.com/title/tt0138100/"
   ],
   [
      "1967",
      "Ten Thousand Days",
      "Tízezer nap",
      "Ferenc Kósa",
      "hu",
      "HU",
      "1h 50m",
      "https://www.imdb.com/title/tt0059838/"
   ],
   [
      "1967",
      "The Last Meeting",
      "Último encuentro",
      "Antonio Eceiza",
      "es",
      "ES",
      "1h 20m",
      "https://www.imdb.com/title/tt0061228/"
   ],
   [
      "1967",
      "Ulysses",
      "",
      "Joseph Strick",
      "en",
      "GB,US",
      "2h 12m",
      "https://www.imdb.com/title/tt0062414/"
   ],
   [
      "1967",
      "You're a Big Boy Now",
      "",
      "Francis Ford Coppola",
      "en",
      "US",
      "1h 36m",
      "https://www.imdb.com/title/tt0061209/"
   ],
   [
      "1968",
      "Black Jesus",
      "Seduto alla sua destra",
      "Valerio Zurlini",
      "it",
      "IT",
      "1h 29m",
      "https://www.imdb.com/title/tt0063576/"
   ],
   [
      "1968",
      "Twenty-Four Hours in the Life of a Woman",
      "Vingt-quatre heures de la vie d'une femme",
      "Dominique Delouche",
      "fr",
      "FR,DE",
      "1h 24m",
      "https://www.imdb.com/title/tt0063779/"
   ],
   [
      "1968",
      "Anna Karenina",
      "",
      "Aleksandr Zarkhi",
      "ru",
      "SU",
      "2h 25m",
      "https://www.imdb.com/title/tt0061359/"
   ],
   [
      "1968",
      "The Violent Four",
      "Banditi a Milano",
      "Carlo Lizzani",
      "it",
      "IT",
      "1h 38m",
      "https://www.imdb.com/title/tt0062707/"
   ],
   [
      "1968",
      "Charlie Bubbles",
      "",
      "Albert Finney",
      "en",
      "GB",
      "1h 29m",
      "https://www.imdb.com/title/tt0062792/"
   ],
   [
      "1968",
      "The Red and the White",
      "Csillagosok, katonák",
      "Miklós Jancsó",
      "hu,ru",
      "HU,SU",
      "1h 30m",
      "https://www.imdb.com/title/tt0061537/"
   ],
   [
      "1968",
      "The Castle",
      "Das Schloß",
      "Rudolf Noelte",
      "de",
      "DE",
      "1h 33m",
      "https://www.imdb.com/title/tt0063563/"
   ],
   [
      "1968",
      "Doktor Glas",
      "",
      "Mai Zetterling",
      "da,sv",
      "DK,SE",
      "1h 23m",
      "https://www.imdb.com/title/tt0062899/"
   ],
   [
      "1968",
      "The Upthrown Stone",
      "Feldobott kö",
      "Sándor Sára",
      "hu,rom,el,ru",
      "HU",
      "1h 31m",
      "https://www.imdb.com/title/tt0062963/"
   ],
   [
      "1968",
      "Come Play with Me",
      "Grazie zia",
      "Salvatore Samperi",
      "it",
      "IT",
      "1h 34m",
      "https://www.imdb.com/title/tt0063033/"
   ],
   [
      "1968",
      "Here We Go Round the Mulberry Bush",
      "",
      "Clive Donner",
      "en",
      "GB",
      "1h 36m",
      "https://www.imdb.com/title/tt0063063/"
   ],
   [
      "1968",
      "The Fireman's Ball",
      "Horzhí, má panenko",
      "Milos Forman",
      "cs",
      "CS,IT",
      "1h 13m",
      "https://www.imdb.com/title/tt0061781/"
   ],
   [
      "1968",
      "The Protagonists",
      "I protagonisti",
      "Marcello Fondato",
      "it",
      "IT",
      "1h 45m",
      "https://www.imdb.com/title/tt0063466/"
   ],
   [
      "1968",
      "Je t'aime, je t'aime",
      "",
      "Alain Resnais",
      "fr,nl,en",
      "FR",
      "1h 34m",
      "https://www.imdb.com/title/tt0063152/"
   ],
   [
      "1968",
      "Joanna",
      "",
      "Michael Sarne",
      "en",
      "GB",
      "1h 48m",
      "https://www.imdb.com/title/tt0063157/"
   ],
   [
      "1968",
      "Les Gauloises bleues",
      "",
      "Michel Cournot",
      "fr",
      "FR",
      "1h 33m",
      "https://www.imdb.com/title/tt0063002/"
   ],
   [
      "1968",
      "Playing Soldiers",
      "Mali vojnici",
      "Bahrudin 'Bato' Cengic",
      "sr",
      "YU",
      "1h 32m",
      "https://www.imdb.com/title/tt0066046/"
   ],
   [
      "1968",
      "A Report on the Party and the Guests",
      "O slavnosti a hostech",
      "Jan Nemec",
      "cs",
      "CS",
      "1h 11m",
      "https://www.imdb.com/title/tt0063371/"
   ],
   [
      "1968",
      "Peppermint Frappé",
      "",
      "Carlos Saura",
      "es,en",
      "ES",
      "1h 34m",
      "https://www.imdb.com/title/tt0062113/"
   ],
   [
      "1968",
      "Petulia",
      "",
      "Richard Lester",
      "en,es",
      "GB,US",
      "1h 45m",
      "https://www.imdb.com/title/tt0063426/"
   ],
   [
      "1968",
      "Capricious Summer",
      "Rozmarné léto",
      "Jirí Menzel",
      "cs",
      "CS",
      "1h 14m",
      "https://www.imdb.com/title/tt0063527/"
   ],
   [
      "1968",
      "Tevye and His Seven Daughters",
      "Tuvia Vesheva Benotav",
      "Menahem Golan",
      "he",
      "IL,DE",
      "2h",
      "https://www.imdb.com/title/tt0063725/"
   ],
   [
      "1968",
      "The Girl on a Motorcycle",
      "",
      "Jack Cardiff",
      "en",
      "GB,FR",
      "1h 31m",
      "https://www.imdb.com/title/tt0063013/"
   ],
   [
      "1968",
      "The Long Day's Dying",
      "",
      "Peter Collinson",
      "en",
      "GB",
      "1h 35m",
      "https://www.imdb.com/title/tt0063237/"
   ],
   [
      "1968",
      "Trilogy",
      "",
      "Frank Perry",
      "en",
      "US",
      "1h 50m",
      "https://www.imdb.com/title/tt0165996/"
   ],
   [
      "1968",
      "Kuroneko",
      "Yabu no naka no kuroneko",
      "Kaneto Shindô",
      "ja",
      "JP",
      "1h 39m",
      "https://www.imdb.com/title/tt0122136/"
   ],
   [
      "1968",
      "Matthew's Days",
      "Zywot Mateusza",
      "Witold Leszczynski",
      "pl",
      "PL",
      "1h 20m",
      "https://www.imdb.com/title/tt0062529/"
   ],
   [
      "1969",
      "Ådalen 31",
      "",
      "Bo Widerberg",
      "sv",
      "SE",
      "1h 55m",
      "https://www.imdb.com/title/tt0065261/"
   ],
   [
      "1969",
      "Antonio Das Mortes",
      "",
      "Glauber Rocha",
      "pt",
      "BR,FR,DE",
      "1h 40m",
      "https://www.imdb.com/title/tt0064256/"
   ],
   [
      "1969",
      "It Rains in My Village",
      "Bice skoro propast sveta",
      "Aleksandar Petrovic",
      "sr",
      "YU,FR",
      "1h 24m",
      "https://www.imdb.com/title/tt0124294/"
   ],
   [
      "1969",
      "Calcutta",
      "",
      "Louis Malle",
      "fr",
      "FR",
      "1h 45m",
      "https://www.imdb.com/title/tt0062773/"
   ],
   [
      "1969",
      "Dillinger Is Dead",
      "Dillinger è morto",
      "Marco Ferreri",
      "it",
      "IT",
      "1h 35m",
      "https://www.imdb.com/title/tt0062893/"
   ],
   [
      "1969",
      "Don't Let the Angels Fall",
      "",
      "George Kaczender",
      "en",
      "CA",
      "1h 39m",
      "https://www.imdb.com/title/tt0064248/"
   ],
   [
      "1969",
      "Easy Rider",
      "",
      "Dennis Hopper",
      "en,es",
      "US",
      "1h 35m",
      "https://www.imdb.com/title/tt0064276/"
   ],
   [
      "1969",
      "Spain Again",
      "España otra vez",
      "Jaime Camino",
      "es,en,ca",
      "ES",
      "1h 48m",
      "https://www.imdb.com/title/tt0062941/"
   ],
   [
      "1969",
      "End of a Priest",
      "Faráruv konec",
      "Evald Schorm",
      "cs",
      "CS",
      "1h 38m",
      "https://www.imdb.com/title/tt0064316/"
   ],
   [
      "1969",
      "The Confrontation",
      "Fényes szelek",
      "Miklós Jancsó",
      "hu,he,it",
      "HU",
      "1h 20m",
      "https://www.imdb.com/title/tt0062995/"
   ],
   [
      "1969",
      "Flashback",
      "",
      "Raffaele Andreassi",
      "it,de",
      "IT",
      "1h 46m",
      "https://www.imdb.com/title/tt0145777/"
   ],
   [
      "1969",
      "Machine Gun McCain",
      "Gli intoccabili",
      "Giuliano Montaldo",
      "it,en",
      "IT",
      "1h 36m",
      "https://www.imdb.com/title/tt0065895/"
   ],
   [
      "1969",
      "If....",
      "",
      "Lindsay Anderson",
      "en",
      "GB",
      "1h 51m",
      "https://www.imdb.com/title/tt0063850/"
   ],
   [
      "1969",
      "The Loves of Isadora Duncan",
      "Isadora",
      "Karel Reisz",
      "en,ru,fr,de",
      "GB,FR",
      "2h 11m",
      "https://www.imdb.com/title/tt0063141/"
   ],
   [
      "1969",
      "Le grand amour",
      "",
      "Pierre Étaix",
      "fr",
      "FR",
      "1h 27m",
      "https://www.imdb.com/title/tt0064390/"
   ],
   [
      "1969",
      "My Night at Maud's",
      "Ma nuit chez Maud",
      "Éric Rohmer",
      "fr",
      "FR",
      "1h 50m",
      "https://www.imdb.com/title/tt0064612/"
   ],
   [
      "1969",
      "Manden der tænkte ting",
      "",
      "Jens Ravn",
      "da",
      "DK",
      "1h 33m",
      "https://www.imdb.com/title/tt0064631/"
   ],
   [
      "1969",
      "Matzor",
      "",
      "Gilberto Tofano",
      "he",
      "IL",
      "1h 40m",
      "https://www.imdb.com/title/tt0141591/"
   ],
   [
      "1969",
      "Metti, una sera a cena",
      "",
      "Giuseppe Patroni Griffi",
      "it",
      "IT",
      "2h 5m",
      "https://www.imdb.com/title/tt0064660/"
   ],
   [
      "1969",
      "Michael Kohlhaas - Der Rebell",
      "",
      "Volker Schlöndorff",
      "de,en",
      "DE",
      "1h 39m",
      "https://www.imdb.com/title/tt0064662/"
   ],
   [
      "1969",
      "Hymn to a Tired Man",
      "Nihon no seishun",
      "Masaki Kobayashi",
      "ja",
      "JP",
      "2h 10m",
      "https://www.imdb.com/title/tt0134849/"
   ],
   [
      "1969",
      "Hunting Flies",
      "Polowanie na muchy",
      "Andrzej Wajda",
      "pl",
      "PL",
      "1h 44m",
      "https://www.imdb.com/title/tt0064825/"
   ],
   [
      "1969",
      "Slaves",
      "",
      "Herbert J. Biberman",
      "en",
      "US",
      "1h 50m",
      "https://www.imdb.com/title/tt0064997/"
   ],
   [
      "1969",
      "The Appointment",
      "",
      "Sidney Lumet",
      "en,it",
      "US",
      "1h 55m",
      "https://www.imdb.com/title/tt0064035/"
   ],
   [
      "1969",
      "The Prime of Miss Jean Brodie",
      "",
      "Ronald Neame",
      "en,fr,it",
      "GB",
      "1h 56m",
      "https://www.imdb.com/title/tt0064840/"
   ],
   [
      "1969",
      "All My Good Countrymen",
      "Vsichni dobrí rodáci",
      "Vojtech Jasný",
      "cs",
      "CS",
      "2h",
      "https://www.imdb.com/title/tt0063791/"
   ],
   [
      "1969",
      "Z",
      "",
      "Costa-Gavras",
      "fr,ru,en",
      "FR,DZ",
      "2h 7m",
      "https://www.imdb.com/title/tt0065234/"
   ],
   [
      "1970",
      "The Buttercup Chain",
      "",
      "Robert Ellis Miller",
      "en",
      "GB",
      "1h 35m",
      "https://www.imdb.com/title/tt0066875/"
   ],
   [
      "1970",
      "Don Segundo Sombra",
      "",
      "Manuel Antin",
      "es",
      "AR",
      "1h 45m",
      "https://www.imdb.com/title/tt0064246/"
   ],
   [
      "1970",
      "The Pizza Triangle",
      "Dramma della gelosia (tutti i particolari in cronaca)",
      "Ettore Scola",
      "it",
      "IT,ES",
      "1h 47m",
      "https://www.imdb.com/title/tt0065662/"
   ],
   [
      "1970",
      "The Land",
      "Al-ard",
      "Youssef Chahine",
      "ar",
      "EG",
      "2h 10m",
      "https://www.imdb.com/title/tt0064038/"
   ],
   [
      "1970",
      "Harry Munter",
      "",
      "Kjell Grede",
      "sv,en",
      "SE",
      "1h 41m",
      "https://www.imdb.com/title/tt0064407/"
   ],
   [
      "1970",
      "The Dreamer",
      "Ha-Timhoni",
      "Dan Wolman",
      "he",
      "IL",
      "1h 25m",
      "https://www.imdb.com/title/tt0065663/"
   ],
   [
      "1970",
      "The Bamboo Incident",
      "Hoa-Binh",
      "Raoul Coutard",
      "en,vi,fr",
      "FR",
      "1h 33m",
      "https://www.imdb.com/title/tt0065838/"
   ],
   [
      "1970",
      "Tulips of Haarlem",
      "I tulipani di Haarlem",
      "Franco Brusati",
      "it",
      "IT,FR",
      "1h 42m",
      "https://www.imdb.com/title/tt0211077/"
   ],
   [
      "1970",
      "Investigation of a Citizen Above Suspicion",
      "Indagine su un cittadino al di sopra di ogni sospetto",
      "Elio Petri",
      "it",
      "IT",
      "1h 55m",
      "https://www.imdb.com/title/tt0065889/"
   ],
   [
      "1970",
      "Landscape After the Battle",
      "Krajobraz po bitwie",
      "Andrzej Wajda",
      "pl,en",
      "PL",
      "1h 49m",
      "https://www.imdb.com/title/tt0065948/"
   ],
   [
      "1970",
      "Le dernier saut",
      "",
      "Édouard Luntz",
      "fr",
      "FR,IT",
      "1h 40m",
      "https://www.imdb.com/title/tt0071409/"
   ],
   [
      "1970",
      "Leo the Last",
      "",
      "John Boorman",
      "en",
      "GB",
      "1h 44m",
      "https://www.imdb.com/title/tt0065974/"
   ],
   [
      "1970",
      "Les choses de la vie",
      "",
      "Claude Sautet",
      "fr",
      "CH,FR,IT",
      "1h 29m",
      "https://www.imdb.com/title/tt0064165/"
   ],
   [
      "1970",
      "M*A*S*H",
      "",
      "Robert Altman",
      "en,ja,ko",
      "US",
      "1h 56m",
      "https://www.imdb.com/title/tt0066026/"
   ],
   [
      "1970",
      "Magasiskola",
      "",
      "István Gaál",
      "hu",
      "HU",
      "1h 40m",
      "https://www.imdb.com/title/tt0066035/"
   ],
   [
      "1970",
      "Malatesta",
      "",
      "Peter Lilienthal",
      "de",
      "DE",
      "1h 26m",
      "https://www.imdb.com/title/tt0066044/"
   ],
   [
      "1970",
      "Metello",
      "",
      "Mauro Bolognini",
      "it",
      "IT",
      "1h 47m",
      "https://www.imdb.com/title/tt0066075/"
   ],
   [
      "1970",
      "Azyllo Muito Louco",
      "",
      "Nelson Pereira dos Santos",
      "pt",
      "BR",
      "1h 40m",
      "https://www.imdb.com/title/tt0065430/"
   ],
   [
      "1970",
      "O Palácio dos Anjos",
      "",
      "Walter Hugo Khouri",
      "pt",
      "BR,FR",
      "1h 36m",
      "https://www.imdb.com/title/tt0189887/"
   ],
   [
      "1970",
      "Ovoce stromu rajských jíme",
      "",
      "Vera Chytilová",
      "cs",
      "CS,BE",
      "1h 39m",
      "https://www.imdb.com/title/tt0064781/"
   ],
   [
      "1970",
      "Tell Me That You Love Me, Junie Moon",
      "",
      "Otto Preminger",
      "en",
      "US",
      "1h 53m",
      "https://www.imdb.com/title/tt0066445/"
   ],
   [
      "1970",
      "The Strawberry Statement",
      "",
      "Stuart Hagmann",
      "en",
      "US",
      "1h 49m",
      "https://www.imdb.com/title/tt0066415/"
   ],
   [
      "1970",
      "Une si simple histoire",
      "",
      "Abdellatif Ben Ammar",
      "ar",
      "TN",
      "1h 37m",
      "https://www.imdb.com/title/tt0267065/"
   ],
   [
      "1970",
      "¡Vivan los novios!",
      "",
      "Luis García Berlanga",
      "es,en,de,fr,ca",
      "ES",
      "1h 23m",
      "https://www.imdb.com/title/tt0066531/"
   ],
   [
      "1970",
      "Élise ou la vraie vie",
      "",
      "Michel Drach",
      "fr",
      "FR,DZ",
      "1h 44m",
      "https://www.imdb.com/title/tt0066618/"
   ],
   [
      "1971",
      "Printre colinele verzi",
      "",
      "Nicolae Breban",
      "ro",
      "RO",
      "2h 1m",
      "https://www.imdb.com/title/tt0141822/"
   ],
   [
      "1971",
      "Apokal",
      "",
      "Paul Anczykowski",
      "de",
      "DE",
      "1h 26m",
      "https://www.imdb.com/title/tt0266255/"
   ],
   [
      "1971",
      "Beg",
      "",
      "Aleksandr Alov, Vladimir Naumov",
      "ru",
      "SU",
      "3h 16m",
      "https://www.imdb.com/title/tt0065457/"
   ],
   [
      "1971",
      "Drive, He Said",
      "",
      "Jack Nicholson",
      "en",
      "US",
      "1h 30m",
      "https://www.imdb.com/title/tt0068509/"
   ],
   [
      "1971",
      "Goya, historia de una soledad",
      "",
      "Nino Quevedo",
      "es",
      "ES",
      "1h 50m",
      "https://www.imdb.com/title/tt0065792/"
   ],
   [
      "1971",
      "The Ballad of Joe Hill",
      "",
      "Bo Widerberg",
      "en,sv,it",
      "SE,US",
      "1h 58m",
      "https://www.imdb.com/title/tt0067276/"
   ],
   [
      "1971",
      "Johnny Got His Gun",
      "",
      "Dalton Trumbo",
      "en",
      "US",
      "1h 51m",
      "https://www.imdb.com/title/tt0067277/"
   ],
   [
      "1971",
      "La califfa",
      "",
      "Alberto Bevilacqua",
      "it",
      "FR,IT",
      "1h 36m",
      "https://www.imdb.com/title/tt0065516/"
   ],
   [
      "1971",
      "Le bateau sur l'herbe",
      "",
      "Gérard Brach",
      "fr",
      "FR",
      "1h 30m",
      "https://www.imdb.com/title/tt0065454/"
   ],
   [
      "1971",
      "Murmur of the Heart",
      "Le souffle au coeur",
      "Louis Malle",
      "fr,it",
      "FR,IT,DE",
      "1h 58m",
      "https://www.imdb.com/title/tt0067778/"
   ],
   [
      "1971",
      "The Scoundrel",
      "Les mariés de l'an deux",
      "Jean-Paul Rappeneau",
      "fr",
      "FR,IT,RO",
      "1h 38m",
      "https://www.imdb.com/title/tt0067397/"
   ],
   [
      "1971",
      "Loot",
      "",
      "Silvio Narizzano",
      "en",
      "GB",
      "1h 41m",
      "https://www.imdb.com/title/tt0066002/"
   ],
   [
      "1971",
      "Mira",
      "",
      "Fons Rademakers",
      "nl",
      "BE,NL",
      "1h 35m",
      "https://www.imdb.com/title/tt0067436/"
   ],
   [
      "1971",
      "Death in Venice",
      "Morte a Venezia",
      "Luchino Visconti",
      "en,it,pl,fr,ru,de",
      "IT,FR",
      "2h 10m",
      "https://www.imdb.com/title/tt0067445/"
   ],
   [
      "1971",
      "Wake in Fright",
      "",
      "Ted Kotcheff",
      "en",
      "AU,US,GB",
      "1h 49m",
      "https://www.imdb.com/title/tt0067541/"
   ],
   [
      "1971",
      "Between Miracles",
      "Per grazia ricevuta",
      "Nino Manfredi",
      "it",
      "IT",
      "2h 2m",
      "https://www.imdb.com/title/tt0067565/"
   ],
   [
      "1971",
      "Pindorama",
      "",
      "Arnaldo Jabor",
      "pt",
      "BR",
      "1h 35m",
      "https://www.imdb.com/title/tt0186448/"
   ],
   [
      "1971",
      "Raphaël ou le débauché",
      "",
      "Michel Deville",
      "fr",
      "FR",
      "1h 40m",
      "https://www.imdb.com/title/tt0067652/"
   ],
   [
      "1971",
      "Sacco & Vanzetti",
      "Sacco e Vanzetti",
      "Giuliano Montaldo",
      "it,en",
      "IT,FR",
      "2h 5m",
      "https://www.imdb.com/title/tt0067698/"
   ],
   [
      "1971",
      "Love",
      "Szerelem",
      "Károly Makk",
      "hu,de",
      "HU",
      "1h 28m",
      "https://www.imdb.com/title/tt0067814/"
   ],
   [
      "1971",
      "Taking Off",
      "",
      "Milos Forman",
      "en",
      "US",
      "1h 33m",
      "https://www.imdb.com/title/tt0067820/"
   ],
   [
      "1971",
      "The Go-Between",
      "",
      "Joseph Losey",
      "en",
      "GB",
      "1h 56m",
      "https://www.imdb.com/title/tt0067144/"
   ],
   [
      "1971",
      "The Panic in Needle Park",
      "",
      "Jerry Schatzberg",
      "en",
      "US",
      "1h 50m",
      "https://www.imdb.com/title/tt0067549/"
   ],
   [
      "1971",
      "Walkabout",
      "",
      "Nicolas Roeg",
      "en,cs,fr",
      "GB,AU",
      "1h 40m",
      "https://www.imdb.com/title/tt0067959/"
   ],
   [
      "1971",
      "A Soul to Devils",
      "Yami no naka no chimimoryo",
      "Kô Nakahira",
      "ja",
      "JP",
      "1h 50m",
      "https://www.imdb.com/title/tt0165551/"
   ],
   [
      "1971",
      "Family Life",
      "Zycie rodzinne",
      "Krzysztof Zanussi",
      "pl",
      "PL",
      "1h 28m",
      "https://www.imdb.com/title/tt0068021/"
   ],
   [
      "1972",
      "A Fan's Notes",
      "",
      "Eric Till",
      "en",
      "CA",
      "1h 30m",
      "https://www.imdb.com/title/tt0068571/"
   ],
   [
      "1972",
      "I Love You Rosa",
      "Ani Ohev Otach Rosa",
      "Moshé Mizrahi",
      "he",
      "IL",
      "1h 12m",
      "https://www.imdb.com/title/tt0068213/"
   ],
   [
      "1972",
      "Chinmoku",
      "",
      "Masahiro Shinoda",
      "ja,en",
      "JP",
      "2h 9m",
      "https://www.imdb.com/title/tt0067755/"
   ],
   [
      "1972",
      "Chère Louise",
      "",
      "Philippe de Broca",
      "fr",
      "FR,IT",
      "1h 33m",
      "https://www.imdb.com/title/tt0068378/"
   ],
   [
      "1972",
      "Havoc",
      "Das Unheil",
      "Peter Fleischmann",
      "de",
      "FR,DE",
      "1h 46m",
      "https://www.imdb.com/title/tt0067904/"
   ],
   [
      "1972",
      "The Mattei Affair",
      "Il caso Mattei",
      "Francesco Rosi",
      "it,en",
      "IT",
      "1h 56m",
      "https://www.imdb.com/title/tt0068346/"
   ],
   [
      "1972",
      "Images",
      "",
      "Robert Altman",
      "en,fr",
      "GB",
      "1h 44m",
      "https://www.imdb.com/title/tt0068732/"
   ],
   [
      "1972",
      "Jeremiah Johnson",
      "",
      "Sydney Pollack",
      "en,fr",
      "US",
      "1h 48m",
      "https://www.imdb.com/title/tt0068762/"
   ],
   [
      "1972",
      "King, Queen, Knave",
      "",
      "Jerzy Skolimowski",
      "en",
      "DE,US",
      "1h 34m",
      "https://www.imdb.com/title/tt0068806/"
   ],
   [
      "1972",
      "The Working Class Goes to Heaven",
      "La classe operaia va in paradiso",
      "Elio Petri",
      "it",
      "IT",
      "2h 5m",
      "https://www.imdb.com/title/tt0066919/"
   ],
   [
      "1972",
      "The True Nature of Bernadette",
      "La vraie nature de Bernadette",
      "Gilles Carle",
      "fr",
      "CA",
      "1h 55m",
      "https://www.imdb.com/title/tt0069477/"
   ],
   [
      "1972",
      "The Surveyors",
      "Les arpenteurs",
      "Michel Soutter",
      "fr",
      "CH",
      "1h 25m",
      "https://www.imdb.com/title/tt0068221/"
   ],
   [
      "1972",
      "Hearth Fires",
      "Les feux de la chandeleur",
      "Serge Korber",
      "fr",
      "FR,IT",
      "1h 35m",
      "https://www.imdb.com/title/tt0173821/"
   ],
   [
      "1972",
      "Malpertuis",
      "",
      "Harry Kümel",
      "nl",
      "BE,FR,DE",
      "2h 5m",
      "https://www.imdb.com/title/tt0067386/"
   ],
   [
      "1972",
      "Red Psalm",
      "Még kér a nép",
      "Miklós Jancsó",
      "hu,en",
      "HU",
      "1h 27m",
      "https://www.imdb.com/title/tt0067467/"
   ],
   [
      "1972",
      "The Seduction of Mimi",
      "Mimì metallurgico ferito nell'onore",
      "Lina Wertmüller",
      "it",
      "IT",
      "2h 1m",
      "https://www.imdb.com/title/tt0068950/"
   ],
   [
      "1972",
      "We Won't Grow Old Together",
      "Nous ne vieillirons pas ensemble",
      "Maurice Pialat",
      "fr,ru",
      "FR,IT",
      "1h 50m",
      "https://www.imdb.com/title/tt0069027/"
   ],
   [
      "1972",
      "Pearl in the Crown",
      "Perla w koronie",
      "Kazimierz Kutz",
      "pl",
      "PL",
      "1h 51m",
      "https://www.imdb.com/title/tt0069078/"
   ],
   [
      "1972",
      "Oil Lamps",
      "Petrolejové lampy",
      "Juraj Herz",
      "cs",
      "CS",
      "1h 41m",
      "https://www.imdb.com/title/tt0067572/"
   ],
   [
      "1972",
      "Slaughterhouse-Five",
      "",
      "George Roy Hill",
      "en,de,ru",
      "US",
      "1h 44m",
      "https://www.imdb.com/title/tt0069280/"
   ],
   [
      "1972",
      "Solaris",
      "Solyaris",
      "Andrei Tarkovsky",
      "ru,de",
      "SU",
      "2h 47m",
      "https://www.imdb.com/title/tt0069293/"
   ],
   [
      "1972",
      "The Ruling Class",
      "",
      "Peter Medak",
      "en,fr,it,de",
      "GB",
      "2h 34m",
      "https://www.imdb.com/title/tt0069198/"
   ],
   [
      "1972",
      "The Visitors",
      "",
      "Elia Kazan",
      "en",
      "US",
      "1h 28m",
      "https://www.imdb.com/title/tt0069466/"
   ],
   [
      "1972",
      "To Find a Man",
      "",
      "Buzz Kulik",
      "en",
      "US",
      "1h 30m",
      "https://www.imdb.com/title/tt0069385/"
   ],
   [
      "1972",
      "Trotta",
      "",
      "Johannes Schaaf",
      "de",
      "DE",
      "1h 35m",
      "https://www.imdb.com/title/tt0067884/"
   ],
   [
      "1973",
      "A Promessa",
      "",
      "António de Macedo",
      "pt",
      "PT",
      "1h 42m",
      "https://www.imdb.com/title/tt0072039/"
   ],
   [
      "1973",
      "Ana and the Wolves",
      "Ana y los lobos",
      "Carlos Saura",
      "es,en",
      "ES",
      "1h 40m",
      "https://www.imdb.com/title/tt0068207/"
   ],
   [
      "1973",
      "Belle",
      "",
      "André Delvaux",
      "fr",
      "BE,FR",
      "1h 36m",
      "https://www.imdb.com/title/tt0156348/"
   ],
   [
      "1973",
      "Hospitals: The White Mafia",
      "Bisturi, la mafia bianca",
      "Luigi Zampa",
      "it",
      "IT",
      "1h 43m",
      "https://www.imdb.com/title/tt0138324/"
   ],
   [
      "1973",
      "Electra Glide in Blue",
      "",
      "James William Guercio",
      "en",
      "US",
      "1h 54m",
      "https://www.imdb.com/title/tt0070022/"
   ],
   [
      "1973",
      "Love & Anarchy",
      "Film d'amore e d'anarchia, ovvero: stamattina alle 10, in via dei Fiori, nella nota casa di tolleranza...",
      "Lina Wertmüller",
      "it",
      "IT,FR",
      "2h 4m",
      "https://www.imdb.com/title/tt0070061/"
   ],
   [
      "1973",
      "Godspell",
      "",
      "David Greene",
      "en,he,es",
      "US",
      "1h 43m",
      "https://www.imdb.com/title/tt0070121/"
   ],
   [
      "1973",
      "Jeremy",
      "",
      "Arthur Barron",
      "en",
      "US",
      "1h 30m",
      "https://www.imdb.com/title/tt0070238/"
   ],
   [
      "1973",
      "The Invitation",
      "L'invitation",
      "Claude Goretta",
      "fr",
      "CH,FR",
      "1h 40m",
      "https://www.imdb.com/title/tt0070224/"
   ],
   [
      "1973",
      "The Big Feast",
      "La grande bouffe",
      "Marco Ferreri",
      "es,fr,it",
      "FR,IT",
      "2h 10m",
      "https://www.imdb.com/title/tt0070130/"
   ],
   [
      "1973",
      "The Mother and the Whore",
      "La maman et la putain",
      "Jean Eustache",
      "fr",
      "FR",
      "3h 37m",
      "https://www.imdb.com/title/tt0070359/"
   ],
   [
      "1973",
      "The Death of a Lumberjack",
      "La mort d'un bûcheron",
      "Gilles Carle",
      "fr",
      "CA",
      "1h 55m",
      "https://www.imdb.com/title/tt0070411/"
   ],
   [
      "1973",
      "La otra imagen",
      "",
      "Antoni Ribas",
      "es",
      "ES",
      "1h 30m",
      "https://www.imdb.com/title/tt0069053/"
   ],
   [
      "1973",
      "Fantastic Planet",
      "La planète sauvage",
      "René Laloux",
      "fr,cs",
      "FR,CS",
      "1h 12m",
      "https://www.imdb.com/title/tt0070544/"
   ],
   [
      "1973",
      "Le Far-West",
      "",
      "Jacques Brel",
      "fr",
      "FR,BE",
      "1h 30m",
      "https://www.imdb.com/title/tt0070053/"
   ],
   [
      "1973",
      "O Lucky Man!",
      "",
      "Lindsay Anderson",
      "en",
      "GB,US",
      "2h 58m",
      "https://www.imdb.com/title/tt0070464/"
   ],
   [
      "1973",
      "Petöfi '73",
      "",
      "Ferenc Kardos",
      "hu",
      "HU",
      "1h 29m",
      "https://www.imdb.com/title/tt0070527/"
   ],
   [
      "1973",
      "The Hourglass Sanatorium",
      "Sanatorium pod Klepsydra",
      "Wojciech Has",
      "pl,yi,he",
      "PL",
      "2h 4m",
      "https://www.imdb.com/title/tt0070628/"
   ],
   [
      "1973",
      "Scarecrow",
      "",
      "Jerry Schatzberg",
      "en",
      "US",
      "1h 52m",
      "https://www.imdb.com/title/tt0070643/"
   ],
   [
      "1973",
      "The Effect of Gamma Rays on Man-in-the-Moon Marigolds",
      "",
      "Paul Newman",
      "en",
      "US",
      "1h 40m",
      "https://www.imdb.com/title/tt0068528/"
   ],
   [
      "1973",
      "The Hireling",
      "",
      "Alan Bridges",
      "en",
      "GB",
      "1h 48m",
      "https://www.imdb.com/title/tt0070180/"
   ],
   [
      "1973",
      "One Hamlet Less",
      "Un Amleto di meno",
      "Carmelo Bene",
      "it",
      "IT",
      "1h 10m",
      "https://www.imdb.com/title/tt0069705/"
   ],
   [
      "1973",
      "Monolog",
      "",
      "Ilya Averbakh",
      "ru",
      "SU",
      "1h 40m",
      "https://www.imdb.com/title/tt0068963/"
   ],
   [
      "1973",
      "We Want the Colonels",
      "Vogliamo i colonnelli",
      "Mario Monicelli",
      "it,fr",
      "IT",
      "1h 38m",
      "https://www.imdb.com/title/tt0070887/"
   ],
   [
      "1974",
      "Daughters, Daughters",
      "Abu el Banat",
      "Moshé Mizrahi",
      "he",
      "IL",
      "1h 40m",
      "https://www.imdb.com/title/tt0133334/"
   ],
   [
      "1974",
      "Ali: Fear Eats the Soul",
      "Angst essen Seele auf",
      "Rainer Werner Fassbinder",
      "de,ar",
      "DE",
      "1h 32m",
      "https://www.imdb.com/title/tt0071141/"
   ],
   [
      "1974",
      "Somewhere Beyond Love",
      "Delitto d'amore",
      "Luigi Comencini",
      "it",
      "IT",
      "1h 48m",
      "https://www.imdb.com/title/tt0071404/"
   ],
   [
      "1974",
      "The Holy Office",
      "El santo oficio",
      "Arturo Ripstein",
      "es,he",
      "MX",
      "2h 7m",
      "https://www.imdb.com/title/tt0073656/"
   ],
   [
      "1974",
      "Garm Hava",
      "",
      "M.S. Sathyu",
      "ur,hi",
      "IN",
      "2h 26m",
      "https://www.imdb.com/title/tt0073034/"
   ],
   [
      "1974",
      "Himiko",
      "",
      "Masahiro Shinoda",
      "ja",
      "JP",
      "1h 40m",
      "https://www.imdb.com/title/tt0071609/"
   ],
   [
      "1974",
      "Arabian Nights",
      "Il fiore delle mille e una notte",
      "Pier Paolo Pasolini",
      "it,ar",
      "IT,FR",
      "2h 10m",
      "https://www.imdb.com/title/tt0071502/"
   ],
   [
      "1974",
      "Once Upon a Time in the East",
      "Il était une fois dans l'est",
      "André Brassard",
      "fr",
      "CA",
      "1h 41m",
      "https://www.imdb.com/title/tt0071649/"
   ],
   [
      "1974",
      "The Bear Cage",
      "La cage aux ours",
      "Marian Handwerker",
      "fr",
      "BE",
      "1h 21m",
      "https://www.imdb.com/title/tt0211287/"
   ],
   [
      "1974",
      "La prima Angélica",
      "",
      "Carlos Saura",
      "es",
      "ES",
      "1h 47m",
      "https://www.imdb.com/title/tt0072030/"
   ],
   [
      "1974",
      "Les autres",
      "",
      "Hugo Santiago",
      "fr",
      "FR",
      "2h 7m",
      "https://www.imdb.com/title/tt0071177/"
   ],
   [
      "1974",
      "Violins at the Ball",
      "Les violons du bal",
      "Michel Drach",
      "fr",
      "FR",
      "1h 50m",
      "https://www.imdb.com/title/tt0072371/"
   ],
   [
      "1974",
      "Cat's Play",
      "Macskajáték",
      "Károly Makk",
      "hu",
      "HU",
      "1h 55m",
      "https://www.imdb.com/title/tt0068891/"
   ],
   [
      "1974",
      "Mahler",
      "",
      "Ken Russell",
      "en,de",
      "GB",
      "1h 55m",
      "https://www.imdb.com/title/tt0071797/"
   ],
   [
      "1974",
      "Milarepa",
      "",
      "Liliana Cavani",
      "it",
      "IT",
      "1h 48m",
      "https://www.imdb.com/title/tt0071841/"
   ],
   [
      "1974",
      "The Last Word",
      "Poslednata duma",
      "Binka Zhelyazkova",
      "bg",
      "BG",
      "1h 58m",
      "https://www.imdb.com/title/tt0177128/"
   ],
   [
      "1974",
      "Saat el Tahrir Dakkat, Barra ya Isti Mar",
      "",
      "Heiny Srour",
      "ar",
      "GB,LB,FR",
      "1h 2m",
      "https://www.imdb.com/title/tt0222337/"
   ],
   [
      "1974",
      "Hopelessly Lost",
      "Sovsem propashchiy",
      "Georgiy Daneliya",
      "ru",
      "SU",
      "1h 38m",
      "https://www.imdb.com/title/tt0123277/"
   ],
   [
      "1974",
      "Stavisky",
      "",
      "Alain Resnais",
      "fr,en",
      "FR,IT",
      "2h",
      "https://www.imdb.com/title/tt0072204/"
   ],
   [
      "1974",
      "Symptoms",
      "",
      "José Ramón Larraz",
      "en",
      "GB",
      "1h 32m",
      "https://www.imdb.com/title/tt0072239/"
   ],
   [
      "1974",
      "The Conversation",
      "",
      "Francis Ford Coppola",
      "en",
      "US",
      "1h 53m",
      "https://www.imdb.com/title/tt0071360/"
   ],
   [
      "1974",
      "The Last Detail",
      "",
      "Hal Ashby",
      "en",
      "US",
      "1h 44m",
      "https://www.imdb.com/title/tt0070290/"
   ],
   [
      "1974",
      "The Nickel Ride",
      "",
      "Robert Mulligan",
      "en",
      "US",
      "1h 39m",
      "https://www.imdb.com/title/tt0073451/"
   ],
   [
      "1974",
      "The Nine Lives of Fritz the Cat",
      "",
      "Robert Taylor",
      "en",
      "US",
      "1h 17m",
      "https://www.imdb.com/title/tt0071913/"
   ],
   [
      "1974",
      "The Sugarland Express",
      "",
      "Steven Spielberg",
      "en",
      "US",
      "1h 50m",
      "https://www.imdb.com/title/tt0072226/"
   ],
   [
      "1974",
      "Thieves Like Us",
      "",
      "Robert Altman",
      "en",
      "US",
      "2h 3m",
      "https://www.imdb.com/title/tt0072274/"
   ],
   [
      "1975",
      "Alice Doesn't Live Here Anymore",
      "",
      "Martin Scorsese",
      "en",
      "US",
      "1h 52m",
      "https://www.imdb.com/title/tt0071115/"
   ],
   [
      "1975",
      "Aloïse",
      "",
      "Liliane de Kermadec",
      "fr,de",
      "FR",
      "1h 55m",
      "https://www.imdb.com/title/tt0071125/"
   ],
   [
      "1975",
      "Cher Victor",
      "Ce cher Victor",
      "Robin Davis",
      "fr",
      "FR",
      "1h 42m",
      "https://www.imdb.com/title/tt0077334/"
   ],
   [
      "1975",
      "Chronicle of the Years of Fire",
      "Ahdat Sanawovach El-Djamr",
      "Mohammed Lakhdar-Hamina",
      "ar",
      "DZ",
      "2h 57m",
      "https://www.imdb.com/title/tt0072782/"
   ],
   [
      "1975",
      "Pastoral: To Die in the Country",
      "Den-en ni shisu",
      "Shûji Terayama",
      "ja",
      "JP",
      "1h 44m",
      "https://www.imdb.com/title/tt0071406/"
   ],
   [
      "1975",
      "The Story of Sin",
      "Dzieje grzechu",
      "Walerian Borowczyk",
      "pl,fr,ru,de,it",
      "PL",
      "2h 10m",
      "https://www.imdb.com/title/tt0072919/"
   ],
   [
      "1975",
      "They Fought for Their Country",
      "Oni srazhalis za rodinu",
      "Sergey Bondarchuk",
      "ru",
      "SU",
      "2h 38m",
      "https://www.imdb.com/title/tt0073488/"
   ],
   [
      "1975",
      "The Enigma of Kaspar Hauser",
      "Jeder für sich und Gott gegen alle",
      "Werner Herzog",
      "de",
      "DE",
      "1h 50m",
      "https://www.imdb.com/title/tt0071691/"
   ],
   [
      "1975",
      "Lenny",
      "",
      "Bob Fosse",
      "en",
      "US",
      "1h 51m",
      "https://www.imdb.com/title/tt0071746/"
   ],
   [
      "1975",
      "Orders",
      "Les ordres",
      "Michel Brault",
      "fr,en",
      "CA",
      "1h 49m",
      "https://www.imdb.com/title/tt0071949/"
   ],
   [
      "1975",
      "Lotte in Weimar",
      "",
      "Egon Günther",
      "de",
      "DD",
      "1h 59m",
      "https://www.imdb.com/title/tt0071774/"
   ],
   [
      "1975",
      "Man Friday",
      "",
      "Jack Gold",
      "en",
      "GB,US",
      "1h 55m",
      "https://www.imdb.com/title/tt0074849/"
   ],
   [
      "1975",
      "Mariken van Nieumeghen",
      "",
      "Jos Stelling",
      "nl",
      "NL",
      "1h 20m",
      "https://www.imdb.com/title/tt0071815/"
   ],
   [
      "1975",
      "Do You Hear the Dogs Barking?",
      "¿No oyes ladrar los perros?",
      "François Reichenbach",
      "es",
      "FR,MX",
      "1h 22m",
      "https://www.imdb.com/title/tt0073146/"
   ],
   [
      "1975",
      "The Amulet of Ogum",
      "O Amuleto de Ogum",
      "Nelson Pereira dos Santos",
      "pt",
      "BR",
      "1h 52m",
      "https://www.imdb.com/title/tt0071137/"
   ],
   [
      "1975",
      "The Passenger",
      "Professione: reporter",
      "Michelangelo Antonioni",
      "en,es,de,fr",
      "IT,FR,ES",
      "2h 6m",
      "https://www.imdb.com/title/tt0073580/"
   ],
   [
      "1975",
      "Scent of a Woman",
      "Profumo di donna",
      "Dino Risi",
      "it",
      "IT",
      "1h 43m",
      "https://www.imdb.com/title/tt0072037/"
   ],
   [
      "1975",
      "Special Section",
      "Section spéciale",
      "Costa-Gavras",
      "fr,en,de",
      "FR,IT,DE",
      "1h 58m",
      "https://www.imdb.com/title/tt0073679/"
   ],
   [
      "1975",
      "The Valiant Ones",
      "Zhong lie tu",
      "King Hu",
      "zh",
      "TW,HK",
      "1h 42m",
      "https://www.imdb.com/title/tt0071324/"
   ],
   [
      "1975",
      "Electra, My Love",
      "Szerelmem, Elektra",
      "Miklós Jancsó",
      "hu",
      "HU",
      "1h 10m",
      "https://www.imdb.com/title/tt0072241/"
   ],
   [
      "1975",
      "A Happy Divorce",
      "En lykkelig skilsmisse",
      "Henning Carlsen",
      "da,fr",
      "FR,DK",
      "1h 42m",
      "https://www.imdb.com/title/tt0125384/"
   ],
   [
      "1975",
      "Yuppi du",
      "",
      "Adriano Celentano, Miky Del Prete",
      "it",
      "IT",
      "2h",
      "https://www.imdb.com/title/tt0168265/"
   ],
   [
      "1976",
      "Actas de Marusia",
      "",
      "Miguel Littin",
      "es,en",
      "MX",
      "1h 50m",
      "https://www.imdb.com/title/tt0072601/"
   ],
   [
      "1976",
      "Babatou, les trois conseils",
      "",
      "Jean Rouch",
      "fr",
      "NE,FR",
      "1h 35m",
      "https://www.imdb.com/title/tt0191804/"
   ],
   [
      "1976",
      "Ugly, Dirty and Bad",
      "Brutti, sporchi e cattivi",
      "Ettore Scola",
      "it",
      "IT",
      "1h 55m",
      "https://www.imdb.com/title/tt0074252/"
   ],
   [
      "1976",
      "Bugsy Malone",
      "",
      "Alan Parker",
      "en,it,fr",
      "GB,US",
      "1h 33m",
      "https://www.imdb.com/title/tt0074256/"
   ],
   [
      "1976",
      "Cría cuervos",
      "",
      "Carlos Saura",
      "es",
      "ES",
      "1h 45m",
      "https://www.imdb.com/title/tt0074360/"
   ],
   [
      "1976",
      "Sweet Revenge",
      "",
      "Jerry Schatzberg",
      "en",
      "US",
      "1h 30m",
      "https://www.imdb.com/title/tt0076789/"
   ],
   [
      "1976",
      "Mrs. Dery Where Are You?",
      "Déryné, hol van?",
      "Gyula Maár",
      "hu",
      "HU",
      "1h 38m",
      "https://www.imdb.com/title/tt0158595/"
   ],
   [
      "1976",
      "Kings of the Road",
      "Im Lauf der Zeit",
      "Wim Wenders",
      "de,en",
      "DE",
      "2h 55m",
      "https://www.imdb.com/title/tt0073152/"
   ],
   [
      "1976",
      "The Inheritance",
      "L'eredità Ferramonti",
      "Mauro Bolognini",
      "it",
      "IT",
      "2h",
      "https://www.imdb.com/title/tt0074487/"
   ],
   [
      "1976",
      "La griffe et la dent",
      "",
      "François Bel, Gérard Vienne",
      "",
      "FR",
      "1h 38m",
      "https://www.imdb.com/title/tt0162911/"
   ],
   [
      "1976",
      "The Marquise of O",
      "Die Marquise von O...",
      "Éric Rohmer",
      "de",
      "DE,FR",
      "1h 42m",
      "https://www.imdb.com/title/tt0074870/"
   ],
   [
      "1976",
      "The Tenant",
      "Le locataire",
      "Roman Polanski",
      "fr,it",
      "FR",
      "2h 6m",
      "https://www.imdb.com/title/tt0074811/"
   ],
   [
      "1976",
      "Mr. Klein",
      "",
      "Joseph Losey",
      "fr",
      "FR,IT",
      "2h 3m",
      "https://www.imdb.com/title/tt0074916/"
   ],
   [
      "1976",
      "Next Stop, Greenwich Village",
      "",
      "Paul Mazursky",
      "en",
      "US",
      "1h 51m",
      "https://www.imdb.com/title/tt0074963/"
   ],
   [
      "1976",
      "Nishant",
      "",
      "Shyam Benegal",
      "hi",
      "IN",
      "2h 20m",
      "https://www.imdb.com/title/tt0073458/"
   ],
   [
      "1976",
      "Pascual Duarte",
      "",
      "Ricardo Franco",
      "es",
      "ES",
      "1h 34m",
      "https://www.imdb.com/title/tt0073518/"
   ],
   [
      "1976",
      "Shadow of Angels",
      "Schatten der Engel",
      "Daniel Schmid",
      "de",
      "CH,DE",
      "1h 41m",
      "https://www.imdb.com/title/tt0075169/"
   ],
   [
      "1976",
      "Taxi Driver",
      "",
      "Martin Scorsese",
      "en,es",
      "US",
      "1h 54m",
      "https://www.imdb.com/title/tt0075314/"
   ],
   [
      "1976",
      "A Child in the Crowd",
      "Un enfant dans la foule",
      "Gérard Blain",
      "fr,en,de",
      "FR",
      "1h 25m",
      "https://www.imdb.com/title/tt0073839/"
   ],
   [
      "1976",
      "Private Vices, Public Pleasures",
      "Vizi privati, pubbliche virtù",
      "Miklós Jancsó",
      "it,de,fr,hu,en",
      "IT,YU",
      "1h 44m",
      "https://www.imdb.com/title/tt0073869/"
   ],
   [
      "1977",
      "3 Women",
      "",
      "Robert Altman",
      "en",
      "US",
      "2h 4m",
      "https://www.imdb.com/title/tt0075612/"
   ],
   [
      "1977",
      "Bang!",
      "",
      "Jan Troell",
      "sv",
      "SE",
      "1h 40m",
      "https://www.imdb.com/title/tt0075724/"
   ],
   [
      "1977",
      "Black Joy",
      "",
      "Anthony Simmons",
      "en",
      "GB",
      "1h 37m",
      "https://www.imdb.com/title/tt0075760/"
   ],
   [
      "1977",
      "Bound for Glory",
      "",
      "Hal Ashby",
      "en",
      "US",
      "2h 27m",
      "https://www.imdb.com/title/tt0074235/"
   ],
   [
      "1977",
      "Budapesti mesék",
      "",
      "István Szabó",
      "hu",
      "HU",
      "1h 30m",
      "https://www.imdb.com/title/tt0074253/"
   ],
   [
      "1977",
      "Car Wash",
      "",
      "Michael Schultz",
      "en,es",
      "US",
      "1h 37m",
      "https://www.imdb.com/title/tt0074281/"
   ],
   [
      "1977",
      "The American Friend",
      "Der amerikanische Freund",
      "Wim Wenders",
      "de,en,fr",
      "DE,FR",
      "2h 8m",
      "https://www.imdb.com/title/tt0075675/"
   ],
   [
      "1977",
      "Elisa, My Life",
      "Elisa, vida mía",
      "Carlos Saura",
      "es,en,it",
      "ES",
      "2h 5m",
      "https://www.imdb.com/title/tt0075983/"
   ],
   [
      "1977",
      "Gruppenbild mit Dame",
      "",
      "Aleksandar Petrovic",
      "de,fr",
      "FR,DE",
      "1h 47m",
      "https://www.imdb.com/title/tt0076113/"
   ],
   [
      "1977",
      "The Hunters",
      "Oi kynigoi",
      "Theodoros Angelopoulos",
      "el",
      "GR,FR,DE",
      "2h 48m",
      "https://www.imdb.com/title/tt0076286/"
   ],
   [
      "1977",
      "Ifigeneia",
      "",
      "Michael Cacoyannis",
      "el",
      "GR",
      "2h 7m",
      "https://www.imdb.com/title/tt0076208/"
   ],
   [
      "1977",
      "J.A. Martin Photographer",
      "J.A. Martin photographe",
      "Jean Beaudin",
      "fr",
      "CA",
      "1h 40m",
      "https://www.imdb.com/title/tt0074702/"
   ],
   [
      "1977",
      "Kicma",
      "",
      "Vlatko Gilic",
      "sr",
      "YU",
      "1h 31m",
      "https://www.imdb.com/title/tt0074741/"
   ],
   [
      "1977",
      "La communion solennelle",
      "",
      "René Féret",
      "fr",
      "FR",
      "1h 45m",
      "https://www.imdb.com/title/tt0074336/"
   ],
   [
      "1977",
      "The Lacemaker",
      "La dentellière",
      "Claude Goretta",
      "fr,en",
      "CH,FR,DE",
      "1h 47m",
      "https://www.imdb.com/title/tt0075932/"
   ],
   [
      "1977",
      "The Truck",
      "Le camion",
      "Marguerite Duras",
      "fr",
      "FR",
      "1h 16m",
      "https://www.imdb.com/title/tt0075799/"
   ],
   [
      "1977",
      "The Old Country Where Rimbaud Died",
      "Le vieux pays où Rimbaud est mort",
      "Jean Pierre Lefebvre",
      "fr",
      "FR,CA",
      "1h 54m",
      "https://www.imdb.com/title/tt0202062/"
   ],
   [
      "1977",
      "Padre padrone",
      "",
      "Paolo Taviani, Vittorio Taviani",
      "it,sc,de",
      "IT",
      "1h 53m",
      "https://www.imdb.com/title/tt0076517/"
   ],
   [
      "1977",
      "Podranki",
      "",
      "Nikolay Gubenko",
      "ru",
      "SU",
      "1h 33m",
      "https://www.imdb.com/title/tt0075079/"
   ],
   [
      "1977",
      "The Duellists",
      "",
      "Ridley Scott",
      "en,ru",
      "GB",
      "1h 40m",
      "https://www.imdb.com/title/tt0075968/"
   ],
   [
      "1977",
      "Un borghese piccolo piccolo",
      "",
      "Mario Monicelli",
      "it",
      "IT",
      "2h 2m",
      "https://www.imdb.com/title/tt0129794/"
   ],
   [
      "1977",
      "The Purple Taxi",
      "Un taxi mauve",
      "Yves Boisset",
      "fr,en",
      "FR,IE,IT",
      "2h",
      "https://www.imdb.com/title/tt0076851/"
   ],
   [
      "1977",
      "A Special Day",
      "Una giornata particolare",
      "Ettore Scola",
      "it",
      "IT,CA",
      "1h 46m",
      "https://www.imdb.com/title/tt0076085/"
   ],
   [
      "1978",
      "A Dream of Passion",
      "Kravgi gynaikon",
      "Jules Dassin",
      "en,el",
      "GR,CH,US",
      "1h 50m",
      "https://www.imdb.com/title/tt0077473/"
   ],
   [
      "1978",
      "Empire of Passion",
      "Ai no bôrei",
      "Nagisa Ôshima",
      "ja",
      "JP,FR",
      "1h 45m",
      "https://www.imdb.com/title/tt0077132/"
   ],
   [
      "1978",
      "An Unmarried Woman",
      "",
      "Paul Mazursky",
      "en",
      "US",
      "2h 4m",
      "https://www.imdb.com/title/tt0078444/"
   ],
   [
      "1978",
      "Bravo maestro",
      "",
      "Rajko Grlic",
      "sr",
      "YU",
      "1h 39m",
      "https://www.imdb.com/title/tt0077273/"
   ],
   [
      "1978",
      "Ciao maschio",
      "",
      "Marco Ferreri",
      "en",
      "IT,FR",
      "1h 53m",
      "https://www.imdb.com/title/tt0075848/"
   ],
   [
      "1978",
      "Coming Home",
      "",
      "Hal Ashby",
      "en",
      "US",
      "2h 7m",
      "https://www.imdb.com/title/tt0077362/"
   ],
   [
      "1978",
      "Despair",
      "",
      "Rainer Werner Fassbinder",
      "en",
      "DE,FR",
      "1h 59m",
      "https://www.imdb.com/title/tt0077421/"
   ],
   [
      "1978",
      "Die linkshändige Frau",
      "",
      "Peter Handke",
      "de,fr",
      "DE",
      "1h 59m",
      "https://www.imdb.com/title/tt0076316/"
   ],
   [
      "1978",
      "Ecce bombo",
      "",
      "Nanni Moretti",
      "it",
      "IT",
      "1h 43m",
      "https://www.imdb.com/title/tt0077482/"
   ],
   [
      "1978",
      "A Very Moral Night",
      "Egy erkölcsös éjszaka",
      "Károly Makk",
      "hu",
      "HU",
      "1h 50m",
      "https://www.imdb.com/title/tt0075996/"
   ],
   [
      "1978",
      "El recurso del método",
      "",
      "Miguel Littin",
      "es,fr",
      "MX,CU,FR",
      "2h 44m",
      "https://www.imdb.com/title/tt0078146/"
   ],
   [
      "1978",
      "The Tree of Wooden Clogs",
      "L'albero degli zoccoli",
      "Ermanno Olmi",
      "it",
      "IT",
      "3h 6m",
      "https://www.imdb.com/title/tt0077138/"
   ],
   [
      "1978",
      "Los ojos vendados",
      "",
      "Carlos Saura",
      "es,fr",
      "ES,FR",
      "1h 50m",
      "https://www.imdb.com/title/tt0078021/"
   ],
   [
      "1978",
      "Los restos del naufragio",
      "",
      "Ricardo Franco",
      "es",
      "ES,MX,FR",
      "1h 38m",
      "https://www.imdb.com/title/tt0078156/"
   ],
   [
      "1978",
      "Midnight Express",
      "",
      "Alan Parker",
      "en,tr,fr",
      "GB,US",
      "2h 1m",
      "https://www.imdb.com/title/tt0077928/"
   ],
   [
      "1978",
      "Moy laskovyy i nezhnyy zver",
      "",
      "Emil Loteanu",
      "ru",
      "SU,DE",
      "1h 49m",
      "https://www.imdb.com/title/tt0172812/"
   ],
   [
      "1978",
      "Molière",
      "",
      "Ariane Mnouchkine",
      "fr,el,it",
      "FR,IT",
      "4h 20m",
      "https://www.imdb.com/title/tt0077941/"
   ],
   [
      "1978",
      "Pretty Baby",
      "",
      "Louis Malle",
      "en",
      "US",
      "1h 50m",
      "https://www.imdb.com/title/tt0078111/"
   ],
   [
      "1978",
      "Spirala",
      "",
      "Krzysztof Zanussi",
      "pl",
      "PL",
      "1h 23m",
      "https://www.imdb.com/title/tt0078310/"
   ],
   [
      "1978",
      "The Chant of Jimmie Blacksmith",
      "",
      "Fred Schepisi",
      "en",
      "AU",
      "2h 2m",
      "https://www.imdb.com/title/tt0077318/"
   ],
   [
      "1978",
      "The Shout",
      "",
      "Jerzy Skolimowski",
      "en",
      "GB",
      "1h 26m",
      "https://www.imdb.com/title/tt0078259/"
   ],
   [
      "1978",
      "Violette Nozière",
      "",
      "Claude Chabrol",
      "fr",
      "FR,CA",
      "2h 4m",
      "https://www.imdb.com/title/tt0078467/"
   ],
   [
      "1978",
      "Who'll Stop the Rain",
      "",
      "Karel Reisz",
      "en",
      "US",
      "2h 6m",
      "https://www.imdb.com/title/tt0078490/"
   ],
   [
      "1979",
      "Apocalypse Now",
      "",
      "Francis Ford Coppola",
      "en,fr,vi",
      "US",
      "2h 27m",
      "https://www.imdb.com/title/tt0078788/"
   ],
   [
      "1979",
      "Arven",
      "",
      "Anja Breien",
      "sv,no",
      "NO",
      "1h 35m",
      "https://www.imdb.com/title/tt0078800/"
   ],
   [
      "1979",
      "Without Anesthesia",
      "Bez znieczulenia",
      "Andrzej Wajda",
      "pl",
      "PL,FR",
      "2h 11m",
      "https://www.imdb.com/title/tt0078857/"
   ],
   [
      "1979",
      "Caro papà",
      "",
      "Dino Risi",
      "it",
      "IT,FR,CA",
      "1h 45m",
      "https://www.imdb.com/title/tt0078942/"
   ],
   [
      "1979",
      "Days of Heaven",
      "",
      "Terrence Malick",
      "en,it",
      "US",
      "1h 34m",
      "https://www.imdb.com/title/tt0077405/"
   ],
   [
      "1979",
      "The Tin Drum",
      "Die Blechtrommel",
      "Volker Schlöndorff",
      "de,it,he,pl,ru",
      "DE,FR,PL",
      "2h 22m",
      "https://www.imdb.com/title/tt0078875/"
   ],
   [
      "1979",
      "Een vrouw tussen hond en wolf",
      "",
      "André Delvaux",
      "nl",
      "BE,FR",
      "1h 51m",
      "https://www.imdb.com/title/tt0080110/"
   ],
   [
      "1979",
      "L'ingorgo",
      "",
      "Luigi Comencini",
      "it,fr,es,de",
      "IT,FR,DE,ES",
      "2h 8m",
      "https://www.imdb.com/title/tt0077734/"
   ],
   [
      "1979",
      "La drôlesse",
      "",
      "Jacques Doillon",
      "fr",
      "FR",
      "1h 30m",
      "https://www.imdb.com/title/tt0079086/"
   ],
   [
      "1979",
      "The Brontë Sisters",
      "Les soeurs Brontë",
      "André Téchiné",
      "fr",
      "FR",
      "2h",
      "https://www.imdb.com/title/tt0079920/"
   ],
   [
      "1979",
      "Allegro barbaro",
      "",
      "Miklós Jancsó",
      "hu",
      "HU",
      "1h 13m",
      "https://www.imdb.com/title/tt0077149/"
   ],
   [
      "1979",
      "My Brilliant Career",
      "",
      "Gillian Armstrong",
      "en",
      "AU",
      "1h 40m",
      "https://www.imdb.com/title/tt0079596/"
   ],
   [
      "1979",
      "Norma Rae",
      "",
      "Martin Ritt",
      "en",
      "US",
      "1h 54m",
      "https://www.imdb.com/title/tt0079638/"
   ],
   [
      "1979",
      "Okupacija u 26 slika",
      "",
      "Lordan Zafranovic",
      "sr,it,de,ru,fr",
      "YU",
      "1h 56m",
      "https://www.imdb.com/title/tt0079659/"
   ],
   [
      "1979",
      "Siberiade",
      "Sibiriada",
      "Andrey Konchalovskiy",
      "ru,de",
      "SU",
      "4h 35m",
      "https://www.imdb.com/title/tt0079907/"
   ],
   [
      "1979",
      "Los sobrevivientes",
      "",
      "Tomás Gutiérrez Alea",
      "es",
      "CU",
      "2h 10m",
      "https://www.imdb.com/title/tt0079919/"
   ],
   [
      "1979",
      "Série noire",
      "",
      "Alain Corneau",
      "fr",
      "FR",
      "1h 56m",
      "https://www.imdb.com/title/tt0079980/"
   ],
   [
      "1979",
      "The China Syndrome",
      "",
      "James Bridges",
      "en",
      "US",
      "2h 2m",
      "https://www.imdb.com/title/tt0078966/"
   ],
   [
      "1979",
      "The Europeans",
      "",
      "James Ivory",
      "en,fr,de",
      "GB",
      "1h 30m",
      "https://www.imdb.com/title/tt0079123/"
   ],
   [
      "1979",
      "Victoria",
      "",
      "Bo Widerberg",
      "en",
      "DE,SE",
      "1h 29m",
      "https://www.imdb.com/title/tt0080096/"
   ],
   [
      "1979",
      "Woyzeck",
      "",
      "Werner Herzog",
      "de",
      "DE",
      "1h 20m",
      "https://www.imdb.com/title/tt0080149/"
   ],
   [
      "1980",
      "All That Jazz",
      "",
      "Bob Fosse",
      "en,es",
      "US",
      "2h 3m",
      "https://www.imdb.com/title/tt0078754/"
   ],
   [
      "1980",
      "Being There",
      "",
      "Hal Ashby",
      "en,ru,it",
      "DE,US",
      "2h 10m",
      "https://www.imdb.com/title/tt0078841/"
   ],
   [
      "1980",
      "Breaker Morant",
      "",
      "Bruce Beresford",
      "en,af",
      "AU",
      "1h 47m",
      "https://www.imdb.com/title/tt0080310/"
   ],
   [
      "1980",
      "Bye Bye Brasil",
      "",
      "Carlos Diegues",
      "pt",
      "FR,BR,AR",
      "1h 40m",
      "https://www.imdb.com/title/tt0080482/"
   ],
   [
      "1980",
      "The Constant Factor",
      "Constans",
      "Krzysztof Zanussi",
      "pl,en",
      "PL",
      "1h 27m",
      "https://www.imdb.com/title/tt0080561/"
   ],
   [
      "1980",
      "Ek Din Pratidin",
      "",
      "Mrinal Sen",
      "en,bn",
      "IN",
      "1h 35m",
      "https://www.imdb.com/title/tt0079098/"
   ],
   [
      "1980",
      "Fantastica",
      "",
      "Gilles Carle",
      "fr",
      "FR,CA",
      "1h 50m",
      "https://www.imdb.com/title/tt0080718/"
   ],
   [
      "1980",
      "Jaguar",
      "",
      "Lino Brocka",
      "fil,tl",
      "PH",
      "1h 40m",
      "https://www.imdb.com/title/tt0079361/"
   ],
   [
      "1980",
      "Kagemusha",
      "",
      "Akira Kurosawa",
      "ja",
      "JP,US",
      "3h",
      "https://www.imdb.com/title/tt0080979/"
   ],
   [
      "1980",
      "Kaltgestellt",
      "",
      "Bernhard Sinkel",
      "de",
      "DE",
      "1h 28m",
      "https://www.imdb.com/title/tt0082600/"
   ],
   [
      "1980",
      "Dedicatoria",
      "",
      "Jaime Chávarri",
      "es",
      "ES,FR",
      "1h 37m",
      "https://www.imdb.com/title/tt0080604/"
   ],
   [
      "1980",
      "La terrazza",
      "",
      "Ettore Scola",
      "it",
      "IT,FR",
      "2h 30m",
      "https://www.imdb.com/title/tt0081616/"
   ],
   [
      "1980",
      "Loulou",
      "",
      "Maurice Pialat",
      "fr",
      "FR",
      "1h 50m",
      "https://www.imdb.com/title/tt0081076/"
   ],
   [
      "1980",
      "Mon oncle d'Amérique",
      "",
      "Alain Resnais",
      "fr",
      "FR",
      "2h 5m",
      "https://www.imdb.com/title/tt0081176/"
   ],
   [
      "1980",
      "The Heiresses",
      "Örökség",
      "Márta Mészáros",
      "de,hu",
      "FR,HU",
      "1h 40m",
      "https://www.imdb.com/title/tt0081821/"
   ],
   [
      "1980",
      "Out of the Blue",
      "",
      "Dennis Hopper",
      "en",
      "US",
      "1h 34m",
      "https://www.imdb.com/title/tt0081291/"
   ],
   [
      "1980",
      "Poseban tretman",
      "",
      "Goran Paskaljevic",
      "sr",
      "YU",
      "1h 34m",
      "https://www.imdb.com/title/tt0081546/"
   ],
   [
      "1980",
      "A Leap in the Dark",
      "Salto nel vuoto",
      "Marco Bellocchio",
      "it",
      "IT,FR,DE",
      "2h",
      "https://www.imdb.com/title/tt0079845/"
   ],
   [
      "1980",
      "Every Man for Himself",
      "Sauve qui peut (la vie)",
      "Jean-Luc Godard",
      "fr,it",
      "FR,CH,DE,AT",
      "1h 27m",
      "https://www.imdb.com/title/tt0079854/"
   ],
   [
      "1980",
      "The Big Red One",
      "",
      "Samuel Fuller",
      "en,fr,it,de",
      "US",
      "1h 53m",
      "https://www.imdb.com/title/tt0080437/"
   ],
   [
      "1980",
      "The Long Riders",
      "",
      "Walter Hill",
      "en,sv",
      "US",
      "1h 40m",
      "https://www.imdb.com/title/tt0081071/"
   ],
   [
      "1980",
      "B.C. Rock",
      "Le chaînon manquant",
      "Picha",
      "fr",
      "FR,BE",
      "1h 24m",
      "https://www.imdb.com/title/tt0187781/"
   ],
   [
      "1980",
      "A Week's Vacation",
      "Une semaine de vacances",
      "Bertrand Tavernier",
      "fr",
      "FR",
      "1h 42m",
      "https://www.imdb.com/title/tt0081686/"
   ],
   [
      "1981",
      "Beau-père",
      "",
      "Bertrand Blier",
      "fr",
      "FR",
      "2h 3m",
      "https://www.imdb.com/title/tt0082054/"
   ],
   [
      "1981",
      "Chariots of Fire",
      "",
      "Hugh Hudson",
      "en,fr",
      "GB",
      "2h 5m",
      "https://www.imdb.com/title/tt0082158/"
   ],
   [
      "1981",
      "Cserepek",
      "",
      "István Gaál",
      "hu",
      "HU",
      "1h 31m",
      "https://www.imdb.com/title/tt0080576/"
   ],
   [
      "1981",
      "Man of Iron",
      "Czlowiek z zelaza",
      "Andrzej Wajda",
      "pl",
      "PL",
      "2h 36m",
      "https://www.imdb.com/title/tt0082222/"
   ],
   [
      "1981",
      "Engel aus Eisen",
      "",
      "Thomas Brasch",
      "de",
      "DE",
      "1h 45m",
      "https://www.imdb.com/title/tt0082330/"
   ],
   [
      "1981",
      "Excalibur",
      "",
      "John Boorman",
      "en",
      "GB,US",
      "2h 20m",
      "https://www.imdb.com/title/tt0082348/"
   ],
   [
      "1981",
      "Faktas",
      "",
      "Almantas Grikevicius",
      "lt,ru,de",
      "SU",
      "1h 31m",
      "https://www.imdb.com/title/tt0150497/"
   ],
   [
      "1981",
      "Heaven's Gate",
      "",
      "Michael Cimino",
      "en,sr,ru,fr,pl,de,uk",
      "US",
      "3h 39m",
      "https://www.imdb.com/title/tt0080855/"
   ],
   [
      "1981",
      "The Skin",
      "La pelle",
      "Liliana Cavani",
      "it",
      "IT,FR",
      "2h 11m",
      "https://www.imdb.com/title/tt0082893/"
   ],
   [
      "1981",
      "Tragedy of a Ridiculous Man",
      "La tragedia di un uomo ridicolo",
      "Bernardo Bertolucci",
      "it",
      "IT",
      "1h 56m",
      "https://www.imdb.com/title/tt0084813/"
   ],
   [
      "1981",
      "Les uns et les autres",
      "",
      "Claude Lelouch",
      "fr,en,de,ru",
      "FR",
      "3h 4m",
      "https://www.imdb.com/title/tt0083260/"
   ],
   [
      "1981",
      "Light Years Away",
      "Les années lumière",
      "Alain Tanner",
      "en",
      "CH,FR",
      "1h 47m",
      "https://www.imdb.com/title/tt0080373/"
   ],
   [
      "1981",
      "Looks and Smiles",
      "",
      "Ken Loach",
      "en",
      "GB",
      "1h 44m",
      "https://www.imdb.com/title/tt0082678/"
   ],
   [
      "1981",
      "Mephisto",
      "",
      "István Szabó",
      "de,hu,en,fr",
      "HU,DE,AT",
      "2h 26m",
      "https://www.imdb.com/title/tt0082736/"
   ],
   [
      "1981",
      "Montenegro",
      "",
      "Dusan Makavejev",
      "sr,en,sv",
      "SE,GB",
      "1h 36m",
      "https://www.imdb.com/title/tt0082770/"
   ],
   [
      "1981",
      "Neige",
      "",
      "Juliet Berto, Jean-Henri Roger",
      "fr",
      "FR,BE",
      "1h 30m",
      "https://www.imdb.com/title/tt0082800/"
   ],
   [
      "1981",
      "Passion of Love",
      "Passione d'amore",
      "Ettore Scola",
      "it",
      "IT,FR",
      "1h 57m",
      "https://www.imdb.com/title/tt0082883/"
   ],
   [
      "1981",
      "Patrimonio nacional",
      "",
      "Luis García Berlanga",
      "es,fr",
      "ES",
      "1h 52m",
      "https://www.imdb.com/title/tt0082888/"
   ],
   [
      "1981",
      "Possession",
      "",
      "Andrzej Zulawski",
      "en,fr,de",
      "FR,DE",
      "2h 4m",
      "https://www.imdb.com/title/tt0082933/"
   ],
   [
      "1981",
      "Quartet",
      "",
      "James Ivory",
      "en,fr",
      "GB,FR",
      "1h 41m",
      "https://www.imdb.com/title/tt0082964/"
   ],
   [
      "1981",
      "Tulipää",
      "",
      "Pirjo Honkasalo, Pekka Lehto",
      "fi",
      "FI",
      "2h 35m",
      "https://www.imdb.com/title/tt0083237/"
   ],
   [
      "1981",
      "Thief",
      "",
      "Michael Mann",
      "en",
      "US",
      "2h 3m",
      "https://www.imdb.com/title/tt0083190/"
   ],
   [
      "1982",
      "A Ilha dos Amores",
      "",
      "Paulo Rocha",
      "pt,ja",
      "PT,JP",
      "2h 50m",
      "https://www.imdb.com/title/tt0077722/"
   ],
   [
      "1982",
      "À toute allure",
      "",
      "Robert Kramer",
      "fr",
      "FR",
      "59m",
      "https://www.imdb.com/title/tt0084960/"
   ],
   [
      "1982",
      "A Q zheng zhuan",
      "",
      "Fan Cen",
      "zh",
      "CN",
      "2h 5m",
      "https://www.imdb.com/title/tt0081971/"
   ],
   [
      "1982",
      "Britannia Hospital",
      "",
      "Lindsay Anderson",
      "en",
      "GB",
      "1h 56m",
      "https://www.imdb.com/title/tt0083694/"
   ],
   [
      "1982",
      "Cecilia",
      "",
      "Humberto Solás",
      "es",
      "CU,ES",
      "2h 7m",
      "https://www.imdb.com/title/tt0080508/"
   ],
   [
      "1982",
      "Sweet Inquest on Violence",
      "Douce enquête sur la violence",
      "Gérard Guérin",
      "fr",
      "FR",
      "1h 38m",
      "https://www.imdb.com/title/tt0080657/"
   ],
   [
      "1982",
      "Fitzcarraldo",
      "",
      "Werner Herzog",
      "de,es,en,it",
      "DE,PE",
      "2h 38m",
      "https://www.imdb.com/title/tt0083946/"
   ],
   [
      "1982",
      "Hammett",
      "",
      "Wim Wenders",
      "en,zh,de",
      "US",
      "1h 37m",
      "https://www.imdb.com/title/tt0085640/"
   ],
   [
      "1982",
      "Identification of a Woman",
      "Identificazione di una donna",
      "Michelangelo Antonioni",
      "it,en,fr",
      "IT,FR",
      "2h 10m",
      "https://www.imdb.com/title/tt0084116/"
   ],
   [
      "1982",
      "Invitation au voyage",
      "",
      "Peter Del Monte",
      "fr",
      "FR,IT,DE",
      "1h 33m",
      "https://www.imdb.com/title/tt0084149/"
   ],
   [
      "1982",
      "The Night of the Shooting Stars",
      "La notte di San Lorenzo",
      "Paolo Taviani, Vittorio Taviani",
      "it,de",
      "IT",
      "1h 47m",
      "https://www.imdb.com/title/tt0084422/"
   ],
   [
      "1982",
      "La nuit de Varennes",
      "",
      "Ettore Scola",
      "fr,it",
      "FR,IT",
      "2h 30m",
      "https://www.imdb.com/title/tt0084423/"
   ],
   [
      "1982",
      "Missing",
      "",
      "Costa-Gavras",
      "en,es,fr",
      "US,MX",
      "2h 2m",
      "https://www.imdb.com/title/tt0084335/"
   ],
   [
      "1982",
      "Moonlighting",
      "",
      "Jerzy Skolimowski",
      "en,pl",
      "GB",
      "1h 37m",
      "https://www.imdb.com/title/tt0084354/"
   ],
   [
      "1982",
      "Another Way",
      "Egymásra nézve",
      "Károly Makk",
      "hu",
      "HU",
      "1h 42m",
      "https://www.imdb.com/title/tt0083872/"
   ],
   [
      "1982",
      "Passion",
      "",
      "Jean-Luc Godard",
      "fr,de,pl,it",
      "FR,CH",
      "1h 28m",
      "https://www.imdb.com/title/tt0084481/"
   ],
   [
      "1982",
      "Shoot the Moon",
      "",
      "Alan Parker",
      "en,fr,es",
      "US",
      "2h 4m",
      "https://www.imdb.com/title/tt0084675/"
   ],
   [
      "1982",
      "Smithereens",
      "",
      "Susan Seidelman",
      "en",
      "US",
      "1h 33m",
      "https://www.imdb.com/title/tt0084698/"
   ],
   [
      "1982",
      "Tag der Idioten",
      "",
      "Werner Schroeter",
      "de",
      "DE",
      "1h 50m",
      "https://www.imdb.com/title/tt0083160/"
   ],
   [
      "1982",
      "The Return of the Soldier",
      "",
      "Alan Bridges",
      "en",
      "GB",
      "1h 39m",
      "https://www.imdb.com/title/tt0084590/"
   ],
   [
      "1982",
      "Sandstorm",
      "Rih al-raml",
      "Mohammed Lakhdar-Hamina",
      "fr",
      "DZ,FR",
      "1h 43m",
      "https://www.imdb.com/title/tt0264147/"
   ],
   [
      "1982",
      "Yol",
      "",
      "Serif Gören, Yilmaz Güney",
      "tr,ku",
      "TR,CH",
      "1h 47m",
      "https://www.imdb.com/title/tt0084934/"
   ],
   [
      "1983",
      "Carmen",
      "",
      "Carlos Saura",
      "es",
      "ES",
      "1h 42m",
      "https://www.imdb.com/title/tt0085297/"
   ],
   [
      "1983",
      "Cross Creek",
      "",
      "Martin Ritt",
      "en",
      "US",
      "2h 7m",
      "https://www.imdb.com/title/tt0085380/"
   ],
   [
      "1983",
      "El sur",
      "",
      "Víctor Erice",
      "es",
      "ES,FR",
      "1h 35m",
      "https://www.imdb.com/title/tt0084740/"
   ],
   [
      "1983",
      "Eréndira",
      "",
      "Ruy Guerra",
      "es,pt",
      "MX,FR,DE",
      "1h 43m",
      "https://www.imdb.com/title/tt0085501/"
   ],
   [
      "1983",
      "Heat and Dust",
      "",
      "James Ivory",
      "en",
      "GB",
      "2h 10m",
      "https://www.imdb.com/title/tt0084058/"
   ],
   [
      "1983",
      "Kharij",
      "",
      "Mrinal Sen",
      "bn",
      "IN",
      "1h 39m",
      "https://www.imdb.com/title/tt0084198/"
   ],
   [
      "1983",
      "L'argent",
      "",
      "Robert Bresson",
      "fr",
      "FR,CH",
      "1h 25m",
      "https://www.imdb.com/title/tt0085180/"
   ],
   [
      "1983",
      "The Wounded Man",
      "L'homme blessé",
      "Patrice Chéreau",
      "fr",
      "FR",
      "1h 49m",
      "https://www.imdb.com/title/tt0084085/"
   ],
   [
      "1983",
      "One Deadly Summer",
      "L'été meurtrier",
      "Jean Becker",
      "fr",
      "FR",
      "2h 17m",
      "https://www.imdb.com/title/tt0086655/"
   ],
   [
      "1983",
      "The Moon in the Gutter",
      "La lune dans le caniveau",
      "Jean-Jacques Beineix",
      "fr",
      "FR,IT",
      "2h 17m",
      "https://www.imdb.com/title/tt0085878/"
   ],
   [
      "1983",
      "The Death of Mario Ricci",
      "La mort de Mario Ricci",
      "Claude Goretta",
      "fr",
      "CH,FR,DE",
      "1h 40m",
      "https://www.imdb.com/title/tt0085963/"
   ],
   [
      "1983",
      "The Wall",
      "Duvar",
      "Yilmaz Güney",
      "tr",
      "TR,FR",
      "1h 57m",
      "https://www.imdb.com/title/tt0090982/"
   ],
   [
      "1983",
      "Merry Christmas Mr. Lawrence",
      "",
      "Nagisa Ôshima",
      "en,ja",
      "GB,NZ,JP",
      "2h 3m",
      "https://www.imdb.com/title/tt0085933/"
   ],
   [
      "1983",
      "The Meaning of Life",
      "",
      "Terry Jones",
      "en",
      "GB",
      "1h 47m",
      "https://www.imdb.com/title/tt0085959/"
   ],
   [
      "1983",
      "The Ballad of Narayama",
      "Narayama bushikô",
      "Shôhei Imamura",
      "ja",
      "JP",
      "2h 10m",
      "https://www.imdb.com/title/tt0084390/"
   ],
   [
      "1983",
      "Nostalghia",
      "",
      "Andrei Tarkovsky",
      "it,ru",
      "IT,SU",
      "2h 5m",
      "https://www.imdb.com/title/tt0086022/"
   ],
   [
      "1983",
      "The Story of Piera",
      "Storia di Piera",
      "Marco Ferreri",
      "it",
      "IT,FR,DE",
      "1h 45m",
      "https://www.imdb.com/title/tt0086372/"
   ],
   [
      "1983",
      "Tender Mercies",
      "",
      "Bruce Beresford",
      "en",
      "US",
      "1h 32m",
      "https://www.imdb.com/title/tt0086423/"
   ],
   [
      "1983",
      "The King of Comedy",
      "",
      "Martin Scorsese",
      "en",
      "US",
      "1h 49m",
      "https://www.imdb.com/title/tt0085794/"
   ],
   [
      "1983",
      "The Year of Living Dangerously",
      "",
      "Peter Weir",
      "en,tl,fil,id",
      "AU,US",
      "1h 55m",
      "https://www.imdb.com/title/tt0086617/"
   ],
   [
      "1983",
      "Vokzal dlya dvoikh",
      "",
      "Eldar Ryazanov",
      "ru",
      "SU",
      "2h 21m",
      "https://www.imdb.com/title/tt0084873/"
   ],
   [
      "1983",
      "Visszaesök",
      "",
      "Zsolt Kézdi-Kovács",
      "hu",
      "HU",
      "1h 32m",
      "https://www.imdb.com/title/tt0084871/"
   ],
   [
      "1984",
      "Another Country",
      "",
      "Marek Kanievska",
      "en",
      "GB",
      "1h 30m",
      "https://www.imdb.com/title/tt0086904/"
   ],
   [
      "1984",
      "Bayan ko: Kapit sa patalim",
      "",
      "Lino Brocka",
      "fil,en,tl",
      "PH,FR",
      "1h 48m",
      "https://www.imdb.com/title/tt0086943/"
   ],
   [
      "1984",
      "Cal",
      "",
      "Pat O'Connor",
      "en",
      "GB,IE",
      "1h 42m",
      "https://www.imdb.com/title/tt0087019/"
   ],
   [
      "1984",
      "Dges game utenebia",
      "",
      "Lana Gogoberidze",
      "ru,ka",
      "SU",
      "2h 18m",
      "https://www.imdb.com/title/tt0087136/"
   ],
   [
      "1984",
      "Henry IV",
      "Enrico IV",
      "Marco Bellocchio",
      "it",
      "IT",
      "1h 25m",
      "https://www.imdb.com/title/tt0087208/"
   ],
   [
      "1984",
      "The Home and the World",
      "Ghare-Baire",
      "Satyajit Ray",
      "bn,en",
      "IN",
      "2h 20m",
      "https://www.imdb.com/title/tt0087328/"
   ],
   [
      "1984",
      "La Pirate",
      "",
      "Jacques Doillon",
      "fr,en",
      "FR",
      "1h 28m",
      "https://www.imdb.com/title/tt0087918/"
   ],
   [
      "1984",
      "The Holy Innocents",
      "Los santos inocentes",
      "Mario Camus",
      "es",
      "ES",
      "1h 47m",
      "https://www.imdb.com/title/tt0088040/"
   ],
   [
      "1984",
      "Diary for My Children",
      "Napló gyermekeimnek",
      "Márta Mészáros",
      "hu",
      "HU",
      "1h 46m",
      "https://www.imdb.com/title/tt0084388/"
   ],
   [
      "1984",
      "Paris, Texas",
      "",
      "Wim Wenders",
      "en,es",
      "DE,FR,GB,US",
      "2h 25m",
      "https://www.imdb.com/title/tt0087884/"
   ],
   [
      "1984",
      "Quilombo",
      "",
      "Carlos Diegues",
      "pt",
      "BR,FR",
      "1h 59m",
      "https://www.imdb.com/title/tt0091816/"
   ],
   [
      "1984",
      "Success Is the Best Revenge",
      "",
      "Jerzy Skolimowski",
      "en",
      "FR,GB",
      "1h 31m",
      "https://www.imdb.com/title/tt0088200/"
   ],
   [
      "1984",
      "Voyage to Cythera",
      "Taxidi sta Kythira",
      "Theodoros Angelopoulos",
      "el,en",
      "GR,DE,IT,GB",
      "2h",
      "https://www.imdb.com/title/tt0088241/"
   ],
   [
      "1984",
      "The Bounty",
      "",
      "Roger Donaldson",
      "en",
      "GB,US,NZ",
      "2h 12m",
      "https://www.imdb.com/title/tt0086993/"
   ],
   [
      "1984",
      "The Element of Crime",
      "Forbrydelsens element",
      "Lars von Trier",
      "en,ar,de",
      "DK",
      "1h 44m",
      "https://www.imdb.com/title/tt0087280/"
   ],
   [
      "1984",
      "A Sunday in the Country",
      "Un dimanche à la campagne",
      "Bertrand Tavernier",
      "fr",
      "FR",
      "1h 30m",
      "https://www.imdb.com/title/tt0088318/"
   ],
   [
      "1984",
      "Under the Volcano",
      "",
      "John Huston",
      "en,es",
      "US,MX",
      "1h 52m",
      "https://www.imdb.com/title/tt0088322/"
   ],
   [
      "1984",
      "Vigil",
      "",
      "Vincent Ward",
      "en",
      "NZ",
      "1h 30m",
      "https://www.imdb.com/title/tt0088355/"
   ],
   [
      "1984",
      "Where the Green Ants Dream",
      "Wo die grünen Ameisen träumen",
      "Werner Herzog",
      "en",
      "DE",
      "1h 40m",
      "https://www.imdb.com/title/tt0088412/"
   ],
   [
      "1985",
      "Adieu Bonaparte",
      "",
      "Youssef Chahine",
      "fr,ar",
      "EG,FR",
      "1h 55m",
      "https://www.imdb.com/title/tt0088383/"
   ],
   [
      "1985",
      "Birdy",
      "",
      "Alan Parker",
      "en",
      "US",
      "2h",
      "https://www.imdb.com/title/tt0086969/"
   ],
   [
      "1985",
      "Bliss",
      "",
      "Ray Lawrence",
      "en",
      "AU",
      "1h 52m",
      "https://www.imdb.com/title/tt0088821/"
   ],
   [
      "1985",
      "Derborence",
      "",
      "Francis Reusser",
      "fr",
      "CH,FR",
      "1h 34m",
      "https://www.imdb.com/title/tt0089014/"
   ],
   [
      "1985",
      "Détective",
      "",
      "Jean-Luc Godard",
      "fr,en,it",
      "FR,CH",
      "1h 35m",
      "https://www.imdb.com/title/tt0089066/"
   ],
   [
      "1985",
      "Insignificance",
      "",
      "Nicolas Roeg",
      "en",
      "GB",
      "1h 49m",
      "https://www.imdb.com/title/tt0089343/"
   ],
   [
      "1985",
      "Joshua Then and Now",
      "",
      "Ted Kotcheff",
      "en",
      "CA",
      "2h 58m",
      "https://www.imdb.com/title/tt0089383/"
   ],
   [
      "1985",
      "Kiss of the Spider Woman",
      "",
      "Hector Babenco",
      "en,fr,pt,de",
      "BR,US",
      "2h",
      "https://www.imdb.com/title/tt0089424/"
   ],
   [
      "1985",
      "The Official Story",
      "La historia oficial",
      "Luis Puenzo",
      "es,en",
      "AR",
      "1h 52m",
      "https://www.imdb.com/title/tt0089276/"
   ],
   [
      "1985",
      "Le due vite di Mattia Pascal",
      "",
      "Mario Monicelli",
      "it",
      "IT,FR,DE,ES,GB",
      "2h 5m",
      "https://www.imdb.com/title/tt0089057/"
   ],
   [
      "1985",
      "Mask",
      "",
      "Peter Bogdanovich",
      "en",
      "US",
      "2h",
      "https://www.imdb.com/title/tt0089560/"
   ],
   [
      "1985",
      "Mishima: A Life in Four Chapters",
      "",
      "Paul Schrader",
      "ja,en",
      "US,JP",
      "2h",
      "https://www.imdb.com/title/tt0089603/"
   ],
   [
      "1985",
      "When Father Was Away on Business",
      "Otac na sluzbenom putu",
      "Emir Kusturica",
      "sr,hu",
      "YU",
      "2h 16m",
      "https://www.imdb.com/title/tt0089748/"
   ],
   [
      "1985",
      "Pale Rider",
      "",
      "Clint Eastwood",
      "en",
      "US",
      "1h 55m",
      "https://www.imdb.com/title/tt0089767/"
   ],
   [
      "1985",
      "Cop Au Vin",
      "Poulet au vinaigre",
      "Claude Chabrol",
      "fr",
      "FR",
      "1h 50m",
      "https://www.imdb.com/title/tt0089832/"
   ],
   [
      "1985",
      "Colonel Redl",
      "Oberst Redl",
      "István Szabó",
      "de,en,hu,fr",
      "YU,HU,AT,DE",
      "2h 24m",
      "https://www.imdb.com/title/tt0089716/"
   ],
   [
      "1985",
      "Rendez-vous",
      "",
      "André Téchiné",
      "fr,en",
      "FR",
      "1h 22m",
      "https://www.imdb.com/title/tt0089902/"
   ],
   [
      "1985",
      "Saraba hakobune",
      "",
      "Shûji Terayama",
      "ja",
      "JP",
      "2h 7m",
      "https://www.imdb.com/title/tt0088041/"
   ],
   [
      "1985",
      "Scemo di guerra",
      "",
      "Dino Risi",
      "it",
      "IT,FR",
      "1h 48m",
      "https://www.imdb.com/title/tt0089164/"
   ],
   [
      "1985",
      "The Coca-Cola Kid",
      "",
      "Dusan Makavejev",
      "en",
      "AU",
      "1h 38m",
      "https://www.imdb.com/title/tt0088931/"
   ],
   [
      "1986",
      "After Hours",
      "",
      "Martin Scorsese",
      "en",
      "US",
      "1h 37m",
      "https://www.imdb.com/title/tt0088680/"
   ],
   [
      "1986",
      "Boris Godunov",
      "",
      "Sergey Bondarchuk",
      "ru,fr",
      "SU,CS,DE,PL",
      "2h 21m",
      "https://www.imdb.com/title/tt0092688/"
   ],
   [
      "1986",
      "Down by Law",
      "",
      "Jim Jarmusch",
      "en,it,fr",
      "US,DE",
      "1h 47m",
      "https://www.imdb.com/title/tt0090967/"
   ],
   [
      "1986",
      "Eu Sei Que Vou Te Amar",
      "",
      "Arnaldo Jabor",
      "pt",
      "BR",
      "1h 50m",
      "https://www.imdb.com/title/tt0122480/"
   ],
   [
      "1986",
      "Fool for Love",
      "",
      "Robert Altman",
      "en",
      "US",
      "1h 46m",
      "https://www.imdb.com/title/tt0089160/"
   ],
   [
      "1986",
      "Genesis",
      "",
      "Mrinal Sen",
      "hi",
      "IN,CH,BE,FR",
      "1h 45m",
      "https://www.imdb.com/title/tt0091105/"
   ],
   [
      "1986",
      "I Love You",
      "",
      "Marco Ferreri",
      "fr",
      "FR,IT",
      "1h 41m",
      "https://www.imdb.com/title/tt0091244/"
   ],
   [
      "1986",
      "La dernière image",
      "",
      "Mohammed Lakhdar-Hamina",
      "fr",
      "FR,DZ",
      "3h 15m",
      "https://www.imdb.com/title/tt0091385/"
   ],
   [
      "1986",
      "Scene of the Crime",
      "Le lieu du crime",
      "André Téchiné",
      "fr",
      "FR",
      "1h 30m",
      "https://www.imdb.com/title/tt0091410/"
   ],
   [
      "1986",
      "Max mon amour",
      "",
      "Nagisa Ôshima",
      "fr,en",
      "FR,US",
      "1h 32m",
      "https://www.imdb.com/title/tt0091498/"
   ],
   [
      "1986",
      "Mona Lisa",
      "",
      "Neil Jordan",
      "en",
      "GB",
      "1h 44m",
      "https://www.imdb.com/title/tt0091538/"
   ],
   [
      "1986",
      "The Sacrifice",
      "Offret",
      "Andrei Tarkovsky",
      "sv,is",
      "SE,FR,GB",
      "2h 29m",
      "https://www.imdb.com/title/tt0091670/"
   ],
   [
      "1986",
      "Otello",
      "",
      "Franco Zeffirelli",
      "it",
      "NL,US,IT",
      "1h 58m",
      "https://www.imdb.com/title/tt0091699/"
   ],
   [
      "1986",
      "Pobre mariposa",
      "",
      "Raúl de la Torre",
      "es",
      "AR",
      "2h",
      "https://www.imdb.com/title/tt0091771/"
   ],
   [
      "1986",
      "Rosa Luxemburg",
      "",
      "Margarethe von Trotta",
      "de,pl,fr",
      "DE,CS",
      "2h",
      "https://www.imdb.com/title/tt0091869/"
   ],
   [
      "1986",
      "Runaway Train",
      "",
      "Andrey Konchalovskiy",
      "en",
      "US",
      "1h 51m",
      "https://www.imdb.com/title/tt0089941/"
   ],
   [
      "1986",
      "Ménage",
      "Tenue de soirée",
      "Bertrand Blier",
      "fr",
      "FR",
      "1h 24m",
      "https://www.imdb.com/title/tt0092068/"
   ],
   [
      "1986",
      "The Fringe Dwellers",
      "",
      "Bruce Beresford",
      "en",
      "AU",
      "1h 38m",
      "https://www.imdb.com/title/tt0091081/"
   ],
   [
      "1986",
      "The Mission",
      "",
      "Roland Joffé",
      "en,gn,es",
      "GB,FR,US",
      "2h 5m",
      "https://www.imdb.com/title/tt0091530/"
   ],
   [
      "1986",
      "Thérèse",
      "",
      "Alain Cavalier",
      "fr",
      "FR",
      "1h 34m",
      "https://www.imdb.com/title/tt0092090/"
   ],
   [
      "1987",
      "ARIA",
      "",
      "Robert Altman, Bruce Beresford, Bill Bryden, Jean-Luc Godard, Darek Jarman, Franc Roddam, Nicolas Roeg, Ken Russell, Charles Sturridge, Julien Temple",
      "it,fr,de,en",
      "GB,US",
      "1h 30m",
      "https://www.imdb.com/title/tt0092580/"
   ],
   [
      "1987",
      "Az utolsó kézirat",
      "",
      "Károly Makk",
      "hu",
      "HU",
      "1h 47m",
      "https://www.imdb.com/title/tt0092143/"
   ],
   [
      "1987",
      "Barfly",
      "",
      "Barbet Schroeder",
      "en",
      "US",
      "1h 40m",
      "https://www.imdb.com/title/tt0092618/"
   ],
   [
      "1987",
      "Champ d'honneur",
      "",
      "Jean-Pierre Denis",
      "oc,fr,de",
      "FR",
      "1h 27m",
      "https://www.imdb.com/title/tt0092739/"
   ],
   [
      "1987",
      "Chronicle of a Death Foretold",
      "Cronaca di una morte annunciata",
      "Francesco Rosi",
      "it",
      "IT,FR,CO",
      "1h 49m",
      "https://www.imdb.com/title/tt0092800/"
   ],
   [
      "1987",
      "Wings of Desire",
      "Der Himmel über Berlin",
      "Wim Wenders",
      "de,en,fr,tr,he,es,ja",
      "DE,FR",
      "2h 8m",
      "https://www.imdb.com/title/tt0093191/"
   ],
   [
      "1987",
      "The Family",
      "La famiglia",
      "Ettore Scola",
      "it,fr,hu",
      "IT,FR",
      "2h 7m",
      "https://www.imdb.com/title/tt0093004/"
   ],
   [
      "1987",
      "Dark Eyes",
      "Oci ciornie",
      "Nikita Mikhalkov",
      "it,ru,fr",
      "IT,SU",
      "1h 58m",
      "https://www.imdb.com/title/tt0093664/"
   ],
   [
      "1987",
      "Pierre et Djemila",
      "",
      "Gérard Blain",
      "fr",
      "FR,CH",
      "1h 26m",
      "https://www.imdb.com/title/tt0091754/"
   ],
   [
      "1987",
      "Repentance",
      "Monanieba",
      "Tengiz Abuladze",
      "ka,ru,it,de",
      "SU",
      "2h 33m",
      "https://www.imdb.com/title/tt0093754/"
   ],
   [
      "1987",
      "Prick Up Your Ears",
      "",
      "Stephen Frears",
      "en",
      "GB",
      "1h 45m",
      "https://www.imdb.com/title/tt0093776/"
   ],
   [
      "1987",
      "Shinran: Shiroi michi",
      "",
      "Rentarô Mikuni",
      "ja",
      "JP",
      "2h 20m",
      "https://www.imdb.com/title/tt0170569/"
   ],
   [
      "1987",
      "Shy People",
      "",
      "Andrey Konchalovskiy",
      "en",
      "US",
      "1h 58m",
      "https://www.imdb.com/title/tt0093964/"
   ],
   [
      "1987",
      "Under the Sun of Satan",
      "Sous le soleil de Satan",
      "Maurice Pialat",
      "fr",
      "FR",
      "1h 38m",
      "https://www.imdb.com/title/tt0094011/"
   ],
   [
      "1987",
      "The Belly of an Architect",
      "",
      "Peter Greenaway",
      "en,it",
      "GB,IT",
      "1h 59m",
      "https://www.imdb.com/title/tt0092637/"
   ],
   [
      "1987",
      "The Glass Menagerie",
      "",
      "Paul Newman",
      "en",
      "US,CA",
      "2h 14m",
      "https://www.imdb.com/title/tt0093093/"
   ],
   [
      "1987",
      "Um Trem para as Estrelas",
      "",
      "Carlos Diegues, Tereza Gonzalez",
      "pt",
      "BR,FR",
      "1h 43m",
      "https://www.imdb.com/title/tt0094183/"
   ],
   [
      "1987",
      "A Man in Love",
      "Un homme amoureux",
      "Diane Kurys",
      "it,fr,en",
      "FR,IT,GB,US",
      "2h 5m",
      "https://www.imdb.com/title/tt0094208/"
   ],
   [
      "1987",
      "Yeelen",
      "",
      "Souleymane Cissé",
      "bm,ff",
      "ML,FR,BF,DE",
      "1h 45m",
      "https://www.imdb.com/title/tt0094349/"
   ],
   [
      "1987",
      "Zegen",
      "",
      "Shôhei Imamura",
      "en,zh,ja",
      "JP",
      "2h 4m",
      "https://www.imdb.com/title/tt0094370/"
   ],
   [
      "1988",
      "A World Apart",
      "",
      "Chris Menges",
      "en,sw,af,es",
      "GB,ZW",
      "1h 52m",
      "https://www.imdb.com/title/tt0096464/"
   ],
   [
      "1988",
      "Wuthering Heights",
      "Arashi ga oka",
      "Yoshishige Yoshida",
      "ja",
      "JP,CH",
      "2h 23m",
      "https://www.imdb.com/title/tt0095786/"
   ],
   [
      "1988",
      "Bird",
      "",
      "Clint Eastwood",
      "en",
      "US",
      "2h 41m",
      "https://www.imdb.com/title/tt0094747/"
   ],
   [
      "1988",
      "Chocolat",
      "",
      "Claire Denis",
      "fr,en,ha,ar",
      "FR,DE,CM",
      "1h 45m",
      "https://www.imdb.com/title/tt0094868/"
   ],
   [
      "1988",
      "Drowning by Numbers",
      "",
      "Peter Greenaway",
      "en",
      "NL,GB",
      "1h 58m",
      "https://www.imdb.com/title/tt0092929/"
   ],
   [
      "1988",
      "El Dorado",
      "",
      "Carlos Saura",
      "es",
      "ES,FR,IT",
      "2h 29m",
      "https://www.imdb.com/title/tt0095053/"
   ],
   [
      "1988",
      "Hai zi wang",
      "",
      "Kaige Chen",
      "zh",
      "CN",
      "1h 46m",
      "https://www.imdb.com/title/tt0093133/"
   ],
   [
      "1988",
      "Hanussen",
      "",
      "István Szabó",
      "hu,de",
      "HU,DE,AT",
      "2h 20m",
      "https://www.imdb.com/title/tt0095276/"
   ],
   [
      "1988",
      "A Short Film About Killing",
      "Krótki film o zabijaniu",
      "Krzysztof Kieslowski",
      "pl,en",
      "PL",
      "1h 24m",
      "https://www.imdb.com/title/tt0095468/"
   ],
   [
      "1988",
      "L'enfance de l'art",
      "",
      "Francis Girod",
      "fr",
      "FR",
      "1h 47m",
      "https://www.imdb.com/title/tt0095099/"
   ],
   [
      "1988",
      "L'oeuvre au noir",
      "",
      "André Delvaux",
      "fr",
      "FR,BE",
      "1h 50m",
      "https://www.imdb.com/title/tt0095773/"
   ],
   [
      "1988",
      "El Lute II: mañana seré libre",
      "",
      "Vicente Aranda",
      "es",
      "ES",
      "2h",
      "https://www.imdb.com/title/tt0095559/"
   ],
   [
      "1988",
      "Miles from Home",
      "",
      "Gary Sinise",
      "en",
      "US",
      "1h 48m",
      "https://www.imdb.com/title/tt0095640/"
   ],
   [
      "1988",
      "Os Canibais",
      "",
      "Manoel de Oliveira",
      "pt",
      "PT,FR,DE,IT,CH",
      "1h 30m",
      "https://www.imdb.com/title/tt0094833/"
   ],
   [
      "1988",
      "Pascali's Island",
      "",
      "James Dearden",
      "en",
      "GB",
      "1h 44m",
      "https://www.imdb.com/title/tt0095827/"
   ],
   [
      "1988",
      "Patty Hearst",
      "",
      "Paul Schrader",
      "en",
      "GB,US",
      "1h 48m",
      "https://www.imdb.com/title/tt0095836/"
   ],
   [
      "1988",
      "Pelle the Conqueror",
      "Pelle erobreren",
      "Bille August",
      "da,sv,fi",
      "DK,SE",
      "2h 37m",
      "https://www.imdb.com/title/tt0093713/"
   ],
   [
      "1988",
      "Sur",
      "",
      "Fernando E. Solanas",
      "es,fr",
      "AR,FR",
      "2h 7m",
      "https://www.imdb.com/title/tt0094076/"
   ],
   [
      "1988",
      "The Navigator: A Medieval Odyssey",
      "",
      "Vincent Ward",
      "en",
      "NZ,AU",
      "1h 32m",
      "https://www.imdb.com/title/tt0095709/"
   ],
   [
      "1988",
      "Love and Fear",
      "Paura e amore",
      "Margarethe von Trotta",
      "it,de",
      "FR,IT,DE",
      "1h 52m",
      "https://www.imdb.com/title/tt0095839/"
   ],
   [
      "1988",
      "The Passenger – Welcome to Germany",
      "Der Passagier – Welcome to Germany",
      "Thomas Brasch",
      "de,en",
      "GB,CH,DE",
      "1h 42m",
      "https://www.imdb.com/title/tt0095833/"
   ],
   [
      "1989",
      "A Cry in the Dark",
      "",
      "Fred Schepisi",
      "en",
      "AU,GB,US",
      "2h",
      "https://www.imdb.com/title/tt0094924/"
   ],
   [
      "1989",
      "Chimère",
      "",
      "Claire Devers",
      "fr",
      "FR",
      "1h 34m",
      "https://www.imdb.com/title/tt0094866/"
   ],
   [
      "1989",
      "Spider's Web",
      "Das Spinnennetz",
      "Bernhard Wicki",
      "de",
      "DE",
      "3h 16m",
      "https://www.imdb.com/title/tt0098370/"
   ],
   [
      "1989",
      "Do the Right Thing",
      "",
      "Spike Lee",
      "en,it,es,ko",
      "US",
      "2h",
      "https://www.imdb.com/title/tt0097216/"
   ],
   [
      "1989",
      "Time of the Gypsies",
      "Dom za vesanje",
      "Emir Kusturica",
      "rom,sr,it,en,de,mk,sl",
      "YU,IT,GB",
      "2h 22m",
      "https://www.imdb.com/title/tt0097223/"
   ],
   [
      "1989",
      "Moon Child",
      "El niño de la luna",
      "Agustí Villaronga",
      "es",
      "ES",
      "1h 58m",
      "https://www.imdb.com/title/tt0097986/"
   ],
   [
      "1989",
      "Francis of Asissi",
      "Francesco",
      "Liliana Cavani",
      "en,it",
      "IT,DE",
      "2h 37m",
      "https://www.imdb.com/title/tt0097383/"
   ],
   [
      "1989",
      "Jesus of Montreal",
      "Jésus de Montréal",
      "Denys Arcand",
      "fr,en,it",
      "CA,FR",
      "1h 59m",
      "https://www.imdb.com/title/tt0097635/"
   ],
   [
      "1989",
      "Kuarup",
      "",
      "Ruy Guerra",
      "pt",
      "BR",
      "1h 59m",
      "https://www.imdb.com/title/tt0097689/"
   ],
   [
      "1989",
      "Black Rain",
      "Kuroi ame",
      "Shôhei Imamura",
      "ja",
      "JP",
      "2h 3m",
      "https://www.imdb.com/title/tt0097694/"
   ],
   [
      "1989",
      "The Women on the Roof",
      "Kvinnorna på taket",
      "Carl-Gustav Nykvist",
      "sv",
      "SE",
      "1h 29m",
      "https://www.imdb.com/title/tt0097695/"
   ],
   [
      "1989",
      "Lost Angels",
      "",
      "Hugh Hudson",
      "en",
      "US",
      "1h 56m",
      "https://www.imdb.com/title/tt0097782/"
   ],
   [
      "1989",
      "Monsieur Hire",
      "",
      "Patrice Leconte",
      "fr",
      "FR",
      "1h 21m",
      "https://www.imdb.com/title/tt0097904/"
   ],
   [
      "1989",
      "Mystery Train",
      "",
      "Jim Jarmusch",
      "en,ja,it",
      "JP,US",
      "1h 50m",
      "https://www.imdb.com/title/tt0097940/"
   ],
   [
      "1989",
      "Cinema Paradiso",
      "Nuovo Cinema Paradiso",
      "Giuseppe Tornatore",
      "it",
      "IT,FR",
      "2h 54m",
      "https://www.imdb.com/title/tt0095765/"
   ],
   [
      "1989",
      "Reunion",
      "",
      "Jerry Schatzberg",
      "en,de",
      "FR,DE,GB",
      "1h 50m",
      "https://www.imdb.com/title/tt0098197/"
   ],
   [
      "1989",
      "Rosalie Goes Shopping",
      "",
      "Percy Adlon",
      "en,de",
      "US,DE",
      "1h 34m",
      "https://www.imdb.com/title/tt0098224/"
   ],
   [
      "1989",
      "Sex, Lies, and Videotape",
      "",
      "Steven Soderbergh",
      "en",
      "US",
      "1h 40m",
      "https://www.imdb.com/title/tt0098724/"
   ],
   [
      "1989",
      "Splendor",
      "",
      "Ettore Scola",
      "it",
      "IT,FR",
      "1h 55m",
      "https://www.imdb.com/title/tt0096160/"
   ],
   [
      "1989",
      "Sweetie",
      "",
      "Jane Campion",
      "en",
      "AU",
      "1h 37m",
      "https://www.imdb.com/title/tt0098725/"
   ],
   [
      "1989",
      "Torrents of Spring",
      "",
      "Jerzy Skolimowski",
      "en",
      "GB,FR,IT",
      "1h 41m",
      "https://www.imdb.com/title/tt0096755/"
   ],
   [
      "1989",
      "Too Beautiful for You",
      "Trop belle pour toi",
      "Bertrand Blier",
      "fr",
      "FR",
      "1h 31m",
      "https://www.imdb.com/title/tt0098520/"
   ],
   [
      "1990",
      "Come See the Paradise",
      "",
      "Alan Parker",
      "en,ja",
      "US",
      "2h 18m",
      "https://www.imdb.com/title/tt0099291/"
   ],
   [
      "1990",
      "Cyrano De Bergerac",
      "Cyrano de Bergerac",
      "Jean-Paul Rappeneau",
      "fr",
      "FR",
      "2h 17m",
      "https://www.imdb.com/title/tt0099334/"
   ],
   [
      "1990",
      "Daddy Nostalgia",
      "Daddy Nostalgie",
      "Bertrand Tavernier",
      "fr,en",
      "FR",
      "1h 45m",
      "https://www.imdb.com/title/tt0099341/"
   ],
   [
      "1990",
      "Hidden Agenda",
      "",
      "Ken Loach",
      "en",
      "GB",
      "1h 48m",
      "https://www.imdb.com/title/tt0099768/"
   ],
   [
      "1990",
      "Ju Dou",
      "",
      "Yimou Zhang, Fengliang Yang",
      "zh",
      "CN,JP",
      "1h 35m",
      "https://www.imdb.com/title/tt0099902/"
   ],
   [
      "1990",
      "La captive du désert",
      "",
      "Raymond Depardon",
      "fr",
      "FR",
      "1h 36m",
      "https://www.imdb.com/title/tt0099218/"
   ],
   [
      "1990",
      "The King's Whore",
      "La putain du roi",
      "Axel Corti",
      "fr,en",
      "GB,FR,IT,AT",
      "2h 18m",
      "https://www.imdb.com/title/tt0100440/"
   ],
   [
      "1990",
      "Mother",
      "Mat",
      "Gleb Panfilov",
      "ru",
      "SU,IT",
      "3h 20m",
      "https://www.imdb.com/title/tt0097848/"
   ],
   [
      "1990",
      "Nouvelle vague",
      "",
      "Jean-Luc Godard",
      "fr",
      "FR,CH",
      "1h 30m",
      "https://www.imdb.com/title/tt0100274/"
   ],
   [
      "1990",
      "Interrogation",
      "Przesluchanie",
      "Ryszard Bugajski",
      "pl",
      "PL",
      "1h 58m",
      "https://www.imdb.com/title/tt0084548/"
   ],
   [
      "1990",
      "Rodrigo D: No futuro",
      "",
      "Víctor Gaviria",
      "es",
      "CO",
      "1h 33m",
      "https://www.imdb.com/title/tt0100508/"
   ],
   [
      "1990",
      "Sting of Death",
      "Shi no toge",
      "Kôhei Oguri",
      "ja",
      "JP",
      "1h 55m",
      "https://www.imdb.com/title/tt0131012/"
   ],
   [
      "1990",
      "Everybody's Fine",
      "Stanno tutti bene",
      "Giuseppe Tornatore",
      "it",
      "IT,FR",
      "1h 58m",
      "https://www.imdb.com/title/tt0100681/"
   ],
   [
      "1990",
      "Taxi Blues",
      "Taksi-blyuz",
      "Pavel Lungin",
      "ru",
      "SU,FR",
      "1h 50m",
      "https://www.imdb.com/title/tt0100757/"
   ],
   [
      "1990",
      "The Law",
      "Tilaï",
      "Idrissa Ouedraogo",
      "mos",
      "BF,FR,GB,CH,DE",
      "1h 21m",
      "https://www.imdb.com/title/tt0100784/"
   ],
   [
      "1990",
      "The Ear",
      "Ucho",
      "Karel Kachyna",
      "cs,ru",
      "CS",
      "1h 34m",
      "https://www.imdb.com/title/tt0066498/"
   ],
   [
      "1990",
      "White Hunter Black Heart",
      "",
      "Clint Eastwood",
      "en",
      "US",
      "1h 52m",
      "https://www.imdb.com/title/tt0100928/"
   ],
   [
      "1990",
      "Wild at Heart",
      "",
      "David Lynch",
      "en,es",
      "US",
      "2h 5m",
      "https://www.imdb.com/title/tt0100935/"
   ],
   [
      "1991",
      "A Rage in Harlem",
      "",
      "Bill Duke",
      "en",
      "GB,US",
      "1h 55m",
      "https://www.imdb.com/title/tt0102749/"
   ],
   [
      "1991",
      "Anna Karamazoff",
      "",
      "Rustam Khamdamov",
      "ru",
      "SU,FR",
      "2h 5m",
      "https://www.imdb.com/title/tt0220309/"
   ],
   [
      "1991",
      "Assassin of the Tsar",
      "Tsareubiytsa",
      "Karen Shakhnazarov",
      "ru,en",
      "SU,GB",
      "1h 44m",
      "https://www.imdb.com/title/tt0103135/"
   ],
   [
      "1991",
      "Barton Fink",
      "",
      "Joel Coen, Ethan Coen",
      "en",
      "GB,US",
      "1h 56m",
      "https://www.imdb.com/title/tt0101410/"
   ],
   [
      "1991",
      "Life on a String",
      "Bian zou bian chang",
      "Kaige Chen",
      "zh",
      "CN,DE,GB",
      "1h 50m",
      "https://www.imdb.com/title/tt0101440/"
   ],
   [
      "1991",
      "Bix",
      "",
      "Pupi Avati",
      "en",
      "IT,US",
      "1h 40m",
      "https://www.imdb.com/title/tt0101460/"
   ],
   [
      "1991",
      "Europa",
      "",
      "Lars von Trier",
      "en,de,fr",
      "DK,SE,FR,DE,CH",
      "1h 52m",
      "https://www.imdb.com/title/tt0101829/"
   ],
   [
      "1991",
      "Guilty by Suspicion",
      "",
      "Irwin Winkler",
      "en",
      "US",
      "1h 45m",
      "https://www.imdb.com/title/tt0101984/"
   ],
   [
      "1991",
      "Homicide",
      "",
      "David Mamet",
      "en",
      "US",
      "1h 42m",
      "https://www.imdb.com/title/tt0102048/"
   ],
   [
      "1991",
      "Out of Life",
      "Hors la vie",
      "Maroun Bagdadi",
      "fr,ar,en",
      "FR,BE,IT",
      "1h 37m",
      "https://www.imdb.com/title/tt0102058/"
   ],
   [
      "1991",
      "Il portaborse",
      "",
      "Daniele Luchetti",
      "it",
      "IT,FR",
      "1h 35m",
      "https://www.imdb.com/title/tt0102693/"
   ],
   [
      "1991",
      "Jungle Fever",
      "",
      "Spike Lee",
      "en",
      "US",
      "2h 12m",
      "https://www.imdb.com/title/tt0102175/"
   ],
   [
      "1991",
      "La Belle Noiseuse",
      "",
      "Jacques Rivette",
      "fr,en,he",
      "FR,CH",
      "3h 58m",
      "https://www.imdb.com/title/tt0101428/"
   ],
   [
      "1991",
      "The Flesh",
      "La carne",
      "Marco Ferreri",
      "it",
      "IT",
      "1h 30m",
      "https://www.imdb.com/title/tt0101548/"
   ],
   [
      "1991",
      "The Double Life of Véronique",
      "La double vie de Véronique",
      "Krzysztof Kieslowski",
      "fr,pl,it",
      "FR,PL,NO",
      "1h 38m",
      "https://www.imdb.com/title/tt0101765/"
   ],
   [
      "1991",
      "The Suspended Step of the Stork",
      "To meteoro vima tou pelargou",
      "Theodoros Angelopoulos",
      "ku,fa,tr,fr,en,el",
      "FR,GR,CH,IT",
      "2h 23m",
      "https://www.imdb.com/title/tt0102439/"
   ],
   [
      "1991",
      "Lune froide",
      "",
      "Patrick Bouchitey",
      "fr",
      "FR",
      "1h 32m",
      "https://www.imdb.com/title/tt0102358/"
   ],
   [
      "1991",
      "Malina",
      "",
      "Werner Schroeter",
      "fr,de",
      "DE,AT",
      "2h 5m",
      "https://www.imdb.com/title/tt0102383/"
   ],
   [
      "1991",
      "Van Gogh",
      "",
      "Maurice Pialat",
      "fr,en",
      "FR",
      "2h 38m",
      "https://www.imdb.com/title/tt0103190/"
   ],
   [
      "1992",
      "A Stranger Among Us",
      "",
      "Sidney Lumet",
      "en,yi,he",
      "US",
      "1h 50m",
      "https://www.imdb.com/title/tt0105483/"
   ],
   [
      "1992",
      "Au pays des Juliets",
      "",
      "Mehdi Charef",
      "fr",
      "FR",
      "1h 32m",
      "https://www.imdb.com/title/tt0103732/"
   ],
   [
      "1992",
      "Basic Instinct",
      "",
      "Paul Verhoeven",
      "en",
      "US,FR",
      "2h 7m",
      "https://www.imdb.com/title/tt0103772/"
   ],
   [
      "1992",
      "Crush",
      "",
      "Alison Maclean",
      "en",
      "NZ",
      "1h 37m",
      "https://www.imdb.com/title/tt0104033/"
   ],
   [
      "1992",
      "Dark at Noon",
      "L'oeil qui ment",
      "Raúl Ruiz",
      "fr,en",
      "FR,PT",
      "1h 40m",
      "https://www.imdb.com/title/tt0105045/"
   ],
   [
      "1992",
      "The Best Intentions",
      "Den goda viljan",
      "Bille August",
      "sv",
      "SE,DK,FI,FR,DE,GB,IT,NO,IS",
      "3h",
      "https://www.imdb.com/title/tt0104350/"
   ],
   [
      "1992",
      "Dream of Light",
      "El sol del membrillo",
      "Víctor Erice",
      "es,pl,zh",
      "ES",
      "2h 13m",
      "https://www.imdb.com/title/tt0105438/"
   ],
   [
      "1992",
      "The Journey",
      "El viaje",
      "Fernando E. Solanas",
      "es",
      "AR,FR,DE,IT,JP,MX,ES,GB",
      "2h 30m",
      "https://www.imdb.com/title/tt0105744/"
   ],
   [
      "1992",
      "Howards End",
      "",
      "James Ivory",
      "en,de",
      "GB,JP,US",
      "2h 22m",
      "https://www.imdb.com/title/tt0104454/"
   ],
   [
      "1992",
      "Hyenas",
      "Hyènes",
      "Djibril Diop Mambéty",
      "wo,fr,ja",
      "SN,FR,CH,GB,NL,IT",
      "1h 50m",
      "https://www.imdb.com/title/tt0104467/"
   ],
   [
      "1992",
      "The Stolen Children",
      "Il ladro di bambini",
      "Gianni Amelio",
      "it",
      "IT,FR,CH",
      "1h 54m",
      "https://www.imdb.com/title/tt0104663/"
   ],
   [
      "1992",
      "The Sentinel",
      "La sentinelle",
      "Arnaud Desplechin",
      "fr,de,ru,en",
      "FR",
      "2h 19m",
      "https://www.imdb.com/title/tt0105356/"
   ],
   [
      "1992",
      "The Return of Casanova",
      "Le retour de Casanova",
      "Edouard Niermans",
      "fr",
      "FR",
      "1h 33m",
      "https://www.imdb.com/title/tt0105243/"
   ],
   [
      "1992",
      "Leolo",
      "Léolo",
      "Jean-Claude Lauzon",
      "fr",
      "CA,FR",
      "1h 47m",
      "https://www.imdb.com/title/tt0104782/"
   ],
   [
      "1992",
      "Luna Park",
      "",
      "Pavel Lungin",
      "ru",
      "FR,RU",
      "1h 51m",
      "https://www.imdb.com/title/tt0104776/"
   ],
   [
      "1992",
      "Of Mice and Men",
      "",
      "Gary Sinise",
      "en",
      "US",
      "1h 55m",
      "https://www.imdb.com/title/tt0105046/"
   ],
   [
      "1992",
      "An Independent Life",
      "Samostoyatelnaya zhizn",
      "Vitali Kanevsky",
      "ru",
      "FR,RU,GB",
      "1h 37m",
      "https://www.imdb.com/title/tt0105309/"
   ],
   [
      "1992",
      "Simple Men",
      "",
      "Hal Hartley",
      "en",
      "GB,IT,US",
      "1h 45m",
      "https://www.imdb.com/title/tt0105411/"
   ],
   [
      "1992",
      "The Long Day Closes",
      "",
      "Terence Davies",
      "en",
      "GB",
      "1h 25m",
      "https://www.imdb.com/title/tt0104753/"
   ],
   [
      "1992",
      "The Player",
      "",
      "Robert Altman",
      "en",
      "US",
      "2h 4m",
      "https://www.imdb.com/title/tt0105151/"
   ],
   [
      "1992",
      "Twin Peaks: Fire Walk with Me",
      "",
      "David Lynch",
      "en",
      "FR,US",
      "2h 14m",
      "https://www.imdb.com/title/tt0105665/"
   ],
   [
      "1993",
      "Farewell My Concubine",
      "Ba wang bie ji",
      "Kaige Chen",
      "zh",
      "CN,HK",
      "2h 51m",
      "https://www.imdb.com/title/tt0106332/"
   ],
   [
      "1993",
      "Body Snatchers",
      "",
      "Abel Ferrara",
      "en",
      "US",
      "1h 27m",
      "https://www.imdb.com/title/tt0106452/"
   ],
   [
      "1993",
      "Broken Highway",
      "",
      "Laurie McInnes",
      "en",
      "AU",
      "1h 38m",
      "https://www.imdb.com/title/tt0106487/"
   ],
   [
      "1993",
      "Dyuba-Dyuba",
      "",
      "Aleksandr Khvan",
      "ru",
      "RU",
      "2h 20m",
      "https://www.imdb.com/title/tt0106786/"
   ],
   [
      "1993",
      "Falling Down",
      "",
      "Joel Schumacher",
      "en,es,ko",
      "US,FR,GB",
      "1h 53m",
      "https://www.imdb.com/title/tt0106856/"
   ],
   [
      "1993",
      "Fiorile",
      "",
      "Paolo Taviani, Vittorio Taviani",
      "it,fr",
      "IT,FR,DE",
      "1h 59m",
      "https://www.imdb.com/title/tt0106911/"
   ],
   [
      "1993",
      "Frauds",
      "",
      "Stephan Elliott",
      "en",
      "AU",
      "1h 30m",
      "https://www.imdb.com/title/tt0106963/"
   ],
   [
      "1993",
      "Friends",
      "",
      "Elaine Proctor",
      "en,af,zu",
      "GB,FR,ZA",
      "1h 45m",
      "https://www.imdb.com/title/tt0106968/"
   ],
   [
      "1993",
      "The Puppetmaster",
      "Xi meng ren sheng",
      "Hsiao-Hsien Hou",
      "zh,ja",
      "TW",
      "2h 22m",
      "https://www.imdb.com/title/tt0107157/"
   ],
   [
      "1993",
      "Faraway, So Close!",
      "In weiter Ferne, so nah!",
      "Wim Wenders",
      "de,fr,en,it,ru",
      "DE",
      "2h 26m",
      "https://www.imdb.com/title/tt0107209/"
   ],
   [
      "1993",
      "King of the Hill",
      "",
      "Steven Soderbergh",
      "en",
      "US",
      "1h 43m",
      "https://www.imdb.com/title/tt0107322/"
   ],
   [
      "1993",
      "The Man by the Shore",
      "L'homme sur les quais",
      "Raoul Peck",
      "fr",
      "FR,CA,HT,DE",
      "1h 46m",
      "https://www.imdb.com/title/tt0107132/"
   ],
   [
      "1993",
      "La scorta",
      "",
      "Ricky Tognazzi",
      "it",
      "IT",
      "1h 36m",
      "https://www.imdb.com/title/tt0108059/"
   ],
   [
      "1993",
      "Libera me",
      "",
      "Alain Cavalier",
      "",
      "FR",
      "1h 15m",
      "https://www.imdb.com/title/tt0107403/"
   ],
   [
      "1993",
      "Louis: The Child King",
      "Louis, enfant roi",
      "Roger Planchon",
      "fr",
      "FR",
      "2h 40m",
      "https://www.imdb.com/title/tt0107446/"
   ],
   [
      "1993",
      "My Favorite Season",
      "Ma saison préférée",
      "André Téchiné",
      "fr",
      "FR",
      "2h 7m",
      "https://www.imdb.com/title/tt0107471/"
   ],
   [
      "1993",
      "Magnificat",
      "",
      "Pupi Avati",
      "it",
      "IT",
      "1h 35m",
      "https://www.imdb.com/title/tt0107485/"
   ],
   [
      "1993",
      "Mazeppa",
      "",
      "Bartabas",
      "fr",
      "FR",
      "1h 51m",
      "https://www.imdb.com/title/tt0107535/"
   ],
   [
      "1993",
      "Much Ado About Nothing",
      "",
      "Kenneth Branagh",
      "en",
      "GB,US",
      "1h 51m",
      "https://www.imdb.com/title/tt0107616/"
   ],
   [
      "1993",
      "Naked",
      "",
      "Mike Leigh",
      "en",
      "GB",
      "2h 11m",
      "https://www.imdb.com/title/tt0107653/"
   ],
   [
      "1993",
      "Raining Stones",
      "",
      "Ken Loach",
      "en",
      "GB",
      "1h 30m",
      "https://www.imdb.com/title/tt0107920/"
   ],
   [
      "1993",
      "Splitting Heirs",
      "",
      "Robert Young",
      "en",
      "GB",
      "1h 27m",
      "https://www.imdb.com/title/tt0108207/"
   ],
   [
      "1993",
      "The Piano",
      "",
      "Jane Campion",
      "en",
      "AU,FR,NZ",
      "2h 1m",
      "https://www.imdb.com/title/tt0107822/"
   ],
   [
      "1994",
      "Barnabo of the Mountains",
      "Barnabo delle montagne",
      "Mario Brenta",
      "it",
      "IT,FR,CH",
      "2h 4m",
      "https://www.imdb.com/title/tt0109221/"
   ],
   [
      "1994",
      "Caro Diario",
      "Caro diario",
      "Nanni Moretti",
      "it,en,zh",
      "IT,FR",
      "1h 40m",
      "https://www.imdb.com/title/tt0109382/"
   ],
   [
      "1994",
      "A Confucian Confusion",
      "Du li shi dai",
      "Edward Yang",
      "zh",
      "TW",
      "2h 5m",
      "https://www.imdb.com/title/tt0109685/"
   ],
   [
      "1994",
      "Exotica",
      "",
      "Atom Egoyan",
      "en,he",
      "CA",
      "1h 43m",
      "https://www.imdb.com/title/tt0109759/"
   ],
   [
      "1994",
      "Dead Tired",
      "Grosse fatigue",
      "Michel Blanc",
      "fr,en",
      "FR",
      "1h 32m",
      "https://www.imdb.com/title/tt0109942/"
   ],
   [
      "1994",
      "To Live",
      "Huo zhe",
      "Yimou Zhang",
      "zh",
      "HK,CN",
      "2h 13m",
      "https://www.imdb.com/title/tt0110081/"
   ],
   [
      "1994",
      "Kurochka Ryaba",
      "",
      "Andrey Konchalovskiy",
      "ru",
      "RU,FR",
      "1h 57m",
      "https://www.imdb.com/title/tt0110289/"
   ],
   [
      "1994",
      "The Queen of the Night",
      "La reina de la noche",
      "Arturo Ripstein",
      "es",
      "MX,FR,US",
      "1h 57m",
      "https://www.imdb.com/title/tt0110961/"
   ],
   [
      "1994",
      "Queen Margot",
      "La reine Margot",
      "Patrice Chéreau",
      "fr,it",
      "FR,DE,IT",
      "2h 41m",
      "https://www.imdb.com/title/tt0110963/"
   ],
   [
      "1994",
      "The Whores",
      "Le buttane",
      "Aurelio Grimaldi",
      "it",
      "IT",
      "1h 25m",
      "https://www.imdb.com/title/tt0109353/"
   ],
   [
      "1994",
      "The Violin Player",
      "Le joueur de violon",
      "Charles Van Damme",
      "fr",
      "FR,DE,BE",
      "1h 34m",
      "https://www.imdb.com/title/tt0110210/"
   ],
   [
      "1994",
      "The Patriots",
      "Les patriotes",
      "Eric Rochant",
      "fr,en,he",
      "FR",
      "2h 18m",
      "https://www.imdb.com/title/tt0110796/"
   ],
   [
      "1994",
      "Mrs. Parker and the Vicious Circle",
      "",
      "Alan Rudolph",
      "en",
      "US,CA",
      "2h 5m",
      "https://www.imdb.com/title/tt0110588/"
   ],
   [
      "1994",
      "The Rice People",
      "Neak sre",
      "Rithy Panh",
      "km",
      "KH,FR,CH,DE",
      "2h 5m",
      "https://www.imdb.com/title/tt0107662/"
   ],
   [
      "1994",
      "Burnt by the Sun",
      "Utomlennye solntsem",
      "Nikita Mikhalkov",
      "ru,fr",
      "RU,FR",
      "2h 15m",
      "https://www.imdb.com/title/tt0111579/"
   ],
   [
      "1994",
      "Pulp Fiction",
      "",
      "Quentin Tarantino",
      "en,es,fr",
      "US",
      "2h 34m",
      "https://www.imdb.com/title/tt0110912/"
   ],
   [
      "1994",
      "Swaham",
      "",
      "Shaji N. Karun",
      "ml",
      "IN",
      "2h 21m",
      "https://www.imdb.com/title/tt0111332/"
   ],
   [
      "1994",
      "The Browning Version",
      "",
      "Mike Figgis",
      "en",
      "GB",
      "1h 37m",
      "https://www.imdb.com/title/tt0109340/"
   ],
   [
      "1994",
      "The Hudsucker Proxy",
      "",
      "Joel Coen, Ethan Coen",
      "en",
      "GB,DE,US",
      "1h 51m",
      "https://www.imdb.com/title/tt0110074/"
   ],
   [
      "1994",
      "Three Colours: Red",
      "Trois couleurs: Rouge",
      "Krzysztof Kieslowski",
      "fr",
      "FR,CH,PL",
      "1h 39m",
      "https://www.imdb.com/title/tt0111495/"
   ],
   [
      "1994",
      "An Unforgettable Summer",
      "Un été inoubliable",
      "Lucian Pintilie",
      "ro,fr,en",
      "RO,FR",
      "1h 22m",
      "https://www.imdb.com/title/tt0111546/"
   ],
   [
      "1994",
      "A Pure Formality",
      "Una pura formalità",
      "Giuseppe Tornatore",
      "fr",
      "IT,FR",
      "1h 48m",
      "https://www.imdb.com/title/tt0110917/"
   ],
   [
      "1994",
      "Through the Olive Trees",
      "Zire darakhatan zeyton",
      "Abbas Kiarostami",
      "fa",
      "IR,FR",
      "1h 43m",
      "https://www.imdb.com/title/tt0111845/"
   ],
   [
      "1995",
      "Angels and Insects",
      "",
      "Philip Haas",
      "en",
      "GB,US",
      "1h 56m",
      "https://www.imdb.com/title/tt0112365/"
   ],
   [
      "1995",
      "Between the Devil and the Deep Blue Sea",
      "",
      "Marion Hänsel",
      "nl,en",
      "BE,FR,GB",
      "1h 32m",
      "https://www.imdb.com/title/tt0112491/"
   ],
   [
      "1995",
      "Beyond Rangoon",
      "",
      "John Boorman",
      "en",
      "GB,US",
      "1h 40m",
      "https://www.imdb.com/title/tt0112495/"
   ],
   [
      "1995",
      "Carrington",
      "",
      "Christopher Hampton",
      "en",
      "GB,FR",
      "2h 1m",
      "https://www.imdb.com/title/tt0112637/"
   ],
   [
      "1995",
      "Dead Man",
      "",
      "Jim Jarmusch",
      "en",
      "US,DE,JP",
      "2h 1m",
      "https://www.imdb.com/title/tt0112817/"
   ],
   [
      "1995",
      "Ed Wood",
      "",
      "Tim Burton",
      "en",
      "US",
      "2h 7m",
      "https://www.imdb.com/title/tt0109707/"
   ],
   [
      "1995",
      "Good Men, Good Women",
      "Hao nan hao nu",
      "Hsiao-Hsien Hou",
      "zh,ja",
      "JP,TW",
      "1h 48m",
      "https://www.imdb.com/title/tt0113256/"
   ],
   [
      "1995",
      "Stories from the Kronen",
      "Historias del Kronen",
      "Montxo Armendáriz",
      "es",
      "ES,FR,DE",
      "1h 35m",
      "https://www.imdb.com/title/tt0110036/"
   ],
   [
      "1995",
      "Jefferson in Paris",
      "",
      "James Ivory",
      "en,fr",
      "US,FR",
      "2h 19m",
      "https://www.imdb.com/title/tt0113463/"
   ],
   [
      "1995",
      "Kids",
      "",
      "Larry Clark",
      "en,es",
      "US",
      "1h 31m",
      "https://www.imdb.com/title/tt0113540/"
   ],
   [
      "1995",
      "Troubling Love",
      "L'amore molesto",
      "Mario Martone",
      "it",
      "IT",
      "1h 44m",
      "https://www.imdb.com/title/tt0112352/"
   ],
   [
      "1995",
      "The City of Lost Children",
      "La cité des enfants perdus",
      "Marc Caro, Jean-Pierre Jeunet",
      "fr,zh",
      "FR,DE,ES,BE,US",
      "1h 52m",
      "https://www.imdb.com/title/tt0112682/"
   ],
   [
      "1995",
      "La haine",
      "",
      "Mathieu Kassovitz",
      "fr",
      "FR",
      "1h 38m",
      "https://www.imdb.com/title/tt0113247/"
   ],
   [
      "1995",
      "Land and Freedom",
      "",
      "Ken Loach",
      "en,es,ca",
      "GB,FR,IT,DE,ES,US",
      "1h 49m",
      "https://www.imdb.com/title/tt0114671/"
   ],
   [
      "1995",
      "Don't Forget You're Going to Die",
      "N'oublie pas que tu vas mourir",
      "Xavier Beauvois",
      "fr",
      "FR",
      "1h 58m",
      "https://www.imdb.com/title/tt0113909/"
   ],
   [
      "1995",
      "The Convent",
      "O Convento",
      "Manoel de Oliveira",
      "fr,en,pt,de",
      "PT,FR",
      "1h 31m",
      "https://www.imdb.com/title/tt0112716/"
   ],
   [
      "1995",
      "The Snails' Senator",
      "Senatorul melcilor",
      "Mircea Daneliuc",
      "ro",
      "RO",
      "1h 40m",
      "https://www.imdb.com/title/tt0114387/"
   ],
   [
      "1995",
      "Sharaku",
      "",
      "Masahiro Shinoda",
      "ja",
      "JP",
      "2h 18m",
      "https://www.imdb.com/title/tt0114413/"
   ],
   [
      "1995",
      "The Madness of King George",
      "",
      "Nicholas Hytner",
      "en",
      "GB,US",
      "1h 50m",
      "https://www.imdb.com/title/tt0110428/"
   ],
   [
      "1995",
      "The Neon Bible",
      "",
      "Terence Davies",
      "en",
      "GB,ES",
      "1h 31m",
      "https://www.imdb.com/title/tt0113952/"
   ],
   [
      "1995",
      "Ulysses' Gaze",
      "To vlemma tou Odyssea",
      "Theodoros Angelopoulos",
      "en,el,bg,sq,sr,ro,ku,mk,de",
      "GR,FR,IT,DE,GB,YU,RO,AL,BA",
      "2h 56m",
      "https://www.imdb.com/title/tt0114863/"
   ],
   [
      "1995",
      "Underground",
      "",
      "Emir Kusturica",
      "sr,de,fr,en,ru",
      "YU,FR,DE,BG,CZ,HU,GB,US",
      "2h 50m",
      "https://www.imdb.com/title/tt0114787/"
   ],
   [
      "1995",
      "Waati",
      "",
      "Souleymane Cissé",
      "bm",
      "FR,ML,BF",
      "2h 20m",
      "https://www.imdb.com/title/tt0111651/"
   ],
   [
      "1995",
      "Shanghai Triad",
      "Yao a yao, yao dao wai po qiao",
      "Yimou Zhang",
      "zh",
      "FR,CN",
      "1h 48m",
      "https://www.imdb.com/title/tt0115012/"
   ],
   [
      "1996",
      "Breaking the Waves",
      "",
      "Lars von Trier",
      "en",
      "DK,SE,FR,NL,NO,IS,ES,GB",
      "2h 39m",
      "https://www.imdb.com/title/tt0115751/"
   ],
   [
      "1996",
      "My Sex Life... Or How I Got Into an Argument",
      "Comment je me suis disputé... (ma vie sexuelle)",
      "Arnaud Desplechin",
      "fr",
      "FR",
      "2h 58m",
      "https://www.imdb.com/title/tt0115928/"
   ],
   [
      "1996",
      "Crash",
      "",
      "David Cronenberg",
      "en,sv",
      "GB,CA,US",
      "1h 40m",
      "https://www.imdb.com/title/tt0115964/"
   ],
   [
      "1996",
      "Fargo",
      "",
      "Joel Coen, Ethan Coen",
      "en",
      "GB,US",
      "1h 38m",
      "https://www.imdb.com/title/tt0116282/"
   ],
   [
      "1996",
      "Goodbye South, Goodbye",
      "Nan guo zai jian, nan guo",
      "Hsiao-Hsien Hou",
      "zh",
      "TW,JP",
      "2h 4m",
      "https://www.imdb.com/title/tt0117151/"
   ],
   [
      "1996",
      "Kansas City",
      "",
      "Robert Altman",
      "en",
      "FR,US",
      "1h 56m",
      "https://www.imdb.com/title/tt0116745/"
   ],
   [
      "1996",
      "Drifting Clouds",
      "Kauas pilvet karkaavat",
      "Aki Kaurismäki",
      "fi,sv,en",
      "FI,DE,FR",
      "1h 35m",
      "https://www.imdb.com/title/tt0116752/"
   ],
   [
      "1996",
      "The Second Time",
      "La seconda volta",
      "Mimmo Calopresti",
      "it",
      "IT,FR",
      "1h 20m",
      "https://www.imdb.com/title/tt0114374/"
   ],
   [
      "1996",
      "The Eighth Day",
      "Le huitième jour",
      "Jaco Van Dormael",
      "fr",
      "BE,FR,GB",
      "1h 58m",
      "https://www.imdb.com/title/tt0116581/"
   ],
   [
      "1996",
      "Thieves",
      "Les voleurs",
      "André Téchiné",
      "fr",
      "FR",
      "1h 57m",
      "https://www.imdb.com/title/tt0118100/"
   ],
   [
      "1996",
      "Po di Sangui",
      "",
      "Flora Gomes",
      "kea",
      "FR,GW,TN,PT",
      "1h 30m",
      "https://www.imdb.com/title/tt0117352/"
   ],
   [
      "1996",
      "Ridicule",
      "",
      "Patrice Leconte",
      "fr",
      "FR",
      "1h 42m",
      "https://www.imdb.com/title/tt0117477/"
   ],
   [
      "1996",
      "Secrets & Lies",
      "",
      "Mike Leigh",
      "en",
      "GB,FR",
      "2h 16m",
      "https://www.imdb.com/title/tt0117589/"
   ],
   [
      "1996",
      "Stealing Beauty",
      "",
      "Bernardo Bertolucci",
      "en,fr,de,es,it",
      "GB,FR,IT",
      "1h 58m",
      "https://www.imdb.com/title/tt0117737/"
   ],
   [
      "1996",
      "The Sunchaser",
      "",
      "Michael Cimino",
      "en,nv",
      "US",
      "2h 2m",
      "https://www.imdb.com/title/tt0117781/"
   ],
   [
      "1996",
      "Temptress Moon",
      "Feng yue",
      "Kaige Chen",
      "zh",
      "CN,HK",
      "2h 10m",
      "https://www.imdb.com/title/tt0116295/"
   ],
   [
      "1996",
      "The Quiet Room",
      "",
      "Rolf de Heer",
      "en",
      "AU,IT,FR",
      "1h 33m",
      "https://www.imdb.com/title/tt0117422/"
   ],
   [
      "1996",
      "The Van",
      "",
      "Stephen Frears",
      "en",
      "IE,GB,US",
      "1h 40m",
      "https://www.imdb.com/title/tt0118064/"
   ],
   [
      "1996",
      "Earth",
      "Tierra",
      "Julio Medem",
      "es",
      "ES",
      "2h 5m",
      "https://www.imdb.com/title/tt0117909/"
   ],
   [
      "1996",
      "Three Lives and Only One Death",
      "Trois vies et une seule mort",
      "Raoul Ruiz",
      "fr,it,ru",
      "FR,PT",
      "2h 3m",
      "https://www.imdb.com/title/tt0117968/"
   ],
   [
      "1996",
      "Too Late",
      "Prea târziu",
      "Lucian Pintilie",
      "fr,sv",
      "RO,FR",
      "1h 46m",
      "https://www.imdb.com/title/tt0120378/"
   ],
   [
      "1996",
      "A Self-Made Hero",
      "Un héros très discret",
      "Jacques Audiard",
      "fr",
      "FR",
      "1h 47m",
      "https://www.imdb.com/title/tt0118020/"
   ],
   [
      "1997",
      "Assassin(s)",
      "",
      "Mathieu Kassovitz",
      "fr",
      "FR,DE",
      "2h 8m",
      "https://www.imdb.com/title/tt0118644/"
   ],
   [
      "1997",
      "Funny Games",
      "",
      "Michael Haneke",
      "de,fr,it",
      "AT",
      "1h 48m",
      "https://www.imdb.com/title/tt0119167/"
   ],
   [
      "1997",
      "Happy Together",
      "Chun gwong ja sit",
      "Kar-Wai Wong",
      "zh,es,en",
      "HK,KR,JP",
      "1h 36m",
      "https://www.imdb.com/title/tt0118845/"
   ],
   [
      "1997",
      "The Prince of Homburg",
      "Il principe di Homburg",
      "Marco Bellocchio",
      "it",
      "IT",
      "1h 29m",
      "https://www.imdb.com/title/tt0119948/"
   ],
   [
      "1997",
      "Kini and Adams",
      "",
      "Idrissa Ouedraogo",
      "en",
      "FR,BF",
      "1h 33m",
      "https://www.imdb.com/title/tt0119463/"
   ],
   [
      "1997",
      "L.A. Confidential",
      "",
      "Curtis Hanson",
      "en",
      "US",
      "2h 18m",
      "https://www.imdb.com/title/tt0119488/"
   ],
   [
      "1997",
      "The Banned Woman",
      "La femme défendue",
      "Philippe Harel",
      "fr",
      "FR",
      "1h 40m",
      "https://www.imdb.com/title/tt0119113/"
   ],
   [
      "1997",
      "The Truce",
      "La tregua",
      "Francesco Rosi",
      "fr,en,ru,de,pl,it",
      "IT,FR,DE,CH",
      "2h 5m",
      "https://www.imdb.com/title/tt0117959/"
   ],
   [
      "1997",
      "Nil by Mouth",
      "",
      "Gary Oldman",
      "en",
      "GB,FR",
      "2h 8m",
      "https://www.imdb.com/title/tt0119792/"
   ],
   [
      "1997",
      "She's So Lovely",
      "",
      "Nick Cassavetes",
      "en",
      "FR,US",
      "1h 40m",
      "https://www.imdb.com/title/tt0120112/"
   ],
   [
      "1997",
      "Taste of Cherry",
      "Ta'm e guilass",
      "Abbas Kiarostami",
      "fa",
      "IR,FR",
      "1h 35m",
      "https://www.imdb.com/title/tt0120265/"
   ],
   [
      "1997",
      "The Brave",
      "",
      "Johnny Depp",
      "en",
      "US",
      "2h 3m",
      "https://www.imdb.com/title/tt0118768/"
   ],
   [
      "1997",
      "The End of Violence",
      "",
      "Wim Wenders",
      "en,es",
      "FR,DE,US",
      "2h 2m",
      "https://www.imdb.com/title/tt0119062/"
   ],
   [
      "1997",
      "The Ice Storm",
      "",
      "Ang Lee",
      "en",
      "FR,US",
      "1h 52m",
      "https://www.imdb.com/title/tt0119349/"
   ],
   [
      "1997",
      "The Serpent's Kiss",
      "",
      "Philippe Rousselot",
      "en",
      "GB",
      "1h 44m",
      "https://www.imdb.com/title/tt0120100/"
   ],
   [
      "1997",
      "The Sweet Hereafter",
      "",
      "Atom Egoyan",
      "en",
      "CA",
      "1h 52m",
      "https://www.imdb.com/title/tt0120255/"
   ],
   [
      "1997",
      "The Well",
      "",
      "Samantha Lang",
      "en",
      "AU",
      "1h 41m",
      "https://www.imdb.com/title/tt0120493/"
   ],
   [
      "1997",
      "The Eel",
      "Unagi",
      "Shôhei Imamura",
      "ja",
      "JP",
      "1h 57m",
      "https://www.imdb.com/title/tt0120408/"
   ],
   [
      "1997",
      "Welcome to Sarajevo",
      "",
      "Michael Winterbottom",
      "en,sr,bs",
      "GB,US",
      "1h 43m",
      "https://www.imdb.com/title/tt0120490/"
   ],
   [
      "1997",
      "Western",
      "",
      "Manuel Poirier",
      "fr",
      "FR",
      "2h 4m",
      "https://www.imdb.com/title/tt0120494/"
   ],
   [
      "1998",
      "Aprile",
      "",
      "Nanni Moretti",
      "it,en,fr",
      "IT,FR",
      "1h 18m",
      "https://www.imdb.com/title/tt0118635/"
   ],
   [
      "1998",
      "Those Who Love Me Can Take the Train",
      "Ceux qui m'aiment prendront le train",
      "Patrice Chéreau",
      "fr",
      "FR",
      "2h 2m",
      "https://www.imdb.com/title/tt0118834/"
   ],
   [
      "1998",
      "Claire Dolan",
      "",
      "Lodge Kerrigan",
      "fr,en",
      "US,FR",
      "1h 35m",
      "https://www.imdb.com/title/tt0150143/"
   ],
   [
      "1998",
      "Foolish Heart",
      "Corazón iluminado",
      "Hector Babenco",
      "es",
      "AR,BR,FR",
      "2h 10m",
      "https://www.imdb.com/title/tt0120674/"
   ],
   [
      "1998",
      "Dance Me to My Song",
      "",
      "Rolf de Heer",
      "en",
      "AU",
      "1h 41m",
      "https://www.imdb.com/title/tt0154378/"
   ],
   [
      "1998",
      "Fear and Loathing in Las Vegas",
      "",
      "Terry Gilliam",
      "en",
      "US",
      "1h 58m",
      "https://www.imdb.com/title/tt0120669/"
   ],
   [
      "1998",
      "The Celebration",
      "Festen",
      "Thomas Vinterberg",
      "da,de,en",
      "DK,SE",
      "1h 45m",
      "https://www.imdb.com/title/tt0154420/"
   ],
   [
      "1998",
      "Flowers of Shanghai",
      "Hai shang hua",
      "Hsiao-Hsien Hou",
      "zh",
      "TW,JP",
      "1h 53m",
      "https://www.imdb.com/title/tt0156587/"
   ],
   [
      "1998",
      "Henry Fool",
      "",
      "Hal Hartley",
      "en",
      "US",
      "2h 17m",
      "https://www.imdb.com/title/tt0122529/"
   ],
   [
      "1998",
      "The Idiots",
      "Idioterne",
      "Lars von Trier",
      "da",
      "DK,FR,NL,DE,SE,IT",
      "1h 57m",
      "https://www.imdb.com/title/tt0154421/"
   ],
   [
      "1998",
      "Illuminata",
      "",
      "John Turturro",
      "en",
      "ES,US,JP",
      "1h 59m",
      "https://www.imdb.com/title/tt0120709/"
   ],
   [
      "1998",
      "Khrustalyov, My Car!",
      "Khrustalyov, mashinu!",
      "Aleksey German",
      "ru",
      "RU,FR",
      "2h 27m",
      "https://www.imdb.com/title/tt0156701/"
   ],
   [
      "1998",
      "The School of Flesh",
      "L'école de la chair",
      "Benoît Jacquot",
      "fr",
      "FR,LU,BE",
      "1h 50m",
      "https://www.imdb.com/title/tt0157208/"
   ],
   [
      "1998",
      "Class Trip",
      "La classe de neige",
      "Claude Miller",
      "fr",
      "FR",
      "1h 36m",
      "https://www.imdb.com/title/tt0156408/"
   ],
   [
      "1998",
      "La vendedora de rosas",
      "",
      "Víctor Gaviria",
      "es",
      "CO",
      "1h 56m",
      "https://www.imdb.com/title/tt0157154/"
   ],
   [
      "1998",
      "The Dreamlife of Angels",
      "La vie rêvée des anges",
      "Erick Zonca",
      "fr",
      "FR",
      "1h 53m",
      "https://www.imdb.com/title/tt0120449/"
   ],
   [
      "1998",
      "Life Is Beautiful",
      "La vita è bella",
      "Roberto Benigni",
      "it,de,en",
      "IT",
      "1h 56m",
      "https://www.imdb.com/title/tt0118799/"
   ],
   [
      "1998",
      "Eternity and a Day",
      "Mia aioniotita kai mia mera",
      "Theodoros Angelopoulos",
      "el,en,it",
      "FR,IT,GR,DE",
      "2h 17m",
      "https://www.imdb.com/title/tt0156794/"
   ],
   [
      "1998",
      "My Name Is Joe",
      "",
      "Ken Loach",
      "sco,en",
      "GB,DE,FR,ES",
      "1h 45m",
      "https://www.imdb.com/title/tt0151691/"
   ],
   [
      "1998",
      "The General",
      "",
      "John Boorman",
      "en",
      "GB,IE",
      "2h 4m",
      "https://www.imdb.com/title/tt0120706/"
   ],
   [
      "1998",
      "The Hole",
      "Dong",
      "Tsai Ming-liang",
      "zh",
      "TW,FR",
      "1h 35m",
      "https://www.imdb.com/title/tt0156610/"
   ],
   [
      "1998",
      "Velvet Goldmine",
      "",
      "Todd Haynes",
      "en,fr",
      "US,GB",
      "1h 58m",
      "https://www.imdb.com/title/tt0120879/"
   ],
   [
      "1999",
      "8½ Women",
      "",
      "Peter Greenaway",
      "en,it,ja",
      "GB,NL,LU,DE",
      "1h 58m",
      "https://www.imdb.com/title/tt0154443/"
   ],
   [
      "1999",
      "The Letter",
      "La lettre",
      "Manoel de Oliveira",
      "fr,pt",
      "FR,PT,ES",
      "1h 47m",
      "https://www.imdb.com/title/tt0158117/"
   ],
   [
      "1999",
      "Cradle Will Rock",
      "",
      "Tim Robbins",
      "en,it",
      "US",
      "2h 12m",
      "https://www.imdb.com/title/tt0150216/"
   ],
   [
      "1999",
      "No One Writes to the Colonel",
      "El coronel no tiene quien le escriba",
      "Arturo Ripstein",
      "es",
      "MX,FR,ES",
      "2h 2m",
      "https://www.imdb.com/title/tt0132905/"
   ],
   [
      "1999",
      "Felicia's Journey",
      "",
      "Atom Egoyan",
      "en,ga,fr",
      "CA,GB",
      "1h 56m",
      "https://www.imdb.com/title/tt0165773/"
   ],
   [
      "1999",
      "Tales of Kish",
      "Ghesse haye Kish",
      "Abolfazl Jalili, Mohsen Makhmalbaf, Nasser Taghvai",
      "fa",
      "IR",
      "1h 12m",
      "https://www.imdb.com/title/tt0197373/"
   ],
   [
      "1999",
      "Ghost Dog: The Way of the Samurai",
      "",
      "Jim Jarmusch",
      "en,fr",
      "FR,DE,US,JP",
      "1h 56m",
      "https://www.imdb.com/title/tt0165798/"
   ],
   [
      "1999",
      "Kadosh",
      "",
      "Amos Gitai",
      "he",
      "IL,FR",
      "1h 50m",
      "https://www.imdb.com/title/tt0189630/"
   ],
   [
      "1999",
      "Kikujiro",
      "Kikujirô no natsu",
      "Takeshi Kitano",
      "ja",
      "JP",
      "2h 2m",
      "https://www.imdb.com/title/tt0199683/"
   ],
   [
      "1999",
      "Humanity",
      "L'humanité",
      "Bruno Dumont",
      "fr,en",
      "FR",
      "2h 21m",
      "https://www.imdb.com/title/tt0197569/"
   ],
   [
      "1999",
      "The Nanny",
      "La balia",
      "Marco Bellocchio",
      "it",
      "IT",
      "1h 46m",
      "https://www.imdb.com/title/tt0139877/"
   ],
   [
      "1999",
      "Time Regained",
      "Le temps retrouvé",
      "Raoul Ruiz",
      "fr,en",
      "FR,IT,PT",
      "2h 42m",
      "https://www.imdb.com/title/tt0189142/"
   ],
   [
      "1999",
      "Limbo",
      "",
      "John Sayles",
      "en",
      "US",
      "2h 6m",
      "https://www.imdb.com/title/tt0164085/"
   ],
   [
      "1999",
      "Love Will Tear Us Apart",
      "Tin seung yan gaan",
      "Nelson Lik-wai Yu",
      "zh",
      "HK",
      "1h 49m",
      "https://www.imdb.com/title/tt0199724/"
   ],
   [
      "1999",
      "Moloch",
      "",
      "Aleksandr Sokurov",
      "de",
      "RU,DE,IT,CH",
      "1h 48m",
      "https://www.imdb.com/title/tt0199777/"
   ],
   [
      "1999",
      "Our Happy Lives",
      "Nos vies heureuses",
      "Jacques Maillot",
      "fr",
      "FR",
      "2h 27m",
      "https://www.imdb.com/title/tt0197732/"
   ],
   [
      "1999",
      "Pola X",
      "",
      "Leos Carax",
      "fr",
      "FR,CH,DE,JP",
      "2h 14m",
      "https://www.imdb.com/title/tt0152015/"
   ],
   [
      "1999",
      "Rosetta",
      "",
      "Jean-Pierre Dardenne, Luc Dardenne",
      "fr",
      "FR,BE",
      "1h 35m",
      "https://www.imdb.com/title/tt0200071/"
   ],
   [
      "1999",
      "The Emperor and the Assassin",
      "Jing Ke ci Qin Wang",
      "Kaige Chen",
      "zh",
      "CN,FR,JP",
      "2h 42m",
      "https://www.imdb.com/title/tt0162866/"
   ],
   [
      "1999",
      "The Straight Story",
      "",
      "David Lynch",
      "en",
      "GB,FR,US",
      "1h 52m",
      "https://www.imdb.com/title/tt0166896/"
   ],
   [
      "1999",
      "All About My Mother",
      "Todo sobre mi madre",
      "Pedro Almodóvar",
      "es,ca",
      "ES,FR",
      "1h 41m",
      "https://www.imdb.com/title/tt0185125/"
   ],
   [
      "1999",
      "Wonderland",
      "",
      "Michael Winterbottom",
      "en",
      "GB",
      "1h 48m",
      "https://www.imdb.com/title/tt0171865/"
   ],
   [
      "2000",
      "Bread and Roses",
      "",
      "Ken Loach",
      "en,es",
      "GB,FR,DE,ES,IT,CH",
      "1h 50m",
      "https://www.imdb.com/title/tt0212826/"
   ],
   [
      "2000",
      "Chunhyang",
      "Chunhyangdyun",
      "Im Kwon-taek",
      "ko",
      "KR",
      "2h 17m",
      "https://www.imdb.com/title/tt0245837/"
   ],
   [
      "2000",
      "Code Unknown",
      "Code inconnu",
      "Michael Haneke",
      "fr,ro,en",
      "FR,AT,RO,DE",
      "1h 58m",
      "https://www.imdb.com/title/tt0216625/"
   ],
   [
      "2000",
      "Dancer in the Dark",
      "",
      "Lars von Trier",
      "en,de,cs",
      "DK,DE,NL,IT,US,GB,FR,SE,FI,IS,NO",
      "2h 20m",
      "https://www.imdb.com/title/tt0168629/"
   ],
   [
      "2000",
      "Esther Kahn",
      "",
      "Arnaud Desplechin",
      "en,he,yi,it",
      "FR,GB",
      "2h 37m",
      "https://www.imdb.com/title/tt0183056/"
   ],
   [
      "2000",
      "Turbulence",
      "Estorvo",
      "Ruy Guerra",
      "pt",
      "BR,CU,PT",
      "1h 35m",
      "https://www.imdb.com/title/tt0189509/"
   ],
   [
      "2000",
      "Eureka",
      "Yurîka",
      "Shinji Aoyama",
      "ja",
      "JP,FR",
      "3h 37m",
      "https://www.imdb.com/title/tt0243889/"
   ],
   [
      "2000",
      "Fast Food Fast Women",
      "",
      "Amos Kollek",
      "en",
      "FR,IT,US",
      "1h 35m",
      "https://www.imdb.com/title/tt0206742/"
   ],
   [
      "2000",
      "Taboo",
      "Gohatto",
      "Nagisa Ôshima",
      "ja",
      "JP,FR,GB",
      "1h 40m",
      "https://www.imdb.com/title/tt0213682/"
   ],
   [
      "2000",
      "Devils on the Doorstep",
      "Guizi lai le",
      "Wen Jiang",
      "zh,ja,en,fr",
      "CN",
      "2h 19m",
      "https://www.imdb.com/title/tt0245929/"
   ],
   [
      "2000",
      "Harry, He's Here to Help",
      "Harry, un ami qui vous veut du bien",
      "Dominik Moll",
      "fr,es",
      "FR",
      "1h 57m",
      "https://www.imdb.com/title/tt0216800/"
   ],
   [
      "2000",
      "In the Mood for Love",
      "Fa yeung nin wah",
      "Kar-Wai Wong",
      "zh,fr,es",
      "HK,FR",
      "1h 38m",
      "https://www.imdb.com/title/tt0118694/"
   ],
   [
      "2000",
      "Kippur",
      "",
      "Amos Gitai",
      "he,ar",
      "IL,FR",
      "1h 57m",
      "https://www.imdb.com/title/tt0218379/"
   ],
   [
      "2000",
      "The Wedding",
      "Svadba",
      "Pavel Lungin",
      "ru",
      "FR,RU,DE",
      "1h 54m",
      "https://www.imdb.com/title/tt0246119/"
   ],
   [
      "2000",
      "Sentimental Destinies",
      "Les destinées sentimentales",
      "Olivier Assayas",
      "fr,en",
      "FR,CH",
      "3h",
      "https://www.imdb.com/title/tt0216689/"
   ],
   [
      "2000",
      "Nurse Betty",
      "",
      "Neil LaBute",
      "en,es,it",
      "DE,US",
      "1h 50m",
      "https://www.imdb.com/title/tt0171580/"
   ],
   [
      "2000",
      "O Brother, Where Art Thou?",
      "",
      "Joel Coen, Ethan Coen",
      "en",
      "GB,FR,US",
      "1h 47m",
      "https://www.imdb.com/title/tt0190590/"
   ],
   [
      "2000",
      "Songs from the Second Floor",
      "Sånger från andra våningen",
      "Roy Andersson",
      "sv,ru",
      "SE,NO,DK,FR,DE",
      "1h 38m",
      "https://www.imdb.com/title/tt0120263/"
   ],
   [
      "2000",
      "Blackboards",
      "Takhté siah",
      "Samira Makhmalbaf",
      "fa,ku",
      "IR,IT,JP",
      "1h 28m",
      "https://www.imdb.com/title/tt0246266/"
   ],
   [
      "2000",
      "The Golden Bowl",
      "",
      "James Ivory",
      "en",
      "US,FR,GB",
      "2h 10m",
      "https://www.imdb.com/title/tt0200669/"
   ],
   [
      "2000",
      "The Yards",
      "",
      "James Gray",
      "en,es",
      "US",
      "1h 55m",
      "https://www.imdb.com/title/tt0138946/"
   ],
   [
      "2000",
      "Faithless",
      "Trolösa",
      "Liv Ullmann",
      "sv,fr",
      "SE,IT,DE,FI,NO",
      "2h 34m",
      "https://www.imdb.com/title/tt0157122/"
   ],
   [
      "2000",
      "Yi Yi",
      "",
      "Edward Yang",
      "zh,en,ja,fr",
      "TW,JP",
      "2h 53m",
      "https://www.imdb.com/title/tt0244316/"
   ],
   [
      "2001",
      "Warm Water Under a Red Bridge",
      "Akai hashi no shita no nurui mizu",
      "Shôhei Imamura",
      "ja",
      "JP,FR",
      "1h 59m",
      "https://www.imdb.com/title/tt0289054/"
   ],
   [
      "2001",
      "Desert Moon",
      "Tsuki no sabaku",
      "Shinji Aoyama",
      "ja,en",
      "JP",
      "2h 11m",
      "https://www.imdb.com/title/tt0283309/"
   ],
   [
      "2001",
      "Distance",
      "",
      "Kore-eda Hirokazu",
      "ja",
      "JP",
      "2h 12m",
      "https://www.imdb.com/title/tt0278413/"
   ],
   [
      "2001",
      "In Praise of Love",
      "Éloge de l'amour",
      "Jean-Luc Godard",
      "fr,en",
      "FR,CH,DE",
      "1h 37m",
      "https://www.imdb.com/title/tt0181912/"
   ],
   [
      "2001",
      "The Profession of Arms",
      "Il mestiere delle armi",
      "Ermanno Olmi",
      "it",
      "IT,FR,DE,BG",
      "1h 45m",
      "https://www.imdb.com/title/tt0245276/"
   ],
   [
      "2001",
      "The Officers' Ward",
      "La chambre des officiers",
      "François Dupeyron",
      "fr",
      "FR",
      "2h 15m",
      "https://www.imdb.com/title/tt0273148/"
   ],
   [
      "2001",
      "The Piano Teacher",
      "La pianiste",
      "Michael Haneke",
      "fr,de",
      "FR,AT,DE",
      "2h 11m",
      "https://www.imdb.com/title/tt0254686/"
   ],
   [
      "2001",
      "Replay",
      "La répétition",
      "Catherine Corsini",
      "fr,da,en",
      "FR,CA",
      "1h 32m",
      "https://www.imdb.com/title/tt0253612/"
   ],
   [
      "2001",
      "The Son's Room",
      "La stanza del figlio",
      "Nanni Moretti",
      "it",
      "IT,FR",
      "1h 39m",
      "https://www.imdb.com/title/tt0208990/"
   ],
   [
      "2001",
      "Millenium Mambo",
      "Qian xi man bo",
      "Hsiao-Hsien Hou",
      "en,ja,zh",
      "TW,FR",
      "1h 59m",
      "https://www.imdb.com/title/tt0283283/"
   ],
   [
      "2001",
      "Moulin Rouge!",
      "",
      "Baz Luhrmann",
      "en,fr,es",
      "AU,US",
      "2h 7m",
      "https://www.imdb.com/title/tt0203009/"
   ],
   [
      "2001",
      "Mulholland Dr.",
      "",
      "David Lynch",
      "en,es,fr",
      "FR,US",
      "2h 27m",
      "https://www.imdb.com/title/tt0166924/"
   ],
   [
      "2001",
      "What Time Is It There?",
      "Ni na bian ji dian",
      "Tsai Ming-liang",
      "zh,fr,en",
      "TW,FR",
      "1h 56m",
      "https://www.imdb.com/title/tt0269746/"
   ],
   [
      "2001",
      "No Man's Land",
      "",
      "Danis Tanovic",
      "bs,fr,en,sr",
      "FR,BA,IT,BE,GB,SI",
      "1h 38m",
      "https://www.imdb.com/title/tt0283509/"
   ],
   [
      "2001",
      "Pau and His Brother",
      "Pau i el seu germà",
      "Marc Recha",
      "es,fr,ca",
      "ES,FR",
      "1h 52m",
      "https://www.imdb.com/title/tt0283539/"
   ],
   [
      "2001",
      "Roberto Succo",
      "",
      "Cédric Kahn",
      "fr,it,de,en",
      "FR,CH",
      "2h 4m",
      "https://www.imdb.com/title/tt0234041/"
   ],
   [
      "2001",
      "Kandahar",
      "Safar-e Ghandehar",
      "Mohsen Makhmalbaf",
      "fa,en,ps,pl",
      "IR,FR",
      "1h 25m",
      "https://www.imdb.com/title/tt0283431/"
   ],
   [
      "2001",
      "Shrek",
      "",
      "Andrew Adamson, Vicky Jenson",
      "en",
      "US",
      "1h 30m",
      "https://www.imdb.com/title/tt0126029/"
   ],
   [
      "2001",
      "Taurus",
      "Telets",
      "Aleksandr Sokurov",
      "ru,de,en",
      "RU",
      "1h 44m",
      "https://www.imdb.com/title/tt0283623/"
   ],
   [
      "2001",
      "The Man Who Wasn't There",
      "",
      "Joel Coen",
      "en,it,fr",
      "GB,US",
      "1h 56m",
      "https://www.imdb.com/title/tt0243133/"
   ],
   [
      "2001",
      "The Pledge",
      "",
      "Sean Penn",
      "en",
      "US,CA",
      "2h 4m",
      "https://www.imdb.com/title/tt0237572/"
   ],
   [
      "2001",
      "Va savoir",
      "",
      "Jacques Rivette",
      "fr,it",
      "FR,IT,DE",
      "2h 34m",
      "https://www.imdb.com/title/tt0242994/"
   ],
   [
      "2001",
      "I'm Going Home",
      "Je rentre à la maison",
      "Manoel de Oliveira",
      "fr,en",
      "FR,PT",
      "1h 30m",
      "https://www.imdb.com/title/tt0283422/"
   ],
   [
      "2002",
      "24 Hour Party People",
      "",
      "Michael Winterbottom",
      "en",
      "GB",
      "1h 57m",
      "https://www.imdb.com/title/tt0274309/"
   ],
   [
      "2002",
      "About Schmidt",
      "",
      "Alexander Payne",
      "en",
      "US",
      "2h 5m",
      "https://www.imdb.com/title/tt0257360/"
   ],
   [
      "2002",
      "All or Nothing",
      "",
      "Mike Leigh",
      "en,ar,fr",
      "GB,FR",
      "2h 8m",
      "https://www.imdb.com/title/tt0286261/"
   ],
   [
      "2002",
      "Bowling for Columbine",
      "",
      "Michael Moore",
      "en",
      "US,CA,DE",
      "2h",
      "https://www.imdb.com/title/tt0310793/"
   ],
   [
      "2002",
      "Chihwaseon",
      "",
      "Im Kwon-taek",
      "ko,ja",
      "KR",
      "2h",
      "https://www.imdb.com/title/tt0317234/"
   ],
   [
      "2002",
      "Demonlover",
      "",
      "Olivier Assayas",
      "fr,en,ja",
      "FR,MX",
      "2h 9m",
      "https://www.imdb.com/title/tt0284034/"
   ],
   [
      "2002",
      "Irreversible",
      "Irréversible",
      "Gaspar Noé",
      "fr,es,it,en",
      "FR",
      "1h 37m",
      "https://www.imdb.com/title/tt0290673/"
   ],
   [
      "2002",
      "Kedma",
      "",
      "Amos Gitai",
      "he,ar,de,pl,ru,yi",
      "FR,IL,IT",
      "1h 40m",
      "https://www.imdb.com/title/tt0304267/"
   ],
   [
      "2002",
      "The Adversary",
      "L'adversaire",
      "Nicole Garcia",
      "fr,en,es",
      "FR,CH,ES",
      "2h 9m",
      "https://www.imdb.com/title/tt0273069/"
   ],
   [
      "2002",
      "My Mother's Smile",
      "L'ora di religione (Il sorriso di mia madre)",
      "Marco Bellocchio",
      "it",
      "IT",
      "1h 45m",
      "https://www.imdb.com/title/tt0317965/"
   ],
   [
      "2002",
      "The Son",
      "Le fils",
      "Jean-Pierre Dardenne, Luc Dardenne",
      "fr",
      "BE,FR",
      "1h 43m",
      "https://www.imdb.com/title/tt0291172/"
   ],
   [
      "2002",
      "Marie-Jo and Her Two Lovers",
      "Marie-Jo et ses 2 amours",
      "Robert Guédiguian",
      "fr",
      "FR",
      "2h 4m",
      "https://www.imdb.com/title/tt0293401/"
   ],
   [
      "2002",
      "The Man Without a Past",
      "Mies vailla menneisyyttä",
      "Aki Kaurismäki",
      "fi",
      "FI,DE,FR",
      "1h 37m",
      "https://www.imdb.com/title/tt0311519/"
   ],
   [
      "2002",
      "The Uncertainty Principle",
      "O Princípio da Incerteza",
      "Manoel de Oliveira",
      "pt",
      "FR,PT",
      "2h 13m",
      "https://www.imdb.com/title/tt0303162/"
   ],
   [
      "2002",
      "Punch-Drunk Love",
      "",
      "Paul Thomas Anderson",
      "en",
      "US",
      "1h 35m",
      "https://www.imdb.com/title/tt0272338/"
   ],
   [
      "2002",
      "Unknown Pleasures",
      "Ren xiao yao",
      "Zhangke Jia",
      "zh,en",
      "CN,JP,KR,FR",
      "1h 52m",
      "https://www.imdb.com/title/tt0318025/"
   ],
   [
      "2002",
      "Russian Ark",
      "Russkiy kovcheg",
      "Aleksandr Sokurov",
      "ru,fa",
      "RU,DE,JP,CA,FI,DK",
      "1h 39m",
      "https://www.imdb.com/title/tt0318034/"
   ],
   [
      "2002",
      "Spider",
      "",
      "David Cronenberg",
      "en",
      "CA,GB",
      "1h 38m",
      "https://www.imdb.com/title/tt0278731/"
   ],
   [
      "2002",
      "Sweet Sixteen",
      "",
      "Ken Loach",
      "en,sco",
      "GB,DE,ES",
      "1h 46m",
      "https://www.imdb.com/title/tt0313670/"
   ],
   [
      "2002",
      "Ten",
      "Dah",
      "Abbas Kiarostami",
      "fa",
      "IR,FR,US",
      "1h 29m",
      "https://www.imdb.com/title/tt0301978/"
   ],
   [
      "2002",
      "The Pianist",
      "",
      "Roman Polanski",
      "en,de,ru",
      "FR,PL,DE,GB,US",
      "2h 30m",
      "https://www.imdb.com/title/tt0253474/"
   ],
   [
      "2002",
      "Divine Intervention",
      "Yadon ilaheyya",
      "Elia Suleiman",
      "ar,he,en",
      "FR,MA,DE,PS",
      "1h 32m",
      "https://www.imdb.com/title/tt0274428/"
   ],
   [
      "2003",
      "Bright Future",
      "Akarui mirai",
      "Kiyoshi Kurosawa",
      "ja",
      "JP",
      "1h 55m",
      "https://www.imdb.com/title/tt0363235/"
   ],
   [
      "2003",
      "Carandiru",
      "",
      "Hector Babenco",
      "pt",
      "BR,AR,IT",
      "2h 25m",
      "https://www.imdb.com/title/tt0293007/"
   ],
   [
      "2003",
      "That Day",
      "Ce jour-là",
      "Raúl Ruiz",
      "fr",
      "FR,CH",
      "1h 45m",
      "https://www.imdb.com/title/tt0343524/"
   ],
   [
      "2003",
      "Dogville",
      "",
      "Lars von Trier",
      "en,fr",
      "DK,NL,SE,DE,GB,FR,FI,NO,IT",
      "2h 58m",
      "https://www.imdb.com/title/tt0276919/"
   ],
   [
      "2003",
      "Elephant",
      "",
      "Gus Van Sant",
      "en,de",
      "US",
      "1h 21m",
      "https://www.imdb.com/title/tt0363589/"
   ],
   [
      "2003",
      "Incantato",
      "Il cuore altrove",
      "Pupi Avati",
      "it",
      "IT",
      "1h 47m",
      "https://www.imdb.com/title/tt0319237/"
   ],
   [
      "2003",
      "Little Lili",
      "La petite Lili",
      "Claude Miller",
      "fr",
      "FR,CA",
      "1h 44m",
      "https://www.imdb.com/title/tt0335351/"
   ],
   [
      "2003",
      "Les côtelettes",
      "",
      "Bertrand Blier",
      "fr",
      "FR",
      "1h 26m",
      "https://www.imdb.com/title/tt0293672/"
   ],
   [
      "2003",
      "The Barbarian Invasions",
      "Les invasions barbares",
      "Denys Arcand",
      "fr,en",
      "CA,FR",
      "1h 39m",
      "https://www.imdb.com/title/tt0338135/"
   ],
   [
      "2003",
      "Strayed",
      "Les égarés",
      "André Téchiné",
      "fr",
      "FR,GB",
      "1h 35m",
      "https://www.imdb.com/title/tt0329111/"
   ],
   [
      "2003",
      "Mystic River",
      "",
      "Clint Eastwood",
      "en",
      "US,AU",
      "2h 18m",
      "https://www.imdb.com/title/tt0327056/"
   ],
   [
      "2003",
      "Father and Son",
      "Otets i syn",
      "Aleksandr Sokurov",
      "ru,en",
      "DE,FR,RU,IT,NL",
      "1h 37m",
      "https://www.imdb.com/title/tt0363249/"
   ],
   [
      "2003",
      "At Five in the Afternoon",
      "Panj é asr",
      "Samira Makhmalbaf",
      "prs",
      "IR,FR",
      "1h 45m",
      "https://www.imdb.com/title/tt0363303/"
   ],
   [
      "2003",
      "Purple Butterfly",
      "Zi hu die",
      "Ye Lou",
      "zh,ja,vi",
      "CN,FR",
      "2h 7m",
      "https://www.imdb.com/title/tt0363290/"
   ],
   [
      "2003",
      "Shara",
      "Sharasôju",
      "Naomi Kawase",
      "ja",
      "JP",
      "1h 40m",
      "https://www.imdb.com/title/tt0363060/"
   ],
   [
      "2003",
      "Swimming Pool",
      "",
      "François Ozon",
      "en,fr",
      "FR,GB",
      "1h 42m",
      "https://www.imdb.com/title/tt0324133/"
   ],
   [
      "2003",
      "The Brown Bunny",
      "",
      "Vincent Gallo",
      "en",
      "US,JP",
      "1h 33m",
      "https://www.imdb.com/title/tt0330099/"
   ],
   [
      "2003",
      "The Tulse Luper Suitcases, Part 1: The Moab Story",
      "",
      "Peter Greenaway",
      "en,de,nl,fr,es",
      "GB,ES,IT,LU,NL,RU,HU,DE",
      "2h 7m",
      "https://www.imdb.com/title/tt0307596/"
   ],
   [
      "2003",
      "Tiresia",
      "",
      "Bertrand Bonello",
      "fr,pt",
      "FR,CA",
      "1h 55m",
      "https://www.imdb.com/title/tt0362246/"
   ],
   [
      "2003",
      "Distant",
      "Uzak",
      "Nuri Bilge Ceylan",
      "tr",
      "TR",
      "1h 50m",
      "https://www.imdb.com/title/tt0346094/"
   ],
   [
      "2004",
      "2046",
      "",
      "Kar-Wai Wong",
      "zh,ja",
      "HK,CN,FR,IT,DE,NL",
      "2h 9m",
      "https://www.imdb.com/title/tt0212712/"
   ],
   [
      "2004",
      "Clean",
      "",
      "Olivier Assayas",
      "fr,en,zh",
      "FR,CA,GB",
      "1h 51m",
      "https://www.imdb.com/title/tt0388838/"
   ],
   [
      "2004",
      "Look at Me",
      "Comme une image",
      "Agnès Jaoui",
      "fr,it",
      "FR,IT",
      "1h 50m",
      "https://www.imdb.com/title/tt0374583/"
   ],
   [
      "2004",
      "Nobody Knows",
      "Dare mo shiranai",
      "Kore-eda Hirokazu",
      "ja",
      "JP",
      "2h 21m",
      "https://www.imdb.com/title/tt0408664/"
   ],
   [
      "2004",
      "The Motorcycle Diaries",
      "Diarios de motocicleta",
      "Walter Salles",
      "es,qu",
      "GB,US,FR,AR,PE,CL,DE",
      "2h 6m",
      "https://www.imdb.com/title/tt0318462/"
   ],
   [
      "2004",
      "The Edukators",
      "Die fetten Jahre sind vorbei",
      "Hans Weingartner",
      "de,en",
      "DE,AT",
      "2h 7m",
      "https://www.imdb.com/title/tt0408777/"
   ],
   [
      "2004",
      "Exils",
      "",
      "Tony Gatlif",
      "fr,ar,es",
      "FR,JP",
      "1h 44m",
      "https://www.imdb.com/title/tt0400420/"
   ],
   [
      "2004",
      "Fahrenheit 9/11",
      "",
      "Michael Moore",
      "en,ar",
      "US",
      "2h 2m",
      "https://www.imdb.com/title/tt0361596/"
   ],
   [
      "2004",
      "Ghost in the Shell 2: Innocence",
      "",
      "Naoko Kusumi, Mizuho Nishikubo, Mamoru Oshii",
      "ja,zh,en",
      "JP",
      "1h 40m",
      "https://www.imdb.com/title/tt0347246/"
   ],
   [
      "2004",
      "Woman Is the Future of Man",
      "Yeojaneun namjaui miraeda",
      "Hong Sang-soo",
      "ko",
      "KR,FR",
      "1h 28m",
      "https://www.imdb.com/title/tt0403692/"
   ],
   [
      "2004",
      "The Holy Girl",
      "La niña santa",
      "Lucrecia Martel",
      "es",
      "AR,IT,NL,ES",
      "1h 46m",
      "https://www.imdb.com/title/tt0300270/"
   ],
   [
      "2004",
      "The Consequences of Love",
      "Le conseguenze dell'amore",
      "Paolo Sorrentino",
      "it",
      "IT",
      "1h 40m",
      "https://www.imdb.com/title/tt0398883/"
   ],
   [
      "2004",
      "Mondovino",
      "",
      "Jonathan Nossiter",
      "en,fr,it,es,pt",
      "AR,FR,IT,US",
      "2h 15m",
      "https://www.imdb.com/title/tt0411674/"
   ],
   [
      "2004",
      "Oldboy",
      "Oldeuboi",
      "Park Chan-wook",
      "ko",
      "KR",
      "2h",
      "https://www.imdb.com/title/tt0364569/"
   ],
   [
      "2004",
      "Shrek 2",
      "",
      "Andrew Adamson, Kelly Asbury, Conrad Vernon",
      "en",
      "US",
      "1h 33m",
      "https://www.imdb.com/title/tt0298148/"
   ],
   [
      "2004",
      "Tropical Malady",
      "Sud pralad",
      "Apichatpong Weerasethakul",
      "th",
      "TH,FR,DE,IT",
      "1h 58m",
      "https://www.imdb.com/title/tt0381668/"
   ],
   [
      "2004",
      "The Ladykillers",
      "",
      "Ethan Coen, Joel Coen",
      "en,vi",
      "US",
      "1h 44m",
      "https://www.imdb.com/title/tt0335245/"
   ],
   [
      "2004",
      "The Life and Death of Peter Sellers",
      "",
      "Stephen Hopkins",
      "en",
      "GB,US",
      "2h 2m",
      "https://www.imdb.com/title/tt0352520/"
   ],
   [
      "2004",
      "Life Is a Miracle",
      "Zivot je cudo",
      "Emir Kusturica",
      "sr,en,de,hu",
      "RS,FR,IT",
      "2h 35m",
      "https://www.imdb.com/title/tt0322420/"
   ],
   [
      "2005",
      "A History of Violence",
      "",
      "David Cronenberg",
      "en",
      "US,CA,GB,DE",
      "1h 36m",
      "https://www.imdb.com/title/tt0399146/"
   ],
   [
      "2005",
      "Bashing",
      "Basshingu",
      "Masahiro Kobayashi",
      "ja",
      "JP",
      "1h 22m",
      "https://www.imdb.com/title/tt0456836/"
   ],
   [
      "2005",
      "Battle in Heaven",
      "Batalla en el cielo",
      "Carlos Reygadas",
      "es",
      "MX,FR,BE,DE",
      "1h 38m",
      "https://www.imdb.com/title/tt0387055/"
   ],
   [
      "2005",
      "Broken Flowers",
      "",
      "Jim Jarmusch",
      "en",
      "FR,US",
      "1h 46m",
      "https://www.imdb.com/title/tt0412019/"
   ],
   [
      "2005",
      "Caché",
      "",
      "Michael Haneke",
      "fr",
      "FR,AT,DE,IT",
      "1h 57m",
      "https://www.imdb.com/title/tt0387898/"
   ],
   [
      "2005",
      "Don't Come Knocking",
      "",
      "Wim Wenders",
      "en",
      "GB,FR,DE,US",
      "2h 2m",
      "https://www.imdb.com/title/tt0377800/"
   ],
   [
      "2005",
      "Election",
      "Hak se wooi",
      "Johnnie To",
      "zh,en",
      "HK",
      "1h 41m",
      "https://www.imdb.com/title/tt0434008/"
   ],
   [
      "2005",
      "Free Zone",
      "",
      "Amos Gitai",
      "en,he,ar,es",
      "IL,BE,FR,ES",
      "1h 30m",
      "https://www.imdb.com/title/tt0441761/"
   ],
   [
      "2005",
      "Tale of Cinema",
      "Geuk jang jeon",
      "Hong Sang-soo",
      "ko",
      "FR,KR",
      "1h 29m",
      "https://www.imdb.com/title/tt0461795/"
   ],
   [
      "2005",
      "Kilomètre Zéro",
      "",
      "Hiner Saleem",
      "ku,ar,fr",
      "FR,IQ,FI",
      "1h 31m",
      "https://www.imdb.com/title/tt0459668/"
   ],
   [
      "2005",
      "The Child",
      "L'enfant",
      "Jean-Pierre Dardenne, Luc Dardenne",
      "fr",
      "BE,FR",
      "1h 35m",
      "https://www.imdb.com/title/tt0456396/"
   ],
   [
      "2005",
      "Last Days",
      "",
      "Gus Van Sant",
      "en",
      "US",
      "1h 37m",
      "https://www.imdb.com/title/tt0403217/"
   ],
   [
      "2005",
      "Lemming",
      "",
      "Dominik Moll",
      "fr",
      "FR",
      "2h 9m",
      "https://www.imdb.com/title/tt0415932/"
   ],
   [
      "2005",
      "Manderlay",
      "",
      "Lars von Trier",
      "en",
      "DK,SE,NL,FR,DE,GB,IT,US",
      "2h 19m",
      "https://www.imdb.com/title/tt0342735/"
   ],
   [
      "2005",
      "To Paint or Make Love",
      "Peindre ou faire l'amour",
      "Arnaud Larrieu, Jean-Marie Larrieu",
      "fr",
      "FR",
      "1h 40m",
      "https://www.imdb.com/title/tt0431975/"
   ],
   [
      "2005",
      "Once You're Born You Can No Longer Hide",
      "Quando sei nato non puoi più nasconderti",
      "Marco Tullio Giordana",
      "it",
      "IT,FR,GB",
      "1h 55m",
      "https://www.imdb.com/title/tt0418091/"
   ],
   [
      "2005",
      "Shanghai Dreams",
      "Qing hong",
      "Xiaoshuai Wang",
      "zh",
      "CN",
      "2h 3m",
      "https://www.imdb.com/title/tt0456658/"
   ],
   [
      "2005",
      "Sin City",
      "",
      "Frank Miller, Quentin Tarantino, Robert Rodriguez",
      "en",
      "US",
      "2h 4m",
      "https://www.imdb.com/title/tt0401792/"
   ],
   [
      "2005",
      "The Three Burials of Melquiades Estrada",
      "",
      "Tommy Lee Jones",
      "en,es",
      "FR,MX,US",
      "2h 1m",
      "https://www.imdb.com/title/tt0419294/"
   ],
   [
      "2005",
      "Three Times",
      "Zui hao de shi guang",
      "Hsiao-Hsien Hou",
      "zh",
      "FR,TW",
      "2h 19m",
      "https://www.imdb.com/title/tt0459666/"
   ],
   [
      "2005",
      "Where the Truth Lies",
      "",
      "Atom Egoyan",
      "en,zh",
      "CA,GB",
      "1h 47m",
      "https://www.imdb.com/title/tt0373450/"
   ],
   [
      "2006",
      "Babel",
      "",
      "Alejandro G. Iñárritu",
      "en,ar,es,ja,fr,ru",
      "US,MX,FR",
      "2h 23m",
      "https://www.imdb.com/title/tt0449467/"
   ],
   [
      "2006",
      "Chronicle of an Escape",
      "Crónica de una fuga",
      "Israel Adrián Caetano",
      "es",
      "AR",
      "1h 43m",
      "https://www.imdb.com/title/tt0479354/"
   ],
   [
      "2006",
      "Pan's Labyrinth",
      "El laberinto del fauno",
      "Guillermo del Toro",
      "es",
      "MX,ES",
      "1h 58m",
      "https://www.imdb.com/title/tt0457430/"
   ],
   [
      "2006",
      "Fast Food Nation",
      "",
      "Richard Linklater",
      "en,es",
      "GB,US",
      "1h 56m",
      "https://www.imdb.com/title/tt0460792/"
   ],
   [
      "2006",
      "Flanders",
      "Flandres",
      "Bruno Dumont",
      "fr,ar",
      "FR",
      "1h 31m",
      "https://www.imdb.com/title/tt0450680/"
   ],
   [
      "2006",
      "Climates",
      "Iklimler",
      "Nuri Bilge Ceylan",
      "tr",
      "TR,FR",
      "1h 38m",
      "https://www.imdb.com/title/tt0498097/"
   ],
   [
      "2006",
      "The Caiman",
      "Il caimano",
      "Nanni Moretti",
      "it",
      "FR,IT",
      "1h 52m",
      "https://www.imdb.com/title/tt0429727/"
   ],
   [
      "2006",
      "Days of Glory",
      "Indigènes",
      "Rachid Bouchareb",
      "fr,ar",
      "DZ,FR,MA,BE",
      "2h 3m",
      "https://www.imdb.com/title/tt0444182/"
   ],
   [
      "2006",
      "Colossal Youth",
      "Juventude em Marcha",
      "Pedro Costa",
      "pt",
      "PT,FR,CH",
      "2h 36m",
      "https://www.imdb.com/title/tt0460480/"
   ],
   [
      "2006",
      "The Family Friend",
      "L'amico di famiglia",
      "Paolo Sorrentino",
      "it",
      "IT,FR",
      "1h 42m",
      "https://www.imdb.com/title/tt0772105/"
   ],
   [
      "2006",
      "The Law of the Weakest",
      "La raison du plus faible",
      "Lucas Belvaux",
      "fr",
      "BE,FR",
      "1h 56m",
      "https://www.imdb.com/title/tt0454536/"
   ],
   [
      "2006",
      "Lights in the Dusk",
      "Laitakaupungin valot",
      "Aki Kaurismäki",
      "fi,ru",
      "FI,DE,FR,IT,SE",
      "1h 18m",
      "https://www.imdb.com/title/tt0458242/"
   ],
   [
      "2006",
      "Marie Antoinette",
      "",
      "Sofia Coppola",
      "en,fr",
      "US,FR,JP",
      "2h 3m",
      "https://www.imdb.com/title/tt0422720/"
   ],
   [
      "2006",
      "When I Was a Singer",
      "Quand j'étais chanteur",
      "Xavier Giannoli",
      "fr",
      "FR",
      "1h 52m",
      "https://www.imdb.com/title/tt0464828/"
   ],
   [
      "2006",
      "Red Road",
      "",
      "Andrea Arnold",
      "en",
      "GB,DK",
      "1h 53m",
      "https://www.imdb.com/title/tt0471030/"
   ],
   [
      "2006",
      "Charlie Says",
      "Selon Charlie",
      "Nicole Garcia",
      "fr,en,de",
      "FR",
      "2h 20m",
      "https://www.imdb.com/title/tt0444418/"
   ],
   [
      "2006",
      "Southland Tales",
      "",
      "Richard Kelly",
      "en",
      "FR,DE,US",
      "2h 25m",
      "https://www.imdb.com/title/tt0405336/"
   ],
   [
      "2006",
      "Summer Palace",
      "Yi He Yuan",
      "Ye Lou",
      "zh,de",
      "CN,FR",
      "2h 38m",
      "https://www.imdb.com/title/tt0794374/"
   ],
   [
      "2006",
      "The Wind That Shakes the Barley",
      "",
      "Ken Loach",
      "en,ga",
      "IE,GB,DE,IT,ES,FR,CH",
      "2h 7m",
      "https://www.imdb.com/title/tt0460989/"
   ],
   [
      "2006",
      "Volver",
      "",
      "Pedro Almodóvar",
      "es",
      "ES,US",
      "2h 1m",
      "https://www.imdb.com/title/tt0441909/"
   ],
   [
      "2007",
      "4 Months, 3 Weeks and 2 Days",
      "4 luni, 3 saptamâni si 2 zile",
      "Cristian Mungiu",
      "ro",
      "RO,NL",
      "1h 53m",
      "https://www.imdb.com/title/tt1032846/"
   ],
   [
      "2007",
      "Aleksandra",
      "",
      "Aleksandr Sokurov",
      "ru",
      "RU,FR",
      "1h 35m",
      "https://www.imdb.com/title/tt1034427/"
   ],
   [
      "2007",
      "The Edge of Heaven",
      "Auf der anderen Seite",
      "Fatih Akin",
      "de,tr,en",
      "DE,TR,IT",
      "2h 2m",
      "https://www.imdb.com/title/tt0880502/"
   ],
   [
      "2007",
      "Death Proof",
      "",
      "Quentin Tarantino",
      "en",
      "US",
      "2h 7m",
      "https://www.imdb.com/title/tt1028528/"
   ],
   [
      "2007",
      "Import Export",
      "",
      "Ulrich Seidl",
      "de,ru,sk,cs,en",
      "AT,FR,DE",
      "2h 21m",
      "https://www.imdb.com/title/tt0459102/"
   ],
   [
      "2007",
      "The Banishment",
      "Izgnanie",
      "Andrey Zvyagintsev",
      "ru",
      "RU",
      "2h 30m",
      "https://www.imdb.com/title/tt0488905/"
   ],
   [
      "2007",
      "The Diving Bell and the Butterfly",
      "Le scaphandre et le papillon",
      "Julian Schnabel",
      "fr",
      "FR,US",
      "1h 52m",
      "https://www.imdb.com/title/tt0401383/"
   ],
   [
      "2007",
      "Love Songs",
      "Les chansons d'amour",
      "Christophe Honoré",
      "fr",
      "FR",
      "1h 31m",
      "https://www.imdb.com/title/tt0996605/"
   ],
   [
      "2007",
      "The Mourning Forest",
      "Mogari no mori",
      "Naomi Kawase",
      "ja",
      "JP,FR",
      "1h 37m",
      "https://www.imdb.com/title/tt1016205/"
   ],
   [
      "2007",
      "My Blueberry Nights",
      "",
      "Kar-Wai Wong",
      "en",
      "CN,FR,HK,US",
      "1h 35m",
      "https://www.imdb.com/title/tt0765120/"
   ],
   [
      "2007",
      "No Country for Old Men",
      "",
      "Ethan Coen, Joel Coen",
      "en,es",
      "US",
      "2h 2m",
      "https://www.imdb.com/title/tt0477348/"
   ],
   [
      "2007",
      "Paranoid Park",
      "",
      "Gus Van Sant",
      "en,fr",
      "FR,US",
      "1h 25m",
      "https://www.imdb.com/title/tt0842929/"
   ],
   [
      "2007",
      "Persepolis",
      "",
      "Vincent Paronnaud, Marjane Satrapi",
      "fr,en,fa,de",
      "FR,US",
      "1h 36m",
      "https://www.imdb.com/title/tt0808417/"
   ],
   [
      "2007",
      "Promise Me This",
      "Zavet",
      "Emir Kusturica",
      "sr",
      "RS,FR",
      "2h 3m",
      "https://www.imdb.com/title/tt0479519/"
   ],
   [
      "2007",
      "Secret Sunshine",
      "Milyang",
      "Lee Chang-dong",
      "ko",
      "KR",
      "2h 22m",
      "https://www.imdb.com/title/tt0817225/"
   ],
   [
      "2007",
      "Breath",
      "Soom",
      "Kim Ki-duk",
      "ko",
      "KR",
      "1h 24m",
      "https://www.imdb.com/title/tt0901475/"
   ],
   [
      "2007",
      "Silent Light",
      "Stellet Licht",
      "Carlos Reygadas",
      "de,es,fr,en",
      "MX,FR,NL,DE",
      "2h 25m",
      "https://www.imdb.com/title/tt0841925/"
   ],
   [
      "2007",
      "Tehilim",
      "",
      "Raphaël Nadjari",
      "he",
      "FR,IL,US",
      "1h 36m",
      "https://www.imdb.com/title/tt0816672/"
   ],
   [
      "2007",
      "The Man from London",
      "A londoni férfi",
      "Béla Tarr, Ágnes Hranitzky",
      "hu,en,fr",
      "HU,DE,FR,IT",
      "2h 19m",
      "https://www.imdb.com/title/tt0415127/"
   ],
   [
      "2007",
      "The Last Mistress",
      "Une vieille maîtresse",
      "Catherine Breillat",
      "fr",
      "FR,IT",
      "1h 55m",
      "https://www.imdb.com/title/tt0437526/"
   ],
   [
      "2007",
      "We Own the Night",
      "",
      "James Gray",
      "en,ru,es",
      "US",
      "1h 57m",
      "https://www.imdb.com/title/tt0498399/"
   ],
   [
      "2007",
      "Zodiac",
      "",
      "David Fincher",
      "en",
      "US",
      "2h 37m",
      "https://www.imdb.com/title/tt0443706/"
   ],
   [
      "2008",
      "Adoration",
      "",
      "Atom Egoyan",
      "en,fr,he",
      "CA",
      "1h 41m",
      "https://www.imdb.com/title/tt1074929/"
   ],
   [
      "2008",
      "Blindness",
      "",
      "Fernando Meirelles",
      "en,ja",
      "BR,CA,JP,GB,IT",
      "2h 1m",
      "https://www.imdb.com/title/tt0861689/"
   ],
   [
      "2008",
      "Che",
      "",
      "Steven Soderbergh",
      "es,en",
      "FR,ES,US",
      "2h 14m",
      "https://www.imdb.com/title/tt0892255/"
   ],
   [
      "2008",
      "Delta",
      "",
      "Kornél Mundruczó",
      "hu",
      "HU,DE",
      "1h 32m",
      "https://www.imdb.com/title/tt0910860/"
   ],
   [
      "2008",
      "The Class",
      "Entre les murs",
      "Laurent Cantet",
      "fr,bm,es",
      "FR",
      "2h 8m",
      "https://www.imdb.com/title/tt1068646/"
   ],
   [
      "2008",
      "24 City",
      "Er shi si cheng ji",
      "Zhangke Jia",
      "zh",
      "CN,HK,JP",
      "1h 52m",
      "https://www.imdb.com/title/tt1103963/"
   ],
   [
      "2008",
      "Gomorrah",
      "Gomorra",
      "Matteo Garrone",
      "it,zh,fr",
      "IT,BE",
      "2h 17m",
      "https://www.imdb.com/title/tt0929425/"
   ],
   [
      "2008",
      "Il Divo",
      "Il divo",
      "Paolo Sorrentino",
      "it,en",
      "IT,FR",
      "1h 50m",
      "https://www.imdb.com/title/tt1023490/"
   ],
   [
      "2008",
      "Changeling",
      "",
      "Clint Eastwood",
      "en",
      "US",
      "2h 21m",
      "https://www.imdb.com/title/tt0824747/"
   ],
   [
      "2008",
      "Frontier of Dawn",
      "La frontière de l'aube",
      "Philippe Garrel",
      "fr",
      "FR",
      "1h 46m",
      "https://www.imdb.com/title/tt1073535/"
   ],
   [
      "2008",
      "The Headless Woman",
      "La mujer sin cabeza",
      "Lucrecia Martel",
      "es",
      "AR,FR,IT,ES",
      "1h 27m",
      "https://www.imdb.com/title/tt1221141/"
   ],
   [
      "2008",
      "The Silence of Lorna",
      "Le silence de Lorna",
      "Jean-Pierre Dardenne, Luc Dardenne",
      "fr,sq,ru",
      "BE,FR,IT,DE",
      "1h 45m",
      "https://www.imdb.com/title/tt1186369/"
   ],
   [
      "2008",
      "Lion's Den",
      "Leonera",
      "Pablo Trapero",
      "es,fr",
      "AR,KR,BR,ES",
      "1h 53m",
      "https://www.imdb.com/title/tt1022606/"
   ],
   [
      "2008",
      "Linha de Passe",
      "",
      "Walter Salles, Daniela Thomas",
      "pt",
      "BR",
      "1h 53m",
      "https://www.imdb.com/title/tt0803029/"
   ],
   [
      "2008",
      "My Magic",
      "",
      "Eric Khoo",
      "ta,nan,en",
      "SG",
      "1h 15m",
      "https://www.imdb.com/title/tt1233329/"
   ],
   [
      "2008",
      "Palermo Shooting",
      "",
      "Wim Wenders",
      "en,de,it",
      "DE,FR,IT",
      "2h 4m",
      "https://www.imdb.com/title/tt1008017/"
   ],
   [
      "2008",
      "Service",
      "Serbis",
      "Brillante Mendoza",
      "fil,tl",
      "PH,FR,KR,HK",
      "1h 27m",
      "https://www.imdb.com/title/tt1225296/"
   ],
   [
      "2008",
      "Synecdoche, New York",
      "",
      "Charlie Kaufman",
      "en,de",
      "US",
      "2h 4m",
      "https://www.imdb.com/title/tt0383028/"
   ],
   [
      "2008",
      "Two Lovers",
      "",
      "James Gray",
      "en",
      "FR,US",
      "1h 50m",
      "https://www.imdb.com/title/tt1103275/"
   ],
   [
      "2008",
      "A Christmas Tale",
      "Un conte de Noël",
      "Arnaud Desplechin",
      "fr,it,ru,he",
      "FR",
      "2h 32m",
      "https://www.imdb.com/title/tt0993789/"
   ],
   [
      "2008",
      "Waltz with Bashir",
      "Vals Im Bashir",
      "Ari Folman",
      "he,ar,de,en",
      "IL,FR,DE,US,FI,CH,BE,AU",
      "1h 30m",
      "https://www.imdb.com/title/tt1185616/"
   ],
   [
      "2008",
      "Three Monkeys",
      "Üç Maymun",
      "Nuri Bilge Ceylan",
      "tr",
      "TR,FR,IT",
      "1h 49m",
      "https://www.imdb.com/title/tt1233381/"
   ],
   [
      "2009",
      "Antichrist",
      "",
      "Lars von Trier",
      "en",
      "DK,DE,FR,SE,IT,PL",
      "1h 48m",
      "https://www.imdb.com/title/tt0870984/"
   ],
   [
      "2009",
      "Thirst",
      "Bakjwi",
      "Park Chan-wook",
      "ko,en,fr",
      "KR,US",
      "2h 14m",
      "https://www.imdb.com/title/tt0762073/"
   ],
   [
      "2009",
      "Bright Star",
      "",
      "Jane Campion",
      "en,fr",
      "AU,GB,FR",
      "1h 59m",
      "https://www.imdb.com/title/tt0810784/"
   ],
   [
      "2009",
      "Spring Fever",
      "Chun feng chen zui de ye wan",
      "Ye Lou",
      "zh",
      "CN,FR",
      "1h 56m",
      "https://www.imdb.com/title/tt1422119/"
   ],
   [
      "2009",
      "The White Ribbon",
      "Das weiße Band - Eine deutsche Kindergeschichte",
      "Michael Haneke",
      "de,it,pl",
      "DE,AT,FR,IT,CA",
      "2h 24m",
      "https://www.imdb.com/title/tt1149362/"
   ],
   [
      "2009",
      "Enter the Void",
      "",
      "Gaspar Noé",
      "en,ja",
      "FR,DE,IT,CA,JP",
      "2h 41m",
      "https://www.imdb.com/title/tt1191111/"
   ],
   [
      "2009",
      "Fish Tank",
      "",
      "Andrea Arnold",
      "en",
      "GB,NL",
      "2h 3m",
      "https://www.imdb.com/title/tt1232776/"
   ],
   [
      "2009",
      "Inglourious Basterds",
      "",
      "Quentin Tarantino",
      "en,de,fr,it",
      "DE,US",
      "2h 33m",
      "https://www.imdb.com/title/tt0361748/"
   ],
   [
      "2009",
      "Kinatay",
      "",
      "Brillante Mendoza",
      "fil,tl,en",
      "FR,PH,NL,JP",
      "1h 45m",
      "https://www.imdb.com/title/tt1423592/"
   ],
   [
      "2009",
      "Wild Grass",
      "Les herbes folles",
      "Alain Resnais",
      "fr",
      "FR,IT",
      "1h 44m",
      "https://www.imdb.com/title/tt1156143/"
   ],
   [
      "2009",
      "Looking for Eric",
      "",
      "Ken Loach",
      "en,fr",
      "GB,FR,IT,BE,ES",
      "1h 56m",
      "https://www.imdb.com/title/tt1242545/"
   ],
   [
      "2009",
      "Broken Embraces",
      "Los abrazos rotos",
      "Pedro Almodóvar",
      "es,en",
      "ES",
      "2h 7m",
      "https://www.imdb.com/title/tt0913425/"
   ],
   [
      "2009",
      "Map of the Sounds of Tokyo",
      "",
      "Isabel Coixet",
      "ja,en,ca",
      "ES",
      "1h 49m",
      "https://www.imdb.com/title/tt1185376/"
   ],
   [
      "2009",
      "Taking Woodstock",
      "",
      "Ang Lee",
      "en",
      "US,TW",
      "2h",
      "https://www.imdb.com/title/tt1127896/"
   ],
   [
      "2009",
      "The Time That Remains",
      "",
      "Elia Suleiman",
      "ar,he,en",
      "FR,BE,IT,AE",
      "1h 49m",
      "https://www.imdb.com/title/tt1037163/"
   ],
   [
      "2009",
      "A Prophet",
      "Un prophète",
      "Jacques Audiard",
      "fr,ar",
      "FR,IT",
      "2h 35m",
      "https://www.imdb.com/title/tt1235166/"
   ],
   [
      "2009",
      "Vengeance",
      "Fuk sau",
      "Johnnie To",
      "zh,en,fr",
      "HK,FR",
      "1h 48m",
      "https://www.imdb.com/title/tt1329454/"
   ],
   [
      "2009",
      "Vincere",
      "",
      "Marco Bellocchio",
      "it,de",
      "IT,FR",
      "2h 8m",
      "https://www.imdb.com/title/tt1156173/"
   ],
   [
      "2009",
      "Face",
      "",
      "Tsai Ming-liang",
      "fr,zh,en",
      "FR,TW,BE,NL",
      "2h 18m",
      "https://www.imdb.com/title/tt1262420/"
   ],
   [
      "2009",
      "In the Beginning",
      "À l'origine",
      "Xavier Giannoli",
      "fr",
      "FR",
      "2h 10m",
      "https://www.imdb.com/title/tt1198385/"
   ],
   [
      "2010",
      "Another Year",
      "",
      "Mike Leigh",
      "en",
      "GB,US",
      "2h 9m",
      "https://www.imdb.com/title/tt1431181/"
   ],
   [
      "2010",
      "Biutiful",
      "",
      "Alejandro G. Iñárritu",
      "es,zh,wo",
      "MX,ES",
      "2h 28m",
      "https://www.imdb.com/title/tt1164999/"
   ],
   [
      "2010",
      "Certified Copy",
      "Copie conforme",
      "Abbas Kiarostami",
      "fr,en,it",
      "FR,IT,BE,IR",
      "1h 46m",
      "https://www.imdb.com/title/tt1020773/"
   ],
   [
      "2010",
      "Of Gods and Men",
      "Des hommes et des dieux",
      "Xavier Beauvois",
      "fr,ar",
      "FR",
      "2h 2m",
      "https://www.imdb.com/title/tt1588337/"
   ],
   [
      "2010",
      "Fair Game",
      "",
      "Doug Liman",
      "en,ar,fr",
      "US,AE",
      "1h 48m",
      "https://www.imdb.com/title/tt0977855/"
   ],
   [
      "2010",
      "Outside the Law",
      "Hors la loi",
      "Rachid Bouchareb",
      "fr,ar,en",
      "FR,DZ,BE,TN,IT",
      "2h 18m",
      "https://www.imdb.com/title/tt1229381/"
   ],
   [
      "2010",
      "La nostra vita",
      "",
      "Daniele Luchetti",
      "it,ro",
      "IT,FR",
      "1h 38m",
      "https://www.imdb.com/title/tt1509636/"
   ],
   [
      "2010",
      "The Princess of Montpensier",
      "La princesse de Montpensier",
      "Bertrand Tavernier",
      "fr",
      "FR,DE",
      "2h 19m",
      "https://www.imdb.com/title/tt1599975/"
   ],
   [
      "2010",
      "Uncle Boonmee Who Can Recall His Past Lives",
      "Loong Boonmee raleuk chat",
      "Apichatpong Weerasethakul",
      "th,fr,lo",
      "TH,GB,FR,DE,ES,NL",
      "1h 54m",
      "https://www.imdb.com/title/tt1588895/"
   ],
   [
      "2010",
      "Outrage",
      "Autoreiji",
      "Takeshi Kitano",
      "ja,en",
      "JP",
      "1h 49m",
      "https://www.imdb.com/title/tt1462667/"
   ],
   [
      "2010",
      "Poetry",
      "Shi",
      "Lee Chang-dong",
      "ko",
      "KR,FR",
      "2h 19m",
      "https://www.imdb.com/title/tt1287878/"
   ],
   [
      "2010",
      "Chongqing Blues",
      "Rizhao Chongqing",
      "Xiaoshuai Wang",
      "zh",
      "CN",
      "1h 50m",
      "https://www.imdb.com/title/tt1646123/"
   ],
   [
      "2010",
      "Route Irish",
      "",
      "Ken Loach",
      "en,ar",
      "GB,FR,IT,BE,ES",
      "1h 49m",
      "https://www.imdb.com/title/tt1528312/"
   ],
   [
      "2010",
      "My Joy",
      "Schaste moe",
      "Sergey Loznitsa",
      "ru,de",
      "DE,UA,NL",
      "2h 7m",
      "https://www.imdb.com/title/tt1646114/"
   ],
   [
      "2010",
      "Tender Son: The Frankenstein Project",
      "Szelíd teremtés - A Frankenstein-terv",
      "Kornél Mundruczó",
      "hu",
      "HU,DE,AT",
      "1h 49m",
      "https://www.imdb.com/title/tt1527049/"
   ],
   [
      "2010",
      "The Housemaid",
      "Hanyo",
      "Im Sang-soo",
      "ko,en",
      "KR",
      "1h 47m",
      "https://www.imdb.com/title/tt1314652/"
   ],
   [
      "2010",
      "Tournée",
      "",
      "Mathieu Amalric",
      "fr,en",
      "FR,DE",
      "1h 51m",
      "https://www.imdb.com/title/tt1451762/"
   ],
   [
      "2010",
      "A Screaming Man",
      "Un homme qui crie",
      "Mahamat-Saleh Haroun",
      "fr,ar",
      "FR,BE,TD",
      "1h 32m",
      "https://www.imdb.com/title/tt1639901/"
   ],
   [
      "2010",
      "Burnt by the Sun 2",
      "Utomlennye solntsem 2",
      "Nikita Mikhalkov",
      "ru,de",
      "RU",
      "3h 1m",
      "https://www.imdb.com/title/tt0403645/"
   ],
   [
      "2011",
      "Once Upon a Time in Anatolia",
      "Bir Zamanlar Anadolu'da",
      "Nuri Bilge Ceylan",
      "tr",
      "TR,BA",
      "2h 37m",
      "https://www.imdb.com/title/tt1827487/"
   ],
   [
      "2011",
      "Drive",
      "",
      "Nicolas Winding Refn",
      "en,es",
      "US",
      "1h 40m",
      "https://www.imdb.com/title/tt0780504/"
   ],
   [
      "2011",
      "We Have a Pope",
      "Habemus Papam",
      "Nanni Moretti",
      "it,de,en,es,pl,fr",
      "IT,FR",
      "1h 42m",
      "https://www.imdb.com/title/tt1456472/"
   ],
   [
      "2011",
      "Hanezu no tsuki",
      "",
      "Naomi Kawase",
      "ja",
      "JP",
      "1h 31m",
      "https://www.imdb.com/title/tt1896753/"
   ],
   [
      "2011",
      "Footnote",
      "Hearat Shulayim",
      "Joseph Cedar",
      "he",
      "IL",
      "1h 47m",
      "https://www.imdb.com/title/tt1445520/"
   ],
   [
      "2011",
      "Hara-Kiri: Death of a Samurai",
      "Ichimei",
      "Takashi Miike",
      "ja",
      "JP,GB",
      "2h 8m",
      "https://www.imdb.com/title/tt1728196/"
   ],
   [
      "2011",
      "House of Tolerance",
      "L'Apollonide (Souvenirs de la maison close)",
      "Bertrand Bonello",
      "fr",
      "FR",
      "2h 2m",
      "https://www.imdb.com/title/tt1660379/"
   ],
   [
      "2011",
      "The Skin I Live In",
      "La piel que habito",
      "Pedro Almodóvar",
      "es",
      "ES,US",
      "2h",
      "https://www.imdb.com/title/tt1189073/"
   ],
   [
      "2011",
      "The Source",
      "La source des femmes",
      "Radu Mihaileanu",
      "ar",
      "FR,BE,IT",
      "2h 15m",
      "https://www.imdb.com/title/tt1686067/"
   ],
   [
      "2011",
      "The Kid with a Bike",
      "Le gamin au vélo",
      "Jean-Pierre Dardenne, Luc Dardenne",
      "fr",
      "BE,FR,IT",
      "1h 27m",
      "https://www.imdb.com/title/tt1827512/"
   ],
   [
      "2011",
      "Le Havre",
      "",
      "Aki Kaurismäki",
      "fr",
      "FI,FR,DE",
      "1h 33m",
      "https://www.imdb.com/title/tt1508675/"
   ],
   [
      "2011",
      "Melancholia",
      "",
      "Lars von Trier",
      "en",
      "DK,SE,FR,DE",
      "2h 15m",
      "https://www.imdb.com/title/tt1527186/"
   ],
   [
      "2011",
      "Michael",
      "",
      "Markus Schleinzer",
      "de",
      "AT",
      "1h 36m",
      "https://www.imdb.com/title/tt1906426/"
   ],
   [
      "2011",
      "Pater",
      "",
      "Alain Cavalier",
      "fr",
      "FR",
      "1h 45m",
      "https://www.imdb.com/title/tt1906446/"
   ],
   [
      "2011",
      "Polisse",
      "",
      "Maïwenn",
      "fr,it,ro,ar",
      "FR",
      "2h 7m",
      "https://www.imdb.com/title/tt1661420/"
   ],
   [
      "2011",
      "Sleeping Beauty",
      "",
      "Julia Leigh",
      "en",
      "AU",
      "1h 41m",
      "https://www.imdb.com/title/tt1588398/"
   ],
   [
      "2011",
      "The Artist",
      "",
      "Michel Hazanavicius",
      "en,fr",
      "FR,BE,US",
      "1h 40m",
      "https://www.imdb.com/title/tt1655442/"
   ],
   [
      "2011",
      "The Tree of Life",
      "",
      "Terrence Malick",
      "en",
      "US",
      "2h 19m",
      "https://www.imdb.com/title/tt0478304/"
   ],
   [
      "2011",
      "This Must Be the Place",
      "",
      "Paolo Sorrentino",
      "en,he",
      "IT,FR,IE",
      "1h 58m",
      "https://www.imdb.com/title/tt1440345/"
   ],
   [
      "2011",
      "We Need to Talk About Kevin",
      "",
      "Lynne Ramsay",
      "en",
      "GB,US,ES",
      "1h 52m",
      "https://www.imdb.com/title/tt1242460/"
   ],
   [
      "2012",
      "Amour",
      "",
      "Michael Haneke",
      "fr,en",
      "AT,FR,DE",
      "2h 7m",
      "https://www.imdb.com/title/tt1602620/"
   ],
   [
      "2012",
      "After the Battle",
      "Baad el mawkeaa",
      "Yousry Nasrallah",
      "ar",
      "FR,EG",
      "2h 4m",
      "https://www.imdb.com/title/tt2368599/"
   ],
   [
      "2012",
      "Cosmopolis",
      "",
      "David Cronenberg",
      "en",
      "CA,FR,PT,IT",
      "1h 49m",
      "https://www.imdb.com/title/tt1480656/"
   ],
   [
      "2012",
      "In Another Country",
      "Da-reun na-ra-e-seo",
      "Hong Sang-soo",
      "ko,en,fr",
      "KR",
      "1h 29m",
      "https://www.imdb.com/title/tt1989712/"
   ],
   [
      "2012",
      "Rust and Bone",
      "De rouille et d'os",
      "Jacques Audiard",
      "fr,en",
      "FR,BE,SG",
      "2h",
      "https://www.imdb.com/title/tt2053425/"
   ],
   [
      "2012",
      "The Taste of Money",
      "Donui mat",
      "Im Sang-soo",
      "ko,en,tg",
      "KR",
      "1h 55m",
      "https://www.imdb.com/title/tt2106670/"
   ],
   [
      "2012",
      "Beyond the Hills",
      "Dupa dealuri",
      "Cristian Mungiu",
      "ro",
      "RO,FR,BE",
      "2h 32m",
      "https://www.imdb.com/title/tt2258281/"
   ],
   [
      "2012",
      "Holy Motors",
      "",
      "Leos Carax",
      "en,fr,zh",
      "FR,DE,BE",
      "1h 55m",
      "https://www.imdb.com/title/tt2076220/"
   ],
   [
      "2012",
      "The Hunt",
      "Jagten",
      "Thomas Vinterberg",
      "de,en,pl",
      "DK,SE",
      "1h 55m",
      "https://www.imdb.com/title/tt2106476/"
   ],
   [
      "2012",
      "Killing Them Softly",
      "",
      "Andrew Dominik",
      "en",
      "US",
      "1h 37m",
      "https://www.imdb.com/title/tt1764234/"
   ],
   [
      "2012",
      "Lawless",
      "",
      "John Hillcoat",
      "en",
      "US",
      "1h 56m",
      "https://www.imdb.com/title/tt1212450/"
   ],
   [
      "2012",
      "Like Someone in Love",
      "",
      "Abbas Kiarostami, Banafsheh Modaressi",
      "ja",
      "JP,FR",
      "1h 49m",
      "https://www.imdb.com/title/tt1843287/"
   ],
   [
      "2012",
      "Moonrise Kingdom",
      "",
      "Wes Anderson",
      "en",
      "US",
      "1h 34m",
      "https://www.imdb.com/title/tt1748122/"
   ],
   [
      "2012",
      "Mud",
      "",
      "Jeff Nichols",
      "en",
      "US",
      "2h 10m",
      "https://www.imdb.com/title/tt1935179/"
   ],
   [
      "2012",
      "On the Road",
      "",
      "Walter Salles",
      "en,fr,es",
      "FR,US,GB,MX,CA,BR,AR",
      "2h 4m",
      "https://www.imdb.com/title/tt0337692/"
   ],
   [
      "2012",
      "Paradise: Love",
      "Paradies: Liebe",
      "Ulrich Seidl",
      "de,en,sw",
      "AT,DE,FR",
      "2h",
      "https://www.imdb.com/title/tt1403214/"
   ],
   [
      "2012",
      "Post Tenebras Lux",
      "",
      "Carlos Reygadas",
      "es,en,fr",
      "MX,FR,NL,DE",
      "1h 55m",
      "https://www.imdb.com/title/tt1754367/"
   ],
   [
      "2012",
      "Reality",
      "",
      "Matteo Garrone",
      "it,en",
      "IT,FR",
      "1h 56m",
      "https://www.imdb.com/title/tt1846487/"
   ],
   [
      "2012",
      "The Angels' Share",
      "",
      "Ken Loach",
      "en",
      "GB,FR,BE,IT",
      "1h 41m",
      "https://www.imdb.com/title/tt1924394/"
   ],
   [
      "2012",
      "The Paperboy",
      "",
      "Lee Daniels",
      "en",
      "US",
      "1h 47m",
      "https://www.imdb.com/title/tt1496422/"
   ],
   [
      "2012",
      "In the Fog",
      "V tumane",
      "Sergey Loznitsa",
      "ru,de",
      "DE,NL,BY,RU,LV",
      "2h 7m",
      "https://www.imdb.com/title/tt2325741/"
   ],
   [
      "2012",
      "You Ain't Seen Nothin' Yet",
      "Vous n'avez encore rien vu",
      "Alain Resnais",
      "fr",
      "FR,DE",
      "1h 55m",
      "https://www.imdb.com/title/tt1690389/"
   ],
   [
      "2013",
      "Behind the Candelabra",
      "",
      "Steven Soderbergh",
      "en",
      "US",
      "1h 58m",
      "https://www.imdb.com/title/tt1291580/"
   ],
   [
      "2013",
      "Borgman",
      "",
      "Alex van Warmerdam",
      "nl,en",
      "NL,BE,DK",
      "1h 53m",
      "https://www.imdb.com/title/tt1954315/"
   ],
   [
      "2013",
      "Grigris",
      "",
      "Mahamat-Saleh Haroun",
      "fr,ar",
      "TD,FR,BE",
      "1h 41m",
      "https://www.imdb.com/title/tt2852394/"
   ],
   [
      "2013",
      "Heli",
      "",
      "Amat Escalante",
      "es",
      "MX,NL,DE,FR",
      "1h 45m",
      "https://www.imdb.com/title/tt2852376/"
   ],
   [
      "2013",
      "Inside Llewyn Davis",
      "",
      "Ethan Coen, Joel Coen",
      "en",
      "US,GB,FR",
      "1h 44m",
      "https://www.imdb.com/title/tt2042568/"
   ],
   [
      "2013",
      "Young & Beautiful",
      "Jeune et jolie",
      "François Ozon",
      "fr,de",
      "FR",
      "1h 35m",
      "https://www.imdb.com/title/tt2752200/"
   ],
   [
      "2013",
      "Jimmy P: Psychotherapy of a Plains Indian",
      "",
      "Arnaud Desplechin",
      "en",
      "US,FR",
      "1h 57m",
      "https://www.imdb.com/title/tt2210834/"
   ],
   [
      "2013",
      "The Great Beauty",
      "La grande bellezza",
      "Paolo Sorrentino",
      "it,ja,es,zh,fr,de,en",
      "IT,FR",
      "2h 21m",
      "https://www.imdb.com/title/tt2358891/"
   ],
   [
      "2013",
      "Blue Is the Warmest Color",
      "La vie d'Adèle",
      "Abdellatif Kechiche",
      "fr,en",
      "FR,BE,ES",
      "3h",
      "https://www.imdb.com/title/tt2278871/"
   ],
   [
      "2013",
      "Venus in Fur",
      "La Vénus à la fourrure",
      "Roman Polanski",
      "fr,de",
      "FR,PL",
      "1h 36m",
      "https://www.imdb.com/title/tt2406252/"
   ],
   [
      "2013",
      "The Past",
      "Le passé",
      "Asghar Farhadi",
      "fr,fa",
      "FR,IT,BE",
      "2h 10m",
      "https://www.imdb.com/title/tt2404461/"
   ],
   [
      "2013",
      "Age of Uprising: The Legend of Michael Kohlhaas",
      "Michael Kohlhaas",
      "Arnaud des Pallières",
      "fr,de",
      "FR,DE",
      "2h 2m",
      "https://www.imdb.com/title/tt2054790/"
   ],
   [
      "2013",
      "Nebraska",
      "",
      "Alexander Payne",
      "en,es",
      "US",
      "1h 55m",
      "https://www.imdb.com/title/tt1821549/"
   ],
   [
      "2013",
      "Only God Forgives",
      "",
      "Nicolas Winding Refn",
      "en,th",
      "DK,FR,US,SE,BE,TH",
      "1h 30m",
      "https://www.imdb.com/title/tt1602613/"
   ],
   [
      "2013",
      "Only Lovers Left Alive",
      "",
      "Jim Jarmusch",
      "en,fr,ar,tr",
      "GB,DE,GR,FR",
      "2h 3m",
      "https://www.imdb.com/title/tt1714915/"
   ],
   [
      "2013",
      "Like Father, Like Son",
      "Soshite chichi ni naru",
      "Kore-eda Hirokazu",
      "ja",
      "JP",
      "2h 1m",
      "https://www.imdb.com/title/tt2331143/"
   ],
   [
      "2013",
      "The Immigrant",
      "",
      "James Gray",
      "en,pl",
      "US",
      "2h",
      "https://www.imdb.com/title/tt1951181/"
   ],
   [
      "2013",
      "A Touch of Sin",
      "Tian zhu ding",
      "Zhangke Jia",
      "zh,en",
      "CN,JP,FR",
      "2h 10m",
      "https://www.imdb.com/title/tt2852400/"
   ],
   [
      "2013",
      "A Castle in Italy",
      "Un château en Italie",
      "Valeria Bruni Tedeschi",
      "fr,it,en",
      "FR",
      "1h 44m",
      "https://www.imdb.com/title/tt2234543/"
   ],
   [
      "2013",
      "Shield of Straw",
      "Wara no tate",
      "Takashi Miike",
      "ja",
      "JP,TW",
      "1h 57m",
      "https://www.imdb.com/title/tt2347144/"
   ],
   [
      "2014",
      "Goodbye to Language",
      "Adieu au langage",
      "Jean-Luc Godard",
      "fr,en,de",
      "CH,FR",
      "1h 10m",
      "https://www.imdb.com/title/tt2400275/"
   ],
   [
      "2014",
      "The Captive",
      "",
      "Atom Egoyan",
      "en",
      "CA",
      "1h 52m",
      "https://www.imdb.com/title/tt2326612/"
   ],
   [
      "2014",
      "Two Days, One Night",
      "Deux jours, une nuit",
      "Jean-Pierre Dardenne, Luc Dardenne",
      "fr,ar,en",
      "BE,FR,IT",
      "1h 35m",
      "https://www.imdb.com/title/tt2737050/"
   ],
   [
      "2014",
      "Foxcatcher",
      "",
      "Bennett Miller",
      "en,fr",
      "US",
      "2h 14m",
      "https://www.imdb.com/title/tt1100089/"
   ],
   [
      "2014",
      "Still the Water",
      "Futatsume no mado",
      "Naomi Kawase",
      "ja",
      "FR,JP,ES",
      "2h 1m",
      "https://www.imdb.com/title/tt3230162/"
   ],
   [
      "2014",
      "Jimmy's Hall",
      "",
      "Ken Loach",
      "en,ga",
      "GB,IE,FR,BE,JP",
      "1h 49m",
      "https://www.imdb.com/title/tt3110960/"
   ],
   [
      "2014",
      "The Wonders",
      "Le meraviglie",
      "Alice Rohrwacher",
      "it,fr,de,en",
      "IT,CH,DE",
      "1h 50m",
      "https://www.imdb.com/title/tt3044244/"
   ],
   [
      "2014",
      "Leviathan",
      "Leviafan",
      "Andrey Zvyagintsev",
      "ru",
      "RU",
      "2h 20m",
      "https://www.imdb.com/title/tt2802154/"
   ],
   [
      "2014",
      "Maps to the Stars",
      "",
      "David Cronenberg",
      "en",
      "CA,DE,FR,US",
      "1h 51m",
      "https://www.imdb.com/title/tt2172584/"
   ],
   [
      "2014",
      "Mommy",
      "",
      "Xavier Dolan",
      "fr,en",
      "CA",
      "2h 19m",
      "https://www.imdb.com/title/tt3612616/"
   ],
   [
      "2014",
      "Mr. Turner",
      "",
      "Mike Leigh",
      "en",
      "GB,FR,DE,US,BE",
      "2h 30m",
      "https://www.imdb.com/title/tt2473794/"
   ],
   [
      "2014",
      "Wild Tales",
      "Relatos salvajes",
      "Damián Szifron",
      "es",
      "AR,ES,FR,GB",
      "2h 2m",
      "https://www.imdb.com/title/tt3011894/"
   ],
   [
      "2014",
      "Saint Laurent",
      "",
      "Bertrand Bonello",
      "fr,en",
      "FR,BE",
      "2h 30m",
      "https://www.imdb.com/title/tt2707848/"
   ],
   [
      "2014",
      "Clouds of Sils Maria",
      "Sils Maria",
      "Olivier Assayas",
      "en,fr,de",
      "FR,DE,CH",
      "2h 4m",
      "https://www.imdb.com/title/tt2452254/"
   ],
   [
      "2014",
      "The Homesman",
      "",
      "Tommy Lee Jones",
      "en,da",
      "FR,US",
      "2h 2m",
      "https://www.imdb.com/title/tt2398231/"
   ],
   [
      "2014",
      "The Search",
      "",
      "Michel Hazanavicius",
      "fr,en,ru",
      "FR,GE",
      "2h 15m",
      "https://www.imdb.com/title/tt2177827/"
   ],
   [
      "2014",
      "Timbuktu",
      "",
      "Abderrahmane Sissako",
      "fr,ar,bm,en",
      "FR,MR,QA",
      "1h 36m",
      "https://www.imdb.com/title/tt3409392/"
   ],
   [
      "2014",
      "Winter Sleep",
      "Kis Uykusu",
      "Nuri Bilge Ceylan",
      "tr,en",
      "TR,FR,DE",
      "3h 16m",
      "https://www.imdb.com/title/tt2758880/"
   ],
   [
      "2015",
      "Carol",
      "",
      "Todd Haynes",
      "en",
      "GB,FR,AU,US",
      "1h 58m",
      "https://www.imdb.com/title/tt2402927/"
   ],
   [
      "2015",
      "Chronic",
      "",
      "Michel Franco",
      "en",
      "MX,FR",
      "1h 33m",
      "https://www.imdb.com/title/tt3850496/"
   ],
   [
      "2015",
      "Dheepan",
      "",
      "Jacques Audiard",
      "ta,fr,en",
      "FR",
      "1h 55m",
      "https://www.imdb.com/title/tt4082068/"
   ],
   [
      "2015",
      "Tale of Tales",
      "Il racconto dei racconti",
      "Matteo Garrone",
      "en,ru",
      "IT,FR,GB",
      "2h 14m",
      "https://www.imdb.com/title/tt3278330/"
   ],
   [
      "2015",
      "The Measure of a Man",
      "La loi du marché",
      "Stéphane Brizé",
      "fr",
      "FR",
      "1h 31m",
      "https://www.imdb.com/title/tt4428814/"
   ],
   [
      "2015",
      "Louder Than Bombs",
      "",
      "Joachim Trier",
      "en,fr",
      "NO,FR,DK,US",
      "1h 49m",
      "https://www.imdb.com/title/tt2217859/"
   ],
   [
      "2015",
      "Macbeth",
      "",
      "Justin Kurzel",
      "en",
      "GB,FR,US",
      "1h 53m",
      "https://www.imdb.com/title/tt2884018/"
   ],
   [
      "2015",
      "Marguerite & Julien",
      "Marguerite et Julien",
      "Valérie Donzelli",
      "fr",
      "FR",
      "1h 45m",
      "https://www.imdb.com/title/tt4428800/"
   ],
   [
      "2015",
      "Mia madre",
      "",
      "Nanni Moretti",
      "it,en,fr",
      "IT,FR,DE",
      "1h 46m",
      "https://www.imdb.com/title/tt3013610/"
   ],
   [
      "2015",
      "Mon Roi",
      "",
      "Maïwenn",
      "fr,en",
      "FR",
      "2h 4m",
      "https://www.imdb.com/title/tt3478962/"
   ],
   [
      "2015",
      "The Assassin",
      "Cike Nie Yin Niang",
      "Hsiao-Hsien Hou",
      "zh",
      "TW,HK,CN",
      "1h 45m",
      "https://www.imdb.com/title/tt3508840/"
   ],
   [
      "2015",
      "Son of Saul",
      "Saul fia",
      "László Nemes",
      "hu,yi,de,ru,pl,fr,el,sk,he",
      "HU",
      "1h 47m",
      "https://www.imdb.com/title/tt3808342/"
   ],
   [
      "2015",
      "Mountains May Depart",
      "Shan he gu ren",
      "Zhangke Jia",
      "zh,en",
      "CN,FR,JP",
      "2h 6m",
      "https://www.imdb.com/title/tt3740778/"
   ],
   [
      "2015",
      "Sicario",
      "",
      "Denis Villeneuve",
      "en,es,uk",
      "US,MX,HK",
      "2h 1m",
      "https://www.imdb.com/title/tt3397884/"
   ],
   [
      "2015",
      "The Lobster",
      "",
      "Yorgos Lanthimos",
      "en,fr,el",
      "IE,GB,GR,FR,NL,US,BE",
      "1h 59m",
      "https://www.imdb.com/title/tt3464902/"
   ],
   [
      "2015",
      "The Sea of Trees",
      "",
      "Gus Van Sant",
      "en,ja",
      "US",
      "1h 50m",
      "https://www.imdb.com/title/tt3450900/"
   ],
   [
      "2015",
      "Our Little Sister",
      "Umimachi Diary",
      "Kore-eda Hirokazu",
      "ja",
      "JP",
      "2h 7m",
      "https://www.imdb.com/title/tt3756788/"
   ],
   [
      "2015",
      "Valley of Love",
      "",
      "Guillaume Nicloux",
      "fr,en",
      "FR,BE",
      "1h 31m",
      "https://www.imdb.com/title/tt4120210/"
   ],
   [
      "2015",
      "Youth",
      "",
      "Paolo Sorrentino",
      "en,es,de",
      "CH,GB,FR,IT",
      "2h 4m",
      "https://www.imdb.com/title/tt3312830/"
   ],
   [
      "2016",
      "American Honey",
      "",
      "Andrea Arnold",
      "en",
      "GB,US",
      "2h 43m",
      "https://www.imdb.com/title/tt3721936/"
   ],
   [
      "2016",
      "Aquarius",
      "",
      "Kleber Mendonça Filho",
      "pt",
      "BR,FR",
      "2h 26m",
      "https://www.imdb.com/title/tt5221584/"
   ],
   [
      "2016",
      "Graduation",
      "Bacalaureat",
      "Cristian Mungiu",
      "ro",
      "RO,FR,BE",
      "2h 8m",
      "https://www.imdb.com/title/tt4936450/"
   ],
   [
      "2016",
      "Elle",
      "",
      "Paul Verhoeven",
      "fr",
      "FR,DE,BE",
      "2h 10m",
      "https://www.imdb.com/title/tt3716530/"
   ],
   [
      "2016",
      "The Salesman",
      "Forooshande",
      "Asghar Farhadi",
      "fa,en",
      "IR,FR",
      "2h 4m",
      "https://www.imdb.com/title/tt5186714/"
   ],
   [
      "2016",
      "I, Daniel Blake",
      "",
      "Ken Loach",
      "en",
      "GB,FR,BE",
      "1h 40m",
      "https://www.imdb.com/title/tt5168192/"
   ],
   [
      "2016",
      "Julieta",
      "",
      "Pedro Almodóvar",
      "es",
      "ES,FR,US",
      "1h 39m",
      "https://www.imdb.com/title/tt4326444/"
   ],
   [
      "2016",
      "It's Only the End of the World",
      "Juste la fin du monde",
      "Xavier Dolan",
      "fr,en",
      "CA,FR",
      "1h 37m",
      "https://www.imdb.com/title/tt4645368/"
   ],
   [
      "2016",
      "The Unknown Girl",
      "La fille inconnue",
      "Jean-Pierre Dardenne, Luc Dardenne",
      "fr",
      "BE,FR",
      "1h 53m",
      "https://www.imdb.com/title/tt4630550/"
   ],
   [
      "2016",
      "Loving",
      "",
      "Jeff Nichols",
      "en",
      "GB,US",
      "2h 3m",
      "https://www.imdb.com/title/tt4669986/"
   ],
   [
      "2016",
      "Slack Bay",
      "Ma Loute",
      "Bruno Dumont",
      "fr,en",
      "FR,DE,BE",
      "2h 2m",
      "https://www.imdb.com/title/tt4726636/"
   ],
   [
      "2016",
      "Ma' Rosa",
      "",
      "Brillante Mendoza",
      "fil,tl",
      "PH",
      "1h 50m",
      "https://www.imdb.com/title/tt5638094/"
   ],
   [
      "2016",
      "The Handmaiden",
      "",
      "Park Chan-wook",
      "ko,ja",
      "KR",
      "2h 25m",
      "https://www.imdb.com/title/tt4016934/"
   ],
   [
      "2016",
      "From the Land of the Moon",
      "Mal de pierres",
      "Nicole Garcia",
      "fr,es,de",
      "FR,BE,CA,ES",
      "2h",
      "https://www.imdb.com/title/tt3794028/"
   ],
   [
      "2016",
      "Paterson",
      "",
      "Jim Jarmusch",
      "en,it",
      "FR,DE,US",
      "1h 58m",
      "https://www.imdb.com/title/tt5247022/"
   ],
   [
      "2016",
      "Personal Shopper",
      "",
      "Olivier Assayas",
      "en,fr,sv,de",
      "FR,DE,CZ,BE",
      "1h 45m",
      "https://www.imdb.com/title/tt4714782/"
   ],
   [
      "2016",
      "Staying Vertical",
      "Rester vertical",
      "Alain Guiraudie",
      "fr",
      "FR",
      "1h 38m",
      "https://www.imdb.com/title/tt5231812/"
   ],
   [
      "2016",
      "Sieranevada",
      "",
      "Cristi Puiu",
      "ro",
      "RO,FR,BA,HR,MK",
      "2h 53m",
      "https://www.imdb.com/title/tt4466490/"
   ],
   [
      "2016",
      "The Last Face",
      "",
      "Sean Penn",
      "en",
      "US",
      "2h 10m",
      "https://www.imdb.com/title/tt3286560/"
   ],
   [
      "2016",
      "The Neon Demon",
      "",
      "Nicolas Winding Refn",
      "en",
      "US,BE,DK,FR",
      "1h 57m",
      "https://www.imdb.com/title/tt1974419/"
   ],
   [
      "2016",
      "Toni Erdmann",
      "",
      "Maren Ade",
      "fr,de,en,ro",
      "DE,AT,MC,RO,FR,CH",
      "2h 42m",
      "https://www.imdb.com/title/tt4048272/"
   ],
   [
      "2017",
      "BPM (Beats Per Minute)",
      "120 battements par minute",
      "Robin Campillo",
      "fr,en",
      "FR",
      "2h 23m",
      "https://www.imdb.com/title/tt6135348/"
   ],
   [
      "2017",
      "In the Fade",
      "Aus dem Nichts",
      "Fatih Akin",
      "de,el,en,tr",
      "DE,FR",
      "1h 46m",
      "https://www.imdb.com/title/tt5723272/"
   ],
   [
      "2017",
      "The Day After",
      "Geu-hu",
      "Hong Sang-soo",
      "ko",
      "KR",
      "1h 32m",
      "https://www.imdb.com/title/tt6462506/"
   ],
   [
      "2017",
      "Good Time",
      "",
      "Benny Safdie, Josh Safdie",
      "en",
      "US",
      "1h 42m",
      "https://www.imdb.com/title/tt4846232/"
   ],
   [
      "2017",
      "Happy End",
      "",
      "Michael Haneke",
      "fr,en",
      "FR,AT,DE",
      "1h 47m",
      "https://www.imdb.com/title/tt5304464/"
   ],
   [
      "2017",
      "Radiance",
      "Hikari",
      "Naomi Kawase",
      "ja",
      "JP,FR",
      "1h 41m",
      "https://www.imdb.com/title/tt6165792/"
   ],
   [
      "2017",
      "Jupiter's Moon",
      "Jupiter holdja",
      "Kornél Mundruczó",
      "hu,en,ar",
      "HU,DE,FR",
      "2h 9m",
      "https://www.imdb.com/title/tt5842890/"
   ],
   [
      "2017",
      "A Gentle Creature",
      "Krotkaya",
      "Sergey Loznitsa",
      "ru,fr",
      "FR,DE,LT,NL",
      "2h 23m",
      "https://www.imdb.com/title/tt5618752/"
   ],
   [
      "2017",
      "L'amant double",
      "",
      "François Ozon",
      "fr",
      "FR,BE",
      "1h 47m",
      "https://www.imdb.com/title/tt6367558/"
   ],
   [
      "2017",
      "Redoubtable",
      "Le Redoutable",
      "Michel Hazanavicius",
      "fr,en,it,cs",
      "FR,MM",
      "1h 47m",
      "https://www.imdb.com/title/tt5687334/"
   ],
   [
      "2017",
      "Loveless",
      "Nelyubov",
      "Andrey Zvyagintsev",
      "ru,pt,uz",
      "RU,FR,DE,BE",
      "2h 7m",
      "https://www.imdb.com/title/tt6304162/"
   ],
   [
      "2017",
      "Okja",
      "",
      "Bong Joon Ho",
      "en,ko,es",
      "KR,US",
      "2h",
      "https://www.imdb.com/title/tt3967856/"
   ],
   [
      "2017",
      "Rodin",
      "",
      "Jacques Doillon",
      "fr,ja",
      "FR,BE,US",
      "1h 59m",
      "https://www.imdb.com/title/tt5771710/"
   ],
   [
      "2017",
      "The Beguiled",
      "",
      "Sofia Coppola",
      "en,fr",
      "US",
      "1h 33m",
      "https://www.imdb.com/title/tt5592248/"
   ],
   [
      "2017",
      "The Killing of a Sacred Deer",
      "",
      "Yorgos Lanthimos",
      "en,fr",
      "IE,GB,US",
      "2h 1m",
      "https://www.imdb.com/title/tt5715874/"
   ],
   [
      "2017",
      "The Meyerowitz Stories (New and Selected)",
      "",
      "Noah Baumbach",
      "en",
      "US",
      "1h 52m",
      "https://www.imdb.com/title/tt5536736/"
   ],
   [
      "2017",
      "The Square",
      "",
      "Ruben Östlund",
      "sv,en,da",
      "SE,DE,FR,DK",
      "2h 31m",
      "https://www.imdb.com/title/tt4995790/"
   ],
   [
      "2017",
      "Wonderstruck",
      "",
      "Todd Haynes",
      "en,es",
      "US",
      "1h 56m",
      "https://www.imdb.com/title/tt5208216/"
   ],
   [
      "2017",
      "You Were Never Really Here",
      "",
      "Lynne Ramsay",
      "en",
      "GB,FR",
      "1h 29m",
      "https://www.imdb.com/title/tt5742374/"
   ],
   [
      "2018",
      "3 Faces",
      "Se rokh",
      "Jafar Panahi",
      "fa,az,tr",
      "IR,US",
      "1h 40m",
      "https://www.imdb.com/title/tt8269552/"
   ],
   [
      "2018",
      "The Wild Pear Tree",
      "Ahlat Agaci",
      "Nuri Bilge Ceylan",
      "tr",
      "TR,MK,FR,DE,BA,BG,SE,QA",
      "3h 8m",
      "https://www.imdb.com/title/tt6628102/"
   ],
   [
      "2018",
      "Ayka",
      "",
      "Sergei Dvortsevoy",
      "ru,ky",
      "RU,DE,PL,CN,FR,KZ",
      "1h 40m",
      "https://www.imdb.com/title/tt8305116/"
   ],
   [
      "2018",
      "BlacKkKlansman",
      "",
      "Spike Lee",
      "en",
      "US,CN",
      "2h 15m",
      "https://www.imdb.com/title/tt7349662/"
   ],
   [
      "2018",
      "Burning",
      "Beoning",
      "Lee Chang-dong",
      "ko,en",
      "KR,JP",
      "2h 28m",
      "https://www.imdb.com/title/tt7282468/"
   ],
   [
      "2018",
      "Capernaum",
      "Capharnaüm",
      "Nadine Labaki",
      "ar,am",
      "LB,US,FR,CY,QA,GB",
      "2h 6m",
      "https://www.imdb.com/title/tt8267604/"
   ],
   [
      "2018",
      "Dogman",
      "",
      "Matteo Garrone",
      "it",
      "IT,FR",
      "1h 43m",
      "https://www.imdb.com/title/tt6768578/"
   ],
   [
      "2018",
      "At War",
      "En guerre",
      "Stéphane Brizé",
      "fr",
      "FR",
      "1h 53m",
      "https://www.imdb.com/title/tt7555774/"
   ],
   [
      "2018",
      "Ash Is Purest White",
      "Jiang hu er nü",
      "Zhangke Jia",
      "zh",
      "CN,FR,JP",
      "2h 16m",
      "https://www.imdb.com/title/tt7298400/"
   ],
   [
      "2018",
      "Happy as Lazzaro",
      "Lazzaro felice",
      "Alice Rohrwacher",
      "it",
      "IT,CH,FR,DE",
      "2h 8m",
      "https://www.imdb.com/title/tt6752992/"
   ],
   [
      "2018",
      "The Image Book",
      "Le livre d'image",
      "Jean-Luc Godard",
      "fr,en,ar,it,de",
      "CH,FR",
      "1h 28m",
      "https://www.imdb.com/title/tt5749596/"
   ],
   [
      "2018",
      "Girls of the Sun",
      "Les filles du soleil",
      "Eva Husson",
      "fr,ku,en,ar",
      "FR,BE,GE,CH",
      "1h 55m",
      "https://www.imdb.com/title/tt6704880/"
   ],
   [
      "2018",
      "LETO",
      "Leto",
      "Kirill Serebrennikov",
      "ru,en",
      "RU,FR",
      "2h 6m",
      "https://www.imdb.com/title/tt7342838/"
   ],
   [
      "2018",
      "Shoplifters",
      "Manbiki kazoku",
      "Kore-eda Hirokazu",
      "ja",
      "JP",
      "2h 1m",
      "https://www.imdb.com/title/tt8075192/"
   ],
   [
      "2018",
      "Asako I & II",
      "Netemo sametemo",
      "Ryûsuke Hamaguchi",
      "ja,en",
      "JP,FR",
      "1h 59m",
      "https://www.imdb.com/title/tt7112154/"
   ],
   [
      "2018",
      "Sorry Angel",
      "Plaire, aimer et courir vite",
      "Christophe Honoré",
      "fr",
      "FR",
      "2h 12m",
      "https://www.imdb.com/title/tt7534054/"
   ],
   [
      "2018",
      "Everybody Knows",
      "Todos lo saben",
      "Asghar Farhadi",
      "es,en,ca",
      "ES,FR,IT,AR,DE",
      "2h 13m",
      "https://www.imdb.com/title/tt4964788/"
   ],
   [
      "2018",
      "Knife + Heart",
      "Un couteau dans le coeur",
      "Yann Gonzalez",
      "fr,es",
      "FR,MX,CH",
      "1h 42m",
      "https://www.imdb.com/title/tt6426028/"
   ],
   [
      "2018",
      "Under the Silver Lake",
      "",
      "David Robert Mitchell",
      "en",
      "US",
      "2h 19m",
      "https://www.imdb.com/title/tt5691670/"
   ],
   [
      "2018",
      "Yomeddine",
      "Yom el-Din",
      "Abu Bakr Shawky",
      "ar",
      "EG,AT,US",
      "1h 37m",
      "https://www.imdb.com/title/tt6846432/"
   ],
   [
      "2018",
      "Cold War",
      "Zimna wojna",
      "Pawel Pawlikowski",
      "pl,fr,hr,de,ru,sr,it",
      "PL,GB,FR,BE",
      "1h 29m",
      "https://www.imdb.com/title/tt6543652/"
   ],
   [
      "2019",
      "A Hidden Life",
      "",
      "Terrence Malick",
      "en,de,it",
      "GB,DE,US",
      "2h 54m",
      "https://www.imdb.com/title/tt5827916/"
   ],
   [
      "2019",
      "Atlantics",
      "Atlantique",
      "Mati Diop",
      "wol,fr,ar,en",
      "FR,SN,BE",
      "1h 46m",
      "https://www.imdb.com/title/tt10199586/"
   ],
   [
      "2019",
      "Bacurau",
      "",
      "Juliano Dornelles, Kleber Mendonça Filho",
      "pt,en",
      "BR,FR",
      "2h 11m",
      "https://www.imdb.com/title/tt2762506/"
   ],
   [
      "2019",
      "Pain and Glory",
      "Dolor y gloria",
      "Pedro Almodóvar",
      "es",
      "ES,FR",
      "1h 53m",
      "https://www.imdb.com/title/tt8291806/"
   ],
   [
      "2019",
      "Frankie",
      "",
      "Ira Sachs",
      "en,fr,pt",
      "FR,PT",
      "1h 40m",
      "https://www.imdb.com/title/tt8019694/"
   ],
   [
      "2019",
      "Parasite",
      "Gisaengchung",
      "Bong Joon Ho",
      "ko,en",
      "KR",
      "2h 12m",
      "https://www.imdb.com/title/tt6751668/"
   ],
   [
      "2019",
      "The Traitor",
      "Il traditore",
      "Marco Bellocchio",
      "it,pt,en",
      "IT,FR,DE,BR",
      "2h 33m",
      "https://www.imdb.com/title/tt7736478/"
   ],
   [
      "2019",
      "It Must Be Heaven",
      "",
      "Elia Suleiman",
      "en,fr,ar,es,he,ja",
      "FR,QA,DE,CA,TR,PS",
      "1h 42m",
      "https://www.imdb.com/title/tt8359842/"
   ],
   [
      "2019",
      "The Whistlers",
      "La Gomera",
      "Corneliu Porumboiu",
      "ro,en,es",
      "RO,FR,DE,CH,SE",
      "1h 37m",
      "https://www.imdb.com/title/tt7921248/"
   ],
   [
      "2019",
      "Young Ahmed",
      "Le jeune Ahmed",
      "Jean-Pierre Dardenne, Luc Dardenne",
      "fr,ar",
      "BE,FR",
      "1h 25m",
      "https://www.imdb.com/title/tt8359822/"
   ],
   [
      "2019",
      "Les Misérables",
      "Les misérables",
      "Ladj Ly",
      "fr",
      "FR",
      "1h 44m",
      "https://www.imdb.com/title/tt10199590/"
   ],
   [
      "2019",
      "Little Joe",
      "",
      "Jessica Hausner",
      "en",
      "AT,GB,DE,FR",
      "1h 45m",
      "https://www.imdb.com/title/tt9204204/"
   ],
   [
      "2019",
      "Matthias & Maxime",
      "Matthias et Maxime",
      "Xavier Dolan",
      "fr,en",
      "CA",
      "1h 59m",
      "https://www.imdb.com/title/tt8767908/"
   ],
   [
      "2019",
      "Mektoub, My Love: Intermezzo",
      "",
      "Abdellatif Kechiche",
      "fr",
      "FR",
      "3h 32m",
      "https://www.imdb.com/title/tt8253606/"
   ],
   [
      "2019",
      "The Wild Goose Lake",
      "Nanfang chezhan de juhui",
      "Yi'nan Diao",
      "zh",
      "CN,FR",
      "1h 53m",
      "https://www.imdb.com/title/tt9647768/"
   ],
   [
      "2019",
      "Once Upon a Time in... Hollywood",
      "",
      "Quentin Tarantino",
      "en,it,es,de",
      "US,GB,CN",
      "2h 41m",
      "https://www.imdb.com/title/tt7131622/"
   ],
   [
      "2019",
      "Portrait of a Lady on Fire",
      "Portrait de la jeune fille en feu",
      "Céline Sciamma",
      "fr,it",
      "FR",
      "2h 2m",
      "https://www.imdb.com/title/tt8613070/"
   ],
   [
      "2019",
      "Oh Mercy!",
      "Roubaix, une lumière",
      "Arnaud Desplechin",
      "fr",
      "FR",
      "1h 59m",
      "https://www.imdb.com/title/tt8359840/"
   ],
   [
      "2019",
      "Sibyl",
      "",
      "Justine Triet",
      "fr,en,it",
      "FR,BE",
      "1h 41m",
      "https://www.imdb.com/title/tt9173264/"
   ],
   [
      "2019",
      "Sorry We Missed You",
      "",
      "Ken Loach",
      "en",
      "GB,FR,BE",
      "1h 41m",
      "https://www.imdb.com/title/tt8359816/"
   ],
   [
      "2019",
      "The Dead Don't Die",
      "",
      "Jim Jarmusch",
      "en",
      "US",
      "1h 44m",
      "https://www.imdb.com/title/tt8695030/"
   ],
   [
      "2020",
      "DNA",
      "ADN",
      "Maïwenn",
      "fr",
      "FR,DZ",
      "1h 30m",
      "https://www.imdb.com/title/tt7600716/"
   ],
   [
      "2020",
      "True Mothers",
      "Asa ga kuru",
      "Naomi Kawase",
      "ja",
      "JP,FR",
      "2h 20m",
      "https://www.imdb.com/title/tt10418630/"
   ],
   [
      "2020",
      "Peninsula",
      "Busanhaeng 2: Bando",
      "Yeon Sang-ho",
      "ko,en,zh",
      "KR",
      "1h 56m",
      "https://www.imdb.com/title/tt8850222/"
   ],
   [
      "2020",
      "Des hommes",
      "",
      "Lucas Belvaux",
      "fr",
      "FR,BE",
      "1h 41m",
      "https://www.imdb.com/title/tt10307922/"
   ],
   [
      "2020",
      "Another Round",
      "Druk",
      "Thomas Vinterberg",
      "da,sv,fr,en,ru",
      "DK,SE,NL",
      "1h 57m",
      "https://www.imdb.com/title/tt10288566/"
   ],
   [
      "2020",
      "Memories of My Father",
      "El olvido que seremos",
      "Fernando Trueba",
      "es,it,en",
      "CO",
      "2h 16m",
      "https://www.imdb.com/title/tt11385336/"
   ],
   [
      "2020",
      "Summer of 85",
      "Été 85",
      "François Ozon",
      "fr,en",
      "FR,BE",
      "1h 41m",
      "https://www.imdb.com/title/tt10457128/"
   ],
   [
      "2020",
      "Heaven: To the Land of Happiness",
      "",
      "Im Sang-soo",
      "ko",
      "KR",
      "1h 40m",
      "https://www.imdb.com/title/tt12443662/"
   ],
   [
      "2020",
      "Honki no shirushi: Gekijôban",
      "",
      "Kôji Fukada",
      "ja",
      "JP",
      "3h 52m",
      "https://www.imdb.com/title/tt13276326/"
   ],
   [
      "2020",
      "Last Words",
      "",
      "Jonathan Nossiter",
      "en,it",
      "IT,FR",
      "2h 6m",
      "https://www.imdb.com/title/tt12443726/"
   ],
   [
      "2020",
      "Lovers Rock",
      "",
      "Steve McQueen",
      "en",
      "GB",
      "1h 10m",
      "https://www.imdb.com/title/tt10551102/"
   ],
   [
      "2020",
      "Mangrove",
      "",
      "Steve McQueen",
      "en",
      "GB",
      "2h 7m",
      "https://www.imdb.com/title/tt10551100/"
   ],
   [
      "2020",
      "In the Dusk",
      "",
      "Sharunas Bartas",
      "lt,ru",
      "LT,FR,RS,CZ,LV,PT",
      "2h 8m",
      "https://www.imdb.com/title/tt9799640/"
   ],
   [
      "2021",
      "The Story of My Wife",
      "A feleségem története",
      "Ildikó Enyedi",
      "en,fr,nl,de,it",
      "HU,DE,FR,IT",
      "2h 49m",
      "https://www.imdb.com/title/tt8205028/"
   ],
   [
      "2021",
      "Annette",
      "",
      "Leos Carax",
      "en,fr",
      "FR,DE,BE,JP,MX,CH,US",
      "2h 21m",
      "https://www.imdb.com/title/tt6217926/"
   ],
   [
      "2021",
      "Benedetta",
      "",
      "Paul Verhoeven",
      "fr",
      "FR,BE,NL",
      "2h 11m",
      "https://www.imdb.com/title/tt6823148/"
   ],
   [
      "2021",
      "Bergman Island",
      "",
      "Mia Hansen-Løve",
      "en,sv,fr",
      "FR,BE,DE,SE,MX,BR,GB",
      "1h 52m",
      "https://www.imdb.com/title/tt6910282/"
   ],
   [
      "2021",
      "Drive My Car",
      "Doraibu mai kâ",
      "Ryûsuke Hamaguchi",
      "ja,en,de,zh,ta,ko,id",
      "JP",
      "2h 59m",
      "https://www.imdb.com/title/tt14039582/"
   ],
   [
      "2021",
      "Flag Day",
      "",
      "Sean Penn",
      "en",
      "US,GB,CA",
      "1h 49m",
      "https://www.imdb.com/title/tt2304637/"
   ],
   [
      "2021",
      "France",
      "",
      "Bruno Dumont",
      "de,en,fr",
      "FR,DE,IT,BE",
      "2h 13m",
      "https://www.imdb.com/title/tt9714030/"
   ],
   [
      "2021",
      "A Hero",
      "Ghahreman",
      "Asghar Farhadi",
      "fa",
      "IR,FR",
      "2h 7m",
      "https://www.imdb.com/title/tt11777738/"
   ],
   [
      "2021",
      "Ahed's Knee",
      "Ha'berech",
      "Nadav Lapid",
      "he,fr,de",
      "FR,DE,IL",
      "1h 49m",
      "https://www.imdb.com/title/tt12494638/"
   ],
   [
      "2021",
      "Casablanca Beats",
      "Haut et fort",
      "Nabil Ayouch",
      "ar",
      "FR,MA",
      "1h 41m",
      "https://www.imdb.com/title/tt14773800/"
   ],
   [
      "2021",
      "Compartment Number 6",
      "Hytti nro 6",
      "Juho Kuosmanen",
      "ru,fi,en",
      "FI,RU,EE,DE",
      "1h 47m",
      "https://www.imdb.com/title/tt10262648/"
   ],
   [
      "2021",
      "The Divide",
      "La fracture",
      "Catherine Corsini",
      "fr",
      "FR",
      "1h 38m",
      "https://www.imdb.com/title/tt13321730/"
   ],
   [
      "2021",
      "The Restless",
      "Les intranquilles",
      "Joachim Lafosse",
      "fr",
      "BE,FR,LU",
      "1h 57m",
      "https://www.imdb.com/title/tt11611486/"
   ],
   [
      "2021",
      "Paris, 13th District",
      "Les Olympiades, Paris 13e",
      "Jacques Audiard",
      "fr,zh,en",
      "FR",
      "1h 45m",
      "https://www.imdb.com/title/tt12708658/"
   ],
   [
      "2021",
      "Lingui",
      "",
      "Mahamat-Saleh Haroun",
      "fr",
      "TD,FR,BE,DE",
      "1h 27m",
      "https://www.imdb.com/title/tt13846546/"
   ],
   [
      "2021",
      "Memoria",
      "",
      "Apichatpong Weerasethakul",
      "en,es",
      "CO,TH,FR,DE,MX,QA,GB,CN,US,CH",
      "2h 16m",
      "https://www.imdb.com/title/tt8399288/"
   ],
   [
      "2021",
      "Nitram",
      "",
      "Justin Kurzel",
      "en",
      "AU",
      "1h 52m",
      "https://www.imdb.com/title/tt13694628/"
   ],
   [
      "2021",
      "Petrov's Flu",
      "Petrovy v grippe",
      "Kirill Serebrennikov",
      "ru,en",
      "RU,FR,DE,CH",
      "2h 25m",
      "https://www.imdb.com/title/tt10380900/"
   ],
   [
      "2021",
      "Red Rocket",
      "",
      "Sean Baker",
      "en",
      "US",
      "2h 10m",
      "https://www.imdb.com/title/tt13453006/"
   ],
   [
      "2021",
      "The French Dispatch",
      "",
      "Wes Anderson",
      "en,fr",
      "US,DE",
      "1h 47m",
      "https://www.imdb.com/title/tt8847712/"
   ],
   [
      "2021",
      "Titane",
      "",
      "Julia Ducournau",
      "fr",
      "FR,BE",
      "1h 48m",
      "https://www.imdb.com/title/tt10944760/"
   ],
   [
      "2021",
      "Everything Went Fine",
      "Tout s'est bien passé",
      "François Ozon",
      "fr,de,en",
      "FR,BE",
      "1h 53m",
      "https://www.imdb.com/title/tt12847812/"
   ],
   [
      "2021",
      "Three Floors",
      "Tre piani",
      "Nanni Moretti",
      "it",
      "IT,FR",
      "1h 59m",
      "https://www.imdb.com/title/tt9110904/"
   ],
   [
      "2021",
      "The Worst Person in the World",
      "Verdens verste menneske",
      "Joachim Trier",
      "no",
      "NO,FR,SE,DK",
      "2h 8m",
      "https://www.imdb.com/title/tt10370710/"
   ],
   [
      "2022",
      "Armageddon Time",
      "",
      "James Gray",
      "en",
      "US,BR",
      "1h 54m",
      "https://www.imdb.com/title/tt10343028/"
   ],
   [
      "2022",
      "Broker",
      "Beurokeo",
      "Kore-eda Hirokazu",
      "ko",
      "KR",
      "2h 9m",
      "https://www.imdb.com/title/tt13056052/"
   ],
   [
      "2022",
      "Close",
      "",
      "Lukas Dhont",
      "fr,nl,en",
      "BE,NL,FR",
      "1h 44m",
      "https://www.imdb.com/title/tt9660502/"
   ],
   [
      "2022",
      "Crimes of the Future",
      "",
      "David Cronenberg",
      "en",
      "CA,GR,GB",
      "1h 47m",
      "https://www.imdb.com/title/tt14549466/"
   ],
   [
      "2022",
      "EO",
      "Eo",
      "Jerzy Skolimowski",
      "pl,it,en,fr,es",
      "PL,IT,GB",
      "1h 28m",
      "https://www.imdb.com/title/tt19652910/"
   ],
   [
      "2022",
      "Brother and Sister",
      "Frère et soeur",
      "Arnaud Desplechin",
      "fr,he",
      "FR",
      "1h 48m",
      "https://www.imdb.com/title/tt14622802/"
   ],
   [
      "2022",
      "Decision to Leave",
      "",
      "Park Chan-wook",
      "ko,zh,en",
      "KR",
      "2h 19m",
      "https://www.imdb.com/title/tt12477480/"
   ],
   [
      "2022",
      "Holy Spider",
      "",
      "Ali Abbasi",
      "fa",
      "DK,DE,FR,SE,JO,IT",
      "1h 58m",
      "https://www.imdb.com/title/tt18550140/"
   ],
   [
      "2022",
      "The Eight Mountains",
      "Le otto montagne",
      "Felix van Groeningen, Charlotte Vandermeersch",
      "it,en,ne",
      "IT,BE,FR,GB",
      "2h 27m",
      "https://www.imdb.com/title/tt14641542/"
   ],
   [
      "2022",
      "Leila's Brothers",
      "Baradaran-e Leila",
      "Saeed Roustayi",
      "fa",
      "IR",
      "2h 45m",
      "https://www.imdb.com/title/tt19653180/"
   ],
   [
      "2022",
      "Les Amandiers",
      "",
      "Valeria Bruni Tedeschi",
      "fr,en",
      "FR,IT",
      "2h 6m",
      "https://www.imdb.com/title/tt14976386/"
   ],
   [
      "2022",
      "Nostalgia",
      "",
      "Mario Martone",
      "it,ar",
      "IT,FR",
      "1h 57m",
      "https://www.imdb.com/title/tt14034614/"
   ],
   [
      "2022",
      "Pacifiction",
      "",
      "Albert Serra",
      "en,fr,pt",
      "FR,ES,DE,PT,PF",
      "2h 45m",
      "https://www.imdb.com/title/tt13702796/"
   ],
   [
      "2022",
      "R.M.N.",
      "",
      "Cristian Mungiu",
      "ro,hu,de,en,fr,si",
      "RO,FR,BE,SE",
      "2h 5m",
      "https://www.imdb.com/title/tt18550182/"
   ],
   [
      "2022",
      "Showing Up",
      "",
      "Kelly Reichardt",
      "en",
      "US",
      "1h 47m",
      "https://www.imdb.com/title/tt13923216/"
   ],
   [
      "2022",
      "Stars at Noon",
      "",
      "Claire Denis",
      "en,fr,es",
      "FR,PA,US",
      "2h 15m",
      "https://www.imdb.com/title/tt10354106/"
   ],
   [
      "2022",
      "Tori and Lokita",
      "Tori et Lokita",
      "Jean-Pierre Dardenne, Luc Dardenne",
      "fr,it",
      "BE,FR",
      "1h 28m",
      "https://www.imdb.com/title/tt18317064/"
   ],
   [
      "2022",
      "Triangle of Sadness",
      "",
      "Ruben Östlund",
      "en,sv,de,fr,el,tgl,ak",
      "GB,SE,DE,MX,FR,TR,DK,US,CH,GR",
      "2h 27m",
      "https://www.imdb.com/title/tt7322224/"
   ],
   [
      "2022",
      "Mother and Son",
      "Un petit frère",
      "Léonor Serraille",
      "fr",
      "FR",
      "1h 56m",
      "https://www.imdb.com/title/tt17014214/"
   ],
   [
      "2022",
      "Cairo Conspiracy",
      "Walad min al-Janna",
      "Tarik Saleh",
      "ar",
      "SE,FR,FI,DK",
      "2h 6m",
      "https://www.imdb.com/title/tt15452062/"
   ],
   [
      "2022",
      "Tchaikovsky's Wife",
      "Zhena Chaikovskogo",
      "Kirill Serebrennikov",
      "ru,fr,it",
      "RU,FR,CH",
      "2h 23m",
      "https://www.imdb.com/title/tt17538510/"
   ],
   [
      "2023",
      "Anatomy of a Fall",
      "Anatomie d'une chute",
      "Justine Triet",
      "fr,en",
      "FR",
      "2h 31m",
      "https://www.imdb.com/title/tt17009710/"
   ],
   [
      "2023",
      "Asteroid City",
      "",
      "Wes Anderson",
      "en",
      "DE,US",
      "1h 45m",
      "https://www.imdb.com/title/tt14230388/"
   ],
   [
      "2023",
      "Banel & Adama",
      "Banel e Adama",
      "Ramata-Toulaye Sy",
      "fuf",
      "FR,SN,ML,QA",
      "1h 27m",
      "https://www.imdb.com/title/tt26256406/"
   ],
   [
      "2023",
      "Asphalt City",
      "",
      "Jean-Stéphane Sauvaire",
      "en",
      "US",
      "2h 5m",
      "https://www.imdb.com/title/tt9663896/"
   ],
   [
      "2023",
      "Club Zero",
      "",
      "Jessica Hausner",
      "en,fr,zh",
      "AT,GB,DE,FR,DK,TR,US,QA,BA",
      "1h 50m",
      "https://www.imdb.com/title/tt18235146/"
   ],
   [
      "2023",
      "Firebrand",
      "",
      "Karim Aïnouz",
      "en",
      "GB,US",
      "2h",
      "https://www.imdb.com/title/tt15000156/"
   ],
   [
      "2023",
      "A Brighter Tomorrow",
      "Il sol dell'avvenire",
      "Nanni Moretti",
      "it,fr,en,ko,el,hu",
      "IT,FR",
      "1h 35m",
      "https://www.imdb.com/title/tt16731908/"
   ],
   [
      "2023",
      "Monster",
      "Kaibutsu",
      "Kore-eda Hirokazu",
      "ja,en",
      "JP",
      "2h 7m",
      "https://www.imdb.com/title/tt23736044/"
   ],
   [
      "2023",
      "Fallen Leaves",
      "Kuolleet lehdet",
      "Aki Kaurismäki",
      "fi,ar",
      "FI,DE",
      "1h 21m",
      "https://www.imdb.com/title/tt21027780/"
   ],
   [
      "2023",
      "About Dry Grasses",
      "Kuru Otlar Üstüne",
      "Nuri Bilge Ceylan",
      "tr",
      "TR,FR,DE,SE",
      "3h 17m",
      "https://www.imdb.com/title/tt13231544/"
   ],
   [
      "2023",
      "Last Summer",
      "L'été dernier",
      "Catherine Breillat",
      "fr",
      "FR,NO",
      "1h 44m",
      "https://www.imdb.com/title/tt14550346/"
   ],
   [
      "2023",
      "La Chimera",
      "La chimera",
      "Alice Rohrwacher",
      "it,en,fr",
      "IT,FR,CH,TR",
      "2h 10m",
      "https://www.imdb.com/title/tt14561712/"
   ],
   [
      "2023",
      "The Taste of Things",
      "La passion de Dodin Bouffant",
      "Anh Hung Tran",
      "fr",
      "FR,BE",
      "2h 15m",
      "https://www.imdb.com/title/tt19760052/"
   ],
   [
      "2023",
      "Homecoming",
      "Le retour",
      "Catherine Corsini",
      "fr,en,cos,wol,it",
      "FR",
      "1h 50m",
      "https://www.imdb.com/title/tt22463404/"
   ],
   [
      "2023",
      "Four Daughters",
      "Les filles d'Olfa",
      "Kaouther Ben Hania",
      "ar,fr,en",
      "FR,TN,DE,SA,CY",
      "1h 47m",
      "https://www.imdb.com/title/tt27502426/"
   ],
   [
      "2023",
      "May December",
      "",
      "Todd Haynes",
      "en",
      "US",
      "1h 57m",
      "https://www.imdb.com/title/tt13651794/"
   ],
   [
      "2023",
      "Perfect Days",
      "",
      "Wim Wenders",
      "ja,en",
      "JP,DE",
      "2h 4m",
      "https://www.imdb.com/title/tt27503384/"
   ],
   [
      "2023",
      "Youth (Spring)",
      "Qingchun",
      "Wang Bing",
      "zh",
      "FR,LU,NL",
      "3h 32m",
      "https://www.imdb.com/title/tt8469104/"
   ],
   [
      "2023",
      "Kidnapped",
      "Rapito",
      "Marco Bellocchio",
      "it,he",
      "IT,FR,DE",
      "2h 14m",
      "https://www.imdb.com/title/tt14137416/"
   ],
   [
      "2023",
      "The Old Oak",
      "",
      "Ken Loach",
      "en,ar",
      "GB,FR,BE",
      "1h 53m",
      "https://www.imdb.com/title/tt19883634/"
   ],
   [
      "2023",
      "The Zone of Interest",
      "",
      "Jonathan Glazer",
      "de,pl,yi",
      "US,GB,PL",
      "1h 45m",
      "https://www.imdb.com/title/tt7160372/"
   ],
   [
      "2024",
      "All We Imagine as Light",
      "",
      "Payal Kapadia",
      "ms,hi,mr",
      "FR,IN,NL,LU,IT",
      "1h 50m",
      "https://www.imdb.com/title/tt32086077/"
   ],
   [
      "2024",
      "Anora",
      "",
      "Sean Baker",
      "en",
      "US",
      "2h 19m",
      "https://www.imdb.com/title/tt28607951/"
   ],
   [
      "2024",
      "Bird",
      "",
      "Andrea Arnold",
      "en",
      "GB,US,FR,DE",
      "1h 59m",
      "https://www.imdb.com/title/tt28277817/"
   ],
   [
      "2024",
      "Wild Diamond",
      "Diamant brut",
      "Agathe Riedinger",
      "fr",
      "FR",
      "1h 43m",
      "https://www.imdb.com/title/tt28319139/"
   ],
   [
      "2024",
      "Emilia Perez",
      "",
      "Jacques Audiard",
      "es",
      "FR,US,MX",
      "2h 10m",
      "https://www.imdb.com/title/tt20221436/"
   ],
   [
      "2024",
      "Caught by the Tides",
      "Feng liu yi dai",
      "Zhangke Jia",
      "zh",
      "CN",
      "1h 51m",
      "https://www.imdb.com/title/tt27958252/"
   ],
   [
      "2024",
      "Grand Tour",
      "",
      "Miguel Gomes",
      "pt",
      "PT,IT,FR,DE,JP,CN",
      "2h 8m",
      "https://www.imdb.com/title/tt27180099/"
   ],
   [
      "2024",
      "Kinds of Kindness",
      "",
      "Yorgos Lanthimos",
      "en",
      "IE,GB",
      "2h 44m",
      "https://www.imdb.com/title/tt22408160/"
   ],
   [
      "2024",
      "Beating Hearts",
      "L'amour ouf",
      "Gilles Lellouche",
      "fr",
      "FR,BE",
      "2h 46m",
      "https://www.imdb.com/title/tt27490099/"
   ],
   [
      "2024",
      "The Most Precious of Cargoes",
      "La plus précieuse des marchandises",
      "Michel Hazanavicius",
      "fr",
      "FR,BE",
      "1h 21m",
      "https://www.imdb.com/title/tt10462154/"
   ],
   [
      "2024",
      "Limonov: The Ballad",
      "",
      "Kirill Serebrennikov",
      "en",
      "IT,FR,ES",
      "2h 18m",
      "https://www.imdb.com/title/tt2963262/"
   ],
   [
      "2024",
      "Marcello Mio",
      "",
      "Christophe Honoré",
      "fr,it,en",
      "FR,IT",
      "2h",
      "https://www.imdb.com/title/tt32086069/"
   ],
   [
      "2024",
      "Megalopolis",
      "",
      "Francis Ford Coppola",
      "en",
      "US",
      "2h 18m",
      "https://www.imdb.com/title/tt10128846/"
   ],
   [
      "2024",
      "Motel Destino",
      "",
      "Karim Aïnouz",
      "pt",
      "BR,FR,DE,GB",
      "1h 55m",
      "https://www.imdb.com/title/tt28608358/"
   ],
   [
      "2024",
      "Oh Canada",
      "",
      "Paul Schrader",
      "en",
      "US",
      "1h 31m",
      "https://www.imdb.com/title/tt29994753/"
   ],
   [
      "2024",
      "Parthenope",
      "",
      "Paolo Sorrentino",
      "it",
      "IT,FR",
      "2h 16m",
      "https://www.imdb.com/title/tt23853982/"
   ],
   [
      "2024",
      "The Girl with the Needle",
      "Pigen med nålen",
      "Magnus von Horn",
      "da",
      "DK,PL,SE",
      "1h 55m",
      "https://www.imdb.com/title/tt10236164/"
   ],
   [
      "2024",
      "The Apprentice",
      "",
      "Ali Abbasi",
      "en",
      "CA,DK,IE",
      "2h",
      "https://www.imdb.com/title/tt8368368/"
   ],
   [
      "2024",
      "The Seed of the Sacred Fig",
      "",
      "Mohammad Rasoulof",
      "fa",
      "IR,FR,DE",
      "2h 48m",
      "https://www.imdb.com/title/tt32178949/"
   ],
   [
      "2024",
      "The Shrouds",
      "",
      "David Cronenberg",
      "en",
      "CA,FR",
      "1h 59m",
      "https://www.imdb.com/title/tt20212786/"
   ],
   [
      "2024",
      "The Substance",
      "",
      "Coralie Fargeat",
      "en",
      "GB,US,FR",
      "2h 20m",
      "https://www.imdb.com/title/tt17526714/"
   ],
   [
      "2024",
      "Three Kilometres to the End of the World",
      "Trei kilometri până la capătul lumii",
      "Emanuel Parvu",
      "ro",
      "RO",
      "1h 45m",
      "https://www.imdb.com/title/tt32186523/"
   ]
]
