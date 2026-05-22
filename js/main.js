document.querySelectorAll('.tabs').forEach(function (group) {
  var pill = group.querySelector('.tab-pill');
  if (!pill) return;

  var tabs = group.querySelectorAll('.tab');

  function move(tab) {
    pill.style.width = tab.offsetWidth + 'px';
    pill.style.transform = 'translateX(' + tab.offsetLeft + 'px)';
  }

  var active = group.querySelector('.tab.is-active') || tabs[0];
  pill.style.transition = 'none';
  move(active);
  pill.offsetWidth;
  pill.style.transition = '';

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('is-active'); });
      tab.classList.add('is-active');
      move(tab);
    });
  });

  window.addEventListener('resize', function () {
    var cur = group.querySelector('.tab.is-active');
    if (cur) move(cur);
  });
});
