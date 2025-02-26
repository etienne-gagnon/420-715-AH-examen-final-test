Feature: Add contact

    Scenario: Add contact
        Given that user1 am on the "add-contact" page
        When user1 enter "Étienne" as prenom, "Gagnon" as nom, "111-111-1111" as telephone and "info@exemple.com" as email
        And user1 press "Ajouter le contact" button
        Then user1 should see "Le contact à été ajouté avec succès"
