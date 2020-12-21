import { shallowMount } from '@vue/test-utils';
import i18n from '@/i18n';
import AtmAccountBalance from '@/components/AtmAccountBalance.vue';

describe('AtmAccountBalance.vue', () => {
  it('should render account-balance 1000.', () => {
    const $t = (key) => key;
    const $n = (value) => value.toString();
    const wrapper = shallowMount(AtmAccountBalance, {
      propsData: { amount: 1000 },
      mocks: { $t, $n },
    });
    expect(wrapper.text()).toBe('account-balance 1000');
  });

  it('should render Account Balance $1,000.00.', () => {
    const wrapper = shallowMount(AtmAccountBalance, {
      i18n,
      propsData: { amount: 1000 },
    });
    expect(wrapper.text()).toBe('Account Balance $1,000.00');
  });
});
