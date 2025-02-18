export interface IFontType {
  fontFamily: string;
  fontSize: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  letterSpacing: number;
}
export interface IThemeFonts {
  largeh1: IFontType;
  largeh1Medium: IFontType;
  largeh1SemiBold: IFontType;
  largeh1Bold: IFontType;
  h1: IFontType;
  h1Medium: IFontType;
  h1SemiBold: IFontType;
  h1Bold: IFontType;
  h2: IFontType;
  h2Medium: IFontType;
  h2SemiBold: IFontType;
  h2Bold: IFontType;
  h3: IFontType;
  h3Medium: IFontType;
  h3SemiBold: IFontType;
  h3Bold: IFontType;
  body: IFontType;
  bodyMedium: IFontType;
  bodySemiBold: IFontType;
  bodyBold: IFontType;
  button: IFontType;
  buttonMedium: IFontType;
  buttonSemiBold: IFontType;
  buttonBold: IFontType;
  caption: IFontType;
  captionMedium: IFontType;
  captionSemiBold: IFontType;
  captionBold: IFontType;
  smallCaption: IFontType;
  smallCaptionMedium: IFontType;
  smallCaptionSemiBold: IFontType;
  smallCaptionBold: IFontType;
}
