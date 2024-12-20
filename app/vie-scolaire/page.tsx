import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Book, 
  Users, 
  Palette, 
  Trophy,
  Heart,
  Globe,
  Music,
  Laptop
} from "lucide-react"

export default function VieScolairePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-12 rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Vie scolaire"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">Vie Scolaire</h1>
        </div>
      </div>

      {/* Activités et Clubs */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Activités et Clubs</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Club Sciences", icon: Book, description: "Expériences et projets scientifiques" },
            { title: "Club Théâtre", icon: Users, description: "Expression dramatique et spectacles" },
            { title: "Arts Plastiques", icon: Palette, description: "Créativité et techniques artistiques" },
            { title: "Club Sport", icon: Trophy, description: "Compétitions et entraînements" },
            { title: "Action Sociale", icon: Heart, description: "Projets caritatifs et solidaires" },
            { title: "Club International", icon: Globe, description: "Échanges culturels et linguistiques" },
            { title: "Club Musique", icon: Music, description: "Pratique musicale et concerts" },
            { title: "Club Robotique", icon: Laptop, description: "Programmation et création" }
          ].map((club) => (
            <Card key={club.title}>
              <CardHeader>
                <club.icon className="h-8 w-8 mb-2 text-primary" />
                <CardTitle className="text-lg">{club.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{club.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Accompagnement */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Accompagnement des Élèves</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Soutien Scolaire</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Programme de tutorat et cours de soutien personnalisés pour aider les élèves à réussir.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Orientation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Accompagnement dans le choix des études supérieures et du projet professionnel.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Bien-être</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Suivi psychologique et accompagnement personnalisé pour le bien-être des élèves.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}