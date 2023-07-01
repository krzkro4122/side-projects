import { TASKS, COURSES, LEAGUES, USERS } from "./mocks";

export const fetchTasks = () => {
    return TASKS;
}

export const fetchCourses = () => {
    return COURSES;
};

export const fetchCourse = (id: string) => {
    return fetchCourses().find(course => course.id === id);
};

export const fetchLeagues = () => {
    return LEAGUES;
};

export const fetchLeague = (id: string) => {
    return fetchLeagues().find(league => league.id === id);
};

export const fetchUsers = () => {
    return USERS;
};