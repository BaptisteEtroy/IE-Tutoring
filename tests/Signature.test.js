test('signature content renders correctly', () => {
    document.body.innerHTML = `<div class="signature">
                                 <p>Baptiste Etroy <span>© 2024</span></p>
                               </div>`;
    
    const signatureText = document.querySelector('.signature p').textContent;
    
    expect(signatureText).toBe('Baptiste Etroy © 2024');
  });
  