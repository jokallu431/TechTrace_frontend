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
          "link": "unassigned_task",
          "icon": "bi bi-circle"
        },
        {
          "name": "Assigned Task",
          "link": "assigned_task",
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
    // {
    //   "name": "F.A.Q",
    //   "link": "pages-faq.html",
    //   "icon": "bi bi-question-circle"
    // },
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
      "name": "Tasks",
      "icon": "bi bi-stickies",
      "sub_items": [
        {
          "name": "Unassigned Task",
          "link": "unassigned_task",
          "icon": "bi bi-circle"
        },
        {
          "name": "Assigned Task",
          "link": "assigned_task",
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
    // {
    //   "name": "F.A.Q",
    //   "link": "pages-faq.html",
    //   "icon": "bi bi-question-circle"
    // },
    {
      "name": "Forgot Password",
      "link": "forgot_Password",
      "icon": "bi bi-key-fill"
    },
  ]
};
  export default sidebarData;