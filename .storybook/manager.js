// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light', // or 'dark'

  colorPrimary: '#567c95',
  colorSecondary: '#567c95', // Optional secondary color

  appBg: '#F2F0EA',
  appContentBg: '#FFFFFF',
  appBorderColor: '#CED4DA',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#212529',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Brand Information
  brandTitle: 'EducationPub Design System',
  brandUrl: 'https://design.edupub.social', // Your documentation or project URL
  brandImage: '/logo2.png', // The path to your logo file in the static directory
  brandTarget: '_self',
});

addons.setConfig({
  theme: theme,
});