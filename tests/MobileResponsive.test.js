test('mobile layout adapts correctly', () => {
    window.innerWidth = 768; // simulate mobile width
    window.dispatchEvent(new Event('resize'));
    const layout = document.querySelector('.layout');
    expect(layout.classList).toContain('mobile');
  });
  