// see https://github.com/l-lin/font-awesome-animation
/*
gparents: 唯一的祖先节点名
animation: 动画
hover: 是否hover才出现动效
icons: 图标 see https://fontawesome.com/
speed: 速率 （可选) faa-fast faa-slow
*/

const nav_gparents = '#nav';
const nav_animation = 'faa-tada';
const nav_hover = true;
const nav_speed = '';
const nav_icons = new Array('.fa-archive', '.fa-tags', '.fa-folder-open', '.fa-bilibili', '.fa-tv');

const social_gparents = '.card-info-social-icons';
const social_animation = 'faa-shake';
const social_hover = true;
const social_speed = 'faa-fast';
const social_icons = new Array('.fa-github', '.fa-git', '.fa-envelope', '.fa-rss');

const logo_gparents = '#blog-info'
const logo_animation = 'faa-bounce';
const logo_hover = true;
const logo_speed = '';
const logo_icons = new Array('.site-icon');

const add_animation = (gparents, animation, hover, icons, speed) => {
  let index = document.querySelector(`${gparents}`);
  for (let i = 0; i < icons.length; i++) {
    let icon = index.querySelector(`${icons[i]}`);
    // hover
    if (hover) {
      icon.classList.add(`${animation}`, 'animated-hover');
      icon.parentElement.classList.add('faa-parent', 'animated-hover');
    } else {
      icon.classList.add(`${animation}`, 'animated', `${speed}`);
    }

    // speed
    if (speed) {
      icon.classList.add(`${speed}`);
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  add_animation(nav_gparents, nav_animation, nav_hover, nav_icons, nav_speed);
  add_animation(social_gparents, social_animation, social_hover, social_icons, social_speed);
  add_animation(logo_gparents, logo_animation, logo_hover, logo_icons, logo_speed)
});
