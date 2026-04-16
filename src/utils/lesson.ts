export const countries = [
  {
    id: "nepal",
    name: "Nepal",
    continent: "Asia",
    tagline: "Master the details of the Himalayan Nation",
    lessons: [
      {
        id: "geo",
        name: "Geography",
        icon: "lucide:mountain",
        color: "bg-emerald-500",
        shadow: "shadow-[0_6px_0_0_rgba(5,150,105,1)]",
        quiz: [
          {
            id: "q1",
            type: "multiple-choice",
            question: "Nepal is divided into how many horizontal 'belts'?",
            mascotComment: "Easy start! Think about the landscape layers.",
            icon: "lucide:layers",
            color: "#10b981", // Emerald
            options: [
              {
                id: "a",
                text: "Two Belts",
                icon: "lucide:binary",
                isCorrect: false,
              },
              {
                id: "b",
                text: "Three Belts",
                icon: "lucide:layout-list",
                isCorrect: true,
              },
              {
                id: "c",
                text: "Five Belts",
                icon: "lucide:list-ordered",
                isCorrect: false,
              },
            ],
            explanation:
              "Correct! The three regions are the Mountains, Hills, and Plains.",
          },
          {
            id: "q2",
            type: "multiple-choice",
            question: "What is the official height of Mount Everest?",
            mascotComment: "Don't forget the decimals—every centimeter counts!",
            icon: "twemoji:mountain",
            color: "#0ea5e9", // Sky
            options: [
              {
                id: "a",
                text: "8,848.86m",
                icon: "lucide:arrow-up-circle",
                isCorrect: true,
              },
              {
                id: "b",
                text: "8,167.00m",
                icon: "lucide:mountain-snow",
                isCorrect: false,
              },
              {
                id: "c",
                text: "9,000.50m",
                icon: "lucide:cloud",
                isCorrect: false,
              },
            ],
            explanation:
              "Precisely! This measurement was updated recently in 2020.",
          },
          {
            id: "q3",
            type: "multiple-choice",
            question: "Which region is a tropical jungle with rhinos?",
            mascotComment: "It’s surprisingly hot down there!",
            icon: "lucide:tree-palm",
            color: "#22c55e", // Green
            options: [
              {
                id: "a",
                text: "Himal",
                icon: "lucide:snowflake",
                isCorrect: false,
              },
              {
                id: "b",
                text: "Pahad",
                icon: "lucide:terrain",
                isCorrect: false,
              },
              { id: "c", text: "Terai", icon: "lucide:shrub", isCorrect: true },
            ],
            explanation: "The Terai is the fertile southern belt of Nepal.",
          },
          {
            id: "q4",
            type: "true-false",
            question: "True or False: Nepal is a landlocked country.",
            mascotComment: "No beaches here, just peaks!",
            icon: "lucide:map-pin",
            color: "#f59e0b", // Amber
            options: [
              {
                id: "a",
                text: "True",
                icon: "lucide:check-circle",
                isCorrect: true,
              },
              {
                id: "b",
                text: "False",
                icon: "lucide:x-circle",
                isCorrect: false,
              },
            ],
            explanation:
              "Nepal is tucked between India and China with no coastline.",
          },
          {
            id: "q5",
            type: "multiple-choice",
            question: "How many '8,000m' peaks are in Nepal?",
            mascotComment: "That's more than half the world's total!",
            icon: "lucide:trophy",
            color: "#6366f1", // Indigo
            options: [
              {
                id: "a",
                text: "4 Peaks",
                icon: "lucide:medal",
                isCorrect: false,
              },
              {
                id: "b",
                text: "8 Peaks",
                icon: "lucide:crown",
                isCorrect: true,
              },
              {
                id: "c",
                text: "14 Peaks",
                icon: "lucide:gem",
                isCorrect: false,
              },
            ],
            explanation: "8 out of the 14 highest mountains are in Nepal!",
          },
          {
            id: "q6",
            type: "multiple-choice",
            question: "The Kali Gandaki is famous for being a deep...",
            mascotComment: "Looking down is scary!",
            icon: "lucide:waves",
            color: "#3b82f6", // Blue
            options: [
              {
                id: "a",
                text: "Canyon",
                icon: "lucide:split",
                isCorrect: false,
              },
              {
                id: "b",
                text: "Gorge",
                icon: "lucide:mountain",
                isCorrect: true,
              },
              {
                id: "c",
                text: "Waterfall",
                icon: "lucide:droplets",
                isCorrect: false,
              },
            ],
            explanation:
              "It's one of the deepest river gorges in the entire world.",
          },
          {
            id: "q7",
            type: "multiple-choice",
            question: "How many rivers flow through Nepal?",
            mascotComment: "So much water, so much power!",
            icon: "lucide:droplets",
            color: "#2dd4bf", // Teal
            options: [
              {
                id: "a",
                text: "Over 6,000",
                icon: "lucide:zap",
                isCorrect: true,
              },
              {
                id: "b",
                text: "Over 600",
                icon: "lucide:faucet",
                isCorrect: false,
              },
              {
                id: "c",
                text: "Over 60",
                icon: "lucide:glass-water",
                isCorrect: false,
              },
            ],
            explanation:
              "Nepal has over 6,000 rivers providing massive hydro-potential.",
          },
          {
            id: "q8",
            type: "multiple-choice",
            question: "Which region is between the plains and mountains?",
            mascotComment: "This is where the famous valleys are!",
            icon: "lucide:mountain-snow",
            color: "#f43f5e", // Rose
            options: [
              {
                id: "a",
                text: "Pahad (Hills)",
                icon: "lucide:tent",
                isCorrect: true,
              },
              { id: "b", text: "Terai", icon: "lucide:sun", isCorrect: false },
              {
                id: "c",
                text: "Coastline",
                icon: "lucide:palmtree",
                isCorrect: false,
              },
            ],
            explanation:
              "The Pahad (Hill) region is the central heart of Nepal.",
          },
          {
            id: "q9",
            type: "multiple-choice",
            question: "What forms Nepal's northern border?",
            mascotComment: "A massive, icy wall!",
            icon: "lucide:shield-check",
            color: "#8b5cf6", // Violet
            options: [
              {
                id: "a",
                text: "The Himalayas",
                icon: "lucide:mountain",
                isCorrect: true,
              },
              {
                id: "b",
                text: "The Great Wall",
                icon: "lucide:brick-wall",
                isCorrect: false,
              },
              {
                id: "c",
                text: "Gobi Desert",
                icon: "lucide:wind",
                isCorrect: false,
              },
            ],
            explanation: "The Himalayas serve as a natural border with China.",
          },
          {
            id: "q10",
            type: "multiple-choice",
            question: "What is Nepal's climate variety like?",
            mascotComment: "One country, every weather!",
            icon: "lucide:thermometer-sun",
            color: "#ec4899", // Pink
            options: [
              {
                id: "a",
                text: "Only Frozen",
                icon: "lucide:ice-cream",
                isCorrect: false,
              },
              {
                id: "b",
                text: "Only Hot",
                icon: "lucide:flame",
                isCorrect: false,
              },
              {
                id: "c",
                text: "Tropical to Arctic",
                icon: "lucide:cloud-sun-rain",
                isCorrect: true,
              },
            ],
            explanation:
              "Nepal goes from tropical jungles to arctic peaks in just 200km!",
          },
        ],
      },
      {
        id: "history",
        name: "History",
        icon: "lucide:scroll",
        color: "bg-amber-600",
        shadow: "shadow-[0_6px_0_0_rgba(180,83,9,1)]",
        quiz: [
          {
            id: "h1",
            type: "multiple-choice",
            question: "Who unified the small kingdoms into modern Nepal?",
            mascotComment: "He was the King of Gorkha!",
            icon: "lucide:crown",
            options: [
              {
                id: "a",
                text: "Prithvi Narayan Shah",
                isCorrect: true,
                icon: "lucide:shield",
              },
              {
                id: "b",
                text: "King Mahendra",
                isCorrect: false,
                icon: "lucide:user",
              },
              {
                id: "c",
                text: "Jung Bahadur Rana",
                isCorrect: false,
                icon: "lucide:swords",
              },
            ],
          },
          {
            id: "h2",
            type: "true-false",
            question:
              "Nepal was once divided into three kingdoms in one valley.",
            mascotComment: "Kathmandu, Patan, and Bhaktapur!",
            icon: "lucide:map-pin",
            options: [
              { id: "a", text: "True", isCorrect: true, icon: "lucide:check" },
              { id: "b", text: "False", isCorrect: false, icon: "lucide:x" },
            ],
          },
          {
            id: "h3",
            type: "multiple-choice",
            question: "What is the name of the era known as the 'Golden Age'?",
            mascotComment: "Think of ancient art!",
            icon: "lucide:sparkles",
            options: [
              {
                id: "a",
                text: "Lichhavi Period",
                isCorrect: true,
                icon: "lucide:gem",
              },
              {
                id: "b",
                text: "Rana Regime",
                isCorrect: false,
                icon: "lucide:lock",
              },
              {
                id: "c",
                text: "Shah Dynasty",
                isCorrect: false,
                icon: "lucide:flag",
              },
            ],
          },
          {
            id: "h4",
            type: "multiple-choice",
            question: "The Anglo-Nepal War was fought against which power?",
            mascotComment: "It happened in the early 1800s.",
            icon: "lucide:swords",
            options: [
              {
                id: "a",
                text: "British East India Co.",
                isCorrect: true,
                icon: "lucide:ship",
              },
              {
                id: "b",
                text: "French Empire",
                isCorrect: false,
                icon: "lucide:landmark",
              },
              {
                id: "c",
                text: "Qing Dynasty",
                isCorrect: false,
                icon: "lucide:scroll",
              },
            ],
          },
          {
            id: "h5",
            type: "multiple-choice",
            question: "For how many years did the Rana family rule Nepal?",
            mascotComment: "It was a long period of isolation.",
            icon: "lucide:hourglass",
            options: [
              {
                id: "a",
                text: "104 years",
                isCorrect: true,
                icon: "lucide:calendar",
              },
              {
                id: "b",
                text: "50 years",
                isCorrect: false,
                icon: "lucide:calendar-days",
              },
              {
                id: "c",
                text: "200 years",
                isCorrect: false,
                icon: "lucide:calendar-check",
              },
            ],
          },
          {
            id: "h6",
            type: "true-false",
            question: "Nepal was never officially colonized.",
            mascotComment: "One of the few in Asia!",
            icon: "lucide:shield-check",
            options: [
              {
                id: "a",
                text: "True",
                isCorrect: true,
                icon: "lucide:check-circle",
              },
              {
                id: "b",
                text: "False",
                isCorrect: false,
                icon: "lucide:x-circle",
              },
            ],
          },
          {
            id: "h7",
            type: "multiple-choice",
            question: "In which year did Nepal become a Republic?",
            mascotComment: "It happened in the 21st century.",
            icon: "lucide:calendar",
            options: [
              {
                id: "a",
                text: "2008",
                isCorrect: true,
                icon: "lucide:party-popper",
              },
              { id: "b", text: "1990", isCorrect: false, icon: "lucide:users" },
              {
                id: "c",
                text: "2015",
                isCorrect: false,
                icon: "lucide:scroll",
              },
            ],
          },
          {
            id: "h8",
            type: "multiple-choice",
            question:
              "The Silk Road trade link went through Nepal to which place?",
            mascotComment: "Up north!",
            icon: "lucide:route",
            options: [
              {
                id: "a",
                text: "Tibet",
                isCorrect: true,
                icon: "lucide:mountain",
              },
              {
                id: "b",
                text: "Sri Lanka",
                isCorrect: false,
                icon: "lucide:waves",
              },
              { id: "c", text: "Japan", isCorrect: false, icon: "lucide:sun" },
            ],
          },
          {
            id: "h9",
            type: "multiple-choice",
            question: "Who were the first recorded rulers of Nepal?",
            mascotComment: "They were forest dwellers and warriors.",
            icon: "lucide:users",
            options: [
              { id: "a", text: "Kirats", isCorrect: true, icon: "lucide:leaf" },
              {
                id: "b",
                text: "Mallas",
                isCorrect: false,
                icon: "lucide:castle",
              },
              {
                id: "c",
                text: "Aryans",
                isCorrect: false,
                icon: "lucide:flame",
              },
            ],
          },
          {
            id: "h10",
            type: "multiple-choice",
            question: "What was the capital of the Malla kings?",
            mascotComment: "It's a valley!",
            icon: "lucide:map",
            options: [
              {
                id: "a",
                text: "Kathmandu Valley",
                isCorrect: true,
                icon: "lucide:building",
              },
              {
                id: "b",
                text: "Lumbini",
                isCorrect: false,
                icon: "lucide:shrub",
              },
              {
                id: "c",
                text: "Gorkha",
                isCorrect: false,
                icon: "lucide:mountain",
              },
            ],
          },
        ],
      },
      {
        id: "food",
        name: "Foods",
        icon: "lucide:utensils",
        color: "bg-orange-500",
        shadow: "shadow-[0_6px_0_0_rgba(249,115,22,1)]",
        quiz: [
          {
            id: "f1",
            type: "multiple-choice",
            question: "What is Dal Bhat?",
            mascotComment: "The national staple!",
            icon: "lucide:soup",
            options: [
              {
                id: "a",
                text: "Lentils and Rice",
                isCorrect: true,
                icon: "lucide:wheat",
              },
              {
                id: "b",
                text: "Meat Stew",
                isCorrect: false,
                icon: "lucide:drumstick",
              },
              {
                id: "c",
                text: "Fried Bread",
                isCorrect: false,
                icon: "lucide:sandwich",
              },
            ],
          },
          {
            id: "f2",
            type: "multiple-choice",
            question: "What are Momos?",
            mascotComment: "Everyone's favorite snack!",
            icon: "lucide:flame",
            options: [
              {
                id: "a",
                text: "Steamed Dumplings",
                isCorrect: true,
                icon: "lucide:chef-hat",
              },
              {
                id: "b",
                text: "Spicy Wraps",
                isCorrect: false,
                icon: "lucide:scroll",
              },
              {
                id: "c",
                text: "Sweet Pancakes",
                isCorrect: false,
                icon: "lucide:ice-cream",
              },
            ],
          },
          {
            id: "f3",
            type: "multiple-choice",
            question: "Which meat is commonly avoided in Nepal?",
            mascotComment: "Because of the sacred animal status.",
            icon: "lucide:info",
            options: [
              { id: "a", text: "Beef", isCorrect: true, icon: "lucide:ban" },
              {
                id: "b",
                text: "Chicken",
                isCorrect: false,
                icon: "lucide:check",
              },
              {
                id: "c",
                text: "Buffalo",
                isCorrect: false,
                icon: "lucide:check",
              },
            ],
          },
          {
            id: "f4",
            type: "multiple-choice",
            question: "What is 'Dhido' made of?",
            mascotComment: "Mountain energy food!",
            icon: "lucide:bowl",
            options: [
              {
                id: "a",
                text: "Buckwheat/Millet",
                isCorrect: true,
                icon: "lucide:shrub",
              },
              {
                id: "b",
                text: "Wheat Flour",
                isCorrect: false,
                icon: "lucide:wheat",
              },
              {
                id: "c",
                text: "Corn and Sugar",
                isCorrect: false,
                icon: "lucide:candy",
              },
            ],
          },
          {
            id: "f5",
            type: "multiple-choice",
            question: "What is 'Gundruk'?",
            mascotComment: "It's a bit sour and very tasty.",
            icon: "lucide:leaf",
            options: [
              {
                id: "a",
                text: "Fermented Leafy Greens",
                isCorrect: true,
                icon: "lucide:test-tube",
              },
              {
                id: "b",
                text: "Sweet Yogurt",
                isCorrect: false,
                icon: "lucide:milk",
              },
              {
                id: "c",
                text: "Boiled Potatoes",
                isCorrect: false,
                icon: "lucide:circle",
              },
            ],
          },
          {
            id: "f6",
            type: "multiple-choice",
            question: "Yomari is a special dish of which community?",
            mascotComment: "Shaped like a fish or a fig!",
            icon: "lucide:fish",
            options: [
              { id: "a", text: "Newar", isCorrect: true, icon: "lucide:users" },
              {
                id: "b",
                text: "Sherpa",
                isCorrect: false,
                icon: "lucide:mountain",
              },
              { id: "c", text: "Tharu", isCorrect: false, icon: "lucide:leaf" },
            ],
          },
          {
            id: "f7",
            type: "multiple-choice",
            question: "What is 'Juju Dhau'?",
            mascotComment: "The King of Yogurt!",
            icon: "lucide:crown",
            options: [
              {
                id: "a",
                text: "Sweet Yogurt",
                isCorrect: true,
                icon: "lucide:milk",
              },
              {
                id: "b",
                text: "Spicy Tea",
                isCorrect: false,
                icon: "lucide:coffee",
              },
              {
                id: "c",
                text: "Rice Beer",
                isCorrect: false,
                icon: "lucide:beer",
              },
            ],
          },
          {
            id: "f8",
            type: "multiple-choice",
            question: "What spice gives Newari food its unique kick?",
            mascotComment: "It makes your tongue tingle!",
            icon: "lucide:sparkles",
            options: [
              {
                id: "a",
                text: "Timmur (Sichuan Pepper)",
                isCorrect: true,
                icon: "lucide:flame",
              },
              {
                id: "b",
                text: "Cinnamon",
                isCorrect: false,
                icon: "lucide:stick",
              },
              {
                id: "c",
                text: "Salt",
                isCorrect: false,
                icon: "lucide:circle",
              },
            ],
          },
          {
            id: "f9",
            type: "multiple-choice",
            question: "Sel Roti is most popular during which festival?",
            mascotComment: "The festival of lights!",
            icon: "lucide:sparkle",
            options: [
              { id: "a", text: "Tihar", isCorrect: true, icon: "lucide:sun" },
              {
                id: "b",
                text: "Holi",
                isCorrect: false,
                icon: "lucide:palette",
              },
              {
                id: "c",
                text: "Lhosar",
                isCorrect: false,
                icon: "lucide:moon",
              },
            ],
          },
          {
            id: "f10",
            type: "true-false",
            question: "Chhurpi is a type of hard cheese made from yak milk.",
            mascotComment: "It can last for years!",
            icon: "lucide:gem",
            options: [
              { id: "a", text: "True", isCorrect: true, icon: "lucide:check" },
              { id: "b", text: "False", isCorrect: false, icon: "lucide:x" },
            ],
          },
        ],
      },
      {
        id: "culture",
        name: "Culture",
        icon: "lucide:users",
        color: "bg-purple-500",
        shadow: "shadow-[0_6px_0_0_rgba(147,51,234,1)]",
        quiz: [],
      },
      {
        id: "flag",
        name: "The Flag",
        icon: "twemoji:flag-nepal",
        color: "bg-rose-500",
        shadow: "shadow-[0_6px_0_0_rgba(225,29,72,1)]",
        quiz: [],
      },
      {
        id: "people",
        name: "Personalities",
        icon: "lucide:award",
        color: "bg-blue-500",
        shadow: "shadow-[0_6px_0_0_rgba(59,130,246,1)]",
        quiz: [],
      },
      {
        id: "politics",
        name: "Politics",
        icon: "lucide:landmark",
        color: "bg-slate-600",
        shadow: "shadow-[0_6px_0_0_rgba(71,85,105,1)]",
        quiz: [],
      },
      {
        id: "modern",
        name: "Modern Nepal",
        icon: "lucide:smartphone",
        color: "bg-cyan-500",
        shadow: "shadow-[0_6px_0_0_rgba(6,182,212,1)]",
        quiz: [],
      },
      {
        id: "nature",
        name: "Flora & Fauna",
        icon: "lucide:leaf",
        color: "bg-green-500",
        shadow: "shadow-[0_6px_0_0_rgba(34,197,94,1)]",
        quiz: [],
      },
      {
        id: "festivals",
        name: "Spirituality",
        icon: "lucide:sparkles",
        color: "bg-pink-500",
        shadow: "shadow-[0_6px_0_0_rgba(236,72,153,1)]",
        quiz: [],
      },
    ],
  },
  {
    id: "usa",
    name: "USA",
    continent: "Americas",
    tagline: "The largest country",
    lessons: [],
  },
  {
    id: "japan",
    name: "Japan",
    continent: "Asia",
    tagline: "Land of rising sun",
    lessons: [],
  },
];

export const chapters = [
  {
    id: "nepal",
    information: {
      geo: [
        {
          title: "The Three Belts",
          content:
            "Nepal is physically divided into three regions: The Mountains (Himal), the Hills (Pahad), and the Plains (Terai). Each has a totally different climate!",
          illustration: "lucide:map",
          accentColor: "bg-emerald-500",
        },
        {
          title: "The Giant Peaks",
          content:
            "Nepal is home to 8 of the 14 highest mountains in the world, including the mighty Mount Everest at 8,848.86m.",
          illustration: "twemoji:mountain",
          accentColor: "bg-sky-500",
        },
        {
          title: "The Tropical Terai",
          content:
            "Despite being famous for snow, the southern 'Terai' region is a flat, tropical jungle filled with rhinos and elephants!",
          illustration: "lucide:leaf",
          accentColor: "bg-green-600",
        },
        {
          title: "Deepest Gorge",
          content:
            "The Kali Gandaki Gorge is one of the deepest in the world, positioned between two massive 8,000m peaks.",
          illustration: "lucide:waves",
          accentColor: "bg-indigo-500",
        },
        {
          title: "Water Wealth",
          content:
            "With over 6,000 rivers, Nepal is one of the richest countries in the world for freshwater and hydropower potential.",
          illustration: "lucide:droplets",
          accentColor: "bg-blue-400",
        },
      ],
      history: [
        {
          title: "Ancient Roots",
          content:
            "Nepal's history dates back thousands of years, starting with the Kirat dynasty and later the sophisticated Lichhavi era.",
          illustration: "lucide:scroll",
          accentColor: "bg-amber-600",
        },
        {
          title: "The Three Kingdoms",
          content:
            "Before unification, the Kathmandu Valley was split into three rival kingdoms: Kathmandu, Patan, and Bhaktapur.",
          illustration: "lucide:landmark",
          accentColor: "bg-orange-700",
        },
        {
          title: "Great Unification",
          content:
            "In 1768, King Prithvi Narayan Shah unified the small kingdoms to create the modern nation of Nepal.",
          illustration: "lucide:shield",
          accentColor: "bg-red-700",
        },
      ],
      food: [
        {
          title: "Momo Mania",
          content:
            "Momos are Nepal's unofficial national dish! They are delicious dumplings filled with meat or veggies and served with spicy chutney.",
          illustration: "lucide:utensils",
          accentColor: "bg-orange-500",
        },
        {
          title: "Dal Bhat Power",
          content:
            "Dal Bhat (lentils and rice) is eaten twice a day by most Nepalis. As the saying goes: 'Dal Bhat Power 24 Hour!'",
          illustration: "lucide:soup",
          accentColor: "bg-yellow-500",
        },
        {
          title: "Newari Feast",
          content:
            "The Newar community has a rich food culture featuring 'Samay Baji'—a platter of beaten rice, buffalo meat, and various side dishes.",
          illustration: "lucide:drumstick",
          accentColor: "bg-rose-500",
        },
      ],
      culture: [
        {
          title: "Ethnic Diversity",
          content:
            "Nepal is a beautiful mosaic of over 125 ethnic groups and 123 spoken languages!",
          illustration: "lucide:users",
          accentColor: "bg-purple-500",
        },
        {
          title: "Guest is God",
          content:
            "The philosophy of 'Atithi Devo Bhava' means guests are treated as gods in Nepali households.",
          illustration: "lucide:heart",
          accentColor: "bg-pink-500",
        },
      ],
      flag: [
        {
          title: "Only Non-Rectangle",
          content:
            "Nepal's flag is the only national flag in the world that isn't a rectangle or a square!",
          illustration: "twemoji:flag-nepal",
          accentColor: "bg-rose-600",
        },
        {
          title: "Sun and Moon",
          content:
            "The moon represents the cool weather of the Himalayas, while the sun represents the fierce heat of the lower plains.",
          illustration: "lucide:sun",
          accentColor: "bg-blue-600",
        },
      ],
      personalities: [
        {
          title: "The Light of Asia",
          content:
            "Gautam Buddha, the founder of Buddhism, was born in Lumbini, Nepal over 2,500 years ago.",
          illustration: "lucide:sparkles",
          accentColor: "bg-amber-400",
        },
        {
          title: "Tenzing Norgay",
          content:
            "Alongside Edmund Hillary, Sherpa Tenzing Norgay was one of the first humans to reach the summit of Everest.",
          illustration: "lucide:mountain",
          accentColor: "bg-sky-400",
        },
      ],
      politics: [
        {
          title: "From Crown to Republic",
          content:
            "Nepal transitioned from a long-standing Monarchy to a Federal Democratic Republic in 2008.",
          illustration: "lucide:building-2",
          accentColor: "bg-slate-700",
        },
        {
          title: "Federal Structure",
          content:
            "Today, Nepal is divided into 7 provinces, each with its own local government to better serve the people.",
          illustration: "lucide:layers",
          accentColor: "bg-slate-500",
        },
      ],
      modern: [
        {
          title: "The Tech Surge",
          content:
            "Kathmandu is becoming a hub for IT services and software development in South Asia.",
          illustration: "lucide:smartphone",
          accentColor: "bg-cyan-500",
        },
        {
          title: "Clean Energy",
          content:
            "With its massive river systems, Nepal is rapidly expanding its hydroelectric power to provide clean energy to the region.",
          illustration: "lucide:zap",
          accentColor: "bg-emerald-400",
        },
      ],
      nature: [
        {
          title: "One-Horned Rhino",
          content:
            "Nepal is one of the few places on Earth where you can see the rare Greater One-horned Rhinoceros in the wild.",
          illustration: "lucide:paw-print",
          accentColor: "bg-green-700",
        },
        {
          title: "The Red Panda",
          content:
            "In the high-altitude bamboo forests, you might find the shy and adorable Red Panda!",
          illustration: "lucide:clover",
          accentColor: "bg-orange-600",
        },
      ],
      festivals: [
        {
          title: "Dashain & Tihar",
          content:
            "Dashain is the longest festival, celebrating the victory of good over evil. Tihar is the festival of lights and flowers.",
          illustration: "lucide:sparkle",
          accentColor: "bg-pink-600",
        },
        {
          title: "Holi",
          content:
            "Just like the diverse culture, Holi in Nepal is a vibrant explosion of colors and water to celebrate spring!",
          illustration: "lucide:palette",
          accentColor: "bg-violet-500",
        },
      ],
    },
  },
];

export type NepalCategory = keyof (typeof chapters)[0]["information"];
