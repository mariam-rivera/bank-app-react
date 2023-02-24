import classnames, {
  alignItems,
  display,
  fontSize,
  height,
  justifyContent,
  textColor,
  width,
  backgroundColor,
  padding,
} from '../../../../tailwind-classnames';

export const promotions = classnames(
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  padding('py-5', 'px-3'),
  width('w-full'),
  height('h-screen'),
  backgroundColor('bg-slate-900')
);

export const title = classnames(textColor('text-white'), fontSize('text-xl'));
