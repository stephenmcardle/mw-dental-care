import { cn } from '@/lib/utils'

export type SectionVariant = 'default' | 'muted' | 'accent' | 'dark'
export type SectionSize = 'sm' | 'default' | 'lg'

export type SectionProps = {
  variant?: SectionVariant
  size?: SectionSize
  /** Sets the section element's id attribute */
  id?: string
  /** Maps to aria-labelledby; should match an id on a heading inside children */
  labelledBy?: string
  /** Extra classes on the outer <section> element */
  className?: string
  /** Extra classes on the inner container div */
  containerClassName?: string
  children: React.ReactNode
}

const variantClasses: Record<SectionVariant, string> = {
  default: 'bg-background',
  muted: 'bg-muted/40',
  /** Soft peach-to-sage gradient for hero / intro sections */
  accent: 'bg-linear-to-b from-brand-peach-soft to-background',
  /** Dark band (#292929) — children inherit brand-dark-fg (sage) text.
   *  Ring is locally overridden to brand-dark-fg so focus indicators stay
   *  visible on the dark surface. */
  dark: 'bg-brand-dark text-brand-dark-fg [--ring:var(--color-brand-dark-fg)]',
}

const sizeClasses: Record<SectionSize, string> = {
  sm: 'py-16',
  default: 'py-24',
  lg: 'py-28',
}

export function Section({
  variant = 'default',
  size = 'default',
  id,
  labelledBy,
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(variantClasses[variant], sizeClasses[size], className)}
    >
      <div className={cn('container mx-auto px-4', containerClassName)}>
        {children}
      </div>
    </section>
  )
}
