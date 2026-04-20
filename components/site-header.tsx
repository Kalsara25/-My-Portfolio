export function SiteHeader({
  variant = "light",
}: {
  variant?: "light" | "dark"
}) {
  const isDark = variant === "dark"
  const logoColor = isDark ? "text-white/90" : "text-foreground"
  const copyColor = isDark ? "text-white/80" : "text-foreground/90"

  return (
    <div className="flex items-start justify-between gap-6 px-6 md:px-10 lg:px-14 pt-6 md:pt-8">
      <p className={`font-mono text-xs md:text-sm ${logoColor}`}>@ Code by Kalsara</p>
      <p
        className={`max-w-sm text-right text-xs md:text-sm leading-relaxed ${copyColor}`}
      >
        Passionate Creative Designer and Developer, dedicated to crafting
        innovative solutions and exceptional digital experiences through
        modern technologies
      </p>
    </div>
  )
}
