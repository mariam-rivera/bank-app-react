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

export const transactionItem = classnames(
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
  cursor('cursor-pointer')
);
