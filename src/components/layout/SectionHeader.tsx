import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export type SectionHeaderAlign = 'left' | 'center'

export type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: SectionHeaderAlign
  /**
   * Sets an id on the heading element so a parent Section can reference it
   * via labelledBy for aria-labelledby.
   */
  id?: string
  /** Extra classes on the wrapper div — use to override max-width or margin */
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  id,
  className,
}: SectionHeaderProps) {
  const isCenter = align === 'center'

  return (
    <div
      className={cn(
        'mb-14',
        isCenter && 'mx-auto max-w-2xl text-center',
        className,
      )}
    >
      {eyebrow && (
        <Badge variant="secondary" className="mb-4">
          {eyebrow}
        </Badge>
      )}
      <h2
        id={id}
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  )
}
