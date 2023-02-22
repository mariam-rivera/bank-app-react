import classnames, {
  borderRadius,
  fontSize,
  height,
  textColor,
  width,
  backgroundColor,
  fontWeight,
  padding,
} from '../../../tailwind-classnames';

export const field = classnames(
  padding('p-2', 'pl-4'),
  width('w-[270px]'),
  height('h-[45px]'),
  borderRadius('rounded'),
  fontSize('text-sm'),
  fontWeight('font-normal'),
  backgroundColor('bg-white'),
  textColor('text-slate-800')
);
