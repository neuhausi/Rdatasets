var bakes_rawInfo ={
   "parameters" : {
      "signature" : "A character string containing the bake for the signature\nchallenge for that baker/episode.",
      "showstopper" : "A character string containing the bake for the\nshowstopper challenge for that baker/episode.",
      "episode" : "An integer denoting episode number within a series.",
      "series" : "An integer denoting UK series (1-10).",
      "baker" : "A character string with a given name or nickname.",
      "technical" : "An integer denoting the rank on the technical challenge\nfor that baker/episode. A value of 1 means the baker was the winner of\nthe technical challenge. If NA, the baker did not appear in the\nepisode."
   },
   "description" : "Description\nBakes for both the signature and showstopper challenges for each baker\nacross all 10 GBBO series.",
   "title" : "Bakes (raw)",
   "reference" : "if (require('tibble')) {\n  bakes_raw\n }\nhead(bakes_raw)",
   "usage" : "bakes_raw",
   "format" : "A data frame with 548 rows representing individual signatures and\nshowstoppers for each baker and 6 variables:"
}

var bakes_raw = [
   [
      "series",
      "episode",
      "baker",
      "signature",
      "technical",
      "showstopper"
   ],
   [
      "1",
      "1",
      "Annetha",
      "Light Jamaican Black Cakewith Strawberries and Cream",
      "2",
      "Red, White & Blue Chocolate Cake with Cigarellos, Fresh Fruit, and Cream"
   ],
   [
      "1",
      "1",
      "David",
      "Chocolate Orange Cake",
      "3",
      "Black Forest Floor Gateauxwith Moulded Chocolate Leaves, Fallen Fruitand Chocolate Mushrooms Moulded from eggs"
   ],
   [
      "1",
      "1",
      "Edd",
      "Caramel Cinnamon and Banana Cake",
      "1",
      "N/A"
   ],
   [
      "1",
      "1",
      "Jasminder",
      "Fresh Mango and Passion Fruit Hummingbird Cake",
      "",
      "N/A"
   ],
   [
      "1",
      "1",
      "Jonathan",
      "Carrot Cake with Lime and Cream Cheese Icing",
      "9",
      "Three Tiered White and Dark Chocolate with Almond and Cherry"
   ],
   [
      "1",
      "1",
      "Lea",
      "Cranberry and Pistachio Cakewith Orange Flower Water Icing",
      "10",
      "Raspberries and Cream filled Chocolatewith Chocolate-dipped Fresh Fruit"
   ],
   [
      "1",
      "1",
      "Louise",
      "Carrot and Orange Cake",
      "",
      "Never Fail Chocolate Sponge Cake,with Fresh Fruit, White & Chocolate Cigarello Border"
   ],
   [
      "1",
      "1",
      "Mark",
      "Sticky Marmalade Tea Loaf",
      "",
      "Heart-shaped Chocolate and Beetroot Cake with Store-Bought silver chocolate hearts and chocolate red and white roses."
   ],
   [
      "1",
      "1",
      "Miranda",
      "Triple Layered Brownie Meringue Cake with Raspberry Cream",
      "8",
      "Three Tiered Chocolate Fudge Cake  with Handmade Chocolate Button Decorations"
   ],
   [
      "1",
      "1",
      "Ruth",
      "Three Tiered Lemon Drizzle Cakewith Fresh Cream and freshly made Lemon Curd",
      "",
      "Classic Chocolate Sponge wrapped in a Chocolate Collartopped with Handmade White and Dark Chocolate Truffles"
   ],
   [
      "1",
      "2",
      "Annetha",
      "Rose Petal Shortbread",
      "7",
      "Pink Swirl Macarons / Eclairs"
   ],
   [
      "1",
      "2",
      "David",
      "Cheddar Cheese and Fresh Rosemary Biscuits",
      "8",
      "Choux Pastry Swans  Chocolate Profiteroles"
   ],
   [
      "1",
      "2",
      "Edd",
      "Oatmeal Raisin Cookie",
      "6",
      "Pink Macarons"
   ],
   [
      "1",
      "2",
      "Jasminder",
      "Millionaires' Shortbread",
      "2",
      "Meringues with Chocolate and Space DustCoffee flavoured Eclairs"
   ],
   [
      "1",
      "2",
      "Jonathan",
      "Honey and Candied Ginger Cookies",
      "1",
      "Meringues with Whiskey Cream"
   ],
   [
      "1",
      "2",
      "Louise",
      "Stained Glass Window Shortbread",
      "4",
      "Strawberry, Mint, and Cream Meringues  Chocolate Eclairs / Orange, Yellow and Pink Macarons"
   ],
   [
      "1",
      "2",
      "Miranda",
      "Fresh Vanilla Biscuits with Royal Icing",
      "3",
      "Pistachio Macarons"
   ],
   [
      "1",
      "2",
      "Ruth",
      "Peanut Shortbread withSalted Peanut Caramel",
      "5",
      "Almond Macaron with Violet ButtercreamRaspberries and Cream Eclairs"
   ],
   [
      "1",
      "3",
      "David",
      "Chilli Bread",
      "4",
      "Walnut and Seed Roll Red Berry and Almond Bun"
   ],
   [
      "1",
      "3",
      "Edd",
      "Olive Bread",
      "1",
      "Tomato and Mozzarella"
   ],
   [
      "1",
      "3",
      "Jasminder",
      "Focaccia",
      "5",
      "Mango and Sultana Buns Pan au Chocolat with Mars Bars Tutti Frutti Wheel with Jelly Tots"
   ],
   [
      "1",
      "3",
      "Jonathan",
      "Anchovy, Sweet Paprika and Oregano Bread",
      "6",
      "Sticky Lemon Honey Bun Olive and Anchovy Roll Sundried Tomatoes and Fresh Herbs Roll Stilton, Walnut and Apple Roll Cinnamon and Cardamom Chelsea Bun"
   ],
   [
      "1",
      "3",
      "Miranda",
      "Walnut and Apricot Bread",
      "3",
      "Lemon Iced Buns Chocolate and Orange Buns"
   ],
   [
      "1",
      "3",
      "Ruth",
      "Maple and Pecan Bread",
      "2",
      "Chocolate and Orange Panettone Cranberry Bagels"
   ],
   [
      "1",
      "4",
      "David",
      "Pear and Walnut Pudding",
      "5",
      "Apple and Blackberry Crumble, Rhubarb and Orange Betty, Suet Pear"
   ],
   [
      "1",
      "4",
      "Edd",
      "Apple and Plum Pudding",
      "3",
      "Apple and Cinnamon Crumble, Nutella Banana Brioche Bread Pudding, Rhubarb and Strawberry Suet Layer"
   ],
   [
      "1",
      "4",
      "Jasminder",
      "Sticky Toffee Pudding with Tropical Fruit & Toffee Sauce",
      "2",
      "Bread & Butter Pudding, Treacle Suet Pudding with Fresh Fruit, Apple and Pineapple Crumble"
   ],
   [
      "1",
      "4",
      "Miranda",
      "Sticky Toffee Pudding",
      "1",
      "Queen of Puddings, Chocolate Pear Roly Poly, Strawberry and Rhubarb Crumble"
   ],
   [
      "1",
      "4",
      "Ruth",
      "Peach and Blueberry Boy Bait",
      "4",
      "Apple & Ginger Crumble, Rhubarb Suet Crust, Cherry Queen of Puddings"
   ],
   [
      "1",
      "5",
      "Edd",
      "Chicken, Ham, Leek and Tarragon Pie",
      "2",
      "Almond Sweet Pastry with Ginger and Chocolate  Raspberry Tart / Yorkshire Curd Tart  Chickpea and Salami, Red and Yellow Pepper, Asparagus Gruyere Quiche Canapés"
   ],
   [
      "1",
      "5",
      "Jasminder",
      "Chicken and Mushroom Pie",
      "4",
      "Jaggery, Carrot, and Spiced Condensed Milk Tart  Fruit and Custard Tart  Thai Chili Red Onion, Duck in Plum Sauce, Salmon and Prawn Canapés"
   ],
   [
      "1",
      "5",
      "Miranda",
      "Summery Salmon, Cod and Prawn Fish Pie",
      "1",
      "Chocolate Pastry filled with Orange Cheesecake  Chocolate Pastry filled with Milk Chocolate Ganche  Strawberry Tart with Red Currant Glaze  Cheesy Crab, Broad Bean and Tomato, Pancetta Risotto Canapés"
   ],
   [
      "1",
      "5",
      "Ruth",
      "Minced Beef Pie",
      "3",
      "Raspberry and Dark Chocolate Tart  Creme Patisserie and Cherry Tart  Citrus Curd Tart with Creme Brulee top  Tomato, Asparagus Twirl Canapés"
   ],
   [
      "1",
      "6",
      "Edd",
      "Cinnamon and Banana Cake",
      "",
      "24 Chocolate and Ginger Tarts 24 Lemon Scones with Passion Fruit Curd 24 Raspberry Choux Buns 24 Finger Sandwiches"
   ],
   [
      "1",
      "6",
      "Miranda",
      "Lemon Cupcake",
      "",
      "Eliminated after signature"
   ],
   [
      "1",
      "6",
      "Ruth",
      "Mint, Ginger and Blackberry Cake",
      "",
      "24 Red Pepper and Cheese Quiche Tarts 24 Sultana Scones 24 Vanilla and Lemon Choux Buns 24 Finger Sandwiches"
   ],
   [
      "2",
      "1",
      "Ben",
      "Rhubarb and Custard CupcakesAfter Dinner Cupcakes",
      "2",
      "Vanilla Sponge with White Chocolate and Raspberry Buttercream"
   ],
   [
      "2",
      "1",
      "Holly",
      "Cherry Bakewell Inspired CupcakesGinger Cupcakes with Fig Truffle",
      "1",
      "UNKNOWN"
   ],
   [
      "2",
      "1",
      "Ian",
      "Apple and Cinnamon Cupcakes",
      "10",
      "UNKNOWN"
   ],
   [
      "2",
      "1",
      "Janet",
      "Raspberry and Cream Cupcakes",
      "8",
      "Chocolate Marble Cakewith Dark and White Chocolate Truffles"
   ],
   [
      "2",
      "1",
      "Jason",
      "Lemon Meringue CupcakesApple and Cinnamon Cupcakes",
      "6",
      "UNKNOWN"
   ],
   [
      "2",
      "1",
      "Joanne",
      "Chocolate Orange CupcakesOrange and Cardamom Cupcakes",
      "11",
      "Chocolate and Strawberry Cake"
   ],
   [
      "2",
      "1",
      "Keith",
      "Earl Grey Cupcakes",
      "12",
      "Chocolate and Sour Cream Cake"
   ],
   [
      "2",
      "1",
      "Mary-Anne",
      "Banoffee Cupcakes",
      "4",
      "Chocolate and Raspberry Opera cake"
   ],
   [
      "2",
      "1",
      "Robert",
      "Blackberry and Vanilla Cupcakeswith Liquorice Frosting",
      "3",
      "Genoise Layered Mousse Cakewith Chocolate Ganache"
   ],
   [
      "2",
      "1",
      "Simon",
      "Guinness and Chocolate Cupcakes",
      "9",
      "Two-Tiered Chocolate Courgette Cake"
   ],
   [
      "2",
      "1",
      "Urvashi",
      "Cherry Blossom CupcakesJapanese Lime Cupcakes",
      "7",
      "UNKNOWN"
   ],
   [
      "2",
      "1",
      "Yasmin",
      "Cardamom and Pomegranate Cupcakes",
      "5",
      "UNKNOWN"
   ],
   [
      "2",
      "2",
      "Ben",
      "Chorizo, Pepper and Gruyere Quiche",
      "1",
      "Lemon Meringue Tarts"
   ],
   [
      "2",
      "2",
      "Holly",
      "Pesto Quiche",
      "4",
      "Milk Chocolate and Pistachio TartsTrifle Tarts"
   ],
   [
      "2",
      "2",
      "Ian",
      "Stilton, Spinach and New Potato Quichewith Paprika and Walnut Pastry",
      "2",
      "UNKNOWN"
   ],
   [
      "2",
      "2",
      "Janet",
      "Quiche Printanière",
      "8",
      "Red Fruit TartsChocolate and Cherry Tarts"
   ],
   [
      "2",
      "2",
      "Jason",
      "Salmon and Pak Choi Quiche",
      "3",
      "Mint Chocolate Tarts Blueberry Bakewell Tarts"
   ],
   [
      "2",
      "2",
      "Joanne",
      "Caramelised Onion, Gruyere and Thyme Quiche",
      "10",
      "Raspberry and Mascarpone Tarts with Lemon and Almond PastryHoney and Almond Tarts with Sweetcrust"
   ],
   [
      "2",
      "2",
      "Mary-Anne",
      "Roasted Cauliflower, Cheese andCaramelised Onion Quiche",
      "9",
      "Butterscotch Brulée Tarts in Pecan PastryApple Rose Tarts"
   ],
   [
      "2",
      "2",
      "Robert",
      "Smoked Bacon and Kale Quiche",
      "5",
      "Chocolate, Fennel and Ginger TartAlmond, Creme Patissiere and Poached Pear Tart"
   ],
   [
      "2",
      "2",
      "Simon",
      "Smoked Haddock and Watercress Quiche",
      "11",
      "Passion Fruit and Ricotta TartsSalted Chocolate, Stem Ginger and Mascarpone Cream Tarts"
   ],
   [
      "2",
      "2",
      "Urvashi",
      "Crab, Coriander and Coconut Quiche",
      "7",
      "Strawberry and Basil TartsElderflower and Honeycomb Tarts"
   ],
   [
      "2",
      "2",
      "Yasmin",
      "Smoked Haddock and Watercress Quiche",
      "6",
      "Chocolate and Orange with Cinnamon-Orange Pastry TartsBlueberry and Hazelnut with Hazelnut Pastry Tarts"
   ],
   [
      "2",
      "3",
      "Ben",
      "Walnut, Raisin and Rosemary Loaf",
      "3",
      "UNKNOWN"
   ],
   [
      "2",
      "3",
      "Holly",
      "Picnic Loaf",
      "6",
      "Stilton and Walnut Rolls"
   ],
   [
      "2",
      "3",
      "Ian",
      "Courgette, Caerphilly Cheese and Thyme Loaf",
      "10",
      "Walnut and Raisin RollsCracked Wheat Logs"
   ],
   [
      "2",
      "3",
      "Janet",
      "Zupfe Loaf with Gruyère Cheese",
      "8",
      "Apple and Walnut Granary Rolls Red Onion Cottage Rolls"
   ],
   [
      "2",
      "3",
      "Jason",
      "Cheese and Onion Tear and Share Loaf",
      "7",
      "UNKNOWN"
   ],
   [
      "2",
      "3",
      "Joanne",
      "Stromboli flavored with Mozzarella, Ham, and Picante Pepper",
      "1",
      "UNKNOWN"
   ],
   [
      "2",
      "3",
      "Mary-Anne",
      "Ploughman's Loaf",
      "5",
      "Herb and Walnut BreadsChocolate and Chilli Buns"
   ],
   [
      "2",
      "3",
      "Robert",
      "Rye and Coriander Seed Loaf",
      "4",
      "Blueberry Brioche RollsLemon and Poppy Seed Rolls"
   ],
   [
      "2",
      "3",
      "Urvashi",
      "Salt and Peppercorn Loaf",
      "9",
      "Chilli and Halloumi RollsLemon and Coriander Mini Loaves"
   ],
   [
      "2",
      "3",
      "Yasmin",
      "Egyptian Dukkah Loaf with Mixed Spices",
      "2",
      "Pesto Bread Sweet Coconut Rolls"
   ],
   [
      "2",
      "4",
      "Ben",
      "Stem Ginger Nuts",
      "5",
      "Chocolate and Almond MacaronsPine Nut MacaronsPistachio Macarons"
   ],
   [
      "2",
      "4",
      "Holly",
      "Strawberry and Custard Melts",
      "3",
      "'Chocolate bars of my youth' (Caramel Macarons, Mint Chocolate Macarons and Chocolate Orange Macarons)"
   ],
   [
      "2",
      "4",
      "Janet",
      "Christmas Marzipan Biscuits",
      "4",
      "Raspberry Macarons Blackcurrant Macarons Almond Macarons"
   ],
   [
      "2",
      "4",
      "Jason",
      "Lebkuchen",
      "1",
      "Mocktail Macarons (Mojito, Cranberry Cooler, and Pina Colada)"
   ],
   [
      "2",
      "4",
      "Joanne",
      "Lavender Biscuits",
      "8",
      "Blueberry MacaronsCoconut MacaronsStrawberry Macarons"
   ],
   [
      "2",
      "4",
      "Mary-Anne",
      "Melting Moments",
      "2",
      "Blackcurrant and Mint MacaronsGooseberry and Elderflower MacaronsHazelnut Macarons"
   ],
   [
      "2",
      "4",
      "Robert",
      "Chocolate and Ginger Oat Biscuits",
      "7",
      "Strawberry and Lime MacaronsLemon MacaronsChocolate and Cardamom Macarons"
   ],
   [
      "2",
      "4",
      "Yasmin",
      "Chocolate Chip and Pistachio Biscotti",
      "6",
      "Chocolate and Lime MacaronsCoffee and Walnut MacaronsPineapple and Coconut Macarons"
   ],
   [
      "2",
      "5",
      "Holly",
      "Stilton, Potato and Caramelised Onion Pie",
      "4",
      "Lime Meringue Pie"
   ],
   [
      "2",
      "5",
      "Janet",
      "Chicken and Chestnut Pie",
      "1",
      "Rhubarb Meringue Pie"
   ],
   [
      "2",
      "5",
      "Jason",
      "Brown Down Chicken Pie",
      "7",
      "Plum Meringue Pie"
   ],
   [
      "2",
      "5",
      "Joanne",
      "Salmon and Asparagus Pie",
      "6",
      "Apple and Raspberry Meringue Pie"
   ],
   [
      "2",
      "5",
      "Mary-Anne",
      "Chicken and Bacon Pie",
      "2",
      "Midnight Meringue"
   ],
   [
      "2",
      "5",
      "Robert",
      "Chicken and Mushroom Pie",
      "3",
      "Rhubarb and Custard Meringue Pie"
   ],
   [
      "2",
      "5",
      "Yasmin",
      "Family Fish Pie",
      "5",
      "Peach and Raspberry Meringue Pie"
   ],
   [
      "2",
      "6",
      "Holly",
      "Father Christmas' Baked Cheesecake",
      "3",
      "Hansel and Gretel's Croquembouche"
   ],
   [
      "2",
      "6",
      "Janet",
      "Rhubarb and Ginger Baked Cheesecake",
      "5",
      "Orange and Nougatine Croquembouche"
   ],
   [
      "2",
      "6",
      "Joanne",
      "Rum and Raisin Baked Cheesecake",
      "1",
      "Limoncello and White Chocolate Croquembouche"
   ],
   [
      "2",
      "6",
      "Mary-Anne",
      "Tutti Fruitti Curd Baked Cheesecake",
      "4",
      "Orange and Praline Croquembouche with Cardamom Caramel"
   ],
   [
      "2",
      "6",
      "Yasmin",
      "Baked Amaretto Cheesecake",
      "2",
      "Rose Croquembouche"
   ],
   [
      "2",
      "7",
      "Holly",
      "White Chocolate, Hazelnut and Raspberry Genoise Mousse Cake",
      "1",
      "Apricot, Macadamia and White Chocolate PinwheelsAlmond CroissantsApple, Raisin and Cinnamon Plaits"
   ],
   [
      "2",
      "7",
      "Janet",
      "Chocolate Amaretto Mousse Cake",
      "4",
      "Pain Aux RaisinPlain CroissantPain Au Chocolat"
   ],
   [
      "2",
      "7",
      "Joanne",
      "Raspberry & Strawberry Mousse Cake",
      "3",
      "Pain Aux RaisinChocolate TwistsBanana and Raisin Pastries"
   ],
   [
      "2",
      "7",
      "Mary-Anne",
      "Chocolate and Orange Mousse Cake",
      "2",
      "Raspberry Rose DanishesPraline SpiralsAlsatian Plaited Danishes"
   ],
   [
      "2",
      "8",
      "Holly",
      "Banoffee Inspired Mille Feuille",
      "2",
      "Strawberry and Cream Meringue NestGooseberry and Elderflower 'Bakewell' TartsNeapolitan Ice-Cream Sandwich"
   ],
   [
      "2",
      "8",
      "Joanne",
      "Raspberry and Blueberry Mille Feuille",
      "1",
      "Mini Victoria SandwichesRaspberry, White Chocolate and Pistachio Mini MeringuesMini Banoffee Pie with Banana Mousse"
   ],
   [
      "2",
      "8",
      "Mary-Anne",
      "Lemon and Ginger Mille Feuille",
      "3",
      "Fruit Tarts with Elderflower CustardStrawberry and Rhubarb CheesecakesBlack Fruit Meringue with Everlasting Syllabub"
   ],
   [
      "3",
      "1",
      "Brendan",
      "Plum, Sour Cherry & Walnut",
      "10",
      "UNKNOWN"
   ],
   [
      "3",
      "1",
      "Cathryn",
      "Apple, Hazelnut and Calvados",
      "5",
      "Hidden Cupcake Cake"
   ],
   [
      "3",
      "1",
      "Danny",
      "Plum, Ginger & Orange",
      "7",
      "UNKNOWN"
   ],
   [
      "3",
      "1",
      "James",
      "Parsnip, Pear, and Pecan",
      "2",
      " Simmer Dim  Sunset Cake"
   ],
   [
      "3",
      "1",
      "John",
      "Toffee Apple, Orange & Cranberry",
      "11",
      "Hidden Pink Hearts Cake"
   ],
   [
      "3",
      "1",
      "Manisha",
      "Vanilla, Peach and Raspberry",
      "6",
      "White Chocolate Cake with a Red Velvet and White Chocolate Mousse Heart"
   ],
   [
      "3",
      "1",
      "Natasha",
      "Pineapple & Passion Fruit",
      "12",
      "Mother's Day Layered Rose Cake"
   ],
   [
      "3",
      "1",
      "Peter",
      "Pear, Muscat & Chocolate",
      "3",
      "Jubilee Cake"
   ],
   [
      "3",
      "1",
      "Ryan",
      "Kumquat and Orange Polenta",
      "8",
      "Hidden Flowerbed Mousse Cake"
   ],
   [
      "3",
      "1",
      "Sarah-Jane",
      "Pear, Chocolate and Hazelnut",
      "1",
      "Hidden Crown Cake"
   ],
   [
      "3",
      "1",
      "Stuart",
      "Tomato and Ginger",
      "9",
      "Lemon and Pistachio Union Flag Cake"
   ],
   [
      "3",
      "1",
      "Victoria",
      "Pear and Pecan",
      "4",
      "Blackbird Pie Cake"
   ],
   [
      "3",
      "2",
      "Brendan",
      "Middle Eastern Taboon BreadIndian Rotis",
      "4",
      "Chocolate and Vanilla Bagels Cumin and Gruyere Bagels"
   ],
   [
      "3",
      "2",
      "Cathryn",
      "Spiced Mango NaanLime, Coriander and Chilli Tortillas",
      "8",
      "Cranberry and Orange Bagels Chipotle, Chili, and Smoked Cheddar Bagels"
   ],
   [
      "3",
      "2",
      "Danny",
      "Lime Coriander and Coconut TortillasZaatar Naan with Dukkah",
      "3",
      "UNKNOWN"
   ],
   [
      "3",
      "2",
      "James",
      "Tomato, Garlic, and Parmesan FlatbreadsTattie Scones",
      "2",
      "Orange, Mint and Chocolate Bagels 'Millers' Sourdough Bagels"
   ],
   [
      "3",
      "2",
      "John",
      "Coriander and Chilli RotisGarlic, Pomegranate and Potato Pitas",
      "1",
      "Fig, Walnut and Gruyere Bagels Blueberry and White Chocolate Bagels"
   ],
   [
      "3",
      "2",
      "Manisha",
      "Indian FlatbreadsItalian Flatbreads",
      "6",
      "UNKNOWN"
   ],
   [
      "3",
      "2",
      "Peter",
      "Fennel and Nigella Seed NaanBannock Bread",
      "11",
      "Rosemary and Sea Salt Bagels Apple and Cinnamon Bagels"
   ],
   [
      "3",
      "2",
      "Ryan",
      "Shanghai Spring Onion FlatbreadsGarlic and Coriander Naan",
      "5",
      "Cinnamon and Date Bagels Tarragon and Rosemary Bagels"
   ],
   [
      "3",
      "2",
      "Sarah-Jane",
      "Toasted Coconut and Lime RotisOatcakes",
      "10",
      "UNKNOWN"
   ],
   [
      "3",
      "2",
      "Stuart",
      "Bombay BreadChorizo and Spring Onion Naan",
      "9",
      "Cinnamon and Cranberry Bagels Tomato and Thyme Bagels"
   ],
   [
      "3",
      "2",
      "Victoria",
      "Coriander and Lemon NaanGarlic and Parsnip Chapatis",
      "7",
      "Saffron and Golden Raisin Bagels Porcini Bagels"
   ],
   [
      "3",
      "3",
      "Brendan",
      "Apple and Ginger Tarte Tatin",
      "9",
      "Blackberry, Nectarine and Dragon Fruit Tart"
   ],
   [
      "3",
      "3",
      "Cathryn",
      "Plum, Cherry and Five Spice Tarte Tatin",
      "3",
      "Raspberry, Pistachio and Lemon Tart"
   ],
   [
      "3",
      "3",
      "Danny",
      "Savoury Pear and Roquefort Tarte Tatin",
      "2",
      "Pineapple, Coconut and Frangipane Tart"
   ],
   [
      "3",
      "3",
      "James",
      "Apple and Lavender Tarte Tatin",
      "1",
      "Rose, Lychee and Raspberry Fruit Tart"
   ],
   [
      "3",
      "3",
      "John",
      "Apple and Vanilla Tarte Tatin with Walnut Praline",
      "6",
      "Berries, Grapes, Pomegranate, and Dragon Fruit Tart"
   ],
   [
      "3",
      "3",
      "Manisha",
      "Cinnamon, Apple and Pear Tarte Tatin",
      "10",
      "Rum and Tropical Fruit Tart"
   ],
   [
      "3",
      "3",
      "Ryan",
      "Spiced Pear Tarte Tatin",
      "5",
      "UNKNOWN"
   ],
   [
      "3",
      "3",
      "Sarah-Jane",
      "Caramelised Banana Tarte Tatin",
      "8",
      "French Apple Tart with Blackberry and Cassis Jam"
   ],
   [
      "3",
      "3",
      "Stuart",
      "Pear and Almond Tarte Tatin",
      "7",
      "Raspberry Triple Chocolate Layered Tart"
   ],
   [
      "3",
      "3",
      "Victoria",
      "Fig, Walnut and Pink Peppercorn Tarte Tatin",
      "4",
      "Tropical Fruit Tart with Black Pepper Crust"
   ],
   [
      "3",
      "4",
      "Brendan",
      "Clementine and Chestnut Torte",
      "1",
      "Pear, Chocolate and Hazelnut Dacquoise"
   ],
   [
      "3",
      "4",
      "Cathryn",
      "White Chocolate, Macadamia and Coffee Torte",
      "3",
      "Gooseberry, Almond and Honey Meringue"
   ],
   [
      "3",
      "4",
      "Danny",
      "Blackberry, White Chocolate, Lemon and Elderflower Torte",
      "2",
      "'Monte Bianco' Chestnut, Chocolate and Coffee Dacquoise"
   ],
   [
      "3",
      "4",
      "James",
      "Hazelnut, Chocolate and Passionfruit Torte",
      "5",
      "Fig, Chestnut, Cherry and Chocolate Layered Meringue"
   ],
   [
      "3",
      "4",
      "John",
      "'Torte Noir' Black Forest Torte with Boozy Cream",
      "6",
      "Elderflower and Bramble Berry Pavlova"
   ],
   [
      "3",
      "4",
      "Manisha",
      "Almond, Chocolate and Cherry Torte",
      "9",
      "Tiramisu Layered Meringue Dessert"
   ],
   [
      "3",
      "4",
      "Ryan",
      "Green Tea Opera Torte",
      "7",
      "Strawberry, Rose and Pistachio Meringue"
   ],
   [
      "3",
      "4",
      "Sarah-Jane",
      "Chocolate and Almond Truffle Torte",
      "4",
      "Hazelnut Tiramisu Layered Meringue"
   ],
   [
      "3",
      "4",
      "Stuart",
      "Black Forest Torte",
      "8",
      "Choca Blocka Mocha Meringue"
   ],
   [
      "3",
      "5",
      "Brendan",
      "Salmon Coulibiac in a Scandinavian Pastry",
      "3",
      "All American Chiffon Pie"
   ],
   [
      "3",
      "5",
      "Cathryn",
      "Full English Wellington",
      "1",
      "Chocolate and Peanut Butter Pumpkin Pie"
   ],
   [
      "3",
      "5",
      "Danny",
      "Chickpea, Spinach & Mushroom Wellington",
      "7",
      "Trick or Treat Pumpkin Pie"
   ],
   [
      "3",
      "5",
      "James",
      "Four Pig Wellington",
      "6",
      "Sweet Potato Pie"
   ],
   [
      "3",
      "5",
      "John",
      "Venison and Haggis Wellington",
      "2",
      "Star-Spangled Pecan Pie"
   ],
   [
      "3",
      "5",
      "Manisha",
      "Lamb Wellington with Rosemary and Mint",
      "5",
      "Banana Scotch Pie"
   ],
   [
      "3",
      "5",
      "Ryan",
      "Curry Spiced Seabass Wellington",
      "8",
      "Key Lime Pie"
   ],
   [
      "3",
      "5",
      "Sarah-Jane",
      "Beef Wellington with Parma Ham and Gorgonzola Cheese",
      "4",
      "Chocolate and Banana Cream Pie"
   ],
   [
      "3",
      "6",
      "Brendan",
      "Rhubarb, Strawberry and Ginger Puddings Sticky Toffee Puddings",
      "1",
      "Spinach, Cheese and Walnut Strudel"
   ],
   [
      "3",
      "6",
      "Cathryn",
      "Chocolate Walnut Whip Puddings Elderflower Sponges",
      "3",
      "Roasted Vegetable Couscous and Sheep Cheese Strudel"
   ],
   [
      "3",
      "6",
      "Danny",
      "Banoffee Puddings with Walnut Butterscotch SauceJubilee Chocolate Fondants",
      "2",
      "Leek, Potato, Pistachio and Gruyère Strudel"
   ],
   [
      "3",
      "6",
      "James",
      "Banana and Clove PuddingsClootie Dumplings",
      "7",
      "Strawberry, Rhubarb and Ginger Strudel"
   ],
   [
      "3",
      "6",
      "John",
      "Spicy Toffee PuddingsRaspberry and White Chocolate Puddings",
      "5",
      "Did not complete due to injury"
   ],
   [
      "3",
      "6",
      "Ryan",
      "Chocolate FondantsSticky Ginger and Date Puddings",
      "6",
      "Apple, Sour Cherry, Raisin and Mixed Nuts Strudel"
   ],
   [
      "3",
      "6",
      "Sarah-Jane",
      "Sticky Toffee PuddingsGranny's Saucy Lemon Puddings",
      "4",
      "Sweet Strudel with Sour Cherries"
   ],
   [
      "3",
      "7",
      "Brendan",
      "Chelsea Bunskis",
      "4",
      "Black Forest Christmas Stollen"
   ],
   [
      "3",
      "7",
      "Cathryn",
      "Lady Arundel's Manchet Buns",
      "5",
      "Bonfire Night Tear 'n' Share Brioche"
   ],
   [
      "3",
      "7",
      "Danny",
      "Bakewell Chelsea Buns",
      "2",
      "European Christmas Wreath"
   ],
   [
      "3",
      "7",
      "James",
      "Easter Chelsea Buns",
      "1",
      "Whisky Kugelhopf-Brioche Baba"
   ],
   [
      "3",
      "7",
      "John",
      "Cherry and Almond Saffron Buns",
      "3",
      "Marzipan Stollen"
   ],
   [
      "3",
      "7",
      "Ryan",
      "Lardy Cakes",
      "6",
      "Char Siu Bao"
   ],
   [
      "3",
      "7",
      "Sarah-Jane",
      "Orange, Nutmeg and Saffron Buns",
      "7",
      "Sour Cherry and Dark Chocolate Christmas Plait"
   ],
   [
      "3",
      "8",
      "Brendan",
      "Multi-Seed Savoury Crackers",
      "2",
      "Fantasy Gingerbread Bird House"
   ],
   [
      "3",
      "8",
      "Cathryn",
      "Cheese and Pickle Crackers",
      "5",
      "Gingerbread Buckingham Palace"
   ],
   [
      "3",
      "8",
      "Danny",
      "Spiced Almond Drinks Crackers",
      "4",
      "Gingerbread Big Ben"
   ],
   [
      "3",
      "8",
      "James",
      "Smoky Cayenne, Cumin and Chilli Crackers",
      "1",
      "Gingerbread Barn"
   ],
   [
      "3",
      "8",
      "John",
      "Asian Spice Crackers",
      "3",
      "Gingerbread Roman Coliseum"
   ],
   [
      "3",
      "9",
      "Brendan",
      "Coffee Meringue and Hazelnut CreamsApricot and Pistachio FriandsLime Curd Choux Pastry Cygnets",
      "3",
      "Gateau St. Honoré"
   ],
   [
      "3",
      "9",
      "Danny",
      "Blackberry and Peppermint MacaroonsMiniature Raspberry and Basil FinanciersOrange and White Chocolate Langues de Chat",
      "4",
      "Rosewater and Lychee St. Honoré"
   ],
   [
      "3",
      "9",
      "James",
      "Lemon and Rhubarb TartletsChocolate Indulgence Petits FoursChilli, Lime and Raspberry Macaroons",
      "1",
      "Coffee, Caramel and Hazelnut Paris-Brest"
   ],
   [
      "3",
      "9",
      "John",
      "Lemon MadeleinesWhite Chocolate and Raspberry TartletsDark Chocolate and Cherry Macaroons",
      "2",
      "Gateau St. Honoré a la Passion"
   ],
   [
      "3",
      "10",
      "Brendan",
      "Potato and Pepper Pithivier",
      "2",
      "Family Reunion Chiffon Cake"
   ],
   [
      "3",
      "10",
      "James",
      "Spanish Pithivier with Chorizo and Red Pepper",
      "1",
      "United Chiffon Cakes"
   ],
   [
      "3",
      "10",
      "John",
      "Italian Sausage and Roasted Vegetable Pithivier",
      "2",
      "Heaven and Hell Chiffon Cake"
   ],
   [
      "4",
      "1",
      "Ali",
      "Rose and Pistachio Cake",
      "11",
      "Chocolate, Raspberry and Passion Fruit Engagement Cake"
   ],
   [
      "4",
      "1",
      "Beca",
      "Grapefruit Sandwich Cake",
      "8",
      "Chocolate Cherry Indulgence"
   ],
   [
      "4",
      "1",
      "Christine",
      "Strawberry, Vanilla and Rosewater Summer Basket",
      "3",
      "Chocolate and Orange 'Fripperous' Hat Cake"
   ],
   [
      "4",
      "1",
      "Deborah",
      "Pineapple Cake",
      "9",
      "'Coffee Time'"
   ],
   [
      "4",
      "1",
      "Frances",
      "Giant Jam Sandwich",
      "7",
      "Secret Squirrel Cake"
   ],
   [
      "4",
      "1",
      "Glenn",
      "Strawberries and Cream Cake",
      "4",
      "Almond and Espresso Chocolate Cake"
   ],
   [
      "4",
      "1",
      "Howard",
      "Passion Fruit and Coconut Cake",
      "6",
      "Black Forest Revisited"
   ],
   [
      "4",
      "1",
      "Kimberley",
      "Blood Orange Cake",
      "10",
      "Chocolate, Raspberry & Basil Layer Cake"
   ],
   [
      "4",
      "1",
      "Lucy",
      "Timperley Early Cake",
      "2",
      "Thyme 'Wildwood' Cake"
   ],
   [
      "4",
      "1",
      "Mark",
      "Lemon and Poppy Seed Cake",
      "5",
      "Chocolate Monster"
   ],
   [
      "4",
      "1",
      "Robert",
      "Pecan and Apple Cake",
      "1",
      "Raspberry Chocolate Cake"
   ],
   [
      "4",
      "1",
      "Ruby",
      "Rhubarb and Custard Sandwich Cake",
      "12",
      "Chocolate and Ginger Night Sky Cake"
   ],
   [
      "4",
      "1",
      "Toby",
      "Spiced and Iced Carrot Cake",
      "13",
      "Two Tiered Chocolate Cake"
   ],
   [
      "4",
      "2",
      "Ali",
      "Italian Grissini",
      "9",
      "Sweet and Savoury Yin Yang Bread"
   ],
   [
      "4",
      "2",
      "Beca",
      "Fennel and Chilli Breadsticks",
      "11",
      "Five Strand Christmas Wreath"
   ],
   [
      "4",
      "2",
      "Christine",
      "Mediterranean Breadsticks with Oregano",
      "4",
      "Double Plaited Loaf"
   ],
   [
      "4",
      "2",
      "Deborah",
      "Fennel & Chilli Breadsticks",
      "8",
      "Walnut Fleur Loaf"
   ],
   [
      "4",
      "2",
      "Frances",
      "Giant Matchsticks",
      "2",
      "Sailor's Knot"
   ],
   [
      "4",
      "2",
      "Glenn",
      "Rosemary and Parmesan Grissini",
      "7",
      "Harvest Crown"
   ],
   [
      "4",
      "2",
      "Howard",
      "Moroccan Breadsticks",
      "10",
      "Picasso Sun Bread"
   ],
   [
      "4",
      "2",
      "Kimberley",
      "Nigella Seed and Parmesan Breadsticks",
      "1",
      "Peace Bread"
   ],
   [
      "4",
      "2",
      "Lucy",
      "Grissini with Salt",
      "12",
      "Roast Tomato Bread"
   ],
   [
      "4",
      "2",
      "Mark",
      "Rosemary & Raisin Breadsticks",
      "6",
      "Sage & Garlic Plait"
   ],
   [
      "4",
      "2",
      "Robert",
      "Twisty Rye Bread Sticks",
      "5",
      "Tribute Loaf"
   ],
   [
      "4",
      "2",
      "Ruby",
      "Mexican Breadsticks",
      "3",
      "White Chocolate and Orange Peacock Bread"
   ],
   [
      "4",
      "3",
      "Ali",
      "Coconut, Raspberry and Lemon Meringue Trifle",
      "5",
      "Vanilla Latte Mini CakesLime & Mint Shortbread Pops"
   ],
   [
      "4",
      "3",
      "Beca",
      "Orange and Ginger Trifle",
      "10",
      "Limoncello and Blueberry BurstsMillionaire Shortbread"
   ],
   [
      "4",
      "3",
      "Christine",
      "Caribbean Pina Colada Trifle",
      "4",
      "Ninety-NinersSachertorte Parcels"
   ],
   [
      "4",
      "3",
      "Deborah",
      "Tropical Trifle*",
      "9",
      "Canelé Cherry and Chocolate CakesRose Cookies"
   ],
   [
      "4",
      "3",
      "Frances",
      "Apple and Blackberry Crumble Trifle",
      "8",
      "'Ballet Bites' Ginger NutcrackersSugar Plum Fairy Cakes"
   ],
   [
      "4",
      "3",
      "Glenn",
      "Raspberry and Almond Trifle",
      "1",
      "Billionaire BouchéesOrange Financiers"
   ],
   [
      "4",
      "3",
      "Howard",
      "Caramel and Apple Trifle*",
      "7",
      "Black Coffee and Cardamom CakesWhite Stilton and Pear Biscuits"
   ],
   [
      "4",
      "3",
      "Kimberley",
      "Peach, Almond and Ginger Trifle",
      "6",
      "Chocolate Pistachio FinanciersLemon Bergamot Biscuits"
   ],
   [
      "4",
      "3",
      "Mark",
      "Ginger, Mango and Passion Fruit Trifle",
      "11",
      "Rose and Pistachio MacaroonsChocolate and Raspberry Bites"
   ],
   [
      "4",
      "3",
      "Robert",
      "Rhubarb and Orange Trifle",
      "2",
      "Almond FriandsTurǫn Macaroons"
   ],
   [
      "4",
      "3",
      "Ruby",
      "Desert Island Trifle",
      "3",
      "Lemon Shortbread and White Chocolate SeashellsBlackberry and Chocolate Layer Cakes"
   ],
   [
      "4",
      "4",
      "Ali",
      "Apple and Ginger Pie with a Pecan and Walnut Shortcrust Pastry",
      "8",
      "Orange, Cardamom and Date M'Hanncha"
   ],
   [
      "4",
      "4",
      "Beca",
      "Mamgu's Cherry-Apple Tart",
      "2",
      "Moroccan Vegetable Filo Feast"
   ],
   [
      "4",
      "4",
      "Christine",
      "Granny Rogers' Apple, Plum & Cinnamon Country Pie",
      "7",
      "Roasted Vegetable Filo Pie with Feta Cheese"
   ],
   [
      "4",
      "4",
      "Frances",
      "Peach Pie In the Sky",
      "1",
      "Cherry Tree Baklava Filo Pie"
   ],
   [
      "4",
      "4",
      "Glenn",
      "Apple & Maple Syrup Pie",
      "9",
      "Spanakopita (Walnut and Feta Cheese)"
   ],
   [
      "4",
      "4",
      "Howard",
      "Apple Pie with Sage Pastry",
      "5",
      "Fresh Fig and Feta Filo Flan"
   ],
   [
      "4",
      "4",
      "Kimberley",
      "Pecan and Rosemary Caramel Apple Pie",
      "4",
      "Chicken, Bacon and Butternut Squash Pie"
   ],
   [
      "4",
      "4",
      "Robert",
      "Apple and Pear Pie with Thyme",
      "3",
      "Spanakopita with St George's Mushrooms"
   ],
   [
      "4",
      "4",
      "Ruby",
      "Apple and Marzipan Pie",
      "6",
      "Rose, Almond and Raspberry Filo Pie"
   ],
   [
      "4",
      "5",
      "Beca",
      "Chocolate, Cherry and Hazelnut Brownies",
      "5",
      "Tiered Macaron and Sugar Dough Biscuit Centrepiece"
   ],
   [
      "4",
      "5",
      "Christine",
      "Mixed Berry and Almond Crumble Traybake",
      "1",
      "Shortbread Bavarian Clock Tower"
   ],
   [
      "4",
      "5",
      "Frances",
      "Millionaire Banoffee Bonus",
      "3",
      "Biscuit Buttons and Beads"
   ],
   [
      "4",
      "5",
      "Glenn",
      "Apricot and Pistachio Tiffin",
      "2",
      "Shortbread and Macaron Helter-Skelter"
   ],
   [
      "4",
      "5",
      "Howard",
      "Breakfast Traybake",
      "8",
      "Japanese Pagoda Tea Tower"
   ],
   [
      "4",
      "5",
      "Kimberley",
      "Cherry and Almond Bakewell Florentine Slice",
      "7",
      "Black and White Viennese Biscuit Stack"
   ],
   [
      "4",
      "5",
      "Robert",
      "Blueberry & Orange Traybake",
      "4",
      "Dalek"
   ],
   [
      "4",
      "5",
      "Ruby",
      "Blackberry and Lemon Bakewell Slice",
      "6",
      "'Dropped Ice-Cream' Biscuit Centrepiece"
   ],
   [
      "4",
      "6",
      "Beca",
      "Bara Brith",
      "6",
      "Chocolate and Rum-Soaked Prune BriochesCardamom Spiced Lemon Iced Buns"
   ],
   [
      "4",
      "6",
      "Christine",
      "Oxford Nutty Fruit Loaf",
      "4",
      "Schnecken BunsVanilla Custard Skolebrød"
   ],
   [
      "4",
      "6",
      "Frances",
      "Chai Tea Loaf",
      "2",
      "Hot Cross BriochesRhubarb and Custard Kolaches"
   ],
   [
      "4",
      "6",
      "Glenn",
      "Devonshire Panettone",
      "5",
      "Almond and Apricot BriochesSticky Caramel Kanelbullen"
   ],
   [
      "4",
      "6",
      "Howard",
      "Date & Hemp Yorkshire Loaf",
      "7",
      "Peachy BunsGerman Baumschnecken"
   ],
   [
      "4",
      "6",
      "Kimberley",
      "Chai Spiced Ginger and Date Tea Loaf",
      "3",
      "Double Chocolate and Hazelnut BriochesDanish Kanelsnurrer"
   ],
   [
      "4",
      "6",
      "Ruby",
      "Citrus Tea Loaf",
      "1",
      "Twisted Swedish KanelbullarSaffron St. Lucia Buns"
   ],
   [
      "4",
      "7",
      "Beca",
      "Spring Lamb and Vegetable Suet Puddingwith Redcurrant Gravy",
      "1",
      "Nectarine and Frangipane SquaresChocolate and Hazelnut Vol-au-ventsStrawberries and Cream Mille-feuille"
   ],
   [
      "4",
      "7",
      "Christine",
      "Spotted Dick 'With a Kick'and Vanilla Custard Ice Cream",
      "6",
      "Eccles CakesFresh Fruit BasketsLemon Cream Eton Mess Mille-feuille"
   ],
   [
      "4",
      "7",
      "Frances",
      "Figgy Roll-y Poly Puddingwith Caramelised Walnut and Honey Ice-Cream",
      "5",
      "French Framboise Cream HornsSheet Music Mille-feuilleBass Clef Palmiers"
   ],
   [
      "4",
      "7",
      "Glenn",
      "Prune and Armagnac Puddingwith Boozy Butterscotch Sauce",
      "3",
      "Caramelised Apple and Marzipan TartletsChocolate Elephant EarsPassion Fruit Mille-feuille"
   ],
   [
      "4",
      "7",
      "Kimberley",
      "Barberry and Apple Spotted Dickwith Maple Syrup and White Chocolate Custard",
      "4",
      "Pear, Malt and Butterscotch Mille-feuilleBlackberry and Lemon Verbena Crème Brûle Custard TartsFig, Orange and Thyme Galette"
   ],
   [
      "4",
      "7",
      "Ruby",
      "Plum Jam Roly-Polywith Ginger Ice cream",
      "2",
      "Raspberry and Passion Fruit Mille-feuilleCaramelised Apple LatticePortuguese Custard Tarts"
   ],
   [
      "4",
      "8",
      "Beca",
      "Potato, Spelt and Rosemary Focaccia",
      "4",
      "Spiced Butternut Squash and Pecan 'Cheese' Cake"
   ],
   [
      "4",
      "8",
      "Christine",
      "Multi-Seeded Loaf with Pumpkin, Sesame and Sunflower Seeds",
      "5",
      "Sweet Potato Guitar with Passion Fruit Icing and Marshmallow Fondant"
   ],
   [
      "4",
      "8",
      "Frances",
      "'Chelsea Flour Show' Bun Bouquet",
      "3",
      "Hidden Carrot Cake (Ground Praline, Beetroot and Walnut)"
   ],
   [
      "4",
      "8",
      "Kimberley",
      "Wild Garlic Pesto and Parma Ham Spelt Loaf",
      "2",
      "Butternut Squash and Spice Cake Toadstool House"
   ],
   [
      "4",
      "8",
      "Ruby",
      "Mango and Nigella Seed Spelt Cob",
      "1",
      "Carrot Cake and Pistachio Garden Plot"
   ],
   [
      "4",
      "9",
      "Beca",
      "Stilton and Walnut MacaronsBeetroot and Salmon Choux PuffsWelsh Rarebit Tartlets",
      "3",
      "Banoffee Opera Cake"
   ],
   [
      "4",
      "9",
      "Frances",
      "Legume Canapés: Chantenay CarrotsChoux Pastry TomatoesCauliflower Cheese Scones",
      "2",
      "Great British Soap Opera Cake"
   ],
   [
      "4",
      "9",
      "Kimberley",
      "Pea Purée TartsCrab and Wasabi ProfiterolesSteamed Buns with Barbecue Chicken",
      "1",
      "Passion Fruit and Lime Opera Cake"
   ],
   [
      "4",
      "9",
      "Ruby",
      "Beetroot Jelly on Poppy Seed BiscuitsSpinach, Parmesan and Egg TartletsChoux Buns with Goat's Cheese and Caramelised Onions",
      "4",
      "Chocolate, Almond Praline and Saffron Opera Cake"
   ],
   [
      "4",
      "10",
      "Frances",
      "Rainbow Picnic Pie",
      "3",
      "Midsummer Night's Dream Wedding Cake"
   ],
   [
      "4",
      "10",
      "Kimberley",
      "Chicken and Pig Pie",
      "1",
      "Languages of Love Wedding Cake"
   ],
   [
      "4",
      "10",
      "Ruby",
      "Picnic Basket Pie",
      "2",
      "Raspberry, Lemon and Passion Fruit Wedding Cake"
   ],
   [
      "5",
      "1",
      "Chetna",
      "Cardamom, Pistachio and Coffee Swiss Roll",
      "3",
      "Tiered Victoria Sponges with Lemon Curd and Raspberry Cream"
   ],
   [
      "5",
      "1",
      "Claire",
      "Chocolatey Orangey Swirly Roll",
      "8",
      "Mini Chocolate and Cherry Cakes"
   ],
   [
      "5",
      "1",
      "Diana",
      "Mum's Sunday Tea Lemon Curd Swiss Roll",
      "5",
      "Chocolate Ganache Surprises"
   ],
   [
      "5",
      "1",
      "Enwezor",
      "Raspberry and Lemon Swiss Roll",
      "9",
      "Coffee and Walnut Battenberg Squares"
   ],
   [
      "5",
      "1",
      "Iain",
      "Apricot and Basil Swiss Roll with Mascarpone and White Chocolate Cream",
      "4",
      "Lemon Drizzle Cakes with Mascarpone Filling, Drizzled Icing, and Candied Lemon"
   ],
   [
      "5",
      "1",
      "Jordan",
      "Kawaii Frasier Swiss Roll",
      "12",
      "Lemon Drizzle Cakes with Blueberry and Lemon Curd"
   ],
   [
      "5",
      "1",
      "Kate",
      "Red Velvet and White Chocolate Swiss Roll",
      "6",
      "Mini Tiered Victoria Sponges"
   ],
   [
      "5",
      "1",
      "Luis",
      "Spanish Swiss Roll",
      "7",
      "Raspberry and Lemon Genoise Slices with Lemon Drizzles"
   ],
   [
      "5",
      "1",
      "Martha",
      "Tiramisu Swiss Roll",
      "2",
      "Mini Lemon and Thyme Drizzle Cakes"
   ],
   [
      "5",
      "1",
      "Nancy",
      "Coffee and Hazelnut Swiss Roll",
      "1",
      "Jaffa Orange Cakes"
   ],
   [
      "5",
      "1",
      "Norman",
      "Black Forest Swiss Roll",
      "11",
      "Almond and Raspberry Mini Cakes"
   ],
   [
      "5",
      "1",
      "Richard",
      "Pistachio and Strawberry Swiss Roll",
      "10",
      "Miniature Coffee & Walnut Cakes"
   ],
   [
      "5",
      "2",
      "Chetna",
      "Fenugreek and Carom Crackers",
      "8",
      "Day On The Beach"
   ],
   [
      "5",
      "2",
      "Diana",
      "Parmesan Triangles",
      "7",
      "Express, First Class"
   ],
   [
      "5",
      "2",
      "Enwezor",
      "Pumpkin and Sunflower Savoury Biscuits",
      "9",
      "Space Adventure Moon Scene"
   ],
   [
      "5",
      "2",
      "Iain",
      "Za'atar and Fig Biscuits",
      "11",
      "Wild West Scene"
   ],
   [
      "5",
      "2",
      "Jordan",
      "Sourdough, Parmesan and Chilli Biscuits",
      "6",
      "Monster Attack"
   ],
   [
      "5",
      "2",
      "Kate",
      "Parmesan and Apple Biscuits",
      "4",
      "Tea Time"
   ],
   [
      "5",
      "2",
      "Luis",
      "Black Olive and Rosemary Biscuits with Caramelised Onion Glaze",
      "3",
      "George Versus The Dragon"
   ],
   [
      "5",
      "2",
      "Martha",
      "Caramelised Onion and Goat's Cheese Sandwich Biscuits",
      "5",
      "Ski Village Scene"
   ],
   [
      "5",
      "2",
      "Nancy",
      "Fennel and Rye Thins",
      "2",
      "Hansel and Gretel Scene"
   ],
   [
      "5",
      "2",
      "Norman",
      "Farthing Biscuits",
      "10",
      "Zulu Boats at Dawn"
   ],
   [
      "5",
      "2",
      "Richard",
      "Rosemary Seeded Crackers",
      "1",
      "Pirates!"
   ],
   [
      "5",
      "3",
      "Chetna",
      "Onion and Pine Nut Rolls",
      "8",
      "Rolled and Filled Twin Loaf"
   ],
   [
      "5",
      "3",
      "Diana",
      "Rustic Picnic Rolls",
      "7",
      "Sharing Savoury Pinwheel"
   ],
   [
      "5",
      "3",
      "Iain",
      "Cranberry and Walnut Rye Bread Rolls",
      "9",
      "Moroccan Plaited with a Bessara Dip"
   ],
   [
      "5",
      "3",
      "Jordan",
      "Rye and Spelt Bread Rolls",
      "10",
      "Strawberry Raspberry Cheesecake Brioche"
   ],
   [
      "5",
      "3",
      "Kate",
      "Orange and Cardamom Rye Bread Knots",
      "1",
      "Prosciutto, Olive and Coriander Bread"
   ],
   [
      "5",
      "3",
      "Luis",
      "Opposites Attract Rolls",
      "2",
      "Roscón de Reyes"
   ],
   [
      "5",
      "3",
      "Martha",
      "Date and Walnut Rye Rolls",
      "3",
      "Stuffed Sunflower Loaf"
   ],
   [
      "5",
      "3",
      "Nancy",
      "Cider and Walnut Crusty Rolls",
      "5",
      "'Full English' Stromboli"
   ],
   [
      "5",
      "3",
      "Norman",
      "Rye Bread Rolls",
      "4",
      "Chicken and Roasted Vegetable Picnic Loaf"
   ],
   [
      "5",
      "3",
      "Richard",
      "Rye and Cranberry Rolls",
      "6",
      "Pesto Pinwheel"
   ],
   [
      "5",
      "4",
      "Chetna",
      "Rhubarb, Strawberry and Orange Puddings",
      "3",
      "Mango, Raspberry and Coconut Baked Alaska"
   ],
   [
      "5",
      "4",
      "Diana",
      "Orange and Lemon Curd Pots",
      "9",
      "Raspberry Ripple Alaska Swan"
   ],
   [
      "5",
      "4",
      "Iain",
      "Chocolate, Lime and Raspberry Fondants",
      "6",
      "Chocolate, Black Sesame Seed and Coffee Caramel Baked Alaska (not presented)"
   ],
   [
      "5",
      "4",
      "Kate",
      "Chocolate and Salted Caramel Molten Puddings",
      "7",
      "Pistachio, Raspberry and Chocolate Baked Alaska"
   ],
   [
      "5",
      "4",
      "Luis",
      "Pears in Puddings",
      "2",
      "Bakewell Alaska"
   ],
   [
      "5",
      "4",
      "Martha",
      "Peanut Butter Chocolate Fondants",
      "1",
      "Key Lime Baked Alaska"
   ],
   [
      "5",
      "4",
      "Nancy",
      "Pistachio Puddings with Chocolate Sauce",
      "4",
      "Summer Pudding Alaska"
   ],
   [
      "5",
      "4",
      "Norman",
      "Mini Sticky Toffee Puddings",
      "8",
      "Baked Alaska with Strawberry Surprise"
   ],
   [
      "5",
      "4",
      "Richard",
      "Black Forest Chocolate Fondants",
      "5",
      "Tiramisu Baked Alaska"
   ],
   [
      "5",
      "5",
      "Chetna",
      "Rice Custard Tart with Mangoes and Raspberries",
      "2",
      "Fusion Tiered Pies"
   ],
   [
      "5",
      "5",
      "Kate",
      "Rhubarb and Custard Tart",
      "3",
      "Rhubarb, Prune and Apple Pies"
   ],
   [
      "5",
      "5",
      "Luis",
      "Tropical Manchester Tart",
      "6",
      "Four Fruity Seasons Tower"
   ],
   [
      "5",
      "5",
      "Martha",
      "Pistachio, Apricot and Honey Custard Tart",
      "1",
      "Three Little Pigs Pie"
   ],
   [
      "5",
      "5",
      "Nancy",
      "Chocolate Crusted Passion Fruit Tart",
      "4",
      "Trio of Apple Pies"
   ],
   [
      "5",
      "5",
      "Norman",
      "Tarte au Citron",
      "5",
      "Pieful Tower"
   ],
   [
      "5",
      "5",
      "Richard",
      "Fig and Orange Tart",
      "7",
      "Three Course Autumn Pie Feast"
   ],
   [
      "5",
      "6",
      "Chetna",
      "Orange Savarin with Cinnamon Cream",
      "2",
      "Almond Liqueur Dobos Torte with Chocolate Caramel Buttercream"
   ],
   [
      "5",
      "6",
      "Kate",
      "Pecan, Chocolate and Sour Cherry Yeast Cake",
      "6",
      "Trio of Dobos Tortes"
   ],
   [
      "5",
      "6",
      "Luis",
      "Apple and Cinnamon Kugelhopf with Honeyed Apples",
      "3",
      "The Cage on the Rocky Hill"
   ],
   [
      "5",
      "6",
      "Martha",
      "Dark Chocolate and Almond Liqueur Savarin",
      "4",
      "Chess-Themed Chocolate and Salted Caramel Dobos Torte"
   ],
   [
      "5",
      "6",
      "Nancy",
      "Rum Punch Savarin with Coconut Cream and Tropical Fruits",
      "1",
      "Chocolate and Caramel Dobos Torte"
   ],
   [
      "5",
      "6",
      "Richard",
      "Fruity Guglhupf with an Orange Glaze",
      "5",
      "Sugar Forest Dobos Torte"
   ],
   [
      "5",
      "7",
      "Chetna",
      "Crispy Lentil Kachori",
      "6",
      "Chocolate and Mango & Lemon Meringue Éclairs"
   ],
   [
      "5",
      "7",
      "Kate",
      "Spinach and Paneer Spicy Samosa",
      "4",
      "Neapolitan & Lemon Meringue Éclairs"
   ],
   [
      "5",
      "7",
      "Luis",
      "Childhood Empanadas",
      "5",
      "Stars and Stripes Éclairs (Blueberry Cheesecake & Peanut Butter and Jelly Éclairs)"
   ],
   [
      "5",
      "7",
      "Martha",
      "Mini Beef Wellingtons",
      "3",
      "Rhubarb and Custard & Maple Syrup and Bacon Éclairs"
   ],
   [
      "5",
      "7",
      "Nancy",
      "Spicy Duck Pasties",
      "2",
      "Smoked Salmon and Horseradish & Raspberry Ripple Éclairs"
   ],
   [
      "5",
      "7",
      "Richard",
      "Minted Lamb Pasties",
      "1",
      "Stair of Éclairs (Lavender and Blueberry & Rose and Raspberry Éclairs)"
   ],
   [
      "5",
      "8",
      "Chetna",
      "Date and Walnut Swirl Bread",
      "1",
      "Chocolate Mousse Filled DoughnutsBraided Doughnuts"
   ],
   [
      "5",
      "8",
      "Luis",
      "Black Forest Cherry Tree",
      "2",
      "Cocktail Doughnuts (Mudslide & Raspberry Mojito)"
   ],
   [
      "5",
      "8",
      "Martha",
      "Spiced Plum Iced Bread Swirl",
      "5",
      "Glazed Lemon & Poppy Seed DoughnutsChocolate & Passion Fruit Doughnuts"
   ],
   [
      "5",
      "8",
      "Nancy",
      "Lincolnshire Plum Braid",
      "3",
      "Doughnut Family Tree (Limoncello and Almond & Milk Chocolate and Orange)"
   ],
   [
      "5",
      "8",
      "Richard",
      "Fruit Swedish Tea Ring",
      "4",
      "Rhubarb and Custard and Toffee Apple Doughnuts"
   ],
   [
      "5",
      "9",
      "Chetna",
      "Chocolate Orange Baklava Masala Chai Baklava",
      "4",
      "Chocolate, Orange & Nut EntremetsCappuccino Entremets"
   ],
   [
      "5",
      "9",
      "Luis",
      "Indian Rose BaklavaHalwa Baklava Rolls",
      "1",
      "Chocolate Mousse & Cherry EntremetsPomegranate, Fig & Pistachio Sponges"
   ],
   [
      "5",
      "9",
      "Nancy",
      "Coffee and Chocolate BaklavaBreakfast Baklava",
      "3",
      "Raspberry NonnettesLime and Passion Fruit Entremets"
   ],
   [
      "5",
      "9",
      "Richard",
      "Rose and Pistachio BaklavaWalnut and Almond Baklava",
      "2",
      "Hazelnut Mocha EntremetsPink Grapefruit Entremets"
   ],
   [
      "5",
      "10",
      "Luis",
      "Apple, Walnut, Raisin and Cheshire Cheese ChaussonsPain au Chocolat Blanc with Raspberries and Cream Cheese",
      "2",
      "Village in Chocolate"
   ],
   [
      "5",
      "10",
      "Nancy",
      "Apple and Lemon KitesRaspberry and Almond Croissants",
      "1",
      "Red Windmill"
   ],
   [
      "5",
      "10",
      "Richard",
      "Pear Pain au ChocolatPain Au Lait",
      "3",
      "Mill on the Hill"
   ],
   [
      "6",
      "1",
      "Alvin",
      "Orange Vanilla and Fig Madeira Cake",
      "2",
      "Black Forest Gâteau"
   ],
   [
      "6",
      "1",
      "Dorret",
      "Madeira Cake with Candied Lemons",
      "5",
      "Enchanted Forest Gâteau"
   ],
   [
      "6",
      "1",
      "Flora",
      "Blood Orange Madeira Cake",
      "6",
      "Black Forest Gâteau"
   ],
   [
      "6",
      "1",
      "Ian",
      "Somewhere West of Madeira Cake",
      "8",
      "Black Forest Cherry Tree"
   ],
   [
      "6",
      "1",
      "Marie",
      "Zingy Citrus Madeira Cake",
      "3",
      "A Walk in the Black Forest"
   ],
   [
      "6",
      "1",
      "Mat",
      "Gin and Tonic Madeira Cake",
      "7",
      "Black Forest Gateau"
   ],
   [
      "6",
      "1",
      "Nadiya",
      "Orange and Green Cardamom Madeira Cake",
      "12",
      "Quadruple Chocolate Black Forest Gâteau"
   ],
   [
      "6",
      "1",
      "Paul",
      "Lemon, Ginger and Caraway Seed Madeira Cake",
      "10",
      "Black Forest Chocolate Creation"
   ],
   [
      "6",
      "1",
      "Sandy",
      "Madeira Cake with Almond Liqueur and Chopped Apricots",
      "9",
      "Black Forest Gâteau"
   ],
   [
      "6",
      "1",
      "Stu",
      "Marley Madeira Cake",
      "11",
      "Purple Forest Gâteau"
   ],
   [
      "6",
      "1",
      "Tamal",
      "Pistachio and Rose Madeira Cake",
      "4",
      "Black Forest Gâteau in a Chocolate Shell"
   ],
   [
      "6",
      "1",
      "Ugnė",
      "Lemon and Thyme Madeira Cake",
      "1",
      "Falling Cup Gâteau"
   ],
   [
      "6",
      "2",
      "Alvin",
      "Jackfruit, Pistachio and Macadamia Biscotti",
      "6",
      "Gingerbread Box filled with Brandy Snaps"
   ],
   [
      "6",
      "2",
      "Dorret",
      "Almond and Apricot Biscotti with Amber Sugar Crystals",
      "1",
      "Box of Frogs"
   ],
   [
      "6",
      "2",
      "Flora",
      "Wedding Biscotti",
      "2",
      "Honey and Earl Grey Tea Box"
   ],
   [
      "6",
      "2",
      "Ian",
      "Orange, Rosemary and Almond Biscotti",
      "3",
      "Sandwich de la Confiture"
   ],
   [
      "6",
      "2",
      "Marie",
      "Biscotti Italiano",
      "11",
      "Russian Box"
   ],
   [
      "6",
      "2",
      "Mat",
      "Pistachio, Cranberry and White Chocolate Biscotti",
      "5",
      "Gingerbread Fire Engine"
   ],
   [
      "6",
      "2",
      "Nadiya",
      "Coconut, Fennel and Pistachio Biscotti",
      "9",
      "Box of Fortunes"
   ],
   [
      "6",
      "2",
      "Paul",
      "Chocolate, Hazelnut and Fig Biscotti",
      "10",
      "Memory Box"
   ],
   [
      "6",
      "2",
      "Sandy",
      "Chocolate Chunk and Hazelnut Biscotti",
      "4",
      "Sundried Tomato Cheese Biscuit Box"
   ],
   [
      "6",
      "2",
      "Tamal",
      "Cinnamon, Maple and Cranberry Biscotti",
      "8",
      "Chessboard Box"
   ],
   [
      "6",
      "2",
      "Ugnė",
      "White Wine Biscotti",
      "7",
      "Baby Climbing into the Cookie Box"
   ],
   [
      "6",
      "3",
      "Alvin",
      "Prosciutto, Manchego and Balsamic Onion Soda Breads",
      "4",
      "Cornucopia"
   ],
   [
      "6",
      "3",
      "Dorret",
      "Walnut and Stilton Soda Breads",
      "6",
      "Unmade Bread"
   ],
   [
      "6",
      "3",
      "Flora",
      "Fig and Hazelnut Rye Breads",
      "2",
      "Herb Couture"
   ],
   [
      "6",
      "3",
      "Ian",
      "Wild Garlic Pesto Soda Breads",
      "1",
      "Flour Power"
   ],
   [
      "6",
      "3",
      "Mat",
      "Jalapeño, Mexican Cheddar and Smoked Salt Soda Breads",
      "8",
      "Curry Inspired Brighton Pavilion"
   ],
   [
      "6",
      "3",
      "Nadiya",
      "Mexican Bread with Warm Tomato Salsa",
      "9",
      "Snake Charmer's Basket"
   ],
   [
      "6",
      "3",
      "Paul",
      "Cranberry and Orange Sweet Soda Breads",
      "10",
      "King of the Jungle"
   ],
   [
      "6",
      "3",
      "Sandy",
      "Soda Breads with Smoked Bacon and Onion",
      "7",
      "Basket of Bread Flowers with a Walnut and Blue Cheese Centre"
   ],
   [
      "6",
      "3",
      "Tamal",
      "Fig, Cheese and Walnut Breads",
      "3",
      "Breadcycle"
   ],
   [
      "6",
      "3",
      "Ugnė",
      "Chocolate Quick Breads with Salted Caramel Sauce",
      "5",
      "Easter Basket"
   ],
   [
      "6",
      "4",
      "Alvin",
      "Blackberry Crème Brûlées",
      "9",
      "Tower of Fruits Cheesecakes"
   ],
   [
      "6",
      "4",
      "Flora",
      "Rhubarb and Ginger Crème Brûlées",
      "3",
      "Elderflower and Granola Cheesecakes"
   ],
   [
      "6",
      "4",
      "Ian",
      "Pomegranate Two Ways Crème Brûlées",
      "4",
      "Trio of Spicy and Herby Baked Cheesecakes"
   ],
   [
      "6",
      "4",
      "Mat",
      "Coconut Crème Brûlées",
      "7",
      "Chocolate Bar Cheesecakes"
   ],
   [
      "6",
      "4",
      "Nadiya",
      "Cinnamon Tea Crème Brûlées",
      "8",
      "Fizzy Pop Cheesecakes"
   ],
   [
      "6",
      "4",
      "Paul",
      "Almond Crème Brûlées",
      "1",
      "Berry Cheesecake Tower"
   ],
   [
      "6",
      "4",
      "Sandy",
      "Pontefract Crème Brûlées",
      "6",
      "Cassata, Whisky and Orange & Apple Pie Cheesecakes"
   ],
   [
      "6",
      "4",
      "Tamal",
      "Rhubarb and Ginger Crème Brûlées",
      "5",
      "Mango, Hazelnut and Rosemary Cheesecake Trio"
   ],
   [
      "6",
      "4",
      "Ugnė",
      "Marula Fruit and Coffee Liqueur Crème Brûlées",
      "2",
      "Lime, Coconut and Hazelnut Cheesecakes"
   ],
   [
      "6",
      "5",
      "Alvin",
      "Pineapple Upside Down Cake",
      "8",
      "Buko Pandan, Mango and Passion Fruit Ice Cream Roll"
   ],
   [
      "6",
      "5",
      "Flora",
      "Pistachio, Apple and Cardamom Madeleine Cake",
      "3",
      "Chocolate and Pear Bûche"
   ],
   [
      "6",
      "5",
      "Ian",
      "Honey and Flowers Cake",
      "5",
      "Dessert Island"
   ],
   [
      "6",
      "5",
      "Mat",
      "Sugar Free Carrot Cake",
      "4",
      "Raspberry and Coconut Ice Cream Roll"
   ],
   [
      "6",
      "5",
      "Nadiya",
      "Naked Blueberry and Caraway Crunch Cake",
      "1",
      "Chocolate and Strawberry Lime Ice Cream Roll"
   ],
   [
      "6",
      "5",
      "Paul",
      "Carrot & Pecan Cake",
      "2",
      "Dessert Island Getaway"
   ],
   [
      "6",
      "5",
      "Tamal",
      "Honey and Grapefruit Polenta Cake",
      "7",
      "Passion Fruit and Pineapple Ice Cream Roll"
   ],
   [
      "6",
      "5",
      "Ugnė",
      "Chocolate and Hazelnut Sugar-Free Cake",
      "6",
      "Chocolate, Peanut Butter and Grape Jam Roll"
   ],
   [
      "6",
      "6",
      "Alvin",
      "Plum Frangipane Tart",
      "6",
      "Smoked Salmon En Croûte and Vermouth Chicken à la King Vol-au-vents"
   ],
   [
      "6",
      "6",
      "Flora",
      "Apricot and Rosemary Frangipane Tart",
      "2",
      "Asparagus and Parma Ham and Praline and Chocolate Vol-au-vents"
   ],
   [
      "6",
      "6",
      "Ian",
      "Pear and Raspberry Frangipane Tart",
      "3",
      "vol-au-vents Terre et Mer"
   ],
   [
      "6",
      "6",
      "Mat",
      "Piña Colada Frangipane Tart",
      "1",
      "His 'n' Hers Vol-au-vents"
   ],
   [
      "6",
      "6",
      "Nadiya",
      "Bay Leaf, Rong Tea and Pear Tart",
      "4",
      "Bengali Korma and Clementine with Cod Vol-au-vents"
   ],
   [
      "6",
      "6",
      "Paul",
      "Christmas Frangipane Tart",
      "5",
      "Savoury and Sweet Bouchées"
   ],
   [
      "6",
      "6",
      "Tamal",
      "Spiced Pear Frangipane Tart",
      "7",
      "Fennel and Rosemary Pulled Pork and Chicken and Coriander vol-au-vents"
   ],
   [
      "6",
      "7",
      "Flora",
      "Game Pie with Shallot and Apple Chutney",
      "4",
      "Raspberry, Pomegranate and Champagne Charlotte Russe"
   ],
   [
      "6",
      "7",
      "Ian",
      "Roadkill Pie",
      "5",
      "Victoria's Crown Charlotte Russe"
   ],
   [
      "6",
      "7",
      "Mat",
      "Raised Venison and Pigeon Pie",
      "6",
      "Strawberry Charlotte Russe"
   ],
   [
      "6",
      "7",
      "Nadiya",
      "Aromatic Raised Game Pie",
      "1",
      "Mango and Raspberry Charlotte Russe"
   ],
   [
      "6",
      "7",
      "Paul",
      "Not a Boaring Pie",
      "2",
      "Charlotte Rose"
   ],
   [
      "6",
      "7",
      "Tamal",
      "Middle Eastern Game Pie",
      "3",
      "Spiced Blackberry, Raspberry and Cardamom Charlotte Russe"
   ],
   [
      "6",
      "8",
      "Flora",
      "Peach & Lemon Thyme and Smoked Almond & Butterscotch Cream Horns",
      "3",
      "Lime & Basil and Coconut & White Chocolate Religieuse à l'ancienne"
   ],
   [
      "6",
      "8",
      "Ian",
      "Mont Blanc & Black Forest Gâteau Horns",
      "2",
      "Nun with Hidden Passions"
   ],
   [
      "6",
      "8",
      "Nadiya",
      "Rose Pistachio and Mocha Hazelnut Horns",
      "1",
      "Bubble Gum and Peppermint Cream Religieuse à l'ancienne"
   ],
   [
      "6",
      "8",
      "Paul",
      "Café Tipple & Banana Crunch-away Horns",
      "5",
      "Religieuse à l'ancienne"
   ],
   [
      "6",
      "8",
      "Tamal",
      "Lime & Mascarpone and Malt Cream Horns",
      "4",
      "Passionfruit & Mango and Pistachio & Raspberry Religieuse à l'ancienne"
   ],
   [
      "6",
      "9",
      "Flora",
      "Passion Fruit and Chocolate Tart",
      "1",
      "Cocoa Carousel"
   ],
   [
      "6",
      "9",
      "Ian",
      "Chocolate and Bay Tart",
      "3",
      "Chocolate Well"
   ],
   [
      "6",
      "9",
      "Nadiya",
      "Peanut Salted Caramel and Chocolate Tart",
      "4",
      "Peacock in Nan's Door"
   ],
   [
      "6",
      "9",
      "Tamal",
      "Chocolate New York Pie",
      "2",
      "Chocolate Bell Tower"
   ],
   [
      "6",
      "10",
      "Ian",
      "Elderflower and Lemon & Spiced Buns",
      "2",
      "Colossal Curvy Carrot Cake"
   ],
   [
      "6",
      "10",
      "Nadiya",
      "Cardamom and Almond Buns & Nutmeg and Sour Cherry Fingers",
      "1",
      "My Big Fat British Wedding Cake"
   ],
   [
      "6",
      "10",
      "Tamal",
      "Cinnamon and Apple & Toffee and Marmalade Iced Buns",
      "3",
      "Sticky Toffee Pudding Cake"
   ],
   [
      "7",
      "1",
      "Andrew",
      "Lemon and Rosemary Drizzle Cake",
      "12",
      "'Ultimate Indulgence' Mirror Glaze Cake"
   ],
   [
      "7",
      "1",
      "Benjamina",
      "Pistachio, Cardamom and Lemon Drizzle Cake",
      "6",
      "White Chocolate Mirror Glaze with Salted Praline Buttercream"
   ],
   [
      "7",
      "1",
      "Candice",
      "Raspberry and Rhubarb Drizzle Custard Bundt Cake",
      "5",
      "Mirror Mirror On The Wall, Who Is The Shiniest Cake Of Them All?"
   ],
   [
      "7",
      "1",
      "Jane",
      "Lemon and Poppy Seed Drizzle Cake",
      "7",
      "Chocolate Orange Mirror Cake"
   ],
   [
      "7",
      "1",
      "Kate",
      "Berry Best Apple and Bramble Drizzle Cake",
      "4",
      "One Swallow Does Not Make A Summer Cake"
   ],
   [
      "7",
      "1",
      "Lee",
      "St. Clements Orange and Lemon Drizzle Cake",
      "11",
      "Strawberry Surprise Mirror Cake"
   ],
   [
      "7",
      "1",
      "Louise",
      "Orange Liqueur and Lemonade Drizzle Cake",
      "9",
      "White Chocolate Trifle Mirror Glaze Cake"
   ],
   [
      "7",
      "1",
      "Michael",
      "Lime, Ginger and Honey Drizzle Cake",
      "3",
      "Matcha Tea Chocolate Mirror Glaze"
   ],
   [
      "7",
      "1",
      "Rav",
      "Ginger Spice Yuzu Drizzle Cake",
      "8",
      "Colombian Mocha Mirror Glaze Cake"
   ],
   [
      "7",
      "1",
      "Selasi",
      "Citrus and Spice Drizzle Cake",
      "1",
      "Raspberry, Sloe and White Chocolate Mirror Glaze Cake"
   ],
   [
      "7",
      "1",
      "Tom",
      "G&T Drizzle Cake",
      "2",
      "Black Forest Broken Mirror"
   ],
   [
      "7",
      "1",
      "Val",
      "Mum's Orange and Lemon Drizzle",
      "10",
      "Chocolate Sponge with Four Fruit Frosting"
   ],
   [
      "7",
      "2",
      "Andrew",
      "Beehive Biscuits",
      "4",
      "Punting in Cambridge"
   ],
   [
      "7",
      "2",
      "Benjamina",
      "Bouquet Biscuits",
      "3",
      "New York, New York"
   ],
   [
      "7",
      "2",
      "Candice",
      "Salted Caramel, Chocolate Iced Shiny Hearts",
      "8",
      "Gingerbread Pub with Sticky Ginger Carpet"
   ],
   [
      "7",
      "2",
      "Jane",
      "Flower Pot Iced Biscuits",
      "2",
      "Hastings Old Town Fishing Net Shops and Boat"
   ],
   [
      "7",
      "2",
      "Kate",
      " A Biscuit for the Broads ",
      "1",
      " I Promise I will do my best "
   ],
   [
      "7",
      "2",
      "Louise",
      "Baa Bara Brith Biscuits",
      "10",
      "Gingerbread Wedding"
   ],
   [
      "7",
      "2",
      "Michael",
      "Malt, Chocolate and Orange Iced  Beer  Biscuits",
      "9",
      "Trip to See Santa in Lapland"
   ],
   [
      "7",
      "2",
      "Rav",
      "Union Jack Bunting Biscuits",
      "6",
      "Gingerbread Christmas Fairground"
   ],
   [
      "7",
      "2",
      "Selasi",
      " Wheelie Hot Iced Biscuits ",
      "11",
      "Stained Glass Window Gingerbread Church"
   ],
   [
      "7",
      "2",
      "Tom",
      "Chai Frappelatteccino Biscuits",
      "7",
      "Tom and Pod's Near Death Experience"
   ],
   [
      "7",
      "2",
      "Val",
      "Sunday Treat Iced Ice Cream Cone Biscuits",
      "5",
      "From Holland to New York via Yorkshire"
   ],
   [
      "7",
      "3",
      "Andrew",
      "Chocolate Barmbrack Bread",
      "2",
      "Braided Harvest Bread Basket"
   ],
   [
      "7",
      "3",
      "Benjamina",
      "Chocolate, Tahini and Almond Babka",
      "6",
      "Braided Bread Heart"
   ],
   [
      "7",
      "3",
      "Candice",
      "Chocolate, Salted Caramel & Pecan Brittle Brioche Loaf",
      "3",
      "Italian Light and Dark Rye Twist"
   ],
   [
      "7",
      "3",
      "Jane",
      "Chocolate and Cranberry Couronne",
      "9",
      "Chorizo and Chilli Flower with Parmesan and Pesto Centre"
   ],
   [
      "7",
      "3",
      "Kate",
      "Cobbled Loaf",
      "8",
      "The Corn Maiden"
   ],
   [
      "7",
      "3",
      "Michael",
      "Chocolate and Chilli Swirl Plait",
      "7",
      "Cypriot Dove and Olive Branch Plaited Loaf with Houmous"
   ],
   [
      "7",
      "3",
      "Rav",
      "Chocolate, Cardamom and Hazelnut Loaf",
      "10",
      "Three Tier Diwali Bread Centrepiece"
   ],
   [
      "7",
      "3",
      "Selasi",
      "Chocolate, Orange and Cinnamon Bread",
      "5",
      "Bedouin Escape Tear and Share Bread"
   ],
   [
      "7",
      "3",
      "Tom",
      "Chocolate Orange and Chilli Swirl Bread",
      "4",
      "Jörmungandr and Mjölnir"
   ],
   [
      "7",
      "3",
      "Val",
      "Double Chocolate Cinnamon Twist Loaf",
      "1",
      " And They All Went Into The Ark To Get Out Of The Rain "
   ],
   [
      "7",
      "4",
      "Andrew",
      "Yorkshire 'Tapas' Puddings",
      "4",
      "Churros Window Box"
   ],
   [
      "7",
      "4",
      "Benjamina",
      "Red Onion Chutney, Brie and Bacon Yorkshire Puddings",
      "1",
      "Tropical Churros"
   ],
   [
      "7",
      "4",
      "Candice",
      "Yorkshire Wellingtons",
      "2",
      "Two-Way Peanut Butter Churros"
   ],
   [
      "7",
      "4",
      "Jane",
      "Meat and Two Veg Yorkshires",
      "3",
      "Pistachio and White Chocolate Churros"
   ],
   [
      "7",
      "4",
      "Kate",
      "Christmas Dinner Compromise",
      "7",
      "Hot Cross Bunny Churros"
   ],
   [
      "7",
      "4",
      "Rav",
      "Thai Tofu Panang Yorkshires",
      "9",
      "Three Dip Matcha Pistachio Churros"
   ],
   [
      "7",
      "4",
      "Selasi",
      "Perfect Sunday Roast Accompaniment",
      "8",
      "Lemon and Anise Churros"
   ],
   [
      "7",
      "4",
      "Tom",
      "West Yorkshire Fusion Puddings",
      "5",
      "Fennel Churros Snake In The Grass"
   ],
   [
      "7",
      "4",
      "Val",
      "Mum's Chilli Yorkshire Puddings",
      "6",
      "Orange Chocolate Churros"
   ],
   [
      "7",
      "5",
      "Andrew",
      "Mum and Dad's Breakfast Pastries",
      "6",
      "Spicy Chorizo Squash Parcels and Baklava Bites"
   ],
   [
      "7",
      "5",
      "Benjamina",
      "'Good Morning America' Swirls and Peanut Butter and Banana Pinwheels",
      "5",
      "Plantain and Spinach Samosas and Chai Pear Cups"
   ],
   [
      "7",
      "5",
      "Candice",
      "Danish Pastry Croque Monsieur Kites and Cinnamon Apple, Vanilla Crème Rose Danish",
      "2",
      "Sausage, Black Pudding and Apple Rounds and Banoffee Whiskey Cups"
   ],
   [
      "7",
      "5",
      "Jane",
      "Orange Pain au Raisins, Raspberry, Chocolate and Almond Danish",
      "1",
      "Roquefort, Fig and Walnut Parcels and Cherry and Chocolate Cones"
   ],
   [
      "7",
      "5",
      "Rav",
      "Cinnamon Swirls and Pecan, Walnut and Maple Plaits",
      "8",
      "Chinese Style Prawn Filo Tartlets and Spiced White Chocolate and Hazelnut Samosas"
   ],
   [
      "7",
      "5",
      "Selasi",
      "Rhubarb, Mango and Ginger Plait, and Pineapple and Coconut Pinwheels",
      "3",
      "Parma Ham, Asparagus and Cheese Filo Cigars and Coffee Cream Filo Cups"
   ],
   [
      "7",
      "5",
      "Tom",
      "Mega Breakfast Bonanzas; Granola Spirals and Wheat Foldovers",
      "4",
      "Yin and Yang Amuse-bouche"
   ],
   [
      "7",
      "5",
      "Val",
      "Pecan and Maple Syrup Pinwheels and Apple, Sultana and Cinnamon Swirls",
      "7",
      "Caramelised Red Onion, Goats Cheese Tartlets and Mincemeat and Apple Spiced Parcels"
   ],
   [
      "7",
      "6",
      "Andrew",
      "Tangy Lime and Ginger Meringue Pie",
      "6",
      "Spring Elderflower Trio"
   ],
   [
      "7",
      "6",
      "Benjamina",
      "Grapefruit and Ginger Meringue Pie",
      "2",
      "Floral Tea Cake"
   ],
   [
      "7",
      "6",
      "Candice",
      "Lime, Coconut and Lemongrass Sugar Meringue Pie",
      "5",
      "Four Seasons Cake"
   ],
   [
      "7",
      "6",
      "Jane",
      "Lime and Coconut Meringue Pie",
      "4",
      "Three Tier Orange Cake with a Floral Chocolate Collar"
   ],
   [
      "7",
      "6",
      "Rav",
      "Mandarin Margarita Meringue Pie",
      "3",
      "Blossom Cake"
   ],
   [
      "7",
      "6",
      "Selasi",
      "Grapefruit, Orange and Mint Meringue Pie",
      "7",
      "Three Tiered Ombré Floral Cake"
   ],
   [
      "7",
      "6",
      "Tom",
      "Blood Orange Halloween Pumpkin Pie",
      "1",
      "Floral Tea Cake"
   ],
   [
      "7",
      "7",
      "Andrew",
      "Tropical Holiday Roulade",
      "1",
      "Childhood Ice Cream Mousse Cakes"
   ],
   [
      "7",
      "7",
      "Benjamina",
      "Piña Colada Roulade",
      "3",
      "Apple Crumble Mousse Cake and Chocolate Coffee Mousse Cake"
   ],
   [
      "7",
      "7",
      "Candice",
      "Crowd Pleaser Roulade",
      "2",
      "Blackberry and Raspberry Bubbles and After Dinner Mousse"
   ],
   [
      "7",
      "7",
      "Jane",
      "Chocolate and Hazelnut Roulade",
      "4",
      "Chocolate, Coffee, and Vanilla Joconde Cakes and Blackcurrant and Vanilla Ombre Mousses"
   ],
   [
      "7",
      "7",
      "Selasi",
      "Summer Picnic Roulade",
      "6",
      "Lemon, Strawberry and Passionfruit and Chocolate and Mint Mini Mousse Cakes"
   ],
   [
      "7",
      "7",
      "Tom",
      "Millionaire's Roulade",
      "5",
      "Hipster Picnic"
   ],
   [
      "7",
      "8",
      "Andrew",
      "Da Vinci Inspired Geared Pies",
      "2",
      "Jousting Knights Marchpane"
   ],
   [
      "7",
      "8",
      "Benjamina",
      "Mexican Adventure",
      "4",
      "Tudor Garden"
   ],
   [
      "7",
      "8",
      "Candice",
      "Cheesy Cheeky Fish Pies",
      "1",
      "Peacock"
   ],
   [
      "7",
      "8",
      "Jane",
      "Tudor Rose Pies",
      "5",
      "Swans"
   ],
   [
      "7",
      "8",
      "Selasi",
      "Bouquet of Flowers",
      "3",
      "Fruity Tudor Marchpane"
   ],
   [
      "7",
      "9",
      "Andrew",
      "Cheesy Elephant Ears and Herby Treble Clefs",
      "2",
      "Philharmonic Fondants"
   ],
   [
      "7",
      "9",
      "Candice",
      "Red Onion, Cambozola and Walnut Palmiers and Mushroom, Streaky Bacon, and Parmesan Palmiers",
      "3",
      "Chocolate Praline Fondant Fancies and Cherry Bakewell Fondant Fancies"
   ],
   [
      "7",
      "9",
      "Jane",
      "Pesto and Sundried Tomato Palmiers and Goats Cheese, Olive and Parma Ham Palmiers",
      "1",
      "Pistachio and Raspberry Fondant Fancies and Lemon Curd Surprise Fondant Fancies"
   ],
   [
      "7",
      "9",
      "Selasi",
      "Sundried Tomato, Onion, Peppers and Parmesan Palmiers and Salmon, Spinach and Mushroom Palmiers",
      "4",
      "Lime and Ginger Fondant Fancies and Pink Velvet and Raspberry Prosecco Fondant Fancies"
   ],
   [
      "7",
      "10",
      "Andrew",
      "Crunchy Caramel Cassis Crown",
      "1",
      "Family and Friends' Favourites Picnic"
   ],
   [
      "7",
      "10",
      "Candice",
      "Queen Victoria's Mango and Strawberry Crown",
      "2",
      "Picnic for Pearly Kings and Queens"
   ],
   [
      "7",
      "10",
      "Jane",
      "Red, White and Blue Meringue Crown",
      "3",
      "Family Favourites Feast"
   ],
   [
      "8",
      "1",
      "Chris",
      "Tropical Fresh Fruit Cake",
      "12",
      "'Raised Pork Pie and Egg Surprise' Cake"
   ],
   [
      "8",
      "1",
      "Flo",
      "Citrus Layer Cake",
      "9",
      "'One in a Melon' Cake"
   ],
   [
      "8",
      "1",
      "James",
      "Orange, Rhubarb & Ginger Crumble Cake",
      "2",
      "'Mock-accino and Croissant' Cake"
   ],
   [
      "8",
      "1",
      "Julia",
      "Courgette and Lemon Cake",
      "3",
      "'Russian Doll' Cake"
   ],
   [
      "8",
      "1",
      "Kate",
      "Moroccan Strawberry and Rose Cake",
      "1",
      "'Chocolate Terrarium' Cake"
   ],
   [
      "8",
      "1",
      "Liam",
      "Apple and Almond Crumble Maple Loaf",
      "8",
      "'Stackin' Sunday' Cake"
   ],
   [
      "8",
      "1",
      "Peter",
      "Coconut Cake",
      "10",
      "'Bread on a Breadboard' Cake"
   ],
   [
      "8",
      "1",
      "Sophie",
      "Pineapple and Coconut Sandwich Cake",
      "5",
      "'Champagne Bottle and Bucket' Cake"
   ],
   [
      "8",
      "1",
      "Stacey",
      "Granny Smith Apple and Walnut Cake",
      "11",
      "'Black Evening Clutch Bag' Cake"
   ],
   [
      "8",
      "1",
      "Steven",
      "Bonfire Night Cake",
      "6",
      "'A Baker's Lunch' Cake"
   ],
   [
      "8",
      "1",
      "Tom",
      "Gilded Pear and Cardamom Cake",
      "7",
      "'Stack of Books' Cake"
   ],
   [
      "8",
      "1",
      "Yan",
      "Windfall Apple Crumble Cake",
      "4",
      "'Banana-ramen' Cake"
   ],
   [
      "8",
      "2",
      "Chris",
      "Chocolate Chia Seed Biscuits with Whisky Caramel Filling",
      "11",
      "'The Great British Sail Off' Game"
   ],
   [
      "8",
      "2",
      "Flo",
      "Gin Jam Butties",
      "10",
      "'Pick My Bones' Game"
   ],
   [
      "8",
      "2",
      "James",
      "Rhubarb and Custard Whirls",
      "3",
      "'Coppit' Game"
   ],
   [
      "8",
      "2",
      "Julia",
      "Middle Eastern Delight Sandwich Biscuits",
      "4",
      "'A British Baking' Game"
   ],
   [
      "8",
      "2",
      "Kate",
      "Coconut Seashells for a Titanic Afternoon Tea",
      "8",
      "'Jungle' Game"
   ],
   [
      "8",
      "2",
      "Liam",
      "Coffee Malted Pecan Shorties",
      "7",
      "'Classroom Classics' Game"
   ],
   [
      "8",
      "2",
      "Sophie",
      "Lemon Limoncino Sandwich Biscuits",
      "2",
      "'Snakes and Ladders' Game"
   ],
   [
      "8",
      "2",
      "Stacey",
      "Sparkly Chocolate and Marshmallow Fluff Cookies",
      "9",
      "'Get to School' Game"
   ],
   [
      "8",
      "2",
      "Steven",
      "Amarpressi Biscuits",
      "6",
      "'Check Bake' Game"
   ],
   [
      "8",
      "2",
      "Tom",
      "Coffee and Amaretto Kisses",
      "5",
      "'Drain Pipes and Ladders' Game"
   ],
   [
      "8",
      "2",
      "Yan",
      "'Mrs. Marian's PB 'n' B' Biscuits",
      "1",
      "'Adventures in Bakeland' Game"
   ],
   [
      "8",
      "3",
      "Flo",
      "Cinnamon and Orange Teacakes",
      "7",
      "'Davy Jones' Locker' Bread Sculpture"
   ],
   [
      "8",
      "3",
      "James",
      "Nordic Teacakes",
      "9",
      "'Owl in the Woods' Bread Sculpture"
   ],
   [
      "8",
      "3",
      "Julia",
      "Earl Grey Dried Fruit Teacakes",
      "2",
      "'The Snail Under a Mushroom' Bread Sculpture"
   ],
   [
      "8",
      "3",
      "Kate",
      "Blueberry Buns",
      "10",
      "'Kraken' Bread Sculpture"
   ],
   [
      "8",
      "3",
      "Liam",
      "Jamaican Spiced Teacakes",
      "5",
      "'Kneadapolitan' Bread Sculpture"
   ],
   [
      "8",
      "3",
      "Sophie",
      "Tagine Teacakes",
      "6",
      "'Picnic Basket' Bread Sculpture"
   ],
   [
      "8",
      "3",
      "Stacey",
      "Cranberry and Cinnamon Teacakes",
      "1",
      "'Ascot Hat' Bread Sculpture"
   ],
   [
      "8",
      "3",
      "Steven",
      "Madras Cocktail Teacakes",
      "3",
      "'The Bag I Knead' Bread Sculpture"
   ],
   [
      "8",
      "3",
      "Tom",
      "Orange and Cranberry Teacakes",
      "4",
      "'Pink & Yellow Rose Centrepiece' Bread Sculpture"
   ],
   [
      "8",
      "3",
      "Yan",
      "'Mrs P's' Masala Chai Spiced Teacakes",
      "8",
      "'Basil the Vegetarian Dragon with his Pumpkin Hoard' Bread Sculpture"
   ],
   [
      "8",
      "4",
      "James",
      "'Windy City' Millionaire Shortbreads",
      "2",
      "Nutty Caramel Cake"
   ],
   [
      "8",
      "4",
      "Julia",
      "Pecan Salted Caramel Millionaire Shortbreads",
      "9",
      "Poppy Seed Caramel Cake"
   ],
   [
      "8",
      "4",
      "Kate",
      "Salted Bay Caramel Millionaire Shortbreads",
      "6",
      "Sticky Toffee Apple Caramel Cake"
   ],
   [
      "8",
      "4",
      "Liam",
      "Salted Peanut Butter Millionaire Shortbreads",
      "3",
      "White Layered Ginger Caramel Cake"
   ],
   [
      "8",
      "4",
      "Sophie",
      "Jaffa Millionaire Shortbreads",
      "4",
      "Bird's Nest Caramel Cake"
   ],
   [
      "8",
      "4",
      "Stacey",
      "Rum Salted Caramel Millionaire Shortbreads",
      "1",
      "Chocolate and Coffee Caramel Cake"
   ],
   [
      "8",
      "4",
      "Steven",
      "Orange Macadamia Nut Millionaire Shortbreads",
      "7",
      "Caramel Crown Cake"
   ],
   [
      "8",
      "4",
      "Tom",
      "Stem Ginger Caramel Shortbreads",
      "5",
      "Hummingbird Cake"
   ],
   [
      "8",
      "4",
      "Yan",
      "'Lil' Red's Ginger and Nuts' Millionaire Shortbreads",
      "8",
      "Animals of the Rainforest Caramel Cake"
   ],
   [
      "8",
      "5",
      "James",
      "Orange and Ginger Steamed School Pudding",
      "7",
      "'The Missed Silver Jubilee' Trifle Terrine"
   ],
   [
      "8",
      "5",
      "Julia",
      "Orange & Treacle Steamed School Pudding",
      "3",
      "'Opulent Ornament' Trifle Terrine"
   ],
   [
      "8",
      "5",
      "Kate",
      "'Mr Darcy's Steamy Lake Scene' Steamed School Pudding",
      "8",
      "'My Great Great Nan's' Raspberry Trifle Terrine"
   ],
   [
      "8",
      "5",
      "Liam",
      "Cherries & Lemons that are 'Baked Well'",
      "2",
      "'Cheers Lads' Trifle Terrine"
   ],
   [
      "8",
      "5",
      "Sophie",
      "Ginger, Fig and Honey Steamed School Pudding",
      "1",
      "Raspberry, Yuzu & White Chocolate Bûche Trifle Terrine"
   ],
   [
      "8",
      "5",
      "Stacey",
      "Bakewell Tart Steamed School Pudding",
      "4",
      "Tropical Trifle Terrine"
   ],
   [
      "8",
      "5",
      "Steven",
      "Lemon & Blackcurrant Drizzle Steamed School Pudding",
      "5",
      "'From Across the Jelly Pond' Trifle Terrine"
   ],
   [
      "8",
      "5",
      "Yan",
      "Mango Fruit Hat Steamed School Pudding",
      "6",
      "'Heart of a Hero' Trifle Terrine"
   ],
   [
      "8",
      "6",
      "Julia",
      "'Pies from the Tree' Decorative Pies",
      "7",
      "'Special Occasion' Pie"
   ],
   [
      "8",
      "6",
      "Kate",
      "'Vegetarian Pie Faces' Decorative Pies",
      "5",
      "Potato Curry Pie with Mango & Chilli Glaze"
   ],
   [
      "8",
      "6",
      "Liam",
      "'Standard FC' Decorative Pies",
      "4",
      "'Nan's Sunday Dinner' Pie"
   ],
   [
      "8",
      "6",
      "Sophie",
      "'The Four Seasons' Decorative Pies",
      "2",
      "Game Pie with Glazed Forest Fruits"
   ],
   [
      "8",
      "6",
      "Stacey",
      "'Love Theme' Decorative Pies",
      "6",
      "Indian Hand Raised Pie with Mango"
   ],
   [
      "8",
      "6",
      "Steven",
      "'Fleetwood Mac' Decorative Pies",
      "3",
      "Christmas Pie"
   ],
   [
      "8",
      "6",
      "Yan",
      "'πr2' Decorative Pies",
      "1",
      "Chequerboard Pie"
   ],
   [
      "8",
      "7",
      "Kate",
      "'Happy Hour' Cocktail Cannoli",
      "6",
      "'Flavour Fusion' Sfogliatelle"
   ],
   [
      "8",
      "7",
      "Liam",
      "'Just Doing Me' Cannoli",
      "2",
      "'Morning Delivery' Sfogliatelle"
   ],
   [
      "8",
      "7",
      "Sophie",
      "'Classics with a Twist' Cannoli",
      "3",
      "'Classics' Sfogliatelle"
   ],
   [
      "8",
      "7",
      "Stacey",
      "My All Time Favourite Desserts",
      "4",
      "Pastry Surprise"
   ],
   [
      "8",
      "7",
      "Steven",
      "Italian Style Cannoli",
      "1",
      "'Sicilian-style' Sfogliatelle"
   ],
   [
      "8",
      "7",
      "Yan",
      "Cannoli Cocktails",
      "5",
      "Canadian-Style Sfogliatelle"
   ],
   [
      "8",
      "8",
      "Kate",
      "Burrito Bedfordshire Clangers",
      "2",
      "'Liver Building Turret' Savoy Cake"
   ],
   [
      "8",
      "8",
      "Liam",
      "'Take Out' Bedfordshire Clangers",
      "5",
      "'Fort Wizardore' Savoy Cake"
   ],
   [
      "8",
      "8",
      "Sophie",
      "Char Siu & Banana Praline Bedfordshire Clangers",
      "4",
      "Citrus with Green Apple Croquembouche Savoy Cake"
   ],
   [
      "8",
      "8",
      "Stacey",
      "Camembert & Onion and Apple & Blueberry Bedfordshire Clangers",
      "3",
      "'Bright' Lemon & Orange Savoy Cake"
   ],
   [
      "8",
      "8",
      "Steven",
      "'Mediterranean Medley' Bedfordshire Clangers",
      "1",
      "Chestnut Rum Savoy Cake"
   ],
   [
      "8",
      "9",
      "Kate",
      "Bellini and Valencian Orange Choux Buns",
      "4",
      "'Rainbow' Meringue Centrepiece"
   ],
   [
      "8",
      "9",
      "Sophie",
      "Strawberry & Rhubarb and Chestnut & Vanilla Choux Buns",
      "1",
      "'Tutu with Opera Filling' Meringue Centrepiece"
   ],
   [
      "8",
      "9",
      "Stacey",
      "'Choux-nicorn and Choux-moji' Choux Buns",
      "2",
      "'Flamingos in Love' Meringue Centrepiece"
   ],
   [
      "8",
      "9",
      "Steven",
      "Key Lime Cheesecake and Bakewell Tart Choux Buns",
      "3",
      "'Some Air Over the Rainbow' Meringue Centrepiece"
   ],
   [
      "8",
      "10",
      "Kate",
      "Roman Spelt, Coconut Kala Chana and Flower Breads",
      "3",
      "White Chocolate, Yuzu and Lychee Entremet"
   ],
   [
      "8",
      "10",
      "Sophie",
      "Spelt Boules, Mushroom Ciabatta and Orange Plaited Brioche",
      "2",
      "'Ode to the Honey Bee' Entremet"
   ],
   [
      "8",
      "10",
      "Steven",
      "Spelt & Rye, Toasted Garlic & Fontina and Sweet Chocolate Breads",
      "1",
      "'Yin Yang' Entremet"
   ]
]