import { createSelector } from 'reselect';

const selectRaw = (state:any) => state.invites.form;

const selectInvite = createSelector(
  [selectRaw],
  (raw) => raw.invite,
);

const selectInitLoading = createSelector(
  [selectRaw],
  (raw) => Boolean(raw.initLoading),
);

const selectSaveLoading = createSelector(
  [selectRaw],
  (raw) => Boolean(raw.saveLoading),
);

const invitesFormSelectors = {
  selectInitLoading,
  selectSaveLoading,
  selectInvite,
  selectRaw,
};

export default invitesFormSelectors;
