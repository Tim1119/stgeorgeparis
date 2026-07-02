import React from 'react';
import PageHeader from '../components/PageHeader';

export default function CommunionAnglicane() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader title="La Communion Anglicane" image="https://commons.wikimedia.org/wiki/Special:FilePath/Eglise_anglicane_Saint-Georges_Paris.jpg?width=1600" />

      <div className="max-w-4xl mx-auto px-4 py-20 space-y-6 text-lg text-gray-600 leading-relaxed">
        <p className="italic text-gray-500">Renseignements en français</p>

        <p>
          C'est un ensemble d'Eglises nationales ou régionales, appelées aussi « Provinces », rassemblées autour
          du siège de Cantorbéry, en communion les unes avec les autres et au milieu desquelles l'Archevêque de
          Cantorbéry exerce un ministère de présidence.
        </p>
        <p>
          Actuellement les anglicans sont plus de 70 millions, répartis en trente-huit Eglises nationales ou
          régionales. Plusieurs sont nées au cours du XIXe siècle et même jusqu'à nos jours afin de faire droit
          aux diverses cultures et langues, en particulier en Amérique latine, en Afrique et en Asie.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">I — Organisation</h2>
        <p>
          <strong className="text-gray-900">L'Eglise d'Angleterre</strong> comprend les provinces de Cantorbéry et
          d'York. Elle est régie par le Synode Général qui comporte trois chambres : des évêques, du clergé, des
          laïcs. Il faut noter que l'Eglise d'Angleterre ne reçoit aucune aide financière de l'Etat, ni pour
          l'entretien de ses bâtiments ni pour le salaire de son personnel.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">II — Doctrine</h2>
        <p>
          Il n'y a pas de doctrine spécifiquement anglicane. L'Eglise anglicane s'attache à la foi catholique
          telle que l'expriment les Symboles (Credo) des Apôtres et de Nicée, les Conciles Œcuméniques et les
          Pères de l'Eglise qui précédèrent la rupture entre l'Orient et l'Occident.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">III — Liturgie et culte</h2>
        <p>
          Chaque Eglise-membre de la Communion anglicane suit sa propre liturgie dont la base fut longtemps celle
          du Prayer Book (dernière révision 1662). Il faut noter la place de plus en plus centrale donnée à
          l'Eucharistie, parfois célébrée quotidiennement en certaines paroisses.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">IV — Vie religieuse et monastique</h2>
        <p>
          La vie religieuse et monastique, supprimée au XVIe siècle, fut peu à peu restaurée au XIXe siècle. A
          l'exception des religieux qui font promesse de célibat, le clergé anglican, y compris les évêques, peut
          se marier même après avoir reçu l'ordination ou la consécration épiscopale.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 pt-4">V — Rôle œcuménique</h2>
        <p>
          Se voulant catholique et réformée, la Communion anglicane se trouve dans une position œcuménique
          privilégiée. Des relations de dialogue sont entretenues avec les grandes familles confessionnelles :
          Alliance Réformée Mondiale, Fédération Luthérienne Mondiale, avec l'Eglise orthodoxe et l'Eglise
          catholique.
        </p>

        <div className="bg-gray-50 p-8 rounded-2xl text-center space-y-2 mt-8">
          <p className="text-gray-600 text-base">
            Texte publié par le Comité Mixte Anglican-Catholique pour la France.
          </p>
          <p className="text-gray-900 font-medium">
            Eglise anglicane Saint-Georges, 7 rue Auguste-Vacquerie, 75116 Paris, France.
          </p>
        </div>
      </div>
    </div>
  );
}
