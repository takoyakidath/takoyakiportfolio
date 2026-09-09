"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#career", label: "Journey" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    for (const id of [
      "home",
      "about",
      "projects",
      "skills",
      "career",
      "contact",
    ]) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      )
        setOpen(false);
    }
    function onFocusIn(event: FocusEvent) {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      )
        setOpen(false);
    }
    const desktop = window.matchMedia("(min-width: 761px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("focusin", onFocusIn);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("focusin", onFocusIn);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  function navigate(href: string) {
    setOpen(false);
    setActive(href);
    const destination = document.querySelector<HTMLElement>(href);
    if (destination) {
      destination.tabIndex = -1;
      destination.focus({ preventScroll: true });
    }
  }

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-inner container">
        {/* biome-ignore lint/a11y/useValidAnchor: Native section navigation; the handler only closes the menu and moves focus. */}
        <a
          href="#home"
          className="wordmark"
          aria-label="Ryunosuke Yoda — トップへ"
          onClick={() => navigate("#home")}
        >
          ry<span>.</span>
          <span className="wordmark-name">Ryunosuke Yoda</span>
        </a>
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-navigation"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav
          className={`site-nav ${open ? "is-open" : ""}`}
          id="site-navigation"
          aria-label="メインナビゲーション"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "location" : undefined}
              onClick={() => navigate(link.href)}
            >
              {link.label}
            </a>
          ))}
          {/* biome-ignore lint/a11y/useValidAnchor: Native section navigation; the handler only closes the menu and moves focus. */}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => navigate("#contact")}
            aria-current={active === "#contact" ? "location" : undefined}
          >
            Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
