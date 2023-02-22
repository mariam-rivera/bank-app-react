import classnames, {
  alignItems,
  display,
  fontSize,
  height,
  justifyContent,
  textColor,
  width,
  cursor,
} from '../../../tailwind-classnames';

export const menuItems = classnames(
  display('flex'),
  justifyContent('justify-between'),
  alignItems('items-center'),
  width('w-[750px]'),
  height('h-[45px]')
);

export const menuItem = classnames(
  cursor('cursor-pointer'),
  fontSize('text-sm'),
  textColor('text-white')
);
