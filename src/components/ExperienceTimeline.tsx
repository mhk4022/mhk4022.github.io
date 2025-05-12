import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolIcon from "@mui/icons-material/School";
import { ExperienceItemType } from "@/types";
import { formatMonthYearRange } from "@/utils/date";

interface ExperienceTimelineProps {
  experiences: ExperienceItemType[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const dotStyle = {
    bgcolor: "#d1d5db", // gray-300
    color: "#111827", // gray-900
    boxShadow: "none",
  };
  const connectorStyle = {
    bgcolor: "#d1d5db", // gray-300
  };

  return (
    <div className="w-full">
      <Timeline
        position="right"
        sx={{
          paddingLeft: 0,
          paddingRight: 0,
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {experiences.map((exp, index) => {
          const isWork = exp.type === "Work";
          const IconComponent = isWork ? WorkOutlineIcon : SchoolIcon;

          return (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineConnector sx={connectorStyle} />
                <TimelineDot sx={dotStyle} variant="filled">
                  <IconComponent sx={{ fontSize: "1rem" }} />
                </TimelineDot>
                <TimelineConnector sx={connectorStyle} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "10px", px: 2, textAlign: "left" }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: "semibold",
                    fontSize: "1.1rem",
                    color: "#e5e7eb", // gray-200
                    mt: 0.25,
                  }}
                >
                  {exp.organization}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "0.95rem",
                    mb: 0,
                    color: "#d1d5db", // gray-300
                  }}
                >
                  {exp.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: "medium",
                    mb: 0.5,
                    fontSize: "0.8rem",
                    color: "#9ca3af", // gray-400
                  }}
                >
                  {formatMonthYearRange(exp.startDate, exp.endDate)}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
}
