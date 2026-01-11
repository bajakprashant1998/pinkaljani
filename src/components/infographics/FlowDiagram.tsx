import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FlowStep {
  title: string;
  icon: LucideIcon;
  description?: string;
}

interface FlowDiagramProps {
  steps: FlowStep[];
  color?: string;
  variant?: "horizontal" | "vertical";
}

const FlowDiagram = ({
  steps,
  color = "from-primary to-accent",
  variant = "horizontal",
}: FlowDiagramProps) => {
  if (variant === "vertical") {
    return (
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border" />
        
        <div className="space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                className="relative flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className={`relative z-10 w-12 h-12 rounded-full bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                  {step.description && (
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute left-6 top-14 transform -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between gap-2 overflow-x-auto py-4">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <motion.div
            key={step.title}
            className="flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-col items-center text-center min-w-[100px]">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg mb-3`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-foreground">{step.title}</span>
            </div>
            {index < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="mx-2"
              >
                <ArrowRight className="w-5 h-5 text-primary" />
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default FlowDiagram;
