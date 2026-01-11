import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface TimelineStep {
  title: string;
  duration: string;
  icon: LucideIcon;
  completed?: boolean;
}

interface TimelineProgressProps {
  steps: TimelineStep[];
  currentStep?: number;
  color?: string;
}

const TimelineProgress = ({
  steps,
  currentStep = 0,
  color = "from-primary to-accent",
}: TimelineProgressProps) => {
  return (
    <div className="w-full">
      {/* Progress bar */}
      <div className="relative h-2 bg-muted rounded-full mb-8 overflow-hidden">
        <motion.div
          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${color} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      {/* Timeline steps */}
      <div className="relative flex justify-between">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isCompleted = index <= currentStep;
          const isCurrent = index === currentStep;

          return (
            <motion.div
              key={step.title}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all duration-300 ${
                  isCompleted
                    ? `bg-gradient-to-br ${color} shadow-lg`
                    : "bg-muted border-2 border-border"
                } ${isCurrent ? "ring-4 ring-primary/20" : ""}`}
              >
                <Icon className={`w-5 h-5 ${isCompleted ? "text-white" : "text-muted-foreground"}`} />
              </div>
              <span className={`text-sm font-medium ${isCompleted ? "text-foreground" : "text-muted-foreground"}`}>
                {step.title}
              </span>
              <span className="text-xs text-muted-foreground mt-1">{step.duration}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineProgress;
