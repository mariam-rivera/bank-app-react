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
  width('w-full'),
  height('h-full'),
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
  width('w-[30px]'),
  height('h-[30px]'),
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

export const cards = classnames(
  display('flex'),
  flexDirection('flex-col'),
  margin('mt-5'),
  padding('px-5', 'py-5'),
  width('w-full'),
  height('h-full'),
  borderRadius('rounded'),
  backgroundColor('bg-indigo-900')
);

export const cardsTitle = classnames(
  fontSize('text-sm'),
  margin('mb-2'),
  textColor('text-white'),
  fontWeight('font-normal')
);
