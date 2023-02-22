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
    fontWeight, 
    padding,
  } from '../../../tailwind-classnames';

  export const container = classnames(
    display('flex'),
    flexDirection('flex-col'),
    padding('py-20', 'px-5'),
    width('w-screen'),
    height('h-full'),
    backgroundColor('bg-slate-900'),
  )

  export const about = classnames(
    height('h-max')
  )

  export const titleWelcome = classnames(
    fontSize('text-3xl'),
    textColor('text-white'),
    fontWeight('font-bold'),
    margin('mb-2', 'mt-3'),
  )

  export const welcomeImg = classnames(
    width('w-[250px]')
  )

  export const aboutDescription = classnames(
    textColor('text-white'),
    fontWeight('font-light'),
    fontSize('text-sm'),
    margin('mb-5')
  )

  export const login = classnames(
    width('w-full'),
    display('flex'),
    flexDirection('flex-col'),
    alignItems('items-center'),   
    borderRadius('rounded'),
  )

  export const image = classnames(
    width('w-[200px]'),
  )

  export const titleLogin = classnames(
    textColor('text-amber-500'),
    margin('mb-2', 'mt-2'),
    fontSize('text-xl'),
    fontWeight('font-semibold'),
  )

  export const item = classnames(
    display('flex'),
    flexDirection('flex-col'),
    justifyContent('justify-start'),
    alignItems('items-start'),
    padding('p-2'),
  )

  export const labelField = classnames(
    fontSize('text-sm'),
    fontWeight('font-normal'),
    textColor('text-white'),
    margin('mb-2')
  )
  
  export const forgotPassword = classnames(
    fontSize('text-xs'),
    fontWeight('font-normal'),
    margin('mb-5'),
    textColor('text-white'),
  )

  export const register = classnames(
    fontSize('text-sm'),
    fontWeight('font-semibold'),
    margin('mt-5', 'mb-5'),
    textColor('text-amber-400'),
  )