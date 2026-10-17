import { motion, AnimatePresence } from 'motion/react'
import {
  ArrowRight,
  Check,
  ChevronRight,
  Heart,
  Menu,
  ScanLine,
  Search,
  ShoppingBag,
  Sparkles,
  Watch,
  X,
} from 'lucide-react'
import { useState } from 'react'

type Product = {
  id: string
  name: string
  line: string
  price: number
  image: string
  target: string
  description: string
  caseSize: string
  thickness: string
  movement: string
  water: string
  crystal: string
  strap: string
  powerReserve: string
  wristText: string
}

const products: Product[] = [
  {
    id: 'classic', name: 'Auron Classic', line: 'ESSENTIAL COLLECTION', price: 28900,
   image: `${import.meta.env.BASE_URL}images/auron-classic.jpg`,
target: `${import.meta.env.BASE_URL}ar-targets/AURON_TARGET_01.jpg`,
    description: 'A refined automatic with a deep navy sunray dial and two-tone steel bracelet.',
    caseSize: '40 mm', thickness: '10.4 mm', movement: 'Automatic A-320', water: '10 ATM', crystal: 'Sapphire', strap: '316L Steel', powerReserve: '68 hours',
    wristText: 'Balanced proportions designed for an understated, everyday wrist presence.',
  },
  {
    id: 'chrono', name: 'Auron Chrono', line: 'PERFORMANCE COLLECTION', price: 34900,
    image: `${import.meta.env.BASE_URL}images/auron-chrono.jpg`,
target: `${import.meta.env.BASE_URL}ar-targets/AURON_TARGET_02.jpg`,
    description: 'A sport-luxury chronograph with warm-gold detailing, tachymeter bezel and a sculpted bracelet.',
    caseSize: '42 mm', thickness: '11.5 mm', movement: 'Automatic A-500', water: '10 ATM', crystal: 'Sapphire', strap: 'Two-tone Steel', powerReserve: '72 hours',
    wristText: 'A confident 42 mm profile. The AR hand mode lets you preview its scale at home.',
  },
  {
    id: 'skeleton', name: 'Auron Skeleton', line: 'ATELIER COLLECTION', price: 49900,
    image: `${import.meta.env.BASE_URL}images/auron-skeleton.jpg`,
target: `${import.meta.env.BASE_URL}ar-targets/AURON_TARGET_03.jpg`,
    description: 'An open-worked statement piece that reveals the architecture of its mechanical movement.',
    caseSize: '42 mm', thickness: '12.0 mm', movement: 'Automatic A-610', water: '5 ATM', crystal: 'Sapphire', strap: 'Leather', powerReserve: '60 hours',
    wristText: 'A sculptural 42 mm case with depth and character. Preview it on your own wrist in AR.',
  },
]

const money = (n: number) => `৳${n.toLocaleString('en-BD')}`


const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    duration: 0.7,
    ease: [0.16, 1, 0.3, 1] as const,
  },
};


function Logo() {
  return (
    <div className="brand-lockup" aria-label="AURON">
      <div className="brand-mark">A</div>
      <div>
        <div className="brand-name">AURON</div>
        <div className="brand-tagline">TIME LIVES DIFFERENTLY</div>
      </div>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selected, setSelected] = useState<Product | null>(null)
  const [targetProduct, setTargetProduct] = useState<Product | null>(null)
  const [favorites, setFavorites] = useState<string[]>([])
  const [cartCount, setCartCount] = useState(0)

  const go = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleFav = (id: string) => {
    setFavorites((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])
  }

  const openTarget = (product: Product) => setTargetProduct(product)

  return (
    <div className="auron">
      <div className="noise" aria-hidden="true" />

      <header className="nav">
        <button className="logo-button" onClick={() => go('home')}><Logo /></button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <button onClick={() => go('collection')}>Collection</button>
          <button onClick={() => go('experience')}>AR Experience</button>
          <button onClick={() => go('craftsmanship')}>Craftsmanship</button>
          <button onClick={() => go('story')}>Our Story</button>
        </nav>
        <div className="nav-actions">
          <button className="round-icon nav-search" aria-label="Search"><Search size={16} /></button>
          <button className="round-icon" aria-label="Favorites"><Heart size={16} fill={favorites.length ? 'currentColor' : 'none'} />{favorites.length > 0 && <small>{favorites.length}</small>}</button>
          <button className="round-icon" aria-label="Shopping bag" onClick={() => setCartCount((n) => n + 1)}><ShoppingBag size={16} />{cartCount > 0 && <small>{cartCount}</small>}</button>
          <button className="gold-button nav-shop" onClick={() => go('collection')}>Shop collection <ArrowRight size={13} /></button>
          <button className="round-icon mobile-menu" aria-label="Menu" onClick={() => setMenuOpen((v) => !v)}>{menuOpen ? <X size={17} /> : <Menu size={17} />}</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-bg" />
          <div className="hero-content shell">
            <motion.div className="hero-copy" {...reveal}>
              <p className="kicker">AURON / TIMEPIECES</p>
              <h1>More than<br /><span>a watch.</span></h1>
              <p className="hero-lead">Designed with restraint. Experienced in detail. Discover three AURON timepieces, then use our companion AR experience to explore and try before you buy.</p>
              <div className="hero-cta-row">
                <button className="gold-button" onClick={() => go('collection')}>Explore collection <ArrowRight size={14} /></button>
                <button className="outline-button" onClick={() => go('experience')}><ScanLine size={14} /> See AR experience</button>
              </div>
              <div className="hero-metrics">
                <div><strong>03</strong><span>signature watches</span></div>
                <div><strong>3D</strong><span>detail view</span></div>
                <div><strong>AR</strong><span>on your wrist</span></div>
              </div>
            </motion.div>
            <button className="hero-model" onClick={() => setSelected(products[1])} aria-label="View Auron Chrono">
              <span>AURON CHRONO</span>
              <strong>Precision in motion.</strong>
              <em>Discover model <ChevronRight size={13} /></em>
            </button>
          </div>
        </section>

        <section className="trust-strip">
          <div><Sparkles size={17} /><span><b>Sapphire</b><small>Crystal</small></span></div>
          <div><Watch size={17} /><span><b>Automatic</b><small>Movement</small></span></div>
          <div><ScanLine size={17} /><span><b>AR ready</b><small>Every model</small></span></div>
          <div><Check size={17} /><span><b>2-year</b><small>Warranty</small></span></div>
        </section>

        <section id="collection" className="collection light-section">
          <div className="section-top shell">
            <div>
              <p className="kicker dark">THE COLLECTION</p>
              <h2>Three expressions.<br /><i>One AURON.</i></h2>
            </div>
            <p className="section-intro">Essential, performance and atelier. Choose your watch, explore the details, then experience it in AR before you order.</p>
          </div>

          <div className="products shell">
            {products.map((p, i) => (
              <motion.article className="product-card" key={p.id} {...reveal}>
                <div className="product-photo">
                  <img src={p.image} alt={p.name} />
                  <div className="photo-top"><span>{String(i + 1).padStart(2, '0')}</span><button onClick={() => toggleFav(p.id)} aria-label={`Save ${p.name}`}><Heart size={15} fill={favorites.includes(p.id) ? 'currentColor' : 'none'} /></button></div>
                  <div className="photo-bottom"><span>{p.line}</span><span className="ar-pill"><ScanLine size={11} /> AR</span></div>
                </div>
                <div className="product-body">
                  <div className="product-title-row"><div><p className="product-line">{p.line}</p><h3>{p.name}</h3></div><b>{money(p.price)}</b></div>
                  <p>{p.description}</p>
                  <div className="mini-specs"><span>{p.caseSize}</span><span>{p.movement}</span><span>{p.crystal}</span></div>
                  <div className="card-actions">
                    <button className="dark-button" onClick={() => setSelected(p)}>View details <ArrowRight size={13} /></button>
                    <button className="text-action" onClick={() => openTarget(p)}><ScanLine size={13} /> AR</button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="experience section-dark">
          <div className="shell compact-experience">
            <motion.div className="experience-header" {...reveal}>
              <div>
                <p className="kicker">THE AURON EXPERIENCE</p>
                <h2>See it.<br /><i>Before you buy.</i></h2>
              </div>
              <p>Every AURON model has a dedicated target image. Scan it in the companion app, explore the watch in 3D, reveal the movement, then switch to hand mode to understand scale on your wrist.</p>
              <button className="outline-button" onClick={() => openTarget(products[1])}>Open AR preview <ArrowRight size={13} /></button>
            </motion.div>

            <div className="experience-grid">
              <article className="experience-card"><img
  src={`${import.meta.env.BASE_URL}ar-targets/AURON_TARGET_01.jpg`}
  alt="AURON Classic AR target"
/>
<div><span>01</span><h3>Scan</h3><p>Start with the dedicated AURON image.</p></div></article>
              <article className="experience-card"><img
  src={`${import.meta.env.BASE_URL}ar-targets/AURON_TARGET_02.jpg`}
  alt="AURON Chrono AR target"
/><div><span>02</span><h3>Explore</h3><p>Inspect the watch and its inner mechanics in 3D.</p></div></article>
              <article className="experience-card"><img
  src={`${import.meta.env.BASE_URL}ar-targets/AURON_TARGET_03.jpg`}
  alt="AURON Skeleton AR target"
/><div><span>03</span><h3>Wear</h3><p>Preview the watch on your wrist before ordering.</p></div></article>
            </div>
          </div>
        </section>

        <section id="craftsmanship" className="craftsmanship section-dark">
          <div className="craft-copy shell-narrow">
            <p className="kicker">THE INNER STORY</p>
            <h2>Beautiful outside.<br /><i>Precise inside.</i></h2>
            <p>From the dial and case to the rotor, gear train and balance wheel, the AURON experience lets you get closer to what makes a mechanical watch special.</p>
            <div className="craft-links"><span>Movement</span><span>Case finishing</span><span>Materials</span></div>
          </div>
          <div className="mechanism-image"><img src="/images/auron-mechanism.jpg" alt="AURON mechanical movement" /></div>
        </section>

        <section id="story" className="story light-section">
          <div className="shell story-inner">
            <div>
              <p className="kicker dark">OUR STORY</p>
              <h2>Precision with a<br /><i>point of view.</i></h2>
            </div>
            <div className="story-copy">
              <p>AURON is a watch brand built around considered design and a more modern way to experience a timepiece. The watch still comes first; technology simply lets you understand it before it arrives.</p>
              <div className="story-meta"><span>Dhaka, Bangladesh</span><span>Est. 2026</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-inner"><Logo /><div className="footer-note">Timepieces designed to be experienced.</div><div className="footer-right">© 2026 AURON</div></div>
      </footer>

      <AnimatePresence>
        {selected && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div className="product-modal" initial={{ y: 18, scale: .985 }} animate={{ y: 0, scale: 1 }} exit={{ y: 18, scale: .985 }} onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelected(null)}><X size={16} /></button>
              <div className="modal-image"><img src={selected.image} alt={selected.name} /></div>
              <div className="modal-content">
                <p className="product-line">{selected.line}</p>
                <h3>{selected.name}</h3>
                <div className="modal-price">{money(selected.price)}</div>
                <p>{selected.description}</p>
                <div className="full-spec-grid">
                  <div><small>Case</small><b>{selected.caseSize}</b></div><div><small>Movement</small><b>{selected.movement}</b></div>
                  <div><small>Crystal</small><b>{selected.crystal}</b></div><div><small>Water</small><b>{selected.water}</b></div>
                  <div><small>Reserve</small><b>{selected.powerReserve}</b></div><div><small>Strap</small><b>{selected.strap}</b></div>
                </div>
                <p className="wrist-note"><b>On your wrist.</b> {selected.wristText}</p>
                <div className="modal-actions"><button className="gold-button wide" onClick={() => setCartCount((n) => n + 1)}>Add to bag <ArrowRight size={13} /></button><button className="outline-button wide" onClick={() => openTarget(selected)}><ScanLine size={13} /> See AR experience</button></div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {targetProduct && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setTargetProduct(null)}>
            <motion.div className="target-modal" initial={{ y: 18, scale: .985 }} animate={{ y: 0, scale: 1 }} exit={{ y: 18, scale: .985 }} onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setTargetProduct(null)}><X size={16} /></button>
              <div className="target-copy">
                <p className="kicker">{targetProduct.name.toUpperCase()}</p>
                <h3>Experience it<br /><i>before you buy.</i></h3>
                <p>Use the companion Unity app to scan this image target. Explore the watch in 3D, reveal the inside, then use the app's hand mode to preview the watch on your wrist.</p>
                <div className="target-steps"><span><b>01</b> Open the AURON AR app.</span><span><b>02</b> Select {targetProduct.name}.</span><span><b>03</b> Point the camera at this image.</span><span><b>04</b> Explore 3D and Try on Hand.</span></div>
              </div>
              <div className="target-image"><img src={targetProduct.target} alt={`${targetProduct.name} AURON AR target`} /><a href={targetProduct.target} download>Save target image <ArrowRight size={13} /></a></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
