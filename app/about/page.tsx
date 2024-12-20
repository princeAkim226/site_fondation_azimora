import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { History, Target, Users2 } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-12 rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="À propos du Lycée Azimora"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Notre Histoire et Nos Valeurs</h1>
        </div>
      </div>

      {/* Mission et Valeurs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardContent className="p-6 text-center">
            <History className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Notre Histoire</h3>
            <p className="text-muted-foreground">Fondé en 1998, le Lycée Azimora s'est construit une réputation d'excellence académique.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Notre Mission</h3>
            <p className="text-muted-foreground">Former des citoyens responsables et compétents, prêts pour les défis de demain.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Users2 className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Nos Valeurs</h3>
            <p className="text-muted-foreground">Excellence, respect, innovation et engagement communautaire.</p>
          </CardContent>
        </Card>
      </div>

      {/* Histoire détaillée */}
      <div className="prose prose-lg max-w-none mb-16">
        <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
        <p className="text-muted-foreground mb-4">
          Depuis sa création en 1998, le Lycée Privé Azimora s'est donné pour mission de fournir une éducation d'excellence à ses élèves.
        </p>
        <p className="text-muted-foreground mb-4">
          Au fil des années, notre établissement s'est développé pour devenir un centre d'excellence reconnu, formant des générations d'élèves qui excellent dans leurs études supérieures et leurs carrières professionnelles.
        </p>
      </div>

      {/* Équipe de direction */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Notre Équipe de Direction</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Aminata Ouédraogo", role: "Proviseure", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" },
            { name: "Souleymane Ouattara", role: "Proviseur Adjoint", image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=735&q=80" },
            { name: "Mariam Sankara", role: "CPE", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" },
          ].map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}