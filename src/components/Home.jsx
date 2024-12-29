import Hero from "./Hero";
import Premium from "./Premium";
import PremiumTable from "./PremiumTable";

const Home = () => {
  return (
    <>
      <div className="bg-black">
        <Hero></Hero>
        <PremiumTable></PremiumTable>
        <Premium></Premium>
      </div>
    </>
  );
};

export default Home;
