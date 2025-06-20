localStorage.clear()

const employees = [
  {
    id: 1,
    name: "Amit Kumar",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Check Inventory",
        taskDescription: "Verify current stock levels in warehouse A.",
        taskDate: "2025-06-10",
        category: "Inventory",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Assemble Robot Arm",
        taskDescription: "Assemble components of robotic arm model RX-12.",
        taskDate: "2025-06-09",
        category: "Assembly",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Update Logs",
        taskDescription: "Record maintenance details in digital logbook.",
        taskDate: "2025-06-11",
        category: "Reporting",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    name: "Sneha Patel",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Clean Sensor Modules",
        taskDescription: "Clean and recalibrate optical sensors.",
        taskDate: "2025-06-12",
        category: "Maintenance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Run Diagnostics",
        taskDescription: "Perform full diagnostic on assembly line bot.",
        taskDate: "2025-06-11",
        category: "Diagnostics",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Submit Report",
        taskDescription: "Submit end-of-day summary for review.",
        taskDate: "2025-06-13",
        category: "Reporting",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Replace Battery Unit",
        taskDescription: "Install a new battery in robot model XY-3.",
        taskDate: "2025-06-12",
        category: "Repair",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    name: "Ravi Verma",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Calibrate Axis",
        taskDescription: "Check X-Y axis calibration in test unit.",
        taskDate: "2025-06-10",
        category: "Calibration",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Inspect Welding Bot",
        taskDescription: "Conduct inspection on robotic welder.",
        taskDate: "2025-06-08",
        category: "Inspection",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Upload Firmware",
        taskDescription: "Update firmware on controller board.",
        taskDate: "2025-06-12",
        category: "Software",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Sensor Tuning",
        taskDescription: "Fine-tune temperature sensors on line B.",
        taskDate: "2025-06-14",
        category: "Tuning",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    name: "Priya Shah",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Align Tracks",
        taskDescription: "Realign conveyor belt tracks.",
        taskDate: "2025-06-11",
        category: "Maintenance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Design Jig",
        taskDescription: "Design support jig for custom robot frame.",
        taskDate: "2025-06-10",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Prepare Materials",
        taskDescription: "Organize parts needed for tomorrow's build.",
        taskDate: "2025-06-14",
        category: "Preparation",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    name: "Nikhil Mehta",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Safety Drill",
        taskDescription: "Perform safety shutdown test.",
        taskDate: "2025-06-09",
        category: "Safety",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Test Motor Response",
        taskDescription: "Run step tests on servo motor.",
        taskDate: "2025-06-13",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Refactor Script",
        taskDescription: "Improve task handling automation script.",
        taskDate: "2025-06-14",
        category: "Software",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Cooling System Check",
        taskDescription: "Test cooling efficiency in rack cabinet.",
        taskDate: "2025-06-12",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Deploy Control App",
        taskDescription: "Deploy updated controller app to robot fleet.",
        taskDate: "2025-06-11",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];



const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
]
 

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}
export const getLocalStorage=()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return {employees,admin}
}