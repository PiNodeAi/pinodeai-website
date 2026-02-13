import {
  Brain,
  Cloud,
  Smartphone,
  Database,
  Shield,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Brain,
  Cloud,
  Smartphone,
  Database,
  Shield,
  TrendingUp,
};

export function getIcon(name: string): LucideIcon | null {
  return iconMap[name] || null;
}


