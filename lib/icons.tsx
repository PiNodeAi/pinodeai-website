import {
  Brain,
  Cloud,
  Smartphone,
  Database,
  Shield,
  TrendingUp,
  Layers,
  Globe,
  ShoppingCart,
  BarChart3,
  RefreshCw,
  Cpu,
  CreditCard,
  Link2,
  FileStack,
  CheckCircle,
  Box,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Brain,
  Cloud,
  Smartphone,
  Database,
  Shield,
  TrendingUp,
  Layers,
  Globe,
  ShoppingCart,
  BarChart3,
  RefreshCw,
  Cpu,
  CreditCard,
  Link2,
  FileStack,
  CheckCircle,
  Box,
};

export function getIcon(name: string): LucideIcon | null {
  return iconMap[name] || null;
}


