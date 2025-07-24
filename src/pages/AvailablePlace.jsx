import { motion } from "framer-motion";
import "../assets/styles/WhereToBuy.scss";
const countries = [
  {
    flag: "🇺🇸",
    name: "United States",
    stores: ["Amazon", "Walmart", "Target"],
  },
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    stores: ["Asda", "Tesco", "Amazon UK"],
  },
  {
    flag: "🌐",
    name: "Online Worldwide",
    stores: ["Amazon", "PrimeHydration.com"],
  },
];
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const AvailablePlace = () => {
  return (
    <section className="countries">
      {countries.map((country, i) => (
        <motion.div
          className="country-card"
          key={country.name}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={i}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 12px 30px rgba(0, 255, 255, 0.3)",
          }}
        >
          <h4>{`${country.flag} ${country.name}`}</h4>
          <ul>
            {country.stores.map((store) => (
              <li key={store}>{store}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </section>
  );
};

export default AvailablePlace;
