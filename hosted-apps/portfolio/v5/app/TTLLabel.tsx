import moment, { duration } from "moment";

interface TTLLabelProps {
  years: number;
  months: number;
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const TTLLabel = ({
  years,
  months,
  weeks,
  days,
  hours,
  minutes,
  seconds,
}: TTLLabelProps) => {
  return (
    <span className="lg:block text-gray-600 font-medium text-sm font-mono">
      Alive for {years.toString().padStart(2, "0")} years {months} months {weeks} weeks {days} days{" "}
      {hours.toString().padStart(2, "0")} hours{" "}
      {minutes.toString().padStart(2, "0")} minutes{" and "}
      <span className="w-10">{seconds.toString().padStart(2, "0")}</span>{" "}
      seconds
    </span>
  );
};
