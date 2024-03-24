import { Link } from "@nextui-org/link";
import { User } from "@nextui-org/user";

export interface CreditsProps {
  authorName: string;
  authorHandle: string;
  authorProfile: string;
  authorImage: string;
}

export const Credits = ({
  authorName,
  authorProfile,
  authorHandle,
  authorImage,
}: CreditsProps) => {
  return (
    <User
      className="w-full justify-start"
      name={authorName}
      description={
        <p>
          <Link
            className="pointer-events-auto"
            href={`${authorProfile}?utm_source=ungallery&utm_medium=referral`}
            size="sm"
            isExternal
          >
            @{authorHandle}
          </Link>{" "}
          on{" "}
          <Link
            className="pointer-events-auto"
            href="https://unsplash.com/?utm_source=ungallery&utm_medium=referral"
            size="sm"
            isExternal
          >
            Unsplash
          </Link>
        </p>
      }
      avatarProps={{
        src: authorImage,
        alt: `${authorName} profile picture`,
      }}
    />
  );
};
