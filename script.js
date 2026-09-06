const glow = document.querySelector('.cursor-glow');
window.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, {threshold: .12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const modal = document.querySelector('.modal');
const modalImg = modal.querySelector('img');
const modalTitle = modal.querySelector('h3');

document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('click', () => {
    modalImg.src = project.dataset.image;
    modalImg.alt = project.dataset.title;
    modalTitle.textContent = project.dataset.title;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
document.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav nav');
menuBtn.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  if(!open){
    nav.style.position='absolute';
    nav.style.top='70px';
    nav.style.right='20px';
    nav.style.flexDirection='column';
    nav.style.background='#111';
    nav.style.padding='20px';
    nav.style.border='1px solid #292929';
  }
});
