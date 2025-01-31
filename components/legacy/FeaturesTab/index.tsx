"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeader from "../Common/SectionHeader";
import { Stack } from '@mui/material';
import Message from "../Message/Message";


const TechnicalSupport = `For the safe and correct installation of the ALTER EGO model, it's essential to:

1. **Consult the Operation and Maintenance Manual**: This document contains detailed installation instructions, including diagrams and safety precautions specific to the ALTER EGO model.
2. **Follow Local Codes and Regulations**: Ensure that the installation complies with all local building codes, regulations, and standards related to heating appliances.
3. **Professional Installation**: Considering the complexity and the need for compliance with safety standards, it's highly recommended to have the installation performed by a qualified and experienced technician.

Special attention should be given to Chapter 2 of the operation and maintenance manual for any specific precautions that need to be taken during the installation and use of the heater. The energy efficiency and specific precautions highlight the manufacturer's commitment to providing a high-quality, environmentally friendly heating solution.

For detailed information on installation, you can consult the documents:
- [ALTER-EGO-8-Caminetti-Montegrappa_rev00.pdf](/file/dc5af004-c3e9-4fbb-be46-0eaed04f2ae5)
- [Conto-Termico-ALTER-EGO-8_00.pdf](/file/05abd60d-6657-441b-b21e-dc5435444eba)
- [ALTER-EGO-D.M.186-0369-CS18-0029849-01.pdf](/file/884b0eaa-0d45-4e03-b446-3bbb82bece64)

Here's the product widget for more information:

**ALTER EGO**: [ALTER EGO](/product/00508a15-66df-4d7f-a7a4-39916bd6b8e0)

If there's anything more specific you need help with or any other questions you have, please let me know!`

const ProductRecommendation = `That sounds like an excellent choice! The cowboy hat you're looking at is a standout piece from our American Buffalo Collection. Crafted in the USA, it’s made from 4X buffalo felt, known for its superior durability and weather resistance, making it a perfect companion for any outdoor activities or special events.

The hat features a classic cattleman crease with a 4" brim and a 4 1/2" regular oval crown, which not only adds to its traditional Western allure but also offers ample sun protection. The aesthetic is further enhanced by a self-matching hat band adorned with a sophisticated three-piece silver-toned buckle set, adding a touch of elegance to its rugged appeal.

Available in both black and tin colors, this hat comes with a satin lining and a leather sweatband, ensuring comfort for all-day wear. Each purchase also includes a stylish hat box, perfect for storage or as a gift.[Black](/product/4d824e13-cf31-40df-b379-558e29d151cc)

Priced at $160, this hat represents both quality and style. Whether you’re dressing up for a special occasion or adding a unique touch to your everyday outfits, this cowboy hat is sure to impress. Would you like to take a closer look at the colors or proceed with the purchase?`

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");
  const { t } = useTranslation();

  const featuresTabData = [
    {
      id: "tabOne",
      title: `${t("29")}`,
      desc1: `${t("30")}`,
      desc2: `${t("31")}`,
      messages: [
        {
          avatarSrc: "",
          username: "Customer",
          timestamp: "6:24 PM",
          message: "I am looking for a cowboy hat... do you have anything?",
          isAI: false
        },
        {
          avatarSrc: "https://api.altan.ai/platform/media/c6301391-0224-4196-87e9-ca90d3fef93e",
          username: "Natasha",
          timestamp: "6:25 PM",
          message: ProductRecommendation,
          isAI: true
        }
      ],
    },
    {
      id: "tabThree",
      title: `${t("32")}`,
      desc1: `${t("33")}`,
      desc2: `${t("34")}`,
      messages: [
        {
          avatarSrc: "",
          username: "Kristina Tubby",
          timestamp: "16:44 AM · On Google Maps ",
          message: "5 stars: This is just what we wanted for lunch after a few days of eating full on Catalan and Spanish food.The dishes were delicious, and the coffee was fantastic.Would definitely recommend this place for someone looking for a delicious, wholesome brunch.",
          isAI: false
        },
        {
          avatarSrc: "https://api.altan.ai/platform/media/216ceff0-a957-4ef2-83b9-82382c498c85",
          username: "Bloome",
          timestamp: "16:45 AM",
          message: "Hey Kristina! 🌟 Thanks so much for the 5-star love! We're thrilled to hear we could provide a delightful change of pace with our dishes and coffee. ☕️🍽️ Your recommendation means the world to us. Can't wait to welcome you back for another wholesome brunch experience. See you soon! 😊💚",
          isAI: true
        }
      ],
    },
    {
      id: "tabTwo",
      title: `${t("26")}`,
      desc1: `${t("27")}`,
      desc2: `${t("28")}`,
      messages: [
        {
          avatarSrc: "",
          username: "Customer",
          timestamp: "10:44 AM",
          message: "How can I install the Athira?",
          isAI: false
        },
        {
          avatarSrc: "https://storage.googleapis.com/logos-chatbot-optimai/avatars/2.jpeg",
          username: "Fuego",
          timestamp: "10:45 AM",
          message: TechnicalSupport,
          isAI: true
        }
      ],
    },
    
    
  ];
  return (
    <>
      <section className="relative pb-20 pt-18.5 lg:pb-22.5">
        <div className="pb-10">
          <SectionHeader
            headerInfo={{
              title: `USE CASES`,
              subtitle: `AI for the real world`,
              description: `Check out how some real-world examples on how our agents can help you interact with customers.`,
            }}
          />
        </div>
        
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mb-15 flex flex-wrap justify-center rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-12.5"
          >
            <div
              onClick={() => setCurrentTab("tabOne")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === "tabOne"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle3 font-medium text-black dark:text-white">
                  01
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  Personalized Shopping 
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabTwo")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === "tabTwo"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle3 font-medium text-black dark:text-white">
                  02
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  Customer Support
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabThree")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === "tabThree"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle3 font-medium text-black dark:text-white">
                  03
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                 Reviews Reply
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="animate_top mx-auto max-w-c-1154"
          >

           

            {featuresTabData.map((feature, key) => (
              <div
                className={feature.id === currentTab ? "block" : "hidden"}
                key={key}
              >
                <Stack spacing={2}>
                  {feature.messages.map((message, msgKey) => (
                    <Message
                      key={msgKey}
                      avatarSrc={message.avatarSrc}
                      username={message.username}
                      timestamp={message.timestamp}
                      message={message.message}
                      isAI={message.isAI}
                    />
                  ))}
                </Stack>
              </div>
            ))}

          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FeaturesTab;
