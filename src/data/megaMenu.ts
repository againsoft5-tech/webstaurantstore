export type MegaLink = { name: string; href: string };
export type MegaFeatured = MegaLink & { image: string };
export type MegaCategory = {
  name: string;
  href: string;
  moreIn: string;
  featured: MegaFeatured[];
  more: MegaLink[];
};

export const megaMenu: MegaCategory[] = [
  {
    "name": "Restaurant Equipment",
    "href": "/category/restaurant-equipment",
    "moreIn": "Restaurant Equipment",
    "featured": [
      {
        "name": "Cooking Equipment",
        "image": "/mega/0-0.jpg",
        "href": "/category/restaurant-equipment/cooking-equipment"
      },
      {
        "name": "Commercial Work Tables and Stations",
        "image": "/mega/0-1.jpg",
        "href": "/category/restaurant-equipment/commercial-work-tables-and-stations"
      },
      {
        "name": "Food Preparation",
        "image": "/mega/0-2.jpg",
        "href": "/category/restaurant-equipment/food-preparation"
      },
      {
        "name": "Commercial Ovens",
        "image": "/mega/0-3.jpg",
        "href": "/category/restaurant-equipment/commercial-ovens"
      },
      {
        "name": "Food Holding and Warming Equipment",
        "image": "/mega/0-4.jpg",
        "href": "/category/restaurant-equipment/food-holding-and-warming-equipment"
      },
      {
        "name": "Beverage Equipment",
        "image": "/mega/0-5.jpg",
        "href": "/category/restaurant-equipment/beverage-equipment"
      },
      {
        "name": "Food Display and Merchandising",
        "image": "/mega/0-6.jpg",
        "href": "/category/restaurant-equipment/food-display-and-merchandising"
      },
      {
        "name": "Dish Washing Equipment",
        "image": "/mega/0-7.jpg",
        "href": "/category/restaurant-equipment/dish-washing-equipment"
      }
    ],
    "more": [
      {
        "name": "Equipment Parts",
        "href": "/category/restaurant-equipment/equipment-parts"
      },
      {
        "name": "Stainless Steel Work Tables with Undershelf",
        "href": "/category/restaurant-equipment/stainless-steel-work-tables-with-undershelf"
      },
      {
        "name": "Commercial Fryers",
        "href": "/category/restaurant-equipment/commercial-fryers"
      },
      {
        "name": "Gas Ranges",
        "href": "/category/restaurant-equipment/gas-ranges"
      },
      {
        "name": "Convection Ovens",
        "href": "/category/restaurant-equipment/convection-ovens"
      },
      {
        "name": "Frozen Drink Machines",
        "href": "/category/restaurant-equipment/frozen-drink-machines"
      },
      {
        "name": "Commercial Mixers",
        "href": "/category/restaurant-equipment/commercial-mixers"
      },
      {
        "name": "Griddles",
        "href": "/category/restaurant-equipment/griddles"
      },
      {
        "name": "Food Processors",
        "href": "/category/restaurant-equipment/food-processors"
      },
      {
        "name": "Meat Slicers",
        "href": "/category/restaurant-equipment/meat-slicers"
      },
      {
        "name": "3 Compartment Sinks",
        "href": "/category/restaurant-equipment/3-compartment-sinks"
      },
      {
        "name": "Commercial Dishwashers",
        "href": "/category/restaurant-equipment/commercial-dishwashers"
      },
      {
        "name": "Commercial Blenders",
        "href": "/category/restaurant-equipment/commercial-blenders"
      },
      {
        "name": "Rapid Cook Ovens",
        "href": "/category/restaurant-equipment/rapid-cook-ovens"
      },
      {
        "name": "Vacuum Packaging Machines",
        "href": "/category/restaurant-equipment/vacuum-packaging-machines"
      },
      {
        "name": "Commercial Microwaves",
        "href": "/category/restaurant-equipment/commercial-microwaves"
      },
      {
        "name": "Charbroilers",
        "href": "/category/restaurant-equipment/charbroilers"
      },
      {
        "name": "Espresso Machines",
        "href": "/category/restaurant-equipment/espresso-machines"
      },
      {
        "name": "Steam Tables",
        "href": "/category/restaurant-equipment/steam-tables"
      },
      {
        "name": "Immersion Blenders",
        "href": "/category/restaurant-equipment/immersion-blenders"
      },
      {
        "name": "Coffee Machines",
        "href": "/category/restaurant-equipment/coffee-machines"
      },
      {
        "name": "Toasters",
        "href": "/category/restaurant-equipment/toasters"
      },
      {
        "name": "Conveyor and Impinger Ovens",
        "href": "/category/restaurant-equipment/conveyor-and-impinger-ovens"
      },
      {
        "name": "Commercial Faucets",
        "href": "/category/restaurant-equipment/commercial-faucets"
      }
    ]
  },
  {
    "name": "Refrigeration",
    "href": "/category/refrigeration",
    "moreIn": "Refrigeration",
    "featured": [
      {
        "name": "Commercial Ice Equipment and Supplies",
        "image": "/mega/1-0.jpg",
        "href": "/category/refrigeration/commercial-ice-equipment-and-supplies"
      },
      {
        "name": "Merchandising and Display Refrigeration",
        "image": "/mega/1-1.jpg",
        "href": "/category/refrigeration/merchandising-and-display-refrigeration"
      },
      {
        "name": "Reach-In Refrigerators and Freezers",
        "image": "/mega/1-2.jpg",
        "href": "/category/refrigeration/reach-in-refrigerators-and-freezers"
      },
      {
        "name": "Refrigerated Prep Tables",
        "image": "/mega/1-3.jpg",
        "href": "/category/refrigeration/refrigerated-prep-tables"
      },
      {
        "name": "Bar Refrigeration",
        "image": "/mega/1-4.jpg",
        "href": "/category/refrigeration/bar-refrigeration"
      },
      {
        "name": "Walk-In Refrigeration",
        "image": "/mega/1-5.jpg",
        "href": "/category/refrigeration/walk-in-refrigeration"
      },
      {
        "name": "Commercial Ice Cream Freezers",
        "image": "/mega/1-6.jpg",
        "href": "/category/refrigeration/commercial-ice-cream-freezers"
      },
      {
        "name": "Undercounter Refrigerators",
        "image": "/mega/1-7.jpg",
        "href": "/category/refrigeration/undercounter-refrigerators"
      }
    ],
    "more": [
      {
        "name": "Sandwich & Salad Prep Refrigerators",
        "href": "/category/refrigeration/sandwich-and-salad-prep-refrigerators"
      },
      {
        "name": "Reach-In Refrigerators",
        "href": "/category/refrigeration/reach-in-refrigerators"
      },
      {
        "name": "Reach-In Freezers",
        "href": "/category/refrigeration/reach-in-freezers"
      },
      {
        "name": "Glass Door Refrigerators",
        "href": "/category/refrigeration/glass-door-refrigerators"
      },
      {
        "name": "Back Bar Coolers",
        "href": "/category/refrigeration/back-bar-coolers"
      },
      {
        "name": "Beer Dispensers",
        "href": "/category/refrigeration/beer-dispensers"
      },
      {
        "name": "Air Curtain Merchandisers",
        "href": "/category/refrigeration/air-curtain-merchandisers"
      },
      {
        "name": "Pizza Prep Refrigerators",
        "href": "/category/refrigeration/pizza-prep-refrigerators"
      },
      {
        "name": "Commercial Chef Bases",
        "href": "/category/refrigeration/commercial-chef-bases"
      },
      {
        "name": "Dry and Refrigerated Bakery Cases",
        "href": "/category/refrigeration/dry-and-refrigerated-bakery-cases"
      },
      {
        "name": "Worktop Refrigerators",
        "href": "/category/refrigeration/worktop-refrigerators"
      },
      {
        "name": "Walk-In Coolers / Refrigerators",
        "href": "/category/refrigeration/walk-in-coolers-refrigerators"
      },
      {
        "name": "Bottle Coolers",
        "href": "/category/refrigeration/bottle-coolers"
      },
      {
        "name": "Ice Cream Dipping Cabinets",
        "href": "/category/refrigeration/ice-cream-dipping-cabinets"
      },
      {
        "name": "Glass Door Freezers",
        "href": "/category/refrigeration/glass-door-freezers"
      },
      {
        "name": "Glass Top Display Freezers",
        "href": "/category/refrigeration/glass-top-display-freezers"
      },
      {
        "name": "Walk-In Freezers",
        "href": "/category/refrigeration/walk-in-freezers"
      },
      {
        "name": "Undercounter Freezers",
        "href": "/category/refrigeration/undercounter-freezers"
      },
      {
        "name": "Meat & Deli Cases",
        "href": "/category/refrigeration/meat-and-deli-cases"
      },
      {
        "name": "Countertop Glass Door Refrigeration",
        "href": "/category/refrigeration/countertop-glass-door-refrigeration"
      },
      {
        "name": "Commercial Chest Freezers",
        "href": "/category/refrigeration/commercial-chest-freezers"
      },
      {
        "name": "Worktop Freezers",
        "href": "/category/refrigeration/worktop-freezers"
      },
      {
        "name": "Commercial Ice Cream Makers",
        "href": "/category/refrigeration/commercial-ice-cream-makers"
      },
      {
        "name": "Wine Refrigeration",
        "href": "/category/refrigeration/wine-refrigeration"
      }
    ]
  },
  {
    "name": "Smallwares",
    "href": "/category/smallwares",
    "moreIn": "Smallwares",
    "featured": [
      {
        "name": "Cookware",
        "image": "/mega/2-0.jpg",
        "href": "/category/smallwares/cookware"
      },
      {
        "name": "Food Storage Supplies",
        "image": "/mega/2-1.jpg",
        "href": "/category/smallwares/food-storage-supplies"
      },
      {
        "name": "Kitchen Hand Tools",
        "image": "/mega/2-2.jpg",
        "href": "/category/smallwares/kitchen-hand-tools"
      },
      {
        "name": "Kitchen Cutlery",
        "image": "/mega/2-3.jpg",
        "href": "/category/smallwares/kitchen-cutlery"
      },
      {
        "name": "Baking Smallwares",
        "image": "/mega/2-4.jpg",
        "href": "/category/smallwares/baking-smallwares"
      },
      {
        "name": "Beverage Service Supplies",
        "image": "/mega/2-5.jpg",
        "href": "/category/smallwares/beverage-service-supplies"
      },
      {
        "name": "Chafing Dishes and Accessories",
        "image": "/mega/2-6.jpg",
        "href": "/category/smallwares/chafing-dishes-and-accessories"
      },
      {
        "name": "Kitchen Supplies",
        "image": "/mega/2-7.jpg",
        "href": "/category/smallwares/kitchen-supplies"
      }
    ],
    "more": [
      {
        "name": "Bartending Supplies",
        "href": "/category/smallwares/bartending-supplies"
      },
      {
        "name": "Restaurant Signs",
        "href": "/category/smallwares/restaurant-signs"
      },
      {
        "name": "Host and Server Supplies",
        "href": "/category/smallwares/host-and-server-supplies"
      },
      {
        "name": "Hotel and Restaurant Linens",
        "href": "/category/smallwares/hotel-and-restaurant-linens"
      },
      {
        "name": "Food Storage Containers",
        "href": "/category/smallwares/food-storage-containers"
      },
      {
        "name": "Bun / Sheet Pans",
        "href": "/category/smallwares/bun-sheet-pans"
      },
      {
        "name": "Stainless Steel Steam Table Pans",
        "href": "/category/smallwares/stainless-steel-steam-table-pans"
      },
      {
        "name": "Plastic Food Pans",
        "href": "/category/smallwares/plastic-food-pans"
      },
      {
        "name": "Food Storage Boxes",
        "href": "/category/smallwares/food-storage-boxes"
      },
      {
        "name": "Chafing Dishes",
        "href": "/category/smallwares/chafing-dishes"
      },
      {
        "name": "Frying Pans",
        "href": "/category/smallwares/frying-pans"
      },
      {
        "name": "Ingredient Bins",
        "href": "/category/smallwares/ingredient-bins"
      },
      {
        "name": "Restaurant Aprons",
        "href": "/category/smallwares/restaurant-aprons"
      },
      {
        "name": "Cup Dispensers and Lid Organizers",
        "href": "/category/smallwares/cup-dispensers-and-lid-organizers"
      },
      {
        "name": "Stock Pots",
        "href": "/category/smallwares/stock-pots"
      },
      {
        "name": "Cutting Boards",
        "href": "/category/smallwares/cutting-boards"
      },
      {
        "name": "Bakery Display Cases",
        "href": "/category/smallwares/bakery-display-cases"
      },
      {
        "name": "Cake Pans",
        "href": "/category/smallwares/cake-pans"
      },
      {
        "name": "Measuring Cups and Spoons",
        "href": "/category/smallwares/measuring-cups-and-spoons"
      },
      {
        "name": "Kitchen Utensils",
        "href": "/category/smallwares/kitchen-utensils"
      },
      {
        "name": "Corporate Apparel",
        "href": "/category/smallwares/corporate-apparel"
      },
      {
        "name": "Piping Bags and Icing Tips",
        "href": "/category/smallwares/piping-bags-and-icing-tips"
      },
      {
        "name": "Pocket Thermometers",
        "href": "/category/smallwares/pocket-thermometers"
      },
      {
        "name": "Beverage Dispensers",
        "href": "/category/smallwares/beverage-dispensers"
      }
    ]
  },
  {
    "name": "Food & Beverage",
    "href": "/category/food-and-beverage",
    "moreIn": "Food & Beverage",
    "featured": [
      {
        "name": "Baked Goods and Desserts",
        "image": "/mega/3-0.jpg",
        "href": "/category/food-and-beverage/baked-goods-and-desserts"
      },
      {
        "name": "Beverages",
        "image": "/mega/3-1.jpg",
        "href": "/category/food-and-beverage/beverages"
      },
      {
        "name": "Baking Ingredients",
        "image": "/mega/3-2.jpg",
        "href": "/category/food-and-beverage/baking-ingredients"
      },
      {
        "name": "Condiments and Sauces",
        "image": "/mega/3-3.jpg",
        "href": "/category/food-and-beverage/condiments-and-sauces"
      },
      {
        "name": "Bulk Herbs and Spices",
        "image": "/mega/3-4.jpg",
        "href": "/category/food-and-beverage/bulk-herbs-and-spices"
      },
      {
        "name": "Fruits and Vegetables",
        "image": "/mega/3-5.jpg",
        "href": "/category/food-and-beverage/fruits-and-vegetables"
      },
      {
        "name": "Bulk Foods & Kitchen Staples",
        "image": "/mega/3-6.jpg",
        "href": "/category/food-and-beverage/bulk-foods-and-kitchen-staples"
      },
      {
        "name": "Concessions and Snacks",
        "image": "/mega/3-7.jpg",
        "href": "/category/food-and-beverage/concessions-and-snacks"
      }
    ],
    "more": [
      {
        "name": "Prepared Foods",
        "href": "/category/food-and-beverage/prepared-foods"
      },
      {
        "name": "Meat and Seafood",
        "href": "/category/food-and-beverage/meat-and-seafood"
      },
      {
        "name": "Cooking Oil and Sprays",
        "href": "/category/food-and-beverage/cooking-oil-and-sprays"
      },
      {
        "name": "Ice Cream and Frozen Treats",
        "href": "/category/food-and-beverage/ice-cream-and-frozen-treats"
      },
      {
        "name": "Vegan and Plant-Based Foods",
        "href": "/category/food-and-beverage/vegan-and-plant-based-foods"
      },
      {
        "name": "Dairy",
        "href": "/category/food-and-beverage/dairy"
      },
      {
        "name": "Beverage Flavoring Syrups",
        "href": "/category/food-and-beverage/beverage-flavoring-syrups"
      },
      {
        "name": "Bar Drink Mixes",
        "href": "/category/food-and-beverage/bar-drink-mixes"
      },
      {
        "name": "Flavoring Sauces",
        "href": "/category/food-and-beverage/flavoring-sauces"
      },
      {
        "name": "Non-Dairy Milk",
        "href": "/category/food-and-beverage/non-dairy-milk"
      },
      {
        "name": "Baking Toppings",
        "href": "/category/food-and-beverage/baking-toppings"
      },
      {
        "name": "Smoothie Mixes",
        "href": "/category/food-and-beverage/smoothie-mixes"
      },
      {
        "name": "Bulk Chocolate",
        "href": "/category/food-and-beverage/bulk-chocolate"
      },
      {
        "name": "Sweeteners",
        "href": "/category/food-and-beverage/sweeteners"
      },
      {
        "name": "Ice Cream Cones",
        "href": "/category/food-and-beverage/ice-cream-cones"
      },
      {
        "name": "Bulk Flour",
        "href": "/category/food-and-beverage/bulk-flour"
      },
      {
        "name": "Nuts and Seeds",
        "href": "/category/food-and-beverage/nuts-and-seeds"
      },
      {
        "name": "Salt and Pepper",
        "href": "/category/food-and-beverage/salt-and-pepper"
      },
      {
        "name": "Extracts, Pastes, & Imitation Flavorings",
        "href": "/category/food-and-beverage/extracts-pastes-and-imitation-flavorings"
      },
      {
        "name": "Coffee and Espresso",
        "href": "/category/food-and-beverage/coffee-and-espresso"
      },
      {
        "name": "Soda",
        "href": "/category/food-and-beverage/soda"
      },
      {
        "name": "Cheese Spreads",
        "href": "/category/food-and-beverage/cheese-spreads"
      },
      {
        "name": "Bakery Decorating Ingredients",
        "href": "/category/food-and-beverage/bakery-decorating-ingredients"
      }
    ]
  },
  {
    "name": "Tabletop",
    "href": "/category/tabletop",
    "moreIn": "Tabletop",
    "featured": [
      {
        "name": "Flatware",
        "image": "/mega/4-0.jpg",
        "href": "/category/tabletop/flatware"
      },
      {
        "name": "Beverageware",
        "image": "/mega/4-1.jpg",
        "href": "/category/tabletop/beverageware"
      },
      {
        "name": "Table Decor and Displays",
        "image": "/mega/4-2.jpg",
        "href": "/category/tabletop/table-decor-and-displays"
      },
      {
        "name": "Servingware and Dinnerware Accessories",
        "image": "/mega/4-3.jpg",
        "href": "/category/tabletop/servingware-and-dinnerware-accessories"
      },
      {
        "name": "Restaurant Dinnerware",
        "image": "/mega/4-4.jpg",
        "href": "/category/tabletop/restaurant-dinnerware"
      },
      {
        "name": "China Dinnerware",
        "image": "/mega/4-5.jpg",
        "href": "/category/tabletop/china-dinnerware"
      },
      {
        "name": "Melamine Dinnerware and Displayware",
        "image": "/mega/4-6.jpg",
        "href": "/category/tabletop/melamine-dinnerware-and-displayware"
      },
      {
        "name": "Condiment Holders and Dispensers",
        "image": "/mega/4-7.jpg",
        "href": "/category/tabletop/condiment-holders-and-dispensers"
      }
    ],
    "more": [
      {
        "name": "Cocktail Glasses",
        "href": "/category/tabletop/cocktail-glasses"
      },
      {
        "name": "Wine Glasses",
        "href": "/category/tabletop/wine-glasses"
      },
      {
        "name": "Beer Glasses",
        "href": "/category/tabletop/beer-glasses"
      },
      {
        "name": "Knives",
        "href": "/category/tabletop/knives"
      },
      {
        "name": "Forks",
        "href": "/category/tabletop/forks"
      },
      {
        "name": "Spoons",
        "href": "/category/tabletop/spoons"
      },
      {
        "name": "Plastic Tumblers",
        "href": "/category/tabletop/plastic-tumblers"
      },
      {
        "name": "Squeeze Bottles",
        "href": "/category/tabletop/squeeze-bottles"
      },
      {
        "name": "Menu Holders",
        "href": "/category/tabletop/menu-holders"
      },
      {
        "name": "Reusable Plastic Beverageware",
        "href": "/category/tabletop/reusable-plastic-beverageware"
      },
      {
        "name": "Pitchers",
        "href": "/category/tabletop/pitchers"
      },
      {
        "name": "Drinking Glasses",
        "href": "/category/tabletop/drinking-glasses"
      },
      {
        "name": "Decanters, Carafes, and Bottles",
        "href": "/category/tabletop/decanters-carafes-and-bottles"
      },
      {
        "name": "Porcelain Plates",
        "href": "/category/tabletop/porcelain-plates"
      },
      {
        "name": "Melamine Bowls",
        "href": "/category/tabletop/melamine-bowls"
      },
      {
        "name": "Melamine Plates",
        "href": "/category/tabletop/melamine-plates"
      },
      {
        "name": "China Bowls",
        "href": "/category/tabletop/china-bowls"
      },
      {
        "name": "Serving and Display Platters / Trays",
        "href": "/category/tabletop/serving-and-display-platters-trays"
      },
      {
        "name": "Ramekins and Sauce Cups",
        "href": "/category/tabletop/ramekins-and-sauce-cups"
      },
      {
        "name": "Stoneware Plates",
        "href": "/category/tabletop/stoneware-plates"
      },
      {
        "name": "Restaurant Food Serving Baskets",
        "href": "/category/tabletop/restaurant-food-serving-baskets"
      },
      {
        "name": "Serving and Display Bowls",
        "href": "/category/tabletop/serving-and-display-bowls"
      },
      {
        "name": "Coffee Mugs, Tea Cups, & Saucers",
        "href": "/category/tabletop/coffee-mugs-tea-cups-and-saucers"
      },
      {
        "name": "Au Gratin Dishes / Rarebit Dishes",
        "href": "/category/tabletop/au-gratin-dishes-rarebit-dishes"
      }
    ]
  },
  {
    "name": "Disposables",
    "href": "/category/disposables",
    "moreIn": "Disposables",
    "featured": [
      {
        "name": "Take-Out Containers",
        "image": "/mega/5-0.jpg",
        "href": "/category/disposables/take-out-containers"
      },
      {
        "name": "Eco-Friendly Disposables",
        "image": "/mega/5-1.jpg",
        "href": "/category/disposables/eco-friendly-disposables"
      },
      {
        "name": "Disposable Plastic Dinnerware",
        "image": "/mega/5-2.jpg",
        "href": "/category/disposables/disposable-plastic-dinnerware"
      },
      {
        "name": "Disposable Food Packaging Supplies",
        "image": "/mega/5-3.jpg",
        "href": "/category/disposables/disposable-food-packaging-supplies"
      },
      {
        "name": "Disposable Bakery Supplies",
        "image": "/mega/5-4.jpg",
        "href": "/category/disposables/disposable-bakery-supplies"
      },
      {
        "name": "Catering Disposables",
        "image": "/mega/5-5.jpg",
        "href": "/category/disposables/catering-disposables"
      },
      {
        "name": "Paperware",
        "image": "/mega/5-6.jpg",
        "href": "/category/disposables/paperware"
      },
      {
        "name": "Tabletop Disposables",
        "image": "/mega/5-7.jpg",
        "href": "/category/disposables/tabletop-disposables"
      }
    ],
    "more": [
      {
        "name": "Disposable Concession Supplies",
        "href": "/category/disposables/disposable-concession-supplies"
      },
      {
        "name": "Consumer Packaging",
        "href": "/category/disposables/consumer-packaging"
      },
      {
        "name": "Disposable Gloves",
        "href": "/category/disposables/disposable-gloves"
      },
      {
        "name": "Disposable Plastic Cups",
        "href": "/category/disposables/disposable-plastic-cups"
      },
      {
        "name": "Paper Bags",
        "href": "/category/disposables/paper-bags"
      },
      {
        "name": "Deli Containers",
        "href": "/category/disposables/deli-containers"
      },
      {
        "name": "Paper Take-Out Boxes",
        "href": "/category/disposables/paper-take-out-boxes"
      },
      {
        "name": "Plastic To-Go Containers",
        "href": "/category/disposables/plastic-to-go-containers"
      },
      {
        "name": "Portion Cups & Lids",
        "href": "/category/disposables/portion-cups-and-lids"
      },
      {
        "name": "Paper Hot Cups",
        "href": "/category/disposables/paper-hot-cups"
      },
      {
        "name": "Plastic Cutlery / Utensils",
        "href": "/category/disposables/plastic-cutlery-utensils"
      },
      {
        "name": "Disposable Soup Containers",
        "href": "/category/disposables/disposable-soup-containers"
      },
      {
        "name": "Paper Napkins",
        "href": "/category/disposables/paper-napkins"
      },
      {
        "name": "Muffin & Cupcake Packaging",
        "href": "/category/disposables/muffin-and-cupcake-packaging"
      },
      {
        "name": "Foam Take-Out Containers",
        "href": "/category/disposables/foam-take-out-containers"
      },
      {
        "name": "Cake Boxes and Bakery Boxes",
        "href": "/category/disposables/cake-boxes-and-bakery-boxes"
      },
      {
        "name": "Clear Hinged Take-Out Containers",
        "href": "/category/disposables/clear-hinged-take-out-containers"
      },
      {
        "name": "Plastic Bags",
        "href": "/category/disposables/plastic-bags"
      },
      {
        "name": "Aluminum Foil Pans",
        "href": "/category/disposables/aluminum-foil-pans"
      },
      {
        "name": "Straws",
        "href": "/category/disposables/straws"
      },
      {
        "name": "Plastic Glassware & Barware",
        "href": "/category/disposables/plastic-glassware-and-barware"
      },
      {
        "name": "Foam Cups and Lids",
        "href": "/category/disposables/foam-cups-and-lids"
      },
      {
        "name": "Plastic Disposable Plates",
        "href": "/category/disposables/plastic-disposable-plates"
      }
    ]
  },
  {
    "name": "Furniture",
    "href": "/category/furniture",
    "moreIn": "Furniture",
    "featured": [
      {
        "name": "Restaurant Furniture",
        "image": "/mega/6-0.jpg",
        "href": "/category/furniture/restaurant-furniture"
      },
      {
        "name": "Outdoor Furniture",
        "image": "/mega/6-1.jpg",
        "href": "/category/furniture/outdoor-furniture"
      },
      {
        "name": "Restaurant Seating",
        "image": "/mega/6-2.jpg",
        "href": "/category/furniture/restaurant-seating"
      },
      {
        "name": "Folding Tables",
        "image": "/mega/6-3.jpg",
        "href": "/category/furniture/folding-tables"
      },
      {
        "name": "Office Furniture",
        "image": "/mega/6-4.jpg",
        "href": "/category/furniture/office-furniture"
      },
      {
        "name": "School Furniture",
        "image": "/mega/6-5.jpg",
        "href": "/category/furniture/school-furniture"
      },
      {
        "name": "Hotel Furniture",
        "image": "/mega/6-6.jpg",
        "href": "/category/furniture/hotel-furniture"
      },
      {
        "name": "Park Furniture",
        "image": "/mega/6-7.jpg",
        "href": "/category/furniture/park-furniture"
      }
    ],
    "more": [
      {
        "name": "Table Tops",
        "href": "/category/furniture/table-tops"
      },
      {
        "name": "Outdoor Restaurant Tables",
        "href": "/category/furniture/outdoor-restaurant-tables"
      },
      {
        "name": "Restaurant Bar Stools",
        "href": "/category/furniture/restaurant-bar-stools"
      },
      {
        "name": "Restaurant Chairs",
        "href": "/category/furniture/restaurant-chairs"
      },
      {
        "name": "Outdoor Restaurant Chairs",
        "href": "/category/furniture/outdoor-restaurant-chairs"
      },
      {
        "name": "Tables and Chair Sets",
        "href": "/category/furniture/tables-and-chair-sets"
      },
      {
        "name": "Restaurant Table Bases",
        "href": "/category/furniture/restaurant-table-bases"
      },
      {
        "name": "Outdoor Restaurant Bar Stools",
        "href": "/category/furniture/outdoor-restaurant-bar-stools"
      },
      {
        "name": "Commercial Patio Heaters",
        "href": "/category/furniture/commercial-patio-heaters"
      },
      {
        "name": "Banquet Chairs",
        "href": "/category/furniture/banquet-chairs"
      },
      {
        "name": "Restaurant Booths",
        "href": "/category/furniture/restaurant-booths"
      },
      {
        "name": "Outdoor Table Umbrellas and Bases",
        "href": "/category/furniture/outdoor-table-umbrellas-and-bases"
      },
      {
        "name": "High Chairs and Booster Seats",
        "href": "/category/furniture/high-chairs-and-booster-seats"
      },
      {
        "name": "Filing Cabinets",
        "href": "/category/furniture/filing-cabinets"
      },
      {
        "name": "Seminar Tables",
        "href": "/category/furniture/seminar-tables"
      },
      {
        "name": "Lobby, Reception, and Lounge Seating",
        "href": "/category/furniture/lobby-reception-and-lounge-seating"
      },
      {
        "name": "Office Chairs and Stools",
        "href": "/category/furniture/office-chairs-and-stools"
      },
      {
        "name": "Canopies and Canopy Accessories",
        "href": "/category/furniture/canopies-and-canopy-accessories"
      },
      {
        "name": "Desks and Desk Bases",
        "href": "/category/furniture/desks-and-desk-bases"
      },
      {
        "name": "Table Carts, Trucks, and Dollies",
        "href": "/category/furniture/table-carts-trucks-and-dollies"
      },
      {
        "name": "Retail Shelving and Displays",
        "href": "/category/furniture/retail-shelving-and-displays"
      },
      {
        "name": "Commercial Lighting",
        "href": "/category/furniture/commercial-lighting"
      }
    ]
  },
  {
    "name": "Storage & Transport",
    "href": "/category/storage-and-transport",
    "moreIn": "Storage & Transport",
    "featured": [
      {
        "name": "Commercial Shelving",
        "image": "/mega/7-0.jpg",
        "href": "/category/storage-and-transport/commercial-shelving"
      },
      {
        "name": "Food Storage Supplies",
        "image": "/mega/7-1.jpg",
        "href": "/category/storage-and-transport/food-storage-supplies"
      },
      {
        "name": "Storage Racks",
        "image": "/mega/7-2.jpg",
        "href": "/category/storage-and-transport/storage-racks"
      },
      {
        "name": "Carts",
        "image": "/mega/7-3.jpg",
        "href": "/category/storage-and-transport/carts"
      },
      {
        "name": "Trucks and Dollies",
        "image": "/mega/7-4.jpg",
        "href": "/category/storage-and-transport/trucks-and-dollies"
      },
      {
        "name": "Industrial Shelving",
        "image": "/mega/7-5.jpg",
        "href": "/category/storage-and-transport/industrial-shelving"
      },
      {
        "name": "Retail Shelving and Displays",
        "image": "/mega/7-6.jpg",
        "href": "/category/storage-and-transport/retail-shelving-and-displays"
      },
      {
        "name": "Insulated Food Carriers and Beverage Dispensers",
        "image": "/mega/7-7.jpg",
        "href": "/category/storage-and-transport/insulated-food-carriers-and-beverage-dispensers"
      }
    ],
    "more": [
      {
        "name": "Sheet Pan Racks",
        "href": "/category/storage-and-transport/sheet-pan-racks"
      },
      {
        "name": "Food Pan Carriers",
        "href": "/category/storage-and-transport/food-pan-carriers"
      },
      {
        "name": "Plastic Utility Carts and Bus Carts",
        "href": "/category/storage-and-transport/plastic-utility-carts-and-bus-carts"
      },
      {
        "name": "Glass Racks",
        "href": "/category/storage-and-transport/glass-racks"
      },
      {
        "name": "Dunnage Racks",
        "href": "/category/storage-and-transport/dunnage-racks"
      },
      {
        "name": "Hand Trucks",
        "href": "/category/storage-and-transport/hand-trucks"
      },
      {
        "name": "Platform Trucks",
        "href": "/category/storage-and-transport/platform-trucks"
      },
      {
        "name": "Dish and Flatware Racks",
        "href": "/category/storage-and-transport/dish-and-flatware-racks"
      },
      {
        "name": "Outdoor Storage",
        "href": "/category/storage-and-transport/outdoor-storage"
      },
      {
        "name": "Stock and Order Picking Carts",
        "href": "/category/storage-and-transport/stock-and-order-picking-carts"
      },
      {
        "name": "Workbenches",
        "href": "/category/storage-and-transport/workbenches"
      },
      {
        "name": "Metal Utility Carts",
        "href": "/category/storage-and-transport/metal-utility-carts"
      },
      {
        "name": "Trash Can and Recycling Dollies",
        "href": "/category/storage-and-transport/trash-can-and-recycling-dollies"
      },
      {
        "name": "Cutlery & Flatware Holders",
        "href": "/category/storage-and-transport/cutlery-and-flatware-holders"
      },
      {
        "name": "Bread Racks and Dollies",
        "href": "/category/storage-and-transport/bread-racks-and-dollies"
      },
      {
        "name": "Storage Bins",
        "href": "/category/storage-and-transport/storage-bins"
      },
      {
        "name": "Bun Pan Rack Covers",
        "href": "/category/storage-and-transport/bun-pan-rack-covers"
      },
      {
        "name": "Mobile Ice Bins",
        "href": "/category/storage-and-transport/mobile-ice-bins"
      },
      {
        "name": "Bus Tubs and Bus Boxes",
        "href": "/category/storage-and-transport/bus-tubs-and-bus-boxes"
      },
      {
        "name": "Gondola Shelving",
        "href": "/category/storage-and-transport/gondola-shelving"
      },
      {
        "name": "Bun Pan Trucks & Dollies",
        "href": "/category/storage-and-transport/bun-pan-trucks-and-dollies"
      },
      {
        "name": "Can Racks",
        "href": "/category/storage-and-transport/can-racks"
      },
      {
        "name": "Boltless Shelving",
        "href": "/category/storage-and-transport/boltless-shelving"
      },
      {
        "name": "Lockers",
        "href": "/category/storage-and-transport/lockers"
      },
      {
        "name": "Ice Transport Buckets",
        "href": "/category/storage-and-transport/ice-transport-buckets"
      }
    ]
  },
  {
    "name": "Janitorial",
    "href": "/category/janitorial",
    "moreIn": "Janitorial",
    "featured": [
      {
        "name": "Trash Cans and Recycling Bins",
        "image": "/mega/8-0.jpg",
        "href": "/category/janitorial/trash-cans-and-recycling-bins"
      },
      {
        "name": "Cleaning Chemicals",
        "image": "/mega/8-1.jpg",
        "href": "/category/janitorial/cleaning-chemicals"
      },
      {
        "name": "Janitorial Equipment",
        "image": "/mega/8-2.jpg",
        "href": "/category/janitorial/janitorial-equipment"
      },
      {
        "name": "Restroom Supplies",
        "image": "/mega/8-3.jpg",
        "href": "/category/janitorial/restroom-supplies"
      },
      {
        "name": "Janitorial Disposables",
        "image": "/mega/8-4.jpg",
        "href": "/category/janitorial/janitorial-disposables"
      },
      {
        "name": "Cleaning Tools & Supplies",
        "image": "/mega/8-5.jpg",
        "href": "/category/janitorial/cleaning-tools-and-supplies"
      },
      {
        "name": "Commercial Dishwashers",
        "image": "/mega/8-6.jpg",
        "href": "/category/janitorial/commercial-dishwashers"
      },
      {
        "name": "Warewashing / Laundry",
        "image": "/mega/8-7.jpg",
        "href": "/category/janitorial/warewashing-laundry"
      }
    ],
    "more": [
      {
        "name": "Hand Soap and Sanitizer",
        "href": "/category/janitorial/hand-soap-and-sanitizer"
      },
      {
        "name": "Floor Care Supplies",
        "href": "/category/janitorial/floor-care-supplies"
      },
      {
        "name": "Commercial Floor Mats",
        "href": "/category/janitorial/commercial-floor-mats"
      },
      {
        "name": "Anti-Fatigue Kitchen Mats",
        "href": "/category/janitorial/anti-fatigue-kitchen-mats"
      },
      {
        "name": "Vacuum Cleaners",
        "href": "/category/janitorial/vacuum-cleaners"
      },
      {
        "name": "Traffic Doors",
        "href": "/category/janitorial/traffic-doors"
      },
      {
        "name": "Fire Extinguishers",
        "href": "/category/janitorial/fire-extinguishers"
      },
      {
        "name": "Carpet Shampooers, Extractors, & Steamers",
        "href": "/category/janitorial/carpet-shampooers-extractors-and-steamers"
      },
      {
        "name": "Commercial Paper Towel Dispensers",
        "href": "/category/janitorial/commercial-paper-towel-dispensers"
      },
      {
        "name": "Flying Insect Control Products",
        "href": "/category/janitorial/flying-insect-control-products"
      },
      {
        "name": "Baby Changing Tables",
        "href": "/category/janitorial/baby-changing-tables"
      },
      {
        "name": "Wet Mop Buckets / Wringers",
        "href": "/category/janitorial/wet-mop-buckets-wringers"
      },
      {
        "name": "Electric Hand Dryers",
        "href": "/category/janitorial/electric-hand-dryers"
      },
      {
        "name": "All Purpose Cleaners",
        "href": "/category/janitorial/all-purpose-cleaners"
      },
      {
        "name": "Commercial Brooms",
        "href": "/category/janitorial/commercial-brooms"
      },
      {
        "name": "Wet Mops",
        "href": "/category/janitorial/wet-mops"
      },
      {
        "name": "Oven & Grill Cleaner",
        "href": "/category/janitorial/oven-and-grill-cleaner"
      },
      {
        "name": "Toilet Paper Dispensers",
        "href": "/category/janitorial/toilet-paper-dispensers"
      },
      {
        "name": "Scrubbers and Sponges",
        "href": "/category/janitorial/scrubbers-and-sponges"
      },
      {
        "name": "Air Curtains",
        "href": "/category/janitorial/air-curtains"
      },
      {
        "name": "Plastic Utility Trash Cans",
        "href": "/category/janitorial/plastic-utility-trash-cans"
      }
    ]
  },
  {
    "name": "Industrial",
    "href": "/category/industrial",
    "moreIn": "Industrial",
    "featured": [
      {
        "name": "Tools & Equipment",
        "image": "/mega/9-0.jpg",
        "href": "/category/industrial/tools-and-equipment"
      },
      {
        "name": "Facility & Maintenance",
        "image": "/mega/9-1.jpg",
        "href": "/category/industrial/facility-and-maintenance"
      },
      {
        "name": "Shipping & Receiving",
        "image": "/mega/9-2.jpg",
        "href": "/category/industrial/shipping-and-receiving"
      },
      {
        "name": "Storage & Workspace",
        "image": "/mega/9-3.jpg",
        "href": "/category/industrial/storage-and-workspace"
      },
      {
        "name": "Industrial Packaging Supplies",
        "image": "/mega/9-4.jpg",
        "href": "/category/industrial/industrial-packaging-supplies"
      },
      {
        "name": "Industrial Safety Products",
        "image": "/mega/9-5.jpg",
        "href": "/category/industrial/industrial-safety-products"
      },
      {
        "name": "Heating, Cooling, and Air Quality",
        "image": "/mega/9-6.jpg",
        "href": "/category/industrial/heating-cooling-and-air-quality"
      },
      {
        "name": "Industrial Clothing",
        "image": "/mega/9-7.jpg",
        "href": "/category/industrial/industrial-clothing"
      }
    ],
    "more": [
      {
        "name": "Hand Trucks",
        "href": "/category/industrial/hand-trucks"
      },
      {
        "name": "Pallet Trucks",
        "href": "/category/industrial/pallet-trucks"
      },
      {
        "name": "Loading Dock Equipment",
        "href": "/category/industrial/loading-dock-equipment"
      },
      {
        "name": "Industrial Carts",
        "href": "/category/industrial/industrial-carts"
      },
      {
        "name": "Trash Carts with Wheels",
        "href": "/category/industrial/trash-carts-with-wheels"
      },
      {
        "name": "Fire Extinguishers",
        "href": "/category/industrial/fire-extinguishers"
      },
      {
        "name": "Industrial Vacuums",
        "href": "/category/industrial/industrial-vacuums"
      },
      {
        "name": "Pallets",
        "href": "/category/industrial/pallets"
      },
      {
        "name": "PPE Equipment",
        "href": "/category/industrial/ppe-equipment"
      },
      {
        "name": "Industrial Fans",
        "href": "/category/industrial/industrial-fans"
      },
      {
        "name": "Generators and Portable Power Stations",
        "href": "/category/industrial/generators-and-portable-power-stations"
      },
      {
        "name": "Industrial Shelving",
        "href": "/category/industrial/industrial-shelving"
      },
      {
        "name": "Industrial Workbenches",
        "href": "/category/industrial/industrial-workbenches"
      },
      {
        "name": "Industrial Hoists and Cranes",
        "href": "/category/industrial/industrial-hoists-and-cranes"
      },
      {
        "name": "Material Handling Equipment",
        "href": "/category/industrial/material-handling-equipment"
      },
      {
        "name": "Drum Handling Equipment",
        "href": "/category/industrial/drum-handling-equipment"
      },
      {
        "name": "Hot / Cold Packs",
        "href": "/category/industrial/hot-cold-packs"
      },
      {
        "name": "Insulated Shipping Boxes and Packaging",
        "href": "/category/industrial/insulated-shipping-boxes-and-packaging"
      },
      {
        "name": "Stretch Wrap, Stretch Film, and Pallet Wrap",
        "href": "/category/industrial/stretch-wrap-stretch-film-and-pallet-wrap"
      },
      {
        "name": "Mini Splits",
        "href": "/category/industrial/mini-splits"
      },
      {
        "name": "Mailing & Shipping Labels",
        "href": "/category/industrial/mailing-and-shipping-labels"
      },
      {
        "name": "Maintenance Tools",
        "href": "/category/industrial/maintenance-tools"
      }
    ]
  },
  {
    "name": "Business Type",
    "href": "/category/business-type",
    "moreIn": "Business Type",
    "featured": [
      {
        "name": "Trending Products",
        "image": "/mega/10-0.jpg",
        "href": "/category/business-type/trending-products"
      },
      {
        "name": "Business Types",
        "image": "/mega/10-1.jpg",
        "href": "/category/business-type/business-types"
      },
      {
        "name": "Foodservice",
        "image": "/mega/10-2.jpg",
        "href": "/category/business-type/foodservice"
      },
      {
        "name": "Events",
        "image": "/mega/10-3.jpg",
        "href": "/category/business-type/events"
      },
      {
        "name": "Retail Store Supplies",
        "image": "/mega/10-4.jpg",
        "href": "/category/business-type/retail-store-supplies"
      },
      {
        "name": "Office Products",
        "image": "/mega/10-5.jpg",
        "href": "/category/business-type/office-products"
      }
    ],
    "more": [
      {
        "name": "Bakery Supplies",
        "href": "/category/business-type/bakery-supplies"
      },
      {
        "name": "Food Truck Supplies",
        "href": "/category/business-type/food-truck-supplies"
      },
      {
        "name": "Hotel Supplies",
        "href": "/category/business-type/hotel-supplies"
      },
      {
        "name": "Bar Supplies",
        "href": "/category/business-type/bar-supplies"
      },
      {
        "name": "Coffee Shop Supplies",
        "href": "/category/business-type/coffee-shop-supplies"
      },
      {
        "name": "Catering Supplies",
        "href": "/category/business-type/catering-supplies"
      },
      {
        "name": "Chef Supplies",
        "href": "/category/business-type/chef-supplies"
      },
      {
        "name": "Butcher Shop Supplies",
        "href": "/category/business-type/butcher-shop-supplies"
      },
      {
        "name": "Pizzeria Supplies",
        "href": "/category/business-type/pizzeria-supplies"
      },
      {
        "name": "Asian Restaurant Supplies",
        "href": "/category/business-type/asian-restaurant-supplies"
      },
      {
        "name": "Candy Making Supplies",
        "href": "/category/business-type/candy-making-supplies"
      },
      {
        "name": "Ice Cream Shop Supplies",
        "href": "/category/business-type/ice-cream-shop-supplies"
      },
      {
        "name": "Buffet & Serving Line Supplies",
        "href": "/category/business-type/buffet-and-serving-line-supplies"
      },
      {
        "name": "Grocery Store Supplies",
        "href": "/category/business-type/grocery-store-supplies"
      },
      {
        "name": "Concession Supplies",
        "href": "/category/business-type/concession-supplies"
      },
      {
        "name": "Mexican Restaurant Supplies",
        "href": "/category/business-type/mexican-restaurant-supplies"
      },
      {
        "name": "Donut Shop Equipment",
        "href": "/category/business-type/donut-shop-equipment"
      },
      {
        "name": "Day Care Supplies",
        "href": "/category/business-type/day-care-supplies"
      },
      {
        "name": "Sandwich Shop",
        "href": "/category/business-type/sandwich-shop"
      },
      {
        "name": "Vending Machine Supplies",
        "href": "/category/business-type/vending-machine-supplies"
      },
      {
        "name": "Farmer's Market Supplies",
        "href": "/category/business-type/farmer-s-market-supplies"
      }
    ]
  }
];
