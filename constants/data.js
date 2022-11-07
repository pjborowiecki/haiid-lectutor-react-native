import assets from "./assets";
import { COLOURS } from "./theme";

export const onboardingData = [
  {
    id: 1,
    title: "We get it.",
    text: "Learning can be really daunting.",
    image: assets.onboardingImage01,
    imageWidth: 292,
    imageHeight: 344,
    imageMarginVertical: 32,
    titleSize: 55,
    subtitleSize: 36,
    titlePaddingHorizontal: 40,
    subtitlePaddingHorizontal: 40,
  },
  {
    id: 2,
    title: "Which is why our app is here to show you how.",
    text: "All you need is your slides, a spare minute and some enthusiasm.",
    image: assets.onboardingImage02,
    imageWidth: 288,
    imageHeight: 224,
    imageMarginVertical: 46,
    titleSize: 38,
    subtitleSize: 28,
    titlePaddingHorizontal: 40,
    subtitlePaddingHorizontal: 40,
  },
  {
    id: 3,
    title: "By uploading your slides to our app...",
    text: "...you'll enable the AI to create a set of questions and answers.",
    image: assets.onboardingImage03,
    imageWidth: 194,
    imageHeight: 194,
    imageMarginVertical: 40,
    titleSize: 38,
    subtitleSize: 28,
    titlePaddingHorizontal: 40,
    subtitlePaddingHorizontal: 32,
  },
  {
    id: 4,
    title:
      "Then, simply begin interacting with the AI-curated flashcards to start absorbing knowledge.",
    text: "...And that's it. No weird strings attached, just pure learning!",
    image: assets.onboardingImage04,
    imageWidth: 200,
    imageHeight: 200,
    imageMarginVertical: 36,
    titleSize: 30,
    subtitleSize: 28,
    titlePaddingHorizontal: 30,
    subtitlePaddingHorizontal: 40,
  },
  {
    id: 5,
    title: "We hope you enjoy your time with our app.",
    text: "Best of luck with your learning journey!",
    image: assets.onboardingImage05,
    imageWidth: 276,
    imageHeight: 288,
    imageMarginVertical: 16,
    titleSize: 36,
    subtitleSize: 34,
    titlePaddingHorizontal: 40,
    subtitlePaddingHorizontal: 40,
  },
];

export const _streak = {
  time: new Date("2015-03-25").getTime(),
  streak: 0
}

export const _quizzes = [
  {
    id: 1,
    name: "Organic Chemistry",
    lastAccessed: "23/09/2022",
    colour: COLOURS.chemistryBg,
  },
  {
    id: 2,
    name: "Materials",
    lastAccessed: "04/11/2022",
    colour: COLOURS.materialsBg,
  },
  {
    id: 3,
    name: "Particle Physics",
    lastAccessed: "06/11/2022",
    colour: COLOURS.particlePhysicsBg,
  },
  {
    id: 4,
    name: "Computer Science",
    lastAccessed: "06/11/2022",
    colour: COLOURS.anotherQuizBg,
  },
];

export const _statistics = [
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

export const quizColours = [
  {
    id: 1,
    colour: COLOURS.quizColour01,
  },
  {
    id: 2,
    colour: COLOURS.quizColour02,
  },
  {
    id: 3,
    colour: COLOURS.quizColour03,
  },
  {
    id: 4,
    colour: COLOURS.quizColour04,
  },
  {
    id: 5,
    colour: COLOURS.quizColour05,
  },
  {
    id: 6,
    colour: COLOURS.quizColour06,
  },
  {
    id: 7,
    colour: COLOURS.quizColour07,
  },
  {
    id: 8,
    colour: COLOURS.quizColour08,
  },
  {
    id: 9,
    colour: COLOURS.quizColour09,
  },
  {
    id: 10,
    colour: COLOURS.quizColour10,
  },
  {
    id: 11,
    colour: COLOURS.quizColour11,
  },
  {
    id: 12,
    colour: COLOURS.quizColour12,
  },
];

export const terms_and_conditions = [
  {
    id: 1,
    text: "This app features uploading lecture slides, which may contain personal data. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    text: "Suspendisse mollis interdum interdum. Quisque dui massa, mollis ut ipsum eget, pretium ullamcorper mi.",
  },
  {
    id: 3,
    text: "Duis vehicula non erat scelerisque venenatis. Sed viverra malesuada nisi, auctor auctor leo gravida vitae.",
  },
  {
    id: 4,
    text: "Sed dolor dui, elementum eget neque quis, rhoncus dignissim ante. Donec at orci id lectus viverra aliquet. Donec sagittis nisl nec mi pharetra, ac rutrum ipsum pharetra.",
  },
];

export const how_does_it_work = [
  {
    id: 1,
    question: "How does the app generate questions from my slides?",
    answer:
      "The app utilises an Artificial Intelligence (AI) to read through the uploaded content, search for keywords and then use them to generate “What is x?” style questions. As you might see, the AI is not perfect and may mistake other unnecessary words for keywords, so keep your eye out for that! The AI uses your post-quiz feedback to learn how to do better - the feedback allows it to alter its parameters and, with enough human reinforcement, it may improve over time! Establishing a feedback loop is essential to let the AI know what needs work.",
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
    route: "HelpAndSupport",
  },
  {
    id: 5,
    name: "Terms & Conditions",
    icon: assets.termsConditionsIcon,
    component: assets.chevronRightIcon,
    type: "chevron",
    route: "TermsAndConditions",
  },
  {
    id: 6,
    name: "Give Feedback",
    icon: assets.feedbackIcon,
    component: assets.chevronRightIcon,
    type: "chevron",
    route: "Feedback",
  },
  {
    id: 7,
    name: "How does it work?",
    icon: "",
    component: assets.chevronRightIcon,
    type: "chevron",
    route: "HowDoesItWork",
  },
];

export const _flashcards = [
  {
    id: 1,
    flashcards: [
      {
        id: 1,
        question: "What is Machine Learning?",
        answer:
          "Machine learning (ML) is a field of inquiry devoted to understanding and building methods that 'learn', that is, methods that leverage data to improve performance on some set of tasks.",
      },
      {
        id: 2,
        question: "What is Supervised Learning?",
        answer:
          'The typed of machine learning in which machines are trained using well "labelled" data',
      },
      {
        id: 3,
        question: "What is Unsupervised Learning?",
        answer:
          'The types of machine learning in which machines are trained using well "unlabelled" training data.',
      },
      {
        id: 4,
        question: "What is a Feature?",
        answer: "A feature is an individual measurable property or characteristic.",
      },
    ],
  },
  {
    id: 2,
    flashcards: [
      {
        id: 1,
        question: "What is Machine Learning?",
        answer:
          "A field of study that gives computers the ability to learn without being explicitly programmed.",
      },
      {
        id: 2,
        question: "What is Supervised Learning?",
        answer:
          'The typed of machine learning in which machines are trained using well "labelled" data',
      },
      {
        id: 3,
        question: "What is Unsupervised Learning?",
        answer:
          'The types of machine learning in which machines are trained using well "unlabelled" training data.',
      },
      {
        id: 4,
        question: "What is a Feature?",
        answer: "A feature is an individual measurable property or characteristic.",
      },
    ],
  },
  {
    id: 3,
    flashcards: [
      {
        id: 1,
        question: "What is Machine Learning?",
        answer:
          "A field of study that gives computers the ability to learn without being explicitly programmed.",
      },
      {
        id: 2,
        question: "What is Supervised Learning?",
        answer:
          'The typed of machine learning in which machines are trained using well "labelled" data',
      },
      {
        id: 3,
        question: "What is Unsupervised Learning?",
        answer:
          'The types of machine learning in which machines are trained using well "unlabelled" training data.',
      },
      {
        id: 4,
        question: "What is a Feature?",
        answer: "A feature is an individual measurable property or characteristic.",
      },
    ],
  },
  {
    id: 4,
    flashcards: [
      {
        id: 1,
        question: "What is Machine Learning?",
        answer:
          "A field of study that gives computers the ability to learn without being explicitly programmed.",
      },
      {
        id: 2,
        question: "What is Supervised Learning?",
        answer:
          'The typed of machine learning in which machines are trained using well "labelled" data',
      },
      {
        id: 3,
        question: "What is Unsupervised Learning?",
        answer:
          'The types of machine learning in which machines are trained using well "unlabelled" training data.',
      },
      {
        id: 4,
        question: "What is a Feature?",
        answer: "A feature is an individual measurable property or characteristic.",
      },
    ],
  },
];
