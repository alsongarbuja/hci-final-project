import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserProgress {
  xp: number;
  streak: number;
  hearts: number;
  unlockedLessons: Record<string, string[]>;
  quizScores: Record<string, Record<string, number>>;

  // Actions
  completeLesson: (countryId: string, lessonId: string) => void;
  updateScore: (countryId: string, lessonId: string, score: number) => void;
  loseHeart: () => void;
  refillHearts: () => void;
}

export const useStore = create<UserProgress>()(
  persist(
    (set) => ({
      unlockedLessons: {
        nepal: ["geo"],
        usa: ["geo"],
        japan: ["geo"],
      },
      quizScores: {
        nepal: {
          geo: 0,
        },
        usa: {
          geo: 0,
        },
        japan: {
          geo: 0,
        },
      },
      xp: 0,
      hearts: 5,
      streak: 0,

      completeLesson: (countryId, lessonId) =>
        set((state) => {
          return {
            unlockedLessons: {
              ...state.unlockedLessons,
              [countryId]: [...state.unlockedLessons[countryId], lessonId],
            },
          };
        }),

      updateScore: (countryId, lessonId, score) =>
        set((state) => {
          const currentBest = state.quizScores[countryId][lessonId] || 0;
          return {
            xp: state.xp + (score > currentBest ? score - currentBest : 0),
            quizScores: {
              ...state.quizScores,
              [countryId]: {
                ...state.quizScores[countryId],
                [lessonId]: Math.max(currentBest, score),
              },
            },
          };
        }),

      loseHeart: () =>
        set((state) => ({
          hearts: Math.max(0, state.hearts - 1),
        })),

      refillHearts: () => set({ hearts: 5 }),
    }),
    {
      name: "geoquest-storage",
    },
  ),
);
