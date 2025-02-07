// // data.js (or in the same file)
// const sidebarData = [
//     {
//       title: "Admin Dashboard",
//       icon: "fas fa-fw fa-tachometer-alt",
//       link: "/dashboard",
//       subMenu: [],
//     },
//     {
//       title: "Task",
//       icon: "fas fa-fw fa-wrench",
//       link: "#",
//       subMenu: [
//         {
//           title: "Pending Task",
//           link: "/dashboard/pending",
//         },
//         {
//           title: "Completed Task",
//           link: "/dashboard/completed",
//         },
//         {
//           title: "Unassigned Task",
//           link: "/dashboard/unassigned",
//         },
//         {
//           title: "Assigned Task",
//           link: "/dashboard/assigned",
//         },
//       ],
//     },
//     {
//       title: "User Profile",
//       icon: "fas fa-fw fa-user",
//       link: "#",
//       subMenu: [
//         {
//           title: "Create User",
//           link: "/dashboard/profile",
//         },
//         {
//           title: "User List",
//           link: "/dashboard/userlist",
//         },
//       ],
//     },
//     {
//       title: "Pages",
//       icon: "fas fa-fw fa-folder",
//       link: "#",
//       subMenu: [
//         {
//           title: "Login",
//           link: "/login",
//         },
//         {
//           title: "Forgot Password?",
//           link: "/forgetpassword",
//         },
//       ],
//     },
//   ];
  
//   export default sidebarData;

const sidebarData = {
  "admin": [
    {
      "name": "Admin Dashboard",
      "link": "../dashboard",
      "icon": "bi bi-grid"
    },
    {
      "name": "Users",
      "icon": "bi bi-menu-button-wide",
      "sub_items": [
        {
          "name": "Create User",
          "link": "create_profile",
          "icon": "bi bi-circle"
        },
        {
          "name": "User List",
          "link": "user_list",
          "icon": "bi bi-circle"
        }
      ]
    },
    {
      "name": "Branches",
      "icon": "bi bi-journal-text",
      "sub_items": [
        {
          "name": "Create Branch",
          "link": "create_branch",
          "icon": "bi bi-circle"
        },
        {
          "name": "Branch List",
          "link": "forms-validation.html",
          "icon": "bi bi-circle"
        }
      ]
    },
    {
      "name": "Tasks",
      "icon": "bi bi-layout-text-window-reverse",
      "sub_items": [
        {
          "name": "Create Task",
          "link": "tables-general.html",
          "icon": "bi bi-circle"
        },
        {
          "name": "Unassigned Task",
          "link": "tables-data.html",
          "icon": "bi bi-circle"
        },
        {
          "name": "Assigned Task",
          "link": "tables-general.html",
          "icon": "bi bi-circle"
        },
        {
          "name": "Pending Task",
          "link": "tables-data.html",
          "icon": "bi bi-circle"
        },
        {
          "name": "Completed Task",
          "link": "tables-data.html",
          "icon": "bi bi-circle"
        }
      ]
    },
    {
      "name": "Accessories",
      "icon": "bi bi-gem",
      "sub_items": [
        {
          "name": "Create Accessorires",
          "link": "icons-bootstrap.html",
          "icon": "bi bi-circle"
        },
        {
          "name": "Accessories Listings",
          "link": "icons-remix.html",
          "icon": "bi bi-circle"
        }
      ]
    },
    {
      "name": "Pages",
      "heading": true
    },
    {
      "name": "Profile",
      "link": "profiles",
      "icon": "bi bi-person"
    },
    {
      "name": "F.A.Q",
      "link": "pages-faq.html",
      "icon": "bi bi-question-circle"
    },
    {
      "name": "Contact",
      "link": "pages-contact.html",
      "icon": "bi bi-envelope"
    },
    {
      "name": "Register",
      "link": "pages-register.html",
      "icon": "bi bi-card-list"
    },
    {
      "name": "Login",
      "link": "pages-login.html",
      "icon": "bi bi-box-arrow-in-right"
    },
    {
      "name": "Error 404",
      "link": "pages-error-404.html",
      "icon": "bi bi-dash-circle"
    }
  ],
  "technician": [
    {
      "name": "Technician Dashboard",
      "link": "../dashboard",
      "icon": "bi bi-grid"
    },
    {
      "name": "Tables",
      "icon": "bi bi-layout-text-window-reverse",
      "sub_items": [
        {
          "name": "General Tables",
          "link": "tables-general.html",
          "icon": "bi bi-circle"
        },
        {
          "name": "Data Tables",
          "link": "tables-data.html",
          "icon": "bi bi-circle"
        }
      ]
    },
    {
      "name": "Charts",
      "icon": "bi bi-bar-chart",
      "sub_items": [
        {
          "name": "Chart.js",
          "link": "charts-chartjs.html",
          "icon": "bi bi-circle"
        },
        {
          "name": "ApexCharts",
          "link": "charts-apexcharts.html",
          "icon": "bi bi-circle"
        },
        {
          "name": "ECharts",
          "link": "charts-echarts.html",
          "icon": "bi bi-circle"
        }
      ]
    },
    {
      "name": "Pages",
      "heading": true
    },
    {
      "name": "Profile",
      "link": "users-profile.html",
      "icon": "bi bi-person"
    }
  ]
};
  export default sidebarData;