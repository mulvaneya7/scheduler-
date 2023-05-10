import { module, test } from 'qunit';
import { setupRenderingTest } from 'scheduler/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | service-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ServiceForm />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <ServiceForm>
        template block text
      </ServiceForm>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
