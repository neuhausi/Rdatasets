var presidentInfo ={
   "parameters" : {
      "end" : "End year",
      "potus" : "President of the United States",
      "party" : "Political party of the president",
      "start" : "Start year",
      "vpotus" : "Vice President of the United States"
   },
   "description" : "Description\nSummary of the changes in the president and vice president for the United\nStates of America.",
   "title" : "United States Presidental History",
   "reference" : "Presidents of the United States (table) &ndash; infoplease.com (visited:\nNov 2nd, 2010)",
   "usage" : "president",
   "format" : "A data frame with 67 observations on the following 5 variables."
}

var president = [
   [
      "potus",
      "party",
      "start",
      "end",
      "vpotus"
   ],
   [
      "George Washington",
      " ",
      "1789",
      "1797",
      "John Adams"
   ],
   [
      "John Adams",
      "Federalist",
      "1797",
      "1801",
      "Thomas Jefferson"
   ],
   [
      "Thomas Jefferson",
      "Democratic-Republican",
      "1801",
      "1805",
      "Aaron Burr"
   ],
   [
      "Thomas Jefferson",
      "Democratic-Republican",
      "1805",
      "1809",
      "George Clinton"
   ],
   [
      "James Madison",
      "Democratic-Republican",
      "1809",
      "1812",
      "George Clinton"
   ],
   [
      "James Madison",
      "Democratic-Republican",
      "1812",
      "1813",
      "No Vice President"
   ],
   [
      "James Madison",
      "Democratic-Republican",
      "1813",
      "1814",
      "Elbridge Gerry"
   ],
   [
      "James Madison",
      "Democratic-Republican",
      "1814",
      "1817",
      "No Vice President"
   ],
   [
      "James Monroe",
      "Democratic-Republican",
      "1817",
      "1825",
      "Daniel D. Tompkins"
   ],
   [
      "John Quincy Adams",
      "Democratic-Republican",
      "1825",
      "1829",
      "John C. Calhoun"
   ],
   [
      "Andrew Jackson",
      "Democratic",
      "1829",
      "1832",
      "John C. Calhoun"
   ],
   [
      "Andrew Jackson",
      "Democratic",
      "1832",
      "1833",
      "No Vice President"
   ],
   [
      "Andrew Jackson",
      "Democratic",
      "1833",
      "1837",
      "Martin Van Buren"
   ],
   [
      "Martin Van Buren",
      "Democratic",
      "1837",
      "1841",
      "Richard M. Johnson"
   ],
   [
      "William Henry Harrison",
      "Whig",
      "1841",
      "1841",
      "John Tyler"
   ],
   [
      "John Tyler",
      "Whig",
      "1841",
      "1845",
      "No Vice President"
   ],
   [
      "James Knox Polk",
      "Democratic",
      "1845",
      "1849",
      "George M. Dallas"
   ],
   [
      "Zachary Taylor",
      "Whig",
      "1849",
      "1850",
      "Millard Fillmore"
   ],
   [
      "Millard Fillmore",
      "Whig",
      "1850",
      "1853",
      "No VP"
   ],
   [
      "Franklin Pierce",
      "Democratic",
      "1853",
      "1853",
      "William R. King"
   ],
   [
      "Franklin Pierce",
      "Democratic",
      "1853",
      "1857",
      "No VP"
   ],
   [
      "James Buchanan",
      "Democratic",
      "1857",
      "1861",
      "John C. Breckinridge"
   ],
   [
      "Abraham Lincoln",
      "Republican",
      "1861",
      "1865",
      "Hannibal Hamlin"
   ],
   [
      "Abraham Lincoln",
      "Republican",
      "1861",
      "1865",
      "Andrew Johnson"
   ],
   [
      "Andrew Johnson",
      "Democratic/National Union",
      "1865",
      "1869",
      "No VP"
   ],
   [
      "Ulysses Simpson Grant",
      "Republican",
      "1869",
      "1873",
      "Schuyler Colfax"
   ],
   [
      "Ulysses Simpson Grant",
      "Republican",
      "1873",
      "1875",
      "Henry Wilson"
   ],
   [
      "Ulysses Simpson Grant",
      "Republican",
      "1875",
      "1877",
      "No VP"
   ],
   [
      "Rutherford Birchard Hayes",
      "Republican",
      "1877",
      "1881",
      "William A. Wheeler"
   ],
   [
      "James Abram Garfield",
      "Republican",
      "1881",
      "1881",
      "Chester A. Arthur"
   ],
   [
      "Chester Alan Arthur",
      "Republican",
      "1881",
      "1885",
      "No VP"
   ],
   [
      "Grover Cleveland",
      "Democratic",
      "1885",
      "1885",
      "Thomas A. Hendricks"
   ],
   [
      "Grover Cleveland",
      "Democratic",
      "1885",
      "1889",
      "No VP"
   ],
   [
      "Benjamin Harrison",
      "Republican",
      "1889",
      "1893",
      "Levi P. Morton"
   ],
   [
      "Grover Cleveland",
      "Democratic",
      "1893",
      "1897",
      "Adlai E. Stevenson"
   ],
   [
      "William McKinley",
      "Republican",
      "1897",
      "1899",
      "Garret A. Hobart"
   ],
   [
      "William McKinley",
      "Republican",
      "1899",
      "1901",
      "No VP"
   ],
   [
      "William McKinley",
      "Republican",
      "1901",
      "1901",
      "Theodore Roosevelt"
   ],
   [
      "Theodore Roosevelt",
      "Republican",
      "1901",
      "1905",
      "No VP"
   ],
   [
      "Theodore Roosevelt",
      "Republican",
      "1905",
      "1909",
      "Charles W. Fairbanks"
   ],
   [
      "William Howard Taft",
      "Republican",
      "1909",
      "1912",
      "James S. Sherman"
   ],
   [
      "William Howard Taft",
      "Republican",
      "1912",
      "1913",
      "No VP"
   ],
   [
      "Woodrow Wilson",
      "Democratic",
      "1913",
      "1921",
      "Thomas R. Marshall"
   ],
   [
      "Warren Gamaliel Harding",
      "Republican",
      "1921",
      "1923",
      "Calvin Coolidge"
   ],
   [
      "Calvin Coolidge",
      "Republican",
      "1923",
      "1925",
      "No VP"
   ],
   [
      "Calvin Coolidge",
      "Republican",
      "1925",
      "1929",
      "Charles G. Dawes"
   ],
   [
      "Herbert Clark Hoover",
      "Republican",
      "1929",
      "1933",
      "Charles Curtis"
   ],
   [
      "Franklin Delano Roosevelt",
      "Democratic",
      "1933",
      "1941",
      "John N. Garner"
   ],
   [
      "Franklin Delano Roosevelt",
      "Democratic",
      "1941",
      "1945",
      "Henry A. Wallace"
   ],
   [
      "Franklin Delano Roosevelt",
      "Democratic",
      "1945",
      "1945",
      "Harry S. Truman"
   ],
   [
      "Harry S. Truman",
      "Democratic",
      "1945",
      "1949",
      "No Vice President"
   ],
   [
      "Harry S. Truman",
      "Democratic",
      "1945",
      "1953",
      "Alben W. Barkley"
   ],
   [
      "Dwight David Eisenhower",
      "Republican",
      "1953",
      "1961",
      "Richard M. Nixon"
   ],
   [
      "John Fitzgerald Kennedy",
      "Democratic",
      "1961",
      "1963",
      "Lyndon B. Johnson"
   ],
   [
      "Lyndon Baines Johnson",
      "Democratic",
      "1963",
      "1969",
      "No VP"
   ],
   [
      "Lyndon Baines Johnson",
      "Democratic",
      "1963",
      "1969",
      "Hubert H. Humphrey"
   ],
   [
      "Richard Milhous Nixon",
      "Republican",
      "1969",
      "1973",
      "Spiro T. Agnew"
   ],
   [
      "Richard Milhous Nixon",
      "Republican",
      "1973",
      "1973",
      "No VP"
   ],
   [
      "Richard Milhous Nixon",
      "Republican",
      "1973",
      "1974",
      "Gerald R. Ford"
   ],
   [
      "Gerald Rudolph Ford",
      "Republican",
      "1974",
      "1974",
      "No VP"
   ],
   [
      "Gerald Rudolph Ford",
      "Republican",
      "1974",
      "1977",
      "Nelson A. Rockefeller"
   ],
   [
      "Jimmy Carter",
      "Democratic",
      "1977",
      "1981",
      "Walter F. Mondale"
   ],
   [
      "Ronald Wilson Reagan",
      "Republican",
      "1981",
      "1989",
      "George H. W. Bush"
   ],
   [
      "George Herbert Walker Bush",
      "Republican",
      "1989",
      "1993",
      "J. Danforth Quayle"
   ],
   [
      "Bill Clinton",
      "Democratic",
      "1993",
      "2001",
      "Albert Gore, Jr."
   ],
   [
      "George Walker Bush",
      "Republican",
      "2001",
      "2009",
      "Dick Cheney"
   ],
   [
      "Barack Obama",
      "Democrate",
      "2009",
      "",
      "Joseph Biden"
   ]
]
