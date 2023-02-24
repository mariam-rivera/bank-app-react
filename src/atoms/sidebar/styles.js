import classnames, {
  alignItems,
  display,
  fontSize,
  height,
  justifyContent,
  textColor,
  width,
  cursor,
  alignSelf,
  backgroundColor,
  flexDirection,
  inset,
  padding,
  position,
} from '../../../tailwind-classnames';

export const menu = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-start'),
  backgroundColor('bg-slate-900'),
  position('absolute'),
  width('w-[250px]'),
  padding('pt-20', 'pl-5'),
  height('h-full'),
  inset('bottom-0')
);

export const menuItems = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-around'),
  height('h-screen'),
  padding('p-5')
);

export const menuItem = classnames(
  cursor('cursor-pointer'),
  fontSize('text-sm'),
  textColor('text-white')
);

export const userImg = classnames(
  width('w-[80px]'),
  height('h-[80px]', alignSelf('self-center'))
);
