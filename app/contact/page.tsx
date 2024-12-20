import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Contactez-nous</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Formulaire de contact */}
        <Card>
          <CardContent className="p-6">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input id="name" placeholder="Votre nom" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="votre@email.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Sujet</Label>
                <Input id="subject" placeholder="Sujet de votre message" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Votre message"
                  className="min-h-[150px]"
                />
              </div>
              
              <Button className="w-full">Envoyer le message</Button>
            </form>
          </CardContent>
        </Card>

        {/* Informations de contact */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Nos Coordonnées</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Bindougousso, Bobo-Dioulasso</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+xxx xx xx xx xx</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>contact@azimora.edu</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Horaires d'ouverture</h2>
            <div className="space-y-2">
              <p><strong>Lundi - Vendredi:</strong> 7h30 - 17h30</p>
              <p><strong>Administration:</strong> 8h00 - 16h30</p>
              <p><strong>Week-end:</strong> Fermé</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Plan d'accès</h2>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15564.874750426417!2d-4.308543!3d11.191291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe32a9ad62337c7d%3A0x4c909e96df251e78!2sBindougousso%2C%20Bobo-Dioulasso%2C%20Burkina%20Faso!5e0!3m2!1sfr!2sfr!4v1647874587931!5m2!1sfr!2sfr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}