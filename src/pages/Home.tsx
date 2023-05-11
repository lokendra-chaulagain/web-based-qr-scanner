import { lazy, Suspense } from "react";
import QRScanner from "../components/user/QRScanner";
const Features = lazy(() => import("../components/user/Features"));
const HeroSection = lazy(() => import("../components/user/HeroSection"));

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeroSection />
      <QRScanner/>
      <Features />
    </Suspense>
  );
}
