export interface LessonItem {
  id: string;
  title: string;
  durationLabel: string;
  summary: string;
  keyTakeaways: string[];
  videoPlaceholderNote: string;
}

export interface ModuleItem {
  id: string;
  title: string;
  lessons: LessonItem[];
}

export interface ProgramItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Foundations" | "Guided Practice" | "Holistic Wellness" | "Workshops";
  format: "Online Course" | "Live Cohort" | "Guided Series" | "Interactive Workshop";
  demoDuration: string;
  demoScheduleNote: string;
  demoFeeLabel: string;
  level: "All Levels" | "Beginner Friendly" | "Facilitator Track";
  image: string;
  imageAlt: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  whoIsItFor: string[];
  modules: ModuleItem[];
}

export interface LiveSessionItem {
  id: string;
  title: string;
  facilitatorPlaceholder: string;
  demoDateLabel: string;
  demoTimeLabel: string;
  format: "Live Online (Zoom Demo)" | "Interactive Group Practice";
  level: string;
  spotsLabel: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface EventItem {
  id: string;
  title: string;
  demoDateRange: string;
  locationLabel: string;
  type: "Community Circle" | "Weekend Immersion" | "Special Workshop";
  summary: string;
  image: string;
  imageAlt: string;
}

export interface SampleTestimonial {
  id: string;
  quote: string;
  participantPlaceholder: string;
  contextLabel: string;
  isDemoSample: true;
}

export interface AdminStudentRecord {
  id: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  enrolledProgram: string;
  progressPercent: number;
  status: "Active (Demo)" | "Completed (Demo)" | "Pending Invite (Demo)";
  joinedLabel: string;
}

export interface AdminPaymentRecord {
  id: string;
  referenceCode: string;
  studentPlaceholder: string;
  programTitle: string;
  demoAmountLabel: string;
  status: "Simulated Paid" | "Simulated Pending" | "Simulated Refunded";
  dateLabel: string;
  methodPlaceholder: string;
}

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: "prog-1",
    slug: "laughter-yoga-foundations",
    title: "Laughter Yoga Foundations",
    subtitle: "Learn the core principles of intentional laughter, rhythmic breathing, and joyful presence.",
    category: "Foundations",
    format: "Online Course",
    demoDuration: "4 Weeks (Demo Sample)",
    demoScheduleNote: "Self-paced modules + weekly live practice circle (Demo)",
    demoFeeLabel: "Sample Tier • Curriculum Preview",
    level: "Beginner Friendly",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Group of adults smiling and stretching together in a bright, sunlit studio space",
    shortDescription:
      "An accessible introduction to intentional laughter exercises blended with gentle yogic breathing and playful mindfulness.",
    fullDescription:
      "Laughter Yoga Foundations is a demonstration curriculum designed to showcase how Laughter Yogi introduces newcomers to unconditional laughter. Through structured video lessons, gentle breathing sequences, and guided warm-ups, participants explore how joyful movement can become a sustainable daily ritual.",
    highlights: [
      "Step-by-step introduction to intentional laughter and diaphragmatic breathing",
      "Guided audio and video practice sessions for home or workplace breaks",
      "Community reflection prompts to help build a consistent daily joy habit",
      "Downloadable practice companion workbook (Demo Sample Resource)",
    ],
    whoIsItFor: [
      "Individuals seeking a welcoming, non-intimidating entry into laughter yoga",
      "Professionals looking for mindful movement and lightness during busy weeks",
      "Community members eager to practise in a supportive, uplifting environment",
    ],
    modules: [
      {
        id: "mod-1",
        title: "Module 1: The Philosophy of Intentional Joy",
        lessons: [
          {
            id: "les-101",
            title: "Welcome & How Intentional Laughter Works",
            durationLabel: "12 mins (Demo)",
            summary:
              "Explore the origins of laughter yoga and understand how playful group exercises invite genuine connection without requiring comedy or jokes.",
            keyTakeaways: [
              "Distinguishing conditional humour from unconditional, intentional laughter",
              "Creating a comfortable, judgment-free personal practice space",
              "Setting your intention for the four-week foundational journey",
            ],
            videoPlaceholderNote: "Demo Video Stream • Lesson 1.1: Welcome to Laughter Yoga Foundations",
          },
          {
            id: "les-102",
            title: "Gentle Clapping & Rhythmic Warm-Ups",
            durationLabel: "15 mins (Demo)",
            summary:
              "Learn foundational rhythmic clapping and vocal warm-up patterns used to release hesitation and build group energy.",
            keyTakeaways: [
              "Palm-to-palm rhythmic synchronization techniques",
              "Coordinating gentle movement with vocal 'Ho-Ho, Ha-Ha-Ha' cadences",
              "Pacing yourself comfortably during warm-up rounds",
            ],
            videoPlaceholderNote: "Demo Video Stream • Lesson 1.2: Gentle Clapping & Warm-Ups",
          },
        ],
      },
      {
        id: "mod-2",
        title: "Module 2: Yogic Breathing & Grounding",
        lessons: [
          {
            id: "les-201",
            title: "Diaphragmatic Breathing Between Laughter Rounds",
            durationLabel: "18 mins (Demo)",
            summary:
              "Combine upbeat laughter exercises with slow, grounding exhalations to balance energy and cultivate calm awareness.",
            keyTakeaways: [
              "Engaging the diaphragm smoothly without strain",
              "Transitioning from active laughter into quiet grounding breaths",
              "Structuring a 10-minute morning routine at home",
            ],
            videoPlaceholderNote: "Demo Video Stream • Lesson 2.1: Diaphragmatic Breathing",
          },
          {
            id: "les-202",
            title: "Playful Everyday Laughter Exercises",
            durationLabel: "20 mins (Demo)",
            summary:
              "Practise classic guided prompts—such as Greeting Laughter and Appreciation Laughter—designed for everyday settings.",
            keyTakeaways: [
              "Four foundational laughter exercises you can practise anywhere",
              "Maintaining eye contact and warmth in group sessions",
              "Closing a practice session with quiet gratitude",
            ],
            videoPlaceholderNote: "Demo Video Stream • Lesson 2.2: Everyday Laughter Exercises",
          },
        ],
      },
    ],
  },
  {
    id: "prog-2",
    slug: "guided-laughter-sessions",
    title: "Guided Laughter Sessions",
    subtitle: "Regular facilitator-led sessions combining joyful vocal release, gentle stretching, and shared community warmth.",
    category: "Guided Practice",
    format: "Guided Series",
    demoDuration: "Ongoing Weekly Series (Demo Sample)",
    demoScheduleNote: "Flexible morning & evening slots (Sample Schedule)",
    demoFeeLabel: "Sample Membership Tier • Demo Preview",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Group of diverse friends laughing warmly together outdoors in natural golden sunlight",
    shortDescription:
      "Drop into structured, uplifting online sessions led by experienced facilitators to refresh your perspective and connect with others.",
    fullDescription:
      "Guided Laughter Sessions provide a consistent weekly anchor for participants who enjoy practising live with a supportive group. Each session blends gentle warm-up stretches, interactive laughter prompts, and a peaceful closing relaxation segment.",
    highlights: [
      "Live facilitator guidance in an encouraging, camera-friendly setting",
      "Structured 30-minute and 45-minute session formats (Demo Sample)",
      "No prior yoga flexibility or experience required",
      "Access to recorded session replays inside the Student Dashboard demo",
    ],
    whoIsItFor: [
      "Anyone wanting consistent accountability and shared laughter",
      "Remote workers seeking human connection and midday energy renewal",
      "Alumni of foundational courses continuing their regular practice",
    ],
    modules: [
      {
        id: "mod-g1",
        title: "Module 1: Preparing for Live Group Practice",
        lessons: [
          {
            id: "les-g101",
            title: "How Our Guided Online Circles Flow",
            durationLabel: "10 mins (Demo)",
            summary:
              "An overview of session etiquette, audio setup, and how to make the most of interactive live laughter circles.",
            keyTakeaways: [
              "Setting up your camera framing and room space comfortably",
              "How facilitator prompts transition into group laughter rounds",
              "Closing grounding meditation overview",
            ],
            videoPlaceholderNote: "Demo Video Stream • Guided Sessions Orientation",
          },
        ],
      },
    ],
  },
  {
    id: "prog-3",
    slug: "personal-wellness-programs",
    title: "Personal Wellness Programs",
    subtitle: "Holistic routines integrating mindful breathing, reflective journaling, and joyful movement for everyday balance.",
    category: "Holistic Wellness",
    format: "Online Course",
    demoDuration: "6 Weeks (Demo Sample)",
    demoScheduleNote: "Self-paced video lessons + reflection guides (Demo)",
    demoFeeLabel: "Sample Program Tier • Demo Preview",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Woman practising mindful breathing and meditation in a serene sunlit outdoor setting",
    shortDescription:
      "A comprehensive personal journey pairing laughter practices with mindful breathwork, gentle mobility, and daily reflection.",
    fullDescription:
      "Our Personal Wellness Programs are crafted for learners who want to weave laughter yoga into a broader holistic lifestyle. Across six sample modules, participants explore morning breathwork, midday joy resets, and evening wind-down practices.",
    highlights: [
      "Balanced integration of laughter exercises, breathwork, and stillness",
      "Short 10-to-15 minute daily routines designed for realistic schedules",
      "Guided audio reflections and printable habit trackers (Demo Sample)",
      "Self-paced structure with interactive milestone tracking",
    ],
    whoIsItFor: [
      "Learners looking for a structured, multi-week holistic routine",
      "Individuals who appreciate combining upbeat movement with quiet mindfulness",
      "Participants seeking flexible online learning at their own pace",
    ],
    modules: [
      {
        id: "mod-w1",
        title: "Module 1: Designing Your Daily Joy Ritual",
        lessons: [
          {
            id: "les-w101",
            title: "Morning Breath & Lightness Routine",
            durationLabel: "14 mins (Demo)",
            summary:
              "Begin your day with three gentle breathing rounds followed by a two-minute solo laughter warm-up.",
            keyTakeaways: [
              "Anchoring a new habit to your existing morning routine",
              "Gentle neck, shoulder, and ribcage mobility warm-ups",
              "Cultivating warmth and self-kindness during solo practice",
            ],
            videoPlaceholderNote: "Demo Video Stream • Morning Breath & Lightness Routine",
          },
        ],
      },
    ],
  },
  {
    id: "prog-4",
    slug: "live-group-workshops",
    title: "Live Group Workshops",
    subtitle: "Interactive sessions for communities, teams, and groups seeking shared connection and uplifting collaborative experiences.",
    category: "Workshops",
    format: "Interactive Workshop",
    demoDuration: "60–90 Mins (Demo Sample)",
    demoScheduleNote: "Custom group scheduling or monthly open cohorts (Demo)",
    demoFeeLabel: "Custom Group / Cohort Inquiry (Demo)",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Joyful group of people standing in a circle holding hands and laughing together",
    shortDescription:
      "Engaging, facilitator-led group workshops designed to foster connection, ease communication, and bring shared joy to teams and communities.",
    fullDescription:
      "Live Group Workshops bring the collective energy of Laughter Yogi to organizations, community groups, and special gatherings. Each workshop is thoughtfully paced to ensure every participant feels comfortable, included, and energized.",
    highlights: [
      "Tailored icebreakers and collaborative laughter exercises",
      "Available as interactive online sessions or curated group gatherings",
      "Accessible for all ages and physical mobility levels",
      "Includes post-workshop takeaway guide for participants (Demo Sample)",
    ],
    whoIsItFor: [
      "Workplace teams looking for meaningful, human-centered connection",
      "Community organizations, clubs, and wellness retreats",
      "Friends and groups celebrating milestones through shared experiences",
    ],
    modules: [
      {
        id: "mod-wk1",
        title: "Workshop Structure & Flow Preview",
        lessons: [
          {
            id: "les-wk101",
            title: "Inside a 60-Minute Group Laughter Workshop",
            durationLabel: "11 mins (Demo)",
            summary:
              "See how facilitators welcome a group, introduce low-pressure warm-ups, and guide an uplifting shared session.",
            keyTakeaways: [
              "How psychological safety and comfort are established first",
              "Interactive group exercises that work smoothly over video or in person",
              "Closing reflection and takeaway practices",
            ],
            videoPlaceholderNote: "Demo Video Stream • Group Workshop Walkthrough",
          },
        ],
      },
    ],
  },
];

export const LIVE_SESSIONS_DATA: LiveSessionItem[] = [
  {
    id: "sess-1",
    title: "Morning Sun & Intentional Laughter Circle",
    facilitatorPlaceholder: "Lead Facilitator (Sample Profile)",
    demoDateLabel: "Sample Schedule: Every Wednesday (Demo)",
    demoTimeLabel: "8:00 AM – 8:40 AM IST (Demo Placeholder)",
    format: "Live Online (Zoom Demo)",
    level: "All Levels Welcome",
    spotsLabel: "Demo Session • Open for Preview",
    description:
      "Start your mid-week morning with gentle yogic stretching, rhythmic clapping, and 20 minutes of guided group laughter followed by quiet breathing.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Group practising gentle movement in a sunlit room",
  },
  {
    id: "sess-2",
    title: "Weekend Community Joy & Breathwork Reset",
    facilitatorPlaceholder: "Senior Laughter Facilitator (Sample Profile)",
    demoDateLabel: "Sample Schedule: Saturdays (Demo)",
    demoTimeLabel: "10:30 AM – 11:15 AM IST (Demo Placeholder)",
    format: "Interactive Group Practice",
    level: "Beginner Friendly",
    spotsLabel: "Demo Session • Open for Preview",
    description:
      "An uplifting weekend gathering designed to release the week's tension through playful movement, shared laughter exercises, and grounded community connection.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    imageAlt: "People smiling and connecting in an interactive group session",
  },
  {
    id: "sess-3",
    title: "Evening Unwind: Gentle Breath & Mindful Lightness",
    facilitatorPlaceholder: "Guest Wellness Guide (Sample Profile)",
    demoDateLabel: "Sample Schedule: Fridays (Demo)",
    demoTimeLabel: "6:30 PM – 7:10 PM IST (Demo Placeholder)",
    format: "Live Online (Zoom Demo)",
    level: "All Levels Welcome",
    spotsLabel: "Demo Session • Open for Preview",
    description:
      "A softer, restorative session pairing light laughter release with extended diaphragmatic breathing to transition peacefully into the weekend.",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Calm evening meditation and breathing posture",
  },
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: "evt-1",
    title: "Global Laughter & Mindful Connection Gathering (Sample Event)",
    demoDateRange: "Sample Date: Upcoming Season Placeholder",
    locationLabel: "Online Livestream & Interactive Breakout Rooms (Demo)",
    type: "Community Circle",
    summary:
      "A special half-day virtual gathering bringing together participants from across the community for guided laughter sessions, facilitator Q&As, and shared reflection.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Large joyful group smiling and celebrating together",
  },
  {
    id: "evt-2",
    title: "Introduction to Facilitating Joyful Groups (Demo Workshop)",
    demoDateRange: "Sample Date: Monthly Weekend Placeholder",
    locationLabel: "Interactive Online Workshop (Demo)",
    type: "Special Workshop",
    summary:
      "Explore how group leaders, educators, and wellness enthusiasts hold welcoming spaces and introduce laughter yoga principles to their own communities.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Workshop participants collaborating around a table with warm expressions",
  },
];

export const SAMPLE_TESTIMONIALS: SampleTestimonial[] = [
  {
    id: "test-1",
    quote:
      "Sample testimonial placeholder illustrating how a participant might describe feeling welcomed, at ease, and uplifted after joining weekly guided laughter sessions.",
    participantPlaceholder: "Sample Participant A • Community Member (Demo Content)",
    contextLabel: "Guided Laughter Sessions Preview",
    isDemoSample: true,
  },
  {
    id: "test-2",
    quote:
      "Sample testimonial placeholder highlighting the clarity of the self-paced video modules and how easy it is to weave ten minutes of joyful breathing into a busy routine.",
    participantPlaceholder: "Sample Learner B • Online Course Preview (Demo Content)",
    contextLabel: "Laughter Yoga Foundations Preview",
    isDemoSample: true,
  },
  {
    id: "test-3",
    quote:
      "Sample testimonial placeholder representing feedback from a team workshop coordinator on how the interactive session fostered genuine warmth and connection.",
    participantPlaceholder: "Sample Coordinator C • Workshop Preview (Demo Content)",
    contextLabel: "Live Group Workshops Preview",
    isDemoSample: true,
  },
];

export const ADMIN_STUDENTS_SAMPLE: AdminStudentRecord[] = [
  {
    id: "stu-01",
    namePlaceholder: "Aarav Mehta (Demo Learner)",
    emailPlaceholder: "aarav.demo@example.com",
    enrolledProgram: "Laughter Yoga Foundations",
    progressPercent: 75,
    status: "Active (Demo)",
    joinedLabel: "Sample Entry • Cycle 1",
  },
  {
    id: "stu-02",
    namePlaceholder: "Meera Krishnan (Demo Learner)",
    emailPlaceholder: "meera.demo@example.com",
    enrolledProgram: "Personal Wellness Programs",
    progressPercent: 100,
    status: "Completed (Demo)",
    joinedLabel: "Sample Entry • Cycle 1",
  },
  {
    id: "stu-03",
    namePlaceholder: "Rohan Kapoor (Demo Learner)",
    emailPlaceholder: "rohan.demo@example.com",
    enrolledProgram: "Guided Laughter Sessions",
    progressPercent: 40,
    status: "Active (Demo)",
    joinedLabel: "Sample Entry • Cycle 2",
  },
  {
    id: "stu-04",
    namePlaceholder: "Ananya Desai (Demo Learner)",
    emailPlaceholder: "ananya.demo@example.com",
    enrolledProgram: "Live Group Workshops",
    progressPercent: 15,
    status: "Pending Invite (Demo)",
    joinedLabel: "Sample Entry • Cycle 2",
  },
];

export const ADMIN_PAYMENTS_SAMPLE: AdminPaymentRecord[] = [
  {
    id: "pay-101",
    referenceCode: "DEMO-TXN-8841",
    studentPlaceholder: "Aarav Mehta (Demo Record)",
    programTitle: "Laughter Yoga Foundations",
    demoAmountLabel: "Sample Tier Unit (Demo Only)",
    status: "Simulated Paid",
    dateLabel: "Sample Log #01",
    methodPlaceholder: "Demo Gateway Preview",
  },
  {
    id: "pay-102",
    referenceCode: "DEMO-TXN-8842",
    studentPlaceholder: "Meera Krishnan (Demo Record)",
    programTitle: "Personal Wellness Programs",
    demoAmountLabel: "Sample Tier Unit (Demo Only)",
    status: "Simulated Paid",
    dateLabel: "Sample Log #02",
    methodPlaceholder: "Demo Gateway Preview",
  },
  {
    id: "pay-103",
    referenceCode: "DEMO-TXN-8843",
    studentPlaceholder: "Ananya Desai (Demo Record)",
    programTitle: "Live Group Workshops",
    demoAmountLabel: "Sample Group Unit (Demo Only)",
    status: "Simulated Pending",
    dateLabel: "Sample Log #03",
    methodPlaceholder: "Demo Invoice Preview",
  },
];
