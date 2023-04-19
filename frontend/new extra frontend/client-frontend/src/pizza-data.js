const pizzas = [
  {
    name: "Margherita",
    varients: ["SMALL", "MEDIUM", "LARGE"],
    prices: [
      {
        SMALL: 99,
        MEDIUM: 199,
        LARGE: 399,
      },
    ],
    category: "veg",
    image: "/images/margherita.jpg",
    description: "Classic delight with 100% real mozzarella cheese",
  },
  {
    name: "Farmhouse",
    varients: ["SMALL", "MEDIUM", "LARGE"],
    prices: [
      {
        SMALL: 229,
        MEDIUM: 399,
        LARGE: 599,
      },
    ],
    category: "veg",
    image: "/images/farmhouse.jpg",
    description:
      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
  },
  {
    name: "Veggie Paradise",
    varients: ["SMALL", "MEDIUM", "LARGE"],
    prices: [
      {
        SMALL: 180,
        MEDIUM: 290,
        LARGE: 460,
      },
    ],
    category: "veg",
    description:
      "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
    image: "/images/veggie_paradise.jpg",
  },
  {
    name: "Chicken Golden Delight",
    varients: ["SMALL", "MEDIUM", "LARGE"],
    prices: [
      {
        SMALL: 249,
        MEDIUM: 349,
        LARGE: 599,
      },
    ],
    category: "nonveg",
    image: "/images/chicken_golden_delight.jpg",
    description:
      "Double pepper barbecue chicken, golden corn and extra cheese, true delight",
  },
  {
    name: "Chicken Pepperoni",
    varients: ["SMALL", "MEDIUM", "LARGE"],
    prices: [
      {
        SMALL: 320,
        MEDIUM: 580,
        LARGE: 800,
      },
    ],
    category: "nonveg",
    image: "/images/cheesepepperoni.jpg",
    description:
      "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
  },
  {
    name: "Indi Chicken Tikka",
    varients: ["SMALL", "MEDIUM", "LARGE"],
    prices: [
      {
        SMALL: 250,
        MEDIUM: 380,
        LARGE: 500,
      },
    ],
    category: "nonveg",
    image: "/images/IndianTandooriChickenTikka.jpg",
    description:
      "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
  },
];
export default pizzas;
