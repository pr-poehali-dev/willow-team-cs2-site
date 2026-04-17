import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_BG =
  "https://cdn.poehali.dev/projects/7d374dfc-1b0a-4d8a-b926-d222d2f9ce69/files/3a965bbf-3d41-4b1c-8f5e-60ecbf1c44ba.jpg";
const PLAYER_IMG =
  "https://cdn.poehali.dev/projects/7d374dfc-1b0a-4d8a-b926-d222d2f9ce69/files/f7fc64fa-25f4-4fa7-a065-8c04aae4f385.jpg";

const players = [
  {
    id: 1,
    nickname: "PHANTOM",
    name: "Алексей Морозов",
    role: "Entry Fragger",
    country: "🇷🇺",
    rating: 1.24,
    kd: 1.41,
    adr: 84.3,
    hs: 52,
    maps: 187,
    wins: 112,
    img: PLAYER_IMG,
  },
  {
    id: 2,
    nickname: "SHADE",
    name: "Дмитрий Ветров",
    role: "AWPer",
    country: "🇷🇺",
    rating: 1.31,
    kd: 1.55,
    adr: 79.8,
    hs: 34,
    maps: 203,
    wins: 128,
    img: PLAYER_IMG,
  },
  {
    id: 3,
    nickname: "IRONWILL",
    name: "Никита Захаров",
    role: "IGL",
    country: "🇧🇾",
    rating: 1.08,
    kd: 1.12,
    adr: 71.2,
    hs: 41,
    maps: 215,
    wins: 134,
    img: PLAYER_IMG,
  },
  {
    id: 4,
    nickname: "GHOST",
    name: "Артём Силин",
    role: "Support",
    country: "🇺🇦",
    rating: 1.15,
    kd: 1.22,
    adr: 68.9,
    hs: 47,
    maps: 179,
    wins: 108,
    img: PLAYER_IMG,
  },
  {
    id: 5,
    nickname: "VIPER",
    name: "Кирилл Тёмин",
    role: "Lurker",
    country: "🇷🇺",
    rating: 1.19,
    kd: 1.28,
    adr: 76.5,
    hs: 55,
    maps: 191,
    wins: 118,
    img: PLAYER_IMG,
  },
];

const news = [
  {
    id: 1,
    date: "14 апр 2025",
    tag: "МАТЧ",
    title: "Willow Team выходит в финал ESL Challenger",
    desc: "После напряжённой серии 2-1 против NAVI Junior мы пробились в финал. PHANTOM закончил матч с рейтингом 1.43.",
  },
  {
    id: 2,
    date: "9 апр 2025",
    tag: "СОСТАВ",
    title: "VIPER официально подписан в основной состав",
    desc: "Рады объявить, что Кирилл «VIPER» Тёмин стал полноправным членом Willow Team после успешного пробного периода.",
  },
  {
    id: 3,
    date: "3 апр 2025",
    tag: "ТУРНИР",
    title: "Willow Team на BLAST Premier Spring 2025",
    desc: "Команда квалифицировалась на престижный турнир. Старт 20 апреля, группа B.",
  },
];

const achievements = [
  { place: "1", event: "ESL Challenger RU", date: "Mar 2025", prize: "$15,000" },
  { place: "2", event: "BLAST Qualifier CIS", date: "Jan 2025", prize: "$8,000" },
  { place: "3", event: "PGL Open RU/CIS", date: "Nov 2024", prize: "$5,000" },
  { place: "1", event: "IEM Qualifier CIS", date: "Sep 2024", prize: "$10,000" },
];

const tabs = ["О команде", "Состав", "Новости", "Достижения", "Соцсети"] as const;
type Tab = (typeof tabs)[number];

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("О команде");
  const [selectedPlayer, setSelectedPlayer] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-oswald overflow-x-hidden">
      {/* Grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex flex-col justify-between overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 pt-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-white flex items-center justify-center">
              <span className="font-bebas text-lg tracking-widest">W</span>
            </div>
            <span className="font-bebas text-xl tracking-[0.2em] text-white">WILLOW TEAM</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs tracking-[0.15em] uppercase transition-all duration-200 font-oswald ${
                  activeTab === tab
                    ? "bg-white text-black font-semibold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>

        {/* Hero text */}
        <div className="relative z-10 px-6 md:px-12 pb-20">
          <div
            className={`transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="font-mono text-xs tracking-[0.4em] text-white/50 mb-3 uppercase">
              Counter-Strike 2 · Pro Team
            </p>
            <h1 className="font-bebas text-[5rem] md:text-[10rem] leading-none tracking-wider text-white">
              WILLOW
            </h1>
            <h1 className="font-bebas text-[5rem] md:text-[10rem] leading-none tracking-wider text-white/15 -mt-4 md:-mt-6">
              TEAM
            </h1>
          </div>
          <div
            className={`flex flex-wrap gap-8 mt-8 transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {[
              ["#3 CIS", "Рейтинг"],
              ["47W · 18L", "Сезон 2025"],
              ["$38K+", "Призовые"],
            ].map(([val, label]) => (
              <div key={label} className="border-l-2 border-white/30 pl-4">
                <div className="font-bebas text-2xl text-white">{val}</div>
                <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile tabs */}
      <div className="md:hidden flex overflow-x-auto bg-zinc-950 border-b border-white/10 sticky top-0 z-40">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-shrink-0 px-4 py-3 text-xs tracking-widest uppercase transition-all font-oswald ${
              activeTab === tab ? "text-white border-b-2 border-white" : "text-white/40"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="bg-black">
        {/* О команде */}
        {activeTab === "О команде" && (
          <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto animate-fade-in">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="font-mono text-xs text-white/40 tracking-[0.3em] uppercase mb-4">
                  — О нас
                </p>
                <h2 className="font-bebas text-6xl md:text-8xl leading-none text-white mb-8">
                  МЫ —<br />
                  <span className="text-white/20">WILLOW</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed tracking-wide mb-6 font-oswald font-light">
                  Willow Team — профессиональная киберспортивная организация по CS2, основанная в
                  2023 году. Мы строим команду на принципах дисциплины, командной химии и
                  беспощадной конкурентной воли.
                </p>
                <p className="text-white/60 text-sm leading-relaxed tracking-wide font-oswald font-light">
                  Наш путь начался с любительских турниров, но за полтора года мы вышли на
                  профессиональную сцену СНГ и регулярно квалифицируемся на международные события.
                </p>
                <div className="mt-10 flex gap-4">
                  <button
                    onClick={() => setActiveTab("Состав")}
                    className="px-6 py-3 bg-white text-black font-oswald text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all"
                  >
                    Состав
                  </button>
                  <button
                    onClick={() => setActiveTab("Новости")}
                    className="px-6 py-3 border border-white/30 text-white font-oswald text-xs tracking-[0.2em] uppercase hover:border-white transition-all"
                  >
                    Новости
                  </button>
                </div>
              </div>
              <div className="space-y-px">
                {[
                  ["Основана", "2023"],
                  ["Регион", "СНГ / Россия"],
                  ["Тренер", "Evgeny «CTRL» Pavlov"],
                  ["Менеджер", "Sasha «WIRE» Kovalev"],
                  ["Домашняя арена", "Москва"],
                  ["Всего побед", "112+"],
                  ["Активных игроков", "5"],
                ].map(([key, val]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center py-4 border-b border-white/10"
                  >
                    <span className="font-mono text-xs text-white/30 tracking-widest uppercase">
                      {key}
                    </span>
                    <span className="font-oswald text-sm text-white tracking-wider">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Состав */}
        {activeTab === "Состав" && (
          <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto animate-fade-in">
            <p className="font-mono text-xs text-white/40 tracking-[0.3em] uppercase mb-2">
              — Игроки
            </p>
            <h2 className="font-bebas text-6xl md:text-8xl text-white mb-12 leading-none">
              СОСТАВ
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/5">
              {players.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setSelectedPlayer(selectedPlayer === p.id ? null : p.id)}
                  className="bg-black cursor-pointer group relative overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.nickname}
                      className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="font-mono text-[9px] text-white/50 tracking-widest uppercase mb-1">
                        {p.country} {p.role}
                      </div>
                      <div className="font-bebas text-xl md:text-2xl text-white tracking-wider leading-none">
                        {p.nickname}
                      </div>
                      <div className="font-oswald text-[11px] text-white/40 tracking-wide">
                        {p.name}
                      </div>
                    </div>
                  </div>

                  {/* Stats panel */}
                  <div
                    className={`overflow-hidden transition-all duration-300 bg-zinc-950 ${
                      selectedPlayer === p.id ? "max-h-72" : "max-h-0"
                    }`}
                  >
                    <div className="p-4 space-y-3">
                      {[
                        ["RATING", p.rating.toFixed(2)],
                        ["K/D", p.kd.toFixed(2)],
                        ["ADR", p.adr.toFixed(1)],
                        ["HS%", `${p.hs}%`],
                        ["Карты", String(p.maps)],
                        ["Победы", String(p.wins)],
                      ].map(([label, val]) => (
                        <div key={label} className="flex justify-between items-center">
                          <span className="font-mono text-[9px] text-white/30 tracking-widest uppercase">
                            {label}
                          </span>
                          <span className="font-bebas text-xl text-white leading-none">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-mono text-[10px] text-white/20 tracking-widest uppercase mt-6 text-center">
              — нажмите на игрока, чтобы посмотреть статистику —
            </p>
          </section>
        )}

        {/* Новости */}
        {activeTab === "Новости" && (
          <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto animate-fade-in">
            <p className="font-mono text-xs text-white/40 tracking-[0.3em] uppercase mb-2">
              — Новости
            </p>
            <h2 className="font-bebas text-6xl md:text-8xl text-white mb-12 leading-none">
              НОВОСТИ
            </h2>
            <div className="space-y-px">
              {news.map((n) => (
                <div
                  key={n.id}
                  className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 border-b border-white/10 cursor-pointer hover:border-white/30 transition-all duration-300"
                >
                  <div className="md:w-32 flex-shrink-0">
                    <div className="inline-block px-2 py-1 bg-white text-black font-mono text-[9px] tracking-widest uppercase mb-2">
                      {n.tag}
                    </div>
                    <div className="font-mono text-[10px] text-white/30 tracking-wider block">
                      {n.date}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-oswald text-xl md:text-2xl font-semibold text-white tracking-wide group-hover:text-white/80 transition-colors mb-2">
                      {n.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed font-oswald font-light">
                      {n.desc}
                    </p>
                  </div>
                  <div className="flex-shrink-0 md:pr-4">
                    <Icon
                      name="ArrowRight"
                      size={20}
                      className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all duration-200"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Достижения */}
        {activeTab === "Достижения" && (
          <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto animate-fade-in">
            <p className="font-mono text-xs text-white/40 tracking-[0.3em] uppercase mb-2">
              — Трофеи
            </p>
            <h2 className="font-bebas text-6xl md:text-8xl text-white mb-12 leading-none">
              ДОСТИЖЕНИЯ
            </h2>
            <div className="space-y-px">
              {achievements.map((a, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-6 md:gap-12 py-6 border-b border-white/10 hover:border-white/20 transition-all"
                >
                  <div
                    className={`font-bebas text-5xl md:text-7xl leading-none flex-shrink-0 w-16 text-center ${
                      a.place === "1"
                        ? "text-white"
                        : a.place === "2"
                          ? "text-white/50"
                          : "text-white/25"
                    }`}
                  >
                    #{a.place}
                  </div>
                  <div className="flex-1">
                    <div className="font-oswald text-lg md:text-xl font-semibold text-white tracking-wide">
                      {a.event}
                    </div>
                    <div className="font-mono text-[10px] text-white/30 tracking-widest uppercase mt-1">
                      {a.date}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="font-bebas text-2xl md:text-3xl text-white/50 group-hover:text-white transition-colors">
                      {a.prize}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 grid grid-cols-3 gap-px bg-white/5">
              {[
                ["$38K+", "Призовые"],
                ["72%", "% побед"],
                ["4", "Трофея"],
              ].map(([val, label]) => (
                <div key={label} className="bg-black p-8 md:p-12 text-center">
                  <div className="font-bebas text-5xl md:text-6xl text-white">{val}</div>
                  <div className="font-mono text-[10px] text-white/30 tracking-widest uppercase mt-2">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Соцсети */}
        {activeTab === "Соцсети" && (
          <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto animate-fade-in">
            <p className="font-mono text-xs text-white/40 tracking-[0.3em] uppercase mb-2">
              — Мы онлайн
            </p>
            <h2 className="font-bebas text-6xl md:text-8xl text-white mb-12 leading-none">
              СОЦСЕТИ
            </h2>
            <div className="grid md:grid-cols-2 gap-px bg-white/5">
              {[
                {
                  icon: "Send",
                  name: "Telegram",
                  handle: "@willowteam_cs2",
                  desc: "Новости, анонсы матчей, закулисье",
                },
                {
                  icon: "Users",
                  name: "VK",
                  handle: "vk.com/willowteam",
                  desc: "Фото, видео, обновления состава",
                },
                {
                  icon: "Play",
                  name: "YouTube",
                  handle: "youtube.com/@willowteam",
                  desc: "Хайлайты, разборы матчей, влоги",
                },
                {
                  icon: "Monitor",
                  name: "Twitch",
                  handle: "twitch.tv/willowteam",
                  desc: "Стримы тренировок и матчей",
                },
              ].map((s) => (
                <div
                  key={s.name}
                  className="group bg-black p-8 md:p-12 cursor-pointer hover:bg-zinc-950 transition-all duration-300 border border-transparent hover:border-white/10"
                >
                  <div className="flex items-start justify-between mb-6">
                    <Icon
                      name={s.icon}
                      size={28}
                      className="text-white/20 group-hover:text-white transition-all duration-300"
                    />
                    <Icon
                      name="ArrowUpRight"
                      size={16}
                      className="text-white/10 group-hover:text-white/50 transition-all duration-300"
                    />
                  </div>
                  <div className="font-bebas text-3xl text-white tracking-wider mb-1">{s.name}</div>
                  <div className="font-mono text-xs text-white/30 tracking-wide mb-4">
                    {s.handle}
                  </div>
                  <p className="text-white/40 text-sm tracking-wide font-oswald font-light">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 border border-white/10 p-8 md:p-12">
              <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-3">
                — Сотрудничество
              </p>
              <h3 className="font-bebas text-3xl md:text-4xl text-white mb-4 tracking-wider">
                ПАРТНЁРСТВО И СПОНСОРСТВО
              </h3>
              <p className="text-white/40 text-sm tracking-wide mb-6 font-oswald font-light">
                Заинтересованы в сотрудничестве? Напишите нам.
              </p>
              <div className="font-mono text-sm text-white/60 tracking-wider">
                contact@willowteam.gg
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border border-white/30 flex items-center justify-center">
            <span className="font-bebas text-xs">W</span>
          </div>
          <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase">
            Willow Team © 2025
          </span>
        </div>
        <span className="font-mono text-[10px] text-white/15 tracking-widest uppercase">
          CS2 Professional Esports
        </span>
      </footer>
    </div>
  );
};

export default Index;
