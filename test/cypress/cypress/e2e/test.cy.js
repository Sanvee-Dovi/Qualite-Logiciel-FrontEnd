/// <reference types="cypress" />
beforeEach( () => {
  cy.viewport(1280, 720)
})

describe("Consulter une Liste de Voitures", () => {

  // 1. Assurer le bon affichage de la page d'accueil du site 
  it("Affiche la page d'accueil", () => {
    cy.visit("https://cours-qualite.groupe-esiea.fr/esieaFront/#");
    cy.title().should("equal", "Stock car");
  });

  // 2. Vérifier le bon affichage de la liste des voitures 
  it("Affiche la liste de voitures", () => {
    cy.visit("https://cours-qualite.groupe-esiea.fr/esieaFront/#");
    cy.get("#listeVoiture").should("be.visible");
  });
  
  // 3. Affichage des informations des voitures 
  it("Affiche les informations des voitures", () => {
    cy.visit("https://cours-qualite.groupe-esiea.fr/esieaFront/#");
    cy.get('#listeVoitureTable')
    .find('tbody tr:first')
    .find('td')
    .first()
    .should('have.text', 'toyota')
});


// 4. Recherche de voiture 
 /// <reference types="cypress" />
  describe("Test de recherche de voiture", () => {
   it("Effectuer une recherche de voiture", () => {
     cy.visit("https://cours-qualite.groupe-esiea.fr/esieaFront/#")
     //Remplir le champ recherche
      cy.get('#saisieRecherche').type('toyota');
     //Click sur le bouton pour la lancer la recherche de voitures
      cy.get('.rechercher').click()
      //Parcourir le tableau ou sont stockées les voitures
      cy.get('#listeVoitureTable')
          .find('tbody tr:last')
          .find('td')
          .first()
          .should('have.text', 'toyota')

    });
 });

// 5. Ajout d'une nouvelle voiture 
  describe("Ajout d'une nouvelle voiture", () => {
  it("Ajout d'une nouvelle voiture", () => {
    cy.visit("https://cours-qualite.groupe-esiea.fr/esieaFront/#"); 
    
    cy.get('.nouvelleVoiture').click()
    // Remplir le formulaire
    cy.get('#marque').type('Mercedes'); 
    cy.get('#modele').type('Classe GLE');
    cy.get('#finition').type('Merco'); 
    cy.get('#carburant').select('Essence');
    cy.get('#km').type('53600');
    cy.get('#annee').type('2015');
    cy.get('#prix').type('34O89');

    // Clic sur le bouton "Ajouter"
    cy.get("#nouvelleVoiture").click();

    // Vérifier que la voiture est ajoutée avec succés
    cy.get('#snackbar_ajout').should('contain', 'La voiture a été ajoutée avec succès');
  });
});
   
});
