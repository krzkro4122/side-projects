import { Link } from "react-router-dom";

import { Course } from "helpers/types";

interface courseInfo {
  course: Course;
}

function CourseCard({ course }: courseInfo) {
  return (
    <li
      className="browserCard"
      style={{
        border: `solid 0.2rem var(--accent-color)`,
      }}
    >
      <Link to={`/cursum/course/${course.id}/tasks`}>
        <img
          className="browserCardImage"
          src={course.imageSrc}
          alt={`Image of the ${course.title} course.`}
        />
        <h1 className="browserCardLabel">{course.title}</h1>
      </Link>
    </li>
  );
}

export default CourseCard;
