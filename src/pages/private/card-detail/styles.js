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
  alignSelf,
} from '../../../../tailwind-classnames';

export const dashboard = classnames(
  display('flex'),
  flexDirection('flex-col'),
  padding('py-5', 'px-3'),
  width('w-full'),
  height('h-full'),
  backgroundColor('bg-slate-900')
);

export const primaryCard = classnames(
  backgroundColor('bg-indigo-900'),
  borderRadius('rounded'),
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-between'),
  width('w-full'),
  height('h-[150px]'),
  padding('px-2', 'py-5'),
  textColor('text-white'),
  fontSize('text-xs'),
  cursor('cursor-pointer')
);

export const transactions = classnames(
  display('flex'),
  flexDirection('flex-col'),
  margin('mt-5'),
  padding('px-5', 'py-5'),
  width('w-full'),
  height('h-full'),
  borderRadius('rounded'),
  backgroundColor('bg-indigo-900')
);

export const transactionsTitle = classnames(
  fontSize('text-sm'),
  margin('mb-2'),
  textColor('text-white'),
  fontWeight('font-normal')
);

export const backHome = classnames(
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-center')
);

export const seeMore = classnames(
  fontSize('text-sm'),
  textColor('text-white'),
  fontWeight('font-normal'),
  alignSelf('self-center'),
  margin('mt-3'),
  cursor('cursor-pointer')
);
