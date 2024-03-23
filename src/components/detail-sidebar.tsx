import { Card, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Credits, CreditsProps } from "./credits";
import { FavouriteButton } from "./favourite-button";

export interface DetailSidebarProps extends CreditsProps {
  id: string;
}

export const DetailSidebar = ({ id, ...props }: DetailSidebarProps) => {
  // TODO: improve with utils for build links?
  return (
    <Card className="lg:h-full w-full lg:w-[28rem] animate-fade-up lg:animate-fade-left p-6">
      <CardHeader>
        <Credits {...props} />
        <FavouriteButton photoId={id} />
      </CardHeader>
      <Divider />
    </Card>
  );
};
