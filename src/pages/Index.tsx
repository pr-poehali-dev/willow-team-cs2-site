import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_BG =
  "https://cdn.poehali.dev/projects/7d374dfc-1b0a-4d8a-b926-d222d2f9ce69/files/3a965bbf-3d41-4b1c-8f5e-60ecbf1c44ba.jpg";
const PLAYER_IMG =
  "https://cdn.poehali.dev/projects/7d374dfc-1b0a-4d8a-b926-d222d2f9ce69/files/f7fc64fa-25f4-4fa7-a065-8c04aae4f385.jpg";
const LOGO =
  "https://cdn.poehali.dev/files/90c696d2-fd95-4e23-bb52-27d95617ffe4.png";

const players = [
  {
    id: 1,
    nickname: "kismain",
    name: "Денис Балуев",
    role: "IGL",
    country: "🇷🇺",
    rating: 1.05,
    kd: 1.01,
    adr: 76.5,
    hs: 56,
    maps: 0,
    wins: 0,
    img: PLAYER_IMG,
  },
  {
    id: 2,
    nickname: "whysonk1",
    name: "Степан Ульянов",
    role: "Rifler",
    country: "🇷🇺",
    rating: 1.00,
    kd: 0.99,
    adr: 65.2,
    hs: 63,
    maps: 0,
    wins: 0,
    img: PLAYER_IMG,
  },
  {
    id: 3,
    nickname: "Makl0n",
    name: "Максим Муратов",
    role: "Rifler",
    country: "🇷🇺",
    rating: 1.01,
    kd: 1.00,
    adr: 64.6,
    hs: 55,
    maps: 0,
    wins: 0,
    img: PLAYER_IMG,
  },
  {
    id: 4,
    nickname: "dimkapeek",
    name: "Дмитрий Белов",
    role: "Sniper",
    country: "🇷🇺",
    rating: 0.98,
    kd: 0.99,
    adr: 47.3,
    hs: 50,
    maps: 0,
    wins: 0,
    img: PLAYER_IMG,
  },
  {
    id: 5,
    nickname: "dan11l",
    name: "Даниил Чурбаков",
    role: "Support",
    country: "🇷🇺",
    rating: 0.84,
    kd: 0.89,
    adr: 34.1,
    hs: 31,
    maps: 0,
    wins: 0,
    img: PLAYER_IMG,
  },
  {
    id: 6,
    nickname: "m1laps",
    name: "Михаил Гвоздев",
    role: "Entry Fragger",
    country: "🇷🇺",
    rating: 0.99,
    kd: 1.02,
    adr: 61.8,
    hs: 60,
    maps: 0,
    wins: 0,
    img: PLAYER_IMG,
  },
];

const socials = [
  {
    icon: "Send",
    name: "Telegram",
    handle: "@WillowTeamCS2",
    desc: "Новости, анонсы матчей, закулисье",
    url: "https://t.me/WillowTeamCS2",
  },
  {
    icon: "Play",
    name: "YouTube",
    handle: "@willowteamcs2",
    desc: "Хайлайты, разборы матчей, влоги",
    url: "https://www.youtube.com/@willowteamcs2",
  },
  {
    icon: "Music",
    name: "TikTok",
    handle: "@willowteamcs",
    desc: "Короткие клипы и хайлайты",
    url: "https://www.tiktok.com/@willowteamcs",
  },
  {
    icon: "Monitor",
    name: "Twitch",
    handle: "willowteamcs2",
    desc: "Стримы тренировок и матчей",
    url: "https://www.twitch.tv/willowteamcs2",
  },
];

const tabs = ["О команде", "Состав", "Соцсети"] as const;
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
            <img src={LOGO} alt="Willow Team" className="w-10 h-10 object-contain invert" />
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
              Counter-Strike 2 · Amateur Team
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
              ["#24 AT", "Рейтинг"],
              ["0W · 2L", "Сезон 2026"],
              ["$0K", "Призовые"],
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
                {/* Logo large */}
                <div className="mb-8">
                  <img
                    src={LOGO}
                    alt="Willow Team"
                    className="w-40 md:w-56 object-contain invert opacity-90"
                  />
                </div>
                <p className="text-white/60 text-sm leading-relaxed tracking-wide mb-6 font-oswald font-light">
                  Willow Team — профессиональная киберспортивная организация по CS2, основанная в
                  2025 году. Мы строим команду на принципах дисциплины, командной химии и
                  беспощадной конкурентной воли.
                </p>
                <p className="text-white/60 text-sm leading-relaxed tracking-wide font-oswald font-light">
                  Наш путь начался с любительских турниров, но за пол года мы вышли на любительскую
                  Tier 6 сцену и регулярно квалифицируемся на международные события.
                </p>
                <div className="mt-10 flex gap-4">
                  <button
                    onClick={() => setActiveTab("Состав")}
                    className="px-6 py-3 bg-white text-black font-oswald text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all"
                  >
                    Состав
                  </button>
                  <button
                    onClick={() => setActiveTab("Соцсети")}
                    className="px-6 py-3 border border-white/30 text-white font-oswald text-xs tracking-[0.2em] uppercase hover:border-white transition-all"
                  >
                    Соцсети
                  </button>
                </div>
              </div>
              <div className="space-y-px">
                {[
                  ["Основана", "2025"],
                  ["Регион", "СНГ / Россия"],
                  ["Менеджер", "Misha «ICEICEGOLD» Porogov"],
                  ["Домашняя арена", "Отсутствует"],
                  ["Всего побед", "0"],
                  ["Активных игроков", "6"],
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5">
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
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <div className="font-mono text-[8px] text-white/50 tracking-widest uppercase mb-1">
                        {p.country} {p.role}
                      </div>
                      <div className="font-bebas text-lg text-white tracking-wider leading-none">
                        {p.nickname}
                      </div>
                      <div className="font-oswald text-[10px] text-white/40 tracking-wide">
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
                    <div className="p-3 space-y-2">
                      {[
                        ["RATING", p.rating.toFixed(2)],
                        ["K/D", p.kd.toFixed(2)],
                        ["ADR", p.adr.toFixed(1)],
                        ["HS%", `${p.hs}%`],
                        ["Карты", String(p.maps)],
                        ["Победы", String(p.wins)],
                      ].map(([label, val]) => (
                        <div key={label} className="flex justify-between items-center">
                          <span className="font-mono text-[8px] text-white/30 tracking-widest uppercase">
                            {label}
                          </span>
                          <span className="font-bebas text-lg text-white leading-none">{val}</span>
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
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-black p-8 md:p-12 hover:bg-zinc-950 transition-all duration-300 border border-transparent hover:border-white/10 block"
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
                </a>
              ))}
            </div>

            {/* Сотрудничество */}
            <a
              href="https://t.me/Ledov1k"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-12 border border-white/10 p-8 md:p-12 hover:border-white/30 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 block"
            >
              <div>
                <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-3">
                  — Сотрудничество
                </p>
                <h3 className="font-bebas text-3xl md:text-4xl text-white mb-4 tracking-wider">
                  ПАРТНЁРСТВО И СПОНСОРСТВО
                </h3>
                <p className="text-white/40 text-sm tracking-wide font-oswald font-light">
                  Заинтересованы в сотрудничестве? Напишите нам в Telegram.
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <Icon
                  name="Send"
                  size={20}
                  className="text-white/30 group-hover:text-white transition-colors duration-300"
                />
                <span className="font-mono text-sm text-white/50 group-hover:text-white transition-colors duration-300 tracking-wider">
                  @Ledov1k
                </span>
                <Icon
                  name="ArrowRight"
                  size={16}
                  className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all duration-200"
                />
              </div>
            </a>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={LOGO} alt="Willow Team" className="w-6 h-6 object-contain invert opacity-40" />
          <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase">
            Willow Team © 2025
          </span>
        </div>
        <span className="font-mono text-[10px] text-white/15 tracking-widest uppercase">
          CS2 Amateur Esports
        </span>
      </footer>
    </div>
  );
};

export default Index;