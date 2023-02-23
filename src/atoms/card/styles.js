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
} from '../../../tailwind-classnames';

export const cardItem = classnames(
  backgroundColor('bg-slate-900'),
  borderRadius('rounded'),
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-between'),
  width('w-full'),
  height('h-full'),
  margin('mt-2'),
  padding('px-3', 'py-5'),
  textColor('text-white'),
  fontSize('text-xs'),
  fontWeight('font-normal'),
  cursor('cursor-pointer')
);

export const cardImg = classnames(width('w-[70px]'), height('h-[70px]'));

export const total = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-end')
);

export const totalBalance = classnames(
  fontSize('text-2xl'),
  fontWeight('font-thin')
);

export const balanceSpan = classnames(
  fontSize('text-xs'),
  fontWeight('font-bold'),
  textColor('text-white')
);
