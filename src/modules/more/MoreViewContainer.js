import { compose, withState } from 'recompose';

import MoreScreen from './MoreView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(MoreScreen);
