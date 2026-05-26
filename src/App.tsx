/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  TrendingUp,
  Brain,
  Scale,
  Shield,
  Phone,
  Lightbulb,
  Car,
  AlertTriangle,
  Heart,
  ArrowRight,
  Info,
  MapPin,
  Calendar,
  Clock,
  User,
  Bike,
  Flame,
  Milestone,
  CheckCircle2,
  Lock,
  Search,
  Users,
  AlertOctagon,
  CloudRain,
  Eye,
  Check,
  Siren,
  HelpCircle,
  ExternalLink,
  Percent,
  Plus,
  Compass,
  FileText
} from 'lucide-react';

export default function App() {
  // Saved tab states using localStorage
  const [activeTab, setActiveTab] = useState<number>(() => {
    const saved = localStorage.getItem('rta_active_tab');
    return saved ? parseInt(saved, 10) : 1;
  });

  // State to handle visual interactions, e.g., hover details on charts or region stats
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  // Sync tab selection with localStorage
  useEffect(() => {
    localStorage.setItem('rta_active_tab', activeTab.toString());
  }, [activeTab]);

  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
  };

  // Pre-configured tabs matching specific sections
  const tabs = [
    { id: 1, label: 'Понятие и классификация', icon: BookOpen },
    { id: 2, label: 'Аварийность в Марий Эл', icon: TrendingUp },
    { id: 3, label: 'Роль анализа', icon: Brain },
    { id: 4, label: 'Специфика расследования', icon: Scale },
    { id: 5, label: 'Меры безопасности', icon: Shield },
    { id: 6, label: 'Экстренн  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8 flex justify-center items-start transition-all duration-500">
      {/* Outer container layout wrapping all code */}
      <div 
        id="app-container" 
        className="w-full max-w-[1400px] bg-white/95 backdrop-blur-md rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20 text-[#0e3b4f]"
      >
        
        {/* SECTION 1: HERO SECTION */}
        <header 
          id="hero-section"
          className="relative bg-gradient-to-r from-[#0a2e3f] via-[#155d7a] to-[#2c7fb8] text-white py-14 px-8 sm:px-12 lg:px-16 overflow-hidden hero-dot-pattern border-b-4 border-[#f39c12]"
        >
          {/* Subtle white radial dots overlay */}
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
          {/* Bottom-right absolute radial glow */}
          <div className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full bg-[#1abc9c] opacity-25 blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-5xl">
            {/* Row of micro icons reinforcing road theme */}
            <div className="flex items-center gap-4 mb-5 opacity-90">
              <span className="p-2.5 bg-white/10 rounded-2xl backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105">
                <Car className="w-5 h-5 text-[#f39c12]" />
              </span>
              <span className="p-2.5 bg-white/10 rounded-2xl backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105">
                <Shield className="w-5 h-5 text-[#1abc9c]" />
              </span>
              <span className="p-2.5 bg-white/10 rounded-2xl backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105">
                <Milestone className="w-5 h-5 text-white" />
              </span>
              <span className="p-2.5 bg-white/10 rounded-2xl backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105">
                <TrendingUp className="w-5 h-5 text-[#f39c12]" />
              </span>
            </div>

            {/* Main Heading & Gradient Accents */}
            <h1 className="text-2xl sm:text-3.5xl lg:text-4.5xl font-extrabold tracking-tight mb-3 leading-tight">
              🚦 Профилактика ДТП и безопасность дорожного движения
            </h1>
            
            {/* Subtitle / Descriptive Text */}
            <p className="text-sm sm:text-base text-slate-100/90 max-w-3xl font-light leading-relaxed mb-6">
              Система анализа и предотвращения дорожно-транспортных происшествий • Республика Марий Эл. Методический комплекс долгосрочной профилактики, повышения безопасности и минимизации рисков на региональных дорожных сетях.
            </p>

            {/* Backdrop Blur Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: 'Республика Марий Эл', text: 'Субъект РФ' },
                { label: 'Анализ за 2024–2025 гг.', text: 'Динамика показателей' },
                { label: 'Снижение смертности: -5.8%', text: 'Положительный вектор', highlight: true },
                { label: 'Научный подход', text: 'Специфика анализа ДТП' }
              ].map((badge, idx) => (
                <div 
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:border-[#f39c12]/40 group"
                >
                  <div className={`text-[10px] font-bold ${badge.highlight ? 'text-[#f39c12]' : 'text-slate-300'} uppercase tracking-widest mb-0.5 group-hover:text-white`}>
                    {badge.text}
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-white">
                    {badge.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* SECTION 2: TAB NAVIGATION */}
        <nav 
          id="tab-navigation"
          className="bg-slate-50 border-b border-slate-200 sticky top-0 z-40 shadow-sm"
        >
          <div className="flex overflow-x-auto shrink-0 custom-scrollbar scroll-smooth px-6 py-2.5 sm:px-8">
            <div className="flex space-x-2 md:space-x-3 min-w-max mx-auto py-0.5">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    id={`tab-btn-${tab.id}`}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-2.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest rounded-xl transition-all duration-300 whitespace-nowrap focus:outline-none ${
                      isActive
                        ? 'bg-white text-[#f39c12] shadow-sm border border-slate-200/50 -translate-y-[0px]'
                        : 'text-[#4a627a] hover:bg-white/70 hover:text-[#0e3b4f]'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-[#f39c12]' : 'text-slate-400'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* SECTION 3: TAB CONTENT PANES */}
        <main id="tab-content" className="p-6 sm:p-8 lg:p-10 min-h-[500px] bg-slate-50/50">
          <AnimatePresence mode="wait">
            
            {/* PANE 1: ПОНЯТИЕ И КЛАССИФИКАЦИЯ ДТП */}
            {activeTab === 1 && (
              <motion.section
                key="pane-1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-6 animate-fade-in"
              >
                {/* Heading Block */}
                <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                  <div className="p-3 bg-blue-50 text-[#155d7a] rounded-2xl">
                    <BookOpen className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#0e3b4f] tracking-tight">Понятие, сущность и официальная классификация ДТП</h2>
                    <p className="text-xs text-[#4a627a] font-medium uppercase tracking-wider mt-0.5">Теоретические основы и нормативные аспекты исследования безопасности движения</p>
                  </div>
                </div>

                {/* Definition Card from RF Traffic Regulations */}
                <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-6 border-l-4 border-[#f39c12] shadow-sm border border-slate-100 flex flex-col justify-between hover:border-orange-200 transition-all duration-300">
                  <div className="flex gap-4 items-start">
                    <div className="p-2.5 bg-orange-50 rounded-xl text-[#f39c12] shrink-0 mt-0.5">
                      <Scale className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold uppercase tracking-widest text-[10px] text-slate-400 mb-1.5">
                        Официальное определение (согласно ПДД РФ)
                      </h3>
                      <blockquote className="text-sm italic text-[#0e3b4f] leading-relaxed font-medium">
                        &ldquo;Дорожно-транспортное происшествие (ДТП) — событие, возникшее в процессе движения по дороге транспортного средства и с его участием, при котором погибли или ранены люди, повреждены транспортные средства, сооружения, грузы либо причинён иной материальный ущерб.&rdquo;
                      </blockquote>
                      <div className="mt-2 text-[10px] text-slate-400 text-right font-bold tracking-widest">— РАЗДЕЛ 1.2 ПРАВИЛ ДОРОЖНОГО ДВИЖЕНИЯ РФ</div>
                    </div>
                  </div>
                </div>

                {/* Global Statistics Text Section */}
                <div className="bg-white rounded-3xl border border-slate-100 p-6 md:p-8 space-y-3 shadow-sm hover:border-orange-100 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <span className="p-2 bg-rose-50 rounded-xl text-rose-500">
                      <AlertTriangle className="w-5 h-5" />
                    </span>
                    <h3 className="font-bold text-lg text-[#0e3b4f]">Глобальный контекст и масштаб проблемы</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4a627a] leading-relaxed">
                    Дорожный травматизм представляет собой серьезнейшую глобальную угрозу здоровью населения планеты. По официальным сведениям Всемирной организации здравоохранения (ВОЗ), в результате дорожно-транспортных аварий ежегодно погибает более <strong className="text-rose-600 font-bold">1,3 миллиона человек</strong>, а от 20 до 50 миллионов человек получают травмы различной степени тяжести, приводящие к постоянной или временной инвалидности. Анализ структуры аварий позволяет выявить глубинные системные проблемы инфраструктурного, организационного и поведенческого толка.
                  </p>
                </div>

                {/* Feature grid with 3 cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                  {/* Card A: По виду происшествия */}
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-[#f39c12]/40 hover:shadow-md hover:translate-y-[-3px] transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#155d7a]"></div>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="p-2 bg-blue-50 text-[#155d7a] rounded-xl">
                          <Car className="w-5 h-5" />
                        </span>
                        <h4 className="font-bold text-md text-[#0e3b4f]">По виду происшествия</h4>
                      </div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Виды аварийных ситуаций (ГИБДД):</p>
                      <ul className="space-y-2.5">
                        {[
                          { title: 'Столкновение', desc: 'Удар движущихся ТС' },
                          { title: 'Опрокидывание', desc: 'Потеря устойчивости ТС' },
                          { title: 'Наезд на пешехода', desc: 'Контакт ТС с человеком' },
                          { title: 'Наезд на велосипедиста', desc: 'Контакт с двухколесным ТС' },
                          { title: 'Наезд на препятствие', desc: 'Удар о неподвижный объект' },
                          { title: 'Падение пассажира', desc: 'Травма внутри салона' },
                        ].map((item, id) => (
                          <li key={id} className="flex gap-2 items-start text-xs">
                            <Check className="w-4 h-4 text-[#1abc9c] shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-[#0e3b4f]">{item.title}</strong>
                              <span className="text-[10px] text-slate-400 block">{item.desc}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card B: По тяжести последствий */}
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-[#f39c12]/40 hover:shadow-md hover:translate-y-[-3px] transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#8e44ad]"></div>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="p-2 bg-purple-50 text-[#8e44ad] rounded-xl">
                          <Heart className="w-5 h-5" />
                        </span>
                        <h4 className="font-bold text-md text-[#0e3b4f]">По тяжести последствий</h4>
                      </div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Классификация ущерба:</p>
                      
                      <div className="space-y-3">
                        <div className="bg-rose-50/50 p-2.5 rounded-xl border border-rose-100">
                          <span className="inline-block bg-[#d9534f] text-white text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                            Критический
                          </span>
                          <h5 className="font-bold text-xs text-rose-950 mt-1">Смертельный исход</h5>
                          <p className="text-[10px] text-rose-800">Констатация смерти на месте либо в течение 30 суток.</p>
                        </div>

                        <div className="bg-amber-50/50 p-2.5 rounded-xl border border-amber-100">
                          <span className="inline-block bg-[#f39c12] text-white text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                            Средний / Тяжелый
                          </span>
                          <h5 className="font-bold text-xs text-amber-950 mt-1">Телесные повреждения</h5>
                          <p className="text-[10px] text-amber-800">Нанесение вреда здоровью различной тяжести.</p>
                        </div>

                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          <span className="inline-block bg-[#4a627a] text-white text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                            Легкий
                          </span>
                          <h5 className="font-bold text-xs text-slate-900 mt-1">Материальный ущерб</h5>
                          <p className="text-[10px] text-slate-600">Повреждения исключительно автотранспорта и объектов.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card C: По характеру причин */}
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-[#f39c12]/40 hover:shadow-md hover:translate-y-[-3px] transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#1abc9c]"></div>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="p-2 bg-emerald-50 text-[#1abc9c] rounded-xl">
                          <Brain className="w-5 h-5" />
                        </span>
                        <h4 className="font-bold text-md text-[#0e3b4f]">По характеру причин</h4>
                      </div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Системные факторы происшествия:</p>
                      
                      <div className="space-y-3">
                        <div className="flex gap-2 items-start text-xs">
                          <div className="w-5 h-5 rounded-full bg-blue-100 text-[#155d7a] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</div>
                          <div>
                            <h5 className="font-bold text-[#0e3b4f] text-xs">Водители</h5>
                            <p className="text-[10px] text-slate-500 leading-tight">Скорость, обгон, опьянение, игнорирование знаков.</p>
                          </div>
                        </div>

                        <div className="flex gap-2 items-start text-xs">
                          <div className="w-5 h-5 rounded-full bg-orange-100 text-[#f39c12] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</div>
                          <div>
                            <h5 className="font-bold text-[#0e3b4f] text-xs">Пешеходы</h5>
                            <p className="text-[10px] text-slate-500 leading-tight">Переход вне зебры, отсутствие фликеров ночью.</p>
                          </div>
                        </div>

                        <div className="flex gap-2 items-start text-xs">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#27ae60] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</div>
                          <div>
                            <h5 className="font-bold text-[#0e3b4f] text-xs">Дороги</h5>
                            <p className="text-[10px] text-slate-500 leading-tight">Ямы, отсутствие знаков, неисправное освещение.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Additional informative banner about RF causes */}
                <div className="bg-[#0e3b4f] text-white rounded-3xl p-6 relative overflow-hidden shadow-md">
�ушение ПДД водителями</h5>
                          <p className="text-xs text-slate-500">Превышение скорости, небезопасный обгон, вождение в состоянии опьянения, игнорирование знаков разметки.</p>
                        </div>
                      </div>

                      <div className="flex gap-2.5 items-start">
                        <div className="w-6 h-6 rounded-full bg-orange-100 text-[#f39c12] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</div>
                        <div>
                          <h5 className="font-semibold text-sm text-[#0e3b4f]">Нарушения со стороны пешеходов</h5>
                          <p className="text-xs text-slate-500">Переход дороги вне установленных зон, выход из-за препятствий, отсутствие фликеров ночью.</p>
                        </div>
                      </div>

                      <div className="flex gap-2.5 items-start">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#27ae60] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</div>
                        <div>
                          <h5 className="font-semibold text-sm text-[#0e3b4f]">Неудовлетворительное состояние дорог</h5>
                          <p className="text-xs text-slate-500">Дефекты дорожного покрытия, отсутствие разметки / знаков, неисправное освещение в ночное время.</p>
                        </div>
                      </div>

                      <div className="flex gap-2.5 items-start">
                        <div className="w-6 h-6 rounded-full bg-purple-100 text-[#8e44ad] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</div>
                        <div>
                          <h5 className="font-semibold text-sm text-[#0e3b4f]">Технические неисправности</h5>
                          <p className="text-xs text-slate-500">Отказ тормозов, износ резины, неработающие внешние световые приборы ТС.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Additional informative banner about RF causes */}
                <div className="bg-[#0e3b4f] text-white rounded-2xl p-6 relative overflow-hidden shadow-md">
                  <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-slate-100/10 rounded-full blur-2xl"></div>
                  <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center justify-between">
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-[#f39c12]">Типичная структура первопричин ДТП в Российской Федерации:</h4>
                      <p className="text-sm text-slate-200 max-w-3xl leading-relaxed">
                        Статистика фиксирует доминирующее влияние человеческого фактора. Около <strong className="text-white">30%</strong> критических аварий вызваны прямым несоблюдением режимов скорости; до <strong className="text-white">18%</strong> — опасными маневрами и выездом на полосу встречного движения. Факторы некачественного содержания дорожного плотна усугубляют тяжесть травм в осенне-зимний период.
                      </p>
                    </div>
                    <div className="shrink-0 flex gap-4">
                      <div className="bg-white/10 p-4 rounded-xl text-center border border-white/10 min-w-[100px]">
                        <span className="text-3xl font-extrabold text-[#f39c12] block">30%</span>
                        <span className="text-[10px] text-slate-200 tracking-wider uppercase block mt-1">Скорость</span>
                      </div>
                      <div className="bg-white/10 p-4 rounded-xl text-center border border-white/10 min-w-[100px]">
                        <span className="text-3xl font-extrabold text-[#1abc9c] block">18%</span>
                        <span className="text-[10px] text-slate-200 tracking-wider uppercase block mt-1">Встречная</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footnote disclaimer */}
                <footer className="text-xs text-[#4a627a] flex items-center gap-2 pt-2">
                  <Info className="w-4 h-4 text-slate-400" />
                  <span>Общие справочно-нормативные положения приведены в строго научной терминологии транспортно-трасологического анализа.</span>
                </footer>
              </motion.section>
            )}

            {/* PANE 2: АВАРИЙНОСТЬ В МАРИЙ ЭЛ */}
            {activeTab === 2 && (
              <motion.section
                key="pane-2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8 animate-fade-in"
              >
                {/* Heading Block */}
                <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                  <div className="p-3 bg-blue-50 text-[#155d7a] rounded-xl">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0e3b4f]">Показатели аварийности в Республике Марий Эл за 2024–2025 гг.</h2>
                    <p className="text-sm text-[#4a627a]">Официальные данные дорожно-транспортного травматизма и ключевые маркеры негативной динамики</p>
                  </div>
                </div>

                {/* Main Stats 4 Big Cards Dashboard */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  
                  {/* Card 2024 */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm relative group hover:border-[#f39c12]/40 transition-all duration-300">
                    <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400 block mb-1">Всего ДТП в 2024 г.</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-[#0e3b4f] tracking-tight">741</span>
                      <span className="text-xs font-semibold text-rose-500 bg-rose-50 px-2 py-0.5 rounded-md">
                        +11.7%
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Базовый аналитический показатель за предыдущий этап анализа.</p>
                    <div className="absolute top-0 right-0 p-4 opacity-15">
                      <Car className="w-12 h-12 text-slate-900" />
                    </div>
                  </div>

                  {/* Card 2025 */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm relative group hover:border-[#f39c12]/40 transition-all duration-300">
                    <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400 block mb-1">Всего ДТП в 2025 г.</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-[#0e3b4f] tracking-tight">816</span>
                      <span className="text-xs font-semibold text-rose-600 bg-rose-100 px-2 py-0.5 rounded-md">
                        +10.1% ▲
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Увеличивающаяся тенденция роста числа аварий в регионе.</p>
                    <div className="absolute top-0 right-0 p-4 opacity-15">
                      <TrendingUp className="w-12 h-12 text-[#d9534f]" />
                    </div>
                  </div>

                  {/* Card Fatalities */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm relative group hover:border-[#27ae60]/40 transition-all duration-300">
                    <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400 block mb-1">Число погибших (2024 → 2025)</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-[#0e3b4f] tracking-tight">86 → 81</span>
                      <span className="text-xs font-semibold text-[#27ae60] bg-emerald-50 px-2 py-0.5 rounded-md">
                        -5.8% ▼
                      </span>
                    </div>
                    <p className="text-xs text-emerald-800 mt-2 font-medium">Положительный индикатор снижения смертности на дорогах.</p>
                    <div className="absolute top-0 right-0 p-4 opacity-15">
                      <Heart className="w-12 h-12 text-emerald-600" />
                    </div>
                  </div>

                  {/* Card Injured */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm relative group hover:border-[#d9534f]/40 transition-all duration-300">
                    <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400 block mb-1">Число раненых (2024 → 2025)</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-[#0e3b4f] tracking-tight">991 → 1095</span>
                      <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">
                        +10.5% ▲
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Коррелирует с увеличением общего объема зафиксированных столкновений.</p>
                    <div className="absolute top-0 right-0 p-4 opacity-15">
                      <Users className="w-12 h-12 text-rose-500" />
                    </div>
                  </div>

                </div>

                {/* GRAPHICAL SECTION: Custom SVG Visualizations */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* Visual 1: Accidents and Injured comparison */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-base text-[#0e3b4f] mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-[#f39c12]" />
                      Динамика происшествий и травматизма (2024 vs 2025)
                    </h3>
                    
                    {/* SVG Chart */}
                    <div className="w-full h-64 bg-slate-50 rounded-xl p-4 relative flex flex-col justify-between">
                      <svg viewBox="0 0 500 200" className="w-full h-full">
                        {/* Grid lines */}
                        <line x1="50" y1="30" x2="450" y2="30" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="50" y1="80" x2="450" y2="80" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="50" y1="130" x2="450" y2="130" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="50" y1="170" x2="450" y2="170" stroke="#cbd5e1" strokeWidth="1" />
                        
                        {/* 2024 Bars */}
                        {/* Total Accidents 2024: value 741 (represented with scale) */}
                        <rect x="100" y="65" width="40" height="105" rx="4" fill="#155d7a" className="transition-all hover:opacity-85 cursor-pointer" />
                        <text x="120" y="55" textAnchor="middle" fill="#155d7a" fontSize="12" fontWeight="bold">741</text>
                        
                        {/* Total Injured 2024: value 991 */}
                        <rect x="150" y="35" width="40" height="135" rx="4" fill="#a8a1ff" className="transition-all hover:opacity-85 cursor-pointer" />
                        <text x="170" y="25" textAnchor="middle" fill="#764ba2" fontSize="12" fontWeight="bold">991</text>

                        {/* 2025 Bars */}
                        {/* Total Accidents 2025: value 816 (represented with scale) */}
                        <rect x="300" y="55" width="40" height="115" rx="4" fill="#d9534f" className="transition-all hover:opacity-85 cursor-pointer" stroke="#f39c12" strokeWidth="1.5" />
                        <text x="320" y="45" textAnchor="middle" fill="#d9534f" fontSize="12" fontWeight="bold">816</text>
                        
                        {/* Total Injured 2025: value 1095 */}
                        <rect x="350" y="22" width="40" height="148" rx="4" fill="#f39c12" className="transition-all hover:opacity-85 cursor-pointer" />
                        <text x="370" y="12" textAnchor="middle" fill="#b45309" fontSize="12" fontWeight="bold">1095</text>

                        {/* Labels for X-Axis */}
                        <text x="145" y="188" textAnchor="middle" fill="#4a627a" fontSize="11" fontWeight="bold">2024 год</text>
                        <text x="345" y="188" textAnchor="middle" fill="#4a627a" fontSize="11" fontWeight="bold">2025 год</text>
                        <text x="35" y="174" textAnchor="end" fill="#94a3b8" fontSize="9">0</text>
                        <text x="35" y="134" textAnchor="end" fill="#94a3b8" fontSize="9">400</text>
                        <text x="35" y="84" textAnchor="end" fill="#94a3b8" fontSize="9">800</text>
                        <text x="35" y="34" textAnchor="end" fill="#94a3b8" fontSize="9">1200</text>
                      </svg>
                      
                      {/* Legend */}
                      <div className="flex justify-center gap-6 mt-2 text-xs font-semibold">
                        <div className="flex items-center gap-2">
                          <span className="w-3.5 h-3.5 bg-[#155d7a] rounded-sm"></span>
                          <span>Всего ДТП</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-3.5 h-3.5 bg-[#f39c12] rounded-sm"></span>
                          <span>Ранено человек</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual 2: Fatalities Gauge Circular presentation */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-base text-[#0e3b4f] mb-1 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-emerald-500" />
                        Динамика гибели людей на дорогах сети
                      </h3>
                      <p className="text-xs text-[#4a627a] mb-4">Удалось сократить число смертей благодаря внедрению жестких систем контроля.</p>
                    </div>

                    <div className="flex items-center justify-around bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/50">
                      <div className="text-center">
                        <span className="text-stone-400 text-xs tracking-wider font-extrabold uppercase">2024 год</span>
                        <div className="text-3xl font-black text-slate-500 mt-1">86</div>
                        <span className="text-[10px] text-stone-500 block">смертей</span>
                      </div>
                      
                      {/* Interactive Visual reduction arrow */}
                      <div className="flex flex-col items-center">
                        <span className="text-emerald-700 font-extrabold text-sm mb-1 bg-emerald-100/80 px-2.5 py-1 rounded-full border border-emerald-100">
                          -5.8% Снижение
                        </span>
                        <div className="flex items-center gap-1.5 text-emerald-600 animate-pulse">
                          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>

                      <div className="text-center">
                        <span className="text-emerald-800 text-xs tracking-wider font-extrabold uppercase">2025 год</span>
                        <div className="text-4xl font-black text-emerald-600 mt-1">81</div>
                        <span className="text-[10px] text-emerald-700 block">жизнь спасена</span>
                      </div>
                    </div>

                    <p className="text-xs text-rose-800 bg-rose-50 p-3 rounded-lg border border-rose-100 mt-3">
                      ⚠️ Хотя показатель гибели снижается, общая деструкция и перенасыщение дорожно-транспортного узла провоцируют системную эскалацию нелетальных случаев столкновений.
                    </p>
                  </div>

                </div>

                {/* Sub-statistics Grid (3 target cards) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Card 1: Child Injuries */}
                  <div className="bg-rose-50/30 border border-rose-100 p-6 rounded-2xl relative">
                    <div className="absolute top-4 right-4 bg-rose-100 text-[#d9534f] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Особый контроль!
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <User className="w-6 h-6 text-[#d9534f]" />
                      <h4 className="font-bold text-lg text-[#0e3b4f]">Детский травматизм</h4>
                    </div>
                    <div className="text-2xl font-black text-[#d9534f] mb-1">138 → 152 раненых</div>
                    <p className="text-xs text-[#4a627a] leading-relaxed">
                      Рост детской аварийности составил <strong className="text-[#d9534f]">+10.1%</strong> за год. Ситуация требует усиления школьной пропаганды и более строгого контроля мер фиксации удерживающих устройств.
                    </p>
                  </div>

                  {/* Card 2: Pedestrian hits */}
                  <div className="bg-rose-50/30 border border-rose-100 p-6 rounded-2xl relative">
                    <div className="absolute top-4 right-4 bg-rose-100 text-[#d9534f] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Рост критический!
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <Compass className="w-6 h-6 text-[#d9534f]" />
                      <h4 className="font-bold text-lg text-[#0e3b4f]">Наезды на пешеходов</h4>
                    </div>
                    <div className="text-2xl font-black text-[#d9534f] mb-1">145 → 208 происшествий</div>
                    <p className="text-xs text-[#4a627a] leading-relaxed">
                      Рост числа наездов составил рекордные <strong className="text-[#d9534f]">+43.4%</strong>. Фрагмент выявляет крайний уровень дефицита пешеходной инфраструктуры, дефицита качественного освещения переходов ночью.
                    </p>
                  </div>

                  {/* Card 3: Drunk driving */}
                  <div className="bg-amber-50/30 border border-amber-200 p-6 rounded-2xl relative">
                    <div className="absolute top-4 right-4 bg-amber-100 text-[#f39c12] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Экстремальный риск
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <Flame className="w-6 h-6 text-[#f39c12]" />
                      <h4 className="font-bold text-lg text-[#0e3b4f]">Пьяное вождение</h4>
                    </div>
                    <div className="text-2xl font-black text-[#0e3b4f] mb-1">93 случая в 2024 г.</div>
                    <p className="text-xs text-[#4a627a] leading-relaxed">
                      Тенденция нарушений под эффектом алкоголя продолжает держать крайне жесткую планку во всем макро-анализе. Зафиксировано увеличение инцидентов на <strong className="text-[#f39c12]">+31%</strong> во внутренних городских секторах.
                    </p>
                  </div>

                </div>

                {/* Info block about temporal dynamics */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h4 className="font-bold text-lg text-slate-800 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-slate-600" />
                    Временная динамика и пиковые интервалы аварийности
                  </h4>
                  <p className="text-sm text-[#4a627a] leading-relaxed">
                    По результатам хронологической раскладки ДТП в Республике Марий Эл, пиковым днем недели является <strong className="text-rose-600">пятница</strong> — день повышенной миграции между Йошкар-Олой и малым локальным расселением. Суточные интервалы абсолютного риска: утренний пик <strong className="text-indigo-950">7:00 – 8:00</strong> и вечерний час пик разъезда работающих специалистов <strong className="text-indigo-950">17:00 – 18:00</strong>.
                  </p>
                </div>

                {/* Warning Badge with key conclusion */}
                <div className="bg-[#f39c12]/10 border border-[#f39c12]/30 rounded-2xl p-5 flex items-start gap-3">
                  <AlertOctagon className="w-6 h-6 text-[#f39c12] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-md text-[#0e3b4f]">Аналитический вывод по детерминантам травматизма в Марий Эл:</h5>
                    <p className="text-xs text-[#4a627a] leading-relaxed mt-1">
                      Основным провоцирующим признаком затяжной аварийности за период с 2024 по 2025 гг. остается диспропорция темпов развития транспортной плотности к инфраструктурному уровню защищенности. Увеличение наездов требует безусловного уличного переоснащения в зонах пешеходного транзита.
                    </p>
                  </div>
                </div>

                {/* Footnote representing source */}
                <footer className="text-xs text-[#4a627a] flex items-center gap-2 pt-2">
                  <Info className="w-4 h-4 text-slate-400" />
                  <span>Проанализировано по внутренней базе данных УГИБДД МВД по Республике Марий Эл. Исследование соответствует научно-квалификационным признакам.</span>
                </footer>
              </motion.section>
            )}

            {/* PANE 3: РОЛЬ АНАЛИЗА */}
            {activeTab === 3 && (
              <motion.section
                key="pane-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8 animate-fade-in"
              >
                {/* Heading Block */}
                <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                  <div className="p-3 bg-blue-50 text-[#155d7a] rounded-xl">
                    <Brain className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0e3b4f]">Значение и роль глубокого анализа дорожно-транспортных происшествий</h2>
                    <p className="text-sm text-[#4a627a]">Почему сбор детальных статистических метрик является базисом всей долгосрочной профилактики</p>
                  </div>
                </div>

                {/* Subheading intro representing methodology */}
                <p className="text-base text-[#4a627a] leading-relaxed">
                  Профессиональное расследование дорожной картины не ограничивается фиксацией юридического факта правонарушения. Без предикативного интеллектуального анализа невозможно выявить латентно накапливаемые структурные огрехи автодорог. Анализ формирует научно-доказательную платформу для проектирования безопасных развязок и применения жестких профилактических программ.
                </p>

                {/* Feature grid with 4 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Card 1 */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 transition-all hover:translate-y-[-4px] hover:shadow-lg hover:border-[#f39c12]/30 flex gap-4">
                    <div className="p-3.5 bg-rose-50 rounded-xl text-rose-600 shrink-0 h-fit">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#0e3b4f] mb-1.5">1. Выявление устойчивых очагов аварийности</h3>
                      <p className="text-xs text-[#4a627a] leading-relaxed">
                        Компьютерное картирование и группировка точек происшествий в специальные кластеры («черные точки»). Это помогает точно локализовать перекрестки, съезды или закругления дорог, на которых систематически сталкиваются ТС.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 transition-all hover:translate-y-[-4px] hover:shadow-lg hover:border-[#f39c12]/30 flex gap-4">
                    <div className="p-3.5 bg-emerald-50 rounded-xl text-emerald-600 shrink-0 h-fit">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#0e3b4f] mb-1.5">2. Оценка эффективности превентивных мер</h3>
                      <p className="text-xs text-[#4a627a] leading-relaxed">
                        Сравнение временных векторов аварийности «До» и «После» внедрения конструктивных изменений (установка светофора, камер автофиксации, изменение вектора приоритета движения, нанесение тактильной разметки).
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 transition-all hover:translate-y-[-4px] hover:shadow-lg hover:border-[#f39c12]/30 flex gap-4">
                    <div className="p-3.5 bg-purple-50 rounded-xl text-purple-600 shrink-0 h-fit">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#0e3b4f] mb-1.5">3. Прогнозирование рисков на дорожной сети</h3>
                      <p className="text-xs text-[#4a627a] leading-relaxed">
                        Позволяет выстраивать модели потенциальной аварийности с учетом погодных условий, сезонных факторов, ввода новых микрорайонов, и заблаговременно передислоцировать экипажи надзорных органов для предотвращения эксцессов.
                      </p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 transition-all hover:translate-y-[-4px] hover:shadow-lg hover:border-[#f39c12]/30 flex gap-4">
                    <div className="p-3.5 bg-blue-50 rounded-xl text-[#155d7a] shrink-0 h-fit">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#0e3b4f] mb-1.5">4. Повышение качества расследования происшествий</h3>
                      <p className="text-xs text-[#4a627a] leading-relaxed">
                        Накопленный массив данных о траекториях движения транспортных средств в момент аварии повышает общую точность трасологической экспертизы, позволяя восстанавливать справедливость по спорным случаям.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Analytical statement block */}
                <div className="bg-[#155d7a]/5 border border-[#155d7a]/20 rounded-2xl p-6 flex gap-4 items-center">
                  <div className="text-3xl font-black text-[#155d7a]">4.0</div>
                  <div className="text-xs text-[#4a627a] leading-relaxed">
                    Данный подход соответствует Концепции <strong className="text-[#0e3b4f]">«Vision Zero» (Нулевой травматизм)</strong>, принятой на международном уровне. Главная ценность — допущение, что человек имеет право на ошибку, а дорожная транспортная система должна быть физически спроектирована так, чтобы минимизировать фатальность последствий любых человеческих ошибок.
                  </div>
                </div>
              </motion.section>
            )}

            {/* PANE 4: СПЕЦИФИКА РАССЛЕДОВАНИЯ */}
            {activeTab === 4 && (
              <motion.section
                key="pane-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8 animate-fade-in"
              >
                {/* Heading Block */}
                <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                  <div className="p-3 bg-blue-50 text-[#155d7a] rounded-xl">
                    <Scale className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0e3b4f]">Специфика и процессуальные основы расследования ДТП</h2>
                    <p className="text-sm text-[#4a627a]">Особая процедура осмотра места аварии, изъятия вещдоков и взаимодействия государственных ведомств</p>
                  </div>
                </div>

                {/* Feature grid with 4 cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Card 1: Оперативность */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Clock className="w-6 h-6 text-[#d9534f]" />
                        <h3 className="font-bold text-lg text-[#0e3b4f]">Высокая оперативность</h3>
                      </div>
                      <p className="text-xs text-[#4a627a] leading-relaxed">
                        Фиксация следовой картины должна производиться максимально оперативно. Автомобильный поток, изменчивые метеоусловия (дождь, снегопад, движение колес других авто) могут бесследно стереть тормозные пути, следы скольжения и осколки фаз на асфальте.
                      </p>
                    </div>
                    <div className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-t border-slate-100 pt-2">
                      Фактор времени критичен
                    </div>
                  </div>

                  {/* Card 2: Комплексная доказательственная база */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Search className="w-6 h-6 text-[#155d7a]" />
                        <h3 className="font-bold text-lg text-[#0e3b4f]">Комплексная доказательная база</h3>
                      </div>
                      <p className="text-xs text-[#4a627a] leading-relaxed">
                        Для достижения объективности приобщаются высокотехнологичные телематические данные: видеозаписи автомобильных регистраторов и систем внешнего наблюдения («Безопасный город»), координационные метрики датчиков ГЛОНАСС/GPS, а также диагностические отчеты электронных блоков управления ТС (ECU).
                      </p>
                    </div>
                    <div className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-t border-slate-100 pt-2">
                      Технологии на защите права
                    </div>
                  </div>

                  {/* Card 3: Межведомственное взаимодействие */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Users className="w-6 h-6 text-[#27ae60]" />
                        <h3 className="font-bold text-lg text-[#0e3b4f]">Межведомственный характер работы</h3>
                      </div>
                      <p className="text-xs text-[#4a627a] leading-relaxed">
                        Качественное разбирательство возможно при слаженном реагировании нескольких структур: ГИБДД (первое оцепление, фиксация схемы ДТП), Следственный комитет (возбуждение дел при погибших), МЧС (деблокировка зажатых людей), Медицина катастроф (оказание срочной врачебной реанимационной помощи).
                      </p>
                    </div>
                    <div className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-t border-slate-100 pt-2">
                      Синхронизация протоколов
                    </div>
                  </div>

                  {/* Card 4: Защита ПДД ФЗ-152 */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Lock className="w-6 h-6 text-[#8e44ad]" />
                        <h3 className="font-bold text-lg text-[#0e3b4f]">Защита прав граждан и ФЗ-152</h3>
                      </div>
                      <p className="text-xs text-[#4a627a] leading-relaxed">
                        При обращении с персональными данными свидетелей и пострадавших, сборе инвентарных реестров госномеров и медицинских карт, строго регламентируется следование Федеральному Закону №152-ФЗ «О персональных данных» для исключения компрометации личных прав сторон.
                      </p>
                    </div>
                    <div className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-t border-slate-100 pt-2">
                      Полная конфиденциальность
                    </div>
                  </div>

                </div>

                {/* Specific investigative workflow block */}
                <div className="bg-gradient-to-r from-[#0a2e3f] to-[#155d7a] text-white rounded-2xl p-6 border-l-4 border-[#f39c12]">
                  <h4 className="font-extrabold text-md mb-2 text-[#f39c12] uppercase tracking-wider text-xs">Процедурный перечень действий следователя на месте ДТП:</h4>
                  <p className="text-xs text-slate-200 leading-relaxed mb-4">
                    Неотложные следственно-процессуальные этапы включают в себя оцепление территории, экстренное ограждение поврежденных ТС, замеры координат следов торможения от статичных ориентиров, поиск и видео-допрос очевидцев, фотосъемку тормозных следов методом макросъемки.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/10 p-3 rounded-lg text-center backdrop-blur-sm">
                      <span className="text-xs font-bold text-[#f39c12] block">Этап I</span>
                      <span className="text-[10px] text-slate-300 block mt-0.5">Ограждение зоны и вызов врачей</span>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg text-center backdrop-blur-sm">
                      <span className="text-xs font-bold text-[#f39c12] block">Этап II</span>
                      <span className="text-[10px] text-slate-300 block mt-0.5">Составление схемы и промеры следов</span>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg text-center backdrop-blur-sm">
                      <span className="text-xs font-bold text-[#f39c12] block">Этап III</span>
                      <span className="text-[10px] text-slate-300 block mt-0.5">Фигурная фиксация повреждений ТС</span>
                    </div>
                  </div>
                </div>
              </motion.section>
            )}

            {/* PANE 5: МЕРЫ БЕЗОПАСНОСТИ */}
            {activeTab === 5 && (
              <motion.section
                key="pane-5"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8 animate-fade-in"
              >
                {/* Heading Block */}
                <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                  <div className="p-3 bg-blue-50 text-[#155d7a] rounded-xl">
                    <Shield className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0e3b4f]">Комплексные меры обеспечения дорожной безопасности</h2>
                    <p className="text-sm text-[#4a627a]">Памятки для различных категорий участников дорожного движения и региональная политика</p>
                  </div>
                </div>

                {/* Safety grid (3 categories) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  {/* Category 1: Drivers */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[#f39c12]/40 transition-all">
                    <div className="absolute top-0 right-0 p-3 bg-slate-50 rounded-bl-2xl text-[#155d7a] transition-colors group-hover:bg-[#155d7a] group-hover:text-white">
                      <Car className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-lg text-[#0e3b4f] mb-4">Для водителей ТС</h3>
                    <ul className="space-y-3.5 text-sm">
                      {[
                        { tip: 'Обязательное использование ремней безопасности каждым пассажиром.' },
                        { tip: 'Соблюдение скоростных интервалов с поправкой на асфальтовые ливни и гололед.' },
                        { tip: 'Абсолютный запрет на употребление алкоголя / отвлекающих веществ.' },
                        { tip: 'Своевременный контроль безопасной дистанции и бокового интервала.' },
                        { tip: 'Регулярная сезонная проверка состояния тормозов и глубины протектора шин.' },
                        { tip: 'Интервал отдыха за рулем не менее 15 минут каждые 4 часа поездки.' },
                      ].map((item, id) => (
                        <li key={id} className="flex gap-2 items-start text-xs text-[#4a627a] leading-relaxed">
                          <Check className="w-4.5 h-4.5 text-[#f39c12] shrink-0 mt-0.5" />
                          <span>{item.tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Category 2: Pedestrians */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[#f39c12]/40 transition-all">
                    <div className="absolute top-0 right-0 p-3 bg-slate-50 rounded-bl-2xl text-[#155d7a] transition-colors group-hover:bg-[#155d7a] group-hover:text-white">
                      <User className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-lg text-[#0e3b4f] mb-4">Для пешеходов</h3>
                    <ul className="space-y-3.5 text-sm">
                      {[
                        { tip: 'Переход проезжей части строго в специально обозначенных пешеходных переходах.' },
                        { tip: 'Обязательное ношение фликеров / световозвращающих лент ночью на трассах.' },
                        { tip: 'Визуальный контроль безопасности: посмотрите по сторонам перед выходом.' },
                        { tip: 'Полное исключение наушников и мобильных во время старта движения.' },
                        { tip: 'Категорический стоп перед ступенями перехода для коррекции инерции ТС.' },
                      ].map((item, id) => (
                        <li key={id} className="flex gap-2 items-start text-xs text-[#4a627a] leading-relaxed">
                          <Check className="w-4.5 h-4.5 text-[#1abc9c] shrink-0 mt-0.5" />
                          <span>{item.tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Category 3: Cyclists / SIM */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[#f39c12]/40 transition-all">
                    <div className="absolute top-0 right-0 p-3 bg-slate-50 rounded-bl-2xl text-[#155d7a] transition-colors group-hover:bg-[#155d7a] group-hover:text-white">
                      <Bike className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-lg text-[#0e3b4f] mb-4">Самокаты и велосипеды (СИМ)</h3>
                    <ul className="space-y-3.5 text-sm">
                      {[
                        { tip: 'Наличие индивидуального защитного шлема, налокотников и щитков.' },
                        { tip: 'Оснащение транспортного средства передним белым фонарем и задними отражателями.' },
                        { tip: 'Спешивание пешком при попытке преодолеть пешеходный переход.' },
                        { tip: 'Исключение маневрирования в слепых секторах грузовиков и автобусов.' },
                      ].map((item, id) => (
                        <li key={id} className="flex gap-2 items-start text-xs text-[#4a627a] leading-relaxed">
                          <Check className="w-4.5 h-4.5 text-purple-600 shrink-0 mt-0.5" />
                          <span>{item.tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Info block: Pedestrian statistics in Mari El */}
                <div className="bg-rose-50/50 border border-rose-100 p-6 rounded-2xl space-y-2">
                  <h4 className="font-bold text-base text-rose-950 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-[#d9534f]" />
                    Статистический фокус на пешеходные риски в Марий Эл
                  </h4>
                  <p className="text-xs text-[#4a627a] leading-relaxed">
                    Дорожный инспекторат выявил, что в более <strong className="text-[#d9534f]">40%</strong> случаев виновником наезда на пешехода становится сам проходящий человек, пересекающий многополосную магистраль «вне установленных зон». При этом тяжесть последствий кратно возрастает при отсутствии светоотражающих полос одежды на провинциальных темных дорогах (Трасса Кокшайск – Йошкар-Ола и прилегающие).
                  </p>
                </div>

                {/* Subheading: "Комплексные меры на уровне региона" */}
                <div className="pt-4 border-t border-slate-200">
                  <h3 className="text-xl font-bold text-[#0e3b4f] mb-6">Комплексные меры дорожной безопасности на уровне региона</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Infrastructure */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                      <span className="w-10 h-10 bg-blue-100 text-[#155d7a] rounded-xl flex items-center justify-center font-bold text-sm mb-4">А</span>
                      <h4 className="font-bold text-md text-[#0e3b4f] mb-2">Инфраструктурные меры</h4>
                      <p className="text-xs text-[#4a627a] leading-relaxed">
                        Реконструкция аварийно-опасных участков: плановое уширение обочин, установка современных светофоров с вызывной Т-кнопкой для пешеходов, монтаж искусственных неровностей и разделяющих барьеров.
                      </p>
                    </div>

                    {/* Enforcement */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                      <span className="w-10 h-10 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center font-bold text-sm mb-4">Б</span>
                      <h4 className="font-bold text-md text-[#0e3b4f] mb-2">Контрольно-надзорные</h4>
                      <p className="text-xs text-[#4a627a] leading-relaxed">
                        Расширение фоторадарных зон контроля скоростного режима по трассам Р-176 «Вятка», точечные рейдовые задержания нетрезвых водителей силами скрытых патрулей ГИБДД.
                      </p>
                    </div>

                    {/* Educational */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                      <span className="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-center font-bold text-sm mb-4">В</span>
                      <h4 className="font-bold text-md text-[#0e3b4f] mb-2">Просветительские меры</h4>
                      <p className="text-xs text-[#4a627a] leading-relaxed">
                        Проведение масштабных обучающих школьных акций «Лаборатория безопасности» в детских лагерях, социальная наружная щитовая реклама нарушений на опорных дорогах республики.
                      </p>
                    </div>

                  </div>
                </div>
              </motion.section>
            )}

            {/* PANE 6: ЭКСТРЕННЫЕ СЛУЖБЫ */}
            {activeTab === 6 && (
              <motion.section
                key="pane-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8 animate-fade-in"
              >
                {/* Heading Block */}
                <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                  <div className="p-3 bg-blue-50 text-[#155d7a] rounded-xl">
                    <Siren className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0e3b4f]">Реагирование экстренных оперативных служб и правила действий</h2>
                    <p className="text-sm text-[#4a627a]">Короткие справочные номера спасения и алгоритм поведения участников ДТП</p>
                  </div>
                </div>

                {/* Emergency grid (4 cards 112, 101, 102, 103) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  
                  {/* 112 */}
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl text-center shadow-sm relative overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="text-4xl font-extrabold text-[#0e3b4f]">112</div>
                      <div className="font-bold text-sm text-[#0e3b4f] mt-1">Единая служба</div>
                      <p className="text-[11px] text-[#4a627a] mt-2">
                        Глобальный телефон спасения координации МЧС, Пожарных, Полиции и Скорой помощи со всех сотовых.
                      </p>
                    </div>
                    <span className="inline-block mt-4 text-[10px] font-bold text-slate-400">БЕЗ SIM-КАРТЫ</span>
                  </div>

                  {/* 101 */}
                  <div className="bg-rose-50/50 border border-rose-150 p-6 rounded-2xl text-center shadow-sm relative overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="text-4xl font-extrabold text-[#d9534f]">101</div>
                      <div className="font-bold text-sm text-[#d9534f] mt-1">Пожарно-спасательная</div>
                      <p className="text-[11px] text-rose-950 mt-2">
                        Тушение возгораний в случае замыкания электроники ТС, деблокировка раненых и тушение топлива.
                      </p>
                    </div>
                    <span className="inline-block mt-4 text-[10px] font-bold text-[#d9534f]">БЕЗУСЛОВНЫЙ ВЫЗОВ</span>
                  </div>

                  {/* 102 */}
                  <div className="bg-blue-50/50 border border-[#155d7a]/20 p-6 rounded-2xl text-center shadow-sm relative overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="text-4xl font-extrabold text-[#155d7a]">102</div>
                      <div className="font-bold text-sm text-[#155d7a] mt-1">Полиция / ДПС</div>
                      <p className="text-[11px] text-slate-800 mt-2">
                        Вызов инспектора куратора для регулирования ДТП, протоколирования, разбора схемных траекторий.
                      </p>
                    </div>
                    <span className="inline-block mt-4 text-[10px] font-bold text-[#155d7a]">ГОС-НАДЗОР</span>
                  </div>

                  {/* 103 */}
                  <div className="bg-emerald-50/50 border border-emerald-150 p-6 rounded-2xl text-center shadow-sm relative overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="text-4xl font-extrabold text-[#27ae60]">103</div>
                      <div className="font-bold text-sm text-[#27ae60] mt-1">Скорая медпомощь</div>
                      <p className="text-[11px] text-emerald-950 mt-2">
                        Экстренная реанимационная стабилизация здоровья пострадавшего, госпитализация травмированных.
                      </p>
                    </div>
                    <span className="inline-block mt-4 text-[10px] font-bold text-[#27ae60]">ЖИЗНЕННО КРИТИЧНО</span>
                  </div>

                </div>

                {/* Additional Contacts Block */}
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
                  <h4 className="font-bold text-sm text-[#0e3b4f] uppercase tracking-wide mb-3">
                    Дополнительные телефоны доверия в Республике Марий Эл:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="bg-white p-3 rounded-lg border border-slate-100">
                      <strong className="text-slate-800 block">Дежурная часть ГИБДД МВД по РМЭ:</strong>
                      <span className="text-slate-600 font-semibold block mt-1">+7 (8362) 68-09-70</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-100">
                      <strong className="text-slate-800 block">МЧС России по Республике Марий Эл:</strong>
                      <span className="text-slate-600 font-semibold block mt-1">+7 (8362) 69-02-00</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-100">
                      <strong className="text-slate-800 block">Аварийные комиссары (Йошкар-Ола):</strong>
                      <span className="text-[#f39c12] font-semibold block mt-1">+7 (8362) 347-112</span>
                    </div>
                  </div>
                </div>

                {/* Safety Card: Что делать при ДТП? */}
                <div className="bg-white border-2 border-dashed border-[#f39c12]/40 rounded-3xl p-6 md:p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-6 h-6 text-[#f39c12]" />
                    <h3 className="font-bold text-xl text-[#0e3b4f]">Регламентный алгоритм: Что делать при ДТП?</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {[
                      { step: '1', title: 'Остановка движения', body: 'Экстренно зажмите ручной тормоз, остановите авто, сразу включите аварийные световые сигналы.' },
                      { step: '2', title: 'Аварийный знак', body: 'Установите знак аварийной остановки (в городе — 15м, за городом/трасса — не менее 30м).' },
                      { step: '3', title: 'Оценка пострадавших', body: 'Определите наличие травмированных. Окажите базовую первую помощь, вызовите реанимацию 112.' },
                      { step: '4', title: 'Фото/Видео фиксация', body: 'Сфотографируйте поврежденные машины во всех подробностях, включая взаимные тормозные пути.' },
                      { step: '5', title: 'Освобождение полосы', body: 'Освободите проезжую часть, если заблокировано все движение (только если нет тяжелых пострадавших!).' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-slate-50 p-4 rounded-xl relative hover:bg-slate-100/50 transition-colors">
                        <span className="absolute top-2 right-2 text-2xl font-black text-slate-200">{item.step}</span>
                        <h4 className="font-bold text-xs text-[#0e3b4f] mb-2 pr-4">{item.title}</h4>
                        <p className="text-[11px] text-[#4a627a] leading-relaxed">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footnote stating the 112 condition */}
                <footer className="text-xs text-[#4a627a] flex items-center gap-2 pt-2">
                  <Info className="w-4 h-4 text-slate-400" />
                  <span>Важно: Вызов службы 112 возможен со всех операторов без денег на счету и даже при полном отсутствии SIM-карты в гнезде телефона.</span>
                </footer>
              </motion.section>
            )}

            {/* PANE 7: ПРОФИЛАКТИКА И СОВЕТЫ */}
            {activeTab === 7 && (
              <motion.section
                key="pane-7"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8 animate-fade-in"
              >
                {/* Heading Block */}
                <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                  <div className="p-3 bg-blue-50 text-[#155d7a] rounded-xl">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0e3b4f]">Рекомендации по профилактике ДТП на каждый день</h2>
                    <p className="text-sm text-[#4a627a]">Факторы риска, предотвращение уличных аварий в сложных погодно-климатических условиях</p>
                  </div>
                </div>

                {/* Feature grid with 4 cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Card 1: Сложные погодные условия */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 transition-all hover:translate-y-[-4px] hover:shadow-lg flex gap-4">
                    <div className="p-3.5 bg-blue-50 rounded-xl text-blue-600 shrink-0 h-fit">
                      <CloudRain className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#0e3b4f] mb-1.5">1. Погодные факторы (дожди и первый лед)</h3>
                      <p className="text-xs text-[#4a627a] leading-relaxed">
                        Республика Марий Эл характеризуется протяженными лесными участками дорог с высокой вероятностью туманов и резкого локального обледенения асфальта под кронами деревьев. Понижайте скорость при входе в лесной сектор в весенне-осенний сезон.
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Темное время суток */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 transition-all hover:translate-y-[-4px] hover:shadow-lg flex gap-4">
                    <div className="p-3.5 bg-amber-50 rounded-xl text-[#f39c12] shrink-0 h-fit">
                      <Eye className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#0e3b4f] mb-1.5">2. Безопасность в глубоких сумерках и ночью</h3>
                      <p className="text-xs text-[#4a627a] leading-relaxed">
                        Ночная освещенность загородных трасс низкая. Распознаваемость человека без фликеров снижается до <strong className="text-[#d9534f]">15-20 метров</strong>. Фликеры повышают предел видимости встречных фар до <strong className="text-emerald-700">150-200 метров</strong>, спасая человека.
                      </p>
                    </div>
                  </div>

                  {/* Card 3: Детская безопасность */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 transition-all hover:translate-y-[-4px] hover:shadow-lg flex gap-4">
                    <div className="p-3.5 bg-purple-50 rounded-xl text-purple-600 shrink-0 h-fit">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#0e3b4f] mb-1.5">3. Транспортировка детей и колясок</h3>
                      <p className="text-xs text-[#4a627a] leading-relaxed">
                        Перевозка до 7/12 лет только в специализированном автокресле ISOFIX. Не перевозите детей на руках — при лобовом аварийном встречном ударе на скорости 50 км/ч вес ребенка моментально возрастает в десятки раз, удержать его физически невозможно.
                      </p>
                    </div>
                  </div>

                  {/* Card 4: Гаджеты и утомляемость */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 transition-all hover:translate-y-[-4px] hover:shadow-lg flex gap-4">
                    <div className="p-3.5 bg-red-50 rounded-xl text-red-500 shrink-0 h-fit">
                      <AlertOctagon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#0e3b4f] mb-1.5">4. Факторы сна и мобильная зависимость</h3>
                      <p className="text-xs text-[#4a627a] leading-relaxed">
                        Ответ на 1 сообщение в мессенджере отвлекает водителя ровно на 4.5 секунды. На скорости 90 км/ч за этот миг неуправляемый автомобиль пролетает слепо в пространстве более <strong className="text-[#d9534f]">100 метров</strong>! Исключите телефоны за рулем.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Info block with vital stats about safety belts */}
                <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-bold text-emerald-900 text-base">Статистический вес удерживающих систем безопасности</h4>
                    <p className="text-xs text-emerald-800 leading-relaxed max-w-4xl">
                      Научно доказано: использование стандартных штатных ремней безопасности водителем и передним пассажиром сокращает риски смертельного исхода при лобовом ударе на <strong className="text-emerald-950 font-bold">45-50%</strong>, а при боковых критических контактах — на <strong className="text-emerald-950 font-bold">60%</strong>. Использование спец-детского сиденья спасает новорожденных младенцев в <strong className="text-emerald-950 font-bold">71%</strong> аварийных ситуаций.
                    </p>
                  </div>
                  <div className="flex gap-4 shrink-0">
                    <div className="bg-white p-3 rounded-lg border border-emerald-100 text-center min-w-[90px]">
                      <span className="text-2xl font-black text-emerald-600 block">-50%</span>
                      <span className="text-[10px] text-stone-500 block uppercase font-bold tracking-wider mt-0.5">Ремни</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-emerald-100 text-center min-w-[90px]">
                      <span className="text-2xl font-black text-emerald-600 block">-71%</span>
                      <span className="text-[10px] text-stone-500 block uppercase font-bold tracking-wider mt-0.5">Кресла</span>
                    </div>
                  </div>
                </div>

                {/* Final Safety Quote */}
                <div className="bg-gradient-to-r from-[#0a2e3f] via-[#155d7a] to-[#2c7fb8] text-white p-8 rounded-3xl relative overflow-hidden block text-center">
                  <span className="text-[#f39c12] text-xs font-black uppercase tracking-widest block mb-2">Напоминание по безопасности</span>
                  <h3 className="text-2xl font-extrabold mb-3">Дорога не прощает легкомыслия и спешки.</h3>
                  <p className="text-sm text-slate-200/90 max-w-2xl mx-auto leading-relaxed">
                    Дисциплина каждого отдельного водителя, взаимоуважение всех прохожих и велосипедистов наряду с системной проработкой перекрестков дорожными службами способны сохранить сотни человеческих судеб в Республике Марий Эл.
                  </p>
                </div>
              </motion.section>
            )}

          </AnimatePresence>
        </main>

        {/* SECTION 4: FOOTER */}
        <footer 
          id="app-footer"
          className="bg-gradient-to-r from-[#0a2e3f] to-[#155d7a] text-white py-10 px-6 sm:px-10 border-t-4 border-[#f39c12]"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left Brand Identity */}
            <div className="flex items-center gap-3">
              <span className="p-2 bg-[#f39c12] rounded-lg text-white">
                <Compass className="w-5 h-5 animate-spin-slow" />
              </span>
              <div>
                <span className="font-extrabold text-sm block">БДД Марий Эл</span>
                <span className="text-[10px] text-slate-400 block tracking-wider uppercase">Профилактика и анализ</span>
              </div>
            </div>

            {/* Middle descriptive bullet items */}
            <div className="text-center text-xs text-slate-300 space-y-2 md:space-y-0 md:flex md:items-center md:gap-4 md:divide-x md:divide-white/10">
              <span className="block pl-4">Данные по Республике Марий Эл 2024–2025 гг.</span>
              <span className="block pl-4 font-semibold text-[#f39c12]">Берегите себя и своих близких на дорогах!</span>
              <span className="block pl-4">Вместе — за безопасное будущее</span>
            </div>

            {/* Right Copyright indicator */}
            <div className="text-right text-[10px] text-slate-400">
              <span>Для университетского диплома</span>
              <span className="block font-medium mt-0.5">&copy; 2026. РМЭ Йошкар-Ола</span>
            </div>

          </div>
        </footer>

      </div>
    </div>
  );
}
