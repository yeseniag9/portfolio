window.onscroll = () => {
  const nav = document.querySelector('#nav');
  if(this.scrollY <= 109) nav.className = ''; else nav.className = 'scroll';

  const a = document.querySelector('a')
  if(this.scrollY <= 109) a.className = ''; else a.className = 'scroll';

  const i = document.querySelector('#i')
  if(this.scrollY <= 109) i.className = ''; else i.className = 'scroll';

  const drop = document.querySelector('#drop')
  if(this.scrollY <= 109) drop.className = ''; else drop.className = 'scroll';
}