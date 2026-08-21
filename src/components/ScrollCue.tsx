import { ArrowDown } from "lucide-react";

export function ScrollCue({ targetId, label }: { targetId: string; label: string }) {
  return (
    <a className="scroll-cue" href={`#${targetId}`} aria-label={label}>
      <span className="scroll-cue-label">{label}</span>
      <span className="scroll-cue-arrow" aria-hidden="true"><ArrowDown size={17} strokeWidth={1.8} /></span>
    </a>
  );
}
