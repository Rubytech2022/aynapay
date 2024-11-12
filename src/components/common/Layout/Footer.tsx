import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Dribbble } from "lucide-react";
import Brand_Logo from "./Brand_Logo";

export default function Footer() {
  return (
    <footer className="section bg-gradient-to-br from-gray-100 via-white to-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Brand_Logo />
            <p className="text-sm max-w-xs">
              Seamless Payment Solutions for Freelancers and Entrepreneurs
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className=" transition-colors hover:text-primary">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/aml-policy" className=" transition-colors hover:text-primary">
                    AML policy
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="transition-colors hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-use" className="transition-colors hover:text-primary">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact info</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="mailto:info@aynapay.com"
                    className="hover:text-primary transition-colors"
                  >
                    info@aynapay.com{" "}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Telegram: @AynaPayofficia{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-50/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; 2024 AynaPay. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Dribbble className="w-5 h-5" />
              <span className="sr-only">Dribbble</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
