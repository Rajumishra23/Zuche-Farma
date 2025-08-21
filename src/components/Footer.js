import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-6">
      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12 text-sm">
        {/* Logo & Address */}
        <div className="md:col-span-2">
          <img src="Agra1.png" alt="Agra Pharma Logo" className="h-16 mb-4" />
          <p className="leading-relaxed">
            <strong>Corporate Office:</strong><br />
            Agra Pharmaceutical Laboratories<br />
            42/309-A, Billochpura, Opp. Ration Office,<br />
            Agra (U.P.) – 282002<br />
            <span className="block mt-2">📞 +91-11-41662311</span>
          </p>
          <hr className="my-4 border-gray-700" />
          <p className="leading-relaxed">
            <strong>Factory Units:</strong><br />
            Pharmaceutical & Marketing Division<br />
            42/309-A, Billochpura, Agra (U.P.) – 282002<br />
            Chemical Division & Formulation Division<br />
            42/331-A/1, Billochpura, Agra (U.P.) – 282002
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-white font-semibold mb-4">LEARN MORE</h5>
          <ul className="space-y-2">
            <li><a href="/about-us" className="hover:text-white">About Us</a></li>
            <li><a href="/manufactures" className="hover:text-white">Manufacturing Unit</a></li>
            <li><a href="/certificates-awards" className="hover:text-white">Certifications</a></li>
            <li><a href="/worldwide" className="hover:text-white">Global Presence</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Product Portfolio */}
        <div>
          <h5 className="text-white font-semibold mb-4">PRODUCTS</h5>
          <ul className="space-y-2">
            <li><a href="/product-portfolio/medical-devices" className="hover:text-white">Medical Devices</a></li>
            <li><a href="/product-portfolio/pharmaceuticals" className="hover:text-white">Pharmaceuticals</a></li>
            <li><a href="/product-portfolio/surgical" className="hover:text-white">Surgical Products</a></li>
            <li><a href="/product-portfolio/chemicals" className="hover:text-white">Chemicals</a></li>
            <li><a href="/product-portfolio/formulations" className="hover:text-white">Formulations</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h5 className="text-white font-semibold mb-4">CONNECT</h5>
          <p className="mb-4">Follow us on social media</p>
          <div className="flex space-x-3">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition"><FaLinkedinIn /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition"><FaTwitter /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition"><FaInstagram /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <hr className="border-gray-700 mb-6" />
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>
          &copy; 2025 <span className="text-white font-semibold">Agra Pharmaceuticals.</span> All Rights Reserved.
        </p>
        <p className="mt-3 md:mt-0">
          Designed by <span className="text-white font-semibold">Bigdesign software technologies </span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;