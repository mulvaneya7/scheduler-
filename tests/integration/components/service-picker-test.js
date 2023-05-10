import { module, test } from 'qunit';
import { setupRenderingTest } from 'scheduler/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | service-picker', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ServicePicker />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <ServicePicker>
        template block text
      </ServicePicker>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
