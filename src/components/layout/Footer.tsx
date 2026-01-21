import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#102B29] text-white pt-20">
      {/* Subtle Pattern / Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_40%)] pointer-events-none" />

      <div className="relative max-w-8xl mx-auto px-4">
        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 pb-16 border-b border-white/10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-[#2F7C74] mb-4">AZMION</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              A modern learning platform focused on practical skills, career
              growth, and real-world outcomes.
            </p>

            <div className="flex gap-4 mt-6">
              <a className="hover:text-[#2F7C74]" href="#">
                <FaFacebookF />
              </a>
              <a className="hover:text-[#2F7C74]" href="#">
                <FaLinkedinIn />
              </a>
              <a className="hover:text-[#2F7C74]" href="#">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a className="hover:text-white" href="/courses">
                  Courses
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="/login">
                  Login
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="/register">
                  Register
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a className="hover:text-white" href="#">
                  FAQs
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <FaEnvelope />
                support@azmion.com
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt />
                +880 1234 567890
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
          <p>© {new Date().getFullYear()} AZMION. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with ❤️ for learners</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
