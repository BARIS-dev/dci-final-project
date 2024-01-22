const Payment = () => {
  const processPayment = () => {
    fetch("http://localhost:8080/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: 1000, // amount in cents
        currency: "eur",
        source: "tok_visa", // replace with real token
        description: "Example charge",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Payment processed successfully");
        } else {
          console.error("Error processing payment:", data.error);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <button onClick={processPayment}>Bezahlen</button>
    </div>
  );
};

export default Payment;
