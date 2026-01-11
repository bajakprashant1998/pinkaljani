import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowUp, ArrowDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change?: number;
  changeLabel?: string;
  icon?: LucideIcon;
  color?: string;
  variant?: "default" | "compact" | "featured";
}

const MetricCard = ({
  title,
  value,
  change,
  changeLabel = "vs last period",
  icon: Icon,
  color = "from-primary to-accent",
  variant = "default",
}: MetricCardProps) => {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  if (variant === "compact") {
    return (
      <motion.div
        className="bg-muted rounded-xl p-4 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <div className="text-xs text-muted-foreground">{title}</div>
      </motion.div>
    );
  }

  if (variant === "featured") {
    return (
      <motion.div
        className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${color}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative z-10">
          {Icon && (
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-white" />
            </div>
          )}
          <div className="text-4xl font-display font-bold text-white mb-1">{value}</div>
          <p className="text-white/80 text-sm">{title}</p>
          {change !== undefined && (
            <div className="flex items-center gap-1 mt-3">
              {isPositive && <ArrowUp className="w-4 h-4 text-white" />}
              {isNegative && <ArrowDown className="w-4 h-4 text-white" />}
              <span className="text-sm text-white/90 font-medium">
                {Math.abs(change)}% {changeLabel}
              </span>
            </div>
          )}
        </div>
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full" />
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full" />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-card rounded-2xl p-5 border border-border shadow-sm hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start justify-between mb-3">
        <p className="text-sm text-muted-foreground">{title}</p>
        {Icon && (
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center`}>
            <Icon className="w-4 h-4 text-white" />
          </div>
        )}
      </div>
      <div className="text-2xl font-bold text-foreground mb-2">{value}</div>
      {change !== undefined && (
        <div className="flex items-center gap-1">
          {isPositive && <ArrowUp className="w-4 h-4 text-emerald-500" />}
          {isNegative && <ArrowDown className="w-4 h-4 text-red-500" />}
          <span className={`text-sm font-medium ${isPositive ? "text-emerald-500" : isNegative ? "text-red-500" : "text-muted-foreground"}`}>
            {Math.abs(change || 0)}%
          </span>
          <span className="text-xs text-muted-foreground">{changeLabel}</span>
        </div>
      )}
    </motion.div>
  );
};

export default MetricCard;
