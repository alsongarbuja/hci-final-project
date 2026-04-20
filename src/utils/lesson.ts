export const countries = [
  {
    id: "nepal",
    name: "Nepal",
    continent: "Asia",
    tagline: "Master the details of the Himalayan Nation",
    stampIcon: "emojione:flag-for-nepal",
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
            color: "#10b981",
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
              "The three regions are the Mountains, Hills, and Plains.",
          },
          {
            id: "q2",
            type: "multiple-choice",
            question: "What is the official height of Mount Everest?",
            mascotComment: "Don't forget the decimals—every centimeter counts!",
            icon: "twemoji:mountain",
            color: "#0ea5e9",
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
            explanation: "This measurement was updated recently in 2020.",
          },
          {
            id: "q3",
            type: "multiple-choice",
            question: "Which region is a tropical jungle with rhinos?",
            mascotComment: "It’s surprisingly hot down there!",
            icon: "lucide:tree-palm",
            color: "#22c55e",
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
            color: "#f59e0b",
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
            color: "#6366f1",
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
            id: "q_order_1",
            type: "order",
            question: "Order these Himalayan peaks from Lowest to Highest",
            mascotComment: "Drag them into the right spots!",
            options: [
              { id: "o1", text: "Mount Everest", value: 8848 },
              { id: "o2", text: "Mount Kanchenjunga", value: 8586 },
              { id: "o3", text: "Mount Annapurna", value: 8091 },
            ],
            correctOrder: ["o3", "o2", "o1"],
            explanation:
              "Annapurna is the 10th highest, Kanchenjunga the 3rd, and Everest the 1st!",
          },
          {
            id: "q6",
            type: "multiple-choice",
            question: "The Kali Gandaki is famous for being a deep...",
            mascotComment: "Looking down is scary!",
            icon: "lucide:waves",
            color: "#3b82f6",
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
            color: "#2dd4bf",
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
            color: "#f43f5e",
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
            color: "#8b5cf6",
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
            color: "#ec4899",
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
            explanation:
              "King Prithvi Narayan Shah of Gorkha launched the unification campaign in 1743 AD, eventually capturing the Kathmandu Valley and laying the foundation for modern Nepal.",
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
            explanation:
              "Before unification, the Kathmandu Valley was split into three independent Malla kingdoms: Kantipur (Kathmandu), Lalitpur (Patan), and Bhaktapur.",
          },
          {
            id: "h3",
            type: "order",
            question:
              "Arrange these eras of Nepal's history from Oldest to Newest",
            mascotComment: "Drag them into the correct timeline!",
            icon: "lucide:history",
            options: [
              { id: "era1", text: "Lichhavi Period", icon: "lucide:gem" },
              { id: "era2", text: "Malla Era", icon: "lucide:castle" },
              { id: "era3", text: "Shah Dynasty", icon: "lucide:flag" },
            ],
            correctOrder: ["era1", "era2", "era3"],
            explanation:
              "The Lichhavi period (Ancient) came first, followed by the Malla period (Medieval) known for art, and finally the Shah dynasty which unified the country.",
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
            explanation:
              "The Anglo-Nepal War (1814–1816) was fought against the British East India Company. It ended with the Treaty of Sugauli, which defined Nepal's current boundaries.",
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
            explanation:
              "The Rana Regime started with Jung Bahadur Rana in 1846 AD and lasted for 104 years until it was overthrown in 1951 AD to establish democracy.",
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
            explanation:
              "Despite the influence of the British Empire in South Asia, Nepal maintained its sovereignty through military bravery and strategic treaties, never becoming a colony.",
          },
          {
            id: "h7",
            type: "order",
            question: "Order these recent milestones from Past to Present",
            mascotComment: "Nepal's journey to a Republic!",
            icon: "lucide:calendar",
            options: [
              {
                id: "m1",
                text: "End of Rana Rule (1951)",
                icon: "lucide:unlock",
              },
              {
                id: "m2",
                text: "People's Movement (1990)",
                icon: "lucide:users",
              },
              {
                id: "m3",
                text: "Federal Republic (2008)",
                icon: "lucide:party-popper",
              },
            ],
            correctOrder: ["m1", "m2", "m3"],
            explanation:
              "Nepal moved from the Rana autocracy in 1951, to a constitutional monarchy in 1990, and finally became a Republic in 2008.",
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
            explanation:
              "Nepal served as a vital transit point for trade between India and Tibet, particularly for salt, gold, and textiles, forming a branch of the ancient Silk Road.",
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
            explanation:
              "The Kirat Dynasty is recognized as the first documented rulers of ancient Nepal, with Yalambar being the first king mentioned in historical chronicles.",
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
            explanation:
              "The Malla kings ruled from the Kathmandu Valley, which they turned into a cultural hub by building the grand Durbar Squares that are now UNESCO World Heritage Sites.",
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
            type: "order",
            question:
              "Arrange the standard 'Dal Bhat' plate from largest to smallest portion",
            mascotComment: "The national staple!",
            icon: "lucide:soup",
            options: [
              { id: "o1", text: "Rice (Bhat)", icon: "lucide:wheat" },
              { id: "o2", text: "Lentils (Dal)", icon: "lucide:soup" },
              { id: "o3", text: "Pickle (Achar)", icon: "lucide:flame" },
            ],
            correctOrder: ["o1", "o2", "o3"],
            explanation:
              "In a traditional Nepali meal, rice (Bhat) occupies the most space, followed by a bowl of lentil soup (Dal) and a small, flavorful side of spicy pickle (Achar).",
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
            explanation:
              "Momos are steamed dumplings filled with meat or vegetables, served with a spicy tomato-based chutney (jhol achar). They are the most popular fast food in Nepal.",
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
            explanation:
              "As the cow is the national animal of Nepal and sacred in Hinduism, the consumption of beef is traditionally avoided and was historically illegal.",
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
            explanation:
              "Dhido is a sugar-free, high-energy dough made by continuously stirring flour (usually millet or buckwheat) into boiling water. It is a staple in many mountain regions.",
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
            explanation:
              "Gundruk is made by fermenting leafy green vegetables (like mustard or radish leaves). It has a unique sour taste and is often made into a popular soup or pickle.",
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
            explanation:
              "Yomari is a steamed rice-flour dumpling with a sweet filling (Chaku), created by the Newar community of the Kathmandu Valley to celebrate the post-harvest festival.",
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
            explanation:
              "Juju Dhau, which translates to 'King Currant,' is a thick, creamy sweet yogurt from Bhaktapur, traditionally prepared in clay pots.",
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
            explanation:
              "Timmur is a variety of Sichuan pepper native to the Himalayas. It provides a distinct numbing and citrusy flavor essential to Newari and hilly Nepali cuisine.",
          },
          {
            id: "f9",
            type: "order",
            question: "Arrange the steps of making Sel Roti",
            mascotComment: "The festival of lights!",
            icon: "lucide:sparkle",
            options: [
              {
                id: "s1",
                text: "Soak and grind the rice",
                icon: "lucide:droplets",
              },
              {
                id: "s2",
                text: "Mix with ghee and sugar",
                icon: "lucide:utensils",
              },
              {
                id: "s3",
                text: "Deep fry into a ring shape",
                icon: "lucide:flame",
              },
            ],
            correctOrder: ["s1", "s2", "s3"],
            explanation:
              "Sel Roti is a ring-shaped sweet bread. The rice is first soaked and ground into a paste, flavored with sugar and ghee, then skillfully poured into hot oil to fry.",
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
            explanation:
              "Hard Chhurpi is made from yak milk in high-altitude regions. It is famous for being incredibly hard—often compared to a stone—requiring it to be sucked on for hours.",
          },
        ],
      },
      {
        id: "culture",
        name: "Culture",
        icon: "lucide:users",
        color: "bg-purple-500",
        shadow: "shadow-[0_6px_0_0_rgba(147,51,234,1)]",
        quiz: [
          {
            id: "c_q1",
            type: "multiple-choice",
            question:
              "Which of these is the only living goddess in the world found in Nepal?",
            mascotComment: "She resides in Kathmandu Durbar Square.",
            options: [
              { id: "a", text: "Kumari", icon: "lucide:star", isCorrect: true },
              {
                id: "b",
                text: "Laxmi",
                icon: "lucide:coins",
                isCorrect: false,
              },
              {
                id: "c",
                text: "Saraswati",
                icon: "lucide:pencil",
                isCorrect: false,
              },
            ],
            explanation:
              "The Kumari is a prepubescent girl selected from the Shakya caste of the Nepalese Newari community, worshipped as a living goddess.",
          },
          {
            id: "c_q2",
            type: "multiple-choice", // TRUE OR FALSE
            question:
              "True or False: The Nepal flag is the only non-rectangular flag in the world.",
            mascotComment: "Look at the shape closely!",
            options: [
              { id: "a", text: "True", icon: "lucide:check", isCorrect: true },
              { id: "b", text: "False", icon: "lucide:x", isCorrect: false },
            ],
            explanation:
              "Nepal's flag consists of two stacked triangles, making it the only national flag that isn't a rectangle or square.",
          },
          {
            id: "c_q3",
            type: "order",
            question: "Order these greetings from Most Formal to Least Formal",
            mascotComment: "Etiquette is key!",
            options: [
              {
                id: "g1",
                text: "Namaste (with a bow)",
                icon: "lucide:person-standing",
              },
              {
                id: "g2",
                text: "K Cha? (What's up?)",
                icon: "lucide:message-circle",
              },
            ],
            correctOrder: ["g1", "g2"],
            explanation:
              "Namaste is the respectful standard greeting, while 'K Cha' is slang used among close friends.",
          },
          {
            id: "c_q4",
            type: "multiple-choice",
            question: "What is the traditional Nepali dress for men called?",
            mascotComment: "It's often worn with a Dhaka Topi.",
            options: [
              {
                id: "a",
                text: "Daura Suruwal",
                icon: "lucide:shirt",
                isCorrect: true,
              },
              {
                id: "b",
                text: "Kurta Suruwal",
                icon: "lucide:user",
                isCorrect: false,
              },
              {
                id: "c",
                text: "Lungi",
                icon: "lucide:scissors",
                isCorrect: false,
              },
            ],
            explanation:
              "Daura Suruwal is the national dress for men, characterized by its unique eight-stringed tying mechanism.",
          },
          {
            id: "c_q5",
            type: "multiple-choice",
            question: "What is the primary language spoken in Nepal?",
            mascotComment: "It has its own script called Devanagari.",
            options: [
              {
                id: "a",
                text: "Nepali",
                icon: "lucide:languages",
                isCorrect: true,
              },
              {
                id: "b",
                text: "Newari",
                icon: "lucide:type",
                isCorrect: false,
              },
              {
                id: "c",
                text: "Maithili",
                icon: "lucide:message-square",
                isCorrect: false,
              },
            ],
            explanation:
              "While there are over 120 languages spoken in Nepal, Nepali is the official and most widely spoken language.",
          },
          {
            id: "c_q6",
            type: "multiple-choice",
            question:
              "Which festival celebrates the bond between brothers and sisters?",
            mascotComment: "Part of the Tihar festival!",
            options: [
              {
                id: "a",
                text: "Bhai Tika",
                icon: "lucide:heart",
                isCorrect: true,
              },
              {
                id: "b",
                text: "Dashain",
                icon: "lucide:sparkles",
                isCorrect: false,
              },
              {
                id: "c",
                text: "Lhosar",
                icon: "lucide:mountain",
                isCorrect: false,
              },
            ],
            explanation:
              "Bhai Tika is the final day of Tihar where sisters pray for their brothers' long lives and success.",
          },
          {
            id: "c_q7",
            type: "multiple-choice", // TRUE OR FALSE
            question:
              "True or False: Cows are sacred in Nepal and it is the national animal.",
            mascotComment: "Moo!",
            options: [
              { id: "a", text: "True", icon: "lucide:check", isCorrect: true },
              { id: "b", text: "False", icon: "lucide:x", isCorrect: false },
            ],
            explanation:
              "The cow is considered a sacred animal in Hinduism and is officially the national animal of Nepal.",
          },
          {
            id: "c_q8",
            type: "multiple-choice",
            question:
              "Which musical instrument is synonymous with Nepali folk music?",
            mascotComment: "It's a small, four-stringed instrument.",
            options: [
              {
                id: "a",
                text: "Sarangi",
                icon: "lucide:music",
                isCorrect: true,
              },
              {
                id: "b",
                text: "Sitar",
                icon: "lucide:audio-lines",
                isCorrect: false,
              },
              { id: "c", text: "Tabla", icon: "lucide:drum", isCorrect: false },
            ],
            explanation:
              "The Sarangi is a traditional stringed instrument used by the Gaine community to tell stories through song.",
          },
          {
            id: "c_q9",
            type: "multiple-choice",
            question:
              "What is the name of the traditional wooden windows famous in Kathmandu?",
            mascotComment: "The craftsmanship is incredible!",
            options: [
              {
                id: "a",
                text: "Ankhijhyal",
                icon: "lucide:grid",
                isCorrect: true,
              },
              {
                id: "b",
                text: "Dhoka",
                icon: "lucide:door-open",
                isCorrect: false,
              },
              { id: "c", text: "Pata", icon: "lucide:frame", isCorrect: false },
            ],
            explanation:
              "Ankhijhyal are intricately carved wooden windows that are a hallmark of Newari architecture in the Kathmandu Valley.",
          },
          {
            id: "c_q10",
            type: "multiple-choice", // TRUE OR FALSE
            question:
              "True or False: Nepal follows a different calendar than the Gregorian one (AD).",
            mascotComment: "We are in the future!",
            options: [
              { id: "a", text: "True", icon: "lucide:check", isCorrect: true },
              { id: "b", text: "False", icon: "lucide:x", isCorrect: false },
            ],
            explanation:
              "Nepal officially follows the Bikram Sambat (BS) calendar, which is approximately 56.7 years ahead of the Gregorian calendar.",
          },
        ],
      },
      {
        id: "flag",
        name: "The Flag",
        icon: "twemoji:flag-nepal",
        color: "bg-rose-500",
        shadow: "shadow-[0_6px_0_0_rgba(225,29,72,1)]",
        quiz: [
          {
            id: "fl1",
            type: "multiple-choice",
            question: "What is unique about the shape of the Nepal flag?",
            mascotComment: "It's the only one of its kind!",
            icon: "lucide:triangle",
            options: [
              {
                id: "a",
                text: "It is circular",
                isCorrect: false,
                icon: "lucide:circle",
              },
              {
                id: "b",
                text: "It is non-rectangular",
                isCorrect: true,
                icon: "lucide:shape-polygon",
              },
              {
                id: "c",
                text: "It is a perfect square",
                isCorrect: false,
                icon: "lucide:square",
              },
            ],
            explanation:
              "Nepal's flag is the only national flag in the world that is not a rectangle or a square. It consists of two stacked triangles (pennons).",
          },
          {
            id: "fl2",
            type: "multiple-choice",
            question: "What does the Crimson Red color in the flag represent?",
            mascotComment: "It's also the color of our national flower!",
            icon: "lucide:palette",
            options: [
              {
                id: "a",
                text: "Bravery and Rhododendron",
                isCorrect: true,
                icon: "lucide:shield",
              },
              {
                id: "b",
                text: "The Blue Sky",
                isCorrect: false,
                icon: "lucide:cloud",
              },
              {
                id: "c",
                text: "Peace and Calm",
                isCorrect: false,
                icon: "lucide:wind",
              },
            ],
            explanation:
              "Crimson is Nepal's national color. It symbolizes the brave spirit of the Nepalese people and is the color of the Rhododendron, Nepal's national flower.",
          },
          {
            id: "fl3",
            type: "multiple-choice",
            question: "What is the meaning of the Blue Border around the flag?",
            mascotComment: "Think of a peaceful world.",
            icon: "lucide:frame",
            options: [
              { id: "a", text: "War", isCorrect: false, icon: "lucide:swords" },
              {
                id: "b",
                text: "Peace and Harmony",
                isCorrect: true,
                icon: "lucide:dove",
              },
              {
                id: "c",
                text: "The Deep Ocean",
                isCorrect: false,
                icon: "lucide:waves",
              },
            ],
            explanation:
              "The blue border surrounding the crimson flag symbolizes peace and the harmony that Nepal seeks to maintain with the rest of the world.",
          },
          {
            id: "fl4",
            type: "multiple-choice",
            question:
              "Which celestial body is positioned in the upper triangle?",
            mascotComment: "It shines during the night!",
            icon: "lucide:moon",
            options: [
              {
                id: "a",
                text: "The Sun",
                isCorrect: false,
                icon: "lucide:sun",
              },
              {
                id: "b",
                text: "The Moon",
                isCorrect: true,
                icon: "lucide:moon-star",
              },
              {
                id: "c",
                text: "The North Star",
                isCorrect: false,
                icon: "lucide:sparkles",
              },
            ],
            explanation:
              "The upper triangle features a stylized moon (a crescent moon with eight rays), representing the soothing and calm nature of the Nepalese people.",
          },
          {
            id: "fl5",
            type: "multiple-choice",
            question:
              "Which celestial body is positioned in the lower triangle?",
            mascotComment: "It's big and bright!",
            icon: "lucide:sun",
            options: [
              {
                id: "a",
                text: "The Moon",
                isCorrect: false,
                icon: "lucide:moon",
              },
              {
                id: "b",
                text: "The Sun",
                isCorrect: true,
                icon: "lucide:sun-medium",
              },
              {
                id: "c",
                text: "A Comet",
                isCorrect: false,
                icon: "lucide:zap",
              },
            ],
            explanation:
              "The lower triangle features a white sun with twelve rays, representing the heat and the fierce determination of the Nepalese people.",
          },
          {
            id: "fl6",
            type: "true-false",
            question: "The two triangles represent the Himalayan Mountains.",
            mascotComment: "They look like peaks, don't they?",
            icon: "lucide:mountain",
            options: [
              { id: "a", text: "True", isCorrect: true, icon: "lucide:check" },
              { id: "b", text: "False", isCorrect: false, icon: "lucide:x" },
            ],
            explanation:
              "The two triangles (pennons) are widely recognized as representing the Himalayan mountain ranges that dominate Nepal's landscape.",
          },
          {
            id: "fl7",
            type: "multiple-choice",
            question:
              "The sun and moon symbols together represent the hope that...",
            mascotComment: "A wish for eternity!",
            icon: "lucide:infinity",
            options: [
              {
                id: "a",
                text: "Nepal will last as long as they exist",
                isCorrect: true,
                icon: "lucide:hourglass",
              },
              {
                id: "b",
                text: "It will always be daytime",
                isCorrect: false,
                icon: "lucide:sunrise",
              },
              {
                id: "c",
                text: "Nepal will go to space",
                isCorrect: false,
                icon: "lucide:rocket",
              },
            ],
            explanation:
              "The inclusion of both the sun and the moon expresses the hope that the nation of Nepal will endure as long as these celestial bodies remain in the sky.",
          },
          {
            id: "fl8",
            type: "order",
            question:
              "Arrange the colors/elements of the flag from the outside in",
            mascotComment: "Start from the very edge!",
            icon: "lucide:layers",
            options: [
              { id: "e1", text: "Blue Border", icon: "lucide:square" },
              {
                id: "e2",
                text: "Crimson Background",
                icon: "lucide:paint-bucket",
              },
              { id: "e3", text: "Sun and Moon Symbols", icon: "lucide:stars" },
            ],
            correctOrder: ["e1", "e2", "e3"],
            explanation:
              "The flag is constructed with a blue border on the outermost edge, followed by the crimson red body, and finally the white celestial symbols in the center of the triangles.",
          },
          {
            id: "fl9",
            type: "true-false",
            question:
              "In the original version, the sun and moon had human faces.",
            mascotComment: "Flags change over time!",
            icon: "lucide:smile",
            options: [
              { id: "a", text: "True", isCorrect: true, icon: "lucide:check" },
              { id: "b", text: "False", isCorrect: false, icon: "lucide:x" },
            ],
            explanation:
              "Before 1962, the sun and moon symbols on the flag actually had human faces drawn on them. These were removed to modernize the design.",
          },
          {
            id: "fl10",
            type: "order",
            question: "Order the symbols as they appear from Top to Bottom",
            mascotComment: "Look at the flag from top to bottom!",
            icon: "lucide:arrow-down-z-a",
            options: [
              { id: "s1", text: "The Moon", icon: "lucide:moon" },
              { id: "s2", text: "The Sun", icon: "lucide:sun" },
            ],
            correctOrder: ["s1", "s2"],
            explanation:
              "The moon is always placed in the upper triangle, while the sun is placed in the lower triangle.",
          },
        ],
      },
      {
        id: "personalities",
        name: "Personalities",
        icon: "lucide:award",
        color: "bg-blue-500",
        shadow: "shadow-[0_6px_0_0_rgba(59,130,246,1)]",
        quiz: [
          {
            id: "p1",
            type: "multiple-choice",
            question:
              "Which world-famous spiritual leader was born in Lumbini, Nepal?",
            mascotComment: "He is known as the 'Light of Asia'.",
            icon: "lucide:sun",
            options: [
              {
                id: "a",
                text: "Gautama Buddha",
                isCorrect: true,
                icon: "lucide:sparkles",
              },
              {
                id: "b",
                text: "Mahatma Gandhi",
                isCorrect: false,
                icon: "lucide:user",
              },
              {
                id: "c",
                text: "Confucius",
                isCorrect: false,
                icon: "lucide:scroll",
              },
            ],
            explanation:
              "Siddhartha Gautama, who later became the Buddha, was born in the gardens of Lumbini in southern Nepal around 563 BCE.",
          },
          {
            id: "p2",
            type: "multiple-choice",
            question:
              "Who was the first Nepalese person to reach the summit of Mt. Everest?",
            mascotComment: "He climbed it with Sir Edmund Hillary in 1953!",
            icon: "lucide:mountain",
            options: [
              {
                id: "a",
                text: "Tenzing Norgay Sherpa",
                isCorrect: true,
                icon: "lucide:flag",
              },
              {
                id: "b",
                text: "Pasang Lhamu Sherpa",
                isCorrect: false,
                icon: "lucide:award",
              },
              {
                id: "c",
                text: "Kami Rita Sherpa",
                isCorrect: false,
                icon: "lucide:mountain-snow",
              },
            ],
            explanation:
              "Tenzing Norgay Sherpa made history on May 29, 1953, when he and Edmund Hillary became the first humans to stand atop the world's highest peak.",
          },
          {
            id: "p3",
            type: "multiple-choice",
            question:
              "Dr. Sanduk Ruit is internationally famous for which medical achievement?",
            mascotComment: "He has restored sight to over 130,000 people!",
            icon: "lucide:eye",
            options: [
              {
                id: "a",
                text: "Cataract Surgery",
                isCorrect: true,
                icon: "lucide:stethoscope",
              },
              {
                id: "b",
                text: "Heart Transplant",
                isCorrect: false,
                icon: "lucide:heart",
              },
              {
                id: "c",
                text: "Brain Surgery",
                isCorrect: false,
                icon: "lucide:brain",
              },
            ],
            explanation:
              "Dr. Sanduk Ruit developed a low-cost cataract surgery technique and high-quality lenses that have cured blindness for thousands of poor people across the globe.",
          },
          {
            id: "p4",
            type: "multiple-choice",
            question: "Who is known as the 'Adikavi' (First Poet) of Nepal?",
            mascotComment: "He translated the Ramayana into Nepali.",
            icon: "lucide:pen-tool",
            options: [
              {
                id: "a",
                text: "Bhanubhakta Acharya",
                isCorrect: true,
                icon: "lucide:book-open",
              },
              {
                id: "b",
                text: "Laxmi Prasad Devkota",
                isCorrect: false,
                icon: "lucide:feather",
              },
              {
                id: "c",
                text: "Motiram Bhatta",
                isCorrect: false,
                icon: "lucide:languages",
              },
            ],
            explanation:
              "Bhanubhakta Acharya is revered as the first poet of the Nepali language for making literature accessible to common people through his Nepali translation of the Ramayana.",
          },
          {
            id: "p5",
            type: "true-false",
            question:
              "Anuradha Koirala won the CNN Hero of the Year award for her fight against human trafficking.",
            mascotComment: "She is the founder of Maiti Nepal.",
            icon: "lucide:shield-check",
            options: [
              { id: "a", text: "True", isCorrect: true, icon: "lucide:check" },
              { id: "b", text: "False", isCorrect: false, icon: "lucide:x" },
            ],
            explanation:
              "Anuradha Koirala was named CNN Hero of the Year in 2010 for her incredible work in rescuing and rehabilitating survivors of sex trafficking through her organization, Maiti Nepal.",
          },
          {
            id: "p6",
            type: "multiple-choice",
            question:
              "Which Nepali cricketer is known as the 'founding father' of modern Nepal cricket?",
            mascotComment: "He led Nepal to its first T20 World Cup in 2014.",
            icon: "lucide:trophy",
            options: [
              {
                id: "a",
                text: "Paras Khadka",
                isCorrect: true,
                icon: "lucide:user-check",
              },
              {
                id: "b",
                text: "Sandeep Lamichhane",
                isCorrect: false,
                icon: "lucide:star",
              },
              {
                id: "c",
                text: "Rohit Paudel",
                isCorrect: false,
                icon: "lucide:award",
              },
            ],
            explanation:
              "Paras Khadka is widely credited with elevating Nepal cricket on the international stage, serving as a long-time captain and a symbol of the sport's growth in the country.",
          },
          {
            id: "p7",
            type: "multiple-choice",
            question:
              "Who was the first woman to reach the summit of Mount Everest?",
            mascotComment: "She is a national hero of Nepal.",
            icon: "lucide:mountain",
            options: [
              {
                id: "a",
                text: "Pasang Lhamu Sherpa",
                isCorrect: true,
                icon: "lucide:female",
              },
              {
                id: "b",
                text: "Junko Tabei",
                isCorrect: false,
                icon: "lucide:globe",
              },
              {
                id: "c",
                text: "Mira Rai",
                isCorrect: false,
                icon: "lucide:timer",
              },
            ],
            explanation:
              "Pasang Lhamu Sherpa became the first Nepalese woman to summit Everest in 1993, inspiring a whole generation of women to pursue mountaineering.",
          },
          {
            id: "p8",
            type: "order",
            question:
              "Order these Everest legends by their number of summits (Lowest to Highest)",
            mascotComment: "One of them holds the world record!",
            icon: "lucide:list-ordered",
            options: [
              {
                id: "o1",
                text: "Tenzing Norgay (1 Summit)",
                icon: "lucide:history",
              },
              {
                id: "o2",
                text: "Pasang Lhamu (1 Summit)",
                icon: "lucide:medal",
              },
              {
                id: "o3",
                text: "Kami Rita Sherpa (30+ Summits)",
                icon: "lucide:crown",
              },
            ],
            correctOrder: ["o1", "o2", "o3"],
            explanation:
              "While Tenzing and Pasang were pioneers with one historic summit each, Kami Rita Sherpa holds the world record for the most ascents of Mt. Everest.",
          },
          {
            id: "p9",
            type: "multiple-choice",
            question:
              "Which writer won the Madan Puraskar despite living with cerebral palsy?",
            mascotComment: "She writes with her left foot!",
            icon: "lucide:scroll",
            options: [
              {
                id: "a",
                text: "Jhamak Ghimire",
                isCorrect: true,
                icon: "lucide:feather",
              },
              {
                id: "b",
                text: "Parijat",
                isCorrect: false,
                icon: "lucide:book",
              },
              {
                id: "c",
                text: "Narayan Wagle",
                isCorrect: false,
                icon: "lucide:newspaper",
              },
            ],
            explanation:
              "Jhamak Ghimire is a celebrated literary figure who overcame severe physical disability to write several books, including her autobiography 'Jiwan Kanda Ki Phool'.",
          },
          {
            id: "p10",
            type: "order",
            question:
              "Arrange these historic figures chronologically (Oldest to Most Recent)",
            mascotComment: "From ancient times to the modern era!",
            icon: "lucide:clock",
            options: [
              { id: "h1", text: "Gautama Buddha", icon: "lucide:leaf" },
              { id: "h2", text: "Arniko (Architect)", icon: "lucide:castle" },
              { id: "h3", text: "Prithvi Narayan Shah", icon: "lucide:shield" },
            ],
            correctOrder: ["h1", "h2", "h3"],
            explanation:
              "Buddha lived in the 6th century BCE, Arniko was a 13th-century artist/architect who traveled to China, and Prithvi Narayan Shah unified Nepal in the 18th century.",
          },
        ],
      },
      {
        id: "politics",
        name: "Politics",
        icon: "lucide:landmark",
        color: "bg-slate-600",
        shadow: "shadow-[0_6px_0_0_rgba(71,85,105,1)]",
        quiz: [
          {
            id: "pol1",
            type: "multiple-choice",
            question: "What is the current official political form of Nepal?",
            mascotComment: "We moved from a Monarchy to this in 2008!",
            icon: "lucide:landmark",
            options: [
              {
                id: "a",
                text: "Absolute Monarchy",
                isCorrect: false,
                icon: "lucide:crown",
              },
              {
                id: "b",
                text: "Federal Democratic Republic",
                isCorrect: true,
                icon: "lucide:users",
              },
              {
                id: "c",
                text: "Constitutional Monarchy",
                isCorrect: false,
                icon: "lucide:scroll",
              },
            ],
            explanation:
              "Nepal was declared a Federal Democratic Republic on May 28, 2008, by the first Constituent Assembly, officially ending the 240-year-old Shah dynasty monarchy.",
          },
          {
            id: "pol2",
            type: "multiple-choice",
            question:
              "In which year was the current Constitution of Nepal adopted?",
            mascotComment:
              "It's the first one written by the people's representatives!",
            icon: "lucide:book-text",
            options: [
              {
                id: "a",
                text: "2015 (2072 BS)",
                isCorrect: true,
                icon: "lucide:calendar-check",
              },
              {
                id: "b",
                text: "1990 (2047 BS)",
                isCorrect: false,
                icon: "lucide:history",
              },
              {
                id: "c",
                text: "2008 (2065 BS)",
                isCorrect: false,
                icon: "lucide:file-text",
              },
            ],
            explanation:
              "The current Constitution of Nepal was promulgated on September 20, 2015 (Ashoj 3, 2072 BS). It established Nepal as a federal secular state.",
          },
          {
            id: "pol3",
            type: "multiple-choice",
            question:
              "How many Provinces is Nepal divided into under the federal system?",
            mascotComment:
              "They were originally just numbered, but now they all have names!",
            icon: "lucide:map",
            options: [
              {
                id: "a",
                text: "5 Provinces",
                isCorrect: false,
                icon: "lucide:layout-grid",
              },
              {
                id: "b",
                text: "7 Provinces",
                isCorrect: true,
                icon: "lucide:map-pin",
              },
              {
                id: "c",
                text: "14 Provinces",
                isCorrect: false,
                icon: "lucide:layers",
              },
            ],
            explanation:
              "The 2015 Constitution divided Nepal into 7 provinces: Koshi, Madhesh, Bagmati, Gandaki, Lumbini, Karnali, and Sudurpashchim.",
          },
          {
            id: "pol4",
            type: "multiple-choice",
            question: "Who is the 'Head of State' in Nepal?",
            mascotComment: "This is a ceremonial role representing the nation.",
            icon: "lucide:user-round-check",
            options: [
              {
                id: "a",
                text: "The Prime Minister",
                isCorrect: false,
                icon: "lucide:briefcase",
              },
              {
                id: "b",
                text: "The President",
                isCorrect: true,
                icon: "lucide:award",
              },
              {
                id: "c",
                text: "The Chief Justice",
                isCorrect: false,
                icon: "lucide:scale",
              },
            ],
            explanation:
              "In Nepal's parliamentary system, the President is the Head of State, while the Prime Minister holds the executive power as the Head of Government.",
          },
          {
            id: "pol5",
            type: "true-false",
            question:
              "Nepal is a 'Secular' state according to the 2015 Constitution.",
            mascotComment:
              "This means the state protects all religions equally.",
            icon: "lucide:shrub",
            options: [
              { id: "a", text: "True", isCorrect: true, icon: "lucide:check" },
              { id: "b", text: "False", isCorrect: false, icon: "lucide:x" },
            ],
            explanation:
              "The 2015 Constitution defines Nepal as a secular state, meaning it protects religious and cultural freedom and does not have an official state religion.",
          },
          {
            id: "pol6",
            type: "order",
            question:
              "Order the three tiers of Government in Nepal from Highest to Lowest",
            mascotComment: "Power is distributed across three levels!",
            icon: "lucide:network",
            options: [
              {
                id: "g1",
                text: "Federal Government",
                icon: "lucide:building-2",
              },
              {
                id: "g2",
                text: "Provincial Government",
                icon: "lucide:landmark",
              },
              { id: "g3", text: "Local Government", icon: "lucide:home" },
            ],
            correctOrder: ["g1", "g2", "g3"],
            explanation:
              "Nepal's federal structure consists of the Federal (central) level, 7 Provincial levels, and 753 Local levels (Municipalities and Rural Municipalities).",
          },
          {
            id: "pol7",
            type: "multiple-choice",
            question:
              "How many members are there in the House of Representatives (Lower House)?",
            mascotComment: "It's a mix of direct and proportional voting.",
            icon: "lucide:gavel",
            options: [
              { id: "a", text: "275", isCorrect: true, icon: "lucide:users-2" },
              {
                id: "b",
                text: "601",
                isCorrect: false,
                icon: "lucide:history",
              },
              {
                id: "c",
                text: "334",
                isCorrect: false,
                icon: "lucide:user-plus",
              },
            ],
            explanation:
              "The House of Representatives consists of 275 members: 165 elected through first-past-the-post (direct) and 110 through proportional representation.",
          },
          {
            id: "pol8",
            type: "multiple-choice",
            question:
              "Which of these is the term used for a local government unit in a rural area?",
            mascotComment: "They replaced the old 'VDCs'.",
            icon: "lucide:sprout",
            options: [
              {
                id: "a",
                text: "Metropolitan City",
                isCorrect: false,
                icon: "lucide:city",
              },
              {
                id: "b",
                text: "Rural Municipality (Gaunpalika)",
                isCorrect: true,
                icon: "lucide:mountain",
              },
              {
                id: "c",
                text: "Sub-Metropolis",
                isCorrect: false,
                icon: "lucide:building",
              },
            ],
            explanation:
              "Rural areas are governed by 'Gaunpalikas' (Rural Municipalities), while urban areas are divided into Municipalities, Sub-metropolises, or Metropolitan cities.",
          },
          {
            id: "pol9",
            type: "true-false",
            question: "The voting age in Nepal is 16 years.",
            mascotComment: "At what age do you get your voter ID?",
            icon: "lucide:fingerprint",
            options: [
              { id: "a", text: "True", isCorrect: false, icon: "lucide:check" },
              { id: "b", text: "False", isCorrect: true, icon: "lucide:x" },
            ],
            explanation:
              "The minimum voting age in Nepal is 18 years, though citizens can get their citizenship card at 16.",
          },
          {
            id: "pol10",
            type: "order",
            question:
              "Order these historical political eras of Nepal from Oldest to Newest",
            mascotComment: "Nepal has had many systems in just 100 years!",
            icon: "lucide:clock-9",
            options: [
              {
                id: "t1",
                text: "Rana Regime (Oligarchy)",
                icon: "lucide:shield-off",
              },
              {
                id: "t2",
                text: "Panchayat System (Partyless)",
                icon: "lucide:trees",
              },
              {
                id: "t3",
                text: "Federal Republic (Current)",
                icon: "lucide:vote",
              },
            ],
            correctOrder: ["t1", "t2", "t3"],
            explanation:
              "The hereditary Rana rule ended in 1951, followed later by the King-led Panchayat system (1960–1990), and finally the transition to a Federal Republic in 2008.",
          },
        ],
      },
      {
        id: "modern",
        name: "Modern Nepal",
        icon: "lucide:smartphone",
        color: "bg-cyan-500",
        shadow: "shadow-[0_6px_0_0_rgba(6,182,212,1)]",
        quiz: [
          {
            id: "mod1",
            type: "multiple-choice",
            question:
              "Which Nepali tech company became the country's first 'Unicorn' (valued at over $1 billion)?",
            mascotComment: "It changed how we pay for everything!",
            icon: "lucide:wallet",
            options: [
              {
                id: "a",
                text: "eSewa",
                isCorrect: false,
                icon: "lucide:smartphone",
              },
              {
                id: "b",
                text: "ESR Tech",
                isCorrect: false,
                icon: "lucide:cpu",
              },
              {
                id: "c",
                text: "None yet",
                isCorrect: true,
                icon: "lucide:help-circle",
              },
            ],
            explanation:
              "While companies like eSewa and Khalti have revolutionized digital payments, Nepal is still waiting for its first official tech unicorn. However, the startup ecosystem is growing rapidly!",
          },
          {
            id: "mod2",
            type: "multiple-choice",
            question:
              "What is the most popular mobile payment system used in Nepal today?",
            mascotComment: "You'll see these QR codes in almost every shop!",
            icon: "lucide:qr-code",
            options: [
              {
                id: "a",
                text: "Fonepay",
                isCorrect: true,
                icon: "lucide:scan",
              },
              {
                id: "b",
                text: "PayPal",
                isCorrect: false,
                icon: "lucide:globe",
              },
              {
                id: "c",
                text: "Apple Pay",
                isCorrect: false,
                icon: "lucide:tablet",
              },
            ],
            explanation:
              "Fonepay is the largest payment network in Nepal, connecting most banks and allowing millions of users to pay via QR codes instantly.",
          },
          {
            id: "mod3",
            type: "multiple-choice",
            question:
              "Which major international event was hosted in Kathmandu and Pokhara in 2019?",
            mascotComment: "Athletes from all over South Asia competed!",
            icon: "lucide:trophy",
            options: [
              {
                id: "a",
                text: "The Asian Games",
                isCorrect: false,
                icon: "lucide:map",
              },
              {
                id: "b",
                text: "The South Asian Games (SAG)",
                isCorrect: true,
                icon: "lucide:medal",
              },
              {
                id: "c",
                text: "The Cricket World Cup",
                isCorrect: false,
                icon: "lucide:palmtree",
              },
            ],
            explanation:
              "The 13th South Asian Games were successfully held in Nepal in 2019, with Nepal finishing second in the overall medal tally.",
          },
          {
            id: "mod4",
            type: "multiple-choice",
            question:
              "Which food delivery platform is the most widely used in Nepal's urban areas?",
            mascotComment: "Hungry? Just a few taps away!",
            icon: "lucide:truck",
            options: [
              {
                id: "a",
                text: "Uber Eats",
                isCorrect: false,
                icon: "lucide:car",
              },
              {
                id: "b",
                text: "Foodmandu",
                isCorrect: true,
                icon: "lucide:utensils-crossed",
              },
              {
                id: "c",
                text: "DoorDash",
                isCorrect: false,
                icon: "lucide:shopping-bag",
              },
            ],
            explanation:
              "Foodmandu was the pioneer of food delivery in Nepal and remains a dominant player in Kathmandu, Pokhara, and other major cities.",
          },
          {
            id: "mod5",
            type: "true-false",
            question:
              "Nepal has its own satellite currently orbiting the Earth.",
            mascotComment: "It's called NepaliSat-1!",
            icon: "lucide:satellite",
            options: [
              { id: "a", text: "True", isCorrect: true, icon: "lucide:check" },
              { id: "b", text: "False", isCorrect: false, icon: "lucide:x" },
            ],
            explanation:
              "NepaliSat-1, a nanosatellite, was launched in April 2019, marking Nepal's entry into space technology.",
          },
          {
            id: "mod6",
            type: "multiple-choice",
            question:
              "What is the name of the popular ride-sharing app developed in Nepal?",
            mascotComment: "It's the easiest way to beat Kathmandu traffic!",
            icon: "lucide:bike",
            options: [
              {
                id: "a",
                text: "Pathao",
                isCorrect: true,
                icon: "lucide:navigation",
              },
              {
                id: "b",
                text: "Grab",
                isCorrect: false,
                icon: "lucide:map-pin",
              },
              {
                id: "c",
                text: "Lyft",
                isCorrect: false,
                icon: "lucide:car-front",
              },
            ],
            explanation:
              "Pathao (originally from Bangladesh but highly successful in Nepal) and local apps like Tootle revolutionized urban transport using motorcycles as taxis.",
          },
          {
            id: "mod7",
            type: "multiple-choice",
            question:
              "Which Nepali filmmaker's movie 'The Red Suitcase' premiered at the Venice Film Festival?",
            mascotComment: "Nepali cinema is reaching global stages!",
            icon: "lucide:clapperboard",
            options: [
              {
                id: "a",
                text: "Fidel Devkota",
                isCorrect: true,
                icon: "lucide:camera",
              },
              {
                id: "b",
                text: "Nischal Basnet",
                isCorrect: false,
                icon: "lucide:film",
              },
              {
                id: "c",
                text: "Min Bham",
                isCorrect: false,
                icon: "lucide:tv",
              },
            ],
            explanation:
              "Fidel Devkota's 'The Red Suitcase' gained international acclaim at Venice, showcasing the depth of modern Nepali storytelling.",
          },
          {
            id: "mod8",
            type: "order",
            question:
              "Order these internet technologies by their introduction in Nepal",
            mascotComment: "From dial-up to the speed of light!",
            icon: "lucide:signal",
            options: [
              {
                id: "i1",
                text: "Dial-up Internet",
                icon: "lucide:phone-incoming",
              },
              {
                id: "i2",
                text: "ADSL / Wired Broadband",
                icon: "lucide:cable",
              },
              {
                id: "i3",
                text: "Fiber to the Home (FTTH)",
                icon: "lucide:zap",
              },
            ],
            correctOrder: ["i1", "i2", "i3"],
            explanation:
              "Nepal moved from slow dial-up connections in the 90s to ADSL in the 2000s, and now high-speed Fiber is common in most cities.",
          },
          {
            id: "mod9",
            type: "true-false",
            question:
              "The 'Dharahara' tower in Kathmandu was completely rebuilt after the 2015 earthquake.",
            mascotComment: "It's a symbol of resilience.",
            icon: "lucide:tower-control",
            options: [
              { id: "a", text: "True", isCorrect: true, icon: "lucide:check" },
              { id: "b", text: "False", isCorrect: false, icon: "lucide:x" },
            ],
            explanation:
              "The historic Dharahara was destroyed in 2015. A new, modern version was built and inaugurated in 2021, while the base of the old one remains as a memorial.",
          },
          {
            id: "mod10",
            type: "order",
            question:
              "Rank these cities by their level of 'Urbanization' and Tech Hub status",
            mascotComment: "Where is the action happening?",
            icon: "lucide:city",
            options: [
              { id: "c1", text: "Kathmandu", icon: "lucide:building-2" },
              { id: "c2", text: "Pokhara", icon: "lucide:waves" },
              { id: "c3", text: "Butwal", icon: "lucide:factory" },
            ],
            correctOrder: ["c1", "c2", "c3"],
            explanation:
              "Kathmandu is the primary economic and tech hub, followed by Pokhara (tourism and tech), and growing industrial cities like Butwal.",
          },
        ],
      },
      {
        id: "nature",
        name: "Flora & Fauna",
        icon: "lucide:leaf",
        color: "bg-green-500",
        shadow: "shadow-[0_6px_0_0_rgba(34,197,94,1)]",
        quiz: [
          {
            id: "nat1",
            type: "multiple-choice",
            question: "What is the national flower of Nepal?",
            mascotComment:
              "The hills turn bright red when these bloom in spring!",
            icon: "lucide:flower-2",
            options: [
              {
                id: "a",
                text: "Lotus",
                isCorrect: false,
                icon: "lucide:shrub",
              },
              {
                id: "b",
                text: "Rhododendron (Lali Gurans)",
                isCorrect: true,
                icon: "lucide:flower",
              },
              {
                id: "c",
                text: "Sunflower",
                isCorrect: false,
                icon: "lucide:sun",
              },
            ],
            explanation:
              "The Lali Gurans (Rhododendron arboreum) is the national flower. While the red variety is most famous, Nepal has over 30 different species of rhododendrons!",
          },
          {
            id: "nat2",
            type: "multiple-choice",
            question: "Which of these is the national bird of Nepal?",
            mascotComment: "It has beautiful, multi-colored feathers!",
            icon: "lucide:bird",
            options: [
              {
                id: "a",
                text: "Himalayan Monal (Danphe)",
                isCorrect: true,
                icon: "lucide:sparkles",
              },
              {
                id: "b",
                text: "Peacock",
                isCorrect: false,
                icon: "lucide:eye",
              },
              {
                id: "c",
                text: "House Sparrow",
                isCorrect: false,
                icon: "lucide:home",
              },
            ],
            explanation:
              "The Danphe (Himalayan Monal) is known for its stunning metallic plumage. It lives in high-altitude forests and is a symbol of Nepal's natural beauty.",
          },
          {
            id: "nat3",
            type: "multiple-choice",
            question:
              "Which elusive big cat is known as the 'Ghost of the Mountains' in Nepal?",
            mascotComment:
              "They are very hard to spot in the rocky high-Himalayas!",
            icon: "lucide:cat",
            options: [
              {
                id: "a",
                text: "Bengal Tiger",
                isCorrect: false,
                icon: "lucide:flame",
              },
              {
                id: "b",
                text: "Snow Leopard",
                isCorrect: true,
                icon: "lucide:snowflake",
              },
              {
                id: "c",
                text: "Clouded Leopard",
                isCorrect: false,
                icon: "lucide:cloud",
              },
            ],
            explanation:
              "Snow Leopards are perfectly camouflaged for the snowy, rocky terrain of the high Himalayas. Nepal is one of the best places in the world to study them.",
          },
          {
            id: "nat4",
            type: "multiple-choice",
            question:
              "Nepal is one of the last homes for which prehistoric-looking, one-horned animal?",
            mascotComment:
              "You can see them roaming the tall grass in Chitwan!",
            icon: "lucide:shield",
            options: [
              {
                id: "a",
                text: "African Rhino",
                isCorrect: false,
                icon: "lucide:map",
              },
              {
                id: "b",
                text: "Greater One-horned Rhinoceros",
                isCorrect: true,
                icon: "lucide:gem",
              },
              {
                id: "c",
                text: "Wild Yak",
                isCorrect: false,
                icon: "lucide:mountain",
              },
            ],
            explanation:
              "Nepal has had incredible success in conservation, with the population of the Greater One-horned Rhino growing steadily in parks like Chitwan and Bardia.",
          },
          {
            id: "nat5",
            type: "true-false",
            question:
              "The Spiny Babbler is the only bird species found *only* in Nepal (endemic).",
            mascotComment: "It's a very special bird for birdwatchers!",
            icon: "lucide:search",
            options: [
              { id: "a", text: "True", isCorrect: true, icon: "lucide:check" },
              { id: "b", text: "False", isCorrect: false, icon: "lucide:x" },
            ],
            explanation:
              "The Spiny Babbler (Kaande Bhyakur) is indeed endemic to Nepal, meaning it isn't found naturally anywhere else in the world!",
          },
          {
            id: "nat6",
            type: "multiple-choice",
            question:
              "Which of these animals is considered sacred and is the national animal of Nepal?",
            mascotComment: "It's a common sight in both villages and cities.",
            icon: "lucide:beef",
            options: [
              {
                id: "a",
                text: "Elephant",
                isCorrect: false,
                icon: "lucide:tent",
              },
              { id: "b", text: "Cow", isCorrect: true, icon: "lucide:heart" },
              {
                id: "c",
                text: "Water Buffalo",
                isCorrect: false,
                icon: "lucide:droplets",
              },
            ],
            explanation:
              "The cow was officially declared the national animal in the 2015 Constitution. It is revered in Hindu culture and protected by law.",
          },
          {
            id: "nat7",
            type: "multiple-choice",
            question:
              "Which small, reddish-brown animal lives in the bamboo forests of the Himalayas?",
            mascotComment:
              "It looks a bit like a mix between a bear and a cat!",
            icon: "lucide:clover",
            options: [
              {
                id: "a",
                text: "Red Panda",
                isCorrect: true,
                icon: "lucide:radius",
              },
              {
                id: "b",
                text: "Giant Panda",
                isCorrect: false,
                icon: "lucide:circle",
              },
              { id: "c", text: "Fox", isCorrect: false, icon: "lucide:wind" },
            ],
            explanation:
              "Red Pandas (Habre) are shy, arboreal creatures found in the temperate forests of Nepal. They are currently an endangered species.",
          },
          {
            id: "nat8",
            type: "order",
            question:
              "Order these animals by the altitude they typically live in (Lowest to Highest)",
            mascotComment: "From the hot plains to the freezing peaks!",
            icon: "lucide:trending-up",
            options: [
              { id: "a1", text: "Bengal Tiger (Jungle)", icon: "lucide:leaf" },
              {
                id: "a2",
                text: "Red Panda (Hill Forest)",
                icon: "lucide:trees",
              },
              {
                id: "a3",
                text: "Wild Yak (High Himalaya)",
                icon: "lucide:mountain-snow",
              },
            ],
            correctOrder: ["a1", "a2", "a3"],
            explanation:
              "Tigers thrive in the subtropical Terai, Red Pandas in the temperate mid-hills, and Yaks are adapted to the high-altitude alpine zones.",
          },
          {
            id: "nat9",
            type: "true-false",
            question: "Nepal is home to more than 850 species of birds.",
            mascotComment: "That's nearly 10% of the world's bird species!",
            icon: "lucide:binoculars",
            options: [
              { id: "a", text: "True", isCorrect: true, icon: "lucide:check" },
              { id: "b", text: "False", isCorrect: false, icon: "lucide:x" },
            ],
            explanation:
              "Despite its small size, Nepal's varied climate makes it a paradise for birds, ranging from giant vultures to tiny sunbirds.",
          },
          {
            id: "nat10",
            type: "multiple-choice",
            question:
              "What is the name of the fish-eating crocodile with a long, thin snout found in Nepal's rivers?",
            mascotComment: "It looks very different from a regular crocodile!",
            icon: "lucide:waves",
            options: [
              {
                id: "a",
                text: "Mugger Crocodile",
                isCorrect: false,
                icon: "lucide:skull",
              },
              {
                id: "b",
                text: "Gharial",
                isCorrect: true,
                icon: "lucide:fish",
              },
              {
                id: "c",
                text: "Alligator",
                isCorrect: false,
                icon: "lucide:frown",
              },
            ],
            explanation:
              "The Gharial is a critically endangered crocodilian. Nepal has a dedicated breeding center in Chitwan to help save them from extinction.",
          },
        ],
      },
      {
        id: "festivals",
        name: "Spirituality",
        icon: "lucide:sparkles",
        color: "bg-pink-500",
        shadow: "shadow-[0_6px_0_0_rgba(236,72,153,1)]",
        quiz: [
          {
            id: "fest1",
            type: "multiple-choice",
            question:
              "Which is the longest and most important festival celebrated by Hindus in Nepal?",
            mascotComment:
              "It lasts for 15 days and celebrates the victory of good over evil!",
            icon: "lucide:award",
            options: [
              {
                id: "a",
                text: "Holi",
                isCorrect: false,
                icon: "lucide:palette",
              },
              {
                id: "b",
                text: "Dashain",
                isCorrect: true,
                icon: "lucide:tent",
              },
              {
                id: "c",
                text: "Tihar",
                isCorrect: false,
                icon: "lucide:sparkles",
              },
            ],
            explanation:
              "Dashain is the most significant festival in Nepal, symbolizing the victory of Goddess Durga over the demon Mahishasura. It is a time for family reunions and receiving blessings (Tika).",
          },
          {
            id: "fest2",
            type: "multiple-choice",
            question:
              "The festival of Tihar is famous for honoring which of these animals on its second day?",
            mascotComment: "We call them our most loyal friends!",
            icon: "lucide:dog",
            options: [
              { id: "a", text: "Cows", isCorrect: false, icon: "lucide:heart" },
              {
                id: "b",
                text: "Dogs (Kukur Tihar)",
                isCorrect: true,
                icon: "lucide:dog",
              },
              { id: "c", text: "Crows", isCorrect: false, icon: "lucide:bird" },
            ],
            explanation:
              "On the second day of Tihar, known as Kukur Tihar, dogs are worshipped with garlands and delicious food to acknowledge their loyalty and protection.",
          },
          {
            id: "fest3",
            type: "multiple-choice",
            question:
              "Which famous temple in Kathmandu is known as the 'Monkey Temple'?",
            mascotComment:
              "It sits on a hilltop and has a great view of the city!",
            icon: "lucide:mountain",
            options: [
              {
                id: "a",
                text: "Swayambhunath",
                isCorrect: true,
                icon: "lucide:eye",
              },
              {
                id: "b",
                text: "Pashupatinath",
                isCorrect: false,
                icon: "lucide:shrine",
              },
              {
                id: "c",
                text: "Boudhanath",
                isCorrect: false,
                icon: "lucide:circle",
              },
            ],
            explanation:
              "Swayambhunath Stupa is called the Monkey Temple because of the large groups of monkeys that live in the northwest parts of the temple complex.",
          },
          {
            id: "fest4",
            type: "multiple-choice",
            question:
              "Pashupatinath Temple, a major pilgrimage site, is dedicated to which Hindu deity?",
            mascotComment:
              "It's one of the most sacred Shiva temples in the world.",
            icon: "lucide:shrine",
            options: [
              {
                id: "a",
                text: "Lord Vishnu",
                isCorrect: false,
                icon: "lucide:sun",
              },
              {
                id: "b",
                text: "Lord Shiva",
                isCorrect: true,
                icon: "lucide:zap",
              },
              {
                id: "c",
                text: "Lord Krishna",
                isCorrect: false,
                icon: "lucide:music",
              },
            ],
            explanation:
              "Pashupatinath is the oldest Hindu temple in Kathmandu and is dedicated to Lord Shiva in his form as 'Pashupati' (Lord of the Animals).",
          },
          {
            id: "fest5",
            type: "true-false",
            question:
              "The 'Kumari' is the world's only living goddess, found in Nepal.",
            mascotComment: "She lives in a beautiful palace in Basantapur.",
            icon: "lucide:gem",
            options: [
              { id: "a", text: "True", isCorrect: true, icon: "lucide:check" },
              { id: "b", text: "False", isCorrect: false, icon: "lucide:x" },
            ],
            explanation:
              "The Kumari is a young girl selected from the Shakya community and is worshipped as the living reincarnation of the goddess Taleju.",
          },
          {
            id: "fest6",
            type: "multiple-choice",
            question:
              "What are the colorful flags often seen in the mountains and around stupas called?",
            mascotComment: "They spread prayers and peace as the wind blows!",
            icon: "lucide:flag",
            options: [
              {
                id: "a",
                text: "Peace Ribbons",
                isCorrect: false,
                icon: "lucide:wind",
              },
              {
                id: "b",
                text: "Buddhist Prayer Flags",
                isCorrect: true,
                icon: "lucide:sparkles",
              },
              {
                id: "c",
                text: "Climbing Flags",
                isCorrect: false,
                icon: "lucide:mountain",
              },
            ],
            explanation:
              "Prayer flags come in five colors representing the elements (blue, white, red, green, yellow) and are believed to bless the surrounding area.",
          },
          {
            id: "fest7",
            type: "multiple-choice",
            question: "Which festival celebrates the birthday of Lord Buddha?",
            mascotComment: "It is celebrated on a full moon day!",
            icon: "lucide:moon",
            options: [
              {
                id: "a",
                text: "Buddha Jayanti",
                isCorrect: true,
                icon: "lucide:sun",
              },
              {
                id: "b",
                text: "Lhosar",
                isCorrect: false,
                icon: "lucide:calendar",
              },
              {
                id: "c",
                text: "Mani Rimdu",
                isCorrect: false,
                icon: "lucide:drum",
              },
            ],
            explanation:
              "Buddha Jayanti marks the birth, enlightenment, and death of Gautama Buddha. It is celebrated with great devotion in Lumbini and across Nepal.",
          },
          {
            id: "fest8",
            type: "order",
            question: "Order these Tihar celebrations by the day they occur",
            mascotComment: "Tihar lasts for 5 days!",
            icon: "lucide:list-ordered",
            options: [
              {
                id: "t1",
                text: "Kag Tihar (Worshipping Crows)",
                icon: "lucide:bird",
              },
              {
                id: "t2",
                text: "Laxmi Puja (Goddess of Wealth)",
                icon: "lucide:coins",
              },
              {
                id: "t3",
                text: "Bhai Tika (Siblings Day)",
                icon: "lucide:users",
              },
            ],
            correctOrder: ["t1", "t2", "t3"],
            explanation:
              "Tihar starts with Crows (Day 1), then Dogs (Day 2), Cows & Laxmi (Day 3), Oxen/Self (Day 4), and ends with Bhai Tika (Day 5).",
          },
          {
            id: "fest9",
            type: "true-false",
            question:
              "Holi is a festival celebrated only with water and no colors.",
            mascotComment: "It's the most vibrant day of the year!",
            icon: "lucide:droplets",
            options: [
              { id: "a", text: "True", isCorrect: false, icon: "lucide:check" },
              { id: "b", text: "False", isCorrect: true, icon: "lucide:x" },
            ],
            explanation:
              "Holi is the 'Festival of Colors'. While water is used, the main tradition involves throwing colored powders (Abir) to celebrate the arrival of spring.",
          },
          {
            id: "fest10",
            type: "order",
            question:
              "Order these religious sites from the highest altitude to the lowest",
            mascotComment: "From the snowy mountains to the plains!",
            icon: "lucide:trending-down",
            options: [
              {
                id: "s1",
                text: "Muktinath (Mustang)",
                icon: "lucide:mountain-snow",
              },
              {
                id: "s2",
                text: "Boudhanath (Kathmandu)",
                icon: "lucide:circle-dot",
              },
              { id: "s3", text: "Lumbini (Terai)", icon: "lucide:leaf" },
            ],
            correctOrder: ["s1", "s2", "s3"],
            explanation:
              "Muktinath is located at 3,710m, Kathmandu valley is roughly 1,400m, and Lumbini is in the Terai plains at a much lower altitude.",
          },
        ],
      },
    ],
  },
  {
    id: "usa",
    name: "United States of America",
    continent: "Americas",
    tagline: "The largest country",
    stampIcon: "emojione:flag-for-united-states",
    lessons: [],
  },
  {
    id: "japan",
    name: "Japan",
    continent: "Asia",
    tagline: "Land of rising sun",
    stampIcon: "emojione:flag-for-japan",
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
