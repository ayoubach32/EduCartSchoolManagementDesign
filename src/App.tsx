import { useState, type ReactNode } from "react";
import {
  Activity,
  Bell,
  CalendarDays,
  Camera,
  Check,
  ChevronDown,
  ChevronLeft,
  CircleUserRound,
  Clock3,
  CreditCard,
  Download,
  Eye,
  FileCheck2,
  FileText,
  Filter,
  GraduationCap,
  House,
  IdCard,
  KeyRound,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MoreHorizontal,
  Pencil,
  Phone,
  Plus,
  QrCode,
  RefreshCw,
  ScanLine,
  Search,
  Send,
  Settings,
  ShieldCheck,
  Smartphone,
  Tablet,
  TriangleAlert,
  Upload,
  UserRound,
  UserRoundCog,
  Users,
  Wifi,
  WifiOff,
  X,
  XCircle,
} from "lucide-react";

type Platform = "admin" | "mobile" | "scanner";
type Tone = "success" | "warning" | "danger" | "info" | "neutral";
type IconType = typeof House;

const photos = {
  boy: "https://images.unsplash.com/photo-1548102245-c79dbcfa9f92?crop=faces&fit=crop&w=240&h=240&q=85",
  girl: "https://images.unsplash.com/photo-1664990594725-552201db8079?crop=faces&fit=crop&w=240&h=240&q=85",
  student:
    "https://images.unsplash.com/photo-1569173675610-42c361a86e37?crop=faces&fit=crop&w=240&h=240&q=85",
};

function Brand({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <div className={`brand ${light ? "brand-light" : ""}`}>
      <div className="brand-mark">
        <CreditCard size={compact ? 20 : 26} strokeWidth={2.3} />
        <span className="brand-check">✓</span>
      </div>
      {!compact && (
        <div>
          <strong>EduCart</strong>
          <span>بطاقة التلميذ الإلكترونية</span>
        </div>
      )}
    </div>
  );
}

function Button({
  children,
  variant = "primary",
  icon: Icon,
  onClick,
  small = false,
  className = "",
}: {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  icon?: IconType;
  onClick?: () => void;
  small?: boolean;
  className?: string;
}) {
  return (
    <button
      className={`btn btn-${variant} ${small ? "btn-small" : ""} ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon size={small ? 16 : 18} />} {children}
    </button>
  );
}

function Badge({
  children,
  tone = "neutral",
  dot = true,
}: {
  children: ReactNode;
  tone?: Tone;
  dot?: boolean;
}) {
  return (
    <span className={`badge badge-${tone}`}>
      {dot && <i />}
      {children}
    </span>
  );
}

function Avatar({
  src,
  name,
  size = "md",
  status,
}: {
  src?: string;
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  status?: boolean;
}) {
  return (
    <div className={`avatar avatar-${size}`}>
      {src ? <img src={src} alt={name} /> : <span>{name.slice(0, 2)}</span>}
      {status && <i />}
    </div>
  );
}

function Field({
  label,
  placeholder,
  icon: Icon,
  type = "text",
}: {
  label?: string;
  placeholder: string;
  icon?: IconType;
  type?: string;
}) {
  return (
    <label className="field">
      {label && <span>{label}</span>}
      <div>
        {Icon && <Icon size={18} />}
        <input type={type} placeholder={placeholder} />
      </div>
    </label>
  );
}

function SelectBox({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <label className="field">
      {label && <span>{label}</span>}
      <div>
        <select defaultValue="">
          <option value="" disabled>
            {children}
          </option>
        </select>
        <ChevronDown size={16} />
      </div>
    </label>
  );
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`card ${className}`}>{children}</section>;
}

function PageTitle({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle: string;
  action?: ReactNode;
}) {
  return (
    <div className="page-title">
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      {action}
    </div>
  );
}

function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  tone,
}: {
  label: string;
  value: string;
  hint: string;
  icon: IconType;
  tone: Tone;
}) {
  return (
    <Card className="stat-card">
      <div className={`stat-icon ${tone}`}>
        <Icon size={22} />
      </div>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{hint}</small>
      </div>
    </Card>
  );
}

const navItems: [string, IconType][] = [
  ["الرئيسية", LayoutDashboard],
  ["التلاميذ", GraduationCap],
  ["الأولياء", Users],
  ["الأساتذة", UserRound],
  ["الأقسام", House],
  ["البطاقات", IdCard],
  ["الحضور", Check],
  ["الغياب", XCircle],
  ["التأخر", Clock3],
  ["التبريرات", FileCheck2],
  ["التقارير", FileText],
  ["المستخدمون", UserRoundCog],
  ["الرسائل", Mail],
  ["الإعدادات", Settings],
];

function Sidebar({ active, setActive }: { active: string; setActive: (s: string) => void }) {
  return (
    <aside className="sidebar">
      <Brand light />
      <div className="school-mini">
        <div className="school-logo">ث</div>
        <div>
          <strong>متوسطة الأمير عبد القادر</strong>
          <span>الجزائر الوسطى</span>
        </div>
      </div>
      <nav>
        {navItems.map(([label, Icon]) => (
          <button
            key={label}
            className={active === label ? "active" : ""}
            onClick={() => setActive(label)}
          >
            <Icon size={19} />
            <span>{label}</span>
            {label === "التبريرات" && <em>8</em>}
          </button>
        ))}
      </nav>
      <div className="sidebar-help">
        <ShieldCheck />
        <strong>النظام محمي وآمن</strong>
        <span>آخر مزامنة منذ دقيقتين</span>
      </div>
    </aside>
  );
}

function Topbar({ setActive }: { setActive: (s: string) => void }) {
  return (
    <header className="topbar">
      <div className="topbar-actions">
        <button className="icon-button notification">
          <Bell size={20} />
          <i />
        </button>
        <button className="profile-button" onClick={() => setActive("الإعدادات")}>
          <Avatar name="سمير ب." size="sm" />
          <span>
            <strong>سمير بوعلام</strong>
            <small>مدير المؤسسة</small>
          </span>
          <ChevronDown size={16} />
        </button>
      </div>
      <button className="year-select">
        <CalendarDays size={18} />
        <span>السنة الدراسية 2025 / 2026</span>
        <ChevronDown size={16} />
      </button>
    </header>
  );
}

const students = [
  {
    name: "محمد بن علي",
    id: "EDC-240183",
    section: "3م2",
    status: "نشطة",
    rate: "96%",
    photo: photos.boy,
  },
  {
    name: "سارة بوسعادة",
    id: "EDC-240206",
    section: "2م1",
    status: "نشطة",
    rate: "98%",
    photo: photos.girl,
  },
  {
    name: "أيمن قادري",
    id: "EDC-240217",
    section: "4م3",
    status: "موقوفة",
    rate: "87%",
    photo: photos.student,
  },
  {
    name: "ريم شرفاوي",
    id: "EDC-240224",
    section: "1م4",
    status: "نشطة",
    rate: "94%",
    photo: photos.girl,
  },
  {
    name: "عبد الرحمن زروقي",
    id: "EDC-240229",
    section: "3م2",
    status: "ضائعة",
    rate: "91%",
    photo: photos.boy,
  },
];

function AttendanceChart() {
  return (
    <Card className="chart-card">
      <div className="card-heading">
        <div>
          <h2>نسبة الحضور</h2>
          <p>تطور الحضور خلال آخر 30 يوماً</p>
        </div>
        <Badge tone="success">+2.4% هذا الشهر</Badge>
      </div>
      <div className="line-chart">
        <div className="chart-y">
          <span>100%</span>
          <span>90%</span>
          <span>80%</span>
          <span>70%</span>
        </div>
        <svg viewBox="0 0 800 230" preserveAspectRatio="none" aria-label="منحنى نسبة الحضور">
          <defs>
            <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2A7F5F" stopOpacity=".22" />
              <stop offset="100%" stopColor="#2A7F5F" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path className="gridline" d="M0 20H800 M0 80H800 M0 140H800 M0 200H800" />
          <path
            className="area"
            d="M0 150 C70 130 85 100 150 112 S240 65 305 89 S390 125 450 80 S540 42 600 65 S700 38 800 48 L800 230 L0 230Z"
          />
          <path
            className="trend"
            d="M0 150 C70 130 85 100 150 112 S240 65 305 89 S390 125 450 80 S540 42 600 65 S700 38 800 48"
          />
          <circle cx="600" cy="65" r="6" />
          <circle cx="800" cy="48" r="6" />
        </svg>
        <div className="chart-x">
          <span>01 ماي</span>
          <span>08 ماي</span>
          <span>15 ماي</span>
          <span>22 ماي</span>
          <span>اليوم</span>
        </div>
      </div>
    </Card>
  );
}

function DonutCard() {
  return (
    <Card className="donut-card">
      <div className="card-heading">
        <div>
          <h2>الحضور حسب المستوى</h2>
          <p>اليوم، 28 ماي</p>
        </div>
        <button className="plain-icon">
          <MoreHorizontal />
        </button>
      </div>
      <div className="donut">
        <div>
          <strong>94.8%</strong>
          <span>المعدل العام</span>
        </div>
      </div>
      <div className="donut-legend">
        {[
          ["السنة الأولى", "96%", "a"],
          ["السنة الثانية", "95%", "b"],
          ["السنة الثالثة", "93%", "c"],
          ["السنة الرابعة", "95%", "d"],
        ].map(([a, b, c]) => (
          <div key={a}>
            <i className={c} />
            <span>{a}</span>
            <strong>{b}</strong>
          </div>
        ))}
      </div>
    </Card>
  );
}

function Dashboard({ setActive }: { setActive: (s: string) => void }) {
  return (
    <>
      <PageTitle
        title="صباح الخير، سمير"
        subtitle="إليك ملخص وضعية المؤسسة اليوم، الأربعاء 28 ماي 2025"
      />
      <div className="stats-grid">
        <StatCard
          label="الحاضرون اليوم"
          value="1,184"
          hint="94.8% من التلاميذ"
          icon={Check}
          tone="success"
        />
        <StatCard
          label="الغائبون اليوم"
          value="42"
          hint="12 بانتظار التبرير"
          icon={XCircle}
          tone="danger"
        />
        <StatCard
          label="المتأخرون اليوم"
          value="23"
          hint="انخفاض بـ 6 عن الأمس"
          icon={Clock3}
          tone="warning"
        />
        <StatCard
          label="البطاقات النشطة"
          value="1,231"
          hint="98.6% من البطاقات"
          icon={CreditCard}
          tone="info"
        />
      </div>
      <div className="dashboard-charts">
        <AttendanceChart />
        <DonutCard />
      </div>
      <Card>
        <div className="card-heading">
          <div>
            <h2>غيابات اليوم</h2>
            <p>آخر التلاميذ المسجل غيابهم اليوم</p>
          </div>
          <Button variant="ghost" small onClick={() => setActive("الغياب")}>
            عرض كل الغيابات <ChevronLeft size={15} />
          </Button>
        </div>
        <DataTable compact />
      </Card>
    </>
  );
}

function DataTable({
  compact = false,
  cardMode = false,
}: {
  compact?: boolean;
  cardMode?: boolean;
}) {
  const rows = compact ? students.slice(0, 3) : students;
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>التلميذ</th>
            <th>رقم التعريف</th>
            <th>القسم</th>
            <th>{cardMode ? "تاريخ الإصدار" : "حالة البطاقة"}</th>
            <th>{cardMode ? "الحالة" : "نسبة الحضور"}</th>
            <th>إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((s, i) => (
            <tr key={s.id}>
              <td>
                <div className="student-cell">
                  <Avatar src={s.photo} name={s.name} size="sm" />
                  <div>
                    <strong>{s.name}</strong>
                    <small>{i === 0 ? "السنة الثالثة متوسط" : "الطور المتوسط"}</small>
                  </div>
                </div>
              </td>
              <td>
                <span className="latin">{s.id}</span>
              </td>
              <td>
                <strong>{s.section}</strong>
              </td>
              <td>
                {cardMode ? (
                  "12 سبتمبر 2024"
                ) : (
                  <Badge
                    tone={
                      s.status === "نشطة" ? "success" : s.status === "ضائعة" ? "danger" : "warning"
                    }
                  >
                    {s.status}
                  </Badge>
                )}
              </td>
              <td>
                {cardMode ? (
                  <Badge tone={s.status === "نشطة" ? "success" : "warning"}>{s.status}</Badge>
                ) : (
                  <span className="rate">{s.rate}</span>
                )}
              </td>
              <td>
                <div className="row-actions">
                  <button title="عرض">
                    <Eye />
                  </button>
                  <button title="تعديل">
                    <Pencil />
                  </button>
                  <button title="البطاقة">
                    <CreditCard />
                  </button>
                  <button title="المزيد">
                    <MoreHorizontal />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StudentsPage({ setActive }: { setActive: (s: string) => void }) {
  return (
    <>
      <PageTitle
        title="إدارة التلاميذ"
        subtitle="1,248 تلميذاً مسجلاً في المؤسسة"
        action={<Button icon={Plus}>إضافة تلميذ</Button>}
      />
      <Card className="filter-card">
        <Field placeholder="ابحث بالاسم أو رقم التعريف..." icon={Search} />
        <SelectBox>كل المستويات</SelectBox>
        <SelectBox>كل الأقسام</SelectBox>
        <SelectBox>حالة البطاقة</SelectBox>
        <Button variant="secondary" icon={Filter}>
          تصفية
        </Button>
      </Card>
      <Card>
        <div className="table-top">
          <span>عرض 1–5 من أصل 1,248</span>
          <Button variant="ghost" icon={Download} small>
            تصدير القائمة
          </Button>
        </div>
        <div onDoubleClick={() => setActive("ملف التلميذ")}>
          <DataTable />
        </div>
        <div className="pagination">
          <button disabled>
            <ChevronLeft />
          </button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <span>...</span>
          <button>84</button>
          <button>
            <ChevronLeft className="flip" />
          </button>
        </div>
      </Card>
    </>
  );
}

function QR() {
  return (
    <div className="qr" aria-label="رمز الاستجابة السريعة">
      <QrCode />
    </div>
  );
}

function StudentProfile() {
  return (
    <>
      <div className="breadcrumb">
        <span>التلاميذ</span>
        <ChevronLeft />
        <strong>محمد بن علي</strong>
      </div>
      <Card className="profile-hero">
        <Avatar src={photos.boy} name="محمد بن علي" size="xl" />
        <div className="profile-main">
          <div>
            <h1>محمد بن علي</h1>
            <Badge tone="success">متمدرس</Badge>
          </div>
          <p>
            <span>السنة الثالثة متوسط</span>
            <i /> <span>القسم 3م2</span>
            <i />
            <span className="latin">EDC-240183</span>
          </p>
        </div>
        <div className="profile-actions">
          <Button variant="secondary" icon={Pencil}>
            تعديل المعلومات
          </Button>
          <Button icon={CreditCard}>إدارة البطاقة</Button>
        </div>
      </Card>
      <div className="profile-grid">
        <div className="profile-column">
          <Card>
            <div className="card-heading">
              <h2>المعلومات الشخصية</h2>
            </div>
            <div className="info-grid">
              <Info label="تاريخ الميلاد" value="14 مارس 2011" />
              <Info label="مكان الميلاد" value="الجزائر الوسطى" />
              <Info label="الجنس" value="ذكر" />
              <Info label="فصيلة الدم" value="+O" />
              <Info label="رقم التسجيل" value="2021/0834" />
              <Info label="العنوان" value="حي 1200 مسكن، الجزائر" />
            </div>
          </Card>
          <Card>
            <div className="card-heading">
              <div>
                <h2>سجل الحضور — ماي 2025</h2>
                <p>نسبة الحضور 96%</p>
              </div>
              <Badge tone="success">22 يوم حضور</Badge>
            </div>
            <MiniCalendar />
          </Card>
          <Card>
            <div className="card-heading">
              <h2>الغيابات والتبريرات</h2>
              <Button variant="ghost" small>
                عرض الكل
              </Button>
            </div>
            <div className="event-list">
              <EventRow
                date="18 ماي"
                title="غياب يوم كامل"
                meta="مرض — شهادة طبية مرفقة"
                tone="info"
                status="مبرر"
              />
              <EventRow
                date="07 ماي"
                title="تأخر بـ 18 دقيقة"
                meta="الدخول على الساعة 08:18"
                tone="warning"
                status="مقبول"
              />
            </div>
          </Card>
        </div>
        <div className="side-column">
          <StudentCard />
          <Card>
            <div className="card-heading">
              <h2>الأولياء المرتبطون</h2>
              <Button variant="ghost" small icon={Plus}>
                ربط ولي
              </Button>
            </div>
            <div className="parent-item">
              <Avatar name="علي ب. " />
              <div>
                <strong>علي بن علي</strong>
                <span>الأب • ولي رئيسي</span>
                <small>
                  <Phone /> 0556 24 18 90
                </small>
              </div>
            </div>
          </Card>
          <Card>
            <div className="card-heading">
              <h2>آخر النشاطات</h2>
            </div>
            <div className="timeline">
              <div>
                <i />
                <p>
                  <strong>تم تسجيل الدخول</strong>
                  <span>اليوم، 07:54 — البوابة الرئيسية</span>
                </p>
              </div>
              <div>
                <i />
                <p>
                  <strong>تم قبول تبرير الغياب</strong>
                  <span>منذ 3 أيام — بواسطة المشرف</span>
                </p>
              </div>
              <div>
                <i />
                <p>
                  <strong>تم تجديد البطاقة</strong>
                  <span>12 ماي 2025</span>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="info">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
function EventRow({
  date,
  title,
  meta,
  status,
  tone,
}: {
  date: string;
  title: string;
  meta: string;
  status: string;
  tone: Tone;
}) {
  return (
    <div className="event-row">
      <div className="event-date">{date}</div>
      <div>
        <strong>{title}</strong>
        <span>{meta}</span>
      </div>
      <Badge tone={tone}>{status}</Badge>
    </div>
  );
}

function MiniCalendar() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  return (
    <div className="mini-calendar">
      <div className="weekdays">
        {["سبت", "أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة"].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
      <div className="days">
        {days.map((d) => (
          <span
            key={d}
            className={
              d === 7
                ? "late"
                : d === 18
                  ? "absent"
                  : [2, 3, 9, 10, 16, 17, 23, 24, 30, 31].includes(d)
                    ? "off"
                    : "present"
            }
          >
            {d}
          </span>
        ))}
      </div>
      <div className="calendar-key">
        <Badge tone="success">حاضر</Badge>
        <Badge tone="danger">غائب</Badge>
        <Badge tone="warning">متأخر</Badge>
      </div>
    </div>
  );
}

function StudentCard({ large = false }: { large?: boolean }) {
  return (
    <div className={`student-card-preview ${large ? "large" : ""}`}>
      <div className="card-glow" />
      <div className="ecard-top">
        <Brand compact light />
        <span>متوسطة الأمير عبد القادر</span>
      </div>
      <div className="ecard-main">
        <Avatar src={photos.boy} name="محمد بن علي" size={large ? "xl" : "lg"} />
        <div>
          <small>بطاقة التلميذ</small>
          <strong>محمد بن علي</strong>
          <span>السنة الثالثة متوسط • 3م2</span>
          <em className="latin">EDC-240183</em>
        </div>
        <QR />
      </div>
      <div className="ecard-bottom">
        <Badge tone="success">بطاقة نشطة</Badge>
        <span>2025 / 2026</span>
      </div>
    </div>
  );
}

function CardsPage() {
  return (
    <>
      <PageTitle
        title="إدارة البطاقات"
        subtitle="إصدار، تفعيل ومتابعة بطاقات التلاميذ"
        action={<Button icon={Plus}>إصدار بطاقات</Button>}
      />
      <div className="stats-grid small-stats">
        <StatCard
          label="البطاقات النشطة"
          value="1,231"
          hint="98.6% من الإجمالي"
          icon={Check}
          tone="success"
        />
        <StatCard
          label="بانتظار التفعيل"
          value="12"
          hint="تم إصدارها حديثاً"
          icon={Clock3}
          tone="warning"
        />
        <StatCard
          label="موقوفة أو ضائعة"
          value="17"
          hint="تحتاج إلى إجراء"
          icon={TriangleAlert}
          tone="danger"
        />
        <StatCard label="تنتهي قريباً" value="8" hint="خلال 30 يوماً" icon={RefreshCw} tone="info" />
      </div>
      <div className="cards-layout">
        <div>
          <Card className="filter-card">
            <Field placeholder="البحث برقم البطاقة أو اسم التلميذ..." icon={Search} />
            <SelectBox>كل الحالات</SelectBox>
            <Button variant="secondary" icon={Filter}>
              تصفية
            </Button>
          </Card>
          <Card>
            <DataTable cardMode />
          </Card>
        </div>
        <Card className="print-preview">
          <div className="card-heading">
            <div>
              <h2>معاينة البطاقة</h2>
              <p>جاهزة للطباعة</p>
            </div>
            <Button variant="ghost" small icon={Pencil}>
              تخصيص
            </Button>
          </div>
          <StudentCard large />
          <div className="card-back">
            <Brand compact />
            <strong>متوسطة الأمير عبد القادر</strong>
            <span>هذه البطاقة ملك للمؤسسة. في حالة العثور عليها يرجى الاتصال:</span>
            <b className="latin">+213 (0) 21 74 38 10</b>
            <div className="barcode" />
          </div>
          <Button icon={Download} className="full-button">
            تحميل للطباعة
          </Button>
          <div className="card-operations">
            <Button variant="secondary" small icon={RefreshCw}>
              تجديد
            </Button>
            <Button variant="danger" small icon={XCircle}>
              تبليغ بالضياع
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}

const scanRows = [
  ["08:14:32", "سارة بوسعادة", "2م1", "حاضر", photos.girl],
  ["08:13:48", "وليد مرزوق", "1م3", "متأخر", photos.student],
  ["08:12:17", "محمد بن علي", "3م2", "حاضر", photos.boy],
  ["08:11:54", "ريم شرفاوي", "1م4", "حاضر", photos.girl],
];

function AttendancePage() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <PageTitle
        title="مراقبة الحضور"
        subtitle="متابعة عمليات المسح والحضور في الوقت الفعلي"
        action={
          <div className="live-pill">
            <i /> مباشر الآن
          </div>
        }
      />
      <div className="attendance-layout">
        <Card>
          <div className="card-heading">
            <div>
              <h2>آخر عمليات المسح</h2>
              <p>البوابة الرئيسية • اليوم</p>
            </div>
            <Badge tone="success">متصل</Badge>
          </div>
          <div className="live-feed">
            {scanRows.map((r, i) => (
              <div className="scan-row" key={r[0]}>
                <span className="scan-time latin">{r[0]}</span>
                <Avatar src={r[4]} name={r[1]} size="sm" />
                <div>
                  <strong>{r[1]}</strong>
                  <span>القسم {r[2]} • البوابة الرئيسية</span>
                </div>
                <Badge tone={r[3] === "حاضر" ? "success" : "warning"}>{r[3]}</Badge>
                {i === 1 && (
                  <button onClick={() => setModal(true)}>
                    <Pencil />
                  </button>
                )}
              </div>
            ))}
          </div>
        </Card>
        <Card className="today-summary">
          <div className="card-heading">
            <h2>ملخص اليوم</h2>
          </div>
          <div className="big-progress">
            <div>
              <strong>94.8%</strong>
              <span>نسبة الحضور</span>
            </div>
          </div>
          <div className="summary-lines">
            <div>
              <i className="green" />
              <span>حاضرون</span>
              <strong>1,184</strong>
            </div>
            <div>
              <i className="red" />
              <span>غائبون</span>
              <strong>42</strong>
            </div>
            <div>
              <i className="orange" />
              <span>متأخرون</span>
              <strong>23</strong>
            </div>
          </div>
        </Card>
      </div>
      <Card>
        <div className="card-heading">
          <div>
            <h2>القائمة اليومية حسب القسم</h2>
            <p>اختر قسماً لمراجعة الحضور وإجراء التصحيحات</p>
          </div>
          <div className="inline-fields">
            <SelectBox>السنة الثالثة متوسط</SelectBox>
            <SelectBox>القسم 3م2</SelectBox>
          </div>
        </div>
        <DataTable compact />
      </Card>
      {modal && (
        <div className="modal-backdrop">
          <div className="modal">
            <div className="modal-head">
              <div>
                <h2>تصحيح تسجيل الحضور</h2>
                <p>محمد بن علي • القسم 3م2</p>
              </div>
              <button onClick={() => setModal(false)}>
                <X />
              </button>
            </div>
            <div className="modal-body">
              <SelectBox label="الحالة الصحيحة">اختر حالة الحضور</SelectBox>
              <label className="field">
                <span>سبب التصحيح</span>
                <textarea placeholder="اكتب سبب التعديل بالتفصيل..." />
              </label>
              <div className="info-banner">
                <ShieldCheck />
                <span>سيتم تسجيل هذا التعديل في سجل النشاطات باسمك وتاريخه.</span>
              </div>
            </div>
            <div className="modal-actions">
              <Button variant="ghost" onClick={() => setModal(false)}>
                إلغاء
              </Button>
              <Button onClick={() => setModal(false)}>حفظ التصحيح</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function JustificationsPage() {
  return (
    <>
      <PageTitle title="تبريرات الغياب" subtitle="مراجعة ومعالجة التبريرات المرسلة من الأولياء" />
      <div className="inbox-layout">
        <Card className="inbox-list">
          <div className="inbox-tabs">
            <button className="active">
              بانتظار المعالجة <em>8</em>
            </button>
            <button>المقبولة</button>
            <button>المرفوضة</button>
          </div>
          {students.slice(0, 4).map((s, i) => (
            <button className={`inbox-item ${i === 0 ? "selected" : ""}`} key={s.id}>
              <Avatar src={s.photo} name={s.name} size="sm" />
              <div>
                <strong>{s.name}</strong>
                <span>{i === 0 ? "غياب بسبب وعكة صحية" : "طلب تبرير غياب يوم كامل"}</span>
                <small>
                  {i + 1} ساعة • {s.section}
                </small>
              </div>
              {i === 0 && <i />}
            </button>
          ))}
        </Card>
        <Card className="justification-detail">
          <div className="detail-student">
            <Avatar src={photos.boy} name="محمد بن علي" size="lg" />
            <div>
              <h2>محمد بن علي</h2>
              <span>السنة الثالثة متوسط • 3م2</span>
            </div>
            <Badge tone="warning">قيد المراجعة</Badge>
          </div>
          <div className="absence-summary">
            <Info label="تاريخ الغياب" value="الأحد 18 ماي 2025" />
            <Info label="المدة" value="يوم كامل" />
            <Info label="مرسل من" value="الأب — علي بن علي" />
          </div>
          <div className="message-box">
            <span>سبب الغياب</span>
            <p>
              تعرض ابني لوعكة صحية وحمى شديدة، وتعذر عليه الحضور إلى المؤسسة. أرفق لكم الشهادة
              الطبية.
            </p>
          </div>
          <div className="attachment">
            <div className="paper-preview">
              <FileText />
            </div>
            <div>
              <strong>شهادة_طبية_محمد.pdf</strong>
              <span className="latin">PDF • 1.2 MB</span>
            </div>
            <Button variant="ghost" small icon={Eye}>
              معاينة
            </Button>
          </div>
          <div className="decision-note">
            <Field label="ملاحظة داخلية (اختيارية)" placeholder="أضف ملاحظة للمشرفين..." />
          </div>
          <div className="decision-actions">
            <Button variant="danger" icon={X}>
              رفض التبرير
            </Button>
            <Button icon={Check}>قبول التبرير</Button>
          </div>
        </Card>
      </div>
    </>
  );
}

function ReportsPage() {
  return (
    <>
      <PageTitle
        title="التقارير والإحصائيات"
        subtitle="أنشئ تقارير دقيقة حول الحضور والغياب"
        action={
          <div className="action-group">
            <Button variant="secondary" icon={FileText}>
              تصدير Excel
            </Button>
            <Button icon={Download}>تصدير PDF</Button>
          </div>
        }
      />
      <Card className="report-builder">
        <div className="period-tabs">
          <button>يومي</button>
          <button>أسبوعي</button>
          <button className="active">شهري</button>
          <button>فصلي</button>
        </div>
        <div className="report-fields">
          <SelectBox label="الفترة">ماي 2025</SelectBox>
          <SelectBox label="المستوى">كل المستويات</SelectBox>
          <SelectBox label="القسم">كل الأقسام</SelectBox>
          <SelectBox label="نوع التقرير">الحضور والغياب</SelectBox>
          <Button icon={Activity}>إنشاء التقرير</Button>
        </div>
      </Card>
      <Card className="report-preview">
        <div className="report-header">
          <Brand />
          <div>
            <strong>تقرير الحضور الشهري</strong>
            <span>ماي 2025 • جميع المستويات</span>
          </div>
          <small>تم الإنشاء في 28 ماي 2025</small>
        </div>
        <div className="report-stats">
          <div>
            <span>متوسط الحضور</span>
            <strong>94.8%</strong>
          </div>
          <div>
            <span>مجموع الغيابات</span>
            <strong>184</strong>
          </div>
          <div>
            <span>الغيابات المبررة</span>
            <strong>142</strong>
          </div>
          <div>
            <span>حالات التأخر</span>
            <strong>76</strong>
          </div>
        </div>
        <AttendanceChart />
      </Card>
    </>
  );
}

function UsersPage() {
  const perms = [
    "إدارة التلاميذ",
    "تسجيل الحضور",
    "معالجة التبريرات",
    "إدارة البطاقات",
    "عرض التقارير",
    "إدارة المستخدمين",
  ];
  return (
    <>
      <PageTitle
        title="المستخدمون والصلاحيات"
        subtitle="إدارة حسابات فريق المؤسسة وأدوارهم"
        action={<Button icon={Plus}>إضافة مستخدم</Button>}
      />
      <Card>
        <div className="filter-card embedded">
          <Field placeholder="البحث عن مستخدم..." icon={Search} />
          <SelectBox>كل الأدوار</SelectBox>
          <SelectBox>كل الحالات</SelectBox>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>المستخدم</th>
                <th>الدور</th>
                <th>آخر دخول</th>
                <th>الحالة</th>
                <th>إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["سمير بوعلام", "مدير المؤسسة"],
                ["نادية منصوري", "مشرفة تربوية"],
                ["كمال غربي", "أستاذ"],
                ["مراد زيدان", "مسؤول البطاقات"],
              ].map((u, i) => (
                <tr key={u[0]}>
                  <td>
                    <div className="student-cell">
                      <Avatar name={u[0]} size="sm" />
                      <div>
                        <strong>{u[0]}</strong>
                        <small className="latin">user{i + 1}@school.dz</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Badge tone={i === 0 ? "info" : "neutral"}>{u[1]}</Badge>
                  </td>
                  <td>اليوم، 08:{12 + i}</td>
                  <td>
                    <Badge tone="success">نشط</Badge>
                  </td>
                  <td>
                    <div className="row-actions">
                      <button>
                        <Pencil />
                      </button>
                      <button>
                        <MoreHorizontal />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <Card>
        <div className="card-heading">
          <div>
            <h2>مصفوفة الصلاحيات</h2>
            <p>الصلاحيات الافتراضية لكل دور وظيفي</p>
          </div>
          <Button variant="ghost" small icon={Settings}>
            تخصيص الصلاحيات
          </Button>
        </div>
        <div className="permissions">
          <div className="permission-row head">
            <strong>الصلاحية</strong>
            <span>المدير</span>
            <span>المشرف</span>
            <span>الأستاذ</span>
            <span>مسؤول البطاقات</span>
          </div>
          {perms.map((p, pi) => (
            <div className="permission-row" key={p}>
              <strong>{p}</strong>
              {[0, 1, 2, 3].map((r) => (
                <span
                  key={r}
                  className={
                    r === 0 || (pi < 3 && r === 1) || (pi === 1 && r === 2) || (pi === 3 && r === 3)
                      ? "allowed"
                      : ""
                  }
                >
                  {r === 0 ||
                  (pi < 3 && r === 1) ||
                  (pi === 1 && r === 2) ||
                  (pi === 3 && r === 3) ? (
                    <Check />
                  ) : (
                    <X />
                  )}
                </span>
              ))}
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

function GenericPage({ title }: { title: string }) {
  return (
    <>
      <PageTitle title={title} subtitle={`إدارة ومتابعة ${title} في المؤسسة`} />
      <Card className="empty-state">
        <div>
          <Search />
        </div>
        <h2>مساحة العمل جاهزة</h2>
        <p>استخدم البحث والفلاتر للوصول إلى البيانات المطلوبة بسرعة.</p>
        <Button icon={Plus}>إضافة سجل جديد</Button>
      </Card>
    </>
  );
}

function AdminApp() {
  const [active, setActive] = useState("الرئيسية");
  const render = () => {
    if (active === "الرئيسية") return <Dashboard setActive={setActive} />;
    if (active === "التلاميذ") return <StudentsPage setActive={setActive} />;
    if (active === "ملف التلميذ") return <StudentProfile />;
    if (active === "البطاقات") return <CardsPage />;
    if (active === "الحضور") return <AttendancePage />;
    if (active === "التبريرات") return <JustificationsPage />;
    if (active === "التقارير") return <ReportsPage />;
    if (active === "المستخدمون") return <UsersPage />;
    return <GenericPage title={active} />;
  };
  return (
    <div className="admin-shell" dir="rtl">
      <Sidebar active={active} setActive={setActive} />
      <div className="admin-main">
        <Topbar setActive={setActive} />
        <main className="admin-content">{render()}</main>
      </div>
    </div>
  );
}

const mobileTabs: [string, IconType][] = [
  ["الرئيسية", House],
  ["أبنائي", Users],
  ["الحضور", CalendarDays],
  ["الإشعارات", Bell],
  ["حسابي", CircleUserRound],
];

function PhoneFrame({
  children,
  title,
  tab,
  setTab,
}: {
  children: ReactNode;
  title?: string;
  tab: string;
  setTab: (s: string) => void;
}) {
  return (
    <div className="phone">
      <div className="phone-status">
        <span className="latin">9:41</span>
        <span>
          <Wifi size={13} />
          <strong className="latin">5G</strong>
          <i />
        </span>
      </div>
      {title && (
        <div className="mobile-head">
          <h1>{title}</h1>
          <button>
            <Bell />
          </button>
        </div>
      )}
      <div className="phone-content">{children}</div>
      <nav className="bottom-tabs">
        {mobileTabs.map(([l, I]) => (
          <button className={tab === l ? "active" : ""} key={l} onClick={() => setTab(l)}>
            <I />
            <span>{l}</span>
            {l === "الإشعارات" && <i />}
          </button>
        ))}
      </nav>
    </div>
  );
}

function MobileHome({ setTab }: { setTab: (s: string) => void }) {
  return (
    <>
      <div className="mobile-greeting">
        <div>
          <span>صباح الخير</span>
          <h1>سليمة</h1>
          <p>الأربعاء، 28 ماي 2025</p>
        </div>
        <button>
          <Bell />
          <i />
        </button>
      </div>
      <div className="child-switch">
        <Avatar src={photos.boy} name="محمد" size="sm" />
        <div>
          <span>متابعة ابني</span>
          <strong>محمد بن علي</strong>
        </div>
        <ChevronDown />
      </div>
      <div className="today-card">
        <div className="today-top">
          <span>حالة اليوم</span>
          <small>آخر تحديث 08:12</small>
        </div>
        <div className="today-status">
          <div>
            <Check />
          </div>
          <strong>حاضر</strong>
          <span>تم تسجيل الدخول على 08:12</span>
        </div>
        <div className="today-meta">
          <span>
            <MapPin /> البوابة الرئيسية
          </span>
          <span>
            <Clock3 /> في الوقت
          </span>
        </div>
      </div>
      <h2 className="mobile-section-title">وصول سريع</h2>
      <div className="quick-grid">
        <button onClick={() => setTab("الحضور")}>
          <span className="green">
            <CalendarDays />
          </span>
          <strong>الحضور</strong>
        </button>
        <button>
          <span className="blue">
            <FileCheck2 />
          </span>
          <strong>تبرير غياب</strong>
        </button>
        <button>
          <span className="orange">
            <MessageCircle />
          </span>
          <strong>الرسائل</strong>
        </button>
        <button onClick={() => setTab("الإشعارات")}>
          <span className="purple">
            <Bell />
          </span>
          <strong>الإشعارات</strong>
          <i>3</i>
        </button>
      </div>
      <div className="mobile-title-row">
        <h2>آخر التنبيهات</h2>
        <button onClick={() => setTab("الإشعارات")}>عرض الكل</button>
      </div>
      <div className="alert-list">
        <MobileAlert icon={Clock3} tone="warning" title="تأخر محمد بـ 12 دقيقة" meta="أمس، 08:12" />
        <MobileAlert
          icon={FileCheck2}
          tone="success"
          title="تم قبول تبرير الغياب"
          meta="الأحد، 14:32"
        />
        <MobileAlert icon={Mail} tone="info" title="إعلان من إدارة المؤسسة" meta="السبت، 10:05" />
      </div>
    </>
  );
}

function MobileAlert({
  icon: Icon,
  tone,
  title,
  meta,
  unread = true,
}: {
  icon: IconType;
  tone: Tone;
  title: string;
  meta: string;
  unread?: boolean;
}) {
  return (
    <button className="mobile-alert">
      <span className={tone}>
        <Icon />
      </span>
      <div>
        <strong>{title}</strong>
        <small>{meta}</small>
      </div>
      {unread && <i />}
      <ChevronLeft />
    </button>
  );
}

function ChildrenMobile() {
  return (
    <>
      <div className="mobile-page-intro">
        <p>تابعي حضور ونتائج أبنائك من مكان واحد</p>
      </div>
      <div className="children-list">
        <div className="child-card">
          <div className="child-cover">
            <Avatar src={photos.boy} name="محمد" size="xl" />
            <Badge tone="success">حاضر اليوم</Badge>
          </div>
          <h2>محمد بن علي</h2>
          <p>السنة الثالثة متوسط • القسم 3م2</p>
          <div>
            <span>الحضور هذا الشهر</span>
            <strong>96%</strong>
          </div>
          <button>
            عرض التفاصيل <ChevronLeft />
          </button>
        </div>
        <div className="child-card">
          <div className="child-cover second">
            <Avatar src={photos.girl} name="مريم" size="xl" />
            <Badge tone="warning">متأخرة 08:25</Badge>
          </div>
          <h2>مريم بن علي</h2>
          <p>السنة الأولى متوسط • القسم 1م1</p>
          <div>
            <span>الحضور هذا الشهر</span>
            <strong>93%</strong>
          </div>
          <button>
            عرض التفاصيل <ChevronLeft />
          </button>
        </div>
      </div>
    </>
  );
}

function AttendanceMobile() {
  return (
    <>
      <div className="month-selector">
        <button>
          <ChevronLeft className="flip" />
        </button>
        <strong>ماي 2025</strong>
        <button>
          <ChevronLeft />
        </button>
      </div>
      <div className="mobile-summary">
        <div>
          <strong>22</strong>
          <span>
            <i className="green" /> حاضر
          </span>
        </div>
        <div>
          <strong>1</strong>
          <span>
            <i className="red" /> غائب
          </span>
        </div>
        <div>
          <strong>2</strong>
          <span>
            <i className="orange" /> متأخر
          </span>
        </div>
      </div>
      <Card className="mobile-calendar">
        <MiniCalendar />
      </Card>
      <div className="mobile-title-row">
        <h2>تفاصيل الشهر</h2>
        <button>
          <Filter /> تصفية
        </button>
      </div>
      <div className="attendance-history">
        <EventRow
          date="28 ماي"
          title="حاضر"
          meta="الدخول 08:12 • الخروج 15:42"
          status="في الوقت"
          tone="success"
        />
        <EventRow
          date="27 ماي"
          title="متأخر"
          meta="الدخول 08:25 • تأخر 25 دقيقة"
          status="متأخر"
          tone="warning"
        />
        <EventRow date="18 ماي" title="غائب" meta="تم قبول التبرير" status="مبرر" tone="info" />
      </div>
    </>
  );
}

function NotificationsMobile() {
  return (
    <>
      <div className="notification-group">
        <span>اليوم</span>
        <MobileAlert
          icon={Clock3}
          tone="warning"
          title="تأخر محمد عن موعد الدخول"
          meta="تم تسجيل دخوله على الساعة 08:25"
        />
        <MobileAlert
          icon={Mail}
          tone="info"
          title="إعلان هام من المؤسسة"
          meta="اجتماع الأولياء يوم الخميس القادم"
        />
      </div>
      <div className="notification-group">
        <span>أمس</span>
        <MobileAlert
          icon={XCircle}
          tone="danger"
          title="غياب مريم عن الحصة المسائية"
          meta="الثلاثاء، 13:42"
          unread={false}
        />
        <MobileAlert
          icon={FileCheck2}
          tone="success"
          title="تم قبول التبرير"
          meta="الثلاثاء، 10:05"
          unread={false}
        />
      </div>
    </>
  );
}

function ProfileMobile() {
  return (
    <>
      <div className="mobile-profile">
        <Avatar name="سليمة ب." size="xl" />
        <h2>سليمة بن علي</h2>
        <p className="latin">salima.benali@email.dz</p>
        <Button variant="secondary" small icon={Pencil}>
          تعديل الملف الشخصي
        </Button>
      </div>
      <div className="settings-list">
        {[
          [UserRound, "المعلومات الشخصية"],
          [Bell, "تفضيلات الإشعارات"],
          [KeyRound, "كلمة المرور والأمان"],
          [Smartphone, "الجلسات والأجهزة"],
          [MessageCircle, "المساعدة والدعم"],
        ].map(([I, l]) => {
          const Icon = I as IconType;
          return (
            <button key={l as string}>
              <Icon />
              <span>{l as string}</span>
              <ChevronLeft />
            </button>
          );
        })}
        <button className="logout">
          <LogOut />
          <span>تسجيل الخروج</span>
          <ChevronLeft />
        </button>
      </div>
    </>
  );
}

function MobileApp() {
  const [tab, setTab] = useState("الرئيسية");
  const content =
    tab === "الرئيسية" ? (
      <MobileHome setTab={setTab} />
    ) : tab === "أبنائي" ? (
      <ChildrenMobile />
    ) : tab === "الحضور" ? (
      <AttendanceMobile />
    ) : tab === "الإشعارات" ? (
      <NotificationsMobile />
    ) : (
      <ProfileMobile />
    );
  return (
    <div className="mobile-stage" dir="rtl">
      <div className="mobile-context">
        <Brand />
        <h1>تطبيق الأولياء</h1>
        <p>
          تجربة يومية هادئة تبقي الأولياء على اطلاع، من لحظة دخول أبنائهم إلى المؤسسة وحتى مغادرتها.
        </p>
        <div className="feature-chips">
          <span>
            <Check /> إشعارات فورية
          </span>
          <span>
            <ShieldCheck /> بيانات آمنة
          </span>
          <span>
            <MessageCircle /> تواصل مباشر
          </span>
        </div>
        <StudentCard />
      </div>
      <PhoneFrame title={tab === "الرئيسية" ? undefined : tab} tab={tab} setTab={setTab}>
        {content}
      </PhoneFrame>
    </div>
  );
}

type ScanState = "ready" | "success" | "late" | "invalid" | "duplicate";
function ScannerApp() {
  const [state, setState] = useState<ScanState>("ready");
  const [online, setOnline] = useState(true);
  const states: { key: ScanState; label: string; tone: string }[] = [
    { key: "success", label: "ناجح", tone: "green" },
    { key: "late", label: "متأخر", tone: "orange" },
    { key: "invalid", label: "غير صالحة", tone: "red" },
    { key: "duplicate", label: "مسجّل", tone: "gray" },
  ];
  return (
    <div className="tablet-stage" dir="rtl">
      <div className="tablet-toolbar">
        <Brand light />
        <div className="point-name">
          <MapPin />
          <div>
            <span>نقطة المسح الحالية</span>
            <strong>البوابة الرئيسية</strong>
          </div>
        </div>
        <div className="tablet-clock">
          <strong className="latin">08:16:42</strong>
          <span>الأربعاء، 28 ماي</span>
        </div>
        <button
          className={`connection ${online ? "online" : "offline"}`}
          onClick={() => setOnline(!online)}
        >
          {online ? <Wifi /> : <WifiOff />}
          <div>
            <strong>{online ? "متصل" : "غير متصل"}</strong>
            <span>{online ? "المزامنة فورية" : "3 عمليات معلقة"}</span>
          </div>
        </button>
        <button className="tablet-settings">
          <Settings />
        </button>
      </div>
      <div className="scanner-body">
        <section className="camera-area">
          {state === "ready" ? (
            <>
              <div className="camera-pattern" />
              <div className="scan-frame">
                <i />
                <i />
                <i />
                <i />
                <ScanLine />
              </div>
              <div className="scan-instruction">
                <strong>قرّب بطاقة التلميذ من الكاميرا</strong>
                <span>سيتم المسح تلقائياً</span>
              </div>
            </>
          ) : (
            <ScanResult state={state} onReset={() => setState("ready")} />
          )}
        </section>
        <aside className="recent-panel">
          <div className="recent-head">
            <div>
              <h2>آخر عمليات المسح</h2>
              <span>آخر 10 عمليات</span>
            </div>
            <div className="live-pill">
              <i /> مباشر
            </div>
          </div>
          <div className="tablet-scans">
            {scanRows.concat(scanRows.slice(0, 2)).map((r, i) => (
              <div key={i}>
                <Avatar src={r[4]} name={r[1]} size="md" />
                <div>
                  <strong>{r[1]}</strong>
                  <span>
                    {r[2]} • <b className="latin">{r[0]}</b>
                  </span>
                </div>
                <i className={r[3] === "حاضر" ? "ok" : "delay"}>
                  {r[3] === "حاضر" ? <Check /> : <Clock3 />}
                </i>
              </div>
            ))}
          </div>
          <div className="scan-count">
            <span>عمليات المسح اليوم</span>
            <strong className="latin">1,207</strong>
          </div>
        </aside>
      </div>
      <div className="demo-controls">
        <span>معاينة حالات المسح:</span>
        {states.map((s) => (
          <button className={s.tone} key={s.key} onClick={() => setState(s.key)}>
            {s.label}
          </button>
        ))}
        <button onClick={() => setState("ready")}>الكاميرا</button>
      </div>
    </div>
  );
}

function ScanResult({ state, onReset }: { state: ScanState; onReset: () => void }) {
  const config = {
    success: {
      icon: Check,
      title: "تم تسجيل الحضور",
      sub: "تم التعرف على البطاقة بنجاح",
      cls: "result-success",
    },
    late: { icon: Clock3, title: "تم تسجيل التأخر", sub: "متأخر بـ 25 دقيقة", cls: "result-late" },
    invalid: {
      icon: XCircle,
      title: "البطاقة موقوفة",
      sub: "يرجى توجيه التلميذ إلى الإدارة",
      cls: "result-invalid",
    },
    duplicate: {
      icon: RefreshCw,
      title: "تم المسح مسبقاً",
      sub: "سُجّل الدخول اليوم على الساعة 08:12",
      cls: "result-duplicate",
    },
  }[state as Exclude<ScanState, "ready">];
  const Icon = config.icon;
  return (
    <button className={`scan-result ${config.cls}`} onClick={onReset}>
      <div className="result-icon">
        <Icon />
      </div>
      <Avatar src={photos.boy} name="محمد بن علي" size="xl" />
      <h1>{config.title}</h1>
      <p>{config.sub}</p>
      <div className="result-student">
        <strong>محمد بن علي</strong>
        <span>السنة الثالثة متوسط • القسم 3م2</span>
      </div>
      <div className="result-time">
        <Clock3 />
        <strong className="latin">08:16</strong>
      </div>
      <small>المس للعودة إلى الكاميرا</small>
    </button>
  );
}

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="login-stage" dir="rtl">
      <div className="login-brand-panel">
        <Brand light />
        <div>
          <span className="eyebrow">منصة الإدارة المدرسية</span>
          <h1>
            مدرسة أكثر اتصالاً.
            <br />
            متابعة أكثر دقة.
          </h1>
          <p>منظومة رقمية متكاملة لإدارة الحضور والبطاقات والتواصل مع الأولياء.</p>
        </div>
        <div className="login-stats">
          <div>
            <strong>1,248</strong>
            <span>تلميذاً</span>
          </div>
          <div>
            <strong>98.6%</strong>
            <span>بطاقات نشطة</span>
          </div>
          <div>
            <strong>+94%</strong>
            <span>حضور يومي</span>
          </div>
        </div>
        <small>حل جزائري للمؤسسات التربوية</small>
      </div>
      <div className="login-form-panel">
        <div className="login-card">
          <div className="mobile-login-brand">
            <Brand />
          </div>
          <div>
            <Badge tone="info" dot={false}>
              متوسطة الأمير عبد القادر
            </Badge>
            <h2>مرحباً بعودتك</h2>
            <p>أدخل معلومات حسابك للوصول إلى لوحة التحكم</p>
          </div>
          <Field
            label="اسم المستخدم أو البريد الإلكتروني"
            placeholder="name@school.dz"
            icon={UserRound}
          />
          <Field
            label="كلمة المرور"
            placeholder="أدخل كلمة المرور"
            icon={LockKeyhole}
            type="password"
          />
          <div className="login-options">
            <label>
              <input type="checkbox" defaultChecked /> تذكرني
            </label>
            <button>نسيت كلمة المرور؟</button>
          </div>
          <Button className="full-button" onClick={onLogin}>
            تسجيل الدخول <ChevronLeft />
          </Button>
          <div className="secure-login">
            <ShieldCheck />
            <span>اتصال آمن ومشفّر لحماية بيانات المؤسسة</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [platform, setPlatform] = useState<Platform>("admin");
  const [logged, setLogged] = useState(false);
  return (
    <div className="app-root">
      {platform === "admin" ? (
        logged ? (
          <AdminApp />
        ) : (
          <LoginScreen onLogin={() => setLogged(true)} />
        )
      ) : platform === "mobile" ? (
        <MobileApp />
      ) : (
        <ScannerApp />
      )}
      <div className="platform-switcher" dir="rtl">
        <button
          className={platform === "admin" ? "active" : ""}
          onClick={() => setPlatform("admin")}
        >
          <LayoutDashboard />
          <span>الإدارة</span>
        </button>
        <button
          className={platform === "mobile" ? "active" : ""}
          onClick={() => setPlatform("mobile")}
        >
          <Smartphone />
          <span>الأولياء</span>
        </button>
        <button
          className={platform === "scanner" ? "active" : ""}
          onClick={() => setPlatform("scanner")}
        >
          <Tablet />
          <span>الماسح</span>
        </button>
      </div>
    </div>
  );
}
