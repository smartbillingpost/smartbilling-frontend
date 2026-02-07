import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Pillars from "../components/Pillars";
import TrustHighlights from "../components/TrustHighlights";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
SmartBilling – Offline GST Billing & Invoicing App for Small Businesses in India
        </title>

        <meta
          name="description"
          content="SmartBilling is simple offline simple billing and GST app for Indian retail shops, distributors, and small businesses in India. Manage billing, expenses, GST, and business reports easily."
        />

        <meta
          name="keywords"
          content="billing and gst app, gst billing app, billing app for small business, offline billing app, billing software india"
        />
      </Helmet>

      <Hero />
      <Pillars />
      <TrustHighlights />
    </>
  );
}
