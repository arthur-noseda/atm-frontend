import AtmAccountBalance from './AtmAccountBalance.vue';

export default {
  title: 'Account Balance',
  component: AtmAccountBalance,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AtmAccountBalance },
  template: '<AtmAccountBalance v-bind="$props" />',
});

export const PositiveBalance = Template.bind({});
PositiveBalance.args = {
  amount: 1000,
};
