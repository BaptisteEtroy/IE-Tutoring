test('services render correctly', () => {
    document.body.innerHTML = `<div class="service">
                                 <h3>Website Design</h3>
                               </div>`;
    const serviceTitle = document.querySelector('.service h3');
    expect(serviceTitle.textContent).toBe('Website Design');
  });
  