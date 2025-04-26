import HeroSection from '@/components/home/hero-section';
import FeaturedElements from '@/components/home/featured-elements';
import FeaturedMolecules from '@/components/home/featured-molecules';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedElements />
      <FeaturedMolecules />
    </div>
  );
}