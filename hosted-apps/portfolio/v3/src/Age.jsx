import { useState, useEffect } from "react";

function Age({part}) {
    const birthday = "November, 11, 1999";
    const birthDate = new Date(Date.parse(birthday));
    let _now = new Date();
    const age = _now.getFullYear() - birthDate.getFullYear();

    const [year, setYear] = useState(age);
    const [seconds, setSeconds] = useState(Math.floor((_now.getTime() - birthDate.getTime()) / 1000));

    const getAge = () => {
      const now = new Date();
      setYear(now.getFullYear() - birthDate.getFullYear());
      setSeconds(Math.floor((now.getTime() - birthDate.getTime()) / 1000));
    };

  useEffect(() => {
    const interval = setInterval(() => getAge(birthday), 1000);

    return () => clearInterval(interval);
  }, []);

  if (part === "year") {
    return (
        <span className="age year">
            ({year})
        </span>
      );
  }

  return (
    <span className="age seconds">
        {seconds}s
    </span>
  );
}

export default Age;
