import {
  Event,
  challange,
  judge,
  momber,
  submetion,
  team,
  participate,
} from "../Models/Model.js";

export const create_data = async () => {
  //teams

  const team1 = await team.create({
    name: "Pixels",
  });
  //   console.log(team1
  const team2 = await team.create({
    name: "MUGIWARA",
  });

  const team3 = await team.create({
    name: "Kunuha",
  });
  const team4 = await team.create({
    name: "bits byte",
  });
  const team5 = await team.create({
    name: "Pandora Reeboot",
  });
  //Members
  const m1 = await momber.create({
    name: "Fatima SENOUCI",
    age: 19,
    phone: "0682478424",
  });

  const m2 = await momber.create({
    name: "amel MESSAOUD",
    age: 19,
    phone: "0682476024",
  });
  const m3 = await momber.create({
    name: "lyna TICEMBAL",
    age: 19,
    phone: "0542476024",
  });
  const m4 = await momber.create({
    name: "manel BOUGRIBA",
    age: 18,
    phone: "0552476024",
  });
  const m5 = await momber.create({
    name: "rayane BOUGERA",
    age: 19,
    phone: "023435646",
  });

  const m6 = await momber.create({
    name: "karima VINSMOK",
    age: 22,
    phone: "0243445455",
  });
  const m7 = await momber.create({
    name: "khaira RORONOUA",
    age: 22,
    phone: "0222476024",
  });
  const m8 = await momber.create({
    name: "nada FARRAH",
    age: 20,
    phone: "0582476024",
  });
  const m9 = await momber.create({
    name: "marwa OUGAB",
    age: 21,
    phone: "0544476024",
  });
  const m10 = await momber.create({
    name: "houda MADJBER",
    age: 23,
    phone: "0582226024",
  });

  const m11 = await momber.create({
    name: "mohamed FARRAH",
    age: 20,
    phone: "072376024",
  });
  const m12 = await momber.create({
    name: "fadi REBBAH",
    age: 22,
    phone: "0692476024",
  });
  const m13 = await momber.create({
    name: "mahdi benzima",
    age: 20,
    phone: "0542476024",
  });
  const m14 = await momber.create({
    name: "suna TICEMBAL",
    age: 19,
    phone: "0782476024",
  });
  const m15 = await momber.create({
    name: "feriel Talbi",
    age: 19,
    phone: "0522476024",
  });
  const m16 = await momber.create({
    name: "racha HALMI",
    age: 21,
    phone: "0552476024",
  });
  const m17 = await momber.create({
    name: "abdellah TATI",
    age: 23,
    phone: "0622476024",
  });
  const m18 = await momber.create({
    name: "karim BENKAHLA",
    age: 19,
    phone: "0782488024",
  });
  const m19 = await momber.create({
    name: "sami ZEMMOURI",
    age: 22,
    phone: "0651476024",
  });
  const m20 = await momber.create({
    name: "kamilia BOUDJELTI",
    age: 24,
    phone: "0662476024",
  });
  const m21 = await momber.create({
    name: "rabiaa BELHADI",
    age: 24,
    phone: "0652476024",
  });
  const m22 = await momber.create({
    name: "malik LOUDINI",
    age: 20,
    phone: "0762476024",
  });
  const m23 = await momber.create({
    name: "lilia ACHOUR",
    age: 21,
    phone: "0512476024",
  });

  //-----------------------------

  //add members to their teams
  await team1.addMombers([
    m1,
    m2,
    m3,
    m4,
    m5,
    // m6,
    // m7,
    // m8,
    // m9,
    // m10,
    // m11,
    // m12,
    // m13,
    // m14,
    // m15,
    // m16,
    // m17,
    // m18,
    // m19,
    // m20,
    // m21,
    // m22,
    // m23,
  ]);

  await team2.addMomber(m6);
  await team2.addMomber(m7);
  await team2.addMomber(m8);
  await team2.addMomber(m9);
  await team2.addMomber(m10);
  await team3.addMomber(m11);
  await team3.addMomber(m12);
  await team3.addMomber(m13);
  await team3.addMomber(m14);
  await team4.addMomber(m15);
  await team4.addMomber(m16);
  await team4.addMomber(m17);
  await team4.addMomber(m18);
  await team4.addMomber(m19);
  await team5.addMomber(m20);
  await team5.addMomber(m21);
  await team5.addMomber(m22);
  await team5.addMomber(m23);

  //Events
  const event1 = await Event.create({
    name: "Awesome Hackathon",
    type: "hackathon",
    description:
      "Join us for an exciting hackathon where developers come together to build innovative projects within a limited time frame. This event is a great opportunity to showcase your coding skills, collaborate with other enthusiasts, and win amazing prizes!",
    location: "Tech Hub Inc.",
    date: new Date("2024-02-15"),
    startTime: new Date("2024-02-15T09:00:00"),
    endTime: new Date("2024-02-15T18:00:00"),
    prize1: 1000,
    prize2: 500,
    prize3: 250,
  });

  const event2 = await Event.create({
    name: "Innovative Workshop",
    type: "workshop",
    description:
      "Join our workshop on the latest technologies and best practices in software development. Experienced speakers will cover a variety of topics, and participants will have the opportunity to engage in hands-on sessions. Don't miss this chance to enhance your skills and network with industry experts!",
    location: "Tech Education Center",
    date: new Date("2024-03-10"),
    startTime: new Date("2024-03-10T13:00:00"),
    endTime: new Date("2024-03-10T17:00:00"),
    prize1: 0,
    prize2: 0,
    prize3: 0,
  });

  const event3 = await Event.create({
    name: "Tech Talk Series: AI Insights",
    type: "talk",
    description:
      "Join our Tech Talk series where leading experts share insights into the fascinating world of Artificial Intelligence. In this session, we will explore the latest trends, real-world applications, and future possibilities of AI. Whether you are a beginner or an experienced professional, this talk is designed to inspire and inform!",
    location: "Digital Innovation Center",
    date: new Date("2024-04-20"),
    startTime: new Date("2024-04-20T18:30:00"),
    endTime: new Date("2024-04-20T20:00:00"),
    prize1: 0,
    prize2: 0,
    prize3: 0,
  });
  const event4 = await Event.create({
    name: "Startup Ideathon",
    type: "ideathon",
    description:
      "Participate in our Startup Ideathon and turn your innovative ideas into reality! This event provides a platform for aspiring entrepreneurs to pitch, collaborate, and bring their startup concepts to life. Join us for an exciting journey of creativity, mentorship, and the chance to win valuable resources to kickstart your startup journey!",
    location: "Entrepreneurship Hub",
    date: new Date("2024-05-15"),
    startTime: new Date("2024-05-15T10:00:00"),
    endTime: new Date("2024-05-15T17:00:00"),
    prize1: 2000,
    prize2: 1000,
    prize3: 500,
  });

  //Challenges

  const ch1 = await challange.create({
    name: "Algorithmic Odyssey",
  });
  const ch2 = await challange.create({
    name: "Data Crunch Challenge",
  });
  const ch3 = await challange.create({
    name: "CodeMasters Clash",
  });
  const ch4 = await challange.create({
    name: "CyberPuzzle Challenge",
  });
  const ch5 = await challange.create({
    name: "NeuralNet Ninja Challenge",
  });
  const ch6 = await challange.create({
    name: "Quantum Coding Quest",
  });
  const ch7 = await challange.create({
    name: "Blockchain Battle Royale",
  });

  //Add challenges to each event

  await event1.addChallange(ch1);
  await event1.addChallange(ch2);
  await event1.addChallange(ch3);
  await event2.addChallange(ch4);
  await event3.addChallange(ch5);
  await event4.addChallange(ch6);
  await event4.addChallange(ch7);

  //---------------------------

  //judge

  const j1 = await judge.create({
    name: "Judge One",
    type: "hackathon",
    description: "Experienced coder with expertise in algorithm design.",
    location: "Tech Arena",
    date: new Date("2024-06-01"),
    startTime: "09:00:00",
    endTime: "17:00:00",
  });
  const j2 = await judge.create({
    name: "Expert Coder",
    type: "hackathon",
    description: "Renowned programmer with a deep understanding of algorithms.",
    location: "Coding Arena",
    date: new Date("2024-06-15"),
    startTime: "10:00:00",
    endTime: "18:00:00",
  });
  const j3 = await judge.create({
    name: "Tech Innovator",
    type: "ideathon",
    description:
      "Innovative thinker with a focus on idea validation and feasibility.",
    location: "Innovation Hub",
    date: new Date("2024-07-01"),
    startTime: "12:00:00",
    endTime: "20:00:00",
  });
  const j4 = await judge.create({
    name: "AI Enthusiast",
    type: "talk",
    description:
      "AI researcher and speaker passionate about the future of artificial intelligence.",
    location: "AI Symposium Hall",
    date: new Date("2024-08-10"),
    startTime: "15:00:00",
    endTime: "17:30:00",
  });
  const j5 = await judge.create({
    name: "Workshop Wizard",
    type: "workshop",
    description:
      "Experienced instructor leading hands-on workshops on coding best practices.",
    location: "Tech Workshop Center",
    date: new Date("2024-09-05"),
    startTime: "09:30:00",
    endTime: "16:30:00",
  });

  //Add judge to events

  //   await event1.addJudge(j1);
  //   await event1.addJudge(j2);
  //   await event1.addJudge(j3);
  //   await event2.addJudge(j1);
  //   await event2.addJudge(j4);
  //   await event3.addJudge(j5);
  //   await event3.addJudge(j2);
  //   await event4.addJudge(j1);

  //-----------------

  //Submissions

  const s1 = await submetion.create({
    note_project: 8,
    date_participate: new Date("2024-08-01"),
    feedback: "Excellent implementation of the project idea. Well done!",
  });

  const s2 = await submetion.create({
    note_project: 6,
    date_participate: new Date("2024-08-01"),
    feedback:
      "Good effort, but consider improving code readability for future submissions.",
  });
  const s3 = await submetion.create({
    note_project: 9,
    date_participate: new Date("2024-08-02"),
    feedback:
      "Outstanding work! Impressed with the creativity and technical depth.",
  });
  const s4 = await submetion.create({
    note_project: 7,
    date_participate: new Date("2024-08-02"),
    feedback:
      "Solid project, but make sure to address the identified security concerns.",
  });
  const s5 = await submetion.create({
    note_project: 8,
    date_participate: new Date("2024-08-03"),
    feedback:
      "Great use of technology. Looking forward to seeing your future projects.",
  });

  //participate

  const p1 = await participate.create({
    date_participate: new Date("2024-08-01"),
  });
  const p2 = await participate.create({
    date_participate: new Date("2024-08-02"),
  });
  const p3 = await participate.create({
    date_participate: new Date("2024-08-03"),
  });
  const p4 = await participate.create({
    date_participate: new Date("2024-08-04"),
  });
  const p5 = await participate.create({
    date_participate: new Date("2024-08-05"),
  });
  const p6 = await participate.create({
    date_participate: new Date("2024-08-06"),
  });
  const p7 = await participate.create({
    date_participate: new Date("2024-08-07"),
  });

  return;
};
