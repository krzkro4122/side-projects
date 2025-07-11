"use client";

import { useState, useEffect } from "react";
import moment, { Duration, Moment } from "moment";
import { TTLLabel } from "./TTLLabel";

const getDurationFromNowTo = (date: Moment) => {
  const now = moment();
  return moment.duration(now.diff(date));
};

export const TTL = () => {
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
    <div className={"hidden xl:block"}>
      <TTLLabel
        {...{
          years: duration.years(),
          months: duration.months(),
          weeks: duration.weeks(),
          days: duration.days(),
          hours: duration.years(),
          minutes: duration.minutes(),
          seconds: duration.seconds(),
        }}
      />
    </div>
  );
};
