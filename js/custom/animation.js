var nav_gparents="#nav",nav_animation="faa-tada",nav_hover=!0,nav_speed="",nav_icons=new Array(".fa-archive",".fa-tags",".fa-folder-open",".fa-bilibili",".fa-tv"),social_gparents=".card-info-social-icons",social_animation="faa-shake",social_hover=!0,social_speed="faa-fast",social_icons=new Array(".fa-github",".fa-git",".fa-envelope",".fa-rss"),logo_gparents="#blog-info",logo_animation="faa-bounce",logo_hover=!0,logo_speed="",logo_icons=new Array(".site-icon"),add_animation=function(a,o,n,i,e){var t=document.querySelector("".concat(a));if(t)for(var s=0;s<i.length;s++){var c=t.querySelector("".concat(i[s]));n?(c.classList.add("".concat(o),"animated-hover"),c.parentElement.classList.add("faa-parent","animated-hover")):c.classList.add("".concat(o),"animated","".concat(e)),e&&c.classList.add("".concat(e))}};document.addEventListener("DOMContentLoaded",(function(){add_animation(nav_gparents,nav_animation,nav_hover,nav_icons,nav_speed),add_animation(social_gparents,social_animation,social_hover,social_icons,social_speed),add_animation(logo_gparents,logo_animation,logo_hover,logo_icons,logo_speed)}));