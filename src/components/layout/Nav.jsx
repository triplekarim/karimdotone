import { useEffect, useState } from "react";
import { motion, MotionConfig } from "motion/react";
import "../../styles/nav.css";

const SECTIONS = [
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "blog", label: "Blog", href: "/blog" },
];
const HOME = { id: "home", label: "Home", href: "/" };

const isPost = (path) => /^\/blog\/[^/]+/.test(path);

const SPRING = { type: "spring", stiffness: 380, damping: 34, mass: 0.9 };

function activeFromPath(path) {
  if (path.startsWith("/projects")) return "projects";
  if (path.startsWith("/blog")) return "blog";
  return null;
}

/** Subpage nav: back to home, plus the sections. Sits in the page header. */
export default function Nav({ initialPath = "/" }) {
  const [path, setPath] = useState(initialPath);

  useEffect(() => {
    // persisted across view transitions, so follow the URL
    const sync = () => setPath(window.location.pathname);
    sync();
    document.addEventListener("astro:page-load", sync);
    return () => document.removeEventListener("astro:page-load", sync);
  }, []);

  const active = activeFromPath(path);
  const post = isPost(path);
  // on a post, the primary action is "back to all posts"; Blog itself becomes redundant
  const primary = post ? { href: "/blog", label: "All posts" } : { href: "/", label: "Back to home" };
  const items = post ? [HOME, SECTIONS[0]] : SECTIONS;

  return (
    <MotionConfig reducedMotion="user">
      <nav className="nav" aria-label="Main">
        <motion.a layout href={primary.href} className="nav-home" transition={SPRING} style={{ borderRadius: 999 }}>
          <motion.svg layout="position" className="nav-home-arrow" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 12H5M11 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
          {/* new label fades in; the old one just goes (an exit animation left a stray copy behind) */}
          <motion.span
            key={primary.label}
            layout="position"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.05 }}
          >
            {primary.label}
          </motion.span>
        </motion.a>
        <motion.ul layout className="nav-list" transition={SPRING}>
          {items.map((item) => (
            <motion.li
              key={item.id}
              layout="position"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...SPRING, opacity: { duration: 0.25, delay: 0.05 } }}
            >
              <a
                href={item.href}
                className={`nav-link${active === item.id ? " is-active" : ""}`}
                aria-current={active === item.id ? "page" : undefined}
              >
                {active === item.id && <motion.span layoutId="nav-pill" className="nav-pill" transition={SPRING} />}
                <span className="nav-label">{item.label}</span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </MotionConfig>
  );
}
