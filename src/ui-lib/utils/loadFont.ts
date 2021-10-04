import webFontLoader from 'webfontloader'
export const loadFont = (): void => {
  webFontLoader.load({
    google: {
      families: ['Mulish:600,700,800'],
    },
  })
}
