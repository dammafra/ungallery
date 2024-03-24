import { PropsWithChildren } from "react";

export const NoData = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-foreground-400 text-lg text-center animate-fade-up">
      {children}
    </div>
  );
};
