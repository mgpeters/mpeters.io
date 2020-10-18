describe('index.ts tests', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <section class="page-links">
      <div id="render-div" class="page-links__render"></div>
    </section>
  `;
  });

  it('should generate social media links', () => {
    const { orderArray, generateLinks } = require('../src/index');
    const { socialLinks } = require('../src/config/config');

    const renderDiv = document.getElementById('render-div');

    generateLinks(orderArray(socialLinks));

    // console.log('html', document.body.innerHTML);
    // expect()
  });
});
