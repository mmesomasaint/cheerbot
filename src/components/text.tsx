type size = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export default function Text({
  primary,
  white,
  faded,
  copy,
  size,
  children,
}: {
  primary?: boolean
  white?: boolean
  faded?: boolean
  copy?: boolean
  size: size
  children: React.ReactNode
}) {
  const sizeStyles = `${size === 'xl' && 'md:text-4xl text-3xl'} ${
    size === 'lg' && 'md:text-2xl text-xl'
  } ${size === 'md' && 'md:text-xl text-lg'} ${
    size === 'sm' && 'md:text-base text-sm'
  } ${size === 'xs' && 'text-xs'}`

  const isCopy = `${copy ? 'leading-snug' : 'leading-none'}`
  const isPrimary = `${primary ? 'text-primary' : 'text-bg-primary'}`
  const isWhite = `${white ? 'text-white' : isPrimary}`
  const isFaded = faded ? `${isWhite}/50` : isWhite

  return (
    <p className={`${isCopy} ${isFaded} ${sizeStyles} font-medium`}>
      {children}
    </p>
  )
}

export function TextLink({
  to,
  className,
  children,
}: {
  to: string
  className: string
  children: React.ReactNode
}) {
  return (
    <a
      href={to}
      className={`underline decoration-from-font underline-offset-4 decoration-primary ${className}`}
    >
      <Text size='sm' primary>
        {children}
      </Text>
    </a>
  )
}
