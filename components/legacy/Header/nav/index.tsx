"use client";
import styles from "./style.module.scss";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Body from "./Body";
import Footer from "./Footer";
import { Stack } from "@mui/material";
import Link from "next/link";
import { blur, getChars, height } from "@/utils/animations";
import { useTranslation } from "react-i18next";

const links = (t) => [
  {
    title: t("common:automators"),
    href: "/automators",
    src: "https://api.altan.ai/platform/media/d08e5b88-3a47-412e-afd7-225b8328d6bf",
    preview: "https://api.altan.ai/platform/media/ad34c5e6-65b2-4c24-954d-b7a020436a6c",
    isVideo: true,
  },
  {
    title: t("common:interfaces"),
    href: "/interfaces",
    src: "https://api.altan.ai/platform/media/368f7aa6-1407-47a5-890d-48a208ba6cf0",
    preview: null,
    isVideo: false,
  },
  {
    title: t("common:integration"),
    href: "/apps",
    src: "https://api.altan.ai/platform/media/368f7aa6-1407-47a5-890d-48a208ba6cf0",
    preview: null,
    isVideo: false,
  },
  {
    title: t("common:api"),
    href: "https://apidog.com/apidoc/project-535363",
    src: "https://api.altan.ai/platform/media/368f7aa6-1407-47a5-890d-48a208ba6cf0",
    preview: null,
    isVideo: false,
  },
];

const submenu = (t) => [
  {
    title: "By use case",
    items: [
      { name: t("header:solutions.lm"), url: "/jobs/lead-management-automation" },
      { name: t("header:solutions.inau"), url: "/jobs/invoice-automation" },
      { name: t("header:solutions.sm"), url: "/jobs/social-media-management-automation" },
      { name: t("header:solutions.ma"), url: "/jobs/meta-ads-automation" },
      { name: t("header:solutions.sc"), url: "/jobs/supply-chain-management-automation" },
    ],
  },
  {
    title: "By business area",
    items: [
      { name: t("header:solutions.mk"), url: "/solutions/automate-marketing" },
      { name: t("header:solutions.sa"), url: "/solutions/automate-sales" },
      { name: t("header:solutions.op"), url: "/solutions/automate-operations" },
      { name: t("header:solutions.ce"), url: "/solutions/automate-customer-experience" },
      { name: t("header:solutions.fi"), url: "/solutions/automate-finance" },
      { name: t("header:solutions.it"), url: "/solutions/automate-hr" },
      { name: t("header:solutions.pe"), url: "/solutions/automate-it" },
      { name: t("header:solutions.pr"), url: "/solutions/automate-productivity" },
    ],
  },
];

const MenuSection = ({ t }) => {
  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

  const onMouseEnter = useCallback((index) => () => {
    setSelectedLink({ isActive: true, index });
  }, []);

  const onMouseLeave = useCallback((index) => () => {
    setSelectedLink({ isActive: false, index });
  }, []);

  return (
    <Stack direction="row" spacing={4} alignItems="center" justifyContent="center">
      {submenu(t).map((sm, i) => (
        <Stack key={`sm-${i}`} spacing={2} className="p-4">
          {sm.items.map((item, j) => (
            <Link href={item.url} key={`sm-${i}-${j}`}>
              <motion.p
                onMouseEnter={onMouseEnter(j + i * 100)}
                onMouseLeave={onMouseLeave(j + i * 100)}
                variants={blur}
                style={{ fontSize: '2rem' }}
                animate={selectedLink.isActive && selectedLink.index !== (j + i * 100) ? "open" : "closed"}
              >
                {getChars(item.name)}
              </motion.p>
            </Link>
          ))}
        </Stack>
      ))}
    </Stack>
  );
};


export default function Index({ activeMenu, setIsActive }) {
  const { t } = useTranslation(["common", "header"]);

  const altanerLinks = [
    {
      title: "Facturator",
      href: `/marketplace/facturator`,
      src: "",
      preview: null,
      isVideo: false,
    }
  ]

  return (
    <div>
      {activeMenu === 1 && (
        <motion.div
          variants={height}
          initial="initial"
          animate="enter"
          exit="exit"
          className={styles.nav}
          style={{ display: "block" }}
        >
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <Body links={altanerLinks} setIsActive={setIsActive} />
            </div>
          </div>
        </motion.div>
      )}

      {activeMenu === 3 && (
        <motion.div
          variants={height}
          initial="initial"
          animate="enter"
          exit="exit"
          onClick={() => setIsActive(false)}
          style={{ display: "block" }}
        >
          <MenuSection t={t} />
        </motion.div>
      )}

      {activeMenu !== 1 && activeMenu !== 3 && activeMenu && (
        <motion.div
          variants={height}
          initial="initial"
          animate="enter"
          exit="exit"
          className={styles.nav}
          style={{ display: "block" }}
        >
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <Body links={links(t)} setIsActive={setIsActive} />
              <Footer />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}