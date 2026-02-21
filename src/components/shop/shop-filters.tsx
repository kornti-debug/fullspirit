import { CATEGORY_FILTERS } from '@/lib/constants'

interface ShopFiltersProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export default function ShopFilters({ activeFilter, onFilterChange }: ShopFiltersProps) {
  return (
    <aside className="w-full lg:w-64 mb-8 lg:mb-0">
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-xl font-bold font-almendra text-foreground mb-4">Kategorien</h3>
        <ul className="space-y-2">
          {CATEGORY_FILTERS.map((filter) => (
            <li key={filter.id}>
              <button
                onClick={() => onFilterChange(filter.id)}
                className={`w-full text-left px-3 py-2 rounded transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-primary text-foreground'
                    : 'text-muted-foreground hover:bg-primary/10 hover:text-foreground'
                }`}
              >
                {filter.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
