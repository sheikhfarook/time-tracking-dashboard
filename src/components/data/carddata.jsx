import ellip from "../../assets/icon-ellipsis.svg";
import Work from "../../assets/icon-work.svg";
import Play from "../../assets/icon-play.svg";
import Study from "../../assets/icon-study.svg";
import Exercise from "../../assets/icon-exercise.svg";
import Social from "../../assets/icon-social.svg";
import Care from "../../assets/icon-self-care.svg";

export const data = [
  {
    id: 1,
    title: "Work",
    ellip: ellip,
    profile: Work,
    name: "work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    id: 2,
    title: "Play",
    ellip: ellip,
    profile: Play,
    name: "play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    id: 3,
    title: "Study",
    ellip: ellip,
    profile: Study,
    name: "study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    id: 4,
    title: "Exercise",
    ellip: ellip,
    profile: Exercise,
    name: "exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    id: 5,
    title: "Social",
    ellip: ellip,
    profile: Social,
    name: "social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    id: 6,
    title: "Self Care",
    ellip: ellip,
    profile: Care,
    name: "care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
