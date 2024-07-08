paypal.Buttons({




    createOrder: function(data, actions) {
        // Configuration de la transaction
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: 10.0
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        // Capture des fonds de la transaction
        return actions.order.capture().then(function(details) {
            // Affichage d'un message de succès à l'acheteur
            alert('Transaction effectuée par ' + details.payer.name.given_name);
        });
    }
}).render('#paypal-button-container');