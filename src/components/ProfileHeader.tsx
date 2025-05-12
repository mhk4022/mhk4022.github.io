import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import { ProfileDataType, SnsDataType } from "@/types";

interface ProfileHeaderProps {
  profileData: ProfileDataType;
  snsData: SnsDataType;
}

export function ProfileHeader({ profileData, snsData }: ProfileHeaderProps) {
  return (
    <header className="row-start-1 w-full max-w-xl flex flex-col items-center text-center pt-8 sm:pt-12">
      <Image
        src="/mhk4022.svg"
        alt={`${profileData.username}'s logo`}
        width={100}
        height={100}
        className="rounded-full mb-5 shadow-md"
        priority
      />
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-200">
        {profileData.username}
      </h1>
      <div className="flex gap-5 mt-5">
        {snsData.github && (
          <a
            href={snsData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-gray-400 hover:text-gray-300 transition-colors group"
          >
            <GitHubIcon
              sx={{ fontSize: 26, opacity: 1 }}
              className="group-hover:opacity-80 transition-opacity"
            />
          </a>
        )}
        {snsData.twitter && (
          <a
            href={snsData.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter) Profile"
            className="text-gray-400 hover:text-gray-300 transition-colors group"
          >
            <XIcon
              sx={{ fontSize: 26, opacity: 1 }}
              className="group-hover:opacity-80 transition-opacity"
            />
          </a>
        )}
      </div>
    </header>
  );
}
