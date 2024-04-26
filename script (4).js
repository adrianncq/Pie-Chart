document.addEventListener('DOMContentLoaded', function() {
  const data = [
    { label: 'Sleep', value: 40, color: '#ff7f0e' },
    { label: 'Meals', value: 20, color: '#1f77b4' },
    { label: 'Study and Tasks', value: 25, color: '#2ca02c' },
    { label: 'Etc', value: 5, color: '#d62728' },
    { label: 'Editing Vlogs', value: 5, color: '#9467bd' },
    { label: 'Bond with Fam', value: 5, color: '#8c564b' }
  ];

  const chart = document.getElementById('pie-chart');
  const total = data.reduce((acc, { value }) => acc + value, 0);

  let startAngle = 0;
  data.forEach(({ label, value, color }) => {
    const angle = (value / total) * 360;
    const slice = document.createElement('div');
    slice.classList.add('slice');
    slice.style.backgroundColor = color;
    slice.style.transform = `rotate(${startAngle}deg)`;
    chart.appendChild(slice);

    const legend = document.createElement('li');
    legend.innerHTML = `<span style="background-color: ${color};"></span>${label}`;
    document.querySelector('.legend').appendChild(legend);

    startAngle += angle;
  });
});
