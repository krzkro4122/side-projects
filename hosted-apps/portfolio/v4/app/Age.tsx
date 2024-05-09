"use client";

import { useState, useEffect } from "react";
import moment, { Duration, Moment } from "moment";

const getDurationFromNowTo = (date: Moment) => {
  const now = moment();
  return moment.duration(now.diff(date));
};

export const Age = () => {
  const birthday = "1999-11-11";
  const birthDate = moment(birthday);

  const [duration, setDuration] = useState<Duration>(
    getDurationFromNowTo(birthDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(getDurationFromNowTo(birthDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [birthDate]);

  return (
    <span className="text-gray-500 font-medium text-xl font-mono">
      Alive for {duration.years()} years {duration.months()} months{" "}
      {duration.weeks()} weeks {duration.days()} days {duration.hours()} hours{" "}
      {duration.minutes()} minutes{" and "}
      <span className="w-10">
        {duration.seconds().toString().padStart(2, "0")}
      </span>{" "}
      seconds
    </span>
  );
};
