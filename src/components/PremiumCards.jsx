import PremiumCard from "./PremiumCard";

const PremiumCards = () => {
  const cards = [
    {
      header: "Family",
      list: [
        "Up to 6 Premium accounts",
        "Control content marked as explicit",
        "Cancel anytime",
        "Subscribe or one-time payment",
      ],
      initialPrice: 59,
      initialPricePeriod: 2,
      finalPrice: 179,
      description:
        "₹179 for 2 months, then ₹179 per month after. Offer only available if you haven't tried Premium before. For up to 6 family members residing at the same address.",
      buttonText: "Get Premium Family",
    },
    {
      header: "Individual",
      list: [
        "1 Premium account",
        "Cancel anytime",
        "Subscribe or one-time payment",
      ],
      initialPrice: 59,
      initialPricePeriod: 3,
      finalPrice: 119,
      description:
        "₹59 for 3 months, then ₹119 per month after. Offer only available if you haven't tried Premium before.",
      buttonText: "Get Premium Individual",
    },
    {
      header: "Mini",
      list: [
        "1 mobile-only Premium account",
        "Offline listening of up to 30 songs on 1 device",
        "One-time payment",
        "Basic audio quality",
      ],
      initialPrice: 29,
      initialPricePeriod: 1,
      finalPrice: 100,
      description:
        "₹29 for 1 month, then ₹100 per month after. Offer only available if you haven't tried Premium before.",
      buttonText: "Get Premium Mini",
    },
    {
      header: "Duo",
      list: [
        "2 Premium accounts",
        "Cancel anytime",
        "Subscribe or one-time payment",
      ],
      initialPrice: 149,
      initialPricePeriod: 2,
      finalPrice: 149,
      description:
        "₹149 for 2 months, then ₹149 per month after. Offer only available if you haven't tried Premium before. For couples who reside at the same address.",
      buttonText: "Get Premium Duo",
    },
    {
      header: "Student",
      list: [
        "1 verified Premium account",
        "Discount for eligible students",
        "Cancel anytime",
        "Subscribe or one-time payment",
      ],
      initialPrice: 59,
      initialPricePeriod: 2,
      finalPrice: 59,
      description:
        "₹59 for 2 months, then ₹59 per month after. Offer available only to students at an accredited higher education institution and if you haven't tried Premium before.",
      buttonText: "Get Premium Student",
    },
  ];

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center py-10">
        {cards.map((value, index) => {
          return (
            <PremiumCard
              key={index}
              header={value.header}
              list={value.list}
              initialPrice={value.initialPrice}
              initialPricePeriod={value.initialPricePeriod}
              finalPrice={value.finalPrice}
              description={value.description}
              buttonText={value.buttonText}
            ></PremiumCard>
          );
        })}
      </div>
    </>
  );
};

export default PremiumCards;
