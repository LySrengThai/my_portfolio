export const Backdrop = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
  >
    <div className="absolute -top-40 left-[calc(50%-17rem)] h-[34rem] w-[34rem] animate-drift-1 rounded-full bg-glow-1 blur-[120px] will-change-transform" />
    <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] animate-drift-2 rounded-full bg-glow-2 blur-[120px] will-change-transform" />
    <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] animate-drift-3 rounded-full bg-glow-3 blur-[120px] will-change-transform" />
    <div className="absolute top-1/2 -left-32 h-[24rem] w-[24rem] animate-drift-2 rounded-full bg-glow-4 blur-[120px] will-change-transform [animation-delay:-14s]" />
  </div>
);
