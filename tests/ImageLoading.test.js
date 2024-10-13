test('images load with alt attributes', () => {
    document.body.innerHTML = `<img src="logo.png" alt="Company Logo" />`;
    const img = document.querySelector('img');
    expect(img.alt).toBe('Company Logo');
  });
  