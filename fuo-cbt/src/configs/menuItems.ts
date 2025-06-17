import {
  LucideIcon,
  LayoutDashboard,
  Users,
  Lock,
  AlertCircle,
  UserCircle,
  Building,
  Settings,
  CircleUser,
  Pill,
  MonitorDot,
  DollarSign,
  BookUser,
} from "lucide-react";

interface MenuItem {
  icon: LucideIcon;
  label: string;
  href?: string;
  submenu?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  {
    icon: Users,
    label: "Manager",
    submenu: [
      { icon: Users, label: "Whistleblowing", href: "/manager/whistleblowing" },
      {
        icon: Users,
        label: "Untoward Notifications",
        href: "/manager/notifications",
      },
      { icon: Users, label: "Incident Reports", href: "/manager/incidents" },
      { icon: Users, label: "External Users", href: "/manager/external-users" },
      {
        icon: Users,
        label: "External Users Access",
        href: "/manager/external-users-access",
      },
    ],
  },
  {
    icon: UserCircle,
    label: "Client",
    submenu: [
      { icon: Users, label: "All Clients", href: "/client/all-client" },
      // { icon: Users, label: 'Active', href: '/client/active' },
      // { icon: Users, label: 'Non-active', href: '/client/non-active' },
      // { icon: Users, label: 'Move Client', href: '/client/move' },
      // { icon: Users, label: 'View Care Plan', href: '/client/care-plan' },

      // { icon: Users, label: 'Hobbies', href: '/client/hobbies' },

      {
        icon: Users,
        label: "Devices/Equipment Assessment",
        href: "/client/equipment",
      },
      // { icon: Users, label: 'Area Code', href: '/client/area-code' },
      // { icon: Users, label: 'Territory', href: '/client/territory' },
    ],
  },
  {
    icon: Building,
    label: "Staff",
    submenu: [
      { icon: Users, label: "All Staff", href: "/staff/all-staff" },
      { icon: Users, label: "All Users", href: "/staff/all-users" },
      { icon: Users, label: "Black List", href: "/staff/blacklist" },
    ],
  },
  {
    icon: Pill,
    label: "Medication",
    submenu: [
      { icon: Users, label: "Live Medication Tracker", href: "/staff/active" },
      { icon: Users, label: "Fill Mar chart", href: "/staff/non-active" },
      { icon: Users, label: "Empty Marchart", href: "/staff/move" },
      { icon: Users, label: "Incoming Medication", href: "/staff/agency" },
      { icon: Users, label: "Registration", href: "/staff/office" },
      { icon: Users, label: "Incoming Medication", href: "/staff/applicant" },
      { icon: Users, label: "Medication Route", href: "/staff/all" },
    ],
  },
  {
    icon: MonitorDot,
    label: "Monitoring/Reports",
    submenu: [
      { icon: Users, label: "Staff", href: "/staff/active" },
      { icon: Users, label: "Client", href: "/staff/non-active" },
      { icon: Users, label: "Log/Audit", href: "/staff/move" },
      { icon: Users, label: "Care Note Under Client", href: "/staff/agency" },
      { icon: Users, label: "Live Tracker", href: "/staff/office" },
      { icon: Users, label: "Time Sheet", href: "/staff/applicant" },
      { icon: Users, label: "Rota Report", href: "/staff/all" },
      { icon: Users, label: "Med Audit", href: "/staff/all" },
    ],
  },
  {
    icon: DollarSign,
    label: "Finance",
    submenu: [
      { icon: Users, label: "Payroll", href: "/staff/active" },
      { icon: Users, label: "Petty Cash", href: "/staff/non-active" },
      { icon: Users, label: "Fixed Asset Register", href: "/staff/move" },
      { icon: Users, label: "Office Attendance", href: "/staff/agency" },
      { icon: Users, label: "Expense Log", href: "/staff/office" },
      { icon: Users, label: "Invoices", href: "/staff/applicant" },
      { icon: Users, label: "Company Bank", href: "/staff/all" },
      { icon: Users, label: "Emails", href: "/staff/all" },
    ],
  },
  {
    icon: BookUser,
    label: "Human Resource",
    submenu: [
      { icon: Users, label: "Complain Register", href: "/staff/active" },
      { icon: Users, label: "Attendance", href: "/staff/non-active" },
      { icon: Users, label: "Holiday & Leaves", href: "/staff/move" },
      { icon: Users, label: "Company Message", href: "/staff/agency" },
      { icon: Users, label: "App Message", href: "/staff/office" },
      { icon: Users, label: "Policy", href: "/staff/applicant" },
      { icon: Users, label: "Inspection", href: "/staff/all" },
      { icon: Users, label: "Office Locations", href: "/staff/all" },
      { icon: Users, label: "E-Learning", href: "/staff/all" },
      { icon: Users, label: "Staff Performance Indicator", href: "/staff/all" },
      {
        icon: Users,
        label: "Client Performance Indicator",
        href: "/staff/all",
      },
      { icon: Users, label: "Interview Questions", href: "/staff/all" },
      { icon: Users, label: "Health Questions", href: "/staff/all" },
      { icon: Users, label: "Shadowing Questions", href: "/staff/all" },
      { icon: Users, label: "Contract Template", href: "/staff/all" },
      { icon: Users, label: "Meetings", href: "/staff/all" },
      { icon: Users, label: "Projects", href: "/staff/all" },
    ],
  },
  {
    icon: Settings,
    label: "Settings",
    submenu: [
      { icon: Users, label: "Area Code", href: "/setting/area-code" },
      { icon: Users, label: "Territory", href: "/setting/territory" },
      { icon: Users, label: "Hobbies", href: "/setting/hobbies" },
      { icon: Users, label: "Services Types", href: "/setting/service-type" },
      {
        icon: Users,
        label: "Health Condition",
        href: "/setting/health-condition",
      },
      { icon: Users, label: "Staff Work Team", href: "/setting/work-team" },
      { icon: Users, label: "Staff Job Position", href: "/setting/position" },
    ],
  },
  { icon: Settings, label: "BaseRecords", href: "/baseRecord" },
  { icon: CircleUser, label: "Directors", href: "/director" },
  { icon: Lock, label: "Pin Code", href: "/pincode" },
  { icon: AlertCircle, label: "Alerts", href: "/alerts" },
];
