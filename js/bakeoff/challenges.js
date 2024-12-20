var challengesInfo ={
   "format" : "A data frame with 1,136 rows representing individual bakers per episode\nand 7 variables:",
   "parameters" : {
      "technical" : "An integer denoting the rank on the technical challenge\nfor that baker/episode. A value of 1 means the baker was the winner of\nthe technical challenge. If NA, the baker did not appear in the\nepisode.",
      "baker" : "A character string with a given name or nickname.",
      "series" : "An integer denoting the UK series number (1-10).",
      "episode" : "An integer denoting episode number within a series.",
      "showstopper" : "A character string containing the bake for the\nshowstopper challenge for that baker/episode. If NA, the baker did not\nappear in episode.",
      "result" : "A character string denoting if the baker was IN, OUT,\n&#8288;STAR BAKER&#8288;, or SICK for a given episode. For finale episodes, values\nare either WINNER or Runner-up. If NA, the baker did not appear in\nepisode.",
      "signature" : "A character string containing the bake for the signature\nchallenge for that baker/episode. If NA, the baker did not appear in\nepisode."
   },
   "reference" : "See\nhttps://en.wikipedia.org/wiki/The_Great_British_Bake_Off#Format",
   "usage" : "challenges",
   "title" : "Challenges",
   "description" : "Description\nDetails about the three challenges (\"signature\", \"technical\", and\n\"showstopper\") for each baker/episode across all GBBO series. Who was\neliminated? Who won star baker? In the finale, who won and who was runner up?"
}

var challenges = [
   [
      "series",
      "episode",
      "baker",
      "result",
      "signature",
      "technical",
      "showstopper"
   ],
   [
      "1",
      "1",
      "Annetha",
      "IN",
      "Light Jamaican Black Cakewith Strawberries and Cream",
      "2",
      "Red, White & Blue Chocolate Cake with Cigarellos, Fresh Fruit, and Cream"
   ],
   [
      "1",
      "1",
      "David",
      "IN",
      "Chocolate Orange Cake",
      "3",
      "Black Forest Floor Gateaux with Moulded Chocolate Leaves, Fallen Fruit and Chocolate Mushrooms Moulded from eggs"
   ],
   [
      "1",
      "1",
      "Edd",
      "IN",
      "Caramel Cinnamon and Banana Cake",
      "1",
      ""
   ],
   [
      "1",
      "1",
      "Jasminder",
      "IN",
      "Fresh Mango and Passion Fruit Hummingbird Cake",
      "",
      ""
   ],
   [
      "1",
      "1",
      "Jonathan",
      "IN",
      "Carrot Cake with Lime and Cream Cheese Icing",
      "9",
      "Three Tiered White and Dark Chocolate with Almond and Cherry"
   ],
   [
      "1",
      "1",
      "Louise",
      "IN",
      "Carrot and Orange Cake",
      "",
      "Never Fail Chocolate Sponge Cake,with Fresh Fruit, White & Chocolate Cigarello Border"
   ],
   [
      "1",
      "1",
      "Miranda",
      "IN",
      "Triple Layered Brownie Meringue Cake with Raspberry Cream",
      "8",
      "Three Tiered Chocolate Fudge Cake  with Handmade Chocolate Button Decorations"
   ],
   [
      "1",
      "1",
      "Ruth",
      "IN",
      "Three Tiered Lemon Drizzle Cakewith Fresh Cream and freshly made Lemon Curd",
      "",
      "Classic Chocolate Sponge wrapped in a Chocolate Collar topped with Handmade White and Dark Chocolate Truffles"
   ],
   [
      "1",
      "1",
      "Lea",
      "OUT",
      "Cranberry and Pistachio Cakewith Orange Flower Water Icing",
      "10",
      "Raspberries and Cream filled Chocolatewith Chocolate-dipped Fresh Fruit"
   ],
   [
      "1",
      "1",
      "Mark",
      "OUT",
      "Sticky Marmalade Tea Loaf",
      "",
      "Heart-shaped Chocolate and Beetroot Cake with Store-Bought silver chocolate hearts and chocolate red and white roses."
   ],
   [
      "1",
      "2",
      "David",
      "IN",
      "Cheddar Cheese and Fresh Rosemary Biscuits",
      "8",
      "Choux Pastry Swans  Chocolate Profiteroles"
   ],
   [
      "1",
      "2",
      "Edd",
      "IN",
      "Oatmeal Raisin Cookie",
      "6",
      "Pink Macarons"
   ],
   [
      "1",
      "2",
      "Jasminder",
      "IN",
      "Millionaires' Shortbread",
      "2",
      "Meringues with Chocolate and Space DustCoffee flavoured Eclairs"
   ],
   [
      "1",
      "2",
      "Jonathan",
      "IN",
      "Honey and Candied Ginger Cookies",
      "1",
      "Meringues with Whiskey Cream"
   ],
   [
      "1",
      "2",
      "Miranda",
      "IN",
      "Fresh Vanilla Biscuits with Royal Icing",
      "3",
      "Pistachio Macarons"
   ],
   [
      "1",
      "2",
      "Ruth",
      "IN",
      "Peanut Shortbread withSalted Peanut Caramel",
      "5",
      "Almond Macaron with Violet ButtercreamRaspberries and Cream Eclairs"
   ],
   [
      "1",
      "2",
      "Annetha",
      "OUT",
      "Rose Petal Shortbread",
      "7",
      "Pink Swirl Macarons / Eclairs"
   ],
   [
      "1",
      "2",
      "Louise",
      "OUT",
      "Stained Glass Window Shortbread",
      "4",
      "Strawberry, Mint, and Cream Meringues  Chocolate Eclairs / Orange, Yellow and Pink Macarons"
   ],
   [
      "1",
      "2",
      "Lea",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "2",
      "Mark",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "3",
      "David",
      "IN",
      "Chilli Bread",
      "4",
      "Walnut and Seed RollRed Berry and Almond Bun"
   ],
   [
      "1",
      "3",
      "Edd",
      "IN",
      "Olive Bread",
      "1",
      "Tomato and Mozzarella"
   ],
   [
      "1",
      "3",
      "Jasminder",
      "IN",
      "Focaccia",
      "5",
      "Mango and Sultana BunsPan au Chocolat with Mars BarsTutti Frutti Wheel with Jelly Tots"
   ],
   [
      "1",
      "3",
      "Miranda",
      "IN",
      "Walnut and Apricot Bread",
      "3",
      "Lemon Iced BunsChocolate and Orange Buns"
   ],
   [
      "1",
      "3",
      "Ruth",
      "IN",
      "Maple and Pecan Bread",
      "2",
      "Chocolate and Orange PanettoneCranberry Bagels"
   ],
   [
      "1",
      "3",
      "Jonathan",
      "OUT",
      "Anchovy, Sweet Paprika and Oregano Bread",
      "6",
      "Sticky Lemon Honey Bun Olive and Anchovy RollSundried Tomatoes and Fresh Herbs RollStilton, Walnut and Apple RollCinnamon and Cardamom Chelsea Bun"
   ],
   [
      "1",
      "3",
      "Annetha",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "3",
      "Lea",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "3",
      "Louise",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "3",
      "Mark",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "4",
      "Edd",
      "IN",
      "Apple and Plum Pudding",
      "3",
      "Apple and Cinnamon Crumble, Nutella Banana Brioche Bread Pudding, Rhubarb and Strawberry Suet Layer"
   ],
   [
      "1",
      "4",
      "Jasminder",
      "IN",
      "Sticky Toffee Pudding with Tropical Fruit & Toffee Sauce",
      "2",
      "Bread & Butter Pudding, Treacle Suet Pudding with Fresh Fruit, Apple and Pineapple Crumble"
   ],
   [
      "1",
      "4",
      "Miranda",
      "IN",
      "Sticky Toffee Pudding",
      "1",
      "Queen of Puddings, Chocolate Pear Roly Poly, Strawberry and Rhubarb Crumble"
   ],
   [
      "1",
      "4",
      "Ruth",
      "IN",
      "Peach and Blueberry Boy Bait",
      "4",
      "Apple & Ginger Crumble, Rhubarb Suet Crust, Cherry Queen of Puddings"
   ],
   [
      "1",
      "4",
      "David",
      "OUT",
      "Pear and Walnut Pudding",
      "5",
      "Apple and Blackberry Crumble, Rhubarb and Orange Betty, Suet Pear"
   ],
   [
      "1",
      "4",
      "Annetha",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "4",
      "Jonathan",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "4",
      "Lea",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "4",
      "Louise",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "4",
      "Mark",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "5",
      "Edd",
      "IN",
      "Chicken, Ham, Leek and Tarragon Pie",
      "2",
      "Almond Sweet Pastry with Ginger and Chocolate  Raspberry Tart / Yorkshire Curd Tart  Chickpea and Salami, Red and Yellow Pepper, Asparagus Gruyere Quiche Canapés"
   ],
   [
      "1",
      "5",
      "Miranda",
      "IN",
      "Summery Salmon, Cod and Prawn Fish Pie",
      "1",
      "Chocolate Pastry filled with Orange Cheesecake  Chocolate Pastry filled with Milk Chocolate Ganache  Strawberry Tart with Red Currant Glaze  Cheesy Crab, Broad Bean and Tomato, Pancetta Risotto Canapés"
   ],
   [
      "1",
      "5",
      "Ruth",
      "IN",
      "Minced Beef Pie",
      "3",
      "Raspberry and Dark Chocolate Tart  Creme Patisserie and Cherry Tart  Citrus Curd Tart with Creme Brulee Top  Tomato, Asparagus Twirl Canapés"
   ],
   [
      "1",
      "5",
      "Jasminder",
      "OUT",
      "Chicken and Mushroom Pie",
      "4",
      "Jaggery, Carrot, and Spiced Condensed Milk Tart  Fruit and Custard Tart  Thai Chili Red Onion, Duck in Plum Sauce, Salmon and Prawn Canapés"
   ],
   [
      "1",
      "5",
      "Annetha",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "5",
      "David",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "5",
      "Jonathan",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "5",
      "Lea",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "5",
      "Louise",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "5",
      "Mark",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "6",
      "Miranda",
      "Runner-up",
      "Lemon Cupcake",
      "",
      ""
   ],
   [
      "1",
      "6",
      "Ruth",
      "Runner-up",
      "Mint, Ginger and Blackberry Cake",
      "",
      "Red Pepper and Cheese Quiche TartsSultana SconesVanilla and Lemon Choux BunsFinger Sandwiches"
   ],
   [
      "1",
      "6",
      "Edd",
      "WINNER",
      "Cinnamon and Banana Cake",
      "",
      "Chocolate and Ginger TartsLemon Scones with Passion Fruit CurdRaspberry Choux BunsFinger Sandwiches"
   ],
   [
      "1",
      "6",
      "Annetha",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "6",
      "David",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "6",
      "Jasminder",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "6",
      "Jonathan",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "6",
      "Lea",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "6",
      "Louise",
      "",
      "",
      "",
      ""
   ],
   [
      "1",
      "6",
      "Mark",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "1",
      "Ben",
      "IN",
      "Rhubarb and Custard CupcakesAfter Dinner Cupcakes",
      "2",
      "Vanilla Sponge with White Chocolate and Raspberry Buttercream"
   ],
   [
      "2",
      "1",
      "Ian",
      "IN",
      "Apple and Cinnamon Cupcakes",
      "10",
      ""
   ],
   [
      "2",
      "1",
      "Janet",
      "IN",
      "Raspberry and Cream Cupcakes",
      "8",
      "Chocolate Marble Cakewith Dark and White Chocolate Truffles"
   ],
   [
      "2",
      "1",
      "Jason",
      "IN",
      "Lemon Meringue CupcakesApple and Cinnamon Cupcakes",
      "6",
      ""
   ],
   [
      "2",
      "1",
      "Joanne",
      "IN",
      "Chocolate Orange CupcakesOrange and Cardamom Cupcakes",
      "11",
      "Chocolate and Strawberry Cake"
   ],
   [
      "2",
      "1",
      "Mary-Anne",
      "IN",
      "Banoffee Cupcakes",
      "4",
      "Chocolate and Raspberry Opera Cake"
   ],
   [
      "2",
      "1",
      "Robert",
      "IN",
      "Blackberry and Vanilla Cupcakeswith Liquorice Frosting",
      "3",
      "Genoise Layered Mousse Cakewith Chocolate Ganache"
   ],
   [
      "2",
      "1",
      "Simon",
      "IN",
      "Guinness and Chocolate Cupcakes",
      "9",
      "Two-Tiered Chocolate Courgette Cake"
   ],
   [
      "2",
      "1",
      "Urvashi",
      "IN",
      "Cherry Blossom CupcakesJapanese Lime Cupcakes",
      "7",
      ""
   ],
   [
      "2",
      "1",
      "Yasmin",
      "IN",
      "Cardamom and Pomegranate Cupcakes",
      "5",
      ""
   ],
   [
      "2",
      "1",
      "Keith",
      "OUT",
      "Earl Grey Cupcakes",
      "12",
      "Chocolate and Sour Cream Cake"
   ],
   [
      "2",
      "1",
      "Holly",
      "STAR BAKER",
      "Cherry Bakewell Inspired CupcakesGinger Cupcakes with Fig Truffle",
      "1",
      "Novelty Farm Cake"
   ],
   [
      "2",
      "2",
      "Ben",
      "IN",
      "Chorizo, Pepper and Gruyere Quiche",
      "1",
      "Lemon Meringue Tarts"
   ],
   [
      "2",
      "2",
      "Holly",
      "IN",
      "Pesto Quiche",
      "4",
      "Milk Chocolate and Pistachio TartsTrifle Tarts"
   ],
   [
      "2",
      "2",
      "Ian",
      "IN",
      "Stilton, Spinach and New Potato Quichewith Paprika and Walnut Pastry",
      "2",
      ""
   ],
   [
      "2",
      "2",
      "Janet",
      "IN",
      "Quiche Printanière",
      "8",
      "Red Fruit TartsChocolate and Cherry Tarts"
   ],
   [
      "2",
      "2",
      "Joanne",
      "IN",
      "Caramelised Onion, Gruyere and Thyme Quiche",
      "10",
      "Raspberry and Mascarpone Tarts with Lemon and Almond PastryHoney and Almond Tarts with Sweetcrust"
   ],
   [
      "2",
      "2",
      "Mary-Anne",
      "IN",
      "Roasted Cauliflower, Cheese andCaramelised Onion Quiche",
      "9",
      "Butterscotch Brulée Tarts in Pecan PastryApple Rose Tarts"
   ],
   [
      "2",
      "2",
      "Robert",
      "IN",
      "Smoked Bacon and Kale Quiche",
      "5",
      "Chocolate, Fennel and Ginger TartAlmond, Creme Patisserie and Poached Pear Tart"
   ],
   [
      "2",
      "2",
      "Urvashi",
      "IN",
      "Crab, Coriander and Coconut Quiche",
      "7",
      "Strawberry and Basil TartsElderflower and Honeycomb Tarts"
   ],
   [
      "2",
      "2",
      "Yasmin",
      "IN",
      "Smoked Haddock and Watercress Quiche",
      "6",
      "Chocolate and Orange with Cinnamon-Orange Pastry TartsBlueberry and Hazelnut with Hazelnut Pastry Tarts"
   ],
   [
      "2",
      "2",
      "Simon",
      "OUT",
      "Smoked Haddock and Watercress Quiche",
      "11",
      "Passion Fruit and Ricotta TartsSalted Chocolate, Stem Ginger and Mascarpone Cream Tarts"
   ],
   [
      "2",
      "2",
      "Jason",
      "STAR BAKER",
      "Salmon and Pak Choi Quiche",
      "3",
      "Mint Chocolate TartsBlueberry Bakewell Tarts"
   ],
   [
      "2",
      "2",
      "Keith",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "3",
      "Ben",
      "IN",
      "Walnut, Raisin and Rosemary Loaf",
      "3",
      ""
   ],
   [
      "2",
      "3",
      "Holly",
      "IN",
      "Picnic Loaf",
      "6",
      "Stilton and Walnut Rolls"
   ],
   [
      "2",
      "3",
      "Janet",
      "IN",
      "Zupfe Loaf with Gruyère Cheese",
      "8",
      "Apple and Walnut Granary Rolls Red Onion Cottage Rolls"
   ],
   [
      "2",
      "3",
      "Jason",
      "IN",
      "Cheese and Onion Tear and Share Loaf",
      "7",
      ""
   ],
   [
      "2",
      "3",
      "Joanne",
      "IN",
      "Stromboli flavored with Mozzarella, Ham, and Picante Pepper",
      "1",
      ""
   ],
   [
      "2",
      "3",
      "Mary-Anne",
      "IN",
      "Ploughman's Loaf",
      "5",
      "Herb and Walnut BreadsChocolate and Chilli Buns"
   ],
   [
      "2",
      "3",
      "Robert",
      "IN",
      "Rye and Coriander Seed Loaf",
      "4",
      "Blueberry Brioche RollsLemon and Poppy Seed Rolls"
   ],
   [
      "2",
      "3",
      "Ian",
      "OUT",
      "Courgette, Caerphilly Cheese and Thyme Loaf",
      "10",
      "Walnut and Raisin RollsCracked Wheat Logs"
   ],
   [
      "2",
      "3",
      "Urvashi",
      "OUT",
      "Salt and Peppercorn Loaf",
      "9",
      "Chilli and Halloumi RollsLemon and Coriander Mini Loaves"
   ],
   [
      "2",
      "3",
      "Yasmin",
      "STAR BAKER",
      "Egyptian Dukkah Loaf with Mixed Spices",
      "2",
      "Pesto BreadSweet Coconut Rolls"
   ],
   [
      "2",
      "3",
      "Keith",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "3",
      "Simon",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "4",
      "Janet",
      "IN",
      "Christmas Marzipan Biscuits",
      "4",
      "Raspberry MacaronsBlackcurrant MacaronsAlmond Macarons"
   ],
   [
      "2",
      "4",
      "Joanne",
      "IN",
      "Lavender Biscuits",
      "8",
      "Blueberry MacaronsCoconut MacaronsStrawberry Macarons"
   ],
   [
      "2",
      "4",
      "Mary-Anne",
      "IN",
      "Melting Moments",
      "2",
      "Blackcurrant and Mint MacaronsGooseberry and Elderflower MacaronsHazelnut Macarons"
   ],
   [
      "2",
      "4",
      "Robert",
      "IN",
      "Chocolate and Ginger Oat Biscuits",
      "7",
      "Strawberry and Lime MacaronsLemon MacaronsChocolate and Cardamom Macarons"
   ],
   [
      "2",
      "4",
      "Yasmin",
      "IN",
      "Chocolate Chip and Pistachio Biscotti",
      "6",
      "Chocolate and Lime MacaronsCoffee and Walnut MacaronsPineapple and Coconut Macarons"
   ],
   [
      "2",
      "4",
      "Ben",
      "OUT",
      "Stem Ginger Nuts",
      "5",
      "Chocolate and Almond MacaronsPine Nut MacaronsPistachio Macarons"
   ],
   [
      "2",
      "4",
      "Holly",
      "STAR BAKER",
      "Strawberry and Custard Melts",
      "3",
      "'Chocolate bars of my youth'(Caramel Macarons, Mint Chocolate Macarons and Chocolate Orange Macarons)"
   ],
   [
      "2",
      "4",
      "Jason",
      "STAR BAKER",
      "Lebkuchen",
      "1",
      "Mocktail Macarons(Mojito, Cranberry Cooler, and Pina Colada)"
   ],
   [
      "2",
      "4",
      "Ian",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "4",
      "Keith",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "4",
      "Simon",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "4",
      "Urvashi",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "5",
      "Holly",
      "IN",
      "Stilton, Potato and Caramelised Onion Pie",
      "4",
      "Lime Meringue Pie"
   ],
   [
      "2",
      "5",
      "Joanne",
      "IN",
      "Salmon and Asparagus Pie",
      "6",
      "Apple and Raspberry Meringue Pie"
   ],
   [
      "2",
      "5",
      "Mary-Anne",
      "IN",
      "Chicken and Bacon Pie",
      "2",
      "Midnight Meringue"
   ],
   [
      "2",
      "5",
      "Yasmin",
      "IN",
      "Family Fish Pie",
      "5",
      "Peach and Raspberry Meringue Pie"
   ],
   [
      "2",
      "5",
      "Jason",
      "OUT",
      "Brown Down Chicken Pie",
      "7",
      "Plum Meringue Pie"
   ],
   [
      "2",
      "5",
      "Robert",
      "OUT",
      "Chicken and Mushroom Pie",
      "3",
      "Rhubarb & Custard Meringue Pie"
   ],
   [
      "2",
      "5",
      "Janet",
      "STAR BAKER",
      "Chicken and Chestnut Pie",
      "1",
      "Rhubarb Meringue Pie"
   ],
   [
      "2",
      "5",
      "Ben",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "5",
      "Ian",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "5",
      "Keith",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "5",
      "Simon",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "5",
      "Urvashi",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "6",
      "Holly",
      "IN",
      "Father Christmas' Baked Cheesecake",
      "3",
      "Hansel and Gretel's Croquembouche"
   ],
   [
      "2",
      "6",
      "Janet",
      "IN",
      "Rhubarb and Ginger Baked Cheesecake",
      "5",
      "Orange and Nougatine Croquembouche"
   ],
   [
      "2",
      "6",
      "Mary-Anne",
      "IN",
      "Tutti Fruitti Curd Baked Cheesecake",
      "4",
      "Orange and Praline Croquembouche with Cardamom Caramel"
   ],
   [
      "2",
      "6",
      "Yasmin",
      "OUT",
      "Baked Amaretto Cheesecake",
      "2",
      "Rose Croquembouche"
   ],
   [
      "2",
      "6",
      "Joanne",
      "STAR BAKER",
      "Rum and Raisin Baked Cheesecake",
      "1",
      "Limoncello and White Chocolate Croquembouche"
   ],
   [
      "2",
      "6",
      "Ben",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "6",
      "Ian",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "6",
      "Jason",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "6",
      "Keith",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "6",
      "Robert",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "6",
      "Simon",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "6",
      "Urvashi",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "7",
      "Holly",
      "IN",
      "White Chocolate, Hazelnut and Raspberry Génoise Mousse Cake",
      "1",
      "Apricot, Macadamia and White Chocolate PinwheelsAlmond CroissantsApple, Raisin and Cinnamon Plaits"
   ],
   [
      "2",
      "7",
      "Joanne",
      "IN",
      "Raspberry & Strawberry Mousse Cake",
      "3",
      "Pain Aux RaisinChocolate TwistsBanana and Raisin Pastries"
   ],
   [
      "2",
      "7",
      "Mary-Anne",
      "IN",
      "Chocolate and Orange Mousse Cake",
      "2",
      "Raspberry Rose DanishesPraline SpiralsAlsatian Plaited Danishes"
   ],
   [
      "2",
      "7",
      "Janet",
      "OUT",
      "Chocolate Amaretto Mousse Cake",
      "4",
      "Pain Aux RaisinPlain CroissantPain Au Chocolat"
   ],
   [
      "2",
      "7",
      "Ben",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "7",
      "Ian",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "7",
      "Jason",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "7",
      "Keith",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "7",
      "Robert",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "7",
      "Simon",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "7",
      "Urvashi",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "7",
      "Yasmin",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "8",
      "Holly",
      "Runner-up",
      "Banoffee Inspired Mille Feuille",
      "2",
      "Strawberry and Cream Meringue NestGooseberry and Elderflower 'Bakewell' TartsNeapolitan Ice-Cream Sandwich"
   ],
   [
      "2",
      "8",
      "Mary-Anne",
      "Runner-up",
      "Lemon and Ginger Mille Feuille",
      "3",
      "Fruit Tarts with Elderflower CustardStrawberry and Rhubarb CheesecakesBlack Fruit Meringue with Everlasting Syllabub"
   ],
   [
      "2",
      "8",
      "Joanne",
      "WINNER",
      "Raspberry and Blueberry Mille Feuille",
      "1",
      "Mini Victoria SandwichesRaspberry, White Chocolate and Pistachio Mini MeringuesMini Banoffee Pie with Banana Mousse"
   ],
   [
      "2",
      "8",
      "Ben",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "8",
      "Ian",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "8",
      "Janet",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "8",
      "Jason",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "8",
      "Keith",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "8",
      "Robert",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "8",
      "Simon",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "8",
      "Urvashi",
      "",
      "",
      "",
      ""
   ],
   [
      "2",
      "8",
      "Yasmin",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "1",
      "Brendan",
      "IN",
      "Plum, Sour Cherry & Walnut Upside Down Cake",
      "10",
      "St. Patrick's Day Cake with Hidden Irish Flag[12]"
   ],
   [
      "3",
      "1",
      "Cathryn",
      "IN",
      "Apple, Hazelnut and Calvados Upside Down Cake",
      "5",
      "Hidden Cupcake Cake"
   ],
   [
      "3",
      "1",
      "Danny",
      "IN",
      "Plum, Ginger & Orange Upside Down Cake",
      "7",
      "Nectar Cake with Hidden Beehive[13]"
   ],
   [
      "3",
      "1",
      "James",
      "IN",
      "Parsnip, Pear, and Pecan Upside Down Cake",
      "2",
      " Simmer Dim  Sunset Cake"
   ],
   [
      "3",
      "1",
      "John",
      "IN",
      "Toffee Apple, Orange & Cranberry Upside Down Cake",
      "11",
      "Hidden Pink Hearts Cake"
   ],
   [
      "3",
      "1",
      "Manisha",
      "IN",
      "Vanilla, Peach and Raspberry Upside Down Cake",
      "6",
      "White Chocolate Cake with a Red Velvet and White Chocolate Mousse Heart"
   ],
   [
      "3",
      "1",
      "Peter",
      "IN",
      "Pear, Muscat & Chocolate Upside Down Cake",
      "3",
      "Jubilee Cake"
   ],
   [
      "3",
      "1",
      "Ryan",
      "IN",
      "Kumquat and Orange Polenta Upside Down Cake",
      "8",
      "Hidden Flowerbed Mousse Cake"
   ],
   [
      "3",
      "1",
      "Sarah-Jane",
      "IN",
      "Pear, Chocolate and Hazelnut Upside Down Cake",
      "1",
      "Hidden Crown Cake"
   ],
   [
      "3",
      "1",
      "Stuart",
      "IN",
      "Tomato and Ginger Upside Down Cake",
      "9",
      "Lemon and Pistachio Union Flag Cake"
   ],
   [
      "3",
      "1",
      "Natasha",
      "OUT",
      "Pineapple & Passion Fruit Upside Down Cake",
      "12",
      "Mother's Day Layered Rose Cake"
   ],
   [
      "3",
      "1",
      "Victoria",
      "STAR BAKER",
      "Pear and Pecan Upside Down Cake",
      "4",
      "Blackbird Pie Cake"
   ],
   [
      "3",
      "2",
      "Brendan",
      "IN",
      "Middle Eastern Taboon BreadIndian Roti",
      "4",
      "Chocolate and Vanilla Bagels; Cumin and Gruyere Bagels"
   ],
   [
      "3",
      "2",
      "Cathryn",
      "IN",
      "Spiced Mango NaanLime, Coriander and Chilli Tortillas",
      "8",
      "Cranberry and Orange Bagels; Chipotle, Chilli, and Smoked Cheddar Bagels"
   ],
   [
      "3",
      "2",
      "Danny",
      "IN",
      "Lime Coriander and Coconut TortillasZaatar Naan with Dukkah",
      "3",
      ""
   ],
   [
      "3",
      "2",
      "James",
      "IN",
      "Tomato, Garlic, and Parmesan FlatbreadsTattie Scones",
      "2",
      "Orange, Mint and Chocolate Bagels; 'Millers' Sourdough Bagels"
   ],
   [
      "3",
      "2",
      "Manisha",
      "IN",
      "Indian FlatbreadsItalian Flatbreads",
      "6",
      ""
   ],
   [
      "3",
      "2",
      "Ryan",
      "IN",
      "Shanghai Spring Onion FlatbreadsGarlic and Coriander Naan",
      "5",
      "Cinnamon and Date Bagels; Tarragon and Rosemary Bagels"
   ],
   [
      "3",
      "2",
      "Sarah-Jane",
      "IN",
      "Coconut RotiOatcakes",
      "10",
      ""
   ],
   [
      "3",
      "2",
      "Stuart",
      "IN",
      "Bombay BreadChorizo and Spring Onion Naan",
      "9",
      "Cinnamon and Cranberry Bagels; Tomato and Thyme Bagels"
   ],
   [
      "3",
      "2",
      "Victoria",
      "IN",
      "Coriander and Lemon NaanGarlic and Parsnip Chapatis",
      "7",
      "Saffron and Golden Raisin Bagels; Porcini Bagels"
   ],
   [
      "3",
      "2",
      "Peter",
      "OUT",
      "Fennel and Nigella Seed NaanBannock Bread",
      "11",
      "Rosemary and Sea Salt Bagels; Apple and Cinnamon Bagels"
   ],
   [
      "3",
      "2",
      "John",
      "STAR BAKER",
      "Coriander and Chilli RotisGarlic, Pomegranate and Potato Pitas",
      "1",
      "Fig, Walnut and Gruyere Bagels;   Blueberry and White Chocolate Bagels"
   ],
   [
      "3",
      "2",
      "Natasha",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "3",
      "Brendan",
      "IN",
      "Apple and Ginger Tarte Tatin",
      "9",
      "Blackberry, Nectarine and Dragon Fruit Tart"
   ],
   [
      "3",
      "3",
      "Cathryn",
      "IN",
      "Plum, Cherry and Five Spice Tarte Tatin",
      "3",
      "Raspberry, Pistachio and Lemon Tart"
   ],
   [
      "3",
      "3",
      "Danny",
      "IN",
      "Savoury Pear and Roquefort Tarte Tatin",
      "2",
      "Pineapple, Coconut and Frangipane Tart"
   ],
   [
      "3",
      "3",
      "John",
      "IN",
      "Apple and Vanilla Tarte Tatin with Walnut Praline",
      "6",
      "Berries, Grapes, Pomegranate, and Dragon Fruit Tart"
   ],
   [
      "3",
      "3",
      "Manisha",
      "IN",
      "Cinnamon, Apple and Pear Tarte Tatin",
      "10",
      "Rum and Tropical Fruit Tart"
   ],
   [
      "3",
      "3",
      "Ryan",
      "IN",
      "Spiced Pear Tarte Tatin",
      "5",
      ""
   ],
   [
      "3",
      "3",
      "Sarah-Jane",
      "IN",
      "Caramelised Banana Tarte Tatin",
      "8",
      "French Apple Tart with Blackberry and Cassis Jam"
   ],
   [
      "3",
      "3",
      "Stuart",
      "IN",
      "Pear and Almond Tarte Tatin",
      "7",
      "Raspberry Triple Chocolate Layered Tart"
   ],
   [
      "3",
      "3",
      "Victoria",
      "OUT",
      "Fig, Walnut and Pink Peppercorn Tarte Tatin",
      "4",
      "Tropical Fruit Tart with Black Pepper Crust"
   ],
   [
      "3",
      "3",
      "James",
      "STAR BAKER",
      "Apple and Lavender Tarte Tatin",
      "1",
      "Rose, Lychee and Raspberry Fruit Tart"
   ],
   [
      "3",
      "3",
      "Natasha",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "3",
      "Peter",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "4",
      "Cathryn",
      "IN",
      "White Chocolate, Macadamia and Coffee Torte",
      "3",
      "Gooseberry, Almond and Honey Meringue"
   ],
   [
      "3",
      "4",
      "Danny",
      "IN",
      "Blackberry, White Chocolate, Lemon and Elderflower Torte",
      "2",
      "'Monte Bianco' Chestnut, Chocolate and Coffee Dacquoise"
   ],
   [
      "3",
      "4",
      "James",
      "IN",
      "Hazelnut, Chocolate and Passionfruit Torte",
      "5",
      "Fig, Chestnut, Cherry and Chocolate Layered Meringue"
   ],
   [
      "3",
      "4",
      "John",
      "IN",
      "'Torte Noir' Black Forest Torte with Boozy Cream",
      "6",
      "Elderflower and Bramble Berry Pavlova"
   ],
   [
      "3",
      "4",
      "Manisha",
      "IN",
      "Almond, Chocolate and Cherry Torte",
      "9",
      "Tiramisu Layered Meringue Dessert"
   ],
   [
      "3",
      "4",
      "Ryan",
      "IN",
      "Green Tea Opera Torte",
      "7",
      "Strawberry, Rose and Pistachio Meringue"
   ],
   [
      "3",
      "4",
      "Sarah-Jane",
      "IN",
      "Chocolate and Almond Truffle Torte",
      "4",
      "Hazelnut Tiramisu Layered Meringue"
   ],
   [
      "3",
      "4",
      "Stuart",
      "OUT",
      "Black Forest Torte",
      "8",
      "Choca Blocka Mocha Meringue"
   ],
   [
      "3",
      "4",
      "Brendan",
      "STAR BAKER",
      "Clementine and Chestnut Torte",
      "1",
      "Pear, Chocolate and Hazelnut Dacquoise"
   ],
   [
      "3",
      "4",
      "Natasha",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "4",
      "Peter",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "4",
      "Victoria",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "5",
      "Brendan",
      "IN",
      "Salmon Coulibiac in a Scandinavian Pastry",
      "3",
      "All American Chiffon Pie"
   ],
   [
      "3",
      "5",
      "Cathryn",
      "IN",
      "Full English Wellington",
      "1",
      "Chocolate and Peanut Butter Pumpkin Pie"
   ],
   [
      "3",
      "5",
      "Danny",
      "IN",
      "Chickpea, Spinach & Mushroom Wellington",
      "7",
      "Trick or Treat Pumpkin Pie"
   ],
   [
      "3",
      "5",
      "James",
      "IN",
      "Four Pig Wellington",
      "6",
      "Sweet Potato Pie"
   ],
   [
      "3",
      "5",
      "John",
      "IN",
      "Venison and Haggis Wellington",
      "2",
      "Star Spangled Pecan Pie"
   ],
   [
      "3",
      "5",
      "Sarah-Jane",
      "IN",
      "Beef Wellington with Parma Ham and Gorgonzola Cheese",
      "4",
      "Chocolate and Banana Cream Pie"
   ],
   [
      "3",
      "5",
      "Manisha",
      "OUT",
      "Lamb Wellington with Rosemary and Mint",
      "5",
      "Banana Scotch Pie"
   ],
   [
      "3",
      "5",
      "Ryan",
      "STAR BAKER",
      "Curry Spiced Seabass Wellington",
      "8",
      "Key Lime Pie"
   ],
   [
      "3",
      "5",
      "Natasha",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "5",
      "Peter",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "5",
      "Stuart",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "5",
      "Victoria",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "6",
      "Cathryn",
      "IN",
      "Chocolate Walnut Whip PuddingsElderflower Sponges",
      "3",
      "Roasted Vegetable, Couscous and Sheep Cheese Strudel"
   ],
   [
      "3",
      "6",
      "Danny",
      "IN",
      "Banoffee Puddings with Walnut Butterscotch SauceJubilee Chocolate Fondants",
      "2",
      "Leek, Potato, Pistachio and Gruyère Strudel"
   ],
   [
      "3",
      "6",
      "James",
      "IN",
      "Banana and Clove PuddingsClootie Dumplings",
      "7",
      "Strawberry, Rhubarb and Ginger Strudel"
   ],
   [
      "3",
      "6",
      "John",
      "IN",
      "Spicy Toffee PuddingsRaspberry and White Chocolate Puddings",
      "5",
      "Did not complete due to injury[1]"
   ],
   [
      "3",
      "6",
      "Ryan",
      "IN",
      "Chocolate FondantsSticky Ginger and Date Puddings",
      "6",
      "Apple, Sour Cherry, Raisin and Mixed Nuts Strudel"
   ],
   [
      "3",
      "6",
      "Sarah-Jane",
      "IN",
      "Sticky Toffee PuddingsGranny's Saucy Lemon Puddings",
      "4",
      "Sweet Strudel with Sour Cherries"
   ],
   [
      "3",
      "6",
      "Brendan",
      "STAR BAKER",
      "Rhubarb, Strawberry and Ginger PuddingsSticky Toffee Puddings",
      "1",
      "Spinach, Cheese and Walnut Strudel"
   ],
   [
      "3",
      "6",
      "Manisha",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "6",
      "Natasha",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "6",
      "Peter",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "6",
      "Stuart",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "6",
      "Victoria",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "7",
      "Brendan",
      "IN",
      "Chelsea Bunskis",
      "4",
      "Black Forest Christmas Stollen"
   ],
   [
      "3",
      "7",
      "Cathryn",
      "IN",
      "Lady Arundel's Manchet Buns",
      "5",
      "Bonfire Night Tear 'N' Share Brioche"
   ],
   [
      "3",
      "7",
      "James",
      "IN",
      "Easter Chelsea Buns",
      "1",
      "Whisky Kugelhopf-Brioche Baba"
   ],
   [
      "3",
      "7",
      "John",
      "IN",
      "Cherry and Almond Saffron Buns",
      "3",
      "Marzipan Stollen"
   ],
   [
      "3",
      "7",
      "Ryan",
      "OUT",
      "Lardy Cakes",
      "6",
      "Char Siu Bao"
   ],
   [
      "3",
      "7",
      "Sarah-Jane",
      "OUT",
      "Orange, Nutmeg and Saffron Buns",
      "7",
      "Sour Cherry and Dark Chocolate Christmas Plait"
   ],
   [
      "3",
      "7",
      "Danny",
      "STAR BAKER",
      "Bakewell Chelsea Buns",
      "2",
      "European Christmas Wreath"
   ],
   [
      "3",
      "7",
      "Manisha",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "7",
      "Natasha",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "7",
      "Peter",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "7",
      "Stuart",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "7",
      "Victoria",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "8",
      "Brendan",
      "IN",
      "Multi-Seed Savoury Crackers",
      "2",
      "Fantasy Gingerbread Bird House"
   ],
   [
      "3",
      "8",
      "Danny",
      "IN",
      "Spiced Almond Drinks Crackers",
      "4",
      "Gingerbread Big Ben"
   ],
   [
      "3",
      "8",
      "John",
      "IN",
      "Asian Spice Crackers",
      "3",
      "Gingerbread Roman Coliseum"
   ],
   [
      "3",
      "8",
      "Cathryn",
      "OUT",
      "Cheese and Pickle Crackers",
      "5",
      "Gingerbread Buckingham Palace"
   ],
   [
      "3",
      "8",
      "James",
      "STAR BAKER",
      "Smoky Cayenne, Cumin and Chilli Crackers",
      "1",
      "Gingerbread Barn"
   ],
   [
      "3",
      "8",
      "Manisha",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "8",
      "Natasha",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "8",
      "Peter",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "8",
      "Ryan",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "8",
      "Sarah-Jane",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "8",
      "Stuart",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "8",
      "Victoria",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "9",
      "Brendan",
      "IN",
      "Coffee Meringue and Hazelnut CreamsApricot and Pistachio FriandsLime Curd Choux Pastry Cygnets",
      "3",
      "Gateau St. Honoré"
   ],
   [
      "3",
      "9",
      "John",
      "IN",
      "Lemon MadeleinesWhite Chocolate and Raspberry TartletsDark Chocolate and Cherry Macarons",
      "2",
      "Gateau St. Honoré a la Passion"
   ],
   [
      "3",
      "9",
      "Danny",
      "OUT",
      "Blackberry and Peppermint MacaronsMiniature Raspberry and Basil FinanciersOrange and White Chocolate Langues de Chat",
      "4",
      "Rosewater and Lychee St. Honoré"
   ],
   [
      "3",
      "9",
      "James",
      "STAR BAKER",
      "Lemon and Rhubarb TartletsChocolate Indulgence Petits FoursChilli, Lime and Raspberry Macarons",
      "1",
      "Coffee, Caramel and Hazelnut Paris–Brest"
   ],
   [
      "3",
      "9",
      "Cathryn",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "9",
      "Manisha",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "9",
      "Natasha",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "9",
      "Peter",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "9",
      "Ryan",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "9",
      "Sarah-Jane",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "9",
      "Stuart",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "9",
      "Victoria",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "10",
      "Brendan",
      "Runner-up",
      "Potato and Pepper Pithivier",
      "2",
      "Family Reunion Chiffon Cake"
   ],
   [
      "3",
      "10",
      "James",
      "Runner-up",
      "Spanish Pithivier with Chorizo and Red Pepper",
      "1",
      "United Chiffon Cakes"
   ],
   [
      "3",
      "10",
      "John",
      "WINNER",
      "Italian Sausage and Roasted Vegetable Pithivier",
      "2",
      "Heaven and Hell Chiffon Cake"
   ],
   [
      "3",
      "10",
      "Cathryn",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "10",
      "Danny",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "10",
      "Manisha",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "10",
      "Natasha",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "10",
      "Peter",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "10",
      "Ryan",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "10",
      "Sarah-Jane",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "10",
      "Stuart",
      "",
      "",
      "",
      ""
   ],
   [
      "3",
      "10",
      "Victoria",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "1",
      "Ali",
      "IN",
      "Rose and Pistachio Cake",
      "11",
      "Chocolate, Raspberry and Passion Fruit Engagement Cake"
   ],
   [
      "4",
      "1",
      "Beca",
      "IN",
      "Grapefruit Sandwich Cake",
      "8",
      "Chocolate Cherry Indulgence"
   ],
   [
      "4",
      "1",
      "Christine",
      "IN",
      "Strawberry, Vanilla and Rosewater Summer Basket",
      "3",
      "Chocolate and Orange 'Fripperous' Hat Cake"
   ],
   [
      "4",
      "1",
      "Deborah",
      "IN",
      "Pineapple Cake",
      "9",
      "'Coffee Time'"
   ],
   [
      "4",
      "1",
      "Frances",
      "IN",
      "Giant Jam Sandwich",
      "7",
      "Secret Squirrel Cake"
   ],
   [
      "4",
      "1",
      "Glenn",
      "IN",
      "Strawberries and Cream Cake",
      "4",
      "Almond and Espresso Chocolate Cake"
   ],
   [
      "4",
      "1",
      "Howard",
      "IN",
      "Passion Fruit and Coconut Cake",
      "6",
      "Black Forest Revisited"
   ],
   [
      "4",
      "1",
      "Kimberley",
      "IN",
      "Blood Orange Cake",
      "10",
      "Chocolate, Raspberry & Basil Layer Cake"
   ],
   [
      "4",
      "1",
      "Lucy",
      "IN",
      "Timperley Early Cake",
      "2",
      "Thyme 'Wildwood' Cake"
   ],
   [
      "4",
      "1",
      "Mark",
      "IN",
      "Lemon and Poppy Seed Cake",
      "5",
      "Chocolate Monster"
   ],
   [
      "4",
      "1",
      "Ruby",
      "IN",
      "Rhubarb and Custard Sandwich Cake",
      "12",
      "Chocolate and Ginger Night Sky Cake"
   ],
   [
      "4",
      "1",
      "Toby",
      "OUT",
      "Spiced and Iced Carrot Cake",
      "13",
      "Two Tiered Chocolate Cake"
   ],
   [
      "4",
      "1",
      "Robert",
      "STAR BAKER",
      "Pecan and Apple Cake",
      "1",
      "Raspberry Chocolate Cake"
   ],
   [
      "4",
      "2",
      "Ali",
      "IN",
      "Italian Grissini",
      "9",
      "Sweet and Savoury Yin Yang Bread"
   ],
   [
      "4",
      "2",
      "Beca",
      "IN",
      "Fennel and Chilli Breadsticks",
      "11",
      "Five Strand Christmas Wreath"
   ],
   [
      "4",
      "2",
      "Christine",
      "IN",
      "Mediterranean Breadsticks with Oregano",
      "4",
      "Double Plaited Loaf"
   ],
   [
      "4",
      "2",
      "Deborah",
      "IN",
      "Fennel & Chilli Breadsticks",
      "8",
      "Walnut Fleur Loaf"
   ],
   [
      "4",
      "2",
      "Frances",
      "IN",
      "Giant Matchsticks",
      "2",
      "Sailor's Knot"
   ],
   [
      "4",
      "2",
      "Glenn",
      "IN",
      "Rosemary and Parmesan Grissini",
      "7",
      "Harvest Crown"
   ],
   [
      "4",
      "2",
      "Howard",
      "IN",
      "Moroccan Breadsticks",
      "10",
      "Picasso Sun Bread"
   ],
   [
      "4",
      "2",
      "Kimberley",
      "IN",
      "Nigella Seed and Parmesan Breadsticks",
      "1",
      "Peace Bread"
   ],
   [
      "4",
      "2",
      "Mark",
      "IN",
      "Rosemary & Raisin Breadsticks",
      "6",
      "Sage and Garlic Plait"
   ],
   [
      "4",
      "2",
      "Robert",
      "IN",
      "Twisty Rye Bread Sticks",
      "5",
      "Tribute Loaf"
   ],
   [
      "4",
      "2",
      "Lucy",
      "OUT",
      "Grissini with Salt",
      "12",
      "Roasted Tomato Bread"
   ],
   [
      "4",
      "2",
      "Ruby",
      "STAR BAKER",
      "Mexican Breadsticks",
      "3",
      "White Chocolate and Orange Peacock Bread"
   ],
   [
      "4",
      "2",
      "Toby",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "3",
      "Ali",
      "IN",
      "Coconut, Raspberry and Lemon Meringue Trifle",
      "5",
      "Vanilla Latte Mini CakesLime & Mint Shortbread Pops"
   ],
   [
      "4",
      "3",
      "Beca",
      "IN",
      "Orange and Ginger Trifle",
      "10",
      "Limoncello and Blueberry BurstsMillionaire Shortbread"
   ],
   [
      "4",
      "3",
      "Frances",
      "IN",
      "Apple and Blackberry Crumble Trifle",
      "8",
      "'Ballet Bites' Ginger NutcrackersSugar Plum Fairy Cakes"
   ],
   [
      "4",
      "3",
      "Glenn",
      "IN",
      "Raspberry and Almond Trifle",
      "1",
      "Billionaire BouchéesOrange Financiers"
   ],
   [
      "4",
      "3",
      "Howard",
      "IN",
      "Caramel and Apple Trifle*",
      "7",
      "Black Coffee and Cardamom CakesWhite Stilton and Pear Biscuits"
   ],
   [
      "4",
      "3",
      "Kimberley",
      "IN",
      "Peach, Almond and Ginger Trifle",
      "6",
      "Chocolate Pistachio FinanciersLemon Bergamot Biscuits"
   ],
   [
      "4",
      "3",
      "Robert",
      "IN",
      "Rhubarb and Orange Trifle",
      "2",
      "Almond FriandsTurón Macarons"
   ],
   [
      "4",
      "3",
      "Ruby",
      "IN",
      "Desert Island Trifle",
      "3",
      "Lemon Shortbread and White Chocolate SeashellsBlackberry and Chocolate Layer Cakes"
   ],
   [
      "4",
      "3",
      "Deborah",
      "OUT",
      "Tropical Trifle*",
      "9",
      "Canelé Cherry and Chocolate CakesRose Cookies"
   ],
   [
      "4",
      "3",
      "Mark",
      "OUT",
      "Ginger, Mango and Passion Fruit Trifle",
      "11",
      "Rose and Pistachio MacaronsChocolate and Raspberry Bites"
   ],
   [
      "4",
      "3",
      "Christine",
      "STAR BAKER",
      "Caribbean Pina Colada Trifle",
      "4",
      "Ninety-NinersSachertorte Parcels"
   ],
   [
      "4",
      "3",
      "Lucy",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "3",
      "Toby",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "4",
      "Beca",
      "IN",
      "Mamgu's Cherry-Apple Tart",
      "2",
      "Moroccan Vegetable Filo Feast"
   ],
   [
      "4",
      "4",
      "Christine",
      "IN",
      "Granny Rogers' Apple, Plum & Cinnamon Country Pie",
      "7",
      "Roasted Vegetable Filo Pie with Feta Cheese"
   ],
   [
      "4",
      "4",
      "Frances",
      "IN",
      "Peach Pie In the Sky",
      "1",
      "Cherry Tree Baklava Filo Pie"
   ],
   [
      "4",
      "4",
      "Glenn",
      "IN",
      "Apple & Maple Syrup Pie",
      "9",
      "Spanakopita"
   ],
   [
      "4",
      "4",
      "Howard",
      "IN",
      "Apple Pie with Sage Pastry",
      "5",
      "Fresh Fig and Feta Filo Flan"
   ],
   [
      "4",
      "4",
      "Robert",
      "IN",
      "Apple and Pear Pie with Thyme",
      "3",
      "Spanakopita with St George's Mushrooms"
   ],
   [
      "4",
      "4",
      "Ruby",
      "IN",
      "Apple and Marzipan Pie",
      "6",
      "Rose, Almond and Raspberry Filo Pie"
   ],
   [
      "4",
      "4",
      "Ali",
      "OUT",
      "Apple and Ginger Pie with a Pecan and Walnut Shortcrust Pastry",
      "8",
      "Orange, Cardamom and Date M'Hanncha"
   ],
   [
      "4",
      "4",
      "Kimberley",
      "STAR BAKER",
      "Pecan and Rosemary Caramel Apple Pie",
      "4",
      "Chicken, Bacon and Butternut Squash Pie"
   ],
   [
      "4",
      "4",
      "Deborah",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "4",
      "Lucy",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "4",
      "Mark",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "4",
      "Toby",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "5",
      "Beca",
      "IN",
      "Chocolate, Cherry and Hazelnut Brownies",
      "5",
      "Tiered Macaron and Sugar Dough Biscuit Centrepiece"
   ],
   [
      "4",
      "5",
      "Frances",
      "IN",
      "Millionaire Banoffee Bonus",
      "3",
      "Biscuit Buttons and Beads"
   ],
   [
      "4",
      "5",
      "Glenn",
      "IN",
      "Apricot and Pistachio Tiffin",
      "2",
      "Shortbread and Macaron Helter-Skelter"
   ],
   [
      "4",
      "5",
      "Howard",
      "IN",
      "Breakfast Traybake",
      "8",
      "Japanese Pagoda Tea Tower"
   ],
   [
      "4",
      "5",
      "Kimberley",
      "IN",
      "Cherry and Almond Bakewell Florentine Slice",
      "7",
      "Black and White Viennese Biscuit Stack"
   ],
   [
      "4",
      "5",
      "Ruby",
      "IN",
      "Blackberry and Lemon Bakewell Slice",
      "6",
      "'Dropped Ice-Cream' Biscuit Centrepiece"
   ],
   [
      "4",
      "5",
      "Robert",
      "OUT",
      "Blueberry & Orange Traybake",
      "4",
      "Dalek"
   ],
   [
      "4",
      "5",
      "Christine",
      "STAR BAKER",
      "Mixed Berry and Almond Crumble Traybake",
      "1",
      "Shortbread Bavarian Clock Tower"
   ],
   [
      "4",
      "5",
      "Ali",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "5",
      "Deborah",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "5",
      "Lucy",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "5",
      "Mark",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "5",
      "Toby",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "6",
      "Beca",
      "IN",
      "Bara Brith",
      "6",
      "Chocolate and Rum-Soaked Prune BriochesCardamom Spiced Lemon Iced Buns"
   ],
   [
      "4",
      "6",
      "Christine",
      "IN",
      "Oxford Nutty Fruit Loaf",
      "4",
      "Schnecken BunsVanilla Custard Skolebrød"
   ],
   [
      "4",
      "6",
      "Frances",
      "IN",
      "Chai Tea Loaf",
      "2",
      "Hot Cross BriochesRhubarb and Custard Kolaches"
   ],
   [
      "4",
      "6",
      "Glenn",
      "IN",
      "Devonshire Panettone",
      "5",
      "Almond and Apricot BriochesSticky Caramel Kanelbullen"
   ],
   [
      "4",
      "6",
      "Kimberley",
      "IN",
      "Chai Spiced Ginger and Date Tea Loaf",
      "3",
      "Double Chocolate and Hazelnut BriochesDanish Kanelsnurrer"
   ],
   [
      "4",
      "6",
      "Howard",
      "OUT",
      "Date & Hemp Yorkshire Loaf",
      "7",
      "Peachy BunsGerman Baumschnecken"
   ],
   [
      "4",
      "6",
      "Ruby",
      "STAR BAKER",
      "Citrus Tea Loaf",
      "1",
      "Twisted Swedish KanelbullarSaffron St. Lucia Buns"
   ],
   [
      "4",
      "6",
      "Ali",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "6",
      "Deborah",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "6",
      "Lucy",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "6",
      "Mark",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "6",
      "Robert",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "6",
      "Toby",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "7",
      "Beca",
      "IN",
      "Spring Lamb and Vegetable Suet Puddingwith Redcurrant Gravy",
      "1",
      "Nectarine and Frangipane SquaresChocolate and Hazelnut Vol-au-ventsStrawberries and Cream Mille-feuille"
   ],
   [
      "4",
      "7",
      "Christine",
      "IN",
      "Spotted Dick 'With a Kick'and Vanilla Custard Ice Cream",
      "6",
      "Eccles CakesFresh Fruit BasketsLemon Cream Eton Mess Mille-feuille"
   ],
   [
      "4",
      "7",
      "Kimberley",
      "IN",
      "Barberry and Apple Spotted Dickwith Maple Syrup and White Chocolate Custard",
      "4",
      "Pear, Malt and Butterscotch Mille-feuilleBlackberry and Lemon Verbena Crème Brûle Custard TartsFig, Orange and Thyme Galette"
   ],
   [
      "4",
      "7",
      "Ruby",
      "IN",
      "Plum Jam Roly-Polywith Ginger Ice cream",
      "2",
      "Raspberry and Passion Fruit Mille-feuilleCaramelised Apple LatticePortuguese Custard Tarts"
   ],
   [
      "4",
      "7",
      "Glenn",
      "OUT",
      "Prune and Armagnac Puddingwith Boozy Butterscotch Sauce",
      "3",
      "Caramelised Apple and Marzipan TartletsChocolate Elephant EarsPassion Fruit Mille-feuille"
   ],
   [
      "4",
      "7",
      "Frances",
      "STAR BAKER",
      "Figgy Roll-y Poly Puddingwith Caramelised Walnut and Honey Ice-Cream",
      "5",
      "French Framboise Cream HornsSheet Music Mille-feuilleBass Clef Palmiers"
   ],
   [
      "4",
      "7",
      "Ali",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "7",
      "Deborah",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "7",
      "Howard",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "7",
      "Lucy",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "7",
      "Mark",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "7",
      "Robert",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "7",
      "Toby",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "8",
      "Beca",
      "IN",
      "Potato, Spelt and Rosemary Focaccia",
      "4",
      "Spiced Butternut Squash and Pecan 'Cheese' Cake"
   ],
   [
      "4",
      "8",
      "Frances",
      "IN",
      "'Chelsea Flour Show' Bun Bouquet",
      "3",
      "Hidden Carrot Cake"
   ],
   [
      "4",
      "8",
      "Kimberley",
      "IN",
      "Wild Garlic Pesto and Parma Ham Spelt Loaf",
      "2",
      "Butternut Squash and Spice Cake Toadstool House"
   ],
   [
      "4",
      "8",
      "Christine",
      "OUT",
      "Multi-Seeded Loaf with Pumpkin, Sesame and Sunflower Seeds",
      "5",
      "Sweet Potato Guitar with Passion Fruit Icing and Marshmallow Fondant"
   ],
   [
      "4",
      "8",
      "Ruby",
      "STAR BAKER",
      "Mango and Nigella Seed Spelt Cob",
      "1",
      "Carrot Cake and Pistachio Garden Plot"
   ],
   [
      "4",
      "8",
      "Ali",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "8",
      "Deborah",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "8",
      "Glenn",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "8",
      "Howard",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "8",
      "Lucy",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "8",
      "Mark",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "8",
      "Robert",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "8",
      "Toby",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "9",
      "Frances",
      "IN",
      "Légume Canapés (Chantenay Carrots, Choux Pastry Tomatoes, and Cauliflower Cheese Scones)",
      "2",
      "Great British Soap Opera Cake"
   ],
   [
      "4",
      "9",
      "Ruby",
      "IN",
      "Beetroot Jelly on Poppy Seed BiscuitsSpinach, Parmesan and Egg TartletsChoux Buns with Goat's Cheese and Caramelised Onions",
      "4",
      "Chocolate, Almond Praline and Saffron Opera Cake"
   ],
   [
      "4",
      "9",
      "Beca",
      "OUT",
      "Stilton and Walnut MacaronsBeetroot and Salmon Choux PuffsWelsh Rarebit Tartlets",
      "3",
      "Banoffee Opera Cake"
   ],
   [
      "4",
      "9",
      "Kimberley",
      "STAR BAKER",
      "Pea Purée TartsCrab and Wasabi ProfiterolesSteamed Buns with Barbecue Chicken",
      "1",
      "Passion Fruit and Lime Opera Cake"
   ],
   [
      "4",
      "9",
      "Ali",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "9",
      "Christine",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "9",
      "Deborah",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "9",
      "Glenn",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "9",
      "Howard",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "9",
      "Lucy",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "9",
      "Mark",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "9",
      "Robert",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "9",
      "Toby",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "10",
      "Kimberley",
      "Runner-up",
      "Chicken and Pig Pie",
      "1",
      "Languages of Love Wedding Cake"
   ],
   [
      "4",
      "10",
      "Ruby",
      "Runner-up",
      "Picnic Basket Pie",
      "2",
      "Raspberry, Lemon and Passion Fruit Wedding Cake"
   ],
   [
      "4",
      "10",
      "Frances",
      "WINNER",
      "Rainbow Picnic Pie",
      "3",
      "Midsummer Night's Dream Wedding Cake"
   ],
   [
      "4",
      "10",
      "Ali",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "10",
      "Beca",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "10",
      "Christine",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "10",
      "Deborah",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "10",
      "Glenn",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "10",
      "Howard",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "10",
      "Lucy",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "10",
      "Mark",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "10",
      "Robert",
      "",
      "",
      "",
      ""
   ],
   [
      "4",
      "10",
      "Toby",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "1",
      "Chetna",
      "IN",
      "Cardamom, Pistachio and Coffee Swiss Roll",
      "3",
      "Tiered Victoria Sponges with Lemon Curd and Raspberry Cream"
   ],
   [
      "5",
      "1",
      "Diana",
      "IN",
      "Mum's Sunday Tea Lemon Curd Swiss Roll",
      "5",
      "Chocolate Ganache Surprises"
   ],
   [
      "5",
      "1",
      "Enwezor",
      "IN",
      "Raspberry and Lemon Swiss Roll",
      "9",
      "Coffee and Walnut Battenberg Squares"
   ],
   [
      "5",
      "1",
      "Iain",
      "IN",
      "Apricot and Basil Swiss Roll with Mascarpone and White Chocolate Cream",
      "4",
      "Lemon Drizzle Cakes with Mascarpone Filling, Drizzled Icing, and Candied Lemon"
   ],
   [
      "5",
      "1",
      "Jordan",
      "IN",
      "Kawaii Frasier Swiss Roll",
      "12",
      "Lemon Drizzle Cakes with Blueberry and Lemon Curd"
   ],
   [
      "5",
      "1",
      "Kate",
      "IN",
      "Red Velvet and White Chocolate Swiss Roll",
      "6",
      "Mini Tiered Victoria Sponges"
   ],
   [
      "5",
      "1",
      "Luis",
      "IN",
      "Spanish Swiss Roll",
      "7",
      "Raspberry and Lemon Genoise Slices with Lemon Drizzles"
   ],
   [
      "5",
      "1",
      "Martha",
      "IN",
      "Tiramisu Swiss Roll",
      "2",
      "Mini Lemon and Thyme Drizzle Cakes"
   ],
   [
      "5",
      "1",
      "Norman",
      "IN",
      "Black Forest Swiss Roll",
      "11",
      "Almond and Raspberry Mini Cakes"
   ],
   [
      "5",
      "1",
      "Richard",
      "IN",
      "Pistachio and Strawberry Swiss Roll",
      "10",
      "Miniature Coffee and Walnut Cakes"
   ],
   [
      "5",
      "1",
      "Claire",
      "OUT",
      "Chocolatey Orangey Swirly Roll",
      "8",
      "Mini Chocolate and Cherry Cakes"
   ],
   [
      "5",
      "1",
      "Nancy",
      "STAR BAKER",
      "Coffee and Hazelnut Swiss Roll",
      "1",
      "Jaffa Orange Cakes"
   ],
   [
      "5",
      "2",
      "Chetna",
      "IN",
      "Fenugreek and Carom Crackers",
      "8",
      "Day On The Beach"
   ],
   [
      "5",
      "2",
      "Diana",
      "IN",
      "Parmesan Triangles",
      "7",
      "Express, First Class"
   ],
   [
      "5",
      "2",
      "Iain",
      "IN",
      "Za'atar and Fig Biscuits",
      "11",
      "Wild West Scene"
   ],
   [
      "5",
      "2",
      "Jordan",
      "IN",
      "Sourdough, Parmesan and Chilli Biscuits",
      "6",
      "Monster Attack"
   ],
   [
      "5",
      "2",
      "Kate",
      "IN",
      "Parmesan and Apple Biscuits",
      "4",
      "Tea Time"
   ],
   [
      "5",
      "2",
      "Luis",
      "IN",
      "Black Olive and Rosemary Biscuits with Caramelised Onion Glaze",
      "3",
      "George Versus The Dragon"
   ],
   [
      "5",
      "2",
      "Martha",
      "IN",
      "Caramelised Onion and Goat's Cheese Sandwich Biscuits",
      "5",
      "Ski Village Scene"
   ],
   [
      "5",
      "2",
      "Nancy",
      "IN",
      "Fennel and Rye Thins",
      "2",
      "Hansel and Gretel Scene"
   ],
   [
      "5",
      "2",
      "Norman",
      "IN",
      "Farthing Biscuits",
      "10",
      "Zulu Boats at Dawn"
   ],
   [
      "5",
      "2",
      "Enwezor",
      "OUT",
      "Pumpkin and Sunflower Savoury Biscuits",
      "9",
      "Space Adventure Moon Scene"
   ],
   [
      "5",
      "2",
      "Richard",
      "STAR BAKER",
      "Rosemary Seeded Crackers",
      "1",
      "Pirates!"
   ],
   [
      "5",
      "2",
      "Claire",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "3",
      "Chetna",
      "IN",
      "Onion and Pine Nut Rolls",
      "8",
      "Rolled and Filled Twin Loaf"
   ],
   [
      "5",
      "3",
      "Diana",
      "IN",
      "Rustic Picnic Rolls",
      "7",
      "Sharing Savoury Pinwheel"
   ],
   [
      "5",
      "3",
      "Iain",
      "IN",
      "Cranberry and Walnut Rye Bread Rolls",
      "9",
      "Moroccan Plaited with a Bessara Dip"
   ],
   [
      "5",
      "3",
      "Kate",
      "IN",
      "Orange and Cardamom Rye Bread Knots",
      "1",
      "Prosciutto, Olive & Coriander Bread"
   ],
   [
      "5",
      "3",
      "Martha",
      "IN",
      "Date and Walnut Rye Rolls",
      "3",
      "Stuffed Sunflower Loaf"
   ],
   [
      "5",
      "3",
      "Nancy",
      "IN",
      "Cider and Walnut Crusty Rolls",
      "5",
      "'Full English' Stromboli"
   ],
   [
      "5",
      "3",
      "Norman",
      "IN",
      "Rye Bread Rolls",
      "4",
      "Chicken and Roasted Vegetable Picnic Loaf"
   ],
   [
      "5",
      "3",
      "Richard",
      "IN",
      "Rye and Cranberry Rolls",
      "6",
      "Pesto Pinwheel"
   ],
   [
      "5",
      "3",
      "Jordan",
      "OUT",
      "Rye and Spelt Bread Rolls",
      "10",
      "Strawberry Raspberry Cheesecake Brioche"
   ],
   [
      "5",
      "3",
      "Luis",
      "STAR BAKER",
      "Opposites Attract Rolls",
      "2",
      "Roscón de Reyes"
   ],
   [
      "5",
      "3",
      "Claire",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "3",
      "Enwezor",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "4",
      "Chetna",
      "IN",
      "Rhubarb, Strawberry and Orange Puddings",
      "3",
      "Mango, Raspberry and Coconut Baked Alaska"
   ],
   [
      "5",
      "4",
      "Diana",
      "IN",
      "Orange and Lemon Curd Pots",
      "9",
      "Raspberry Ripple Alaska Swan"
   ],
   [
      "5",
      "4",
      "Kate",
      "IN",
      "Chocolate and Salted Caramel Molten Puddings",
      "7",
      "Pistachio, Raspberry and Chocolate Baked Alaska"
   ],
   [
      "5",
      "4",
      "Luis",
      "IN",
      "Pears in Puddings",
      "2",
      "Bakewell Alaska"
   ],
   [
      "5",
      "4",
      "Martha",
      "IN",
      "Peanut Butter Chocolate Fondants",
      "1",
      "Key Lime Baked Alaska"
   ],
   [
      "5",
      "4",
      "Nancy",
      "IN",
      "Pistachio Puddings with Chocolate Sauce",
      "4",
      "Summer Pudding Alaska"
   ],
   [
      "5",
      "4",
      "Norman",
      "IN",
      "Mini Sticky Toffee Puddings",
      "8",
      "Baked Alaska with Strawberry Surprise"
   ],
   [
      "5",
      "4",
      "Iain",
      "OUT",
      "Chocolate, Lime and Raspberry Fondants",
      "6",
      "Chocolate, Black Sesame Seed and Coffee Caramel Baked Alaska (not presented)"
   ],
   [
      "5",
      "4",
      "Richard",
      "STAR BAKER",
      "Black Forest Chocolate Fondants",
      "5",
      "Tiramisu Baked Alaska"
   ],
   [
      "5",
      "4",
      "Claire",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "4",
      "Enwezor",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "4",
      "Jordan",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "5",
      "Chetna",
      "IN",
      "Rice Custard Tart with Mangoes and Raspberries",
      "2",
      "Fusion Tiered Pies"
   ],
   [
      "5",
      "5",
      "Luis",
      "IN",
      "Tropical Manchester Tart",
      "6",
      "Four Fruity Seasons Tower"
   ],
   [
      "5",
      "5",
      "Martha",
      "IN",
      "Pistachio, Apricot and Honey Custard Tart",
      "1",
      "Three Little Pigs Pie"
   ],
   [
      "5",
      "5",
      "Nancy",
      "IN",
      "Chocolate Crusted Passion Fruit Tart",
      "4",
      "Trio of Apple Pies"
   ],
   [
      "5",
      "5",
      "Richard",
      "IN",
      "Fig and Orange Tart",
      "7",
      "Three Course Autumn Pie Feast"
   ],
   [
      "5",
      "5",
      "Norman",
      "OUT",
      "Tarte au Citron",
      "5",
      "Pieful Tower"
   ],
   [
      "5",
      "5",
      "Kate",
      "STAR BAKER",
      "Rhubarb and Custard Tart",
      "3",
      "Rhubarb, Prune and Apple Pies"
   ],
   [
      "5",
      "5",
      "Diana",
      "WD",
      "",
      "",
      ""
   ],
   [
      "5",
      "5",
      "Claire",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "5",
      "Enwezor",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "5",
      "Iain",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "5",
      "Jordan",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "6",
      "Diana",
      "IN",
      "",
      "",
      ""
   ],
   [
      "5",
      "6",
      "Kate",
      "IN",
      "Pecan, Chocolate and Sour Cherry Yeast Cake",
      "6",
      "Trio of Dobos Tortes"
   ],
   [
      "5",
      "6",
      "Luis",
      "IN",
      "Apple and Cinnamon Kugelhopf with Honeyed Apples",
      "3",
      "The Cage on the Rocky Hill"
   ],
   [
      "5",
      "6",
      "Martha",
      "IN",
      "Dark Chocolate and Almond Liqueur Savarin",
      "4",
      "Chess-Themed Chocolate and Salted Caramel Dobos Torte"
   ],
   [
      "5",
      "6",
      "Nancy",
      "IN",
      "Rum Punch Savarin with Coconut Cream and Tropical Fruits",
      "1",
      "Chocolate and Caramel Dobos Torte"
   ],
   [
      "5",
      "6",
      "Richard",
      "IN",
      "Fruity Guglhupf with an Orange Glaze",
      "5",
      "Sugar Forest Dobos Torte"
   ],
   [
      "5",
      "6",
      "Chetna",
      "STAR BAKER",
      "Orange Savarin with Cinnamon Cream",
      "2",
      "Almond Liqueur Dobos Torte with Chocolate Caramel Buttercream"
   ],
   [
      "5",
      "6",
      "Claire",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "6",
      "Enwezor",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "6",
      "Iain",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "6",
      "Jordan",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "6",
      "Norman",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "7",
      "Chetna",
      "IN",
      "Crispy Lentil Kachori",
      "6",
      "Chocolate & Mango and Lemon Meringue Éclairs"
   ],
   [
      "5",
      "7",
      "Diana",
      "IN",
      "",
      "",
      ""
   ],
   [
      "5",
      "7",
      "Luis",
      "IN",
      "Childhood Empanadas",
      "5",
      "Stars and Stripes Éclairs"
   ],
   [
      "5",
      "7",
      "Martha",
      "IN",
      "Mini Beef Wellingtons",
      "3",
      "Rhubarb & Custard and Maple Syrup & Bacon Éclairs"
   ],
   [
      "5",
      "7",
      "Nancy",
      "IN",
      "Spicy Duck Pasties",
      "2",
      "Smoked Salmon & Horseradish and Raspberry Ripple Éclairs"
   ],
   [
      "5",
      "7",
      "Kate",
      "OUT",
      "Spinach and Paneer Spicy Samosa",
      "4",
      "Neapolitan and Lemon Meringue Éclairs"
   ],
   [
      "5",
      "7",
      "Richard",
      "STAR BAKER",
      "Minted Lamb Pasties",
      "1",
      "Stair of Éclairs: Blueberry & Lavender and Raspberry & Rose"
   ],
   [
      "5",
      "7",
      "Claire",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "7",
      "Enwezor",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "7",
      "Iain",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "7",
      "Jordan",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "7",
      "Norman",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "8",
      "Chetna",
      "IN",
      "Date and Walnut Swirl Bread",
      "1",
      "Chocolate Mousse Filled DoughnutsBraided Doughnuts"
   ],
   [
      "5",
      "8",
      "Diana",
      "IN",
      "",
      "",
      ""
   ],
   [
      "5",
      "8",
      "Luis",
      "IN",
      "Black Forest Cherry Tree",
      "2",
      "Cocktail Doughnuts"
   ],
   [
      "5",
      "8",
      "Nancy",
      "IN",
      "Lincolnshire Plum Braid",
      "3",
      "Doughnut Family Tree"
   ],
   [
      "5",
      "8",
      "Martha",
      "OUT",
      "Spiced Plum Iced Bread Swirl",
      "5",
      "Glazed Lemon & Poppyseed DoughnutsChocolate & Passion Fruit Doughnuts"
   ],
   [
      "5",
      "8",
      "Richard",
      "STAR BAKER",
      "Fruit Swedish Tea Ring",
      "4",
      "Rhubarb and CustardToffee Apple Doughnuts"
   ],
   [
      "5",
      "8",
      "Claire",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "8",
      "Enwezor",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "8",
      "Iain",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "8",
      "Jordan",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "8",
      "Kate",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "8",
      "Norman",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "9",
      "Diana",
      "IN",
      "",
      "",
      ""
   ],
   [
      "5",
      "9",
      "Luis",
      "IN",
      "Indian Rose BaklavaHalwa Baklava Rolls",
      "1",
      "Chocolate Mousse & Cherry EntremetsPomegranate, Fig & Pistachio Sponges"
   ],
   [
      "5",
      "9",
      "Nancy",
      "IN",
      "Coffee and Chocolate BaklavaBreakfast Baklava",
      "3",
      "Raspberry NonnettesLime and Passion Fruit Entremets"
   ],
   [
      "5",
      "9",
      "Chetna",
      "OUT",
      "Chocolate Orange Baklava Masala Chai Baklava",
      "4",
      "Chocolate, Orange & Nut EntremetsCappuccino Entremets"
   ],
   [
      "5",
      "9",
      "Richard",
      "STAR BAKER",
      "Rose and Pistachio BaklavaWalnut and Almond Baklava",
      "2",
      "Hazelnut Mocha EntremetsPink Grapefruit Entremets"
   ],
   [
      "5",
      "9",
      "Claire",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "9",
      "Enwezor",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "9",
      "Iain",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "9",
      "Jordan",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "9",
      "Kate",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "9",
      "Martha",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "9",
      "Norman",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "10",
      "Diana",
      "IN",
      "",
      "",
      ""
   ],
   [
      "5",
      "10",
      "Luis",
      "Runner-up",
      "Apple, Walnut, Raisin and Cheshire Cheese ChaussonsPain au Chocolat Blanc with Raspberries and Cream Cheese",
      "2",
      "Village in Chocolate"
   ],
   [
      "5",
      "10",
      "Richard",
      "Runner-up",
      "Pear Pain au ChocolatPain Au Lait",
      "3",
      "Mill on the Hill"
   ],
   [
      "5",
      "10",
      "Nancy",
      "WINNER",
      "Apple and Lemon KitesRaspberry and Almond Croissants",
      "1",
      "Red Windmill"
   ],
   [
      "5",
      "10",
      "Chetna",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "10",
      "Claire",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "10",
      "Enwezor",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "10",
      "Iain",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "10",
      "Jordan",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "10",
      "Kate",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "10",
      "Martha",
      "",
      "",
      "",
      ""
   ],
   [
      "5",
      "10",
      "Norman",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "1",
      "Alvin",
      "IN",
      "Orange Vanilla and Fig Madeira Cake",
      "2",
      "Black Forest Gâteau"
   ],
   [
      "6",
      "1",
      "Dorret",
      "IN",
      "Madeira Cake with Candied Lemons",
      "5",
      "Enchanted Forest Gâteau"
   ],
   [
      "6",
      "1",
      "Flora",
      "IN",
      "Blood Orange Madeira Cake",
      "6",
      "Black Forest Gâteau"
   ],
   [
      "6",
      "1",
      "Ian",
      "IN",
      "Somewhere West of Madeira Cake",
      "8",
      "Black Forest Cherry Tree"
   ],
   [
      "6",
      "1",
      "Mat",
      "IN",
      "Gin and Tonic Madeira Cake",
      "7",
      "Black Forest Gateau"
   ],
   [
      "6",
      "1",
      "Nadiya",
      "IN",
      "Orange and Green Cardamom Madeira Cake",
      "12",
      "Quadruple Chocolate Black Forest Gâteau"
   ],
   [
      "6",
      "1",
      "Paul",
      "IN",
      "Lemon, Ginger and Caraway Seed Madeira Cake",
      "10",
      "Black Forest Chocolate Creation"
   ],
   [
      "6",
      "1",
      "Sandy",
      "IN",
      "Madeira Cake with Almond Liqueur and Chopped Apricots",
      "9",
      "Black Forest Gâteau"
   ],
   [
      "6",
      "1",
      "Tamal",
      "IN",
      "Pistachio and Rose Madeira Cake",
      "4",
      "Black Forest Gâteau in a Chocolate Shell"
   ],
   [
      "6",
      "1",
      "Ugnė",
      "IN",
      "Lemon and Thyme Madeira Cake",
      "1",
      "Falling Cup Gâteau"
   ],
   [
      "6",
      "1",
      "Stu",
      "OUT",
      "Marley Madeira Cake",
      "11",
      "Purple Forest Gâteau"
   ],
   [
      "6",
      "1",
      "Marie",
      "STAR BAKER",
      "Zingy Citrus Madeira Cake",
      "3",
      "A Walk in the Black Forest"
   ],
   [
      "6",
      "2",
      "Alvin",
      "IN",
      "Jackfruit, Pistachio and Macadamia Biscotti",
      "6",
      "Gingerbread Box filled with Brandy Snaps"
   ],
   [
      "6",
      "2",
      "Dorret",
      "IN",
      "Almond and Apricot Biscotti with Amber Sugar Crystals",
      "1",
      "Box of Frogs"
   ],
   [
      "6",
      "2",
      "Flora",
      "IN",
      "Wedding Biscotti",
      "2",
      "Honey and Earl Grey Tea Box"
   ],
   [
      "6",
      "2",
      "Mat",
      "IN",
      "Pistachio, Cranberry and White Chocolate Biscotti",
      "5",
      "Gingerbread Fire Engine"
   ],
   [
      "6",
      "2",
      "Nadiya",
      "IN",
      "Coconut, Fennel and Pistachio Biscotti",
      "9",
      "Box of Fortunes"
   ],
   [
      "6",
      "2",
      "Paul",
      "IN",
      "Chocolate, Hazelnut and Fig Biscotti",
      "10",
      "Memory Box"
   ],
   [
      "6",
      "2",
      "Sandy",
      "IN",
      "Chocolate Chunk and Hazelnut Biscotti",
      "4",
      "Sundried Tomato Cheese Biscuit Box"
   ],
   [
      "6",
      "2",
      "Tamal",
      "IN",
      "Cinnamon, Maple and Cranberry Biscotti",
      "8",
      "Chessboard Box"
   ],
   [
      "6",
      "2",
      "Ugnė",
      "IN",
      "White Wine Biscotti",
      "7",
      "Baby Climbing into the Cookie Box"
   ],
   [
      "6",
      "2",
      "Marie",
      "OUT",
      "Biscotti Italiano",
      "11",
      "Russian Box"
   ],
   [
      "6",
      "2",
      "Ian",
      "STAR BAKER",
      "Orange, Rosemary and Almond Biscotti",
      "3",
      "Sandwich de la Confiture"
   ],
   [
      "6",
      "2",
      "Stu",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "3",
      "Alvin",
      "IN",
      "Prosciutto, Manchego and Balsamic Onion Soda Breads",
      "4",
      "Cornucopia"
   ],
   [
      "6",
      "3",
      "Flora",
      "IN",
      "Fig and Hazelnut Rye Breads",
      "2",
      "Herb Couture"
   ],
   [
      "6",
      "3",
      "Mat",
      "IN",
      "Jalapeño, Mexican Cheddar and Smoked Salt Soda Breads",
      "8",
      "Curry Inspired Brighton Pavilion"
   ],
   [
      "6",
      "3",
      "Nadiya",
      "IN",
      "Mexican Bread with Warm Tomato Salsa",
      "9",
      "Snake Charmer's Basket"
   ],
   [
      "6",
      "3",
      "Paul",
      "IN",
      "Cranberry and Orange Sweet Soda Breads",
      "10",
      "King of the Jungle*"
   ],
   [
      "6",
      "3",
      "Sandy",
      "IN",
      "Soda Breads with Smoked Bacon and Onion",
      "7",
      "Basket of Bread Flowers with a Walnut and Blue Cheese Centre"
   ],
   [
      "6",
      "3",
      "Tamal",
      "IN",
      "Fig, Cheese and Walnut Breads",
      "3",
      "Breadcycle"
   ],
   [
      "6",
      "3",
      "Ugnė",
      "IN",
      "Chocolate Quick Breads with Salted Caramel Sauce",
      "5",
      "Easter Basket"
   ],
   [
      "6",
      "3",
      "Dorret",
      "OUT",
      "Walnut and Stilton Soda Breads",
      "6",
      "Unmade Bread"
   ],
   [
      "6",
      "3",
      "Ian",
      "STAR BAKER",
      "Wild Garlic Pesto Soda Breads",
      "1",
      "Flour Power"
   ],
   [
      "6",
      "3",
      "Marie",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "3",
      "Stu",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "4",
      "Alvin",
      "IN",
      "Blackberry Crème Brûlées",
      "9",
      "Tower of Fruits Cheesecakes"
   ],
   [
      "6",
      "4",
      "Flora",
      "IN",
      "Rhubarb and Ginger Crème Brûlées",
      "3",
      "Elderflower and Granola Cheesecakes"
   ],
   [
      "6",
      "4",
      "Mat",
      "IN",
      "Coconut Crème Brûlées",
      "7",
      "Chocolate Bar Cheesecakes"
   ],
   [
      "6",
      "4",
      "Nadiya",
      "IN",
      "Cinnamon Tea Crème Brûlées",
      "8",
      "Fizzy Pop Cheesecakes"
   ],
   [
      "6",
      "4",
      "Paul",
      "IN",
      "Almond Crème Brûlées",
      "1",
      "Berry Cheesecake Tower"
   ],
   [
      "6",
      "4",
      "Tamal",
      "IN",
      "Rhubarb and Ginger Crème Brûlées",
      "5",
      "Mango, Hazelnut and Rosemary Cheesecake Trio"
   ],
   [
      "6",
      "4",
      "Ugnė",
      "IN",
      "Marula Fruit and Coffee Liqueur Crème Brûlées",
      "2",
      "Lime, Coconut and Hazelnut Cheesecakes"
   ],
   [
      "6",
      "4",
      "Sandy",
      "OUT",
      "Pontefract Crème Brûlées",
      "6",
      "Cassata, Whisky and Orange & Apple Pie Cheesecakes"
   ],
   [
      "6",
      "4",
      "Ian",
      "STAR BAKER",
      "Pomegranate Two Ways Crème Brûlées",
      "4",
      "Trio of Spicy and Herby Baked Cheesecakes"
   ],
   [
      "6",
      "4",
      "Dorret",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "4",
      "Marie",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "4",
      "Stu",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "5",
      "Alvin",
      "IN",
      "Pineapple Upside Down Cake",
      "8",
      "Buko Pandan, Mango and Passion Fruit Ice Cream Roll"
   ],
   [
      "6",
      "5",
      "Flora",
      "IN",
      "Pistachio, Apple and Cardamom Madeleine Cake",
      "3",
      "Chocolate and Pear Bûche"
   ],
   [
      "6",
      "5",
      "Ian",
      "IN",
      "Honey and Flowers Cake",
      "5",
      "Dessert Island"
   ],
   [
      "6",
      "5",
      "Mat",
      "IN",
      "Sugar Free Carrot Cake",
      "4",
      "Raspberry & Coconut Ice Cream Roll"
   ],
   [
      "6",
      "5",
      "Paul",
      "IN",
      "Carrot & Pecan Cake",
      "2",
      "Dessert Island Getaway"
   ],
   [
      "6",
      "5",
      "Tamal",
      "IN",
      "Honey and Grapefruit Polenta Cake",
      "7",
      "Passion Fruit and Pineapple Ice Cream Roll"
   ],
   [
      "6",
      "5",
      "Ugnė",
      "OUT",
      "Chocolate and Hazelnut Sugar-Free Cake",
      "6",
      "Chocolate, Peanut Butter and Grape Jam Roll"
   ],
   [
      "6",
      "5",
      "Nadiya",
      "STAR BAKER",
      "Naked Blueberry and Caraway Crunch Cake",
      "1",
      "Chocolate and Strawberry Lime Ice Cream Roll"
   ],
   [
      "6",
      "5",
      "Dorret",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "5",
      "Marie",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "5",
      "Sandy",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "5",
      "Stu",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "6",
      "Flora",
      "IN",
      "Apricot and Rosemary Frangipane Tart",
      "2",
      "Asparagus and Parma Ham and Praline and Chocolate Vol-au-vents"
   ],
   [
      "6",
      "6",
      "Ian",
      "IN",
      "Pear and Raspberry Frangipane Tart",
      "3",
      "vol-au-vents Terre et Mer"
   ],
   [
      "6",
      "6",
      "Nadiya",
      "IN",
      "Bay Leaf, Rong Tea and Pear Tart",
      "4",
      "Bengali Korma and Clementine with Cod Vol-au-vents"
   ],
   [
      "6",
      "6",
      "Paul",
      "IN",
      "Christmas Frangipane Tart",
      "5",
      "Savoury and Sweet Bouchées"
   ],
   [
      "6",
      "6",
      "Tamal",
      "IN",
      "Spiced Pear Frangipane Tart",
      "7",
      "Fennel and Rosemary Pulled Pork and Chicken and Coriander vol-au-vents"
   ],
   [
      "6",
      "6",
      "Alvin",
      "OUT",
      "Plum Frangipane Tart",
      "6",
      "Smoked Salmon En Croûte and Vermouth Chicken à la King Vol-au-vents"
   ],
   [
      "6",
      "6",
      "Mat",
      "STAR BAKER",
      "Piña Colada Frangipane Tart",
      "1",
      "His 'n' Hers Vol-au-vents"
   ],
   [
      "6",
      "6",
      "Dorret",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "6",
      "Marie",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "6",
      "Sandy",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "6",
      "Stu",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "6",
      "Ugnė",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "7",
      "Flora",
      "IN",
      "Game Pie with Shallot and Apple Chutney",
      "4",
      "Raspberry, Pomegranate and Champagne Charlotte Russe"
   ],
   [
      "6",
      "7",
      "Ian",
      "IN",
      "Roadkill Pie",
      "5",
      "Victoria's Crown Charlotte Russe"
   ],
   [
      "6",
      "7",
      "Nadiya",
      "IN",
      "Aromatic Raised Game Pie",
      "1",
      "Mango and Raspberry Charlotte Russe"
   ],
   [
      "6",
      "7",
      "Paul",
      "IN",
      "Not a Boaring Pie",
      "2",
      "Charlotte Rose"
   ],
   [
      "6",
      "7",
      "Mat",
      "OUT",
      "Raised Venison and Pigeon Pie",
      "6",
      "Strawberry Charlotte Russe"
   ],
   [
      "6",
      "7",
      "Tamal",
      "STAR BAKER",
      "Middle Eastern Game Pie",
      "3",
      "Spiced Blackberry, Raspberry and Cardamom Charlotte Russe"
   ],
   [
      "6",
      "7",
      "Alvin",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "7",
      "Dorret",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "7",
      "Marie",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "7",
      "Sandy",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "7",
      "Stu",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "7",
      "Ugnė",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "8",
      "Flora",
      "IN",
      "Peach & Lemon Thyme and Smoked Almond & Butterscotch Cream Horns",
      "3",
      "Lime & Basil and Coconut & White Chocolate Religieuse à l'ancienne"
   ],
   [
      "6",
      "8",
      "Ian",
      "IN",
      "Mont Blanc & Black Forest Gâteau Horns",
      "2",
      "Nun with Hidden Passions"
   ],
   [
      "6",
      "8",
      "Tamal",
      "IN",
      "Lime & Mascarpone and Malt Cream Horns",
      "4",
      "Passionfruit & Mango and Pistachio & Raspberry Religieuse à l'ancienne"
   ],
   [
      "6",
      "8",
      "Paul",
      "OUT",
      "Café Tipple & Banana Crunch-away Horns",
      "5",
      "Religieuse à l'ancienne"
   ],
   [
      "6",
      "8",
      "Nadiya",
      "STAR BAKER",
      "Rose Pistachio and Mocha Hazelnut Horns",
      "1",
      "Bubble Gum and Peppermint Cream Religieuse à l'ancienne"
   ],
   [
      "6",
      "8",
      "Alvin",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "8",
      "Dorret",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "8",
      "Marie",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "8",
      "Mat",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "8",
      "Sandy",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "8",
      "Stu",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "8",
      "Ugnė",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "9",
      "Ian",
      "IN",
      "Chocolate and Bay Tart",
      "3",
      "Chocolate Well"
   ],
   [
      "6",
      "9",
      "Tamal",
      "IN",
      "Chocolate New York Pie",
      "2",
      "Chocolate Bell Tower"
   ],
   [
      "6",
      "9",
      "Flora",
      "OUT",
      "Passion Fruit and Chocolate Tart",
      "1",
      "Cocoa Carousel"
   ],
   [
      "6",
      "9",
      "Nadiya",
      "STAR BAKER",
      "Peanut Salted Caramel and Chocolate Tart",
      "4",
      "Peacock in Nan's Door"
   ],
   [
      "6",
      "9",
      "Alvin",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "9",
      "Dorret",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "9",
      "Marie",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "9",
      "Mat",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "9",
      "Paul",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "9",
      "Sandy",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "9",
      "Stu",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "9",
      "Ugnė",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "10",
      "Ian",
      "Runner-up",
      "Elderflower and Lemon & Spiced Buns",
      "2",
      "Colossal Curvy Carrot Cake"
   ],
   [
      "6",
      "10",
      "Tamal",
      "Runner-up",
      "Cinnamon and Apple & Toffee and Marmalade Iced Buns",
      "3",
      "Sticky Toffee Pudding Cake"
   ],
   [
      "6",
      "10",
      "Nadiya",
      "WINNER",
      "Cardamom and Almond Buns & Nutmeg and Sour Cherry Fingers",
      "1",
      "My Big Fat British Wedding Cake"
   ],
   [
      "6",
      "10",
      "Alvin",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "10",
      "Dorret",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "10",
      "Flora",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "10",
      "Marie",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "10",
      "Mat",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "10",
      "Paul",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "10",
      "Sandy",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "10",
      "Stu",
      "",
      "",
      "",
      ""
   ],
   [
      "6",
      "10",
      "Ugnė",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "1",
      "Andrew",
      "IN",
      "Lemon and Rosemary Drizzle Cake",
      "12",
      "'Ultimate Indulgence' Mirror Glaze Cake"
   ],
   [
      "7",
      "1",
      "Benjamina",
      "IN",
      "Pistachio, Cardamom and Lemon Drizzle Cake",
      "6",
      "White Chocolate Mirror Glaze with Salted Praline Buttercream"
   ],
   [
      "7",
      "1",
      "Candice",
      "IN",
      "Raspberry and Rhubarb Drizzle Custard Bundt Cake",
      "5",
      "Mirror Mirror On The Wall, Who Is The Shiniest Cake Of Them All?"
   ],
   [
      "7",
      "1",
      "Kate",
      "IN",
      "Berry Best Apple and Bramble Drizzle Cake",
      "4",
      "One Swallow Does Not Make A Summer Cake"
   ],
   [
      "7",
      "1",
      "Louise",
      "IN",
      "Orange Liqueur and Lemonade Drizzle Cake",
      "9",
      "White Chocolate Trifle Mirror Glaze Cake"
   ],
   [
      "7",
      "1",
      "Michael",
      "IN",
      "Lime, Ginger and Honey Drizzle Cake",
      "3",
      "Matcha Tea Chocolate Mirror Glaze"
   ],
   [
      "7",
      "1",
      "Rav",
      "IN",
      "Ginger Spice Yuzu Drizzle Cake",
      "8",
      "Colombian Mocha Mirror Glaze Cake"
   ],
   [
      "7",
      "1",
      "Selasi",
      "IN",
      "Citrus and Spice Drizzle Cake",
      "1",
      "Raspberry, Sloe and White Chocolate Mirror Glaze Cake"
   ],
   [
      "7",
      "1",
      "Tom",
      "IN",
      "G&T Drizzle Cake",
      "2",
      "Black Forest Broken Mirror"
   ],
   [
      "7",
      "1",
      "Val",
      "IN",
      "Mum's Orange and Lemon Drizzle",
      "10",
      "Chocolate Sponge with Four Fruit Frosting"
   ],
   [
      "7",
      "1",
      "Lee",
      "OUT",
      "St. Clements Orange and Lemon Drizzle Cake",
      "11",
      "Strawberry Surprise Mirror Cake"
   ],
   [
      "7",
      "1",
      "Jane",
      "STAR BAKER",
      "Lemon and Poppy Seed Drizzle Cake",
      "7",
      "Chocolate Orange Mirror Cake"
   ],
   [
      "7",
      "2",
      "Andrew",
      "IN",
      "Beehive Biscuits",
      "4",
      "Punting in Cambridge"
   ],
   [
      "7",
      "2",
      "Benjamina",
      "IN",
      "Bouquet Biscuits",
      "3",
      "New York, New York"
   ],
   [
      "7",
      "2",
      "Jane",
      "IN",
      "Flower Pot Iced Biscuits",
      "2",
      "Hastings Old Town Fishing Net Shops and Boat"
   ],
   [
      "7",
      "2",
      "Kate",
      "IN",
      " A Biscuit for the Broads ",
      "1",
      " I Promise I Will Do My Best "
   ],
   [
      "7",
      "2",
      "Michael",
      "IN",
      "Malt, Chocolate and Orange Iced  Beer  Biscuits",
      "9",
      "Trip to See Santa in Lapland"
   ],
   [
      "7",
      "2",
      "Rav",
      "IN",
      "Union Jack Bunting Biscuits",
      "6",
      "Gingerbread Christmas Fairground"
   ],
   [
      "7",
      "2",
      "Selasi",
      "IN",
      " Wheelie Hot Iced Biscuits ",
      "11",
      "Stained Glass Window Gingerbread Church"
   ],
   [
      "7",
      "2",
      "Tom",
      "IN",
      "Chai Frappelatteccino Biscuits",
      "7",
      "Tom and Pod's Near Death Experience"
   ],
   [
      "7",
      "2",
      "Val",
      "IN",
      "Sunday Treat Iced Ice Cream Cone Biscuits",
      "5",
      "From Holland to New York via Yorkshire"
   ],
   [
      "7",
      "2",
      "Louise",
      "OUT",
      "Baa Bara Brith Biscuits",
      "10",
      "Gingerbread Wedding"
   ],
   [
      "7",
      "2",
      "Candice",
      "STAR BAKER",
      "Salted Caramel, Chocolate Iced Shiny Hearts",
      "8",
      "Gingerbread Pub with Sticky Ginger Carpet"
   ],
   [
      "7",
      "2",
      "Lee",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "3",
      "Andrew",
      "IN",
      "Chocolate Barmbrack Bread",
      "2",
      "Braided Harvest Bread Basket"
   ],
   [
      "7",
      "3",
      "Benjamina",
      "IN",
      "Chocolate, Tahini and Almond Babka",
      "6",
      "Braided Bread Heart"
   ],
   [
      "7",
      "3",
      "Candice",
      "IN",
      "Chocolate, Salted Caramel & Pecan Brittle Brioche Loaf",
      "3",
      "Italian Light and Dark Rye Twist"
   ],
   [
      "7",
      "3",
      "Jane",
      "IN",
      "Chocolate and Cranberry Couronne",
      "9",
      "Chorizo and Chilli Flower with Parmesan and Pesto Centre"
   ],
   [
      "7",
      "3",
      "Kate",
      "IN",
      "Cobbled Loaf",
      "8",
      "The Corn Maiden"
   ],
   [
      "7",
      "3",
      "Rav",
      "IN",
      "Chocolate, Cardamom and Hazelnut Loaf",
      "10",
      "Three Tier Diwali Bread Centrepiece"
   ],
   [
      "7",
      "3",
      "Selasi",
      "IN",
      "Chocolate, Orange and Cinnamon Bread",
      "5",
      "Bedouin Escape Tear and Share Bread"
   ],
   [
      "7",
      "3",
      "Val",
      "IN",
      "Double Chocolate Cinnamon Twist Loaf",
      "1",
      " And They All Went Into The Ark To Get Out Of The Rain "
   ],
   [
      "7",
      "3",
      "Michael",
      "OUT",
      "Chocolate and Chilli Swirl Plait",
      "7",
      "Cypriot Dove and Olive Branch Plaited Loaf with Houmous"
   ],
   [
      "7",
      "3",
      "Tom",
      "STAR BAKER",
      "Chocolate Orange and Chilli Swirl Bread",
      "4",
      "Jörmungandr and Mjölnir"
   ],
   [
      "7",
      "3",
      "Lee",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "3",
      "Louise",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "4",
      "Andrew",
      "IN",
      "Yorkshire 'Tapas' Puddings",
      "4",
      "Churros Window Box"
   ],
   [
      "7",
      "4",
      "Candice",
      "IN",
      "Yorkshire Wellingtons",
      "2",
      "Two-Way Peanut Butter Churros"
   ],
   [
      "7",
      "4",
      "Jane",
      "IN",
      "Meat and Two Veg Yorkshires",
      "3",
      "Pistachio and White Chocolate Churros"
   ],
   [
      "7",
      "4",
      "Rav",
      "IN",
      "Thai Tofu Panang Yorkshires",
      "9",
      "Three Dip Matcha Pistachio Churros"
   ],
   [
      "7",
      "4",
      "Selasi",
      "IN",
      "Perfect Sunday Roast Accompaniment",
      "8",
      "Lemon and Anise Churros"
   ],
   [
      "7",
      "4",
      "Tom",
      "IN",
      "West Yorkshire Fusion Puddings",
      "5",
      "Fennel Churros Snake In The Grass"
   ],
   [
      "7",
      "4",
      "Val",
      "IN",
      "Mum's Chilli Yorkshire Puddings",
      "6",
      "Orange Chocolate Churros"
   ],
   [
      "7",
      "4",
      "Kate",
      "OUT",
      "Christmas Dinner Compromise",
      "7",
      "Hot Cross Bunny Churros"
   ],
   [
      "7",
      "4",
      "Benjamina",
      "STAR BAKER",
      "Red Onion Chutney, Brie and Bacon Yorkshire Puddings",
      "1",
      "Tropical Churros"
   ],
   [
      "7",
      "4",
      "Lee",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "4",
      "Louise",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "4",
      "Michael",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "5",
      "Andrew",
      "IN",
      "Mum and Dad's Breakfast Pastries",
      "6",
      "Spicy Chorizo Squash Parcels and Baklava Bites"
   ],
   [
      "7",
      "5",
      "Benjamina",
      "IN",
      "'Good Morning America' Swirls and Peanut Butter and Banana Pinwheels",
      "5",
      "Plantain and Spinach Samosas and Chai Pear Cups"
   ],
   [
      "7",
      "5",
      "Jane",
      "IN",
      "Orange Pain au Raisins, Raspberry, Chocolate and Almond Danish",
      "1",
      "Roquefort, Fig and Walnut Parcels and Cherry and Chocolate Cones"
   ],
   [
      "7",
      "5",
      "Rav",
      "IN",
      "Cinnamon Swirls and Pecan, Walnut and Maple Plaits",
      "8",
      "Chinese Style Prawn Filo Tartlets and Spiced White Chocolate and Hazelnut Samosas"
   ],
   [
      "7",
      "5",
      "Selasi",
      "IN",
      "Rhubarb, Mango and Ginger Plait, and Pineapple and Coconut Pinwheels",
      "3",
      "Parma Ham, Asparagus and Cheese Filo Cigars and Coffee Cream Filo Cups"
   ],
   [
      "7",
      "5",
      "Tom",
      "IN",
      "Mega Breakfast Bonanzas; Granola Spirals and Wheat Foldovers",
      "4",
      "Yin and Yang Amuse-bouche"
   ],
   [
      "7",
      "5",
      "Val",
      "OUT",
      "Pecan and Maple Syrup Pinwheels and Apple, Sultana and Cinnamon Swirls",
      "7",
      "Caramelised Red Onion, Goats Cheese Tartlets and Mincemeat and Apple Spiced Parcels"
   ],
   [
      "7",
      "5",
      "Candice",
      "STAR BAKER",
      "Danish Pastry Croque Monsieur Kites and Cinnamon Apple, Vanilla Crème Rose Danish",
      "2",
      "Sausage, Black Pudding and Apple Rounds and Banoffee Whiskey Cups"
   ],
   [
      "7",
      "5",
      "Kate",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "5",
      "Lee",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "5",
      "Louise",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "5",
      "Michael",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "6",
      "Andrew",
      "IN",
      "Tangy Lime and Ginger Meringue Pie",
      "6",
      "Spring Elderflower Trio"
   ],
   [
      "7",
      "6",
      "Benjamina",
      "IN",
      "Grapefruit and Ginger Meringue Pie",
      "2",
      "Floral Tea Cake"
   ],
   [
      "7",
      "6",
      "Candice",
      "IN",
      "Lime, Coconut and Lemongrass Sugar Meringue Pie",
      "5",
      "Four Seasons Cake"
   ],
   [
      "7",
      "6",
      "Jane",
      "IN",
      "Lime and Coconut Meringue Pie",
      "4",
      "Three Tier Orange Cake with a Floral Chocolate Collar"
   ],
   [
      "7",
      "6",
      "Selasi",
      "IN",
      "Grapefruit, Orange and Mint Meringue Pie",
      "7",
      "Three Tiered Ombré Floral Cake"
   ],
   [
      "7",
      "6",
      "Rav",
      "OUT",
      "Mandarin Margarita Meringue Pie",
      "3",
      "Blossom Cake"
   ],
   [
      "7",
      "6",
      "Tom",
      "STAR BAKER",
      "Blood Orange Halloween Pumpkin Pie",
      "1",
      "Floral Tea Cake"
   ],
   [
      "7",
      "6",
      "Kate",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "6",
      "Lee",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "6",
      "Louise",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "6",
      "Michael",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "6",
      "Val",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "7",
      "Benjamina",
      "IN",
      "Piña Colada Roulade",
      "3",
      "Apple Crumble Mousse Cake and Chocolate Coffee Mousse Cake"
   ],
   [
      "7",
      "7",
      "Candice",
      "IN",
      "Crowd Pleaser Roulade",
      "2",
      "Blackberry and Raspberry Bubbles and After Dinner Mousse"
   ],
   [
      "7",
      "7",
      "Jane",
      "IN",
      "Chocolate and Hazelnut Roulade",
      "4",
      "Chocolate, Coffee, and Vanilla Joconde Cakes and Blackcurrant and Vanilla Ombré Mousses"
   ],
   [
      "7",
      "7",
      "Selasi",
      "IN",
      "Summer Picnic Roulade",
      "6",
      "Lemon, Raspberry and Passionfruit and Chocolate and Mint Mini Mousse Cakes"
   ],
   [
      "7",
      "7",
      "Tom",
      "OUT",
      "Millionaire's Roulade",
      "5",
      "Hipster Picnic"
   ],
   [
      "7",
      "7",
      "Andrew",
      "STAR BAKER",
      "Tropical Holiday Roulade",
      "1",
      "Childhood Ice Cream Mousse Cakes"
   ],
   [
      "7",
      "7",
      "Kate",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "7",
      "Lee",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "7",
      "Louise",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "7",
      "Michael",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "7",
      "Rav",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "7",
      "Val",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "8",
      "Andrew",
      "IN",
      "Da Vinci Inspired Geared Pies",
      "2",
      "Jousting Knights Marchpane"
   ],
   [
      "7",
      "8",
      "Jane",
      "IN",
      "Tudor Rose Pies",
      "5",
      "Swans"
   ],
   [
      "7",
      "8",
      "Selasi",
      "IN",
      "Bouquet of Flowers",
      "3",
      "Fruity Tudor Marchpane"
   ],
   [
      "7",
      "8",
      "Benjamina",
      "OUT",
      "Mexican Adventure",
      "4",
      "Tudor Garden"
   ],
   [
      "7",
      "8",
      "Candice",
      "STAR BAKER",
      "Cheesy Cheeky Fish Pies",
      "1",
      "Peacock"
   ],
   [
      "7",
      "8",
      "Kate",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "8",
      "Lee",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "8",
      "Louise",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "8",
      "Michael",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "8",
      "Rav",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "8",
      "Tom",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "8",
      "Val",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "9",
      "Candice",
      "IN",
      "Red Onion, Cambozola and Walnut Palmiers and Mushroom, Streaky Bacon, and Parmesan Palmiers",
      "3",
      "Chocolate Praline Fondant Fancies and Cherry Bakewell Fondant Fancies"
   ],
   [
      "7",
      "9",
      "Jane",
      "IN",
      "Pesto and Sundried Tomato Palmiers and Goats Cheese, Olive and Parma Ham Palmiers",
      "1",
      "Pistachio and Raspberry Fondant Fancies and Lemon Curd Surprise Fondant Fancies"
   ],
   [
      "7",
      "9",
      "Selasi",
      "OUT",
      "Sundried Tomato, Onion, Peppers and Parmesan Palmiers and Salmon, Spinach and Mushroom Palmiers",
      "4",
      "Lime and Ginger Fondant Fancies and Pink Velvet and Raspberry Prosecco Fondant Fancies"
   ],
   [
      "7",
      "9",
      "Andrew",
      "STAR BAKER",
      "Cheesy Elephant Ears and Herby Treble Clefs",
      "2",
      "Philharmonic Fondants"
   ],
   [
      "7",
      "9",
      "Benjamina",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "9",
      "Kate",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "9",
      "Lee",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "9",
      "Louise",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "9",
      "Michael",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "9",
      "Rav",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "9",
      "Tom",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "9",
      "Val",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "10",
      "Andrew",
      "Runner-up",
      "Crunchy Caramel Cassis Crown",
      "1",
      "Family and Friends' Favourites Picnic"
   ],
   [
      "7",
      "10",
      "Jane",
      "Runner-up",
      "Red, White and Blue Meringue Crown",
      "3",
      "Family Favourites Feast"
   ],
   [
      "7",
      "10",
      "Candice",
      "WINNER",
      "Queen Victoria's Mango and Strawberry Crown",
      "2",
      "Picnic for Pearly Kings and Queens"
   ],
   [
      "7",
      "10",
      "Benjamina",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "10",
      "Kate",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "10",
      "Lee",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "10",
      "Louise",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "10",
      "Michael",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "10",
      "Rav",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "10",
      "Selasi",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "10",
      "Tom",
      "",
      "",
      "",
      ""
   ],
   [
      "7",
      "10",
      "Val",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "1",
      "Chris",
      "IN",
      "Tropical Fresh Fruit Cake",
      "12",
      "'Raised Pork Pie and Egg Surprise' Cake"
   ],
   [
      "8",
      "1",
      "Flo",
      "IN",
      "Citrus Layer Cake",
      "9",
      "'One in a Melon' Cake"
   ],
   [
      "8",
      "1",
      "James",
      "IN",
      "Orange, Rhubarb & Ginger Crumble Cake",
      "2",
      "'Mock-accino and Croissant' Cake"
   ],
   [
      "8",
      "1",
      "Julia",
      "IN",
      "Courgette and Lemon Cake",
      "3",
      "'Russian Doll' Cake"
   ],
   [
      "8",
      "1",
      "Kate",
      "IN",
      "Moroccan Strawberry and Rose Cake",
      "1",
      "'Chocolate Terrarium' Cake"
   ],
   [
      "8",
      "1",
      "Liam",
      "IN",
      "Apple and Almond Crumble Maple Loaf",
      "8",
      "'Stackin' Sunday' Cake"
   ],
   [
      "8",
      "1",
      "Sophie",
      "IN",
      "Pineapple and Coconut Sandwich Cake",
      "5",
      "'Champagne Bottle and Bucket' Cake"
   ],
   [
      "8",
      "1",
      "Stacey",
      "IN",
      "Granny Smith Apple and Walnut Cake",
      "11",
      "'Black Evening Clutch Bag' Cake"
   ],
   [
      "8",
      "1",
      "Tom",
      "IN",
      "Gilded Pear and Cardamom Cake",
      "7",
      "'Stack of Books' Cake"
   ],
   [
      "8",
      "1",
      "Yan",
      "IN",
      "Windfall Apple Crumble Cake",
      "4",
      "'Banana-ramen' Cake"
   ],
   [
      "8",
      "1",
      "Peter",
      "OUT",
      "Coconut Cake",
      "10",
      "'Bread on a Breadboard' Cake"
   ],
   [
      "8",
      "1",
      "Steven",
      "STAR BAKER",
      "Bonfire Night Cake",
      "6",
      "'A Baker's Lunch' Cake"
   ],
   [
      "8",
      "2",
      "Flo",
      "IN",
      "Gin Jam Butties",
      "10",
      "'Pick My Bones' Game"
   ],
   [
      "8",
      "2",
      "James",
      "IN",
      "Rhubarb and Custard Whirls",
      "3",
      "'Coppit' Game"
   ],
   [
      "8",
      "2",
      "Julia",
      "IN",
      "Middle Eastern Delight Sandwich Biscuits",
      "4",
      "'A British Baking' Game"
   ],
   [
      "8",
      "2",
      "Kate",
      "IN",
      "Coconut Seashells for a Titanic Afternoon Tea",
      "8",
      "'Jungle' Game"
   ],
   [
      "8",
      "2",
      "Liam",
      "IN",
      "Coffee Malted Pecan Shorties",
      "7",
      "'Classroom Classics' Game"
   ],
   [
      "8",
      "2",
      "Sophie",
      "IN",
      "Lemon Limoncino Sandwich Biscuits",
      "2",
      "'Snakes and Ladders' Game"
   ],
   [
      "8",
      "2",
      "Stacey",
      "IN",
      "Sparkly Chocolate and Marshmallow Fluff Cookies",
      "9",
      "'Get to School' Game"
   ],
   [
      "8",
      "2",
      "Tom",
      "IN",
      "Coffee and Amaretto Kisses",
      "5",
      "'Drain Pipes and Ladders' Game"
   ],
   [
      "8",
      "2",
      "Yan",
      "IN",
      "'Mrs. Marian's PB 'n' B' Biscuits",
      "1",
      "'Adventures in Bakeland' Game"
   ],
   [
      "8",
      "2",
      "Chris",
      "OUT",
      "Chocolate Chia Seed Biscuits with Whisky Caramel Filling",
      "11",
      "'The Great British Sail Off' Game"
   ],
   [
      "8",
      "2",
      "Steven",
      "STAR BAKER",
      "Amarpressi Biscuits",
      "6",
      "'Check Bake' Game"
   ],
   [
      "8",
      "2",
      "Peter",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "3",
      "James",
      "IN",
      "Nordic Teacakes",
      "9",
      "'Owl in the Woods' Bread Sculpture"
   ],
   [
      "8",
      "3",
      "Kate",
      "IN",
      "Blueberry Buns",
      "10",
      "'Kraken' Bread Sculpture"
   ],
   [
      "8",
      "3",
      "Liam",
      "IN",
      "Jamaican Spiced Teacakes",
      "5",
      "'Kneadapolitan' Bread Sculpture"
   ],
   [
      "8",
      "3",
      "Sophie",
      "IN",
      "Tagine Teacakes",
      "6",
      "'Picnic Basket' Bread Sculpture"
   ],
   [
      "8",
      "3",
      "Stacey",
      "IN",
      "Cranberry and Cinnamon Teacakes",
      "1",
      "'Ascot Hat' Bread Sculpture"
   ],
   [
      "8",
      "3",
      "Steven",
      "IN",
      "Madras Cocktail Teacakes",
      "3",
      "'The Bag I Knead' Bread Sculpture"
   ],
   [
      "8",
      "3",
      "Tom",
      "IN",
      "Orange and Cranberry Teacakes",
      "4",
      "'Pink & Yellow Rose Centrepiece' Bread Sculpture"
   ],
   [
      "8",
      "3",
      "Yan",
      "IN",
      "'Mrs P's' Masala Chai Spiced Teacakes",
      "8",
      "'Basil the Vegetarian Dragon with his Pumpkin Hoard' Bread Sculpture"
   ],
   [
      "8",
      "3",
      "Flo",
      "OUT",
      "Cinnamon and Orange Teacakes",
      "7",
      "'Davy Jones' Locker' Bread Sculpture"
   ],
   [
      "8",
      "3",
      "Julia",
      "STAR BAKER",
      "Earl Grey Dried Fruit Teacakes",
      "2",
      "'The Snail Under a Mushroom' Bread Sculpture"
   ],
   [
      "8",
      "3",
      "Chris",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "3",
      "Peter",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "4",
      "James",
      "IN",
      "'Windy City' Millionaire Shortbreads",
      "2",
      "Nutty Caramel Cake"
   ],
   [
      "8",
      "4",
      "Julia",
      "IN",
      "Pecan Salted Caramel Millionaire Shortbreads",
      "9",
      "Poppy Seed Caramel Cake"
   ],
   [
      "8",
      "4",
      "Liam",
      "IN",
      "Salted Peanut Butter Millionaire Shortbreads",
      "3",
      "White Layered Ginger Caramel Cake"
   ],
   [
      "8",
      "4",
      "Sophie",
      "IN",
      "Jaffa Millionaire Shortbreads",
      "4",
      "Bird's Nest Caramel Cake"
   ],
   [
      "8",
      "4",
      "Stacey",
      "IN",
      "Rum Salted Caramel Millionaire Shortbreads",
      "1",
      "Chocolate and Coffee Caramel Cake"
   ],
   [
      "8",
      "4",
      "Steven",
      "IN",
      "Orange Macadamia Nut Millionaire Shortbreads",
      "7",
      "Caramel Crown Cake"
   ],
   [
      "8",
      "4",
      "Yan",
      "IN",
      "'Lil' Red's Ginger and Nuts' Millionaire Shortbreads",
      "8",
      "Animals of the Rainforest Caramel Cake"
   ],
   [
      "8",
      "4",
      "Tom",
      "OUT",
      "Stem Ginger Caramel Shortbreads",
      "5",
      "Hummingbird Cake"
   ],
   [
      "8",
      "4",
      "Kate",
      "STAR BAKER",
      "Salted Bay Caramel Millionaire Shortbreads",
      "6",
      "Sticky Toffee Apple Caramel Cake"
   ],
   [
      "8",
      "4",
      "Chris",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "4",
      "Flo",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "4",
      "Peter",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "5",
      "Julia",
      "IN",
      "Orange & Treacle Steamed School Pudding",
      "3",
      "'Opulent Ornament' Trifle Terrine"
   ],
   [
      "8",
      "5",
      "Kate",
      "IN",
      "'Mr Darcy's Steamy Lake Scene' Steamed School Pudding",
      "8",
      "'My Great Great Nan's' Raspberry Trifle Terrine"
   ],
   [
      "8",
      "5",
      "Liam",
      "IN",
      "Cherries & Lemons that are 'Baked Well'",
      "2",
      "'Cheers Lads' Trifle Terrine"
   ],
   [
      "8",
      "5",
      "Stacey",
      "IN",
      "Bakewell Tart Steamed School Pudding",
      "4",
      "Tropical Trifle Terrine"
   ],
   [
      "8",
      "5",
      "Steven",
      "IN",
      "Lemon & Blackcurrant Drizzle Steamed School Pudding",
      "5",
      "'From Across the Jelly Pond' Trifle Terrine"
   ],
   [
      "8",
      "5",
      "Yan",
      "IN",
      "Mango Fruit Hat Steamed School Pudding",
      "6",
      "'Heart of a Hero' Trifle Terrine"
   ],
   [
      "8",
      "5",
      "James",
      "OUT",
      "Orange and Ginger Steamed School Pudding",
      "7",
      "'The Missed Silver Jubilee' Trifle Terrine"
   ],
   [
      "8",
      "5",
      "Sophie",
      "STAR BAKER",
      "Ginger, Fig and Honey Steamed School Pudding",
      "1",
      "Raspberry, Yuzu & White Chocolate Bûche Trifle Terrine"
   ],
   [
      "8",
      "5",
      "Chris",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "5",
      "Flo",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "5",
      "Peter",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "5",
      "Tom",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "6",
      "Kate",
      "IN",
      "'Vegetarian Pie Faces' Decorative Pies",
      "5",
      "Potato Curry Pie with Mango & Chilli Glaze"
   ],
   [
      "8",
      "6",
      "Sophie",
      "IN",
      "'The Four Seasons' Decorative Pies",
      "2",
      "Game Pie with Glazed Forest Fruits"
   ],
   [
      "8",
      "6",
      "Stacey",
      "IN",
      "'Love Theme' Decorative Pies",
      "6",
      "Indian Hand Raised Pie with Mango"
   ],
   [
      "8",
      "6",
      "Steven",
      "IN",
      "'Fleetwood Mac' Decorative Pies",
      "3",
      "Christmas Pie"
   ],
   [
      "8",
      "6",
      "Yan",
      "IN",
      "'πr2' Decorative Pies",
      "1",
      "Chequerboard Pie"
   ],
   [
      "8",
      "6",
      "Julia",
      "OUT",
      "'Pies from the Tree' Decorative Pies",
      "7",
      "'Special Occasion' Pie"
   ],
   [
      "8",
      "6",
      "Liam",
      "STAR BAKER",
      "'Standard FC' Decorative Pies",
      "4",
      "'Nan's Sunday Dinner' Pie"
   ],
   [
      "8",
      "6",
      "Chris",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "6",
      "Flo",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "6",
      "James",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "6",
      "Peter",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "6",
      "Tom",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "7",
      "Kate",
      "IN",
      "'Happy Hour' Cocktail Cannoli",
      "6",
      "'Flavour Fusion' Sfogliatelle"
   ],
   [
      "8",
      "7",
      "Liam",
      "IN",
      "'Just Doing Me' Cannoli",
      "2",
      "'Morning Delivery' Sfogliatelle"
   ],
   [
      "8",
      "7",
      "Sophie",
      "IN",
      "'Classics with a Twist' Cannoli",
      "3",
      "'Classics' Sfogliatelle"
   ],
   [
      "8",
      "7",
      "Stacey",
      "IN",
      "My All Time Favourite Desserts",
      "4",
      "Pastry Surprise"
   ],
   [
      "8",
      "7",
      "Yan",
      "OUT",
      "Cannoli Cocktails",
      "5",
      "Canadian-Style Sfogliatelle"
   ],
   [
      "8",
      "7",
      "Steven",
      "STAR BAKER",
      "Italian Style Cannoli",
      "1",
      "'Sicilian-style' Sfogliatelle"
   ],
   [
      "8",
      "7",
      "Chris",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "7",
      "Flo",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "7",
      "James",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "7",
      "Julia",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "7",
      "Peter",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "7",
      "Tom",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "8",
      "Kate",
      "IN",
      "Burrito Bedfordshire Clangers",
      "2",
      "'Liver Building Turret' Savoy Cake"
   ],
   [
      "8",
      "8",
      "Sophie",
      "IN",
      "Char Siu & Banana Praline Bedfordshire Clangers",
      "4",
      "Citrus with Green Apple Croquembouche Savoy Cake"
   ],
   [
      "8",
      "8",
      "Steven",
      "IN",
      "'Mediterranean Medley' Bedfordshire Clangers",
      "1",
      "Chestnut Rum Savoy Cake"
   ],
   [
      "8",
      "8",
      "Liam",
      "OUT",
      "'Take Out' Bedfordshire Clangers",
      "5",
      "'Fort Wizardore' Savoy Cake"
   ],
   [
      "8",
      "8",
      "Stacey",
      "STAR BAKER",
      "Camembert & Onion and Apple & Blueberry Bedfordshire Clangers",
      "3",
      "'Bright' Lemon & Orange Savoy Cake"
   ],
   [
      "8",
      "8",
      "Chris",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "8",
      "Flo",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "8",
      "James",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "8",
      "Julia",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "8",
      "Peter",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "8",
      "Tom",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "8",
      "Yan",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "9",
      "Kate",
      "IN",
      "Bellini and Valencian Orange Choux Buns",
      "4",
      "'Rainbow' Meringue Centrepiece"
   ],
   [
      "8",
      "9",
      "Steven",
      "IN",
      "Key Lime Cheesecake and Bakewell Tart Choux Buns",
      "3",
      "'Some Air Over the Rainbow' Meringue Centrepiece"
   ],
   [
      "8",
      "9",
      "Stacey",
      "OUT",
      "'Choux-nicorn and Choux-moji' Choux Buns",
      "2",
      "'Flamingos in Love' Meringue Centrepiece"
   ],
   [
      "8",
      "9",
      "Sophie",
      "STAR BAKER",
      "Strawberry & Rhubarb and Chestnut & Vanilla Choux Buns",
      "1",
      "'Tutu with Opera Filling' Meringue Centrepiece"
   ],
   [
      "8",
      "9",
      "Chris",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "9",
      "Flo",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "9",
      "James",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "9",
      "Julia",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "9",
      "Liam",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "9",
      "Peter",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "9",
      "Tom",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "9",
      "Yan",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "10",
      "Kate",
      "Runner-up",
      "Roman Spelt, Coconut Kala Chana and Flower Breads",
      "3",
      "White Chocolate, Yuzu and Lychee Entremet"
   ],
   [
      "8",
      "10",
      "Steven",
      "Runner-up",
      "Spelt & Rye, Toasted Garlic & Fontina and Sweet Chocolate Breads",
      "1",
      "'Yin Yang' Entremet"
   ],
   [
      "8",
      "10",
      "Sophie",
      "WINNER",
      "Spelt Boules, Mushroom Ciabatta & Orange Plaited Brioche",
      "2",
      "'Ode to the Honey Bee' Entremet"
   ],
   [
      "8",
      "10",
      "Chris",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "10",
      "Flo",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "10",
      "James",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "10",
      "Julia",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "10",
      "Liam",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "10",
      "Peter",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "10",
      "Stacey",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "10",
      "Tom",
      "",
      "",
      "",
      ""
   ],
   [
      "8",
      "10",
      "Yan",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "1",
      "Antony",
      "IN",
      "Turmeric and Caraway Goosnargh Cakes",
      "12",
      " Kilimanjaro Selfie "
   ],
   [
      "9",
      "1",
      "Briony",
      "IN",
      "Apple Cider Empire Biscuits",
      "2",
      " Bristol Biscuit Selfie "
   ],
   [
      "9",
      "1",
      "Dan",
      "IN",
      "Lemon and Strawberry Shrewsburys",
      "4",
      " New Dad in Palm Springs "
   ],
   [
      "9",
      "1",
      "Jon",
      "IN",
      "Aberffraw 'Creams'",
      "5",
      " A Sailing Selfie by the Sea "
   ],
   [
      "9",
      "1",
      "Karen",
      "IN",
      "Yorkshire Perkins",
      "6",
      "Rosewater and Cardamom  Holiday Selfie "
   ],
   [
      "9",
      "1",
      "Kim-Joy",
      "IN",
      "Orange Blossom York Biscuits",
      "10",
      " Me at Miyajima Shrine "
   ],
   [
      "9",
      "1",
      "Luke",
      "IN",
      "Yorkshire Gingernuts",
      "8",
      " What Happens In Vegas...! "
   ],
   [
      "9",
      "1",
      "Rahul",
      "IN",
      "Fennel and Coconut Pitcaithly Bannock",
      "7",
      " First Spring in the UK "
   ],
   [
      "9",
      "1",
      "Ruby",
      "IN",
      "Masala Chai Devon Flats",
      "1",
      " Gingerbread Marathon Selfie "
   ],
   [
      "9",
      "1",
      "Terry",
      "IN",
      "Lake District Ginger Shortbread",
      "9",
      " Brandy Snap Selfie "
   ],
   [
      "9",
      "1",
      "Imelda",
      "OUT",
      "Cherry and White Chocolate Oatmeal Biscuits",
      "11",
      " Seaside Selfie "
   ],
   [
      "9",
      "1",
      "Manon",
      "STAR BAKER",
      "Hazelnut Cornish Shortbread",
      "3",
      "Matcha and White Chocolate Ganache Japanese Selfie"
   ],
   [
      "9",
      "2",
      "Antony",
      "IN",
      "Cardamom and Coconut Burfi Traybake",
      "9",
      "Pistachio, Saffron and Rose Cake"
   ],
   [
      "9",
      "2",
      "Briony",
      "IN",
      "Turron and Orange Traybake",
      "5",
      "Chocolate Fudge and Salted Caramel Creation"
   ],
   [
      "9",
      "2",
      "Dan",
      "IN",
      "Black Forest Slice",
      "3",
      "Dark Chocolate and Raspberry Birthday Cake"
   ],
   [
      "9",
      "2",
      "Jon",
      "IN",
      "Lemon Meringue Traybake",
      "1",
      "Hawaiian Shirt Pina Colada Cake"
   ],
   [
      "9",
      "2",
      "Karen",
      "IN",
      "Almond and Marzipan Traybake with Rhubarb Jam",
      "11",
      "Strawberry Fayre Chocolate Cake"
   ],
   [
      "9",
      "2",
      "Kim-Joy",
      "IN",
      "Pandan Chiffon Cake with Palm Sugar Cream",
      "4",
      "Yuzu and Raspberry Genoise Cat Cake"
   ],
   [
      "9",
      "2",
      "Manon",
      "IN",
      "Rosemary and Honey Traybake",
      "6",
      "Almond Princess Cake"
   ],
   [
      "9",
      "2",
      "Ruby",
      "IN",
      "Boozy Black Forest Traybake",
      "10",
      "Chocolate Orange  Jackson Pollock  Collar Cake"
   ],
   [
      "9",
      "2",
      "Terry",
      "IN",
      "Rum and Raisin Traybake",
      "8",
      "Champagne and Strawberries Eiffel Tower Collar Cake"
   ],
   [
      "9",
      "2",
      "Luke",
      "OUT",
      "Lemon and Poppy Seed Traybake",
      "7",
      "Raspberry and White Chocolate Collar Cake"
   ],
   [
      "9",
      "2",
      "Rahul",
      "STAR BAKER",
      "Lemon and Cardamom Traybake",
      "2",
      "Chocolate Orange Layer Cake"
   ],
   [
      "9",
      "2",
      "Imelda",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "3",
      "Briony",
      "IN",
      "Balsamic Strawberry Chelsea Buns",
      "9",
      "Happily Ever After Korovai"
   ],
   [
      "9",
      "3",
      "Dan",
      "IN",
      "Sticky Spiced Orange Chelsea Buns",
      "6",
      "Wedding Korovai"
   ],
   [
      "9",
      "3",
      "Jon",
      "IN",
      "Cardiff City vs Chelsea Buns",
      "2",
      "Korovai Dydd Dewi Sant"
   ],
   [
      "9",
      "3",
      "Karen",
      "IN",
      "Peak District Christmas Chelsea Buns",
      "5",
      "French Breakfast Wedding Korovai"
   ],
   [
      "9",
      "3",
      "Kim-Joy",
      "IN",
      "Pistachio and Cardamom Tangzhong Chelsea Buns",
      "10",
      "Orange, Cinnamon and Cranberry 'Kit-ovai'"
   ],
   [
      "9",
      "3",
      "Manon",
      "IN",
      "Apricot, Cranberry and Marzipan Chai Chelsea Buns",
      "3",
      "Fabergé Inspired Traditional Korovai"
   ],
   [
      "9",
      "3",
      "Ruby",
      "IN",
      "Gujarela Chelsea Buns with Dates, Almonds and Raisins",
      "7",
      "Mama and Papa's Belated Wedding Korovai"
   ],
   [
      "9",
      "3",
      "Terry",
      "IN",
      "Tangy Citrus Sticky Chelsea Buns",
      "1",
      "Garden Korovai"
   ],
   [
      "9",
      "3",
      "Antony",
      "OUT",
      "Decadent Breakfast Chelsea Buns",
      "8",
      "Chocolate and Orange Adventure Korovai"
   ],
   [
      "9",
      "3",
      "Rahul",
      "STAR BAKER",
      "Mango and Cranberry Chelsea Buns",
      "4",
      "Garden Wedding Korovai"
   ],
   [
      "9",
      "3",
      "Imelda",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "3",
      "Luke",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "4",
      "Terry",
      "[a]",
      "",
      "",
      ""
   ],
   [
      "9",
      "4",
      "Briony",
      "IN",
      "Treacle Tart Roulade",
      "5",
      "Blood Orange & Amaretto Sticky Toffee Sphere"
   ],
   [
      "9",
      "4",
      "Jon",
      "IN",
      "Mango and Passion Fruit Roulade",
      "3",
      "Lucy and Hannah's Ballet Cake"
   ],
   [
      "9",
      "4",
      "Karen",
      "IN",
      "Coffee Cream and Praline Roulade",
      "7",
      "Chateau Du Chambord Framboise"
   ],
   [
      "9",
      "4",
      "Kim-Joy",
      "IN",
      "'Sweet Dreams' Roulade",
      "6",
      "Melting Chocolate Galaxy"
   ],
   [
      "9",
      "4",
      "Manon",
      "IN",
      "Amarene and Kirsch Cherry Roulade",
      "8",
      "White Chocolate Renaissance Surprise"
   ],
   [
      "9",
      "4",
      "Rahul",
      "IN",
      "Rhubarb and Custard Roulade",
      "4",
      "Opera Cake with Kalash Inspired Dome"
   ],
   [
      "9",
      "4",
      "Ruby",
      "IN",
      "Pina Colada Roulade",
      "2",
      "Chocolate Egg"
   ],
   [
      "9",
      "4",
      "Dan",
      "STAR BAKER",
      "Florida Roulade",
      "1",
      "Dan and the Giant Peach"
   ],
   [
      "9",
      "4",
      "Antony",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "4",
      "Imelda",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "4",
      "Luke",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "5",
      "Briony",
      "IN",
      "Honey and Apricot Ginger Cake",
      "6",
      "Turmeric Latte Chandelier"
   ],
   [
      "9",
      "5",
      "Dan",
      "IN",
      "Ginger and Lemon Drip Cake",
      "2",
      "Birthday Kaleidoscope for Constance"
   ],
   [
      "9",
      "5",
      "Jon",
      "IN",
      "Family Christmas Ginger Cake",
      "7",
      "Birthday Chandelier for Emily's 21st"
   ],
   [
      "9",
      "5",
      "Manon",
      "IN",
      "Italian Meringue Ginger Cake",
      "5",
      "Art Deco Spiced Biscuit Chandelier"
   ],
   [
      "9",
      "5",
      "Rahul",
      "IN",
      "Bonfire Night Caramel Ginger Cake",
      "3",
      "Durga Puja Cardamom Chandelier"
   ],
   [
      "9",
      "5",
      "Ruby",
      "IN",
      "Jamaican Me Crazy Ginger Cake",
      "1",
      "Peacock Chandelier"
   ],
   [
      "9",
      "5",
      "Karen",
      "OUT",
      "Bonfire Night Ginger Cake",
      "9",
      "Pontefract Girls' School Reunion"
   ],
   [
      "9",
      "5",
      "Terry",
      "OUT",
      "Caramelised Pear and Stem Ginger Cake",
      "8",
      "12 Days of Christmas Chandelier"
   ],
   [
      "9",
      "5",
      "Kim-Joy",
      "STAR BAKER",
      "Stem Ginger Cake with Poached Pears",
      "4",
      "Christmas Spiced Ice Chandelier"
   ],
   [
      "9",
      "5",
      "Antony",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "5",
      "Imelda",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "5",
      "Luke",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "6",
      "Jon",
      "IN",
      "A Romantic Dinner For Two, Samosa Style",
      "2",
      "Welsh Dragon Pie"
   ],
   [
      "9",
      "6",
      "Kim-Joy",
      "IN",
      "Flavours of India",
      "5",
      "Silke the Vegetarian Mermaid"
   ],
   [
      "9",
      "6",
      "Manon",
      "IN",
      "Samosas for Mum",
      "4",
      " What Has Poppy Eaten? "
   ],
   [
      "9",
      "6",
      "Rahul",
      "IN",
      "Paneer Singara and Misti Singara",
      "3",
      "Butterfly Pie"
   ],
   [
      "9",
      "6",
      "Ruby",
      "IN",
      "Traditional Samosas",
      "7",
      "Kohinoor Crown"
   ],
   [
      "9",
      "6",
      "Dan",
      "OUT",
      "Festive Samosas",
      "6",
      "Salmon Coulibiac"
   ],
   [
      "9",
      "6",
      "Briony",
      "STAR BAKER",
      "Home Comforts",
      "1",
      " Down the Rabbit Hole  Banquet Pie"
   ],
   [
      "9",
      "6",
      "Antony",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "6",
      "Imelda",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "6",
      "Karen",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "6",
      "Luke",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "6",
      "Terry",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "7",
      "Briony",
      "IN",
      "French Onion Tartlets and Celeriac & Apple Tartlets",
      "5",
      "Hazelnut Mocha Cake"
   ],
   [
      "9",
      "7",
      "Manon",
      "IN",
      "Summer & Winter Tartlets",
      "2",
      "Spiced Apple Cake"
   ],
   [
      "9",
      "7",
      "Rahul",
      "IN",
      "Coriander Posto & Veg Tartlets and Ghugni Chaat Tartlets",
      "1",
      "Chocolate & Coconut Layer Cake with Raspberry Jam"
   ],
   [
      "9",
      "7",
      "Ruby",
      "IN",
      "Sage & Butternut Tartlets and 'Cheesy Greens' Tartlets",
      "3",
      "Chocolate, Lemon & Coconut Cake"
   ],
   [
      "9",
      "7",
      "Jon",
      "OUT",
      "Garlic Mushroom Tartlets and Falafel & Hummus Tartlets",
      "4",
      "Only Fools Eat Horses Cake"
   ],
   [
      "9",
      "7",
      "Kim-Joy",
      "STAR BAKER",
      "Broccoli & Tomato Quiches and Mascarpone Squirrel Tartlets",
      "6",
      "Lavender & Lemon Fox Cake"
   ],
   [
      "9",
      "7",
      "Antony",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "7",
      "Dan",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "7",
      "Imelda",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "7",
      "Karen",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "7",
      "Luke",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "7",
      "Terry",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "8",
      "Briony",
      "IN",
      "Spanish & West Country Smørrebrød",
      "1",
      "Nana Pat Kagekone"
   ],
   [
      "9",
      "8",
      "Kim-Joy",
      "IN",
      "Bumblebee Eggs & Fish Smørrebrød",
      "2",
      "Off to the Opera Kagekone"
   ],
   [
      "9",
      "8",
      "Rahul",
      "IN",
      "Smoked Salmon & Roasted Vegetable Smørrebrød",
      "5",
      "Indian King Kagemand"
   ],
   [
      "9",
      "8",
      "Manon",
      "OUT",
      "Cheese and Fruit Smørrebrød",
      "4",
      "Birthday Girl Kagekone"
   ],
   [
      "9",
      "8",
      "Ruby",
      "STAR BAKER",
      "Post-Gym Smørrebrød",
      "3",
      "Sister Kagekone"
   ],
   [
      "9",
      "8",
      "Antony",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "8",
      "Dan",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "8",
      "Imelda",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "8",
      "Jon",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "8",
      "Karen",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "8",
      "Luke",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "8",
      "Terry",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "9",
      "Kim-Joy",
      "IN",
      "Ginger and Lemon Madeleines Orange Bunny Madeleines",
      "2",
      "Flavourite Flavours Window Display"
   ],
   [
      "9",
      "9",
      "Rahul",
      "IN",
      "Lemon and Raspberry Madeleines Orange Curd Madeleines",
      "4",
      "Classic Tribute to Pâtisserie Window"
   ],
   [
      "9",
      "9",
      "Briony",
      "OUT",
      "Mojito Madeleines Espresso Martini Madeleines",
      "3",
      "British Tea to French Pâtisserie Window"
   ],
   [
      "9",
      "9",
      "Ruby",
      "STAR BAKER",
      "Pick Your Own Madeleines",
      "1",
      "Parisian Un Bouquet de Fleurs Window Display"
   ],
   [
      "9",
      "9",
      "Antony",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "9",
      "Dan",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "9",
      "Imelda",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "9",
      "Jon",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "9",
      "Karen",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "9",
      "Luke",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "9",
      "Manon",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "9",
      "Terry",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "10",
      "Kim-Joy",
      "Runner-up",
      "Amaretto Diplomat Filled Doughnuts & Lemon Ring Doughnuts",
      "1",
      "Lost City of Atlantis Dessert Landscape"
   ],
   [
      "9",
      "10",
      "Ruby",
      "Runner-up",
      "Dulce De Leche Filled Doughnuts & Raspberry and Cardamom Ring Doughnuts",
      "3",
      "Magical Edible Landscape"
   ],
   [
      "9",
      "10",
      "Rahul",
      "WINNER",
      "Mango Créme Pâtissière Filled Doughnuts & Spiced Orange Ring Doughnuts",
      "2",
      "Edible Rock Garden"
   ],
   [
      "9",
      "10",
      "Antony",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "10",
      "Briony",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "10",
      "Dan",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "10",
      "Imelda",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "10",
      "Jon",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "10",
      "Karen",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "10",
      "Luke",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "10",
      "Manon",
      "",
      "",
      "",
      ""
   ],
   [
      "9",
      "10",
      "Terry",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "1",
      "Alice",
      "IN",
      "Gingerbread Fruit Cake Wreath",
      "5",
      "Like a Child in a Sweetshop Cake"
   ],
   [
      "10",
      "1",
      "Amelia",
      "IN",
      "Christmas Cake",
      "4",
      "Carousel Birthday Cake"
   ],
   [
      "10",
      "1",
      "David",
      "IN",
      "Squishy Squashy Fruit Cake",
      "10",
      "Snakey Birthday Cakey"
   ],
   [
      "10",
      "1",
      "Helena",
      "IN",
      "Fruit Bat Cake",
      "12",
      "Away with the Fairies Cake"
   ],
   [
      "10",
      "1",
      "Henry",
      "IN",
      "Wood Street Cake",
      "1",
      "Secret Woodland Cake"
   ],
   [
      "10",
      "1",
      "Jamie",
      "IN",
      "Easter Simnel Cake",
      "13",
      "Salted Caramel Schnauzer Birthday Cake"
   ],
   [
      "10",
      "1",
      "Michael",
      "IN",
      "Cup of Chai Cake",
      "11",
      "Treasure Chest Cake"
   ],
   [
      "10",
      "1",
      "Phil",
      "IN",
      "Spiced Fruit Cake with Rum Glaze",
      "8",
      "Retro Rocket Cake"
   ],
   [
      "10",
      "1",
      "Priya",
      "IN",
      "Sunshine Fruit Cake",
      "7",
      "Once Upon a Time Cake"
   ],
   [
      "10",
      "1",
      "Rosie",
      "IN",
      "Spicy Chai Loaf",
      "2",
      "Magical Jungle Cake"
   ],
   [
      "10",
      "1",
      "Steph",
      "IN",
      "Great Grandma's Fruit Cake",
      "3",
      "A Sundae on the Beach Cake"
   ],
   [
      "10",
      "1",
      "Dan",
      "OUT",
      "Jamaican Rum Cake",
      "9",
      "Pirate Island Cake"
   ],
   [
      "10",
      "1",
      "Michelle",
      "STAR BAKER",
      "Bara Brith Teulu Ni (Our Family's Bara Brith)",
      "6",
      "Tŷ Tylwyth Teg (Fairy House Cake)"
   ],
   [
      "10",
      "2",
      "Amelia",
      "IN",
      "Pistachio, Almond & Raisin Nougat Biscuit Bars",
      "9",
      "Swimming with Dolphins"
   ],
   [
      "10",
      "2",
      "David",
      "IN",
      "Coco-nutty Chocolate Bars",
      "2",
      "Wedding Spray"
   ],
   [
      "10",
      "2",
      "Helena",
      "IN",
      "Wicked Witch Fingers",
      "12",
      "Caught in a Spider's Web"
   ],
   [
      "10",
      "2",
      "Henry",
      "IN",
      "Coffee, Cardamom & Hazelnut Bars",
      "6",
      "Chapel Organ"
   ],
   [
      "10",
      "2",
      "Michael",
      "IN",
      "Lemon & Rosemary Biscuit Bars",
      "4",
      "Hamish the Highland Cow"
   ],
   [
      "10",
      "2",
      "Michelle",
      "IN",
      "Bakewell Bars",
      "8",
      "Dewi y Ddraig Cymraeg - Dewi the Welsh Dragon"
   ],
   [
      "10",
      "2",
      "Phil",
      "IN",
      "Orange, Cranberry & White Chocolate Fudge Bars",
      "3",
      "Tina the Tortoise"
   ],
   [
      "10",
      "2",
      "Priya",
      "IN",
      "Ruby Barfi Biscuit Bars",
      "7",
      "The Beast of Rocky Mountain"
   ],
   [
      "10",
      "2",
      "Rosie",
      "IN",
      "Virgin Mojito Biscuit Bars",
      "5",
      "My Favourite Chicken – A Celebration of Legs"
   ],
   [
      "10",
      "2",
      "Steph",
      "IN",
      "Chocolate, Caramel Macchiato Biscuit Bars",
      "10",
      "Ginger the Cat"
   ],
   [
      "10",
      "2",
      "Jamie",
      "OUT",
      "Cherry Caramel Shortbread Biscuit Bars",
      "11",
      "Biscuit Guitar"
   ],
   [
      "10",
      "2",
      "Alice",
      "STAR BAKER",
      "Honeycomb Peanut Mallow Bars",
      "1",
      "Chocolate and Coconut New Zealand Lamb"
   ],
   [
      "10",
      "2",
      "Dan",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "3",
      "Alice",
      "IN",
      "Baklava Tear & Share",
      "7",
      "Global Bread"
   ],
   [
      "10",
      "3",
      "David",
      "IN",
      "Cinnamon Swirl Tear & Share",
      "2",
      "Trio of African Masks"
   ],
   [
      "10",
      "3",
      "Helena",
      "IN",
      "Frosted Cinnamon and Pecan Tear & Share",
      "8",
      "Every Bread is Halloween"
   ],
   [
      "10",
      "3",
      "Henry",
      "IN",
      "Chicken and Pesto Tear & Share",
      "1",
      "Herb Garden"
   ],
   [
      "10",
      "3",
      "Michelle",
      "IN",
      "Noson Gaws (Cheese Night) Tear & Share",
      "5",
      "Gardd Ni (Our Garden)"
   ],
   [
      "10",
      "3",
      "Phil",
      "IN",
      "Pancetta and Cheese Focaccia Tear & Share",
      "10",
      "Winner's Wreath"
   ],
   [
      "10",
      "3",
      "Priya",
      "IN",
      "Smokey Jalapeño Tear & Share",
      "4",
      "Bird Boules"
   ],
   [
      "10",
      "3",
      "Rosie",
      "IN",
      "Chilli and Manchego Tear & Share",
      "9",
      "Bread Safari"
   ],
   [
      "10",
      "3",
      "Steph",
      "IN",
      "Sun-Dried Tomato and Pesto Star Tear & Share",
      "3",
      "Hand-Tied Bouquet of Flowers"
   ],
   [
      "10",
      "3",
      "Amelia",
      "OUT",
      "Chorizo Brunch Tear & Share",
      "11",
      "Caterpillar Transformation"
   ],
   [
      "10",
      "3",
      "Michael",
      "STAR BAKER",
      "Keralan Star Bread Tear & Share",
      "6",
      "Mediterranean Camp Fire"
   ],
   [
      "10",
      "3",
      "Dan",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "3",
      "Jamie",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "4",
      "Alice",
      "IN",
      "Leafy Yoghurt Cake",
      "8",
      "Afternoon Tea"
   ],
   [
      "10",
      "4",
      "David",
      "IN",
      "A Kick of Limoncello Cake",
      "2",
      "Flavours of India Mishti"
   ],
   [
      "10",
      "4",
      "Helena",
      "IN",
      "Ghost Cake",
      "9",
      "Ye Olde English Sweet Shoppe Mishti"
   ],
   [
      "10",
      "4",
      "Henry",
      "IN",
      "Ode to a German Breakfast Cake",
      "3",
      "Seaside Mishti"
   ],
   [
      "10",
      "4",
      "Michael",
      "IN",
      "Cheesecake Surprise",
      "7",
      "Flag of India Mishti"
   ],
   [
      "10",
      "4",
      "Michelle",
      "IN",
      "Homely Rhubarb Cake",
      "5",
      "Home Comforts Mishti"
   ],
   [
      "10",
      "4",
      "Priya",
      "IN",
      "Choc-chip Banana Cake",
      "10",
      "Flavours of My Childhood Mishti"
   ],
   [
      "10",
      "4",
      "Rosie",
      "IN",
      "A Good Dose of Limoncello Cake",
      "4",
      "Cocktails & Canapés Mishti"
   ],
   [
      "10",
      "4",
      "Phil",
      "OUT",
      "Trucking Lovely Rose Cake",
      "6",
      "A Corner of My Garden Mishti"
   ],
   [
      "10",
      "4",
      "Steph",
      "STAR BAKER",
      "Answer to Everything Cake",
      "1",
      "Pink and Pretty Mishti"
   ],
   [
      "10",
      "4",
      "Amelia",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "4",
      "Dan",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "4",
      "Jamie",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "5",
      "Alice",
      "IN",
      "Chocolate & Orange Custard Pies",
      "6",
      "Piña Colada Cake"
   ],
   [
      "10",
      "5",
      "David",
      "IN",
      "Fancy Custards",
      "9",
      "Amaretto Sour Cake"
   ],
   [
      "10",
      "5",
      "Henry",
      "IN",
      "1920s Pies",
      "3",
      "White Russian Cake"
   ],
   [
      "10",
      "5",
      "Michael",
      "IN",
      "Mango, Lime & Ginger Pies",
      "8",
      "Brambling Cake"
   ],
   [
      "10",
      "5",
      "Priya",
      "IN",
      "Lemon & Raspberry Ripple Pies",
      "2",
      "Meena Colada Cake"
   ],
   [
      "10",
      "5",
      "Rosie",
      "IN",
      "Little Blackberry Pies",
      "5",
      "White Russian Cake"
   ],
   [
      "10",
      "5",
      "Helena",
      "OUT",
      "Lemon and Lavender Pies",
      "1",
      "Vampire's Kiss Raspberry Vodka Cake"
   ],
   [
      "10",
      "5",
      "Michelle",
      "OUT",
      "Blueberry & White Chocolate Crème Brûlée Pies",
      "7",
      "My Little Sister the Dancing Queen's Piña Colada Cake"
   ],
   [
      "10",
      "5",
      "Steph",
      "STAR BAKER",
      "Zesty Citrus Custard Pies",
      "4",
      "Sour Lime Piña Colada Cake"
   ],
   [
      "10",
      "5",
      "Amelia",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "5",
      "Dan",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "5",
      "Jamie",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "5",
      "Phil",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "6",
      "Alice",
      "IN",
      "Black Forest Meringue",
      "1",
      "Tiramisu Bombe"
   ],
   [
      "10",
      "6",
      "David",
      "IN",
      "Spiced Meringue Surprise",
      "2",
      "Delightful Bombe"
   ],
   [
      "10",
      "6",
      "Henry",
      "IN",
      "Towering Meringue Cake",
      "4",
      "Bonfire Bombe"
   ],
   [
      "10",
      "6",
      "Michael",
      "IN",
      "Dark Chocolate Meringue Cake",
      "6",
      "Black Forest Bombe"
   ],
   [
      "10",
      "6",
      "Rosie",
      "IN",
      "Layers of Lime and Raspberry",
      "5",
      "Ruby Bombe"
   ],
   [
      "10",
      "6",
      "Priya",
      "OUT",
      "Family Favourite",
      "7",
      "Summer Fruit Bombe"
   ],
   [
      "10",
      "6",
      "Steph",
      "STAR BAKER",
      "Eton Mess",
      "3",
      "Mirror Bombe"
   ],
   [
      "10",
      "6",
      "Amelia",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "6",
      "Dan",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "6",
      "Helena",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "6",
      "Jamie",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "6",
      "Michelle",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "6",
      "Phil",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "7",
      "Alice",
      "IN",
      "Lemon, Blueberry & Almond Hot Cross Buns",
      "6",
      "Chocolate, Orange and Salted Caramel Kaleidoscope Sarawak Style Layered Cake"
   ],
   [
      "10",
      "7",
      "David",
      "IN",
      "Kozunak Plaits",
      "2",
      "Sarawak Style Layer Cake Sculpture"
   ],
   [
      "10",
      "7",
      "Rosie",
      "IN",
      "Mardi Gras Finnish Semlor Peacock Festival Buns",
      "1",
      "Rainbow Sarawak Style Layer Cake"
   ],
   [
      "10",
      "7",
      "Steph",
      "IN",
      "Zest and Spice Hot Cross Buns",
      "4",
      "Orange and Chai Spiced Revitalise Cake"
   ],
   [
      "10",
      "7",
      "Michael",
      "OUT",
      "Figgy Pudding Hot Cross Buns",
      "5",
      "Jamaican Mule Sarawak Style Layer Cake"
   ],
   [
      "10",
      "7",
      "Henry",
      "STAR BAKER",
      "Chocolate Kardemummabullar",
      "3",
      "Elegant Present Box"
   ],
   [
      "10",
      "7",
      "Amelia",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "7",
      "Dan",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "7",
      "Helena",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "7",
      "Jamie",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "7",
      "Michelle",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "7",
      "Phil",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "7",
      "Priya",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "8",
      "Alice",
      "IN",
      "Leek, Apple & Goat's Cheese Tarte Tatin",
      "3",
      "Apple Tree House Pie"
   ],
   [
      "10",
      "8",
      "David",
      "IN",
      "Caramelly Carroty Tarte Tatin",
      "1",
      "Whitby Fish Pie"
   ],
   [
      "10",
      "8",
      "Rosie",
      "IN",
      "Shallot, Aubergine & Goat's Cheese Spiced Tarte Tatin",
      "2",
      "Rapunzel's Tower"
   ],
   [
      "10",
      "8",
      "Henry",
      "OUT",
      "Crab, Tomato & New Potato Tarte Tatin",
      "5",
      "Chandelier Picnic Pie"
   ],
   [
      "10",
      "8",
      "Steph",
      "STAR BAKER",
      "Caramelised Onion & Goat's Cheese Tarte Tatin",
      "4",
      "Curried Chickpea & Potato Carousel"
   ],
   [
      "10",
      "8",
      "Amelia",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "8",
      "Dan",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "8",
      "Helena",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "8",
      "Jamie",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "8",
      "Michael",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "8",
      "Michelle",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "8",
      "Phil",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "8",
      "Priya",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "9",
      "David",
      "IN",
      "Aperitif Domed Tarts",
      "2",
      "Greenhouse Growing Moss"
   ],
   [
      "10",
      "9",
      "Steph",
      "IN",
      "Raspberry, Lemon & White Chocolate Domed Tarts",
      "3",
      "A Night at the Opera"
   ],
   [
      "10",
      "9",
      "Rosie",
      "OUT",
      "Lemon, Raspberry & Mint Domed Tarts",
      "1",
      "Time with Family"
   ],
   [
      "10",
      "9",
      "Alice",
      "STAR BAKER",
      "Mocha, Hazelnut & Orange Domed Tarts",
      "4",
      "Save Our Oceans"
   ],
   [
      "10",
      "9",
      "Amelia",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "9",
      "Dan",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "9",
      "Helena",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "9",
      "Henry",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "9",
      "Jamie",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "9",
      "Michael",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "9",
      "Michelle",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "9",
      "Phil",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "9",
      "Priya",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "10",
      "Alice",
      "Runner-up",
      "Chocolate, Pear, Ginger and Maple Cake",
      "2",
      "End of the School Year Celebration Picnic"
   ],
   [
      "10",
      "10",
      "Steph",
      "Runner-up",
      "Black Forest Chocolate Cake",
      "3",
      "Picnic in the Park"
   ],
   [
      "10",
      "10",
      "David",
      "WINNER",
      "Chocolate, Armagnac and Prune Cake",
      "1",
      "Peachy Pic-Nik"
   ],
   [
      "10",
      "10",
      "Amelia",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "10",
      "Dan",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "10",
      "Helena",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "10",
      "Henry",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "10",
      "Jamie",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "10",
      "Michael",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "10",
      "Michelle",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "10",
      "Phil",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "10",
      "Priya",
      "",
      "",
      "",
      ""
   ],
   [
      "10",
      "10",
      "Rosie",
      "",
      "",
      "",
      ""
   ]
]
