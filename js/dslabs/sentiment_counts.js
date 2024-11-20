var sentiment_countsInfo ={
   "parameters" : {
      "text. Tweet." : null,
      "created_at. Data and time tweet was tweeted." : null,
      "is_retweet. A logical telling us if it is a retweet or not." : null,
      "id_str. Tweet ID." : null,
      "source. Device or service used to compose tweet." : null,
      "in_reply_to_user_id_str. If a reply, the user id of person being replied to." : null,
      "favorite_count. Number of times tweet had been favored at time dataset was created." : null,
      "retweet_count. How many times tweet had been retweeted at time dataset was created." : null
   },
   "reference" : "The Trump Twitter Archive: https://www.thetrumparchive.com/",
   "title" : "Trump Tweets from2009 to 2017",
   "format" : "An object of class \"data.frame\".",
   "description" : "Description\nThis dataset contains all tweets from Donald Trump's Twitter account from 2009 to 2017. Additionally, the results of a sentiment analysis, conducted on tweets from the campaign period (2015-06-17 to 2016-11-08), are included in sentiment_counts.",
   "usage" : "trump_tweets"
}

var sentiment_counts = [
   [
      "sentiment",
      "Android",
      "iPhone"
   ],
   [
      "anger",
      "962",
      "527"
   ],
   [
      "anticipation",
      "917",
      "707"
   ],
   [
      "disgust",
      "639",
      "314"
   ],
   [
      "fear",
      "799",
      "486"
   ],
   [
      "joy",
      "695",
      "536"
   ],
   [
      "negative",
      "1657",
      "931"
   ],
   [
      "positive",
      "1827",
      "1494"
   ],
   [
      "sadness",
      "901",
      "514"
   ],
   [
      "surprise",
      "530",
      "365"
   ],
   [
      "trust",
      "1248",
      "1001"
   ],
   [
      "none",
      "11834",
      "10793"
   ]
]
