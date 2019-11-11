import { compose, withState } from 'recompose';

import DetailScreen from './DetailView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(DetailScreen);
