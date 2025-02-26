Feature: Update contact

    Scenario: Update contact
        Given that user3 am on the "edit-contact" page
        When user3 enter "Étienne" as prenom, "Gagnon" as nom, "111-111-1111" as telephone, "info@exemple.com" as email and the userId "existe"
        And user3 press "Mettre à jour le contact" button
        Then user3 should see "Le contact à été mis à jour avec succès"
