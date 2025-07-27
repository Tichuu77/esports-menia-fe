import { createSelector } from 'reselect';

const selectRaw = (state:any) => state.tenant.invitation;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const selectWarningMessage = createSelector(
  [selectRaw],
  (raw) => raw.warningMessage,
);

const tenantInvitationSelectors = {
  selectLoading,
  selectRaw,
  selectWarningMessage,
};

export default tenantInvitationSelectors;
