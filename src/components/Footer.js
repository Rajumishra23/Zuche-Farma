const Footer = () => (
  <footer className="bg-gray-900 text-white pt-12 pb-6">
    <div className="max-w-6xl mx-auto px-4">
      {/* Footer Columns */}
      <div className="grid md:grid-cols-4 gap-8 mb-10">
        {/* Logo & Address */}
        <div>
          <img
            src="/images/logo-footer.png"
            alt="footer logo"
            className="w-40 mb-4"
          />
          <p className="text-sm leading-relaxed">
            Corporate Office No: A-216 & A-217, Second Floor,<br />
            Somdatt Chambers-1, Building No. 5,<br />
            Bhikaji Cama Place, New Delhi-110066, India
          </p>
          <p className="mt-2 text-sm">+91-11-41662311</p>
          <hr className="my-4 border-gray-700" />
          <p className="text-sm">
            <strong>Manufacturing Unit:</strong> G1-712, RIICO Industrial Area, Chopanki, Bhiwadi, Distt. Alwar Rajasthan - 301019
          </p>
        </div>

        {/* Spacer Column */}
        <div></div>

        {/* Quick Links */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="about-us.html" className="hover:underline">About us</a></li>
            <li><a href="manufactures.html" className="hover:underline">Manufacturing Unit</a></li>
            <li><a href="certificates-awards.html" className="hover:underline">Certifications</a></li>
            <li><a href="worldwide.html" className="hover:underline">Global Presence</a></li>
          </ul>
        </div>

        {/* Product Portfolio */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Product Portfolio</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="product-portfolio/medical-devices.html" className="hover:underline">Medical Devices</a></li>
            <li><a href="product-portfolio/pharmaceuticals.html" className="hover:underline">Pharmaceuticals</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="border-gray-700 mb-4" />
      <div className="text-center text-sm">
        <p>
          &copy; 2025<span className="font-semibold text-white">Zuche Pharmaceuticals.</span> All Rights Reserved.
          <h2>Designed By Bigdesigned software limited</h2>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;