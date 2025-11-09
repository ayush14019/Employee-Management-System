const employees = [
  {
    id: 1,
    firstName: "User",
    email: "demo@company.com",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Monthly Report",
        taskDescription:
          "Compile and format monthly department performance metrics.",
        taskDate: "2025-11-15",
        category: "Reporting",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Website Content Update",
        taskDescription:
          "Review and refresh homepage banners and promotional content.",
        taskDate: "2025-11-08",
        category: "Content",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database Cleanup",
        taskDescription:
          "Remove duplicate records and optimize indexing for better performance.",
        taskDate: "2025-11-10",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Email Campaign",
        taskDescription:
          "Launch new email campaign for seasonal sales promotion.",
        taskDate: "2025-10-28",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Backup",
        taskDescription:
          "Failed to complete full server backup due to network timeout.",
        taskDate: "2025-10-20",
        category: "IT Support",
      },
    ],
  },
  {
    id: 2,
    firstName: "Aisha",
    email: "aisha.khan@company.com",
    password: "1234",
    taskNumbers: {
      active: 4,
      newTask: 2,
      completed: 3,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Customer Survey Design",
        taskDescription:
          "Create a feedback form for product satisfaction analysis.",
        taskDate: "2025-11-20",
        category: "Research",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Team Coordination",
        taskDescription:
          "Schedule weekly sync meeting and set up meeting notes.",
        taskDate: "2025-11-12",
        category: "Management",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Ad Campaign",
        taskDescription:
          "Design ad banners and target audience for new product release.",
        taskDate: "2025-10-30",
        category: "Marketing",
      },
    ],
  },
  {
    id: 3,
    firstName: "Kunal",
    email: "kunal.verma@company.com",
    password: "1234",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription:
          "Integrate new payment API into mobile application backend.",
        taskDate: "2025-11-06",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Resolved security vulnerability in login module.",
        taskDate: "2025-10-25",
        category: "Security",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "UI Redesign",
        taskDescription:
          "Failed to complete homepage redesign due to design inconsistencies.",
        taskDate: "2025-10-19",
        category: "Design",
      },
    ],
  },
  {
    id: 4,
    firstName: "Simran",
    email: "simran.joshi@company.com",
    password: "1234",
    taskNumbers: {
      active: 3,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "HR Policy Update",
        taskDescription:
          "Review and update internal leave and attendance policies.",
        taskDate: "2025-11-18",
        category: "HR",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Recruitment Drive",
        taskDescription: "Completed campus recruitment event successfully.",
        taskDate: "2025-10-28",
        category: "Recruitment",
      },
    ],
  },
  {
    id: 5,
    firstName: "Dev",
    email: "dev.patel@company.com",
    password: "1234",
    taskNumbers: {
      active: 4,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Testing Automation",
        taskDescription:
          "Create Cypress test cases for login and signup flows.",
        taskDate: "2025-11-09",
        category: "QA",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Performance Benchmarking",
        taskDescription: "Analyze response times for recent API deployments.",
        taskDate: "2025-11-13",
        category: "DevOps",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Version Control Cleanup",
        taskDescription:
          "Removed old branches and synced repository with staging.",
        taskDate: "2025-10-22",
        category: "Git",
      },
    ],
  },
  {
    id: 6,
    firstName: "Meera",
    email: "meera.nair@company.com",
    password: "1234",
    taskNumbers: {
      active: 3,
      newTask: 1,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Financial Summary",
        taskDescription:
          "Summarize expense reports for Q3 and highlight anomalies.",
        taskDate: "2025-11-22",
        category: "Finance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Vendor Payment",
        taskDescription: "Processed pending payments for vendor invoices.",
        taskDate: "2025-10-27",
        category: "Accounts",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Budget Approval",
        taskDescription:
          "Missed deadline for department budget approval submission.",
        taskDate: "2025-10-15",
        category: "Planning",
      },
    ],
  },
  {
    id: 7,
    firstName: "Rajesh",
    email: "rajesh.sharma@company.com",
    password: "1234",
    taskNumbers: {
      active: 2,
      newTask: 0,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code Documentation",
        taskDescription:
          "Document API endpoints and data flow for the backend.",
        taskDate: "2025-11-14",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Triage",
        taskDescription: "Reviewed and assigned critical bugs for next sprint.",
        taskDate: "2025-10-30",
        category: "QA",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "System Migration",
        taskDescription: "Migration failed due to missing schema dependencies.",
        taskDate: "2025-10-19",
        category: "Infrastructure",
      },
    ],
  },
  {
    id: 8,
    firstName: "Tanya",
    email: "tanya.singh@company.com",
    password: "1234",
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Visual Assets",
        taskDescription:
          "Design infographic templates for the upcoming campaign.",
        taskDate: "2025-11-11",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Social Media Analytics",
        taskDescription:
          "Track engagement rates for Instagram and LinkedIn posts.",
        taskDate: "2025-11-13",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Poster Design",
        taskDescription: "Completed promotional poster for product launch.",
        taskDate: "2025-10-24",
        category: "Branding",
      },
    ],
  },
  {
    id: 9,
    firstName: "Varun",
    email: "varun.malhotra@company.com",
    password: "1234",
    taskNumbers: {
      active: 4,
      newTask: 1,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Deployment Planning",
        taskDescription: "Plan the upcoming production deployment schedule.",
        taskDate: "2025-11-09",
        category: "DevOps",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Server Monitoring",
        taskDescription: "Configured uptime monitoring for backend servers.",
        taskDate: "2025-10-26",
        category: "IT",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Patch Update",
        taskDescription:
          "Failed to apply patch update due to dependency errors.",
        taskDate: "2025-10-21",
        category: "Maintenance",
      },
    ],
  },
  {
    id: 10,
    firstName: "Neha",
    email: "neha.bansal@company.com",
    password: "1234",
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client Feedback Summary",
        taskDescription: "Compile feedback received from latest product demo.",
        taskDate: "2025-11-10",
        category: "Client Relations",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Schedule Demo Session",
        taskDescription:
          "Book demo slots with new clients via calendar system.",
        taskDate: "2025-11-08",
        category: "Sales",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Customer Query Resolution",
        taskDescription: "Resolved pending tickets in support portal.",
        taskDate: "2025-10-23",
        category: "Support",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@company.com",
    password: "1234",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
