import DashboardContent from "@/components/modules/dashboard-page/DashboardContent";
import PropertiesContent from "@/components/modules/dashboard-page/PropertiesContent";
import SettingsContent from "@/components/modules/dashboard-page/SettingsContent";
import { Building2, Home, Settings } from "lucide-react";

export const sidNavData = [
  {
    icon: <Home />,
    label: "Dashboard",
    content: <DashboardContent />,
  },
  {
    icon: <Building2 />,
    label: "Properties",
    content: <PropertiesContent />,
  },
  {
    icon: <Settings />,
    label: "Settings",
    content: <SettingsContent />,
  },
];
