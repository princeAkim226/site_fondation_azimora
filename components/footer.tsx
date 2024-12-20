import { School } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <School className="h-6 w-6" />
              <span className="font-bold text-lg">Fondation AZIMORA</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Excellence et innovation au service du développement depuis 1998
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary">À propos</Link></li>
              <li><Link href="/formations" className="hover:text-primary">Formations</Link></li>
              <li><Link href="/vie-scolaire" className="hover:text-primary">Vie scolaire</Link></li>
              <li><Link href="/actualites" className="hover:text-primary">Actualités</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Bindougouso</li>
              <li>Bobo Dioulasso, Burkina Faso</li>
              <li>Tél: +226 xx xx xx xx</li>
              <li>Email: contact@azimora.org</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Horaires</h3>
            <ul className="space-y-2 text-sm">
              <li>Lundi - Samedi</li>
              <li>8h00 - 17h00</li>
              <li>Administration:</li>
              <li>9h00 - 16h00</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Fondation AZIMORA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}