import assets from "./assets";

export const onboardingData = [
  {
    id: 1,
    title: "We get it.",
    subtitle: "Learning can be really daunting.",
    image: assets.onboardingImage01,
  },
  {
    id: 2,
    title: "Which is why our app is here to show you how.",
    subtitle:
      "All you need is your slides, a spare minute and some enthusiasm.",
    image: assets.onboardingImage02,
  },
  {
    id: 3,
    title: "By uploading your slides to our app...",
    subtitle: "...you let the AI do all the grunt work for you",
    image: assets.onboardingImage03,
  },
  {
    id: 4,
    title:
      "Then, simply begin the AI-curated quiz to start absorbing knowledge.",
    subtitle:
      "...And that's it. No weird strings attached, just pure learning!",
    image: assets.onboardingImage04,
  },
  {
    id: 5,
    title:
      "You can rate the performance of the AI after every quiz. Your feedback can directly affect the questions you get.",
    subtitle:
      "AI isn't perfect just like us, but it will do its best to learn from you!",
    image: assets.onboardingImage05,
  },
  {
    id: 6,
    title: "We hope you enjoy your time with our app.",
    subtitle: "Best of luck with your learning journey!",
    image: assets.onboardingImage06,
  },
];

export const quizzes = [
  {
    id: 1,
    name: "Organic Chemistry",
    lastAccessed: "23/09/2022",
    colour: "#F7EFC4",
  },
  {
    id: 2,
    name: "Materials",
    lastAccessed: "04/11/2022",
    colour: "#ADE1FF",
  },
  {
    id: 3,
    name: "Particle Physics",
    lastAccessed: "06/11/2022",
    colour: "#B5B0F4",
  },
  {
    id: 4,
    name: "Computer Science",
    lastAccessed: "06/11/2022",
    colour: "#CEF7C4",
  },
];

export const statistics = [
  {
    id: 1,
    name: "Quizzes done:",
    count: 0,
  },
  {
    id: 2,
    name: "Questions answered:",
    count: 0,
  },
  {
    id: 3,
    name: "Quizzes created:",
    count: 0,
  },
  {
    id: 4,
    name: "Ratings given:",
    count: 0,
  },
];

export const settings = [
  {
    id: 1,
    name: "Dark Mode",
    icon: assets.darkModeIcon,
    type: "darkModeSwitch",
  },
  {
    id: 2,
    name: "Notifications",
    icon: assets.notificationsIcon,
    type: "notificationsSwitch",
  },
  {
    id: 3,
    name: "Easy Read Mode",
    icon: assets.easyReadModeIcon,
    type: "easyReadModeSwitch",
  },
  {
    id: 4,
    name: "Help & Support",
    icon: assets.helpIcon,
    component: assets.chevronRightIcon,
    type: "chevron",
  },
  {
    id: 5,
    name: "Terms & Conditions",
    icon: assets.termsConditionsIcon,
    component: assets.chevronRightIcon,
    type: "chevron",
  },
  {
    id: 6,
    name: "Give Feedback",
    icon: assets.feedbackIcon,
    type: "",
  },
  {
    id: 7,
    name: "How does it work?",
    icon: "",
    component: assets.chevronRightIcon,
    type: "chevron",
  },
];
