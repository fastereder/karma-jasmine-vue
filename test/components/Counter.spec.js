import Vue from 'vue';
import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Counter from '../../src/components/Counter.vue';

describe('Counter.vue', () => {
  const wrapper = mount(Counter)

  it('increments count when button is clicked', () => {
    wrapper.find('button').trigger('click');

    return Vue.nextTick().then(function() {
      expect(wrapper.find('div').text()).contains('1');
    })
  })
})
