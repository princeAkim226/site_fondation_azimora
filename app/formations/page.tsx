import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Briefcase, GraduationCap } from "lucide-react"

export default function FormationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Nos Formations</h1>
      
      <Tabs defaultValue="secondaire" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="secondaire">Secondaire</TabsTrigger>
          <TabsTrigger value="specialites">Spécialités</TabsTrigger>
          <TabsTrigger value="options">Options</TabsTrigger>
        </TabsList>

        <TabsContent value="secondaire">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Seconde",
                icon: BookOpen,
                description: "Année de détermination pour choisir son orientation."
              },
              {
                title: "Première",
                icon: Briefcase,
                description: "Spécialisation progressive avec choix des spécialités."
              },
              {
                title: "Terminale",
                icon: GraduationCap,
                description: "Préparation au baccalauréat et aux études supérieures."
              }
            ].map((level) => (
              <Card key={level.title}>
                <CardHeader>
                  <level.icon className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>{level.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{level.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="specialites">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Mathématiques",
              "Physique-Chimie",
              "Sciences de la Vie et de la Terre",
              "Sciences Économiques et Sociales",
              "Histoire-Géographie, Géopolitique et Sciences Politiques",
              "Humanités, Littérature et Philosophie"
            ].map((specialite) => (
              <Card key={specialite}>
                <CardHeader>
                  <CardTitle className="text-lg">{specialite}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Description détaillée de la spécialité {specialite.toLowerCase()}.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="options">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Langues et Cultures de l'Antiquité",
              "Arts Plastiques",
              "Théâtre",
              "Musique",
              "Section Européenne",
              "Sport"
            ].map((option) => (
              <Card key={option}>
                <CardHeader>
                  <CardTitle className="text-lg">{option}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Description de l'option {option.toLowerCase()}.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}