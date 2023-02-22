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
  cursor,
} from '../../../tailwind-classnames';

export const itemTasks = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  width('w-[70px]'),
  height('h-[70px]'),
  borderRadius('rounded'),
  backgroundColor('bg-indigo-900'),
  cursor('cursor-pointer')
);

export const itemSpan = classnames(
  fontSize('text-[9px]'),
  textColor('text-white'),
  margin('mt-2')
);

export const itemImg = classnames(width('w-[30px]'), height('h-[30px]'));
