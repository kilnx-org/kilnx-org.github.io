import Image from "next/image";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-bg/80">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/logos/kilnx-icon.svg"
              alt="Kilnx"
              width={28}
              height={28}
              className="invert"
            />
            <Image
              src="/logos/kilnx-text.svg"
              alt="Kilnx"
              width={80}
              height={18}
              className="invert"
            />
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-text-secondary">
            <a href="#features" className="hover:text-text transition-colors">
              Features
            </a>
            <a href="#code" className="hover:text-text transition-colors">
              Examples
            </a>
            <a href="#philosophy" className="hover:text-text transition-colors">
              Philosophy
            </a>
            <a href="https://github.com/kilnx-org" className="hover:text-text transition-colors">
              GitHub
            </a>
            <a href="https://discord.gg/AJcw5eee54" className="hover:text-text transition-colors">
              Discord
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://discord.gg/AJcw5eee54"
            className="hidden sm:flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
            </svg>
            Discord
          </a>
          <a
            href="https://github.com/kilnx-org/kilnx"
            className="hidden sm:flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Star
          </a>
          <a
            href="#get-started"
            className="px-4 py-2 text-sm font-medium bg-text text-bg rounded-lg hover:bg-text/90 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[128px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-xs font-medium text-text-secondary mb-8 bg-bg-elevated/50 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Currently in development
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] animate-fade-in-up delay-100">
            <span className="gradient-text">The backend language</span>
            <br />
            <span className="gradient-text">for the </span>
            <span className="gradient-text-accent">htmx era</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Declarative backend programming. SQL as first-class citizen, HTML as
            native output, htmx-aware. 29 keywords. Single binary. Zero config.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <a
              href="#get-started"
              className="group flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-glow text-white font-medium rounded-lg transition-all duration-300 glow"
            >
              Get Started
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="https://github.com/kilnx-org/kilnx"
              className="flex items-center gap-2 px-6 py-3 border border-border text-text-secondary hover:text-text hover:border-border-hover font-medium rounded-lg transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
            <a
              href="https://discord.gg/AJcw5eee54"
              className="flex items-center gap-2 px-6 py-3 border border-border text-text-secondary hover:text-text hover:border-border-hover font-medium rounded-lg transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
              </svg>
              Join Discord
            </a>
          </div>
        </div>

        <div className="mt-20 animate-fade-in-up delay-400">
          <CodePreview />
        </div>
      </div>
    </section>
  );
}

function CodePreview() {
  return (
    <div className="max-w-3xl mx-auto code-block glow">
      <div className="code-block-header flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="ml-2">app.kilnx</span>
        </div>
        <span className="text-text-muted text-xs">A complete app in one file</span>
      </div>
      <pre className="p-6 text-sm leading-7 overflow-x-auto">
        <code>{`\n`}<span className="token-keyword">config</span>{` {\n  `}<span className="token-property">port</span>{`: `}<span className="token-number">3000</span>{`\n  `}<span className="token-property">db</span>{`: `}<span className="token-string">"postgres://localhost/myapp"</span>{`\n}\n\n`}<span className="token-keyword">model</span>{` `}<span className="token-type">Task</span>{` {\n  `}<span className="token-property">title</span>{`     `}<span className="token-type">string</span>{`  `}<span className="token-attr">required</span>{`\n  `}<span className="token-property">done</span>{`      `}<span className="token-type">bool</span>{`    `}<span className="token-attr">default</span>{`: `}<span className="token-number">false</span>{`\n  `}<span className="token-property">created</span>{`   `}<span className="token-type">datetime</span>{` `}<span className="token-attr">auto</span>{`\n}\n\n`}<span className="token-keyword">page</span>{` `}<span className="token-string">"/tasks"</span>{` {\n  `}<span className="token-keyword">query</span>{` tasks = `}<span className="token-type">Task</span>{`.`}<span className="token-function">all</span>{`(`}<span className="token-property">order</span>{`: `}<span className="token-string">"created desc"</span>{`)\n  `}<span className="token-keyword">form</span>{`  `}<span className="token-type">Task</span>{`.`}<span className="token-function">create</span>{`()\n}\n\n`}<span className="token-keyword">action</span>{` `}<span className="token-string">"/tasks/:id/toggle"</span>{` {\n  `}<span className="token-keyword">query</span>{` task = `}<span className="token-type">Task</span>{`.`}<span className="token-function">find</span>{`(`}<span className="token-property">id</span>{`)\n  task.`}<span className="token-property">done</span>{` = !task.`}<span className="token-property">done</span>{`\n  task.`}<span className="token-function">save</span>{`()\n}`}</code>
      </pre>
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      ),
      title: "SQL First-Class",
      description:
        "No ORM, no query builder. Write SQL directly or let the model generate it. Your database is a feature, not an afterthought.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      title: "HTML Native Output",
      description:
        "HTML is the return type. Pages, fragments, and layouts compose naturally. No template engine bolted on.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "htmx-Aware",
      description:
        "Fragments, actions, and streams are built-in. Partial HTML updates without writing JavaScript.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
        </svg>
      ),
      title: "Single Binary",
      description:
        "Compiles to one executable. No runtime, no dependencies, no node_modules. The binary is the deploy.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Security by Default",
      description:
        "Auth, permissions, CSRF, and input validation are built-in keywords. Security is not opt-in.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
      title: "Zero Config",
      description:
        "No framework to choose, no ORM to configure, no template engine to wire up. One file can be a complete app.",
    },
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-4">
            Features
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text">
            Everything you need,
            <br />
            nothing you don&apos;t
          </h2>
          <p className="mt-6 text-text-secondary text-lg max-w-2xl mx-auto">
            29 keywords replace an entire stack. Models, pages, actions,
            auth, jobs, emails, websockets, API endpoints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-xl border border-border bg-bg-elevated/30 card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center text-accent mb-4">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CodeExamples() {
  return (
    <section id="code" className="py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-4">
            Examples
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text">
            Declare what you need
          </h2>
          <p className="mt-6 text-text-secondary text-lg max-w-2xl mx-auto">
            Each keyword maps directly to a backend concept. No boilerplate, no glue code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-4">
              Authentication in 5 lines
            </h3>
            <div className="code-block">
              <div className="code-block-header">
                <span>auth.kilnx</span>
              </div>
              <pre className="p-6 text-sm leading-7 overflow-x-auto">
                <code><span className="token-keyword">auth</span>{` {\n  `}<span className="token-property">provider</span>{`: `}<span className="token-string">"email"</span>{`\n  `}<span className="token-property">session</span>{`:  `}<span className="token-string">"cookie"</span>{`\n  `}<span className="token-property">expires</span>{`: `}<span className="token-string">"7d"</span>{`\n}`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-4">
              Real-time updates
            </h3>
            <div className="code-block">
              <div className="code-block-header">
                <span>notifications.kilnx</span>
              </div>
              <pre className="p-6 text-sm leading-7 overflow-x-auto">
                <code><span className="token-keyword">stream</span>{` `}<span className="token-string">"/notifications"</span>{` {\n  `}<span className="token-keyword">on</span>{` `}<span className="token-type">Message</span>{`.`}<span className="token-function">create</span>{` {\n    `}<span className="token-keyword">fragment</span>{` `}<span className="token-string">"notification-item"</span>{`\n    `}<span className="token-keyword">broadcast</span>{` `}<span className="token-property">to</span>{`: message.`}<span className="token-property">recipient</span>{`\n  }\n}`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-4">
              Background jobs
            </h3>
            <div className="code-block">
              <div className="code-block-header">
                <span>jobs.kilnx</span>
              </div>
              <pre className="p-6 text-sm leading-7 overflow-x-auto">
                <code><span className="token-keyword">schedule</span>{` `}<span className="token-string">"daily-report"</span>{` {\n  `}<span className="token-property">cron</span>{`: `}<span className="token-string">"0 8 * * *"</span>{`\n  `}<span className="token-keyword">query</span>{` users = `}<span className="token-type">User</span>{`.`}<span className="token-function">all</span>{`(`}<span className="token-property">active</span>{`: `}<span className="token-number">true</span>{`)\n  `}<span className="token-keyword">send email</span>{` `}<span className="token-string">"daily-digest"</span>{` `}<span className="token-property">to</span>{`: users\n}`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-4">
              API endpoints
            </h3>
            <div className="code-block">
              <div className="code-block-header">
                <span>api.kilnx</span>
              </div>
              <pre className="p-6 text-sm leading-7 overflow-x-auto">
                <code><span className="token-keyword">api</span>{` `}<span className="token-string">"/api/tasks"</span>{` {\n  `}<span className="token-keyword">permissions</span>{` `}<span className="token-string">"authenticated"</span>{`\n\n  `}<span className="token-property">GET</span>{`    = `}<span className="token-type">Task</span>{`.`}<span className="token-function">all</span>{`(`}<span className="token-property">owner</span>{`: `}<span className="token-property">current_user</span>{`)\n  `}<span className="token-property">POST</span>{`   = `}<span className="token-type">Task</span>{`.`}<span className="token-function">create</span>{`(`}<span className="token-property">owner</span>{`: `}<span className="token-property">current_user</span>{`)\n  `}<span className="token-property">DELETE</span>{` = `}<span className="token-type">Task</span>{`.`}<span className="token-function">destroy</span>{`(`}<span className="token-property">owner</span>{`: `}<span className="token-property">current_user</span>{`)\n}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const principles = [
    {
      number: "00",
      title: "The complexity is the tool's fault, not the problem's",
    },
    { number: "01", title: "Zero decisions before the first useful line" },
    { number: "02", title: "SQL is first-class citizen" },
    { number: "03", title: "HTML is the native output" },
    { number: "04", title: "Declarative first, imperative when necessary" },
    { number: "05", title: "One file can be a complete app" },
    { number: "06", title: "The binary is the deploy" },
    { number: "07", title: "Fragments are first-class" },
    { number: "08", title: "Security is default, not opt-in" },
    { number: "09", title: "Zero dependencies for the user" },
    { number: "10", title: "htmx awareness without htmx coupling" },
  ];

  return (
    <section id="philosophy" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-accent font-medium text-sm tracking-wider uppercase mb-4">
              Philosophy
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text leading-tight">
              11 design
              <br />
              principles
            </h2>
            <p className="mt-6 text-text-secondary text-lg leading-relaxed">
              htmx completed HTML. Kilnx completes htmx. Every design decision
              serves a single goal: make the backend as simple as the problem
              demands, not as complex as the tools allow.
            </p>
            <div className="mt-8 p-6 rounded-xl border border-border bg-bg-elevated/30">
              <p className="text-sm text-text-secondary leading-relaxed font-mono">
                <span className="text-accent">&quot;</span>The kiln metaphor: raw
                declarations go in, a solid binary comes out. The X suffix
                creates visual kinship with htmx.<span className="text-accent">&quot;</span>
              </p>
            </div>
          </div>

          <div className="space-y-0">
            {principles.map((p) => (
              <div
                key={p.number}
                className="flex items-start gap-4 py-4 border-b border-border/50 group"
              >
                <span className="text-accent font-mono text-sm mt-0.5 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
                  {p.number}
                </span>
                <span className="text-text-secondary group-hover:text-text transition-colors text-sm leading-relaxed">
                  {p.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Keywords() {
  const keywords = [
    "config", "model", "permissions", "auth", "layout", "page", "action",
    "fragment", "stream", "socket", "component", "api", "webhook", "schedule",
    "job", "query", "validate", "search", "paginate", "form", "send email",
    "redirect", "on", "limit", "log", "test", "translations", "enqueue",
    "broadcast",
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <p className="text-accent font-medium text-sm tracking-wider uppercase mb-4">
          The entire language
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
          29 keywords
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-16">
          Each keyword maps to a backend concept you use every day. No hidden
          complexity, no framework magic. What you see is what you get.
        </p>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {keywords.map((kw) => (
            <span
              key={kw}
              className="px-4 py-2 rounded-lg border border-border bg-bg-elevated/50 font-mono text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-200 cursor-default"
            >
              {kw}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function GetStarted() {
  return (
    <section id="get-started" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-2xl border border-border bg-bg-elevated/30 p-12 sm:p-16 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-accent/10 rounded-full blur-[96px]" />

          <div className="relative">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
              Ready to build?
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10">
              Kilnx is in active development. Star the repo, follow progress,
              or contribute to the language design.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="code-block inline-flex items-center">
                <div className="px-5 py-3 font-mono text-sm flex items-center gap-3">
                  <span className="text-text-muted">$</span>
                  <span className="text-text">go install github.com/kilnx-org/kilnx@latest</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6">
              <a
                href="https://github.com/kilnx-org/kilnx"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://discord.gg/AJcw5eee54"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
                </svg>
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logos/kilnx-icon.svg"
              alt="Kilnx"
              width={20}
              height={20}
              className="invert opacity-50"
            />
            <span className="text-sm text-text-muted">
              Kilnx. The backend language for the htmx era.
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-text-muted">
            <a
              href="https://github.com/kilnx-org"
              className="hover:text-text transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://discord.gg/AJcw5eee54"
              className="hover:text-text transition-colors"
            >
              Discord
            </a>
            <a
              href="https://github.com/kilnx-org/kilnx/issues"
              className="hover:text-text transition-colors"
            >
              Issues
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <CodeExamples />
        <Philosophy />
        <Keywords />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
