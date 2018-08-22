import createNavigationContainer from '../createNavigationContainer';
import createStackNavigator from './createStackNavigator';

const createContainedStackNavigator = (routeConfigs, config = {}) => {
  const navigator = createStackNavigator(routeConfigs, config);
  return createNavigationContainer(navigator, config);
};

export default createContainedStackNavigator;
