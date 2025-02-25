Feature: Add contact

    Scenario: Add contact
        Given that I am on the "add-contact" page
        When I enter "Étienne" as prenom, "Gagnon" as nom, "111-111-1111" as telephone and "info@exemple.com" as email
        And I press "Ajouter le contact" button
        Then I should see "Le contact à été ajouté avec succès"
