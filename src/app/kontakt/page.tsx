'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="py-20 px-4 min-h-screen">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold font-almendra text-foreground mb-4">Vielen Dank!</h1>
          <p className="text-muted-foreground mb-8">
            Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns schnellstmöglich bei Ihnen
            melden.
          </p>
          <Button size="lg" onClick={() => setSubmitted(false)}>
            Weitere Nachricht senden
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold font-almendra text-foreground mb-4">Kontakt</h1>
          <p className="text-muted-foreground mb-8">
            Haben Sie Fragen zu unseren Produkten oder möchten Sie mehr über unsere Seminare
            erfahren? Schreiben Sie uns gerne eine Nachricht.
          </p>

          <Card className="p-8 bg-card border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Ihr Name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ihre@email.de"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Nachricht</Label>
                <Textarea
                  id="message"
                  placeholder="Ihre Nachricht..."
                  rows={6}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
              </Button>
            </form>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold text-foreground mb-2">E-Mail</h3>
              <p className="text-sm text-muted-foreground">kontakt@mystische-handwerkskunst.de</p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold text-foreground mb-2">Telefon</h3>
              <p className="text-sm text-muted-foreground">+49 123 456 7890</p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold text-foreground mb-2">Standort</h3>
              <p className="text-sm text-muted-foreground">Musterstadt, Deutschland</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
