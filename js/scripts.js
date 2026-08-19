  // Mist particles
  const mist = document.getElementById('mist');
  for(let i=0;i<14;i++){
    const s = document.createElement('span');
    s.style.left = (10 + Math.random()*80) + '%';
    s.style.bottom = (Math.random()*40) + 'px';
    s.style.setProperty('--dx', (Math.random()*60-30)+'px');
    s.style.animationDelay = (Math.random()*9) + 's';
    s.style.animationDuration = (7 + Math.random()*5) + 's';
    mist.appendChild(s);
  }
 
  // Scroll reveal
  const cards = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  cards.forEach(c=>io.observe(c));
 
  // Filters
  const filterBtns = document.querySelectorAll('.filter-btn');
  const allCards = document.querySelectorAll('#catalogGrid .card');
  filterBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      filterBtns.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      allCards.forEach(card=>{
        const cats = card.dataset.category.split(' ');
        if(f === 'todos' || cats.includes(f)){
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
 
  // Mobile nav toggle (simple: scrolls links into a stacked state)
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle.addEventListener('click', ()=>{
    const open = navLinks.style.display === 'flex';
    navLinks.style.display = open ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '64px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = '#150C1A';
    navLinks.style.padding = '20px 28px';
    navLinks.style.gap = '16px';
    navLinks.style.borderBottom = '1px solid #33223D';
  });