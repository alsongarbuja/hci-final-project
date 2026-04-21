interface Question {
  id: number;
  country: string;
  clue: string;
  flag: string;
}

interface Feedback {
  type: "success" | "error";
  text: string;
}

interface GeoProperties {
  name: string;
  [key: string]: unknown;
}

interface LessonStep {
  type: "fact" | "image" | "stat";
  title: string;
  content: string;
  illustration: string;
  accentColor: string;
}
