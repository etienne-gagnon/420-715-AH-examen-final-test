Feature: Update contact

    Scenario: Update contact
        Given that I am on the "edit-contact" page
        When I enter "Étienne" as prenom, "Gagnon" as nom, "111-111-1111" as telephone, "info@exemple.com" as email and the userId "existe"
        And I press "Mettre à jour le contact" button
        Then I should see "Le contact à été mis à jour avec succès"
