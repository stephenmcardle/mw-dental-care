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
  /** Gradient used for hero/intro sections */
  accent: 'bg-linear-to-b from-sky-50 to-background',
  /** Primary-coloured band — ensure children use primary-foreground text */
  dark: 'bg-primary text-primary-foreground',
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
