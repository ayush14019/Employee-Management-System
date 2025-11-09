# 📋 Employee Task Management System

<div align="center">

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A modern, responsive task management system for teams**

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack)

</div>

---

## 🌟 Features

### 👨‍💼 Admin Dashboard
- **Task Creation** - Create and assign tasks to employees with detailed descriptions
- **Employee Overview** - View all employees and their task statistics at a glance
- **Real-time Updates** - Instant task assignment and status tracking
- **Beautiful Analytics** - Visual representation of task distribution

### 👤 Employee Dashboard
- **Task Management** - View all assigned tasks organized by status
- **Task Actions** - Accept, complete, or fail tasks with one click
- **Status Tracking** - Monitor active, new, completed, and failed tasks
- **Personalized Dashboard** - Welcome message with dynamic greetings

### 🎨 Modern UI/UX
- **Glassmorphism Design** - Beautiful frosted glass effects and gradients
- **Responsive Layout** - Perfect experience on mobile, tablet, and desktop
- **Smooth Animations** - Delightful micro-interactions and transitions
- **Color-Coded System** - Visual indicators for different task types
- **Dark Theme** - Eye-friendly dark mode interface

---

## 📸 Screenshots

### Admin Dashboard
```
┌─────────────────────────────────────────────┐
│  🎯 Create Tasks                            │
│  📊 View All Employees                      │
│  📈 Task Statistics                         │
└─────────────────────────────────────────────┘
```

### Employee Dashboard
```
┌─────────────────────────────────────────────┐
│  ✨ Personalized Welcome                    │
│  📋 Task Cards (New/Active/Complete/Failed) │
│  🎯 Quick Actions                           │
└─────────────────────────────────────────────┘
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/employee-task-management.git
cd employee-task-management
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
```
Navigate to http://localhost:5173
```

---

## 🔐 Login Credentials

### Admin Access
```
Email: admin@company.com
Password: 1234
```

### Employee Access
Use any employee credentials from the system:
```
Email: demo@company.com
Password: 123
```

---

## 💻 Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Tailwind CSS** - Utility-first CSS framework
- **React Context API** - State management
- **Local Storage** - Data persistence

### Design
- **Glassmorphism** - Modern UI design trend
- **Gradient Effects** - Beautiful color transitions
- **Responsive Design** - Mobile-first approach
- **Custom Animations** - Smooth user interactions

---

## 📂 Project Structure

```
employee-task-management/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   └── Login.jsx
│   │   ├── Dashboard/
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── EmployeeDashboard.jsx
│   │   ├── TaskList/
│   │   │   ├── TaskList.jsx
│   │   │   ├── AcceptTask.jsx
│   │   │   ├── NewTask.jsx
│   │   │   ├── CompleteTask.jsx
│   │   │   └── FailedTask.jsx
│   │   └── Other/
│   │       ├── Header.jsx
│   │       ├── CreateTask.jsx
│   │       └── AllTask.jsx
│   ├── context/
│   │   └── AuthProvider.jsx
│   ├── utils/
│   │   └── localStorage.js
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
└── README.md
```

---

## 🎯 Usage

### For Admins

1. **Login** with admin credentials
2. **Create Tasks** - Fill in task details and assign to employees
3. **Monitor Progress** - View all employees and their task statistics
4. **Track Performance** - See completed, active, and failed tasks

### For Employees

1. **Login** with employee credentials
2. **View Tasks** - See all assigned tasks categorized by status
3. **Manage Tasks**:
   - **Accept** new tasks to start working
   - **Complete** finished tasks
   - **Fail** tasks if unable to complete
4. **Track Progress** - Monitor your task completion rate

---

## 🎨 Color Scheme

| Color | Purpose | Hex Code |
|-------|---------|----------|
| 🟢 Emerald | Success, Primary | `#10b981` |
| 🔵 Blue | Information, New Tasks | `#3b82f6` |
| 🟡 Yellow | Warning, Active Tasks | `#f59e0b` |
| 🔴 Red | Danger, Failed Tasks | `#ef4444` |
| 🟣 Purple | Admin Features | `#a855f7` |

---

## 🔧 Configuration

### Context Provider Setup
The app uses React Context API for global state management:

```javascript
// src/context/AuthProvider.jsx
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  
  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};
```

### Local Storage Structure
```javascript
{
  "employees": [
    {
      "id": 1,
      "firstName": "John",
      "email": "employee@company.com",
      "password": "123",
      "tasks": [...],
      "taskNumbers": {
        "active": 0,
        "newTask": 1,
        "completed": 0,
        "failed": 0
      }
    }
  ]
}
```

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

---

## 📱 Responsive Breakpoints

| Device | Breakpoint | Layout |
|--------|------------|--------|
| Mobile | < 768px | Vertical cards, stacked layout |
| Tablet | 768px - 1024px | 2-column grid |
| Desktop | > 1024px | Full horizontal layout |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

** Ayush **

- GitHub: [ayush14019](https://github.com/ayush14019)
- LinkedIn: [ayush-raj-8bb362213](https://linkedin.com/in/ayush-raj-8bb362213)
- Email:  rajayush224@gmail.com

---

## 🙏 Acknowledgments

- Inspiration from modern task management tools
- React and Tailwind CSS communities
- Icons from Heroicons
- Design inspiration from Glassmorphism UI trends

---

## 📧 Support

If you have any questions or need help, please open an issue or contact:
- Email: support@example.com
- Discord: [Join our server](https://discord.gg/yourserver)

---

<div align="center">

**Made with ❤️ using React and Tailwind CSS**

⭐ Star this repo if you find it helpful!

</div>