// Keep editable copy in this browser and highlight the current section.
const L=[...document.querySelectorAll('#nav a')];
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){
    L.forEach(a=>a.classList.toggle('on',a.hash=='#'+e.target.id));
    const a=L.find(a=>a.classList.contains('on'));
    if(a)a.scrollIntoView({inline:'center',block:'nearest'});
  }
}),{rootMargin:'-40% 0px -55% 0px'});
document.querySelectorAll('section').forEach(s=>io.observe(s));

const eds=[...document.querySelectorAll('.ed')];
try{eds.forEach((el,i)=>{const v=localStorage.getItem('rf'+i);if(v!==null)el.innerHTML=v})}catch(e){}
document.addEventListener('input',e=>{
  const i=eds.indexOf(e.target.closest('.ed'));
  if(i>=0)try{localStorage.setItem('rf'+i,eds[i].innerHTML)}catch(x){}
});
