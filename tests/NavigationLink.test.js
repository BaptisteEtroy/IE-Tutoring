test('navigation links work', () => {
    document.body.innerHTML = `<a href="/about">About</a>`;
    const aboutLink = document.querySelector('a[href="/about"]');
    aboutLink.click();
    expect(window.location.href).toContain('/about');
  });
  