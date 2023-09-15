import HotDeals from '@/components/body/HotDeals'
import SpecialOffers from '@/components/body/specialOffers'
import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'

export default function Home() {
  return (
    <div>
      <Hero/>
      <section className='spaceing py-24 space-y-24'>
        <HotDeals/>
        <SpecialOffers/>
      </section>
      <Footer/>
    </div>
  )
}
