import {useState} from 'react'
import {motion,useReducedMotion} from 'framer-motion'
import {ArrowDown,ArrowDownRight,ArrowRight,ArrowUpRight,Check,Code2,Download, Github, GraduationCap, Linkedin, Mail, Menu, MonitorSmartphone, MousePointer2, Sparkles, X, Zap} from 'lucide-react'
import SectionHeading from './components/SectionHeading.jsx'
import {journey,profile,projects,skills} from './data.js'

const reveal={hidden:{opacity:0,y:24},visible:{opacity:1,y:0,transition:{duration:.55,ease:'easeOut'}}}
function Reveal({children,className=''}) {
 const reduced=useReducedMotion()
 return <motion.div className={className} variants={reveal} initial={reduced?false:'hidden'} whileInView={reduced?undefined:'visible'} viewport={{once:true,amount:.15}}>{children}</motion.div>
}
function Nav(){
 const [open,setOpen]=useState(false)
 const links=[['À propos','#about'],['Compétences','#skills'],['Projets','#projects'],['Parcours','#journey']]
 return <header className="nav-wrap"><nav className="nav container"><a className="brand" href="#home"><span className="brand-mark">K<span>.</span></span><span className="brand-label">PORTFOLIO <i>/ 2026</i></span></a><div className={`nav-links ${open?'nav-links-open':''}`}>{links.map(([t,h])=><a key={h} className="nav-link" href={h} onClick={()=>setOpen(false)}>{t}</a>)}<a className="nav-contact" href="#contact" onClick={()=>setOpen(false)}>Me contacter <ArrowUpRight size={15}/></a></div><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Ouvrir/fermer le menu">{open?<X/>:<Menu/>}</button></nav></header>
}
function Hero(){
 return <section className="hero container" id="home"><div className="hero-grid"><div className="hero-copy">
 <motion.div className="availability" initial={{opacity:0,x:-12}} animate={{opacity:1,x:0}}><span className="status-dot"/> DISPONIBLE POUR DES OPPORTUNITÉS</motion.div>
 <motion.p className="hero-kicker" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.2}}>Bonjour, je suis {profile.firstName}</motion.p>
 <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.25}}>Je transforme les idées en <span className="gradient-text">expériences digitales.</span></motion.h1>
 <motion.p className="hero-intro" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.4}}>{profile.intro}</motion.p>
 <div className="hero-actions"><a className="button button-primary" href="#projects">Explorer mes projets <ArrowRight size={17}/></a><a className="button button-ghost" href={profile.cvPath} download><Download size={17}/> Télécharger mon CV</a></div>
 <div className="hero-socials"><span className="social-caption">RETROUVEZ-MOI</span><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a><a href={`mailto:${profile.email}`} aria-label="E-mail"><Mail size={18}/></a></div>
 </div><motion.div className="hero-visual" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.2}}><div className="orb orb-one"/><div className="orb orb-two"/><motion.div className="visual-card" animate={{y:[0,-8,0]}} transition={{duration:5,repeat:Infinity,ease:'easeInOut'}}><div className="code-top"><span/><span/><span/><small>creative.dev</small></div><div className="code-content"><p><em>01</em> <b>const</b> <strong>developer</strong> = {'{'}</p><p className="indent"><i>name</i>: <u>'Mamadou Keita'</u>,</p><p className="indent"><i>focus</i>: [</p><p className="indent2"><u>'Frontend'</u>,</p><p className="indent2"><u>'Data & IA'</u></p><p className="indent">],</p><p className="indent"><i>mindset</i>: <u>'Always learning'</u></p><p>{'}'}<span className="cursor">▋</span></p></div></motion.div><motion.div className="floating-chip chip-top" animate={{y:[0,7,0]}} transition={{duration:4,repeat:Infinity}}><Code2 size={16}/> Clean code</motion.div><motion.div className="floating-chip chip-bottom" animate={{y:[0,-7,0]}} transition={{duration:4.5,repeat:Infinity}}><Sparkles size={16}/> Creative mind</motion.div><div className="visual-caption">— BUILD · LEARN · CREATE</div></motion.div></div><a href="#about" className="scroll-hint"><ArrowDown size={15}/> DÉFILER POUR EXPLORER</a></section>
}
function About(){
 const items=[{icon:Code2,title:'Développement',desc:'Des interfaces rapides, accessibles et pensées pour les utilisateurs.'},{icon:MonitorSmartphone,title:'Expérience UI',desc:'Un design responsive et des interactions soignées.'},{icon:Zap,title:'Data & impact',desc:'Des données structurées pour éclairer les décisions.'},{icon:MousePointer2,title:'Apprentissage',desc:'Expérimenter, itérer et progresser à chaque projet.'}]
 return <section className="section container" id="about"><Reveal><SectionHeading eyebrow="01 / À PROPOS" title={<>Curieux par nature.<br/><span className="muted-title">Créateur par passion.</span></>} description="À la croisée du développement web, de la donnée et de la résolution de problèmes."/></Reveal><div className="about-grid"><Reveal className="about-text"><p>J’aime concevoir des outils numériques utiles, rendre l’information plus lisible et apprendre en construisant des projets concrets.</p><p>Mon approche associe rigueur technique, sens du détail et envie de comprendre les besoins avant de choisir la solution.</p><div className="about-location"><span className="location-pulse"/> {profile.location}</div></Reveal><div className="value-grid">{items.map((v,i)=>{const Icon=v.icon;return <Reveal key={v.title}><motion.article className="value-card" whileHover={{y:-5,borderColor:'rgba(153,117,255,.42)'}}><span className="value-icon"><Icon size={19}/></span><h3>{v.title}</h3><p>{v.desc}</p></motion.article></Reveal>})}</div></div></section>
}
function Skills(){return <section className="section section-alt" id="skills"><div className="container"><Reveal><SectionHeading eyebrow="02 / COMPÉTENCES" title={<>Des outils pour <span className="gradient-text">construire.</span></>} description="Une boîte à outils en évolution constante, au service de projets concrets."/></Reveal><div className="skills-grid">{skills.map((g,i)=><Reveal key={g.category}><motion.article className="skill-card" whileHover={{y:-5}}><div className="skill-card-head"><span className="skill-number">0{i+1}</span><h3>{g.category}</h3></div><div className="skill-tags">{g.items.map(s=><span key={s} className="skill-tag">{s}</span>)}</div><div className="skill-card-bottom"><span>DOMAINES DE PRATIQUE</span><ArrowDownRight size={16}/></div></motion.article></Reveal>)}</div></div></section>}

function ProjectVisual({ project }) {
  const imageUrl = project.image
    ? `${import.meta.env.BASE_URL}${project.image}`
    : null;

  return (
    <div className={`project-visual project-${project.accent}`}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`Aperçu du projet ${project.title}`}
          className="project-image"
          loading="lazy"
        />
      ) : (
        <div className="visual-window">
          <div className="window-bar">
            <span /><span /><span />
            <i>project.preview</i>
          </div>
          <div className="preview-body">
            <div className="preview-sidebar">
              <b /><span /><span /><span /><span />
            </div>
            <div className="preview-main">
              <div className="preview-title" />
              <div className="preview-kpis">
                <i /><i /><i />
              </div>
              <div className="preview-chart">
                {[45, 62, 40, 80, 55, 92, 67].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="preview-lines">
                <i /><i /><i />
              </div>
            </div>
          </div>
        </div>
      )}
      <span className="preview-badge">{project.category}</span>
    </div>
  );
}


function Projects() {
  return (
    <section className="section container" id="projects">
      <Reveal>
        <div className="projects-heading">
          <SectionHeading
            eyebrow="03 / PROJETS SÉLECTIONNÉS"
            title={
              <>
                Le travail parle
                <br />
                <span className="muted-title">de lui-même.</span>
              </>
            }
            description="Quelques projets qui illustrent mon approche et les sujets que j’explore."
          />
          <span className="project-count">
            04 <small>PROJETS</small>
          </span>
        </div>
      </Reveal>

      <div className="projects-grid">
        {projects.map((p) => (
          <Reveal key={p.number}>
            <motion.article
              className="project-card"
              whileHover={{ y: -7 }}
            >
              <ProjectVisual project={p} />

              <div className="project-info">
                <div className="project-overline">
                  <span>
                    {p.number} / {p.category}
                  </span>

                  <div className="project-links">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Code source de ${p.title}`}
                        title="Voir le code source"
                      >
                        <Github size={17} />
                        <span>Code</span>
                      </a>
                    )}

                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visiter la démo de ${p.title}`}
                        title="Visiter le site"
                      >
                        <ArrowUpRight size={17} />
                        <span>Démo</span>
                      </a>
                    )}
                  </div>
                </div>

                <h3>{p.title}</h3>

                <p>{p.description}</p>

                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>

      <p className="projects-note">
        <Sparkles size={16} />
        Les liens de démonstration et les dépôts peuvent être ajoutés
        au fur et à mesure de l’avancement des projets.
      </p>
    </section>
  );
}


function Journey(){return <section className="section section-alt" id="journey"><div className="container journey-layout"><Reveal><div><SectionHeading eyebrow="04 / PARCOURS" title={<>L’expérience<br/><span className="muted-title">en mouvement.</span></>} description="Un parcours qui évolue entre apprentissage, transmission et création."/><div className="journey-note"><GraduationCap size={20}/> Chaque expérience est une occasion d’apprendre et de partager.</div></div></Reveal><div className="timeline">{journey.map(j=><Reveal key={j.title}><article className="timeline-item"><span className="timeline-dot"/><p className="timeline-date">{j.date}</p><h3>{j.title}</h3><p className="timeline-place">{j.place}</p><p className="timeline-description">{j.description}</p></article></Reveal>)}</div></div></section>}
function Contact(){const [copied,setCopied]=useState(false);async function copy(){try{await navigator.clipboard.writeText(profile.email);setCopied(true);window.setTimeout(()=>setCopied(false),1800)}catch{window.location.href=`mailto:${profile.email}`}}return <section className="section container" id="contact"><Reveal><div className="contact-panel"><div className="contact-glow"/><p className="eyebrow">05 / CONTACT</p><h2>Un projet en tête ?<br/><span className="gradient-text">Parlons-en.</span></h2><p className="contact-copy">Une idée, une collaboration ou une opportunité ? Je serai ravi d’échanger avec vous.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}?subject=${encodeURIComponent('Contact depuis mon portfolio')}`}><Mail size={17}/> M’envoyer un e-mail <ArrowUpRight size={16}/></a><button className="button button-ghost" onClick={copy}>{copied?<Check size={17}/>:<Mail size={17}/>} {copied?'Adresse copiée':'Copier mon e-mail'}</button></div></div></Reveal></section>}
function Footer(){return <footer className="footer"><div className="container footer-inner"><a className="brand" href="#home"><span className="brand-mark">K<span>.</span></span></a><p>Conçu avec intention · React, Tailwind & Framer Motion</p><a className="back-top" href="#home">Retour en haut ↑</a><span className="footer-copy">© {new Date().getFullYear()} {profile.lastName}</span></div></footer>}
export default function App(){return <><div className="background-grid" aria-hidden="true"/><Nav/><main><Hero/><About/><Skills/><Projects/><Journey/><Contact/></main><Footer/></>}
