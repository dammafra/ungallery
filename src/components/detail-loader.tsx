import { Spinner } from "@nextui-org/spinner";

export const DetailLoader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Spinner size="lg" color="default" />
    </div>
  );
};
