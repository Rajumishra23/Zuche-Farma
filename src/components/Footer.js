import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 pt-6 pb-4">
    <div className="max-w-7xl mx-auto px-6">
      
      {/* Logo Top */}
      <div className="flex justify-start mb-4">
        <img src="Agra3.webp" alt="Agra Pharma Logo" className="h-10" />
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6 text-sm">
        
        {/* Corporate & Factory Info */}
        <div className="space-y-4 text-xs leading-relaxed">
          <div>
            <h5 className="text-white font-semibold mb-1 text-sm">CORPORATE OFFICE</h5>
            <p>
              Agra Pharmaceutical Laboratories <br />
              42/309-A, Billochpura, Opp. Ration Office <br />
              Agra (U.P.) – 282002 <br />
              📞 +91 9876543210
            </p>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-1 text-sm">FACTORY UNITS</h5>
            <p>
              Pharmaceutical & Marketing Division <br />
              42/309-A, Billochpura, Agra – 282002 <br />
              Chemical & Formulation Division <br />
              42/331-A/1, Billochpura, Agra – 282002
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-white font-semibold mb-2 text-sm">LEARN MORE</h5>
          <ul className="space-y-1">
            <li><a href="/about-us" className="hover:text-white">About Us</a></li>
            <li><a href="/manufactures" className="hover:text-white">Manufacturing Unit</a></li>
            <li><a href="/certificates-awards" className="hover:text-white">Certifications</a></li>
            <li><a href="/worldwide" className="hover:text-white">Global Presence</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Product Portfolio */}
        <div>
          <h5 className="text-white font-semibold mb-2 text-sm">PRODUCTS</h5>
          <ul className="space-y-1">
            <li><a href="/product-portfolio/medical-devices" className="hover:text-white">Medical Devices</a></li>
            <li><a href="/product-portfolio/pharmaceuticals" className="hover:text-white">Pharmaceuticals</a></li>
            <li><a href="/product-portfolio/surgical" className="hover:text-white">Surgical Products</a></li>
            <li><a href="/product-portfolio/chemicals" className="hover:text-white">Chemicals</a></li>
            <li><a href="/product-portfolio/formulations" className="hover:text-white">Formulations</a></li>
          </ul>
        </div>

        {/* Bank Details */}
        <div>
          <h5 className="text-white font-semibold mb-2 text-sm">BANK DETAILS</h5>
          <ul className="space-y-2 text-xs leading-snug">
            <li>
              <strong>State Bank of India</strong>, Raja ki Mandi Branch <br />
              Acc: <span className="text-white">30665255111</span> | IFSC: <span className="text-white">SBIN0001892</span>
            </li>
            <li>
              <strong>ICICI Bank</strong>, Sanjay Place Branch <br />
              Acc: <span className="text-white">628705009307</span> | IFSC: <span className="text-white">ICIC0006287</span>
            </li>
            <li>
              <strong>Canara Bank</strong>, Lohamandi Branch <br />
              Acc: <span className="text-white">0378201003404</span> | IFSC: <span className="text-white">CNRB0000378</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h5 className="text-white font-semibold mb-2 text-sm">CONNECT</h5>
          <p className="mb-2 text-xs">Follow us on social media</p>
          <div className="flex space-x-2">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"><FaLinkedinIn /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"><FaTwitter /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"><FaInstagram /></a>
           
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <hr className="border-gray-700 mb-2" />
      <div className="flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-400">
        <p>
          &copy; 2025 <span className="text-white font-semibold">Agra Pharmaceuticals.</span> All Rights Reserved.
        </p>
        <p className="mt-1 md:mt-0">
          Designed by <span className="text-white font-semibold">Bigdesign Software Technologies</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;