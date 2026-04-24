const links = [
  {
    label: "Prompts gratis ✦",
    href: "https://german-prompts.vercel.app/",
    description: "Prompts de IA para diseño",
    featured: true,
  },
  {
    label: "Portfolio",
    href: "https://www.behance.net/germangonzalez",
    description: "Trabajos seleccionados",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/german.dsg",
    description: "@german.dsg",
  },
  {
    label: "Servicios de diseño",
    href: "mailto:german.gonzalez@humand.co",
    description: "Branding · Identidad · UI",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/germangonzalez",
    description: "Germán González",
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/german.dsg",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:german.gonzalez@humand.co",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "https://www.behance.net/germangonzalez",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.443 5.35c.638 0 1.234.05 1.77.198.537.099.994.297 1.37.545.377.248.672.595.868 1.04.198.446.297.99.297 1.584 0 .693-.148 1.287-.495 1.733-.297.446-.742.843-1.337 1.14.792.248 1.387.694 1.783 1.338.396.644.594 1.387.594 2.228 0 .693-.148 1.288-.396 1.783-.297.495-.643.94-1.139 1.238-.446.347-.99.594-1.585.743-.594.148-1.238.248-1.882.248H0V5.35h7.443zm-.397 5.55c.495 0 .94-.148 1.287-.396.347-.248.495-.693.495-1.238 0-.297-.05-.545-.148-.743-.099-.198-.248-.347-.446-.495-.198-.099-.396-.198-.644-.248-.247-.05-.495-.05-.742-.05H3.21v3.17h3.836zm.198 5.798c.297 0 .594-.05.891-.099.297-.099.545-.198.743-.347.198-.148.396-.347.495-.594.148-.248.198-.545.198-.94 0-.742-.198-1.287-.644-1.634-.446-.347-.99-.495-1.684-.495H3.21v4.11h4.034zm8.462-1.337c.347.347.94.544 1.634.544.495 0 .94-.148 1.337-.396.347-.248.594-.545.693-.842h2.525c-.396 1.238-1.04 2.129-1.832 2.674-.792.545-1.783.842-2.921.842-.792 0-1.486-.148-2.129-.396-.644-.248-1.188-.644-1.634-1.09-.446-.495-.792-1.04-1.04-1.683-.248-.644-.347-1.387-.347-2.18 0-.742.099-1.485.347-2.129.248-.643.594-1.237 1.04-1.732.446-.496.99-.842 1.634-1.139.644-.248 1.337-.396 2.129-.396.841 0 1.584.198 2.178.544.644.347 1.14.842 1.535 1.436.396.594.694 1.238.842 1.981.099.743.148 1.486.099 2.228h-7.52c0 .693.297 1.387.644 1.733zM8.99 7.26h5.254v1.139H8.99V7.26zm7.84 3.566c-.297-.347-.842-.544-1.436-.544-.396 0-.742.099-1.04.248-.297.148-.495.347-.643.545-.148.247-.248.495-.297.742-.05.248-.05.446-.05.644h4.258c-.099-.742-.347-1.238-.792-1.635z" />
      </svg>
    ),
  },
];

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ opacity: 0.5, flexShrink: 0, marginLeft: 8 }}
  >
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

export default function Home() {
  return (
    <main
      style={{ backgroundColor: "var(--bg)" }}
      className="min-h-dvh flex flex-col items-center justify-start px-4 py-12 md:py-20"
    >
      <div className="w-full max-w-sm flex flex-col items-center gap-5">

        {/* Avatar */}
        <div className="fade-up delay-1">
          <div style={{
            width: 88,
            height: 88,
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--purple-soft) 0%, var(--accent-soft) 100%)",
            border: "2.5px solid var(--purple-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 36,
            boxShadow: "0 0 0 6px var(--purple-soft)",
          }}>
            ✦
          </div>
        </div>

        {/* Name & handle */}
        <div className="fade-up delay-2 text-center">
          <h1 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "1.6rem",
            fontWeight: 400,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            marginBottom: 4,
          }}>
            Germán González
          </h1>
          <p style={{
            fontSize: "0.875rem",
            color: "var(--text-secondary)",
            letterSpacing: "0.04em",
          }}>
            @german.dsg
          </p>
        </div>

        {/* Badge */}
        <div className="fade-up delay-3">
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "5px 14px",
            borderRadius: 999,
            background: "var(--purple-soft)",
            border: "1px solid var(--purple-border)",
            fontSize: "0.78rem",
            color: "var(--purple)",
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}>
            <span style={{ fontSize: "0.6rem" }}>✦</span>
            Diseño + IA
          </span>
        </div>

        {/* Divider */}
        <div
          className="fade-up delay-4 w-full"
          style={{
            height: 1,
            background: "linear-gradient(90deg, transparent, var(--border), transparent)",
            margin: "4px 0",
          }}
        />

        {/* Links */}
        <div className="w-full flex flex-col gap-3">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`link-card${link.featured ? " featured" : ""} fade-up delay-${i + 4}`}
            >
              <div>
                <div style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: link.featured ? "var(--purple)" : "var(--text-primary)",
                  marginBottom: 2,
                }}>
                  {link.label}
                </div>
                <div style={{
                  fontSize: "0.75rem",
                  color: link.featured ? "var(--purple)" : "var(--text-muted)",
                  opacity: 0.8,
                }}>
                  {link.description}
                </div>
              </div>
              <span style={{ color: link.featured ? "var(--purple)" : "var(--text-muted)" }}>
                <ArrowIcon />
              </span>
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="fade-up delay-8 flex items-center gap-4 mt-2">
          {socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              className="social-btn"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Footer */}
        <p
          className="fade-up delay-8"
          style={{
            fontSize: "0.7rem",
            color: "var(--text-muted)",
            letterSpacing: "0.06em",
            marginTop: 8,
          }}
        >
          german.dsg ✦ {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}
