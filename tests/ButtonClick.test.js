test('submit button triggers action', () => {
    const mockFunction = jest.fn();
    document.body.innerHTML = `<button id="submitBtn">Submit</button>`;
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', mockFunction);
    submitBtn.click();
    expect(mockFunction).toHaveBeenCalled();
  });
  