document.addEventListener('mousemove', (e) => {
  for (let i = 0; i < 5; i++) {
    const particle = document.createElement('div');
    particle.className = 'sparkle';

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 20;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;
    particle.style.setProperty('--dx', `${x}px`);
    particle.style.setProperty('--dy', `${y}px`);
    particle.style.setProperty('--hue', `${Math.random() * 60 + 30}`);

    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 500);
  }
});
