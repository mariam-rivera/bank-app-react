import classnames, {
  alignItems,
  borderRadius,
  display,
  flexDirection,
  fontSize,
  height,
  justifyContent,
  margin,
  textColor,
  width,
  backgroundColor,
  padding,
  cursor,
  fontWeight,
} from '../../../../tailwind-classnames';

export const transaction = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-start'),
  alignItems('items-center'),
  padding('py-5', 'px-3'),
  width('w-screen'),
  height('h-screen'),
  backgroundColor('bg-slate-900')
);

export const topInfo = classnames(
  display('flex'),
  alignItems('items-center'),
  flexDirection('flex-col'),
  backgroundColor('bg-slate-800'),
  padding('p-5'),
  borderRadius('rounded'),
  width('w-full'),
  margin('mb-2'),
  textColor('text-white')
);

export const total = classnames(
  fontSize('text-4xl'),
  fontWeight('font-thin'),
  margin('mt-2', 'mb-2')
);

export const description = classnames(
  fontSize('text-[12px]'),
  fontWeight('font-normal')
);

export const detailsSpan = classnames(
  fontSize('text-[14px]'),
  fontWeight('font-bold'),
  textColor('text-blue-200'),
  margin('mt-3')
);

export const details = classnames(
  display('flex'),
  alignItems('items-start'),
  flexDirection('flex-col'),
  backgroundColor('bg-slate-800'),
  padding('p-5'),
  borderRadius('rounded'),
  width('w-full'),
  height('h-full'),
  textColor('text-white')
);

export const actions = classnames(
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  width('w-full'),
  height('h-1/5')
);

export const imgContainer = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  padding('px-10', 'py-1'),
  margin('m-2'),
  padding('p-2'),
  cursor('cursor-pointer')
);

export const img = classnames(width('w-[35px]'), height('h-35px'));

export const imgSpan = classnames(
  fontSize('text-xs'),
  fontWeight('font-normal'),
  textColor('text-white'),
  margin('mt-2')
);
