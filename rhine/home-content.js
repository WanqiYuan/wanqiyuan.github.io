(() => {
 const d=window.homeContent;if(!d)return;
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const q=s=>document.querySelector(s);
 const photo=q('.photo img');photo.src=d.photo;photo.alt=d.photoAlt;
 q('.location').innerHTML='<span class="square"></span> '+esc(d.location);
 q('.header-note').textContent=d.name.toUpperCase();
 q('.intro h1').innerHTML='<span class="name-en">'+esc(d.name)+'<span class="yellow-dot">.</span></span>'+(d.chineseName?'<span class="chinese-name" lang="zh-CN">'+esc(d.chineseName)+'</span>':'');
 q('.role').innerHTML=esc(d.role)+' <span>/</span> '+esc(d.institution);
 q('.intro').querySelectorAll('p:not(.role)').forEach(p=>p.remove());
 // bioHtml is deliberately editable, trusted site-owner content, including advisor links.
 q('.rule').insertAdjacentHTML('afterend',d.bioHtml.map(p=>'<p>'+p+'</p>').join(''));
 q('.tags').innerHTML=d.tags.map(t=>'<span>'+esc(t)+'</span>').join('');
 q('.contact').innerHTML=d.links.map(l=>'<a href="'+esc(l.url)+'">'+esc(l.label)+' <span>↗</span></a>').join('');
 q('#news').querySelectorAll('article').forEach(a=>a.remove());
 q('#news .section-title>span').textContent='RECENT UPDATES / '+String(d.news.length).padStart(2,'0');
 [...d.news].sort((a,b)=>b.date.localeCompare(a.date)).forEach(n=>q('#news').insertAdjacentHTML('beforeend','<article><time datetime="'+esc(n.date)+'">'+esc(n.date.replaceAll('-','.'))+'</time><p>'+(n.isNew?'<span class="new">NEW</span> ':'')+esc(n.text)+(n.url?'<a href="'+esc(n.url)+'">'+esc(n.linkText)+' ↗</a>':'')+'.</p></article>'));
})();
