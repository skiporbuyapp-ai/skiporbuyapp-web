"use client";

export default function PhoneMockup({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Outer glow */}
      <div className="absolute -inset-4 rounded-[3.5rem] bg-gradient-to-b from-mint/10 via-transparent to-transparent blur-xl opacity-50" />

      {/* Phone frame */}
      <div className="relative mx-auto w-[280px] rounded-[3rem] border-2 border-navy-700/80 bg-gradient-to-b from-navy-800 to-navy-900 p-3 shadow-2xl shadow-navy-950/80">
        {/* Glass highlight on frame */}
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

        {/* Notch */}
        <div className="absolute left-1/2 top-0 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-navy-900 border-x border-b border-navy-700/50" />

        {/* Screen */}
        <div className="relative overflow-hidden rounded-[2.25rem] bg-navy-900">
          {children || (
            <div className="flex h-[560px] items-center justify-center bg-gradient-to-b from-navy-900 to-navy-950">
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-gradient-to-br from-mint/20 to-mint/5 flex items-center justify-center border border-mint/10">
                  <svg className="h-8 w-8 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-slate-500">App Screenshot</p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom bar indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1 w-32 rounded-full bg-navy-700/60" />
      </div>
    </div>
  );
}
