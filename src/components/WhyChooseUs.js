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
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50/60 to-white py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-sky-200/40 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-2xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-snug">
            <span className="bg-gradient-to-r from-primary to-sky-600 bg-clip-text text-transparent">
              Why Choose Us?
            </span>
          </h2>
          <p className="mt-6 text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            For over{" "}
            <span className="font-semibold text-primary">five decades</span>, Agra
            Pharmaceutical Laboratories has been a trusted partner, delivering
            excellence with{" "}
            <span className="font-medium text-primary">quality</span>,{" "}
            <span className="font-medium text-primary">service</span>, and{" "}
            <span className="font-medium text-primary">innovation</span> at its core.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white via-sky-50 to-white border border-gray-200 shadow-lg rounded-2xl p-8 text-center transition duration-300 hover:scale-[1.03] hover:shadow-xl"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-primary/10 p-4 rounded-full">
                  <feature.icon className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Commitment Block */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 via-sky-100/30 to-primary/10 blur-xl opacity-50" />
          <div className="relative bg-white/90 backdrop-blur-lg border border-gray-200 shadow-xl rounded-3xl p-10 text-center transition-transform duration-300 hover:scale-[1.02]">
            <p className="text-xl text-gray-800 mb-6 leading-relaxed">
              <span className="font-bold text-primary">Our Commitment:</span> We
              continually monitor performance, refine processes, and ensure reliability
              at every step — striving to remain a{" "}
              <span className="font-semibold text-primary">
                globally recognized pharmaceutical leader
              </span>
              .
            </p>
            <p className="text-primary font-medium text-lg mt-4">
              👉 Explore our Divisions and Products to learn more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;