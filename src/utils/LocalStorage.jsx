const employees = [
  {
    id: 1,
    email: "john.doe@company.com",
    password: "1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Complete Q4 Sales Report",
        taskDescription:
          "Prepare and submit the quarterly sales analysis report including revenue metrics and forecasts",
        taskDate: "2025-11-15",
        category: "Reports",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client Meeting Preparation",
        taskDescription:
          "Prepare presentation materials for the upcoming client pitch meeting",
        taskDate: "2025-11-08",
        category: "Meetings",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update CRM Database",
        taskDescription:
          "Update all client contact information and interaction history in the CRM system",
        taskDate: "2025-10-28",
        category: "Administration",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Training Session",
        taskDescription:
          "Conduct training session on new sales software for junior team members",
        taskDate: "2025-10-25",
        category: "Training",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Market Research Analysis",
        taskDescription:
          "Analyze competitor pricing strategies and market positioning",
        taskDate: "2025-10-20",
        category: "Research",
      },
    ],
  },
  {
    id: 2,
    email: "jane.smith@company.com",
    password: "1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design New Marketing Campaign",
        taskDescription:
          "Create visual assets and copy for the winter product launch campaign",
        taskDate: "2025-11-20",
        category: "Marketing",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Social Media Content Calendar",
        taskDescription:
          "Plan and schedule social media posts for the next month",
        taskDate: "2025-11-10",
        category: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Website Analytics Review",
        taskDescription:
          "Review website traffic and user engagement metrics from last quarter",
        taskDate: "2025-11-12",
        category: "Analytics",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Email Newsletter Design",
        taskDescription:
          "Design and send monthly email newsletter to subscriber list",
        taskDate: "2025-10-30",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Brand Guidelines Update",
        taskDescription:
          "Update company brand guidelines document with new logo variations",
        taskDate: "2025-10-22",
        category: "Branding",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Competitor Social Analysis",
        taskDescription:
          "Analyze competitor social media strategies and engagement rates",
        taskDate: "2025-11-18",
        category: "Research",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Photography Session Coordination",
        taskDescription:
          "Organize product photography session for new inventory",
        taskDate: "2025-10-15",
        category: "Content",
      },
    ],
  },
  {
    id: 3,
    email: "mike.johnson@company.com",
    password: "1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Deploy New Feature to Production",
        taskDescription:
          "Deploy the user authentication update to production environment",
        taskDate: "2025-11-05",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Critical Bug in Payment Module",
        taskDescription:
          "Investigate and resolve the payment processing issue reported by QA team",
        taskDate: "2025-11-03",
        category: "Bug Fix",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code Review for Dashboard Feature",
        taskDescription:
          "Review pull request for the new analytics dashboard implementation",
        taskDate: "2025-11-07",
        category: "Code Review",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database Optimization",
        taskDescription:
          "Optimize database queries to improve application performance",
        taskDate: "2025-11-14",
        category: "Optimization",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "API Documentation Update",
        taskDescription:
          "Update API documentation with new endpoints and parameters",
        taskDate: "2025-10-29",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Security Audit",
        taskDescription:
          "Conduct security audit of authentication and authorization systems",
        taskDate: "2025-10-18",
        category: "Security",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Mobile App Integration",
        taskDescription: "Integrate backend API with mobile application",
        taskDate: "2025-10-12",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Unit Test Coverage Improvement",
        taskDescription: "Increase unit test coverage for core modules to 85%",
        taskDate: "2025-10-25",
        category: "Testing",
      },
    ],
  },
  {
    id: 4,
    email: "sarah.williams@company.com",
    password: "1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Quarterly Financial Review",
        taskDescription:
          "Prepare quarterly financial statements and variance analysis",
        taskDate: "2025-11-18",
        category: "Finance",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Budget Planning for 2026",
        taskDescription:
          "Create departmental budget proposals for the upcoming fiscal year",
        taskDate: "2025-11-25",
        category: "Planning",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Vendor Invoice Processing",
        taskDescription:
          "Process and approve pending vendor invoices for payment",
        taskDate: "2025-11-06",
        category: "Accounts Payable",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Payroll Processing",
        taskDescription:
          "Complete monthly payroll processing for all employees",
        taskDate: "2025-10-31",
        category: "Payroll",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Tax Documentation Preparation",
        taskDescription:
          "Prepare tax documentation for annual filing requirements",
        taskDate: "2025-10-20",
        category: "Compliance",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Expense Report Audit",
        taskDescription:
          "Audit employee expense reports for compliance with company policy",
        taskDate: "2025-11-09",
        category: "Audit",
      },
    ],
  },
  {
    id: 5,
    email: "david.brown@company.com",
    password: "1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Recruitment for Senior Developer",
        taskDescription:
          "Screen candidates and schedule interviews for senior developer position",
        taskDate: "2025-11-12",
        category: "Recruitment",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Employee Onboarding Program",
        taskDescription:
          "Update and improve the new employee onboarding process",
        taskDate: "2025-11-20",
        category: "HR Operations",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Performance Review Preparation",
        taskDescription:
          "Prepare materials and schedule annual performance review meetings",
        taskDate: "2025-11-16",
        category: "Performance Management",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Benefits Enrollment Period",
        taskDescription:
          "Coordinate open enrollment period for employee benefits",
        taskDate: "2025-11-22",
        category: "Benefits",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Employee Handbook Revision",
        taskDescription:
          "Review and update employee handbook with new policies",
        taskDate: "2025-10-27",
        category: "Policy",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Diversity Training Workshop",
        taskDescription:
          "Organize and conduct diversity and inclusion training for all staff",
        taskDate: "2025-10-19",
        category: "Training",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "HR Software Implementation",
        taskDescription: "Implement new HR management software system",
        taskDate: "2025-10-10",
        category: "Technology",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Exit Interview Analysis",
        taskDescription:
          "Analyze exit interview data and prepare retention recommendations",
        taskDate: "2025-10-24",
        category: "Analytics",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Workplace Safety Compliance",
        taskDescription:
          "Ensure all workplace safety protocols meet regulatory requirements",
        taskDate: "2025-11-11",
        category: "Compliance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Building Event Planning",
        taskDescription: "Plan and organize quarterly team building event",
        taskDate: "2025-10-21",
        category: "Culture",
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


export const setLocalStorage = ()=>{
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
}
export const getLocalStorage = ()=>{
   const employees = JSON.parse(localStorage.getItem("employees"));
   const admin = JSON.parse(localStorage.getItem("admin"));

  console.log(employees,admin);
  
}