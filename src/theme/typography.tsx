import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {RFValue} from 'react-native-responsive-fontsize';
import {IThemeFonts} from './types';

export const getDimensions = {
  height: hp('100%'),
};

const standardScreenHeight = 822; //Height of design frames
export const normalize = function (size: number) {
  return RFValue(size, standardScreenHeight);
};

export const FontSize = {
  largeh1: normalize(32), //32
  h1: normalize(30), //30
  h2: normalize(24), //24
  h3: normalize(18), //18
  body: normalize(16), //16
  button: normalize(14), //14
  caption: normalize(12), //12
  smallCaption: normalize(10), //10
};

const fontConfig: IThemeFonts = {
  largeh1: {
    fontFamily: 'Urbanist-Regular',
    fontSize: FontSize.largeh1,
    letterSpacing: 0.3,
  },
  largeh1Medium: {
    fontFamily: 'Urbanist-Medium',
    fontSize: FontSize.largeh1,
    letterSpacing: 0.3,
  },
  largeh1SemiBold: {
    fontFamily: 'Urbanist-Semibold',
    fontSize: FontSize.largeh1,
    letterSpacing: 0.3,
  },
  largeh1Bold: {
    fontFamily: 'Urbanist-Bold',
    fontSize: FontSize.largeh1,
    letterSpacing: 0.3,
  },
  h1: {
    fontFamily: 'Urbanist-Regular',
    fontSize: FontSize.h1,
    letterSpacing: 0.3,
  },
  h1Medium: {
    fontFamily: 'Urbanist-Medium',
    fontSize: FontSize.h1,
    letterSpacing: 0.3,
  },
  h1SemiBold: {
    fontFamily: 'Urbanist-Semibold',
    fontSize: FontSize.h1,
    letterSpacing: 0.3,
  },
  h1Bold: {
    fontFamily: 'Urbanist-Bold',
    fontSize: FontSize.h1,
    letterSpacing: 0.3,
  },
  h2: {
    fontFamily: 'Urbanist-Regular',
    fontSize: FontSize.h2,
    letterSpacing: 0.3,
  },
  h2Medium: {
    fontFamily: 'Urbanist-Medium',
    fontSize: FontSize.h2,
    letterSpacing: 0.3,
  },
  h2SemiBold: {
    fontFamily: 'Urbanist-Semibold',
    fontSize: FontSize.h2,
    letterSpacing: 0.3,
  },
  h2Bold: {
    fontFamily: 'Urbanist-Bold',
    fontSize: FontSize.h2,
    letterSpacing: 0.3,
  },
  h3: {
    fontFamily: 'Urbanist-Regular',
    fontSize: FontSize.h3,
    letterSpacing: 0.3,
  },
  h3Medium: {
    fontFamily: 'Urbanist-Medium',
    fontSize: FontSize.h3,
    letterSpacing: 0.3,
  },
  h3SemiBold: {
    fontFamily: 'Urbanist-Semibold',
    fontSize: FontSize.h3,
    letterSpacing: 0.3,
  },
  h3Bold: {
    fontFamily: 'Urbanist-Bold',
    fontSize: FontSize.h3,
    letterSpacing: 0.3,
  },
  body: {
    fontFamily: 'Urbanist-Regular',
    fontSize: FontSize.body,
    letterSpacing: 0.3,
  },
  bodyMedium: {
    fontFamily: 'Urbanist-Medium',
    fontSize: FontSize.body,
    letterSpacing: 0.3,
  },
  bodySemiBold: {
    fontFamily: 'Urbanist-Semibold',
    fontSize: FontSize.body,
    letterSpacing: 0.3,
  },
  bodyBold: {
    fontFamily: 'Urbanist-Bold',
    fontSize: FontSize.body,
    letterSpacing: 0.3,
  },
  button: {
    fontFamily: 'Urbanist-Regular',
    fontSize: FontSize.button,
    letterSpacing: 0.3,
  },
  buttonMedium: {
    fontFamily: 'Urbanist-Medium',
    fontSize: FontSize.button,
    letterSpacing: 0.3,
  },
  buttonSemiBold: {
    fontFamily: 'Urbanist-Semibold',
    fontSize: FontSize.button,
    letterSpacing: 0.3,
  },
  buttonBold: {
    fontFamily: 'Urbanist-Bold',
    fontSize: FontSize.button,
    letterSpacing: 0.3,
  },
  caption: {
    fontFamily: 'Urbanist-Regular',
    fontSize: FontSize.caption,
    letterSpacing: 0.3,
  },
  captionMedium: {
    fontFamily: 'Urbanist-Medium',
    fontSize: FontSize.caption,
    letterSpacing: 0.3,
    fontWeight: '500',
  },
  captionSemiBold: {
    fontFamily: 'Urbanist-Semibold',
    fontSize: FontSize.caption,
    letterSpacing: 0.3,
  },
  captionBold: {
    fontFamily: 'Urbanist-Bold',
    fontSize: FontSize.caption,
    letterSpacing: 0.3,
  },
  smallCaption: {
    fontFamily: 'Urbanist-Regular',
    fontSize: FontSize.smallCaption,
    letterSpacing: 0.3,
  },
  smallCaptionMedium: {
    fontFamily: 'Urbanist-Medium',
    fontSize: FontSize.smallCaption,
    letterSpacing: 0.3,
  },
  smallCaptionSemiBold: {
    fontFamily: 'Urbanist-Semibold',
    fontSize: FontSize.smallCaption,
    letterSpacing: 0.3,
  },
  smallCaptionBold: {
    fontFamily: 'Urbanist-Bold',
    fontSize: FontSize.smallCaption,
    letterSpacing: 0.3,
  },
};

export default fontConfig;
