import { Card, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Credits, CreditsProps } from "./credits";
import { FavouriteButton } from "./favourite-button";

export interface DetailSidebarProps extends CreditsProps {
  id: string;
  description: string;
}

export const DetailSidebar = ({
  id,
  description,
  ...props
}: DetailSidebarProps) => {
  return (
    <Card className="lg:h-full w-full lg:w-[28rem] animate-fade-up lg:animate-fade-left">
      <CardHeader className="flex-col items-start gap-4">
        <div className="flex flex-row justify-between w-full">
          <Credits {...props} />
          <FavouriteButton photoId={id} />
        </div>
        {description && (
          <p className="italic text-sm">&quot;{description}&quot;</p>
        )}
      </CardHeader>
      <Divider />
    </Card>
  );
};
