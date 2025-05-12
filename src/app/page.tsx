// src/app/page.tsx
"use client";

import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProfileHeader } from "@/components/ProfileHeader";
import { ProfileFooter } from "@/components/ProfileFooter";
import {
  profileData,
  experienceData,
  skillsData,
  snsData,
} from "@/data/profile";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { WorkspacePremium } from "@mui/icons-material";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-y-10 sm:gap-y-12 text-gray-100 bg-gray-900">
      <ProfileHeader profileData={profileData} snsData={snsData} />

      <main className="flex flex-col gap-8 sm:gap-10 row-start-2 items-center w-full max-w-2xl px-2">
        <section className="w-full pt-6 pb-2 sm:pt-8 sm:pb-4">
          <div className="space-y-3 text-sm sm:text-base">
            <div className="flex items-center gap-3 text-gray-300">
              <BusinessIcon
                sx={{ opacity: 0.8, fontSize: "1.1rem", color: "#d1d5db" }}
              />
              <span>{profileData.affiliation}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <WorkspacePremium
                sx={{ opacity: 0.8, fontSize: "1.1rem", color: "#d1d5db" }}
              />
              <span>{profileData.role}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <LocationOnIcon
                sx={{ opacity: 0.8, fontSize: "1.1rem", color: "#d1d5db" }}
              />
              <span>{profileData.location}</span>
            </div>
          </div>
        </section>

        <section id="experience" className="w-full">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-left text-gray-200 px-1">
            Experience
          </h2>
          <ExperienceTimeline experiences={experienceData} />
        </section>

        <section id="skills" className="w-full">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-left text-gray-200 px-1">
            Skills
          </h2>
          <div className="text-sm sm:text-base px-1">
            <ul className="list-disc list-inside pl-1">
              <li className="text-gray-300">{skillsData.title}</li>
            </ul>
          </div>
        </section>
      </main>

      <ProfileFooter username={profileData.username} />
    </div>
  );
}
