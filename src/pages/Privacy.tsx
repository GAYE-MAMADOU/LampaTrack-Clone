import { Lamp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Privacy() {
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
          <h1 className="text-3xl font-bold mb-2">Politique de confidentialité</h1>
          <p className="text-muted-foreground text-sm">Dernière mise à jour : avril 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            LampaTrack est une application de signalement et de gestion des lampadaires publics
            à Yeumbeul Nord, Sénégal. Nous nous engageons à protéger vos données personnelles
            et à respecter votre vie privée conformément aux lois applicables.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Données collectées</h2>
          <p className="text-muted-foreground leading-relaxed">
            Nous collectons uniquement les données nécessaires au fonctionnement de l'application :
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
            <li>Nom complet et adresse email (lors de l'inscription)</li>
            <li>Photos des lampadaires signalés</li>
            <li>Localisation des signalements (coordonnées GPS du lampadaire concerné)</li>
            <li>Données de connexion via Google OAuth (email et nom de profil uniquement)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Utilisation des données</h2>
          <p className="text-muted-foreground leading-relaxed">
            Vos données sont utilisées exclusivement pour :
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
            <li>Vous identifier et vous authentifier sur l'application</li>
            <li>Traiter vos signalements de lampadaires défectueux</li>
            <li>Vous notifier du traitement de vos signalements</li>
            <li>Améliorer le service de gestion de l'éclairage public</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Stockage et sécurité</h2>
          <p className="text-muted-foreground leading-relaxed">
            Vos données sont stockées de manière sécurisée sur les serveurs de Supabase,
            protégées par chiffrement et des politiques de sécurité strictes (Row Level Security).
            Nous ne vendons ni ne partageons vos données avec des tiers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Vos droits</h2>
          <p className="text-muted-foreground leading-relaxed">
            Vous disposez des droits suivants concernant vos données :
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
            <li>Droit d'accès à vos données personnelles</li>
            <li>Droit de rectification de vos informations</li>
            <li>Droit à la suppression de votre compte et de vos données</li>
            <li>Droit de retirer votre consentement à tout moment</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Pour exercer ces droits, contactez-nous à l'adresse indiquée ci-dessous.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            LampaTrack utilise uniquement les cookies nécessaires à l'authentification
            et au maintien de votre session. Aucun cookie publicitaire ou de tracking n'est utilisé.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            Pour toute question concernant cette politique de confidentialité ou vos données,
            contactez-nous à : <a href="mailto:lampatrack@gmail.com" className="text-primary underline">lampatrack@gmail.com</a>
          </p>
        </section>
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} LampaTrack — Yeumbeul Nord, Sénégal
      </footer>
    </div>
  );
}
