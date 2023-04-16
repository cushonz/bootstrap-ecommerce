import mosspole1 from "../images/mossPole1.jpg";
import bulb from "../images/bulb-planter.jpg";
import bulb1 from "../images/bulb-2.jpg";

const products = [
  {
    id: 1,
    name: "Moss Pole",
    description:
      "Introducing the ultimate solution to promote healthy plant growth - the Mosspole! Our Mosspoles provide a rough surface for plants to cling onto, allowing them to thrive and reach their full potential. Made from sustainable materials, these eco-friendly poles are designed to keep your plants healthy and happy. The modular design allows you to customize the length to fit your specific needs. With each Mosspole measuring 6 inches in length, you can create the perfect structure for your climbing plants to grow and flourish. Invest in your plant's health and get your Mosspoles today!",
    price: 6.0,
    images: [
      mosspole1,
      "https://via.placeholder.com/150/0000FF/FFFFFF/?text=Image+2",
      "https://via.placeholder.com/150/FF0000/FFFFFF/?text=Image+3",
    ],
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is the second product.",
    price: 15.99,
    images: [bulb, bulb1],
  },
  // Add more products as needed
];

export default products;
