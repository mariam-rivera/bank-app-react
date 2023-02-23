import classnames, {
  borderRadius,
  fontSize,
  height,
  margin,
  textColor,
  width,
  backgroundColor,
  fontWeight,
  padding,
} from '../../../tailwind-classnames';

export const button = classnames(
  width('w-[270px]'),
  height('h-[45px]'),
  margin('mt-8', 'mb-5'),
  padding('p-2'),
  borderRadius('rounded'),
  fontSize('text-sm'),
  fontWeight('font-bold'),
  backgroundColor('bg-amber-500'),
  textColor('text-white')
);
