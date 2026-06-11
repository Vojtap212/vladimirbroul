import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Key, Wrench, Scissors, Shield, Star, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Výroba autoklíčů – Vladimír Broul | Lovosice" },
      { name: "description", content: "Zámečnická pohotovost, výroba autoklíčů s čipem, broušení nástrojů, otevírání dveří. Tovární 20/2, Lovosice. Tel: +420 724 945 440." },
      { property: "og:title", content: "Výroba autoklíčů – Vladimír Broul" },
      { property: "og:description", content: "Zámečnická pohotovost, výroba autoklíčů, broušení nástrojů v Lovosicích." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Key className="h-6 w-6 text-accent" />
            <span className="text-lg font-bold tracking-tight text-foreground">
              Vladimír Broul
            </span>
          </div>
          <div className="hidden items-center gap-6 text-sm font-medium sm:flex">
            <a href="#sluzby" className="text-muted-foreground transition-colors hover:text-foreground">
              Služby
            </a>
            <a href="#oteviraci-doba" className="text-muted-foreground transition-colors hover:text-foreground">
              Otevírací doba
            </a>
            <a href="#kontakt" className="text-muted-foreground transition-colors hover:text-foreground">
              Kontakt
            </a>
            <a
              href="tel:+420724945440"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <Phone className="h-3.5 w-3.5" />
              Zavolat
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden bg-hero px-4 py-20 text-hero-foreground sm:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-accent blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-primary blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-warn/30 bg-warn/10 px-3 py-1 text-xs font-medium text-warn">
              <AlertTriangle className="h-3.5 w-3.5" />
              Zámečnická pohotovost – rychlé řešení
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Výroba autoklíčů &<br />
              <span className="text-accent">zámečnické služby</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-hero-foreground/80">
              Zabouchnuté dveře? Ztracený klíč? Potřebujete nabrousit nástroje?
              V Lovosicích pomůžeme rychle a spolehlivě – včetně pohotovostních
              výjezdů.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+420724945440"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:bg-accent/90 hover:shadow-accent/30"
              >
                <Phone className="h-4 w-4" />
                +420 724 945 440
              </a>
              <a
                href="#sluzby"
                className="inline-flex items-center gap-2 rounded-xl border border-hero-foreground/20 bg-hero-foreground/5 px-6 py-3 text-sm font-semibold text-hero-foreground backdrop-blur-sm transition-all hover:bg-hero-foreground/10"
              >
                Naše služby
              </a>
            </div>
            <div className="mt-8 flex items-center gap-1.5 text-sm text-hero-foreground/60">
              <MapPin className="h-4 w-4" />
              Tovární 20/2, 410 02 Lovosice
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section id="sluzby" className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Co nabízíme
            </h2>
            <p className="mt-3 text-muted-foreground">
              Široké spektrum zámečnických a řemeslných služeb pod jednou střechou
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Key className="h-6 w-6" />}
              title="Výroba autoklíčů"
              description="Zhotovujeme autoklíče s čipem včetně programování. Různé typy cylindrických, oboustranných i FAB klíčů na počkání."
            />
            <ServiceCard
              icon={<Shield className="h-6 w-6" />}
              title="Zámečnická pohotovost"
              description="Otevírání zabouchnutých i zamčených dveří. Rychlý zásah v akutních situacích – den i noc."
            />
            <ServiceCard
              icon={<Wrench className="h-6 w-6" />}
              title="Broušení nástrojů"
              description="Profesionální broušení všech druhů nástrojů, pil, nožů, nůžek i řetězů. Brusíme na počkání."
            />
            <ServiceCard
              icon={<Scissors className="h-6 w-6" />}
              title="Ostření nástrojů"
              description="Ostření zahradních nástrojů, sekaček, křovinořezů a dalšího vybavení pro domácnost i profesionály."
            />
            <ServiceCard
              icon={<Key className="h-6 w-6" />}
              title="Železářství"
              description="Prodej náhradních dílů a autodoplňků. Šrouby, matice, spojovací materiál a drobné kování."
            />
            <ServiceCard
              icon={<Star className="h-6 w-6" />}
              title="Další služby"
              description="Poradenství v oblasti zabezpečení, montáž zámků, výměna vložek a další práce na klíč."
            />
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section id="oteviraci-doba" className="border-y border-border bg-muted/50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Otevírací doba
              </h2>
              <p className="mt-3 text-muted-foreground">
                Doporučujeme před návštěvou zavolat. Pohotovost mimo otevírací dobu je možná po telefonické domluvě.
              </p>

              <div className="mt-8 space-y-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <DayRow day="Pondělí" hours="9:00 – 10:50, 13:00 – 15:50" />
                <DayRow day="Úterý" hours="9:00 – 10:50, 13:00 – 14:50" />
                <DayRow day="Středa" hours="9:00 – 10:50, 13:00 – 15:50" />
                <DayRow day="Čtvrtek" hours="Zavřeno" closed />
                <DayRow day="Pátek" hours="Zavřeno" closed />
                <DayRow day="Sobota" hours="Zavřeno" closed />
                <DayRow day="Neděle" hours="Zavřeno" closed />
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-xl border border-warn/20 bg-warn/5 p-4 text-sm text-warn">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <span className="font-semibold">Pozor:</span> Pohotovostní služby
                  (otevírání dveří, ztráta klíčů) jsou dostupné i mimo uvedenou dobu
                  po předchozí telefonické domluvě.
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <h3 className="text-xl font-semibold text-foreground">
                  Proč si nás vybrat?
                </h3>
                <ul className="mt-6 space-y-4">
                  <Benefit text="Rychlé řešení na počkání – klíče i broušení" />
                  <Benefit text="Pohotovostní služby pro akutní situace" />
                  <Benefit text="Letité zkušenosti v oboru" />
                  <Benefit text="Osobní přístup a férové ceny" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Kontakt
            </h2>
            <p className="mt-3 text-muted-foreground">
              Neváhejte nás kontaktovat – rádi vám pomůžeme
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ContactCard
              icon={<Phone className="h-5 w-5" />}
              label="Telefon"
              value="+420 724 945 440"
              href="tel:+420724945440"
              highlight
            />
            <ContactCard
              icon={<Mail className="h-5 w-5" />}
              label="E-mail"
              value="broul@seznam.cz"
              href="mailto:broul@seznam.cz"
            />
            <ContactCard
              icon={<MapPin className="h-5 w-5" />}
              label="Adresa"
              value="Tovární 20/2, 410 02 Lovosice"
              href="https://maps.google.com/?q=Tov%C3%A1rn%C3%AD%2020%2F2,%20410%2002%20Lovosice"
            />
            <ContactCard
              icon={<Clock className="h-5 w-5" />}
              label="IČO"
              value="46723455"
            />
          </div>

          {/* Map placeholder / embed */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              title="Mapa"
              src="https://maps.google.com/maps?q=Tov%C3%A1rn%C3%AD%2020%2F2%2C%20410%2002%20Lovosice&hl=cs&z=16&output=embed"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="bg-muted"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-hero px-4 py-10 text-hero-foreground/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Key className="h-5 w-5 text-accent" />
            <span className="font-semibold text-hero-foreground">
              Vladimír Broul – Výroba autoklíčů
            </span>
          </div>
          <div className="text-center text-sm sm:text-right">
            <p>Tovární 20/2, 410 02 Lovosice · IČO: 46723455</p>
            <p className="mt-1">© {new Date().getFullYear()} Všechna práva vyhrazena</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
      <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

function DayRow({
  day,
  hours,
  closed,
}: {
  day: string;
  hours: string;
  closed?: boolean;
}) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-3 last:border-b-0 last:pb-0">
      <span className="font-medium text-foreground">{day}</span>
      <span className={closed ? "font-semibold text-destructive" : "text-muted-foreground"}>
        {hours}
      </span>
    </div>
  );
}

function Benefit({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
        <svg className="h-3 w-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-foreground">{text}</span>
    </li>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  highlight?: boolean;
}) {
  const content = (
    <div
      className={`flex flex-col items-center rounded-2xl border p-6 text-center transition-all ${
        highlight
          ? "border-accent/30 bg-accent/5 hover:shadow-lg hover:shadow-accent/10"
          : "border-border bg-card hover:border-accent/20 hover:shadow-md"
      }`}
    >
      <div className={`mb-3 inline-flex rounded-xl p-3 ${highlight ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>
        {icon}
      </div>
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <span className="mt-1 text-lg font-semibold text-foreground">{value}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return content;
}
