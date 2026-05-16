
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
if (burger && nav) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('is-open');
    nav.classList.toggle('is-open');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('is-open');
    nav.classList.remove('is-open');
  }));
}

document.querySelectorAll('.tabs').forEach(group => {
  const items = group.querySelectorAll('.tabs__item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('is-active'));
      item.classList.add('is-active');
    });
  });
});

document.querySelectorAll('.toggle').forEach(group => {
  const items = group.querySelectorAll('.toggle__item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('is-active'));
      item.classList.add('is-active');
    });
  });
});


