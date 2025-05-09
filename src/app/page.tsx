import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PricingCard from "@/components/pricing-card";
import {
  ArrowUpRight,
  Shield,
  Search,
  Globe,
  Sparkles,
  Eye,
  UserSearch,
  Database,
  Lock,
} from "lucide-react";
import { createClient } from "../../supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: plans, error } = await supabase.functions.invoke(
    "supabase-functions-get-plans",
  );

  const result = plans?.items;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <Hero />

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How "You" Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our advanced AI technology helps you find people with just a few
              details.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Enter Details</h3>
                <p className="text-gray-600">
                  Provide as much information as you have about the person
                  you're looking for.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. AI Search</h3>
                <p className="text-gray-600">
                  Our AI scans billions of records to find potential matches.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserSearch className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  3. Review Results
                </h3>
                <p className="text-gray-600">
                  Browse through potential matches with confidence scores and
                  detailed profiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose "You" Person Finder
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with the world's most
              comprehensive people database.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Eye className="w-6 h-6" />,
                title: "Advanced Recognition",
                description: "Find people with just a name or photo",
              },
              {
                icon: <Lock className="w-6 h-6" />,
                title: "Privacy Guaranteed",
                description: "GDPR-compliant with end-to-end encryption",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Global Coverage",
                description: "Access to 190+ countries and territories",
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "AI-Powered Insights",
                description: "Predictive analytics for better matches",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="text-blue-600 mb-4 bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm">
              <div className="text-5xl font-bold mb-2">99.7%</div>
              <div className="text-blue-100 text-lg">Match Accuracy</div>
            </div>
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm">
              <div className="text-5xl font-bold mb-2">2B+</div>
              <div className="text-blue-100 text-lg">Records in Database</div>
            </div>
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm">
              <div className="text-5xl font-bold mb-2">15K+</div>
              <div className="text-blue-100 text-lg">Reunions Facilitated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Find Who You're Looking For
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your search needs. All plans include our
              core AI search technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {result?.map((item: any) => (
              <PricingCard key={item.id} item={item} user={user} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Find Someone Today</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
            Join over 500,000 users who have successfully reconnected with
            friends, family, and loved ones using "You".
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="/dashboard"
              className="inline-flex items-center justify-center px-8 py-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              Start Your Search
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 text-blue-600 bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-lg font-medium"
            >
              View All Plans
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
