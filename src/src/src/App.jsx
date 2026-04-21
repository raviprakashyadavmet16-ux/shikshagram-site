import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  ArrowRight,
  GraduationCap,
  Users,
  MapPin,
  Phone,
  Mail,
  BadgeIndianRupee,
  CheckCircle2,
  BookOpen,
  School,
  Target,
  Sparkles,
  Image as ImageIcon,
  Quote,
  Sun,
  Landmark,
  Stars,
  HandHeart,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const heroImages = [
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1600&q=80",
];

const sectionImages = {
  about:
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=80",
  problem:
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=80",
  mission:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
  initiative:
    "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=80",
  impact:
    "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=80",
};

const galleryImages = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80",
];

const team = [
  { name: "Balram Yadav", role: "President" },
  { name: "Meera Devi", role: "Vice President" },
  { name: "Er. Satya Yadav", role: "Treasurer" },
  { name: "Er. Ravi Prakash Yadav", role: "Member" },
  { name: "Varun Yadav", role: "Member" },
  { name: "Er. Sushmita Yadav", role: "Member" },
  { name: "Preeti Yadav", role: "Member" },
  { name: "Community Mentor 1", role: "Member" },
  { name: "Community Mentor 2", role: "Member" },
  { name: "Education Support Lead", role: "Member" },
];

const stats = [
  { label: "Villages in Phase 1", value: "10+" },
  { label: "Vision", value: "Quality Rural Education" },
  { label: "Focus", value: "Girls & Boys Both" },
  { label: "Approach", value: "Affordable + Modern" },
];

const problems = [
  "Many rural students struggle with strong reading and math foundations.",
  "Quality learning opportunities are often determined by location, not talent.",
  "Many families want better education, but access remains limited.",
  "Children need exposure, confidence, and guidance to dream bigger.",
];

const missionCards = [
  {
    icon: GraduationCap,
    title: "Strong Learning Foundation",
    text: "Build academic confidence through better classroom experiences and child-first learning.",
  },
  {
    icon: Sparkles,
    title: "Modern Teaching Methods",
    text: "Bring structured, engaging, and technology-enabled education closer to rural communities.",
  },
  {
    icon: Users,
    title: "Equal Opportunity",
    text: "Ensure girls and boys in villages get access to education that opens real future pathways.",
  },
  {
    icon: Target,
    title: "Long-Term Transformation",
    text: "Create a scalable model that can uplift more villages over time through education.",
  },
];

const initiatives = [
  "English-medium learning environment",
  "Affordable and growth-focused education",
  "Student confidence, discipline, and communication",
  "Urban-quality academic exposure in a rural setting",
];

const roadmapItems = [
  {
    phase: "Foundation Phase",
    time: "From June 2026",
    title: "Construction of the UPS campus begins",
    text: "Shikshagram Foundation begins the construction of its first school campus to create a strong physical foundation for long-term rural education impact.",
  },
  {
    phase: "School Readiness",
    time: "January 2027",
    title: "First school campus targeted to be ready",
    text: "The first school under Shikshagram Foundation — UPS, Urban Public School — is planned to be ready to welcome students and begin its first chapter of transformation.",
  },
  {
    phase: "Admission Window",
    time: "March 2027 to May 2027",
    title: "Admissions open from LKG to 12th Class",
    text: "The first admission cycle is planned for students from LKG to 12th, bringing a broad and inclusive learning opportunity to the region.",
  },
  {
    phase: "Phase 1 Outreach",
    time: "Year 1 Target",
    title: "Serve the first 10 villages",
    text: "The immediate focus is to reach students and families across 10 nearby villages and establish UPS as a trusted center of quality education.",
  },
  {
    phase: "Expansion Journey",
    time: "From Year 2 Onwards",
    title: "Expand outreach to the next 10 villages",
    text: "After establishing the first phase, the foundation aims to expand its reach further and gradually take quality education to more rural communities.",
  },
];

const quoteCards = [
  {
    name: "महात्मा गांधी",
    line: "ऐसे जियो जैसे कि तुम कल मरने वाले हो, ऐसे सीखो जैसे कि तुम हमेशा जीने वाले हो।",
  },
  {
    name: "डॉ. भीमराव आंबेडकर",
    line: "शिक्षित बनो, संगठित रहो, संघर्ष करो।",
  },
  {
    name: "डॉ. ए. पी. जे. अब्दुल कलाम",
    line: "सपने वो नहीं जो आप सोते समय देखते हैं, सपने वो हैं जो आपको सोने न दें।",
  },
  {
    name: "स्वामी विवेकानंद",
    line: "उठो, जागो और तब तक मत रुको जब तक लक्ष्य प्राप्त न हो जाए।",
  },
];

const roadmapQuote = "परिवर्तन एक दिन में नहीं आता, उसे समय, संकल्प और सतत प्रयास चाहिए। शिख्षाग्राम फाउंडेशन का उद्देश्य हर विद्यार्थी तक ऐसी मूल्यवान शिक्षा पहुँचाना है, ताकि कोई भी बच्चा शिक्षा की कमी के कारण अपने सपनों, अपनी प्रतिभा और अपनी क्षमता को कभी न छोड़े।";

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <div className="mb-3 inline-flex items-center rounded-full border border-amber-200/40 bg-white/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-700 backdrop-blur-sm">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg">{text}</p> : null}
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-sm font-medium text-slate-700 transition hover:text-emerald-700">
      {children}
    </a>
  );
}

function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8%] top-16 h-44 w-44 rounded-full bg-emerald-300/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 26, 0], x: [0, -18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-40 h-56 w-56 rounded-full bg-sky-300/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -22, 0], x: [0, 24, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-[30%] h-52 w-52 rounded-full bg-amber-300/20 blur-3xl"
      />
    </div>
  );
}

export default function ShikshagramFoundationWebsite() {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState("");
  const [donor, setDonor] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const donationAmount = useMemo(() => {
    if (customAmount && Number(customAmount) > 0) return Number(customAmount);
    return selectedAmount;
  }, [customAmount, selectedAmount]);

  const handleInputChange = (key, value) => {
    setDonor((prev) => ({ ...prev, [key]: value }));
  };

  const handleDonate = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fffaf0_0%,#f7fbf7_32%,#eef8ff_65%,#fff7ed_100%)] text-slate-900">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.22),_transparent_24%),radial-gradient(circle_at_right,_rgba(16,185,129,0.16),_transparent_24%),radial-gradient(circle_at_left_bottom,_rgba(59,130,246,0.14),_transparent_24%)]" />

      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 ring-1 ring-emerald-200">
              <Heart className="h-5 w-5 text-emerald-700" />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Shikshagram Foundation</div>
              <div className="text-xs text-slate-500">Education for Rural Futures</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 lg:flex">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#mission">Mission</NavLink>
            <NavLink href="#initiative">UPS</NavLink>
            <NavLink href="#quotes">Quotes</NavLink>
            <NavLink href="#team">Team</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#donate">Donate</NavLink>
            <Button className="rounded-full bg-emerald-600 px-5 text-white hover:bg-emerald-700">
              Donate Now
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <FloatingOrbs />
        <div className="absolute inset-0">
          {heroImages.map((src, idx) => (
            <div
              key={src}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${idx === activeImage ? "scale-105 opacity-100" : "scale-100 opacity-0"}`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          <div className="absolute inset-0 bg-white/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/35 to-[#fffaf0]" />
        </div>

        <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 shadow-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4" /> Mission-First Rural Education Movement
            </div>
            <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl lg:text-7xl">
              हर गाँव से <span className="text-emerald-700">उठेगा</span> एक सपना
            </h1>
            <p className="mt-6 text-xl font-medium text-slate-800 md:text-2xl">
              Bringing Quality Education to Every Rural Child
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700 md:text-lg">
              Shikshagram Foundation is building a future where girls and boys in rural India receive the quality of education, exposure, and confidence they deserve.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="rounded-full bg-emerald-600 px-7 py-6 text-base font-semibold text-white hover:bg-emerald-700">
                Donate Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-full border-slate-300 bg-white/70 px-7 py-6 text-base text-slate-900 hover:bg-white">
                Join Our Mission
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <Card key={item.label} className="rounded-3xl border-white/60 bg-white/70 shadow-md backdrop-blur-md">
                  <CardContent className="p-5">
                    <div className="text-2xl font-bold text-slate-900">{item.value}</div>
                    <div className="mt-1 text-sm text-slate-600">{item.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:justify-self-end"
          >
            <Card className="overflow-hidden rounded-[2rem] border-white/60 bg-white/72 shadow-2xl shadow-amber-200/50 backdrop-blur-2xl">
              <CardContent className="p-0">
                <img src={sectionImages.mission} alt="Children studying" className="h-60 w-full object-cover" />
                <div className="border-b border-slate-200/70 p-6">
                  <div className="flex items-center gap-3 text-emerald-700">
                    <BookOpen className="h-5 w-5" />
                    <span className="text-sm font-semibold uppercase tracking-[0.2em]">Our Promise</span>
                  </div>
                  <p className="mt-4 text-2xl font-semibold leading-snug text-slate-900">
                    Education should not depend on where a child is born.
                  </p>
                </div>
                <div className="grid gap-4 p-6">
                  {[
                    "Mission-centered nonprofit identity",
                    "Visual focus on rural Indian children",
                    "Functional donation experience",
                    "Community-driven education model",
                  ].map((line) => (
                    <div key={line} className="flex items-start gap-3 rounded-2xl bg-emerald-50 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                      <p className="text-sm leading-6 text-slate-700">{line}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="The Challenge"
              title="The reality of rural education needs action, not sympathy."
              text="The potential of rural children is immense. What is often missing is consistent access to quality learning, support, exposure, and the right environment."
            />
            <Card className="mt-8 overflow-hidden rounded-[2rem] border-white/50 bg-white/75 shadow-md">
              <CardContent className="p-0">
                <img src={sectionImages.problem} alt="Rural education challenge" className="h-[340px] w-full object-cover" />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4">
            {problems.map((problem, idx) => (
              <motion.div
                key={problem}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="rounded-3xl border border-white/50 bg-white/75 p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-2xl bg-amber-100 p-2 text-amber-700">
                    <Target className="h-5 w-5" />
                  </div>
                  <p className="text-base leading-7 text-slate-700">{problem}</p>
                </div>
              </motion.div>
            ))}
            <Card className="rounded-3xl border-emerald-200 bg-gradient-to-r from-emerald-50 to-sky-50 shadow-sm">
              <CardContent className="p-6">
                <p className="text-xl font-semibold text-slate-900 md:text-2xl">
                  “Dreams are not small… opportunities are.”
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="mission" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our Mission"
              title="What Shikshagram is building for rural India"
              text="A modern, compassionate, scalable education movement where mission, community, and child growth stay at the center."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {missionCards.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <Card className="group h-full rounded-[2rem] border-white/50 bg-white/75 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <CardContent className="p-7">
                        <div className="mb-5 inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-700 transition group-hover:scale-105">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="space-y-6">
            <Card className="overflow-hidden rounded-[2rem] border-white/50 bg-white/75 shadow-md">
              <CardContent className="p-0">
                <img src={sectionImages.mission} alt="Mission image" className="h-[280px] w-full object-cover" />
              </CardContent>
            </Card>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] border border-white/50 bg-white/70 p-6 shadow-md"
            >
              <div className="flex items-center gap-3 text-emerald-700">
                <Sun className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">Premium Motion Block</span>
              </div>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Subtle premium motion, floating gradients, animated cards, and smooth section transitions are added throughout the website to make the experience feel energetic and high-end.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/50 bg-gradient-to-r from-amber-50 via-white to-emerald-50 p-8 shadow-lg md:p-12">
          <FloatingOrbs />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                <Stars className="h-4 w-4" /> Inspiring Vision
              </div>
              <h3 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
                शिक्षा केवल पढ़ाई नहीं, बल्कि भविष्य की दिशा है।
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700">
                Every child deserves an environment where curiosity grows, confidence develops, and dreams get a real path.
              </p>
            </div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="justify-self-start lg:justify-self-end"
            >
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white/80 shadow-xl ring-1 ring-amber-200">
                <HandHeart className="h-12 w-12 text-emerald-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="Shikshagram Foundation"
              text="Established in May 2026, Shikshagram Foundation is focused on transforming rural education through purpose-led action, stronger learning environments, and long-term village impact."
            />
            <div className="mt-8 grid gap-4">
              {[
                "Mission-first identity with community-centered work",
                "Focus on children, learning quality, and future readiness",
                "Designed to grow from one region to many villages over time",
              ].map((line) => (
                <div key={line} className="flex items-start gap-3 rounded-2xl border border-white/50 bg-white/75 p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <span className="text-sm leading-7 text-slate-700">{line}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <Card className="overflow-hidden rounded-[2rem] border-white/50 bg-white/75 shadow-md">
              <CardContent className="p-0">
                <img
                  src={sectionImages.about}
                  alt="Students learning together"
                  className="h-[300px] w-full object-cover"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden rounded-[2rem] border-white/50 bg-white/75 shadow-md">
              <CardContent className="p-0">
                <img
                  src={galleryImages[6]}
                  alt="Children smiling"
                  className="h-[220px] w-full object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="initiative" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Card className="overflow-hidden rounded-[2rem] border-white/50 bg-white/75 shadow-md order-2 lg:order-1">
            <CardContent className="p-0">
              <div className="flex h-full min-h-[470px] flex-col justify-between bg-[linear-gradient(135deg,rgba(16,185,129,0.08),rgba(59,130,246,0.08),rgba(251,191,36,0.08))] p-8">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    <School className="h-4 w-4" /> Flagship Initiative
                  </div>
                  <h3 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">UPS — Urban Public School</h3>
                  <p className="mt-4 text-base leading-8 text-slate-700">
                    A school initiative designed to deliver urban-quality education in a rural setting with a strong foundation, discipline, confidence, and student growth at its heart.
                  </p>
                </div>
                <div className="mt-8 grid gap-3">
                  {initiatives.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/60 bg-white/80 p-4 text-sm text-slate-700 shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Where Change Begins"
              title="An education initiative built for real rural impact"
              text="UPS aims to serve as the first strong step in demonstrating what a high-quality, affordable, growth-oriented learning environment can look like for village children."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                [MapPin, "Location", "Jagdishpur Gaura, Hariharpur, Sant Kabir Nagar, Uttar Pradesh"],
                [GraduationCap, "Classes", "From LKG to 12th"],
                [Sparkles, "Teaching", "Modern, structured, and student-focused"],
                [BadgeIndianRupee, "Approach", "Affordable education with long-term vision"],
              ].map(([Icon, title, text]) => (
                <Card key={title} className="rounded-3xl border-white/50 bg-white/75 shadow-sm">
                  <CardContent className="p-5">
                    <Icon className="h-5 w-5 text-emerald-700" />
                    <div className="mt-3 text-sm font-semibold text-slate-900">{title}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">{text}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="mt-5 overflow-hidden rounded-[2rem] border-white/50 bg-white/75 shadow-md">
              <CardContent className="p-0">
                <img src={sectionImages.initiative} alt="School initiative" className="h-[220px] w-full object-cover" />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2.5rem] border border-white/60 bg-gradient-to-br from-white via-amber-50/70 to-emerald-50/80 p-8 shadow-lg md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                <Stars className="h-4 w-4" /> UPS Roadmap
              </div>
              <h3 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
                Roadmap of Shikshagram Foundation for the next 5 years
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-700">
                The journey begins with one school, one region, and one strong commitment — to gradually build meaningful educational transformation across villages through UPS, Urban Public School.
              </p>

              <div className="mt-8 rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-sm">
                <div className="flex items-center gap-3 text-emerald-700">
                  <Quote className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">Vision Line</span>
                </div>
                <p className="mt-4 text-lg leading-9 text-slate-700 md:text-xl">
                  {roadmapQuote}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-[22px] top-4 hidden h-[calc(100%-2rem)] w-1 rounded-full bg-gradient-to-b from-amber-300 via-emerald-300 to-sky-300 md:block" />
              <div className="space-y-5">
                {roadmapItems.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.45 }}
                    className="relative pl-0 md:pl-14"
                  >
                    <div className="absolute left-0 top-6 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-emerald-500 text-white shadow-lg md:flex">
                      {idx + 1}
                    </div>
                    <Card className="rounded-[1.8rem] border-white/60 bg-white/85 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <CardContent className="p-6 md:p-7">
                        <div className="flex flex-wrap items-center gap-3">
                          <div className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                            {item.phase}
                          </div>
                          <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                            {item.time}
                          </div>
                        </div>
                        <h4 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h4>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quotes" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="प्रेरक विचार"
          title="शिक्षा पर महान व्यक्तियों के प्रेरणादायक विचार"
          text="These lines add emotional depth and cultural connection to the website, while reinforcing the value of education in a powerful and elegant way."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {quoteCards.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
            >
              <Card className="h-full rounded-[2rem] border-white/50 bg-white/80 shadow-md">
                <CardContent className="p-7">
                  <div className="mb-4 inline-flex rounded-2xl bg-amber-100 p-3 text-amber-700">
                    <Landmark className="h-6 w-6" />
                  </div>
                  <p className="text-base leading-8 text-slate-700">“{item.line}”</p>
                  <div className="mt-5 text-sm font-semibold text-emerald-700">— {item.name}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Impact Vision"
              title="The kind of change we want to see"
              text="Not just enrolled students — but confident children with stronger basics, bigger aspirations, and a pathway to opportunities they can truly pursue."
            />
            <Card className="mt-8 overflow-hidden rounded-[2rem] border-white/50 bg-white/75 shadow-md">
              <CardContent className="p-0">
                <img src={sectionImages.impact} alt="Impact vision" className="h-[330px] w-full object-cover" />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-1">
            {[
              "Children who speak with confidence and learn with curiosity",
              "Girls and boys who gain real academic strength and exposure",
              "Villages where education starts shaping long-term transformation",
            ].map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <Card className="h-full rounded-[2rem] border-white/50 bg-white/80 shadow-sm">
                  <CardContent className="p-7">
                    <div className="mb-4 inline-flex rounded-2xl bg-sky-100 p-3 text-sky-700">
                      <Heart className="h-6 w-6" />
                    </div>
                    <p className="text-base leading-8 text-slate-700">{item}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
        <Card className="rounded-[2rem] border-white/50 bg-white/80 shadow-md">
          <CardContent className="p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                <Quote className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg leading-8 text-slate-700 md:text-xl">
                  “I have seen the potential of rural students closely. They do not lack talent — they lack the right environment. Shikshagram is an effort to change that reality.”
                </p>
                <div className="mt-4 text-sm font-semibold text-slate-900">Er. Ravi Prakash Yadav</div>
                <div className="text-sm text-slate-500">Member • IIT BHU</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="team" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Our Team"
          title="A shared mission, guided by committed members"
          text="The foundation is presented as a collective effort built on trust, responsibility, and long-term commitment to education."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {team.map((person, idx) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
            >
              <Card className="overflow-hidden rounded-[1.8rem] border-white/50 bg-white/80 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="flex aspect-[4/4.4] items-center justify-center bg-[linear-gradient(135deg,rgba(16,185,129,0.14),rgba(59,130,246,0.12),rgba(251,191,36,0.12))]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/70 text-slate-700 shadow-md">
                      <Users className="h-9 w-9" />
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-base font-semibold text-slate-900">{person.name}</div>
                    <div className="mt-1 text-sm text-emerald-700">{person.role}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

            <section id="partners" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeading
          eyebrow="Associated Partners"
          title="Organizations Supporting Our Mission"
          text="Our journey is strengthened by partners who believe in transforming rural education and empowering future generations."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            { name: "RJBD Traders", logo: "https://via.placeholder.com/200x100?text=RJBD+Traders" },
            { name: "THXYETA Private Limited", logo: "https://via.placeholder.com/200x100?text=THXYETA+Pvt+Ltd" },
          ].map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="flex h-full items-center justify-center rounded-[2rem] border-white/50 bg-white/80 p-6 shadow-md transition hover:shadow-lg">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-0">
                  <img src={partner.logo} alt={partner.name} className="h-16 object-contain" />
                  <div className="text-sm font-semibold text-slate-800">{partner.name}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="A visual story of hope, learning, and rural potential"
          text="This section is designed to be replaced with your own NGO and student images later, while keeping a premium gallery experience in place."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`${idx % 5 === 0 ? "md:col-span-2" : ""}`}
            >
              <div className="group relative h-full min-h-[220px] overflow-hidden rounded-[1.8rem] border border-white/50 bg-white/70 shadow-sm">
                <img src={src} alt="Gallery visual" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="donate" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Donation"
              title="Support a child’s future"
              text="This donation experience is built as a real conversion-ready module. You can later connect Razorpay, UPI QR, or another payment gateway in production."
            />
            <div className="mt-8 grid gap-4">
              {[
                "Transparent, trust-first presentation",
                "Preset and custom donation values",
                "Ready for UPI, cards, net banking, or Razorpay integration",
                "Thank-you state and donor acknowledgment flow",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/50 bg-white/80 p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Students Supported", "Growing"],
                ["Villages Covered", "Phase 1"],
                ["Fund Usage", "Education & Infrastructure"],
              ].map(([label, value]) => (
                <Card key={label} className="rounded-3xl border-white/50 bg-white/80 shadow-sm">
                  <CardContent className="p-5">
                    <div className="text-lg font-bold text-slate-900">{value}</div>
                    <div className="mt-1 text-sm text-slate-600">{label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="rounded-[2rem] border-white/50 bg-white/85 shadow-2xl shadow-emerald-100 backdrop-blur-2xl">
            <CardContent className="p-8">
              {!submitted ? (
                <form onSubmit={handleDonate} className="space-y-6">
                  <div>
                    <div className="text-lg font-semibold text-slate-900">Choose donation amount</div>
                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {[100, 500, 1000, 2500].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(amount);
                            setCustomAmount("");
                          }}
                          className={`rounded-2xl border px-4 py-4 text-sm font-semibold transition ${
                            donationAmount === amount && !customAmount
                              ? "border-emerald-300 bg-emerald-100 text-emerald-800"
                              : "border-slate-200 bg-white text-slate-700 hover:bg-emerald-50"
                          }`}
                        >
                          ₹{amount}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-600">Custom Amount</label>
                    <Input
                      type="number"
                      placeholder="Enter custom donation amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="h-12 rounded-2xl border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-slate-600">Full Name</label>
                      <Input
                        required
                        value={donor.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="h-12 rounded-2xl border-slate-200 bg-white text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-slate-600">Email</label>
                      <Input
                        required
                        type="email"
                        value={donor.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="h-12 rounded-2xl border-slate-200 bg-white text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-600">Phone Number</label>
                    <Input
                      required
                      value={donor.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="h-12 rounded-2xl border-slate-200 bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-600">Message (Optional)</label>
                    <Textarea
                      rows={4}
                      value={donor.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="rounded-2xl border-slate-200 bg-white text-slate-900"
                    />
                  </div>

                  <div className="rounded-2xl border border-dashed border-slate-300 bg-amber-50 p-5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                      <ImageIcon className="h-4 w-4 text-emerald-700" /> UPI QR Placeholder
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Add your live UPI QR code or connect Razorpay/Stripe here during deployment.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-800">
                    <span className="font-semibold">100% Transparent Usage:</span> Funds are presented as supporting education access, learning infrastructure, and student growth initiatives.
                  </div>

                  <Button type="submit" className="h-14 w-full rounded-2xl bg-emerald-600 text-base font-semibold text-white hover:bg-emerald-700">
                    Donate ₹{donationAmount > 0 ? donationAmount : 0}
                  </Button>
                </form>
              ) : (
                <div className="flex min-h-[580px] flex-col items-center justify-center text-center">
                  <div className="rounded-full bg-emerald-100 p-4 text-emerald-700">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="mt-6 text-3xl font-bold text-slate-900">Thank you for your support</h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                    Your contribution helps strengthen the mission of delivering better education opportunities to children in rural communities.
                  </p>
                  <div className="mt-6 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700">
                    Donation Intent: <span className="font-semibold text-slate-900">₹{donationAmount}</span>
                  </div>
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-6 rounded-full border-slate-300 bg-white text-slate-900 hover:bg-slate-50">
                    Make Another Donation
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/60 bg-[linear-gradient(135deg,rgba(16,185,129,0.14),rgba(59,130,246,0.12),rgba(251,191,36,0.16),rgba(255,255,255,0.8))] p-8 shadow-lg md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Final Call
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                You can be the reason someone dreams bigger.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700 md:text-lg">
                Join a mission designed to strengthen rural education with dignity, quality, and hope.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full bg-emerald-600 px-7 py-6 text-base font-semibold text-white hover:bg-emerald-700">
                Donate Now
              </Button>
              <Button variant="outline" className="rounded-full border-slate-300 bg-white/80 px-7 py-6 text-base text-slate-900 hover:bg-white">
                Become a Volunteer
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/50 bg-white/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="text-lg font-semibold text-slate-900">Shikshagram Foundation</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A mission-driven foundation focused on shaping stronger educational futures for rural India.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">Quick Links</div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <a href="#about" className="block hover:text-emerald-700">About Us</a>
              <a href="#mission" className="block hover:text-emerald-700">Mission</a>
              <a href="#initiative" className="block hover:text-emerald-700">UPS</a>
              <a href="#donate" className="block hover:text-emerald-700">Donate</a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">Contact</div>
            <div className="mt-4 space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-emerald-700" />
                <span>Navodaya Vidyalaya ke samne, Jagdishpur Gaura, Hariharpur, Sant Kabir Nagar, Uttar Pradesh</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-emerald-700" />
                <span>+91 95695 78504</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-emerald-700" />
                <span>contact@shikshagramfoundation.org</span>
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">Donation Note</div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Connect your live payment gateway and QR code before publishing. This preview already includes the complete donation UX and form flow.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
