import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const WIDTH = 375;
const HEIGHT = 833;

export const screenwiseWidth = function (value: number) {
  return wp((value / WIDTH) * 100);
};

export const screenwiseHeight = function (value: number) {
  return hp((value / HEIGHT) * 100);
};
