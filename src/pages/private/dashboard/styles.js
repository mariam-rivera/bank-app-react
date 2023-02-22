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

export const dashboard = classnames(
  display('flex'),
  flexDirection('flex-col'),
  padding('py-5', 'px-3'),
  width('w-screen'),
  height('h-screen'),
  backgroundColor('bg-slate-900')
);

export const menu = classnames(
  display('flex'),
  justifyContent('justify-between'),
  alignItems('items-center'),
  width('w-full'),
  height('h-[40px]')
);

export const menuTitle = classnames(
  textColor('text-white'),
  fontSize('text-md'),
  margin('ml-2')
);

export const menuImg = classnames(
  width('w-[35px]'),
  height('h-[35px]'),
  cursor('cursor-pointer')
);

export const tasks = classnames(
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-around'),
  width('w-full'),
  height('h-[100px]'),
  margin('mt-2')
);

export const primaryCard = classnames(
  backgroundColor('bg-indigo-900'),
  borderRadius('rounded'),
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-between'),
  width('w-full'),
  height('h-[100px]'),
  margin('mt-2'),
  padding('px-5', 'py-5'),
  textColor('text-white'),
  fontSize('text-xs'),
  cursor('cursor-pointer')
);

export const cards = classnames(
  display('flex'),
  flexDirection('flex-col'),
  margin('mt-5'),
  padding('px-2', 'py-5'),
  width('w-full'),
  height('h-[320px]'),
  borderRadius('rounded'),
  backgroundColor('bg-indigo-900')
);

export const cardsTitle = classnames(
  fontSize('text-md'),
  margin('mb-2'),
  textColor('text-white'),
  fontWeight('font-semibold')
);

export const cardItem = classnames(
  backgroundColor('bg-slate-900'),
  borderRadius('rounded'),
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-between'),
  width('w-full'),
  height('h-[110px]'),
  margin('mt-2'),
  padding('px-3', 'py-5'),
  textColor('text-white'),
  fontSize('text-xs'),
  cursor('cursor-pointer')
);

export const cardImg = classnames(width('w-[80px]'), height('h-[80px]'));

export const total = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-end')
);

export const totalBalance = classnames(fontSize('text-2xl'));
