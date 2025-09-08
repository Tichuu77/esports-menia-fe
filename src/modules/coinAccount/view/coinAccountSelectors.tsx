import { createSelector } from 'reselect';

const selectRaw = (state:any) => state.coinAccount.view;

const selectCoinAccount = createSelector(
  [selectRaw],
  (raw) => raw.coinAccount,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const coinAccountViewSelectors = {
  selectLoading,
  selectCoinAccount,
  selectRaw,
};

export default coinAccountViewSelectors;
