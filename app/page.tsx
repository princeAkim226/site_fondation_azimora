import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Trophy, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Fondation AZIMORA"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Bienvenue au Lycée AZIMORA</h1>
            <p className="text-xl mb-8">
              Excellence académique et formation de qualité pour la jeunesse burkinabé
            </p>
            <div className="space-x-4">
              <Button size="lg" asChild>
                <Link href="/formations">Nos filières</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:text-primary hover:bg-white bg-transparent" asChild>
                <Link href="/contact">Contactez-nous</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <GraduationCap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-3xl font-bold mb-2">95%</h3>
                <p className="text-center text-muted-foreground">Taux de réussite au BAC</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Users className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-3xl font-bold mb-2">2000+</h3>
                <p className="text-center text-muted-foreground">Élèves</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Trophy className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-3xl font-bold mb-2">15+</h3>
                <p className="text-center text-muted-foreground">Années d'excellence</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Calendar className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-3xl font-bold mb-2">50+</h3>
                <p className="text-center text-muted-foreground">Enseignants qualifiés</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir le Lycée AZIMORA ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Excellence académique</h3>
              <p className="text-muted-foreground">
                Un enseignement de qualité et des résultats exceptionnels aux examens nationaux.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Cadre d'apprentissage</h3>
              <p className="text-muted-foreground">
                Des infrastructures modernes et un environnement propice aux études.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Accompagnement personnalisé</h3>
              <p className="text-muted-foreground">
                Un suivi individuel et un soutien constant pour la réussite de chaque élève.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Envie de contribuer à notre mission ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Découvrez nos programmes et prenez contact avec nous pour plus d'informations.
          </p>
          <Button size="lg" variant="outline" className="text-white border-white hover:text-primary hover:bg-white bg-transparent" asChild>
            <Link href="/contact">Contactez-nous</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}