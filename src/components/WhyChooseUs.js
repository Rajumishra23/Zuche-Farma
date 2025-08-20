import React from "react";
import {
  CheckBadgeIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    title: "50+ Years of Expertise",
    desc: "Decades of proven trust, knowledge, and leadership in the healthcare & chemical industries.",
    icon: CheckBadgeIcon,
  },
  {
    title: "Five Strong Divisions",
    desc: "Pharmaceutical Repacking, Marketing, Chemical, Formulation, and Surgical divisions powering growth.",
    icon: BuildingOfficeIcon,
  },
  {
    title: "Global Quality Standards",
    desc: "QMS compliant with IP, BP, and USP standards, ensuring unmatched product quality.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Personalized Service",
    desc: "Dedicated customer support and technical expertise tailored to your needs.",
    icon: UserGroupIcon,
  },
  {
    title: "Competitive & Reliable",
    desc: "Affordable pricing with guaranteed on-time delivery, every single time.",
    icon: TruckIcon,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-stretch">
        {/* Left Text Block */}
        <div className="flex flex-col justify-between space-y-8 animate-fade-up">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Why <span className="text-sky-600">Choose Us?</span>
            </h2>

            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 mb-6 group transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-sky-100 text-sky-600 rounded-xl group-hover:animate-pulse">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-700 group-hover:text-sky-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Block */}
        <div className="h-full animate-slide-in">
          <img
            src="pharma.png" // Make sure this image is HD and placed correctly
            alt="Why Choose Us"
            className="rounded-xl shadow-xl object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;