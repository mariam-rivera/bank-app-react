import { alignItems, display, justifyContent } from 'tailwindcss-classnames';
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

export const alert = classnames(
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-start'),
  textColor('text-red-700'),
  fontSize('text-[12px]'),
  width('w-full'),
  margin('mt-2')
);
