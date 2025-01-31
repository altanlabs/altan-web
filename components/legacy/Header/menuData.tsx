

const menuData = (t) => ([
  {
    id: 0,
    title: "Marketplace",
    newTab: false,
    path: "/marketplace",
  },
  // {
  //   id: 1,
  //   title: "Featured",
  //   newTab: false,
  //   isCustom: true,
  //   submenu: [
  //     {
  //       title: "facturator",
  //       path: "/marketplace/facturator",
  //       icon: ""
  //     }
  //   ]
  // },
  
  {
    id: 3,
    title: t("common:apps"),
    newTab: false,
    path: "/apps",
  },
  // {
  //   id: 2,
  //   title: t("common:product"),
  //   newTab: false,
  //   isCustom: true,
  //   submenu: [
  //     {
  //       title: "Platform",
  //       path: "/automators",
  //     },
  //     {
  //       title: "AI Agents",
  //       path: "/interfaces",
  //     },
  //     {
  //       title: "Integration",
  //       path: "/apps",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   title: t("common:solutions"),
  //   newTab: false,
  //   isCustom: true,
  //   submenu: [
  //     { title: "Marketing", path: "/solutions/automate-marketing", icon: "" },
  //     { title: "Sales", path: "/solutions/automate-sales", icon: "" },
  //     { title: "Operations", path: "/solutions/automate-operations", icon: "" },
  //     {
  //       title: "Customer Experience",
  //       path: "/solutions/automate-customer-experience",
  //       icon: "",
  //     },
  //     { title: "Finance", path: "/solutions/automate-finance", icon: "" },
  //     { title: "IT", path: "/solutions/automate-hr", icon: "" },
  //     { title: "People", path: "/solutions/automate-it", icon: "" },
  //     {
  //       title: "Productivity",
  //       path: "/solutions/automate-productivity",
  //       icon: "",
  //     },
  //   ],
  // },
  {
    id: 4,
    title: "Pricing",
    newTab: false,
    path: "/pricing",
  },
  
  {
    id: 5,
    title: t("common:about"),
    newTab: false,
    path: "/about",
  },
  
]);

export default menuData;
