(() => {
  'use strict';

  const SKILLS = [
    { group: '3D & Game', items: ['3D Modelling', '3D Texturing', 'Real-Time Lighting', 'Game Design', 'Environment Design', 'AR / VR', 'Post-Processing'] },
    { group: 'UI/UX & Design', items: ['UI/UX Design', 'Wireframing', 'Prototyping', 'Usability Testing', 'Visual Communication', 'Graphic Design'] },
    { group: 'Development', items: ['HTML', 'CSS', 'JavaScript', 'C#', 'Python', 'App Development', 'Web Development'] },
    { group: 'Tools', items: ['Unity', 'Maya', 'Substance Painter', 'Figma', 'Illustrator', 'Photoshop', 'After Effects', 'Premiere Pro', 'Canva'] },
  ];

  const EXPERIENCE = [
    { role: 'Front Desk Admin', org: 'Meta Robotics', date: 'Nov 2025 — Present', desc: 'Maintain accurate attendance and administrative records in Excel and internal scheduling systems; resolve customer issues professionally and keep a well-organised, student-friendly environment.' },
    { role: 'UPS Engineer Assistant', org: 'Clover Solutions', date: 'Aug 2024 — Present', desc: 'Support installation and maintenance of UPS systems across critical sites including PUB, SMRT, and Mandai Wildlife Reserve — troubleshooting, performance testing, wiring, battery replacement and preventive maintenance alongside on-site engineers.' },
  ];

  const PROJECTS = [
    {
      slug: 'smb',
      image: 'assets/images/proj1.webp',
      tag: 'Brand · Strategy', date: 'Jan — Feb 2026',
      title: 'Digital Marketing Campaign', client: 'SMB · Social Media Branding',
      desc: 'A 30-day social media campaign to grow an ice cream brand online — content planning, a clear brand look, and simple SEO to reach more people.',
      type: 'Group project',
      duration: '30 days · Jan – Feb 2026',
      goal: 'To create a cohesive digital marketing campaign that strengthens Burnt Cones’ online presence and builds a consistent brand identity across multiple digital platforms.',
      overview: 'A digital marketing project focused on promoting Burnt Cones through branding, social media, website design, newsletters, SEO, and promotional materials. The campaign was designed to increase brand awareness and engage its target audience.',
      tools: ['Figma', 'Illustrator', 'Photoshop', 'Canva'],
      tasks: [
        'Audience research & persona development',
        'Content strategy & 30-day posting calendar',
        'Brand positioning & tone of voice',
        'Basic SEO & hashtag strategy',
        'Weekly performance analysis & optimisation',
      ],
      previews: [
        { image: 'assets/images/p1a.webp', alt: 'Feed mockup', ratio: '4/3' },
        { image: 'assets/images/p1b.webp', alt: 'Story / reel frame', ratio: '4/3' },
        { image: 'assets/images/p1c.webp', alt: 'Analytics snapshot', ratio: '4/3' },
        { image: 'assets/images/p1d.webp', alt: 'Brand boards', ratio: '4/3' },
      ],
      proposal: 'uploads/burnt-cones-proposal.pdf',
      proposalName: 'burnt-cones-proposal.pdf',
      hasPdf: true,
      links: [
        { label: 'Burnt Cones Website', url: 'https://zennchuayz.wixsite.com/burntcones' },
        { label: 'Aura Creative', url: 'https://zennchuayz.wixsite.com/my-site-1' },
      ],
    },
    {
      slug: 'dva',
      image: 'assets/images/proj4.webp',
      tag: 'Video · Motion', date: 'May — Jun 2026',
      title: '10-Second Advertisement', client: 'DVA · Digital Video & Audio',
      desc: 'A 10-second ad for the Yamaha R15 — planned with a storyboard, filmed, then edited in Premiere Pro with sound and colour to finish.',
      type: 'Individual project',
      duration: 'May – Jun 2026',
      goal: 'To create a cinematic 10-second promotional video for the Yamaha R15 through effective planning, filming, and post-production.',
      overview: 'For the Digital Video & Audio module I planned and produced a 10-second promotional video for the Yamaha R15 motorcycle. Starting from a production booklet covering concept, storyboard and shot list, I shot the footage and edited it in Premiere Pro — handling cuts, dynamic cinematography, sound design, and colour grade to land a clean, cinematic spot.',
      tools: ['Premiere Pro', 'After Effects', 'Photoshop'],
      tasks: [
        'Concept & storyboard development',
        'Production booklet & shot list',
        'Filming & footage capture',
        'Editing & transitions in Premiere Pro',
        'Sound design & colour grade',
      ],
      previews: [
        { image: 'assets/images/p4a.webp', alt: 'Ad still 01', ratio: '16/9' },
        { image: 'assets/images/p4b.webp', alt: 'Ad still 02', ratio: '16/9' },
        { image: 'assets/images/p4c.webp', alt: 'Storyboard frame', ratio: '4/3' },
        { image: 'assets/images/p4d.webp', alt: 'Edit timeline', ratio: '4/3' },
      ],
      proposal: 'uploads/DVA_ASG1_R15ProdBooklet(reduced).pdf',
      proposalName: 'DVA_ASG1_R15ProdBooklet(reduced).pdf',
      proposalLabel: 'Production booklet',
      hasPdf: true,
      hasVideo: true,
      video: 'https://www.youtube.com/embed/_V5RXtMvRVk',
      videoLabel: 'Final advertisement',
    },
    {
      slug: 'stld',
      image: 'assets/images/proj5.webp',
      tag: '3D · Game Design', date: 'Jun — Jul 2025',
      title: 'Sci-Fi Escape', client: 'STLD · Spatial Theory & Level Design',
      desc: 'A first-person 3D game level built in Unity — you crash on an unknown planet and explore to find parts and fix your ship to escape.',
      type: 'Individual project',
      duration: '6 weeks · Jun – Jul 2025',
      goal: 'To design and develop an interactive first-person 3D experience in Unity that combines engaging level design, player interaction, and exploration.',
      overview: 'Taking the role of 3D Unity Developer, I built an interactive level from a sci-fi scenario: stranded on an unknown planet, the player explores the terrain to find parts and repair their crashed spaceship. Every static mesh was modelled from scratch and brought to life with audio-driven game juice — documented end-to-end in a level design document, from bubble diagrams and rough maps through to design rationale.',
      tools: ['Unity', 'C#', 'Maya', 'Substance Painter', 'Git'],
      tasks: [
        'Level design document — abstract, bubble diagram & rough map',
        'Custom 3D mesh modelling & asset list',
        'First-person controller & puzzle systems',
        'Game juice — audio feedback & game-state reactions',
        'Git version control & gameplay video capture',
      ],
      previews: [
        { image: 'assets/images/p5a.webp', alt: 'Level overview', ratio: '16/9' },
        { image: 'assets/images/p5b.webp', alt: 'Spaceship interior', ratio: '16/9' },
        { image: 'assets/images/p5c.webp', alt: 'Interaction / puzzle', ratio: '4/3' },
        { image: 'assets/images/p5d.webp', alt: 'Bubble diagram / map', ratio: '4/3' },
      ],
      proposal: 'uploads/I3E_STLD(compressed).pdf',
      proposalName: 'I3E_STLD(compressed).pdf',
      proposalLabel: 'Assignment brief',
      hasVideo: true,
      video: 'https://www.youtube.com/embed/mwuy7LnmdI4',
      videoLabel: 'Gameplay walkthrough',
    },
    {
      slug: '3rt',
      image: 'assets/images/proj6.webp',
      tag: '3D · Environment Art', date: 'Jul — Aug 2025',
      title: 'Sci-Fi Corridor', client: '3RT · 3D Real-Time',
      desc: 'A sci-fi corridor built in 3D — modelled, textured and lit to feel real, then put together as a scene you can walk through in Unity.',
      type: 'Individual project',
      duration: '6 weeks · Jul – Aug 2025',
      goal: 'To design and build a real-time sci-fi environment using modular assets, efficient texturing techniques, and lighting to create an immersive first-person experience.',
      overview: 'A 3D environment art project that involved designing and building a sci-fi corridor from concept to final implementation. The project included modular modelling, hero asset creation, texturing, lighting, VFX, post-processing, and Unity scene assembly to create a playable first-person environment.',
      tools: ['Unity', 'Maya', 'Substance Painter', 'PureRef', 'Photoshop'],
      tasks: [
        'PureRef visual research & mood-board',
        'Whiteboxing & modular blockout',
        'Modular asset modelling with topological economy',
        'Texture atlas & trim-sheet workflow',
        'Hero asset — high-to-low bake & unique UV texturing',
        'Real-time lighting, VFX & post-processing',
        'Playable first-person Unity build with portal loop',
      ],
      previews: [
        { image: 'assets/images/p6a.webp', alt: 'Hero area render', ratio: '16/9' },
        { image: 'assets/images/p6b.webp', alt: 'Corridor junction', ratio: '16/9' },
        { image: 'assets/images/p6c.webp', alt: 'Hero asset detail', ratio: '4/3' },
        { image: 'assets/images/p6d.webp', alt: 'Texture atlas / trim sheet', ratio: '4/3' },
      ],
      proposal: 'uploads/3RT_ASG2_APR25(compressed).pdf',
      proposalName: '3RT_ASG2_APR25(compressed).pdf',
      proposalLabel: 'Assignment brief',
      hasVideo: true,
      video: 'https://www.youtube.com/embed/wDQyi1riFS8',
      videoLabel: 'Environment flythrough',
    },
    {
      slug: 'photobooth',
      image: 'assets/images/proj2.webp',
      tag: 'AR · UX', date: 'Dec 2025 — Jan 2026',
      title: 'Interactive Photo Booth Kiosk', client: 'School of ICT',
      desc: 'An AR photo booth kiosk for school events — designed the full experience, from how people use it to the final screens, with easy photo sharing.',
      type: 'Individual project',
      duration: '6 weeks · Dec 2025 – Jan 2026',
      goal: 'To design an interactive AR photo booth kiosk that enhances visitor engagement at Ngee Ann Polytechnic ICT events by providing a fun, accessible, and shareable photo-taking experience while reinforcing the school’s identity.',
      overview: 'To conceptualise and design an interactive AR photo booth kiosk for Ngee Ann Polytechnic ICT. The project involved user research, persona development, user journey mapping, interface design, kiosk hardware planning, and interactive prototyping to create an intuitive and engaging self-service experience for students and visitors.',
      tools: ['Figma', 'Illustrator', 'Canva'],
      tasks: [
        'User personas & journey mapping',
        'Sitemap & wireframes',
        'High-fidelity Figma prototype',
        'AR interaction & overlay design',
        'QR-based sharing flow',
        'Illustrator design specs for handoff',
      ],
      previews: [
        { image: 'assets/images/p2a.webp', alt: 'Kiosk attract screen', ratio: '4/3' },
        { image: 'assets/images/p2b.webp', alt: 'Capture flow', ratio: '4/3' },
        { image: 'assets/images/p2c.webp', alt: 'AR overlay detail', ratio: '4/3' },
        { image: 'assets/images/p2d.webp', alt: 'Journey map', ratio: '4/3' },
      ],
      proposal: 'uploads/photo-booth-proposal.pdf',
      proposalName: 'photo-booth-proposal.pdf',
      hasPdf: true,
      hasFigma: true,
      figma: 'https://embed.figma.com/proto/TsWfaIokRbgWmHSQ0es3iY/EXD_Assg2?node-id=6-2&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A2&show-proto-sidebar=1&embed-host=share',
    },
    {
      slug: 'ad',
      image: 'assets/images/proj3.webp',
      imageObjectPosition: '50% 42%',
      tag: 'Identity', date: 'Oct — Nov 2024',
      title: 'Personal Branding Design', client: 'AD · Applied Design',
      desc: 'A personal brand identity — logo, name card, apparel and wallpapers — designed with a consistent look across print and digital.',
      type: 'Individual project',
      duration: '8 weeks · Oct – Nov 2024',
      goal: 'To create a consistent personal brand identity that reflects my personality across both print and digital media.',
      overview: 'A branding identity project that combined Generative AI-assisted ideation with vector design to develop a complete visual identity system. The project spanned logo design, business cards, branded apparel, and mobile wallpapers, ensuring consistency in typography, colour palette, and graphic style across every brand touchpoint.',
      tools: ['Illustrator', 'Photoshop', 'Generative AI'],
      tasks: [
        'Concept exploration with generative AI',
        'Logo design & refinement',
        'Name card design',
        'Apparel & merchandise mockups',
        'Wallpaper & digital assets',
        'Brand guideline sheet',
      ],
      previews: [
        { image: 'assets/images/p3a.webp', alt: 'Logo lockups', ratio: '4/3' },
        { image: 'assets/images/p3b.webp', alt: 'Name card', ratio: '4/3' },
        { image: 'assets/images/p3c.webp', alt: 'Apparel mockup', ratio: '4/3' },
        { image: 'assets/images/p3d.webp', alt: 'Wallpaper set', ratio: '4/3' },
      ],
      proposal: 'uploads/personal-branding-proposal.pdf',
      proposalName: 'personal-branding-proposal.pdf',
      hasPdf: true,
    },
  ];

  const $ = (sel, root) => (root || document).querySelector(sel);
  const el = (tag, attrs, html) => {
    const node = document.createElement(tag);
    if (attrs) for (const k in attrs) node.setAttribute(k, attrs[k]);
    if (html != null) node.innerHTML = html;
    return node;
  };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const viewHome = $('#view-home');
  const viewDetail = $('#view-detail');
  const detailContent = $('#detailContent');

  // ---------- static home lists ----------
  function renderSkills() {
    const grid = $('#skillsGrid');
    grid.innerHTML = SKILLS.map((grp) => `
      <div data-reveal>
        <div class="skill-group-title">${esc(grp.group)}</div>
        <div class="skill-chips">
          ${grp.items.map((sk) => `<span class="chip">${esc(sk)}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  function renderExperience() {
    const list = $('#experienceList');
    list.innerHTML = EXPERIENCE.map((job) => `
      <div class="job-row" data-reveal>
        <div>
          <div class="job-role">${esc(job.role)}</div>
          <div class="job-org">${esc(job.org)}</div>
          <div class="job-date">${esc(job.date)}</div>
        </div>
        <p class="job-desc">${esc(job.desc)}</p>
      </div>
    `).join('');
  }

  function renderProjectCards() {
    const grid = $('#projectsGrid');
    grid.innerHTML = PROJECTS.map((p) => `
      <button type="button" class="project-card" data-reveal data-open-project="${p.slug}">
        <div class="thumb"><img src="${p.image}" alt="${esc(p.title)}" loading="lazy"${p.imageObjectPosition ? ` style="object-position:${p.imageObjectPosition}"` : ''}></div>
        <div class="body">
          <div class="row-top">
            <span class="project-tag">${esc(p.tag)}</span>
            <span class="project-date">${esc(p.date)}</span>
          </div>
          <h3>${esc(p.title)}</h3>
          <div class="project-client">${esc(p.client)}</div>
          <p class="project-desc">${esc(p.desc)}</p>
          <span class="project-cta">View project →</span>
        </div>
      </button>
    `).join('');
  }

  // ---------- project detail ----------
  function renderDetail(project, index) {
    const indexLabel = '0' + (index + 1);
    const hasLinks = !!(project.links && project.links.length);
    const proposalLabel = project.proposalLabel || 'Project proposal';

    detailContent.innerHTML = `
      <section class="detail-title">
        <div class="eyebrow" data-reveal>${esc(project.tag)} — Project ${indexLabel}</div>
        <h1 data-reveal>${esc(project.title)}</h1>
        <div class="detail-client" data-reveal>${esc(project.client)}</div>
      </section>

      <section class="detail-hero">
        <div class="detail-hero-frame" data-reveal>
          <img src="${project.image}" alt="${esc(project.title)}"${project.imageObjectPosition ? ` style="object-position:${project.imageObjectPosition}"` : ''}>
        </div>
      </section>

      <section class="detail-meta">
        <div class="meta-grid" data-reveal>
          <div class="meta-cell"><div class="meta-label">Duration</div><div class="meta-value">${esc(project.duration)}</div></div>
          <div class="meta-cell"><div class="meta-label">Project type</div><div class="meta-value">${esc(project.type)}</div></div>
          <div class="meta-cell"><div class="meta-label">Client</div><div class="meta-value">${esc(project.client)}</div></div>
        </div>
      </section>

      <section class="detail-block first">
        <div class="split-grid">
          <div class="eyebrow" data-reveal>Goal</div>
          <p class="goal-text" data-reveal>${esc(project.goal)}</p>
        </div>
      </section>

      <section class="detail-block">
        <div class="split-grid">
          <div class="eyebrow" data-reveal>Overview</div>
          <p class="overview-text" data-reveal>${esc(project.overview)}</p>
        </div>
      </section>

      <section class="detail-block">
        <div class="split-grid">
          <div class="eyebrow" data-reveal>Tasks</div>
          <div>
            ${project.tasks.map((t, i) => `
              <div class="task-row" data-reveal>
                <span class="task-n">${String(i + 1).padStart(2, '0')}</span>
                <span class="task-t">${esc(t)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="detail-block">
        <div class="split-grid">
          <div class="eyebrow" data-reveal>Tools used</div>
          <div class="tools-wrap" data-reveal>
            ${project.tools.map((tool) => `<span class="chip chip-lg">${esc(tool)}</span>`).join('')}
          </div>
        </div>
      </section>

      ${hasLinks ? `
      <section class="detail-block">
        <div class="split-grid">
          <div class="eyebrow" data-reveal>Live links</div>
          <div class="links-wrap" data-reveal>
            ${project.links.map((lnk) => `<a href="${esc(lnk.url)}" target="_blank" rel="noopener" class="link-btn">${esc(lnk.label)} ↗</a>`).join('')}
          </div>
        </div>
      </section>` : ''}

      <section class="gallery-section">
        <div class="section-heading" data-reveal>
          <h2>Visuals &amp; previews</h2>
          <div class="eyebrow">Gallery</div>
        </div>
        <div class="gallery-grid">
          ${project.previews.map((pv) => `
            <div class="gallery-item" data-reveal style="aspect-ratio:${pv.ratio}" data-lightbox-src="${pv.image}">
              <img src="${pv.image}" alt="${esc(pv.alt)}" loading="lazy">
            </div>
          `).join('')}
        </div>
      </section>

      ${project.hasFigma ? `
      <section class="embed-section">
        <div class="section-heading" data-reveal>
          <h2>Live prototype</h2>
          <div class="eyebrow">Figma</div>
        </div>
        <div class="embed-frame" data-reveal>
          <iframe src="${esc(project.figma)}" title="Figma prototype" allowfullscreen></iframe>
        </div>
      </section>` : ''}

      ${project.hasVideo ? `
      <section class="embed-section">
        <div class="section-heading" data-reveal>
          <h2>${esc(project.videoLabel)}</h2>
          <div class="eyebrow">Video</div>
        </div>
        <div class="embed-frame" data-reveal>
          <iframe src="${esc(project.video)}" title="${esc(project.videoLabel)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      </section>` : ''}

      ${project.hasPdf ? `
      <section class="embed-section">
        <div class="section-heading" data-reveal>
          <h2>${esc(proposalLabel)}</h2>
          <div class="eyebrow">PDF</div>
        </div>
        <div class="pdf-panel" data-reveal>
          <div class="pdf-topbar">
            <div class="pdf-topbar-left">
              <span class="pdf-dot"></span>
              <span class="pdf-name">${esc(project.proposalName)}</span>
            </div>
            <div class="pdf-topbar-actions">
              <a href="${esc(project.proposal)}" target="_blank" rel="noopener" class="pdf-btn pdf-btn-open">Open ↗</a>
              <a href="${esc(project.proposal)}" download class="pdf-btn pdf-btn-download">Download</a>
            </div>
          </div>
          <div class="pdf-viewer">
            <div class="pdf-fallback">
              <div class="pdf-fallback-icon"></div>
              <div class="pdf-fallback-text">Drop your proposal at <span>${esc(project.proposal)}</span> to preview it here.</div>
            </div>
            <iframe src="${esc(project.proposal)}" title="Project proposal"></iframe>
          </div>
        </div>
      </section>` : ''}

      <section class="detail-bottom-nav">
        <div class="bottom-nav-row">
          <button type="button" class="btn-ghost" data-go-home>← Back to all projects</button>
          <a href="mailto:raphaelgoh06@gmail.com" class="btn btn-accent">Discuss this project →</a>
        </div>
      </section>
    `;
  }

  // ---------- routing ----------
  function slugToIndex(slug) {
    return PROJECTS.findIndex((p) => p.slug === slug);
  }

  function showHome(scrollToProjects) {
    viewDetail.hidden = true;
    viewHome.hidden = false;
    if (scrollToProjects) {
      requestAnimationFrame(() => {
        const target = document.getElementById('projects');
        if (target) {
          window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 12, behavior: 'auto' });
        }
      });
    }
  }

  function showDetail(index) {
    viewHome.hidden = true;
    viewDetail.hidden = false;
    renderDetail(PROJECTS[index], index);
    window.scrollTo(0, 0);
  }

  function openProject(slug) {
    if (location.hash === '#/project/' + slug) {
      router();
    } else {
      location.hash = '#/project/' + slug;
    }
  }

  function goHome() {
    if (!location.hash || location.hash === '#/') {
      showHome(true);
    } else {
      window.__pfWantsProjectsScroll = true;
      location.hash = '#/';
    }
  }

  function router() {
    const hash = location.hash;
    const m = hash.match(/^#\/project\/([^/]+)/);
    if (m) {
      const idx = slugToIndex(decodeURIComponent(m[1]));
      if (idx >= 0) { showDetail(idx); return; }
    }
    const scrollToProjects = !!window.__pfWantsProjectsScroll;
    window.__pfWantsProjectsScroll = false;
    showHome(scrollToProjects);
  }

  // ---------- lightbox ----------
  function initLightbox() {
    const ov = el('div', { id: 'lightbox' });
    ov.innerHTML =
      '<img alt="Full preview">' +
      '<button type="button" class="lightbox-close" aria-label="Close">✕</button>' +
      '<div class="lightbox-hint">Click anywhere or press Esc to close</div>';
    document.body.appendChild(ov);
    const img = $('img', ov);

    const open = (src) => {
      img.src = src;
      ov.classList.add('is-open');
      requestAnimationFrame(() => ov.classList.add('is-visible'));
    };
    const close = () => {
      ov.classList.remove('is-visible');
      setTimeout(() => { ov.classList.remove('is-open'); img.src = ''; }, 200);
    };
    ov.addEventListener('click', close);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && ov.classList.contains('is-open')) close();
    });
    document.addEventListener('click', (e) => {
      const item = e.target.closest('[data-lightbox-src]');
      if (!item) return;
      e.preventDefault();
      open(item.getAttribute('data-lightbox-src'));
    });
  }

  // ---------- wiring ----------
  document.addEventListener('click', (e) => {
    const card = e.target.closest('[data-open-project]');
    if (card) {
      e.preventDefault();
      openProject(card.getAttribute('data-open-project'));
      return;
    }
    const homeBtn = e.target.closest('[data-go-home]');
    if (homeBtn) {
      e.preventDefault();
      goHome();
    }
  });

  window.addEventListener('hashchange', router);

  renderSkills();
  renderExperience();
  renderProjectCards();
  initLightbox();
  router();
})();
