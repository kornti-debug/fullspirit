import Link from 'next/link'
import { NAVIGATION_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold font-almendra text-foreground mb-4">
              Mystische Handwerkskunst
            </h3>
            <p className="text-sm text-muted-foreground">
              Handgefertigte spirituelle Werkzeuge mit Liebe zur Natur und Tradition.
            </p>
          </div>

          <div>
            <h4 className="font-semibold font-almendra text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold font-almendra text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Ihre Email-Adresse</li>
              <li>Ihre Telefonnummer</li>
              <li>Ihr Standort</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mystische Handwerkskunst. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
