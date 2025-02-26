Feature: Delete contact

    Scenario: Delete contact
        Given that user2 am on the "contact" page
        When user2 enter "1" as userId
        And user2 press "Supprimer le contact" button
        Then user2 should see "Le contact à été supprimé avec succès"
