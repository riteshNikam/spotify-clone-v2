import PremiumCard from "./PremiumCard";

const PremiumCards = () => {
  return (
    <>
      <div className="bg-black flex flex-row flex-wrap justify-center py-10">
        <div children="">
          <PremiumCard
            header="Family"
            list={[
              "Up to 6 Premium accounts",
              "Control content marked as explicit",
              "Cancel anytime",
              "Subscribe or one-time payment",
            ]}
            initialPrice={59}
            initialPricePeriod={2}
            finalPrice={179}
            description="₹179 for 2 months, then ₹179 per month after. Offer only available if you haven't tried Premium before. For up to 6 family members residing at the same address."
            buttonText="Get Premium Family"
          ></PremiumCard>
        </div>
        <div className="">
          <PremiumCard
            header="Individual"
            list={[
              "1 Premium account",
              "Cancel anytime",
              "Subscribe or one-time payment",
            ]}
            initialPrice={59}
            initialPricePeriod={3}
            finalPrice={119}
            description="₹59 for 3 months, then ₹119 per month after. Offer only available if you haven't tried Premium before."
            buttonText="Get Premium Individual"
          ></PremiumCard>
        </div>
        <div children="">
          <PremiumCard
            header="Mini"
            list={[
              "1 mobile-only Premium account",
              "Offline listening of up to 30 songs on 1 device",
              "One-time payment",
              "Basic audio quality",
            ]}
            initialPrice={29}
            initialPricePeriod={1}
            finalPrice={100}
            description="₹29 for 1 month, then ₹100 per month after. Offer only available if you haven't tried Premium before."
            buttonText="Get Premium Mini"
          ></PremiumCard>
        </div>
        <div children="">
          <PremiumCard
            header="Duo"
            list={[
              "2 Premium accounts",
              "Cancel anytime",
              "Subscribe or one-time payment",
            ]}
            initialPrice={149}
            initialPricePeriod={2}
            finalPrice={149}
            description="₹149 for 2 months, then ₹149 per month after. Offer only available if you haven't tried Premium before. For couples who reside at the same address."
            buttonText="Get Premium Duo"
          ></PremiumCard>
        </div>
        <div children="">
          <PremiumCard
            header="Student"
            list={[
              "1 verified Premium account",
              "Discount for eligible students",
              "Cancel anytime",
              "Subscribe or one-time payment",
            ]}
            initialPrice={59}
            initialPricePeriod={2}
            finalPrice={59}
            description="₹59 for 2 months, then ₹59 per month after. Offer available only to students at an accredited higher education institution and if you haven't tried Premium before."
            buttonText="Get Premium Student"
          ></PremiumCard>
        </div>
      </div>
    </>
  );
};

export default PremiumCards;
