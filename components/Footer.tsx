import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white border-t bg-card">
      <div className="container mx-auto px-12 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Link
                href="/"
                className="flex items-center space-x-2 mr-8 hover:opacity-80 transition-opacity">
                <Image
                  src="/GameCodesList.com.jpg"
                  alt="GameCodesList.com"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <span className="text-xl font-bold">GameCodesList</span>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Visit GameCodesList now to find the latest redeem codes!
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/blogs" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-4 pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} GameCodesList. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
