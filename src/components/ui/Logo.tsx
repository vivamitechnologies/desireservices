import { cn } from '../../lib/utils';

interface LogoProps {
  className?: string;
  scrolled?: boolean;
  light?: boolean;
}

export default function Logo({ className, scrolled, light }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3 select-none", className)}>
      {/* DS Icon */}
      <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-sm overflow-hidden shrink-0">
        <span className="text-white font-bold text-xl tracking-tighter">DS</span>
        {/* Subtle swoosh approximation with CSS */}
        <div className="absolute -bottom-1 -right-1 w-full h-1/3 bg-orange-500 rounded-full blur-[2px] opacity-80 rotate-[-15deg] translate-y-1" />
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className={cn(
            "font-bold text-2xl tracking-tighter leading-none font-display", 
            light ? "text-white" : "text-[#002A5B]"
          )}>
            Desire
          </span>
          <span className="font-bold text-2xl tracking-tighter leading-none font-display text-[#FF6B00]">
            Services
          </span>
        </div>
        <div className={cn(
          "text-[8px] font-bold tracking-[0.2em] mt-1 whitespace-nowrap",
          light ? "text-white/70" : "text-[#002A5B]/70"
        )}>
          CARE <span className="opacity-30 mx-1">|</span> COMMITMENT <span className="opacity-30 mx-1">|</span> COMPASSION
        </div>
      </div>
    </div>
  );
}
