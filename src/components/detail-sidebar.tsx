import { Card } from "@nextui-org/card";
import { Credits, CreditsProps } from "./credits";

export interface DetailSidebarProps extends CreditsProps {}

export const DetailSidebar = ({ ...props }: DetailSidebarProps) => {
  // TODO: improve with utils for build links?
  return (
    <Card className="lg:h-full w-full lg:w-[28rem] animate-fade-up lg:animate-fade-left p-6">
      <Credits {...props} />
    </Card>
  );
};
