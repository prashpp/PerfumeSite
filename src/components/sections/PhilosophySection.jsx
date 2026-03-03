import FadeInSection from '../ui/FadeInSection';
import GoldDivider from '../ui/GoldDivider';

const pillars = [
  { num: '01', title: 'Rare Botanicals', desc: 'Sourced from the sun-drenched valleys of Provence.' },
  { num: '02', title: 'Hand-Poured', desc: 'Artisanal craft preserved through generations.' },
  { num: '03', title: 'Eternal Sillage', desc: 'Masterfully concentrated for lasting presence.' },
];

export default function PhilosophySection() {
  return (
    <section className="py-40 px-8 md:px-24 bg-[#0D0D0E] border-y border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <FadeInSection>
          <div className="mb-10 inline-block">
            <span className="text-[#C5A059] text-5xl">✦</span>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <h3 className="font-serif text-3xl md:text-5xl text-white mb-10 leading-snug italic font-light">
            "Fragrance is the most intense form of memory, an olfactory echo of who we once were and who we aspire to be."
          </h3>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <GoldDivider className="mx-auto mb-10" />
          <p className="text-slate-400 text-xl leading-relaxed font-light max-w-3xl mx-auto mb-24">
            At AURELIA, we believe that a scent is more than a profile; it is a signature of identity.
            Each of our fragrances is meticulously crafted using rare botanicals and essential oils
            sourced from ethically-managed estates across the Mediterranean.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 max-w-4xl mx-auto">
          {pillars.map((p, i) => (
            <FadeInSection key={p.num} delay={0.1 * i + 0.3}>
              <div className="group text-center">
                <div className="text-[#C5A059] font-serif text-3xl mb-3 group-hover:-translate-y-1 transition-transform duration-300">
                  {p.num}
                </div>
                <h4 className="text-[10px] uppercase tracking-ultra text-slate-200 font-bold mb-3">{p.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
