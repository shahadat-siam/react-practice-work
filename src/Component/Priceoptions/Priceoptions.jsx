import PriceOption from "../PriceOption/PriceOption";

const Priceoptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Locker room access",
        "Personal trainer",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 49.99,
      features: [
        "Basic Membership",
        "group fitness classes",
        "Sauna and steam room access",
        "Personal trainer ",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 79.99,
      features: [
        "Standard Membership",
        "Unlimited access  ",
        "Access to swimming pool",
        "Towel service",
        "Monthly body composition  ",
      ],
    },
    {
      id: 4,
      name: "Family Membership",
      price: 119.99,
      features: [
        "Access for two adults ",
        "Standard Membership",
        "Unlimited access ",
        "Access to swimming pool", 
      ],
    },
    {
      id: 5,
      name: "Corporate Membership",
      price: 99.99,
      features: [
        "Discounted rate  ",
        "Standard Membership",
        "Unlimited access ",
        " swimming pool",
        "Towel service", 
      ],
    },
  ];

  return (
    <div className="my-4 text-center">
      <h2 className="text-5xl my-5 text-center font-bold text-[#898121]">Best price in the towm</h2>
      <div className=" grid lg:grid-cols-3 grid-cols-1 gap-6 m-10">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default Priceoptions;
