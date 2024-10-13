test('form validation fails if fields are empty', () => {
    document.body.innerHTML = `<form id="contactForm">
                                 <input type="text" id="name" />
                                 <input type="email" id="email" />
                               </form>`;
    const form = document.getElementById('contactForm');
    const isValid = validateForm(form); // assuming you have a validation function
    expect(isValid).toBe(false);
  });
  