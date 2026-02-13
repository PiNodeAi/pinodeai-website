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
};

export function getIcon(name: string): LucideIcon | null {
  return iconMap[name] || null;
}


