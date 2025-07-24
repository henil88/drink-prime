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
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/OrangeKream_Web_DropBanner_PDP_Front_2000x2000_8b5dd6e8-169d-4332-84ef-e4028707c470_2000x.png?v=1752250151",
        img2: "https://drinkprime.com/cdn/shop/files/OrangeKream_Web_DropBanner_PDP_Back_2000x2000_45fef646-3dcf-484d-a4e8-f8a9aa7c6daa_600x.png?v=1752250151",
        img3: "https://drinkprime.com/cdn/shop/files/OrangeKream_Web_DropBanner_PDP_Side_2000x2000_24eac3a0-e52f-41d1-81db-605a8a22c241_600x.png?v=1752250151",
      },
    },
    {
      id: 2,
      title: "PRIME COLLECTOR SERIES",
      image:
        "https://drinkprime.com/cdn/shop/files/PRIME_hydration_1serve_16.9oz_US_CollectorSeries_00000_2000x.png?v=1748550723",
      alt: "PRIME COLLECTOR SERIES Bottle",
      buyLink:
        "https://www.amazon.com/dp/B0F5ZYCHGH?maas=maas_adg_C1AC32E3143CA81B3B3FC5CEE4A42F18_afap_abs&ref_=aa_maas&tag=maas",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/PRIME_hydration_1serve_16.9oz_US_CollectorSeries_00000_2000x.png?v=1748550723",
        img2: "https://drinkprime.com/cdn/shop/files/PRIME_hydration_1serve_16.9oz_US_CollectorSeries_00001_600x.png?v=1748550723",
        img3: "https://drinkprime.com/cdn/shop/files/PRIME_hydration_1serve_16.9oz_US_CollectorSeries_00002_600x.png?v=1748550723",
      },
    },
    {
      id: 3,
      title: "Sournova",
      image:
        "https://drinkprime.com/cdn/shop/files/Sournova_Web_DropBanner_PDP_Front_2000x2000_ffba587e-02f2-491a-a375-5f5b3e7f2eb8_2000x.png?v=1744126206",
      alt: "Sournova bottle",
      buyLink:
        "https://www.amazon.com/dp/B0DZL4NT5W?maas=maas_adg_1B6AFC7F38C852261BDDB1079FA2B822_afap_abs&ref_=aa_maas&tag=maas",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/Sournova_Web_DropBanner_PDP_Front_2000x2000_ffba587e-02f2-491a-a375-5f5b3e7f2eb8_2000x.png?v=1744126206",
        img2: "https://drinkprime.com/cdn/shop/files/Sournova_Web_DropBanner_PDP_Side_2000x2000_a1859441-57f3-4529-875f-10f03c02c6b3_600x.png?v=1744126206",
        img3: "https://drinkprime.com/cdn/shop/files/Sournova_Web_DropBanner_PDP_Back_2000x2000_cacd18f2-9d75-4121-a646-f0b3d1564400_600x.png?v=1744126206",
      },
    },
    {
      id: 4,
      title: "Peso Pluma",
      image:
        "https://drinkprime.com/cdn/shop/files/Prime_hydration_1serve_16.9oz_US_PesoPluma_00000_2000x.png?v=1742393763",
      alt: "Peso Pluma",
      buyLink:
        "https://www.amazon.com/PRIME-HYDRATION-Electrolyte-Hydration-Antioxidants/dp/B0DY2JWYHH?maas=maas_adg_420A529573508747D80BF5ECBFD4E22F_afap_abs&ref_=aa_maas&tag=maas",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/Prime_hydration_1serve_16.9oz_US_PesoPluma_00000_2000x.png?v=1742393763",
        img2: "https://drinkprime.com/cdn/shop/files/Prime_hydration_1serve_16.9oz_US_PesoPluma_00002_600x.png?v=1742393763",
        img3: "https://drinkprime.com/cdn/shop/files/Prime_hydration_1serve_16.9oz_US_PesoPluma_00001_600x.png?v=1742393763",
      },
    },

    {
      id: 5,
      title: "Future Freeze",
      image:
        "https://drinkprime.com/cdn/shop/files/PrimeHydration_US_1serve_FutureFreeze_00000_2000x.png?v=1738603072",
      alt: "Future Freeze",
      buyLink:
        "https://www.amazon.com/PRIME-Hydration-Electrolyte-Enhanced-Antioxidants/dp/B0DTLZ63N9?maas=maas_adg_0A398252DB9DD465AC770EE8C8972BEE_afap_abs&ref_=aa_maas&tag=maas",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/PrimeHydration_US_1serve_FutureFreeze_00000_2000x.png?v=1738603072",
        img2: "https://drinkprime.com/cdn/shop/files/PrimeHydration_US_1serve_FutureFreeze_00002_600x.png?v=1738603082",
        img3: "https://drinkprime.com/cdn/shop/files/PrimeHydration_US_1serve_FutureFreeze_00001_600x.png?v=1738603094",
      },
    },
    {
      id: 6,
      title: "Ice Pop",
      image:
        "https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_IcePop_0000_2000x.png?v=1656076690",
      alt: "Ice Pop",
      buyLink:
        "https://www.amazon.com/Hydration-Sock-My-World-Sticker/dp/B0B1VZW7DB?ref_=ast_sto_dp&th=1",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_IcePop_0000_2000x.png?v=1656076690",
        img2: "https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_IcePop_0001_600x.png?v=1656076690",
        img3: "https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_IcePop_0002_600x.png?v=1656076690",
      },
    },
    {
      id: 7,
      title: "Cherry Freeze",
      image:
        "https://drinkprime.com/cdn/shop/files/Prime_hydration_1serve_16.9oz_US_CherryFreeze_Fortis_00000_2000x.png?v=1745589968",
      alt: "Ice Pop",
      buyLink:
        "https://www.amazon.com/PRIME-Hydration-Electrolyte-Enhanced-Antioxidants/dp/B0CR6Y9STV?maas=maas_adg_D6A5A71E5A80E3890AC4CB8403A3E0BD_afap_abs&ref_=aa_maas&tag=maas",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/Prime_hydration_1serve_16.9oz_US_CherryFreeze_Fortis_00000_2000x.png?v=1745589968",
        img2: "https://drinkprime.com/cdn/shop/files/Prime_hydration_1serve_16.9oz_US_CherryFreeze_Fortis_00002_600x.png?v=1745589975",
        img3: "https://drinkprime.com/cdn/shop/files/Prime_hydration_1serve_16.9oz_US_CherryFreeze_Fortis_00001_600x.png?v=1745589984",
      },
    },
    {
      id: 8,
      title: "Berry Freeze",
      image:
        "https://drinkprime.com/cdn/shop/files/Berry-Freeze-Front_1_2000x.png?v=1730302649",
      alt: "Ice Pop",
      buyLink:
        "https://www.amazon.com/PRIME-Hydration-Electrolyte-Enhanced-Antioxidants/dp/B0DLYJG96G?maas=maas_adg_08CE661CB32D4C32FAE0E9AE8A4566CE_afap_abs&ref_=aa_maas&tag=maas",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/Berry-Freeze-Front_1_2000x.png?v=1730302649",
        img2: "https://drinkprime.com/cdn/shop/files/Berry-Freeze-Side_1_600x.png?v=1730302649",
        img3: "https://drinkprime.com/cdn/shop/files/Berry-Freeze-Back_1_600x.png?v=1730302649",
      },
    },
    {
      id: 9,
      title: "Strawberry Banana",
      image:
        "https://drinkprime.com/cdn/shop/files/SBHydrationFront_2000x.png?v=1708725252",
      alt: "Ice Pop",
      buyLink:
        "https://www.amazon.com/PRIME-Hydration-STRAWBERRY-Electrolyte-Antioxidants/dp/B0CWSD86H5?ref_=ast_sto_dp&th=1&psc=1",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/SBHydrationFront_2000x.png?v=1708725252",
        img2: "https://drinkprime.com/cdn/shop/files/SBHydrationBack_600x.png?v=1708725251",
        img3: "https://drinkprime.com/cdn/shop/files/SBHydrationSide_600x.png?v=1708725251",
      },
    },
    {
      id: 10,
      title: "PRIME x UFC",
      image:
        "https://drinkprime.com/cdn/shop/files/PRIME_hydration_1serve_16.9oz_US_UFC_00000_9ec31163-fe83-4b31-afc4-aaaea9ad94fc_2000x.png?v=1737656093",
      alt: "Ice Pop",
      buyLink:
        "https://www.amazon.com/PRIME-Hydration-Electrolyte-Enhanced-Antioxidants/dp/B0DQP2Q1SV?maas=maas_adg_B92AD63A246A24E668BCD5B024D4EF67_afap_abs&ref_=aa_maas&tag=maas",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/PRIME_hydration_1serve_16.9oz_US_UFC_00000_9ec31163-fe83-4b31-afc4-aaaea9ad94fc_2000x.png?v=1737656093",
        img2: "https://drinkprime.com/cdn/shop/files/PRIME_hydration_1serve_16.9oz_US_UFC_00002_600x.png?v=1737656093",
        img3: "https://drinkprime.com/cdn/shop/files/PRIME_hydration_1serve_16.9oz_US_UFC_00001_600x.png?v=1737656093",
      },
    },
    {
      id: 11,
      title: "ISHOWSPEED",
      image:
        "https://drinkprime.com/cdn/shop/files/Speed-Bottle-Front_b2fe6348-b16b-4582-b0fb-c2f3efcc2bc5_2000x.png?v=1727210047",
      alt: "Ice Pop",
      buyLink:
        "https://www.amazon.com/PRIME-Hydration-ISHOWSPEED-Electrolyte-Antioxidants/dp/B0DLZ41NNP?maas=maas_adg_249CABC2C2CDED90D032C507D9A49062_afap_abs&ref_=aa_maas&tag=maas",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/Speed-Bottle-Front_b2fe6348-b16b-4582-b0fb-c2f3efcc2bc5_2000x.png?v=1727210047",
        img2: "https://drinkprime.com/cdn/shop/files/Speed-Bottle-Side_600x.png?v=1727210073",
        img3: "https://drinkprime.com/cdn/shop/files/Speed-Bottle-Back_600x.png?v=1727210059",
      },
    },
    {
      id: 12,
      title: "Meta Moon",
      image:
        "https://drinkprime.com/cdn/shop/products/Prime-Metamoon-ProductDetail-front_2000x.png?v=1662754165",
      alt: "Ice Pop",
      buyLink:
        "https://www.amazon.com/Prime-Hydration-Energy-Sports-Coconut/dp/B0BFG3WRS1?maas=maas_adg_B4DC4D643028B83A57FEB04D80403307_afap_abs&ref_=aa_maas&tag=maas",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/products/Prime-Metamoon-ProductDetail-front_2000x.png?v=1662754165",
        img2: "https://drinkprime.com/cdn/shop/products/Prime-Metamoon-ProductDetail-side_600x.png?v=1662754165",
        img3: "https://drinkprime.com/cdn/shop/products/Prime-Metamoon-ProductDetail-back_600x.png?v=1662754164",
      },
    },
    {
      id: 13,
      title: "X",
      image:
        "https://drinkprime.com/cdn/shop/files/PrimeX_Web_ProductPage_Blue_Front_94b506ea-f8d6-439e-8764-19173ba4baa5_2000x.png?v=1717432079",
      alt: "Ice Pop",
      buyLink:
        "https://www.amazon.com/PRIME-Hydration-Electrolyte-Enhanced-Antioxidants/dp/B0DLYYCXR8?maas=maas_adg_34F14AD74B64FC584D7B02869A53EAFE_afap_abs&ref_=aa_maas&tag=maas",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/PrimeX_Web_ProductPage_Blue_Front_94b506ea-f8d6-439e-8764-19173ba4baa5_2000x.png?v=1717432079",
        img2: "https://drinkprime.com/cdn/shop/files/PrimeX_Web_ProductPage_Blue_Back_f804467e-1a2f-4dd9-b4b3-9922b386f2be_600x.png?v=1717518307",
        img3: "https://drinkprime.com/cdn/shop/files/PrimeX_Web_ProductPage_Blue_Side_42095117-6785-4964-a85a-d050e96de5bd_600x.png?v=1717431994",
      },
    },
    {
      id: 14,
      title: "Glowberry",
      image:
        "https://drinkprime.com/cdn/shop/files/GB_Product_Page_-_Front_2000x.png?v=1722366864",
      alt: "Ice Pop",
      buyLink:
        "https://www.amazon.com/Prime-Hydration-Sports-Drink-Glowberry/dp/B0CGSLTVMQ?maas=maas_adg_A10CCDDB30396EC6F3A04C34287BD3BE_afap_abs&ref_=aa_maas&tag=maas",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/GB_Product_Page_-_Front_2000x.png?v=1722366864",
        img2: "https://drinkprime.com/cdn/shop/files/GB_Product_Page_-_Side_600x.png?v=1722366864",
        img3: "https://drinkprime.com/cdn/shop/files/GB_Product_Page_-_Back_600x.png?v=1722366863",
      },
    },
    {
      id: 15,
      title: "Strawberry Watermelon",
      image:
        "https://drinkprime.com/cdn/shop/products/Front_2000x.png?v=1672937745",
      alt: "Ice Pop",
      buyLink:
        "https://www.amazon.com/PRIME-STRAWBERRY-WATERMELON-Electrolyte-Antioxidants/dp/B0C2JLSD6K?maas=maas_adg_5B86901C6FEDE11CD16978BDC2726060_afap_abs&ref_=aa_maas&tag=maas",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/products/Front_2000x.png?v=1672937745",
        img2: "https://drinkprime.com/cdn/shop/products/Side_600x.png?v=1672937745",
        img3: "https://drinkprime.com/cdn/shop/products/Back_600x.png?v=1672937745",
      },
    },
    {
      id: 16,
      title: "Blue Raspberry",
      image:
        "https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_bluerasberry_0000_2000x.png?v=1656076581",
      alt: "Ice Pop",
      buyLink:
        "https://www.amazon.com/Hydration-Muscle-Recovery-Raspberry-Drinks/dp/B09W363VTH?maas=maas_adg_78E76E7E4B7501578B4D7E47D76DA26C_afap_abs&ref_=aa_maas&tag=maas",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_bluerasberry_0000_2000x.png?v=1656076581",
        img2: "https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_bluerasberry_0001_600x.png?v=1656076581",
        img3: "https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_bluerasberry_0002_600x.png?v=1656076594",
      },
    },
    {
      id: 17,
      title: "Lemon Lime",
      image:
        "https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_lemonlime_0000_2000x.png?v=1656076731",
      alt: "Ice Pop",
      buyLink:
        "https://www.amazon.com/Prime-Hydration-Muscle-Recovery-Drinks/dp/B09W35HZRZ?maas=maas_adg_D5D52EBA500F8209FF34005545B90F47_afap_abs&ref_=aa_maas&tag=maas",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_lemonlime_0000_2000x.png?v=1656076731",
        img2: "https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_lemonlime_0001_600x.png?v=1656076730",
        img3: "https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_lemonlime_0002_600x.png?v=1656076731",
      },
    },
    {
      id: 18,
      title: "Tropical Punch",
      image:
        "https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_tropicalpunch_0000_2000x.png?v=1656076860",
      alt: "Ice Pop",
      buyLink:
        "https://www.amazon.com/Hydration-Muscle-Recovery-Tropical-Drinks/dp/B09W33L8SC?maas=maas_adg_62639B8424FF7A20ABE1B5821977AA14_afap_abs&ref_=aa_maas&tag=maas",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_tropicalpunch_0000_2000x.png?v=1656076860",
        img2: "https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_tropicalpunch_0001_600x.png?v=1656076861",
        img3: "https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_tropicalpunch_0002_600x.png?v=1656076860",
      },
    },
    {
      id: 19,
      title: "Lemonade",
      image:
        "https://drinkprime.com/cdn/shop/files/BottleFront_2000x.png?v=1684170611",
      alt: "Ice Pop",
      buyLink:
        "https://www.amazon.com/PRIME-Hydration-LEMONADE-Electrolyte-Antioxidants/dp/B0C6FQRCZR?maas=maas_adg_61DFFE973150F2FF428417F7079CFF5D_afap_abs&ref_=aa_maas&tag=maas",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/BottleFront_2000x.png?v=1684170611",
        img2: "https://drinkprime.com/cdn/shop/files/Side_9dab58d6-a9c3-408c-ab44-6728263f3b25_600x.png?v=1702583078",
        img3: "https://drinkprime.com/cdn/shop/files/Back_21b43948-e5a8-4ead-9797-0acea8a39f11_600x.png?v=1702583078",
      },
    },
  ],
  "RAPID REHYDRATION": [
    {
      id: 20,
      title: "Ocean Cherry",
      image:
        "https://drinkprime.com/cdn/shop/files/PR_RapidRehydration_CBR_Web_PDP_Front_2000x2000_18fe6542-ade6-44fd-a8e5-1ef8b1fc5c84_2000x.png?v=1747401390",
      alt: "PR_RapidRehydration",
      buyLink: "https://amazon.com/example1",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/PR_RapidRehydration_CBR_Web_PDP_Front_2000x2000_18fe6542-ade6-44fd-a8e5-1ef8b1fc5c84_2000x.png?v=1747401390",
        img2: "https://drinkprime.com/cdn/shop/files/PR_RapidRehydration_OC_Web_PDP_Side_2000x2000_786d1b43-79a1-4895-b52d-e37ddd8ad633_600x.png?v=1747401501",
        img3: "https://drinkprime.com/cdn/shop/files/PR_RapidRehydration_OC_Web_PDP_Back_2000x2000_0683e143-7c89-4998-96f2-61ebb44bad21_600x.png?v=1747401501",
      },
    },
    {
      id: 21,
      title: "Berry Citrus Rush",
      image:
        "https://drinkprime.com/cdn/shop/files/PR_RapidRehydration_GO_Web_PDP_Front_2000x2000_fd03bf87-bb43-4ca6-9767-756907babcd5_2000x.png?v=1747400970",
      alt: "PR_RapidRehydration",
      buyLink: "https://amazon.com/example1",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/PR_RapidRehydration_GO_Web_PDP_Front_2000x2000_fd03bf87-bb43-4ca6-9767-756907babcd5_2000x.png?v=1747400970",
        img2: "https://drinkprime.com/cdn/shop/files/PR_RapidRehydration_CBR_Web_PDP_Side_2000x2000_f9811d34-4858-43f8-ac43-ad92ab8d5ea8_600x.png?v=1747401390",
        img3: "https://drinkprime.com/cdn/shop/files/PR_RapidRehydration_CBR_Web_PDP_Back_2000x2000_eddb6f09-ae77-44f0-bcf4-7857ee8c777a_600x.png?v=1747401390",
      },
    },
    {
      id: 22,
      title: "Glacier Orange",
      image:
        "https://drinkprime.com/cdn/shop/files/PR_RapidRehydration_OC_Web_PDP_Front_2000x2000_a0a85545-b084-4303-86d8-5ced85a845b1_2000x.png?v=1747401501",
      alt: "PR_RapidRehydration",
      buyLink: "https://amazon.com/example1",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/PR_RapidRehydration_OC_Web_PDP_Front_2000x2000_a0a85545-b084-4303-86d8-5ced85a845b1_2000x.png?v=1747401501",
        img2: "https://drinkprime.com/cdn/shop/files/PR_RapidRehydration_GO_Web_PDP_Side_2000x2000_51e17361-62a1-4224-b0e8-a3ec32035f8c_600x.png?v=1747400971",
        img3: "https://drinkprime.com/cdn/shop/files/PR_RapidRehydration_GO_Web_PDP_Back_2000x2000_45db1232-1eee-48ed-a528-d02a5e814bf6_600x.png?v=1747339473",
      },
    },
  ],
  "PRIME ICE": [
    {
      id: 23,
      title: "Blue Chill",
      image:
        "https://drinkprime.com/cdn/shop/files/PrimeHydration_US_1serve_16oz_ICE_Blue_00000_2_2000x.png?v=1735830966",
      alt: "PrimeHydration",
      buyLink:
        "https://www.amazon.com/PRIME-Hydration-Electrolyte-Enhanced-Antioxidants/dp/B0DQ6QV96F/ref=sr_1_1?crid=PSECY5KS3WDC&dib=eyJ2IjoiMSJ9.2OtU8vcnHqLetoluddYsU1dqP8KLX7fDgPQbQ8cg_hjahz3rWlDb-khq_7QOpfWGaf8vGljUzOvhQjKxbfTChJv1j_PI1uPhx0e0NC8CWPotPcM0spyYNJqkIV63lwtqbiCanqieSvjvnpMYrH1Ukfl6vNwMp-of4_HHi8rzszQV8nmeTixbWX7flO3bZia2XVKwJm2prWXZKbAxV-ytNYiZlQmZ2xowyGaZT49WWl3rmguchU1yDGH5yOTHi_PmACoCVhvmbvMhEhnWk_lUFw.b2611kTSOP0Ehw1TTuKvVujs1lUSA0QHkIglT9aHyWE&dib_tag=se&keywords=blue+chill+prime&qid=174",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/PrimeHydration_US_1serve_16oz_ICE_Blue_00000_2_2000x.png?v=1735830966",
        img2: "https://drinkprime.com/cdn/shop/files/PrimeHydration_US_1serve_16oz_ICE_Blue_00002_1_600x.png?v=1735831012",
        img3: "https://drinkprime.com/cdn/shop/files/PrimeHydration_US_1serve_16oz_ICE_Blue_00001_1_600x.png?v=1735831012",
      },
    },
    {
      id: 24,
      title: "Red Chill",
      image:
        "https://drinkprime.com/cdn/shop/files/PRIME_hydration_1serve_16.9oz_US_RedChill_00000-2_3_2000x.png?v=1735831398",
      alt: "PrimeHydration",
      buyLink:
        "https://www.amazon.com/PRIME-Hydration-Electrolyte-Enhanced-Antioxidants/dp/B0DQ6RDCC2?maas=maas_adg_74FD3D2755E2C236FA630C2D050B400B_afap_abs&ref_=aa_maas&tag=maas",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/PRIME_hydration_1serve_16.9oz_US_RedChill_00000-2_3_2000x.png?v=1735831398",
        img2: "https://drinkprime.com/cdn/shop/files/PRIME_hydration_1serve_16.9oz_US_RedChill_00002_1_600x.png?v=1735832186",
        img3: "https://drinkprime.com/cdn/shop/files/PRIME_hydration_1serve_16.9oz_US_RedChill_00001_1_600x.png?v=1735832186",
      },
    },
    {
      id: 25,
      title: "PrimeHydration",
      image:
        "https://drinkprime.com/cdn/shop/files/PrimeHydration_US_1serve_16.9oz_ICE_Orange_00000_2_2000x.png?v=1735836301",
      alt: "Glacier Punch",
      buyLink:
        "https://www.amazon.com/PRIME-Hydration-Electrolyte-Enhanced-Antioxidants/dp/B0DQ6QLBW5?maas=maas_adg_3E68E2B194945B8C0DC44CBF1673C7F8_afap_abs&ref_=aa_maas&tag=maas",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/PrimeHydration_US_1serve_16.9oz_ICE_Orange_00000_2_2000x.png?v=1735836301",
        img2: "https://drinkprime.com/cdn/shop/files/PrimeHydration_US_1serve_16.9oz_ICE_Orange_00002_1_600x.png?v=1736182949",
        img3: "https://drinkprime.com/cdn/shop/files/PrimeHydration_US_1serve_16.9oz_ICE_Orange_00001_1_600x.png?v=1736182949",
      },
    },
  ],
  Energy: [
    {
      id: 26,
      title: "Cherry Limeade",
      image:
        "https://drinkprime.com/cdn/shop/files/CherryLimeade-Front_2000x.png?v=1738165075",
      alt: "PRIME_energy",
      buyLink:
        "https://www.amazon.com/PRIME-LIMEADE-Caffeine-Electrolytes-Hydration/dp/B0DQ6R3VX5?maas=maas_adg_1AD3F899ABA9CE26DC36DE0544409A79_afap_abs&ref_=aa_maas&tag=maas&th=1",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/CherryLimeade-Front_2000x.png?v=1738165075",
        img2: "https://drinkprime.com/cdn/shop/files/CherryLimeade-Side_600x.png?v=1738165083",
        img3: "https://drinkprime.com/cdn/shop/files/CherryLimeade-Back_600x.png?v=1738165093",
      },
    },
    {
      id: 27,
      title: "Dripsicle",
      image:
        "https://drinkprime.com/cdn/shop/files/PRIME_energy_1serve_16oz_US_Drpsicle_00000_2000x.png?v=1738164974",
      alt: "PRIME_energy",
      buyLink:
        "https://www.amazon.com/PRIME-DRIPSCICLE-Caffeine-Electrolytes-Hydration/dp/B0DQ6SHFRX?maas=maas_adg_1F630A4C75369ADBAC25516300278099_afap_abs&ref_=aa_maas&tag=maas&th=1",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/PRIME_energy_1serve_16oz_US_Drpsicle_00000_2000x.png?v=1738164974",
        img2: "https://drinkprime.com/cdn/shop/files/PRIME_energy_1serve_16oz_US_Drpsicle_00002_600x.png?v=1738165003",
        img3: "https://drinkprime.com/cdn/shop/files/PRIME_energy_1serve_16oz_US_Drpsicle_00001_600x.png?v=1738165031",
      },
    },
    {
      id: 28,
      title: "Dream Pop",
      image:
        "https://drinkprime.com/cdn/shop/files/PE-Dream_V2_2000x.png?v=1738170814",
      alt: "PRIME_energy",
      buyLink:
        "https://www.amazon.com/PRIME-DREAMPOP-Caffeine-Electrolytes-Hydration/dp/B0DQ6VLG58?maas=maas_adg_DA83B3B860F9C389D5348B58E8762CCB_afap_abs&ref_=aa_maas&tag=maas&th=1",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/PE-Dream_V2_2000x.png?v=1738170814",
        img2: "https://drinkprime.com/cdn/shop/files/PE_Dream_Pop_2_600x.jpg?v=1738170368",
        img3: "https://drinkprime.com/cdn/shop/files/PE_Dream_Pop_3_600x.jpg?v=1738170368",
      },
    },
    {
      id: 29,
      title: "Original",
      image:
        "https://drinkprime.com/cdn/shop/files/PE-Original_V2_2000x.png?v=1738170791",
      alt: "PRIME_energy",
      buyLink:
        "https://www.amazon.com/PRIME-ORIGINAL-Caffeine-Electrolytes-Hydration/dp/B0DQ6QZP7Q?maas=maas_adg_DD84B7F6D0A35E02E42CF4E626A88944_afap_abs&ref_=aa_maas&tag=maas&th=1",
      imageViews: {
        img1: "https://drinkprime.com/cdn/shop/files/PE-Original_V2_2000x.png?v=1738170791",
        img2: "https://drinkprime.com/cdn/shop/files/PE_Original_2_600x.jpg?v=1738170247",
        img3: "https://drinkprime.com/cdn/shop/files/PE_Original_3_600x.jpg?v=1738170247",
      },
    },
  ],
};
export const DrinksProvider = ({ children }) => {
  const getByCategory = (category) => sampleDrinks[category] || [];

  const getById = (id) => {
    for (const category in sampleDrinks) {
      const found = sampleDrinks[category].find((drink) => drink.id === id);
      if (found) return found;
    }
    return null;
  };

  return (
    <DrinksContext.Provider value={{ sampleDrinks, getByCategory, getById }}>
      {children}
    </DrinksContext.Provider>
  );
};
export const useDrinks = () => useContext(DrinksContext);
