import React, { createContext, useContext } from "react";

const DrinksContext = createContext();

const sampleDrinks = {
  Hydration: [
    {
      id: 1,
      title: "Orange Kream",
      image:
        "https://drinkprime.com/cdn/shop/files/OrangeKream_Web_DropBanner_PDP_Front_2000x2000_8b5dd6e8-169d-4332-84ef-e4028707c470_2000x.png?v=1752250151",
      alt: "Orange Kream Bottle",
      buyLink: "https://amazon.com/example1",
    },
    {
      id: 2,
      title: "PRIME COLLECTOR SERIES",
      image:
        "https://drinkprime.com/cdn/shop/files/PRIME_hydration_1serve_16.9oz_US_CollectorSeries_00000_2000x.png?v=1748550723",
      alt: "PRIME COLLECTOR SERIES Bottle",
      buyLink: "https://amazon.com/example2",
    },
    {
      id: 3,
      title: "Sournova",
      image:
        "https://drinkprime.com/cdn/shop/files/Sournova_Web_DropBanner_PDP_Front_2000x2000_ffba587e-02f2-491a-a375-5f5b3e7f2eb8_2000x.png?v=1744126206",
      alt: "Sournova bottle",
      buyLink: "example.com",
    },
    {
      id: 4,
      title: "Peso Pluma",
      image:
        "https://drinkprime.com/cdn/shop/files/Prime_hydration_1serve_16.9oz_US_PesoPluma_00000_2000x.png?v=1742393763",
      alt: "Peso Pluma",
      buyLink: "example.com",
    },
    {
      id: 5,
      title: "Future Freeze",
      image:
        "https://drinkprime.com/cdn/shop/files/PrimeHydration_US_1serve_FutureFreeze_00000_2000x.png?v=1738603072",
      alt: "Future Freeze",
      buyLink: "example.com",
    },
    {
      id: 6,
      title: "Ice Pop",
      image:
        "https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_IcePop_0000_2000x.png?v=1656076690",
      alt: "Ice Pop",
      buyLink: "example.com",
    },
  ],
  "RAPID REHYDRATION": [
    {
      id: 7,
      title: "Ocean Cherry",
      image:
        "https://drinkprime.com/cdn/shop/files/PR_RapidRehydration_CBR_Web_PDP_Front_2000x2000_18fe6542-ade6-44fd-a8e5-1ef8b1fc5c84_2000x.png?v=1747401390",
      alt: "PR_RapidRehydration",
      buyLink: "example.com",
    },
    {
      id: 8,
      title: "Berry Citrus Rush",
      image:
        "https://drinkprime.com/cdn/shop/files/PR_RapidRehydration_GO_Web_PDP_Front_2000x2000_fd03bf87-bb43-4ca6-9767-756907babcd5_2000x.png?v=1747400970",
      alt: "PR_RapidRehydration",
      buyLink: "example.com",
    },
    {
      id: 9,
      title: "Glacier Orange",
      image:
        "https://drinkprime.com/cdn/shop/files/PR_RapidRehydration_OC_Web_PDP_Front_2000x2000_a0a85545-b084-4303-86d8-5ced85a845b1_2000x.png?v=1747401501",
      alt: "PR_RapidRehydration",
      buyLink: "example.com",
    },
  ],
  "PRIME ICE": [
    {
      id: 10,
      title: "Blue Chill",
      image:
        "https://drinkprime.com/cdn/shop/files/PrimeHydration_US_1serve_16oz_ICE_Blue_00000_2_2000x.png?v=1735830966",
      alt: "PrimeHydration",
      buyLink: "PrimeHydration",
    },
    {
      id: 11,
      title: "Red Chill",
      image:
        "https://drinkprime.com/cdn/shop/files/PRIME_hydration_1serve_16.9oz_US_RedChill_00000-2_3_2000x.png?v=1735831398",
      alt: "PrimeHydration",
      buyLink: "PrimeHydration",
    },
    {
      id: 12,
      title: "PrimeHydration",
      image:
        "https://drinkprime.com/cdn/shop/files/PrimeHydration_US_1serve_16.9oz_ICE_Orange_00000_2_2000x.png?v=1735836301",
      alt: "Glacier Punch",
      buyLink: "PrimeHydration",
    },
  ],
  Energy: [
    {
      id: 13,
      title: "Cherry Limeade",
      image:
        "https://drinkprime.com/cdn/shop/files/CherryLimeade-Front_2000x.png?v=1738165075",
      alt: "PRIME_energy",
      buyLink: "PRIME_energy",
    },
    {
      id: 14,
      title: "Dripsicle",
      image:
        "https://drinkprime.com/cdn/shop/files/PRIME_energy_1serve_16oz_US_Drpsicle_00000_2000x.png?v=1738164974",
      alt: "PRIME_energy",
      buyLink: "PRIME_energy",
    },
    {
      id: 15,
      title: "Dream Pop",
      image:
        "https://drinkprime.com/cdn/shop/files/PE-Dream_V2_2000x.png?v=1738170814",
      alt: "PRIME_energy",
      buyLink: "PRIME_energy",
    },
  ],
};

export const DrinksProvider = ({ children }) => {
  const getByCategory = (category) => sampleDrinks[category] || [];

  return (
    <DrinksContext.Provider value={{ sampleDrinks, getByCategory }}>
      {children}
    </DrinksContext.Provider>
  );
};

export const useDrinks = () => useContext(DrinksContext);
