<template>
  <p>{{ $t('account-balance') }} {{ $n(amount, 'currency') }}</p>
</template>

<script>
export default {
  name: 'AtmAccountBalance',
  props: {
    amount: Number,
  },
};
</script>

<i18n>
{
  "en": {
    "account-balance": "Account Balance"
  },
  "fr": {
    "account-balance": "Solde"
  }
}
</i18n>
