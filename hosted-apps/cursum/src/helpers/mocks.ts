import { Task, Course, League, LeagueType, User } from './types';

export const TASKS: Task[] = [
    {
        id: "1",
        question: "Who is the youngest?",
        answers: [
            {
                text: "Elon Musk",
                isCorrect: false
            },
            {
                text: "DJ Khaled",
                isCorrect: true
            },
            {
                text: "Michael Jordan",
                isCorrect: false
            }
        ]
    },
    {
        id: "2",
        question: "Which direction is NORTH on a standard map?",
        answers: [
            {
                text: "Left",
                isCorrect: false
            },
            {
                text: "Up ",
                isCorrect: true
            },
            {
                text: "Down",
                isCorrect: false
            }
        ]
    },
    {
        id: "3",
        question: "What year is it?",
        answers: [
            {
                text: "2021",
                isCorrect: false
            },
            {
                text: "2047",
                isCorrect: false
            },
            {
                text: "2023",
                isCorrect: true
            }
        ]
    },
    {
        id: "4",
        question: "What does SQL stand for?",
        answers: [
            {
                text: "Structural Query Language",
                isCorrect: false
            },
            {
                text: "Structured Query Language",
                isCorrect: true
            },
            {
                text: "Structuring Query Language",
                isCorrect: false
            }
        ]
    },
    {
        id: "5",
        question: "Which number is divisible by 17?",
        answers: [
            {
                text: "47",
                isCorrect: false
            },
            {
                text: "51",
                isCorrect: true
            },
            {
                text: "88",
                isCorrect: false
            }
        ]
    },
    {
        id: "6",
        question: "Do dishwashers cry during a washing cycle?",
        answers: [
            {
                text: "They shed a lot of tears",
                isCorrect: true
            },
            {
                text: "Probably not - their machines after all",
                isCorrect: false
            },
            {
                text: "I just hope they're happy",
                isCorrect: false
            }
        ]
    },
    {
        id: "7",
        question: "Given three answers, which one is correct?",
        answers: [
            {
                text: "The third answer",
                isCorrect: true
            },
            {
                text: "That one",
                isCorrect: false
            },
            {
                text: "This one",
                isCorrect: true
            }
        ]
    },
    {
        id: "8",
        question: "How is georgegroeus spelled?",
        answers: [
            {
                text: "gorgeous",
                isCorrect: true
            },
            {
                text: "gorgeuos",
                isCorrect: false
            },
            {
                text: "gregory",
                isCorrect: false
            }
        ]
    },
    {
        id: "9",
        question: "What is YouTube?",
        answers: [
            {
                text: "A terrorist organisation",
                isCorrect: false
            },
            {
                text: "A blockchain-based pyramid scheme",
                isCorrect: false
            },
            {
                text: "A video-oriented social media platform",
                isCorrect: true
            }
        ]
    },
    {
        id: "10",
        question: "What does 3 * 1 + 3? equate to?",
        answers: [
            {
                text: "10",
                isCorrect: false
            },
            {
                text: "6",
                isCorrect: true
            },
            {
                text: "3",
                isCorrect: false
            }
        ]
    },
    {
        id: "11",
        question: "Why did the chicken cross the road?",
        answers: [
            {
                text: "That rhymes with toad!",
                isCorrect: false
            },
            {
                text: "It was seeking purpose",
                isCorrect: true
            },
            {
                text: "It's going to LIDL",
                isCorrect: false
            }
        ]
    },
    {
        id: "12",
        question: "Is this the final question?",
        answers: [
            {
                text: "I sure hope so",
                isCorrect: true
            },
            {
                text: "Hi mom!",
                isCorrect: false
            },
            {
                text: "No it is not",
                isCorrect: false
            }
        ]
    }
]

export const COURSES: Course[] = [
    {
        id: "1",
        title: "Kurzgesagt",
        taskIds: ["1", "2", "3"],
        imageSrc: "https://yt3.googleusercontent.com/ytc/AGIKgqOibtncbyNaJVeUjVotNRl0r00hkiUfYEEv5XmNdw=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        id: "2",
        title: "Vsauce",
        taskIds: ["3", "4", "1"],
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSROGg8l8rAK_TyIhzUHVBzkJtxzgHq0cc6rA&usqp=CAU",
    },
    {
        id: "3",
        title: "Veritasium",
        taskIds: ["5", "6", "1"],
        imageSrc: "https://yt3.googleusercontent.com/ytc/AGIKgqPviJ3x9GiSEuQhWNKNipzDMOXrJ0Ll51xR5osXMw=s900-c-k-c0x00ffffff-no-rj",
    },
    {
        id: "4",
        title: "Fireship",
        taskIds: ["7", "8", "1"],
        imageSrc: "https://yt3.googleusercontent.com/ytc/AGIKgqOSWK9LIZ9xGvDbBZ7gjBK1ayNCxK0jKMOq1FirfA=s900-c-k-c0x00ffffff-no-rj",
    },
    {
        id: "5",
        title: "Pasja Informatyki",
        taskIds: ["9", "10", "1"],
        imageSrc: "https://yt3.googleusercontent.com/ytc/AGIKgqOpZQrvexqYG2I9eBetWZIsAVmp_VKxroi9cBebNA=s900-c-k-c0x00ffffff-no-rj",
    },
    {
        id: "6",
        title: "3Blue1Brown",
        taskIds: ["11", "12", "1"],
        imageSrc: "https://yt3.googleusercontent.com/ytc/AGIKgqOpvSaBjyydwPBNxyB_sckPMQj09C89VqRBsgmhtg=s900-c-k-c0x00ffffff-no-rj",
    }
];

export const LEAGUES: League[] = [
    {
        id: "1",
        type: LeagueType.FIRE,
        color: "#ec8364",
        courseIds: ["1", "2", "3", "6"]
    },
    {
        id: "2",
        type: LeagueType.BUG,
        color: "#bcd35c",
        courseIds: ["4"]
    },
    {
        id: "3",
        type: LeagueType.GHOST,
        color: "#a4abdb",
        courseIds: ["5"]
    }
];

export const USERS: User[] = [
    {
        id: "0",
        leagueId: "1",
        score: 69,
        email: "Layor@hotmail.com"
    },
    {
        id: "1",
        leagueId: "1",
        score: 100,
        email: "Ementan@hotmail.com"
    },
    {
        id: "2",
        leagueId: "1",
        score: 55,
        email: "Dutch@hotmail.com"
    },
    {
        id: "3",
        leagueId: "2",
        score: 23,
        email: "Derek@hotmail.com"
    },
    {
        id: "4",
        leagueId: "3",
        score: 501,
        email: "Mark@hotmail.com"
    }
]