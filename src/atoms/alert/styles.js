import classnames, {
  fontSize,
  margin,
  textColor,
  width,
  alignItems,
  display,
  justifyContent,
} from '../../../tailwind-classnames';

export const alert = classnames(
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-start'),
  textColor('text-red-700'),
  fontSize('text-[12px]'),
  width('w-full'),
  margin('mt-2')
);
