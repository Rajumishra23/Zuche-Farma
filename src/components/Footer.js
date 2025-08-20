import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-6">
      {/* Footer Top */}
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        
        {/* Logo & Address */}
        <div>
          <div className="flex md:block justify-center md:justify-start">
            <img
              src="Agra1.png"
              alt="Agra Pharma Logo"
              className="h-16 w-auto mb-6"
            />
          </div>
          <p className="text-sm leading-relaxed">
            <strong>Corporate Office:</strong><br />
            42/309-A, Billochpura, Opp. Ration Office, <br />
            Agra (U.P.) – 282002 <br />
            <span className="block mt-2">📞 +91-11-41662311</span>
          </p>
          <hr className="my-4 border-gray-700" />
          <p className="text-sm leading-relaxed">
            <strong>Manufacturing Unit:</strong><br />
            G1-712, RIICO Industrial Area, Chopanki, <br />
            Bhiwadi, Distt. Alwar Rajasthan – 301019
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="/about-us" className="hover:text-primary">About Us</a></li>
            <li><a href="/manufactures" className="hover:text-primary">Manufacturing Unit</a></li>
            <li><a href="/certificates-awards" className="hover:text-primary">Certifications</a></li>
            <li><a href="/worldwide" className="hover:text-primary">Global Presence</a></li>
            <li><a href="/contact" className="hover:text-primary">Contact Us</a></li>
          </ul>
        </div>

        {/* Product Portfolio */}
        <div>
          <h5 className="text-lg font-semibold text-white mb-4">Product Portfolio</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="/product-portfolio/medical-devices" className="hover:text-primary">Medical Devices</a></li>
            <li><a href="/product-portfolio/pharmaceuticals" className="hover:text-primary">Pharmaceuticals</a></li>
            <li><a href="/product-portfolio/surgical" className="hover:text-primary">Surgical Products</a></li>
            <li><a href="/product-portfolio/chemicals" className="hover:text-primary">Chemicals</a></li>
            <li><a href="/product-portfolio/formulations" className="hover:text-primary">Formulations</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h5 className="text-lg font-semibold text-white mb-4">Follow Us</h5>
          <p className="text-sm mb-4">Stay connected with us on social media</p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-primary transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-primary transition">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-primary transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-primary transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-primary transition">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="border-gray-700 mb-6" />
      <div className="flex flex-col md:flex-row justify-between items-center text-sm">
        <p>
          &copy; 2025 <span className="font-semibold text-white">Zuche Pharmaceuticals.</span> All Rights Reserved.
        </p>
        <p className="mt-3 md:mt-0">
          Designed by <span className="text-primary font-semibold">Bigdesigned Software Limited</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
