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
