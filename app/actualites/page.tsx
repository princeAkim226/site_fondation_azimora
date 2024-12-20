import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const actualites = [
  {
    title: "Résultats exceptionnels au baccalauréat 2023",
    date: "15 juillet 2023",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Nos élèves ont obtenu d'excellents résultats avec un taux de réussite de 98%."
  },
  {
    title: "Nouveau partenariat international",
    date: "10 juin 2023",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    description: "Signature d'un accord d'échange avec un lycée britannique."
  },
  {
    title: "Succès du projet scientifique",
    date: "5 mai 2023",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Les élèves de Terminale remportent le premier prix au concours national."
  }
]

export default function ActualitesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Actualités</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {actualites.map((actu) => (
          <Card key={actu.title} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={actu.image}
                alt={actu.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">{actu.date}</div>
              <CardTitle>{actu.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{actu.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}