document.addEventListener('mousemove', function (e) {
  const spark = document.createElement('span');
  spark.className = 'global-spark';
  spark.style.left = e.pageX + 'px';
  spark.style.top = e.pageY + 'px';
  document.body.appendChild(spark);
  setTimeout(() => spark.remove(), 600);
});
