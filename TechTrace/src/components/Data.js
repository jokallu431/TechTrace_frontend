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
      "icon": "bi bi-person",
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
      "icon": "bi bi-building",
      "sub_items": [
        {
          "name": "Create Branch",
          "link": "create_branch",
          "icon": "bi bi-circle"
        },
        {
          "name": "Branch List",
          "link": "branch_list",
          "icon": "bi bi-circle"
        }
      ]
    },
    {
      "name": "Tasks",
      "icon": "bi bi-stickies",
      "sub_items": [
        {
          "name": "Create Task",
          "link": "Create_task",
          "icon": "bi bi-circle"
        },
        {
          "name": "Unassigned Task",
          "link": "unassigend_task",
          "icon": "bi bi-circle"
        },
        {
          "name": "Assigned Task",
          "link": "assigend_task",
          "icon": "bi bi-circle"
        },
        {
          "name": "Pending Task",
          "link": "pending_task",
          "icon": "bi bi-circle"
        },
        {
          "name": "Completed Task",
          "link": "completed_task",
          "icon": "bi bi-circle"
        }
      ]
    },
    {
      "name": "Accessories",
      "icon": "bi bi-tools",
      "sub_items": [
        {
          "name": "Create Accessories",
          "link": "create_accessories",
          "icon": "bi bi-circle"
        },
        {
          "name": "Accessories Listings",
          "link": "accessories_list",
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
      "name": "Forgot Password",
      "link": "forgot_Password",
      "icon": "bi bi-key-fill"
    },
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
      "link": "profiles",
      "icon": "bi bi-person"
    },
    {
      "name": "F.A.Q",
      "link": "pages-faq.html",
      "icon": "bi bi-question-circle"
    },
    {
      "name": "Forgot Password",
      "link": "forgot_Password",
      "icon": "bi bi-key-fill"
    },
  ]
};
  export default sidebarData;