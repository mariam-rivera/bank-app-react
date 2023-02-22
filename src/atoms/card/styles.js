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
} from '../../../tailwind-classnames';

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
