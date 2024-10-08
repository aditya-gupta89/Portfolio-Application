import { a } from "framer-motion/dist/client-entry";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
const footerLink = [
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/aditya-gupta-74079a191/",
  },
  {
    title: "Twitter",
    href: "https://x.com/aditya_gupta5",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/aditya_gupta89",
  },
];

export const Footer = () => {
  return (
    <footer id="footer" className="relative  overflow-x-clip">
      <div className="absolute h-[400px] -z-10 w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLink.map((link) => (
              <a
                className="inline-flex items-center gap-1.5 cursor-pointer"
                key={link.title}
                href={link.href}
              >
                <span className="font-semibold">{link.title}</span>{" "}
                <ArrowUpRightIcon />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
