import { Lamp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b py-4 px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <Lamp className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg">LampaTrack</span>
        </Link>
        <Link to="/auth">
          <Button variant="outline" size="sm">Connexion</Button>
        </Link>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Conditions d'utilisation</h1>
          <p className="text-muted-foreground text-sm">Dernière mise à jour : avril 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Acceptation des conditions</h2>
          <p className="text-muted-foreground leading-relaxed">
            En utilisant LampaTrack, vous acceptez les présentes conditions d'utilisation.
            Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Description du service</h2>
          <p className="text-muted-foreground leading-relaxed">
            LampaTrack est une application citoyenne permettant de signaler les lampadaires
            publics défectueux à Yeumbeul Nord, Sénégal, et de suivre leur traitement
            par les équipes compétentes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Inscription et compte</h2>
          <p className="text-muted-foreground leading-relaxed">
            Pour utiliser l'application, vous devez créer un compte avec une adresse email
            valide. Vous êtes responsable de la confidentialité de vos identifiants et de
            toutes les actions effectuées depuis votre compte.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Utilisation acceptable</h2>
          <p className="text-muted-foreground leading-relaxed">
            En utilisant LampaTrack, vous vous engagez à :
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
            <li>Ne signaler que des lampadaires réellement défectueux</li>
            <li>Fournir des informations exactes et honnêtes</li>
            <li>Ne pas soumettre de signalements abusifs, faux ou répétitifs</li>
            <li>Ne pas utiliser l'application à des fins illicites</li>
            <li>Respecter les autres utilisateurs et les administrateurs</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Contenu soumis</h2>
          <p className="text-muted-foreground leading-relaxed">
            Les photos et descriptions soumises via l'application doivent être en lien
            direct avec les lampadaires signalés. Tout contenu inapproprié, offensant
            ou sans rapport sera rejeté et pourra entraîner la suspension du compte.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Suspension de compte</h2>
          <p className="text-muted-foreground leading-relaxed">
            Les administrateurs se réservent le droit de suspendre ou supprimer tout
            compte en cas d'utilisation abusive, de signalements frauduleux répétés
            ou de violation des présentes conditions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Limitation de responsabilité</h2>
          <p className="text-muted-foreground leading-relaxed">
            LampaTrack est un outil de signalement citoyen. Nous ne garantissons pas
            de délai de traitement des signalements, celui-ci dépendant des équipes
            techniques compétentes. L'application est fournie "en l'état" sans garantie
            de disponibilité permanente.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">8. Modifications</h2>
          <p className="text-muted-foreground leading-relaxed">
            Nous nous réservons le droit de modifier ces conditions à tout moment.
            Les utilisateurs seront informés des changements importants. L'utilisation
            continue de l'application après modification vaut acceptation des nouvelles conditions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">9. Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            Pour toute question concernant ces conditions d'utilisation, contactez-nous à :
            <a href="mailto:lampatrack@gmail.com" className="text-primary underline ml-1">lampatrack@gmail.com</a>
          </p>
        </section>
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} LampaTrack — Yeumbeul Nord, Sénégal
      </footer>
    </div>
  );
}
