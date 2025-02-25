Feature: Delete contact

    Scenario: Delete contact
        Given that I am on the "contact" page
        When I enter "" as userId
        And I press "Supprimer le contact" button
        Then I should see "Le contact à été supprimé avec succès"
