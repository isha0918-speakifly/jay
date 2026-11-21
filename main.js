document.getElementById('mb').onclick=()=>document.getElementById('nav').classList.toggle('open');
const f=document.getElementById('cf');if(f)f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);
const b=`Name: ${d.get('n')}\nPhone: ${d.get('p')}\nService: ${d.get('s')}\n\n${d.get('m')}`;
location.href=`mailto:info@jnshah.in?subject=${encodeURIComponent('Enquiry: '+d.get('s'))}&body=${encodeURIComponent(b)}`};
